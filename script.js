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

// ---- Rule photos (user-uploaded, stored in localStorage keyed by rule id) ----
const RULE_PHOTO_KEY = 'trafficRulePhotos';
let rulePhotos = {};
function loadRulePhotos() {
    try {
        const raw = localStorage.getItem(RULE_PHOTO_KEY);
        rulePhotos = raw ? JSON.parse(raw) : {};
    } catch (e) { rulePhotos = {}; }
    if (!rulePhotos || typeof rulePhotos !== 'object') rulePhotos = {};
}
function saveRulePhotos() {
    try { localStorage.setItem(RULE_PHOTO_KEY, JSON.stringify(rulePhotos)); } catch (e) { /* ignore */ }
}

// ---- Exam question photos (pictures inside 仮免試験 questions) ----
// Keyed by '<setId>-<questionNumber>' e.g. 'R1-9'. Uploaded to Supabase
// Storage (exam-photos/) with a localStorage fallback, exactly like the
// rule photos above.
const EXAM_PHOTO_KEY = 'examQuestionPhotos';
let examPhotos = {};
let examPhotoTarget = -1;   // question index the hidden file input is for
function loadExamPhotos() {
    try {
        const raw = localStorage.getItem(EXAM_PHOTO_KEY);
        examPhotos = raw ? JSON.parse(raw) : {};
    } catch (e) { examPhotos = {}; }
    if (!examPhotos || typeof examPhotos !== 'object') examPhotos = {};
}
function saveExamPhotos() {
    try { localStorage.setItem(EXAM_PHOTO_KEY, JSON.stringify(examPhotos)); } catch (e) { /* ignore */ }
}
// Stable storage id for one question's picture: '<setId>-<1-based number>'
function examPhotoId(setId, index) {
    return setId + '-' + (index + 1);
}
function pickExamPhoto(index) {
    const inp = document.getElementById('examPhotoInput');
    if (!inp) return;
    examPhotoTarget = index;
    inp.value = '';
    inp.click();
}
async function removeExamPhoto(index) {
    const set = examSets[examSetIndex];
    if (!set) return;
    const id = examPhotoId(set.id, index);
    if (!examPhotos[id]) return;
    if (!confirm('問' + (index + 1) + ' の画像を削除しますか？')) return;
    if (window.supabaseConfigured && supabaseClient && String(examPhotos[id]).startsWith('http')) {
        await deleteExamPhotoFromSupabase(id);
    }
    delete examPhotos[id];
    saveExamPhotos();
    renderExamQuestions();   // answers are restored from examAnswers by the render
}
function currentRule() {
    return allRules[order[currentIndex]];
}
function pickRulePhoto() {
    const inp = document.getElementById('rulePhotoInput');
    if (!inp) return;
    inp.value = '';
    inp.click();
}
function removeRulePhoto() {
    const rule = currentRule();
    if (!rule) return;
    if (rulePhotos[rule.id]) {
        // Delete from Supabase Storage
        if (window.supabaseConfigured && supabaseClient && rulePhotos[rule.id].startsWith('http')) {
            deleteRulePhotoFromSupabase(rule.id);
        }
        delete rulePhotos[rule.id];
        saveRulePhotos();
        renderCurrent();
    }
}
function renderRulePhotoUI() {
    const rule = currentRule();
    const rmBtn = document.getElementById('rulePhotoRemoveBtn');
    const img = document.getElementById('rulePhotoImage');
    if (!rule) return;
    if (rmBtn) rmBtn.style.display = rulePhotos[rule.id] ? 'inline-block' : 'none';
    if (img) {
        if (rulePhotos[rule.id]) {
            img.src = rulePhotos[rule.id];
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    }
}

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
const examTab         = document.getElementById('examTab');
const examSection     = document.getElementById('examSection');
const wordCount       = document.getElementById('wordCount');
const wordGrid        = document.getElementById('wordGrid');
const categoryNote    = document.getElementById('categoryNote');
const hideMeaningBtn  = document.getElementById('hideMeaningBtn');
const cardTab         = document.getElementById('cardTab');
const cardSection     = document.getElementById('cardSection');

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
let searchTerm = '';           // search filter (漢字・ひらがな・myanmar)
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
        alert('画像の保存に失敗しました。画像が大きすぎるか、容量が足りません。\nPhoto storage failed.');
    }
}

function pickPhoto(word) {
    photoTargetWord = word;
    const inp = document.getElementById('wordPhotoInput');
    if (inp) { inp.value = ''; inp.click(); }
}

