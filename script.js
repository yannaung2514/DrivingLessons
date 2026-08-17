// ============================================================
// 日本の交通ルール 学習アプリ - script.js
// Flashcard study mode + practice quiz mode.
// Data comes from rulesdata.js (window.trafficRulesData).
// ============================================================

let allRules = (window.trafficRulesData || []).slice();
let order = [];        // current display order (indices into allRules)
let currentIndex = 0;  // position in `order`
let favorites = [];    // ids of favorites, persisted in localStorage

const FAV_KEY = 'trafficRulesFavorites';
const VIEWED_KEY = 'trafficRulesViewed';

// ---------------------------------------------------------------------
// DOM references
// ---------------------------------------------------------------------
const progressBar     = document.getElementById('progressBar');
const cardCounter     = document.getElementById('cardCounter');
const cardImage       = document.getElementById('cardImage');
const cardCategory    = document.getElementById('cardCategory');
const cardTitle       = document.getElementById('cardTitle');
const cardReading     = document.getElementById('cardReading');
const cardJp          = document.getElementById('cardJp');
const cardMyanmar     = document.getElementById('cardMyanmar');
const favBtn          = document.getElementById('favBtn');
const favChips        = document.getElementById('favChips');
const favCount        = document.getElementById('favCount');
const studySection    = document.getElementById('studySection');
const wordSection     = document.getElementById('wordSection');
const quizSection     = document.getElementById('quizSection');
const studyTab        = document.getElementById('studyTab');
const wordTab         = document.getElementById('wordTab');
const quizTab         = document.getElementById('quizTab');
const wordCount       = document.getElementById('wordCount');
const wordGrid        = document.getElementById('wordGrid');
const categoryNote    = document.getElementById('categoryNote');
const hideMeaningBtn  = document.getElementById('hideMeaningBtn');

// ---------------------------------------------------------------------
// localStorage helpers
// ---------------------------------------------------------------------
function loadFavorites() {
    try {
        const stored = localStorage.getItem(FAV_KEY);
        favorites = stored ? JSON.parse(stored) : [];
    } catch (e) {
        favorites = [];
    }
    if (!Array.isArray(favorites)) favorites = [];
}

function saveFavorites() {
    try {
        localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
    } catch (e) { /* ignore */ }
}

function markViewed(id) {
    try {
        const arr = JSON.parse(localStorage.getItem(VIEWED_KEY) || '[]');
        if (!arr.includes(id)) {
            arr.push(id);
            localStorage.setItem(VIEWED_KEY, JSON.stringify(arr));
        }
    } catch (e) { /* ignore */ }
}

function viewedSet() {
    try {
        return new Set(JSON.parse(localStorage.getItem(VIEWED_KEY) || '[]'));
    } catch (e) {
        return new Set();
    }
}

// ---------------------------------------------------------------------
// Infer rules if window global missing (defensive fallback).
// ---------------------------------------------------------------------
if (!allRules.length && typeof trafficRulesData !== 'undefined') {
    allRules = trafficRulesData.slice();
}

// ---- Vocabulary (words) data & state ----
let allWords = [];  // Will be loaded from database or fallback to trafficwords.js
let wordOrder = [];
let hideMeaning = false;
let useDatabase = false;  // Flag to track if we're using database
let activeCategory = 'all';    // filter category
const WORD_HIDE_KEY = 'trafficWordsHideMean';

if (!allWords.length && typeof trafficWordData !== 'undefined') {
    allWords = trafficWordData.slice();
}
wordOrder = allWords.map((_, i) => i);
hideMeaning = localStorage.getItem(WORD_HIDE_KEY) === '1';

// ---- Word photos (uploaded by user, stored as base64 in localStorage) ----
let wordPhotos = {};                 // { word: dataUrl }
let photoTargetWord = null;          // which word the file input applies to
const PHOTO_KEY = 'trafficWordPhotos';

function loadPhotos() {
    try {
        const raw = localStorage.getItem(PHOTO_KEY);
        wordPhotos = raw ? JSON.parse(raw) : {};
    } catch (e) {
        wordPhotos = {};
    }
    if (!wordPhotos || typeof wordPhotos !== 'object') wordPhotos = {};
}

