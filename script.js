// Kanji are loaded from kanjidata.js, then enriched with AI-generated data (compound, Myanmar, examples with hiragana).
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
let learnedKanji = []; // Kanji answered correctly in the test (current session)
let savedLearnedKanji = []; // Kanji saved in localStorage (persistent)

// localStorage key for saved learned kanji
const LEARNED_KANJI_STORAGE_KEY = 'learnkanji_learned';

// Load saved learned kanji from localStorage
function loadSavedLearnedKanji() {
    try {
        const stored = localStorage.getItem(LEARNED_KANJI_STORAGE_KEY);
        if (stored) {
            savedLearnedKanji = JSON.parse(stored);
            console.log('Loaded', savedLearnedKanji.length, 'saved learned kanji from localStorage');
        }
    } catch (e) {
        console.warn('Failed to load learned kanji from localStorage:', e.message);
        savedLearnedKanji = [];
    }
}

// Save learned kanji to localStorage
function saveLearnedKanji() {
    try {
        // Merge current session learned kanji with saved ones (no duplicates)
        for (const item of learnedKanji) {
            if (!savedLearnedKanji.some(k => k.char === item.char)) {
                savedLearnedKanji.push(item);
            }
        }
        localStorage.setItem(LEARNED_KANJI_STORAGE_KEY, JSON.stringify(savedLearnedKanji));
        console.log('Saved', savedLearnedKanji.length, 'learned kanji to localStorage');
    } catch (e) {
        console.warn('Failed to save learned kanji to localStorage:', e.message);
    }
}