async function togglePhoto(word) {
    if (wordPhotos[word]) {
        if (confirm('この単語の画像を削除しますか？\nRemove this photo?')) {
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
    cardImage.innerHTML = '';
    const photoImg = document.createElement('img');
    photoImg.id = 'rulePhotoImage';
    photoImg.alt = rule.title;
    photoImg.style.display = 'none';
    const svgWrap = document.createElement('div');
    svgWrap.id = 'ruleSvgWrap';
    svgWrap.innerHTML = rule.svg;
    cardImage.appendChild(photoImg);
    cardImage.appendChild(svgWrap);
    // Use uploaded photo if present, else the built-in SVG illustration
    if (rulePhotos[rule.id]) {
        photoImg.src = rulePhotos[rule.id];
        photoImg.style.display = 'block';
        svgWrap.style.display = 'none';
    } else {
        photoImg.style.display = 'none';
        svgWrap.style.display = 'block';
    }
    renderRulePhotoUI();
    cardCategory.textContent = rule.category;
    cardTitle.textContent = rule.title;
    cardReading.textContent = rule.reading;
    cardJp.textContent = rule.jp;
    cardMyanmar.textContent = rule.myanmar;

    // Favorite button state
    favBtn.classList.toggle('active', favorites.includes(rule.id));
        favBtn.textContent = favorites.includes(rule.id) ? '★' : '☆';

    // Progress: percentage of rules marked viewed
    const pct = Math.round((viewed.size / allRules.length) * 100);
    progressBar.style.width = `${pct}%`;

    markViewed(rule.id);
    renderFavorites();
}

function renderFavorites() {
    // Favorites section removed - no-op
    if (!favCount || !favChips) return;
    if (favorites.length === 0) {
        favChips.innerHTML = '<span class="empty-note">まだお気に入りがありません。カードの ☆ を押して追加できます。</span>';
        return;
    }
    favChips.innerHTML = '';
    favorites.forEach(id => {
        const rule = allRules.find(r => r.id === id);
        if (!rule) return;
        const wrap = document.createElement('span');
        wrap.className = 'fav-chip-wrap';

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
        wrap.appendChild(chip);

        // Individual delete button
        const delBtn = document.createElement('button');
        delBtn.className = 'fav-chip-del';
        delBtn.textContent = '✕';
        delBtn.title = 'お気に入りから削除 (remove favorite)';
        delBtn.onclick = (e) => {
            e.stopPropagation();
            favorites = favorites.filter(f => f !== id);
            saveFavorites();
            renderFavorites();
        };
        wrap.appendChild(delBtn);

        favChips.appendChild(wrap);
    });
}

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
    const isCards = mode === 'cards';
    const isExam = mode === 'exam';
    studySection.style.display = isStudy ? 'block' : 'none';
    wordSection.style.display = isWords ? 'block' : 'none';
    quizSection.style.display = isQuiz ? 'block' : 'none';
    cardSection.style.display = isCards ? 'block' : 'none';
    examSection.style.display = isExam ? 'block' : 'none';
    studyTab.classList.toggle('active', isStudy);
    wordTab.classList.toggle('active', isWords);
    cardTab.classList.toggle('active', isCards);
    examTab.classList.toggle('active', isExam);
    if (isWords) renderWords();
    if (isQuiz) startQuiz();
    if (isCards) initCards();
    if (isExam) initExam();
}

// ---------------------------------------------------------------------
// Vocabulary (words) rendering
// ---------------------------------------------------------------------
function renderWords() {
    const total = allWords.filter(w => wordMatchesSearch(w)).length;
    wordCount.textContent = `${total} / ${allWords.length} 言葉`;
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
        if (!wordMatchesSearch(w)) return;
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
        photoBtn.className = 'word-photo-btn' + (wordPhotos[w.id] ? ' has-photo' : '');
        photoBtn.textContent = '📷';
        photoBtn.title = wordPhotos[w.id]
            ? '画像を削除 (click to remove)'
            : '画像を追加 (add a photo)';
        photoBtn.onclick = (e) => { e.stopPropagation(); togglePhoto(w.id); };

        // Small thumbnail (with hover photo tooltip) if a photo already exists
        let thumbWrap = null;
        if (wordPhotos[w.id]) {
            thumbWrap = document.createElement('span');
            thumbWrap.className = 'word-thumb-wrap';

            const thumb = document.createElement('img');
            thumb.className = 'word-thumb';
            thumb.src = wordPhotos[w.id];
            thumb.alt = w.word;
            thumbWrap.appendChild(thumb);

            const hover = document.createElement('div');
            hover.className = 'word-photo';
            const hoverImg = document.createElement('img');
            hoverImg.src = wordPhotos[w.id];
            hoverImg.alt = w.word;
            hover.appendChild(hoverImg);
            thumbWrap.appendChild(hover);
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

        const cat = document.createElement('div');
        cat.className = 'word-cat';
        cat.textContent = w.category;

        if (thumbWrap) card.appendChild(thumbWrap);
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
        
        actions.appendChild(editBtn);
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
// Cards (single-word study view)
// ---------------------------------------------------------------------
let cardOrder = [];
let cardIndex = 0;
let cardRevealed = false;
let cardTouchX = null;

function initCards() {
    cardOrder = allWords.map((_, i) => i).filter(idx => wordMatchesSearch(allWords[idx]));
    if (cardOrder.length === 0) cardOrder = allWords.map((_, i) => i);
    if (cardIndex >= cardOrder.length) cardIndex = 0;
    cardRevealed = false;
    renderCard();
}

// Re-filter the card deck when the search box changes (カード tab).
function applyCardSearch() {
    const matches = allWords.map((_, i) => i).filter(idx => wordMatchesSearch(allWords[idx]));
    if (matches.length > 0) {
        cardOrder = matches;
        cardIndex = 0;
    }
    cardRevealed = false;
    renderCard();
}

function renderCard() {
    const count = document.getElementById('cardStudyCount');
    const catEl = document.getElementById('cardStudyCat');
    const wordEl = document.getElementById('cardStudyWord');
    const readEl = document.getElementById('cardStudyReading');
    const meaningEl = document.getElementById('cardStudyMeaning');
    const photoEl = document.getElementById('cardStudyPhoto');
    if (count) count.textContent = `${cardIndex + 1} / ${cardOrder.length}`;

    const w = allWords[cardOrder[cardIndex]];
    if (!w) return;

    const card = document.getElementById('cardStudyCard');
    if (card) {
        card.classList.remove('revealed');
        cardRevealed = false;
    }

    if (catEl) catEl.textContent = w.category;
    const idxEl = document.getElementById('cardStudyIndex');
    if (idxEl) idxEl.textContent = `${cardIndex + 1} / ${cardOrder.length}`;
    if (wordEl) wordEl.textContent = w.word;
    if (readEl) readEl.textContent = w.reading;
    if (meaningEl) meaningEl.textContent = w.myanmar || w.meaning;

    // Photo zone: always render a fixed-size area so the card frame stays
    // constant whether or not there is a photo (あり / なし).
    const statusEl = document.getElementById('cardStudyPhotoStatus');
    if (photoEl) photoEl.innerHTML = '';
    const url = (wordPhotos[w.id]) || w.photo_url || null;

    if (statusEl) {
        statusEl.classList.remove('has-photo', 'no-photo');
        if (url) {
            statusEl.classList.add('has-photo');
        } else {
            statusEl.classList.add('no-photo');
        }
    }

    if (photoEl) {
        if (url) {
            const img = document.createElement('img');
            img.src = url;
            img.alt = w.word;
            photoEl.appendChild(img);
            photoEl.classList.add('has-photo');
            photoEl.classList.remove('empty');
            photoEl.title = w.word;
        } else {
            photoEl.classList.add('empty');
            photoEl.classList.remove('has-photo');
            photoEl.title = 'クリックして写真を追加 (click to add photo)';
        }
    }
}

function cardGoto(i) {
    if (cardOrder.length === 0) return;
    cardIndex = ((i % cardOrder.length) + cardOrder.length) % cardOrder.length;
    cardRevealed = false;
    renderCard();
}

function nextCard() { cardGoto(cardIndex + 1); }
function prevCard() { cardGoto(cardIndex - 1); }

function shuffleCards() {
    cardOrder = shuffle(allWords.map((_, i) => i).filter(idx => wordMatchesSearch(allWords[idx])));
    if (cardOrder.length === 0) cardOrder = allWords.map((_, i) => i);
    cardIndex = 0;
    cardRevealed = false;
    renderCard();
}

function addCurrentCardFav() {
    const w = allWords[cardOrder[cardIndex]];
    if (!w || !w.word) return;
    if (!favorites.includes(w.word)) {
        favorites.push(w.word);
        saveFavorites();
    }
    alert('お気に入りに追加しました (added to favorites)');
}

// Click the empty card photo zone -> open file picker to add a photo.
function cardPhotoZoneClick() {
    const w = allWords[cardOrder[cardIndex]];
    if (!w) return;
    if (!wordPhotos[w.id] && !w.photo_url) {
        const inp = document.getElementById('cardStudyPhotoInput');
        if (inp) { inp.value = ''; inp.click(); }
    }
}

// Swipe support (touch)
function cardSwipeStart(x) { cardTouchX = x; }
function cardSwipeEnd(x) {
    if (cardTouchX === null || x === null) return;
    const dx = x - cardTouchX;
    if (Math.abs(dx) > 40) {
        if (dx < 0) nextCard();
        else prevCard();
    }
    cardTouchX = null;
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

// Returns true if a word matches the current search term (漢字・ひらがな・myanmar).
function wordMatchesSearch(w) {
    if (!searchTerm) return true;
    const q = searchTerm.toLowerCase().trim();
    if (!q) return true;
    return (w.word && w.word.toLowerCase().includes(q))
        || (w.reading && w.reading.toLowerCase().includes(q))
        || (w.myanmar && w.myanmar.toLowerCase().includes(q))
        || (w.meaning && w.meaning.toLowerCase().includes(q));
}

// Clear the 言葉 tab search box.
function clearWordSearch() {
    const inp = document.getElementById('wordSearchInput');
    const btn = document.getElementById('wordSearchClear');
    if (inp) inp.value = '';
    if (btn) btn.style.display = 'none';
    searchTerm = '';
    renderWords();
}

// Clear the カード tab search box.
function clearCardSearch() {
    const inp = document.getElementById('cardSearchInput');
    const btn = document.getElementById('cardSearchClear');
    if (inp) inp.value = '';
    if (btn) btn.style.display = 'none';
    searchTerm = '';
    applyCardSearch();
}

function renderQuizQuestion() {
    if (quizCurrent >= quizQuestions.length) {
        renderQuizResults();
        return;
    }
    quizAnswered = false;
    const q = quizQuestions[quizCurrent];
    document.getElementById('quizProgress').textContent =
        `問題 ${quizCurrent + 1} / ${quizQuestions.length}`;
    document.getElementById('quizPrompt').innerHTML =
        `<div class="quiz-rule-label">この絵は何のルール？<br><small>この交通ルールを選んでください。</small></div>` +
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
        (answeredCorrect ? '✅正解！せいかい！' : `❌不正解！ふせいかい。正解： ${correctTitle}。`) +
        `<br>${correctTitle}の説明： ${q.rule.jp}` +
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
    document.getElementById('quizProgress').textContent = '結果';
    document.getElementById('quizPrompt').innerHTML = '';
    document.getElementById('quizOptions').innerHTML = '';
    const resultBox = document.getElementById('quizResult');
    resultBox.style.display = 'block';
    resultBox.innerHTML =
        `<div style="font-size:1.6rem;font-weight:bold;text-align:center;">${quizScore} / ${total} 点 (${pct}%)</div>` +
        (total === 0
            ? '<div style="text-align:center;margin-top:8px">ルールがありません、E/div>'
            : (passed
                ? '<div style="text-align:center;margin-top:8px">🎉 合格！よくできました！また練習を続けましょう。</div>'
                : '<div style="text-align:center;margin-top:8px">📖 合格には 90% 以上が目安です。あと少し！また挑戦しましょう。</div>'));
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
    loadRulePhotos();

    // Rule tab: edge strip click navigation
    var prevEdge = document.querySelector('.rule-nav-prev');
    var nextEdge = document.querySelector('.rule-nav-next');
    if (prevEdge) prevEdge.addEventListener('click', function(e) { e.stopPropagation(); prevRule(); });
    if (nextEdge) nextEdge.addEventListener('click', function(e) { e.stopPropagation(); nextRule(); });

    // Rule tab: right-click / long-press on photo area -> show context menu
    var flashcardEl = document.getElementById('flashcard');
    var pressTimer = null;
    if (flashcardEl) {
        flashcardEl.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            e.stopPropagation();
            showRulePhotoMenu(e.clientX, e.clientY);
        });
        flashcardEl.addEventListener('touchstart', function(e) {
            var x = e.touches[0].clientX, y = e.touches[0].clientY;
            pressTimer = setTimeout(function() { showRulePhotoMenu(x, y); }, 600);
        }, { passive: true });
        flashcardEl.addEventListener('touchend', function() { clearTimeout(pressTimer); }, { passive: true });
        flashcardEl.addEventListener('touchmove', function() { clearTimeout(pressTimer); }, { passive: true });
    }

    function showRulePhotoMenu(x, y) {
        var old = document.getElementById('photoContextMenu');
        if (old) old.remove();
        var menu = document.createElement('div');
        menu.id = 'photoContextMenu';
        menu.style.cssText = 'position:fixed;top:'+y+'px;left:'+x+'px;z-index:9999;background:#fff;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,.2);padding:4px;display:flex;flex-direction:column;min-width:160px;';
        
        var addBtn = document.createElement('button');
        addBtn.textContent = '\u{1F4F7} \u5199\u771F\u3092\u8FFD\u52A0';
        addBtn.style.cssText = 'border:none;background:none;padding:10px 16px;text-align:left;cursor:pointer;font-size:.9rem;color:#333;border-radius:6px;';
        addBtn.onmouseenter = function(){this.style.background='#f5f5f5';};
        addBtn.onmouseleave = function(){this.style.background='none';};
        addBtn.onclick = function() { pickRulePhoto(); menu.remove(); };
        menu.appendChild(addBtn);
        
        var rule = currentRule();
        if (rule && rulePhotos[rule.id]) {
            var delBtn = document.createElement('button');
            delBtn.textContent = '\u{1F5D1} \u5199\u771F\u3092\u524A\u9664';
            delBtn.style.cssText = 'border:none;background:none;padding:10px 16px;text-align:left;cursor:pointer;font-size:.9rem;color:#ef4444;border-radius:6px;';
            delBtn.onmouseenter = function(){this.style.background='#fef2f2';};
            delBtn.onmouseleave = function(){this.style.background='none';};
            delBtn.onclick = function() { removeRulePhoto(); menu.remove(); };
            menu.appendChild(delBtn);
        }
        
        document.body.appendChild(menu);
        setTimeout(function() {
            document.addEventListener('click', function close(ev) {
                if (!menu.contains(ev.target)) { menu.remove(); document.removeEventListener('click', close); }
            });
        }, 100);
    }
    loadPhotos();
    order = allRules.map((_, i) => i);
    currentIndex = 0;
    renderCurrent();

    // Load words from database if Supabase is configured
    await loadWords();

    // Rebuild word->photo mapping from Supabase Storage
    // (so photos show on new browsers/devices, not just this one's localStorage)
    await loadPhotosFromSupabase();
    await loadRulePhotosFromSupabase();
    renderCurrent();
    renderWords();

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

    // Handle card study photo upload (photo added from カード tab)
    const cardInp = document.getElementById('cardStudyPhotoInput');
    if (cardInp) {
        cardInp.addEventListener('change', async () => {
            const w = allWords[cardOrder[cardIndex]];
            const file = cardInp.files && cardInp.files[0];
            if (!file || !w) return;
            const reader = new FileReader();
            reader.onload = async () => {
                downscaleImage(reader.result, 900, async (dataUrl) => {
                    // Use savePhoto so the photo syncs to Supabase Storage
                    // (consistent with the 言葉 tab upload path).
                    await savePhoto(w.id, dataUrl);
                    renderCard();
                });
            };
            reader.readAsDataURL(file);
        });
    }

    // Handle rule photo upload (study card)
    const ruleInp = document.getElementById('rulePhotoInput');
    if (ruleInp) {
        ruleInp.addEventListener('change', () => {
            const file = ruleInp.files && ruleInp.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = () => {
                downscaleImage(reader.result, 900, async (dataUrl) => {
                    const rule = currentRule();
                    if (!rule) return;
                    // Save to Supabase Storage (with localStorage fallback)
                    if (window.supabaseConfigured && supabaseClient) {
                        try {
                            const url = await uploadRulePhotoToSupabase(rule.id, dataUrl);
                            rulePhotos[rule.id] = url;
                            saveRulePhotos();
                            console.log('✅ Rule photo uploaded to Supabase');
                        } catch (e) {
                            console.warn('Supabase upload failed, saving locally:', e);
                            rulePhotos[rule.id] = dataUrl;
                            saveRulePhotos();
                        }
                    } else {
                        rulePhotos[rule.id] = dataUrl;
                        saveRulePhotos();
                    }
                    renderCurrent();
                });
            };
            reader.readAsDataURL(file);
        });
    }

    // Handle exam question photo upload (picture + text mixed questions).
    // Same pipeline as the rule photo: downscale -> Supabase Storage -> localStorage.
    const examInp = document.getElementById('examPhotoInput');
    if (examInp) {
        examInp.addEventListener('change', () => {
            const file = examInp.files && examInp.files[0];
            if (!file || examPhotoTarget < 0) return;
            const index = examPhotoTarget;
            const reader = new FileReader();
            reader.onload = () => {
                downscaleImage(reader.result, 900, async (dataUrl) => {
                    const set = examSets[examSetIndex];
                    if (!set) return;
                    const id = examPhotoId(set.id, index);
                    if (window.supabaseConfigured && supabaseClient) {
                        try {
                            examPhotos[id] = await uploadExamPhotoToSupabase(id, dataUrl);
                            saveExamPhotos();
                            console.log('✅ Exam photo uploaded to Supabase:', id);
                        } catch (e) {
                            console.warn('Supabase upload failed, saving locally:', e);
                            examPhotos[id] = dataUrl;
                            saveExamPhotos();
                        }
                    } else {
                        examPhotos[id] = dataUrl;
                        saveExamPhotos();
                    }
                    renderExamQuestions();
                });
            };
            reader.readAsDataURL(file);
        });
    }

    // Search box listeners (言葉 & カード tabs)
    const wordSearch = document.getElementById('wordSearchInput');
    const wordSearchClear = document.getElementById('wordSearchClear');
    if (wordSearch) {
        wordSearch.addEventListener('input', () => {
            searchTerm = wordSearch.value;
            if (wordSearchClear) wordSearchClear.style.display = searchTerm ? 'inline-flex' : 'none';
            renderWords();
        });
    }
    const cardSearch = document.getElementById('cardSearchInput');
    const cardSearchClear = document.getElementById('cardSearchClear');
    if (cardSearch) {
        cardSearch.addEventListener('input', () => {
            searchTerm = cardSearch.value;
            if (cardSearchClear) cardSearchClear.style.display = searchTerm ? 'inline-flex' : 'none';
            applyCardSearch();
        });
    }

        

    function showRulePhotoMenu(x, y) {
        var old = document.getElementById('photoContextMenu');
        if (old) old.remove();
        var menu = document.createElement('div');
        menu.id = 'photoContextMenu';
        menu.style.cssText = 'position:fixed;top:'+y+'px;left:'+x+'px;z-index:9999;background:#fff;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,.2);padding:4px;display:flex;flex-direction:column;min-width:160px;';
        
        var addBtn = document.createElement('button');
        addBtn.textContent = '📷 写真を追加';
        addBtn.style.cssText = 'border:none;background:none;padding:10px 16px;text-align:left;cursor:pointer;font-size:.9rem;color:#333;border-radius:6px;';
        addBtn.onmouseenter = function(){this.style.background='#f5f5f5';};
        addBtn.onmouseleave = function(){this.style.background='none';};
        addBtn.onclick = function() { pickRulePhoto(); menu.remove(); };
        
        menu.appendChild(addBtn);
        
        var rule = currentRule();
        if (rule && rulePhotos[rule.id]) {
            var delBtn = document.createElement('button');
            delBtn.textContent = '🗑 写真を削除';
            delBtn.style.cssText = 'border:none;background:none;padding:10px 16px;text-align:left;cursor:pointer;font-size:.9rem;color:#ef4444;border-radius:6px;';
            delBtn.onmouseenter = function(){this.style.background='#fef2f2';};
            delBtn.onmouseleave = function(){this.style.background='none';};
            delBtn.onclick = function() { removeRulePhoto(); menu.remove(); };
            menu.appendChild(delBtn);
        }
        
        document.body.appendChild(menu);
        
        setTimeout(function() {
            document.addEventListener('click', function close(ev) {
                if (!menu.contains(ev.target)) { menu.remove(); document.removeEventListener('click', close); }
            });
        }, 100);
    }

    // Handle photo chosen inside the add/edit word modal
    const newInp = document.getElementById('wordNewPhotoInput');
    if (newInp) {
        newInp.addEventListener('change', () => {
            const file = newInp.files && newInp.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = () => {
                downscaleImage(reader.result, 720, (dataUrl) => {
                    rememberNewWordPhoto(dataUrl, file.name);
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

    // ESC key closes modal AND clears search | Arrow keys navigate
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePhotoModal();
            var wordInp = document.getElementById('wordSearchInput');
            var cardInp = document.getElementById('cardSearchInput');
            if (document.activeElement === wordInp && wordInp.value) { clearWordSearch(); wordInp.blur(); }
            else if (document.activeElement === cardInp && cardInp.value) { clearCardSearch(); cardInp.blur(); }
        }
        if (cardSection.style.display === 'block' && !document.activeElement.closest('input,select,textarea')) {
            if (e.key === 'ArrowRight') { e.preventDefault(); nextCard(); }
            else if (e.key === 'ArrowLeft') { e.preventDefault(); prevCard(); }
        }
        if (studySection.style.display !== 'none' && !document.activeElement.closest('input,select,textarea')) {
            if (e.key === 'ArrowRight') { e.preventDefault(); nextRule(); }
            else if (e.key === 'ArrowLeft') { e.preventDefault(); prevRule(); }
        }
    });

    // Handle rule photo upload (study card)// Touch swipe for the card study view (phone/tablet)
    const cardEl = document.getElementById('cardStudyCard');
    if (cardEl) {
        cardEl.addEventListener('touchstart', (e) => {
            cardSwipeStart(e.touches[0].clientX);
        }, { passive: true });
        cardEl.addEventListener('touchend', (e) => {
            cardSwipeEnd(e.changedTouches[0].clientX);
        }, { passive: true });
    }
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
                    category: w.category,
                    photo_url: w.photo_url || null
                }));
                useDatabase = true;
                console.log(`Using ${allWords.length} words from database`);
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
                            category: w.category,
                            photo_url: w.photo_url || null
                        }));
                        useDatabase = true;
                    }
                }
            }
        }
    }

    // Fallback to local data if database not available
    if (allWords.length === 0) {
        allWords = (window.trafficWordData || []).map((w, i) => ({
            id: 'local_' + i,
            word: w.word,
            reading: w.reading,
            myanmar: w.meaning,
            category: w.category
        }));
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
        clearNewWordPhoto();
        populateCategorySelect('');
        title.textContent = '単語を追加';
        modal.classList.add('active');
    }
}

