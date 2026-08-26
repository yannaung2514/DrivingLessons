const fs = require('fs');
const path = require('path');

const signs = JSON.parse(fs.readFileSync('_extracted_signs.json', 'utf8'));
const imgDir = './規制標識一覧 - 禁止行為を伝えるための標識_files';

// Myanmar translations for common terms
const myanmarTranslations = {
    '通行止め': 'လမ်းပိတ်',
    '車両通行止め': 'ယာဉ်လမ်းပိတ်',
    '車両進入禁止': 'ယာဉ်ဝင်ရောက်ခွင့်မရှိ',
    '二輪の自動車以外の自動車通行止め': 'နှီးယာဉ်မှလွဲ၍ မော်တော်ယာဉ်လမ်းပိတ်',
    '大型貨物自動車等通行止め': 'ကြီးမားသောကုန်တင်ယာဉ်များ လမ်းပိတ်',
    '二輪の自動車・ 原動機付自転車通行止め': 'နှီးယာဉ်နှင့် မော်တော်ဆိုင်ကယ် လမ်းပိတ်',
    '自転車通行止め': 'စက်ဘီးလမ်းပိတ်',
    '大型自動二輪車 及び普通自動二輪車 二人乗り通行禁止': 'ကြီးမားသောမော်တော်ဆိုင်ကယ် နှစ်ယောက်စီးခွင့်မရှိ',
    '指定方向外進行禁止': 'သတ်မှတ်လမ်းကြောင်းမှလွဲ၍ သွားခွင့်မရှိ',
    '車両横断禁止': 'ယာဉ်ဖြတ်ကူးခွင့်မရှိ',
    '駐停車禁止': 'ရပ်နားခွင့်နှင့် ရပ်တန့်ခွင့်မရှိ',
    '時間制限駐車区間': 'အချိန်ကန့်သတ်ရပ်နားနယ်',
    '重量制限': 'အလေးချိန်ကန့်သတ်',
    '高さ制限': 'အမြင့်ကန့်သတ်',
    '最大幅': 'အကျယ်ဆုံး',
    '最高速度': 'အမြန်ဆုံးအမြန်နှုန်း',
    '最低速度': 'အနိမ့်ဆုံးအမြန်နှုန်း',
    '自転車専用': 'စက်ဘီးသီးသန့်',
    '自転車及び歩行者専用': 'စက်ဘီးနှင့် လမ်းလျှောက်သူသီးသန့်',
    '歩行者専用': 'လမ်းလျှောက်သူသီးသန့်',
    '一方通行': 'တစ်လမ်းသွား',
    '自転車一方通行': 'စက်ဘီးတစ်လမ်းသွား',
    '車両通行区分': 'ယာဉ်သွားလာခွင့်ခွဲခြား',
    'けん引自動車の高速自動車国道通行区分': 'ဆွဲယာဉ် အမြန်လမ်းသွားလာခွင့်ခွဲခြား',
    '専用通行帯': 'သီးသန့်သွားလာလမ်းကြောင်း',
    '進行方向別通行区分': 'သွားလာရာလမ်းကြောင်းအလိုက် ခွဲခြား',
    '環状の交差点における右回り通行': 'ဝိုင်းပတ်လမ်းဆုံတွင် ညာဘက်ပတ်သွား',
    '直角駐車': 'ထောင့်မှန်ရပ်နား',
    '警笛鳴らせ': 'ဟွန်းတီးပါ',
    '徐行': 'ဖြည်းဖြည်းမောင်း',
    '一時停止': 'ခဏရပ်',
    '歩行者横断禁止': 'လမ်းလျှောက်သူ ဖြတ်ကူးခွင့်မရှိ'
};

function getImageBase64(imgPath) {
    const fullPath = path.join(imgDir, path.basename(imgPath));
    if (!fs.existsSync(fullPath)) {
        console.log(`Warning: Image not found: ${fullPath}`);
        return null;
    }
    const imgData = fs.readFileSync(fullPath);
    return `data:image/gif;base64,${imgData.toString('base64')}`;
}

function createSVGWithImage(base64Img) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
  <rect width="400" height="300" fill="#f0f4f8"/>
  <image href="${base64Img}" x="137.5" y="37.5" width="125" height="125"/>
  <text x="200" y="200" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#333">
    規制標識
  </text>
</svg>`;
}

const rules = [];
let successCount = 0;

signs.forEach((sign, index) => {
    const base64Img = getImageBase64(sign.imageSrc);
    if (!base64Img) return;
    
    const svg = createSVGWithImage(base64Img);
    const myanmarTrans = myanmarTranslations[sign.name] || sign.description;
    
    // Generate reading (simple conversion - just the name as-is for now)
    const reading = sign.name;
    
    rules.push({
        id: `reg-${sign.num.toString().padStart(3, '0')}`,
        title: sign.name,
        category: '規制',
        svg: svg,
        reading: reading,
        jp: sign.description || sign.name,
        myanmar: myanmarTrans
    });
    
    successCount++;
    console.log(`${successCount}. ${sign.name} - OK`);
});

// Write to a new file first
fs.writeFileSync('_new_regulatory_rules.js', 
    `// New regulatory signs extracted from HTML\n` +
    `const newRegulatoryRules = ${JSON.stringify(rules, null, 2)};\n`
);

console.log(`\nGenerated ${rules.length} rules`);
console.log('Saved to _new_regulatory_rules.js');
