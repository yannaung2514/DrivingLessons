// Kanji are loaded from kanjimaster.js, then enriched with AI-generated data (compound, Myanmar, examples with hiragana).
// Falls back to built-in data if the data file or API is unavailable.
// apiConfig is defined in config.js (excluded from git — see .gitignore)
let kanjiData = [];

// Fallback kanji data — used when CSV or API is unavailable.
const fallbackKanji = [
    {
        char: '確', compound: '確認', on: 'カク', kun: 'たしか.める', myanmar: 'သေချာသည်',
        ex: [
            { jp: '予定を確認してください。', hira: 'よていをかくにんしてください。', meaning: 'အစီအစဉ်ကို သေချာပါ။' },
            { jp: '彼の成功は確実だ。', hira: 'かれのせいこうはかくじつだ。', meaning: 'သူ့အောင်မြင်မှုသည် သေချာပြီ။' },
        ],
    },
    {
        char: '規', compound: '規則', on: 'キ', kun: 'のり', myanmar: 'စည်းကမ်း',
        ex: [
            { jp: '学校の規則を守る。', hira: 'がっこうのきそくをまもる。', meaning: 'ကျောင်းစည်းကမ်းကို လိုက်နာသည်။' },
            { jp: 'この規模は大きすぎる。', hira: 'このきぼはおおきすぎる。', meaning: 'ဤအတိုင်းအဆင်းသည် အလွန်ကြီးသည်။' },
        ],
    },
    {
        char: '限', compound: '制限', on: 'ゲン', kun: 'かぎ.る', myanmar: 'ကန့်သတ်သည်',
        ex: [
            { jp: '速度制限に気をつけて。', hira: 'そくどせいげんにきをつけて。', meaning: 'အရှိန်ကန့်သတ်ချက်ကို သတိပြုပါ။' },
            { jp: '時間が限られている。', hira: 'じかんがかぎられている。', meaning: 'အချိန် ကန့်သတ်ထားသည်။' },
        ],
    },
    {
        char: '構', compound: '構造', on: 'コウ', kun: 'かま.える', myanmar: 'တည်ဆောက်ပုံ',
        ex: [
            { jp: '文の構造を分析する。', hira: 'ぶんのこうぞうをぶんせきする。', meaning: 'ဝါကျတည်ဆောက်ပုံကို ဆန်းစစ်သည်။' },
            { jp: '気にしないで構わない。', hira: 'きにしないでかまわない。', meaning: 'စိတ်မပူဘဲ ဖြစ်သည်။' },
        ],
    },
    {
        char: '資', compound: '資料', on: 'シ', kun: '-', myanmar: 'အရင်းအမြစ်',
        ex: [
            { jp: '資料を集めている。', hira: 'しりょうをあつめている。', meaning: 'အချက်အလက်များကို စုဆောင်းနေသည်။' },
            { jp: '人材を探している。', hira: 'じんざいをさがしている。', meaning: 'လူ့စွမ်းအားကို ရှာဖွေနေသည်။' },
        ],
    },
    {
        char: '集', compound: '集合', on: 'シュウ', kun: 'あつ.める', myanmar: 'စုဆောင်းသည်',
        ex: [
            { jp: '駅前に集合してください。', hira: 'えきまえにしゅうごうしてください。', meaning: 'ဘူတာရှေ့တွင် စုဝေးပါ။' },
            { jp: '切手を集めている。', hira: 'きってをあつめている。', meaning: 'တံဆိပ်များကို စုဆောင်းနေသည်။' },
        ],
    },
    {
        char: '週', compound: '今週', on: 'シュウ', kun: '-', myanmar: 'ရက်သတ္တပတ်',
        ex: [
            { jp: '今週は忙しい。', hira: 'こんしゅうはいそがしい。', meaning: 'ဤရက်သတ္တပတ်တွင် အလုပ်များသည်။' },
            { jp: '来週の予定を教えて。', hira: 'らいしゅうのよていをおしえて。', meaning: 'လာမည့်ရက်သတ္တပတ် အစီအစဉ်ကို ပြောပြပါ။' },
        ],
    },
    {
        char: '伸', compound: '伸長', on: 'シン', kun: 'の.びる', myanmar: 'ဆန့်တန်းသည်',
        ex: [
            { jp: '背が伸びた。', hira: 'せがのびた。', meaning: 'အရပ်ရှည်လာသည်။' },
            { jp: '才能を伸ばす。', hira: 'さいのうをのばす。', meaning: 'အရည်အချင်းကို တိုးတက်စေသည်။' },
        ],
    },
    {
        char: '退', compound: '退屈', on: 'タイ', kun: 'しりぞ.く', myanmar: 'ပျင်းရိသည်',
        ex: [
            { jp: 'この映画は退屈だ。', hira: 'このえいがはたいくつだ。', meaning: 'ဤရုပ်ရှင်သည် ပျင်းရိစရာဖြစ်သည်။' },
            { jp: '仕事を退職した。', hira: 'しごとをたいしょくした。', meaning: 'အလုပ်မှ အနားယူသည်။' },
        ],
    },
    {
        char: '展', compound: '展示', on: 'テン', kun: '-', myanmar: 'ပြသာဆန်း',
        ex: [
            { jp: '美術館で展示会がある。', hira: 'びじゅつかんでてんじかいがある。', meaning: 'အနုပညာပြတိုက်တွင် ပြပွဲရှိသည်။' },
            { jp: '発展的な計画を立てる。', hira: 'はってんてきなけいかくをたてる。', meaning: 'တိုးတက်မှုဆိုင်ရာ အစီအစဉ် ချမှတ်သည်။' },
        ],
    },
];