// Holds a dataURL for a photo chosen in the add/edit word modal.
let pendingNewPhoto = null;

// Open file picker for the add/edit modal photo.
function pickNewWordPhoto() {
    const inp = document.getElementById('wordNewPhotoInput');
    if (inp) inp.click();
}

function clearNewWordPhoto() {
    pendingNewPhoto = null;
    const prev = document.getElementById('wordNewPhotoPreview');
    const name = document.getElementById('wordNewPhotoName');
    const inp = document.getElementById('wordNewPhotoInput');
    if (inp) inp.value = '';
    if (prev) prev.style.display = 'none';
    if (name) name.textContent = '';
}

// Downscale + remember the chosen photo (shown as preview).
function rememberNewWordPhoto(dataUrl, filename) {
    pendingNewPhoto = dataUrl;
    const name = document.getElementById('wordNewPhotoName');
    const prev = document.getElementById('wordNewPhotoPreview');
    const img = document.getElementById('wordNewPhotoPreviewImg');
    if (name) name.textContent = filename || '写真を選択しました';
    if (img) img.src = dataUrl;
    if (prev) prev.style.display = 'flex';
}

// Upload a pending modal photo for the given word id after the word is saved.
async function uploadPendingNewPhoto(wordId) {
    if (!pendingNewPhoto || !wordId) return;
    try {
        await savePhoto(wordId, pendingNewPhoto);
    } catch (e) {
        console.warn('Could not save photo for new word:', e);
    }
    pendingNewPhoto = null;
}