function savePhotos() {
    try {
        localStorage.setItem(PHOTO_KEY, JSON.stringify(wordPhotos));
    } catch (e) {
        console.warn('Could not save photos (storage full?):', e.message);
        alert('画像�E保存に失敗しました。�E真が大きすぎるか、容量がぁE�E��E�ぱぁE�E��E�す、EnPhoto storage failed.');
    }
}

function pickPhoto(word) {
    photoTargetWord = word;
    const inp = document.getElementById('wordPhotoInput');
    if (inp) { inp.value = ''; inp.click(); }
}

async function togglePhoto(word) {
    if (wordPhotos[word]) {
        if (confirm('こ�E単語�E画像を削除しますか�E�E�E�\nRemove this photo?')) {
            await deletePhoto(word);
            renderWords();
        }
    } else {
        pickPhoto(word);
    }
}

// Downscale an image (data URL) to a small JPEG so localStorage stays usable.
function downscaleImage(dataUrl, maxSize, cb) {
    const img = new Image();
    img.onload = () => {
        let { width, height } = img;
        const scale = Math.min(1, maxSize / Math.max(width, height));
        width = Math.max(1, Math.round(width * scale));
        height = Math.max(1, Math.round(height * scale));
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        try {
            cb(canvas.toDataURL('image/jpeg', 0.72));
        } catch (e) {
            cb(dataUrl); // fallback to original
        }
    };
    img.onerror = () => cb(dataUrl);
    img.src = dataUrl;
}

// ---------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------
function renderCurrent() {
    if (allRules.length === 0) return;
    const rule = allRules[order[currentIndex]];
    const viewed = viewedSet();

    cardCounter.textContent = `${currentIndex + 1} / ${allRules.length}`;
    cardImage.innerHTML = rule.svg;
    cardCategory.textContent = rule.category;
    cardTitle.textContent = rule.title;
    cardReading.textContent = rule.reading;
    cardJp.textContent = rule.jp;
    cardMyanmar.textContent = rule.myanmar;

    // Favorite button state
    favBtn.classList.toggle('active', favorites.includes(rule.id));
    favBtn.textContent = favorites.includes(rule.id) ? '☁' : '☁';

    // Progress: percentage of rules marked viewed
    const pct = Math.round((viewed.size / allRules.length) * 100);
    progressBar.style.width = `${pct}%`;

    markViewed(rule.id);
    renderFavorites();
}

function renderFavorites() {
    favCount.textContent = favorites.length;
    if (favorites.length === 0) {
        favChips.innerHTML = '<span class="empty-note">まだお気に入り�Eありません。カード�E ☁Eを押して追加できます、E/span>';
        return;
    }
    favChips.innerHTML = '';
    favorites.forEach(id => {
        const rule = allRules.find(r => r.id === id);
        if (!rule) return;
        const chip = document.createElement('button');
        chip.className = 'fav-chip';
        chip.textContent = rule.title;
        chip.onclick = () => {
            const target = allRules.indexOf(rule);
            order = allRules.map((_, i) => i);   // reset to original order
            currentIndex = target;
            showMode('study');
            renderCurrent();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        favChips.appendChild(chip);
    });
}

// ---------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------
function nextRule() {
    if (allRules.length === 0) return;
    currentIndex = (currentIndex + 1) % allRules.length;
    renderCurrent();
}

function prevRule() {
    if (allRules.length === 0) return;
    currentIndex = (currentIndex - 1 + allRules.length) % allRules.length;
    renderCurrent();
}

function shuffleRules() {
    for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
    }
    currentIndex = 0;
    renderCurrent();
}

function toggleFavorite() {
    const rule = allRules[order[currentIndex]];
    const i = favorites.indexOf(rule.id);
    if (i >= 0) {
        favorites.splice(i, 1);
    } else {
        favorites.push(rule.id);
    }
    saveFavorites();
    renderCurrent();
}

function clearFavorites() {
    if (!confirm('お気に入りを全部消しますか')) return;
    favorites = [];
    saveFavorites();
    renderCurrent();
}

