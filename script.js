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
const quizSection     = document.getElementById('quizSection');
const studyTab        = document.getElementById('studyTab');
const quizTab         = document.getElementById('quizTab');

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
    favBtn.textContent = favorites.includes(rule.id) ? '★' : '☆';

    // Progress: percentage of rules marked viewed
    const pct = Math.round((viewed.size / allRules.length) * 100);
    progressBar.style.width = `${pct}%`;

    markViewed(rule.id);
    renderFavorites();
}

function renderFavorites() {
    favCount.textContent = favorites.length;
    if (favorites.length === 0) {
        favChips.innerHTML = '<span class="empty-note">まだお気に入りはありません。カードの ☆ を押して追加できます。</span>';
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
    if (!confirm('お気に入りを全部消しますか？')) return;
    favorites = [];
    saveFavorites();
    renderCurrent();
}

// ---------------------------------------------------------------------
// Mode switching
// ---------------------------------------------------------------------
function showMode(mode) {
    const isStudy = mode === 'study';
    studySection.style.display = isStudy ? 'block' : 'none';
    quizSection.style.display = isStudy ? 'none' : 'block';
    studyTab.classList.toggle('active', isStudy);
    quizTab.classList.toggle('active', !isStudy);
    if (!isStudy) startQuiz();
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
        (answeredCorrect ? '✅ 正解! せいかい!' : `❌ 不正解! ふせいかい（正解: ${correctTitle}）`) +
        `<br>${correctTitle}：${q.rule.jp}` +
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
            ? '<div style="text-align:center;margin-top:8px">ルールがありません。</div>'
            : (passed
                ? '<div style="text-align:center;margin-top:8px">🎉 合格！よくできました！また練習を続けましょう。</div>'
                : '<div style="text-align:center;margin-top:8px">😅 合格には 90% 以上が目安です。あと少し！また挑戦しましょう。</div>'));
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
function init() {
    loadFavorites();
    order = allRules.map((_, i) => i);
    currentIndex = 0;
    renderCurrent();
}

init();