// Fill the category <select> with all distinct categories from the word list.
function populateCategorySelect(selected) {
    const sel = document.getElementById('wordCategory');
    if (!sel) return;
    const cats = [];
    allWords.forEach(w => { if (w.category && !cats.includes(w.category)) cats.push(w.category); });
    cats.sort();
    sel.innerHTML = '';
    cats.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        sel.appendChild(opt);
    });
    if (selected && cats.includes(selected)) {
        sel.value = selected;
    } else if (cats.length) {
        sel.value = cats[0];
    }
}

function openEditWordModal(wordIndex) {
    const word = allWords[wordIndex];
    if (!word) return;

    const modal = document.getElementById('wordModal');
    const title = document.getElementById('wordModalTitle');

    if (modal && title) {
        document.getElementById('wordId').value = word.id;
        document.getElementById('wordKanji').value = word.word;
        document.getElementById('wordReading').value = word.reading;
        document.getElementById('wordMyanmar').value = word.myanmar;
        populateCategorySelect(word.category);
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
                await uploadPendingNewPhoto(wordId);
                renderWords();
            } else {
                alert('更新に失敗しました');
            }
        } else {
            // Add new word
            const success = await insertWordToDatabase(wordData);
            if (success) {
                alert('単語を追加しました');
                const newId = success.id;
                await loadWords();
                await uploadPendingNewPhoto(newId);
                renderWords();
            } else {
                alert('追加に失敗しました');
            }
        }
    } else {
        // Local storage fallback
        if (wordId) {
            // Edit
            const idx = allWords.findIndex(w => w.id === wordId);
            if (idx >= 0) {
                allWords[idx] = { ...allWords[idx], ...wordData };
            }
            alert('単語を更新しましたローカル');
            await uploadPendingNewPhoto(wordId);
        } else {
            // Add
            const newId = `local_${Date.now()}`;
            allWords.push({
                id: newId,
                ...wordData
            });
            alert('単語を追加しましたローカル');
            await uploadPendingNewPhoto(newId);
        }
        wordOrder = allWords.map((_, i) => i);
        renderWords();
    }

    // Refresh the card study list if the card view is open
    if (cardSection.style.display === 'block') {
        cardOrder = allWords.map((_, i) => i);
        cardIndex = cardIndex >= cardOrder.length ? cardOrder.length - 1 : cardIndex;
        if (cardIndex < 0) cardIndex = 0;
        renderCard();
    }

    closeWordModal();
}
// ---------------------------------------------------------------------
// 仮免許学科試験 (Provisional license written test)
// 5 sets (Q1 ~ Q4, R1) x 50 正/誤 questions, loaded from examdata.js
// ---------------------------------------------------------------------
let examSets = [];            // question sets from examdata.js
let examSetIndex = 0;         // Q1 is selected by default
let examAnswers = [];         // user answers for the active set ('正' | '誤' | '')
let examGraded = false;       // has the active set been submitted?
let examInitialized = false;
let examPhotoEditMode = false; // 「📷 画像編集」checkbox: show the photo add/edit/delete buttons