// ---------------------------------------------------------------------
// Mode switching
// ---------------------------------------------------------------------
function showMode(mode) {
    const isStudy = mode === 'study';
    const isWords = mode === 'words';
    const isQuiz = mode === 'quiz';
    studySection.style.display = isStudy ? 'block' : 'none';
    wordSection.style.display = isWords ? 'block' : 'none';
    quizSection.style.display = isQuiz ? 'block' : 'none';
    studyTab.classList.toggle('active', isStudy);
    wordTab.classList.toggle('active', isWords);
    quizTab.classList.toggle('active', isQuiz);
    if (isWords) renderWords();
    if (isQuiz) startQuiz();
}

// ---------------------------------------------------------------------
// Vocabulary (words) rendering
// ---------------------------------------------------------------------
function renderWords() {
    wordCount.textContent = `${allWords.length} 言葉`;
    hideMeaningBtn.textContent = hideMeaning ? '🙉 意味を見る' : '🙈 意味を隠す';
    hideMeaningBtn.classList.toggle('active', hideMeaning);

    // Category filter chips
    const cats = ['all', ...new Set(allWords.map(w => w.category))];
    categoryNote.innerHTML = '';
    cats.forEach(cat => {
        const chip = document.createElement('button');
        chip.className = 'cat-chip' + (activeCategory === cat ? ' active' : '');
        chip.textContent = cat === 'all' ? 'すべて' : cat;
        chip.onclick = () => {
            activeCategory = cat;
            wordOrder = shuffle(allWords.map((_, i) => i));
            renderWords();
        };
        categoryNote.appendChild(chip);
    });

    wordGrid.innerHTML = '';
    wordOrder.forEach(idx => {
        const w = allWords[idx];
        if (activeCategory !== 'all' && w.category !== activeCategory) return;
        const card = document.createElement('div');
        card.className = 'word-card';
        card.dataset.idx = idx;
        card.dataset.cat = w.category;
        // Staggered entrance animation (cap total delay so it stays snappy)
        card.style.animationDelay = `${Math.min((wordGrid.children.length % 30) * 0.025, 0.7)}s`;

        const reading = document.createElement('div');
        reading.className = 'word-reading';
        reading.textContent = w.reading;

        const word = document.createElement('div');
        word.className = 'word-char';
        word.textContent = w.word;

        // Photo upload / remove button (top-right of card)
        const photoBtn = document.createElement('button');
        photoBtn.className = 'word-photo-btn' + (wordPhotos[w.word] ? ' has-photo' : '');
        photoBtn.textContent = '📷';
        photoBtn.title = wordPhotos[w.word]
            ? '画像を削除 (click to remove)'
            : '画像を追加 (add a photo)';
        photoBtn.onclick = (e) => { e.stopPropagation(); togglePhoto(w.word); };

        // Small thumbnail if a photo already exists for this word
        let thumb = null;
        if (wordPhotos[w.word]) {
            thumb = document.createElement('img');
            thumb.className = 'word-thumb';
            thumb.src = wordPhotos[w.word];
            thumb.alt = w.word;
        }

        // Meaning area wrapped so a hover tooltip can show the uploaded photo
        const meaningWrap = document.createElement('div');
        meaningWrap.className = 'word-meaning-wrap';
        
        // Add click handler to open photo modal if photo exists
        if (wordPhotos[w.id]) {
            meaningWrap.classList.add('has-photo');
            meaningWrap.addEventListener('click', () => {
                openPhotoModal(w.id, w.word);
            });
        }

        const meaning = document.createElement('div');
        meaning.className = 'word-meaning';
        meaning.textContent = hideMeaning ? '�E�E�E�　(意味)' : (w.myanmar || w.meaning);
        // Click a card to reveal/toggle its Burmese meaning
        card.onclick = () => {
            if (!hideMeaning) return;
            meaning.textContent = w.myanmar || w.meaning;
            card.classList.add('revealed');
        };
        meaningWrap.appendChild(meaning);

        // Hover photo (shown above the meaning when hovering)
        if (wordPhotos[w.word]) {
            const hover = document.createElement('div');
            hover.className = 'word-photo';
            const hoverImg = document.createElement('img');
            hoverImg.src = wordPhotos[w.word];
            hoverImg.alt = w.word;
            hover.appendChild(hoverImg);
            meaningWrap.appendChild(hover);
        }

        const cat = document.createElement('div');
        cat.className = 'word-cat';
        cat.textContent = w.category;

        if (thumb) card.appendChild(thumb);
        card.appendChild(photoBtn);
        card.appendChild(cat);
        card.appendChild(reading);
        card.appendChild(word);
        card.appendChild(meaningWrap);
        
        // Add edit/delete buttons
        const actions = document.createElement('div');
        actions.className = 'word-actions';
        
        const editBtn = document.createElement('button');
        editBtn.className = 'word-action-btn edit';
        editBtn.textContent = '✏編集';
        editBtn.onclick = () => openEditWordModal(idx);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'word-action-btn delete';
        deleteBtn.textContent = '🗑削除';
        deleteBtn.onclick = () => deleteWord(idx);
        
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);
        card.appendChild(actions);
        
        wordGrid.appendChild(card);
    });
}