let viewedKanji = new Set();
let currentQuestionIndex = 0;
let score = 0;
let testQuestions = [];

const gridEl = document.getElementById('kanjiGrid');
const progressBar = document.getElementById('progressBar');
const startTestBtn = document.getElementById('startTestBtn');
const loadingMessage = document.getElementById('loadingMessage');

// Sleep helper for retry backoff
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadLocalKanjiData() {
    if (typeof kanjiMasterData !== 'undefined' && Array.isArray(kanjiMasterData) && kanjiMasterData.length) {
        return kanjiMasterData;
    }

    try {
        const response = await fetch('kanjimaster.json');
        if (!response.ok) throw new Error(`kanjimaster.json fetch failed (${response.status})`);
        const data = await response.json();
        if (Array.isArray(data)) return data;
        console.warn('kanjimaster.json did not contain an array');
        return [];
    } catch (error) {
        console.warn('Failed to load kanjimaster.json:', error.message);
        return [];
    }
}

// Attempt to recover a truncated JSON response by finding the last complete object
function recoverTruncatedJSON(text) {
    const idx = text.lastIndexOf('},');
    if (idx === -1) return null;
    let fixed = text.substring(0, idx + 1);
    const openSq = (fixed.match(/\[/g) || []).length;
    const closeSq = (fixed.match(/\]/g) || []).length;
    const openCu = (fixed.match(/\{/g) || []).length;
    const closeCu = (fixed.match(/\}/g) || []).length;
    for (let i = 0; i < openSq - closeSq; i++) fixed += ']';
    for (let i = 0; i < openCu - closeCu; i++) fixed += '}';
    try {
        return JSON.parse(fixed);
    } catch (e) {
        console.error('JSON recovery failed:', e.message);
        return null;
    }
}