// Called from showMode('exam'); builds the view the first time it is opened.
function initExam() {
    if (!examInitialized) {
        examSets = Array.isArray(window.examQuestionSets) ? window.examQuestionSets : [];
        examInitialized = true;
        loadExamPhotos();               // localStorage cache of question pictures
        syncExamPhotosFromSupabase();   // then refresh from Storage (async)
    }

    const wrap = document.getElementById('examQuestions');
    if (!examSets.length) {
        wrap.innerHTML = '<div class="exam-empty">問題データ（examdata.js）を読み込めませんでした。</div>';
        return;
    }

    renderExamSetTabs();
    loadExamSet(examSetIndex, false);
}

// Pull question pictures from Supabase Storage and repaint the questions.
// Runs in the background so opening the exam tab is never blocked.
async function syncExamPhotosFromSupabase() {
    if (!window.supabaseConfigured || typeof loadExamPhotosFromSupabase !== 'function') return;

    // The Supabase client loads async via a CDN <script> tag; wait briefly.
    let attempts = 0;
    while (!supabaseClient && attempts < 50) {
        await new Promise(resolve => setTimeout(resolve, 100));
        attempts++;
    }
    if (!supabaseClient) return;

    const count = await loadExamPhotosFromSupabase();
    // Repaint only while the learner is on the exam tab and the set is not
    // graded yet (repainting after grading would drop the result).
    if (count > 0 && !examGraded) {
        const section = document.getElementById('examSection');
        if (section && section.style.display !== 'none') renderExamQuestions();
    }
}