function toggleHideMeaning() {
    hideMeaning = !hideMeaning;
    try { localStorage.setItem(WORD_HIDE_KEY, hideMeaning ? '1' : '0'); } catch (e) { /* ignore */ }
    renderWords();
}

function shuffleWords() {
    wordOrder = shuffle(allWords.map((_, i) => i));
    renderWords();
}
// ---------------------------------------------------------------------
// Quiz (practice test)
// ---------------------------------------------------------------------
let quizQuestions = [];
let quizCurrent = 0;
let quizScore = 0;
let quizAnswered = false;

function startQuiz() {
    const QUIZ_SIZE = 10;
    const pool = allRules.map((rule, idx) => {
        const others = pickDistinctTitles(idx, 3);
        const options = shuffle([rule.title, ...others]);
        return { rule, options };
    });
    quizQuestions = shuffle(pool).slice(0, Math.min(QUIZ_SIZE, pool.length));
    quizCurrent = 0;
    quizScore = 0;
    quizAnswered = false;
    renderQuizQuestion();
}

function pickDistinctTitles(correctIdx, count) {
    const others = [];
    const used = new Set([allRules[correctIdx].title]);
    let tries = 0;
    while (others.length < count && tries < 600) {
        tries++;
        const r = allRules[Math.floor(Math.random() * allRules.length)];
        if (!used.has(r.title)) {
            used.add(r.title);
            others.push(r.title);
        }
    }
    return others;
}

function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function renderQuizQuestion() {
    if (quizCurrent >= quizQuestions.length) {
        renderQuizResults();
        return;
    }
    quizAnswered = false;
    const q = quizQuestions[quizCurrent];
    document.getElementById('quizProgress').textContent =
        `問顁E${quizCurrent + 1} / ${quizQuestions.length}`;
    document.getElementById('quizPrompt').innerHTML =
        `<div class="quiz-rule-label">こ�E絵は何�Eルール�E�E�E�Ebr><small>こ�E交通ルールを選んでください、E/small></div>` +
        `<div style="margin-top:12px">${q.rule.svg}</div>`;

    const optGrid = document.getElementById('quizOptions');
    const resultBox = document.getElementById('quizResult');
    const nextBtn = document.getElementById('nextQuizBtn');
    const restartBtn = document.getElementById('restartQuizBtn');
    resultBox.style.display = 'none';
    nextBtn.style.display = 'none';
    restartBtn.style.display = 'none';

    optGrid.innerHTML = '';
    q.options.forEach(opt => {
        const b = document.createElement('button');
        b.className = 'option-btn';
        b.textContent = opt;
        b.onclick = () => answerQuiz(b, opt);
        optGrid.appendChild(b);
    });
}

function answerQuiz(btn, chosen) {
    if (quizAnswered) return;
    quizAnswered = true;
    const q = quizQuestions[quizCurrent];
    const correctTitle = q.rule.title;
    const buttons = document.querySelectorAll('#quizOptions .option-btn');
    const answeredCorrect = chosen === correctTitle;
    if (answeredCorrect) quizScore++;

    buttons.forEach(b => {
        b.disabled = true;
        if (b.textContent === correctTitle) b.classList.add('correct');
        else if (b.textContent === chosen) b.classList.add('wrong');
    });

    const resultBox = document.getElementById('quizResult');
    resultBox.style.display = 'block';
    resultBox.innerHTML =
        (answeredCorrect ? '✁E正解! せいかい!' : `❁E不正解! ふせいかい�E�E�E�正解: ${correctTitle}�E�E�E�`) +
        `<br>${correctTitle}�E�E�E�E{q.rule.jp}` +
        `<br><span style="opacity:.85">${q.rule.myanmar}</span>`;

    const nextBtn = document.getElementById('nextQuizBtn');
    const restartBtn = document.getElementById('restartQuizBtn');
    if (quizCurrent < quizQuestions.length - 1) {
        nextBtn.style.display = 'block';
    } else {
        restartBtn.style.display = 'block';
    }
}