// Reset all saved learned kanji
function resetLearnedKanji() {
    savedLearnedKanji = [];
    learnedKanji = [];
    try {
        localStorage.removeItem(LEARNED_KANJI_STORAGE_KEY);
    } catch (e) {
        console.warn('Failed to reset learned kanji:', e.message);
    }
    renderLearnedKanji();
    console.log('Learned kanji reset');
}

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
        const response = await fetch('kanjidata.js');
        if (!response.ok) throw new Error(`kanjidata.js fetch failed (${response.status})`);
        const text = await response.text();
        const match = text.match(/const kanjiMasterData = (\[[\s\S]*?);/);
        if (!match) {
            console.warn('kanjidata.js did not contain kanjiMasterData');
            return [];
        }
        const data = JSON.parse(match[1]);
        if (Array.isArray(data)) return data;
        console.warn('kanjidata.js did not contain an array');
        return [];
    } catch (error) {
        console.warn('Failed to load kanjidata.js:', error.message);
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
    loadingMessage.textContent = 'Loading kanji from kanjidata.js…';

    // Step 1: Use local kanji data from kanjidata.js.
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

    // Step 2: Select random kanji from the data, excluding already-learned kanji
    const availableKanji = csvKanji.filter(k => !isKanjiLearned(k.char));
    const selectedKanji = [...availableKanji]
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.min(apiConfig.kanjiCount, availableKanji.length));

    // If not enough unlearned kanji, fill with learned ones
    if (selectedKanji.length < apiConfig.kanjiCount) {
        const learnedChars = new Set(savedLearnedKanji.map(k => k.char));
        const learnedRemaining = csvKanji.filter(k => learnedChars.has(k.char));
        const fillCount = apiConfig.kanjiCount - selectedKanji.length;
        const fillKanji = [...learnedRemaining]
            .sort(() => 0.5 - Math.random())
            .slice(0, fillCount);
        selectedKanji.push(...fillKanji);
    }

    const kanjiChars = selectedKanji.map(k => k.char).join(', ');

    // Step 3: Check if any providers are configured for direct API calls or proxy usage
    const useProxy = apiConfig.useProxy === true;
    const proxyUrl = apiConfig.proxyUrl || '/api/generate';
    const providers = (apiConfig.providers || []).filter(p => useProxy ? p.name : p.apiKey);
    if (providers.length === 0) {
        kanjiData = selectedKanji.map(k => ({
            char: k.char,
            compound: '',
            on: k.on,
            kun: k.kun,
            myanmar: k.english,
            ex: [],
        }));
        loadingMessage.textContent = 'No API key configured — showing kanji from data without AI examples.';
        loadingMessage.style.color = '#e67e22';
        renderGrid();
        setTimeout(() => { loadingMessage.style.display = 'none'; }, 5000);
        renderLearnedKanji();
        return;
    }

    // Step 4: Try each provider in order (Gemini → OpenAI → OpenRouter → DeepSeek)
    const prompt = `For each of the following kanji characters: ${kanjiChars}, provide a JSON object with a "kanji" property containing an array of objects. Each object must include: "char" (the kanji character), "compounds" (an array of 3-5 common compound word objects, each with "word" (the compound word) and "hira" (full hiragana reading of the compound word)), "on" (on'yomi reading in katakana), "kun" (kun'yomi reading), "myanmar" (Myanmar/Burmese meaning written in Burmese script ONLY — never Korean, never Chinese, never English), and "ex" (array of 2 example objects). Each object in "ex" must have: "jp" (Japanese example sentence), "hira" (full hiragana reading of the sentence), and "meaning" (Myanmar/Burmese translation written in Burmese script ONLY — never Korean). Output only JSON without explanation.`;

    let kanjiResult = null;
    let lastError = null;
    let usedProviderName = '';

    for (const provider of providers) {
        loadingMessage.textContent = `Generating data for ${selectedKanji.length} kanji via ${provider.name} (${provider.model})…`;

        try {
            let jsonText = null;

            for (let attempt = 0; attempt <= apiConfig.maxRetries; attempt++) {
                let response;

                if (useProxy) {
                    response = await fetch(proxyUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            provider: provider.name,
                            prompt,
                        }),
                    });
                } else if (provider.name === 'gemini') {
                    // Gemini API format
                    response = await fetch(`${provider.apiUrl}?key=${provider.apiKey}`, {
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
                } else if (provider.name === 'openrouter') {
                    // OpenRouter API format (chat completions with extra headers)
                    response = await fetch(provider.apiUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${provider.apiKey}`,
                            'HTTP-Referer': window.location.origin || 'http://localhost',
                            'X-Title': 'LearnKanji',
                        },
                        body: JSON.stringify({
                            model: provider.model,
                            messages: [{ role: 'user', content: prompt }],
                            temperature: 0.2,
                            max_tokens: 4096,
                            response_format: { type: 'json_object' },
                        }),
                    });
                } else {
                    // OpenAI / DeepSeek API format (both use chat completions)
                    response = await fetch(provider.apiUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${provider.apiKey}`,
                        },
                        body: JSON.stringify({
                            model: provider.model,
                            messages: [{ role: 'user', content: prompt }],
                            temperature: 0.2,
                            max_tokens: 4096,
                            response_format: { type: 'json_object' },
                        }),
                    });
                }

                const responseText = await response.text();

                // Retry on rate limit (429)
                if (response.status === 429 && attempt < apiConfig.maxRetries) {
                    const waitMs = Math.pow(2, attempt) * 1000;
                    loadingMessage.textContent = `${provider.name} rate limited. Retrying in ${waitMs / 1000}s…`;
                    await sleep(waitMs);
                    continue;
                }

                if (!response.ok) {
                    throw new Error(`${provider.name} API failed (${response.status}): ${responseText.substring(0, 200)}`);
                }

                const data = JSON.parse(responseText);

                // Extract text from response (different formats per provider)
                if (provider.name === 'gemini') {
                    jsonText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
                } else {
                    // OpenAI / DeepSeek
                    jsonText = data?.choices?.[0]?.message?.content;
                }
                break;
            }

            if (!jsonText) {
                throw new Error(`${provider.name} returned no usable response text.`);
            }

            // Strip markdown code fences if present
            jsonText = jsonText.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();

            let parsed;
            try {
                parsed = JSON.parse(jsonText);
            } catch (e) {
                console.warn(`${provider.name}: JSON parse failed, attempting recovery...`, e.message);
                parsed = recoverTruncatedJSON(jsonText);
                if (!parsed) throw e;
            }

            const resultArr = Array.isArray(parsed) ? parsed : (parsed.kanji || parsed.data || []);
            if (!Array.isArray(resultArr) || resultArr.length === 0) {
                throw new Error(`${provider.name} did not return a kanji array.`);
            }

            kanjiResult = resultArr;
            usedProviderName = provider.name;
            console.log(`Success with ${provider.name} — got ${resultArr.length} kanji`);
            break; // Success — stop trying other providers

        } catch (error) {
            console.warn(`${provider.name} failed:`, error.message);
            lastError = error;
            // Continue to next provider
        }
    }

    if (kanjiResult && kanjiResult.length > 0) {
        // Remove any Korean text the AI may have generated
        kanjiResult = cleanAIResponse(kanjiResult);

        // Merge CSV data (on, kun, english) for any kanji the AI didn't enrich
        const csvMap = new Map(selectedKanji.map(k => [k.char, k]));
        kanjiData = kanjiResult.map(item => {
            const csv = csvMap.get(item.char);
            // Handle both new "compounds" array and old "compound" string
            let compounds = item.compounds || [];
            if ((!compounds || compounds.length === 0) && item.compound) {
                compounds = [{ word: item.compound, hira: '' }];
            }
            return {
                char: item.char,
                compounds: compounds,
                compound: item.compound || (compounds[0]?.word || ''),
                on: item.on || csv?.on || '',
                kun: item.kun || csv?.kun || '',
                myanmar: item.myanmar || csv?.english || '',
                ex: item.ex || [],
            };
        });

        kanjiData = kanjiData.slice(0, apiConfig.kanjiCount);
        loadingMessage.style.display = 'none';
        renderGrid();
        renderLearnedKanji();
    } else {
        // All providers failed — fallback to CSV data
        console.error('All AI providers failed. Last error:', lastError?.message);
        kanjiData = selectedKanji.map(k => ({
            char: k.char,
            compound: '',
            on: k.on,
            kun: k.kun,
            myanmar: k.english,
            ex: [],
        }));
        loadingMessage.textContent = `All AI providers unavailable. Showing kanji from data without examples.`;
        loadingMessage.style.color = '#e67e22';

        renderGrid();
        setTimeout(() => { loadingMessage.style.display = 'none'; }, 5000);
        renderLearnedKanji();
    }
}