// Q1 / Q2 / Q3 / Q4 buttons at the top of the exam view.
function renderExamSetTabs() {
    const wrap = document.getElementById('examSetTabs');
    wrap.innerHTML = '';
    examSets.forEach((set, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'exam-set-tab' + (i === examSetIndex ? ' active' : '');
        btn.textContent = set.id;
        btn.onclick = () => loadExamSet(i, true);
        wrap.appendChild(btn);
    });
}

// Switch to a question set, reset its answers and render the 50 questions.
function loadExamSet(index, scrollUp) {
    examSetIndex = index;
    examAnswers = new Array(examSets[index].questions.length).fill('');
    examGraded = false;

    renderExamSetTabs();
    renderExamQuestions();
    updateExamAnsweredCount();

    document.getElementById('examResult').style.display = 'none';
    document.getElementById('examResult').innerHTML = '';
    document.getElementById('examMistakes').style.display = 'none';
    document.getElementById('examMistakes').innerHTML = '';
    document.getElementById('examSubmitBtn').style.display = '';
    document.getElementById('examRetryBtn').style.display = 'none';
    document.getElementById('examExportBtn').style.display = 'none';
    document.getElementById('examPhotoToggle').style.display = '';   // photo-edit checkbox comes back

    if (scrollUp) window.scrollTo({ top: 0, behavior: 'smooth' });
}
// ---------------------------------------------------------------------
// Question pictures (picture + text mixed)
// A question can show an illustration from three sources, in priority order:
//   1. an uploaded photo -> examPhotos['<setId>-<n>'] (Supabase Storage)
//   2. item.img          -> a static image path or URL in examdata.js
//   3. item.svg          -> an inline SVG string (rulesdata.js convention)
// Optional: item.caption (label under the picture) and
//           item.layout ('left' = beside the text, 'top' = above it).
// Returns a DOM element, or null when the question has no picture.
// ---------------------------------------------------------------------
function buildExamFigure(item, photoId) {
    const uploaded = photoId ? examPhotos[photoId] : null;
    const src = uploaded || item.img || '';
    const markup = !src && item.svg ? String(item.svg) : '';
    if (!src && !markup) return null;

    const fig = document.createElement('div');
    fig.className = 'exam-figure ' + (item.layout === 'top' ? 'exam-figure-top' : 'exam-figure-left');

    const media = document.createElement('div');
    media.className = 'exam-figure-media';
    if (src) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = item.caption || '';
        img.loading = 'lazy';
        media.appendChild(img);
    } else {
        media.innerHTML = markup;   // inline SVG from our own data files
    }
    fig.appendChild(media);

    if (item.caption) {
        const cap = document.createElement('div');
        cap.className = 'exam-figure-caption';
        cap.textContent = item.caption;
        fig.appendChild(cap);
    }
    return fig;
}

