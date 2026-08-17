// ============================================================
// 譌･譛ｬ縺ｮ莠､騾壹Ν繝ｼ繝ｫ 蟄ｦ鄙偵い繝励Μ - script.js
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
        alert('逕ｻ蜒上・菫晏ｭ倥↓螟ｱ謨励＠縺ｾ縺励◆縲ょ・逵溘′螟ｧ縺阪☆縺弱ｋ縺九∝ｮｹ驥上′縺・▲縺ｱ縺・〒縺吶・nPhoto storage failed.');
    }
}

function pickPhoto(word) {
    photoTargetWord = word;
    const inp = document.getElementById('wordPhotoInput');
    if (inp) { inp.value = ''; inp.click(); }
}

async function togglePhoto(word) {
    if (wordPhotos[word]) {
        if (confirm('縺薙・蜊倩ｪ槭・逕ｻ蜒上ｒ蜑企勁縺励∪縺吶°・歃nRemove this photo?')) {
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
    favBtn.textContent = favorites.includes(rule.id) ? '笘・ : '笘・;

    // Progress: percentage of rules marked viewed
    const pct = Math.round((viewed.size / allRules.length) * 100);
    progressBar.style.width = `${pct}%`;

    markViewed(rule.id);
    renderFavorites();
}

function renderFavorites() {
    favCount.textContent = favorites.length;
    if (favorites.length === 0) {
        favChips.innerHTML = '<span class="empty-note">縺ｾ縺縺頑ｰ励↓蜈･繧翫・縺ゅｊ縺ｾ縺帙ｓ縲ゅき繝ｼ繝峨・ 笘・繧呈款縺励※霑ｽ蜉縺ｧ縺阪∪縺吶・/span>';
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
    if (!confirm('縺頑ｰ励↓蜈･繧翫ｒ蜈ｨ驛ｨ豸医＠縺ｾ縺吶°・・)) return;
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
    wordCount.textContent = `${allWords.length} 險闡荏;
    hideMeaningBtn.textContent = hideMeaning ? '刮 諢丞袖繧定ｦ九ｋ' : '刪 諢丞袖繧帝國縺・;
    hideMeaningBtn.classList.toggle('active', hideMeaning);

    // Category filter chips
    const cats = ['all', ...new Set(allWords.map(w => w.category))];
    categoryNote.innerHTML = '';
    cats.forEach(cat => {
        const chip = document.createElement('button');
        chip.className = 'cat-chip' + (activeCategory === cat ? ' active' : '');
        chip.textContent = cat === 'all' ? '縺吶∋縺ｦ' : cat;
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
        photoBtn.textContent = '胴';
        photoBtn.title = wordPhotos[w.word]
            ? '逕ｻ蜒上ｒ蜑企勁 (click to remove)'
            : '逕ｻ蜒上ｒ霑ｽ蜉 (add a photo)';
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
        meaning.textContent = hideMeaning ? '・溘(諢丞袖)' : (w.myanmar || w.meaning);
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
        editBtn.textContent = '笨擾ｸ・邱ｨ髮・;
        editBtn.onclick = () => openEditWordModal(idx);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'word-action-btn delete';
        deleteBtn.textContent = '卵・・蜑企勁';
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
        `蝠城｡・${quizCurrent + 1} / ${quizQuestions.length}`;
    document.getElementById('quizPrompt').innerHTML =
        `<div class="quiz-rule-label">縺薙・邨ｵ縺ｯ菴輔・繝ｫ繝ｼ繝ｫ・・br><small>縺薙・莠､騾壹Ν繝ｼ繝ｫ繧帝∈繧薙〒縺上□縺輔＞縲・/small></div>` +
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
        (answeredCorrect ? '笨・豁｣隗｣! 縺帙＞縺九＞!' : `笶・荳肴ｭ｣隗｣! 縺ｵ縺帙＞縺九＞・域ｭ｣隗｣: ${correctTitle}・荏) +
        `<br>${correctTitle}・・{q.rule.jp}` +
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
    document.getElementById('quizProgress').textContent = '邨先棡 邨先棡';
    document.getElementById('quizPrompt').innerHTML = '';
    document.getElementById('quizOptions').innerHTML = '';
    const resultBox = document.getElementById('quizResult');
    resultBox.style.display = 'block';
    resultBox.innerHTML =
        `<div style="font-size:1.6rem;font-weight:bold;text-align:center;">${quizScore} / ${total} 轤ｹ (${pct}%)</div>` +
        (total === 0
            ? '<div style="text-align:center;margin-top:8px">繝ｫ繝ｼ繝ｫ縺後≠繧翫∪縺帙ｓ縲・/div>'
            : (passed
                ? '<div style="text-align:center;margin-top:8px">脂 蜷域ｼ・√ｈ縺上〒縺阪∪縺励◆・√∪縺溽ｷｴ鄙偵ｒ邯壹￠縺ｾ縺励ｇ縺・・/div>'
                : '<div style="text-align:center;margin-top:8px">・ 蜷域ｼ縺ｫ縺ｯ 90% 莉･荳翫′逶ｮ螳峨〒縺吶ゅ≠縺ｨ蟆代＠・√∪縺滓倦謌ｦ縺励∪縺励ｇ縺・・/div>'));
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
                console.log(`笨・Using ${allWords.length} words from database`);
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
        title.textContent = '蜊倩ｪ槭ｒ霑ｽ蜉';
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
        title.textContent = '蜊倩ｪ槭ｒ邱ｨ髮・;
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
                alert('蜊倩ｪ槭ｒ譖ｴ譁ｰ縺励∪縺励◆');
                await loadWords();
            } else {
                alert('譖ｴ譁ｰ縺ｫ螟ｱ謨励＠縺ｾ縺励◆');
            }
        } else {
            // Add new word
            const success = await insertWordToDatabase(wordData);
            if (success) {
                alert('蜊倩ｪ槭ｒ霑ｽ蜉縺励∪縺励◆');
                await loadWords();
            } else {
                alert('霑ｽ蜉縺ｫ螟ｱ謨励＠縺ｾ縺励◆');
            }
        }
    } else {
        // Local storage fallback
        if (wordId) {
            // Edit
            allWords[wordId] = { ...allWords[wordId], ...wordData };
            alert('蜊倩ｪ槭ｒ譖ｴ譁ｰ縺励∪縺励◆・医Ο繝ｼ繧ｫ繝ｫ・・);
        } else {
            // Add
            allWords.push({
                id: `local_${Date.now()}`,
                ...wordData
            });
            alert('蜊倩ｪ槭ｒ霑ｽ蜉縺励∪縺励◆・医Ο繝ｼ繧ｫ繝ｫ・・);
        }
        wordOrder = allWords.map((_, i) => i);
        renderWords();
    }
    
    closeWordModal();
}

async function deleteWord(wordIndex) {
    const word = allWords[wordIndex];
    if (!word) return;
    
    if (!confirm(`縲・{word.word}縲阪ｒ蜑企勁縺励∪縺吶°・歔)) {
        return;
    }
    
    if (useDatabase && window.supabaseConfigured) {
        const success = await deleteWordFromDatabase(word.id);
        if (success) {
            alert('蜑企勁縺励∪縺励◆');
            await loadWords();
        } else {
            alert('蜑企勁縺ｫ螟ｱ謨励＠縺ｾ縺励◆');
        }
    } else {
        // Local storage fallback
        allWords.splice(wordIndex, 1);
        wordOrder = allWords.map((_, i) => i);
        renderWords();
        alert('蜑企勁縺励∪縺励◆・医Ο繝ｼ繧ｫ繝ｫ・・);
    }
}

init();