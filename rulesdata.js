// ============================================================
// 日本の交通ルール 学習データ (Japanese Traffic Rules Study Data)
// Each rule has: id, title (Japanese), reading (hiragana),
// jp (Japanese explanation), myanmar (Burmese explanation),
// category, and svg (an SVG illustration string).
// ============================================================
const trafficRulesData = [
  {
    id: 'stop',
    title: '一時停止',
    reading: 'いちじ ていし',
    jp: '「止まれ」の標識がある交差点では、必ず一度止まってから、周りを確認して進みます。',
    myanmar: '「止まれ」ဆိုင်းဘုတ်ရှိသော လမ်းဆုံတွင် မဖြစ်မနေ တစ်ကြိမ်ရပ်တန့်ပြီးမှ ပတ်ဝန်းကျင်ကို သေချာကြည့်၍ ဆက်မောင်းပါ။',
    category: '規制',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="120" width="400" height="70" fill="#888" rx="4"/>
      <rect x="0" y="120" width="400" height="70" fill="url(#rl)" opacity="0.4"/>
      <defs><linearGradient id="rl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#666"/></linearGradient></defs>
      <rect x="0" y="150" width="400" height="6" fill="#fff"/>
      <rect x="0" y="160" width="400" height="6" fill="#fff" opacity="0.7" transform="skewX(-10)"/>
      <g transform="translate(60,90)">
        <polygon points="40,0 74,26 74,74 40,100 6,74 6,26" fill="#c8102e" stroke="#fff" stroke-width="4"/>
        <text x="40" y="66" font-size="46" fill="#fff" text-anchor="middle" font-weight="bold">止</text>
      </g>
      <g transform="translate(250,80)">
        <rect x="0" y="0" width="70" height="36" rx="8" fill="#3792d6"/>
        <rect x="6" y="8" width="30" height="20" rx="3" fill="#a8d8f0"/>
        <rect x="42" y="13" width="22" height="10" rx="3" fill="#5aa7e0"/>
        <circle cx="14" cy="18" r="4" fill="#fff"/>
        <circle cx="22" cy="14" r="3" fill="#c8102e"/>
        <circle cx="30" cy="18" r="3" fill="#c8102e"/>
      </g>
      <text x="40" y="245" font-size="15" fill="#333" text-anchor="middle">止まれ</text>
    </svg>`
  },
  {
    id: 'red-light',
    title: '赤信号',
    reading: 'あか しんごう',
    jp: '赤信号では、停止線の手前で必ず止まります。',
    myanmar: 'မီးနီဖြစ်လျှင် ရပ်တန့်ရေးမျဉ်းရှေ့တွင် မဖြစ်မနေရပ်တန့်ရမည်။',
    category: '信号',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#999"/>
      <rect x="0" y="180" width="400" height="3" fill="#fff"/>
      <g transform="translate(150,30)">
        <rect x="0" y="0" width="70" height="180" rx="12" fill="#444"/>
        <rect x="10" y="10" width="50" height="50" rx="25" fill="#ff3b30" opacity="0.95"/>
        <text x="35" y="46" font-size="30" fill="#fff" text-anchor="middle">!</text>
        <rect x="10" y="65" width="50" height="50" rx="25" fill="#333"/>
        <rect x="10" y="120" width="50" height="50" rx="25" fill="#333"/>
        <rect x="30" y="205" width="10" height="60" fill="#555"/>
      </g>
      <g transform="translate(280,120)">
        <rect x="0" y="0" width="90" height="45" rx="8" fill="#3792d6"/>
        <rect x="6" y="8" width="40" height="28" rx="3" fill="#a8d8f0"/>
        <rect x="52" y="16" width="26" height="12" rx="3" fill="#5aa7e0"/>
        <circle cx="18" cy="22" r="5" fill="#fff"/>
        <circle cx="30" cy="16" r="4" fill="#c8102e"/>
        <circle cx="40" cy="22" r="4" fill="#c8102e"/>
      </g>
      <text x="35" y="250" font-size="15" fill="#333" text-anchor="middle">停止線</text>
    </svg>`
  },
{
    id: 'green-light',
    title: '青信号',
    reading: 'あお しんごう',
    jp: '青信号では進むことができますが、すぐに黄色になる場合があるので注意して進みます。',
    myanmar: 'မီးစိမ်းဖြစ်လျှင် ဆက်သွားနိုင်သော်လည်း မီးဝါဖြစ်နိုင်သောကြောင့် သတိထား၍ မောင်းရမည်။',
    category: '信号',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#999"/>
      <rect x="0" y="180" width="400" height="3" fill="#fff"/>
      <g transform="translate(150,30)">
        <rect x="0" y="0" width="70" height="180" rx="12" fill="#444"/>
        <rect x="10" y="10" width="50" height="50" rx="25" fill="#333333" opacity="0.4"/>
        <rect x="10" y="65" width="50" height="50" rx="25" fill="#333" opacity="0.4"/>
        <rect x="10" y="120" width="50" height="50" rx="25" fill="#34c759"/>
        <rect x="30" y="205" width="10" height="60" fill="#555"/>
      </g>
      <g transform="translate(280,120)">
        <rect x="0" y="0" width="90" height="45" rx="8" fill="#3792d6"/>
        <circle cx="18" cy="22" r="6" fill="#fff"/>
        <text x="18" y="26" font-size="12" fill="#333" text-anchor="middle">→</text>
        <rect x="30" y="30" width="20" height="10" rx="3" fill="#ffd60a"/>
      </g>
      <text x="35" y="250" font-size="15" fill="#333" text-anchor="middle">進む</text>
    </svg>`
  },
  {
    id: 'pedestrian',
    title: '歩行者優先',
    reading: 'ほこうしゃ ゆうせん',
    jp: '横断歩道では、歩行者がいたら必ず止まって、歩行者を優先させます。',
    myanmar: 'ခြဲကူးလမ်း (လမ်းဖြတ်ကူးရာနေရာ) တွင် လူကူးများရှိလျှင် မဖြစ်မနေရပ်တန့်၍ ခြဲကူးသူများကို ဦးစားပေးရမည်။',
    category: '歩行者',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#999"/>
      <g fill="#fff">
        <rect x="20" y="150" width="22" height="70"/>
        <rect x="70" y="150" width="22" height="70"/>
        <rect x="120" y="150" width="22" height="70"/>
        <rect x="170" y="150" width="22" height="70"/>
        <rect x="220" y="150" width="22" height="70"/>
        <rect x="270" y="150" width="22" height="70"/>
        <rect x="320" y="150" width="22" height="70"/>
        <rect x="370" y="150" width="22" height="70"/>
      </g>
      <g transform="translate(120,80)">
        <circle cx="22" cy="16" r="10" fill="#f5c242"/>
        <rect x="14" y="34" width="16" height="34" rx="8" fill="#3792d6"/>
        <rect x="12" y="62" width="20" height="8" rx="4" fill="#1f2937"/>
        <rect x="12" y="78" width="20" height="8" rx="4" fill="#1f2937"/>
        <rect x="6" y="62" width="6" height="26" rx="3" fill="#c8102e"/>
        <rect x="32" y="62" width="6" height="26" rx="3" fill="#c8102e"/>
      </g>
      <g transform="translate(280,95)">
        <rect x="0" y="0" width="90" height="45" rx="8" fill="#3792d6"/>
        <rect x="6" y="8" width="40" height="28" rx="3" fill="#a8d8f0"/>
        <rect x="52" y="16" width="26" height="12" rx="3" fill="#5aa7e0"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">歩行者を優先</text>
    </svg>`
  },
  {
    id: 'slow-down',
    title: '徐行',
    reading: 'じょこう',
    jp: '「徐行」の標識では、すぐに止まれるくらいの速さでゆっくり進みます。',
    myanmar: '「ဖြေးဖြေးမောင်း»»ဆိုင်းဘုတ်တွင် ချက်ချင်းရပ်နိုင်သော အမြန်နှုန်းဖြင့် ဖြေးဖြေးမောင်းရမည်။',
    category: '規制',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#999"/>
      <rect x="0" y="180" width="400" height="3" fill="#fff"/>
      <g transform="translate(60,70)">
        <circle cx="50" cy="50" r="50" fill="#fff" stroke="#c8102e" stroke-width="10"/>
        <text x="50" y="62" font-size="36" fill="#333" text-anchor="middle" font-weight="bold">徐行</text>
      </g>
      <g transform="translate(250,90)">
        <rect x="0" y="0" width="90" height="45" rx="8" fill="#3792d6"/>
        <rect x="6" y="8" width="40" height="28" rx="3" fill="#a8d8f0"/>
        <rect x="52" y="16" width="26" height="12" rx="3" fill="#5aa7e0"/>
        <circle cx="16" cy="22" r="4" fill="#fff"/>
      </g>
      <text x="130" y="250" font-size="15" fill="#333" text-anchor="middle">ゆっくり 進む</text>
    </svg>`
  },
  {
    id: 'speed-limit',
    title: '最高速度',
    reading: 'さいこう そくど',
    jp: '速度の標識がある道路では、その速度を超えて運転してはいけません。',
    myanmar: 'မြန်နှုန်းကန့်သတ်ချက်ဆိုင်းဘုတ်ရှိသော လမ်းတွင် ထိုအမြန်နှုန်းထက် ကျော်၍ မမောင်းရပါ။',
    category: '速度',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#999"/>
      <rect x="0" y="180" width="400" height="3" fill="#fff"/>
      <g transform="translate(60,70)">
        <circle cx="50" cy="50" r="50" fill="#fff" stroke="#c8102e" stroke-width="10"/>
        <text x="50" y="62" font-size="40" fill="#333" text-anchor="middle" font-weight="bold">40</text>
      </g>
      <g transform="translate(250,90)">
        <rect x="0" y="0" width="90" height="45" rx="8" fill="#3792d6"/>
        <rect x="6" y="8" width="40" height="28" rx="3" fill="#a8d8f0"/>
        <rect x="52" y="16" width="26" height="12" rx="3" fill="#5aa7e0"/>
        <circle cx="16" cy="22" r="4" fill="#fff"/>
      </g>
      <text x="130" y="250" font-size="15" fill="#333" text-anchor="middle">40km まで</text>
    </svg>`
  },
{
    id: 'no-entry',
    title: '進入禁止',
    reading: 'しんにゅう きんし',
    jp: '「進入禁止」の標識は、その先に車が入ってはいけないことを示します。',
    myanmar: '「ဝင်ရောက်ခြင်းတားမြစ်»ဆိုင်းဘုတ်သည် ထိုရှေ့သို့ ယာဉ်များ ဝင်ရောက်ခြင်း မပြုရကြောင်း ပြသသည်။',
    category: '規制',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#999"/>
      <rect x="0" y="180" width="400" height="3" fill="#fff"/>
      <g transform="translate(60,70)">
        <circle cx="50" cy="50" r="44" fill="#fff" stroke="#c8102e" stroke-width="10"/>
        <rect x="12" y="42" width="76" height="16" rx="8" fill="#fff"/>
      </g>
      <text x="200" y="250" font-size="15" fill="#333" text-anchor="middle">入る 禁止</text>
    </svg>`
  },
  {
    id: 'one-way',
    title: '一方通行',
    reading: 'いっぽう つうこう',
    jp: '「一方通行」の標識は、矢印の方向にだけ進むことができることを示します。',
    myanmar: '«တစ်လမ်းသွား»ဆိုင်းဘုတ်သည် မြှားညွှန်သည့်ဘက်သို့သာ သွားနိုင်ကြောင်း ပြသသည်။',
    category: '規制',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#999"/>
      <rect x="0" y="180" width="400" height="3" fill="#fff"/>
      <g transform="translate(60,80)">
        <rect x="0" y="0" width="180" height="70" rx="10" fill="#2471c8"/>
        <polygon points="150,6 190,35 150,64 150,48 120,48 120,22 150,22" fill="#fff"/>
        <text x="20" y="45" font-size="26" fill="#fff" font-weight="bold">⇒</text>
      </g>
      <g transform="translate(280,90)">
        <rect x="0" y="0" width="90" height="45" rx="8" fill="#3792d6"/>
        <rect x="6" y="8" width="40" height="28" rx="3" fill="#a8d8f0"/>
        <rect x="52" y="16" width="26" height="12" rx="3" fill="#5aa7e0"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">矢印の方向のみ</text>
    </svg>`
  },
  {
    id: 'no-overtake',
    title: '追い越し禁止',
    reading: 'おいこし きんし',
    jp: '「追い越し禁止」の標識のある道路では、前の車を追い越してはいけません。',
    myanmar: '«ကျော်တင်ခြင်းတားမြစ်»ဆိုင်းဘုတ်ရှိသော လမ်းတွင် ရှေ့ယာဉ်ကို ကျော်တက်၍ မပြေးရပါ။',
    category: '規制',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#999"/>
      <rect x="250" y="150" width="70" height="3" fill="#fff"/>
      <g transform="translate(60,85)">
        <circle cx="50" cy="45" r="45" fill="#fff" stroke="#c8102e" stroke-width="9"/>
        <g fill="#333">
          <rect x="20" y="30" width="30" height="16" rx="4"/>
          <rect x="52" y="30" width="30" height="16" rx="4"/>
          <circle cx="30" cy="50" r="6" fill="#c8102e"/>
          <circle cx="72" cy="50" r="6" fill="#c8102e"/>
        </g>
        <line x1="15" y1="15" x2="85" y2="75" stroke="#c8102e" stroke-width="6"/>
      </g>
      <text x="200" y="250" font-size="15" fill="#333" text-anchor="middle">追い越し 禁止</text>
    </svg>`
  },
  {
    id: 'no-right-turn',
    title: '右折禁止',
    reading: 'うせつ きんし',
    jp: '「右折禁止」の標識では、右へ曲がってはいけません。',
    myanmar: '«ညာဘက်ကွေ့ခြင်းတားမြစ်»ဆိုင်းဘုတ်တွင် ညာဘက်သို့ ကွေ့၍ မရပါ။',
    category: '規制',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="160" height="70" fill="#999"/>
      <rect x="240" y="150" width="160" height="70" fill="#999"/>
      <rect x="0" y="180" width="160" height="3" fill="#fff"/>
      <rect x="240" y="180" width="160" height="3" fill="#fff"/>
      <g transform="translate(60,80)">
        <circle cx="50" cy="45" r="45" fill="#fff" stroke="#c8102e" stroke-width="9"/>
        <path d="M20 45 h50 l-10 -10 m10 10 l-10 10" stroke="#333" stroke-width="6" fill="none" stroke-linecap="round"/>
        <line x1="15" y1="15" x2="85" y2="75" stroke="#c8102e" stroke-width="7"/>
      </g>
      <rect x="200" y="120" width="10" height="100" fill="#e0e0e0"/>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">右折 禁止</text>
    </svg>`
  },
{
    id: 'railway',
    title: '踏切',
    reading: 'ふみきり',
    jp: '踏切では、遮断機がおりていたら絶対に進入してはいけません。警報機が鳴っても止まります。',
    myanmar: 'ရထားလမ်းဖြတ်ကူးရာတွင် အတားအဆီးကျနေလျှင် လုံးဝဝင်ရောက်ခြင်း မပြုရပါ။ သတိပေးချောင်းမည်လျှင်လည်း ရပ်တန့်ရမည်။',
    category: '踏切',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="200" width="400" height="50" fill="#999"/>
      <rect x="0" y="215" width="400" height="3" fill="#fff"/>
      <g transform="translate(150,60)">
        <rect x="0" y="0" width="100" height="140" fill="#ffd60a" stroke="#333" stroke-width="3"/>
        <rect x="0" y="60" width="100" height="6" fill="#333"/>
        <circle cx="50" cy="30" r="12" fill="#333"/>
        <text x="50" y="36" font-size="14" fill="#fff" text-anchor="middle">×</text>
        <circle cx="50" cy="100" r="12" fill="#333"/>
        <text x="50" y="106" font-size="14" fill="#fff" text-anchor="middle">×</text>
      </g>
      <g transform="translate(280,120)">
        <rect x="0" y="0" width="90" height="45" rx="8" fill="#3792d6"/>
        <rect x="6" y="8" width="40" height="28" rx="3" fill="#a8d8f0"/>
        <rect x="52" y="16" width="26" height="12" rx="3" fill="#5aa7e0"/>
      </g>
      <text x="200" y="275" font-size="15" fill="#333" text-anchor="middle">踏切</text>
    </svg>`
  },
  {
    id: 'no-parking',
    title: '駐車禁止',
    reading: 'ちゅうしゃ きんし',
    jp: '「駐車禁止」の標識では、車を止めて離れてはいけません。',
    myanmar: '«ယာဉ်ရပ်နားခြင်းတားမြစ်»ဆိုင်းဘုတ်တွင် ယာဉ်ကိုရပ်နားပြီး နေရာစွန့်ခွာ၍ မရပါ။',
    category: '規制',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#999"/>
      <rect x="0" y="180" width="400" height="3" fill="#fff"/>
      <g transform="translate(60,70)">
        <circle cx="50" cy="50" r="44" fill="#fff" stroke="#c8102e" stroke-width="10"/>
        <rect x="28" y="42" width="44" height="16" rx="8" fill="#2471c8"/>
      </g>
      <g transform="translate(240,95)">
        <rect x="0" y="0" width="90" height="45" rx="8" fill="#3792d6"/>
        <rect x="6" y="8" width="40" height="28" rx="3" fill="#a8d8f0"/>
        <rect x="52" y="16" width="26" height="12" rx="3" fill="#5aa7e0"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">駐車 禁止</text>
    </svg>`
  },
  {
    id: 'priority-road',
    title: '優先道路',
    reading: 'ゆうせん どうろ',
    jp: '「優先道路」の標識がある道路では、その道路に入ってくる車より自分の車が優先です。',
    myanmar: '«ဦးစားပေးလမ်း»ဆိုင်းဘုတ်ရှိသော လမ်းတွင် ထိုလမ်းထဲဝင်လာသော ယာဉ်များထက် မိမိယာဉ်က ဦးစားပေးဖြစ်သည်။',
    category: '優先',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#999"/>
      <rect x="0" y="180" width="400" height="3" fill="#fff"/>
      <g transform="translate(60,70)">
        <polygon points="50,5 90,50 50,95 10,50" fill="#ffd60a" stroke="#333" stroke-width="3"/>
        <polygon points="50,20 78,50 50,80 22,50" fill="#fff"/>
        <path d="M25 50 h30" stroke="#333" stroke-width="5" fill="none"/>
        <polygon points="55,42 68,50 55,58" fill="#333"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">優先道路</text>
    </svg>`
  },
  {
    id: 'seatbelt',
    title: 'シートベルト',
    reading: 'シートベルト',
    jp: '運転者と同乗者は、必ずシートベルトを着用しなければなりません。',
    myanmar: 'ယာဉ်မောင်းသူနှင့် ခရီးသည်များသည် မဖြစ်မနေ ခါးပတ်ပတ်ရမည်။',
    category: '安全',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <g transform="translate(120,40)">
        <circle cx="55" cy="40" r="20" fill="#f5c242"/>
        <rect x="35" y="70" width="40" height="55" rx="14" fill="#3792d6"/>
        <rect x="30" y="115" width="50" height="12" rx="6" fill="#1f2937"/>
        <rect x="30" y="133" width="50" height="12" rx="6" fill="#1f2937"/>
        <line x1="45" y1="70" x2="30" y2="130" stroke="#c8102e" stroke-width="8" stroke-linecap="round"/>
        <line x1="66" y1="70" x2="80" y2="130" stroke="#c8102e" stroke-width="8" stroke-linecap="round"/>
      </g>
      <g transform="translate(250,60)">
        <rect x="0" y="0" width="90" height="45" rx="8" fill="#3792d6"/>
        <rect x="6" y="8" width="40" height="28" rx="3" fill="#a8d8f0"/>
        <rect x="52" y="16" width="26" height="12" rx="3" fill="#5aa7e0"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">シートベルト着用!</text>
    </svg>`
  },
{
    id: 'no-phone',
    title: '携帯電話の使用禁止',
    reading: 'けいたいでんわの しようきんし',
    jp: '運転中に携帯電話を手に持って通話したり、操作したりしてはいけません。',
    myanmar: 'မောင်းနှင်နေစဉ် မိုဘိုင်းဖုန်းကို ကိုင်ဆောင်၍ စကားပြောခြင်း၊ ထိန်းချုပ်ခြင်း မပြုရပါ။',
    category: '安全',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="200" width="400" height="50" fill="#999"/>
      <g transform="translate(60,60)">
        <circle cx="50" cy="50" r="46" fill="#fff" stroke="#c8102e" stroke-width="9"/>
        <rect x="38" y="22" width="24" height="42" rx="6" fill="#333"/>
        <circle cx="50" cy="58" r="4" fill="#fff"/>
        <line x1="15" y1="18" x2="85" y2="82" stroke="#c8102e" stroke-width="7"/>
      </g>
      <g transform="translate(250,90)">
        <rect x="0" y="0" width="90" height="45" rx="8" fill="#3792d6"/>
        <rect x="6" y="8" width="40" height="28" rx="3" fill="#a8d8f0"/>
        <rect x="52" y="16" width="26" height="12" rx="3" fill="#5aa7e0"/>
      </g>
      <text x="200" y="275" font-size="15" fill="#333" text-anchor="middle">運転中 スマホ 禁止</text>
    </svg>`
  },
  {
    id: 'drunk-driving',
    title: '飲酒運転の禁止',
    reading: 'いんしゅ うんてんの きんし',
    jp: 'お酒を飲んで運転することは、絶対にしてはいけません。酒気帯び運転も禁止です。',
    myanmar: 'အရက်သောက်၍ မောင်းနှင်ခြင်းကို လုံးဝမပြုရပါ။ အရက်မူးယစ်ပြီး မောင်းနှင်ခြင်းလည်း တားမြစ်သည်။',
    category: '安全',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="200" width="400" height="50" fill="#999"/>
      <g transform="translate(60,60)">
        <circle cx="50" cy="50" r="46" fill="#fff" stroke="#c8102e" stroke-width="9"/>
        <path d="M35 30 h30 l-4 34 h-22 z" fill="#ffd60a" stroke="#333" stroke-width="2"/>
        <rect x="42" y="20" width="16" height="10" rx="3" fill="#333"/>
        <line x1="15" y1="18" x2="85" y2="82" stroke="#c8102e" stroke-width="7"/>
      </g>
      <g transform="translate(250,90)">
        <rect x="0" y="0" width="90" height="45" rx="8" fill="#3792d6"/>
        <rect x="6" y="8" width="40" height="28" rx="3" fill="#a8d8f0"/>
        <rect x="52" y="16" width="26" height="12" rx="3" fill="#5aa7e0"/>
      </g>
      <text x="200" y="275" font-size="15" fill="#333" text-anchor="middle">飲酒運転 禁止</text>
    </svg>`
  },
  {
    id: 'following-distance',
    title: '車間距離',
    reading: 'しゃかん きょり',
    jp: '前の車と十分な距離を保ちます。スピードが速いほど、距離を長く取ります。',
    myanmar: 'ရှေ့ယာဉ်နှင့် လုံလောက်သော အကွာအဝေးကို ထားရမည်။ အမြန်နှုန်းမြင့်လေ အကွာအဝေးကို ပိုရှည်စွာ ထားရမည်။',
    category: '安全',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="200" width="400" height="50" fill="#999"/>
      <g transform="translate(70,120)">
        <rect x="0" y="0" width="90" height="40" rx="10" fill="#c8102e"/>
        <rect x="10" y="-8" width="40" height="12" rx="4" fill="#a8d8f0"/>
        <rect x="50" y="-8" width="30" height="12" rx="4" fill="#a8d8f0"/>
        <circle cx="20" cy="45" r="9" fill="#333"/>
        <circle cx="70" cy="45" r="9" fill="#333"/>
      </g>
      <g transform="translate(230,120)">
        <rect x="0" y="0" width="90" height="40" rx="10" fill="#3792d6"/>
        <rect x="10" y="-8" width="40" height="12" rx="4" fill="#a8d8f0"/>
        <rect x="50" y="-8" width="30" height="12" rx="4" fill="#a8d8f0"/>
        <circle cx="20" cy="45" r="9" fill="#333"/>
        <circle cx="70" cy="45" r="9" fill="#333"/>
      </g>
      <line x1="165" y1="140" x2="225" y2="140" stroke="#333" stroke-width="3" stroke-dasharray="6,6"/>
      <text x="195" y="135" font-size="14" fill="#333" text-anchor="middle">距離</text>
      <text x="200" y="275" font-size="15" fill="#333" text-anchor="middle">車間距離を保つ</text>
    </svg>`
  },
  {
    id: 'night-driving',
    title: '夜間のライト',
    reading: 'やかんの ライト',
    jp: '夜は必ず前照灯（ヘッドライト）をつけます。対向車がいる時は、ライトを下向きにします。',
    myanmar: 'ညအချိန်တွင် မဖြစ်မနေ ရှေ့မီးကို ဖွင့်ရမည်။ ရှေ့မှ ယာဉ်လာလျှင် မီးကို အောက်ဘက်သို့ လှည့်ရမည်။',
    category: '安全',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#0f1b3d"/>
      <circle cx="330" cy="50" r="30" fill="#f5f5dc"/>
      <g transform="translate(120,150)">
        <rect x="0" y="0" width="90" height="40" rx="10" fill="#c8102e"/>
        <rect x="10" y="-8" width="40" height="12" rx="4" fill="none"/>
        <rect x="50" y="-8" width="30" height="12" rx="4" fill="none"/>
        <circle cx="20" cy="45" r="9" fill="#111"/>
        <circle cx="70" cy="45" r="9" fill="#111"/>
        <polygon points="12,10 30,10 40,30 0,30" fill="#fff7c0" opacity="0.9"/>
      </g>
      <rect x="0" y="200" width="400" height="50" fill="#333"/>
      <text x="200" y="275" font-size="15" fill="#ccd" text-anchor="middle">夜間 ライトを点灯</text>
    </svg>`
  },
{
    id: 'intersection',
    title: '交差点の右左折',
    reading: 'こうさてんの うさせつ',
    jp: '交差点で曲がる時は、曲がる方向の手前で合図（ウインカー）を出してから、十分に減速します。',
    myanmar: 'လမ်းဆုံတွင် ကွေ့သောအခါ ကွေ့မည့်ဘက်၏ အရှေ့တွင် အချက်ပြီ (မီးပြ) ကို ပေးပြီးမှ လုံလောက်စွာ အမြန်နှုန်းလျှော့ရမည်။',
    category: '交差点',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="130" width="400" height="40" fill="#999"/>
      <rect x="180" y="0" width="40" height="300" fill="#999"/>
      <rect x="0" y="145" width="400" height="3" fill="#fff"/>
      <rect x="195" y="0" width="3" height="300" fill="#fff"/>
      <g transform="translate(120,80)">
        <polygon points="0,40 40,0 40,40" fill="#ffd60a" stroke="#333" stroke-width="2" transform="rotate(180) translate(-40,-40)"/>
        <rect x="-10" y="40" width="60" height="14" rx="4" fill="#3792d6"/>
        <polygon points="30,40 44,28 44,52" fill="#ffd60a"/>
      </g>
      <text x="200" y="275" font-size="15" fill="#333" text-anchor="middle">ウインカーを出す</text>
    </svg>`
  },
  {
    id: 'merging',
    title: '合流',
    reading: 'ごうりゅう',
    jp: '本線に合流する時は、本線を走る車の進行を妨げないように、速度を合わせて安全に合流します。',
    myanmar: 'ပင်မလမ်းသို့ ရောနှောဝင်ရောက်သောအခါ ပင်မလမ်းရှိ ယာဉ်များ၏ သွားလာမှုကို မနှောင့်ယှက်စေရန် အမြန်နှုန်းကို ညှိ၍ ဘေးကင်းစွာ ဝင်ရောက်ရမည်။',
    category: '高速',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="120" width="400" height="60" fill="#999"/>
      <rect x="0" y="145" width="400" height="3" fill="#fff"/>
      <path d="M0 260 L200 260 L260 150 L260 120 L340 120" fill="none" stroke="#999" stroke-width="40"/>
      <path d="M0 260 L200 260 L260 150 L260 120 L340 120" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="20,10"/>
      <g transform="translate(60,200) rotate(20)">
        <rect x="0" y="0" width="80" height="34" rx="9" fill="#c8102e"/>
        <circle cx="16" cy="38" r="8" fill="#333"/>
        <circle cx="64" cy="38" r="8" fill="#333"/>
      </g>
      <g transform="translate(250,70)">
        <rect x="0" y="0" width="80" height="34" rx="9" fill="#3792d6"/>
        <circle cx="16" cy="38" r="8" fill="#333"/>
        <circle cx="64" cy="38" r="8" fill="#333"/>
      </g>
      <text x="200" y="290" font-size="15" fill="#333" text-anchor="middle">合流</text>
    </svg>`
  },
  {
    id: 'left-turn',
    title: '左側通行',
    reading: 'ひだりがわ つうこう',
    jp: '日本では、車は道路の左側を通行します。',
    myanmar: 'ဂျပန်နိုင်ငံတွင် ယာဉ်များသည် လမ်း၏ ဘယ်ဘက်ခြမ်းကို သွားလာရသည်။',
    category: '基本',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="120" width="400" height="80" fill="#999"/>
      <line x1="200" y1="120" x2="200" y2="200" stroke="#fff" stroke-width="4" stroke-dasharray="12,8"/>
      <g transform="translate(60,90)">
        <rect x="0" y="0" width="90" height="40" rx="10" fill="#c8102e"/>
        <rect x="10" y="-8" width="40" height="12" rx="4" fill="#a8d8f0"/>
        <rect x="50" y="-8" width="30" height="12" rx="4" fill="#a8d8f0"/>
        <circle cx="20" cy="45" r="9" fill="#333"/>
        <circle cx="70" cy="45" r="9" fill="#333"/>
      </g>
      <g transform="translate(250,150)">
        <rect x="0" y="0" width="90" height="40" rx="10" fill="#3792d6"/>
        <rect x="10" y="-8" width="40" height="12" rx="4" fill="#a8d8f0"/>
        <rect x="50" y="-8" width="30" height="12" rx="4" fill="#a8d8f0"/>
        <circle cx="20" cy="45" r="9" fill="#333"/>
        <circle cx="70" cy="45" r="9" fill="#333"/>
      </g>
      <text x="100" y="230" font-size="15" fill="#333" text-anchor="middle">左側</text>
      <text x="295" y="230" font-size="15" fill="#333" text-anchor="middle">右側(対向)</text>
      <text x="200" y="280" font-size="15" fill="#333" text-anchor="middle">左側を通行</text>
    </svg>`
  },
{
    id: 'give-way',
    title: '右方優先',
    reading: 'うほう ゆうせん',
    jp: '信号のない交差点では、右から来る車を優先させます。',
    myanmar: 'မီးပွိုင့်မရှိသော လမ်းဆုံတွင် ညာဘက်မှ လာသော ယာဉ်များကို ဦးစားပေးရမည်။',
    category: '優先',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="130" width="400" height="40" fill="#999"/>
      <rect x="180" y="0" width="40" height="300" fill="#999"/>
      <rect x="0" y="145" width="400" height="3" fill="#fff"/>
      <rect x="195" y="0" width="3" height="300" fill="#fff"/>
      <g transform="translate(120,80)">
        <rect x="0" y="0" width="90" height="40" rx="10" fill="#c8102e"/>
        <circle cx="20" cy="45" r="9" fill="#333"/>
        <circle cx="70" cy="45" r="9" fill="#333"/>
      </g>
      <g transform="translate(250,40)">
        <rect x="-10" y="0" width="90" height="40" rx="10" fill="#3792d6" transform="rotate(90,35,20)"/>
        <circle cx="25" cy="45" r="9" fill="#333"/>
        <circle cx="75" cy="45" r="9" fill="#333"/>
      </g>
      <path d="M150 150 L120 120" stroke="#e67e22" stroke-width="4" marker-end="url(#arr)"/>
      <defs><marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#e67e22"/></marker></defs>
      <text x="200" y="90" font-size="15" fill="#e67e22" text-anchor="middle">右から来る車!</text>
      <text x="200" y="280" font-size="15" fill="#333" text-anchor="middle">右方優先</text>
    </svg>`
  },
  {
    id: 'no-u-turn',
    title: '転回禁止',
    reading: 'てんかい きんし',
    jp: '「転回禁止」の標識では、車をUターンさせてはいけません。',
    myanmar: '«U ကွေ့ခြင်းတားမြစ်»ဆိုင်းဘုတ်တွင် ယာဉ်ကို U တစ်ကွေ့ လှည့်၍ မရပါ။',
    category: '規制',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#999"/>
      <rect x="0" y="180" width="400" height="3" fill="#fff"/>
      <g transform="translate(60,80)">
        <circle cx="50" cy="45" r="45" fill="#fff" stroke="#c8102e" stroke-width="9"/>
        <path d="M20 45 a30 30 0 1 1 60 0 h-20 a10 10 0 1 0 -20 0 h30" fill="none" stroke="#333" stroke-width="6" stroke-linecap="round"/>
        <line x1="15" y1="15" x2="85" y2="75" stroke="#c8102e" stroke-width="7"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">転回(Uターン) 禁止</text>
    </svg>`
  },
{
    id: 'yellow-light',
    title: '黄信号',
    reading: 'き しんごう',
    jp: '黄信号では、停止線の手前で止まれる場合は止まります。止まれない場合は、そのまま進みます。',
    myanmar: 'မီးဝါဖြစ်လျှင် ရပ်တန့်ရေးမျဉ်းရှေ့တွင် ရပ်နိုင်လျှင် ရပ်တန့်ရမည်။ မရပ်နိုင်လျှင် ဆက်သွားရမည်။',
    category: '信号',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#999"/>
      <rect x="0" y="180" width="400" height="3" fill="#fff"/>
      <g transform="translate(150,30)">
        <rect x="0" y="0" width="70" height="180" rx="12" fill="#444"/>
        <rect x="10" y="10" width="50" height="50" rx="25" fill="#333" opacity="0.4"/>
        <rect x="10" y="65" width="50" height="50" rx="25" fill="#ffcc00"/>
        <rect x="10" y="120" width="50" height="50" rx="25" fill="#333" opacity="0.4"/>
        <rect x="30" y="205" width="10" height="60" fill="#555"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">止まれるなら 止まる</text>
    </svg>`
  },
  {
    id: 'snow-road',
    title: '雪道',
    reading: 'ゆきみち',
    jp: '雪や凍結した道路では、スリップしやすいので、ゆっくり・安全に運転します。',
    myanmar: 'နှင်း သို့မဟုတ် ရေခဲသောလမ်းတွင် ချော်လွယ်သောကြောင့် ဖြေးဖြေးဘေးကင်းစွာ မောင်းရမည်။',
    category: '悪天候',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#dfe9f5"/>
      <rect x="0" y="150" width="400" height="70" fill="#c8d6e5"/>
      <rect x="0" y="180" width="400" height="3" fill="#fff"/>
      <g fill="#fff">
        <circle cx="60" cy="40" r="8"/><circle cx="100" cy="30" r="9"/><circle cx="140" cy="45" r="7"/>
        <circle cx="300" cy="35" r="8"/><circle cx="340" cy="50" r="9"/><circle cx="240" cy="25" r="6"/>
      </g>
      <g transform="translate(120,80)">
        <rect x="0" y="0" width="90" height="40" rx="10" fill="#c8102e"/>
        <rect x="10" y="-8" width="40" height="12" rx="4" fill="#a8d8f0"/>
        <rect x="50" y="-8" width="30" height="12" rx="4" fill="#a8d8f0"/>
        <circle cx="20" cy="45" r="9" fill="#333"/>
        <circle cx="70" cy="45" r="9" fill="#333"/>
        <path d="M-10 20 q20 -10 20 0 q20 -10 20 0" stroke="#fff" stroke-width="3" fill="none"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">雪道 ゆっくり</text>
    </svg>`
  },
  {
    id: 'school-zone',
    title: '学校の近く',
    reading: 'がっこうの ちかく',
    jp: '学校の近くでは、子供が飛び出してくることがあるので、特に注意して安全な速度で運転します。',
    myanmar: 'ကျောင်းအနီးတွင် ကလေးများ ရုတ်တရက်ထွက်လာနိုင်သောကြောင့် အထူးသတိပြု၍ ဘေးကင်းသော အမြန်နှုန်းဖြင့် မောင်းရမည်။',
    category: '歩行者',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#999"/>
      <rect x="0" y="180" width="400" height="3" fill="#fff"/>
      <g transform="translate(60,60)">
        <polygon points="50,5 90,50 50,95 10,50" fill="#ffd60a" stroke="#333" stroke-width="3"/>
        <polygon points="50,20 78,50 50,80 22,50" fill="#fff"/>
        <text x="50" y="58" font-size="26" fill="#333" text-anchor="middle">文</text>
      </g>
      <g transform="translate(250,90)">
        <circle cx="22" cy="16" r="10" fill="#f5c242"/>
        <rect x="14" y="34" width="16" height="34" rx="8" fill="#3792d6"/>
        <rect x="12" y="62" width="20" height="8" rx="4" fill="#1f2937"/>
        <rect x="12" y="78" width="20" height="8" rx="4" fill="#1f2937"/>
        <rect x="6" y="62" width="6" height="26" rx="3" fill="#c8102e"/>
        <rect x="32" y="62" width="6" height="26" rx="3" fill="#c8102e"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">学校 注意</text>
    </svg>`
  },
  {
    id: 'no-pass',
    title: '追い抜き禁止',
    reading: 'おいぬき きんし',
    jp: '前の車の横を通り過ぎること（追い抜き）を禁止する標識です。追い越しとは違います。',
    myanmar: 'ရှေ့ယာဉ်၏ဘေးကို ဖြတ်ကျော်ခြင်း (ကျော်သွားခြင်း) ကို တားမြစ်သော ဆိုင်းဘုတ်ဖြစ်သည်။ ကျော်တက်ခြင်းနှင့် မတူပါ။',
    category: '規制',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#999"/>
      <rect x="250" y="150" width="70" height="3" fill="#fff"/>
      <g transform="translate(60,85)">
        <circle cx="50" cy="45" r="45" fill="#fff" stroke="#c8102e" stroke-width="9"/>
        <g fill="#333">
          <rect x="22" y="50" width="30" height="16" rx="4"/>
          <rect x="52" y="50" width="30" height="16" rx="4"/>
          <circle cx="32" cy="70" r="6" fill="#111"/>
          <circle cx="72" cy="70" r="6" fill="#111"/>
        </g>
        <line x1="55" y1="10" x2="55" y2="42" stroke="#c8102e" stroke-width="6"/>
      </g>
      <text x="200" y="250" font-size="15" fill="#333" text-anchor="middle">追い抜き(横を通り過ぎる) 禁止</text>
    </svg>`
  },
  {
    id: 'no-stopping',
    title: '停車禁止',
    reading: 'ていしゃ きんし',
    jp: '「停車禁止」の標識では、車を止めること自体が禁止されています。運転者が離れなくてもダメです。',
    myanmar: '«ယာဉ်ရပ်ခြင်းတားမြစ်»ဆိုင်းဘုတ်တွင် ယာဉ်ရပ်နားခြင်းကိုပင် တားမြစ်ထားသည်။ ယာဉ်မောင်းက မထွက်ခွာရင်တောင် မရပါ။',
    category: '規制',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#999"/>
      <rect x="0" y="180" width="400" height="3" fill="#fff"/>
      <g transform="translate(60,70)">
        <circle cx="50" cy="50" r="44" fill="#fff" stroke="#c8102e" stroke-width="10"/>
        <g stroke="#c8102e" stroke-width="12" stroke-linecap="round">
          <line x1="25" y1="25" x2="75" y2="75"/>
          <line x1="25" y1="75" x2="75" y2="25"/>
        </g>
      </g>
      <g transform="translate(240,95)">
        <rect x="0" y="0" width="90" height="45" rx="8" fill="#3792d6"/>
        <rect x="6" y="8" width="40" height="28" rx="3" fill="#a8d8f0"/>
        <rect x="52" y="16" width="26" height="12" rx="3" fill="#5aa7e0"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">停車(止まるだけでも) 禁止</text>
    </svg>`
  },
  {
    id: 'vehicles-prohibited',
    title: '車両通行止め',
    reading: 'しゃりょう つうこうどめ',
    jp: 'すべての車両（自動車・バイク・自転車など）が、その先に進むことを禁止する標識です。',
    myanmar: 'ယာဉ်အားလုံး (ကား၊ ဆိုင်ကယ်၊ စက်ဘီးစသည်) ထိုရှေ့သို့ ဆက်သွားခြင်းကို တားမြစ်သော ဆိုင်းဘုတ်ဖြစ်သည်။',
    category: '規制',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#999"/>
      <rect x="0" y="180" width="400" height="3" fill="#fff"/>
      <g transform="translate(100,50)">
        <circle cx="100" cy="80" r="78" fill="#fff" stroke="#c8102e" stroke-width="10"/>
      </g>
      <text x="200" y="100" font-size="44" fill="#333" text-anchor="middle" font-weight="bold">車両</text>
      <text x="200" y="150" font-size="30" fill="#333" text-anchor="middle">通行止め</text>
      <g transform="translate(280,80)">
        <rect x="0" y="0" width="70" height="36" rx="8" fill="#3792d6"/>
        <circle cx="16" cy="18" r="5" fill="#fff"/>
        <text x="18" y="22" font-size="12" fill="#333" text-anchor="middle">×</text>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">すべての車両 進入不可</text>
    </svg>`
  }
,
  {
    id: 'height-limit',
    title: '高さ制限',
    reading: 'たかさ せいげん',
    jp: 'その先は、この高さより高い車は通行できないことを示す標識です。',
    myanmar: 'ထိုရှေ့သို့ ဤအမြင့်ထက်မြင့်သော ယာဉ်များ သွားလာ၍မရကြောင်း ပြသသော ဆိုင်းဘုတ်ဖြစ်သည်။',
    category: '規制',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="160" width="400" height="70" fill="#999"/>
      <rect x="0" y="190" width="400" height="3" fill="#fff"/>
      <g transform="translate(60,70)">
        <circle cx="50" cy="50" r="44" fill="#fff" stroke="#c8102e" stroke-width="10"/>
        <text x="50" y="52" font-size="26" fill="#333" text-anchor="middle" font-weight="bold">3.5</text>
        <text x="50" y="72" font-size="16" fill="#333" text-anchor="middle">m</text>
      </g>
      <g transform="translate(230,60)">
        <rect x="0" y="0" width="140" height="90" rx="8" fill="#555"/>
        <rect x="0" y="0" width="140" height="14" rx="6" fill="#999"/>
        <rect x="0" y="80" width="140" height="10" fill="#bbb"/>
        <rect x="20" y="20" width="70" height="70" rx="6" fill="#c8102e"/>
        <rect x="24" y="18" width="30" height="8" rx="3" fill="#a8d8f0"/>
        <rect x="58" y="18" width="25" height="8" rx="3" fill="#a8d8f0"/>
        <circle cx="34" cy="95" r="8" fill="#111"/>
        <circle cx="76" cy="95" r="8" fill="#111"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">高さ制限</text>
    </svg>`
  },
  {
    id: 'direction-restriction',
    title: '指定方向外進行禁止',
    reading: 'していほうこうがい しんこう きんし',
    jp: '矢印で示された方向以外（右・左・直進など）へは進めないことを示す標識です。',
    myanmar: 'မြှားပြထားသော ညွှန်ပြသည့်ဘက်များမှလွဲ၍ အခြားဘက်သို့ သွား၍မရကြောင်း ပြသသော ဆိုင်းဘုတ်ဖြစ်သည်။',
    category: '規制',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="130" width="400" height="40" fill="#999"/>
      <rect x="180" y="0" width="40" height="300" fill="#999"/>
      <rect x="0" y="145" width="400" height="3" fill="#fff"/>
      <rect x="195" y="0" width="3" height="300" fill="#fff"/>
      <g transform="translate(60,50)">
        <rect x="0" y="0" width="90" height="90" rx="10" fill="#fff" stroke="#2471c8" stroke-width="8"/>
        <path d="M15 45 h25 v-15 h20 v15 h20" fill="none" stroke="#2471c8" stroke-width="9"/>
        <path d="M20 60 v25 h30" fill="none" stroke="#333" stroke-width="5" stroke-dasharray="6,5"/>
      </g>
      <text x="200" y="280" font-size="15" fill="#333" text-anchor="middle">矢印の方向だけ 進めます</text>
    </svg>`
  },
  {
    id: 'motor-vehicle-road',
    title: '自動車専用道路',
    reading: 'じどうしゃ せんよう どうろ',
    jp: '自動車だけが通行できる道路で、二輪車や自転車・歩行者は入れません。',
    myanmar: 'ကားများသာ သွားလာနိုင်သော လမ်းဖြစ်ပြီး ဆိုင်ကယ်၊ စက်ဘီးနှင့် လူကူးများ ဝင်ရောက်၍မရပါ။',
    category: '規制',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#666"/>
      <rect x="0" y="180" width="400" height="3" fill="#fff"/>
      <g transform="translate(60,60)">
        <rect x="0" y="0" width="120" height="85" rx="10" fill="#2471c8"/>
        <rect x="8" y="10" width="104" height="65" rx="6" fill="#fff"/>
        <rect x="16" y="18" width="50" height="26" rx="5" fill="#2471c8"/>
        <rect x="20" y="16" width="20" height="7" rx="3" fill="#a8d8f0"/>
        <rect x="42" y="16" width="18" height="7" rx="3" fill="#a8d8f0"/>
        <circle cx="28" cy="45" r="6" fill="#fff"/>
        <circle cx="54" cy="45" r="6" fill="#fff"/>
      </g>
      <g transform="translate(250,80)">
        <rect x="0" y="0" width="90" height="45" rx="8" fill="#3792d6"/>
        <circle cx="14" cy="22" r="6" fill="#fff"/>
        <text x="14" y="26" font-size="11" fill="#333" text-anchor="middle">×</text>
        <text x="40" y="26" font-size="13" fill="#fff">原付・自転車</text>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">自動車専用道路</text>
    </svg>`
  },
  {
    id: 'truck-prohibited',
    title: '大型貨物自動車等通行止め',
    reading: 'おおがたかもつじどうしゃとう つうこうどめ',
    jp: '大型のトラックなどは、その先に進めないことを示す標識です。',
    myanmar: 'ကြီးမားသော ကုန်ကားများ ထိုရှေ့သို့ ဆက်သွား၍မရကြောင်း ပြသသော ဆိုင်းဘုတ်ဖြစ်သည်။',
    category: '規制',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#999"/>
      <rect x="0" y="180" width="400" height="3" fill="#fff"/>
      <g transform="translate(90,60)">
        <circle cx="110" cy="75" r="74" fill="#fff" stroke="#c8102e" stroke-width="10"/>
        <g transform="translate(55,35)">
          <rect x="0" y="20" width="28" height="22" rx="3" fill="#333"/>
          <rect x="28" y="20" width="28" height="22" rx="3" fill="#333"/>
          <rect x="58" y="12" width="42" height="30" rx="4" fill="#333"/>
          <rect x="14" y="34" width="38" height="12" rx="4" fill="#3792d6"/>
          <rect x="2" y="14" width="20" height="7" rx="3" fill="#c8d6e5"/>
          <rect x="26" y="14" width="16" height="7" rx="3" fill="#c8d6e5"/>
          <circle cx="16" cy="48" r="7" fill="#111"/>
          <circle cx="56" cy="48" r="7" fill="#111"/>
          <circle cx="88" cy="48" r="7" fill="#111"/>
        </g>
        <line x1="35" y1="0" x2="185" y2="150" stroke="#c8102e" stroke-width="8"/>
      </g>
      <text x="200" y="260" font-size="15" fill="#333" text-anchor="middle">大型トラック 通行止め</text>
    </svg>`
  }
,
  {
    id: 'flashing-red',
    title: '赤色点滅信号',
    reading: 'あかいろ てんめつ しんごう',
    jp: '赤色の点滅信号は「止まれ」の意味です。一時停止して、安全を確認してから進みます。',
    myanmar: 'အနီရောင် မှိတ်တုတ်မှိတ်တုတ် မီးသည် «ရပ်ပါ» ဟု အဓိပ္ပါယ်ရသည်။ ယာဉ်ရပ်ပြီး ဘေးကင်းြောင်း သေချာစစ်ဆေးမှ ဆက်သွားရမည်။',
    category: '信号',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="170" width="400" height="60" fill="#999"/>
      <rect x="0" y="195" width="400" height="3" fill="#fff"/>
      <g transform="translate(150,40)">
        <rect x="0" y="0" width="130" height="120" rx="14" fill="#444"/>
        <rect x="15" y="15" width="100" height="40" rx="20" fill="#ff3b30"/>
        <text x="65" y="55" font-size="28" fill="#fff" text-anchor="middle">赤</text>
        <rect x="30" y="140" width="12" height="70" fill="#555"/>
      </g>
      <g transform="translate(300,120)">
        <rect x="0" y="0" width="70" height="36" rx="8" fill="#3792d6"/>
        <circle cx="16" cy="18" r="5" fill="#fff"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">赤点滅 = 止まれ</text>
    </svg>`
  },
  {
    id: 'flashing-yellow',
    title: '黄色点滅信号',
    reading: 'きいろ てんめつ しんごう',
    jp: '黄色の点滅信号は「徐行して進め」の意味です。周囲に注意して安全に進みます。',
    myanmar: 'အဝါရောင် မှိတ်တုတ်မှိတ်တုတ် မီးသည် «ဖြေးဖြေးသွားပါ» ဟု အဓိပ္ပါယ်ရသည်။ ပတ်ဝန်းကျင်ကို သတိပြု၍ လုံခြုံစွာ ဆက်သွားရမည်။',
    category: '信号',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="170" width="400" height="60" fill="#999"/>
      <rect x="0" y="195" width="400" height="3" fill="#fff"/>
      <g transform="translate(150,40)">
        <rect x="0" y="0" width="130" height="120" rx="14" fill="#444"/>
        <rect x="15" y="15" width="100" height="40" rx="20" fill="#ffcc00"/>
        <text x="65" y="55" font-size="28" fill="#333" text-anchor="middle">黄</text>
        <rect x="30" y="140" width="12" height="70" fill="#555"/>
      </g>
      <g transform="translate(300,120)">
        <rect x="0" y="0" width="70" height="36" rx="8" fill="#3792d6"/>
        <text x="7" y="24" font-size="16" fill="#fff">徐行</text>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">黄点滅 = 徐行</text>
    </svg>`
  },
  {
    id: 'arrow-signal',
    title: '矢印信号',
    reading: 'やじるし しんごう',
    jp: '矢印の信号が点灯すれば、その方向に進むことができます。',
    myanmar: 'မြှားမီးပွင့်ပါက ထိုဘက်သို့ သွားနိုင်သည်။',
    category: '信号',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="170" width="400" height="60" fill="#999"/>
      <rect x="0" y="195" width="400" height="3" fill="#fff"/>
      <g transform="translate(60,60)">
        <rect x="0" y="0" width="90" height="40" rx="8" fill="#34c759"/>
        <polygon points="20,20 45,6 45,34" fill="#fff"/>
        <text x="60" y="28" font-size="16" fill="#fff" font-weight="bold">直進</text>
      </g>
      <g transform="translate(180,60)">
        <rect x="0" y="0" width="90" height="40" rx="8" fill="#ffcc00"/>
        <polygon points="60,20 30,6 30,34" fill="#333"/>
        <text x="70" y="28" font-size="16" fill="#333" font-weight="bold">左折</text>
      </g>
      <g transform="translate(300,60)">
        <rect x="0" y="0" width="90" height="40" rx="8" fill="#333"/>
        <text x="45" y="28" font-size="16" fill="#ccc" font-weight="bold">消灯</text>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">点灯した矢印の方向へ進める</text>
    </svg>`
  }
,
  {
    id: 'signal-ahead',
    title: '信号機あり・注意',
    reading: 'しんごうき あり',
    jp: '前方に信号機があるので、注意して運転しなさいという警戒標識です。',
    myanmar: 'ရှေ့တွင် မီးပွိုင့်ရှိကြောင်း သတိထားမောင်းရန် သတိပေးသော ဆိုင်းဘုတ်ဖြစ်သည်။',
    category: '警戒',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="170" width="400" height="60" fill="#999"/>
      <g transform="translate(60,60)">
        <polygon points="50,5 95,50 60,95 5,50" fill="#ffd60a" stroke="#333" stroke-width="3"/>
        <g transform="translate(30,15)">
          <rect x="0" y="0" width="40" height="70" rx="8" fill="#444"/>
          <circle cx="20" cy="14" r="9" fill="#ff3b30"/>
          <circle cx="20" cy="35" r="9" fill="#ffcc00"/>
          <circle cx="20" cy="56" r="9" fill="#34c759"/>
        </g>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">前方 信号機あり</text>
    </svg>`
  },
  {
    id: 'crosswalk-ahead',
    title: '横断歩道あり・注意',
    reading: 'おうだんほどう あり',
    jp: '前方に横断歩道があるので、歩行者に注意しなさいという警戒標識です。',
    myanmar: 'ရှေ့တွင် လူကူးဖြတ်ကူးလမ်းရှိကြောင်း လူကူးများကို သတိပြုရန် သတိပေးသော ဆိုင်းဘုတ်ဖြစ်သည်။',
    category: '警戒',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="170" width="400" height="60" fill="#999"/>
      <g fill="#fff">
        <rect x="70" y="170" width="14" height="60"/>
        <rect x="120" y="170" width="14" height="60"/>
        <rect x="170" y="170" width="14" height="60"/>
        <rect x="220" y="170" width="14" height="60"/>
        <rect x="270" y="170" width="14" height="60"/>
      </g>
      <g transform="translate(60,55)">
        <polygon points="50,5 95,50 60,95 5,50" fill="#ffd60a" stroke="#333" stroke-width="3"/>
        <polygon points="50,22 76,50 50,78 24,50" fill="#fff"/>
        <g transform="translate(40,28)">
          <circle cx="10" cy="8" r="5" fill="#333"/>
          <rect x="6" y="16" width="8" height="16" rx="3" fill="#333"/>
          <rect x="6" y="26" width="12" height="4" rx="2" fill="#333"/>
        </g>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">前方 横断歩道あり</text>
    </svg>`
  },
  {
    id: 'railway-ahead',
    title: '踏切あり(警戒標識)',
    reading: 'ふみきり あり',
    jp: '前方に踏切があるので、速度を落として注意することを示す警戒標識です。',
    myanmar: 'ရှေ့တွင် ရထားလမ်းဖြတ်ကူးရာရှိကြောင်း အမြန်နှုန်းလျှော့ကာ သတိပြုရန် သတိပေးသော ဆိုင်းဘုတ်ဖြစ်သည်။',
    category: '警戒',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="170" width="400" height="60" fill="#999"/>
      <g transform="translate(60,55)">
        <polygon points="50,5 95,50 60,95 5,50" fill="#ffd60a" stroke="#333" stroke-width="3"/>
        <polygon points="50,22 76,50 50,78 24,50" fill="#fff"/>
        <text x="50" y="62" font-size="34" fill="#333" text-anchor="middle">×</text>
      </g>
      <g transform="translate(250,60)">
        <rect x="0" y="0" width="90" height="100" rx="8" fill="#bbb" stroke="#333" stroke-width="2"/>
        <rect x="0" y="45" width="90" height="6" fill="#333"/>
        <text x="45" y="30" font-size="28" fill="#333" text-anchor="middle">×</text>
        <text x="45" y="80" font-size="28" fill="#333" text-anchor="middle">×</text>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">前方 踏切あり</text>
    </svg>`
  },
  {
    id: 'priority-ahead',
    title: '前方優先道路あり',
    reading: 'まえ ゆうせん どうろ あり',
    jp: 'この先に優先道路があるので、優先道路を走る車に注意することを示す警戒標識です。',
    myanmar: 'ဤရှေ့တွင် ဦးစားပေးလမ်းရှိကြောင်း ဦးစားပေးလမ်းရှိ ယာဉ်များကို သတိပြုရန် သတိပေးသော ဆိုင်းဘုတ်ဖြစ်သည်။',
    category: '警戒',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="170" width="400" height="60" fill="#999"/>
      <g transform="translate(50,55)">
        <polygon points="50,5 95,50 60,95 5,50" fill="#ffd60a" stroke="#333" stroke-width="3"/>
        <polygon points="50,22 76,50 50,78 24,50" fill="#fff"/>
      </g>
      <g transform="translate(200,80)">
        <polygon points="50,15 85,50 50,85 15,50" fill="#ffd60a" stroke="#333" stroke-width="3"/>
        <polygon points="50,32 72,50 50,68 28,50" fill="#fff"/>
        <path d="M28 50 h25" stroke="#333" stroke-width="5" fill="none"/>
        <polygon points="50,44 62,50 50,56" fill="#333"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">前方 優先道路あり</text>
    </svg>`
  }
,
  {
    id: 'children-crossing',
    title: '児童飛出し注意/学校あり',
    reading: 'じどう とびだし ちゅうい',
    jp: '学校や幼稚園の近くでは、子供が急に飛び出してくることがあるので特に注意します。',
    myanmar: 'ကျောင်း၊ သူငယ်တန်းအနီးတွင် ကလေးများ ရုတ်တရက်ထွက်လာနိုင်သောကြောင့် အထူးသတိပြုရသည်။',
    category: '警戒',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="170" width="400" height="60" fill="#999"/>
      <g transform="translate(50,55)">
        <polygon points="50,5 95,50 60,95 5,50" fill="#ffd60a" stroke="#333" stroke-width="3"/>
        <polygon points="50,22 76,50 50,78 24,50" fill="#fff"/>
        <text x="50" y="62" font-size="30" fill="#333" text-anchor="middle">文</text>
      </g>
      <g transform="translate(210,70)">
        <circle cx="25" cy="20" r="12" fill="#f5c242"/>
        <rect x="15" y="38" width="20" height="40" rx="7" fill="#3792d6"/>
        <rect x="12" y="72" width="26" height="10" rx="4" fill="#1f2937"/>
        <rect x="12" y="90" width="26" height="10" rx="4" fill="#1f2937"/>
        <rect x="7" y="72" width="7" height="28" rx="3" fill="#c8102e"/>
        <rect x="38" y="72" width="7" height="28" rx="3" fill="#c8102e"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">学校・児童飛出し注意</text>
    </svg>`
  },
  {
    id: 'merge-ahead',
    title: '合流交通あり(警戒標識)',
    reading: 'ごうりゅう こうつう あり',
    jp: '前方で他の道路から車が合流してくるので、注意して運転する標識です。',
    myanmar: 'ရှေ့တွင် အခြားလမ်းမှ ယာဉ်များ ရောနှောဝင်လာနိုင်သောကြောင့် သတိထားမောင်းရန် သတိပေးသော ဆိုင်းဘုတ်ဖြစ်သည်။',
    category: '警戒',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <g transform="translate(60,60)">
        <polygon points="50,5 95,50 60,95 5,50" fill="#ffd60a" stroke="#333" stroke-width="3"/>
        <polygon points="50,22 76,50 50,78 24,50" fill="#fff"/>
      </g>
      <rect x="180" y="90" width="120" height="30" fill="#999"/>
      <rect x="180" y="160" width="150" height="30" fill="#999"/>
      <path d="M180 175 L260 120 L260 105" stroke="#999" stroke-width="26" fill="none"/>
      <text x="200" y="280" font-size="15" fill="#333" text-anchor="middle">合流あり</text>
    </svg>`
  },
  {
    id: 't-junction',
    title: '丁字路あり(警戒標識)',
    reading: 'ていじろ あり',
    jp: '前方に丁字路（T字の交差点）があることを示す警戒標識です。',
    myanmar: 'ရှေ့တွင် T ပုံ၏လမ်းဆုံရှိကြောင်း သတိပေးသော ဆိုင်းဘုတ်ဖြစ်သည်။',
    category: '警戒',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <g transform="translate(60,60)">
        <polygon points="50,5 95,50 60,95 5,50" fill="#ffd60a" stroke="#333" stroke-width="3"/>
        <polygon points="50,22 76,50 50,78 24,50" fill="#fff"/>
      </g>
      <g fill="#1f2937" transform="translate(170,90)">
        <rect x="0" y="30" width="130" height="24" rx="6"/>
        <rect x="55" y="-10" width="24" height="90" rx="6"/>
      </g>
      <text x="200" y="280" font-size="15" fill="#333" text-anchor="middle">丁字路あり</text>
    </svg>`
  }
,
  {
    id: 'curve-ahead',
    title: 'カーブあり・注意',
    reading: 'カーブ あり',
    jp: '前方に曲がり道（カーブ）があるので、速度を落として注意することを示す警戒標識です。',
    myanmar: 'ရှေ့တွင် ကွေ့လမ်းရှိသောကြောင့် အမြန်နှုန်းလျှော့ကာ သတိပြုရန် သတိပေးသော ဆိုင်းဘုတ်ဖြစ်သည်။',
    category: '警戒',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <g transform="translate(60,60)">
        <polygon points="50,5 95,50 60,95 5,50" fill="#ffd60a" stroke="#333" stroke-width="3"/>
        <polygon points="50,22 76,50 50,78 24,50" fill="#fff"/>
        <path d="M20 50 h40 l30 -25" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round"/>
      </g>
      <g transform="translate(200,70)">
        <rect x="0" y="0" width="110" height="24" rx="6" fill="#555"/>
      </g>
      <path d="M210 82 L300 82" stroke="#999" stroke-width="4" fill="none"/>
      <text x="200" y="280" font-size="15" fill="#333" text-anchor="middle">前方 カーブ・注意</text>
    </svg>`
  },
  {
    id: 'slope-ahead',
    title: '下り坂あり・注意',
    reading: 'くだりざか あり',
    jp: '前方に急な下り坂がある。ブレーキの効きが変わるので注意する警戒標識です。',
    myanmar: 'ရှေ့တွင် မတ်စောက်သော အောက်ကုန်းလမ်းရှိသည်။ ဘရိတ်အာနိသင် ပြောင်းလဲနိုင်သောကြောင့် သတိပြုရန် သတိပေးသော ဆိုင်းဘုတ်ဖြစ်သည်။',
    category: '警戒',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <g transform="translate(60,60)">
        <polygon points="50,5 95,50 60,95 5,50" fill="#ffd60a" stroke="#333" stroke-width="3"/>
        <polygon points="50,22 76,50 50,78 24,50" fill="#fff"/>
        <rect x="30" y="55" width="40" height="12" rx="4" fill="#333" transform="rotate(30 50 61)"/>
      </g>
      <path d="M150 40 L350 190" stroke="#555" stroke-width="8" fill="none"/>
      <g transform="translate(70,120) rotate(20)">
        <rect x="0" y="0" width="70" height="30" rx="8" fill="#c8102e"/>
        <circle cx="15" cy="34" r="7" fill="#111"/>
        <circle cx="55" cy="34" r="7" fill="#111"/>
      </g>
      <text x="200" y="280" font-size="15" fill="#333" text-anchor="middle">下り坂・注意</text>
    </svg>`
  },
  {
    id: 'road-narrow',
    title: '幅員減少あり',
    reading: 'ふくいん げんしょう あり',
    jp: '前方で道路が狭くなることを示す警戒標識です。速度を落とします。',
    myanmar: 'ရှေ့တွင် လမ်းကျဉ်းသွားနိုင်ကြောင်း သတိပေးသော ဆိုင်းဘုတ်ဖြစ်သည်။ အမြန်နှုန်းကို လျှော့ရမည်။',
    category: '警戒',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="220" width="400" height="60" fill="#eef2f7"/>
      <g transform="translate(60,60)">
        <polygon points="50,5 95,50 60,95 5,50" fill="#ffd60a" stroke="#333" stroke-width="3"/>
        <polygon points="50,22 76,50 50,78 24,50" fill="#fff"/>
      </g>
      <path d="M140 60 L170 60 L170 230 L140 230 Z" fill="#999"/>
      <path d="M340 60 L290 60 L290 230 L340 230 Z" fill="#999"/>
      <line x1="155" y1="160" x2="180" y2="160" stroke="#fff" stroke-width="3" stroke-dasharray="8,6"/>
      <line x1="325" y1="160" x2="300" y2="160" stroke="#fff" stroke-width="3" stroke-dasharray="8,6"/>
      <text x="200" y="288" font-size="15" fill="#333" text-anchor="middle">前方 幅員減少</text>
    </svg>`
  }
,
  {
    id: 'left-turn-method',
    title: '交差点の左折方法',
    reading: 'こうさてんの させつほうほう',
    jp: '左折する時は、あらかじめ道路の左端による。速度を落とし、交差点の近くで左に曲がります。',
    myanmar: 'ဘယ်ဘက်ကွေ့သောအခါ ကြိုတင်၍ လမ်း၏ဘယ်ဘက်အစွန်းသို့ ကပ်ရန်။ အမြန်နှုန်းလျှော့ကာ လမ်းဆုံအနီးတွင် ဘယ်ဘက်သို့ ကွေ့ရမည်။',
    category: '交差点',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="130" width="400" height="40" fill="#999"/>
      <rect x="180" y="0" width="40" height="300" fill="#999"/>
      <rect x="0" y="145" width="400" height="3" fill="#fff"/>
      <rect x="195" y="0" width="3" height="300" fill="#fff"/>
      <g transform="translate(120,90)">
        <rect x="0" y="0" width="70" height="30" rx="8" fill="#c8102e"/>
        <circle cx="15" cy="34" r="7" fill="#111"/>
        <circle cx="55" cy="34" r="7" fill="#111"/>
      </g>
      <path d="M70 40 v-40 h40" fill="none" stroke="#e67e22" stroke-width="5" marker-end="url(#ll)"/>
      <defs><marker id="ll" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#e67e22"/></marker></defs>
      <text x="200" y="110" font-size="15" fill="#e67e22" text-anchor="middle">左折</text>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">左端による</text>
    </svg>`
  },
  {
    id: 'right-turn-method',
    title: '交差点の右折方法',
    reading: 'こうさてんの うせつほうほう',
    jp: '右折する時は、交差点の中央の近くをゆっくり進み、対向車が通過するのを待ってから右に曲がります。',
    myanmar: 'ညာဘက်ကွေ့သောအခါ လမ်းဆုံအလယ်အနီးသို့ ဖြေးဖြေးဝင်ပြီး ရှေ့မှ ယာဉ်များဖြတ်သွားသည်ကို စောင့်ကာ ညာဘက်သို့ ကွေ့ရမည်။',
    category: '交差点',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="130" width="400" height="40" fill="#999"/>
      <rect x="180" y="0" width="40" height="300" fill="#999"/>
      <rect x="0" y="145" width="400" height="3" fill="#fff"/>
      <rect x="195" y="0" width="3" height="300" fill="#fff"/>
      <g transform="translate(90,90)">
        <rect x="0" y="0" width="70" height="30" rx="8" fill="#c8102e"/>
        <circle cx="15" cy="34" r="7" fill="#111"/>
        <circle cx="55" cy="34" r="7" fill="#111"/>
      </g>
      <path d="M30 40 v-40 h55" fill="none" stroke="#e67e22" stroke-width="5" marker-end="url(#rt)"/>
      <defs><marker id="rt" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#e67e22"/></marker></defs>
      <g transform="translate(260,50)">
        <rect x="0" y="0" width="70" height="30" rx="8" fill="#3792d6"/>
        <circle cx="15" cy="34" r="7" fill="#111"/>
        <circle cx="55" cy="34" r="7" fill="#111"/>
      </g>
      <text x="200" y="110" font-size="15" fill="#e67e22" text-anchor="middle">右折</text>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">中央付近で待つ</text>
    </svg>`
  }
,
  {
    id: 'two-stage-turn',
    title: '二段階右折(原付・自転車)',
    reading: 'にだんかい うせつ',
    jp: '原付や自転車は、交差点で右折する時、まず直進して交差点の向こう側で待ち、信号が変わったら右に進みます。',
    myanmar: 'ဆိုင်ကယ်နှင့် စက်ဘီးများသည် လမ်းဆုံတွင် ညာဘက်ကွေ့သည့်အခါ ဦးစွာတည့်တည့်သွား၍ လမ်းဆုံဘက်အဝေးတွင် စောင့်ပြီး မီးပြောင်းမှ ညာဘက်သို့ ကွေ့ရသည်။',
    category: '二輪',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="120" width="400" height="50" fill="#999"/>
      <rect x="180" y="0" width="40" height="300" fill="#999"/>
      <rect x="0" y="140" width="400" height="3" fill="#fff"/>
      <rect x="198" y="0" width="3" height="300" fill="#fff"/>
      <g transform="translate(60,150)">
        <circle cx="20" cy="8" r="7" fill="#f5c242"/>
        <rect x="10" y="15" width="20" height="45" rx="8" fill="#c8102e"/>
        <circle cx="10" cy="62" r="10" fill="#111"/>
      </g>
      <path d="M60 180 h90 v-60" fill="none" stroke="#e67e22" stroke-width="5" marker-end="url(#ts)"/>
      <defs><marker id="ts" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#e67e22"/></marker></defs>
      <g transform="translate(230,90)">
        <circle cx="20" cy="8" r="7" fill="#f5c242"/>
        <rect x="10" y="15" width="20" height="45" rx="8" fill="#3792d6"/>
        <circle cx="10" cy="62" r="10" fill="#111"/>
      </g>
      <circle cx="230" cy="200" r="12" fill="#e67e22"/>
      <text x="200" y="280" font-size="15" fill="#333" text-anchor="middle">二段階右折</text>
    </svg>`
  },
  {
    id: 'lane-change',
    title: '進路変更(車線変更)',
    reading: 'しんろ へんこう',
    jp: '車線を変える時は、まず合図（ウインカー）を出し、ミラーで確認してから、少しずつ安全に移動します。',
    myanmar: 'လမ်းကြောင်းပြောင်းသည့်အခါ ဦးစွာ အချက်ပြ (မီးပြ) ပေးပြီး မှန်ကြည့်ကာ ဖြေးဖြေးဘေးကင်းစွာ ရွှေ့ရမည်။',
    category: '運転',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="120" width="400" height="30" fill="#777"/>
      <rect x="0" y="165" width="400" height="30" fill="#777"/>
      <line x1="200" y1="120" x2="200" y2="195" stroke="#fff" stroke-width="4" stroke-dasharray="10,7"/>
      <g transform="translate(60,75) rotate(10)">
        <rect x="0" y="0" width="80" height="34" rx="8" fill="#c8102e"/>
        <circle cx="16" cy="38" r="8" fill="#111"/>
        <circle cx="64" cy="38" r="8" fill="#111"/>
      </g>
      <g transform="translate(255,135)">
        <rect x="0" y="0" width="80" height="34" rx="8" fill="#3792d6"/>
        <circle cx="16" cy="38" r="8" fill="#111"/>
        <circle cx="64" cy="38" r="8" fill="#111"/>
      </g>
      <text x="200" y="280" font-size="15" fill="#333" text-anchor="middle">合図 → 確認 → 進路変更</text>
    </svg>`
  },
  {
    id: 'overtake-method',
    title: '追越しの方法',
    reading: 'おいこしの ほうほう',
    jp: '追越しをする時は、ミラーと直接目視で後方と前方を確認し、合図を出して前の車の右側を通ります。',
    myanmar: 'ကျော်တက်သည့်အခါ မှန်နှင့်ကိုယ်တိုင်ကြည့်၍ နောက်နှင့်ရှေ့ကို သေချာစစ်ပြီး အချက်ပြကာ ရှေ့ယာဉ်၏ ညာဘက်မှ ဖြတ်ရမည်။',
    category: '運転',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="60" fill="#999"/>
      <rect x="0" y="178" width="400" height="3" fill="#fff"/>
      <g transform="translate(230,120)">
        <rect x="0" y="0" width="80" height="34" rx="8" fill="#3792d6"/>
        <circle cx="16" cy="38" r="8" fill="#111"/>
        <circle cx="64" cy="38" r="8" fill="#111"/>
      </g>
      <g transform="translate(90,70)">
        <rect x="0" y="0" width="80" height="34" rx="8" fill="#c8102e"/>
        <circle cx="16" cy="38" r="8" fill="#111"/>
        <circle cx="64" cy="38" r="8" fill="#111"/>
      </g>
      <path d="M170 85 h45 v50" fill="none" stroke="#e67e22" stroke-width="5" marker-end="url(#ov)"/>
      <defs><marker id="ov" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#e67e22"/></marker></defs>
      <text x="200" y="280" font-size="15" fill="#333" text-anchor="middle">前の車の右側から 追越し</text>
    </svg>`
  }
,
  {
    id: 'no-park-places',
    title: '駐車禁止の場所',
    reading: 'ちゅうしゃきんしの ばしょ',
    jp: '交差点・横断歩道・踏切・道路の曲がり角・バス停の近くなどでは、駐車・停車が禁止されています。',
    myanmar: 'လမ်းဆုံ၊ လူကူးဖြတ်ကူးလမ်း၊ ရထားလမ်းဖြတ်ကူးရာ၊ လမ်းကွေ့နေရာ၊ ဘတ်စ်ကားမှတ်တိုင်အနီးတို့တွင် ယာဉ်ရပ်နား ခွင့်မရှိပါ။',
    category: '駐停車',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="140" width="400" height="50" fill="#999"/>
      <rect x="230" y="0" width="45" height="300" fill="#999"/>
      <rect x="195" y="0" width="3" height="300" fill="#fff"/>
      <rect x="0" y="162" width="400" height="3" fill="#fff"/>
      <g transform="translate(60,90)">
        <rect x="0" y="0" width="80" height="40" rx="9" fill="#c8102e"/>
        <circle cx="18" cy="45" r="9" fill="#111"/>
        <circle cx="62" cy="45" r="9" fill="#111"/>
      </g>
      <g transform="translate(150,180) rotate(180)">
        <circle cx="0" cy="0" r="22" fill="#fff" stroke="#c8102e" stroke-width="6"/>
        <text x="0" y="7" font-size="22" fill="#333" text-anchor="middle">P</text>
      </g>
      <g transform="translate(50,220)">
        <text x="0" y="0" font-size="13" fill="#e67e22">交差点・曲がり角・横断歩道</text>
      </g>
      <line x1="233" y1="140" x2="233" y2="190" stroke="#e67e22" stroke-width="4" stroke-dasharray="5,4"/>
      <text x="200" y="280" font-size="15" fill="#333" text-anchor="middle">特定の場所では 駐停車禁止</text>
    </svg>`
  },
  {
    id: 'parking-method',
    title: '駐車の方法',
    reading: 'ちゅうしゃの ほうほう',
    jp: '駐車する時は、道路の左側によって、道路の通行の妨げにならないように停めます。',
    myanmar: 'ယာဉ်ရပ်နားသည့်အခါ လမ်း၏ဘယ်ဘက်ကို ကပ်၍ လမ်းသွားလာမှုကို မနှောင့်ယှက်စေရန် ရပ်နားရသည်။',
    category: '駐停車',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="120" width="400" height="60" fill="#999"/>
      <rect x="0" y="180" width="400" height="20" fill="#ddd"/>
      <line x1="200" y1="120" x2="200" y2="180" stroke="#fff" stroke-width="4" stroke-dasharray="10,7"/>
      <g transform="translate(60,80)">
        <rect x="0" y="0" width="90" height="40" rx="9" fill="#c8102e"/>
        <rect x="12" y="-8" width="36" height="11" rx="3" fill="#a8d8f0"/>
        <circle cx="20" cy="45" r="9" fill="#111"/>
        <circle cx="70" cy="45" r="9" fill="#111"/>
      </g>
      <text x="130" y="100" font-size="13" fill="#e67e22" text-anchor="middle">左端に寄せる</text>
      <text x="200" y="280" font-size="15" fill="#333" text-anchor="middle">左側に停める</text>
    </svg>`
  },
  {
    id: 'default-speed',
    title: '法定速度(一般道路)',
    reading: 'ほうてい そくど',
    jp: '標識がなければ、一般道路では時速60km（普通自動車）まで走行できます。',
    myanmar: 'ဆိုင်းဘုတ်မရှိပါက ပုံမှန်လမ်းတွင် နာရီ ၆၀ ကီလိုမီတာ (သာမန်ကား) အထိ မောင်းနိုင်သည်။',
    category: '速度',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="180" width="400" height="50" fill="#999"/>
      <rect x="0" y="202" width="400" height="3" fill="#fff"/>
      <g transform="translate(120,40)">
        <circle cx="80" cy="80" r="70" fill="#fff" stroke="#bbb" stroke-width="6"/>
        <path d="M80 80 L120 50" stroke="#333" stroke-width="6" stroke-linecap="round"/>
        <circle cx="80" cy="80" r="8" fill="#333"/>
        <text x="80" y="105" font-size="18" fill="#333" text-anchor="middle">km/h</text>
      </g>
      <text x="80" y="45" font-size="40" fill="#c8102e" text-anchor="middle" font-weight="bold">60</text>
      <g transform="translate(280,120)">
        <rect x="0" y="0" width="80" height="40" rx="8" fill="#c8102e"/>
        <text x="40" y="27" font-size="20" fill="#fff" text-anchor="middle" font-weight="bold">60</text>
      </g>
      <text x="200" y="275" font-size="14" fill="#333" text-anchor="middle">一般道: 法定60km/hまで</text>
    </svg>`
  }
,
  {
    id: 'emergency-vehicle',
    title: '緊急自動車の優先',
    reading: 'きんきゅう じどうしゃの ゆうせん',
    jp: '救急車や消防車などの緊急自動車が近づいてきたら、進路を譲って止まります。交差点では右によって止まります。',
    myanmar: 'လူနာတင်ကား၊ မီးသတ်ကားကဲ့သို့ အရေးပေါ်ယာဉ်များ ချဉ်းကပ်လာပါက လမ်းပေးခွင့်ပြု၍ ရပ်တန့်ရမည်။ လမ်းဆုံတွင် ညာဘက်ကပ်၍ ရပ်ရမည်။',
    category: '優先',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#999"/>
      <rect x="0" y="178" width="400" height="3" fill="#fff"/>
      <g transform="translate(240,95)">
        <rect x="0" y="0" width="110" height="45" rx="9" fill="#fff" stroke="#333" stroke-width="3"/>
        <rect x="10" y="-6" width="34" height="12" rx="3" fill="#ff3b30"/>
        <rect x="48" y="-6" width="28" height="12" rx="3" fill="#2471c8"/>
        <circle cx="22" cy="52" r="10" fill="#333"/>
        <circle cx="86" cy="52" r="10" fill="#333"/>
        <text x="55" y="30" font-size="22" fill="#c8102e" text-anchor="middle" font-weight="bold">救急</text>
      </g>
      <path d="M210 120 h60" stroke="#e67e22" stroke-width="5" marker-end="url(#ev)"/>
      <defs><marker id="ev" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#e67e22"/></marker></defs>
      <g transform="translate(60,150) rotate(180)">
        <circle cx="40" cy="0" r="10" fill="#c8102e"/>
      </g>
      <text x="200" y="260" font-size="15" fill="#333" text-anchor="middle">進路を譲る・止まる</text>
    </svg>`
  },
  {
    id: 'intersection-slow',
    title: '交差点の徐行義務',
    reading: 'こうさてんの じょこう ぎむ',
    jp: '交差点では、左右の安全を確認し、他の車や歩行者の妨げにならないように徐行（減速）します。',
    myanmar: 'လမ်းဆုံတွင် ဘယ်ညာလုံခြုံမှုကို စစ်ဆေးပြီး အခြားယာဉ်နှင့် လူကူးများကို မနှောင့်ယှက်စေရန် ဖြေးဖြေးချဉ်းကပ်ရသည်။',
    category: '交差点',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="120" width="400" height="50" fill="#999"/>
      <rect x="180" y="0" width="40" height="300" fill="#999"/>
      <rect x="0" y="142" width="400" height="3" fill="#fff"/>
      <rect x="197" y="0" width="3" height="300" fill="#fff"/>
      <g transform="translate(100,60)">
        <rect x="0" y="0" width="70" height="30" rx="8" fill="#c8102e"/>
        <circle cx="15" cy="34" r="7" fill="#111"/>
        <circle cx="55" cy="34" r="7" fill="#111"/>
      </g>
      <circle cx="200" cy="125" r="30" fill="#fff" stroke="#e67e22" stroke-width="6"/>
      <text x="200" y="133" font-size="24" fill="#e67e22" text-anchor="middle">徐行</text>
      <g stroke="#e67e22" stroke-width="4">
        <line x1="160" y1="60" x2="180" y2="95"/>
        <line x1="240" y1="60" x2="222" y2="95"/>
        <line x1="160" y1="125" x2="185" y2="125"/>
      </g>
      <text x="200" y="280" font-size="15" fill="#333" text-anchor="middle">交差点では徐行・安全確認</text>
    </svg>`
  },
  {
    id: 'safe-driving',
    title: '安全運転義務',
    reading: 'あんぜん うんてん ぎむ',
    jp: '運転者は、周囲の状況に応じた速度と方法で運転し、人の異常を起こさないように安全運転をしなければなりません。',
    myanmar: 'ယာဉ်မောင်းသူသည် ပတ်ဝန်းကျင်အခြေအနေနှင့်အညီ အမြန်နှုန်းနှင့်နည်းလမ်းဖြင့် မောင်း၍ ဘေးအန္တရာယ်မဖြစ်စေရန် လုံခြုံစွာ မောင်းရမည်။',
    category: '基本',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#999"/>
      <circle cx="200" cy="80" r="60" fill="#2a9d8f"/>
      <text x="200" y="108" font-size="52" fill="#fff" text-anchor="middle" font-weight="bold">安全</text>
      <g transform="translate(140,120)">
        <circle cx="20" cy="20" r="20" fill="#fff"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">安全運転の義務</text>
    </svg>`
  },
  {
    id: 'driver-duty',
    title: '運転免許証の携帯',
    reading: 'うんてん めんきょしょうの けいたい',
    jp: '運転する時は、必ず運転免許証を携帯していなければなりません。見せてと言われたら見せます。',
    myanmar: 'မောင်းနှင်သည့်အခါ ယာဉ်မောင်းခွင့်လိုင်စင်ကို မဖြစ်မနေ ဆောင်ထားရမည်။ ပြပါဟုဆိုလျှင် ပြရမည်။',
    category: '運転者',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <g transform="translate(130,60) rotate(-8)">
        <rect x="0" y="0" width="160" height="105" rx="10" fill="#fff" stroke="#bbb" stroke-width="3"/>
        <rect x="12" y="12" width="136" height="22" rx="4" fill="#e8f0fe"/>
        <text x="80" y="28" font-size="15" fill="#333" text-anchor="middle" font-weight="bold">運転免許証</text>
        <text x="20" y="56" font-size="12" fill="#555">氏名：</text>
        <rect x="70" y="44" width="70" height="10" fill="#ddd"/>
        <circle cx="136" cy="62" r="14" fill="#f5c242"/>
        <text x="20" y="85" font-size="12" fill="#555">有効期限</text>
        <rect x="90" y="76" width="50" height="10" fill="#ddd"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">必ず免許証を携帯</text>
    </svg>`
  }
,
  {
    id: 'highway-driving',
    title: '高速道路の走行',
    reading: 'こうそくどうろの そうこう',
    jp: '高速道路では、左側の車線を走ります。追い越しの後は、左の車線に戻ります。',
    myanmar: 'အမြန်လမ်းတွင် ဘယ်ဘက်လမ်းကြောင်းဖြင့် သွားရသည်။ ကျော်တက်ပြီးနောက် ဘယ်ဘက်လမ်းကြောင်းသို့ ပြန်ဝင်ရသည်။',
    category: '高速',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="120" width="400" height="35" fill="#777"/>
      <rect x="0" y="170" width="400" height="35" fill="#777"/>
      <line x1="120" y1="120" x2="120" y2="205" stroke="#fff" stroke-width="5" stroke-dasharray="12,8"/>
      <g transform="translate(60,80)">
        <rect x="0" y="0" width="85" height="36" rx="8" fill="#c8102e"/>
        <circle cx="18" cy="41" r="9" fill="#111"/>
        <circle cx="66" cy="41" r="9" fill="#111"/>
      </g>
      <g transform="translate(220,138)">
        <rect x="0" y="0" width="85" height="36" rx="8" fill="#3792d6"/>
        <circle cx="18" cy="41" r="9" fill="#111"/>
        <circle cx="66" cy="41" r="9" fill="#111"/>
      </g>
      <text x="140" y="112" font-size="13" fill="#e67e22" text-anchor="middle">左側を走行</text>
      <text x="200" y="280" font-size="15" fill="#333" text-anchor="middle">高速道路は左側走行</text>
    </svg>`
  },
  {
    id: 'highway-min-speed',
    title: '高速道路の最低速度',
    reading: 'こうそくどうろの さいていそくど',
    jp: '高速道路では、時速50km未満で走ることはできません。遅すぎる走行は禁止です。',
    myanmar: 'အမြန်လမ်းတွင် နာရီ ၅၀ ကီလိုမီတာထက် နှေးအောင် မမောင်းရပါ။ အလွန်နှေးသော မောင်းနှင်မှု တားမြစ်သည်။',
    category: '高速',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="120" width="400" height="60" fill="#999"/>
      <rect x="0" y="147" width="400" height="3" fill="#fff"/>
      <g transform="translate(90,60)">
        <rect x="0" y="0" width="100" height="55" rx="9" fill="#2471c8"/>
        <text x="50" y="24" font-size="16" fill="#fff" text-anchor="middle" font-weight="bold">最低</text>
        <text x="50" y="46" font-size="24" fill="#fff" text-anchor="middle" font-weight="bold">50</text>
      </g>
      <g transform="translate(250,70)">
        <rect x="0" y="0" width="80" height="34" rx="8" fill="#c8102e"/>
        <circle cx="16" cy="38" r="8" fill="#111"/>
        <circle cx="64" cy="38" r="8" fill="#111"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">高速道 最低速度50km/h</text>
    </svg>`
  },
  {
    id: 'highway-trouble',
    title: '高速道路の故障時',
    reading: 'こうそくどうろの こしょうじ',
    jp: '高速道路で故障したら、ハザードランプを出し、安全な場所（路肩）に停車し、三角表示板などを置きます。',
    myanmar: 'အမြန်လမ်းပေါ်တွင် ပျက်စီးပါက ကြိုတင်သတိပေးခေါင်းသံမီးဖွင့်၍ ဘေးကင်းသောနေရာ (လမ်းဘေးအနား) တွင် ရပ်၍ သတိပေးတြိဂံဆိုင်းတို့ကို ထားရမည်။',
    category: '高速',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="130" width="400" height="55" fill="#777"/>
      <g transform="translate(120,80)">
        <rect x="0" y="0" width="85" height="36" rx="8" fill="#c8102e"/>
        <circle cx="18" cy="41" r="9" fill="#111"/>
        <circle cx="66" cy="41" r="9" fill="#111"/>
      </g>
      <text x="120" y="68" font-size="16" fill="#c8102e">▲ハザード</text>
      <g transform="translate(250,95)">
        <polygon points="40,0 78,66 2,66" fill="#c8102e" stroke="#fff" stroke-width="3"/>
        <text x="40" y="50" font-size="20" fill="#fff" text-anchor="middle">▲</text>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">路肩に停車・三角表示板</text>
    </svg>`
  }
,
  {
    id: 'hydroplaning',
    title: 'ハイドロプレーニング現象',
    reading: 'ハイドロプレーニング げんしょう',
    jp: '雨の後などにタイヤと路面の間に水の膜ができ、ハンドルやブレーキが効かなくなる現象です。速度を下げて防ぎます。',
    myanmar: 'မိုးရွာပြီးနောက် ဘီးနှင့်လမ်းအကြား ရေပါးလွှာဖြစ်၍ စတီယာနှင့်ဘရိတ် အာနိသင် ပျက်နိုင်သော ဖြစ်စဉ်ဖြစ်သည်။ အမြန်နှုန်းလျှော့ခြင်းဖြင့် ကာကွယ်ရသည်။',
    category: '危険',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#e6eefb"/>
      <rect x="0" y="180" width="400" height="50" fill="#bcd3ee"/>
      <g transform="translate(120,60)">
        <rect x="0" y="0" width="90" height="40" rx="9" fill="#c8102e"/>
        <circle cx="16" cy="44" r="9" fill="#111"/>
        <circle cx="74" cy="44" r="9" fill="#111"/>
      </g>
      <g fill="#8fb6e0" opacity="0.8">
        <ellipse cx="40" cy="150" rx="60" ry="8"/>
        <ellipse cx="200" cy="160" rx="70" ry="9"/>
        <ellipse cx="340" cy="150" rx="55" ry="8"/>
      </g>
      <text x="200" y="150" font-size="15" fill="#2471c8" text-anchor="middle">水の膜で すべる</text>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">速度を下げる</text>
    </svg>`
  },
  {
    id: 'brake-fade',
    title: 'ブレーキのフェード現象',
    reading: 'ブレーキの フェード げんしょう',
    jp: '長い下り坂などでブレーキを強く使いすぎると熱で効きが悪くなる現象です。エンジンブレーキを使います。',
    myanmar: 'ရှည်လျားသော အောက်ကုန်းလမ်းတွင် ဘရိတ်ကို ပြင်းပြင်းနင်းလွန်းလျှင် အပူကြောင့် ဘရိတ်အာနိသင် ကျဆင်းနိုင်သော ဖြစ်စဉ်ဖြစ်သည်။ အင်ဂျင်ဘရိတ်ကို သုံးရမည်။',
    category: '危険',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <path d="M30 60 L200 140 L380 200" stroke="#999" stroke-width="10" fill="none"/>
      <g transform="translate(50,60) rotate(25) translate(-60,-30)">
        <rect x="0" y="0" width="80" height="34" rx="8" fill="#c8102e"/>
        <circle cx="16" cy="38" r="8" fill="#111"/>
        <circle cx="64" cy="38" r="8" fill="#111"/>
      </g>
      <g fill="#ff7f50">
        <path d="M200 160 q15 -20 30 0 q15 -20 30 0"/>
      </g>
      <text x="200" y="110" font-size="14" fill="#c8102e">×ブレーキききすぎ注意</text>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">長い坂はエンジンブレーキ</text>
    </svg>`
  },
  {
    id: 'beginner-mark',
    title: '初心運転者標識',
    reading: 'しょしん うんてんしゃ ひょうしき',
    jp: '免許を取り立てた人は、車の前と後ろに見える場所に「初心者マーク」を付けなければなりません。',
    myanmar: 'လိုင်စင်အသစ်ရရှိသူသည် ယာဉ်၏ရှေ့နှင့်နောက် မြင်နိုင်သောနေရာတွင် «အစပြုသူအမှတ်» ကို တပ်ရမည်။',
    category: '標識・表示',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <g transform="translate(60,120)">
        <rect x="0" y="0" width="150" height="60" rx="10" fill="#c8102e"/>
        <circle cx="20" cy="34" r="6" fill="#fff"/>
        <rect x="35" y="-14" width="40" height="12" rx="3" fill="#fff7c0"/>
        <rect x="80" y="-14" width="30" height="12" rx="3" fill="#fff7c0"/>
        <circle cx="22" cy="45" r="9" fill="#111"/>
        <circle cx="120" cy="45" r="9" fill="#111"/>
      </g>
      <g transform="translate(250,80)">
        <rect x="0" y="0" width="70" height="70" rx="10" fill="#fff" stroke="#c8102e" stroke-width="6"/>
        <rect x="14" y="14" width="42" height="42" rx="6" fill="#ff4d4d"/>
        <text x="35" y="43" font-size="28" fill="#fff" text-anchor="middle" font-weight="bold">若</text>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">初心者マークを付ける</text>
    </svg>`
  },
  {
    id: 'elderly-mark',
    title: '高齢運転者標識',
    reading: 'こうれい うんてんしゃ ひょうしき',
    jp: '70歳以上の一定の運転者は、車の前と後ろに「高齢者マーク（もみじマーク）」を付ける努力義務があります。',
    myanmar: 'အသက် ၇၀ အထက်အချို့ ယာဉ်မောင်းများသည် ယာဉ်ရှေ့နောက်တွင် «သက်ကြီးအမှတ်» တပ်ရန် တာဝန်ရှိသည်။',
    category: '標識・表示',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <g transform="translate(250,80)">
        <rect x="0" y="0" width="70" height="70" rx="10" fill="#fff" stroke="#c8102e" stroke-width="6"/>
        <rect x="14" y="14" width="42" height="42" rx="6" fill="#ff8c00"/>
        <text x="35" y="43" font-size="26" fill="#fff" text-anchor="middle" font-weight="bold">紅葉</text>
      </g>
      <g transform="translate(60,120)">
        <rect x="0" y="0" width="150" height="60" rx="10" fill="#3792d6"/>
        <circle cx="20" cy="34" r="6" fill="#fff"/>
        <rect x="35" y="-14" width="40" height="12" rx="3" fill="#fff7c0"/>
        <rect x="80" y="-14" width="30" height="12" rx="3" fill="#fff7c0"/>
        <circle cx="22" cy="45" r="9" fill="#111"/>
        <circle cx="120" cy="45" r="9" fill="#111"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">高齢者マーク(もみじ)</text>
    </svg>`
  }
,
  {
    id: 'helmet',
    title: '二輪車のヘルメット',
    reading: 'にりんしゃの ヘルメット',
    jp: '自動二輪車や原動機付自転車に乗る時は、運転者も同乗者もヘルメットをかぶらなければなりません。',
    myanmar: 'ဆိုင်ကယ်နှင့် အငယ်စားဆိုင်ကယ်စီးသည့်အခါ ယာဉ်မောင်းရော ခရီးသည်ပါ ဦးထုပ်ဆောင်းရမည်။',
    category: '二輪',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <g transform="translate(150,40)">
        <path d="M30 70 a60 60 0 0 1 120 0 l-15 0 a45 45 0 0 0 -90 0 z" fill="#fff" stroke="#333" stroke-width="3"/>
        <rect x="25" y="70" width="130" height="10" rx="4" fill="#3792d6"/>
        <rect x="50" y="95" width="80" height="30" rx="12" fill="#333"/>
        <circle cx="55" cy="62" r="8" fill="#a8d8f0"/>
        <circle cx="125" cy="62" r="8" fill="#a8d8f0"/>
      </g>
      <g transform="translate(110,130) rotate(-10)">
        <rect x="0" y="0" width="16" height="70" rx="7" fill="#c8102e"/>
        <circle cx="8" cy="72" r="8" fill="#111"/>
      </g>
      <g transform="translate(270,130) rotate(10)">
        <rect x="0" y="0" width="16" height="70" rx="7" fill="#3792d6"/>
        <circle cx="8" cy="72" r="8" fill="#111"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">二輪車は ヘルメット着用</text>
    </svg>`
  },
  {
    id: 'child-seat',
    title: 'チャイルドシート',
    reading: 'チャイルドシート',
    jp: '6歳未満の子供を車に乗せる時は、チャイルドシートを使わなければなりません。',
    myanmar: 'အသက် ၆ နှစ်အောက် ကလေးများကို ယာဉ်စီးသည့်အခါ ကလေးထိုင်ခုံကို မဖြစ်မနေ သုံးရမည်။',
    category: '安全',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <g transform="translate(150,60)">
        <circle cx="50" cy="30" r="16" fill="#f5c242"/>
        <rect x="32" y="50" width="36" height="30" rx="8" fill="#3792d6"/>
        <rect x="20" y="80" width="60" height="12" rx="6" fill="#2471c8"/>
        <line x1="34" y1="50" x2="20" y2="50" stroke="#c8102e" stroke-width="6"/>
        <line x1="66" y1="50" x2="120" y2="45" stroke="#c8102e" stroke-width="6"/>
        <rect x="100" y="60" width="30" height="30" rx="6" fill="#bbb"/>
        <circle cx="115" cy="95" r="9" fill="#333"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">6歳未満は チャイルドシート</text>
    </svg>`
  },
  {
    id: 'fog-driving',
    title: '霧の中の運転',
    reading: 'きりの なかの うんてん',
    jp: '霧で視界が悪い時は、フォグランプを付け、速度を落とし、十分な車間距離をとります。',
    myanmar: 'မြူခိုးကြောင့် အမြင်မကောင်းပါက မြူမီးဖွင့်၍ အမြန်နှုန်းလျှော့ကာ ရှေ့ယာဉ်နှင့် လုံလောက်သော အကွာအဝေးထားရမည်။',
    category: '悪天候',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#dfe8f0"/>
      <rect x="0" y="170" width="400" height="60" fill="#777"/>
      <g fill="#fff" opacity="0.85">
        <ellipse cx="90" cy="80" rx="70" ry="16"/>
        <ellipse cx="230" cy="100" rx="90" ry="18"/>
        <ellipse cx="360" cy="70" rx="60" ry="14"/>
      </g>
      <g transform="translate(140,110)">
        <rect x="0" y="0" width="90" height="40" rx="9" fill="#c8102e"/>
        <circle cx="18" cy="45" r="9" fill="#111"/>
        <circle cx="72" cy="45" r="9" fill="#111"/>
      </g>
      <text x="200" y="250" font-size="15" fill="#333" text-anchor="middle">霧: 減速・フォグランプ・車間距離</text>
    </svg>`
  },
  {
    id: 'tunnel',
    title: 'トンネルの運転',
    reading: 'トンネルの うんてん',
    jp: 'トンネルに入る時はライトを付け、十分な車間距離をとります。照明があってもライトは消しません。',
    myanmar: 'ဥမင်လိုဏ်ခေါင်းဝင်သည့်အခါ မီးဖွင့်၍ လုံလောက်သော အကွာအဝေး ထားရသည်။ မီးရှိတောင် မီးမပိတ်ရ။',
    category: '悪天候',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#25303d"/>
      <path d="M100 60 A130 90 0 0 1 300 60 L300 220 L100 220 Z" fill="#3a4655"/>
      <path d="M120 70 A110 75 0 0 1 280 70 L280 210 L120 210 Z" fill="#535f71" opacity="0.6"/>
      <circle cx="160" cy="95" r="5" fill="#ffd60a"/>
      <circle cx="240" cy="95" r="5" fill="#ffd60a"/>
      <g transform="translate(140,130)">
        <rect x="0" y="0" width="90" height="40" rx="9" fill="#c8102e"/>
        <circle cx="18" cy="45" r="9" fill="#111"/>
        <circle cx="72" cy="45" r="9" fill="#111"/>
        <polygon points="14,10 34,10 44,28 4,28" fill="#fff7c0" opacity="0.9"/>
      </g>
      <text x="200" y="290" font-size="15" fill="#ccd" text-anchor="middle">トンネル: ライト点灯</text>
    </svg>`
  }
,
  {
    id: 'night-meeting',
    title: '夜間の対向車(すれ違い)',
    reading: 'やかんの たいこうしゃ',
    jp: '夜、対向車とすれ違う時は、まぶしいのでライトを下向き（ロービーム）にしてすれ違います。',
    myanmar: 'ညအချိန် ရှေ့မှ ယာဉ်နှင့် ချောင်းပေါင်းပါက မျက်စိလင်းစေသောကြောင့် မီးကို အောက်ဘက်လှည့် (low beam) ၍ ဖြတ်သွားရသည်။',
    category: '夜間',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#0f1b3d"/>
      <circle cx="60" cy="45" r="22" fill="#f5f5dc"/>
      <circle cx="340" cy="45" r="22" fill="#f5f5dc"/>
      <rect x="0" y="150" width="400" height="70" fill="#333"/>
      <rect x="0" y="178" width="400" height="3" fill="#333"/>
      <line x1="200" y1="150" x2="200" y2="220" stroke="#555" stroke-width="4" stroke-dasharray="10,7"/>
      <g transform="translate(60,80)">
        <rect x="0" y="0" width="85" height="36" rx="8" fill="#c8102e"/>
        <circle cx="18" cy="41" r="9" fill="#111"/>
        <circle cx="66" cy="41" r="9" fill="#111"/>
        <polygon points="14,8 34,8 44,26 4,26" fill="#fff7c0" opacity="0.8"/>
      </g>
      <g transform="translate(255,140)">
        <rect x="0" y="0" width="85" height="36" rx="8" fill="#3792d6"/>
        <circle cx="18" cy="41" r="9" fill="#111"/>
        <circle cx="66" cy="41" r="9" fill="#111"/>
        <polygon points="71,8 51,8 41,26 81,26" fill="#fff7c0" opacity="0.6"/>
      </g>
      <text x="200" y="270" font-size="15" fill="#ccd" text-anchor="middle">対向車には ロービーム</text>
    </svg>`
  },
  {
    id: 'seatbelt-rear',
    title: '後部座席のシートベルト',
    reading: 'こうぶ ざせきの シートベルト',
    jp: '後部座席に乗る人も、シートベルトを着用する義務があります。',
    myanmar: 'နောက်ခန်းထိုင်သူများလည်း ခါးပတ်ပတ်ရန် တာဝန်ရှိသည်။',
    category: '安全',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="180" width="400" height="60" fill="#999"/>
      <g transform="translate(60,80)">
        <circle cx="40" cy="30" r="15" fill="#f5c242"/>
        <rect x="25" y="50" width="30" height="38" rx="9" fill="#3792d6"/>
        <rect x="20" y="82" width="40" height="10" rx="4" fill="#1f2937"/>
        <line x1="32" y1="52" x2="22" y2="88" stroke="#c8102e" stroke-width="7" stroke-linecap="round"/>
        <line x1="48" y1="52" x2="58" y2="88" stroke="#c8102e" stroke-width="7" stroke-linecap="round"/>
      </g>
      <g transform="translate(170,80)">
        <circle cx="40" cy="30" r="15" fill="#f5c242"/>
        <rect x="25" y="50" width="30" height="38" rx="9" fill="#3792d6"/>
        <rect x="20" y="82" width="40" height="10" rx="4" fill="#1f2937"/>
        <line x1="32" y1="52" x2="22" y2="88" stroke="#c8102e" stroke-width="7" stroke-linecap="round"/>
        <line x1="48" y1="52" x2="58" y2="88" stroke="#c8102e" stroke-width="7" stroke-linecap="round"/>
      </g>
      <g transform="translate(280,80)">
        <circle cx="40" cy="30" r="15" fill="#f5c242"/>
        <rect x="25" y="50" width="30" height="38" rx="9" fill="#3792d6"/>
        <rect x="20" y="82" width="40" height="10" rx="4" fill="#1f2937"/>
        <line x1="32" y1="52" x2="22" y2="88" stroke="#c8102e" stroke-width="7" stroke-linecap="round"/>
        <line x1="48" y1="52" x2="58" y2="88" stroke="#c8102e" stroke-width="7" stroke-linecap="round"/>
      </g>
      <text x="200" y="275" font-size="15" fill="#333" text-anchor="middle">後席も シートベルト</text>
    </svg>`
  },
  {
    id: 'load-limit',
    title: '積載制限・定員',
    reading: 'せきさい せいげん・ていいん',
    jp: '車には、定員と積載量の制限があります。これを超えて積んで運転してはいけません。',
    myanmar: 'ယာဉ်တွင် ခရီးသည်နှင့် ဝန်တင်ပမာဏ ကန့်သတ်ချက်ရှိသည်။ သတ်မှတ်ချက်ထက် ကျော်၍ မတင်ရပါ။',
    category: '安全',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="190" width="400" height="50" fill="#999"/>
      <g transform="translate(150,110)">
        <rect x="0" y="0" width="130" height="55" rx="10" fill="#c8102e"/>
        <rect x="10" y="-18" width="44" height="23" rx="5" fill="#a8d8f0"/>
        <rect x="58" y="-18" width="40" height="23" rx="5" fill="#a8d8f0"/>
        <circle cx="26" cy="60" r="10" fill="#111"/>
        <circle cx="104" cy="60" r="10" fill="#111"/>
      </g>
      <g transform="translate(250,80)">
        <polygon points="30,10 52,58 8,58" fill="#ffd60a" stroke="#333" stroke-width="2"/>
        <text x="30" y="48" font-size="18" fill="#333" text-anchor="middle">定員</text>
      </g>
      <text x="200" y="280" font-size="15" fill="#333" text-anchor="middle">定員・積載量を守る</text>
    </svg>`
  }
,
  {
    id: 'accident-procedure',
    title: '事故の時の処置',
    reading: 'じこの ときの しょち',
    jp: '事故を起こしたら、まず車を止めます。けが人がいれば救護し、できるだけ速く警察に通報します。',
    myanmar: 'မတော်တဆမှုဖြစ်ပါက ဦးစွာယာဉ်ရပ်ရမည်။ ဒဏ်ရာရသူရှိလျှင် ကူညီစောင့်ရှောက်၍ အမြန်ဆုံး ရဲကို သတင်းပို့ရမည်။',
    category: '事故',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="190" width="400" height="50" fill="#999"/>
      <g transform="translate(90,80)">
        <circle cx="40" cy="32" r="15" fill="#f5c242"/>
        <rect x="26" y="52" width="28" height="38" rx="8" fill="#3792d6"/>
        <rect x="20" y="84" width="40" height="10" rx="4" fill="#1f2937"/>
        <line x1="34" y1="54" x2="18" y2="130" stroke="#c8102e" stroke-width="6"/>
        <line x1="48" y1="54" x2="64" y2="130" stroke="#c8102e" stroke-width="6"/>
      </g>
      <g transform="translate(230,45)">
        <rect x="0" y="0" width="120" height="120" rx="12" fill="#fff" stroke="#333" stroke-width="3"/>
        <text x="60" y="50" font-size="22" fill="#c8102e" text-anchor="middle" font-weight="bold">警察</text>
        <text x="60" y="78" font-size="15" fill="#333" text-anchor="middle">110</text>
        <path d="M60 30 a5 5 0 1 0 0-10 a5 5 0 0 0 0 10 z" fill="#ff3b30"/>
      </g>
      <text x="200" y="15" font-size="13" fill="#e67e22" text-anchor="middle">停止 → 救護 → 通報</text>
      <text x="200" y="280" font-size="15" fill="#333" text-anchor="middle">事故時: 停車・救護・通報</text>
    </svg>`
  },
  {
    id: 'drowsy-driving',
    title: '睡眠不足・疲労による運転',
    reading: 'すいみんぶそく・ひろう による うんてん',
    jp: '眠い時や疲れている時の運転は危険です。休憩を取ってから運転します。',
    myanmar: 'အိပ်ချင်၊ မောပန်းနေချိန် မောင်းနှင်ခြင်းသည် အန္တရာယ်ရှိသည်။ အနားယူပြီးမှ မောင်းရမည်။',
    category: '運転者',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="190" width="400" height="50" fill="#999"/>
      <g transform="translate(120,50)">
        <circle cx="60" cy="60" r="50" fill="#f5f5dc" stroke="#bbb" stroke-width="3"/>
        <path d="M35 75 q25 -20 50 0" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round"/>
        <circle cx="45" cy="55" r="5" fill="#333"/>
        <circle cx="75" cy="55" r="5" fill="#333"/>
        <text x="60" y="20" font-size="14" fill="#333" text-anchor="middle">zzz</text>
      </g>
      <g transform="translate(260,110)">
        <circle cx="0" cy="0" r="25" fill="#fff" stroke="#c8102e" stroke-width="6"/>
        <text x="0" y="8" font-size="20" fill="#c8102e" text-anchor="middle">!</text>
      </g>
      <text x="200" y="280" font-size="15" fill="#333" text-anchor="middle">眠い時は 休憩してから</text>
    </svg>`
  },
  {
    id: 'gas-station',
    title: 'ガソリンスタンドでのエンジン',
    reading: 'ガソリンスタンド での エンジン',
    jp: 'ガソリンスタンドでは、給油中にエンジンの火を使わないように、エンジンを止めます。',
    myanmar: 'ဓာတ်ဆီဆိုင်တွင် လောင်စာဖြည့်နေစဉ် မီးမသုံးရန် အင်ဂျင်ကို ပိတ်ရမည်။',
    category: '安全',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="190" width="400" height="50" fill="#999"/>
      <g transform="translate(80,80)">
        <rect x="0" y="0" width="90" height="45" rx="9" fill="#c8102e"/>
        <circle cx="20" cy="50" r="9" fill="#111"/>
        <circle cx="70" cy="50" r="9" fill="#111"/>
      </g>
      <g transform="translate(230,60)">
        <rect x="0" y="0" width="40" height="80" rx="5" fill="#c8102e"/>
        <rect x="-8" y="0" width="56" height="10" rx="3" fill="#3792d6"/>
        <line x1="20" y1="40" x2="20" y2="40" stroke="#ffd60a" stroke-width="6" stroke-linecap="round"/>
        <rect x="12" y="45" width="8" height="12" rx="2" fill="#333"/>
        <circle cx="16" cy="70" r="12" fill="#333"/>
      </g>
      <g transform="translate(320,60)">
        <circle cx="20" cy="20" r="20" fill="#fff" stroke="#c8102e" stroke-width="5"/>
        <line x1="10" y1="10" x2="30" y2="30" stroke="#c8102e" stroke-width="5"/>
      </g>
      <text x="200" y="280" font-size="15" fill="#333" text-anchor="middle">給油中は エンジン停止</text>
    </svg>`
  },
  {
    id: 'turn-signal-duty',
    title: '合図(ウインカー)の義務',
    reading: 'あいずの ぎむ',
    jp: '右左折、進路変更、発進、停止の時は、必ずあらかじめブレーキランプなどで合図を出します。',
    myanmar: 'ညာဘက်/ဘယ်ဘက်ကွေ့၊ လမ်းကြောင်းပြောင်း၊ စတင်မောင်းနှင့် ရပ်သည့်အခါ ကြိုတင်၍ မီးပြဖြင့် အချက်ပြရမည်။',
    category: '運転',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="160" width="400" height="60" fill="#999"/>
      <g transform="translate(150,90)">
        <rect x="0" y="0" width="100" height="45" rx="9" fill="#c8102e"/>
        <circle cx="22" cy="50" r="10" fill="#111"/>
        <circle cx="78" cy="50" r="10" fill="#111"/>
        <polygon points="0,-6 10,-6 10,-20 20,-20 20,-6 32,-6 16,12 0,-6" fill="#ffd60a" opacity="0.3"/>
      </g>
      <g fill="#ffcc00">
        <polygon points="105,60 120,75 105,90" opacity="0.4"/>
      </g>
      <g fill="#ff3b30">
        <rect x="95" y="75" width="8" height="6" rx="2"/>
        <rect x="135" y="75" width="8" height="6" rx="2"/>
      </g>
      <text x="200" y="120" font-size="14" fill="#e67e22" text-anchor="middle">曲がる30m前から 合図</text>
      <text x="200" y="275" font-size="15" fill="#333" text-anchor="middle">右左折・変更・発進・停止の時 合図</text>
    </svg>`
  }
,
  {
    id: 'crosswalk-stop',
    title: '横断歩道の手前の停止',
    reading: 'おうだんほどうの てまえの ていし',
    jp: '歩行者が横断している時は、その手前で必ず止まり、先に歩行者を渡らせます。',
    myanmar: 'လူကူးများ ကူးနေပါက ထိုလမ်း၏ရှေ့တွင် မဖြစ်မနေ ရပ်၍ ဦးစွာ လူကူးများကို ကူးခွင့်ပြုရမည်။',
    category: '歩行者',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#999"/>
      <g fill="#fff">
        <rect x="30" y="150" width="20" height="70"/>
        <rect x="90" y="150" width="20" height="70"/>
        <rect x="150" y="150" width="20" height="70"/>
        <rect x="210" y="150" width="20" height="70"/>
        <rect x="270" y="150" width="20" height="70"/>
        <rect x="330" y="150" width="20" height="70"/>
      </g>
      <g transform="translate(120,80)">
        <circle cx="20" cy="14" r="9" fill="#f5c242"/>
        <rect x="12" y="30" width="16" height="30" rx="7" fill="#3792d6"/>
        <rect x="10" y="55" width="20" height="8" rx="4" fill="#1f2937"/>
        <rect x="10" y="70" width="20" height="8" rx="4" fill="#1f2937"/>
        <rect x="5" y="55" width="6" height="26" rx="3" fill="#c8102e"/>
        <rect x="29" y="55" width="6" height="26" rx="3" fill="#c8102e"/>
      </g>
      <g transform="translate(250,95)">
        <rect x="0" y="0" width="90" height="40" rx="9" fill="#c8102e"/>
        <circle cx="20" cy="45" r="9" fill="#111"/>
        <circle cx="70" cy="45" r="9" fill="#111"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">手前で止まる・歩行者優先</text>
    </svg>`
  },
  {
    id: 'blind-intersection',
    title: '見通しの悪い交差点',
    reading: 'みとおしの わるい こうさてん',
    jp: '建物や塀で見通しが悪い交差点では、一時停止して左右の安全を十分に確認します。',
    myanmar: 'အဆောက်အဦနှင့် နံရံကြောင့် မမြင်ရသော လမ်းဆုံတွင် ရပ်၍ ဘယ်ညာ လုံခြုံမှုကို သေချာစစ်ရမည်။',
    category: '交差点',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="140" width="400" height="50" fill="#999"/>
      <rect x="180" y="0" width="40" height="300" fill="#999"/>
      <rect x="150" y="80" width="70" height="60" fill="#bbb"/>
      <rect x="150" y="120" width="10" height="20" fill="#777"/>
      <circle cx="90" cy="120" r="22" fill="#fff7c0"/>
      <path d="M110 120 h40" stroke="#e67e22" stroke-width="4" stroke-dasharray="6,5"/>
      <text x="110" y="112" font-size="12" fill="#e67e22" text-anchor="middle">見えない!</text>
      <g transform="translate(90,150)">
        <rect x="0" y="0" width="70" height="30" rx="8" fill="#c8102e"/>
        <circle cx="15" cy="34" r="7" fill="#111"/>
        <circle cx="55" cy="34" r="7" fill="#111"/>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">見通しの悪い交差点: 安全確認</text>
    </svg>`
  },
  {
    id: 'brake-mastery',
    title: 'ブレーキの使い方',
    reading: 'ブレーキの つかいかた',
    jp: '急ブレーキは危険です。早めに、少しずつブレーキを踏んで、ゆっくり止まります。',
    myanmar: 'ရုတ်တရက် ဘရိတ်နင်းခြင်းသည် အန္တရာယ်ရှိသည်။ စောစီး၍ ဖြေးဖြေးနင်း၍ ဖြေးဖြေးရပ်ရမည်။',
    category: '運転',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="180" width="400" height="50" fill="#999"/>
      <g transform="translate(250,110)">
        <rect x="0" y="0" width="80" height="40" rx="9" fill="#c8102e"/>
        <circle cx="18" cy="45" r="9" fill="#111"/>
        <circle cx="62" cy="45" r="9" fill="#111"/>
      </g>
      <g stroke="#333" stroke-width="5">
        <line x1="190" y1="130" x2="150" y2="130"/>
        <line x1="150" y1="130" x2="150" y2="110"/>
        <line x1="150" y1="110" x2="120" y2="110"/>
      </g>
      <text x="170" y="70" font-size="14" fill="#e67e22" text-anchor="middle">早めに減速</text>
      <text x="200" y="275" font-size="15" fill="#333" text-anchor="middle">少しずつブレーキ</text>
    </svg>`
  },
  {
    id: 'mirror-check',
    title: 'ミラーと目視の確認',
    reading: 'ミラーと もくしの かくにん',
    jp: '進路変更や右左折、発進の前には、ミラーだけでなく、直接目で見て安全を確認します。',
    myanmar: 'လမ်းကြောင်းပြောင်း၊ ကွေ့၊ စတင်မောင်းရန် မှန်ကြည့်ရုံမက ကိုယ်တိုင်လည်း ကြည့်၍ လုံခြုံမှု စစ်ဆေးရမည်။',
    category: '運転',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="170" width="400" height="60" fill="#999"/>
      <g transform="translate(150,80)">
        <rect x="0" y="0" width="100" height="50" rx="10" fill="#c8102e"/>
        <circle cx="22" cy="55" r="10" fill="#111"/>
        <circle cx="78" cy="55" r="10" fill="#111"/>
      </g>
      <g transform="translate(70,60)">
        <ellipse cx="50" cy="35" rx="45" ry="30" fill="#8fc7ff" stroke="#333" stroke-width="3"/>
        <path d="M20 45 v-20 h60" stroke="#333" stroke-width="6" fill="none" stroke-linecap="round"/>
      </g>
      <text x="95" y="100" font-size="12" fill="#e67e22" text-anchor="middle">ミラー確認</text>
      <text x="200" y="270" font-size="15" fill="#333" text-anchor="middle">ミラー + 直接目視で確認</text>
    </svg>`
  }
,
  {
    id: 'pedestrian-signal',
    title: '歩行者用信号',
    reading: 'ほこうしゃよう しんごう',
    jp: '歩行者用信号の「青」は進んでよい、「赤」は止まる。「点滅」は新しい信号に注意して進んではいけない意味です。',
    myanmar: 'လူကူးမီး၏ «စိမ်း» သည် သွားရ၊ «နီ» သည် ရပ်ရ။ «မှိတ်» သည် မီးပြောင်းမည်ကို သတိပြု၍ မသွားသင့်ဟု အဓိပ္ပါယ်ရသည်။',
    category: '信号',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="170" width="400" height="60" fill="#999"/>
      <g fill="#fff">
        <rect x="120" y="170" width="16" height="60"/>
        <rect x="170" y="170" width="16" height="60"/>
        <rect x="220" y="170" width="16" height="60"/>
      </g>
      <g transform="translate(150,40)">
        <rect x="0" y="0" width="60" height="100" rx="10" fill="#444"/>
        <rect x="10" y="10" width="40" height="30" rx="4" fill="#333"/>
        <rect x="10" y="45" width="40" height="30" rx="4" fill="#333"/>
        <rect x="10" y="80" width="40" height="15" rx="4" fill="#34c759"/>
      </g>
      <rect x="185" y="80" width="30" height="65" rx="6" fill="#fff" stroke="#333" stroke-width="3"/>
      <circle cx="200" cy="95" r="7" fill="#f5c242"/>
      <path d="M195 110 v25 h10 v-25" stroke="#333" stroke-width="4" fill="none"/>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">歩行者用信号を見る</text>
    </svg>`
  },
  {
    id: 'scooter-rules',
    title: '原付の二人乗り',
    reading: 'げんつきの ふたりのり',
    jp: '原動機付自転車（原付）では、原則として二人乗りはできません。',
    myanmar: 'အငယ်စားဆိုင်ကယ်တွင် ယျေဘုယျအားဖြင့် နှစ်ဦးစီးခြင်းကို မပြုရပါ။',
    category: '二輪',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="190" width="400" height="50" fill="#999"/>
      <g transform="translate(100,70)">
        <circle cx="45" cy="55" r="34" fill="#fff" stroke="#c8102e" stroke-width="8"/>
        <circle cx="45" cy="55" r="24" fill="#fff"/>
        <rect x="34" y="45" width="22" height="20" rx="5" fill="#c8102e"/>
        <text x="45" y="102" font-size="20" fill="#333" text-anchor="middle">1人</text>
      </g>
      <g transform="translate(250,70)">
        <circle cx="45" cy="55" r="34" fill="#fff" stroke="#c8102e" stroke-width="8"/>
        <circle cx="34" y="45" width="22" height="5" fill="transparent"/>
        <text x="45" y="45" font-size="16" fill="#333" text-anchor="middle">2人</text>
        <line x1="20" y1="22" x2="70" y2="88" stroke="#c8102e" stroke-width="8"/>
      </g>
      <text x="200" y="275" font-size="15" fill="#333" text-anchor="middle">原付は 二人乗り禁止</text>
    </svg>`
  },
  {
    id: 'overtake-taxi',
    title: '追越し禁止の場所',
    reading: 'おいこし きんしの ばしょ',
    jp: '交差点・横断歩道・踏切・道路の曲がり角・トンネルの中などでは、追い越しが禁止されています。',
    myanmar: 'လမ်းဆုံ၊ လူကူးဖြတ်ကူးလမ်း၊ ရထားလမ်းဖြတ်၊ လမ်းကွေ့နှင့် ဥမင်လိုဏ်ခေါင်းအတွင်းတို့တွင် ကျော်တက်၍ မရပါ။',
    category: '運転',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="150" width="400" height="70" fill="#999"/>
      <g transform="translate(60,80)">
        <circle cx="50" cy="45" r="45" fill="#fff" stroke="#c8102e" stroke-width="9"/>
        <g fill="#333">
          <rect x="25" y="32" width="28" height="16" rx="4"/>
          <rect x="52" y="32" width="28" height="16" rx="4"/>
        </g>
        <line x1="12" y1="12" x2="88" y2="78" stroke="#c8102e" stroke-width="7"/>
      </g>
      <g transform="translate(210,80)">
        <circle cx="45" cy="45" r="45" fill="#fff" stroke="#c8102e" stroke-width="9"/>
        <text x="45" y="30" font-size="16" fill="#333" text-anchor="middle">×</text>
        <text x="45" y="60" font-size="13" fill="#333" text-anchor="middle">交差点等</text>
      </g>
      <text x="200" y="255" font-size="15" fill="#333" text-anchor="middle">交差点などでは 追越し禁止</text>
    </svg>`
  },
  {
    id: 'one-way-exit',
    title: '一方通行の出口',
    reading: 'いっぽうつうこうの でぐち',
    jp: '一方通行の道路から出る時も、標識や道路標示に従って、安全を確認して進みます。',
    myanmar: 'တစ်လမ်းသွားလမ်းမှ ထွက်သည့်အခါလည်း ဆိုင်းဘုတ်နှင့် လမ်းအမှတ်အသားအတိုင်း လုံခြုံမှုစစ်ကာ ဆက်သွားရမည်။',
    category: '基本',
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eef2f7"/>
      <rect x="0" y="130" width="200" height="60" fill="#999"/>
      <rect x="0" y="120" width="180" height="50" rx="8" fill="#2471c8"/>
      <polygon points="150,8 188,35 150,62 150,47 120,47 120,23 150,23" fill="#fff"/>
      <text x="24" y="42" font-size="22" fill="#fff">→</text>
      <line x1="240" y1="160" x2="240" y2="130" stroke="#fff" stroke-width="4" stroke-dasharray="8,6"/>
      <text x="300" y="60" font-size="14" fill="#333" text-anchor="middle">一方通行</text>
      <text x="200" y="250" font-size="15" fill="#333" text-anchor="middle">標識どおりに安全に</text>
    </svg>`
  }
];

// If the data file is loaded as a plain <script>, expose it globally.
if (typeof window !== 'undefined') {
    window.trafficRulesData = trafficRulesData;
}