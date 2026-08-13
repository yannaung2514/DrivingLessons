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
  }
];

// If the data file is loaded as a plain <script>, expose it globally.
if (typeof window !== 'undefined') {
    window.trafficRulesData = trafficRulesData;
}