async function fetchKanjiData() {
    loadingMessage.style.display = 'block';
    loadingMessage.textContent = 'Loading kanji from kanjimaster.js…';

    // Step 1: Use local kanji data from kanjimaster.js or kanjimaster.json.
    const csvKanji = await loadLocalKanjiData();

    if (!csvKanji || csvKanji.length === 0) {
        console.warn('Local kanji data not loaded — using fallback data.');
        kanjiData = [...fallbackKanji];
        loadingMessage.textContent = 'Could not load local kanji data. Using built-in sample kanji.';
        loadingMessage.style.color = '#e67e22';
        renderGrid();
        setTimeout(() => { loadingMessage.style.display = 'none'; }, 6000);
        return;
    }

    // Step 2: Select random kanji from the CSV
    const selectedKanji = [...csvKanji]
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.min(apiConfig.kanjiCount, csvKanji.length));

    const kanjiChars = selectedKanji.map(k => k.char).join(', ');

    // Step 3: If no API key, use CSV data directly (without AI enrichment)
    if (!apiConfig.apiKey) {
        kanjiData = selectedKanji.map(k => ({
            char: k.char,
            compound: '',
            on: k.on,
            kun: k.kun,
            myanmar: k.english,
            ex: [],
        }));
        loadingMessage.textContent = 'No API key — showing kanji from CSV without AI examples.';
        loadingMessage.style.color = '#e67e22';
        renderGrid();
        setTimeout(() => { loadingMessage.style.display = 'none'; }, 5000);
        return;
    }

    // Step 4: Send selected kanji to Gemini AI for enrichment
    loadingMessage.textContent = `Generating data for ${selectedKanji.length} kanji from Gemini (${apiConfig.model})…`;

    try {
        const prompt = `For each of the following kanji characters: ${kanjiChars}, provide a JSON object with a "kanji" property containing an array of objects. Each object must include: "char" (the kanji character), "compound" (a common compound word using that kanji), "on" (on'yomi reading in katakana), "kun" (kun'yomi reading), "myanmar" (Myanmar/Burmese meaning), and "ex" (array of 2 example objects). Each object in "ex" must have: "jp" (Japanese example sentence), "hira" (full hiragana reading of the sentence), and "meaning" (Myanmar/Burmese translation). Output only JSON without explanation.`;

        let jsonText;

        // Retry loop for rate-limit (429) errors with exponential backoff
        for (let attempt = 0; attempt <= apiConfig.maxRetries; attempt++) {
            const response = await fetch(`${apiConfig.apiUrl}?key=${apiConfig.apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: {
                        temperature: 0.2,
                        maxOutputTokens: 16384,
                        candidateCount: 1,
                        responseMimeType: 'application/json',
                    },
                }),
            });

            const responseText = await response.text();

            if (response.status === 429 && attempt < apiConfig.maxRetries) {
                const waitMs = Math.pow(2, attempt) * 1000;
                loadingMessage.textContent = `Rate limited. Retrying in ${waitMs / 1000}s… (attempt ${attempt + 1}/${apiConfig.maxRetries})`;
                await sleep(waitMs);
                continue;
            }

            if (!response.ok) {
                throw new Error(`Gemini API request failed (${response.status}): ${responseText}`);
            }

            const data = JSON.parse(responseText);
            console.log('Gemini response', data);
            jsonText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
            break;
        }

        if (!jsonText) {
            throw new Error('Gemini API returned no usable response text.');
        }

        // Strip markdown code fences if present
        jsonText = jsonText.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();

        let parsed;
        try {
            parsed = JSON.parse(jsonText);
        } catch (e) {
            console.warn('JSON parse failed, attempting recovery...', e.message);
            parsed = recoverTruncatedJSON(jsonText);
            if (!parsed) throw e;
            const recoveredCount = Array.isArray(parsed) ? parsed.length : (parsed.kanji || []).length;
            console.log('Recovered partial JSON with', recoveredCount, 'kanji');
        }

        kanjiData = Array.isArray(parsed) ? parsed : (parsed.kanji || parsed.data || []);

        if (!Array.isArray(kanjiData)) {
            throw new Error('Gemini API did not return a kanji array.');
        }

        // Merge CSV data (on, kun, english) for any kanji the AI didn't enrich
        const csvMap = new Map(selectedKanji.map(k => [k.char, k]));
        kanjiData = kanjiData.map(item => {
            const csv = csvMap.get(item.char);
            return {
                char: item.char,
                compound: item.compound || csv?.compound || '',
                on: item.on || csv?.on || '',
                kun: item.kun || csv?.kun || '',
                myanmar: item.myanmar || csv?.english || '',
                ex: item.ex || [],
            };
        });

        kanjiData = kanjiData.slice(0, apiConfig.kanjiCount);
        loadingMessage.style.display = 'none';
        renderGrid();
    } catch (error) {
        console.error('API error:', error);

        // Fallback: use CSV data with English meanings (no AI enrichment)
        kanjiData = selectedKanji.map(k => ({
            char: k.char,
            compound: '',
            on: k.on,
            kun: k.kun,
            myanmar: k.english,
            ex: [],
        }));
        loadingMessage.textContent = `AI unavailable (${error.message}). Showing kanji from CSV without examples.`;
        loadingMessage.style.color = '#e67e22';

        renderGrid();

        setTimeout(() => { loadingMessage.style.display = 'none'; }, 5000);
    }
}

function renderGrid() {
    gridEl.innerHTML = '';
    kanjiData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = `kanji-card ${viewedKanji.has(index) ? 'viewed' : ''}`;
        card.innerText = item.char; // Displays only ONE base character
        card.onclick = () => openModal(index);
        gridEl.appendChild(card);
    });
    updateProgress();
}

function updateProgress() {
    const progress = (viewedKanji.size / kanjiData.length) * 100;
    progressBar.style.width = `${progress}%`;

    if (viewedKanji.size === kanjiData.length) {
        startTestBtn.style.opacity = '1';
        startTestBtn.style.pointerEvents = 'auto';
    }
}

const modal = document.getElementById('kanjiModal');
function openModal(index) {
    const item = kanjiData[index];
    document.getElementById('modalKanji').innerText = item.char;
    document.getElementById('modalCompound').innerText = item.compound || '—';
    document.getElementById('modalOn').innerText = item.on || '—';
    document.getElementById('modalKun').innerText = item.kun || '—';
    document.getElementById('modalMyanmar').innerText = item.myanmar || '—';

    const exList = document.getElementById('modalExamples');
    exList.innerHTML = '';

    // Displays hiragana readings alongside each usage example.
    (item.ex || []).forEach(ex => {
        const li = document.createElement('li');
        li.style.marginBottom = '8px';

        if (typeof ex === 'object' && ex !== null) {
            const jp = ex.jp || '';
            const hira = ex.hira ? `（${ex.hira}）` : '';
            const meaning = ex.meaning ? ` — ${ex.meaning}` : '';

            const jpSpan = document.createElement('span');
            jpSpan.innerText = jp;
            jpSpan.style.fontWeight = '600';

            const hiraSpan = document.createElement('span');
            hiraSpan.innerText = hira;
            hiraSpan.style.color = '#6b7280';
            hiraSpan.style.fontSize = '0.9em';

            const meaningSpan = document.createElement('span');
            meaningSpan.innerText = meaning;
            meaningSpan.style.color = 'var(--primary)';

            li.appendChild(jpSpan);
            li.appendChild(hiraSpan);
            li.appendChild(meaningSpan);
        } else {
            li.innerText = ex;
        }

        exList.appendChild(li);
    });

    // If no examples, show a placeholder
    if (!item.ex || item.ex.length === 0) {
        const li = document.createElement('li');
        li.innerText = 'No examples available.';
        li.style.color = '#999';
        li.style.fontStyle = 'italic';
        exList.appendChild(li);
    }

    modal.style.display = 'flex';
    viewedKanji.add(index);
    renderGrid();
}

function closeModal() {
    modal.style.display = 'none';
}

function startTest() {
    document.getElementById('testSection').style.display = 'block';
    startTestBtn.style.display = 'none';
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

    testQuestions = [...kanjiData].sort(() => 0.5 - Math.random()).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= testQuestions.length) {
        showTestResults();
        return;
    }

    const q = testQuestions[currentQuestionIndex];
    document.getElementById('questionTitle').innerText = `Question ${currentQuestionIndex + 1}/${testQuestions.length}`;
    document.getElementById('questionText').innerText = `What is the Myanmar meaning of character "${q.char}" (${q.compound || '—'})?`;

    let options = [q.myanmar];
    while (options.length < 4) {
        const randomItem = kanjiData[Math.floor(Math.random() * kanjiData.length)].myanmar;
        if (!options.includes(randomItem)) {
            options.push(randomItem);
        }
    }
    options.sort(() => 0.5 - Math.random());

    const optionsGrid = document.getElementById('optionsGrid');
    optionsGrid.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => selectAnswer(opt, q.myanmar);
        optionsGrid.appendChild(btn);
    });
}

function selectAnswer(selected, correct) {
    if (selected === correct) score++;
    currentQuestionIndex++;
    loadQuestion();
}

function showTestResults() {
    document.getElementById('testSection').style.display = 'none';
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.style.display = 'block';

    let advice = "";
    if (score >= 9) {
        advice = "Outstanding performance! You have a solid grasp of these JLPT N2 kanji meanings and contexts. You are well on your way to mastering this set.";
    } else if (score >= 6) {
        advice = "Good job! You understand most concepts, but a few terms need review. Focus on the examples and compound usage to reinforce retention.";
    } else {
        advice = "Keep practicing! These kanji can be tricky, so review the Myanmar meanings and usage examples again before trying another quiz.";
    }

    resultsContainer.innerHTML = `
        <h3>Study Results</h3>
        <p><strong>Your Final Score:</strong> ${score} / ${testQuestions.length} (${Math.round(score / testQuestions.length * 100)}%)</p>
        <div class="result-box">
            <p><strong>Review Advice:</strong></p>
            <p>${advice}</p>
        </div>
        <button class="btn" style="margin-top: 15px;" onclick="location.reload()">Restart Learning Session</button>
    `;
}

fetchKanjiData();