function nextQuizQuestion() {
    quizCurrent++;
    renderQuizQuestion();
}

function renderQuizResults() {
    const total = quizQuestions.length;
    const pct = total ? Math.round((quizScore / total) * 100) : 0;
    const passed = pct >= 90;
    document.getElementById('quizProgress').textContent = '結果 結果';
    document.getElementById('quizPrompt').innerHTML = '';
    document.getElementById('quizOptions').innerHTML = '';
    const resultBox = document.getElementById('quizResult');
    resultBox.style.display = 'block';
    resultBox.innerHTML =
        `<div style="font-size:1.6rem;font-weight:bold;text-align:center;">${quizScore} / ${total} 点 (${pct}%)</div>` +
        (total === 0
            ? '<div style="text-align:center;margin-top:8px">ルールがありません、E/div>'
            : (passed
                ? '<div style="text-align:center;margin-top:8px">🎉 合格�E�E�E�よくできました�E�E�E�また練習を続けましょぁE�E��E�E/div>'
                : '<div style="text-align:center;margin-top:8px">�E�E 合格には 90% 以上が目安です。あと少し�E�E�E�また挑戦しましょぁE�E��E�E/div>'));
    document.getElementById('restartQuizBtn').style.display = 'block';
    document.getElementById('nextQuizBtn').style.display = 'none';
}

// ---------------------------------------------------------------------
// Keyboard navigation
// ---------------------------------------------------------------------
document.addEventListener('keydown', (e) => {
    if (studySection.style.display === 'none') return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        nextRule();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevRule();
    }
});

// ---------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------
async function init() {
    loadFavorites();
    loadPhotos();
    order = allRules.map((_, i) => i);
    currentIndex = 0;
    renderCurrent();

    // Load words from database if Supabase is configured
    await loadWords();

    // Handle photo upload from the hidden file input
    const inp = document.getElementById('wordPhotoInput');
    if (inp) {
        inp.addEventListener('change', async () => {
            const file = inp.files && inp.files[0];
            if (!file || !photoTargetWord) return;
            const reader = new FileReader();
            reader.onload = async () => {
                downscaleImage(reader.result, 360, async (dataUrl) => {
                    // Use Supabase or localStorage
                    await savePhoto(photoTargetWord, dataUrl);
                    renderWords();
                });
            };
            reader.readAsDataURL(file);
        });
    }

    // Photo modal click handlers
    const modal = document.getElementById('photoModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closePhotoModal();
            }
        });
    }

    // ESC key closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePhotoModal();
        }
    });
}

// ---------------------------------------------------------------------
// Load words from database or fallback to local data
// ---------------------------------------------------------------------
async function loadWords() {
    if (window.supabaseConfigured) {
        // Wait for Supabase client to initialize
        let attempts = 0;
        while (!supabaseClient && attempts < 50) {
            await new Promise(resolve => setTimeout(resolve, 100));
            attempts++;
        }

        if (supabaseClient) {
            const dbWords = await fetchWordsFromDatabase();
            
            if (dbWords && dbWords.length > 0) {
                // Use database words
                allWords = dbWords.map(w => ({
                    id: w.id,
                    word: w.word,
                    reading: w.reading,
                    myanmar: w.myanmar,
                    category: w.category
                }));
                useDatabase = true;
                console.log(`✁EUsing ${allWords.length} words from database`);
            } else {
                // Database is empty, seed it with local data
                console.log('Database empty, seeding with local data...');
                const localWords = window.trafficWordData || [];
                const seeded = await seedWordsToDatabase(localWords);
                
                if (seeded > 0) {
                    // Reload from database
                    const reloaded = await fetchWordsFromDatabase();
                    if (reloaded) {
                        allWords = reloaded.map(w => ({
                            id: w.id,
                            word: w.word,
                            reading: w.reading,
                            myanmar: w.myanmar,
                            category: w.category
                        }));
                        useDatabase = true;
                    }
                }
            }
        }
    }

    // Fallback to local data if database not available
    if (allWords.length === 0) {
        allWords = (window.trafficWordData || []).slice();
        useDatabase = false;
        console.log(`Using ${allWords.length} words from local data`);
    }

    wordOrder = allWords.map((_, i) => i);
    renderWords();
}