// ---------------------------------------------------------------------
// Furigana: the optional `furigana` column in examdata.js carries an
// annotated copy of `q` with {base|reading} marks, e.g.
// 'この標識は{止まれ|とまれ}を示す。' Each group becomes
// <ruby>base<rt>reading</rt></ruby> so the hiragana is printed above the
// kanji. Built with DOM nodes only, so the text can never inject HTML.
// ---------------------------------------------------------------------
function appendRubyText(parent, text) {
    const re = /\{([^{}|]+)\|([^{}]+)\}/g;
    let last = 0;
    let m;
    while ((m = re.exec(text)) !== null) {
        if (m.index > last) parent.appendChild(document.createTextNode(text.slice(last, m.index)));
        const ruby = document.createElement('ruby');
        ruby.appendChild(document.createTextNode(m[1]));
        const rt = document.createElement('rt');
        rt.textContent = m[2];
        ruby.appendChild(rt);
        parent.appendChild(ruby);
        last = re.lastIndex;
    }
    if (last < text.length) parent.appendChild(document.createTextNode(text.slice(last)));
}

// Fill an element with question text, with furigana when the item has it.
function setRubyText(el, furigana, plain) {
    el.textContent = '';
    if (furigana) appendRubyText(el, furigana);
    else el.textContent = plain;
}

// Render every question of the active set with 正 / 誤 selection buttons.
function renderExamQuestions() {
    const set = examSets[examSetIndex];
    const wrap = document.getElementById('examQuestions');
    document.getElementById('examTitle').textContent = set.title;
    wrap.innerHTML = '';

    set.questions.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'exam-question';
        card.dataset.index = String(i);

        const qLine = document.createElement('div');
        qLine.className = 'exam-question-text';

        const num = document.createElement('span');
        num.className = 'exam-question-num';
        num.textContent = '問' + (i + 1);
        qLine.appendChild(num);

        const statement = document.createElement('span');
        statement.className = 'exam-question-statement';
        setRubyText(statement, item.furigana, item.q);
        qLine.appendChild(statement);

        // Question text + optional picture (picture + text mixed).
        const photoId = examPhotoId(set.id, i);
        const figure = buildExamFigure(item, photoId);
        const body = document.createElement('div');
        body.className = 'exam-question-body';
        if (figure && figure.classList.contains('exam-figure-top')) {
            body.classList.add('is-stack');
            body.appendChild(figure);
            body.appendChild(qLine);
        } else {
            body.appendChild(qLine);
            if (figure) body.appendChild(figure);
        }
        card.appendChild(body);

        const optRow = document.createElement('div');
        optRow.className = 'exam-options';
        ['正', '誤'].forEach(value => {
            const opt = document.createElement('button');
            opt.type = 'button';
            opt.className = 'exam-option';
            opt.textContent = value;
            opt.onclick = () => selectExamAnswer(i, value, card, opt);
            optRow.appendChild(opt);
        });
        card.appendChild(optRow);

        const feedback = document.createElement('div');
        feedback.className = 'exam-feedback';
        card.appendChild(feedback);

        // Picture controls. Hidden once the set is graded, because a re-render
        // would otherwise wipe the grading result.
        if (!examGraded) {
            const tools = document.createElement('div');
            tools.className = 'exam-photo-tools';
            // Photo buttons stay hidden until 「📷 画像編集」is ticked.
            tools.style.display = examPhotoEditMode ? '' : 'none';

            const upBtn = document.createElement('button');
            upBtn.type = 'button';
            upBtn.className = 'exam-photo-btn';
            upBtn.textContent = figure ? '🖼 画像を変更' : '🖼 画像を追加';
            upBtn.title = 'この問題の標識・標示の画像をアップロード（Supabase Storage に保存）';
            upBtn.onclick = () => pickExamPhoto(i);
            tools.appendChild(upBtn);

            if (examPhotos[photoId]) {
                const rmBtn = document.createElement('button');
                rmBtn.type = 'button';
                rmBtn.className = 'exam-photo-btn exam-photo-remove';
                rmBtn.textContent = '✕ 画像を削除';
                rmBtn.onclick = () => removeExamPhoto(i);
                tools.appendChild(rmBtn);
            }
            card.appendChild(tools);
        }

        // Restore an already-chosen answer, so attaching or removing a picture
        // (which re-renders the list) never loses the learner's selections.
        if (examAnswers[i]) {
            const picked = examAnswers[i];
            optRow.querySelectorAll('.exam-option').forEach(btn => {
                const isPicked = btn.textContent === picked;
                btn.classList.toggle('selected', isPicked);
                btn.classList.toggle('opt-correct', isPicked && picked === '正');
                btn.classList.toggle('opt-wrong', isPicked && picked === '誤');
            });
            card.classList.add('answered');
        }

        wrap.appendChild(card);
    });
}

// Store one answer and highlight the chosen 正 / 誤 button.
function selectExamAnswer(index, value, card, opt) {
    if (examGraded) return;              // locked after submission
    examAnswers[index] = value;

    const options = card.querySelectorAll('.exam-option');
    options.forEach(btn => {
        const picked = btn.textContent === value;
        btn.classList.toggle('selected', picked);
        btn.classList.toggle('opt-correct', picked && value === '正');
        btn.classList.toggle('opt-wrong', picked && value === '誤');
    });
    card.classList.add('answered');
    updateExamAnsweredCount();
}

// "回答 12 / 50" counter shown next to the set title.
function updateExamAnsweredCount() {
    const total = examSets[examSetIndex].questions.length;
    const done = examAnswers.filter(a => a === '正' || a === '誤').length;
    document.getElementById('examAnsweredCount').textContent = '回答 ' + done + ' / ' + total;
}

// 「📷 画像編集」checkbox: show/hide the per-question photo buttons
// (add / change / delete) without re-rendering, so selected answers and the
// graded result are never lost by ticking the box.
function toggleExamPhotoEditMode(on) {
    examPhotoEditMode = !!on;
    applyExamPhotoToolsVisibility();
}