// Convert katakana to hiragana for furigana display
function katakanaToHiragana(text) {
    return text.replace(/[\u30a1-\u30f6]/g, ch =>
        String.fromCharCode(ch.charCodeAt(0) - 0x60)
    );
}

// Check if a string contains Korean characters
function containsKorean(text) {
    if (!text) return false;
    for (const ch of text) {
        const code = ch.charCodeAt(0);
        // Hangul syllables, Jamo, and compatibility Jamo
        if ((code >= 0xac00 && code <= 0xd7af) ||
            (code >= 0x1100 && code <= 0x11ff) ||
            (code >= 0x3130 && code <= 0x318f)) {
            return true;
        }
    }
    return false;
}

// Clean AI response data: remove Korean text from Myanmar meanings and examples
function cleanAIResponse(data) {
    return data.map(item => {
        // Clean Myanmar meaning
        if (containsKorean(item.myanmar)) {
            item.myanmar = '';
        }

        // Clean examples
        if (Array.isArray(item.ex)) {
            item.ex = item.ex.filter(ex => {
                if (typeof ex === 'object' && ex !== null) {
                    return !containsKorean(ex.meaning) && !containsKorean(ex.jp);
                }
                return !containsKorean(ex);
            });
        }

        return item;
    });
}

// Escape HTML special characters for safe innerHTML
// Using String.fromCharCode to prevent auto-formatter from converting entities
function escapeHTML(text) {
    const amp = '&' + 'amp;';
    const lt = '&' + 'lt;';
    const gt = '&' + 'gt;';
    const quot = '&' + 'quot;';
    const apos = '&#' + '039;';
    return text
        .replace(/&/g, amp)
        .replace(/</g, lt)
        .replace(/>/g, gt)
        .replace(/"/g, quot)
        .replace(/'/g, apos);
}

// Build furigana HTML: hiragana on top of kanji using <ruby> elements
function buildFuriganaHTML(jp, hira) {
    if (!hira) return escapeHTML(jp);

    let html = '';
    let hiraPos = 0;
    let jpPos = 0;

    while (jpPos < jp.length) {
        const ch = jp[jpPos];
        const code = ch.charCodeAt(0);
        const isKanji = (code >= 0x4e00 && code <= 0x9fff) || (code >= 0x3400 && code <= 0x4dbf);

        if (isKanji) {
            // Collect consecutive kanji characters
            let kanjiGroup = '';
            while (jpPos < jp.length) {
                const c = jp[jpPos];
                const cCode = c.charCodeAt(0);
                const cIsKanji = (cCode >= 0x4e00 && cCode <= 0x9fff) || (cCode >= 0x3400 && cCode <= 0x4dbf);
                if (!cIsKanji) break;
                kanjiGroup += c;
                jpPos++;
            }

            // Find the hiragana reading for this kanji group
            let reading = '';
            while (hiraPos < hira.length) {
                const nextJp = jp[jpPos]; // next non-kanji char in jp
                const hCh = hira[hiraPos];

                // Stop if the next jp char matches the current hira char
                if (nextJp && hCh === nextJp) {
                    break;
                }

                reading += hCh;
                hiraPos++;
            }

            if (reading) {
                html += `<ruby>${escapeHTML(kanjiGroup)}<rt>${escapeHTML(reading)}</rt></ruby>`;
            } else {
                html += escapeHTML(kanjiGroup);
            }
        } else {
            // Non-kanji character
            html += escapeHTML(ch);

            if (hiraPos < hira.length) {
                const hCh = hira[hiraPos];
                const jpNorm = katakanaToHiragana(ch);

                if (hCh === jpNorm) {
                    // Direct match — advance
                    hiraPos++;
                } else {
                    // No direct match — this could be a number (e.g. 3 → みっつ)
                    // whose reading is in the hiragana string but not in the
                    // Japanese sentence. Look ahead in the hiragana string to
                    // find where the next kana character's reading begins.
                    const nextJp = jp[jpPos + 1];
                    if (nextJp) {
                        const nextCode = nextJp.charCodeAt(0);
                        const isNextKana = (nextCode >= 0x3040 && nextCode <= 0x30ff);
                        if (isNextKana) {
                            const nextJpNorm = katakanaToHiragana(nextJp);
                            while (hiraPos < hira.length && hira[hiraPos] !== nextJpNorm) {
                                hiraPos++;
                            }
                        }
                    }
                }
            }
            jpPos++;
        }
    }

    return html;
}

// Get a hiragana reading for a kanji item (prefer kun, fall back to on converted to hiragana)
function getHiraganaReading(item) {
    if (item.kun && item.kun !== '-' && item.kun.trim()) {
        // Clean up kun reading: remove dots, take first reading
        return item.kun.split(/[.、\s]/)[0];
    }
    if (item.on && item.on.trim()) {
        // Convert katakana on'yomi to hiragana
        return katakanaToHiragana(item.on.split(/[.、\s]/)[0]);
    }
    return '';
}

function renderGrid() {
    gridEl.innerHTML = '';
    kanjiData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = `kanji-card ${viewedKanji.has(index) ? 'viewed' : ''}`;

        // Furigana (hiragana reading) on top of the kanji
        const reading = getHiraganaReading(item);
        if (reading) {
            const furigana = document.createElement('span');
            furigana.className = 'furigana';
            furigana.innerText = reading;
            card.appendChild(furigana);
        }

        // Kanji character
        const kanjiChar = document.createElement('span');
        kanjiChar.className = 'kanji-char';
        kanjiChar.innerText = item.char;
        card.appendChild(kanjiChar);

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

    // Display compound words with furigana (hiragana on top of kanji)
    const compoundEl = document.getElementById('modalCompound');
    const compounds = item.compounds || [];
    if (compounds.length > 0) {
        compoundEl.innerHTML = compounds.map(c =>
            buildFuriganaHTML(c.word || '', c.hira || '')
        ).join('、');
    } else if (item.compound) {
        compoundEl.innerText = item.compound;
    } else {
        compoundEl.innerText = '—';
    }

    document.getElementById('modalOn').innerText = item.on || '—';
    document.getElementById('modalKun').innerText = item.kun || '—';
    document.getElementById('modalMyanmar').innerText = item.myanmar || '—';

    const exList = document.getElementById('modalExamples');
    exList.innerHTML = '';

    // Displays usage examples with furigana (hiragana on top of kanji via <ruby>).
    (item.ex || []).forEach(ex => {
        const li = document.createElement('li');
        li.style.marginBottom = '8px';
        li.style.lineHeight = '1.8';

        if (typeof ex === 'object' && ex !== null) {
            const jp = ex.jp || '';
            const hira = ex.hira || '';
            const meaning = ex.meaning || '';

            // Japanese sentence with ruby furigana (hiragana on top of kanji)
            const jpSpan = document.createElement('span');
            jpSpan.style.fontWeight = '600';
            jpSpan.innerHTML = buildFuriganaHTML(jp, hira);

            // Myanmar meaning
            if (meaning) {
                const meaningSpan = document.createElement('span');
                meaningSpan.innerText = ` — ${meaning}`;
                meaningSpan.style.color = 'var(--primary)';
                li.appendChild(jpSpan);
                li.appendChild(meaningSpan);
            } else {
                li.appendChild(jpSpan);
            }
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
    learnedKanji = [];
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
    if (selected === correct) {
        score++;
        // Track the correctly answered kanji for the learned group
        const q = testQuestions[currentQuestionIndex];
        if (q && !learnedKanji.some(k => k.char === q.char)) {
            learnedKanji.push(q);
        }
    }
    currentQuestionIndex++;
    loadQuestion();
}

// Check if a kanji char is already in the saved learned list
function isKanjiLearned(char) {
    return savedLearnedKanji.some(k => k.char === char);
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

    // Save learned kanji to localStorage and show them
    saveLearnedKanji();
    renderLearnedKanji();
}

// Display all learned kanji (saved + current session) in the "learned" group at the bottom
function renderLearnedKanji() {
    const learnedSection = document.getElementById('learnedSection');
    const learnedGrid = document.getElementById('learnedGrid');
    const learnedCount = document.getElementById('learnedCount');

    // Merge saved and current session learned kanji (no duplicates)
    const allLearned = [...savedLearnedKanji];
    for (const item of learnedKanji) {
        if (!allLearned.some(k => k.char === item.char)) {
            allLearned.push(item);
        }
    }

    if (allLearned.length === 0) {
        learnedSection.style.display = 'none';
        return;
    }

    learnedSection.style.display = 'block';
    if (learnedCount) {
        learnedCount.innerText = allLearned.length;
    }
    learnedGrid.innerHTML = '';

    allLearned.forEach(item => {
        const card = document.createElement('div');
        card.className = 'kanji-card learned';

        // Furigana (hiragana reading) on top of the kanji
        const reading = getHiraganaReading(item);
        if (reading) {
            const furigana = document.createElement('span');
            furigana.className = 'furigana';
            furigana.innerText = reading;
            card.appendChild(furigana);
        }

        // Kanji character
        const kanjiChar = document.createElement('span');
        kanjiChar.className = 'kanji-char';
        kanjiChar.innerText = item.char;
        card.appendChild(kanjiChar);

        learnedGrid.appendChild(card);
    });
}

// Load saved learned kanji on startup, then fetch kanji data
loadSavedLearnedKanji();
fetchKanjiData();
</arg_value>
<task_progress>
- [x] Read server-config.js to understand OpenRouter AI config
- [x] Read current config.js (OpenRouter already added)
- [x] Update script.js to support OpenRouter
- [x] Update .gitignore for server-config.js
- [x] Update config.example.js
- [x] Fix useProxy flag preventing direct API calls
- [x] Update config.js to use direct API calls (no proxy)
- [x] Update server.js to port 3001
- [x] Start proxy server
- [x] Verify proxy server is working
- [x] Verify app falls back gracefully when all providers fail
- [x] Inform user server is already running
- [x] Confirm app works without AI credits
- [x] Switch to direct Gemini API (no proxy)
- [x] Add Myanmar translations to kanjidata.js
- [x] Fix duplicate fs declaration
- [x] Run translation script
- [x] Verify Myanmar text added (1,977/2,136 kanji translated)
- [x] Delete unnecessary files
- [x] Create package.json for Vercel deployment
- [x] Configure vercel.json for static site deployment
- [x] Fix Vercel deployment error
- [x] Prepare for Vercel environment variables
- [x] Deploy to Vercel
- [x] Fix 404 error
- [x] Redeploy successfully
- [x] Update server.js to serve static files
- [x] Rededeply to Vercel with static file serving
- [x] Update config.js to use only Gemini with env var
- [x] Redeploy to Vercel with Gemini env var
- [x] Final redeploy to Vercel
- [x] Fix server.js 404 error handling
- [x] Fix server.js to use absolute paths
- [x] Make server-config.js optional for Vercel
- [x] Redeploy with optional server-config.js
- [x] Configure vercel.json for proper static site deployment
- [x] Redeploy as static site
- [x] Simplify vercel.json to let Vercel auto-detect
- [x] Redeploy with simplified vercel.json
- [x] Remove server.js for pure static deployment
- [x] Remove package.json for pure static deployment
- [x] Create api/index.js for Vercel static site
- [x] Remove api folder
- [x] Add package.json back for static site
- [x] Remove package.json again
- [x] Configure vercel.json for static files
- [x] Create minimal server.js for Vercel
- [x] Guide user to delete and recreate Vercel project
- [x] Fix script.js to load from kanjidata.js
- [ ] Push to GitHub
- [ ] Redeploy to Vercel
</task_progress>
</write_to_file>