// ---------------------------------------------------------------------
// Photo modal functions
// ---------------------------------------------------------------------
function openPhotoModal(wordId, wordTitle) {
    const photo = wordPhotos[wordId];
    if (!photo) return;
    
    const modal = document.getElementById('photoModal');
    const img = document.getElementById('photoModalImg');
    const caption = document.getElementById('photoModalCaption');
    
    if (modal && img && caption) {
        img.src = photo;
        caption.textContent = wordTitle;
        modal.classList.add('active');
    }
}

function closePhotoModal() {
    const modal = document.getElementById('photoModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// ---------------------------------------------------------------------
// Word management modal functions
// ---------------------------------------------------------------------
function openAddWordModal() {
    const modal = document.getElementById('wordModal');
    const title = document.getElementById('wordModalTitle');
    const form = document.getElementById('wordForm');
    
    if (modal && title && form) {
        form.reset();
        document.getElementById('wordId').value = '';
        title.textContent = '単語を追加';
        modal.classList.add('active');
    }
}

function openEditWordModal(wordIndex) {
    const word = allWords[wordIndex];
    if (!word) return;
    
    const modal = document.getElementById('wordModal');
    const title = document.getElementById('wordModalTitle');
    
    if (modal && title) {
        document.getElementById('wordId').value = wordIndex;
        document.getElementById('wordKanji').value = word.word;
        document.getElementById('wordReading').value = word.reading;
        document.getElementById('wordMyanmar').value = word.myanmar;
        document.getElementById('wordCategory').value = word.category;
        title.textContent = '単語を編集';
        modal.classList.add('active');
    }
}

function closeWordModal() {
    const modal = document.getElementById('wordModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

async function saveWord(event) {
    event.preventDefault();
    
    const wordId = document.getElementById('wordId').value;
    const wordData = {
        word: document.getElementById('wordKanji').value,
        reading: document.getElementById('wordReading').value,
        myanmar: document.getElementById('wordMyanmar').value,
        category: document.getElementById('wordCategory').value
    };
    
    if (useDatabase && window.supabaseConfigured) {
        if (wordId) {
            // Edit existing word
            const success = await updateWordInDatabase(wordId, wordData);
            if (success) {
                alert('単語を更新しました');
                await loadWords();
            } else {
                alert('更新に失敗しました');
            }
        } else {
            // Add new word
            const success = await insertWordToDatabase(wordData);
            if (success) {
                alert('単語を追加しました');
                await loadWords();
            } else {
                alert('追加に失敗しました');
            }
        }
    } else {
        // Local storage fallback
        if (wordId) {
            // Edit
            allWords[wordId] = { ...allWords[wordId], ...wordData };
            alert('単語を更新しましたローカル');
        } else {
            // Add
            allWords.push({
                id: `local_${Date.now()}`,
                ...wordData
            });
            alert('単語を追加しましたローカル');
        }
        wordOrder = allWords.map((_, i) => i);
        renderWords();
    }
    
    closeWordModal();
}

async function deleteWord(wordIndex) {
    const word = allWords[wordIndex];
    if (!word) return;
    
    if (!confirm(`、E{word.word}」を削除しますか�E�E�E�`)) {
        return;
    }
    
    if (useDatabase && window.supabaseConfigured) {
        const success = await deleteWordFromDatabase(word.id);
        if (success) {
            alert('削除しました');
            await loadWords();
        } else {
            alert('削除に失敗しました');
        }
    } else {
        // Local storage fallback
        allWords.splice(wordIndex, 1);
        wordOrder = allWords.map((_, i) => i);
        renderWords();
        alert('削除しましたローカル');
    }
}

init();