function applyExamPhotoToolsVisibility() {
    document.querySelectorAll('#examQuestions .exam-photo-tools').forEach(el => {
        el.style.display = examPhotoEditMode ? '' : 'none';
    });
}



// Grade the active set: mark each question, show the score and the
// explanations for the questions that were answered incorrectly.
function submitExam() {
    if (examGraded) return;
    const set = examSets[examSetIndex];
    const questions = set.questions;

    const unanswered = examAnswers.findIndex(a => a !== '正' && a !== '誤');
    if (unanswered !== -1) {
        const msg = '未回答の問題が ' + (questions.length - examAnswers.filter(a => a === '正' || a === '誤').length) +
            ' 問あります。すべて回答してから採点してください。（問' + (unanswered + 1) + ' が未回答）';
        window.alert(msg);
        const card = document.querySelector('.exam-question[data-index="' + unanswered + '"]');
        if (card) {
            card.classList.add('unanswered-flash');
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }

    examGraded = true;
    let correct = 0;
    const wrongList = [];

    questions.forEach((item, i) => {
        const card = document.querySelector('.exam-question[data-index="' + i + '"]');
        if (!card) return;
        const isCorrect = examAnswers[i] === item.answer;
        if (isCorrect) correct++;
        else wrongList.push(i);

        card.classList.add(isCorrect ? 'is-correct' : 'is-wrong');
        card.classList.remove('answered');
        card.classList.remove('unanswered-flash');

        // Drop the picture controls: after grading, a repaint would wipe the
        // result, so pictures can only be edited before submitting.
        const photoTools = card.querySelector('.exam-photo-tools');
        if (photoTools) photoTools.remove();

        const feedback = card.querySelector('.exam-feedback');
        if (feedback) {
            feedback.innerHTML = '';
            const badge = document.createElement('span');
            badge.className = 'exam-badge ' + (isCorrect ? 'badge-correct' : 'badge-wrong');
            badge.textContent = isCorrect ? '○ 正解' : '× 不正解（正解は「' + item.answer + '」）';
            feedback.appendChild(badge);
            feedback.style.display = 'block';
        }
    });

    renderExamResult(correct, questions.length);
    renderExamMistakes(wrongList);

    document.getElementById('examSubmitBtn').style.display = 'none';
    document.getElementById('examRetryBtn').style.display = '';
    document.getElementById('examExportBtn').style.display = '';
    // No photo editing after grading (the buttons are already removed there).
    document.getElementById('examPhotoToggle').style.display = 'none';

    document.getElementById('examResult').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Score box: correct count, percentage and pass / fail.
function renderExamResult(correct, total) {
    const passCount = window.EXAM_PASS_COUNT || 45;
    const passed = correct >= passCount;
    const percent = Math.round((correct / total) * 100);

    const box = document.getElementById('examResult');
    box.className = 'exam-result ' + (passed ? 'result-pass' : 'result-fail');
    box.innerHTML =
        '<div class="exam-result-title">' + (passed ? '🎉 合格！' : '😢 不合格') + '</div>' +
        '<div class="exam-result-score">' + correct + ' / ' + total + ' 問正解（' + percent + '%）</div>' +
        '<div class="exam-result-note">合格ライン：' + passCount + ' 問以上（' + Math.round(passCount / total * 100) +
        '%）　正解 ' + correct + ' 問 / 不正解 ' + (total - correct) + ' 問</div>';
    box.style.display = 'block';
}

// Explanations are shown only for the questions that were answered incorrectly.
function renderExamMistakes(wrongList) {
    const box = document.getElementById('examMistakes');
    if (!wrongList.length) {
        box.innerHTML = '<div class="exam-mistakes-title">🎯 全問正解です！解説はありません。</div>';
        box.style.display = 'block';
        return;
    }

    const set = examSets[examSetIndex];
    let html = '<div class="exam-mistakes-title">📖 間違えた問題の解説（' + wrongList.length + ' 問）</div>';

    wrongList.forEach(i => {
        const item = set.questions[i];
        html +=
            '<div class="exam-mistake">' +
                '<div class="exam-mistake-head">' +
                    '<span class="exam-question-num">問' + (i + 1) + '</span>' +
                    '<span class="exam-mistake-answer">あなたの答え：' + examAnswers[i] +
                    '　→　正解：' + item.answer + '</span>' +
                '</div>' +
                '<div class="exam-mistake-figure"></div>' +
                '<div class="exam-mistake-q"></div>' +
                '<div class="exam-mistake-explain"><strong>解説：</strong><span class="jp"></span></div>' +
                '<div class="exam-mistake-myanmar"></div>' +
            '</div>';
    });

    box.innerHTML = html;
    box.style.display = 'block';

    // Fill the text nodes separately so the question text cannot break the HTML.
    wrongList.forEach((qi, order) => {
        const item = set.questions[qi];
        const card = box.querySelectorAll('.exam-mistake')[order];
        if (!card) return;
        const qBox = card.querySelector('.exam-mistake-q');
        if (qBox) setRubyText(qBox, item.furigana, item.q);
        card.querySelector('.exam-mistake-explain .jp').textContent = item.explanation;
        card.querySelector('.exam-mistake-myanmar').textContent = item.myanmar;

        // Repeat the question picture in the explanation (built with DOM APIs
        // so the source URL can never break out of the HTML string above).
        const figBox = card.querySelector('.exam-mistake-figure');
        if (figBox) {
            const figure = buildExamFigure(item, examPhotoId(set.id, qi));
            if (figure) {
                figure.className = 'exam-figure exam-figure-top';
                figBox.appendChild(figure);
            } else {
                figBox.remove();
            }
        }
    });
}

// Clear the answers of the active set and start over.
function resetExamSet() {
    loadExamSet(examSetIndex, true);
}

// Export the current exam result as PDF using browser's print function
function exportExamPDF() {
    if (!examGraded) {
        alert('採点後にPDF出力できます');
        return;
    }
    
    // Add a print-specific class to body
    document.body.classList.add('printing-exam');
    
    // Trigger browser's print dialog
    window.print();
    
    // Remove the class after print dialog closes
    setTimeout(() => {
        document.body.classList.remove('printing-exam');
    }, 1000);
}





init();