// Kanji data from kanji-jouyou.json (2,136 Joyo kanji)
// Loaded via <script> tag so it works without a web server (file:// protocol).
const kanjiMasterData = [
  {
    "char": "一",
    "on": "いち、いつ",
    "kun": "ひと-、ひと.つ",
    "english": "One, One Radical (no.1)",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 1,
    "myanmar": "တစ်、One Radical (no.1)"
  },
  {
    "char": "二",
    "on": "に、じ",
    "kun": "ふた、ふた.つ、ふたたび",
    "english": "Two, Two Radical (no. 7)",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 2,
    "myanmar": "နှစ်、Two Radical (no. 7)"
  },
  {
    "char": "九",
    "on": "きゅう、く",
    "kun": "ここの、ここの.つ",
    "english": "Nine",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 2,
    "myanmar": "ကိုး"
  },
  {
    "char": "七",
    "on": "しち",
    "kun": "なな、なな.つ、なの",
    "english": "Seven",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 2,
    "myanmar": "ခုနစ်"
  },
  {
    "char": "人",
    "on": "じん、にん",
    "kun": "ひと、-り、-と",
    "english": "Person",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 2,
    "myanmar": "လူ"
  },
  {
    "char": "入",
    "on": "にゅう、じゅ",
    "kun": "い.る、-い.る、-い.り、い.れる、-い.れ、はい.る",
    "english": "Enter, Insert",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 2,
    "myanmar": "ဝင်း、Insert"
  },
  {
    "char": "八",
    "on": "はち",
    "kun": "や、や.つ、やっ.つ、よう",
    "english": "Eight, Eight Radical (no. 12)",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 2,
    "myanmar": "ရှစ်、Eight Radical (no. 12)"
  },
  {
    "char": "力",
    "on": "りょく、りき、りい",
    "kun": "ちから",
    "english": "Power, Strength, Strong, Strain, Bear Up, Exert",
    "jlpt_new": 4,
    "grade": 1,
    "strokes": 2,
    "myanmar": "စွမ်း、အား、အားကြီး、Strain、Bear Up、Exert"
  },
  {
    "char": "十",
    "on": "じゅう、じっ、じゅっ",
    "kun": "とお、と",
    "english": "Ten",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 2,
    "myanmar": "ဆယ်"
  },
  {
    "char": "三",
    "on": "さん、ぞう",
    "kun": "み、み.つ、みっ.つ",
    "english": "Three",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 3,
    "myanmar": "သုံး"
  },
  {
    "char": "上",
    "on": "じょう、しょう、しゃん",
    "kun": "うえ、-うえ、うわ-、かみ、あ.げる、-あ.げる、あ.がる、-あ.がる、あ.がり、-あ.がり、のぼ.る、のぼ.り、のぼ.せる、のぼ.す、たてまつ.る",
    "english": "Above, Up",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 3,
    "myanmar": "Above、အထက်"
  },
  {
    "char": "下",
    "on": "か、げ",
    "kun": "した、しも、もと、さ.げる、さ.がる、くだ.る、くだ.り、くだ.す、-くだ.す、くだ.さる、お.ろす、お.りる",
    "english": "Below, Down, Descend, Give, Low, Inferior",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 3,
    "myanmar": "Below、အောက်、Descend、ပေး、နိမ့်、အောက်ခြေး"
  },
  {
    "char": "口",
    "on": "こう、く",
    "kun": "くち",
    "english": "Mouth",
    "jlpt_new": 4,
    "grade": 1,
    "strokes": 3,
    "myanmar": "နှုတ်"
  },
  {
    "char": "大",
    "on": "だい、たい",
    "kun": "おお-、おお.きい、-おお.いに",
    "english": "Large, Big",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 3,
    "myanmar": "ကြီးစာ、ကြီး"
  },
  {
    "char": "女",
    "on": "じょ、にょ、にょう",
    "kun": "おんな、め",
    "english": "Woman, Female",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 3,
    "myanmar": "အမျိုးသမီး、Female"
  },
  {
    "char": "山",
    "on": "さん、せん",
    "kun": "やま",
    "english": "Mountain",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 3,
    "myanmar": "တောင်"
  },
  {
    "char": "川",
    "on": "せん",
    "kun": "かわ",
    "english": "Stream, River, River Or Three-stroke River Radical (no. 47)",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 3,
    "myanmar": "Stream、မြစ်、River Or Three-stroke River Radical (no. 47)"
  },
  {
    "char": "工",
    "on": "こう、く、ぐ",
    "kun": "",
    "english": "Craft, Construction, Katakana E Radical (no. 48)",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 3,
    "myanmar": "က်ရာ、Construction、Katakana E Radical (no. 48)"
  },
  {
    "char": "刀",
    "on": "とう",
    "kun": "かたな、そり",
    "english": "Sword, Saber, Knife",
    "jlpt_new": 1,
    "grade": 2,
    "strokes": 2,
    "myanmar": "Sword、Saber、Knife"
  },
  {
    "char": "土",
    "on": "ど、と",
    "kun": "つち",
    "english": "Soil, Earth, Ground, Turkey",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 3,
    "myanmar": "Soil、မြေ、Ground、Turkey"
  },
  {
    "char": "千",
    "on": "せん",
    "kun": "ち",
    "english": "Thousand",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 3,
    "myanmar": "Thousand"
  },
  {
    "char": "夕",
    "on": "せき",
    "kun": "ゆう",
    "english": "Evening",
    "jlpt_new": 4,
    "grade": 1,
    "strokes": 3,
    "myanmar": "ညနေခင်း"
  },
  {
    "char": "子",
    "on": "し、す、つ",
    "kun": "こ、-こ、ね",
    "english": "Child, Sign Of The Rat, 11pm-1am, First Sign Of Chinese Zodiac",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 3,
    "myanmar": "ကလေး、Sign Of The Rat、11pm-1am、First Sign Of Chinese Zodiac"
  },
  {
    "char": "小",
    "on": "しょう",
    "kun": "ちい.さい、こ-、お-、さ-",
    "english": "Little, Small",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 3,
    "myanmar": "Little、သေးလျား"
  },
  {
    "char": "丁",
    "on": "ちょう、てい、ちん、とう、ち",
    "kun": "ひのと",
    "english": "Street, Ward, Town, Counter For Guns, Tools, Leaves Or Cakes Of Something, Even Number, 4th Calendar Sign",
    "jlpt_new": 1,
    "grade": 3,
    "strokes": 2,
    "myanmar": "Street、မြို့နယ်、မြို့、Counter For Guns、Tools、Leaves Or Cakes Of Something、Even Number、4th Calendar Sign"
  },
  {
    "char": "了",
    "on": "りょう",
    "kun": "",
    "english": "Complete, Finish",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 2,
    "myanmar": "ပြီးမြောက်、ပြီးမြောက်"
  },
  {
    "char": "又",
    "on": "ゆう",
    "kun": "また、また-、また.の-",
    "english": "Or Again, Furthermore, On The Other Hand",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 2,
    "myanmar": "Or Again、Furthermore、On The Other Hand"
  },
  {
    "char": "丸",
    "on": "がん",
    "kun": "まる、まる.める、まる.い",
    "english": "Round, Full (month), Perfection, -ship, Pills, Make Round, Roll Up, Curl Up, Seduce, Explain Away",
    "jlpt_new": 2,
    "grade": 2,
    "strokes": 3,
    "myanmar": "အဝိုင်းကြီး、Full (month)、ပြီးမြောက်、-ship、ဆေးလိပ်စာ、Make Round、လှန်လှုပ်、လှန်လှုပ်、လှည့်ဖြားသည်、ရှင်းပြသည်"
  },
  {
    "char": "才",
    "on": "さい",
    "kun": "",
    "english": "Genius, Years Old, Cubic Shaku",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 3,
    "myanmar": "Genius、Years Old、Cubic Shaku"
  },
  {
    "char": "中",
    "on": "ちゅう",
    "kun": "なか、うち、あた.る",
    "english": "In, Inside, Middle, Mean, Center",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 4,
    "myanmar": "In、အထဲ、အလယ်、Mean、အလယ်"
  },
  {
    "char": "五",
    "on": "ご",
    "kun": "いつ、いつ.つ",
    "english": "Five",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 4,
    "myanmar": "ငါး"
  },
  {
    "char": "六",
    "on": "ろく、りく",
    "kun": "む、む.つ、むっ.つ、むい",
    "english": "Six",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 4,
    "myanmar": "ခြောက်"
  },
  {
    "char": "円",
    "on": "えん",
    "kun": "まる.い、まる、まど、まど.か、まろ.やか",
    "english": "Circle, Yen, Round",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 4,
    "myanmar": "အဝိုင်းကြီး、Yen、အဝိုင်းကြီး"
  },
  {
    "char": "天",
    "on": "てん",
    "kun": "あまつ、あめ、あま-",
    "english": "Heavens, Sky, Imperial",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 4,
    "myanmar": "Heavens、အဌာန်、Imperial"
  },
  {
    "char": "手",
    "on": "しゅ、ず",
    "kun": "て、て-、-て、た-",
    "english": "Hand",
    "jlpt_new": 4,
    "grade": 1,
    "strokes": 4,
    "myanmar": "လက်"
  },
  {
    "char": "文",
    "on": "ぶん、もん",
    "kun": "ふみ、あや",
    "english": "Sentence, Literature, Style, Art, Decoration, Figures, Plan, Literary Radical (no. 67)",
    "jlpt_new": 4,
    "grade": 1,
    "strokes": 4,
    "myanmar": "Sentence、Literature、Style、အနုပညာ、Decoration、Figures、အစီအစဉ်、Literary Radical (no. 67)"
  },
  {
    "char": "日",
    "on": "にち、じつ",
    "kun": "ひ、-び、-か",
    "english": "Day, Sun, Japan, Counter For Days",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 4,
    "myanmar": "နေ့、နေ、Japan、Counter For Days"
  },
  {
    "char": "月",
    "on": "げつ、がつ",
    "kun": "つき",
    "english": "Month, Moon",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 4,
    "myanmar": "လ、လ"
  },
  {
    "char": "木",
    "on": "ぼく、もく",
    "kun": "き、こ-",
    "english": "Tree, Wood",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 4,
    "myanmar": "အပင်、အဆီ"
  },
  {
    "char": "水",
    "on": "すい",
    "kun": "みず、みず-",
    "english": "Water",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 4,
    "myanmar": "ရေ"
  },
  {
    "char": "火",
    "on": "か",
    "kun": "ひ、-び、ほ-",
    "english": "Fire",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 4,
    "myanmar": "မီး"
  },
  {
    "char": "犬",
    "on": "けん",
    "kun": "いぬ、いぬ-",
    "english": "Dog",
    "jlpt_new": 4,
    "grade": 1,
    "strokes": 4,
    "myanmar": "Dog"
  },
  {
    "char": "王",
    "on": "おう、-のう",
    "kun": "",
    "english": "King, Rule, Magnate",
    "jlpt_new": 3,
    "grade": 1,
    "strokes": 4,
    "myanmar": "King、စည်းကမ်း、Magnate"
  },
  {
    "char": "出",
    "on": "しゅつ、すい",
    "kun": "で.る、-で、だ.す、-だ.す、い.でる、い.だす",
    "english": "Exit, Leave, Go Out, Come Out, Put Out, Protrude",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 5,
    "myanmar": "ထွက်、ထွက်、Go Out、Come Out、Put Out、Protrude"
  },
  {
    "char": "右",
    "on": "う、ゆう",
    "kun": "みぎ",
    "english": "Right",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 5,
    "myanmar": "ညာ"
  },
  {
    "char": "四",
    "on": "し",
    "kun": "よ、よ.つ、よっ.つ、よん",
    "english": "Four",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 5,
    "myanmar": "လေး"
  },
  {
    "char": "左",
    "on": "さ、しゃ",
    "kun": "ひだり",
    "english": "Left",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 5,
    "myanmar": "ဘယ်"
  },
  {
    "char": "本",
    "on": "ほん",
    "kun": "もと",
    "english": "Book, Present, Main, Origin, True, Real, Counter For Long Cylindrical Things",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 5,
    "myanmar": "စာ、Present、Main、Origin、အမှန်တရား、Real、Counter For Long Cylindrical Things"
  },
  {
    "char": "正",
    "on": "せい、しょう",
    "kun": "ただ.しい、ただ.す、まさ、まさ.に",
    "english": "Correct, Justice, Righteous, 10**40",
    "jlpt_new": 4,
    "grade": 1,
    "strokes": 5,
    "myanmar": "Correct、Justice、Righteous、10**40"
  },
  {
    "char": "玉",
    "on": "ぎょく",
    "kun": "たま、たま-、-だま",
    "english": "Jewel, Ball",
    "jlpt_new": 2,
    "grade": 1,
    "strokes": 5,
    "myanmar": "ကျောက်တုံး、ဘောလုံး"
  },
  {
    "char": "田",
    "on": "でん",
    "kun": "た",
    "english": "Rice Field, Rice Paddy",
    "jlpt_new": 4,
    "grade": 1,
    "strokes": 5,
    "myanmar": "Rice Field、Rice Paddy"
  },
  {
    "char": "白",
    "on": "はく、びゃく",
    "kun": "しろ、しら-、しろ.い",
    "english": "White",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 5,
    "myanmar": "White"
  },
  {
    "char": "目",
    "on": "もく、ぼく",
    "kun": "め、-め、ま-",
    "english": "Eye, Class, Look, Insight, Experience, Care, Favor",
    "jlpt_new": 4,
    "grade": 1,
    "strokes": 5,
    "myanmar": "မျက်စိ、Class、ကြည့်、Insight、Experience、Care、Favor"
  },
  {
    "char": "石",
    "on": "せき、しゃく、こく",
    "kun": "いし",
    "english": "Stone",
    "jlpt_new": 3,
    "grade": 1,
    "strokes": 5,
    "myanmar": "Stone"
  },
  {
    "char": "立",
    "on": "りつ、りゅう、りっとる",
    "kun": "た.つ、-た.つ、た.ち-、た.てる、-た.てる、た.て-、たて-、-た.て、-だ.て、-だ.てる",
    "english": "Stand Up, Rise, Set Up, Erect",
    "jlpt_new": 4,
    "grade": 1,
    "strokes": 5,
    "myanmar": "Stand Up、တက်လာ、Set Up、Erect"
  },
  {
    "char": "万",
    "on": "まん、ばん",
    "kun": "よろず",
    "english": "Ten Thousand, 10,000",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 3,
    "myanmar": "Ten Thousand、10、000"
  },
  {
    "char": "久",
    "on": "きゅう、く",
    "kun": "ひさ.しい",
    "english": "Long Time, Old Story",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 3,
    "myanmar": "ကြာသာချိန်、ဟောင်းနေခြင်း"
  },
  {
    "char": "今",
    "on": "こん、きん",
    "kun": "いま",
    "english": "Now",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 4,
    "myanmar": "ယခု"
  },
  {
    "char": "元",
    "on": "げん、がん",
    "kun": "もと",
    "english": "Beginning, Former Time, Origin",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 4,
    "myanmar": "Beginning、Former Time、Origin"
  },
  {
    "char": "公",
    "on": "こう、く",
    "kun": "おおやけ",
    "english": "Public, Prince, Official, Governmental",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 4,
    "myanmar": "Public、Prince、Official、Governmental"
  },
  {
    "char": "内",
    "on": "ない、だい",
    "kun": "うち",
    "english": "Inside, Within, Between, Among, House, Home",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 4,
    "myanmar": "အထဲ、Within、အကြား、Among、အိမ်、Home"
  },
  {
    "char": "分",
    "on": "ぶん、ふん、ぶ",
    "kun": "わ.ける、わ.け、わ.かれる、わ.かる、わ.かつ",
    "english": "Part, Minute Of Time, Segment, Share, Degree, One's Lot, Duty, Understand, Know, Rate, 1%, Chances, Shaku/100",
    "jlpt_new": null,
    "grade": 2,
    "strokes": 4,
    "myanmar": "အပိုင်း、Minute Of Time、Segment、Share、Degree、One's Lot、တာဝန်、နားလည်、သိသည်、Rate、1%、Chances、Shaku/100"
  },
  {
    "char": "切",
    "on": "せつ、さい",
    "kun": "き.る、-き.る、き.り、-き.り、-ぎ.り、き.れる、-き.れる、き.れ、-き.れ、-ぎ.れ",
    "english": "Cut, Cutoff, Be Sharp",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 4,
    "myanmar": "Cut、Cutoff、Be Sharp"
  },
  {
    "char": "午",
    "on": "ご",
    "kun": "うま",
    "english": "Noon, Sign Of The Horse, 11am-1pm, Seventh Sign Of Chinese Zodiac",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 4,
    "myanmar": "Noon、Sign Of The Horse、11am-1pm、Seventh Sign Of Chinese Zodiac"
  },
  {
    "char": "友",
    "on": "ゆう",
    "kun": "とも",
    "english": "Friend",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 4,
    "myanmar": "Friend"
  },
  {
    "char": "太",
    "on": "たい、た",
    "kun": "ふと.い、ふと.る",
    "english": "Plump, Thick, Big Around",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 4,
    "myanmar": "Plump、ထူ、Big Around"
  },
  {
    "char": "少",
    "on": "しょう",
    "kun": "すく.ない、すこ.し",
    "english": "Few, Little",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 4,
    "myanmar": "နည်းပါး、Little"
  },
  {
    "char": "引",
    "on": "いん",
    "kun": "ひ.く、ひ.き、ひ.き-、-び.き、ひ.ける",
    "english": "Pull, Tug, Jerk, Admit, Install, Quote, Refer To",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 4,
    "myanmar": "Pull、Tug、Jerk、Admit、Install、Quote、Refer To"
  },
  {
    "char": "心",
    "on": "しん",
    "kun": "こころ、-ごころ",
    "english": "Heart, Mind, Spirit, Heart Radical (no. 61)",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 4,
    "myanmar": "စိတ်、Mind、Spirit、Heart Radical (no. 61)"
  },
  {
    "char": "戸",
    "on": "こ",
    "kun": "と",
    "english": "Door, Counter For Houses, Door Radical (no. 63)",
    "jlpt_new": 2,
    "grade": 2,
    "strokes": 4,
    "myanmar": "တံခါး、Counter For Houses、Door Radical (no. 63)"
  },
  {
    "char": "方",
    "on": "ほう",
    "kun": "かた、-かた、-がた",
    "english": "Direction, Person, Alternative",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 4,
    "myanmar": "Direction、လူ、Alternative"
  },
  {
    "char": "牛",
    "on": "ぎゅう",
    "kun": "うし",
    "english": "Cow",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 4,
    "myanmar": "Cow"
  },
  {
    "char": "父",
    "on": "ふ",
    "kun": "ちち",
    "english": "Father",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 4,
    "myanmar": "Father"
  },
  {
    "char": "毛",
    "on": "もう",
    "kun": "け",
    "english": "Fur, Hair, Feather, Down",
    "jlpt_new": 2,
    "grade": 2,
    "strokes": 4,
    "myanmar": "Fur、Hair、Feather、အောက်"
  },
  {
    "char": "止",
    "on": "し",
    "kun": "と.まる、-ど.まり、と.める、-と.める、-ど.め、とど.める、とど.め、とど.まる、や.める、や.む、-や.む、よ.す、-さ.す、-さ.し",
    "english": "Stop, Halt",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 4,
    "myanmar": "ရပ်、ရပ်"
  },
  {
    "char": "兄",
    "on": "けい、きょう",
    "kun": "あに",
    "english": "Elder Brother, Big Brother",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 5,
    "myanmar": "Elder Brother、Big Brother"
  },
  {
    "char": "冬",
    "on": "とう",
    "kun": "ふゆ",
    "english": "Winter",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 5,
    "myanmar": "Winter"
  },
  {
    "char": "北",
    "on": "ほく",
    "kun": "きた",
    "english": "North",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 5,
    "myanmar": "North"
  },
  {
    "char": "半",
    "on": "はん",
    "kun": "なか.ば",
    "english": "Half, Middle, Odd Number, Semi-, Part-",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 5,
    "myanmar": "Half、အလယ်、Odd Number、Semi-、Part-"
  },
  {
    "char": "古",
    "on": "こ",
    "kun": "ふる.い、ふる-、-ふる.す",
    "english": "Old",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 5,
    "myanmar": "အဟောင်း"
  },
  {
    "char": "台",
    "on": "だい、たい",
    "kun": "うてな、われ、つかさ",
    "english": "Pedestal, A Stand, Counter For Machines And Vehicles",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 5,
    "myanmar": "Pedestal、A Stand、Counter For Machines And Vehicles"
  },
  {
    "char": "外",
    "on": "がい、げ",
    "kun": "そと、ほか、はず.す、はず.れる、と-",
    "english": "Outside",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 5,
    "myanmar": "အပြင်ဘက်"
  },
  {
    "char": "市",
    "on": "し",
    "kun": "いち",
    "english": "Market, City, Town",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 5,
    "myanmar": "Market、မြို့、မြို့"
  },
  {
    "char": "広",
    "on": "こう",
    "kun": "ひろ.い、ひろ.まる、ひろ.める、ひろ.がる、ひろ.げる",
    "english": "Wide, Broad, Spacious",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 5,
    "myanmar": "Wide、Broad、Spacious"
  },
  {
    "char": "母",
    "on": "ぼ",
    "kun": "はは、も",
    "english": "Mother",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 5,
    "myanmar": "Mother"
  },
  {
    "char": "用",
    "on": "よう",
    "kun": "もち.いる",
    "english": "Utilize, Business, Service, Use, Employ",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 5,
    "myanmar": "Utilize、စီးပွဲ、Service、Use、Employ"
  },
  {
    "char": "矢",
    "on": "し",
    "kun": "や",
    "english": "Dart, Arrow",
    "jlpt_new": 1,
    "grade": 2,
    "strokes": 5,
    "myanmar": "Dart、Arrow"
  },
  {
    "char": "世",
    "on": "せい、せ、そう",
    "kun": "よ",
    "english": "Generation, World, Society, Public",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 5,
    "myanmar": "Generation、ကမ္ဘာ、Society、Public"
  },
  {
    "char": "主",
    "on": "しゅ、す、しゅう",
    "kun": "ぬし、おも、あるじ",
    "english": "Lord, Chief, Master, Main Thing, Principal",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 5,
    "myanmar": "Lord、Chief、Master、Main Thing、Principal"
  },
  {
    "char": "他",
    "on": "た",
    "kun": "ほか",
    "english": "Other, Another, The Others",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 5,
    "myanmar": "Other、Another、The Others"
  },
  {
    "char": "代",
    "on": "だい、たい",
    "kun": "か.わる、かわ.る、かわ.り、か.わり、-がわ.り、-が.わり、か.える、よ、しろ",
    "english": "Substitute, Change, Convert, Replace, Period, Age, Counter For Decades Of Ages, Eras, Etc., Generation, Charge, Rate, Fee",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 5,
    "myanmar": "အစားထိုး、ပြောင်း、Convert、Replace、ကာလ、အသက်、Counter For Decades Of Ages、Eras、Etc.、Generation、စျေး、Rate、Fee"
  },
  {
    "char": "写",
    "on": "しゃ、じゃ",
    "kun": "うつ.す、うつ.る、うつ-、うつ.し",
    "english": "Copy, Be Photographed, Describe",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 5,
    "myanmar": "ကူးယူ、Be Photographed、Describe"
  },
  {
    "char": "去",
    "on": "きょ、こ",
    "kun": "さ.る、-さ.る",
    "english": "Gone, Past, Quit, Leave, Elapse, Eliminate, Divorce",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 5,
    "myanmar": "Gone、Past、Quit、ထွက်、Elapse、Eliminate、Divorce"
  },
  {
    "char": "号",
    "on": "ごう",
    "kun": "さけ.ぶ、よびな",
    "english": "Nickname, Number, Item, Title, Pseudonym, Name, Call",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 5,
    "myanmar": "Nickname、Number、Item、Title、Pseudonym、Name、Call"
  },
  {
    "char": "央",
    "on": "おう",
    "kun": "",
    "english": "Center, Middle",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 5,
    "myanmar": "အလယ်、အလယ်"
  },
  {
    "char": "平",
    "on": "へい、びょう、ひょう",
    "kun": "たい.ら、-だいら、ひら、ひら-",
    "english": "Even, Flat, Peace",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 5,
    "myanmar": "Even、ပြား、ငြိမ်ချမ်း"
  },
  {
    "char": "打",
    "on": "だ、だあす",
    "kun": "う.つ、う.ち-、ぶ.つ",
    "english": "Strike, Hit, Knock, Pound, Dozen",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 5,
    "myanmar": "Strike、ထိခိုက်、Knock、Pound、Dozen"
  },
  {
    "char": "氷",
    "on": "ひょう",
    "kun": "こおり、ひ、こお.る",
    "english": "Icicle, Ice, Hail, Freeze, Congeal",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 5,
    "myanmar": "Icicle、Ice、Hail、Freeze、Congeal"
  },
  {
    "char": "申",
    "on": "しん",
    "kun": "もう.す、もう.し-、さる",
    "english": "Have The Honor To, Sign Of The Monkey, 3-5pm, Ninth Sign Of Chinese Zodiac",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 5,
    "myanmar": "Have The Honor To、Sign Of The Monkey、3-5pm、Ninth Sign Of Chinese Zodiac"
  },
  {
    "char": "皮",
    "on": "ひ",
    "kun": "かわ",
    "english": "Pelt, Skin, Hide, Leather, Skin Radical (no. 107)",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 5,
    "myanmar": "အသား、အသားအရေ、ဝှက်、အသားထည်、Skin Radical (no. 107)"
  },
  {
    "char": "皿",
    "on": "べい",
    "kun": "さら",
    "english": "Dish, A Helping, Plate",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 5,
    "myanmar": "Dish、A Helping、ဖလား"
  },
  {
    "char": "礼",
    "on": "れい、らい",
    "kun": "",
    "english": "Salute, Bow, Ceremony, Thanks, Remuneration",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 5,
    "myanmar": "Salute、Bow、Ceremony、Thanks、Remuneration"
  },
  {
    "char": "休",
    "on": "きゅう",
    "kun": "やす.む、やす.まる、やす.める",
    "english": "Rest, Day Off, Retire, Sleep",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 6,
    "myanmar": "နားလည်း、Day Off、Retire、အိပ်"
  },
  {
    "char": "先",
    "on": "せん",
    "kun": "さき、ま.ず",
    "english": "Before, Ahead, Previous, Future, Precedence",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 6,
    "myanmar": "Before、Ahead、Previous、Future、Precedence"
  },
  {
    "char": "名",
    "on": "めい、みょう",
    "kun": "な、-な",
    "english": "Name, Noted, Distinguished, Reputation",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 6,
    "myanmar": "Name、Noted、Distinguished、Reputation"
  },
  {
    "char": "字",
    "on": "じ",
    "kun": "あざ、あざな、-な",
    "english": "Character, Letter, Word, Section Of Village",
    "jlpt_new": 4,
    "grade": 1,
    "strokes": 6,
    "myanmar": "Character、Letter、စကား、Section Of Village"
  },
  {
    "char": "年",
    "on": "ねん",
    "kun": "とし",
    "english": "Year, Counter For Years",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 6,
    "myanmar": "နှစ်、Counter For Years"
  },
  {
    "char": "早",
    "on": "そう、さっ",
    "kun": "はや.い、はや、はや-、はや.まる、はや.める、さ-",
    "english": "Early, Fast",
    "jlpt_new": 4,
    "grade": 1,
    "strokes": 6,
    "myanmar": "Early、လွယ်ကူ"
  },
  {
    "char": "気",
    "on": "き、け",
    "kun": "いき",
    "english": "Spirit, Mind, Air, Atmosphere, Mood",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 6,
    "myanmar": "Spirit、Mind、Air、Atmosphere、Mood"
  },
  {
    "char": "百",
    "on": "ひゃく、びゃく",
    "kun": "もも",
    "english": "Hundred",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 6,
    "myanmar": "Hundred"
  },
  {
    "char": "竹",
    "on": "ちく",
    "kun": "たけ",
    "english": "Bamboo",
    "jlpt_new": 2,
    "grade": 1,
    "strokes": 6,
    "myanmar": "သစ်ခွား"
  },
  {
    "char": "糸",
    "on": "し",
    "kun": "いと",
    "english": "Thread",
    "jlpt_new": 2,
    "grade": 1,
    "strokes": 6,
    "myanmar": "Thread"
  },
  {
    "char": "耳",
    "on": "じ",
    "kun": "みみ",
    "english": "Ear",
    "jlpt_new": 3,
    "grade": 1,
    "strokes": 6,
    "myanmar": "နား"
  },
  {
    "char": "虫",
    "on": "ちゅう、き",
    "kun": "むし",
    "english": "Insect, Bug, Temper",
    "jlpt_new": 2,
    "grade": 1,
    "strokes": 6,
    "myanmar": "Insect、Bug、Temper"
  },
  {
    "char": "村",
    "on": "そん",
    "kun": "むら",
    "english": "Village, Town",
    "jlpt_new": 2,
    "grade": 1,
    "strokes": 7,
    "myanmar": "ရွာ、မြို့"
  },
  {
    "char": "男",
    "on": "だん、なん",
    "kun": "おとこ、お",
    "english": "Male",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 7,
    "myanmar": "Male"
  },
  {
    "char": "町",
    "on": "ちょう",
    "kun": "まち",
    "english": "Town, Village, Block, Street",
    "jlpt_new": 4,
    "grade": 1,
    "strokes": 7,
    "myanmar": "မြို့、ရွာ、Block、Street"
  },
  {
    "char": "花",
    "on": "か、け",
    "kun": "はな",
    "english": "Flower",
    "jlpt_new": 4,
    "grade": 1,
    "strokes": 7,
    "myanmar": "ပန်း"
  },
  {
    "char": "見",
    "on": "けん",
    "kun": "み.る、み.える、み.せる",
    "english": "See, Hopes, Chances, Idea, Opinion, Look At, Visible",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 7,
    "myanmar": "မြင်သည်、Hopes、Chances、Idea、Opinion、Look At、Visible"
  },
  {
    "char": "貝",
    "on": "ばい",
    "kun": "かい",
    "english": "Shellfish",
    "jlpt_new": 2,
    "grade": 1,
    "strokes": 7,
    "myanmar": "ကြီးကြပ်သော"
  },
  {
    "char": "赤",
    "on": "せき、しゃく",
    "kun": "あか、あか-、あか.い、あか.らむ、あか.らめる",
    "english": "Red",
    "jlpt_new": 4,
    "grade": 1,
    "strokes": 7,
    "myanmar": "Red"
  },
  {
    "char": "足",
    "on": "そく",
    "kun": "あし、た.りる、た.る、た.す",
    "english": "Leg, Foot, Be Sufficient, Counter For Pairs Of Footwear",
    "jlpt_new": 4,
    "grade": 1,
    "strokes": 7,
    "myanmar": "Leg、ခြေ、Be Sufficient、Counter For Pairs Of Footwear"
  },
  {
    "char": "車",
    "on": "しゃ",
    "kun": "くるま",
    "english": "Car",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 7,
    "myanmar": "ကား"
  },
  {
    "char": "不",
    "on": "ふ、ぶ",
    "kun": "",
    "english": "Negative, Non-, Bad, Ugly, Clumsy",
    "jlpt_new": 4,
    "grade": 4,
    "strokes": 4,
    "myanmar": "Negative、Non-、မကောင်း、ပိန်လှ、Clumsy"
  },
  {
    "char": "仕",
    "on": "し、じ",
    "kun": "つか.える",
    "english": "Attend, Doing, Official, Serve",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 5,
    "myanmar": "Attend、Doing、Official、Serve"
  },
  {
    "char": "交",
    "on": "こう",
    "kun": "まじ.わる、まじ.える、ま.じる、まじ.る、ま.ざる、ま.ぜる、-か.う、か.わす、かわ.す、こもごも",
    "english": "Mingle, Mixing, Association, Coming & Going",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 6,
    "myanmar": "Mingle、Mixing、အသင်း、Coming & Going"
  },
  {
    "char": "会",
    "on": "かい、え",
    "kun": "あ.う、あ.わせる、あつ.まる",
    "english": "Meeting, Meet, Party, Association, Interview, Join",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 6,
    "myanmar": "Meeting、Meet、ပါတီ、အသင်း、Interview、ပါဝင်သည်"
  },
  {
    "char": "光",
    "on": "こう",
    "kun": "ひか.る、ひかり",
    "english": "Ray, Light",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 6,
    "myanmar": "Ray、အလင်း"
  },
  {
    "char": "同",
    "on": "どう",
    "kun": "おな.じ",
    "english": "Same, Agree, Equal",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 6,
    "myanmar": "Same、သဘောတူ、ညီမျှ"
  },
  {
    "char": "回",
    "on": "かい、え",
    "kun": "まわ.る、-まわ.る、-まわ.り、まわ.す、-まわ.す、まわ.し-、-まわ.し、もとお.る、か.える",
    "english": "-times, Round, Game, Revolve, Counter For Occurrences",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 6,
    "myanmar": "-times、အဝိုင်းကြီး、Game、Revolve、Counter For Occurrences"
  },
  {
    "char": "多",
    "on": "た",
    "kun": "おお.い、まさ.に、まさ.る",
    "english": "Many, Frequent, Much",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 6,
    "myanmar": "များ、Frequent、Much"
  },
  {
    "char": "当",
    "on": "とう",
    "kun": "あ.たる、あ.たり、あ.てる、あ.て、まさ.に、まさ.にべし",
    "english": "Hit, Right, Appropriate, Himself",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 6,
    "myanmar": "ထိခိုက်、ညာ、Appropriate、Himself"
  },
  {
    "char": "毎",
    "on": "まい",
    "kun": "ごと、-ごと.に",
    "english": "Every",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 6,
    "myanmar": "အားလုံး"
  },
  {
    "char": "池",
    "on": "ち",
    "kun": "いけ",
    "english": "Pond, Cistern, Pool, Reservoir",
    "jlpt_new": 2,
    "grade": 2,
    "strokes": 6,
    "myanmar": "ရေကန်、ရေကန်、ရေကန်、ရေကန်"
  },
  {
    "char": "米",
    "on": "べい、まい、めえとる",
    "kun": "こめ、よね",
    "english": "Rice, Usa, Metre",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 6,
    "myanmar": "စပါစ်、Usa、Metre"
  },
  {
    "char": "羽",
    "on": "う",
    "kun": "は、わ、はね",
    "english": "Feathers, Counter For Birds, Rabbits",
    "jlpt_new": 2,
    "grade": 2,
    "strokes": 6,
    "myanmar": "အဝှေး、Counter For Birds、ကုလားသမင်း"
  },
  {
    "char": "考",
    "on": "こう",
    "kun": "かんが.える、かんが.え",
    "english": "Consider, Think Over",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 6,
    "myanmar": "စဉ်းစား、Think Over"
  },
  {
    "char": "肉",
    "on": "にく",
    "kun": "しし",
    "english": "Meat",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 6,
    "myanmar": "အသား"
  },
  {
    "char": "自",
    "on": "じ、し",
    "kun": "みずか.ら、おの.ずから、おの.ずと",
    "english": "Oneself",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 6,
    "myanmar": "Oneself"
  },
  {
    "char": "色",
    "on": "しょく、しき",
    "kun": "いろ",
    "english": "Color",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 6,
    "myanmar": "အရောင်"
  },
  {
    "char": "行",
    "on": "こう、ぎょう、あん",
    "kun": "い.く、ゆ.く、-ゆ.き、-ゆき、-い.き、-いき、おこな.う、おこ.なう",
    "english": "Going, Journey, Carry Out, Conduct, Act, Line, Row, Bank",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 6,
    "myanmar": "Going、Journey、Carry Out、လုပ်ဆောင်သည်、Act、လိုင်း、တန်းကြီး、Bank"
  },
  {
    "char": "西",
    "on": "せい、さい、す",
    "kun": "にし",
    "english": "West, Spain",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 6,
    "myanmar": "West、Spain"
  },
  {
    "char": "何",
    "on": "か",
    "kun": "なに、なん、なに-、なん-",
    "english": "What",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 7,
    "myanmar": "ဘာလဲ"
  },
  {
    "char": "体",
    "on": "たい、てい",
    "kun": "からだ、かたち",
    "english": "Body, Substance, Object, Reality, Counter For Images",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 7,
    "myanmar": "ခန္ဓာ、Substance、Object、Reality、Counter For Images"
  },
  {
    "char": "作",
    "on": "さく、さ",
    "kun": "つく.る、つく.り、-づく.り",
    "english": "Make, Production, Prepare, Build",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 7,
    "myanmar": "ပြုလုပ်、Production、ပြင်ဆင်、တည်ဆောက်"
  },
  {
    "char": "図",
    "on": "ず、と",
    "kun": "え、はか.る",
    "english": "Map, Drawing, Plan, Extraordinary, Audacious",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 7,
    "myanmar": "Map、Drawing、အစီအစဉ်、Extraordinary、Audacious"
  },
  {
    "char": "声",
    "on": "せい、しょう",
    "kun": "こえ、こわ-",
    "english": "Voice",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 7,
    "myanmar": "Voice"
  },
  {
    "char": "売",
    "on": "ばい",
    "kun": "う.る、う.れる",
    "english": "Sell",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 7,
    "myanmar": "ရောင်း"
  },
  {
    "char": "弟",
    "on": "てい、だい、で",
    "kun": "おとうと",
    "english": "Younger Brother, Faithful Service To Elders",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 7,
    "myanmar": "Younger Brother、Faithful Service To Elders"
  },
  {
    "char": "形",
    "on": "けい、ぎょう",
    "kun": "かた、-がた、かたち、なり",
    "english": "Shape, Form, Style",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 7,
    "myanmar": "ပုံသဏ္ဌာန်、Form、Style"
  },
  {
    "char": "来",
    "on": "らい、たい",
    "kun": "く.る、きた.る、きた.す、き.たす、き.たる、き、こ",
    "english": "Come, Due, Next, Cause, Become",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 7,
    "myanmar": "လာ、Due、Next、အကြောင်းရင်း、Become"
  },
  {
    "char": "社",
    "on": "しゃ",
    "kun": "やしろ",
    "english": "Company, Firm, Office, Association, Shrine",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 7,
    "myanmar": "Company、Firm、ရုံး、အသင်း、Shrine"
  },
  {
    "char": "角",
    "on": "かく",
    "kun": "かど、つの",
    "english": "Angle, Corner, Square, Horn, Antlers",
    "jlpt_new": 2,
    "grade": 2,
    "strokes": 7,
    "myanmar": "ထောင့်、ထောင့်、စတုဂံ、ဦးချို、ဦးချို"
  },
  {
    "char": "言",
    "on": "げん、ごん",
    "kun": "い.う、こと",
    "english": "Say, Word",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 7,
    "myanmar": "ပြောသည်、စကား"
  },
  {
    "char": "谷",
    "on": "こく",
    "kun": "たに、きわ.まる",
    "english": "Valley",
    "jlpt_new": 2,
    "grade": 2,
    "strokes": 7,
    "myanmar": "ချောင်း"
  },
  {
    "char": "走",
    "on": "そう",
    "kun": "はし.る",
    "english": "Run",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 7,
    "myanmar": "ပြေးသည်"
  },
  {
    "char": "近",
    "on": "きん、こん",
    "kun": "ちか.い",
    "english": "Near, Early, Akin, Tantamount",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 7,
    "myanmar": "Near、Early、Akin、Tantamount"
  },
  {
    "char": "里",
    "on": "り",
    "kun": "さと",
    "english": "Ri, Village, Parent's Home, League",
    "jlpt_new": null,
    "grade": 2,
    "strokes": 7,
    "myanmar": "Ri、ရွာ、Parent's Home、League"
  },
  {
    "char": "麦",
    "on": "ばく",
    "kun": "むぎ",
    "english": "Barley, Wheat",
    "jlpt_new": 2,
    "grade": 2,
    "strokes": 7,
    "myanmar": "ပြား、ပြား"
  },
  {
    "char": "学",
    "on": "がく",
    "kun": "まな.ぶ",
    "english": "Study, Learning, Science",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 8,
    "myanmar": "Study、Learning、သိပ္ပံပညာ"
  },
  {
    "char": "林",
    "on": "りん",
    "kun": "はやし",
    "english": "Grove, Forest",
    "jlpt_new": 2,
    "grade": 1,
    "strokes": 8,
    "myanmar": "အမဲရား、အမဲရား"
  },
  {
    "char": "空",
    "on": "くう",
    "kun": "そら、あ.く、あ.き、あ.ける、から、す.く、す.かす、むな.しい",
    "english": "Empty, Sky, Void, Vacant, Vacuum",
    "jlpt_new": 4,
    "grade": 1,
    "strokes": 8,
    "myanmar": "Empty、အဌာန်、Void、Vacant、Vacuum"
  },
  {
    "char": "金",
    "on": "きん、こん、ごん",
    "kun": "かね、かな-、-がね",
    "english": "Gold",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 8,
    "myanmar": "Gold"
  },
  {
    "char": "雨",
    "on": "う",
    "kun": "あめ、あま-、-さめ",
    "english": "Rain",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 8,
    "myanmar": "Rain"
  },
  {
    "char": "青",
    "on": "せい、しょう",
    "kun": "あお、あお-、あお.い",
    "english": "Blue, Green",
    "jlpt_new": 4,
    "grade": 1,
    "strokes": 8,
    "myanmar": "Blue、Green"
  },
  {
    "char": "草",
    "on": "そう",
    "kun": "くさ、くさ-、-ぐさ",
    "english": "Grass, Weeds, Herbs, Pasture, Write, Draft",
    "jlpt_new": 3,
    "grade": 1,
    "strokes": 9,
    "myanmar": "Grass、Weeds、Herbs、Pasture、ရေး、Draft"
  },
  {
    "char": "音",
    "on": "おん、いん、-のん",
    "kun": "おと、ね",
    "english": "Sound, Noise",
    "jlpt_new": 4,
    "grade": 1,
    "strokes": 9,
    "myanmar": "အသံ、Noise"
  },
  {
    "char": "化",
    "on": "か、け",
    "kun": "ば.ける、ば.かす、ふ.ける、け.する",
    "english": "Change, Take The Form Of, Influence, Enchant, Delude, -ization",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 4,
    "myanmar": "ပြောင်း、Take The Form Of、Influence、Enchant、Delude、-ization"
  },
  {
    "char": "地",
    "on": "ち、じ",
    "kun": "",
    "english": "Ground, Earth",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 6,
    "myanmar": "Ground、မြေ"
  },
  {
    "char": "両",
    "on": "りょう",
    "kun": "てる、ふたつ",
    "english": "Both, Old Japanese Coin, Counter For Carriages (e.g., In A Train), Two",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 6,
    "myanmar": "Both、Old Japanese Coin、Counter For Carriages (e.g.、In A Train)、နှစ်"
  },
  {
    "char": "全",
    "on": "ぜん",
    "kun": "まった.く、すべ.て",
    "english": "Whole, Entire, All, Complete, Fulfill",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 6,
    "myanmar": "အကုန်、Entire、အားလုံး、ပြီးမြောက်、Fulfill"
  },
  {
    "char": "向",
    "on": "こう",
    "kun": "む.く、む.い、-む.き、む.ける、-む.け、む.かう、む.かい、む.こう、む.こう-、むこ、むか.い",
    "english": "Yonder, Facing, Beyond, Confront, Defy, Tend Toward, Approach",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 6,
    "myanmar": "Yonder、Facing、Beyond、Confront、Defy、Tend Toward、Approach"
  },
  {
    "char": "安",
    "on": "あん",
    "kun": "やす.い、やす.まる、やす、やす.らか",
    "english": "Relax, Cheap, Low, Quiet, Rested, Contented, Peaceful",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 6,
    "myanmar": "Relax、Cheap、နိမ့်、Quiet、Rested、Contented、Peaceful"
  },
  {
    "char": "州",
    "on": "しゅう、す",
    "kun": "す",
    "english": "State, Province",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 6,
    "myanmar": "ပြည်တွင်း、တိုင်း"
  },
  {
    "char": "曲",
    "on": "きょく",
    "kun": "ま.がる、ま.げる、くま",
    "english": "Bend, Music, Melody, Composition, Pleasure, Injustice, Fault, Curve, Crooked, Perverse, Lean",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 6,
    "myanmar": "Bend、ဂီတ、Melody、ဖွဲ့စည်း、Pleasure、Injustice、အမှား、Curve、Crooked、Perverse、ကြပ်တန်း"
  },
  {
    "char": "有",
    "on": "ゆう、う",
    "kun": "あ.る",
    "english": "Possess, Have, Exist, Happen, Occur, Approx",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 6,
    "myanmar": "ပိုင်ဆိုင်သည်、Have、Exist、Happen、Occur、Approx"
  },
  {
    "char": "次",
    "on": "じ、し",
    "kun": "つ.ぐ、つぎ",
    "english": "Next, Order, Sequence",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 6,
    "myanmar": "Next、အမိန့်、Sequence"
  },
  {
    "char": "死",
    "on": "し",
    "kun": "し.ぬ、し.に-",
    "english": "Death, Die",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 6,
    "myanmar": "သေ、သေ"
  },
  {
    "char": "羊",
    "on": "よう",
    "kun": "ひつじ",
    "english": "Sheep",
    "jlpt_new": 1,
    "grade": 3,
    "strokes": 6,
    "myanmar": "Sheep"
  },
  {
    "char": "血",
    "on": "けつ",
    "kun": "ち",
    "english": "Blood",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 6,
    "myanmar": "သွေး"
  },
  {
    "char": "京",
    "on": "きょう、けい、きん",
    "kun": "みやこ",
    "english": "Capital, 10**16",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 8,
    "myanmar": "Capital、10**16"
  },
  {
    "char": "国",
    "on": "こく",
    "kun": "くに",
    "english": "Country",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 8,
    "myanmar": "နိုင်ငံ"
  },
  {
    "char": "夜",
    "on": "や",
    "kun": "よ、よる",
    "english": "Night, Evening",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 8,
    "myanmar": "ည、ညနေခင်း"
  },
  {
    "char": "妹",
    "on": "まい",
    "kun": "いもうと",
    "english": "Younger Sister",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 8,
    "myanmar": "Younger Sister"
  },
  {
    "char": "姉",
    "on": "し",
    "kun": "あね、はは",
    "english": "Elder Sister",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 8,
    "myanmar": "Elder Sister"
  },
  {
    "char": "店",
    "on": "てん",
    "kun": "みせ、たな",
    "english": "Store, Shop",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 8,
    "myanmar": "သိုလှောင်သည်、Shop"
  },
  {
    "char": "明",
    "on": "めい、みょう、みん",
    "kun": "あ.かり、あか.るい、あか.るむ、あか.らむ、あき.らか、あ.ける、-あ.け、あ.く、あ.くる、あ.かす",
    "english": "Bright, Light",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 8,
    "myanmar": "င်းလင်း、အလင်း"
  },
  {
    "char": "東",
    "on": "とう",
    "kun": "ひがし",
    "english": "East",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 8,
    "myanmar": "East"
  },
  {
    "char": "歩",
    "on": "ほ、ぶ、ふ",
    "kun": "ある.く、あゆ.む",
    "english": "Walk, Counter For Steps",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 8,
    "myanmar": "လှမ်း、Counter For Steps"
  },
  {
    "char": "画",
    "on": "が、かく、え、かい",
    "kun": "えが.く、かく.する、かぎ.る、はかりごと、はか.る",
    "english": "Brush-stroke, Picture",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 8,
    "myanmar": "Brush-stroke、ဓာတ်ပုံ"
  },
  {
    "char": "直",
    "on": "ちょく、じき、じか",
    "kun": "ただ.ちに、なお.す、-なお.す、なお.る、なお.き、す.ぐ",
    "english": "Straightaway, Honesty, Frankness, Fix, Repair",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 8,
    "myanmar": "Straightaway、Honesty、Frankness、ပြုပြင်、ပြုပြင်"
  },
  {
    "char": "知",
    "on": "ち",
    "kun": "し.る、し.らせる",
    "english": "Know, Wisdom",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 8,
    "myanmar": "သိသည်、Wisdom"
  },
  {
    "char": "長",
    "on": "ちょう",
    "kun": "なが.い、おさ",
    "english": "Long, Leader, Superior, Senior",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 8,
    "myanmar": "ရှည်、ဦးဆောင်、Superior、Senior"
  },
  {
    "char": "前",
    "on": "ぜん",
    "kun": "まえ、-まえ",
    "english": "In Front, Before",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 9,
    "myanmar": "In Front、Before"
  },
  {
    "char": "南",
    "on": "なん、な",
    "kun": "みなみ",
    "english": "South",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 9,
    "myanmar": "South"
  },
  {
    "char": "室",
    "on": "しつ",
    "kun": "むろ",
    "english": "Room, Apartment, Chamber, Greenhouse, Cellar",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 9,
    "myanmar": "Room、Apartment、Chamber、Greenhouse、Cellar"
  },
  {
    "char": "後",
    "on": "ご、こう",
    "kun": "のち、うし.ろ、うしろ、あと、おく.れる",
    "english": "Behind, Back, Later",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 9,
    "myanmar": "Behind、နောက်ဘက်、Later"
  },
  {
    "char": "思",
    "on": "し",
    "kun": "おも.う、おもえら.く、おぼ.す",
    "english": "Think",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 9,
    "myanmar": "အတွေးအမြင်ဆွဲ"
  },
  {
    "char": "星",
    "on": "せい、しょう",
    "kun": "ほし、-ぼし",
    "english": "Star, Spot, Dot, Mark",
    "jlpt_new": 2,
    "grade": 2,
    "strokes": 9,
    "myanmar": "ကြယ်、နေရာ、အစက်、မှတ်ချက်"
  },
  {
    "char": "活",
    "on": "かつ",
    "kun": "い.きる、い.かす、い.ける",
    "english": "Lively, Resuscitation, Being Helped, Living",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 9,
    "myanmar": "Lively、Resuscitation、Being Helped、Living"
  },
  {
    "char": "海",
    "on": "かい",
    "kun": "うみ",
    "english": "Sea, Ocean",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 9,
    "myanmar": "ပင်လယ်、Ocean"
  },
  {
    "char": "点",
    "on": "てん",
    "kun": "つ.ける、つ.く、た.てる、さ.す、とぼ.す、とも.す、ぼち",
    "english": "Spot, Point, Mark, Speck, Decimal Point",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 9,
    "myanmar": "နေရာ、Point、မှတ်ချက်、Speck、Decimal Point"
  },
  {
    "char": "科",
    "on": "か",
    "kun": "",
    "english": "Department, Course, Section",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 9,
    "myanmar": "ဌာန、Course、အပိုင်း"
  },
  {
    "char": "茶",
    "on": "ちゃ、さ",
    "kun": "",
    "english": "Tea",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 9,
    "myanmar": "Tea"
  },
  {
    "char": "食",
    "on": "しょく、じき",
    "kun": "く.う、く.らう、た.べる、は.む",
    "english": "Eat, Food",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 9,
    "myanmar": "စား、စာ"
  },
  {
    "char": "首",
    "on": "しゅ",
    "kun": "くび",
    "english": "Neck, Counter For Songs And Poems",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 9,
    "myanmar": "Neck、Counter For Songs And Poems"
  },
  {
    "char": "欠",
    "on": "けつ、けん",
    "kun": "か.ける、か.く",
    "english": "Lack, Gap, Fail, Yawning Radical (no. 76)",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 4,
    "myanmar": "Lack、Gap、Fail、Yawning Radical (no. 76)"
  },
  {
    "char": "氏",
    "on": "し",
    "kun": "うじ、-うじ",
    "english": "Family Name, Surname, Clan",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 4,
    "myanmar": "Family Name、မျိုးနွယ်အမည်、Clan"
  },
  {
    "char": "由",
    "on": "ゆ、ゆう、ゆい",
    "kun": "よし、よ.る",
    "english": "Wherefore, A Reason",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 5,
    "myanmar": "Wherefore、A Reason"
  },
  {
    "char": "札",
    "on": "さつ",
    "kun": "ふだ",
    "english": "Tag, Paper Money, Counter For Bonds, Placard, Bid",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 5,
    "myanmar": "Tag、Paper Money、Counter For Bonds、Placard、ပြောင်းလဲ"
  },
  {
    "char": "民",
    "on": "みん",
    "kun": "たみ",
    "english": "People, Nation, Subjects",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 5,
    "myanmar": "People、Nation、Subjects"
  },
  {
    "char": "辺",
    "on": "へん",
    "kun": "あた.り、ほと.り、-べ",
    "english": "Environs, Boundary, Border, Vicinity",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 5,
    "myanmar": "ပတ်ဝန်းကျင်、အကန့်、အကန့်、အနီးနေရာ"
  },
  {
    "char": "付",
    "on": "ふ",
    "kun": "つ.ける、-つ.ける、-づ.ける、つ.け、つ.け-、-つ.け、-づ.け、-づけ、つ.く、-づ.く、つ.き、-つ.き、-つき、-づ.き、-づき",
    "english": "Adhere, Attach, Refer To, Append",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 5,
    "myanmar": "ကပ်သည်、Attach、Refer To、Append"
  },
  {
    "char": "以",
    "on": "い",
    "kun": "もっ.て",
    "english": "By Means Of, Because, In View Of, Compared With",
    "jlpt_new": 4,
    "grade": 4,
    "strokes": 5,
    "myanmar": "By Means Of、Because、In View Of、Compared With"
  },
  {
    "char": "失",
    "on": "しつ",
    "kun": "うしな.う、う.せる",
    "english": "Lose, Error, Fault, Disadvantage, Loss",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 5,
    "myanmar": "ဆုံးရှုံး、Error、အမှား、အကျိုးမရှိ、ဆုံးရှုံး"
  },
  {
    "char": "必",
    "on": "ひつ",
    "kun": "かなら.ず",
    "english": "Invariably, Certain, Inevitable",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 5,
    "myanmar": "Invariably、သေချာ、Inevitable"
  },
  {
    "char": "未",
    "on": "み、び",
    "kun": "いま.だ、ま.だ、ひつじ",
    "english": "Un-, Not Yet, Hitherto, Still, Even Now, Sign Of The Ram, 1-3pm, Eighth Sign Of Chinese Zodiac",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 5,
    "myanmar": "Un-、Not Yet、Hitherto、အဆင်မပြေဘဲ、Even Now、Sign Of The Ram、1-3pm、Eighth Sign Of Chinese Zodiac"
  },
  {
    "char": "末",
    "on": "まつ、ばつ",
    "kun": "すえ",
    "english": "End, Close, Tip, Powder, Posterity",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 5,
    "myanmar": "အဆုံး、ပိတ်、Tip、Powder、Posterity"
  },
  {
    "char": "校",
    "on": "こう、きょう",
    "kun": "",
    "english": "Exam, School, Printing, Proof, Correction",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 10,
    "myanmar": "Exam、School、Printing、Proof、Correction"
  },
  {
    "char": "夏",
    "on": "か、が、げ",
    "kun": "なつ",
    "english": "Summer",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 10,
    "myanmar": "Summer"
  },
  {
    "char": "家",
    "on": "か、け",
    "kun": "いえ、や、うち",
    "english": "House, Home, Family, Professional, Expert, Performer",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 10,
    "myanmar": "အိမ်、Home、Family、Professional、Expert、Performer"
  },
  {
    "char": "弱",
    "on": "じゃく",
    "kun": "よわ.い、よわ.る、よわ.まる、よわ.める",
    "english": "Weak, Frail",
    "jlpt_new": 2,
    "grade": 2,
    "strokes": 10,
    "myanmar": "အားနည်း、အားနည်း"
  },
  {
    "char": "時",
    "on": "じ",
    "kun": "とき、-どき",
    "english": "Time, Hour",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 10,
    "myanmar": "အချိန်、Hour"
  },
  {
    "char": "紙",
    "on": "し",
    "kun": "かみ",
    "english": "Paper",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 10,
    "myanmar": "Paper"
  },
  {
    "char": "記",
    "on": "き",
    "kun": "しる.す",
    "english": "Scribe, Account, Narrative",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 10,
    "myanmar": "Scribe、Account、Narrative"
  },
  {
    "char": "通",
    "on": "つう、つ",
    "kun": "とお.る、とお.り、-とお.り、-どお.り、とお.す、とお.し、-どお.し、かよ.う",
    "english": "Traffic, Pass Through, Avenue, Commute, Counter For Letters, Notes, Documents, Etc.",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 10,
    "myanmar": "Traffic、Pass Through、Avenue、Commute、Counter For Letters、Notes、Documents、Etc."
  },
  {
    "char": "高",
    "on": "こう",
    "kun": "たか.い、たか、-だか、たか.まる、たか.める",
    "english": "Tall, High, Expensive",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 10,
    "myanmar": "Tall、မြင့်、Expensive"
  },
  {
    "char": "強",
    "on": "きょう、ごう",
    "kun": "つよ.い、つよ.まる、つよ.める、し.いる、こわ.い",
    "english": "Strong",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 11,
    "myanmar": "အားကြီး"
  },
  {
    "char": "教",
    "on": "きょう",
    "kun": "おし.える、おそ.わる",
    "english": "Teach, Faith, Doctrine",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 11,
    "myanmar": "သင်ပေးသည်、Faith、Doctrine"
  },
  {
    "char": "理",
    "on": "り",
    "kun": "ことわり",
    "english": "Logic, Arrangement, Reason, Justice, Truth",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 11,
    "myanmar": "Logic、Arrangement、အကြောင်းရင်း、Justice、Truth"
  },
  {
    "char": "組",
    "on": "そ",
    "kun": "く.む、くみ、-ぐみ",
    "english": "Association, Braid, Plait, Construct, Assemble, Unite, Cooperate, Grapple",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 11,
    "myanmar": "အသင်း、ပေါင်းစပ်သည်、ပေါင်းစပ်သည်、တည်ဆောက်、Assemble、Unite、Cooperate、Grapple"
  },
  {
    "char": "船",
    "on": "せん",
    "kun": "ふね、ふな-",
    "english": "Ship, Boat",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 11,
    "myanmar": "သင်္ဘော်、လှေလှန်လှုပ်"
  },
  {
    "char": "週",
    "on": "しゅう",
    "kun": "",
    "english": "Week",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 11,
    "myanmar": "Week"
  },
  {
    "char": "雪",
    "on": "せつ",
    "kun": "ゆき",
    "english": "Snow",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 11,
    "myanmar": "Snow"
  },
  {
    "char": "魚",
    "on": "ぎょ",
    "kun": "うお、さかな、-ざかな",
    "english": "Fish",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 11,
    "myanmar": "ငါး"
  },
  {
    "char": "鳥",
    "on": "ちょう",
    "kun": "とり",
    "english": "Bird, Chicken",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 11,
    "myanmar": "Bird、Chicken"
  },
  {
    "char": "黄",
    "on": "こう、おう",
    "kun": "き、こ-",
    "english": "Yellow",
    "jlpt_new": 2,
    "grade": 2,
    "strokes": 11,
    "myanmar": "Yellow"
  },
  {
    "char": "黒",
    "on": "こく",
    "kun": "くろ、くろ.ずむ、くろ.い",
    "english": "Black",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 11,
    "myanmar": "Black"
  },
  {
    "char": "支",
    "on": "し",
    "kun": "ささ.える、つか.える、か.う",
    "english": "Branch, Support, Sustain, Branch Radical (no. 65)",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 4,
    "myanmar": "Branch、ထောက်ခံ、Sustain、Branch Radical (no. 65)"
  },
  {
    "char": "住",
    "on": "じゅう、ぢゅう、ちゅう",
    "kun": "す.む、す.まう、-ず.まい",
    "english": "Dwell, Reside, Live, Inhabit",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 7,
    "myanmar": "Dwell、နေထိုင်သည်、Live、Inhabit"
  },
  {
    "char": "助",
    "on": "じょ",
    "kun": "たす.ける、たす.かる、す.ける、すけ",
    "english": "Help, Rescue, Assist",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 7,
    "myanmar": "ကူညီ、Rescue、Assist"
  },
  {
    "char": "医",
    "on": "い",
    "kun": "い.やす、い.する、くすし",
    "english": "Doctor, Medicine",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 7,
    "myanmar": "Doctor、Medicine"
  },
  {
    "char": "君",
    "on": "くん",
    "kun": "きみ、-ぎみ",
    "english": "Mister, You, Ruler, Male Name Suffix",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 7,
    "myanmar": "Mister、You、Ruler、Male Name Suffix"
  },
  {
    "char": "対",
    "on": "たい、つい",
    "kun": "あいて、こた.える、そろ.い、つれあ.い、なら.ぶ、むか.う",
    "english": "Vis-a-vis, Opposite, Even, Equal, Versus, Anti-, Compare",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 7,
    "myanmar": "Vis-a-vis、ဆန့်ကျင်、Even、ညီမျှ、Versus、Anti-、နှိုင်းယှဉ်"
  },
  {
    "char": "局",
    "on": "きょく",
    "kun": "つぼね",
    "english": "Bureau, Board, Office, Affair, Conclusion, Court Lady, Lady-in-waiting, Her Apartment",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 7,
    "myanmar": "Bureau、အဆစ်、ရုံး、Affair、အဆုံးသတ်、Court Lady、Lady-in-waiting、Her Apartment"
  },
  {
    "char": "役",
    "on": "やく、えき",
    "kun": "",
    "english": "Duty, War, Campaign, Drafted Labor, Office, Service, Role",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 7,
    "myanmar": "တာဝန်、စစ်、ခြေလှမ်း、Drafted Labor、ရုံး、Service、Role"
  },
  {
    "char": "投",
    "on": "とう",
    "kun": "な.げる、-な.げ",
    "english": "Throw, Discard, Abandon, Launch Into, Join, Invest In, Hurl, Give Up, Sell At A Loss",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 7,
    "myanmar": "Throw、ပယ်ဖျက်、Abandon、Launch Into、ပါဝင်သည်、Invest In、Hurl、Give Up、Sell At A Loss"
  },
  {
    "char": "決",
    "on": "けつ",
    "kun": "き.める、-ぎ.め、き.まる、さ.く",
    "english": "Decide, Fix, Agree Upon, Appoint",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 7,
    "myanmar": "ဆုံးဖြတ်、ပြုပြင်、Agree Upon、Appoint"
  },
  {
    "char": "究",
    "on": "きゅう、く",
    "kun": "きわ.める",
    "english": "Research, Study",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 7,
    "myanmar": "Research、Study"
  },
  {
    "char": "身",
    "on": "しん",
    "kun": "み",
    "english": "Somebody, Person, One's Station In Life",
    "jlpt_new": null,
    "grade": 3,
    "strokes": 7,
    "myanmar": "Somebody、လူ、One's Station In Life"
  },
  {
    "char": "者",
    "on": "しゃ",
    "kun": "もの",
    "english": "Someone, Person",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 8,
    "myanmar": "Someone、လူ"
  },
  {
    "char": "研",
    "on": "けん",
    "kun": "と.ぐ",
    "english": "Polish, Study Of, Sharpen",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 9,
    "myanmar": "သန့်ရှင်းသည်、Study Of、Sharpen"
  },
  {
    "char": "馬",
    "on": "ば",
    "kun": "うま、うま-、ま",
    "english": "Horse",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 10,
    "myanmar": "Horse"
  },
  {
    "char": "森",
    "on": "しん",
    "kun": "もり",
    "english": "Forest, Woods",
    "jlpt_new": 2,
    "grade": 1,
    "strokes": 12,
    "myanmar": "အမဲရား、အမဲရား"
  },
  {
    "char": "場",
    "on": "じょう、ちょう",
    "kun": "ば",
    "english": "Location, Place",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 12,
    "myanmar": "Location、Place"
  },
  {
    "char": "朝",
    "on": "ちょう",
    "kun": "あさ",
    "english": "Morning, Dynasty, Regime, Epoch, Period, (north) Korea",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 12,
    "myanmar": "မနက်ပိုင်း、Dynasty、Regime、Epoch、ကာလ、(north) Korea"
  },
  {
    "char": "番",
    "on": "ばん",
    "kun": "つが.い",
    "english": "Turn, Number In A Series",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 12,
    "myanmar": "အလျား、Number In A Series"
  },
  {
    "char": "答",
    "on": "とう",
    "kun": "こた.える、こた.え",
    "english": "Solution, Answer",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 12,
    "myanmar": "Solution、Answer"
  },
  {
    "char": "絵",
    "on": "かい、え",
    "kun": "",
    "english": "Picture, Drawing, Painting, Sketch",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 12,
    "myanmar": "ဓာတ်ပုံ、Drawing、Painting、Sketch"
  },
  {
    "char": "買",
    "on": "ばい",
    "kun": "か.う",
    "english": "Buy",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 12,
    "myanmar": "ဝယ်"
  },
  {
    "char": "道",
    "on": "どう、とう",
    "kun": "みち、いう",
    "english": "Road-way, Street, District, Journey, Course, Moral, Teachings",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 12,
    "myanmar": "Road-way、Street、ခရိုင်、Journey、Course、Moral、Teachings"
  },
  {
    "char": "間",
    "on": "かん、けん",
    "kun": "あいだ、ま、あい",
    "english": "Interval, Space",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 12,
    "myanmar": "Interval、အလွှာပေါ်"
  },
  {
    "char": "雲",
    "on": "うん",
    "kun": "くも、-ぐも",
    "english": "Cloud",
    "jlpt_new": 2,
    "grade": 2,
    "strokes": 12,
    "myanmar": "Cloud"
  },
  {
    "char": "数",
    "on": "すう、す、さく、そく、しゅ",
    "kun": "かず、かぞ.える、しばしば、せ.める、わずらわ.しい",
    "english": "Number, Strength, Fate, Law, Figures",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 13,
    "myanmar": "Number、အား、Fate、ဥပဒေ、Figures"
  },
  {
    "char": "楽",
    "on": "がく、らく、ごう",
    "kun": "たの.しい、たの.しむ、この.む",
    "english": "Music, Comfort, Ease",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 13,
    "myanmar": "ဂီတ、Comfort、Ease"
  },
  {
    "char": "話",
    "on": "わ",
    "kun": "はな.す、はなし",
    "english": "Tale, Talk",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 13,
    "myanmar": "Tale、Talk"
  },
  {
    "char": "電",
    "on": "でん",
    "kun": "",
    "english": "Electricity",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 13,
    "myanmar": "Electricity"
  },
  {
    "char": "所",
    "on": "しょ",
    "kun": "ところ、-ところ、どころ、とこ",
    "english": "Place, Extent",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 8,
    "myanmar": "Place、Extent"
  },
  {
    "char": "事",
    "on": "じ、ず",
    "kun": "こと、つか.う、つか.える",
    "english": "Matter, Thing, Fact, Business, Reason, Possibly",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 8,
    "myanmar": "Matter、Thing、Fact、စီးပွဲ、အကြောင်းရင်း、Possibly"
  },
  {
    "char": "使",
    "on": "し",
    "kun": "つか.う、つか.い、-つか.い、-づか.い",
    "english": "Use, Send On A Mission, Order, Messenger, Envoy, Ambassador, Cause",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 8,
    "myanmar": "Use、Send On A Mission、အမိန့်、Messenger、Envoy、Ambassador、အကြောင်းရင်း"
  },
  {
    "char": "具",
    "on": "ぐ",
    "kun": "そな.える、つぶさ.に",
    "english": "Tool, Utensil, Means, Possess, Ingredients, Counter For Armor, Suits, Sets Of Furniture",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 8,
    "myanmar": "Tool、Utensil、Means、ပိုင်ဆိုင်သည်、Ingredients、Counter For Armor、Suits、Sets Of Furniture"
  },
  {
    "char": "受",
    "on": "じゅ",
    "kun": "う.ける、-う.け、う.かる",
    "english": "Accept, Undergo, Answer (phone), Take, Get, Catch, Receive",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 8,
    "myanmar": "လက်ခံ、Undergo、Answer (phone)、ယူ、Get、Catch、လက်ခံ"
  },
  {
    "char": "和",
    "on": "わ、お、か",
    "kun": "やわ.らぐ、やわ.らげる、なご.む、なご.やか、あ.える",
    "english": "Harmony, Japanese Style, Peace, Soften, Japan",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 8,
    "myanmar": "Harmony、Japanese Style、ငြိမ်ချမ်း、Soften、Japan"
  },
  {
    "char": "始",
    "on": "し",
    "kun": "はじ.める、-はじ.める、はじ.まる",
    "english": "Commence, Begin",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 8,
    "myanmar": "Commence、Begin"
  },
  {
    "char": "定",
    "on": "てい、じょう",
    "kun": "さだ.める、さだ.まる、さだ.か",
    "english": "Determine, Fix, Establish, Decide",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 8,
    "myanmar": "Determine、ပြုပြင်、တည်ထောင်、ဆုံးဖြတ်"
  },
  {
    "char": "実",
    "on": "じつ、しつ",
    "kun": "み、みの.る、まこと、みの、みち.る",
    "english": "Reality, Truth",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 8,
    "myanmar": "Reality、Truth"
  },
  {
    "char": "服",
    "on": "ふく",
    "kun": "",
    "english": "Clothing, Admit, Obey, Discharge",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 8,
    "myanmar": "Clothing、Admit、လိုက်、Discharge"
  },
  {
    "char": "泳",
    "on": "えい",
    "kun": "およ.ぐ",
    "english": "Swim",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 8,
    "myanmar": "Swim"
  },
  {
    "char": "物",
    "on": "ぶつ、もつ",
    "kun": "もの、もの-",
    "english": "Thing, Object, Matter",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 8,
    "myanmar": "Thing、Object、Matter"
  },
  {
    "char": "苦",
    "on": "く",
    "kun": "くる.しい、-ぐる.しい、くる.しむ、くる.しめる、にが.い、にが.る",
    "english": "Suffering, Trial, Worry, Hardship, Feel Bitter, Scowl",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 8,
    "myanmar": "Suffering、Trial、Worry、Hardship、Feel Bitter、Scowl"
  },
  {
    "char": "表",
    "on": "ひょう",
    "kun": "おもて、-おもて、あらわ.す、あらわ.れる、あら.わす",
    "english": "Surface, Table, Chart, Diagram",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 8,
    "myanmar": "Surface、စားပွဲ、Chart、Diagram"
  },
  {
    "char": "部",
    "on": "ぶ",
    "kun": "-べ",
    "english": "Section, Bureau, Dept, Class, Copy, Part, Portion, Counter For Copies Of A Newspaper Or Magazine",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 11,
    "myanmar": "အပိုင်း、Bureau、Dept、Class、ကူးယူ、အပိုင်း、Portion、Counter For Copies Of A Newspaper Or Magazine"
  },
  {
    "char": "乗",
    "on": "じょう、しょう",
    "kun": "の.る、-の.り、の.せる",
    "english": "Ride, Power, Multiplication, Record, Counter For Vehicles, Board, Mount, Join",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Ride、စွမ်း、Multiplication、မှတ်တမ်း、Counter For Vehicles、အဆစ်、Mount、ပါဝင်သည်"
  },
  {
    "char": "客",
    "on": "きゃく、かく",
    "kun": "",
    "english": "Guest, Visitor, Customer, Client",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Guest、Visitor、Customer、Client"
  },
  {
    "char": "屋",
    "on": "おく",
    "kun": "や",
    "english": "Roof, House, Shop, Dealer, Seller",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 9,
    "myanmar": "အမိုး、အိမ်、Shop、Dealer、Seller"
  },
  {
    "char": "度",
    "on": "ど、と、たく",
    "kun": "たび、-た.い",
    "english": "Degrees, Occurrence, Time, Counter For Occurrences, Consider, Attitude",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Degrees、Occurrence、အချိန်、Counter For Occurrences、စဉ်းစား、Attitude"
  },
  {
    "char": "待",
    "on": "たい",
    "kun": "ま.つ、-ま.ち",
    "english": "Wait, Depend On",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 9,
    "myanmar": "စောင့်、Depend On"
  },
  {
    "char": "持",
    "on": "じ",
    "kun": "も.つ、-も.ち、も.てる",
    "english": "Hold, Have",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 9,
    "myanmar": "ကိုင်、Have"
  },
  {
    "char": "界",
    "on": "かい",
    "kun": "",
    "english": "World, Boundary",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 9,
    "myanmar": "ကမ္ဘာ、အကန့်"
  },
  {
    "char": "発",
    "on": "はつ、ほつ",
    "kun": "た.つ、あば.く、おこ.る、つか.わす、はな.つ",
    "english": "Departure, Discharge, Publish, Emit, Start From, Disclose, Counter For Gunshots",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Departure、Discharge、ထုတ်ဝေ、Emit、Start From、Disclose、Counter For Gunshots"
  },
  {
    "char": "相",
    "on": "そう、しょう",
    "kun": "あい-",
    "english": "Inter-, Mutual, Together, Each Other, Minister Of State, Councillor, Aspect, Phase, Physiognomy",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Inter-、Mutual、တူတကွး、Each Other、Minister Of State、Councillor、Aspect、Phase、Physiognomy"
  },
  {
    "char": "県",
    "on": "けん",
    "kun": "か.ける",
    "english": "Prefecture",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 9,
    "myanmar": "ပြည်နယ်"
  },
  {
    "char": "美",
    "on": "び、み",
    "kun": "うつく.しい",
    "english": "Beauty, Beautiful",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Beauty、လှပ"
  },
  {
    "char": "負",
    "on": "ふ",
    "kun": "ま.ける、ま.かす、お.う",
    "english": "Defeat, Negative, -, Minus, Bear, Owe, Assume A Responsibility",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Defeat、Negative、-、Minus、ယူ、Owe、Assume A Responsibility"
  },
  {
    "char": "送",
    "on": "そう",
    "kun": "おく.る",
    "english": "Escort, Send",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Escort、ပို့"
  },
  {
    "char": "重",
    "on": "じゅう、ちょう",
    "kun": "え、おも.い、おも.り、おも.なう、かさ.ねる、かさ.なる、おも",
    "english": "Heavy, Important, Esteem, Respect, Heap Up, Pile Up, Nest Of Boxes, -fold",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 9,
    "myanmar": "လေးလံ、အရေးကြီး、Esteem、Respect、Heap Up、Pile Up、Nest Of Boxes、-fold"
  },
  {
    "char": "談",
    "on": "だん",
    "kun": "",
    "english": "Discuss, Talk",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 15,
    "myanmar": "Discuss、Talk"
  },
  {
    "char": "要",
    "on": "よう",
    "kun": "い.る、かなめ",
    "english": "Need, Main Point, Essence, Pivot, Key To",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 9,
    "myanmar": "လိုအပ်、Main Point、Essence、Pivot、Key To"
  },
  {
    "char": "勝",
    "on": "しょう",
    "kun": "か.つ、-が.ち、まさ.る、すぐ.れる、かつ",
    "english": "Victory, Win, Prevail, Excel",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 12,
    "myanmar": "Victory、နိုင်、Prevail、Excel"
  },
  {
    "char": "仮",
    "on": "か、け",
    "kun": "かり、かり-",
    "english": "Sham, Temporary, Interim, Assumed (name), Informal",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 6,
    "myanmar": "Sham、Temporary、Interim、Assumed (name)、Informal"
  },
  {
    "char": "起",
    "on": "き",
    "kun": "お.きる、お.こる、お.こす、おこ.す、た.つ",
    "english": "Rouse, Wake Up, Get Up",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 10,
    "myanmar": "Rouse、Wake Up、Get Up"
  },
  {
    "char": "速",
    "on": "そく",
    "kun": "はや.い、はや-、はや.める、すみ.やか",
    "english": "Quick, Fast",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 10,
    "myanmar": "Quick、လွယ်ကူ"
  },
  {
    "char": "配",
    "on": "はい",
    "kun": "くば.る",
    "english": "Distribute, Spouse, Exile, Rationing",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 10,
    "myanmar": "Distribute、Spouse、Exile、Rationing"
  },
  {
    "char": "酒",
    "on": "しゅ",
    "kun": "さけ、さか-",
    "english": "Sake, Alcohol",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 10,
    "myanmar": "Sake、Alcohol"
  },
  {
    "char": "院",
    "on": "いん",
    "kun": "",
    "english": "Inst., Institution, Temple, Mansion, School",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 10,
    "myanmar": "Inst.、Institution、Temple、Mansion、School"
  },
  {
    "char": "終",
    "on": "しゅう",
    "kun": "お.わる、-お.わる、おわ.る、お.える、つい、つい.に",
    "english": "End, Finish",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 11,
    "myanmar": "အဆုံး、ပြီးမြောက်"
  },
  {
    "char": "習",
    "on": "しゅう、じゅ",
    "kun": "なら.う、なら.い",
    "english": "Learn",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 11,
    "myanmar": "သင်ယူ"
  },
  {
    "char": "転",
    "on": "てん",
    "kun": "ころ.がる、ころ.げる、ころ.がす、ころ.ぶ、まろ.ぶ、うたた、うつ.る、くる.めく",
    "english": "Revolve, Turn Around, Change",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 11,
    "myanmar": "Revolve、Turn Around、ပြောင်း"
  },
  {
    "char": "進",
    "on": "しん",
    "kun": "すす.む、すす.める",
    "english": "Advance, Proceed, Progress, Promote",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 11,
    "myanmar": "Advance、Proceed、Progress、Promote"
  },
  {
    "char": "落",
    "on": "らく",
    "kun": "お.ちる、お.ち、お.とす",
    "english": "Fall, Drop, Come Down, Village, Hamlet",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 12,
    "myanmar": "ကျလာ、ချိုး、Come Down、ရွာ、Hamlet"
  },
  {
    "char": "葉",
    "on": "よう",
    "kun": "は",
    "english": "Leaf, Plane, Lobe, Needle, Blade, Spear, Counter For Flat Things, Fragment, Piece",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 12,
    "myanmar": "အရွက်、Plane、Lobe、အကြီးအလေးကြီး、Blade、Spear、Counter For Flat Things、Fragment、Piece"
  },
  {
    "char": "軽",
    "on": "けい、きょう、きん",
    "kun": "かる.い、かろ.やか、かろ.んじる",
    "english": "Lightly, Trifling, Unimportant",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 12,
    "myanmar": "ပေါ့ပြူ、အမှားတရား、အရေးမကြီး"
  },
  {
    "char": "運",
    "on": "うん",
    "kun": "はこ.ぶ",
    "english": "Carry, Luck, Destiny, Fate, Lot, Transport, Progress, Advance",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 12,
    "myanmar": "ယူ、Luck、Destiny、Fate、Lot、ပို့ဆေး、Progress、Advance"
  },
  {
    "char": "開",
    "on": "かい",
    "kun": "ひら.く、ひら.き、-びら.き、ひら.ける、あ.く、あ.ける",
    "english": "Open, Unfold, Unseal",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 12,
    "myanmar": "ဖွင့်、Unfold、Unseal"
  },
  {
    "char": "集",
    "on": "しゅう",
    "kun": "あつ.まる、あつ.める、つど.う",
    "english": "Gather, Meet, Congregate, Swarm, Flock",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 12,
    "myanmar": "စုဆည်း、Meet、Congregate、အဖွဲ့、အဖွဲ့"
  },
  {
    "char": "飲",
    "on": "いん、おん",
    "kun": "の.む、-の.み",
    "english": "Drink, Smoke, Take",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 12,
    "myanmar": "သောက်、Smoke、ယူ"
  },
  {
    "char": "業",
    "on": "ぎょう、ごう",
    "kun": "わざ",
    "english": "Business, Vocation, Arts, Performance",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 13,
    "myanmar": "စီးပွဲ、အလုပ်、အနုပညာ、ပြသမှု"
  },
  {
    "char": "漢",
    "on": "かん",
    "kun": "",
    "english": "Sino-, China",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 13,
    "myanmar": "Sino-、China"
  },
  {
    "char": "路",
    "on": "ろ、る",
    "kun": "-じ、みち",
    "english": "Path, Route, Road, Distance",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 13,
    "myanmar": "Path、Route、လမ်း、Distance"
  },
  {
    "char": "農",
    "on": "のう",
    "kun": "",
    "english": "Agriculture, Farmers",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 13,
    "myanmar": "စိုက်ပျိုးရေး、စိုက်ပျိုးသူ"
  },
  {
    "char": "鉄",
    "on": "てつ",
    "kun": "くろがね",
    "english": "Iron",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 13,
    "myanmar": "သံ"
  },
  {
    "char": "歌",
    "on": "か",
    "kun": "うた、うた.う",
    "english": "Song, Sing",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 14,
    "myanmar": "Song、Sing"
  },
  {
    "char": "算",
    "on": "さん",
    "kun": "そろ",
    "english": "Calculate, Divining, Number, Abacus, Probability",
    "jlpt_new": 2,
    "grade": 2,
    "strokes": 14,
    "myanmar": "တွက်ချက်、ကံကြမ္မာ、Number、Abacus、Probability"
  },
  {
    "char": "聞",
    "on": "ぶん、もん",
    "kun": "き.く、き.こえる",
    "english": "Hear, Ask, Listen",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 14,
    "myanmar": "နားသည်、မေးသည်、နားထောင်"
  },
  {
    "char": "語",
    "on": "ご",
    "kun": "かた.る、かた.らう",
    "english": "Word, Speech, Language",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 14,
    "myanmar": "စကား、ပြောကြားချက်、ဘာသာစကား"
  },
  {
    "char": "読",
    "on": "どく、とく、とう",
    "kun": "よ.む、-よ.み",
    "english": "Read",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 14,
    "myanmar": "ဖတ်သည်"
  },
  {
    "char": "鳴",
    "on": "めい",
    "kun": "な.く、な.る、な.らす",
    "english": "Chirp, Cry, Bark, Sound, Ring, Echo, Honk",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 14,
    "myanmar": "Chirp、Cry、Bark、အသံ、လက်ပတ်ကောင်、Echo、Honk"
  },
  {
    "char": "線",
    "on": "せん",
    "kun": "すじ",
    "english": "Line, Track",
    "jlpt_new": 2,
    "grade": 2,
    "strokes": 15,
    "myanmar": "လိုင်း、လမ်း"
  },
  {
    "char": "横",
    "on": "おう",
    "kun": "よこ",
    "english": "Sideways, Side, Horizontal, Width, Woof, Unreasonable, Perverse",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 15,
    "myanmar": "Sideways、Side、Horizontal、အလျား、Woof、Unreasonable、Perverse"
  },
  {
    "char": "調",
    "on": "ちょう",
    "kun": "しら.べる、しら.べ、ととの.う、ととの.える",
    "english": "Tune, Tone, Meter, Key (music), Writing Style, Prepare, Exorcise, Investigate, Harmonize, Mediate",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 15,
    "myanmar": "Tune、Tone、Meter、Key (music)、Writing Style、ပြင်ဆင်、ပြင်းထန်သည်、စစ်ဆေး、Harmonize、အကူအညီ"
  },
  {
    "char": "親",
    "on": "しん",
    "kun": "おや、おや-、した.しい、した.しむ",
    "english": "Parent, Intimacy, Relative, Familiarity, Dealer (cards)",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 16,
    "myanmar": "Parent、Intimacy、Relative、Familiarity、Dealer (cards)"
  },
  {
    "char": "頭",
    "on": "とう、ず、と",
    "kun": "あたま、かしら、-がしら、かぶり",
    "english": "Head, Counter For Large Animals",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 16,
    "myanmar": "ဦးခေါင်း、Counter For Large Animals"
  },
  {
    "char": "顔",
    "on": "がん",
    "kun": "かお",
    "english": "Face, Expression",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 18,
    "myanmar": "Face、Expression"
  },
  {
    "char": "病",
    "on": "びょう、へい",
    "kun": "や.む、-や.み、やまい",
    "english": "Ill, Sick",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 10,
    "myanmar": "ဖျားနာ、ဖျားနာ"
  },
  {
    "char": "最",
    "on": "さい、しゅ",
    "kun": "もっと.も、つま",
    "english": "Utmost, Most, Extreme",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 12,
    "myanmar": "Utmost、အားလုံးဆုံး、Extreme"
  },
  {
    "char": "争",
    "on": "そう",
    "kun": "あらそ.う、いか.でか",
    "english": "Contend, Dispute, Argue",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 6,
    "myanmar": "Contend、Dispute、Argue"
  },
  {
    "char": "仲",
    "on": "ちゅう",
    "kun": "なか",
    "english": "Go-between, Relationship",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 6,
    "myanmar": "Go-between、Relationship"
  },
  {
    "char": "伝",
    "on": "でん、てん",
    "kun": "つた.わる、つた.える、つた.う、つだ.う、-づた.い、つて",
    "english": "Transmit, Go Along, Walk Along, Follow, Report, Communicate, Legend, Tradition",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 6,
    "myanmar": "Transmit、Go Along、Walk Along、လိုက်、သတင်းစာ、Communicate、Legend、Tradition"
  },
  {
    "char": "共",
    "on": "きょう",
    "kun": "とも、とも.に、-ども",
    "english": "Together, Both, Neither, All, And, Alike, With",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 6,
    "myanmar": "တူတကွး、Both、Neither、အားလုံး、နှင့်、Alike、With"
  },
  {
    "char": "好",
    "on": "こう",
    "kun": "この.む、す.く、よ.い、い.い",
    "english": "Fond, Pleasing, Like Something",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 6,
    "myanmar": "Fond、Pleasing、Like Something"
  },
  {
    "char": "成",
    "on": "せい、じょう",
    "kun": "な.る、な.す、-な.す",
    "english": "Turn Into, Become, Get, Grow, Elapse, Reach",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 6,
    "myanmar": "Turn Into、Become、Get、ကြီးထွား、Elapse、ရောက်"
  },
  {
    "char": "老",
    "on": "ろう",
    "kun": "お.いる、ふ.ける",
    "english": "Old Man, Old Age, Grow Old",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 6,
    "myanmar": "Old Man、Old Age、Grow Old"
  },
  {
    "char": "位",
    "on": "い",
    "kun": "くらい、ぐらい",
    "english": "Rank, Grade, Throne, Crown, About, Some",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 7,
    "myanmar": "Rank、Grade、Throne、Crown、About、Some"
  },
  {
    "char": "低",
    "on": "てい",
    "kun": "ひく.い、ひく.める、ひく.まる",
    "english": "Lower, Short, Humble",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 7,
    "myanmar": "နိမ့်、တိုတို、ထိလို့မရသော"
  },
  {
    "char": "初",
    "on": "しょ",
    "kun": "はじ.め、はじ.めて、はつ、はつ-、うい-、-そ.める、-ぞ.め",
    "english": "First Time, Beginning",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 7,
    "myanmar": "First Time、Beginning"
  },
  {
    "char": "別",
    "on": "べつ",
    "kun": "わか.れる、わ.ける",
    "english": "Separate, Branch Off, Diverge, Fork, Another, Extra, Specially",
    "jlpt_new": 4,
    "grade": 4,
    "strokes": 7,
    "myanmar": "ခွဲခြား、Branch Off、Diverge、Fork、Another、Extra、Specially"
  },
  {
    "char": "利",
    "on": "り",
    "kun": "き.く",
    "english": "Profit, Advantage, Benefit",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 7,
    "myanmar": "Profit、Advantage、လစာ"
  },
  {
    "char": "努",
    "on": "ど",
    "kun": "つと.める",
    "english": "Toil, Diligent, As Much As Possible",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 7,
    "myanmar": "Toil、Diligent、As Much As Possible"
  },
  {
    "char": "労",
    "on": "ろう",
    "kun": "ろう.する、いたわ.る、いた.ずき、ねぎら、つか.れる、ねぎら.う",
    "english": "Labor, Thank For, Reward For, Toil, Trouble",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 7,
    "myanmar": "Labor、Thank For、Reward For、Toil、Trouble"
  },
  {
    "char": "命",
    "on": "めい、みょう",
    "kun": "いのち",
    "english": "Fate, Command, Decree, Destiny, Life, Appoint",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 8,
    "myanmar": "Fate、အမိန့်、အမိန့်、Destiny、ဘဝ、Appoint"
  },
  {
    "char": "岸",
    "on": "がん",
    "kun": "きし",
    "english": "Beach",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 8,
    "myanmar": "ကမ်းခြေ"
  },
  {
    "char": "放",
    "on": "ほう",
    "kun": "はな.す、-っぱな.し、はな.つ、はな.れる、こ.く、ほう.る",
    "english": "Set Free, Release, Fire, Shoot, Emit, Banish, Liberate",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 8,
    "myanmar": "Set Free、Release、မီး、Shoot、Emit、Banish、Liberate"
  },
  {
    "char": "昔",
    "on": "せき、しゃく",
    "kun": "むかし",
    "english": "Once Upon A Time, Antiquity, Old Times",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 8,
    "myanmar": "Once Upon A Time、Antiquity、ဟောင်းနေခြင်း"
  },
  {
    "char": "波",
    "on": "は",
    "kun": "なみ",
    "english": "Waves, Billows, Poland",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 8,
    "myanmar": "လှိုင်း、လှိုင်း、ပိုလန််"
  },
  {
    "char": "注",
    "on": "ちゅう",
    "kun": "そそ.ぐ、さ.す、つ.ぐ",
    "english": "Pour, Irrigate, Shed (tears), Flow Into, Concentrate On, Notes, Comment, Annotate",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 8,
    "myanmar": "Pour、Irrigate、Shed (tears)、Flow Into、Concentrate On、Notes、Comment、Annotate"
  },
  {
    "char": "育",
    "on": "いく",
    "kun": "そだ.つ、そだ.ち、そだ.てる、はぐく.む",
    "english": "Bring Up, Grow Up, Raise, Rear",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 8,
    "myanmar": "Bring Up、Grow Up、တက်လာ、နောက်ဘက်"
  },
  {
    "char": "拾",
    "on": "しゅう、じゅう",
    "kun": "ひろ.う",
    "english": "Pick Up, Gather, Find, Go On Foot, Ten",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Pick Up、စုဆည်း、ရှာ、Go On Foot、ဆယ်"
  },
  {
    "char": "指",
    "on": "し",
    "kun": "ゆび、さ.す、-さ.し",
    "english": "Finger, Point To, Indicate, Put Into, Play (chess), Measure (ruler)",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Finger、Point To、Indicate、Put Into、Play (chess)、Measure (ruler)"
  },
  {
    "char": "洋",
    "on": "よう",
    "kun": "",
    "english": "Ocean, Sea, Foreign, Western Style",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Ocean、ပင်လယ်、Foreign、Western Style"
  },
  {
    "char": "神",
    "on": "しん、じん",
    "kun": "かみ、かん-、こう-",
    "english": "Gods, Mind, Soul",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Gods、Mind、Soul"
  },
  {
    "char": "秒",
    "on": "びょう",
    "kun": "",
    "english": "Second (1/60 Minute)",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Second (1/60 Minute)"
  },
  {
    "char": "級",
    "on": "きゅう",
    "kun": "",
    "english": "Class, Rank, Grade",
    "jlpt_new": 1,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Class、Rank、Grade"
  },
  {
    "char": "追",
    "on": "つい",
    "kun": "お.う",
    "english": "Chase, Drive Away, Follow, Pursue, Meanwhile",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Chase、Drive Away、လိုက်、Pursue、Meanwhile"
  },
  {
    "char": "戦",
    "on": "せん",
    "kun": "いくさ、たたか.う、おのの.く、そよ.ぐ、わなな.く",
    "english": "War, Battle, Match",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 13,
    "myanmar": "စစ်、တိုက်ပွဲ、Match"
  },
  {
    "char": "競",
    "on": "きょう、けい",
    "kun": "きそ.う、せ.る、くら.べる",
    "english": "Emulate, Compete With, Bid, Sell At Auction, Bout, Contest, Race",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 20,
    "myanmar": "နှိုင်းယှဉ်、Compete With、ပြောင်းလဲ、Sell At Auction、ခြေလှမ်း、ပြိုင်ပွဲ、ပြိုင်ပွဲ"
  },
  {
    "char": "良",
    "on": "りょう",
    "kun": "よ.い、-よ.い、い.い、-い.い",
    "english": "Good, Pleasing, Skilled",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 7,
    "myanmar": "ကောင်း、Pleasing、Skilled"
  },
  {
    "char": "功",
    "on": "こう、く",
    "kun": "いさお",
    "english": "Achievement, Merits, Success, Honor, Credit",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 5,
    "myanmar": "Achievement、Merits、Success、ဂုဏ်ပြု、Credit"
  },
  {
    "char": "特",
    "on": "とく",
    "kun": "",
    "english": "Special",
    "jlpt_new": 4,
    "grade": 4,
    "strokes": 10,
    "myanmar": "Special"
  },
  {
    "char": "便",
    "on": "べん、びん",
    "kun": "たよ.り",
    "english": "Convenience, Facility, Excrement, Feces, Letter, Chance",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 9,
    "myanmar": "Convenience、Facility、Excrement、Feces、Letter、Chance"
  },
  {
    "char": "働",
    "on": "どう",
    "kun": "はたら.く",
    "english": "Work, (kokuji)",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 13,
    "myanmar": "အလုပ်、(kokuji)"
  },
  {
    "char": "令",
    "on": "れい",
    "kun": "",
    "english": "Orders, Ancient Laws, Command, Decree",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 5,
    "myanmar": "အမိန့်、ဟောင်းနေခြင်း、အမိန့်、အမိန့်"
  },
  {
    "char": "意",
    "on": "い",
    "kun": "",
    "english": "Idea, Mind, Heart, Taste, Thought, Desire, Care, Liking",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 13,
    "myanmar": "Idea、Mind、စိတ်、အရသာ、Thought、Desire、Care、Liking"
  },
  {
    "char": "味",
    "on": "み",
    "kun": "あじ、あじ.わう",
    "english": "Flavor, Taste",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 8,
    "myanmar": "Flavor、အရသာ"
  },
  {
    "char": "勉",
    "on": "べん",
    "kun": "つと.める",
    "english": "Exertion, Endeavour, Encourage, Strive, Make Effort, Diligent",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 10,
    "myanmar": "Exertion、Endeavour、Encourage、Strive、Make Effort、Diligent"
  },
  {
    "char": "庭",
    "on": "てい",
    "kun": "にわ",
    "english": "Courtyard, Garden, Yard",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 10,
    "myanmar": "Courtyard、Garden、Yard"
  },
  {
    "char": "息",
    "on": "そく",
    "kun": "いき",
    "english": "Breath, Respiration, Son, Interest (on Money)",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 10,
    "myanmar": "Breath、Respiration、Son、Interest (on Money)"
  },
  {
    "char": "旅",
    "on": "りょ",
    "kun": "たび",
    "english": "Trip, Travel",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 10,
    "myanmar": "Trip、Travel"
  },
  {
    "char": "根",
    "on": "こん",
    "kun": "ね、-ね",
    "english": "Root, Radical, Head (pimple)",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 10,
    "myanmar": "အရင်း、အခြေခံ、Head (pimple)"
  },
  {
    "char": "流",
    "on": "りゅう、る",
    "kun": "なが.れる、なが.れ、なが.す、-なが.す",
    "english": "Current, A Sink, Flow, Forfeit",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 10,
    "myanmar": "Current、A Sink、Flow、Forfeit"
  },
  {
    "char": "消",
    "on": "しょう",
    "kun": "き.える、け.す",
    "english": "Extinguish, Blow Out, Turn Off, Neutralize, Cancel",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 10,
    "myanmar": "Extinguish、Blow Out、Turn Off、Neutralize、Cancel"
  },
  {
    "char": "倍",
    "on": "ばい",
    "kun": "",
    "english": "Double, Twice, Times, Fold",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 10,
    "myanmar": "အပေါင်းနှစ်ဆင့်、နှစ်ကြိမ်、အချိန်、ပေါင်းစပ်"
  },
  {
    "char": "員",
    "on": "いん",
    "kun": "",
    "english": "Employee, Member, Number, The One In Charge",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 10,
    "myanmar": "Employee、Member、Number、The One In Charge"
  },
  {
    "char": "島",
    "on": "とう",
    "kun": "しま",
    "english": "Island",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 10,
    "myanmar": "ကျွန်း"
  },
  {
    "char": "祭",
    "on": "さい",
    "kun": "まつ.る、まつ.り、まつり",
    "english": "Ritual, Offer Prayers, Celebrate, Deify, Enshrine, Worship",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 11,
    "myanmar": "Ritual、Offer Prayers、Celebrate、Deify、Enshrine、Worship"
  },
  {
    "char": "章",
    "on": "しょう",
    "kun": "",
    "english": "Badge, Chapter, Composition, Poem, Design",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 11,
    "myanmar": "လက်မှတ်、အခန်း、ဖွဲ့စည်း、ကဗျာ、ဒီဇိုင်း"
  },
  {
    "char": "第",
    "on": "だい、てい",
    "kun": "",
    "english": "No., Residence",
    "jlpt_new": 1,
    "grade": 3,
    "strokes": 11,
    "myanmar": "No.、Residence"
  },
  {
    "char": "都",
    "on": "と、つ",
    "kun": "みやこ",
    "english": "Metropolis, Capital, All, Everything",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 11,
    "myanmar": "Metropolis、Capital、အားလုံး、Everything"
  },
  {
    "char": "動",
    "on": "どう",
    "kun": "うご.く、うご.かす",
    "english": "Move, Motion, Change, Confusion, Shift, Shake",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 11,
    "myanmar": "ရွှေ့、Motion、ပြောင်း、Confusion、Shift、လှုပ်ခြင်း"
  },
  {
    "char": "商",
    "on": "しょう",
    "kun": "あきな.う",
    "english": "Make A Deal, Selling, Dealing In, Merchant",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 11,
    "myanmar": "Make A Deal、Selling、Dealing In、Merchant"
  },
  {
    "char": "悪",
    "on": "あく、お",
    "kun": "わる.い、わる-、あ.し、にく.い、-にく.い、ああ、いずくに、いずくんぞ、にく.む",
    "english": "Bad, Vice, Rascal, False, Evil, Wrong",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 11,
    "myanmar": "မကောင်း、ဒုတိယ、Rascal、အမှားတရား、Evil、Wrong"
  },
  {
    "char": "族",
    "on": "ぞく",
    "kun": "",
    "english": "Tribe, Family",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 11,
    "myanmar": "Tribe、Family"
  },
  {
    "char": "深",
    "on": "しん",
    "kun": "ふか.い、-ぶか.い、ふか.まる、ふか.める、み-",
    "english": "Deep, Heighten, Intensify, Strengthen",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 11,
    "myanmar": "Deep、Heighten、Intensify、Strengthen"
  },
  {
    "char": "球",
    "on": "きゅう",
    "kun": "たま",
    "english": "Ball, Sphere",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 11,
    "myanmar": "ဘောလုံး、Sphere"
  },
  {
    "char": "童",
    "on": "どう",
    "kun": "わらべ",
    "english": "Juvenile, Child",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 12,
    "myanmar": "Juvenile、ကလေး"
  },
  {
    "char": "陽",
    "on": "よう",
    "kun": "ひ",
    "english": "Sunshine, Yang Principle, Positive, Male, Heaven, Daytime",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 12,
    "myanmar": "Sunshine、Yang Principle、Positive、Male、ကမ္ဘာ、Daytime"
  },
  {
    "char": "階",
    "on": "かい",
    "kun": "きざはし",
    "english": "Storey, Stair, Counter For Storeys Of A Building",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 12,
    "myanmar": "အလတ်、လှေတစ်、Counter For Storeys Of A Building"
  },
  {
    "char": "寒",
    "on": "かん",
    "kun": "さむ.い",
    "english": "Cold",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 12,
    "myanmar": "ခြောက်"
  },
  {
    "char": "悲",
    "on": "ひ",
    "kun": "かな.しい、かな.しむ",
    "english": "Grieve, Sad, Deplore, Regret",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 12,
    "myanmar": "Grieve、စိတ်ဆိုး、Deplore、Regret"
  },
  {
    "char": "暑",
    "on": "しょ",
    "kun": "あつ.い",
    "english": "Sultry, Hot, Summer Heat",
    "jlpt_new": 1,
    "grade": 3,
    "strokes": 12,
    "myanmar": "Sultry、ပူ、Summer Heat"
  },
  {
    "char": "期",
    "on": "き、ご",
    "kun": "",
    "english": "Period, Time, Date, Term",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 12,
    "myanmar": "ကာလ、အချိန်、Date、Term"
  },
  {
    "char": "植",
    "on": "しょく",
    "kun": "う.える、う.わる",
    "english": "Plant",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 12,
    "myanmar": "အပင်"
  },
  {
    "char": "歯",
    "on": "し",
    "kun": "よわい、は、よわ.い、よわい.する",
    "english": "Tooth, Cog",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 12,
    "myanmar": "Tooth、Cog"
  },
  {
    "char": "温",
    "on": "おん",
    "kun": "あたた.か、あたた.かい、あたた.まる、あたた.める、ぬく",
    "english": "Warm",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 12,
    "myanmar": "အပူချို"
  },
  {
    "char": "港",
    "on": "こう",
    "kun": "みなと",
    "english": "Harbor",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 12,
    "myanmar": "Harbor"
  },
  {
    "char": "湯",
    "on": "とう",
    "kun": "ゆ",
    "english": "Hot Water, Bath, Hot Spring",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 12,
    "myanmar": "Hot Water、Bath、Hot Spring"
  },
  {
    "char": "登",
    "on": "とう、と、どう、しょう、ちょう",
    "kun": "のぼ.る、あ.がる",
    "english": "Ascend, Climb Up",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 12,
    "myanmar": "Ascend、Climb Up"
  },
  {
    "char": "着",
    "on": "ちゃく、じゃく",
    "kun": "き.る、-ぎ、き.せる、-き.せ、つ.く、つ.ける",
    "english": "Don, Arrive, Wear, Counter For Suits Of Clothing",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 12,
    "myanmar": "စားထိုး、ရောက်、စားထိုး、Counter For Suits Of Clothing"
  },
  {
    "char": "短",
    "on": "たん",
    "kun": "みじか.い",
    "english": "Short, Brevity, Fault, Defect, Weak Point",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 12,
    "myanmar": "တိုတို、တိုတို、အမှား、အမှား、အားနည်းနေရာ"
  },
  {
    "char": "野",
    "on": "や、しょ",
    "kun": "の、の-",
    "english": "Plains, Field, Rustic, Civilian Life",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 11,
    "myanmar": "Plains、Field、Rustic、Civilian Life"
  },
  {
    "char": "泉",
    "on": "せん",
    "kun": "いずみ",
    "english": "Spring, Fountain",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 9,
    "myanmar": "ရေကန်、ရေကန်"
  },
  {
    "char": "生",
    "on": "せい、しょう",
    "kun": "い.きる、い.かす、い.ける、う.まれる、うま.れる、う.まれ、うまれ、う.む、お.う、は.える、は.やす、き、なま、なま-、な.る、な.す、む.す、-う",
    "english": "Life, Genuine, Birth",
    "jlpt_new": 5,
    "grade": 1,
    "strokes": 5,
    "myanmar": "ဘဝ、Genuine、Birth"
  },
  {
    "char": "亡",
    "on": "ぼう、もう",
    "kun": "な.い、な.き-、ほろ.びる、ほろ.ぶ、ほろ.ぼす",
    "english": "Deceased, The Late, Dying, Perish",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 3,
    "myanmar": "Deceased、The Late、Dying、Perish"
  },
  {
    "char": "合",
    "on": "ごう、がっ、かっ",
    "kun": "あ.う、-あ.う、あ.い、あい-、-あ.い、-あい、あ.わす、あ.わせる、-あ.わせる",
    "english": "Fit, Suit, Join, 0.1",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 6,
    "myanmar": "Fit、Suit、ပါဝင်သည်、0.1"
  },
  {
    "char": "風",
    "on": "ふう、ふ",
    "kun": "かぜ、かざ-、-かぜ",
    "english": "Wind, Air, Style, Manner",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 9,
    "myanmar": "Wind、Air、Style、Manner"
  },
  {
    "char": "予",
    "on": "よ、しゃ",
    "kun": "あらかじ.め",
    "english": "Beforehand, Previous, Myself, I",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 4,
    "myanmar": "Beforehand、Previous、Myself、I"
  },
  {
    "char": "反",
    "on": "はん、ほん、たん、ほ",
    "kun": "そ.る、そ.らす、かえ.す、かえ.る、-かえ.る",
    "english": "Anti-",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 4,
    "myanmar": "Anti-"
  },
  {
    "char": "新",
    "on": "しん",
    "kun": "あたら.しい、あら.た、あら-、にい-",
    "english": "New",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 13,
    "myanmar": "အသစ်"
  },
  {
    "char": "返",
    "on": "へん",
    "kun": "かえ.す、-かえ.す、かえ.る、-かえ.る",
    "english": "Return, Answer, Fade, Repay",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 7,
    "myanmar": "ပြန်လာ、Answer、Fade、Repay"
  },
  {
    "char": "問",
    "on": "もん",
    "kun": "と.う、と.い、とん",
    "english": "Question, Ask, Problem",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 11,
    "myanmar": "မေးခွန်း、မေးသည်、Problem"
  },
  {
    "char": "宿",
    "on": "しゅく",
    "kun": "やど、やど.る、やど.す",
    "english": "Inn, Lodging, Relay Station, Dwell, Lodge, Be Pregnant, Home, Dwelling",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 11,
    "myanmar": "Inn、Lodging、Relay Station、Dwell、Lodge、Be Pregnant、Home、Dwelling"
  },
  {
    "char": "想",
    "on": "そう、そ",
    "kun": "おも.う",
    "english": "Concept, Think, Idea, Thought",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 13,
    "myanmar": "Concept、အတွေးအမြင်ဆွဲ、Idea、Thought"
  },
  {
    "char": "感",
    "on": "かん",
    "kun": "",
    "english": "Emotion, Feeling, Sensation",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 13,
    "myanmar": "Emotion、Feeling、Sensation"
  },
  {
    "char": "整",
    "on": "せい",
    "kun": "ととの.える、ととの.う",
    "english": "Organize, Arranging, Tune, Tone, Meter, Key (music)",
    "jlpt_new": 1,
    "grade": 3,
    "strokes": 16,
    "myanmar": "စီစဉ်、Arranging、Tune、Tone、Meter、Key (music)"
  },
  {
    "char": "暗",
    "on": "あん",
    "kun": "くら.い、くら.む、くれ.る",
    "english": "Darkness, Disappear, Shade, Informal, Grow Dark, Be Blinded",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 13,
    "myanmar": "Darkness、Disappear、Shade、Informal、Grow Dark、Be Blinded"
  },
  {
    "char": "様",
    "on": "よう、しょう",
    "kun": "さま、さん",
    "english": "Esq., Way, Manner, Situation, Polite Suffix",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 14,
    "myanmar": "Esq.、လမ်း、Manner、အခြေအနေ、Polite Suffix"
  },
  {
    "char": "橋",
    "on": "きょう",
    "kun": "はし",
    "english": "Bridge",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 16,
    "myanmar": "တံတား"
  },
  {
    "char": "福",
    "on": "ふく",
    "kun": "",
    "english": "Blessing, Fortune, Luck, Wealth",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 13,
    "myanmar": "Blessing、Fortune、Luck、Wealth"
  },
  {
    "char": "緑",
    "on": "りょく、ろく",
    "kun": "みどり",
    "english": "Green",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 14,
    "myanmar": "Green"
  },
  {
    "char": "練",
    "on": "れん",
    "kun": "ね.る、ね.り",
    "english": "Practice, Gloss, Train, Drill, Polish, Refine",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 14,
    "myanmar": "လေ့လာသည်、အလင်းရာ、သင်ကြားသည်、သင်ကြားသည်、သန့်ရှင်းသည်、သန့်ရှင်းသည်"
  },
  {
    "char": "詩",
    "on": "し",
    "kun": "うた",
    "english": "Poem, Poetry",
    "jlpt_new": 1,
    "grade": 3,
    "strokes": 13,
    "myanmar": "ကဗျာ、ကဗျာ"
  },
  {
    "char": "銀",
    "on": "ぎん",
    "kun": "しろがね",
    "english": "Silver",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 14,
    "myanmar": "Silver"
  },
  {
    "char": "題",
    "on": "だい",
    "kun": "",
    "english": "Topic, Subject",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 18,
    "myanmar": "Topic、Subject"
  },
  {
    "char": "館",
    "on": "かん",
    "kun": "やかた、たて",
    "english": "Building, Mansion, Large Building, Palace",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 16,
    "myanmar": "Building、Mansion、Large Building、Palace"
  },
  {
    "char": "駅",
    "on": "えき",
    "kun": "",
    "english": "Station",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 14,
    "myanmar": "Station"
  },
  {
    "char": "億",
    "on": "おく",
    "kun": "",
    "english": "Hundred Million, 10**8",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 15,
    "myanmar": "တစ်ရာလျှာ、10**8"
  },
  {
    "char": "器",
    "on": "き",
    "kun": "うつわ",
    "english": "Utensil, Vessel, Receptacle, Implement, Instrument, Ability, Container, Tool, Set",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 15,
    "myanmar": "Utensil、Vessel、Receptacle、Implement、Instrument、စွမ်းအင်း、Container、Tool、အစုံ"
  },
  {
    "char": "士",
    "on": "し",
    "kun": "さむらい",
    "english": "Gentleman, Scholar, Samurai, Samurai Radical (no. 33)",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 3,
    "myanmar": "Gentleman、Scholar、Samurai、Samurai Radical (no. 33)"
  },
  {
    "char": "料",
    "on": "りょう",
    "kun": "",
    "english": "Fee, Materials",
    "jlpt_new": 4,
    "grade": 4,
    "strokes": 10,
    "myanmar": "Fee、Materials"
  },
  {
    "char": "標",
    "on": "ひょう",
    "kun": "しるべ、しるし",
    "english": "Signpost, Seal, Mark, Stamp, Imprint, Symbol, Emblem, Trademark, Evidence, Souvenir, Target",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 15,
    "myanmar": "Signpost、အကြီးအလေးကြီး、မှတ်ချက်、အကြီးအလေးကြီး、အရင်း、သင်္ကေတ、သင်္ကေတ、အမှတ်တံဆိပ်、သက်သေခံ、မှတ်တမ်း、Target"
  },
  {
    "char": "殺",
    "on": "さつ、さい、せつ",
    "kun": "ころ.す、-ごろ.し、そ.ぐ",
    "english": "Kill, Murder, Butcher, Slice Off, Split, Diminish, Reduce, Spoil",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 10,
    "myanmar": "Kill、Murder、Butcher、Slice Off、ခွဲ、Diminish、လျှော့ချ、Spoil"
  },
  {
    "char": "然",
    "on": "ぜん、ねん",
    "kun": "しか、しか.り、しか.し、さ",
    "english": "Sort Of Thing, So, If So, In That Case, Well",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 12,
    "myanmar": "Sort Of Thing、So、If So、In That Case、Well"
  },
  {
    "char": "熱",
    "on": "ねつ",
    "kun": "あつ.い",
    "english": "Heat, Temperature, Fever, Mania, Passion",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 15,
    "myanmar": "Heat、Temperature、Fever、Mania、Passion"
  },
  {
    "char": "課",
    "on": "か",
    "kun": "",
    "english": "Chapter, Lesson, Section, Department, Division, Counter For Chapters (of A Book)",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 15,
    "myanmar": "အခန်း、သင်တန်း、အပိုင်း、ဌာန、ဌာန、Counter For Chapters (of A Book)"
  },
  {
    "char": "賞",
    "on": "しょう",
    "kun": "ほ.める",
    "english": "Prize, Reward, Praise",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 15,
    "myanmar": "ဆု、ဆု、အများကြီးချီးမှု"
  },
  {
    "char": "輪",
    "on": "りん",
    "kun": "わ",
    "english": "Wheel, Ring, Circle, Link, Loop, Counter For Wheels And Flowers",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 15,
    "myanmar": "ဘီး、လက်ပတ်ကောင်、အဝိုင်းကြီး、လင့်ခ်、လင့်ခ်、Counter For Wheels And Flowers"
  },
  {
    "char": "選",
    "on": "せん",
    "kun": "えら.ぶ",
    "english": "Elect, Select, Choose, Prefer",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 15,
    "myanmar": "Elect、ရွေးချယ်、ရွေးချယ်、နှစ်သက်"
  },
  {
    "char": "鏡",
    "on": "きょう、けい",
    "kun": "かがみ",
    "english": "Mirror, Speculum, Barrel-head, Round Rice-cake Offering",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 19,
    "myanmar": "Mirror、Speculum、Barrel-head、Round Rice-cake Offering"
  },
  {
    "char": "願",
    "on": "がん",
    "kun": "ねが.う、-ねがい",
    "english": "Petition, Request, Vow, Wish, Hope",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 19,
    "myanmar": "Petition、တောင်းပန်、Vow、လိုချင်သည်、မျှော်နိုင်သည်"
  },
  {
    "char": "養",
    "on": "よう、りょう",
    "kun": "やしな.う",
    "english": "Foster, Bring Up, Rear, Develop, Nurture",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 15,
    "myanmar": "Foster、Bring Up、နောက်ဘက်、ဖွံ့ဖြိုးတိုးမြှင့်、Nurture"
  },
  {
    "char": "像",
    "on": "ぞう",
    "kun": "",
    "english": "Statue, Picture, Image, Figure, Portrait",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 14,
    "myanmar": "ပုံပြင်း、ဓာတ်ပုံ、ဓာတ်ပုံ、ပုံသဏ္ဌာန်、ပုံပြင်း"
  },
  {
    "char": "情",
    "on": "じょう、せい",
    "kun": "なさ.け",
    "english": "Feelings, Emotion, Passion, Sympathy, Circumstances, Facts",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 11,
    "myanmar": "Feelings、Emotion、Passion、Sympathy、Circumstances、Facts"
  },
  {
    "char": "謝",
    "on": "しゃ",
    "kun": "あやま.る",
    "english": "Apologize, Thank, Refuse",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 17,
    "myanmar": "Apologize、Thank、ငြင်းပယ်"
  },
  {
    "char": "映",
    "on": "えい",
    "kun": "うつ.る、うつ.す、は.える、-ば.え",
    "english": "Reflect, Reflection, Projection",
    "jlpt_new": 4,
    "grade": 6,
    "strokes": 9,
    "myanmar": "Reflect、Reflection、Projection"
  },
  {
    "char": "疑",
    "on": "ぎ",
    "kun": "うたが.う",
    "english": "Doubt, Distrust, Be Suspicious, Question",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 14,
    "myanmar": "စဉ်းစားသည်、Distrust、Be Suspicious、မေးခွန်း"
  },
  {
    "char": "皆",
    "on": "かい",
    "kun": "みな、みんな",
    "english": "All, Everything",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 9,
    "myanmar": "အားလုံး、Everything"
  },
  {
    "char": "例",
    "on": "れい",
    "kun": "たと.える",
    "english": "Example, Custom, Usage, Precedent",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 8,
    "myanmar": "Example、Custom、Usage、Precedent"
  },
  {
    "char": "卒",
    "on": "そつ、しゅつ",
    "kun": "そっ.する、お.える、お.わる、ついに、にわか",
    "english": "Graduate, Soldier, Private, Die",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 8,
    "myanmar": "ဘွဲ့လိုက်、စစ်သား、ယာယီ、သေ"
  },
  {
    "char": "協",
    "on": "きょう",
    "kun": "",
    "english": "Co-, Cooperation",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 8,
    "myanmar": "Co-、ပူးပေါင်း"
  },
  {
    "char": "参",
    "on": "さん、しん",
    "kun": "まい.る、まい-、まじわる、みつ",
    "english": "Nonplussed, Three (in Documents), Going, Coming, Visiting, Visit, Be Defeated, Die, Be Madly In Love, Participate, Take Part In",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 8,
    "myanmar": "Nonplussed、Three (in Documents)、Going、Coming、Visiting、သွားလာသည်、Be Defeated、သေ、Be Madly In Love、Participate、Take Part In"
  },
  {
    "char": "周",
    "on": "しゅう",
    "kun": "まわ.り",
    "english": "Circumference, Circuit, Lap",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 8,
    "myanmar": "ပတ်ဝန်းကျင်、လမ်းကြော、လက်တစ်တန်"
  },
  {
    "char": "囲",
    "on": "い",
    "kun": "かこ.む、かこ.う、かこ.い",
    "english": "Surround, Besiege, Store, Paling, Enclosure, Encircle, Preserve, Keep",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 7,
    "myanmar": "ပတ်ပေါက်、ပတ်ပေါက်、သိုလှောင်သည်、ပတ်ပေါက်、ပတ်ပေါက်、ပတ်ပေါက်、ထိန်းသိမ်း、ထိန်းသိမ်း"
  },
  {
    "char": "固",
    "on": "こ",
    "kun": "かた.める、かた.まる、かた.まり、かた.い",
    "english": "Harden, Set, Clot, Curdle",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 8,
    "myanmar": "ကြမ်းတမ်း、အစုံ、သိပ့်、သိပ့်"
  },
  {
    "char": "季",
    "on": "き",
    "kun": "",
    "english": "Seasons",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 8,
    "myanmar": "ရာသီ"
  },
  {
    "char": "完",
    "on": "かん",
    "kun": "",
    "english": "Perfect, Completion, End",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 7,
    "myanmar": "Perfect、Completion、အဆုံး"
  },
  {
    "char": "希",
    "on": "き、け",
    "kun": "まれ",
    "english": "Hope, Beg, Request, Pray, Beseech, Greece, Dilute (acid), Rare, Few, Phenomenal",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 7,
    "myanmar": "မျှော်နိုင်သည်、တောင်းပန်、တောင်းပန်、ဆုတောင်း、တောင်းပန်、ဂရိ、Dilute (acid)、ရာသီခွန်、နည်းပါး、အလွန်အလန်းကြီး"
  },
  {
    "char": "念",
    "on": "ねん",
    "kun": "",
    "english": "Wish, Sense, Idea, Thought, Feeling, Desire, Attention",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 8,
    "myanmar": "လိုချင်သည်、Sense、Idea、Thought、Feeling、Desire、Attention"
  },
  {
    "char": "折",
    "on": "せつ、しゃく",
    "kun": "お.る、おり、お.り、-お.り、お.れる",
    "english": "Fold, Break, Fracture, Bend, Yield, Submit",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 7,
    "myanmar": "ပေါင်းစပ်、Break、Fracture、Bend、Yield、Submit"
  },
  {
    "char": "望",
    "on": "ぼう、もう",
    "kun": "のぞ.む、もち",
    "english": "Ambition, Full Moon, Hope, Desire, Aspire To, Expect",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 11,
    "myanmar": "Ambition、Full Moon、မျှော်နိုင်သည်、Desire、Aspire To、Expect"
  },
  {
    "char": "材",
    "on": "ざい",
    "kun": "",
    "english": "Lumber, Log, Timber, Wood, Materials, Ingredients, Talent",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 7,
    "myanmar": "အဆီ、အဆီ、အဆီ、အဆီ、Materials、Ingredients、စွမ်းအင်း"
  },
  {
    "char": "束",
    "on": "そく",
    "kun": "たば、たば.ねる、つか、つか.ねる",
    "english": "Bundle, Sheaf, Ream, Tie In Bundles, Govern, Manage, Control",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 7,
    "myanmar": "Bundle、Sheaf、Ream、Tie In Bundles、Govern、စီမံ、ထိန်းချုပ်"
  },
  {
    "char": "松",
    "on": "しょう",
    "kun": "まつ",
    "english": "Pine Tree",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 8,
    "myanmar": "Pine Tree"
  },
  {
    "char": "残",
    "on": "ざん、さん",
    "kun": "のこ.る、のこ.す、そこな.う、のこ.り",
    "english": "Remainder, Leftover, Balance",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 10,
    "myanmar": "Remainder、Leftover、Balance"
  },
  {
    "char": "求",
    "on": "きゅう、ぐ",
    "kun": "もと.める",
    "english": "Request, Want, Wish For, Require, Demand",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 7,
    "myanmar": "တောင်းပန်、လိုချင်သည်、Wish For、လိုအပ်、Demand"
  },
  {
    "char": "的",
    "on": "てき",
    "kun": "まと",
    "english": "Bull's Eye, Mark, Target, Object, Adjective Ending",
    "jlpt_new": null,
    "grade": 4,
    "strokes": 8,
    "myanmar": "Bull's Eye、မှတ်ချက်、Target、Object、Adjective Ending"
  },
  {
    "char": "約",
    "on": "やく",
    "kun": "つづ.まる、つづ.める、つづま.やか",
    "english": "Promise, Approximately, Shrink",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 9,
    "myanmar": "Promise、Approximately、Shrink"
  },
  {
    "char": "芸",
    "on": "げい、うん",
    "kun": "う.える、のり、わざ",
    "english": "Technique, Art, Craft, Performance, Acting, Trick, Stunt",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 7,
    "myanmar": "နည်းလမ်း、အနုပညာ、က်ရာ、ပြသမှု、သရုပ်ဆောင်、လှည့်ဖြားမှု、လှည့်ဖြားမှု"
  },
  {
    "char": "基",
    "on": "き",
    "kun": "もと、もとい",
    "english": "Fundamentals, Radical (chem), Counter For Machines, Foundation",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 11,
    "myanmar": "Fundamentals、Radical (chem)、Counter For Machines、Foundation"
  },
  {
    "char": "性",
    "on": "せい、しょう",
    "kun": "さが",
    "english": "Sex, Gender, Nature",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 8,
    "myanmar": "Sex、Gender、Nature"
  },
  {
    "char": "技",
    "on": "ぎ",
    "kun": "わざ",
    "english": "Skill, Art, Craft, Ability, Feat, Performance, Vocation, Arts",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 7,
    "myanmar": "ကျွမ်းကျင်、အနုပညာ、က်ရာ、စွမ်းအင်း、အောင်မြင်မှု、ပြသမှု、အလုပ်、အနုပညာ"
  },
  {
    "char": "格",
    "on": "かく、こう、きゃく、ごう",
    "kun": "",
    "english": "Status, Rank, Capacity, Character, Case (law, Grammar)",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 10,
    "myanmar": "Status、Rank、Capacity、Character、Case (law、Grammar)"
  },
  {
    "char": "能",
    "on": "のう",
    "kun": "よ.く",
    "english": "Ability, Talent, Skill, Capacity",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 10,
    "myanmar": "စွမ်းအင်း、စွမ်းအင်း、ကျွမ်းကျင်、Capacity"
  },
  {
    "char": "術",
    "on": "じゅつ",
    "kun": "すべ",
    "english": "Art, Technique, Skill, Means, Trick, Resources, Magic",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 11,
    "myanmar": "အနုပညာ、နည်းလမ်း、ကျွမ်းကျင်、Means、လှည့်ဖြားမှု、Resources、Magic"
  },
  {
    "char": "私",
    "on": "し",
    "kun": "わたくし、わたし",
    "english": "Private, I, Me",
    "jlpt_new": 4,
    "grade": 6,
    "strokes": 7,
    "myanmar": "ယာယီ、I、Me"
  },
  {
    "char": "骨",
    "on": "こつ",
    "kun": "ほね",
    "english": "Skeleton, Bone, Remains, Frame",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 10,
    "myanmar": "အရိုးအသားပြား、အရိုး、ကျန်းမာရေး、ခြား"
  },
  {
    "char": "妥",
    "on": "だ",
    "kun": "",
    "english": "Gentle, Peace, Depravity",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Gentle、ငြိမ်ချမ်း、Depravity"
  },
  {
    "char": "雰",
    "on": "ふん",
    "kun": "",
    "english": "Atmosphere, Fog",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Atmosphere、Fog"
  },
  {
    "char": "頑",
    "on": "がん",
    "kun": "かたく",
    "english": "Stubborn, Foolish, Firmly",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Stubborn、Foolish、Firmly"
  },
  {
    "char": "寺",
    "on": "じ",
    "kun": "てら",
    "english": "Buddhist Temple",
    "jlpt_new": 2,
    "grade": 2,
    "strokes": 6,
    "myanmar": "Buddhist Temple"
  },
  {
    "char": "岩",
    "on": "がん",
    "kun": "いわ",
    "english": "Boulder, Rock, Cliff",
    "jlpt_new": 2,
    "grade": 2,
    "strokes": 8,
    "myanmar": "ကြီးကြပ်သော、ကြီးကြပ်သော、ကြီးကြပ်သော"
  },
  {
    "char": "帰",
    "on": "き",
    "kun": "かえ.る、かえ.す、おく.る、とつ.ぐ",
    "english": "Homecoming, Arrive At, Lead To, Result In",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 10,
    "myanmar": "Homecoming、Arrive At、Lead To、Result In"
  },
  {
    "char": "春",
    "on": "しゅん",
    "kun": "はる",
    "english": "Springtime, Spring (season)",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 9,
    "myanmar": "Springtime、Spring (season)"
  },
  {
    "char": "昼",
    "on": "ちゅう",
    "kun": "ひる",
    "english": "Daytime, Noon",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 9,
    "myanmar": "Daytime、Noon"
  },
  {
    "char": "晴",
    "on": "せい",
    "kun": "は.れる、は.れ、は.れ-、-ば.れ、は.らす",
    "english": "Clear Up",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 12,
    "myanmar": "Clear Up"
  },
  {
    "char": "秋",
    "on": "しゅう",
    "kun": "あき、とき",
    "english": "Autumn",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 9,
    "myanmar": "Autumn"
  },
  {
    "char": "計",
    "on": "けい",
    "kun": "はか.る、はか.らう",
    "english": "Plot, Plan, Scheme, Measure",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 9,
    "myanmar": "Plot、အစီအစဉ်、စchema、တိုင်းတာ"
  },
  {
    "char": "列",
    "on": "れつ、れ",
    "kun": "",
    "english": "File, Row, Rank, Tier, Column",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 6,
    "myanmar": "File、တန်းကြီး、Rank、Tier、Column"
  },
  {
    "char": "区",
    "on": "く、おう、こう",
    "kun": "",
    "english": "Ward, District",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 4,
    "myanmar": "မြို့နယ်、ခရိုင်"
  },
  {
    "char": "坂",
    "on": "はん",
    "kun": "さか",
    "english": "Slope, Incline, Hill",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 7,
    "myanmar": "တောင်တန်း、တောင်တန်း、တောင်"
  },
  {
    "char": "式",
    "on": "しき",
    "kun": "",
    "english": "Style, Ceremony, Rite, Function, Method, System, Form, Expression",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 6,
    "myanmar": "Style、Ceremony、Rite、Function、နည်းလမ်း、System、Form、Expression"
  },
  {
    "char": "信",
    "on": "しん",
    "kun": "",
    "english": "Faith, Truth, Fidelity, Trust",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 9,
    "myanmar": "Faith、Truth、Fidelity、ယုံကြည်"
  },
  {
    "char": "勇",
    "on": "ゆう",
    "kun": "いさ.む",
    "english": "Courage, Cheer Up, Be In High Spirits, Bravery, Heroism",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 9,
    "myanmar": "Courage、Cheer Up、Be In High Spirits、Bravery、Heroism"
  },
  {
    "char": "単",
    "on": "たん",
    "kun": "ひとえ",
    "english": "Simple, One, Single, Merely",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 9,
    "myanmar": "Simple、တစ်、Single、Merely"
  },
  {
    "char": "司",
    "on": "し",
    "kun": "つかさど.る",
    "english": "Director, Official, Govt Office, Rule, Administer",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 5,
    "myanmar": "Director、Official、Govt Office、စည်းကမ်း、Administer"
  },
  {
    "char": "変",
    "on": "へん",
    "kun": "か.わる、か.わり、か.える",
    "english": "Unusual, Change, Strange",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 9,
    "myanmar": "Unusual、ပြောင်း、Strange"
  },
  {
    "char": "夫",
    "on": "ふ、ふう、ぶ",
    "kun": "おっと、それ",
    "english": "Husband, Man",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 4,
    "myanmar": "Husband、ယောက်ျား"
  },
  {
    "char": "建",
    "on": "けん、こん",
    "kun": "た.てる、た.て、-だ.て、た.つ",
    "english": "Build",
    "jlpt_new": 4,
    "grade": 4,
    "strokes": 9,
    "myanmar": "တည်ဆောက်"
  },
  {
    "char": "昨",
    "on": "さく",
    "kun": "",
    "english": "Yesterday, Previous",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 9,
    "myanmar": "Yesterday、Previous"
  },
  {
    "char": "毒",
    "on": "どく",
    "kun": "",
    "english": "Poison, Virus, Venom, Germ, Harm, Injury, Spite",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 8,
    "myanmar": "Poison、Virus、Venom、Germ、Harm、Injury、Spite"
  },
  {
    "char": "法",
    "on": "ほう、はっ、ほっ、ふらん",
    "kun": "のり",
    "english": "Method, Law, Rule, Principle, Model, System",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 8,
    "myanmar": "နည်းလမ်း、ဥပဒေ、စည်းကမ်း、Principle、မှန်ကန်စွာ、System"
  },
  {
    "char": "泣",
    "on": "きゅう",
    "kun": "な.く",
    "english": "Cry, Weep, Moan",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 8,
    "myanmar": "Cry、Weep、Moan"
  },
  {
    "char": "浅",
    "on": "せん",
    "kun": "あさ.い",
    "english": "Shallow, Superficial, Frivolous, Wretched, Shameful",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 9,
    "myanmar": "Shallow、Superficial、Frivolous、Wretched、Shameful"
  },
  {
    "char": "紀",
    "on": "き",
    "kun": "",
    "english": "Chronicle, Account, Narrative, History, Annals, Geologic Period",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 9,
    "myanmar": "သမိုင်း、Account、Narrative、သမိုင်း、Annals、Geologic Period"
  },
  {
    "char": "英",
    "on": "えい",
    "kun": "はなぶさ",
    "english": "England, English, Hero, Outstanding, Calyx",
    "jlpt_new": 4,
    "grade": 4,
    "strokes": 8,
    "myanmar": "England、English、Hero、Outstanding、Calyx"
  },
  {
    "char": "軍",
    "on": "ぐん",
    "kun": "いくさ",
    "english": "Army, Force, Troops, War, Battle",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 9,
    "myanmar": "စစ်တပ်、အား、စစ်သား、စစ်、တိုက်ပွဲ"
  },
  {
    "char": "飯",
    "on": "はん",
    "kun": "めし",
    "english": "Meal, Boiled Rice",
    "jlpt_new": 4,
    "grade": 4,
    "strokes": 12,
    "myanmar": "Meal、Boiled Rice"
  },
  {
    "char": "仏",
    "on": "ぶつ、ふつ",
    "kun": "ほとけ",
    "english": "Buddha, The Dead, France",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 4,
    "myanmar": "ဗုဒ္ဓဘာသာ、The Dead、ပြင်သစ်"
  },
  {
    "char": "築",
    "on": "ちく",
    "kun": "きず.く",
    "english": "Fabricate, Build, Construct",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 16,
    "myanmar": "ဖန်တီး、တည်ဆောက်、တည်ဆောက်"
  },
  {
    "char": "晩",
    "on": "ばん",
    "kun": "",
    "english": "Nightfall, Night",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 12,
    "myanmar": "Nightfall、ည"
  },
  {
    "char": "猫",
    "on": "びょう",
    "kun": "ねこ",
    "english": "Cat",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Cat"
  },
  {
    "char": "園",
    "on": "えん",
    "kun": "その",
    "english": "Park, Garden, Yard, Farm",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 13,
    "myanmar": "Park、Garden、Yard、Farm"
  },
  {
    "char": "曜",
    "on": "よう",
    "kun": "",
    "english": "Weekday",
    "jlpt_new": 4,
    "grade": 2,
    "strokes": 18,
    "myanmar": "Weekday"
  },
  {
    "char": "書",
    "on": "しょ",
    "kun": "か.く、-が.き、-がき",
    "english": "Write",
    "jlpt_new": 5,
    "grade": 2,
    "strokes": 10,
    "myanmar": "ရေး"
  },
  {
    "char": "遠",
    "on": "えん、おん",
    "kun": "とお.い",
    "english": "Distant, Far",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 13,
    "myanmar": "Distant、Far"
  },
  {
    "char": "門",
    "on": "もん",
    "kun": "かど、と",
    "english": "Gate, Counter For Cannons",
    "jlpt_new": 2,
    "grade": 2,
    "strokes": 8,
    "myanmar": "Gate、Counter For Cannons"
  },
  {
    "char": "係",
    "on": "けい",
    "kun": "かか.る、かかり、-がかり、かか.わる",
    "english": "Person In Charge, Connection, Duty, Concern Oneself",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Person In Charge、Connection、တာဝန်、Concern Oneself"
  },
  {
    "char": "取",
    "on": "しゅ",
    "kun": "と.る、と.り、と.り-、とり、-ど.り",
    "english": "Take, Fetch, Take Up",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 8,
    "myanmar": "ယူ、ယူ、Take Up"
  },
  {
    "char": "品",
    "on": "ひん、ほん",
    "kun": "しな",
    "english": "Goods, Refinement, Dignity, Article, Counter For Meal Courses",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 9,
    "myanmar": "ကုန်、Refinement、Dignity、Article、Counter For Meal Courses"
  },
  {
    "char": "守",
    "on": "しゅ、す",
    "kun": "まも.る、まも.り、もり、-もり、かみ",
    "english": "Guard, Protect, Defend, Obey",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 6,
    "myanmar": "Guard、ကာကွယ်、ကာကွယ်、လိုက်"
  },
  {
    "char": "幸",
    "on": "こう",
    "kun": "さいわ.い、さち、しあわ.せ",
    "english": "Happiness, Blessing, Fortune",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 8,
    "myanmar": "Happiness、Blessing、Fortune"
  },
  {
    "char": "急",
    "on": "きゅう",
    "kun": "いそ.ぐ、いそ.ぎ、せ.く",
    "english": "Hurry, Emergency, Sudden, Steep",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Hurry、Emergency、Sudden、Steep"
  },
  {
    "char": "真",
    "on": "しん",
    "kun": "ま、ま-、まこと",
    "english": "True, Reality, Buddhist Sect",
    "jlpt_new": 4,
    "grade": 3,
    "strokes": 10,
    "myanmar": "အမှန်တရား、Reality、Buddhist Sect"
  },
  {
    "char": "箱",
    "on": "そう",
    "kun": "はこ",
    "english": "Box, Chest, Case, Bin, Railway Car",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 15,
    "myanmar": "Box、Chest、Case、Bin、Railway Car"
  },
  {
    "char": "荷",
    "on": "か",
    "kun": "に",
    "english": "Baggage, Shoulder-pole Load, Bear (a Burden), Shoulder (a Gun), Load, Cargo, Freight",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 10,
    "myanmar": "Baggage、Shoulder-pole Load、Bear (a Burden)、Shoulder (a Gun)、Load、Cargo、တင်ပြီး"
  },
  {
    "char": "面",
    "on": "めん、べん",
    "kun": "おも、おもて、つら",
    "english": "Mask, Face, Features, Surface",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Mask、Face、Features、Surface"
  },
  {
    "char": "典",
    "on": "てん、でん",
    "kun": "",
    "english": "Code, Ceremony, Law, Rule",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 8,
    "myanmar": "Code、Ceremony、ဥပဒေ、စည်းကမ်း"
  },
  {
    "char": "喜",
    "on": "き",
    "kun": "よろこ.ぶ、よろこ.ばす",
    "english": "Rejoice, Take Pleasure In",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 12,
    "myanmar": "Rejoice、Take Pleasure In"
  },
  {
    "char": "府",
    "on": "ふ",
    "kun": "",
    "english": "Borough, Urban Prefecture, Govt Office, Representative Body, Storehouse",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 8,
    "myanmar": "မြို့နယ်、Urban Prefecture、Govt Office、Representative Body、ကျွန်းခန်း"
  },
  {
    "char": "治",
    "on": "じ、ち",
    "kun": "おさ.める、おさ.まる、なお.る、なお.す",
    "english": "Reign, Be At Peace, Calm Down, Subdue, Quell, Govt, Cure, Heal, Rule, Conserve",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 8,
    "myanmar": "အုပ်ချုပ်、Be At Peace、Calm Down、Subdue、Quell、Govt、ပျောက်ကွယ်、ပျောက်ကွယ်、စည်းကမ်း、ထိန်းသိမ်း"
  },
  {
    "char": "浴",
    "on": "よく",
    "kun": "あ.びる、あ.びせる",
    "english": "Bathe, Be Favored With, Bask In",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 10,
    "myanmar": "Bathe、Be Favored With、Bask In"
  },
  {
    "char": "笑",
    "on": "しょう",
    "kun": "わら.う、え.む",
    "english": "Laugh",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 10,
    "myanmar": "Laugh"
  },
  {
    "char": "辞",
    "on": "じ",
    "kun": "や.める、いな.む",
    "english": "Resign, Word, Term, Expression",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 13,
    "myanmar": "Resign、စကား、Term、Expression"
  },
  {
    "char": "関",
    "on": "かん",
    "kun": "せき、-ぜき、かか.わる、からくり、かんぬき",
    "english": "Connection, Barrier, Gateway, Involve, Concerning",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 14,
    "myanmar": "Connection、Barrier、Gateway、Involve、Concerning"
  },
  {
    "char": "保",
    "on": "ほ、ほう",
    "kun": "たも.つ",
    "english": "Protect, Guarantee, Keep, Preserve, Sustain, Support",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 9,
    "myanmar": "ကာကွယ်、Guarantee、ထိန်းသိမ်း、ထိန်းသိမ်း、Sustain、ထောက်ခံ"
  },
  {
    "char": "弁",
    "on": "べん、へん",
    "kun": "かんむり、わきま.える、わ.ける、はなびら、あらそ.う",
    "english": "Valve, Petal, Braid, Speech, Dialect, Discrimination, Dispose Of, Distinguish, Conical Cap",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 5,
    "myanmar": "Valve、Petal、ပေါင်းစပ်သည်、ပြောကြားချက်、Dialect、Discrimination、Dispose Of、Distinguish、Conical Cap"
  },
  {
    "char": "政",
    "on": "せい、しょう",
    "kun": "まつりごと、まん",
    "english": "Politics, Government",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 9,
    "myanmar": "Politics、အစိုးရ"
  },
  {
    "char": "留",
    "on": "りゅう、る",
    "kun": "と.める、と.まる、とど.める、とど.まる、るうぶる",
    "english": "Detain, Fasten, Halt, Stop",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 10,
    "myanmar": "Detain、Fasten、ရပ်、ရပ်"
  },
  {
    "char": "証",
    "on": "しょう",
    "kun": "あかし",
    "english": "Evidence, Proof, Certificate",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 12,
    "myanmar": "သက်သေခံ、Proof、Certificate"
  },
  {
    "char": "険",
    "on": "けん",
    "kun": "けわ.しい",
    "english": "Precipitous, Inaccessible Place, Impregnable Position, Steep Place, Sharp Eyes",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 11,
    "myanmar": "Precipitous、Inaccessible Place、Impregnable Position、Steep Place、Sharp Eyes"
  },
  {
    "char": "危",
    "on": "き",
    "kun": "あぶ.ない、あや.うい、あや.ぶむ",
    "english": "Dangerous, Fear, Uneasy",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 6,
    "myanmar": "Dangerous、ကြောက်、Uneasy"
  },
  {
    "char": "存",
    "on": "そん、ぞん",
    "kun": "ながら.える、あ.る、たも.つ、と.う",
    "english": "Exist, Suppose, Be Aware Of, Believe, Feel",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 6,
    "myanmar": "Exist、Suppose、Be Aware Of、ယုံကြည်、ခံစစ်"
  },
  {
    "char": "専",
    "on": "せん",
    "kun": "もっぱ.ら",
    "english": "Specialty, Exclusive, Mainly, Solely",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 9,
    "myanmar": "အထူးပြုလုပ်မှု、အထူးသီးသန့်、အဓိက、တစ်ဦးတည်း"
  },
  {
    "char": "冒",
    "on": "ぼう",
    "kun": "おか.す",
    "english": "Risk, Face, Defy, Dare, Damage, Assume (a Name)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Risk、Face、Defy、Dare、ပျက်စီး、Assume (a Name)"
  },
  {
    "char": "冗",
    "on": "じょう",
    "kun": "",
    "english": "Superfluous, Uselessness",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 4,
    "myanmar": "Superfluous、Uselessness"
  },
  {
    "char": "阪",
    "on": "はん",
    "kun": "さか",
    "english": "Heights, Slope",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Heights、တောင်တန်း"
  },
  {
    "char": "原",
    "on": "げん",
    "kun": "はら",
    "english": "Meadow, Original, Primitive, Field, Plain, Prairie, Tundra, Wilderness",
    "jlpt_new": 3,
    "grade": 2,
    "strokes": 10,
    "myanmar": "Meadow、Original、Primitive、Field、Plain、Prairie、Tundra、Wilderness"
  },
  {
    "char": "細",
    "on": "さい",
    "kun": "ほそ.い、ほそ.る、こま.か、こま.かい",
    "english": "Dainty, Get Thin, Taper, Slender, Narrow, Detailed, Precise",
    "jlpt_new": 2,
    "grade": 2,
    "strokes": 11,
    "myanmar": "လှပသော、ဝက်လှမ်း、အသေးလှမ်း、လက်တစ်တန်、ကျဉ်းမြောင်း、Detailed、Precise"
  },
  {
    "char": "薬",
    "on": "やく",
    "kun": "くすり",
    "english": "Medicine, Chemical, Enamel, Gunpowder, Benefit",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 16,
    "myanmar": "Medicine、Chemical、Enamel、Gunpowder、လစာ"
  },
  {
    "char": "鼻",
    "on": "び",
    "kun": "はな",
    "english": "Nose, Snout",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 14,
    "myanmar": "နှာခေါင်း、နှာခေါင်း"
  },
  {
    "char": "側",
    "on": "そく",
    "kun": "かわ、がわ、そば",
    "english": "Side, Lean, Oppose, Regret",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 11,
    "myanmar": "Side、ကြပ်တန်း、Oppose、Regret"
  },
  {
    "char": "兵",
    "on": "へい、ひょう",
    "kun": "つわもの",
    "english": "Soldier, Private, Troops, Army, Warfare, Strategy, Tactics",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 7,
    "myanmar": "စစ်သား、ယာယီ、စစ်သား、စစ်တပ်、စစ်တပ်、စွမ်းအင်း、စွမ်းအင်း"
  },
  {
    "char": "堂",
    "on": "どう",
    "kun": "",
    "english": "Public Chamber, Hall",
    "jlpt_new": 4,
    "grade": 4,
    "strokes": 11,
    "myanmar": "Public Chamber、Hall"
  },
  {
    "char": "塩",
    "on": "えん",
    "kun": "しお",
    "english": "Salt",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 13,
    "myanmar": "Salt"
  },
  {
    "char": "席",
    "on": "せき",
    "kun": "むしろ",
    "english": "Seat, Mat, Occasion, Place",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 10,
    "myanmar": "Seat、Mat、အချိန်、Place"
  },
  {
    "char": "敗",
    "on": "はい",
    "kun": "やぶ.れる",
    "english": "Failure, Defeat, Reversal",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 11,
    "myanmar": "Failure、Defeat、Reversal"
  },
  {
    "char": "果",
    "on": "か",
    "kun": "は.たす、はた.す、-は.たす、は.てる、-は.てる、は.て",
    "english": "Fruit, Reward, Carry Out, Achieve, Complete, End, Finish, Succeed",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 8,
    "myanmar": "သီးနှံ、ဆု、Carry Out、Achieve、ပြီးမြောက်、အဆုံး、ပြီးမြောက်、Succeed"
  },
  {
    "char": "栄",
    "on": "えい、よう",
    "kun": "さか.える、は.え、-ば.え、は.える、え",
    "english": "Flourish, Prosperity, Honor, Glory, Splendor",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 9,
    "myanmar": "ချစ်ခင်း、ချစ်ခင်း、ဂုဏ်ပြု、ဂုဏ်ပြု、အလင်းရာ"
  },
  {
    "char": "梅",
    "on": "ばい",
    "kun": "うめ",
    "english": "Plum",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 10,
    "myanmar": "Plum"
  },
  {
    "char": "無",
    "on": "む、ぶ",
    "kun": "な.い",
    "english": "Nothingness, None, Ain't, Nothing, Nil, Not",
    "jlpt_new": null,
    "grade": 4,
    "strokes": 12,
    "myanmar": "Nothingness、None、Ain't、Nothing、Nil、Not"
  },
  {
    "char": "結",
    "on": "けつ、けち",
    "kun": "むす.ぶ、ゆ.う、ゆ.わえる",
    "english": "Tie, Bind, Contract, Join, Organize, Do Up Hair, Fasten",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 12,
    "myanmar": "ချိတ်、Bind、Contract、ပါဝင်သည်、စီစဉ်、Do Up Hair、Fasten"
  },
  {
    "char": "因",
    "on": "いん",
    "kun": "よ.る、ちな.む",
    "english": "Cause, Factor, Be Associated With, Depend On, Be Limited To",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 6,
    "myanmar": "အကြောင်းရင်း、Factor、Be Associated With、Depend On、Be Limited To"
  },
  {
    "char": "常",
    "on": "じょう",
    "kun": "つね、とこ-",
    "english": "Usual, Ordinary, Normal, Common, Regular, Continually, Always, Long-lasting",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 11,
    "myanmar": "Usual、Ordinary、Normal、Common、Regular、Continually、မဆန်းဘဲ、Long-lasting"
  },
  {
    "char": "識",
    "on": "しき",
    "kun": "し.る、しる.す",
    "english": "Discriminating, Know, Write",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 19,
    "myanmar": "Discriminating、သိသည်、ရေး"
  },
  {
    "char": "非",
    "on": "ひ",
    "kun": "あら.ず",
    "english": "Un-, Mistake, Negative, Injustice, Non-",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 8,
    "myanmar": "Un-、Mistake、Negative、Injustice、Non-"
  },
  {
    "char": "干",
    "on": "かん",
    "kun": "ほ.す、ほ.し-、-ぼ.し、ひ.る",
    "english": "Dry, Parch, Ebb, Recede, Interfere, Intercede",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 3,
    "myanmar": "Dry、ခြောက်、Ebb、Recede、Interfere、Intercede"
  },
  {
    "char": "是",
    "on": "ぜ、し",
    "kun": "これ、この、ここ",
    "english": "Just So, This, Right, Justice",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Just So、This、ညာ、Justice"
  },
  {
    "char": "渉",
    "on": "しょう",
    "kun": "わた.る",
    "english": "Ford, Go Cross, Transit, Ferry, Import, Involve",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Ford、Go Cross、Transit、Ferry、Import、Involve"
  },
  {
    "char": "虚",
    "on": "きょ、こ",
    "kun": "むな.しい、うつ.ろ",
    "english": "Void, Emptiness, Unpreparedness, Crack, Fissure, Untruth",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Void、Emptiness、Unpreparedness、Crack、Fissure、Untruth"
  },
  {
    "char": "官",
    "on": "かん",
    "kun": "",
    "english": "Bureaucrat, The Government, Organ",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 8,
    "myanmar": "Bureaucrat、The Government、Organ"
  },
  {
    "char": "察",
    "on": "さつ",
    "kun": "",
    "english": "Guess, Presume, Surmise, Judge, Understand",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 14,
    "myanmar": "Guess、Presume、ခန့်ခံစဉ်း、ရိုက်နှင့်、နားလည်"
  },
  {
    "char": "底",
    "on": "てい",
    "kun": "そこ",
    "english": "Bottom, Sole, Depth, Bottom Price, Base, Kind, Sort",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 8,
    "myanmar": "အောက်、လက်ခြေကျပ်、အနက်、အနှူးစျေး、အခြေခံ、မျိုးစိတ်、မျိုးစိတ်"
  },
  {
    "char": "愛",
    "on": "あい",
    "kun": "いと.しい、かな.しい、め.でる、お.しむ、まな",
    "english": "Love, Affection, Favourite",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 13,
    "myanmar": "အချစ်、Affection、Favourite"
  },
  {
    "char": "署",
    "on": "しょ",
    "kun": "",
    "english": "Signature, Govt Office, Police Station",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 13,
    "myanmar": "လက်မှတ်、Govt Office、ရဲစခန်း"
  },
  {
    "char": "警",
    "on": "けい",
    "kun": "いまし.める",
    "english": "Admonish, Commandment",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 19,
    "myanmar": "Admonish、Commandment"
  },
  {
    "char": "恋",
    "on": "れん",
    "kun": "こ.う、こい、こい.しい",
    "english": "Romance, In Love, Yearn For, Miss, Darling",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Romance、In Love、Yearn For、Miss、Darling"
  },
  {
    "char": "覚",
    "on": "かく",
    "kun": "おぼ.える、さ.ます、さ.める、さと.る",
    "english": "Memorize, Learn, Remember, Awake, Sober Up",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 12,
    "myanmar": "Memorize、သင်ယူ、မှတ်မိ、Awake、Sober Up"
  },
  {
    "char": "説",
    "on": "せつ、ぜい",
    "kun": "と.く",
    "english": "Opinion, Theory, Explanation, Rumor",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 14,
    "myanmar": "Opinion、Theory、Explanation、Rumor"
  },
  {
    "char": "幻",
    "on": "げん",
    "kun": "まぼろし",
    "english": "Phantasm, Vision, Dream, Illusion, Apparition",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 4,
    "myanmar": "Phantasm、Vision、Dream、Illusion、Apparition"
  },
  {
    "char": "訓",
    "on": "くん、きん",
    "kun": "おし.える、よ.む、くん.ずる",
    "english": "Instruction, Japanese Character Reading, Explanation, Read",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 10,
    "myanmar": "Instruction、Japanese Character Reading、Explanation、ဖတ်သည်"
  },
  {
    "char": "試",
    "on": "し",
    "kun": "こころ.みる、ため.す",
    "english": "Test, Try, Attempt, Experiment, Ordeal",
    "jlpt_new": 4,
    "grade": 4,
    "strokes": 13,
    "myanmar": "Test、Try、Attempt、Experiment、Ordeal"
  },
  {
    "char": "弓",
    "on": "きゅう",
    "kun": "ゆみ",
    "english": "Bow, Bow (archery, Violin)",
    "jlpt_new": 1,
    "grade": 2,
    "strokes": 3,
    "myanmar": "Bow、Bow (archery、Violin)"
  },
  {
    "char": "告",
    "on": "こく",
    "kun": "つ.げる",
    "english": "Revelation, Tell, Inform, Announce",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 7,
    "myanmar": "Revelation、Tell、Inform、ကြေငြာ"
  },
  {
    "char": "種",
    "on": "しゅ",
    "kun": "たね、-ぐさ",
    "english": "Species, Kind, Class, Variety, Seed",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 14,
    "myanmar": "Species、မျိုးစိတ်、Class、Variety、Seed"
  },
  {
    "char": "達",
    "on": "たつ、だ",
    "kun": "-たち",
    "english": "Accomplished, Reach, Arrive, Attain",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 12,
    "myanmar": "Accomplished、ရောက်、ရောက်、Attain"
  },
  {
    "char": "類",
    "on": "るい",
    "kun": "たぐ.い",
    "english": "Sort, Kind, Variety, Class, Genus",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 18,
    "myanmar": "မျိုးစိတ်、မျိုးစိတ်、Variety、Class、Genus"
  },
  {
    "char": "報",
    "on": "ほう",
    "kun": "むく.いる",
    "english": "Report, News, Reward, Retribution",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 12,
    "myanmar": "သတင်းစာ、News、ဆု、Retribution"
  },
  {
    "char": "祈",
    "on": "き",
    "kun": "いの.る",
    "english": "Pray, Wish",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 8,
    "myanmar": "ဆုတောင်း、လိုချင်သည်"
  },
  {
    "char": "等",
    "on": "とう",
    "kun": "ひと.しい、など、-ら",
    "english": "Etc., And So Forth, Class (first), Quality, Equal, Similar",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 12,
    "myanmar": "Etc.、And So Forth、Class (first)、Quality、ညီမျှ、Similar"
  },
  {
    "char": "汽",
    "on": "き",
    "kun": "",
    "english": "Vapor, Steam",
    "jlpt_new": 1,
    "grade": 2,
    "strokes": 7,
    "myanmar": "Vapor、Steam"
  },
  {
    "char": "借",
    "on": "しゃく",
    "kun": "か.りる",
    "english": "Borrow, Rent",
    "jlpt_new": 4,
    "grade": 4,
    "strokes": 10,
    "myanmar": "Borrow、Rent"
  },
  {
    "char": "焼",
    "on": "しょう",
    "kun": "や.く、や.き、や.き-、-や.き、や.ける",
    "english": "Bake, Burning",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 12,
    "myanmar": "လောင်း、လောင်း"
  },
  {
    "char": "座",
    "on": "ざ",
    "kun": "すわ.る",
    "english": "Squat, Seat, Cushion, Gathering, Sit",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 10,
    "myanmar": "Squat、Seat、Cushion、Gathering、ထိုင်တန်"
  },
  {
    "char": "忘",
    "on": "ぼう",
    "kun": "わす.れる",
    "english": "Forget",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 7,
    "myanmar": "မှတ်မိနိုင်ခြင်း"
  },
  {
    "char": "洗",
    "on": "せん",
    "kun": "あら.う",
    "english": "Wash, Inquire Into, Probe",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 9,
    "myanmar": "လျှော်、Inquire Into、Probe"
  },
  {
    "char": "胸",
    "on": "きょう",
    "kun": "むね、むな-",
    "english": "Bosom, Breast, Chest, Heart, Feelings",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 10,
    "myanmar": "Bosom、Breast、Chest、စိတ်、Feelings"
  },
  {
    "char": "脳",
    "on": "のう、どう",
    "kun": "のうずる",
    "english": "Brain, Memory",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 11,
    "myanmar": "ဦးနှောက်、မှတ်ဉာဏ်"
  },
  {
    "char": "僧",
    "on": "そう",
    "kun": "",
    "english": "Buddhist Priest, Monk",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Buddhist Priest、Monk"
  },
  {
    "char": "禅",
    "on": "ぜん、せん",
    "kun": "しずか、ゆず.る",
    "english": "Zen, Silent Meditation",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Zen、Silent Meditation"
  },
  {
    "char": "験",
    "on": "けん、げん",
    "kun": "あかし、しるし、ため.す、ためし",
    "english": "Verification, Effect, Testing",
    "jlpt_new": 4,
    "grade": 4,
    "strokes": 18,
    "myanmar": "Verification、သက်ရောက်မှု、Testing"
  },
  {
    "char": "可",
    "on": "か、こく",
    "kun": "-べ.き、-べ.し",
    "english": "Can, Passable, Mustn't, Should Not, Do Not",
    "jlpt_new": null,
    "grade": 5,
    "strokes": 5,
    "myanmar": "Can、Passable、Mustn't、Should Not、Do Not"
  },
  {
    "char": "許",
    "on": "きょ",
    "kun": "ゆる.す、もと",
    "english": "Permit, Approve",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 11,
    "myanmar": "ခွင့်ပြု、Approve"
  },
  {
    "char": "枚",
    "on": "まい、ばい",
    "kun": "",
    "english": "Sheet Of..., Counter For Flat Thin Objects Or Sheets",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 8,
    "myanmar": "Sheet Of...、Counter For Flat Thin Objects Or Sheets"
  },
  {
    "char": "静",
    "on": "せい、じょう",
    "kun": "しず-、しず.か、しず.まる、しず.める",
    "english": "Quiet",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 14,
    "myanmar": "Quiet"
  },
  {
    "char": "句",
    "on": "く",
    "kun": "",
    "english": "Phrase, Clause, Sentence, Passage, Paragraph, Counter For Haiku",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 5,
    "myanmar": "Phrase、Clause、Sentence、လမ်း、Paragraph、Counter For Haiku"
  },
  {
    "char": "禁",
    "on": "きん",
    "kun": "",
    "english": "Prohibition, Ban, Forbid",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 13,
    "myanmar": "တားမြစ်、တားမြစ်、တားမြစ်"
  },
  {
    "char": "喫",
    "on": "きつ",
    "kun": "の.む",
    "english": "Consume, Eat, Drink, Smoke, Receive (a Blow)",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Consume、စား、သောက်、Smoke、Receive (a Blow)"
  },
  {
    "char": "煙",
    "on": "えん",
    "kun": "けむ.る、けむり、けむ.い",
    "english": "Smoke",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Smoke"
  },
  {
    "char": "加",
    "on": "か",
    "kun": "くわ.える、くわ.わる",
    "english": "Add, Addition, Increase, Join, Include, Canada",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 5,
    "myanmar": "ေါင်းထည့်、Addition、တိုးမြှင့်、ပါဝင်သည်、ပါဝင်သည်、Canada"
  },
  {
    "char": "節",
    "on": "せつ、せち",
    "kun": "ふし、-ぶし、のっと",
    "english": "Node, Season, Period, Occasion, Verse, Clause, Stanza, Honor, Joint, Knuckle, Knob, Knot, Tune, Melody",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 13,
    "myanmar": "Node、Season、ကာလ、အချိန်、Verse、Clause、Stanza、ဂုဏ်ပြု、Joint、Knuckle、Knob、Knot、Tune、Melody"
  },
  {
    "char": "減",
    "on": "げん",
    "kun": "へ.る、へ.らす",
    "english": "Dwindle, Decrease, Reduce, Decline, Curtail, Get Hungry",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 12,
    "myanmar": "Dwindle、လျှော့ချ、လျှော့ချ、Decline、Curtail、Get Hungry"
  },
  {
    "char": "順",
    "on": "じゅん",
    "kun": "",
    "english": "Obey, Order, Turn, Right, Docility, Occasion",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 12,
    "myanmar": "လိုက်、အမိန့်、အလျား、ညာ、လိုက်နာ、အချိန်"
  },
  {
    "char": "容",
    "on": "よう",
    "kun": "い.れる",
    "english": "Contain, Form, Looks",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 10,
    "myanmar": "Contain、Form、Looks"
  },
  {
    "char": "布",
    "on": "ふ",
    "kun": "ぬの",
    "english": "Linen, Cloth, Spread, Distribute",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 5,
    "myanmar": "င်း、လက်ကောက်、Spread、Distribute"
  },
  {
    "char": "易",
    "on": "えき、い",
    "kun": "やさ.しい、やす.い",
    "english": "Easy, Ready To, Simple, Fortune-telling, Divination",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 8,
    "myanmar": "လွယ်ကူ、Ready To、Simple、ကံကြမ္မာ、Divination"
  },
  {
    "char": "財",
    "on": "ざい、さい、ぞく",
    "kun": "たから",
    "english": "Property, Money, Wealth, Assets",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 10,
    "myanmar": "ပိုင်ဆိုင်မှု、ငွေ、Wealth、Assets"
  },
  {
    "char": "若",
    "on": "じゃく、にゃく、にゃ",
    "kun": "わか.い、わか-、も.しくわ、も.し、も.しくは、ごと.し",
    "english": "Young, If, Perhaps, Possibly, Low Number, Immature",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 8,
    "myanmar": "လူငယ်、If、Perhaps、Possibly、Low Number、Immature"
  },
  {
    "char": "詞",
    "on": "し",
    "kun": "ことば",
    "english": "Part Of Speech, Words, Poetry",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 12,
    "myanmar": "စကားလုံးအမျိုးအစား、စကား、ကဗျာ"
  },
  {
    "char": "昆",
    "on": "こん",
    "kun": "",
    "english": "Descendants, Elder Brother, Insect",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Descendants、Elder Brother、Insect"
  },
  {
    "char": "閥",
    "on": "ばつ",
    "kun": "",
    "english": "Clique, Lineage, Pedigree, Faction, Clan",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "အဖွဲ့、Lineage、Pedigree、အဖွဲ့、Clan"
  },
  {
    "char": "歴",
    "on": "れき、れっき",
    "kun": "",
    "english": "Curriculum, Continuation, Passage Of Time",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 14,
    "myanmar": "သင်တန်းအကြောင်းအရာ、ဆက်လက်、Passage Of Time"
  },
  {
    "char": "舌",
    "on": "ぜつ",
    "kun": "した",
    "english": "Tongue, Reed, Clapper",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 6,
    "myanmar": "Tongue、Reed、Clapper"
  },
  {
    "char": "冊",
    "on": "さつ、さく",
    "kun": "ふみ",
    "english": "Tome, Counter For Books, Volume",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 5,
    "myanmar": "Tome、Counter For Books、အလတ်"
  },
  {
    "char": "宇",
    "on": "う",
    "kun": "",
    "english": "Eaves, Roof, House, Heaven",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 6,
    "myanmar": "ခေါင်မိုး、အမိုး、အိမ်、ကမ္ဘာ"
  },
  {
    "char": "宙",
    "on": "ちゅう",
    "kun": "",
    "english": "Mid-air, Air, Space, Sky, Memorization, Interval Of Time",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 8,
    "myanmar": "Mid-air、Air、အလွှာပေါ်、အဌာန်、Memorization、Interval Of Time"
  },
  {
    "char": "忙",
    "on": "ぼう、もう",
    "kun": "いそが.しい、せわ.しい、おそ.れる、うれえるさま",
    "english": "Busy, Occupied, Restless",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Busy、Occupied、Restless"
  },
  {
    "char": "履",
    "on": "り",
    "kun": "は.く",
    "english": "Perform, Complete, Footgear, Shoes, Boots, Put On (the Feet)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "ပြသသည်、ပြီးမြောက်、Footgear、Shoes、Boots、Put On (the Feet)"
  },
  {
    "char": "団",
    "on": "だん、とん",
    "kun": "かたまり、まる.い",
    "english": "Group, Association",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 6,
    "myanmar": "အဖွဲ့、အသင်း"
  },
  {
    "char": "暴",
    "on": "ぼう、ばく",
    "kun": "あば.く、あば.れる",
    "english": "Outburst, Rave, Fret, Force, Violence, Cruelty, Outrage",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 15,
    "myanmar": "ထွက်ပေါက်、အားကောင်းသည်、စိတ်ဆိုး、အား、အကြမ်းဖက်、အကြမ်းဖက်、အကြမ်းဖက်"
  },
  {
    "char": "混",
    "on": "こん",
    "kun": "ま.じる、-ま.じり、ま.ざる、ま.ぜる、こ.む",
    "english": "Mix, Blend, Confuse",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 11,
    "myanmar": "ပေါင်းစပ်、ပေါင်းစပ်、အလျှာ့"
  },
  {
    "char": "乱",
    "on": "らん、ろん",
    "kun": "みだ.れる、みだ.る、みだ.す、みだ、おさ.める、わた.る",
    "english": "Riot, War, Disorder, Disturb",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 7,
    "myanmar": "အရေးယူမှု、စစ်、အချိန်အခါ、ချိုးဖောက်"
  },
  {
    "char": "徒",
    "on": "と",
    "kun": "いたずら、あだ",
    "english": "On Foot, Junior, Emptiness, Vanity, Futility, Uselessness, Ephemeral Thing, Gang, Set, Party, People",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 10,
    "myanmar": "On Foot、Junior、Emptiness、Vanity、Futility、Uselessness、Ephemeral Thing、Gang、အစုံ、ပါတီ、People"
  },
  {
    "char": "得",
    "on": "とく",
    "kun": "え.る、う.る",
    "english": "Gain, Get, Find, Earn, Acquire, Can, May, Able To, Profit, Advantage, Benefit",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 11,
    "myanmar": "Gain、Get、ရှာ、ဝင်ငွေ、Acquire、Can、May、Able To、Profit、Advantage、လစာ"
  },
  {
    "char": "改",
    "on": "かい",
    "kun": "あらた.める、あらた.まる",
    "english": "Reformation, Change, Modify, Mend, Renew, Examine, Inspect, Search",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 7,
    "myanmar": "ပြောင်းလဲ、ပြောင်း、ပြောင်း、ပြုပြင်、အသစ်ပြန်လည်、စစ်ဆေး、စစ်ဆေး、ရှာ"
  },
  {
    "char": "続",
    "on": "ぞく、しょく、こう、きょう",
    "kun": "つづ.く、つづ.ける、つぐ.ない",
    "english": "Continue, Series, Sequel",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 13,
    "myanmar": "ဆက်လက်、Series、Sequel"
  },
  {
    "char": "連",
    "on": "れん",
    "kun": "つら.なる、つら.ねる、つ.れる、-づ.れ",
    "english": "Take Along, Lead, Join, Connect, Party, Gang, Clique",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 10,
    "myanmar": "Take Along、းဆောင်、ပါဝင်သည်、ဆက်စပ်、ပါတီ、Gang、အဖွဲ့"
  },
  {
    "char": "善",
    "on": "ぜん",
    "kun": "よ.い、い.い、よ.く、よし.とする",
    "english": "Virtuous, Good, Goodness",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 12,
    "myanmar": "Virtuous、ကောင်း、Goodness"
  },
  {
    "char": "困",
    "on": "こん",
    "kun": "こま.る",
    "english": "Quandary, Become Distressed, Annoyed",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 7,
    "myanmar": "Quandary、Become Distressed、Annoyed"
  },
  {
    "char": "絡",
    "on": "らく",
    "kun": "から.む、から.まる",
    "english": "Entwine, Coil Around, Get Caught In",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 12,
    "myanmar": "လှန်လှုပ်、Coil Around、Get Caught In"
  },
  {
    "char": "比",
    "on": "ひ",
    "kun": "くら.べる",
    "english": "Compare, Race, Ratio, Philippines",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 4,
    "myanmar": "နှိုင်းယှဉ်、ပြိုင်ပွဲ、အချိုးအစား、ဖိလစ်ပိုင်"
  },
  {
    "char": "災",
    "on": "さい",
    "kun": "わざわ.い",
    "english": "Disaster, Calamity, Woe, Curse, Evil",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 7,
    "myanmar": "Disaster、Calamity、Woe、Curse、Evil"
  },
  {
    "char": "機",
    "on": "き",
    "kun": "はた",
    "english": "Loom, Mechanism, Machine, Airplane, Opportunity, Potency, Efficacy, Occasion",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 16,
    "myanmar": "Loom、Mechanism、Machine、Airplane、Opportunity、Potency、အောင်မြင်မှု、အချိန်"
  },
  {
    "char": "率",
    "on": "そつ、りつ、しゅつ",
    "kun": "ひき.いる",
    "english": "Ratio, Rate, Proportion, %, Factor, Lead, Spearhead, Command",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 11,
    "myanmar": "အချိုးအစား、Rate、Proportion、%、Factor、းဆောင်、Spearhead、အမိန့်"
  },
  {
    "char": "飛",
    "on": "ひ",
    "kun": "と.ぶ、と.ばす、-と.ばす",
    "english": "Fly, Skip (pages), Scatter",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 9,
    "myanmar": "လွှတ်တင်、Skip (pages)、Scatter"
  },
  {
    "char": "害",
    "on": "がい",
    "kun": "",
    "english": "Harm, Injury",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 10,
    "myanmar": "Harm、Injury"
  },
  {
    "char": "余",
    "on": "よ",
    "kun": "あま.る、あま.り、あま.す、あんま.り",
    "english": "Too Much, Myself, Surplus, Other, Remainder",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 7,
    "myanmar": "Too Much、Myself、Surplus、Other、Remainder"
  },
  {
    "char": "難",
    "on": "なん",
    "kun": "かた.い、-がた.い、むずか.しい、むづか.しい、むつか.しい、-にく.い",
    "english": "Difficult, Impossible, Trouble, Accident, Defect",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 18,
    "myanmar": "ခက်ခဲ、ဖြစ်နိုင်ခြင်း、Trouble、Accident、အမှား"
  },
  {
    "char": "妨",
    "on": "ぼう",
    "kun": "さまた.げる",
    "english": "Disturb, Prevent, Hamper, Obstruct",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "ချိုးဖောက်、Prevent、Hamper、Obstruct"
  },
  {
    "char": "被",
    "on": "ひ",
    "kun": "こうむ.る、おお.う、かぶ.る、かぶ.せる",
    "english": "Incur, Cover, Veil, Brood Over, Shelter, Wear, Put On, Be Exposed (film), Receiving",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 10,
    "myanmar": "ရရှိ、ဖုံးကွယ်、မျက်နှာဖုံး、Brood Over、ကာကွယ်、စားထိုး、စားထိုး、Be Exposed (film)、လက်ခံ"
  },
  {
    "char": "裕",
    "on": "ゆう",
    "kun": "",
    "english": "Abundant, Rich, Fertile",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Abundant、အလွန်က、Fertile"
  },
  {
    "char": "震",
    "on": "しん",
    "kun": "ふる.う、ふる.える",
    "english": "Quake, Shake, Tremble, Quiver, Shiver",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 15,
    "myanmar": "လှုပ်ခြင်း、လှုပ်ခြင်း、လှုပ်ခြင်း、လှုပ်ခြင်း、လှုပ်ခြင်း"
  },
  {
    "char": "尻",
    "on": "こう",
    "kun": "しり",
    "english": "Buttocks, Hips, Butt, Rear",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Buttocks、Hips、Butt、နောက်ဘက်"
  },
  {
    "char": "尾",
    "on": "び",
    "kun": "お",
    "english": "Tail, End, Counter For Fish, Lower Slope Of Mountain",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Tail、အဆုံး、Counter For Fish、Lower Slope Of Mountain"
  },
  {
    "char": "械",
    "on": "かい",
    "kun": "かせ",
    "english": "Contraption, Fetter, Machine, Instrument",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 11,
    "myanmar": "Contraption、Fetter、Machine、Instrument"
  },
  {
    "char": "確",
    "on": "かく、こう",
    "kun": "たし.か、たし.かめる",
    "english": "Assurance, Firm, Tight, Hard, Solid, Confirm, Clear, Evident",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 15,
    "myanmar": "Assurance、Firm、Tight、ခက်ခဲ、Solid、Confirm、Clear、Evident"
  },
  {
    "char": "嫌",
    "on": "けん、げん",
    "kun": "きら.う、きら.い、いや",
    "english": "Dislike, Detest, Hate",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Dislike、အမုန်း、အမုန်း"
  },
  {
    "char": "個",
    "on": "こ、か",
    "kun": "",
    "english": "Individual, Counter For Articles",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 10,
    "myanmar": "개인、Counter For Articles"
  },
  {
    "char": "圧",
    "on": "あつ、えん、おう",
    "kun": "お.す、へ.す、おさ.える、お.さえる",
    "english": "Pressure, Push, Overwhelm, Oppress, Dominate",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 5,
    "myanmar": "ဖိအား、တွန်းပေး、အားကောင်းသည်、ပိတ်ဆို့、အုပ်ချုပ်သည်"
  },
  {
    "char": "在",
    "on": "ざい",
    "kun": "あ.る",
    "english": "Exist, Outskirts, Suburbs, Located In",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 6,
    "myanmar": "Exist、Outskirts、Suburbs、Located In"
  },
  {
    "char": "夢",
    "on": "む、ぼう",
    "kun": "ゆめ、ゆめ.みる、くら.い",
    "english": "Dream, Vision, Illusion",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 13,
    "myanmar": "Dream、Vision、Illusion"
  },
  {
    "char": "産",
    "on": "さん",
    "kun": "う.む、う.まれる、うぶ-、む.す",
    "english": "Products, Bear, Give Birth, Yield, Childbirth, Native, Property",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 11,
    "myanmar": "Products、ယူ、Give Birth、Yield、Childbirth、Native、ပိုင်ဆိုင်မှု"
  },
  {
    "char": "倒",
    "on": "とう",
    "kun": "たお.れる、-だお.れ、たお.す、さかさま、さかさ、さかしま",
    "english": "Overthrow, Fall, Collapse, Drop, Break Down",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Overthrow、ကျလာ、Collapse、ချိုး、Break Down"
  },
  {
    "char": "臭",
    "on": "しゅう",
    "kun": "くさ.い、-くさ.い、にお.う、にお.い",
    "english": "Stinking, Ill-smelling, Suspicious Looking, Odor, Savor, Fragrance, Be Fragrant, Stink, Glow, Be Bright",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Stinking、Ill-smelling、Suspicious Looking、Odor、Savor、Fragrance、Be Fragrant、Stink、လောင်း、Be Bright"
  },
  {
    "char": "厚",
    "on": "こう",
    "kun": "あつ.い、あか",
    "english": "Thick, Heavy, Rich, Kind, Cordial, Brazen, Shameless",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 9,
    "myanmar": "ထူ、လေးလံ、အလွန်က、မျိုးစိတ်、စိတ်ချစ်ကြိုး、အဝန်းကြီး、အဝန်းကြီး"
  },
  {
    "char": "妻",
    "on": "さい",
    "kun": "つま",
    "english": "Wife, Spouse",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 8,
    "myanmar": "Wife、Spouse"
  },
  {
    "char": "議",
    "on": "ぎ",
    "kun": "",
    "english": "Deliberation, Consultation, Debate, Consideration",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 20,
    "myanmar": "Deliberation、Consultation、Debate、Consideration"
  },
  {
    "char": "犯",
    "on": "はん、ぼん",
    "kun": "おか.す",
    "english": "Crime, Sin, Offense",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 5,
    "myanmar": "Crime、Sin、Offense"
  },
  {
    "char": "罪",
    "on": "ざい",
    "kun": "つみ",
    "english": "Guilt, Sin, Crime, Fault, Blame, Offense",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 13,
    "myanmar": "Guilt、Sin、Crime、အမှား、နှိုက်ယှက်、Offense"
  },
  {
    "char": "防",
    "on": "ぼう",
    "kun": "ふせ.ぐ",
    "english": "Ward Off, Defend, Protect, Resist",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 7,
    "myanmar": "ကာကွယ်、ကာကွယ်、ကာကွယ်、ပူးပေါင်း"
  },
  {
    "char": "穴",
    "on": "けつ",
    "kun": "あな",
    "english": "Hole, Aperture, Slit, Cave, Den",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 5,
    "myanmar": "Hole、Aperture、Slit、Cave、Den"
  },
  {
    "char": "論",
    "on": "ろん",
    "kun": "",
    "english": "Argument, Discourse",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 15,
    "myanmar": "Argument、Discourse"
  },
  {
    "char": "経",
    "on": "けい、きょう、きん",
    "kun": "へ.る、た.つ、たていと、はか.る、のり",
    "english": "Sutra, Longitude, Pass Thru, Expire, Warp",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 11,
    "myanmar": "Sutra、Longitude、Pass Thru、Expire、Warp"
  },
  {
    "char": "笛",
    "on": "てき",
    "kun": "ふえ",
    "english": "Flute, Clarinet, Pipe, Whistle, Bagpipe, Piccolo",
    "jlpt_new": 1,
    "grade": 3,
    "strokes": 11,
    "myanmar": "Flute、Clarinet、ပိုး、Whistle、Bagpipe、Piccolo"
  },
  {
    "char": "史",
    "on": "し",
    "kun": "",
    "english": "History, Chronicle",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 5,
    "myanmar": "သမိုင်း、သမိုင်း"
  },
  {
    "char": "敵",
    "on": "てき",
    "kun": "かたき、あだ、かな.う",
    "english": "Enemy, Foe, Opponent",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 15,
    "myanmar": "Enemy、Foe、Opponent"
  },
  {
    "char": "済",
    "on": "さい、せい",
    "kun": "す.む、-ず.み、-ずみ、す.まない、す.ます、-す.ます、すく.う、な.す、わたし、わた.る",
    "english": "Settle (debt, Etc.), Relieve (burden), Finish, Come To An End, Excusable, Need Not",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 11,
    "myanmar": "Settle (debt、Etc.)、Relieve (burden)、ပြီးမြောက်、Come To An End、Excusable、Need Not"
  },
  {
    "char": "委",
    "on": "い",
    "kun": "ゆだ.ねる",
    "english": "Committee, Entrust To, Leave To, Devote, Discard",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 8,
    "myanmar": "ကော်မတီ、Entrust To、Leave To、အပ်နှံ、ပယ်ဖျက်"
  },
  {
    "char": "挙",
    "on": "きょ",
    "kun": "あ.げる、あ.がる、こぞ.る",
    "english": "Raise, Plan, Project, Behavior, Actions",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 10,
    "myanmar": "တက်လာ、အစီအစဉ်、Project、Behavior、Actions"
  },
  {
    "char": "判",
    "on": "はん、ばん",
    "kun": "わか.る",
    "english": "Judgement, Signature, Stamp, Seal",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 7,
    "myanmar": "Judgement、လက်မှတ်、အကြီးအလေးကြီး、အကြီးအလေးကြီး"
  },
  {
    "char": "制",
    "on": "せい",
    "kun": "",
    "english": "System, Law, Rule",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 8,
    "myanmar": "System、ဥပဒေ、စည်းကမ်း"
  },
  {
    "char": "務",
    "on": "む",
    "kun": "つと.める",
    "english": "Task, Duties",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 11,
    "myanmar": "Task、Duties"
  },
  {
    "char": "査",
    "on": "さ",
    "kun": "",
    "english": "Investigate",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 9,
    "myanmar": "စစ်ဆေး"
  },
  {
    "char": "総",
    "on": "そう",
    "kun": "す.べて、すべ.て、ふさ",
    "english": "General, Whole, All, Full, Total",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 14,
    "myanmar": "အထွေထွေ、အကုန်、အားလုံး、ပြည့်စုံ、စုစုပေါင်း"
  },
  {
    "char": "設",
    "on": "せつ",
    "kun": "もう.ける",
    "english": "Establishment, Provision, Prepare",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 11,
    "myanmar": "တည်ထောင်、ပြုစုစောင်、ပြင်ဆင်"
  },
  {
    "char": "資",
    "on": "し",
    "kun": "",
    "english": "Assets, Resources, Capital, Funds, Data, Be Conducive To, Contribute To",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 13,
    "myanmar": "Assets、Resources、Capital、Funds、Data、Be Conducive To、Contribute To"
  },
  {
    "char": "権",
    "on": "けん、ごん",
    "kun": "おもり、かり、はか.る",
    "english": "Authority, Power, Rights",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 15,
    "myanmar": "Authority、စွမ်း、Rights"
  },
  {
    "char": "件",
    "on": "けん",
    "kun": "くだん",
    "english": "Affair, Case, Matter, Item",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 6,
    "myanmar": "Affair、Case、Matter、Item"
  },
  {
    "char": "派",
    "on": "は",
    "kun": "",
    "english": "Faction, Group, Party, Clique, Sect, School",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 9,
    "myanmar": "အဖွဲ့、အဖွဲ့、ပါတီ、အဖွဲ့、Sect、School"
  },
  {
    "char": "岡",
    "on": "こう",
    "kun": "おか",
    "english": "Mount, Hill, Knoll",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Mount、တောင်、Knoll"
  },
  {
    "char": "素",
    "on": "そ、す",
    "kun": "もと",
    "english": "Elementary, Principle, Naked, Uncovered",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 10,
    "myanmar": "Elementary、Principle、Naked、Uncovered"
  },
  {
    "char": "断",
    "on": "だん",
    "kun": "た.つ、ことわ.る、さだ.める",
    "english": "Severance, Decline, Refuse, Apologize, Warn, Dismiss, Prohibit, Decision, Judgement, Cutting",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 11,
    "myanmar": "Severance、Decline、ငြင်းပယ်、Apologize、Warn、Dismiss、Prohibit、Decision、Judgement、Cutting"
  },
  {
    "char": "評",
    "on": "ひょう",
    "kun": "",
    "english": "Evaluate, Criticism, Comment",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 12,
    "myanmar": "Evaluate、Criticism、Comment"
  },
  {
    "char": "批",
    "on": "ひ",
    "kun": "",
    "english": "Criticism, Strike",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 7,
    "myanmar": "Criticism、Strike"
  },
  {
    "char": "任",
    "on": "にん",
    "kun": "まか.せる、まか.す",
    "english": "Responsibility, Duty, Term, Entrust To, Appoint",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 6,
    "myanmar": "Responsibility、တာဝန်、Term、Entrust To、Appoint"
  },
  {
    "char": "検",
    "on": "けん",
    "kun": "しら.べる",
    "english": "Examination, Investigate",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 12,
    "myanmar": "Examination、စစ်ဆေး"
  },
  {
    "char": "審",
    "on": "しん",
    "kun": "つまび.らか、つぶさ.に",
    "english": "Hearing, Judge, Trial",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Hearing、ရိုက်နှင့်、Trial"
  },
  {
    "char": "条",
    "on": "じょう、ちょう、でき",
    "kun": "えだ、すじ",
    "english": "Article, Clause, Item, Stripe, Streak",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 7,
    "myanmar": "Article、Clause、Item、Stripe、Streak"
  },
  {
    "char": "責",
    "on": "せき",
    "kun": "せ.める",
    "english": "Blame, Condemn, Censure",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 11,
    "myanmar": "နှိုက်ယှက်、Condemn、Censure"
  },
  {
    "char": "省",
    "on": "せい、しょう",
    "kun": "かえり.みる、はぶ.く",
    "english": "Focus, Government Ministry, Conserve",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 9,
    "myanmar": "အာရုံစိုက်、အစိုးရဌာန、ထိန်းသိမ်း"
  },
  {
    "char": "増",
    "on": "ぞう",
    "kun": "ま.す、ま.し、ふ.える、ふ.やす",
    "english": "Increase, Add, Augment, Gain, Promote",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 14,
    "myanmar": "တိုးမြှင့်、ေါင်းထည့်、Augment、Gain、Promote"
  },
  {
    "char": "税",
    "on": "ぜい",
    "kun": "",
    "english": "Tax, Duty",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 12,
    "myanmar": "အခွန်、တာဝန်"
  },
  {
    "char": "解",
    "on": "かい、げ",
    "kun": "と.く、と.かす、と.ける、ほど.く、ほど.ける、わか.る、さと.る",
    "english": "Unravel, Notes, Key, Explanation, Understanding, Untie, Undo, Solve, Answer, Cancel, Absolve, Explain, Minute",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 13,
    "myanmar": "Unravel、Notes、Key、Explanation、Understanding、Untie、Undo、Solve、Answer、Cancel、Absolve、Explain、Minute"
  },
  {
    "char": "際",
    "on": "さい",
    "kun": "きわ、-ぎわ",
    "english": "Occasion, Side, Edge, Verge, Dangerous, Adventurous, Indecent, Time, When",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 14,
    "myanmar": "အချိန်、Side、Edge、Verge、Dangerous、Adventurous、Indecent、အချိန်、ဘယ်တုန်း"
  },
  {
    "char": "認",
    "on": "にん",
    "kun": "みと.める、したた.める",
    "english": "Acknowledge, Witness, Discern, Recognize, Appreciate, Believe",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 14,
    "myanmar": "Acknowledge、Witness、Discern、Recognize、Appreciate、ယုံကြည်"
  },
  {
    "char": "企",
    "on": "き",
    "kun": "くわだ.てる、たくら.む",
    "english": "Undertake, Scheme, Design, Attempt, Plan",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Undertake、စchema、ဒီဇိုင်း、Attempt、အစီအစဉ်"
  },
  {
    "char": "義",
    "on": "ぎ",
    "kun": "",
    "english": "Righteousness, Justice, Morality, Honor, Loyalty, Meaning",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 13,
    "myanmar": "Righteousness、Justice、Morality、ဂုဏ်ပြု、Loyalty、အဓိပ္ပာယ်"
  },
  {
    "char": "罰",
    "on": "ばつ、ばち、はつ",
    "kun": "ばっ.する",
    "english": "Penalty, Punishment",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Penalty、Punishment"
  },
  {
    "char": "誕",
    "on": "たん",
    "kun": "",
    "english": "Nativity, Be Born, Declension, Lie, Be Arbitrary",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 15,
    "myanmar": "Nativity、Be Born、Declension、Lie、Be Arbitrary"
  },
  {
    "char": "脱",
    "on": "だつ",
    "kun": "ぬ.ぐ、ぬ.げる",
    "english": "Undress, Removing, Escape From, Get Rid Of, Be Left Out, Take Off",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Undress、Removing、Escape From、Get Rid Of、Be Left Out、Take Off"
  },
  {
    "char": "過",
    "on": "か",
    "kun": "す.ぎる、-す.ぎる、-す.ぎ、す.ごす、あやま.つ、あやま.ち、よ.ぎる",
    "english": "Overdo, Exceed, Go Beyond, Error",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 12,
    "myanmar": "Overdo、Exceed、Go Beyond、Error"
  },
  {
    "char": "坊",
    "on": "ぼう、ぼっ",
    "kun": "",
    "english": "Boy, Priest's Residence, Priest",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Boy、Priest's Residence、Priest"
  },
  {
    "char": "寝",
    "on": "しん",
    "kun": "ね.る、ね.かす、い.ぬ、みたまや、や.める",
    "english": "Lie Down, Sleep, Rest, Bed, Remain Unsold",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Lie Down、အိပ်、နားလည်း、Bed、Remain Unsold"
  },
  {
    "char": "宮",
    "on": "きゅう、ぐう、く、くう",
    "kun": "みや",
    "english": "Shinto Shrine, Constellations, Palace, Princess",
    "jlpt_new": 1,
    "grade": 3,
    "strokes": 10,
    "myanmar": "Shinto Shrine、Constellations、Palace、Princess"
  },
  {
    "char": "各",
    "on": "かく",
    "kun": "おのおの",
    "english": "Each, Every, Either",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 6,
    "myanmar": "တစ်ခုချင်း、အားလုံး、ဘယ်ဟာမဆို"
  },
  {
    "char": "案",
    "on": "あん",
    "kun": "つくえ",
    "english": "Plan, Suggestion, Draft, Ponder, Fear, Proposition, Idea, Expectation, Worry, Table, Bench",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 10,
    "myanmar": "အစီအစဉ်、Suggestion、Draft、Ponder、ကြောက်、Proposition、Idea、Expectation、Worry、စားပွဲ、Bench"
  },
  {
    "char": "置",
    "on": "ち",
    "kun": "お.く、-お.き",
    "english": "Placement, Put, Set, Deposit, Leave Behind, Keep, Employ, Pawn",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 13,
    "myanmar": "Placement、Put、အစုံ、အားမြစ်、Leave Behind、ထိန်းသိမ်း、Employ、Pawn"
  },
  {
    "char": "費",
    "on": "ひ",
    "kun": "つい.やす、つい.える",
    "english": "Expense, Cost, Spend, Consume, Waste",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 12,
    "myanmar": "Expense、စျေး、သုံးစွဲ、Consume、အလွဲသုံး"
  },
  {
    "char": "価",
    "on": "か、け",
    "kun": "あたい",
    "english": "Value, Price",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 8,
    "myanmar": "တန်ဖိုး、စျေး"
  },
  {
    "char": "勢",
    "on": "せい、ぜい",
    "kun": "いきお.い、はずみ",
    "english": "Forces, Energy, Military Strength",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 13,
    "myanmar": "စစ်တပ်များ、စွမ်းအင်း、Military Strength"
  },
  {
    "char": "営",
    "on": "えい",
    "kun": "いとな.む、いとな.み",
    "english": "Occupation, Camp, Perform, Build, Conduct (business)",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 12,
    "myanmar": "အလုပ်、ြံဝnake、ပြသသည်、တည်ဆောက်、Conduct (business)"
  },
  {
    "char": "示",
    "on": "じ、し",
    "kun": "しめ.す",
    "english": "Show, Indicate, Point Out, Express, Display",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 5,
    "myanmar": "Show、Indicate、Point Out、Express、Display"
  },
  {
    "char": "統",
    "on": "とう",
    "kun": "す.べる、ほび.る",
    "english": "Overall, Relationship, Ruling, Governing",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 12,
    "myanmar": "Overall、Relationship、Ruling、Governing"
  },
  {
    "char": "領",
    "on": "りょう",
    "kun": "えり",
    "english": "Jurisdiction, Dominion, Territory, Fief, Reign",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 14,
    "myanmar": "အုပ်ချုပ်ခွင့်ရ、အုပ်ချုပ်မှု、ပိုင်နက်、ပိုင်နက်、အုပ်ချုပ်"
  },
  {
    "char": "策",
    "on": "さく",
    "kun": "",
    "english": "Scheme, Plan, Policy, Step, Means",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 12,
    "myanmar": "စchema、အစီအစဉ်、Policy、Step、Means"
  },
  {
    "char": "藤",
    "on": "とう、どう",
    "kun": "ふじ",
    "english": "Wisteria",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Wisteria"
  },
  {
    "char": "副",
    "on": "ふく",
    "kun": "",
    "english": "Vice-, Assistant, Aide, Duplicate, Copy",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 11,
    "myanmar": "Vice-、အကူအညီ、Aide、ပွားလည်း、ကူးယူ"
  },
  {
    "char": "観",
    "on": "かん",
    "kun": "み.る、しめ.す",
    "english": "Outlook, Look, Appearance, Condition, View",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 18,
    "myanmar": "Outlook、ကြည့်、Appearance、အခြေအနေ、View"
  },
  {
    "char": "値",
    "on": "ち",
    "kun": "ね、あたい",
    "english": "Price, Cost, Value",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 10,
    "myanmar": "စျေး、စျေး、တန်ဖိုး"
  },
  {
    "char": "吸",
    "on": "きゅう",
    "kun": "す.う",
    "english": "Suck, Imbibe, Inhale, Sip",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 6,
    "myanmar": "Suck、Imbibe、Inhale、Sip"
  },
  {
    "char": "域",
    "on": "いき",
    "kun": "",
    "english": "Range, Region, Limits, Stage, Level",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 11,
    "myanmar": "Range、ဒေသ、ကန့်、အဆင့်、အဆင့်"
  },
  {
    "char": "姿",
    "on": "し",
    "kun": "すがた",
    "english": "Figure, Form, Shape",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 9,
    "myanmar": "ပုံသဏ္ဌာန်、Form、ပုံသဏ္ဌာန်"
  },
  {
    "char": "応",
    "on": "おう、よう、-のう",
    "kun": "あた.る、まさに、こた.える",
    "english": "Apply, Answer, Yes, Ok, Reply, Accept",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 7,
    "myanmar": "Apply、Answer、Yes、Ok、Reply、လက်ခံ"
  },
  {
    "char": "提",
    "on": "てい、ちょう、だい",
    "kun": "さ.げる",
    "english": "Propose, Take Along, Carry In Hand",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 12,
    "myanmar": "Propose、Take Along、Carry In Hand"
  },
  {
    "char": "援",
    "on": "えん",
    "kun": "",
    "english": "Abet, Help, Save",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Abet、ကူညီ、သိမ်းဆည်း"
  },
  {
    "char": "状",
    "on": "じょう",
    "kun": "",
    "english": "Status Quo, Conditions, Circumstances, Form, Appearance",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 7,
    "myanmar": "Status Quo、Conditions、Circumstances、Form、Appearance"
  },
  {
    "char": "態",
    "on": "たい",
    "kun": "わざ.と",
    "english": "Attitude, Condition, Figure, Appearance, Voice (of Verbs)",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 14,
    "myanmar": "Attitude、အခြေအနေ、ပုံသဏ္ဌာန်、Appearance、Voice (of Verbs)"
  },
  {
    "char": "賀",
    "on": "が",
    "kun": "",
    "english": "Congratulations, Joy",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 12,
    "myanmar": "Congratulations、Joy"
  },
  {
    "char": "収",
    "on": "しゅう",
    "kun": "おさ.める、おさ.まる",
    "english": "Income, Obtain, Reap, Pay, Supply, Store",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 4,
    "myanmar": "Income、Obtain、Reap、ပေးသည်、ပေးအပ်သည်、သိုလှောင်သည်"
  },
  {
    "char": "停",
    "on": "てい",
    "kun": "と.める、と.まる",
    "english": "Halt, Stopping",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 11,
    "myanmar": "ရပ်、ရပ်တန်"
  },
  {
    "char": "革",
    "on": "かく",
    "kun": "かわ",
    "english": "Leather, Skin, Reform, Become Serious",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 9,
    "myanmar": "အသားထည်、အသားအရေ、Reform、Become Serious"
  },
  {
    "char": "職",
    "on": "しょく、そく",
    "kun": "",
    "english": "Post, Employment, Work",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 18,
    "myanmar": "Post、Employment、အလုပ်"
  },
  {
    "char": "鬼",
    "on": "き",
    "kun": "おに、おに-",
    "english": "Ghost, Devil",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Ghost、Devil"
  },
  {
    "char": "規",
    "on": "き",
    "kun": "",
    "english": "Standard, Measure",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 11,
    "myanmar": "Standard、တိုင်းတာ"
  },
  {
    "char": "護",
    "on": "ご",
    "kun": "まも.る",
    "english": "Safeguard, Protect",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 20,
    "myanmar": "Safeguard、ကာကွယ်"
  },
  {
    "char": "割",
    "on": "かつ",
    "kun": "わ.る、わり、わ.り、わ.れる、さ.く",
    "english": "Proportion, Comparatively, Divide, Cut, Separate, Split",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 12,
    "myanmar": "Proportion、Comparatively、ခွဲ、Cut、ခွဲခြား、ခွဲ"
  },
  {
    "char": "裁",
    "on": "さい",
    "kun": "た.つ、さば.く",
    "english": "Tailor, Judge, Decision, Cut Out (pattern)",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 12,
    "myanmar": "Tailor、ရိုက်နှင့်、Decision、Cut Out (pattern)"
  },
  {
    "char": "崎",
    "on": "き",
    "kun": "さき、さい、みさき",
    "english": "Promontory, Cape, Spit",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Promontory、Cape、Spit"
  },
  {
    "char": "演",
    "on": "えん",
    "kun": "",
    "english": "Performance, Act, Play, Render, Stage",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 14,
    "myanmar": "ပြသမှု、Act、ကစား、Render、အဆင့်"
  },
  {
    "char": "律",
    "on": "りつ、りち、れつ",
    "kun": "",
    "english": "Rhythm, Law, Regulation, Gauge, Control",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 9,
    "myanmar": "အလှည့်အလှည့်、ဥပဒေ、စည်းကမ်း、တိုင်းတာ、ထိန်းချုပ်"
  },
  {
    "char": "師",
    "on": "し",
    "kun": "いくさ",
    "english": "Expert, Teacher, Master, Model, Exemplar, Army (incl. Counter), War",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 10,
    "myanmar": "Expert、Teacher、Master、မှန်ကန်စွာ、Exemplar、Army (incl. Counter)、စစ်"
  },
  {
    "char": "看",
    "on": "かん",
    "kun": "み.る",
    "english": "Watch Over, See",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 9,
    "myanmar": "Watch Over、မြင်သည်"
  },
  {
    "char": "準",
    "on": "じゅん",
    "kun": "じゅん.じる、じゅん.ずる、なぞら.える、のり、ひと.しい、みずもり",
    "english": "Semi-, Correspond To, Proportionate To, Conform, Imitate",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 13,
    "myanmar": "Semi-、Correspond To、Proportionate To、သက်ဆိုင်သည်、မှန်ကန်စွာ"
  },
  {
    "char": "則",
    "on": "そく",
    "kun": "のっと.る",
    "english": "Rule, Follow, Based On, Model After",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 9,
    "myanmar": "စည်းကမ်း、လိုက်、အခြေခံ、မှန်ကန်စွာ"
  },
  {
    "char": "備",
    "on": "び",
    "kun": "そな.える、そな.わる、つぶさ.に",
    "english": "Equip, Provision, Preparation",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 12,
    "myanmar": "Equip、ပြုစုစောင်、Preparation"
  },
  {
    "char": "導",
    "on": "どう",
    "kun": "みちび.く",
    "english": "Guidance, Leading, Conduct, Usher",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 15,
    "myanmar": "လမ်းညွှန်、းဆောင်、လုပ်ဆောင်သည်、လက်ခံ"
  },
  {
    "char": "幹",
    "on": "かん",
    "kun": "みき",
    "english": "Tree Trunk, Main Part, Talent, Capability",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 13,
    "myanmar": "Tree Trunk、Main Part、စွမ်းအင်း、Capability"
  },
  {
    "char": "張",
    "on": "ちょう",
    "kun": "は.る、-は.り、-ば.り",
    "english": "Lengthen, Counter For Bows & Stringed Instruments, Stretch, Spread, Put Up (tent)",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 11,
    "myanmar": "အရှည်တိုး、Counter For Bows & Stringed Instruments、ဆွဲ、Spread、Put Up (tent)"
  },
  {
    "char": "優",
    "on": "ゆう、う",
    "kun": "やさ.しい、すぐ.れる、まさ.る",
    "english": "Tenderness, Excel, Surpass, Actor, Superiority, Gentleness",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 17,
    "myanmar": "Tenderness、Excel、Surpass、Actor、Superiority、Gentleness"
  },
  {
    "char": "宅",
    "on": "たく",
    "kun": "",
    "english": "Home, House, Residence, Our House, My Husband",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 6,
    "myanmar": "Home、အိမ်、Residence、Our House、My Husband"
  },
  {
    "char": "沢",
    "on": "たく",
    "kun": "さわ、うるお.い、うるお.す、つや",
    "english": "Swamp, Marsh, Brilliance, Grace",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Swamp、Marsh、Brilliance、Grace"
  },
  {
    "char": "施",
    "on": "し、せ",
    "kun": "ほどこ.す",
    "english": "Give, Bestow, Perform, Alms",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "ပေး、Bestow、ပြသသည်、Alms"
  },
  {
    "char": "現",
    "on": "げん",
    "kun": "あらわ.れる、あらわ.す、うつつ、うつ.つ",
    "english": "Present, Existing, Actual",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 11,
    "myanmar": "Present、Existing、Actual"
  },
  {
    "char": "乳",
    "on": "にゅう",
    "kun": "ちち、ち",
    "english": "Milk, Breasts",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 8,
    "myanmar": "Milk、Breasts"
  },
  {
    "char": "呼",
    "on": "こ",
    "kun": "よ.ぶ",
    "english": "Call, Call Out To, Invite",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 8,
    "myanmar": "Call、Call Out To、Invite"
  },
  {
    "char": "城",
    "on": "じょう、せい",
    "kun": "しろ",
    "english": "Castle",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 9,
    "myanmar": "Castle"
  },
  {
    "char": "俳",
    "on": "はい",
    "kun": "",
    "english": "Haiku, Actor",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 10,
    "myanmar": "Haiku、Actor"
  },
  {
    "char": "秀",
    "on": "しゅう",
    "kun": "ひい.でる",
    "english": "Excel, Excellence, Beauty, Surpass",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Excel、Excellence、Beauty、Surpass"
  },
  {
    "char": "担",
    "on": "たん",
    "kun": "かつ.ぐ、にな.う",
    "english": "Shouldering, Carry, Raise, Bear",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 8,
    "myanmar": "ခြေဖာရင်း、ယူ、တက်လာ、ယူ"
  },
  {
    "char": "額",
    "on": "がく",
    "kun": "ひたい",
    "english": "Forehead, Tablet, Plaque, Framed Picture, Sum, Amount, Volume",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 18,
    "myanmar": "ဦးခေါင်း、ကတ်တလ်、ကတ်တလ်、ခြယ်ကြီးဓာတ်ပုံ、စုစုပေါင်း、ပမာဏ、အလတ်"
  },
  {
    "char": "製",
    "on": "せい",
    "kun": "",
    "english": "Made In..., Manufacture",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 14,
    "myanmar": "Made In...、Manufacture"
  },
  {
    "char": "違",
    "on": "い",
    "kun": "ちが.う、ちが.い、ちが.える、-ちが.える、たが.う、たが.える",
    "english": "Difference, Differ",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Difference、Differ"
  },
  {
    "char": "輸",
    "on": "ゆ、しゅ",
    "kun": "",
    "english": "Transport, Send, Be Inferior",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 16,
    "myanmar": "ပို့ဆေး、ပို့、Be Inferior"
  },
  {
    "char": "燃",
    "on": "ねん",
    "kun": "も.える、も.やす、も.す",
    "english": "Burn, Blaze, Glow",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 16,
    "myanmar": "လောင်း、လောင်း、လောင်း"
  },
  {
    "char": "祝",
    "on": "しゅく、しゅう",
    "kun": "いわ.う",
    "english": "Celebrate, Congratulate",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 9,
    "myanmar": "Celebrate、Congratulate"
  },
  {
    "char": "届",
    "on": "かい",
    "kun": "とど.ける、-とど.け、とど.く",
    "english": "Deliver, Reach, Arrive, Report, Notify, Forward",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 8,
    "myanmar": "ပေးအပ်သည်、ရောက်、ရောက်、သတင်းစာ、သတင်းပေး、အရှေ့"
  },
  {
    "char": "狭",
    "on": "きょう、こう",
    "kun": "せま.い、せば.める、せば.まる、さ",
    "english": "Cramped, Narrow, Contract, Tight",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Cramped、ကျဉ်းမြောင်း、Contract、Tight"
  },
  {
    "char": "肩",
    "on": "けん",
    "kun": "かた",
    "english": "Shoulder",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Shoulder"
  },
  {
    "char": "腕",
    "on": "わん",
    "kun": "うで",
    "english": "Arm, Ability, Talent",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Arm、စွမ်းအင်း、စွမ်းအင်း"
  },
  {
    "char": "腰",
    "on": "よう",
    "kun": "こし",
    "english": "Loins, Hips, Waist, Low Wainscoting",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Loins、Hips、Waist、Low Wainscoting"
  },
  {
    "char": "触",
    "on": "しょく",
    "kun": "ふ.れる、さわ.る、さわ",
    "english": "Contact, Touch, Feel, Hit, Proclaim, Announce, Conflict",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 13,
    "myanmar": "ဆက်သွယ်、ထိ、ခံစစ်、ထိခိုက်、ကြေငြာ、ကြေငြာ、အငြင်းပွား"
  },
  {
    "char": "載",
    "on": "さい",
    "kun": "の.せる、の.る",
    "english": "Ride, Board, Get On, Place, Spread, 10**44, Record, Publish",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Ride、အဆစ်、Get On、Place、Spread、10**44、မှတ်တမ်း、ထုတ်ဝေ"
  },
  {
    "char": "層",
    "on": "そう",
    "kun": "",
    "english": "Stratum, Social Class, Layer, Story, Floor",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 14,
    "myanmar": "အဆင့်、လူမျိုးအဆင့်、အလွှာ、ဇာတ်လမ်းတွဲ、အဆင့်"
  },
  {
    "char": "型",
    "on": "けい",
    "kun": "かた、-がた",
    "english": "Mould, Type, Model",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 9,
    "myanmar": "ပုံပြား、အမျိုးအစား、မှန်ကန်စွာ"
  },
  {
    "char": "庁",
    "on": "ちょう、てい",
    "kun": "やくしょ",
    "english": "Government Office",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 5,
    "myanmar": "အစိုးရရုံး"
  },
  {
    "char": "視",
    "on": "し",
    "kun": "み.る",
    "english": "Inspection, Regard As, See, Look At",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 11,
    "myanmar": "Inspection、Regard As、မြင်သည်、Look At"
  },
  {
    "char": "差",
    "on": "さ",
    "kun": "さ.す、さ.し",
    "english": "Distinction, Difference, Variation, Discrepancy, Margin, Balance",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 10,
    "myanmar": "Distinction、Difference、Variation、Discrepancy、Margin、Balance"
  },
  {
    "char": "管",
    "on": "かん",
    "kun": "くだ",
    "english": "Pipe, Tube, Wind Instrument, Drunken Talk, Control, Jurisdiction",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 14,
    "myanmar": "ပိုး、ပိုး、လေသံပြုလုပ်စက်、အယ်လောက်စကား、ထိန်းချုပ်、အုပ်ချုပ်ခွင့်ရ"
  },
  {
    "char": "象",
    "on": "しょう、ぞう",
    "kun": "かたど.る",
    "english": "Elephant, Pattern After, Imitate, Image, Shape, Sign (of The Times)",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 12,
    "myanmar": "ဆင်စွယ်、Pattern After、မှန်ကန်စွာ、ဓာတ်ပုံ、ပုံသဏ္ဌာန်、Sign (of The Times)"
  },
  {
    "char": "量",
    "on": "りょう",
    "kun": "はか.る",
    "english": "Quantity, Measure, Weight, Amount, Consider, Estimate, Surmise",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 12,
    "myanmar": "ပမာဏ、တိုင်းတာ、လက်ချိန်း、ပမာဏ、စဉ်းစား、ခန့်ခံစဉ်း、ခန့်ခံစဉ်း"
  },
  {
    "char": "境",
    "on": "きょう、けい",
    "kun": "さかい",
    "english": "Boundary, Border, Region",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 14,
    "myanmar": "အကန့်、အကန့်、ဒေသ"
  },
  {
    "char": "環",
    "on": "かん",
    "kun": "わ",
    "english": "Ring, Circle, Link, Wheel",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "လက်ပတ်ကောင်、အဝိုင်းကြီး、လင့်ခ်、ဘီး"
  },
  {
    "char": "武",
    "on": "ぶ、む",
    "kun": "たけ、たけ.し",
    "english": "Warrior, Military, Chivalry, Arms",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 8,
    "myanmar": "စစ်သား、စစ်ဘက်ရုံး、စစ်ဘက်ရုံး、လက်နက်"
  },
  {
    "char": "質",
    "on": "しつ、しち、ち",
    "kun": "たち、ただ.す、もと、わりふ",
    "english": "Substance, Quality, Matter, Temperament",
    "jlpt_new": 4,
    "grade": 5,
    "strokes": 15,
    "myanmar": "Substance、Quality、Matter、Temperament"
  },
  {
    "char": "述",
    "on": "じゅつ",
    "kun": "の.べる",
    "english": "Mention, State, Speak, Relate",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 8,
    "myanmar": "ပြောသည်、ပြည်တွင်း、ပြောသည်、ဆက်စပ်"
  },
  {
    "char": "供",
    "on": "きょう、く、くう、ぐ",
    "kun": "そな.える、とも、-ども",
    "english": "Submit, Offer, Present, Serve (meal), Accompany",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 8,
    "myanmar": "Submit、Offer、Present、Serve (meal)、Accompany"
  },
  {
    "char": "展",
    "on": "てん",
    "kun": "",
    "english": "Unfold, Expand",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 10,
    "myanmar": "Unfold、ချဲ့ကွယ်"
  },
  {
    "char": "販",
    "on": "はん",
    "kun": "",
    "english": "Marketing, Sell, Trade",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 11,
    "myanmar": "စျေးကွက်、ရောင်း、ငွေတူ"
  },
  {
    "char": "株",
    "on": "しゅ",
    "kun": "かぶ",
    "english": "Stocks, Stump, Shares, Stock, Counter For Small Plants",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 10,
    "myanmar": "Stocks、Stump、Shares、Stock、Counter For Small Plants"
  },
  {
    "char": "限",
    "on": "げん",
    "kun": "かぎ.る、かぎ.り、-かぎ.り",
    "english": "Limit, Restrict, To Best Of Ability",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 9,
    "myanmar": "Limit、Restrict、To Best Of Ability"
  },
  {
    "char": "与",
    "on": "よ",
    "kun": "あた.える、あずか.る、くみ.する、ともに",
    "english": "Bestow, Participate In, Give, Award, Impart, Provide, Cause, Gift, Godsend",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 3,
    "myanmar": "Bestow、Participate In、ပေး、ဆု、Impart、Provide、အကြောင်းရင်း、Gift、Godsend"
  },
  {
    "char": "含",
    "on": "がん",
    "kun": "ふく.む、ふく.める",
    "english": "Contain, Include, Hold In The Mouth, Bear In Mind, Understand, Cherish",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Contain、ပါဝင်သည်、Hold In The Mouth、စိတ်ထဲထားသည်、နားလည်、လိုလားသည်"
  },
  {
    "char": "影",
    "on": "えい",
    "kun": "かげ",
    "english": "Shadow, Silhouette, Phantom",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Shadow、Silhouette、Phantom"
  },
  {
    "char": "況",
    "on": "きょう",
    "kun": "まし.て、いわ.んや、おもむき",
    "english": "Condition, Situation",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 8,
    "myanmar": "အခြေအနေ、အခြေအနေ"
  },
  {
    "char": "渡",
    "on": "と",
    "kun": "わた.る、-わた.る、わた.す",
    "english": "Transit, Ford, Ferry, Cross, Import, Deliver, Diameter, Migrate",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Transit、Ford、Ferry、Cross、Import、ပေးအပ်သည်、Diameter、Migrate"
  },
  {
    "char": "響",
    "on": "きょう",
    "kun": "ひび.く",
    "english": "Echo, Sound, Resound, Ring, Vibrate",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 20,
    "myanmar": "Echo、အသံ、Resound、လက်ပတ်ကောင်、Vibrate"
  },
  {
    "char": "票",
    "on": "ひょう",
    "kun": "",
    "english": "Ballot, Label, Ticket, Sign",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 11,
    "myanmar": "Ballot、လက်မှတ်、လက်မှတ်、လက်မှတ်"
  },
  {
    "char": "景",
    "on": "けい",
    "kun": "",
    "english": "Scenery, View",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 12,
    "myanmar": "Scenery、View"
  },
  {
    "char": "抜",
    "on": "ばつ、はつ、はい",
    "kun": "ぬ.く、-ぬ.く、ぬ.き、ぬ.ける、ぬ.かす、ぬ.かる",
    "english": "Slip Out, Extract, Pull Out, Pilfer, Quote, Remove, Omit",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Slip Out、Extract、Pull Out、Pilfer、Quote、Remove、Omit"
  },
  {
    "char": "訴",
    "on": "そ",
    "kun": "うった.える",
    "english": "Accusation, Sue, Complain Of Pain, Appeal To",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Accusation、Sue、Complain Of Pain、Appeal To"
  },
  {
    "char": "訟",
    "on": "しょう",
    "kun": "",
    "english": "Sue, Accuse",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Sue、Accuse"
  },
  {
    "char": "逮",
    "on": "たい",
    "kun": "",
    "english": "Apprehend, Chase",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Apprehend、Chase"
  },
  {
    "char": "補",
    "on": "ほ",
    "kun": "おぎな.う",
    "english": "Supplement, Supply, Make Good, Offset, Compensate, Assistant, Learner",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 12,
    "myanmar": "ပေါင်းထည့်、ပေးအပ်သည်、ပြုပြင်、ချိန်ညှိ、အမoenix、အကူအညီ、သင်ယူသူ"
  },
  {
    "char": "候",
    "on": "こう",
    "kun": "そうろう",
    "english": "Climate, Season, Weather, Wait For, Expect",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 10,
    "myanmar": "Climate、Season、Weather、Wait For、Expect"
  },
  {
    "char": "構",
    "on": "こう",
    "kun": "かま.える、かま.う",
    "english": "Posture, Build, Pretend",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 14,
    "myanmar": "Posture、တည်ဆောက်、အလိုမရှိဘဲ"
  },
  {
    "char": "模",
    "on": "も、ぼ",
    "kun": "",
    "english": "Imitation, Copy, Mock",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 14,
    "myanmar": "Imitation、ကူးယူ、Mock"
  },
  {
    "char": "捕",
    "on": "ほ",
    "kun": "と.らえる、と.らわれる、と.る、とら.える、とら.われる、つか.まえる、つか.まる",
    "english": "Catch, Capture",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Catch、သိမ်းပိုက်"
  },
  {
    "char": "鮮",
    "on": "せん",
    "kun": "あざ.やか",
    "english": "Fresh, Vivid, Clear, Brilliant, Korea",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Fresh、Vivid、Clear、Brilliant、Korea"
  },
  {
    "char": "効",
    "on": "こう",
    "kun": "き.く、ききめ、なら.う",
    "english": "Merit, Efficacy, Efficiency, Benefit",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 8,
    "myanmar": "ကျေးဇူးတော်、အောင်မြင်မှု、စွမ်းအင်း、လစာ"
  },
  {
    "char": "属",
    "on": "ぞく、しょく",
    "kun": "さかん、つく、やから",
    "english": "Belong, Genus, Subordinate Official, Affiliated",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 12,
    "myanmar": "Belong、Genus、Subordinate Official、Affiliated"
  },
  {
    "char": "慣",
    "on": "かん",
    "kun": "な.れる、な.らす",
    "english": "Accustomed, Get Used To, Become Experienced",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 14,
    "myanmar": "Accustomed、Get Used To、Become Experienced"
  },
  {
    "char": "豊",
    "on": "ほう、ぶ",
    "kun": "ゆた.か、とよ",
    "english": "Bountiful, Excellent, Rich",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 13,
    "myanmar": "အလွန်အလန်းကြီး、အလွန်အလန်းကြီး、အလွန်က"
  },
  {
    "char": "満",
    "on": "まん、ばん",
    "kun": "み.ちる、み.つ、み.たす",
    "english": "Full, Fullness, Enough, Satisfy",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 12,
    "myanmar": "ပြည့်စုံ、Fullness、လုံးဝ、Satisfy"
  },
  {
    "char": "肥",
    "on": "ひ",
    "kun": "こ.える、こえ、こ.やす、こ.やし、ふと.る",
    "english": "Fertilizer, Get Fat, Fertile, Manure, Pamper",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 8,
    "myanmar": "Fertilizer、Get Fat、Fertile、Manure、Pamper"
  },
  {
    "char": "巻",
    "on": "かん、けん",
    "kun": "ま.く、まき、ま.き",
    "english": "Scroll, Volume, Book, Part, Roll Up, Wind Up, Tie, Coil, Counter For Texts (or Book Scrolls)",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 9,
    "myanmar": "စာရွက်、အလတ်、စာ、အပိုင်း、လှန်လှုပ်、လှန်လှုပ်、ချိတ်、လှန်လှုပ်、Counter For Texts (or Book Scrolls)"
  },
  {
    "char": "捜",
    "on": "そう、しゅ、しゅう",
    "kun": "さが.す",
    "english": "Search, Look For, Locate",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 10,
    "myanmar": "ရှာ、ရှာ、ရှာ"
  },
  {
    "char": "絞",
    "on": "こう",
    "kun": "しぼ.る、し.める、し.まる",
    "english": "Strangle, Constrict, Wring",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Strangle、Constrict、Wring"
  },
  {
    "char": "輩",
    "on": "はい",
    "kun": "-ばら、やから、やかい、ともがら",
    "english": "Comrade, Fellow, People, Companions",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Comrade、Fellow、People、Companions"
  },
  {
    "char": "隠",
    "on": "いん、おん",
    "kun": "かく.す、かく.し、かく.れる、かか.す、よ.る",
    "english": "Conceal, Hide, Cover",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "ဝှက်、ဝှက်、ဖုံးကွယ်"
  },
  {
    "char": "掛",
    "on": "かい、けい",
    "kun": "か.ける、-か.ける、か.け、-か.け、-が.け、か.かる、-か.かる、-が.かる、か.かり、-が.かり、かかり、-がかり",
    "english": "Hang, Suspend, Depend, Arrive At, Tax, Pour",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Hang、Suspend、မှန်ကန်、Arrive At、အခွန်、Pour"
  },
  {
    "char": "替",
    "on": "たい",
    "kun": "か.える、か.え-、か.わる",
    "english": "Exchange, Spare, Substitute, Per-",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 12,
    "myanmar": "အစားထိုး、အချိန်မှာ、အစားထိုး、Per-"
  },
  {
    "char": "居",
    "on": "きょ、こ",
    "kun": "い.る、-い、お.る",
    "english": "Reside, To Be, Exist, Live With",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 8,
    "myanmar": "နေထိုင်သည်、To Be、Exist、Live With"
  },
  {
    "char": "造",
    "on": "ぞう",
    "kun": "つく.る、つく.り、-づく.り",
    "english": "Create, Make, Structure, Physique",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 10,
    "myanmar": "ဖန်တီး、ပြုလုပ်、အဆစ်အစဉ်、ခန္ဓာကိုယ်"
  },
  {
    "char": "授",
    "on": "じゅ",
    "kun": "さず.ける、さず.かる",
    "english": "Impart, Instruct, Grant, Confer",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 11,
    "myanmar": "Impart、Instruct、Grant、ဆု"
  },
  {
    "char": "印",
    "on": "いん",
    "kun": "しるし、-じるし、しる.す",
    "english": "Stamp, Seal, Mark, Imprint, Symbol, Emblem, Trademark, Evidence, Souvenir, India",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 6,
    "myanmar": "အကြီးအလေးကြီး、အကြီးအလေးကြီး、မှတ်ချက်、အရင်း、သင်္ကေတ、သင်္ကေတ、အမှတ်တံဆိပ်、သက်သေခံ、မှတ်တမ်း、အိန္ဒိယ"
  },
  {
    "char": "創",
    "on": "そう、しょう",
    "kun": "つく.る、はじ.める、きず、けず.しける",
    "english": "Genesis, Wound, Injury, Hurt, Start, Originate",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 12,
    "myanmar": "Genesis、Wound、Injury、ထိခိုက်、စတ်、Originate"
  },
  {
    "char": "復",
    "on": "ふく",
    "kun": "また",
    "english": "Restore, Return To, Revert, Resume",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 12,
    "myanmar": "ပြန်လည်တည်ဆောက်、Return To、ပြန်လည်ပြောင်းလဲ、ပြန်လည်စတ်"
  },
  {
    "char": "往",
    "on": "おう",
    "kun": "い.く、いにしえ、さき.に、ゆ.く",
    "english": "Journey, Travel, Chase Away, Let Go, Going, Before, Formerly",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 8,
    "myanmar": "Journey、Travel、Chase Away、Let Go、Going、Before、Formerly"
  },
  {
    "char": "較",
    "on": "かく、こう",
    "kun": "くら.べる",
    "english": "Contrast, Compare",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Contrast、နှိုင်းယှဉ်"
  },
  {
    "char": "筆",
    "on": "ひつ",
    "kun": "ふで",
    "english": "Writing Brush, Writing, Painting Brush, Handwriting",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 12,
    "myanmar": "Writing Brush、Writing、Painting Brush、Handwriting"
  },
  {
    "char": "鉛",
    "on": "えん",
    "kun": "なまり",
    "english": "Lead",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "းဆောင်"
  },
  {
    "char": "貯",
    "on": "ちょ",
    "kun": "た.める、たくわ.える",
    "english": "Savings, Store, Lay In, Keep, Wear Mustache",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 12,
    "myanmar": "ငွေရှား、သိုလှောင်သည်、သိုလှောင်သည်、ထိန်းသိမ်း、Wear Mustache"
  },
  {
    "char": "故",
    "on": "こ",
    "kun": "ゆえ、ふる.い、もと",
    "english": "Happenstance, Especially, Intentionally, Reason, Cause, Circumstances, The Late, Therefore, Consequently",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 9,
    "myanmar": "Happenstance、Especially、Intentionally、အကြောင်းရင်း、အကြောင်းရင်း、Circumstances、The Late、ထို့ကြောင့်、ထို့ကြောင့်"
  },
  {
    "char": "障",
    "on": "しょう",
    "kun": "さわ.る",
    "english": "Hinder, Hurt, Harm",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 14,
    "myanmar": "Hinder、ထိခိုက်、Harm"
  },
  {
    "char": "従",
    "on": "じゅう、しょう、じゅ",
    "kun": "したが.う、したが.える、より",
    "english": "Accompany, Obey, Submit To, Comply, Follow, Secondary, Incidental, Subordinate",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 10,
    "myanmar": "Accompany、လိုက်、Submit To、လိုက်、လိုက်、Secondary、Incidental、Subordinate"
  },
  {
    "char": "我",
    "on": "が",
    "kun": "われ、わ、わ.が-、わが-",
    "english": "Ego, I, Selfish, Our, Oneself",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 7,
    "myanmar": "Ego、I、Selfish、Our、Oneself"
  },
  {
    "char": "激",
    "on": "げき",
    "kun": "はげ.しい",
    "english": "Violent, Get Excited, Enraged, Chafe, Incite",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 16,
    "myanmar": "အကြမ်းဖက်、Get Excited、Enraged、Chafe、Incite"
  },
  {
    "char": "刺",
    "on": "し",
    "kun": "さ.す、さ.さる、さ.し、さし、とげ",
    "english": "Thorn, Pierce, Stab, Prick, Sting, Calling Card",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Thorn、Pierce、Stab、Prick、Sting、Calling Card"
  },
  {
    "char": "励",
    "on": "れい",
    "kun": "はげ.む、はげ.ます",
    "english": "Encourage, Be Diligent, Inspire",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Encourage、Be Diligent、Inspire"
  },
  {
    "char": "討",
    "on": "とう",
    "kun": "う.つ",
    "english": "Chastise, Attack, Defeat, Destroy, Conquer",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 10,
    "myanmar": "Chastise、တိုက်ခိုက်、Defeat、ဖျက်ဆီး、Conquer"
  },
  {
    "char": "郵",
    "on": "ゆう",
    "kun": "",
    "english": "Mail, Stagecoach Stop",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 11,
    "myanmar": "စာတိုက်、Stagecoach Stop"
  },
  {
    "char": "針",
    "on": "しん",
    "kun": "はり",
    "english": "Needle, Pin, Staple, Stinger",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 10,
    "myanmar": "အကြီးအလေးကြီး、အကြီးအလေးကြီး、စက်ဝိုင်းဆွဲ、အကြီးအလေးကြီး"
  },
  {
    "char": "徴",
    "on": "ちょう、ち",
    "kun": "しるし",
    "english": "Indications, Sign, Omen, Symptom, Collect, Seek, Refer To, Question",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Indications、လက်မှတ်、Omen、Symptom、Collect、Seek、Refer To、မေးခွန်း"
  },
  {
    "char": "怪",
    "on": "かい、け",
    "kun": "あや.しい、あや.しむ",
    "english": "Suspicious, Mystery, Apparition",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Suspicious、Mystery、Apparition"
  },
  {
    "char": "獣",
    "on": "じゅう",
    "kun": "けもの、けだもの",
    "english": "Animal, Beast",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "သတ္တဝါ、Beast"
  },
  {
    "char": "突",
    "on": "とつ、か",
    "kun": "つ.く",
    "english": "Stab, Protruding, Thrust, Pierce, Prick, Collision, Sudden",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Stab、Protruding、Thrust、Pierce、Prick、Collision、Sudden"
  },
  {
    "char": "菓",
    "on": "か",
    "kun": "",
    "english": "Candy, Cakes, Fruit",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 11,
    "myanmar": "ကြီးကြပ်သော、ကြီးကြပ်သော、သီးနှံ"
  },
  {
    "char": "河",
    "on": "か",
    "kun": "かわ",
    "english": "River",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 8,
    "myanmar": "မြစ်"
  },
  {
    "char": "振",
    "on": "しん",
    "kun": "ふ.る、ぶ.る、ふ.り、-ぶ.り、ふ.るう",
    "english": "Shake, Wave, Wag, Swing",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "လှုပ်ခြင်း、Wave、Wag、Swing"
  },
  {
    "char": "汗",
    "on": "かん",
    "kun": "あせ",
    "english": "Sweat, Perspire",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Sweat、Perspire"
  },
  {
    "char": "豚",
    "on": "とん",
    "kun": "ぶた",
    "english": "Pork, Pig",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Pork、Pig"
  },
  {
    "char": "再",
    "on": "さい、さ",
    "kun": "ふたた.び",
    "english": "Again, Twice, Second Time",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 6,
    "myanmar": "ပြန်လည်、နှစ်ကြိမ်、Second Time"
  },
  {
    "char": "接",
    "on": "せつ、しょう",
    "kun": "つ.ぐ",
    "english": "Touch, Contact, Adjoin, Piece Together",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 11,
    "myanmar": "ထိ、ဆက်သွယ်、အနီးကပ်သည်、ပေါင်းစပ်"
  },
  {
    "char": "独",
    "on": "どく、とく",
    "kun": "ひと.り",
    "english": "Single, Alone, Spontaneously, Germany",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 9,
    "myanmar": "Single、Alone、Spontaneously、Germany"
  },
  {
    "char": "占",
    "on": "せん",
    "kun": "し.める、うらな.う",
    "english": "Fortune-telling, Divining, Forecasting, Occupy, Hold, Have, Get, Take",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 5,
    "myanmar": "ကံကြမ္မာ、ကံကြမ္မာ、ခန့်ခံစဉ်း、သိမ်းပိုက်、ကိုင်、Have、Get、ယူ"
  },
  {
    "char": "招",
    "on": "しょう",
    "kun": "まね.く",
    "english": "Beckon, Invite, Summon, Engage",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 8,
    "myanmar": "Beckon、Invite、Summon、Engage"
  },
  {
    "char": "段",
    "on": "だん、たん",
    "kun": "",
    "english": "Grade, Steps, Stairs",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 9,
    "myanmar": "Grade、Steps、Stairs"
  },
  {
    "char": "胃",
    "on": "い",
    "kun": "",
    "english": "Stomach, Paunch, Crop, Craw",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 9,
    "myanmar": "အစိတ်အပိုင်း、အစိတ်အပိုင်း、အစိတ်အပိုင်း、အစိတ်အပိုင်း"
  },
  {
    "char": "腹",
    "on": "ふく",
    "kun": "はら",
    "english": "Abdomen, Belly, Stomach",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 13,
    "myanmar": "Abdomen、Belly、အစိတ်အပိုင်း"
  },
  {
    "char": "痛",
    "on": "つう",
    "kun": "いた.い、いた.む、いた.ましい、いた.める",
    "english": "Pain, Hurt, Damage, Bruise",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 12,
    "myanmar": "Pain、ထိခိုက်、ပျက်စီး、Bruise"
  },
  {
    "char": "退",
    "on": "たい",
    "kun": "しりぞ.く、しりぞ.ける、ひ.く、の.く、の.ける、ど.く",
    "english": "Retreat, Withdraw, Retire, Resign, Repel, Expel, Reject",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 9,
    "myanmar": "Retreat、Withdraw、Retire、Resign、Repel、Expel、Reject"
  },
  {
    "char": "屈",
    "on": "くつ",
    "kun": "かが.む、かが.める",
    "english": "Yield, Bend, Flinch, Submit",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Yield、Bend、Flinch、Submit"
  },
  {
    "char": "悩",
    "on": "のう",
    "kun": "なや.む、なや.ます、なや.ましい、なやみ",
    "english": "Trouble, Worry, In Pain, Distress, Illness",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Trouble、Worry、In Pain、Distress、Illness"
  },
  {
    "char": "暇",
    "on": "か",
    "kun": "ひま、いとま",
    "english": "Spare Time, Rest, Leisure, Time, Leave Of Absence",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Spare Time、နားလည်း、Leisure、အချိန်、Leave Of Absence"
  },
  {
    "char": "織",
    "on": "しょく、しき",
    "kun": "お.る、お.り、おり、-おり、-お.り",
    "english": "Weave, Fabric",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 18,
    "myanmar": "Weave、Fabric"
  },
  {
    "char": "貸",
    "on": "たい",
    "kun": "か.す、か.し-、かし-",
    "english": "Lend",
    "jlpt_new": 4,
    "grade": 5,
    "strokes": 12,
    "myanmar": "Lend"
  },
  {
    "char": "迷",
    "on": "めい",
    "kun": "まよ.う",
    "english": "Astray, Be Perplexed, In Doubt, Lost, Err, Illusion",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 9,
    "myanmar": "Astray、Be Perplexed、In Doubt、Lost、Err、Illusion"
  },
  {
    "char": "惑",
    "on": "わく",
    "kun": "まど.う",
    "english": "Beguile, Delusion, Perplexity",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Beguile、Delusion、Perplexity"
  },
  {
    "char": "誘",
    "on": "ゆう",
    "kun": "さそ.う、いざな.う",
    "english": "Entice, Lead, Tempt, Invite, Ask, Call For, Seduce, Allure",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Entice、းဆောင်、Tempt、Invite、မေးသည်、Call For、လှည့်ဖြားသည်、Allure"
  },
  {
    "char": "就",
    "on": "しゅう、じゅ",
    "kun": "つ.く、つ.ける",
    "english": "Concerning, Settle, Take Position, Depart, Study, Per",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 12,
    "myanmar": "Concerning、Settle、Take Position、Depart、Study、Per"
  },
  {
    "char": "訪",
    "on": "ほう",
    "kun": "おとず.れる、たず.ねる、と.う",
    "english": "Call On, Visit, Look Up, Offer Sympathy",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 11,
    "myanmar": "Call On、သွားလာသည်、Look Up、Offer Sympathy"
  },
  {
    "char": "怒",
    "on": "ど、ぬ",
    "kun": "いか.る、おこ.る",
    "english": "Angry, Be Offended",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 9,
    "myanmar": "စွဲ、Be Offended"
  },
  {
    "char": "昇",
    "on": "しょう",
    "kun": "のぼ.る",
    "english": "Rise Up",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 8,
    "myanmar": "တက်လာ"
  },
  {
    "char": "眠",
    "on": "みん",
    "kun": "ねむ.る、ねむ.い",
    "english": "Sleep, Die, Sleepy",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 10,
    "myanmar": "အိပ်、သေ、Sleepy"
  },
  {
    "char": "睡",
    "on": "すい",
    "kun": "ねむ.る、ねむ.い",
    "english": "Drowsy, Sleep, Die",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Drowsy、အိပ်、သေ"
  },
  {
    "char": "症",
    "on": "しょう",
    "kun": "",
    "english": "Symptoms, Illness",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Symptoms、Illness"
  },
  {
    "char": "締",
    "on": "てい",
    "kun": "し.まる、し.まり、し.める、-し.め、-じ.め",
    "english": "Tighten, Tie, Shut, Lock, Fasten",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Tighten、ချိတ်、Shut、Lock、Fasten"
  },
  {
    "char": "迫",
    "on": "はく",
    "kun": "せま.る",
    "english": "Urge, Force, Imminent, Spur On",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Urge、အား、Imminent、Spur On"
  },
  {
    "char": "靴",
    "on": "か",
    "kun": "くつ",
    "english": "Shoes",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Shoes"
  },
  {
    "char": "濃",
    "on": "のう",
    "kun": "こ.い",
    "english": "Concentrated, Thick, Dark, Undiluted",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Concentrated、ထူ、ှောင်、Undiluted"
  },
  {
    "char": "端",
    "on": "たん",
    "kun": "はし、は、はた、-ばた、はな",
    "english": "Edge, Origin, End, Point, Border, Verge, Cape",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Edge、Origin、အဆုံး、Point、အကန့်、Verge、Cape"
  },
  {
    "char": "極",
    "on": "きょく、ごく",
    "kun": "きわ.める、きわ.まる、きわ.まり、きわ.み、き.める、-ぎ.め、き.まる",
    "english": "Poles, Settlement, Conclusion, End, Highest Rank, Electric Poles, Very, Extremely, Most, Highly, 10**48",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 12,
    "myanmar": "အလျား、ဆ settling、အဆုံးသတ်、အဆုံး、အမြင့်ဆုံးအဆင့်、ျှပ်စစ်အလျား、အလွန်အလန်းကြီး、အလွန်အလန်းကြီး、အားလုံးဆုံး、အလွန်အလန်းကြီး、10**48"
  },
  {
    "char": "途",
    "on": "と",
    "kun": "みち",
    "english": "Route, Way, Road",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Route、လမ်း、လမ်း"
  },
  {
    "char": "健",
    "on": "けん",
    "kun": "すこ.やか",
    "english": "Healthy, Health, Strength, Persistence",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 11,
    "myanmar": "ကျန်းမာရေး、Health、အား、Persistence"
  },
  {
    "char": "康",
    "on": "こう",
    "kun": "",
    "english": "Ease, Peace",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 11,
    "myanmar": "Ease、ငြိမ်ချမ်း"
  },
  {
    "char": "郎",
    "on": "ろう、りょう",
    "kun": "おとこ",
    "english": "Son, Counter For Sons",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Son、Counter For Sons"
  },
  {
    "char": "給",
    "on": "きゅう",
    "kun": "たま.う、たも.う、-たま.え",
    "english": "Salary, Wage, Gift, Allow, Grant, Bestow On",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 12,
    "myanmar": "Salary、Wage、Gift、ွင့်ပြု、Grant、Bestow On"
  },
  {
    "char": "逆",
    "on": "ぎゃく、げき",
    "kun": "さか、さか.さ、さか.らう",
    "english": "Inverted, Reverse, Opposite, Wicked",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 9,
    "myanmar": "ပြန်လည်ပြောင်းလဲ、ပြန်လည်ပြောင်းလဲ、ဆန့်ကျင်、ဆိုးသော"
  },
  {
    "char": "巨",
    "on": "きょ",
    "kun": "",
    "english": "Gigantic, Big, Large, Great",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 5,
    "myanmar": "အလွန်ကြီး、ကြီး、ကြီးစာ、ကြီးစာ"
  },
  {
    "char": "庫",
    "on": "こ、く",
    "kun": "くら",
    "english": "Warehouse, Storehouse",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 10,
    "myanmar": "ကျွန်းခန်း、ကျွန်းခန်း"
  },
  {
    "char": "児",
    "on": "じ、に、げい",
    "kun": "こ、-こ、-っこ",
    "english": "Newborn Babe, Child, Young Of Animals",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 7,
    "myanmar": "Newborn Babe、ကလေး、Young Of Animals"
  },
  {
    "char": "冷",
    "on": "れい",
    "kun": "つめ.たい、ひ.える、ひ.や、ひ.ややか、ひ.やす、ひ.やかす、さ.める、さ.ます",
    "english": "Cool, Cold (beer, Person), Chill",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 7,
    "myanmar": "အခြောက်、Cold (beer、Person)、Chill"
  },
  {
    "char": "凍",
    "on": "とう",
    "kun": "こお.る、こご.える、こご.る、い.てる、し.みる",
    "english": "Frozen, Congeal, Refrigerate",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Frozen、Congeal、Refrigerate"
  },
  {
    "char": "幼",
    "on": "よう",
    "kun": "おさな.い",
    "english": "Infancy, Childhood",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 5,
    "myanmar": "Infancy、Childhood"
  },
  {
    "char": "稚",
    "on": "ち、じ",
    "kun": "いとけない、おさない、おくて、おでる",
    "english": "Immature, Young",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Immature、လူငယ်"
  },
  {
    "char": "処",
    "on": "しょ",
    "kun": "ところ、-こ、お.る",
    "english": "Dispose, Manage, Deal With, Sentence, Condemn, Act, Behave, Place",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 5,
    "myanmar": "Dispose、စီမံ、Deal With、Sentence、Condemn、Act、Behave、Place"
  },
  {
    "char": "博",
    "on": "はく、ばく",
    "kun": "",
    "english": "Dr., Command, Esteem, Win Acclaim, Ph.d., Exposition, Fair",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 12,
    "myanmar": "Dr.、အမိန့်、Esteem、Win Acclaim、Ph.d.、Exposition、Fair"
  },
  {
    "char": "清",
    "on": "せい、しょう、しん",
    "kun": "きよ.い、きよ.まる、きよ.める",
    "english": "Pure, Purify, Cleanse, Exorcise, Manchu Dynasty",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 11,
    "myanmar": "သန့်ရှင်းသော、သန့်ရှင်းသည်、သန့်ရှင်းသည်、ပြင်းထန်သည်、Manchu Dynasty"
  },
  {
    "char": "潔",
    "on": "けつ",
    "kun": "いさぎよ.い",
    "english": "Undefiled, Pure, Clean, Righteous, Gallant",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 15,
    "myanmar": "Undefiled、သန့်ရှင်းသော、သန့်、Righteous、Gallant"
  },
  {
    "char": "録",
    "on": "ろく",
    "kun": "しる.す、と.る",
    "english": "Record",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 16,
    "myanmar": "မှတ်တမ်း"
  },
  {
    "char": "隊",
    "on": "たい",
    "kun": "",
    "english": "Regiment, Party, Company, Squad",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 12,
    "myanmar": "Regiment、ပါတီ、Company、Squad"
  },
  {
    "char": "修",
    "on": "しゅう、しゅ",
    "kun": "おさ.める、おさ.まる",
    "english": "Discipline, Conduct Oneself Well, Study, Master",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 10,
    "myanmar": "Discipline、Conduct Oneself Well、Study、Master"
  },
  {
    "char": "券",
    "on": "けん",
    "kun": "",
    "english": "Ticket",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 8,
    "myanmar": "လက်မှတ်"
  },
  {
    "char": "婦",
    "on": "ふ",
    "kun": "よめ",
    "english": "Lady, Woman, Wife, Bride",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 11,
    "myanmar": "Lady、အမျိုးသမီး、Wife、Bride"
  },
  {
    "char": "奇",
    "on": "き",
    "kun": "く.しき、あや.しい、くし、めずら.しい",
    "english": "Strange, Strangeness, Curiosity",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Strange、Strangeness、Curiosity"
  },
  {
    "char": "妙",
    "on": "みょう、びょう",
    "kun": "たえ",
    "english": "Exquisite, Strange, Queer, Mystery, Miracle, Excellent, Delicate, Charming",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Exquisite、Strange、Queer、Mystery、Miracle、အလွန်အလန်းကြီး、Delicate、Charming"
  },
  {
    "char": "麗",
    "on": "れい",
    "kun": "うるわ.しい、うら.らか",
    "english": "Lovely, Beautiful, Graceful, Resplendent",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 19,
    "myanmar": "Lovely、လှပ、Graceful、Resplendent"
  },
  {
    "char": "微",
    "on": "び",
    "kun": "かす.か",
    "english": "Delicate, Minuteness, Insignificance",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Delicate、Minuteness、Insignificance"
  },
  {
    "char": "益",
    "on": "えき、やく",
    "kun": "ま.す",
    "english": "Benefit, Gain, Profit, Advantage",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 10,
    "myanmar": "လစာ、Gain、Profit、Advantage"
  },
  {
    "char": "移",
    "on": "い",
    "kun": "うつ.る、うつ.す",
    "english": "Shift, Move, Change, Drift, Catch (cold, Fire), Pass Into",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 11,
    "myanmar": "Shift、ရွှေ့、ပြောင်း、Drift、Catch (cold、Fire)、Pass Into"
  },
  {
    "char": "程",
    "on": "てい",
    "kun": "ほど、-ほど",
    "english": "Extent, Degree, Law, Formula, Distance, Limits, Amount",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 12,
    "myanmar": "Extent、Degree、ဥပဒေ、Formula、Distance、ကန့်、ပမာဏ"
  },
  {
    "char": "精",
    "on": "せい、しょう",
    "kun": "しら.げる、くわ.しい",
    "english": "Refined, Ghost, Fairy, Energy, Vitality, Semen, Excellence, Purity, Skill",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 14,
    "myanmar": "Refined、Ghost、Fairy、စွမ်းအင်း、Vitality、Semen、Excellence、Purity、ကျွမ်းကျင်"
  },
  {
    "char": "絶",
    "on": "ぜつ",
    "kun": "た.える、た.やす、た.つ",
    "english": "Discontinue, Sever, Cut Off, Abstain, Interrupt, Suppress, Be Beyond, Without Match, Peerless, Unparalleled",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 12,
    "myanmar": "Discontinue、Sever、Cut Off、Abstain、Interrupt、Suppress、Be Beyond、Without Match、Peerless、Unparalleled"
  },
  {
    "char": "並",
    "on": "へい、ほう",
    "kun": "な.み、なみ、なら.べる、なら.ぶ、なら.びに",
    "english": "Row, And, Besides, As Well As, Line Up, Rank With, Rival, Equal",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 8,
    "myanmar": "တန်းကြီး、နှင့်、အပြင်、နှင့်အတူ、တန်းကြီး、တန်းကြီး、ပြိုင်ဘက်、ညီမျှ"
  },
  {
    "char": "憲",
    "on": "けん",
    "kun": "",
    "english": "Constitution, Law",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 16,
    "myanmar": "Constitution、ဥပဒေ"
  },
  {
    "char": "衆",
    "on": "しゅう、しゅ",
    "kun": "おお.い",
    "english": "Masses, Great Numbers, Multitude, Populace",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 12,
    "myanmar": "Masses、Great Numbers、Multitude、Populace"
  },
  {
    "char": "傘",
    "on": "さん",
    "kun": "かさ",
    "english": "Umbrella",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Umbrella"
  },
  {
    "char": "浜",
    "on": "ひん",
    "kun": "はま",
    "english": "Seacoast, Beach, Seashore",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Seacoast、ကမ်းခြေ、Seashore"
  },
  {
    "char": "撃",
    "on": "げき",
    "kun": "う.つ",
    "english": "Beat, Attack, Defeat, Conquer",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Beat、တိုက်ခိုက်、Defeat、Conquer"
  },
  {
    "char": "攻",
    "on": "こう",
    "kun": "せ.める",
    "english": "Aggression, Attack, Criticize, Polish",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Aggression、တိုက်ခိုက်、Criticize、သန့်ရှင်းသည်"
  },
  {
    "char": "監",
    "on": "かん",
    "kun": "",
    "english": "Oversee, Official, Govt Office, Rule, Administer",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Oversee、Official、Govt Office、စည်းကမ်း、Administer"
  },
  {
    "char": "杯",
    "on": "はい",
    "kun": "さかずき",
    "english": "Counter For Cupfuls, Wine Glass, Glass, Toast",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Counter For Cupfuls、Wine Glass、Glass、Toast"
  },
  {
    "char": "乾",
    "on": "かん、けん",
    "kun": "かわ.く、かわ.かす、ほ.す、ひ.る、いぬい",
    "english": "Drought, Dry, Dessicate, Drink Up, Heaven, Emperor",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Drought、Dry、Dessicate、Drink Up、ကမ္ဘာ、Emperor"
  },
  {
    "char": "催",
    "on": "さい",
    "kun": "もよう.す、もよお.す",
    "english": "Sponsor, Hold (a Meeting), Give (a Dinner)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Sponsor、Hold (a Meeting)、Give (a Dinner)"
  },
  {
    "char": "促",
    "on": "そく",
    "kun": "うなが.す",
    "english": "Stimulate, Urge, Press, Demand, Incite",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Stimulate、Urge、Press、Demand、Incite"
  },
  {
    "char": "欧",
    "on": "おう",
    "kun": "うた.う、は.く",
    "english": "Europe",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 8,
    "myanmar": "ဥရောပ"
  },
  {
    "char": "江",
    "on": "こう",
    "kun": "え",
    "english": "Creek, Inlet, Bay",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Creek、ဝင်ပေါက်မြစ်、သမုဒ္ဒရာ"
  },
  {
    "char": "請",
    "on": "せい、しん、しょう",
    "kun": "こ.う、う.ける",
    "english": "Solicit, Invite, Ask",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Solicit、Invite、မေးသည်"
  },
  {
    "char": "雄",
    "on": "ゆう",
    "kun": "お-、おす、おん",
    "english": "Masculine, Male, Hero, Leader, Superiority, Excellence",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Masculine、Male、Hero、ဦးဆောင်、Superiority、Excellence"
  },
  {
    "char": "韓",
    "on": "かん",
    "kun": "から、いげた",
    "english": "Korea",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Korea"
  },
  {
    "char": "壊",
    "on": "かい、え",
    "kun": "こわ.す、こわ.れる、やぶ.る",
    "english": "Demolition, Break, Destroy",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Demolition、Break、ဖျက်ဆီး"
  },
  {
    "char": "診",
    "on": "しん",
    "kun": "み.る",
    "english": "Checkup, Seeing, Diagnose, Examine",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Checkup、Seeing、Diagnose、စစ်ဆေး"
  },
  {
    "char": "閣",
    "on": "かく",
    "kun": "",
    "english": "Tower, Tall Building, Palace",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 14,
    "myanmar": "တောင်တန်း、Tall Building、Palace"
  },
  {
    "char": "僚",
    "on": "りょう",
    "kun": "",
    "english": "Colleague, Official, Companion",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Colleague、Official、Companion"
  },
  {
    "char": "積",
    "on": "せき",
    "kun": "つ.む、-づ.み、つ.もる、つ.もり",
    "english": "Volume, Product (x*y), Acreage, Contents, Pile Up, Stack, Load, Amass",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 16,
    "myanmar": "အလတ်、Product (x*y)、Acreage、Contents、Pile Up、Stack、Load、Amass"
  },
  {
    "char": "督",
    "on": "とく",
    "kun": "",
    "english": "Coach, Command, Urge, Lead, Supervise",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Coach、အမိန့်、Urge、းဆောင်、Supervise"
  },
  {
    "char": "臣",
    "on": "しん、じん",
    "kun": "",
    "english": "Retainer, Subject",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 7,
    "myanmar": "Retainer、Subject"
  },
  {
    "char": "略",
    "on": "りゃく",
    "kun": "ほぼ、はぶ.く、おか.す、おさ.める、はかりごと、はか.る",
    "english": "Abbreviation, Omission, Outline, Shorten, Capture, Plunder",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 11,
    "myanmar": "အတိုကောက်、ကျော်လွှား、အကြံပေးချက်、တိုတိုင်、သိမ်းပိုက်、လုယူ"
  },
  {
    "char": "航",
    "on": "こう",
    "kun": "",
    "english": "Navigate, Sail, Cruise, Fly",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 10,
    "myanmar": "ခြေလှမ်း、လှေလှန်လှုပ်、လှေလှန်လှုပ်、လွှတ်တင်"
  },
  {
    "char": "寄",
    "on": "き",
    "kun": "よ.る、-よ.り、よ.せる",
    "english": "Draw Near, Stop In, Bring Near, Gather, Collect, Send, Forward",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 11,
    "myanmar": "Draw Near、Stop In、Bring Near、စုဆည်း、Collect、ပို့、အရှေ့"
  },
  {
    "char": "板",
    "on": "はん、ばん",
    "kun": "いた",
    "english": "Plank, Board, Plate, Stage",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 8,
    "myanmar": "အဆစ်、အဆစ်、ဖလား、အဆင့်"
  },
  {
    "char": "街",
    "on": "がい、かい",
    "kun": "まち",
    "english": "Boulevard, Street, Town",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 12,
    "myanmar": "Boulevard、Street、မြို့"
  },
  {
    "char": "宗",
    "on": "しゅう、そう",
    "kun": "むね",
    "english": "Religion, Sect, Denomination, Main Point, Origin, Essence",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 8,
    "myanmar": "Religion、Sect、Denomination、Main Point、Origin、Essence"
  },
  {
    "char": "緊",
    "on": "きん",
    "kun": "し.める、し.まる",
    "english": "Tense, Solid, Hard, Reliable, Tight",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Tense、Solid、ခက်ခဲ、Reliable、Tight"
  },
  {
    "char": "娘",
    "on": "じょう",
    "kun": "むすめ、こ",
    "english": "Daughter, Girl",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Daughter、Girl"
  },
  {
    "char": "宴",
    "on": "えん",
    "kun": "うたげ",
    "english": "Banquet, Feast, Party",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Banquet、Feast、ပါတီ"
  },
  {
    "char": "怖",
    "on": "ふ、ほ",
    "kun": "こわ.い、こわ.がる、お.じる、おそ.れる",
    "english": "Dreadful, Be Frightened, Fearful",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Dreadful、Be Frightened、Fearful"
  },
  {
    "char": "恐",
    "on": "きょう",
    "kun": "おそ.れる、おそ.る、おそ.ろしい、こわ.い、こわ.がる",
    "english": "Fear, Dread, Awe",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 10,
    "myanmar": "ကြောက်、Dread、Awe"
  },
  {
    "char": "添",
    "on": "てん",
    "kun": "そ.える、そ.う",
    "english": "Annexed, Accompany, Marry, Suit, Meet, Satisfy, Attach, Append, Garnish, Imitate",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Annexed、Accompany、Marry、Suit、Meet、Satisfy、Attach、Append、Garnish、မှန်ကန်စွာ"
  },
  {
    "char": "猛",
    "on": "もう",
    "kun": "",
    "english": "Fierce, Rave, Rush, Become Furious, Wildness, Strength",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Fierce、အားကောင်းသည်、Rush、Become Furious、Wildness、အား"
  },
  {
    "char": "烈",
    "on": "れつ",
    "kun": "はげ.しい",
    "english": "Ardent, Violent, Vehement, Furious, Severe, Extreme",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Ardent、အကြမ်းဖက်、Vehement、Furious、Severe、Extreme"
  },
  {
    "char": "索",
    "on": "さく",
    "kun": "",
    "english": "Cord, Rope, Searching, Inquiring",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Cord、Rope、Searching、Inquiring"
  },
  {
    "char": "詰",
    "on": "きつ、きち",
    "kun": "つ.める、つ.め、-づ.め、つ.まる、つ.む",
    "english": "Packed, Close, Pressed, Reprove, Rebuke, Blame",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 13,
    "myanmar": "ပိတ်、ပိတ်、ဖိအားပေးသည်、နှိုက်ယှက်、နှိုက်ယှက်、နှိုက်ယှက်"
  },
  {
    "char": "詳",
    "on": "しょう",
    "kun": "くわ.しい、つまび.らか",
    "english": "Detailed, Full, Minute, Accurate, Well-informed",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Detailed、ပြည့်စုံ、Minute、Accurate、Well-informed"
  },
  {
    "char": "魅",
    "on": "み",
    "kun": "",
    "english": "Fascination, Charm, Bewitch",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Fascination、လက်မှတ်、Bewitch"
  },
  {
    "char": "渇",
    "on": "かつ",
    "kun": "かわ.く",
    "english": "Thirst, Dry Up, Parch",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Thirst、ခြောက်、ခြောက်"
  },
  {
    "char": "系",
    "on": "けい",
    "kun": "",
    "english": "Lineage, System",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 7,
    "myanmar": "Lineage、System"
  },
  {
    "char": "婚",
    "on": "こん",
    "kun": "",
    "english": "Marriage",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Marriage"
  },
  {
    "char": "遊",
    "on": "ゆう、ゆ",
    "kun": "あそ.ぶ、あそ.ばす",
    "english": "Play",
    "jlpt_new": 3,
    "grade": 3,
    "strokes": 12,
    "myanmar": "ကစား"
  },
  {
    "char": "旗",
    "on": "き",
    "kun": "はた",
    "english": "National Flag, Banner, Standard",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 14,
    "myanmar": "National Flag、Banner、Standard"
  },
  {
    "char": "照",
    "on": "しょう",
    "kun": "て.る、て.らす、て.れる",
    "english": "Illuminate, Shine, Compare, Bashful",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 13,
    "myanmar": "လင်းလင်း、လင်းလင်း、နှိုင်းယှဉ်、အရိုးအသားပြား"
  },
  {
    "char": "快",
    "on": "かい",
    "kun": "こころよ.い",
    "english": "Cheerful, Pleasant, Agreeable, Comfortable",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 7,
    "myanmar": "Cheerful、Pleasant、Agreeable、Comfortable"
  },
  {
    "char": "版",
    "on": "はん",
    "kun": "",
    "english": "Printing Block, Printing Plate, Edition, Impression, Label",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 8,
    "myanmar": "ပုံနှိုက်、ပုံနှိုက်、ထုတ်ဝေမှု、အမြင်း、လက်မှတ်"
  },
  {
    "char": "貧",
    "on": "ひん、びん",
    "kun": "まず.しい",
    "english": "Poverty, Poor",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 11,
    "myanmar": "Poverty、贫困"
  },
  {
    "char": "乏",
    "on": "ぼう",
    "kun": "とぼ.しい、とも.しい",
    "english": "Destitution, Scarce, Limited",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 4,
    "myanmar": "Destitution、Scarce、Limited"
  },
  {
    "char": "適",
    "on": "てき",
    "kun": "かな.う",
    "english": "Suitable, Occasional, Rare, Qualified, Capable",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 14,
    "myanmar": "Suitable、Occasional、ရာသီခွန်、Qualified、Capable"
  },
  {
    "char": "預",
    "on": "よ",
    "kun": "あず.ける、あず.かる",
    "english": "Deposit, Custody, Leave With, Entrust To",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 13,
    "myanmar": "အားမြစ်、ထိန်းသိမ်း、ချန်ထားသည်、Entrust To"
  },
  {
    "char": "延",
    "on": "えん",
    "kun": "の.びる、の.べる、の.べ、の.ばす",
    "english": "Prolong, Stretching",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 8,
    "myanmar": "ချဲ့ကွယ်、ဆွဲ"
  },
  {
    "char": "翌",
    "on": "よく",
    "kun": "",
    "english": "The Following, Next",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 11,
    "myanmar": "The Following、Next"
  },
  {
    "char": "覧",
    "on": "らん",
    "kun": "み.る",
    "english": "Perusal, See",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 17,
    "myanmar": "Perusal、မြင်သည်"
  },
  {
    "char": "懐",
    "on": "かい、え",
    "kun": "ふところ、なつ.かしい、なつ.かしむ、なつ.く、なつ.ける、なず.ける、いだ.く、おも.う",
    "english": "Pocket, Feelings, Heart, Yearn, Miss Someone, Become Attached To, Bosom, Breast",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Pocket、Feelings、စိတ်、Yearn、Miss Someone、Become Attached To、Bosom、Breast"
  },
  {
    "char": "押",
    "on": "おう",
    "kun": "お.す、お.し-、お.っ-、お.さえる、おさ.える",
    "english": "Push, Stop, Check, Subdue, Attach, Seize, Weight, Shove, Press, Seal, Do In Spite Of",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 8,
    "myanmar": "တွန်းပေး、ရပ်、Check、Subdue、Attach、Seize、လက်ချိန်း、Shove、Press、အကြီးအလေးကြီး、Do In Spite Of"
  },
  {
    "char": "更",
    "on": "こう",
    "kun": "さら、さら.に、ふ.ける、ふ.かす",
    "english": "Grow Late, Night Watch, Sit Up Late, Of Course, Renew, Renovate, Again, More And More, Further",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Grow Late、Night Watch、Sit Up Late、Of Course、အသစ်ပြန်လည်、Renovate、ပြန်လည်、More And More、Further"
  },
  {
    "char": "枕",
    "on": "ちん、しん",
    "kun": "まくら",
    "english": "Pillow",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Pillow"
  },
  {
    "char": "浮",
    "on": "ふ",
    "kun": "う.く、う.かれる、う.かぶ、む、う.かべる",
    "english": "Floating, Float, Rise To Surface",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Floating、Float、Rise To Surface"
  },
  {
    "char": "漏",
    "on": "ろう",
    "kun": "も.る、も.れる、も.らす",
    "english": "Leak, Escape, Time",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Leak、Escape、အချိန်"
  },
  {
    "char": "符",
    "on": "ふ",
    "kun": "",
    "english": "Token, Sign, Mark, Tally, Charm",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 11,
    "myanmar": "လက်မှတ်、လက်မှတ်、မှတ်ချက်、တန်းကြီး、လက်မှတ်"
  },
  {
    "char": "購",
    "on": "こう",
    "kun": "",
    "english": "Subscription, Buy",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Subscription、ဝယ်"
  },
  {
    "char": "越",
    "on": "えつ、おつ",
    "kun": "こ.す、-こ.す、-ご.し、こ.える、-ご.え",
    "english": "Surpass, Cross Over, Move To, Exceed, Vietnam",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Surpass、Cross Over、Move To、Exceed、Vietnam"
  },
  {
    "char": "飾",
    "on": "しょく",
    "kun": "かざ.る、かざ.り",
    "english": "Decorate, Ornament, Adorn, Embellish",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Decorate、Ornament、Adorn、Embellish"
  },
  {
    "char": "騒",
    "on": "そう",
    "kun": "さわ.ぐ、うれい、さわ.がしい",
    "english": "Boisterous, Make Noise, Clamor, Disturb, Excite",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Boisterous、Make Noise、Clamor、ချိုးဖောက်、Excite"
  },
  {
    "char": "背",
    "on": "はい",
    "kun": "せ、せい、そむ.く、そむ.ける",
    "english": "Stature, Height, Back, Behind, Disobey, Defy, Go Back On, Rebel",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 9,
    "myanmar": "Stature、Height、နောက်ဘက်、Behind、Disobey、Defy、Go Back On、Rebel"
  },
  {
    "char": "撮",
    "on": "さつ",
    "kun": "と.る、つま.む、-ど.り",
    "english": "Snapshot, Take Pictures",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Snapshot、Take Pictures"
  },
  {
    "char": "盗",
    "on": "とう",
    "kun": "ぬす.む、ぬす.み",
    "english": "Steal, Rob, Pilfer",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Steal、Rob、Pilfer"
  },
  {
    "char": "離",
    "on": "り",
    "kun": "はな.れる、はな.す",
    "english": "Detach, Separation, Disjoin, Digress",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 19,
    "myanmar": "Detach、Separation、Disjoin、Digress"
  },
  {
    "char": "融",
    "on": "ゆう",
    "kun": "と.ける、と.かす",
    "english": "Dissolve, Melt",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Dissolve、Melt"
  },
  {
    "char": "編",
    "on": "へん",
    "kun": "あ.む、-あ.み",
    "english": "Compilation, Knit, Plait, Braid, Twist, Editing, Completed Poem, Part Of A Book",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 15,
    "myanmar": "စုစည်းခြင်း、ပေါင်းစပ်သည်、ပေါင်းစပ်သည်、ပေါင်းစပ်သည်、ကိုက်ဖွဲ့、တည်းဖြတ်、ပြီးမြောက်ကဗျာ、Part Of A Book"
  },
  {
    "char": "華",
    "on": "か、け",
    "kun": "はな",
    "english": "Splendor, Flower, Petal, Shine, Luster, Ostentatious, Showy, Gay, Gorgeous",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "အလင်းရာ、ပန်း、Petal、လင်းလင်း、Luster、Ostentatious、Showy、Gay、Gorgeous"
  },
  {
    "char": "既",
    "on": "き",
    "kun": "すで.に",
    "english": "Previously, Already, Long Ago",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Previously、ပြီးပြီ、Long Ago"
  },
  {
    "char": "普",
    "on": "ふ",
    "kun": "あまね.く、あまねし",
    "english": "Universal, Wide(ly), Generally, Prussia",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 12,
    "myanmar": "အလုံးအလိုက်、Wide(ly)、အထွေထွေ、ပရူးသီရိ"
  },
  {
    "char": "豪",
    "on": "ごう",
    "kun": "えら.い",
    "english": "Overpowering, Great, Powerful, Excelling, Australia",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Overpowering、ကြီးစာ、Powerful、Excelling、Australia"
  },
  {
    "char": "鑑",
    "on": "かん",
    "kun": "かんが.みる、かがみ",
    "english": "Specimen, Take Warning From, Learn From",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 23,
    "myanmar": "Specimen、Take Warning From、Learn From"
  },
  {
    "char": "除",
    "on": "じょ、じ",
    "kun": "のぞ.く、-よ.け",
    "english": "Exclude, Division (x/3), Remove, Abolish, Cancel, Except",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 10,
    "myanmar": "Exclude、Division (x/3)、Remove、Abolish、Cancel、Except"
  },
  {
    "char": "尋",
    "on": "じん",
    "kun": "たず.ねる、ひろ",
    "english": "Inquire, Fathom, Look For",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "မေးသည်、တိုင်းတာ、ရှာ"
  },
  {
    "char": "幾",
    "on": "き",
    "kun": "いく-、いく.つ、いく.ら",
    "english": "How Many, How Much, How Far, How Long, Some, Several",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 12,
    "myanmar": "How Many、How Much、How Far、How Long、Some、များစွာ"
  },
  {
    "char": "廊",
    "on": "ろう",
    "kun": "",
    "english": "Corridor, Hall, Tower",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Corridor、Hall、တောင်တန်း"
  },
  {
    "char": "掃",
    "on": "そう、しゅ",
    "kun": "は.く",
    "english": "Sweep, Brush",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Sweep、ဖြောင့်သည်"
  },
  {
    "char": "泥",
    "on": "でい、ない、で、に",
    "kun": "どろ、なず.む",
    "english": "Mud, Mire, Adhere To, Be Attached To",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 8,
    "myanmar": "ရွှေ့ခြောက်、ရွှေ့ခြောက်、Adhere To、Be Attached To"
  },
  {
    "char": "棒",
    "on": "ぼう",
    "kun": "",
    "english": "Rod, Stick, Cane, Pole, Club, Line",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 12,
    "myanmar": "Rod、Stick、Cane、Pole、အသင်း、လိုင်း"
  },
  {
    "char": "驚",
    "on": "きょう",
    "kun": "おどろ.く、おどろ.かす",
    "english": "Wonder, Be Surprised, Frightened, Amazed",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 22,
    "myanmar": "Wonder、Be Surprised、Frightened、Amazed"
  },
  {
    "char": "嘆",
    "on": "たん",
    "kun": "なげ.く、なげ.かわしい",
    "english": "Sigh, Lament, Moan, Grieve, Sigh Of Admiration",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Sigh、Lament、Moan、Grieve、Sigh Of Admiration"
  },
  {
    "char": "倉",
    "on": "そう",
    "kun": "くら",
    "english": "Godown, Warehouse, Storehouse, Cellar, Treasury",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 10,
    "myanmar": "Godown、ကျွန်းခန်း、ကျွန်းခန်း、Cellar、Treasury"
  },
  {
    "char": "孫",
    "on": "そん",
    "kun": "まご",
    "english": "Grandchild, Descendants",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 10,
    "myanmar": "Grandchild、Descendants"
  },
  {
    "char": "巣",
    "on": "そう",
    "kun": "す、す.くう",
    "english": "Nest, Rookery, Hive, Cobweb, Den",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 11,
    "myanmar": "Nest、Rookery、Hive、Cobweb、Den"
  },
  {
    "char": "帯",
    "on": "たい",
    "kun": "お.びる、おび",
    "english": "Sash, Belt, Obi, Zone, Region",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 10,
    "myanmar": "ခါးပတ်、ခါးပတ်、ခါးပတ်、ဇုန်、ဒေသ"
  },
  {
    "char": "径",
    "on": "けい",
    "kun": "みち、こみち、さしわたし、ただちに",
    "english": "Diameter, Path, Method",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 8,
    "myanmar": "Diameter、Path、နည်းလမ်း"
  },
  {
    "char": "救",
    "on": "きゅう",
    "kun": "すく.う",
    "english": "Salvation, Save, Help, Rescue, Reclaim",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 11,
    "myanmar": "Salvation、သိမ်းဆည်း、ကူညီ、Rescue、Reclaim"
  },
  {
    "char": "散",
    "on": "さん",
    "kun": "ち.る、ち.らす、-ち.らす、ち.らかす、ち.らかる、ち.らばる、ばら、ばら.ける",
    "english": "Scatter, Disperse, Spend, Squander",
    "jlpt_new": 3,
    "grade": 4,
    "strokes": 12,
    "myanmar": "Scatter、Disperse、သုံးစွဲ、Squander"
  },
  {
    "char": "粉",
    "on": "ふん",
    "kun": "デシメートル、こ、こな",
    "english": "Flour, Powder, Dust",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 10,
    "myanmar": "Flour、Powder、Dust"
  },
  {
    "char": "脈",
    "on": "みゃく",
    "kun": "すじ",
    "english": "Vein, Pulse, Hope",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 10,
    "myanmar": "Vein、Pulse、မျှော်နိုင်သည်"
  },
  {
    "char": "菜",
    "on": "さい",
    "kun": "な",
    "english": "Vegetable, Side Dish, Greens",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 11,
    "myanmar": "ဟင်းသီးဟင်းရွက်、Side Dish、Greens"
  },
  {
    "char": "貨",
    "on": "か",
    "kun": "たから",
    "english": "Freight, Goods, Property",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 11,
    "myanmar": "တင်ပြီး、ကုန်、ပိုင်ဆိုင်မှု"
  },
  {
    "char": "陸",
    "on": "りく、ろく",
    "kun": "おか",
    "english": "Land, Six",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 11,
    "myanmar": "မြေ、ခြောက်"
  },
  {
    "char": "似",
    "on": "じ",
    "kun": "に.る、ひ.る",
    "english": "Becoming, Resemble, Counterfeit, Imitate, Suitable",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 7,
    "myanmar": "Becoming、Resemble、Counterfeit、မှန်ကန်စွာ、Suitable"
  },
  {
    "char": "均",
    "on": "きん",
    "kun": "なら.す",
    "english": "Level, Average",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 7,
    "myanmar": "အဆင့်、ပျမ်းမျှ"
  },
  {
    "char": "墓",
    "on": "ぼ",
    "kun": "はか",
    "english": "Grave, Tomb",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 13,
    "myanmar": "Grave、Tomb"
  },
  {
    "char": "富",
    "on": "ふ、ふう",
    "kun": "と.む、とみ",
    "english": "Wealth, Enrich, Abundant",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 12,
    "myanmar": "Wealth、Enrich、Abundant"
  },
  {
    "char": "徳",
    "on": "とく",
    "kun": "",
    "english": "Benevolence, Virtue, Goodness, Commanding Respect",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 14,
    "myanmar": "Benevolence、Virtue、Goodness、Commanding Respect"
  },
  {
    "char": "探",
    "on": "たん",
    "kun": "さぐ.る、さが.す",
    "english": "Grope, Search, Look For",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 11,
    "myanmar": "Grope、ရှာ、ရှာ"
  },
  {
    "char": "偵",
    "on": "てい",
    "kun": "",
    "english": "Spy",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Spy"
  },
  {
    "char": "序",
    "on": "じょ",
    "kun": "つい.で、ついで",
    "english": "Preface, Beginning, Order, Precedence, Occasion, Chance, Incidentally",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 7,
    "myanmar": "Preface、Beginning、အမိန့်、Precedence、အချိန်、Chance、Incidentally"
  },
  {
    "char": "迎",
    "on": "げい",
    "kun": "むか.える",
    "english": "Welcome, Meet, Greet",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Welcome、Meet、Greet"
  },
  {
    "char": "志",
    "on": "し",
    "kun": "シリング、こころざ.す、こころざし",
    "english": "Intention, Plan, Resolve, Aspire, Motive, Hopes, Shilling",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 7,
    "myanmar": "Intention、အစီအစဉ်、Resolve、Aspire、Motive、Hopes、Shilling"
  },
  {
    "char": "恩",
    "on": "おん",
    "kun": "",
    "english": "Grace, Kindness, Goodness, Favor, Mercy, Blessing, Benefit",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 10,
    "myanmar": "Grace、Kindness、Goodness、Favor、Mercy、Blessing、လစာ"
  },
  {
    "char": "採",
    "on": "さい",
    "kun": "と.る",
    "english": "Pick, Take, Fetch, Take Up",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 11,
    "myanmar": "ရွေးယူ、ယူ、ယူ、Take Up"
  },
  {
    "char": "桜",
    "on": "おう、よう",
    "kun": "さくら",
    "english": "Cherry",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 10,
    "myanmar": "Cherry"
  },
  {
    "char": "永",
    "on": "えい",
    "kun": "なが.い",
    "english": "Eternity, Long, Lengthy",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 5,
    "myanmar": "ထာဝရဘင်、ရှည်、ရှည်လျား"
  },
  {
    "char": "液",
    "on": "えき",
    "kun": "",
    "english": "Fluid, Liquid, Juice, Sap, Secretion",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 11,
    "myanmar": "Fluid、Liquid、သီးနှံ、Sap、Secretion"
  },
  {
    "char": "眼",
    "on": "がん、げん",
    "kun": "まなこ、め",
    "english": "Eyeball",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 11,
    "myanmar": "Eyeball"
  },
  {
    "char": "祖",
    "on": "そ",
    "kun": "",
    "english": "Ancestor, Pioneer, Founder",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 9,
    "myanmar": "Ancestor、Pioneer、Founder"
  },
  {
    "char": "績",
    "on": "せき",
    "kun": "",
    "english": "Exploits, Achievements, Unreeling Cocoons",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 17,
    "myanmar": "အောင်မြင်မှု、Achievements、Unreeling Cocoons"
  },
  {
    "char": "興",
    "on": "こう、きょう",
    "kun": "おこ.る、おこ.す",
    "english": "Entertain, Revive, Retrieve, Interest, Pleasure",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 16,
    "myanmar": "Entertain、Revive、Retrieve、Interest、Pleasure"
  },
  {
    "char": "衛",
    "on": "えい、え",
    "kun": "",
    "english": "Defense, Protection",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 16,
    "myanmar": "Defense、Protection"
  },
  {
    "char": "複",
    "on": "ふく",
    "kun": "",
    "english": "Duplicate, Double, Compound, Multiple",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 14,
    "myanmar": "ပွားလည်း、အပေါင်းနှစ်ဆင့်、ပေါင်းစပ်သည်、များစွာ"
  },
  {
    "char": "雑",
    "on": "ざつ、ぞう",
    "kun": "まじ.える、まじ.る",
    "english": "Miscellaneous",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 14,
    "myanmar": "Miscellaneous"
  },
  {
    "char": "賛",
    "on": "さん",
    "kun": "たす.ける、たた.える",
    "english": "Approve, Praise, Title Or Inscription On Picture, Assist, Agree With",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 15,
    "myanmar": "Approve、အများကြီးချီးမှု、Title Or Inscription On Picture、Assist、Agree With"
  },
  {
    "char": "酸",
    "on": "さん",
    "kun": "す.い",
    "english": "Acid, Bitterness, Sour, Tart",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 14,
    "myanmar": "အာစာနီး、Bitterness、Sour、Tart"
  },
  {
    "char": "銭",
    "on": "せん、ぜん",
    "kun": "ぜに、すき",
    "english": "Coin, .01 Yen, Money",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 14,
    "myanmar": "Coin、.01 Yen、ငွေ"
  },
  {
    "char": "飼",
    "on": "し",
    "kun": "か.う",
    "english": "Domesticate, Raise, Keep, Feed",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 13,
    "myanmar": "Domesticate、တက်လာ、ထိန်းသိမ်း、Feed"
  },
  {
    "char": "傷",
    "on": "しょう",
    "kun": "きず、いた.む、いた.める",
    "english": "Wound, Hurt, Injure, Impair, Pain, Injury, Cut, Gash, Scar, Weak Point",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 13,
    "myanmar": "Wound、ထိခိုက်、ထိခိုက်、Impair、Pain、Injury、Cut、Gash、Scar、အားနည်းနေရာ"
  },
  {
    "char": "党",
    "on": "とう",
    "kun": "なかま、むら",
    "english": "Party, Faction, Clique",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 10,
    "myanmar": "ပါတီ、အဖွဲ့、အဖွဲ့"
  },
  {
    "char": "卵",
    "on": "らん",
    "kun": "たまご",
    "english": "Egg, Ovum, Spawn, Roe",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 7,
    "myanmar": "Egg、Ovum、Spawn、Roe"
  },
  {
    "char": "厳",
    "on": "げん、ごん",
    "kun": "おごそ.か、きび.しい、いか.めしい、いつくし",
    "english": "Stern, Strictness, Severity, Rigidity",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 17,
    "myanmar": "Stern、Strictness、Severity、Rigidity"
  },
  {
    "char": "捨",
    "on": "しゃ",
    "kun": "す.てる",
    "english": "Discard, Throw Away, Abandon, Resign, Reject, Sacrifice",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 11,
    "myanmar": "ပယ်ဖျက်、Throw Away、Abandon、Resign、Reject、Sacrifice"
  },
  {
    "char": "込",
    "on": "",
    "kun": "-こ.む、こ.む、こ.み、-こ.み、こ.める",
    "english": "Crowded, Mixture, In Bulk, Included, (kokuji)",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Crowded、Mixture、In Bulk、Included、(kokuji)"
  },
  {
    "char": "密",
    "on": "みつ",
    "kun": "ひそ.か",
    "english": "Secrecy, Density (pop), Minuteness, Carefulness",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 11,
    "myanmar": "Secrecy、Density (pop)、Minuteness、Carefulness"
  },
  {
    "char": "汚",
    "on": "お",
    "kun": "けが.す、けが.れる、けが.らわしい、よご.す、よご.れる、きたな.い",
    "english": "Dirty, Pollute, Disgrace, Rape, Defile",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 6,
    "myanmar": "အစိုက်、ညစ်ညမ်း、အရာမှားသည်、အရာမှားသည်、ညစ်ညမ်း"
  },
  {
    "char": "欲",
    "on": "よく",
    "kun": "ほっ.する、ほ.しい",
    "english": "Longing, Covetousness, Greed, Passion, Desire, Craving",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 11,
    "myanmar": "Longing、Covetousness、Greed、Passion、Desire、Craving"
  },
  {
    "char": "暖",
    "on": "だん、のん",
    "kun": "あたた.か、あたた.かい、あたた.まる、あたた.める",
    "english": "Warmth",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 13,
    "myanmar": "Warmth"
  },
  {
    "char": "机",
    "on": "き",
    "kun": "つくえ",
    "english": "Desk, Table",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 6,
    "myanmar": "စားပွဲ、စားပွဲ"
  },
  {
    "char": "秘",
    "on": "ひ",
    "kun": "ひ.める、ひそ.か、かく.す",
    "english": "Secret, Conceal",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 10,
    "myanmar": "Secret、ဝှက်"
  },
  {
    "char": "訳",
    "on": "やく",
    "kun": "わけ",
    "english": "Translate, Reason, Circumstance, Case",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 11,
    "myanmar": "Translate、အကြောင်းရင်း、Circumstance、Case"
  },
  {
    "char": "染",
    "on": "せん",
    "kun": "そ.める、-ぞ.め、-ぞめ、そ.まる、し.みる、-じ.みる、し.み、-し.める",
    "english": "Dye, Color, Paint, Stain, Print",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 9,
    "myanmar": "Dye、အရောင်、Paint、Stain、ပုံနှိုက်"
  },
  {
    "char": "簡",
    "on": "かん、けん",
    "kun": "えら.ぶ、ふだ",
    "english": "Simplicity, Brevity",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 18,
    "myanmar": "ရိုးရှင်းမှု、တိုတို"
  },
  {
    "char": "閉",
    "on": "へい",
    "kun": "と.じる、と.ざす、し.める、し.まる、た.てる",
    "english": "Closed, Shut",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 11,
    "myanmar": "Closed、Shut"
  },
  {
    "char": "誌",
    "on": "し",
    "kun": "",
    "english": "Document, Records",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 14,
    "myanmar": "စာရွက်、မှတ်တမ်း"
  },
  {
    "char": "窓",
    "on": "そう、す",
    "kun": "まど、てんまど、けむだし",
    "english": "Window, Pane",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 11,
    "myanmar": "Window、Pane"
  },
  {
    "char": "否",
    "on": "ひ",
    "kun": "いな、いや",
    "english": "Negate, No, Noes, Refuse, Decline, Deny",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 7,
    "myanmar": "Negate、No、Noes、ငြင်းပယ်、Decline、Deny"
  },
  {
    "char": "筋",
    "on": "きん",
    "kun": "すじ",
    "english": "Muscle, Sinew, Tendon, Fiber, Plot, Plan, Descent",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 12,
    "myanmar": "Muscle、Sinew、Tendon、Fiber、Plot、အစီအစဉ်、Descent"
  },
  {
    "char": "垂",
    "on": "すい",
    "kun": "た.れる、た.らす、た.れ、-た.れ、なんなんと.す",
    "english": "Droop, Suspend, Hang, Slouch",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 8,
    "myanmar": "Droop、Suspend、Hang、Slouch"
  },
  {
    "char": "宝",
    "on": "ほう",
    "kun": "たから",
    "english": "Treasure, Wealth, Valuables",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 8,
    "myanmar": "Treasure、Wealth、Valuables"
  },
  {
    "char": "宣",
    "on": "せん",
    "kun": "のたま.う",
    "english": "Proclaim, Say, Announce",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 9,
    "myanmar": "ကြေငြာ、ပြောသည်、ကြေငြာ"
  },
  {
    "char": "尊",
    "on": "そん",
    "kun": "たっと.い、とうと.い、たっと.ぶ、とうと.ぶ",
    "english": "Revered, Valuable, Precious, Noble, Exalted",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 12,
    "myanmar": "Revered、Valuable、Precious、Noble、Exalted"
  },
  {
    "char": "忠",
    "on": "ちゅう",
    "kun": "",
    "english": "Loyalty, Fidelity, Faithfulness",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 8,
    "myanmar": "Loyalty、Fidelity、Faithfulness"
  },
  {
    "char": "拡",
    "on": "かく、こう",
    "kun": "ひろ.がる、ひろ.げる、ひろ.める",
    "english": "Broaden, Extend, Expand, Enlarge",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 8,
    "myanmar": "Broaden、ဆက်လက်、ချဲ့ကွယ်、Enlarge"
  },
  {
    "char": "操",
    "on": "そう、さん",
    "kun": "みさお、あやつ.る",
    "english": "Maneuver, Manipulate, Operate, Steer, Chastity, Virginity, Fidelity",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 16,
    "myanmar": "Maneuver、Manipulate、Operate、Steer、Chastity、Virginity、Fidelity"
  },
  {
    "char": "敬",
    "on": "けい、きょう",
    "kun": "うやま.う",
    "english": "Awe, Respect, Honor, Revere",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 12,
    "myanmar": "Awe、Respect、ဂုဏ်ပြု、Revere"
  },
  {
    "char": "暮",
    "on": "ぼ",
    "kun": "く.れる、く.らす",
    "english": "Evening, Twilight, Season's End, Livelihood, Make A Living, Spend Time",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 14,
    "myanmar": "ညနေခင်း、Twilight、Season's End、Livelihood、Make A Living、Spend Time"
  },
  {
    "char": "灰",
    "on": "かい",
    "kun": "はい",
    "english": "Ashes, Puckery Juice, Cremate",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 6,
    "myanmar": "ဖူးမှောင်း、Puckery Juice、လောင်း"
  },
  {
    "char": "熟",
    "on": "じゅく",
    "kun": "う.れる",
    "english": "Mellow, Ripen, Mature, Acquire Skill",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 15,
    "myanmar": "Mellow、Ripen、Mature、Acquire Skill"
  },
  {
    "char": "異",
    "on": "い",
    "kun": "こと、こと.なる、け",
    "english": "Uncommon, Different, Queerness, Strangeness, Wonderful, Curious, Unusual",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 11,
    "myanmar": "Uncommon、Different、Queerness、Strangeness、Wonderful、Curious、Unusual"
  },
  {
    "char": "皇",
    "on": "こう、おう",
    "kun": "",
    "english": "Emperor",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 9,
    "myanmar": "Emperor"
  },
  {
    "char": "盛",
    "on": "せい、じょう",
    "kun": "も.る、さか.る、さか.ん",
    "english": "Boom, Prosper, Copulate",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 11,
    "myanmar": "Boom、Prosper、Copulate"
  },
  {
    "char": "砂",
    "on": "さ、しゃ",
    "kun": "すな",
    "english": "Sand",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 9,
    "myanmar": "Sand"
  },
  {
    "char": "漠",
    "on": "ばく",
    "kun": "",
    "english": "Vague, Obscure, Desert, Wide",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Vague、Obscure、Desert、Wide"
  },
  {
    "char": "糖",
    "on": "とう",
    "kun": "",
    "english": "Sugar",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 16,
    "myanmar": "Sugar"
  },
  {
    "char": "納",
    "on": "のう、なっ、な、なん、とう",
    "kun": "おさ.める、-おさ.める、おさ.まる",
    "english": "Settlement, Obtain, Reap, Pay, Supply, Store",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 10,
    "myanmar": "ဆ settling、Obtain、Reap、ပေးသည်、ပေးအပ်သည်、သိုလှောင်သည်"
  },
  {
    "char": "肺",
    "on": "はい",
    "kun": "",
    "english": "Lungs",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 9,
    "myanmar": "Lungs"
  },
  {
    "char": "著",
    "on": "ちょ、ちゃく",
    "kun": "あらわ.す、いちじる.しい",
    "english": "Renowned, Publish, Write, Remarkable, Phenomenal, Put On, Don, Wear, Arrival, Finish (race), Counter For Suits Of Clothing, Literary Work",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 11,
    "myanmar": "နာမည်ကြီး、ထုတ်ဝေ、ရေး、အလွန်အလန်းကြီး、အလွန်အလန်းကြီး、စားထိုး、စားထိုး、စားထိုး、ရောက်မည့်အချိန်、Finish (race)、Counter For Suits Of Clothing、Literary Work"
  },
  {
    "char": "蒸",
    "on": "じょう、せい",
    "kun": "む.す、む.れる、む.らす",
    "english": "Steam, Heat, Sultry, Foment, Get Musty",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 13,
    "myanmar": "Steam、Heat、Sultry、Foment、Get Musty"
  },
  {
    "char": "蔵",
    "on": "ぞう、そう",
    "kun": "くら、おさ.める、かく.れる",
    "english": "Storehouse, Hide, Own, Have, Possess",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 15,
    "myanmar": "ကျွန်းခန်း、ဝှက်、ပိုင်ဆိုင်သည်、Have、ပိုင်ဆိုင်သည်"
  },
  {
    "char": "装",
    "on": "そう、しょう",
    "kun": "よそお.う、よそお.い",
    "english": "Attire, Dress, Pretend, Disguise, Profess",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 12,
    "myanmar": "အဝတ်အစား、အဝတ်အစား、အလိုမရှိဘဲ、ဝှက်ထုတ်、ပြောသည်"
  },
  {
    "char": "裏",
    "on": "り",
    "kun": "うら",
    "english": "Back, Amidst, In, Reverse, Inside, Palm, Sole, Rear, Lining, Wrong Side",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 13,
    "myanmar": "နောက်ဘက်、အထဲ、In、ပြန်လည်ပြောင်းလဲ、အထဲ、လက်ကောက်、လက်ခြေကျပ်、နောက်ဘက်、အထဲဖုံး、မှားနေရာ"
  },
  {
    "char": "諸",
    "on": "しょ",
    "kun": "もろ",
    "english": "Various, Many, Several, Together",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 15,
    "myanmar": "အမျိုးမျိုး、များ、များစွာ、တူတကွး"
  },
  {
    "char": "賃",
    "on": "ちん",
    "kun": "",
    "english": "Fare, Fee, Hire, Rent, Wages, Charge",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 13,
    "myanmar": "Fare、Fee、Hire、Rent、Wages、စျေး"
  },
  {
    "char": "誤",
    "on": "ご",
    "kun": "あやま.る、-あやま.る",
    "english": "Mistake, Err, Do Wrong, Mislead",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 14,
    "myanmar": "Mistake、Err、Do Wrong、Mislead"
  },
  {
    "char": "臓",
    "on": "ぞう",
    "kun": "はらわた",
    "english": "Entrails, Viscera, Bowels",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 19,
    "myanmar": "အစိတ်အပိုင်း、အစိတ်အပိုင်း、အစိတ်အပိုင်း"
  },
  {
    "char": "貴",
    "on": "き",
    "kun": "たっと.い、とうと.い、たっと.ぶ、とうと.ぶ",
    "english": "Precious, Value, Prize, Esteem, Honor",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 12,
    "myanmar": "Precious、တန်ဖိုး、ဆု、Esteem、ဂုဏ်ပြု"
  },
  {
    "char": "降",
    "on": "こう、ご",
    "kun": "お.りる、お.ろす、ふ.る、ふ.り、くだ.る、くだ.す",
    "english": "Descend, Precipitate, Fall, Surrender",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 10,
    "myanmar": "Descend、Precipitate、ကျလာ、Surrender"
  },
  {
    "char": "丼",
    "on": "とん、たん、しょう、せい",
    "kun": "どんぶり",
    "english": "Bowl, Bowl Of Food",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Bowl、Bowl Of Food"
  },
  {
    "char": "吐",
    "on": "と",
    "kun": "は.く、つ.く",
    "english": "Spit, Vomit, Belch, Confess, Tell (lies)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Spit、Vomit、Belch、Confess、Tell (lies)"
  },
  {
    "char": "奴",
    "on": "ど",
    "kun": "やつ、やっこ",
    "english": "Guy, Slave, Manservant, Fellow",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Guy、Slave、Manservant、Fellow"
  },
  {
    "char": "隷",
    "on": "れい",
    "kun": "したが.う、しもべ",
    "english": "Slave, Servant, Prisoner, Criminal, Follower",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Slave、Servant、Prisoner、Criminal、Follower"
  },
  {
    "char": "芋",
    "on": "う",
    "kun": "いも",
    "english": "Potato",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Potato"
  },
  {
    "char": "縮",
    "on": "しゅく",
    "kun": "ちぢ.む、ちぢ.まる、ちぢ.める、ちぢ.れる、ちぢ.らす",
    "english": "Shrink, Contract, Shrivel, Wrinkle, Reduce",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 17,
    "myanmar": "Shrink、Contract、Shrivel、Wrinkle、လျှော့ချ"
  },
  {
    "char": "純",
    "on": "じゅん",
    "kun": "",
    "english": "Genuine, Purity, Innocence, Net (profit)",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 10,
    "myanmar": "Genuine、Purity、Innocence、Net (profit)"
  },
  {
    "char": "縦",
    "on": "じゅう",
    "kun": "たて",
    "english": "Vertical, Length, Height, Self-indulgent, Wayward",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 16,
    "myanmar": "Vertical、Length、Height、Self-indulgent、Wayward"
  },
  {
    "char": "粋",
    "on": "すい",
    "kun": "いき",
    "english": "Chic, Style, Purity, Essence, Pith, Cream, Elite, Choice",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Chic、Style、Purity、Essence、Pith、Cream、Elite、Choice"
  },
  {
    "char": "聖",
    "on": "せい、しょう",
    "kun": "ひじり",
    "english": "Holy, Saint, Sage, Master, Priest",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 13,
    "myanmar": "Holy、Saint、Sage、Master、Priest"
  },
  {
    "char": "磁",
    "on": "じ",
    "kun": "",
    "english": "Magnet, Porcelain",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 14,
    "myanmar": "Magnet、Porcelain"
  },
  {
    "char": "紅",
    "on": "こう、く",
    "kun": "べに、くれない、あか.い",
    "english": "Crimson, Deep Red",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 9,
    "myanmar": "Crimson、Deep Red"
  },
  {
    "char": "射",
    "on": "しゃ",
    "kun": "い.る、さ.す、う.つ",
    "english": "Shoot, Shine Into, Onto, Archery",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 10,
    "myanmar": "Shoot、Shine Into、Onto、Archery"
  },
  {
    "char": "幕",
    "on": "まく、ばく",
    "kun": "とばり",
    "english": "Curtain, Bunting, Act Of Play",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 13,
    "myanmar": "Curtain、Bunting、Act Of Play"
  },
  {
    "char": "拝",
    "on": "はい",
    "kun": "おが.む、おろが.む",
    "english": "Worship, Adore, Pray To",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 8,
    "myanmar": "Worship、Adore、Pray To"
  },
  {
    "char": "薦",
    "on": "せん",
    "kun": "すす.める",
    "english": "Recommend, Mat, Advise, Encourage, Offer",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Recommend、Mat、Advise、Encourage、Offer"
  },
  {
    "char": "推",
    "on": "すい",
    "kun": "お.す",
    "english": "Conjecture, Infer, Guess, Suppose, Support, Push (for)",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 11,
    "myanmar": "Conjecture、Infer、Guess、Suppose、ထောက်ခံ、Push (for)"
  },
  {
    "char": "揮",
    "on": "き",
    "kun": "ふる.う",
    "english": "Brandish, Wave, Wag, Swing, Shake",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 12,
    "myanmar": "Brandish、Wave、Wag、Swing、လှုပ်ခြင်း"
  },
  {
    "char": "沿",
    "on": "えん",
    "kun": "そ.う、-ぞ.い",
    "english": "Run Alongside, Follow Along, Run Along, Lie Along",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 8,
    "myanmar": "Run Alongside、Follow Along、Run Along、Lie Along"
  },
  {
    "char": "源",
    "on": "げん",
    "kun": "みなもと",
    "english": "Source, Origin",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 13,
    "myanmar": "Source、Origin"
  },
  {
    "char": "劇",
    "on": "げき",
    "kun": "",
    "english": "Drama, Play",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 15,
    "myanmar": "ဇာတ်လမ်းတွဲ、ကစား"
  },
  {
    "char": "勤",
    "on": "きん、ごん",
    "kun": "つと.める、-づと.め、つと.まる、いそ.しむ",
    "english": "Diligence, Become Employed, Serve",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 12,
    "myanmar": "Diligence、Become Employed、Serve"
  },
  {
    "char": "歓",
    "on": "かん",
    "kun": "よろこ.ぶ",
    "english": "Delight, Joy",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Delight、Joy"
  },
  {
    "char": "承",
    "on": "しょう、じょう",
    "kun": "うけたまわ.る、う.ける",
    "english": "Acquiesce, Hear, Listen To, Be Informed, Receive",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 8,
    "myanmar": "သဘောတူ、နားသည်、Listen To、Be Informed、လက်ခံ"
  },
  {
    "char": "損",
    "on": "そん",
    "kun": "そこ.なう、そこな.う、-そこ.なう、そこ.ねる、-そこ.ねる",
    "english": "Damage, Loss, Disadvantage, Hurt, Injure",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 13,
    "myanmar": "ပျက်စီး、ဆုံးရှုံး、အကျိုးမရှိ、ထိခိုက်、ထိခိုက်"
  },
  {
    "char": "枝",
    "on": "し",
    "kun": "えだ",
    "english": "Bough, Branch, Twig, Limb, Counter For Branches",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 8,
    "myanmar": "Bough、Branch、Twig、Limb、Counter For Branches"
  },
  {
    "char": "爪",
    "on": "そう",
    "kun": "つめ、つま-",
    "english": "Claw, Nail, Talon",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 4,
    "myanmar": "Claw、Nail、Talon"
  },
  {
    "char": "豆",
    "on": "とう、ず",
    "kun": "まめ、まめ-",
    "english": "Beans, Pea, Midget",
    "jlpt_new": 1,
    "grade": 3,
    "strokes": 7,
    "myanmar": "Beans、Pea、Midget"
  },
  {
    "char": "刻",
    "on": "こく",
    "kun": "きざ.む、きざ.み",
    "english": "Engrave, Cut Fine, Chop, Hash, Mince, Time, Carving",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 8,
    "myanmar": "ကြိတ်、Cut Fine、Chop、Hash、Mince、အချိန်、Carving"
  },
  {
    "char": "腐",
    "on": "ふ",
    "kun": "くさ.る、-くさ.る、くさ.れる、くさ.れ、くさ.らす、くさ.す",
    "english": "Rot, Decay, Sour",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Rot、Decay、Sour"
  },
  {
    "char": "遅",
    "on": "ち",
    "kun": "おく.れる、おく.らす、おそ.い",
    "english": "Slow, Late, Back, Later",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 12,
    "myanmar": "နှေးကာ、Late、နောက်ဘက်、Later"
  },
  {
    "char": "彫",
    "on": "ちょう",
    "kun": "ほ.る、-ぼ.り",
    "english": "Carve, Engrave, Chisel",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "ကြိတ်、ကြိတ်、Chisel"
  },
  {
    "char": "測",
    "on": "そく",
    "kun": "はか.る",
    "english": "Fathom, Plan, Scheme, Measure",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 12,
    "myanmar": "တိုင်းတာ、အစီအစဉ်、စchema、တိုင်းတာ"
  },
  {
    "char": "破",
    "on": "は",
    "kun": "やぶ.る、やぶ.れる、わ.れる",
    "english": "Rend, Rip, Tear, Break, Destroy, Defeat, Frustrate",
    "jlpt_new": 3,
    "grade": 5,
    "strokes": 10,
    "myanmar": "Rend、Rip、Tear、Break、ဖျက်ဆီး、Defeat、Frustrate"
  },
  {
    "char": "舎",
    "on": "しゃ、せき",
    "kun": "やど.る",
    "english": "Cottage, Inn, Hut, House, Mansion",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 8,
    "myanmar": "Cottage、Inn、Hut、အိမ်、Mansion"
  },
  {
    "char": "講",
    "on": "こう",
    "kun": "",
    "english": "Lecture, Club, Association",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 17,
    "myanmar": "သင်ကြားချက်、အသင်း、အသင်း"
  },
  {
    "char": "滞",
    "on": "たい、てい",
    "kun": "とどこお.る",
    "english": "Stagnate, Be Delayed, Overdue, Arrears",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Stagnate、Be Delayed、Overdue、Arrears"
  },
  {
    "char": "紹",
    "on": "しょう",
    "kun": "",
    "english": "Introduce, Inherit, Help",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 11,
    "myanmar": "မိတ်ဆက်、မူလ、ကူညီ"
  },
  {
    "char": "介",
    "on": "かい",
    "kun": "",
    "english": "Jammed In, Shellfish, Mediate, Concern Oneself With",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 4,
    "myanmar": "Jammed In、ကြီးကြပ်သော、အကူအညီ、Concern Oneself With"
  },
  {
    "char": "己",
    "on": "こ、き",
    "kun": "おのれ、つちのと、な",
    "english": "Self",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 3,
    "myanmar": "Self"
  },
  {
    "char": "厄",
    "on": "やく",
    "kun": "",
    "english": "Unlucky, Misfortune, Bad Luck, Disaster",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 4,
    "myanmar": "Unlucky、Misfortune、Bad Luck、Disaster"
  },
  {
    "char": "亀",
    "on": "き、きゅう、きん",
    "kun": "かめ",
    "english": "Tortoise, Turtle",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Tortoise、Turtle"
  },
  {
    "char": "互",
    "on": "ご",
    "kun": "たが.い、かたみ.に",
    "english": "Mutually, Reciprocally, Together",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 4,
    "myanmar": "Mutually、Reciprocally、တူတကွး"
  },
  {
    "char": "剣",
    "on": "けん",
    "kun": "つるぎ",
    "english": "Sabre, Sword, Blade, Clock Hand",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Sabre、Sword、Blade、Clock Hand"
  },
  {
    "char": "寿",
    "on": "じゅ、す、しゅう",
    "kun": "ことぶき、ことぶ.く、ことほ.ぐ",
    "english": "Longevity, Congratulations, One's Natural Life",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Longevity、Congratulations、One's Natural Life"
  },
  {
    "char": "彼",
    "on": "ひ",
    "kun": "かれ、かの、か.の",
    "english": "He, That, The",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 8,
    "myanmar": "He、That、The"
  },
  {
    "char": "恥",
    "on": "ち",
    "kun": "は.じる、はじ、は.じらう、は.ずかしい",
    "english": "Shame, Dishonor",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Shame、Dishonor"
  },
  {
    "char": "杉",
    "on": "さん",
    "kun": "すぎ",
    "english": "Cedar, Cryptomeria",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Cedar、Cryptomeria"
  },
  {
    "char": "汁",
    "on": "じゅう",
    "kun": "しる、-しる、つゆ",
    "english": "Soup, Juice, Broth, Sap, Gravy, Pus",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Soup、သီးနှံ、Broth、Sap、Gravy、Pus"
  },
  {
    "char": "炎",
    "on": "えん",
    "kun": "ほのお",
    "english": "Inflammation, Flame, Blaze",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Inflammation、Flame、လောင်း"
  },
  {
    "char": "為",
    "on": "い",
    "kun": "ため、な.る、な.す、す.る、たり、つく.る、なり",
    "english": "Do, Change, Make, Benefit, Welfare, Be Of Use, Reach To, Try, Practice, Cost, Serve As, Good, Advantage, As A Result Of",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "လုပ်、ပြောင်း、ပြုလုပ်、လစာ、Welfare、Be Of Use、Reach To、Try、လေ့လာသည်、စျေး、Serve As、ကောင်း、Advantage、As A Result Of"
  },
  {
    "char": "熊",
    "on": "ゆう",
    "kun": "くま",
    "english": "Bear",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "ယူ"
  },
  {
    "char": "獄",
    "on": "ごく",
    "kun": "",
    "english": "Prison, Jail",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Prison、Jail"
  },
  {
    "char": "酔",
    "on": "すい",
    "kun": "よ.う、よ.い、よ",
    "english": "Drunk, Feel Sick, Poisoned, Elated, Spellbound",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Drunk、Feel Sick、Poisoned、Elated、Spellbound"
  },
  {
    "char": "酢",
    "on": "さく",
    "kun": "す",
    "english": "Vinegar, Sour, Acid, Tart",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Vinegar、Sour、အာစာနီး、Tart"
  },
  {
    "char": "鍋",
    "on": "か",
    "kun": "なべ",
    "english": "Pot, Pan, Kettle",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Pot、Pan、Kettle"
  },
  {
    "char": "湖",
    "on": "こ",
    "kun": "みずうみ",
    "english": "Lake",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 12,
    "myanmar": "Lake"
  },
  {
    "char": "銅",
    "on": "どう",
    "kun": "あかがね",
    "english": "Copper",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 14,
    "myanmar": "Copper"
  },
  {
    "char": "払",
    "on": "ふつ、ひつ、ほつ",
    "kun": "はら.う、-はら.い、-ばら.い",
    "english": "Pay, Clear Out, Prune, Banish, Dispose Of",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 5,
    "myanmar": "ပေးသည်、Clear Out、Prune、Banish、Dispose Of"
  },
  {
    "char": "油",
    "on": "ゆ、ゆう",
    "kun": "あぶら",
    "english": "Oil, Fat",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 8,
    "myanmar": "ဆီ、အဆီ"
  },
  {
    "char": "旧",
    "on": "きゅう",
    "kun": "ふる.い、もと",
    "english": "Old Times, Old Things, Old Friend, Former, Ex-",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 5,
    "myanmar": "ဟောင်းနေခြင်း、ဟောင်းနေခြင်း、ဟောင်းသူ、ယခင်、ယခင်"
  },
  {
    "char": "姓",
    "on": "せい、しょう",
    "kun": "",
    "english": "Surname",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 8,
    "myanmar": "မျိုးနွယ်အမည်"
  },
  {
    "char": "貿",
    "on": "ぼう",
    "kun": "",
    "english": "Trade, Exchange",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 12,
    "myanmar": "ငွေတူ、အစားထိုး"
  },
  {
    "char": "将",
    "on": "しょう、そう",
    "kun": "まさ.に、はた、まさ、ひきい.る、もって",
    "english": "Leader, Commander, General, Admiral, Or, And Again, Soon, From Now On, Just About",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 10,
    "myanmar": "ဦးဆောင်、ဦးဆောင်、အထွေထွေ、ပင်လယ်ရေကြောင်းဦး、Or、And Again、မကြာခင်、ယခုမှစ၍、လက်ရှိ"
  },
  {
    "char": "盟",
    "on": "めい",
    "kun": "",
    "english": "Alliance, Oath",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 13,
    "myanmar": "Alliance、Oath"
  },
  {
    "char": "遺",
    "on": "い、ゆい",
    "kun": "のこ.す",
    "english": "Bequeath, Leave Behind, Reserve",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 15,
    "myanmar": "Bequeath、Leave Behind、Reserve"
  },
  {
    "char": "伸",
    "on": "しん",
    "kun": "の.びる、の.ばす、の.べる、の.す",
    "english": "Expand, Stretch, Extend, Lengthen, Increase",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 7,
    "myanmar": "ချဲ့ကွယ်、ဆွဲ、ဆက်လက်、အရှည်တိုး、တိုးမြှင့်"
  },
  {
    "char": "債",
    "on": "さい",
    "kun": "",
    "english": "Bond, Loan, Debt",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Bond、Loan、Debt"
  },
  {
    "char": "及",
    "on": "きゅう",
    "kun": "およ.ぶ、およ.び、および、およ.ぼす",
    "english": "Reach Out, Exert, Exercise, Cause",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 3,
    "myanmar": "Reach Out、Exert、Exercise、အကြောင်းရင်း"
  },
  {
    "char": "奈",
    "on": "な、ない、だい",
    "kun": "いかん、からなし",
    "english": "Nara, What?",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Nara、What?"
  },
  {
    "char": "幅",
    "on": "ふく",
    "kun": "はば",
    "english": "Hanging Scroll, Width",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 12,
    "myanmar": "ကြီးကလေး、အလျား"
  },
  {
    "char": "廃",
    "on": "はい",
    "kun": "すた.れる、すた.る",
    "english": "Abolish, Obsolete, Cessation, Discarding, Abandon",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Abolish、Obsolete、Cessation、Discarding、Abandon"
  },
  {
    "char": "甘",
    "on": "かん",
    "kun": "あま.い、あま.える、あま.やかす、うま.い",
    "english": "Sweet, Coax, Pamper, Be Content, Sugary",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Sweet、Coax、Pamper、Be Content、Sugary"
  },
  {
    "char": "換",
    "on": "かん",
    "kun": "か.える、-か.える、か.わる",
    "english": "Interchange, Period, Change, Convert, Replace, Renew",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 12,
    "myanmar": "အစားထိုး、ကာလ、ပြောင်း、Convert、Replace、အသစ်ပြန်လည်"
  },
  {
    "char": "摘",
    "on": "てき",
    "kun": "つ.む",
    "english": "Pinch, Pick, Pluck, Trim, Clip, Summarize",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "ကိုက်ဖွဲ့、ရွေးယူ、Pluck、Trim、Clip、Summarize"
  },
  {
    "char": "核",
    "on": "かく",
    "kun": "",
    "english": "Nucleus, Core, Kernel",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Nucleus、Core、Kernel"
  },
  {
    "char": "沖",
    "on": "ちゅう",
    "kun": "おき、おきつ、ちゅう.する、わく",
    "english": "Open Sea, Offing, Rise High Into Sky",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Open Sea、Offing、Rise High Into Sky"
  },
  {
    "char": "縄",
    "on": "じょう",
    "kun": "なわ、ただ.す",
    "english": "Straw Rope, Cord",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Straw Rope、Cord"
  },
  {
    "char": "津",
    "on": "しん",
    "kun": "つ",
    "english": "Haven, Port, Harbor, Ferry",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Haven、Port、Harbor、Ferry"
  },
  {
    "char": "献",
    "on": "けん、こん",
    "kun": "たてまつ.る",
    "english": "Offering, Counter For Drinks, Present, Offer",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Offering、Counter For Drinks、Present、Offer"
  },
  {
    "char": "療",
    "on": "りょう",
    "kun": "",
    "english": "Heal, Cure",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 17,
    "myanmar": "ပျောက်ကွယ်、ပျောက်ကွယ်"
  },
  {
    "char": "継",
    "on": "けい",
    "kun": "つ.ぐ、まま-",
    "english": "Inherit, Succeed, Continue, Patch, Graft (tree)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "မူလ、Succeed、ဆက်လက်、Patch、Graft (tree)"
  },
  {
    "char": "維",
    "on": "い",
    "kun": "",
    "english": "Fiber, Tie, Rope",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Fiber、ချိတ်、Rope"
  },
  {
    "char": "舞",
    "on": "ぶ",
    "kun": "ま.う、-ま.う、まい",
    "english": "Dance, Flit, Circle, Wheel",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Dance、Flit、အဝိုင်းကြီး、ဘီး"
  },
  {
    "char": "伎",
    "on": "ぎ、き",
    "kun": "わざ、わざおぎ",
    "english": "Deed, Skill",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Deed、ကျွမ်းကျင်"
  },
  {
    "char": "踏",
    "on": "とう",
    "kun": "ふ.む、ふ.まえる",
    "english": "Step, Trample, Carry Through, Appraise, Evade Payment",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Step、Trample、Carry Through、Appraise、Evade Payment"
  },
  {
    "char": "般",
    "on": "はん",
    "kun": "",
    "english": "Carrier, Carry, All, General, Sort, Kind",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 10,
    "myanmar": "ယူဆောင်သူ、ယူ、အားလုံး、အထွေထွေ、မျိုးစိတ်、မျိုးစိတ်"
  },
  {
    "char": "頼",
    "on": "らい",
    "kun": "たの.む、たの.もしい、たよ.る",
    "english": "Trust, Request",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 16,
    "myanmar": "ယုံကြည်、တောင်းပန်"
  },
  {
    "char": "依",
    "on": "い、え",
    "kun": "よ.る",
    "english": "Reliant, Depend On, Consequently, Therefore, Due To",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 8,
    "myanmar": "မှန်ကန်、Depend On、ထို့ကြောင့်、ထို့ကြောင့်、ကြောင့်"
  },
  {
    "char": "鹿",
    "on": "ろく",
    "kun": "しか、か",
    "english": "Deer",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Deer"
  },
  {
    "char": "諾",
    "on": "だく",
    "kun": "",
    "english": "Consent, Assent, Agreement",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "သဘောတူ、Assent、သဘောတူ"
  },
  {
    "char": "牙",
    "on": "が、げ",
    "kun": "きば、は",
    "english": "Tusk, Fang, Tusk Radical (no. 92)",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Tusk、Fang、Tusk Radical (no. 92)"
  },
  {
    "char": "跳",
    "on": "ちょう",
    "kun": "は.ねる、と.ぶ、-と.び",
    "english": "Hop, Leap Up, Spring, Jerk, Prance, Buck, Splash, Sputter, Snap",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Hop、Leap Up、ရေကန်、Jerk、Prance、Buck、Splash、Sputter、Snap"
  },
  {
    "char": "昭",
    "on": "しょう",
    "kun": "",
    "english": "Shining, Bright",
    "jlpt_new": 1,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Shining、င်းလင်း"
  },
  {
    "char": "漁",
    "on": "ぎょ、りょう",
    "kun": "あさ.る",
    "english": "Fishing, Fishery",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 14,
    "myanmar": "ငါးဖမ်း、ငါးဖမ်း"
  },
  {
    "char": "償",
    "on": "しょう",
    "kun": "つぐな.う",
    "english": "Reparation, Make Up For, Recompense, Redeem",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Reparation、Make Up For、Recompense、Redeem"
  },
  {
    "char": "刑",
    "on": "けい",
    "kun": "",
    "english": "Punish, Penalty, Sentence, Punishment",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "ပြစ်ဒဏ်、Penalty、Sentence、Punishment"
  },
  {
    "char": "募",
    "on": "ぼ",
    "kun": "つの.る",
    "english": "Recruit, Campaign, Gather (contributions), Enlist, Grow Violent",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 12,
    "myanmar": "အဖွဲ့ဝင်、ခြေလှမ်း、Gather (contributions)、အဖွဲ့ဝင်、Grow Violent"
  },
  {
    "char": "執",
    "on": "しつ、しゅう",
    "kun": "と.る",
    "english": "Tenacious, Take Hold, Grasp, Take To Heart",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Tenacious、Take Hold、Grasp、Take To Heart"
  },
  {
    "char": "塁",
    "on": "るい、らい、すい",
    "kun": "とりで",
    "english": "Bases, Fort, Rampart, Walls, Base(ball)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Bases、Fort、Rampart、Walls、Base(ball)"
  },
  {
    "char": "崩",
    "on": "ほう",
    "kun": "くず.れる、-くず.れ、くず.す",
    "english": "Crumble, Die, Demolish, Level",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Crumble、သေ、Demolish、အဆင့်"
  },
  {
    "char": "患",
    "on": "かん",
    "kun": "わずら.う",
    "english": "Afflicted, Disease, Suffer From, Be Ill",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 11,
    "myanmar": "ဖျားနာ、ရောဂါ、Suffer From、Be Ill"
  },
  {
    "char": "戻",
    "on": "れい",
    "kun": "もど.す、もど.る",
    "english": "Re-, Return, Revert, Resume, Restore, Go Backwards",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Re-、ပြန်လာ、ပြန်လည်ပြောင်းလဲ、ပြန်လည်စတ်、ပြန်လည်တည်ဆောက်、Go Backwards"
  },
  {
    "char": "抗",
    "on": "こう",
    "kun": "あらが.う",
    "english": "Confront, Resist, Defy, Oppose",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Confront、ပူးပေါင်း、Defy、Oppose"
  },
  {
    "char": "抵",
    "on": "てい",
    "kun": "",
    "english": "Resist, Reach, Touch",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "ပူးပေါင်း、ရောက်、ထိ"
  },
  {
    "char": "旬",
    "on": "じゅん、しゅん",
    "kun": "",
    "english": "Decameron, Ten-day Period, Season (for Specific Products)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Decameron、Ten-day Period、Season (for Specific Products)"
  },
  {
    "char": "湾",
    "on": "わん",
    "kun": "いりえ",
    "english": "Gulf, Bay, Inlet",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 12,
    "myanmar": "သမုဒ္ဒရာ、သမုဒ္ဒရာ、ဝင်ပေါက်မြစ်"
  },
  {
    "char": "爆",
    "on": "ばく",
    "kun": "は.ぜる",
    "english": "Bomb, Burst Open, Pop, Split",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 19,
    "myanmar": "ဗုံး、Burst Open、ပြတ်တောက်、ခွဲ"
  },
  {
    "char": "弾",
    "on": "だん、たん",
    "kun": "ひ.く、-ひ.き、はず.む、たま、はじ.く、はじ.ける、ただ.す、はじ.きゆみ",
    "english": "Bullet, Twang, Flip, Snap",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Bullet、Twang、Flip、Snap"
  },
  {
    "char": "聴",
    "on": "ちょう、てい",
    "kun": "き.く、ゆる.す",
    "english": "Listen, Headstrong, Naughty, Careful Inquiry",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "နားထောင်、Headstrong、Naughty、Careful Inquiry"
  },
  {
    "char": "跡",
    "on": "せき",
    "kun": "あと",
    "english": "Tracks, Mark, Print, Impression",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 13,
    "myanmar": "လမ်း、မှတ်ချက်、ပုံနှိုက်、အမြင်း"
  },
  {
    "char": "遣",
    "on": "けん",
    "kun": "つか.う、-つか.い、-づか.い、つか.わす、や.る",
    "english": "Dispatch, Despatch, Send, Give, Donate, Do, Undertake",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Dispatch、Despatch、ပို့、ပေး、Donate、လုပ်、Undertake"
  },
  {
    "char": "闘",
    "on": "とう",
    "kun": "たたか.う、あらそ.う",
    "english": "Fight, War",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "တိုက်မွှပ်、စစ်"
  },
  {
    "char": "陣",
    "on": "じん",
    "kun": "",
    "english": "Camp, Battle Array, Ranks, Position, Sudden, Brief Time",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "ြံဝnake、Battle Array、Ranks、Position、Sudden、Brief Time"
  },
  {
    "char": "香",
    "on": "こう、きょう",
    "kun": "か、かお.り、かお.る",
    "english": "Incense, Smell, Perfume",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 9,
    "myanmar": "ဆီ、နှပ်သည်、ဆီ"
  },
  {
    "char": "兆",
    "on": "ちょう",
    "kun": "きざ.す、きざ.し",
    "english": "Portent, 10**12, Trillion, Sign, Omen, Symptoms",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 6,
    "myanmar": "Portent、10**12、Trillion、လက်မှတ်、Omen、Symptoms"
  },
  {
    "char": "臨",
    "on": "りん",
    "kun": "のぞ.む",
    "english": "Look To, Face, Meet, Confront, Attend, Call On",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 18,
    "myanmar": "Look To、Face、Meet、Confront、Attend、Call On"
  },
  {
    "char": "削",
    "on": "さく",
    "kun": "けず.る、はつ.る、そ.ぐ",
    "english": "Plane, Sharpen, Whittle, Pare, Shave",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Plane、Sharpen、Whittle、Pare、Shave"
  },
  {
    "char": "契",
    "on": "けい",
    "kun": "ちぎ.る",
    "english": "Pledge, Promise, Vow",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Pledge、Promise、Vow"
  },
  {
    "char": "恵",
    "on": "けい、え",
    "kun": "めぐ.む、めぐ.み",
    "english": "Favor, Blessing, Grace, Kindness",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Favor、Blessing、Grace、Kindness"
  },
  {
    "char": "抱",
    "on": "ほう",
    "kun": "だ.く、いだ.く、かか.える",
    "english": "Embrace, Hug, Hold In Arms",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Embrace、Hug、Hold In Arms"
  },
  {
    "char": "掲",
    "on": "けい",
    "kun": "かか.げる",
    "english": "Put Up (a Notice), Put Up, Hoist, Display, Hang Out, Publish, Describe",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Put Up (a Notice)、Put Up、Hoist、Display、Hang Out、ထုတ်ဝေ、Describe"
  },
  {
    "char": "狙",
    "on": "そ、しょ",
    "kun": "ねら.う、ねら.い",
    "english": "Aim At, Sight, Shadow, Stalk",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Aim At、Sight、Shadow、Stalk"
  },
  {
    "char": "葬",
    "on": "そう",
    "kun": "ほうむ.る",
    "english": "Interment, Bury, Shelve",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Interment、Bury、Shelve"
  },
  {
    "char": "需",
    "on": "じゅ",
    "kun": "",
    "english": "Demand, Request, Need",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Demand、တောင်းပန်、လိုအပ်"
  },
  {
    "char": "齢",
    "on": "れい",
    "kun": "よわい、とし",
    "english": "Age",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 17,
    "myanmar": "အသက်"
  },
  {
    "char": "宜",
    "on": "ぎ",
    "kun": "よろ.しい、よろ.しく",
    "english": "Best Regards, Good",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Best Regards、ကောင်း"
  },
  {
    "char": "繰",
    "on": "そう",
    "kun": "く.る",
    "english": "Winding, Reel, Spin, Turn (pages), Look Up, Refer To",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 19,
    "myanmar": "Winding、Reel、Spin、Turn (pages)、Look Up、Refer To"
  },
  {
    "char": "避",
    "on": "ひ",
    "kun": "さ.ける、よ.ける",
    "english": "Evade, Avoid, Avert, Ward Off, Shirk, Shun",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Evade、Avoid、Avert、ကာကွယ်、Shirk、Shun"
  },
  {
    "char": "妊",
    "on": "にん、じん",
    "kun": "はら.む、みごも.る",
    "english": "Pregnancy",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Pregnancy"
  },
  {
    "char": "娠",
    "on": "しん",
    "kun": "",
    "english": "With Child, Pregnancy",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "With Child、Pregnancy"
  },
  {
    "char": "致",
    "on": "ち",
    "kun": "いた.す",
    "english": "Doth, Do, Send, Forward, Cause, Exert, Incur, Engage",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Doth、လုပ်、ပို့、အရှေ့、အကြောင်းရင်း、Exert、ရရှိ、Engage"
  },
  {
    "char": "刊",
    "on": "かん",
    "kun": "",
    "english": "Publish, Carve, Engrave",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 5,
    "myanmar": "ထုတ်ဝေ、ကြိတ်、ကြိတ်"
  },
  {
    "char": "奏",
    "on": "そう",
    "kun": "かな.でる",
    "english": "Play Music, Speak To A Ruler, Complete",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 9,
    "myanmar": "Play Music、Speak To A Ruler、ပြီးမြောက်"
  },
  {
    "char": "伴",
    "on": "はん、ばん",
    "kun": "ともな.う",
    "english": "Consort, Accompany, Bring With, Companion",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Consort、Accompany、Bring With、Companion"
  },
  {
    "char": "併",
    "on": "へい",
    "kun": "あわ.せる",
    "english": "Join, Get Together, Unite, Collective",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "ပါဝင်သည်、Get Together、Unite、Collective"
  },
  {
    "char": "傾",
    "on": "けい",
    "kun": "かたむ.く、かたむ.ける、かたぶ.く、かた.げる、かし.げる",
    "english": "Lean, Incline, Tilt, Trend, Wane, Sink, Ruin, Bias",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 13,
    "myanmar": "ကြပ်တန်း、တောင်တန်း、တောင်တန်း、လမ်းကြောင်း、လျှော့ချ、ကျ、ပျက်စီး、ဘက်လှည့်"
  },
  {
    "char": "却",
    "on": "きゃく",
    "kun": "かえ.って、しりぞ.く、しりぞ.ける",
    "english": "Instead, On The Contrary, Rather, Step Back, Withdraw, Retreat",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Instead、On The Contrary、သာမက、Step Back、Withdraw、Retreat"
  },
  {
    "char": "奥",
    "on": "おう",
    "kun": "おく、おく.まる、くま",
    "english": "Heart, Interior",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 12,
    "myanmar": "စိတ်、အထဲ"
  },
  {
    "char": "慮",
    "on": "りょ",
    "kun": "おもんぱく.る、おもんぱか.る",
    "english": "Prudence, Thought, Concern, Consider, Deliberate, Fear",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Prudence、Thought、စိတ်ဝင်စား、စဉ်းစား、Deliberate、ကြောက်"
  },
  {
    "char": "懸",
    "on": "けん、け",
    "kun": "か.ける、か.かる",
    "english": "State Of Suspension, Hang, Depend, Consult, Distant, Far Apart",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 20,
    "myanmar": "State Of Suspension、Hang、မှန်ကန်、Consult、Distant、Far Apart"
  },
  {
    "char": "房",
    "on": "ぼう",
    "kun": "ふさ",
    "english": "Tassel, Tuft, Fringe, Bunch, Lock (hair), Segment (orange), House, Room",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Tassel、Tuft、Fringe、Bunch、Lock (hair)、Segment (orange)、အိမ်、Room"
  },
  {
    "char": "扱",
    "on": "そう、きゅう",
    "kun": "あつか.い、あつか.う、あつか.る、こ.く",
    "english": "Handle, Entertain, Thresh, Strip",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Handle、Entertain、Thresh、Strip"
  },
  {
    "char": "抑",
    "on": "よく",
    "kun": "おさ.える",
    "english": "Repress, Well, Now, In The First Place, Push, Shove, Press, Seal, Do In Spite Of",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Repress、Well、ယခု、In The First Place、တွန်းပေး、Shove、Press、အကြီးအလေးကြီး、Do In Spite Of"
  },
  {
    "char": "択",
    "on": "たく",
    "kun": "えら.ぶ",
    "english": "Choose, Select, Elect, Prefer",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "ရွေးချယ်、ရွေးချယ်、Elect、နှစ်သက်"
  },
  {
    "char": "描",
    "on": "びょう",
    "kun": "えが.く、か.く",
    "english": "Sketch, Compose, Write, Draw, Paint",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Sketch、Compose、ရေး、Draw、Paint"
  },
  {
    "char": "盤",
    "on": "ばん",
    "kun": "",
    "english": "Tray, Shallow Bowl, Platter, Tub, Board, Phonograph Record",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Tray、Shallow Bowl、Platter、Tub、အဆစ်、Phonograph Record"
  },
  {
    "char": "称",
    "on": "しょう",
    "kun": "たた.える、とな.える、あ.げる、かな.う、はか.り、はか.る、ほめ.る",
    "english": "Appellation, Praise, Admire, Name, Title, Fame",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Appellation、အများကြီးချီးမှု、Admire、Name、Title、Fame"
  },
  {
    "char": "緒",
    "on": "しょ、ちょ",
    "kun": "お、いとぐち",
    "english": "Thong, Beginning, Inception, End, Cord, Strap, Mental Or Emotional State",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Thong、Beginning、Inception、အဆုံး、Cord、Strap、Mental Or Emotional State"
  },
  {
    "char": "緩",
    "on": "かん",
    "kun": "ゆる.い、ゆる.やか、ゆる.む、ゆる.める",
    "english": "Slacken, Loosen, Relax, Lessen, Be Moderate, Ease",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Slacken、Loosen、Relax、Lessen、Be Moderate、Ease"
  },
  {
    "char": "託",
    "on": "たく",
    "kun": "かこつ.ける、かこ.つ、かこ.つける",
    "english": "Consign, Requesting, Entrusting With, Pretend, Hint",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Consign、Requesting、Entrusting With、အလိုမရှိဘဲ、Hint"
  },
  {
    "char": "賄",
    "on": "わい",
    "kun": "まかな.う",
    "english": "Bribe, Board, Supply, Finance",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Bribe、အဆစ်、ပေးအပ်သည်、Finance"
  },
  {
    "char": "賂",
    "on": "ろ",
    "kun": "まいな.い、まいな.う",
    "english": "Bribe",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Bribe"
  },
  {
    "char": "贈",
    "on": "ぞう、そう",
    "kun": "おく.る",
    "english": "Presents, Send, Give To, Award To, Confer On, Presenting Something",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 18,
    "myanmar": "လက်ဆောင်、ပို့、Give To、Award To、Confer On、Presenting Something"
  },
  {
    "char": "逃",
    "on": "とう",
    "kun": "に.げる、に.がす、のが.す、のが.れる",
    "english": "Escape, Flee, Shirk, Evade, Set Free",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Escape、Flee、Shirk、Evade、Set Free"
  },
  {
    "char": "還",
    "on": "かん",
    "kun": "かえ.る",
    "english": "Send Back, Return",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Send Back、ပြန်လာ"
  },
  {
    "char": "超",
    "on": "ちょう",
    "kun": "こ.える、こ.す",
    "english": "Transcend, Super-, Ultra-",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 12,
    "myanmar": "ကျော်လွှား、Super-、Ultra-"
  },
  {
    "char": "邦",
    "on": "ほう",
    "kun": "くに",
    "english": "Home Country, Country, Japan",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Home Country、နိုင်ငံ、Japan"
  },
  {
    "char": "鈴",
    "on": "れい、りん",
    "kun": "すず",
    "english": "Small Bell, Buzzer",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Small Bell、Buzzer"
  },
  {
    "char": "阜",
    "on": "ふ、ふう",
    "kun": "",
    "english": "Hill, Mound, Left Village Radical (no. 170)",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 8,
    "myanmar": "တောင်、Mound、Left Village Radical (no. 170)"
  },
  {
    "char": "岐",
    "on": "き、ぎ",
    "kun": "",
    "english": "Branch Off, Fork In Road, Scene, Arena, Theater",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Branch Off、Fork In Road、Scene、Arena、Theater"
  },
  {
    "char": "隆",
    "on": "りゅう",
    "kun": "",
    "english": "Hump, High, Noble, Prosperity",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Hump、မြင့်、Noble、ချစ်ခင်း"
  },
  {
    "char": "雇",
    "on": "こ",
    "kun": "やと.う",
    "english": "Employ, Hire",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Employ、Hire"
  },
  {
    "char": "控",
    "on": "こう",
    "kun": "ひか.える、ひか.え",
    "english": "Withdraw, Draw In, Hold Back, Refrain From, Be Moderate",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Withdraw、Draw In、Hold Back、Refrain From、Be Moderate"
  },
  {
    "char": "壁",
    "on": "へき",
    "kun": "かべ",
    "english": "Wall, Lining (stomach), Fence",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Wall、Lining (stomach)、Fence"
  },
  {
    "char": "棋",
    "on": "き",
    "kun": "ご",
    "english": "Chess Piece, Japanese Chess, Shogi",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Chess Piece、Japanese Chess、Shogi"
  },
  {
    "char": "渋",
    "on": "じゅう、しゅう",
    "kun": "しぶ、しぶ.い、しぶ.る",
    "english": "Astringent, Hesitate, Reluctant, Have Diarrhea",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Astringent、Hesitate、Reluctant、Have Diarrhea"
  },
  {
    "char": "片",
    "on": "へん",
    "kun": "かた-、かた",
    "english": "One-sided, Leaf, Sheet, Right-side Kata Radical (no. 91)",
    "jlpt_new": 2,
    "grade": 6,
    "strokes": 4,
    "myanmar": "One-sided、အရွက်、စာရွက်、Right-side Kata Radical (no. 91)"
  },
  {
    "char": "群",
    "on": "ぐん",
    "kun": "む.れる、む.れ、むら、むら.がる",
    "english": "Flock, Group, Crowd, Herd, Swarm, Cluster",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 13,
    "myanmar": "အဖွဲ့、အဖွဲ့、လူပုလဲ、အဖွဲ့、အဖွဲ့、အဖွဲ့"
  },
  {
    "char": "仙",
    "on": "せん、せんと",
    "kun": "",
    "english": "Hermit, Wizard, Cent",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Hermit、Wizard、Cent"
  },
  {
    "char": "充",
    "on": "じゅう",
    "kun": "あ.てる、み.たす",
    "english": "Allot, Fill",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Allot、Fill"
  },
  {
    "char": "免",
    "on": "めん",
    "kun": "まぬか.れる、まぬが.れる",
    "english": "Excuse, Dismissal",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Excuse、Dismissal"
  },
  {
    "char": "勧",
    "on": "かん、けん",
    "kun": "すす.める",
    "english": "Persuade, Recommend, Advise, Encourage, Offer",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Persuade、Recommend、Advise、Encourage、Offer"
  },
  {
    "char": "圏",
    "on": "けん",
    "kun": "かこ.い",
    "english": "Sphere, Circle, Radius, Range",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Sphere、အဝိုင်းကြီး、Radius、Range"
  },
  {
    "char": "埋",
    "on": "まい",
    "kun": "う.める、う.まる、う.もれる、うず.める、うず.まる、い.ける",
    "english": "Bury, Be Filled Up, Embedded",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Bury、Be Filled Up、Embedded"
  },
  {
    "char": "埼",
    "on": "き",
    "kun": "さき、さい、みさき",
    "english": "Cape, Spit, Promontory",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Cape、Spit、Promontory"
  },
  {
    "char": "奪",
    "on": "だつ",
    "kun": "うば.う",
    "english": "Rob, Take By Force, Snatch Away, Dispossess, Plunder, Usurp",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Rob、Take By Force、Snatch Away、Dispossess、လုယူ、Usurp"
  },
  {
    "char": "御",
    "on": "ぎょ、ご",
    "kun": "おん-、お-、み-",
    "english": "Honorable, Manipulate, Govern",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Honorable、Manipulate、Govern"
  },
  {
    "char": "慎",
    "on": "しん",
    "kun": "つつし.む、つつ.ましい、つつし、つつし.み",
    "english": "Humility, Be Careful, Discreet, Prudent",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Humility、Be Careful、Discreet、Prudent"
  },
  {
    "char": "拒",
    "on": "きょ、ご",
    "kun": "こば.む",
    "english": "Repel, Refuse, Reject, Decline",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Repel、ငြင်းပယ်、Reject、Decline"
  },
  {
    "char": "枠",
    "on": "",
    "kun": "わく",
    "english": "Frame, Framework, Spindle, Spool, Bounding-box, (kokuji)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "ခြား、Framework、Spindle、Spool、Bounding-box、(kokuji)"
  },
  {
    "char": "甲",
    "on": "こう、かん",
    "kun": "きのえ",
    "english": "Armor, High (voice), A Grade, First Class, Former, Instep, Carapace",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Armor、High (voice)、A Grade、First Class、ယခင်、Instep、Carapace"
  },
  {
    "char": "祉",
    "on": "し",
    "kun": "",
    "english": "Welfare, Happiness",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Welfare、Happiness"
  },
  {
    "char": "稲",
    "on": "とう、て",
    "kun": "いね、いな-",
    "english": "Rice Plant",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Rice Plant"
  },
  {
    "char": "譲",
    "on": "じょう",
    "kun": "ゆず.る",
    "english": "Defer, Turnover, Transfer, Convey",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 20,
    "myanmar": "Defer、Turnover、Transfer、Convey"
  },
  {
    "char": "謙",
    "on": "けん",
    "kun": "へりくだ.る",
    "english": "Self-effacing, Humble Oneself, Condescend, Be Modest",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Self-effacing、Humble Oneself、Condescend、Be Modest"
  },
  {
    "char": "躍",
    "on": "やく",
    "kun": "おど.る",
    "english": "Leap, Dance, Skip",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 21,
    "myanmar": "Leap、Dance、Skip"
  },
  {
    "char": "銃",
    "on": "じゅう",
    "kun": "つつ",
    "english": "Gun, Arms",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Gun、လက်နက်"
  },
  {
    "char": "項",
    "on": "こう",
    "kun": "うなじ",
    "english": "Paragraph, Nape Of Neck, Clause, Item, Term (expression)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Paragraph、Nape Of Neck、Clause、Item、Term (expression)"
  },
  {
    "char": "鋼",
    "on": "こう",
    "kun": "はがね",
    "english": "Steel",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 16,
    "myanmar": "Steel"
  },
  {
    "char": "顧",
    "on": "こ",
    "kun": "かえり.みる",
    "english": "Look Back, Review, Examine Oneself, Turn Around",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 21,
    "myanmar": "Look Back、Review、Examine Oneself、Turn Around"
  },
  {
    "char": "駐",
    "on": "ちゅう",
    "kun": "",
    "english": "Stop-over, Reside In, Resident",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 15,
    "myanmar": "ရပ်、Reside In、နေထိုင်သူ"
  },
  {
    "char": "駆",
    "on": "く",
    "kun": "か.ける、か.る",
    "english": "Drive, Run, Gallop, Advance, Inspire, Impel",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Drive、ပြေးသည်、Gallop、Advance、Inspire、Impel"
  },
  {
    "char": "柱",
    "on": "ちゅう",
    "kun": "はしら",
    "english": "Pillar, Post, Cylinder, Support",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Pillar、Post、ပုလင်း、ထောက်ခံ"
  },
  {
    "char": "唱",
    "on": "しょう",
    "kun": "とな.える",
    "english": "Chant, Recite, Call Upon, Yell",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 11,
    "myanmar": "Chant、Recite、Call Upon、Yell"
  },
  {
    "char": "孝",
    "on": "こう、きょう",
    "kun": "",
    "english": "Filial Piety, Child's Respect",
    "jlpt_new": null,
    "grade": 6,
    "strokes": 7,
    "myanmar": "Filial Piety、Child's Respect"
  },
  {
    "char": "俊",
    "on": "しゅん",
    "kun": "",
    "english": "Sagacious, Genius, Excellence",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Sagacious、Genius、Excellence"
  },
  {
    "char": "兼",
    "on": "けん",
    "kun": "か.ねる、-か.ねる",
    "english": "Concurrently, And, Beforehand, In Advance",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Concurrently、နှင့်、Beforehand、In Advance"
  },
  {
    "char": "剤",
    "on": "ざい、すい、せい",
    "kun": "かる、けず.る",
    "english": "Dose, Medicine, Drug",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Dose、Medicine、Drug"
  },
  {
    "char": "吹",
    "on": "すい",
    "kun": "ふ.く",
    "english": "Blow, Breathe, Puff, Emit, Smoke",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Blow、Breathe、Puff、Emit、Smoke"
  },
  {
    "char": "堀",
    "on": "くつ",
    "kun": "ほり",
    "english": "Ditch, Moat, Canal",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Ditch、Moat、Canal"
  },
  {
    "char": "巡",
    "on": "じゅん",
    "kun": "めぐ.る、めぐ.り",
    "english": "Patrol, Go Around, Circumference",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Patrol、Go Around、ပတ်ဝန်းကျင်"
  },
  {
    "char": "戒",
    "on": "かい",
    "kun": "いまし.める",
    "english": "Commandment",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Commandment"
  },
  {
    "char": "排",
    "on": "はい",
    "kun": "",
    "english": "Repudiate, Exclude, Expel, Reject, Line Up, Arrange",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Repudiate、Exclude、Expel、Reject、တန်းကြီး、စီစဉ်"
  },
  {
    "char": "携",
    "on": "けい",
    "kun": "たずさ.える、たずさ.わる",
    "english": "Portable, Carry (in Hand), Armed With, Bring Along",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Portable、Carry (in Hand)、Armed With、Bring Along"
  },
  {
    "char": "敏",
    "on": "びん",
    "kun": "さとい",
    "english": "Cleverness, Agile, Alert",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Cleverness、Agile、Alert"
  },
  {
    "char": "鋭",
    "on": "えい",
    "kun": "するど.い",
    "english": "Pointed, Sharpness, Edge, Weapon, Sharp, Violent",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Pointed、Sharpness、Edge、Weapon、Sharp、အကြမ်းဖက်"
  },
  {
    "char": "敷",
    "on": "ふ",
    "kun": "し.く、-し.き",
    "english": "Spread, Pave, Sit, Promulgate",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Spread、Pave、ထိုင်တန်、Promulgate"
  },
  {
    "char": "殿",
    "on": "でん、てん",
    "kun": "との、-どの",
    "english": "Mr., Hall, Mansion, Palace, Temple, Lord",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Mr.、Hall、Mansion、Palace、Temple、Lord"
  },
  {
    "char": "犠",
    "on": "ぎ、き",
    "kun": "いけにえ",
    "english": "Sacrifice",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Sacrifice"
  },
  {
    "char": "獲",
    "on": "かく",
    "kun": "え.る",
    "english": "Seize, Get, Find, Earn, Acquire, Can, May, Able To",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Seize、Get、ရှာ、ဝင်ငွေ、Acquire、Can、May、Able To"
  },
  {
    "char": "茂",
    "on": "も",
    "kun": "しげ.る",
    "english": "Overgrown, Grow Thick, Be Luxuriant",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Overgrown、Grow Thick、Be Luxuriant"
  },
  {
    "char": "繁",
    "on": "はん",
    "kun": "しげ.る、しげ.く",
    "english": "Luxuriant, Thick, Overgrown, Frequency, Complexity, Trouble",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Luxuriant、ထူ、Overgrown、Frequency、Complexity、Trouble"
  },
  {
    "char": "頻",
    "on": "ひん",
    "kun": "しき.りに",
    "english": "Repeatedly, Recur",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Repeatedly、Recur"
  },
  {
    "char": "殖",
    "on": "しょく",
    "kun": "ふ.える、ふ.やす",
    "english": "Augment, Increase, Multiply, Raise",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Augment、တိုးမြှင့်、များစွာ、တက်လာ"
  },
  {
    "char": "薄",
    "on": "はく",
    "kun": "うす.い、うす-、-うす、うす.める、うす.まる、うす.らぐ、うす.ら-、うす.れる、すすき",
    "english": "Dilute, Thin, Weak (tea), Pampas Grass",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 16,
    "myanmar": "ဖြောင့်မြစ်、ပေါ့ပြူ、Weak (tea)、Pampas Grass"
  },
  {
    "char": "衝",
    "on": "しょう",
    "kun": "つ.く",
    "english": "Collide, Brunt, Highway, Opposition (astronomy), Thrust, Pierce, Stab, Prick",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Collide、Brunt、Highway、Opposition (astronomy)、Thrust、Pierce、Stab、Prick"
  },
  {
    "char": "誉",
    "on": "よ",
    "kun": "ほま.れ、ほ.める",
    "english": "Reputation, Praise, Honor, Glory",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Reputation、အများကြီးချီးမှု、ဂုဏ်ပြု、ဂုဏ်ပြု"
  },
  {
    "char": "褒",
    "on": "ほう",
    "kun": "ほ.める",
    "english": "Praise, Extol",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "အများကြီးချီးမှု、Extol"
  },
  {
    "char": "透",
    "on": "とう",
    "kun": "す.く、す.かす、す.ける、とう.る、とう.す",
    "english": "Transparent, Permeate, Filter, Penetrate",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Transparent、Permeate、Filter、Penetrate"
  },
  {
    "char": "隣",
    "on": "りん",
    "kun": "とな.る、となり",
    "english": "Neighboring",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Neighboring"
  },
  {
    "char": "雅",
    "on": "が",
    "kun": "みや.び",
    "english": "Gracious, Elegant, Graceful, Refined",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Gracious、Elegant、Graceful、Refined"
  },
  {
    "char": "遜",
    "on": "そん",
    "kun": "したが.う、へりくだ.る、ゆず.る",
    "english": "Humble, Modest",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "ထိလို့မရသော、Modest"
  },
  {
    "char": "伺",
    "on": "し",
    "kun": "うかが.う",
    "english": "Pay Respects, Visit, Ask, Inquire, Question, Implore",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 7,
    "myanmar": "ဂုဏ်ပြု、သွားလာသည်、မေးသည်、မေးသည်、မေးခွန်း、တောင်းပန်"
  },
  {
    "char": "徹",
    "on": "てつ",
    "kun": "",
    "english": "Penetrate, Clear, Pierce, Strike Home, Sit Up (all Night)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Penetrate、Clear、Pierce、Strike Home、Sit Up (all Night)"
  },
  {
    "char": "瀬",
    "on": "らい",
    "kun": "せ",
    "english": "Rapids, Current, Torrent, Shallows, Shoal",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 19,
    "myanmar": "Rapids、Current、Torrent、Shallows、Shoal"
  },
  {
    "char": "撤",
    "on": "てつ",
    "kun": "",
    "english": "Remove, Withdraw, Disarm, Dismantle, Reject, Exclude",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Remove、Withdraw、Disarm、Dismantle、Reject、Exclude"
  },
  {
    "char": "措",
    "on": "そ",
    "kun": "お.く",
    "english": "Set Aside, Give Up, Suspend, Discontinue, Lay Aside, Except",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Set Aside、Give Up、Suspend、Discontinue、Lay Aside、Except"
  },
  {
    "char": "拠",
    "on": "きょ、こ",
    "kun": "よ.る",
    "english": "Foothold, Based On, Follow, Therefore",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Foothold、အခြေခံ、လိုက်、ထို့ကြောင့်"
  },
  {
    "char": "儀",
    "on": "ぎ",
    "kun": "",
    "english": "Ceremony, Rule, Affair, Case, A Matter",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Ceremony、စည်းကမ်း、Affair、Case、A Matter"
  },
  {
    "char": "樹",
    "on": "じゅ",
    "kun": "き",
    "english": "Timber, Trees, Wood, Establish, Set Up",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 16,
    "myanmar": "အဆီ、Trees、အဆီ、တည်ထောင်、Set Up"
  },
  {
    "char": "棄",
    "on": "き",
    "kun": "す.てる",
    "english": "Abandon, Throw Away, Discard, Resign, Reject, Sacrifice",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Abandon、Throw Away、ပယ်ဖျက်、Resign、Reject、Sacrifice"
  },
  {
    "char": "虎",
    "on": "こ",
    "kun": "とら",
    "english": "Tiger, Drunkard",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Tiger、Drunkard"
  },
  {
    "char": "蛍",
    "on": "けい",
    "kun": "ほたる",
    "english": "Lightning-bug, Firefly",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Lightning-bug、Firefly"
  },
  {
    "char": "蜂",
    "on": "ほう",
    "kun": "はち",
    "english": "Bee, Wasp, Hornet",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Bee、Wasp、Hornet"
  },
  {
    "char": "酎",
    "on": "ちゅう、ちゅ",
    "kun": "かも.す",
    "english": "Sake",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Sake"
  },
  {
    "char": "蜜",
    "on": "みつ、びつ",
    "kun": "",
    "english": "Honey, Nectar, Molasses",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Honey、Nectar、Molasses"
  },
  {
    "char": "艦",
    "on": "かん",
    "kun": "",
    "english": "Warship",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 21,
    "myanmar": "Warship"
  },
  {
    "char": "潜",
    "on": "せん",
    "kun": "ひそ.む、もぐ.る、かく.れる、くぐ.る、ひそ.める",
    "english": "Submerge, Conceal, Hide, Lower (voice), Hush",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Submerge、ဝှက်、ဝှက်、Lower (voice)、Hush"
  },
  {
    "char": "拳",
    "on": "けん、げん",
    "kun": "こぶし",
    "english": "Fist",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Fist"
  },
  {
    "char": "炭",
    "on": "たん",
    "kun": "すみ",
    "english": "Charcoal, Coal",
    "jlpt_new": 2,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Charcoal、Coal"
  },
  {
    "char": "畑",
    "on": "",
    "kun": "はた、はたけ、-ばたけ",
    "english": "Farm, Field, Garden, One's Specialty, (kokuji)",
    "jlpt_new": null,
    "grade": 3,
    "strokes": 9,
    "myanmar": "Farm、Field、Garden、One's Specialty、(kokuji)"
  },
  {
    "char": "包",
    "on": "ほう",
    "kun": "つつ.む、くる.む",
    "english": "Wrap, Pack Up, Cover, Conceal",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 5,
    "myanmar": "လွှား、Pack Up、ဖုံးကွယ်、ဝှက်"
  },
  {
    "char": "衣",
    "on": "い、え",
    "kun": "ころも、きぬ、-ぎ",
    "english": "Garment, Clothes, Dressing",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 6,
    "myanmar": "Garment、Clothes、Dressing"
  },
  {
    "char": "仁",
    "on": "じん、に、にん",
    "kun": "",
    "english": "Humanity, Virtue, Benevolence, Charity, Man, Kernel",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 4,
    "myanmar": "Humanity、Virtue、Benevolence、Charity、ယောက်ျား、Kernel"
  },
  {
    "char": "鉱",
    "on": "こう",
    "kun": "あらがね",
    "english": "Mineral, Ore",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 13,
    "myanmar": "Mineral、Ore"
  },
  {
    "char": "至",
    "on": "し",
    "kun": "いた.る",
    "english": "Climax, Arrive, Proceed, Reach, Attain, Result In",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 6,
    "myanmar": "Climax、ရောက်、Proceed、ရောက်、Attain、Result In"
  },
  {
    "char": "誠",
    "on": "せい",
    "kun": "まこと",
    "english": "Sincerity, Admonish, Warn, Prohibit, Truth, Fidelity",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 13,
    "myanmar": "Sincerity、Admonish、Warn、Prohibit、Truth、Fidelity"
  },
  {
    "char": "郷",
    "on": "きょう、ごう",
    "kun": "さと",
    "english": "Home Town, Village, Native Place, District",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 11,
    "myanmar": "Home Town、ရွာ、Native Place、ခရိုင်"
  },
  {
    "char": "侵",
    "on": "しん",
    "kun": "おか.す",
    "english": "Encroach, Invade, Raid, Trespass, Violate",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Encroach、Invade、Raid、Trespass、Violate"
  },
  {
    "char": "偽",
    "on": "ぎ、か",
    "kun": "いつわ.る、にせ、いつわ.り",
    "english": "Falsehood, Lie, Deceive, Pretend, Counterfeit, Forgery",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Falsehood、Lie、Deceive、အလိုမရှိဘဲ、Counterfeit、Forgery"
  },
  {
    "char": "克",
    "on": "こく",
    "kun": "か.つ",
    "english": "Overcome, Kindly, Skillfully",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Overcome、Kindly、Skillfully"
  },
  {
    "char": "到",
    "on": "とう",
    "kun": "いた.る",
    "english": "Arrival, Proceed, Reach, Attain, Result In",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 8,
    "myanmar": "ရောက်မည့်အချိန်、Proceed、ရောက်、Attain、Result In"
  },
  {
    "char": "双",
    "on": "そう",
    "kun": "ふた、たぐい、ならぶ、ふたつ",
    "english": "Pair, Set, Comparison, Counter For Pairs",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 4,
    "myanmar": "အတွဲ、အစုံ、နှိုင်းယှဉ်、Counter For Pairs"
  },
  {
    "char": "哲",
    "on": "てつ",
    "kun": "さとい、あきらか",
    "english": "Philosophy, Clear",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Philosophy、Clear"
  },
  {
    "char": "喪",
    "on": "そう",
    "kun": "も",
    "english": "Miss, Mourning",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Miss、Mourning"
  },
  {
    "char": "堅",
    "on": "けん",
    "kun": "かた.い、-がた.い",
    "english": "Strict, Hard, Solid, Tough, Tight, Reliable",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Strict、ခက်ခဲ、Solid、Tough、Tight、Reliable"
  },
  {
    "char": "床",
    "on": "しょう",
    "kun": "とこ、ゆか",
    "english": "Bed, Counter For Beds, Floor, Padding, Tatami",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Bed、Counter For Beds、အဆင့်、Padding、တတံမီ"
  },
  {
    "char": "括",
    "on": "かつ",
    "kun": "くく.る",
    "english": "Fasten, Tie Up, Arrest, Constrict",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Fasten、Tie Up、Arrest、Constrict"
  },
  {
    "char": "弧",
    "on": "こ",
    "kun": "",
    "english": "Arc, Arch, Bow",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Arc、Arch、Bow"
  },
  {
    "char": "挑",
    "on": "ちょう",
    "kun": "いど.む",
    "english": "Challenge, Contend For, Make Love To",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Challenge、Contend For、Make Love To"
  },
  {
    "char": "掘",
    "on": "くつ",
    "kun": "ほ.る",
    "english": "Dig, Delve, Excavate",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Dig、Delve、Excavate"
  },
  {
    "char": "揚",
    "on": "よう",
    "kun": "あ.げる、-あ.げ、あ.がる",
    "english": "Raise, Elevate, Hoist, Praise, Extol, Fry In Deep Fat",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "တက်လာ、Elevate、Hoist、အများကြီးချီးမှု、Extol、Fry In Deep Fat"
  },
  {
    "char": "握",
    "on": "あく",
    "kun": "にぎ.る",
    "english": "Grip, Hold, Mould Sushi, Bribe",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Grip、ကိုင်、Mould Sushi、Bribe"
  },
  {
    "char": "揺",
    "on": "よう",
    "kun": "ゆ.れる、ゆ.る、ゆ.らぐ、ゆ.るぐ、ゆ.する、ゆ.さぶる、ゆ.すぶる、うご.く",
    "english": "Swing, Shake, Sway, Rock, Tremble, Vibrate",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Swing、လှုပ်ခြင်း、Sway、ကြီးကြပ်သော、လှုပ်ခြင်း、Vibrate"
  },
  {
    "char": "斎",
    "on": "さい",
    "kun": "とき、つつし.む、ものいみ、い.む、いわ.う、いつ.く",
    "english": "Purification, Buddhist Food, Room, Worship, Avoid, Alike",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Purification、Buddhist Food、Room、Worship、Avoid、Alike"
  },
  {
    "char": "暫",
    "on": "ざん",
    "kun": "しばら.く",
    "english": "Temporarily, A While, Moment, Long Time",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Temporarily、A While、Moment、ကြာသာချိန်"
  },
  {
    "char": "析",
    "on": "せき",
    "kun": "",
    "english": "Chop, Divide, Tear, Analyze",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Chop、ခွဲ、Tear、Analyze"
  },
  {
    "char": "枢",
    "on": "すう、しゅ",
    "kun": "とぼそ、からくり",
    "english": "Hinge, Pivot, Door",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Hinge、Pivot、တံခါး"
  },
  {
    "char": "軸",
    "on": "じく",
    "kun": "",
    "english": "Axis, Pivot, Stem, Stalk, Counter For Book Scrolls",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Axis、Pivot、Stem、Stalk、Counter For Book Scrolls"
  },
  {
    "char": "柄",
    "on": "へい",
    "kun": "がら、え、つか",
    "english": "Design, Pattern, Build, Nature, Character, Handle, Crank, Grip, Knob, Shaft",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "ဒီဇိုင်း、နဂါး、တည်ဆောက်、Nature、Character、Handle、Crank、Grip、Knob、Shaft"
  },
  {
    "char": "泊",
    "on": "はく",
    "kun": "と.まる、と.める",
    "english": "Overnight Stay, Put Up At, Ride At Anchor",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Overnight Stay、Put Up At、Ride At Anchor"
  },
  {
    "char": "滑",
    "on": "かつ、こつ",
    "kun": "すべ.る、なめ.らか",
    "english": "Slippery, Slide, Slip, Flunk",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Slippery、Slide、Slip、Flunk"
  },
  {
    "char": "潟",
    "on": "せき",
    "kun": "かた、-がた",
    "english": "Lagoon",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Lagoon"
  },
  {
    "char": "焦",
    "on": "しょう",
    "kun": "こ.げる、こ.がす、こ.がれる、あせ.る",
    "english": "Char, Hurry, Impatient, Irritate, Burn, Scorch, Singe",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Char、Hurry、Impatient、Irritate、လောင်း、Scorch、Singe"
  },
  {
    "char": "範",
    "on": "はん",
    "kun": "",
    "english": "Pattern, Example, Model",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "နဂါး、Example、မှန်ကန်စွာ"
  },
  {
    "char": "紛",
    "on": "ふん",
    "kun": "まぎ.れる、-まぎ.れ、まぎ.らす、まぎ.らわす、まぎ.らわしい",
    "english": "Distract, Be Mistaken For, Go Astray, Divert",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Distract、Be Mistaken For、Go Astray、Divert"
  },
  {
    "char": "糾",
    "on": "きゅう",
    "kun": "ただ.す",
    "english": "Twist, Ask, Investigate, Verify",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "ကိုက်ဖွဲ့、မေးသည်、စစ်ဆေး、Verify"
  },
  {
    "char": "綱",
    "on": "こう",
    "kun": "つな",
    "english": "Hawser, Class (genus), Rope, Cord, Cable",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Hawser、Class (genus)、Rope、Cord、Cable"
  },
  {
    "char": "網",
    "on": "もう",
    "kun": "あみ",
    "english": "Netting, Network",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Netting、Network"
  },
  {
    "char": "肝",
    "on": "かん",
    "kun": "きも",
    "english": "Liver, Pluck, Nerve, Chutzpah",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Liver、Pluck、Nerve、Chutzpah"
  },
  {
    "char": "芝",
    "on": "し",
    "kun": "しば",
    "english": "Turf, Lawn",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Turf、Lawn"
  },
  {
    "char": "荒",
    "on": "こう",
    "kun": "あら.い、あら-、あ.れる、あ.らす、-あ.らし、すさ.む",
    "english": "Laid Waste, Rough, Rude, Wild",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 9,
    "myanmar": "ပျက်စီး、ကျဉ်းမြောင်း、ကျဉ်းမြောင်း、ဝိညာဉ်"
  },
  {
    "char": "袋",
    "on": "たい、だい",
    "kun": "ふくろ",
    "english": "Sack, Bag, Pouch",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Sack、Bag、Pouch"
  },
  {
    "char": "誰",
    "on": "すい",
    "kun": "だれ、たれ、た",
    "english": "Who, Someone, Somebody",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 15,
    "myanmar": "ဘယ်သူ、Someone、Somebody"
  },
  {
    "char": "珍",
    "on": "ちん",
    "kun": "めずら.しい、たから",
    "english": "Rare, Curious, Strange",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 9,
    "myanmar": "ရာသီခွန်、Curious、Strange"
  },
  {
    "char": "裂",
    "on": "れつ",
    "kun": "さ.く、さ.ける、-ぎ.れ",
    "english": "Split, Rend, Tear",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "ခွဲ、Rend、Tear"
  },
  {
    "char": "襲",
    "on": "しゅう",
    "kun": "おそ.う、かさ.ね",
    "english": "Attack, Advance On, Succeed To, Pile, Heap",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 22,
    "myanmar": "တိုက်ခိုက်、Advance On、Succeed To、Pile、Heap"
  },
  {
    "char": "貢",
    "on": "こう、く",
    "kun": "みつ.ぐ",
    "english": "Tribute, Support, Finance",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Tribute、ထောက်ခံ、Finance"
  },
  {
    "char": "趣",
    "on": "しゅ",
    "kun": "おもむき、おもむ.く",
    "english": "Purport, Gist, Elegance, Interest, Proceed To, Tend, Become",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Purport、Gist、Elegance、Interest、Proceed To、Tend、Become"
  },
  {
    "char": "距",
    "on": "きょ",
    "kun": "へだ.たる、けづめ",
    "english": "Long-distance, Spur, Fetlock",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Long-distance、Spur、Fetlock"
  },
  {
    "char": "籍",
    "on": "せき",
    "kun": "",
    "english": "Enroll, Domiciliary Register, Membership",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 20,
    "myanmar": "မှတ်ပုံတင်သည်、Domiciliary Register、အဖွဲ့ဝင်မှု"
  },
  {
    "char": "露",
    "on": "ろ、ろう",
    "kun": "つゆ",
    "english": "Dew, Tears, Expose, Russia",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 21,
    "myanmar": "Dew、Tears、Expose、Russia"
  },
  {
    "char": "牧",
    "on": "ぼく",
    "kun": "まき",
    "english": "Breed, Care For, Shepherd, Feed, Pasture",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 8,
    "myanmar": "မွေးမြူ、Care For、Shepherd、Feed、Pasture"
  },
  {
    "char": "刷",
    "on": "さつ",
    "kun": "す.る、-ず.り、-ずり、は.く",
    "english": "Printing, Print, Brush",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 8,
    "myanmar": "Printing、ပုံနှိုက်、ဖြောင့်သည်"
  },
  {
    "char": "朗",
    "on": "ろう",
    "kun": "ほが.らか、あき.らか",
    "english": "Melodious, Clear, Bright, Serene, Cheerful",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 10,
    "myanmar": "Melodious、Clear、င်းလင်း、Serene、Cheerful"
  },
  {
    "char": "潮",
    "on": "ちょう",
    "kun": "しお、うしお",
    "english": "Tide, Salt Water, Opportunity",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 15,
    "myanmar": "Tide、Salt Water、Opportunity"
  },
  {
    "char": "即",
    "on": "そく",
    "kun": "つ.く、つ.ける、すなわ.ち",
    "english": "Instant, Namely, As Is, Conform, Agree, Adapt",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Instant、Namely、As Is、သက်ဆိုင်သည်、သဘောတူ、Adapt"
  },
  {
    "char": "垣",
    "on": "えん",
    "kun": "かき",
    "english": "Hedge, Fence, Wall",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Hedge、Fence、Wall"
  },
  {
    "char": "威",
    "on": "い",
    "kun": "おど.す、おど.し、おど.かす",
    "english": "Intimidate, Dignity, Majesty, Menace, Threaten",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Intimidate、Dignity、Majesty、Menace、Threaten"
  },
  {
    "char": "封",
    "on": "ふう、ほう",
    "kun": "",
    "english": "Seal, Closing",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 9,
    "myanmar": "အကြီးအလေးကြီး、Closing"
  },
  {
    "char": "筒",
    "on": "とう",
    "kun": "つつ",
    "english": "Cylinder, Pipe, Tube, Gun Barrel, Sleeve",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 12,
    "myanmar": "ပုလင်း、ပိုး、ပိုး、လက်နက်、လက်ရာ"
  },
  {
    "char": "岳",
    "on": "がく",
    "kun": "たけ",
    "english": "Point, Peak, Mountain",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Point、Peak、တောင်"
  },
  {
    "char": "慰",
    "on": "い",
    "kun": "なぐさ.める、なぐさ.む",
    "english": "Consolation, Amusement, Seduce, Cheer, Make Sport Of, Comfort, Console",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Consolation、Amusement、လှည့်ဖြားသည်、Cheer、Make Sport Of、Comfort、Console"
  },
  {
    "char": "懇",
    "on": "こん",
    "kun": "ねんご.ろ",
    "english": "Sociable, Kind, Courteous, Hospitable, Cordial",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Sociable、မျိုးစိတ်、Courteous、Hospitable、စိတ်ချစ်ကြိုး"
  },
  {
    "char": "懲",
    "on": "ちょう",
    "kun": "こ.りる、こ.らす、こ.らしめる",
    "english": "Penal, Chastise, Punish, Discipline",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Penal、Chastise、ပြစ်ဒဏ်、Discipline"
  },
  {
    "char": "摩",
    "on": "ま",
    "kun": "ま.する、さす.る、す.る",
    "english": "Chafe, Rub, Polish, Grind, Scrape",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Chafe、Rub、သန့်ရှင်းသည်、ချက်သည်、Scrape"
  },
  {
    "char": "擦",
    "on": "さつ",
    "kun": "す.る、す.れる、-ず.れ、こす.る、こす.れる",
    "english": "Grate, Rub, Scratch, Scrape, Chafe, Scour",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Grate、Rub、Scratch、Scrape、Chafe、ဆေးကြို"
  },
  {
    "char": "撲",
    "on": "ぼく",
    "kun": "",
    "english": "Slap, Strike, Hit, Beat, Tell, Speak",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Slap、Strike、ထိခိုက်、Beat、Tell、ပြောသည်"
  },
  {
    "char": "斉",
    "on": "せい、さい",
    "kun": "そろ.う、ひと.しい、ひと.しく、あたる、はやい",
    "english": "Adjusted, Alike, Equal, Similar Variety Of",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Adjusted、Alike、ညီမျှ、Similar Variety Of"
  },
  {
    "char": "旨",
    "on": "し",
    "kun": "むね、うま.い",
    "english": "Delicious, Relish, Show A Liking For, Purport, Will, Clever, Expert",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Delicious、Relish、Show A Liking For、Purport、Will、Clever、Expert"
  },
  {
    "char": "柔",
    "on": "じゅう、にゅう",
    "kun": "やわ.らか、やわ.らかい、やわ、やわ.ら",
    "english": "Tender, Weakness, Gentleness, Softness",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Tender、Weakness、Gentleness、Softness"
  },
  {
    "char": "沈",
    "on": "ちん、じん",
    "kun": "しず.む、しず.める",
    "english": "Sink, Be Submerged, Subside, Be Depressed, Aloes",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 7,
    "myanmar": "ကျ、Be Submerged、Subside、Be Depressed、Aloes"
  },
  {
    "char": "沼",
    "on": "しょう",
    "kun": "ぬま",
    "english": "Marsh, Lake, Bog, Swamp, Pond",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Marsh、Lake、Bog、Swamp、ရေကန်"
  },
  {
    "char": "泰",
    "on": "たい",
    "kun": "",
    "english": "Peaceful, Calm, Peace, Easy, Thailand, Extreme, Excessive, Great",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Peaceful、Calm、ငြိမ်ချမ်း、လွယ်ကူ、Thailand、Extreme、Excessive、ကြီးစာ"
  },
  {
    "char": "滅",
    "on": "めつ",
    "kun": "ほろ.びる、ほろ.ぶ、ほろ.ぼす",
    "english": "Destroy, Ruin, Overthrow, Perish",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "ဖျက်ဆီး、ပျက်စီး、Overthrow、Perish"
  },
  {
    "char": "滋",
    "on": "じ、し",
    "kun": "",
    "english": "Nourishing, More & More, Be Luxuriant, Planting, Turbidity",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Nourishing、More & More、Be Luxuriant、Planting、Turbidity"
  },
  {
    "char": "炉",
    "on": "ろ",
    "kun": "いろり",
    "english": "Hearth, Furnace, Kiln, Reactor",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Hearth、Furnace、Kiln、Reactor"
  },
  {
    "char": "琴",
    "on": "きん、ごん",
    "kun": "こと",
    "english": "Harp, Koto",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Harp、Koto"
  },
  {
    "char": "寸",
    "on": "すん",
    "kun": "",
    "english": "Measurement, Tenth Of A Shaku, A Little, Small",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 3,
    "myanmar": "Measurement、Tenth Of A Shaku、A Little、သေးလျား"
  },
  {
    "char": "竜",
    "on": "りゅう、りょう、ろう",
    "kun": "たつ、いせ",
    "english": "Dragon, Imperial",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Dragon、Imperial"
  },
  {
    "char": "縁",
    "on": "えん、-ねん",
    "kun": "ふち、ふちど.る、ゆかり、よすが、へり、えにし",
    "english": "Affinity, Relation, Connection, Edge, Border, Verge, Brink",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Affinity、Relation、Connection、Edge、အကန့်、Verge、Brink"
  },
  {
    "char": "翼",
    "on": "よく",
    "kun": "つばさ",
    "english": "Wing, Plane, Flank",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Wing、Plane、Flank"
  },
  {
    "char": "吉",
    "on": "きち、きつ",
    "kun": "よし",
    "english": "Good Luck, Joy, Congratulations",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Good Luck、Joy、Congratulations"
  },
  {
    "char": "刃",
    "on": "じん、にん",
    "kun": "は、やいば、き.る",
    "english": "Blade, Sword, Edge",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 3,
    "myanmar": "Blade、Sword、Edge"
  },
  {
    "char": "忍",
    "on": "にん",
    "kun": "しの.ぶ、しの.ばせる",
    "english": "Endure, Bear, Put Up With, Conceal, Secrete, Spy, Sneak",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Endure、ယူ、Put Up With、ဝှက်、Secrete、Spy、Sneak"
  },
  {
    "char": "桃",
    "on": "とう",
    "kun": "もも",
    "english": "Peach",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Peach"
  },
  {
    "char": "辛",
    "on": "しん",
    "kun": "から.い、つら.い、-づら.い、かのと",
    "english": "Spicy, Bitter, Hot, Acrid",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 7,
    "myanmar": "အရသာ、ခါးသီး、ပူ、ခါးသီး"
  },
  {
    "char": "謎",
    "on": "めい、べい",
    "kun": "なぞ",
    "english": "Riddle, Puzzle, Enigma, Hint, Tip",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Riddle、Puzzle、Enigma、Hint、Tip"
  },
  {
    "char": "侍",
    "on": "じ、し",
    "kun": "さむらい、はべ.る",
    "english": "Waiter, Samurai, Wait Upon, Serve",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Waiter、Samurai、Wait Upon、Serve"
  },
  {
    "char": "俺",
    "on": "えん",
    "kun": "おれ、われ",
    "english": "I, Myself",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 10,
    "myanmar": "I、Myself"
  },
  {
    "char": "叱",
    "on": "しつ、しち",
    "kun": "しか.る",
    "english": "Scold, Reprove",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Scold、နှိုက်ယှက်"
  },
  {
    "char": "娯",
    "on": "ご",
    "kun": "",
    "english": "Recreation, Pleasure",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Recreation、Pleasure"
  },
  {
    "char": "斗",
    "on": "と、とう",
    "kun": "",
    "english": "Big Dipper, Ten Sho (vol), Sake Dipper, Dots And Cross Radical (no. 68)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 4,
    "myanmar": "Big Dipper、Ten Sho (vol)、Sake Dipper、Dots And Cross Radical (no. 68)"
  },
  {
    "char": "朱",
    "on": "しゅ",
    "kun": "あけ",
    "english": "Vermilion, Cinnabar, Scarlet, Red, Bloody",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Vermilion、Cinnabar、Scarlet、Red、Bloody"
  },
  {
    "char": "丘",
    "on": "きゅう",
    "kun": "おか",
    "english": "Hill, Knoll",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 5,
    "myanmar": "တောင်、Knoll"
  },
  {
    "char": "梨",
    "on": "り",
    "kun": "なし",
    "english": "Pear Tree",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Pear Tree"
  },
  {
    "char": "僕",
    "on": "ぼく",
    "kun": "しもべ",
    "english": "Me, I (male), Servant, Manservant",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Me、I (male)、Servant、Manservant"
  },
  {
    "char": "匹",
    "on": "ひつ",
    "kun": "ひき",
    "english": "Equal, Head, Counter For Small Animals, Roll Of Cloth",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 4,
    "myanmar": "ညီမျှ、ဦးခေါင်း、Counter For Small Animals、Roll Of Cloth"
  },
  {
    "char": "叫",
    "on": "きょう",
    "kun": "さけ.ぶ",
    "english": "Shout, Exclaim, Yell",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Shout、Exclaim、Yell"
  },
  {
    "char": "釣",
    "on": "ちょう",
    "kun": "つ.る、つ.り、つ.り-",
    "english": "Angling, Fish, Catch, Allure, Ensnare",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Angling、ငါး、Catch、Allure、Ensnare"
  },
  {
    "char": "髪",
    "on": "はつ",
    "kun": "かみ",
    "english": "Hair Of The Head",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Hair Of The Head"
  },
  {
    "char": "嵐",
    "on": "らん",
    "kun": "あらし",
    "english": "Storm, Tempest",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Storm、Tempest"
  },
  {
    "char": "涙",
    "on": "るい、れい",
    "kun": "なみだ",
    "english": "Tears, Sympathy",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Tears、Sympathy"
  },
  {
    "char": "缶",
    "on": "かん",
    "kun": "かま",
    "english": "Tin Can, Container, Jar Radical (no. 121)",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Tin Can、Container、Jar Radical (no. 121)"
  },
  {
    "char": "姫",
    "on": "き",
    "kun": "ひめ、ひめ-",
    "english": "Princess",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Princess"
  },
  {
    "char": "棚",
    "on": "ほう",
    "kun": "たな、-だな",
    "english": "Shelf, Ledge, Rack, Mount, Mantle, Trellis",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Shelf、Ledge、Rack、Mount、Mantle、Trellis"
  },
  {
    "char": "粒",
    "on": "りゅう",
    "kun": "つぶ",
    "english": "Grains, Drop, Counter For Tiny Particles",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 11,
    "myanmar": "ဆူးပြာ、ချိုး、Counter For Tiny Particles"
  },
  {
    "char": "砲",
    "on": "ほう",
    "kun": "",
    "english": "Cannon, Gun",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Cannon、Gun"
  },
  {
    "char": "雷",
    "on": "らい",
    "kun": "かみなり、いかずち、いかづち",
    "english": "Thunder, Lightning Bolt",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Thunder、Lightning Bolt"
  },
  {
    "char": "芽",
    "on": "が",
    "kun": "め",
    "english": "Bud, Sprout, Spear, Germ",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 8,
    "myanmar": "Bud、Sprout、Spear、Germ"
  },
  {
    "char": "塔",
    "on": "とう",
    "kun": "",
    "english": "Pagoda, Tower, Steeple",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 12,
    "myanmar": "ပုထိုးတော်、တောင်တန်း、တောင်တန်း"
  },
  {
    "char": "澄",
    "on": "ちょう",
    "kun": "す.む、す.ます、-す.ます",
    "english": "Lucidity, Be Clear, Clear, Clarify, Settle, Strain, Look Grave",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Lucidity、Be Clear、Clear、Clarify、Settle、Strain、Look Grave"
  },
  {
    "char": "矛",
    "on": "む、ぼう",
    "kun": "ほこ",
    "english": "Halberd, Arms, Festival Float",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Halberd、လက်နက်、Festival Float"
  },
  {
    "char": "肌",
    "on": "き",
    "kun": "はだ",
    "english": "Texture, Skin, Body, Grain",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 6,
    "myanmar": "အသားအရေ、အသားအရေ、ခန္ဓာ、ဆူးပြာ"
  },
  {
    "char": "舟",
    "on": "しゅう",
    "kun": "ふね、ふな-、-ぶね",
    "english": "Boat, Ship",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 6,
    "myanmar": "လှေလှန်လှုပ်、သင်္ဘော်"
  },
  {
    "char": "鐘",
    "on": "しょう",
    "kun": "かね",
    "english": "Bell, Gong, Chimes",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 20,
    "myanmar": "Bell、Gong、Chimes"
  },
  {
    "char": "凶",
    "on": "きょう",
    "kun": "",
    "english": "Villain, Evil, Bad Luck, Disaster",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 4,
    "myanmar": "Villain、Evil、Bad Luck、Disaster"
  },
  {
    "char": "塊",
    "on": "かい、け",
    "kun": "かたまり、つちくれ",
    "english": "Clod, Lump, Chunk, Clot, Mass",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Clod、Lump、Chunk、သိပ့်、Mass"
  },
  {
    "char": "狩",
    "on": "しゅ",
    "kun": "か.る、か.り、-が.り",
    "english": "Hunt, Raid, Gather",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Hunt、Raid、စုဆည်း"
  },
  {
    "char": "頃",
    "on": "けい、きょう",
    "kun": "ころ、ごろ、しばら.く",
    "english": "Time, About, Toward",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 11,
    "myanmar": "အချိန်、About、Toward"
  },
  {
    "char": "魂",
    "on": "こん",
    "kun": "たましい、たま",
    "english": "Soul, Spirit",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Soul、Spirit"
  },
  {
    "char": "脚",
    "on": "きゃく、きゃ、かく",
    "kun": "あし",
    "english": "Skids, Leg, Undercarriage, Lower Part, Base",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Skids、Leg、Undercarriage、Lower Part、အခြေခံ"
  },
  {
    "char": "井",
    "on": "せい、しょう",
    "kun": "い",
    "english": "Well, Well Crib, Town, Community",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 4,
    "myanmar": "Well、Well Crib、မြို့、Community"
  },
  {
    "char": "呪",
    "on": "じゅ、しゅ、しゅう、ず",
    "kun": "まじな.う、のろ.い、まじな.い、のろ.う",
    "english": "Spell, Curse, Charm, Malediction",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Spell、Curse、လက်မှတ်、Malediction"
  },
  {
    "char": "嬢",
    "on": "じょう",
    "kun": "むすめ",
    "english": "Lass, Girl, Miss, Daughter",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Lass、Girl、Miss、Daughter"
  },
  {
    "char": "暦",
    "on": "れき、りゃく",
    "kun": "こよみ",
    "english": "Calendar, Almanac",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Calendar、Almanac"
  },
  {
    "char": "曇",
    "on": "どん",
    "kun": "くも.る",
    "english": "Cloudy Weather, Cloud Up",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Cloudy Weather、မိုးကောင်းကင်"
  },
  {
    "char": "眺",
    "on": "ちょう",
    "kun": "なが.める",
    "english": "Stare, Watch, Look At, See, Scrutinize",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Stare、ကြည့်、Look At、မြင်သည်、Scrutinize"
  },
  {
    "char": "裸",
    "on": "ら",
    "kun": "はだか",
    "english": "Naked, Nude, Uncovered, Partially Clothed",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Naked、Nude、Uncovered、Partially Clothed"
  },
  {
    "char": "賭",
    "on": "と",
    "kun": "か.ける、かけ",
    "english": "Gamble, Wager, Bet",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Gamble、Wager、Bet"
  },
  {
    "char": "疲",
    "on": "ひ",
    "kun": "つか.れる、-づか.れ、つか.らす",
    "english": "Exhausted, Tire, Weary",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Exhausted、Tire、Weary"
  },
  {
    "char": "塾",
    "on": "じゅく",
    "kun": "",
    "english": "Cram School, Private School",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Cram School、Private School"
  },
  {
    "char": "卓",
    "on": "たく",
    "kun": "",
    "english": "Eminent, Table, Desk, High",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Eminent、စားပွဲ、စားပွဲ、မြင့်"
  },
  {
    "char": "磨",
    "on": "ま",
    "kun": "みが.く、す.る",
    "english": "Grind, Polish, Scour, Improve, Brush (teeth)",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 16,
    "myanmar": "ချက်သည်、သန့်ရှင်းသည်、ဆေးကြို、ပိုမိုကောင်းမွန်စေသည်、Brush (teeth)"
  },
  {
    "char": "菌",
    "on": "きん",
    "kun": "",
    "english": "Germ, Fungus, Bacteria",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Germ、Fungus、Bacteria"
  },
  {
    "char": "陰",
    "on": "いん",
    "kun": "かげ、かげ.る",
    "english": "Shade, Yin, Negative, Sex Organs, Secret, Shadow",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Shade、Yin、Negative、Sex Organs、Secret、Shadow"
  },
  {
    "char": "霊",
    "on": "れい、りょう",
    "kun": "たま",
    "english": "Spirits, Soul",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Spirits、Soul"
  },
  {
    "char": "湿",
    "on": "しつ、しゅう",
    "kun": "しめ.る、しめ.す、うるお.う、うるお.す",
    "english": "Damp, Wet, Moist",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Damp、Wet、Moist"
  },
  {
    "char": "硬",
    "on": "こう",
    "kun": "かた.い",
    "english": "Stiff, Hard",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 12,
    "myanmar": "ကြမ်းတမ်း、ခက်ခဲ"
  },
  {
    "char": "稼",
    "on": "か",
    "kun": "かせ.ぐ",
    "english": "Earnings, Work, Earn Money",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Earnings、အလုပ်、Earn Money"
  },
  {
    "char": "嫁",
    "on": "か",
    "kun": "よめ、とつ.ぐ、い.く、ゆ.く",
    "english": "Marry Into, Bride",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Marry Into、Bride"
  },
  {
    "char": "溝",
    "on": "こう",
    "kun": "みぞ",
    "english": "Gutter, Ditch, Sewer, Drain, 10**32",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Gutter、Ditch、Sewer、Drain、10**32"
  },
  {
    "char": "滝",
    "on": "ろう、そう",
    "kun": "たき",
    "english": "Waterfall, Rapids, Cascade",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Waterfall、Rapids、Cascade"
  },
  {
    "char": "狂",
    "on": "きょう",
    "kun": "くる.う、くる.おしい、くるお.しい",
    "english": "Lunatic, Insane, Crazy, Confuse",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Lunatic、Insane、Crazy、အလျှာ့"
  },
  {
    "char": "墨",
    "on": "ぼく",
    "kun": "すみ",
    "english": "Black Ink, India Ink, Ink Stick, Mexico",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Black Ink、India Ink、Ink Stick、Mexico"
  },
  {
    "char": "穏",
    "on": "おん",
    "kun": "おだ.やか",
    "english": "Calm, Quiet, Moderation",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Calm、Quiet、Moderation"
  },
  {
    "char": "鈍",
    "on": "どん",
    "kun": "にぶ.い、にぶ.る、にぶ-、なま.る、なまく.ら",
    "english": "Dull, Slow, Foolish, Blunt",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Dull、နှေးကာ、Foolish、Blunt"
  },
  {
    "char": "魔",
    "on": "ま",
    "kun": "",
    "english": "Witch, Demon, Evil Spirit",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 21,
    "myanmar": "Witch、Demon、Evil Spirit"
  },
  {
    "char": "寮",
    "on": "りょう",
    "kun": "",
    "english": "Dormitory, Hostel, Villa, Tea Pavillion",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Dormitory、Hostel、Villa、Tea Pavillion"
  },
  {
    "char": "盆",
    "on": "ぼん",
    "kun": "",
    "english": "Basin, Lantern Festival, Tray",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Basin、Lantern Festival、Tray"
  },
  {
    "char": "棟",
    "on": "とう",
    "kun": "むね、むな-",
    "english": "Ridgepole, Ridge",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Ridgepole、Ridge"
  },
  {
    "char": "斬",
    "on": "ざん、さん、せん、ぜん",
    "kun": "き.る",
    "english": "Beheading, Kill, Murder",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Beheading、Kill、Murder"
  },
  {
    "char": "寧",
    "on": "ねい",
    "kun": "むし.ろ",
    "english": "Rather, Preferably, Peaceful, Quiet, Tranquility",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "သာမက、Preferably、Peaceful、Quiet、Tranquility"
  },
  {
    "char": "椅",
    "on": "い",
    "kun": "",
    "english": "Chair",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Chair"
  },
  {
    "char": "歳",
    "on": "さい、せい",
    "kun": "とし、とせ、よわい",
    "english": "Year-end, Age, Occasion, Opportunity",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Year-end、အသက်、အချိန်、Opportunity"
  },
  {
    "char": "涼",
    "on": "りょう",
    "kun": "すず.しい、すず.む、すず.やか、うす.い、ひや.す、まことに",
    "english": "Refreshing, Nice And Cool",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 11,
    "myanmar": "အလင်းရာ、Nice And Cool"
  },
  {
    "char": "猿",
    "on": "えん",
    "kun": "さる",
    "english": "Monkey",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Monkey"
  },
  {
    "char": "瞳",
    "on": "どう、とう",
    "kun": "ひとみ",
    "english": "Pupil (of Eye)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Pupil (of Eye)"
  },
  {
    "char": "鍵",
    "on": "けん",
    "kun": "かぎ",
    "english": "Key",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Key"
  },
  {
    "char": "零",
    "on": "れい",
    "kun": "ぜろ、こぼ.す、こぼ.れる",
    "english": "Zero, Spill, Overflow, Nothing, Cipher",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Zero、Spill、Overflow、Nothing、Cipher"
  },
  {
    "char": "碁",
    "on": "ご",
    "kun": "",
    "english": "Go",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "သွား"
  },
  {
    "char": "租",
    "on": "そ",
    "kun": "",
    "english": "Tariff, Crop Tax, Borrowing",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Tariff、Crop Tax、Borrowing"
  },
  {
    "char": "幽",
    "on": "ゆう",
    "kun": "ふか.い、かす.か、くら.い、しろ.い",
    "english": "Seclude, Confine To A Room, Deep, Profound, Secluded, Faint, Dark, Tranquil, Calm",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Seclude、Confine To A Room、Deep、Profound、Secluded、Faint、ှောင်、Tranquil、Calm"
  },
  {
    "char": "泡",
    "on": "ほう",
    "kun": "あわ",
    "english": "Bubbles, Foam, Suds, Froth",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Bubbles、Foam、Suds、Froth"
  },
  {
    "char": "癖",
    "on": "へき",
    "kun": "くせ、くせ.に",
    "english": "Mannerism, Habit, Vice, Trait, Fault, Kink",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Mannerism、Habit、ဒုတိယ、Trait、အမှား、Kink"
  },
  {
    "char": "鍛",
    "on": "たん",
    "kun": "きた.える",
    "english": "Forge, Discipline, Train",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Forge、Discipline、သင်ကြားသည်"
  },
  {
    "char": "錬",
    "on": "れん",
    "kun": "ね.る",
    "english": "Tempering, Refine, Drill, Train, Polish",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Tempering、သန့်ရှင်းသည်、သင်ကြားသည်、သင်ကြားသည်、သန့်ရှင်းသည်"
  },
  {
    "char": "穂",
    "on": "すい",
    "kun": "ほ",
    "english": "Ear, Ear (grain), Head, Crest (wave)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "နား、Ear (grain)、ဦးခေါင်း、Crest (wave)"
  },
  {
    "char": "帝",
    "on": "てい",
    "kun": "みかど",
    "english": "Sovereign, The Emperor, God, Creator",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Sovereign、The Emperor、ဘုရား、Creator"
  },
  {
    "char": "瞬",
    "on": "しゅん",
    "kun": "またた.く、まじろ.ぐ",
    "english": "Wink, Blink, Twinkle",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Wink、Blink、Twinkle"
  },
  {
    "char": "菊",
    "on": "きく",
    "kun": "",
    "english": "Chrysanthemum",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Chrysanthemum"
  },
  {
    "char": "誇",
    "on": "こ",
    "kun": "ほこ.る",
    "english": "Boast, Be Proud, Pride, Triumphantly",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Boast、Be Proud、Pride、Triumphantly"
  },
  {
    "char": "阻",
    "on": "そ",
    "kun": "はば.む",
    "english": "Thwart, Separate From, Prevent, Obstruct, Deter, Impede",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Thwart、Separate From、Prevent、Obstruct、Deter、Impede"
  },
  {
    "char": "黙",
    "on": "もく、ぼく",
    "kun": "だま.る、もだ.す",
    "english": "Silence, Become Silent, Stop Speaking, Leave As Is",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Silence、Become Silent、Stop Speaking、Leave As Is"
  },
  {
    "char": "俵",
    "on": "ひょう",
    "kun": "たわら",
    "english": "Bag, Bale, Sack, Counter For Bags",
    "jlpt_new": 1,
    "grade": 5,
    "strokes": 10,
    "myanmar": "Bag、Bale、Sack、Counter For Bags"
  },
  {
    "char": "綿",
    "on": "めん",
    "kun": "わた",
    "english": "Cotton",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 14,
    "myanmar": "Cotton"
  },
  {
    "char": "架",
    "on": "か",
    "kun": "か.ける、か.かる",
    "english": "Erect, Frame, Mount, Support, Shelf, Construct",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Erect、ခြား、Mount、ထောက်ခံ、Shelf、တည်ဆောက်"
  },
  {
    "char": "砕",
    "on": "さい",
    "kun": "くだ.く、くだ.ける",
    "english": "Smash, Break, Crush, Familiar, Popular",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Smash、Break、Crush、Familiar、Popular"
  },
  {
    "char": "粘",
    "on": "ねん",
    "kun": "ねば.る",
    "english": "Sticky, Glutinous, Greasy, Persevere",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Sticky、Glutinous、Greasy、Persevere"
  },
  {
    "char": "粧",
    "on": "しょう",
    "kun": "",
    "english": "Cosmetics, Adorn (one's Person)",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Cosmetics、Adorn (one's Person)"
  },
  {
    "char": "欺",
    "on": "ぎ",
    "kun": "あざむ.く",
    "english": "Deceit, Cheat, Delude",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Deceit、Cheat、Delude"
  },
  {
    "char": "詐",
    "on": "さ",
    "kun": "いつわ.る",
    "english": "Lie, Falsehood, Deceive, Pretend",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Lie、Falsehood、Deceive、အလိုမရှိဘဲ"
  },
  {
    "char": "霧",
    "on": "む、ぼう、ぶ",
    "kun": "きり",
    "english": "Fog, Mist",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 19,
    "myanmar": "Fog、Mist"
  },
  {
    "char": "柳",
    "on": "りゅう",
    "kun": "やなぎ",
    "english": "Willow",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Willow"
  },
  {
    "char": "佐",
    "on": "さ",
    "kun": "",
    "english": "Assistant, Help",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "အကူအညီ、ကူညီ"
  },
  {
    "char": "尺",
    "on": "しゃく",
    "kun": "",
    "english": "Shaku, Japanese Foot, Measure, Scale, Rule",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 4,
    "myanmar": "Shaku、Japanese Foot、တိုင်းတာ、Scale、စည်းကမ်း"
  },
  {
    "char": "哀",
    "on": "あい",
    "kun": "あわ.れ、あわ.れむ、かな.しい",
    "english": "Pathetic, Grief, Sorrow, Pathos, Pity, Sympathize",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Pathetic、Grief、Sorrow、Pathos、Pity、Sympathize"
  },
  {
    "char": "唇",
    "on": "しん",
    "kun": "くちびる",
    "english": "Lips",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Lips"
  },
  {
    "char": "塀",
    "on": "へい、べい",
    "kun": "",
    "english": "Fence, Wall, (kokuji)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Fence、Wall、(kokuji)"
  },
  {
    "char": "墜",
    "on": "つい",
    "kun": "お.ちる、お.つ",
    "english": "Crash, Fall (down)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Crash、Fall (down)"
  },
  {
    "char": "如",
    "on": "じょ、にょ",
    "kun": "ごと.し",
    "english": "Likeness, Like, Such As, As If, Better, Best, Equal",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Likeness、နှစ်သက်、Such As、As If、Better、Best、ညီမျှ"
  },
  {
    "char": "婆",
    "on": "ば",
    "kun": "ばば、ばあ",
    "english": "Old Woman, Grandma, Wet Nurse",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Old Woman、Grandma、Wet Nurse"
  },
  {
    "char": "崖",
    "on": "がい、げ、ぎ",
    "kun": "がけ、きし、はて",
    "english": "Cliff, Bluff, Precipice",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 11,
    "myanmar": "ကြီးကြပ်သော、Bluff、Precipice"
  },
  {
    "char": "帽",
    "on": "ぼう、もう",
    "kun": "ずきん、おお.う",
    "english": "Cap, Headgear",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 12,
    "myanmar": "ဦးထုပ်、ဦးထုပ်"
  },
  {
    "char": "幣",
    "on": "へい",
    "kun": "ぬさ",
    "english": "Cash, Bad Habit, Humble Prefix, Gift, Shinto Offerings Of Cloth, Rope, Cut Paper",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Cash、Bad Habit、Humble Prefix、Gift、Shinto Offerings Of Cloth、Rope、Cut Paper"
  },
  {
    "char": "恨",
    "on": "こん",
    "kun": "うら.む、うら.めしい",
    "english": "Regret, Bear A Grudge, Resentment, Malice, Hatred",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Regret、Bear A Grudge、Resentment、Malice、Hatred"
  },
  {
    "char": "憎",
    "on": "ぞう",
    "kun": "にく.む、にく.い、にく.らしい、にく.しみ",
    "english": "Hate, Detest",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 14,
    "myanmar": "အမုန်း、အမုန်း"
  },
  {
    "char": "憩",
    "on": "けい",
    "kun": "いこ.い、いこ.う",
    "english": "Recess, Rest, Relax, Repose",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Recess、နားလည်း、Relax、Repose"
  },
  {
    "char": "扇",
    "on": "せん",
    "kun": "おうぎ",
    "english": "Fan, Folding Fan",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Fan、Folding Fan"
  },
  {
    "char": "扉",
    "on": "ひ",
    "kun": "とびら",
    "english": "Front Door, Title Page, Front Page",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Front Door、Title Page、Front Page"
  },
  {
    "char": "挿",
    "on": "そう",
    "kun": "さ.す、はさ.む",
    "english": "Insert, Put In, Graft, Wear (sword)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Insert、Put In、Graft、Wear (sword)"
  },
  {
    "char": "掌",
    "on": "しょう",
    "kun": "てのひら、たなごころ",
    "english": "Manipulate, Rule, Administer, Conduct, Palm Of Hand",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Manipulate、စည်းကမ်း、Administer、လုပ်ဆောင်သည်、Palm Of Hand"
  },
  {
    "char": "滴",
    "on": "てき",
    "kun": "しずく、したた.る",
    "english": "Drip, Drop",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Drip、ချိုး"
  },
  {
    "char": "炊",
    "on": "すい",
    "kun": "た.く、-だ.き",
    "english": "Cook, Boil",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Cook、လောင်း"
  },
  {
    "char": "爽",
    "on": "そう",
    "kun": "あき.らか、さわ.やか、たがう",
    "english": "Refreshing, Bracing, Resonant, Sweet, Clear",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "အလင်းရာ、Bracing、Resonant、Sweet、Clear"
  },
  {
    "char": "畳",
    "on": "じょう、ちょう",
    "kun": "たた.む、たたみ、かさ.なる",
    "english": "Tatami Mat, Counter For Tatami Mats, Fold, Shut Up, Do Away With",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Tatami Mat、Counter For Tatami Mats、ပေါင်းစပ်、ပိတ်、ဖျက်ဆီး"
  },
  {
    "char": "瞭",
    "on": "りょう",
    "kun": "あきらか",
    "english": "Clear",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Clear"
  },
  {
    "char": "箸",
    "on": "ちょ、ちゃく",
    "kun": "はし",
    "english": "Chopsticks",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Chopsticks"
  },
  {
    "char": "胴",
    "on": "どう",
    "kun": "",
    "english": "Trunk, Torso, Hull (ship), Hub Of Wheel",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Trunk、Torso、Hull (ship)、Hub Of Wheel"
  },
  {
    "char": "芯",
    "on": "しん",
    "kun": "",
    "english": "Wick",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Wick"
  },
  {
    "char": "虹",
    "on": "こう",
    "kun": "にじ",
    "english": "Rainbow",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Rainbow"
  },
  {
    "char": "帳",
    "on": "ちょう",
    "kun": "とばり",
    "english": "Notebook, Account Book, Album, Curtain, Veil, Net, Tent",
    "jlpt_new": 1,
    "grade": 3,
    "strokes": 11,
    "myanmar": "Notebook、Account Book、Album、Curtain、မျက်နှာဖုံး、Net、Tent"
  },
  {
    "char": "蚊",
    "on": "ぶん",
    "kun": "か",
    "english": "Mosquito",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Mosquito"
  },
  {
    "char": "蛇",
    "on": "じゃ、だ、い、や",
    "kun": "へび",
    "english": "Snake, Serpent, Hard Drinker",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Snake、Serpent、Hard Drinker"
  },
  {
    "char": "貼",
    "on": "てん、ちょう",
    "kun": "は.る、つ.く",
    "english": "Stick, Paste, Apply",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Stick、Paste、Apply"
  },
  {
    "char": "辱",
    "on": "じょく",
    "kun": "はずかし.める",
    "english": "Embarrass, Humiliate, Shame",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Embarrass、Humiliate、Shame"
  },
  {
    "char": "鉢",
    "on": "はち、はつ",
    "kun": "",
    "english": "Bowl, Rice Tub, Pot, Crown",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Bowl、Rice Tub、Pot、Crown"
  },
  {
    "char": "闇",
    "on": "あん、おん",
    "kun": "やみ、くら.い",
    "english": "Get Dark, Gloom, Disorder",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Get Dark、Gloom、အချိန်အခါ"
  },
  {
    "char": "隙",
    "on": "げき、きゃく、けき",
    "kun": "すき、す.く、す.かす、ひま",
    "english": "Crevice, Fissure, Discord, Opportunity, Leisure",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Crevice、Fissure、Discord、Opportunity、Leisure"
  },
  {
    "char": "霜",
    "on": "そう",
    "kun": "しも",
    "english": "Frost",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Frost"
  },
  {
    "char": "飢",
    "on": "き",
    "kun": "う.える",
    "english": "Hungry, Starve",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "အါးထား、Starve"
  },
  {
    "char": "餓",
    "on": "が",
    "kun": "う.える",
    "english": "Starve, Hungry, Thirst",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Starve、အါးထား、Thirst"
  },
  {
    "char": "畜",
    "on": "ちく",
    "kun": "",
    "english": "Livestock, Domestic Fowl And Animals",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 10,
    "myanmar": "သတ္တဝါ、Domestic Fowl And Animals"
  },
  {
    "char": "迅",
    "on": "じん",
    "kun": "",
    "english": "Swift, Fast",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Swift、လွယ်ကူ"
  },
  {
    "char": "騎",
    "on": "き",
    "kun": "",
    "english": "Equestrian, Riding On Horses, Counter For Equestrians",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Equestrian、Riding On Horses、Counter For Equestrians"
  },
  {
    "char": "蓄",
    "on": "ちく",
    "kun": "たくわ.える",
    "english": "Amass, Raise, Hoard, Store",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Amass、တက်လာ、Hoard、သိုလှောင်သည်"
  },
  {
    "char": "尽",
    "on": "じん、さん",
    "kun": "つ.くす、-つ.くす、-づ.くし、-つ.く、-づ.く、-ず.く、つ.きる、つ.かす、さかづき、ことごと.く、つか、つき",
    "english": "Exhaust, Use Up, Run Out Of, Deplete, Befriend, Serve",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Exhaust、Use Up、Run Out Of、Deplete、Befriend、Serve"
  },
  {
    "char": "彩",
    "on": "さい",
    "kun": "いろど.る",
    "english": "Coloring, Paint, Makeup",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Coloring、Paint、Makeup"
  },
  {
    "char": "憶",
    "on": "おく",
    "kun": "",
    "english": "Recollection, Think, Remember",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Recollection、အတွေးအမြင်ဆွဲ、မှတ်မိ"
  },
  {
    "char": "溶",
    "on": "よう",
    "kun": "と.ける、と.かす、と.く",
    "english": "Melt, Dissolve, Thaw",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Melt、Dissolve、Thaw"
  },
  {
    "char": "耐",
    "on": "たい",
    "kun": "た.える",
    "english": "-proof, Enduring",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "-proof、Enduring"
  },
  {
    "char": "踊",
    "on": "よう",
    "kun": "おど.る",
    "english": "Jump, Dance, Leap, Skip",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Jump、Dance、Leap、Skip"
  },
  {
    "char": "賢",
    "on": "けん",
    "kun": "かしこ.い",
    "english": "Intelligent, Wise, Wisdom, Cleverness",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Intelligent、Wise、Wisdom、Cleverness"
  },
  {
    "char": "輝",
    "on": "き",
    "kun": "かがや.く",
    "english": "Radiance, Shine, Sparkle, Gleam, Twinkle",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Radiance、လင်းလင်း、Sparkle、Gleam、Twinkle"
  },
  {
    "char": "脅",
    "on": "きょう",
    "kun": "おびや.かす、おど.す、おど.かす",
    "english": "Threaten, Coerce",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Threaten、Coerce"
  },
  {
    "char": "麻",
    "on": "ま、まあ",
    "kun": "あさ",
    "english": "Hemp, Flax, Numb",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Hemp、Flax、Numb"
  },
  {
    "char": "灯",
    "on": "とう",
    "kun": "ひ、ほ-、ともしび、とも.す、あかり",
    "english": "Lamp, A Light, Light, Counter For Lights",
    "jlpt_new": 2,
    "grade": 4,
    "strokes": 6,
    "myanmar": "မီးထိုး、A Light、အလင်း、Counter For Lights"
  },
  {
    "char": "咲",
    "on": "しょう",
    "kun": "さ.く、-ざき",
    "english": "Blossom, Bloom",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Blossom、Bloom"
  },
  {
    "char": "培",
    "on": "ばい",
    "kun": "つちか.う",
    "english": "Cultivate, Foster",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Cultivate、Foster"
  },
  {
    "char": "悔",
    "on": "かい",
    "kun": "く.いる、く.やむ、くや.しい",
    "english": "Repent, Regret",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Repent、Regret"
  },
  {
    "char": "脇",
    "on": "きょう",
    "kun": "わき、わけ",
    "english": "Armpit, The Other Way, Another Place, Flank, Supporting Role",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Armpit、The Other Way、Another Place、Flank、Supporting Role"
  },
  {
    "char": "遂",
    "on": "すい",
    "kun": "と.げる、つい.に",
    "english": "Consummate, Accomplish, Attain, Commit (suicide)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Consummate、Accomplish、Attain、Commit (suicide)"
  },
  {
    "char": "班",
    "on": "はん",
    "kun": "",
    "english": "Squad, Corps, Unit, Group",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 10,
    "myanmar": "Squad、Corps、Unit、အဖွဲ့"
  },
  {
    "char": "塗",
    "on": "と",
    "kun": "ぬ.る、ぬ.り、まみ.れる",
    "english": "Paint, Plaster, Daub, Smear, Coating",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Paint、Plaster、Daub、Smear、Coating"
  },
  {
    "char": "斜",
    "on": "しゃ",
    "kun": "なな.め、はす",
    "english": "Diagonal, Slanting, Oblique",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Diagonal、Slanting、Oblique"
  },
  {
    "char": "殴",
    "on": "おう",
    "kun": "なぐ.る",
    "english": "Assault, Hit, Beat, Thrash",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Assault、ထိခိုက်、Beat、Thrash"
  },
  {
    "char": "盾",
    "on": "じゅん",
    "kun": "たて",
    "english": "Shield, Escutcheon, Pretext",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Shield、Escutcheon、Pretext"
  },
  {
    "char": "穫",
    "on": "かく",
    "kun": "",
    "english": "Harvest, Reap",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Harvest、Reap"
  },
  {
    "char": "巾",
    "on": "きん、ふく",
    "kun": "おお.い、ちきり、きれ",
    "english": "Towel, Hanging Scroll, Width, Cloth Radical (no. 50)",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 3,
    "myanmar": "Towel、ကြီးကလေး、အလျား、Cloth Radical (no. 50)"
  },
  {
    "char": "駒",
    "on": "く",
    "kun": "こま",
    "english": "Pony, Horse, Colt",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Pony、Horse、Colt"
  },
  {
    "char": "紫",
    "on": "し",
    "kun": "むらさき",
    "english": "Purple, Violet",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Purple、Violet"
  },
  {
    "char": "抽",
    "on": "ちゅう",
    "kun": "ひき-",
    "english": "Pluck, Pull, Extract, Excel",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Pluck、Pull、Extract、Excel"
  },
  {
    "char": "誓",
    "on": "せい",
    "kun": "ちか.う",
    "english": "Vow, Swear, Pledge",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Vow、Swear、Pledge"
  },
  {
    "char": "悟",
    "on": "ご",
    "kun": "さと.る",
    "english": "Enlightenment, Perceive, Discern, Realize, Understand",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Enlightenment、Perceive、Discern、Realize、နားလည်"
  },
  {
    "char": "拓",
    "on": "たく",
    "kun": "ひら.く",
    "english": "Clear (the Land), Open, Break Up (land)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Clear (the Land)、ဖွင့်、Break Up (land)"
  },
  {
    "char": "拘",
    "on": "こう",
    "kun": "かか.わる",
    "english": "Arrest, Seize, Concerned, Adhere To, Despite",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Arrest、Seize、Concerned、Adhere To、Despite"
  },
  {
    "char": "礎",
    "on": "そ",
    "kun": "いしずえ",
    "english": "Cornerstone, Foundation Stone",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Cornerstone、Foundation Stone"
  },
  {
    "char": "鶴",
    "on": "かく",
    "kun": "つる",
    "english": "Crane, Stork",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 21,
    "myanmar": "Crane、Stork"
  },
  {
    "char": "刈",
    "on": "がい、かい",
    "kun": "か.る",
    "english": "Reap, Cut, Clip, Trim, Prune",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 4,
    "myanmar": "Reap、Cut、Clip、Trim、Prune"
  },
  {
    "char": "剛",
    "on": "ごう",
    "kun": "",
    "english": "Sturdy, Strength",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Sturdy、အား"
  },
  {
    "char": "唯",
    "on": "ゆい、い",
    "kun": "ただ",
    "english": "Solely, Only, Merely, Simply",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "တစ်ဦးတည်း、Only、Merely、Simply"
  },
  {
    "char": "壇",
    "on": "だん、たん",
    "kun": "",
    "english": "Podium, Stage, Rostrum, Terrace",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Podium、အဆင့်、Rostrum、Terrace"
  },
  {
    "char": "尼",
    "on": "に",
    "kun": "あま",
    "english": "Nun",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Nun"
  },
  {
    "char": "概",
    "on": "がい",
    "kun": "おおむ.ね",
    "english": "Outline, Condition, Approximation, Generally",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "အကြံပေးချက်、အခြေအနေ、Approximation、အထွေထွေ"
  },
  {
    "char": "浸",
    "on": "しん",
    "kun": "ひた.す、ひた.る、つ.かる",
    "english": "Immersed, Soak, Dip, Steep, Moisten, Wet, Dunk",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Immersed、Soak、Dip、Steep、Moisten、Wet、Dunk"
  },
  {
    "char": "淡",
    "on": "たん",
    "kun": "あわ.い",
    "english": "Thin, Faint, Pale, Fleeting",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "ပေါ့ပြူ、Faint、Pale、Fleeting"
  },
  {
    "char": "煮",
    "on": "しゃ",
    "kun": "に.る、-に、に.える、に.やす",
    "english": "Boil, Cook",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "လောင်း、Cook"
  },
  {
    "char": "覆",
    "on": "ふく",
    "kun": "おお.う、くつがえ.す、くつがえ.る",
    "english": "Capsize, Cover, Shade, Mantle, Be Ruined",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Capsize、ဖုံးကွယ်、Shade、Mantle、Be Ruined"
  },
  {
    "char": "謀",
    "on": "ぼう、む",
    "kun": "はか.る、たばか.る、はかりごと",
    "english": "Conspire, Cheat, Impose On, Plan, Devise, Scheme, Have In Mind, Deceive",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Conspire、Cheat、Impose On、အစီအစဉ်、Devise、စchema、Have In Mind、Deceive"
  },
  {
    "char": "陶",
    "on": "とう",
    "kun": "すえ",
    "english": "Pottery, Porcelain",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Pottery、Porcelain"
  },
  {
    "char": "隔",
    "on": "かく",
    "kun": "へだ.てる、へだ.たる",
    "english": "Isolate, Alternate, Distance, Separate, Gulf",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Isolate、Alternate、Distance、ခွဲခြား、သမုဒ္ဒရာ"
  },
  {
    "char": "征",
    "on": "せい",
    "kun": "",
    "english": "Subjugate, Attack The Rebellious, Collect Taxes",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Subjugate、Attack The Rebellious、Collect Taxes"
  },
  {
    "char": "陛",
    "on": "へい",
    "kun": "",
    "english": "Highness, Steps (of Throne)",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 10,
    "myanmar": "Highness、Steps (of Throne)"
  },
  {
    "char": "俗",
    "on": "ぞく",
    "kun": "",
    "english": "Vulgar, Customs, Manners, Worldliness, Mundane Things",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Vulgar、Customs、Manners、Worldliness、Mundane Things"
  },
  {
    "char": "桑",
    "on": "そう",
    "kun": "くわ",
    "english": "Mulberry",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Mulberry"
  },
  {
    "char": "潤",
    "on": "じゅん",
    "kun": "うるお.う、うるお.す、うる.む",
    "english": "Wet, Be Watered, Profit By, Receive Benefits, Favor, Charm, Steep",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Wet、Be Watered、Profit By、Receive Benefits、Favor、လက်မှတ်、Steep"
  },
  {
    "char": "珠",
    "on": "しゅ",
    "kun": "たま",
    "english": "Pearl, Gem, Jewel",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Pearl、Gem、ကျောက်တုံး"
  },
  {
    "char": "衰",
    "on": "すい",
    "kun": "おとろ.える",
    "english": "Decline, Wane, Weaken",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Decline、လျှော့ချ、Weaken"
  },
  {
    "char": "奨",
    "on": "しょう、そう",
    "kun": "すす.める",
    "english": "Exhort, Urge, Encourage",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Exhort、Urge、Encourage"
  },
  {
    "char": "劣",
    "on": "れつ",
    "kun": "おと.る",
    "english": "Inferiority, Be Inferior To, Be Worse",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Inferiority、Be Inferior To、Be Worse"
  },
  {
    "char": "勘",
    "on": "かん",
    "kun": "",
    "english": "Intuition, Perception, Check, Compare, Sixth Sense",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Intuition、Perception、Check、နှိုင်းယှဉ်、Sixth Sense"
  },
  {
    "char": "妃",
    "on": "ひ",
    "kun": "きさき",
    "english": "Queen, Princess",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Queen、Princess"
  },
  {
    "char": "丈",
    "on": "じょう",
    "kun": "たけ、だけ",
    "english": "Length, Ten Shaku, Measure, Mr., Ms., Height, Stature, All (one Has), Only, That's All, Merely",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 3,
    "myanmar": "Length、Ten Shaku、တိုင်းတာ、Mr.、Ms.、Height、Stature、All (one Has)、Only、That's All、Merely"
  },
  {
    "char": "峰",
    "on": "ほう",
    "kun": "みね、ね",
    "english": "Summit, Peak",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Summit、Peak"
  },
  {
    "char": "巧",
    "on": "こう",
    "kun": "たく.み、たく.む、うま.い",
    "english": "Adroit, Skilled, Ingenuity",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Adroit、Skilled、Ingenuity"
  },
  {
    "char": "邪",
    "on": "じゃ",
    "kun": "よこし.ま",
    "english": "Wicked, Injustice, Wrong",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "ဆိုးသော、Injustice、Wrong"
  },
  {
    "char": "駄",
    "on": "だ、た",
    "kun": "",
    "english": "Burdensome, Pack Horse, Horse Load, Send By Horse, Trivial, Worthless",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Burdensome、Pack Horse、Horse Load、Send By Horse、Trivial、Worthless"
  },
  {
    "char": "唐",
    "on": "とう",
    "kun": "から",
    "english": "T'ang, China, Foreign",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 10,
    "myanmar": "T'ang、China、Foreign"
  },
  {
    "char": "廷",
    "on": "てい",
    "kun": "",
    "english": "Courts, Imperial Court, Government Office",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Courts、Imperial Court、အစိုးရရုံး"
  },
  {
    "char": "鬱",
    "on": "うつ",
    "kun": "うっ.する、ふさ.ぐ、しげ.る",
    "english": "Gloom, Depression, Melancholy, Luxuriant",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 29,
    "myanmar": "Gloom、Depression、Melancholy、Luxuriant"
  },
  {
    "char": "簿",
    "on": "ぼ",
    "kun": "",
    "english": "Register, Record Book",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 19,
    "myanmar": "မှတ်ပုံတင်သည်、Record Book"
  },
  {
    "char": "彰",
    "on": "しょう",
    "kun": "",
    "english": "Patent, Clear",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Patent、Clear"
  },
  {
    "char": "漫",
    "on": "まん",
    "kun": "みだり.に、そぞ.ろ",
    "english": "Cartoon, Involuntarily, Unrestrained, In Spite Of Oneself, Corrupt",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Cartoon、Involuntarily、Unrestrained、In Spite Of Oneself、Corrupt"
  },
  {
    "char": "訂",
    "on": "てい",
    "kun": "ただ.す",
    "english": "Revise, Correct, Decide",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Revise、Correct、ဆုံးဖြတ်"
  },
  {
    "char": "諮",
    "on": "し",
    "kun": "はか.る",
    "english": "Consult With",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Consult With"
  },
  {
    "char": "銘",
    "on": "めい",
    "kun": "",
    "english": "Inscription, Signature (of Artisan)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Inscription、Signature (of Artisan)"
  },
  {
    "char": "堤",
    "on": "てい",
    "kun": "つつみ",
    "english": "Dike, Bank, Embankment",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Dike、Bank、Embankment"
  },
  {
    "char": "漂",
    "on": "ひょう",
    "kun": "ただよ.う",
    "english": "Drift, Float (on Liquid)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Drift、Float (on Liquid)"
  },
  {
    "char": "翻",
    "on": "ほん、はん",
    "kun": "ひるがえ.る、ひるがえ.す",
    "english": "Flip, Turn Over, Wave, Flutter, Change (mind)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Flip、Turn Over、Wave、Flutter、Change (mind)"
  },
  {
    "char": "軌",
    "on": "き",
    "kun": "",
    "english": "Rut, Wheel, Track, Model, Way Of Doing",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Rut、ဘီး、လမ်း、မှန်ကန်စွာ、Way Of Doing"
  },
  {
    "char": "后",
    "on": "こう、ご",
    "kun": "きさき",
    "english": "Empress, Queen, After, Behind, Back, Later",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 6,
    "myanmar": "Empress、Queen、After、Behind、နောက်ဘက်、Later"
  },
  {
    "char": "奮",
    "on": "ふん",
    "kun": "ふる.う",
    "english": "Stirred Up, Be Invigorated, Flourish",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 16,
    "myanmar": "Stirred Up、Be Invigorated、ချစ်ခင်း"
  },
  {
    "char": "亭",
    "on": "てい、ちん",
    "kun": "",
    "english": "Pavilion, Restaurant, Mansion, Arbor, Cottage, Vaudeville, Music Hall, Stage Name",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Pavilion、Restaurant、Mansion、Arbor、Cottage、Vaudeville、Music Hall、Stage Name"
  },
  {
    "char": "仰",
    "on": "ぎょう、こう",
    "kun": "あお.ぐ、おお.せ、お.っしゃる、おっしゃ.る",
    "english": "Face-up, Look Up, Depend, Seek, Respect, Rever, Drink, Take",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Face-up、Look Up、မှန်ကန်、Seek、Respect、Rever、သောက်、ယူ"
  },
  {
    "char": "伯",
    "on": "はく",
    "kun": "",
    "english": "Chief, Count, Earl, Uncle, Brazil",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Chief、ရေတွက်、Earl、Uncle、Brazil"
  },
  {
    "char": "偶",
    "on": "ぐう",
    "kun": "たま",
    "english": "Accidentally, Even Number, Couple, Man & Wife, Same Kind",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Accidentally、Even Number、Couple、Man & Wife、Same Kind"
  },
  {
    "char": "墳",
    "on": "ふん",
    "kun": "",
    "english": "Tomb, Mound",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Tomb、Mound"
  },
  {
    "char": "壮",
    "on": "そう",
    "kun": "さかん",
    "english": "Robust, Manhood, Prosperity",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Robust、Manhood、ချစ်ခင်း"
  },
  {
    "char": "把",
    "on": "は、わ",
    "kun": "",
    "english": "Grasp, Faggot, Bunch, Counter For Bundles",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Grasp、Faggot、Bunch、Counter For Bundles"
  },
  {
    "char": "搬",
    "on": "はん",
    "kun": "",
    "english": "Conveyor, Carry, Transport",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Conveyor、ယူ、ပို့ဆေး"
  },
  {
    "char": "晶",
    "on": "しょう",
    "kun": "",
    "english": "Sparkle, Clear, Crystal",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Sparkle、Clear、Crystal"
  },
  {
    "char": "洞",
    "on": "どう",
    "kun": "ほら",
    "english": "Den, Cave, Excavation",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Den、Cave、Excavation"
  },
  {
    "char": "涯",
    "on": "がい",
    "kun": "はて",
    "english": "Horizon, Shore, Limit, Bound",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Horizon、Shore、Limit、Bound"
  },
  {
    "char": "疫",
    "on": "えき、やく",
    "kun": "",
    "english": "Epidemic",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Epidemic"
  },
  {
    "char": "孔",
    "on": "こう、く",
    "kun": "あな",
    "english": "Cavity, Hole, Slit, Very, Great, Exceedingly",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 4,
    "myanmar": "Cavity、Hole、Slit、အလွန်အလန်းကြီး、ကြီးစာ、Exceedingly"
  },
  {
    "char": "偉",
    "on": "い",
    "kun": "えら.い",
    "english": "Admirable, Greatness, Remarkable, Conceited, Famous, Excellent",
    "jlpt_new": 3,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Admirable、Greatness、အလွန်အလန်းကြီး、Conceited、Famous、အလွန်အလန်းကြီး"
  },
  {
    "char": "頂",
    "on": "ちょう",
    "kun": "いただ.く、いただき",
    "english": "Place On The Head, Receive, Top Of Head, Top, Summit, Peak",
    "jlpt_new": 3,
    "grade": 6,
    "strokes": 11,
    "myanmar": "Place On The Head、လက်ခံ、Top Of Head、Top、Summit、Peak"
  },
  {
    "char": "召",
    "on": "しょう",
    "kun": "め.す",
    "english": "Seduce, Call, Send For, Wear, Put On, Ride In, Buy, Eat, Drink, Catch (cold)",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 5,
    "myanmar": "လှည့်ဖြားသည်、Call、Send For、စားထိုး、စားထိုး、Ride In、ဝယ်、စား、သောက်、Catch (cold)"
  },
  {
    "char": "挟",
    "on": "きょう、しょう",
    "kun": "はさ.む、はさ.まる、わきばさ.む、さしはさ.む",
    "english": "Pinch, Between",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 9,
    "myanmar": "ကိုက်ဖွဲ့、အကြား"
  },
  {
    "char": "枯",
    "on": "こ",
    "kun": "か.れる、か.らす",
    "english": "Wither, Die, Dry Up, Be Seasoned",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 9,
    "myanmar": "ခြောက်、သေ、ခြောက်、Be Seasoned"
  },
  {
    "char": "沸",
    "on": "ふつ",
    "kun": "わ.く、わ.かす",
    "english": "Seethe, Boil, Ferment, Uproar, Breed",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 8,
    "myanmar": "လောင်း、လောင်း、လောင်း、လူပုလဲ、မွေးမြူ"
  },
  {
    "char": "濯",
    "on": "たく",
    "kun": "すす.ぐ、ゆす.ぐ",
    "english": "Laundry, Wash, Pour On, Rinse",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 17,
    "myanmar": "အဝတ်လျှော်、လျှော်、ဖြောင့်မြစ်、လျှော်"
  },
  {
    "char": "燥",
    "on": "そう",
    "kun": "はしゃ.ぐ",
    "english": "Parch, Dry Up",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 17,
    "myanmar": "ခြောက်、ခြောက်"
  },
  {
    "char": "瓶",
    "on": "びん",
    "kun": "かめ",
    "english": "Bottle, Vial, Jar, Jug, Vat, Urn",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Bottle、Vial、Jar、Jug、Vat、Urn"
  },
  {
    "char": "耕",
    "on": "こう",
    "kun": "たがや.す",
    "english": "Till, Plow, Cultivate",
    "jlpt_new": 2,
    "grade": 5,
    "strokes": 10,
    "myanmar": "Till、Plow、Cultivate"
  },
  {
    "char": "肯",
    "on": "こう",
    "kun": "がえんじ.る",
    "english": "Agreement, Consent, Comply With",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 8,
    "myanmar": "သဘောတူ、သဘောတူ、Comply With"
  },
  {
    "char": "脂",
    "on": "し",
    "kun": "あぶら",
    "english": "Fat, Grease, Tallow, Lard, Rosin, Gum, Tar",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 10,
    "myanmar": "အဆီ、Grease、Tallow、Lard、Rosin、Gum、Tar"
  },
  {
    "char": "膚",
    "on": "ふ",
    "kun": "はだ",
    "english": "Skin, Body, Grain, Texture, Disposition",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 15,
    "myanmar": "အသားအရေ、ခန္ဓာ、ဆူးပြာ、အသားအရေ、စိတ်ဓာတ်"
  },
  {
    "char": "軒",
    "on": "けん",
    "kun": "のき",
    "english": "Flats, Counter For Houses, Eaves",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Flats、Counter For Houses、ခေါင်မိုး"
  },
  {
    "char": "軟",
    "on": "なん",
    "kun": "やわ.らか、やわ.らかい",
    "english": "Soft",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 11,
    "myanmar": "ပေါ့ပြူ"
  },
  {
    "char": "郊",
    "on": "こう",
    "kun": "",
    "english": "Outskirts, Suburbs, Rural Area",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Outskirts、Suburbs、Rural Area"
  },
  {
    "char": "隅",
    "on": "ぐう",
    "kun": "すみ",
    "english": "Corner, Nook",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 12,
    "myanmar": "ထောင့်、ထောင့်"
  },
  {
    "char": "隻",
    "on": "せき",
    "kun": "",
    "english": "Vessels, Counter For Ships, Fish, Birds, Arrows, One Of A Pair",
    "jlpt_new": 2,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Vessels、Counter For Ships、ငါး、ငှက်、Arrows、One Of A Pair"
  },
  {
    "char": "邸",
    "on": "てい",
    "kun": "やしき",
    "english": "Residence, Mansion",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Residence、Mansion"
  },
  {
    "char": "郡",
    "on": "ぐん",
    "kun": "こおり",
    "english": "County, District",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 10,
    "myanmar": "County、ခရိုင်"
  },
  {
    "char": "釈",
    "on": "しゃく、せき",
    "kun": "とく、す.てる、ゆる.す",
    "english": "Explanation",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Explanation"
  },
  {
    "char": "肪",
    "on": "ぼう",
    "kun": "",
    "english": "Obese, Fat",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Obese、အဆီ"
  },
  {
    "char": "喚",
    "on": "かん",
    "kun": "わめ.く",
    "english": "Yell, Cry, Call, Scream, Summon",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Yell、Cry、Call、Scream、Summon"
  },
  {
    "char": "媛",
    "on": "えん",
    "kun": "ひめ",
    "english": "Beautiful Woman, Princess",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Beautiful Woman、Princess"
  },
  {
    "char": "貞",
    "on": "てい",
    "kun": "さだ",
    "english": "Upright, Chastity, Constancy, Righteousness",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Upright、Chastity、Constancy、Righteousness"
  },
  {
    "char": "玄",
    "on": "げん",
    "kun": "くろ、くろ.い",
    "english": "Mysterious, Occultness, Black, Deep, Profound",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Mysterious、Occultness、Black、Deep、Profound"
  },
  {
    "char": "苗",
    "on": "びょう、みょう",
    "kun": "なえ、なわ-",
    "english": "Seedling, Sapling, Shoot",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Seedling、Sapling、Shoot"
  },
  {
    "char": "渦",
    "on": "か",
    "kun": "うず",
    "english": "Whirlpool, Eddy, Vortex",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Whirlpool、Eddy、Vortex"
  },
  {
    "char": "慈",
    "on": "じ",
    "kun": "いつく.しむ",
    "english": "Mercy",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Mercy"
  },
  {
    "char": "襟",
    "on": "きん",
    "kun": "えり",
    "english": "Collar, Neck, Lapel, One's Inner Feelings",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Collar、Neck、Lapel、One's Inner Feelings"
  },
  {
    "char": "浦",
    "on": "ほ",
    "kun": "うら",
    "english": "Bay, Creek, Inlet, Gulf, Beach, Seacoast",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "သမုဒ္ဒရာ、Creek、ဝင်ပေါက်မြစ်、သမုဒ္ဒရာ、ကမ်းခြေ、Seacoast"
  },
  {
    "char": "塚",
    "on": "ちょう",
    "kun": "つか、-づか",
    "english": "Hillock, Mound",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Hillock、Mound"
  },
  {
    "char": "陥",
    "on": "かん",
    "kun": "おちい.る、おとしい.れる",
    "english": "Collapse, Fall Into, Cave In, Fall (castle), Slide Into",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Collapse、Fall Into、Cave In、Fall (castle)、Slide Into"
  },
  {
    "char": "貫",
    "on": "かん",
    "kun": "つらぬ.く、ぬ.く、ぬき",
    "english": "Pierce, 8 1/3lbs, Penetrate, Brace",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Pierce、8 1/3lbs、Penetrate、Brace"
  },
  {
    "char": "覇",
    "on": "は、はく",
    "kun": "はたがしら",
    "english": "Hegemony, Supremacy, Leadership, Champion",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 19,
    "myanmar": "Hegemony、Supremacy、Leadership、Champion"
  },
  {
    "char": "呂",
    "on": "ろ、りょ",
    "kun": "せぼね",
    "english": "Spine, Backbone",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Spine、Backbone"
  },
  {
    "char": "茨",
    "on": "し、じ",
    "kun": "いばら、かや、くさぶき",
    "english": "Briar, Thorn",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Briar、Thorn"
  },
  {
    "char": "擁",
    "on": "よう",
    "kun": "",
    "english": "Hug, Embrace, Possess, Protect, Lead",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Hug、Embrace、ပိုင်ဆိုင်သည်、ကာကွယ်、းဆောင်"
  },
  {
    "char": "孤",
    "on": "こ",
    "kun": "",
    "english": "Orphan, Alone",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Orphan、Alone"
  },
  {
    "char": "賠",
    "on": "ばい",
    "kun": "",
    "english": "Compensation, Indemnify",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Compensation、Indemnify"
  },
  {
    "char": "鎖",
    "on": "さ",
    "kun": "くさり、とざ.す",
    "english": "Chain, Irons, Connection",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Chain、Irons、Connection"
  },
  {
    "char": "噴",
    "on": "ふん",
    "kun": "ふ.く",
    "english": "Erupt, Spout, Emit, Flush Out",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Erupt、Spout、Emit、Flush Out"
  },
  {
    "char": "祥",
    "on": "しょう",
    "kun": "さいわ.い、きざ.し、よ.い、つまび.らか",
    "english": "Auspicious, Happiness, Blessedness, Good Omen, Good Fortune",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Auspicious、Happiness、Blessedness、Good Omen、Good Fortune"
  },
  {
    "char": "牲",
    "on": "せい",
    "kun": "",
    "english": "Animal Sacrifice, Offering",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Animal Sacrifice、Offering"
  },
  {
    "char": "秩",
    "on": "ちつ",
    "kun": "",
    "english": "Regularity, Salary, Order",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Regularity、Salary、အမိန့်"
  },
  {
    "char": "唆",
    "on": "さ",
    "kun": "そそ.る、そそのか.す",
    "english": "Tempt, Seduce, Instigate, Promote",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Tempt、လှည့်ဖြားသည်、Instigate、Promote"
  },
  {
    "char": "膨",
    "on": "ぼう",
    "kun": "ふく.らむ、ふく.れる",
    "english": "Swell, Get Fat, Thick",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Swell、Get Fat、ထူ"
  },
  {
    "char": "芳",
    "on": "ほう",
    "kun": "かんば.しい",
    "english": "Perfume, Balmy, Favorable, Fragrant",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "ဆီ、Balmy、Favorable、Fragrant"
  },
  {
    "char": "恒",
    "on": "こう",
    "kun": "つね、つねに",
    "english": "Constancy, Always",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Constancy、မဆန်းဘဲ"
  },
  {
    "char": "倫",
    "on": "りん",
    "kun": "",
    "english": "Ethics, Companion",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Ethics、Companion"
  },
  {
    "char": "陳",
    "on": "ちん",
    "kun": "ひ.ねる",
    "english": "Exhibit, State, Relate, Explain",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Exhibit、ပြည်တွင်း、ဆက်စပ်、Explain"
  },
  {
    "char": "須",
    "on": "す、しゅ",
    "kun": "すべから.く、すべし、ひげ、まつ、もち.いる、もと.める",
    "english": "Ought, By All Means, Necessarily",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Ought、By All Means、Necessarily"
  },
  {
    "char": "偏",
    "on": "へん",
    "kun": "かたよ.る",
    "english": "Partial, Side, Left-side Radical, Inclining, Biased",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Partial、Side、Left-side Radical、Inclining、Biased"
  },
  {
    "char": "遇",
    "on": "ぐう",
    "kun": "あ.う",
    "english": "Meet, Encounter, Interview, Treat, Entertain, Receive, Deal With",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Meet、Encounter、Interview、Treat、Entertain、လက်ခံ、Deal With"
  },
  {
    "char": "糧",
    "on": "りょう、ろう",
    "kun": "かて",
    "english": "Provisions, Food, Bread",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Provisions、စာ、Bread"
  },
  {
    "char": "殊",
    "on": "しゅ",
    "kun": "こと",
    "english": "Particularly, Especially, Exceptionally",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Particularly、Especially、Exceptionally"
  },
  {
    "char": "慢",
    "on": "まん",
    "kun": "",
    "english": "Ridicule, Laziness",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Ridicule、Laziness"
  },
  {
    "char": "没",
    "on": "ぼつ、もつ",
    "kun": "おぼ.れる、しず.む、ない",
    "english": "Drown, Sink, Hide, Fall Into, Disappear, Die",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Drown、ကျ、ဝှက်、Fall Into、Disappear、သေ"
  },
  {
    "char": "怠",
    "on": "たい",
    "kun": "おこた.る、なま.ける",
    "english": "Neglect, Laziness",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Neglect、Laziness"
  },
  {
    "char": "遭",
    "on": "そう",
    "kun": "あ.う、あ.わせる",
    "english": "Encounter, Meet, Party, Association, Interview, Join",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Encounter、Meet、ပါတီ、အသင်း、Interview、ပါဝင်သည်"
  },
  {
    "char": "惰",
    "on": "だ",
    "kun": "",
    "english": "Lazy, Laziness",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Lazy、Laziness"
  },
  {
    "char": "猟",
    "on": "りょう",
    "kun": "かり、か.る",
    "english": "Game-hunting, Shooting, Game, Bag",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Game-hunting、Shooting、Game、Bag"
  },
  {
    "char": "寛",
    "on": "かん",
    "kun": "くつろ.ぐ、ひろ.い、ゆる.やか",
    "english": "Tolerant, Leniency, Generosity, Relax, Feel At Home, Be At Ease, Broadminded",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Tolerant、Leniency、Generosity、Relax、Feel At Home、Be At Ease、Broadminded"
  },
  {
    "char": "胞",
    "on": "ほう",
    "kun": "",
    "english": "Placenta, Sac, Sheath",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Placenta、Sac、Sheath"
  },
  {
    "char": "浄",
    "on": "じょう、せい",
    "kun": "きよ.める、きよ.い",
    "english": "Clean, Purify, Cleanse, Exorcise, Manchu Dynasty",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "သန့်、သန့်ရှင်းသည်、သန့်ရှင်းသည်、ပြင်းထန်သည်、Manchu Dynasty"
  },
  {
    "char": "随",
    "on": "ずい",
    "kun": "まにま.に、したが.う",
    "english": "Follow, Though, Notwithstanding, While, During, Both, All, Obey, Submit To, Comply, At The Mercy Of (the Waves)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "လိုက်、Though、Notwithstanding、While、During、Both、အားလုံး、လိုက်、Submit To、လိုက်、At The Mercy Of (the Waves)"
  },
  {
    "char": "稿",
    "on": "こう",
    "kun": "わら、したがき",
    "english": "Draft, Copy, Manuscript, Straw",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Draft、ကူးယူ、Manuscript、Straw"
  },
  {
    "char": "丹",
    "on": "たん",
    "kun": "に",
    "english": "Rust-colored, Red, Red Lead, Pills, Sincerity",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 4,
    "myanmar": "Rust-colored、Red、Red Lead、ဆေးလိပ်စာ、Sincerity"
  },
  {
    "char": "壌",
    "on": "じょう",
    "kun": "つち",
    "english": "Lot, Earth, Soil",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Lot、မြေ、Soil"
  },
  {
    "char": "舗",
    "on": "ほ",
    "kun": "",
    "english": "Shop, Store, Pave",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Shop、သိုလှောင်သည်、Pave"
  },
  {
    "char": "騰",
    "on": "とう",
    "kun": "あが.る、のぼ.る",
    "english": "Leaping Up, Jumping Up, Rising, Advancing, Going",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 20,
    "myanmar": "Leaping Up、Jumping Up、Rising、Advancing、Going"
  },
  {
    "char": "緯",
    "on": "い",
    "kun": "よこいと、ぬき",
    "english": "Horizontal, Woof, Left & Right, (parallels Of) Latitude, Prediction",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Horizontal、Woof、Left & Right、(parallels Of) Latitude、Prediction"
  },
  {
    "char": "艇",
    "on": "てい",
    "kun": "",
    "english": "Rowboat, Small Boat",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Rowboat、Small Boat"
  },
  {
    "char": "披",
    "on": "ひ",
    "kun": "",
    "english": "Expose, Open",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Expose、ဖွင့်"
  },
  {
    "char": "錦",
    "on": "きん",
    "kun": "にしき",
    "english": "Brocade, Fine Dress, Honors",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Brocade、Fine Dress、Honors"
  },
  {
    "char": "准",
    "on": "じゅん",
    "kun": "",
    "english": "Quasi-, Semi-, Associate",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Quasi-、Semi-、Associate"
  },
  {
    "char": "剰",
    "on": "じょう",
    "kun": "あまつさえ、あま.り、あま.る",
    "english": "Surplus, Besides",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Surplus、အပြင်"
  },
  {
    "char": "繊",
    "on": "せん",
    "kun": "",
    "english": "Slender, Fine, Thin Kimono",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "လက်တစ်တန်、Fine、Thin Kimono"
  },
  {
    "char": "諭",
    "on": "ゆ",
    "kun": "さと.す",
    "english": "Rebuke, Admonish, Charge, Warn, Persuade",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "နှိုက်ယှက်、Admonish、စျေး、Warn、Persuade"
  },
  {
    "char": "惨",
    "on": "さん、ざん",
    "kun": "みじ.め、いた.む、むご.い",
    "english": "Wretched, Disaster, Cruelty, Harsh",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Wretched、Disaster、အကြမ်းဖက်、Harsh"
  },
  {
    "char": "虐",
    "on": "ぎゃく",
    "kun": "しいた.げる",
    "english": "Tyrannize, Oppress",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Tyrannize、ပိတ်ဆို့"
  },
  {
    "char": "据",
    "on": "きょ",
    "kun": "す.える、す.わる",
    "english": "Set, Lay A Foundation, Install, Equip, Squat Down, Sit Down",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "အစုံ、Lay A Foundation、Install、Equip、Squat Down、Sit Down"
  },
  {
    "char": "徐",
    "on": "じょ",
    "kun": "おもむ.ろに",
    "english": "Gradually, Slowly, Deliberately, Gently",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Gradually、Slowly、Deliberately、Gently"
  },
  {
    "char": "搭",
    "on": "とう",
    "kun": "",
    "english": "Board, Load (a Vehicle), Ride",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "အဆစ်、Load (a Vehicle)、Ride"
  },
  {
    "char": "戴",
    "on": "たい",
    "kun": "いただ.く",
    "english": "Be Crowned With, Live Under (a Ruler), Receive",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Be Crowned With、Live Under (a Ruler)、လက်ခံ"
  },
  {
    "char": "帥",
    "on": "すい",
    "kun": "",
    "english": "Commander, Leading Troops, Governor",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "ဦးဆောင်、Leading Troops、Governor"
  },
  {
    "char": "啓",
    "on": "けい",
    "kun": "ひら.く、さと.す",
    "english": "Disclose, Open, Say",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Disclose、ဖွင့်、ပြောသည်"
  },
  {
    "char": "鯨",
    "on": "げい",
    "kun": "くじら",
    "english": "Whale",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 19,
    "myanmar": "Whale"
  },
  {
    "char": "荘",
    "on": "そう、しょう、ちゃん",
    "kun": "ほうき、おごそ.か",
    "english": "Villa, Inn, Cottage, Feudal Manor, Solemn, Dignified",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Villa、Inn、Cottage、Feudal Manor、Solemn、Dignified"
  },
  {
    "char": "栽",
    "on": "さい",
    "kun": "",
    "english": "Plantation, Planting",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Plantation、Planting"
  },
  {
    "char": "拐",
    "on": "かい",
    "kun": "",
    "english": "Kidnap, Falsify",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Kidnap、Falsify"
  },
  {
    "char": "冠",
    "on": "かん",
    "kun": "かんむり",
    "english": "Crown, Best, Peerless",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Crown、Best、Peerless"
  },
  {
    "char": "勲",
    "on": "くん",
    "kun": "いさお",
    "english": "Meritorious Deed, Merit",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Meritorious Deed、ကျေးဇူးတော်"
  },
  {
    "char": "酬",
    "on": "しゅう、しゅ、とう",
    "kun": "むく.いる",
    "english": "Repay, Reward, Retribution",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Repay、ဆု、Retribution"
  },
  {
    "char": "紋",
    "on": "もん",
    "kun": "",
    "english": "Family Crest, Figures",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Family Crest、Figures"
  },
  {
    "char": "卸",
    "on": "しゃ",
    "kun": "おろ.す、おろし、おろ.し",
    "english": "Wholesale",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Wholesale"
  },
  {
    "char": "欄",
    "on": "らん",
    "kun": "てすり",
    "english": "Column, Handrail, Blank, Space",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 20,
    "myanmar": "Column、Handrail、Blank、အလွှာပေါ်"
  },
  {
    "char": "逸",
    "on": "いつ",
    "kun": "そ.れる、そ.らす、はぐ.れる",
    "english": "Deviate, Idleness, Leisure, Miss The Mark, Evade, Elude, Parry, Diverge",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Deviate、Idleness、Leisure、Miss The Mark、Evade、Elude、Parry、Diverge"
  },
  {
    "char": "尚",
    "on": "しょう",
    "kun": "なお",
    "english": "Esteem, Furthermore, Still, Yet",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Esteem、Furthermore、အဆင်မပြေဘဲ、အဆင်မပြေဘဲ"
  },
  {
    "char": "顕",
    "on": "けん",
    "kun": "あきらか、あらわ.れる",
    "english": "Appear, Existing",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Appear、Existing"
  },
  {
    "char": "粛",
    "on": "しゅく、すく",
    "kun": "つつし.む",
    "english": "Solemn, Quietly, Softly",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Solemn、Quietly、Softly"
  },
  {
    "char": "愚",
    "on": "ぐ",
    "kun": "おろ.か",
    "english": "Foolish, Folly, Absurdity, Stupid",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Foolish、Folly、Absurdity、Stupid"
  },
  {
    "char": "庶",
    "on": "しょ",
    "kun": "",
    "english": "Commoner, All, Bastard",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Commoner、အားလုံး、Bastard"
  },
  {
    "char": "践",
    "on": "せん",
    "kun": "ふ.む",
    "english": "Tread, Step On, Trample, Practice, Carry Through",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Tread、Step On、Trample、လေ့လာသည်、Carry Through"
  },
  {
    "char": "呈",
    "on": "てい",
    "kun": "",
    "english": "Display, Offer, Present, Send, Exhibit",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Display、Offer、Present、ပို့、Exhibit"
  },
  {
    "char": "疎",
    "on": "そ、しょ",
    "kun": "うと.い、うと.む、まば.ら",
    "english": "Alienate, Rough, Neglect, Shun, Sparse, Penetrate",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Alienate、ကျဉ်းမြောင်း、Neglect、Shun、Sparse、Penetrate"
  },
  {
    "char": "疾",
    "on": "しつ",
    "kun": "はや.い",
    "english": "Rapidly",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Rapidly"
  },
  {
    "char": "謡",
    "on": "よう",
    "kun": "うた.い、うた.う",
    "english": "Song, Sing, Ballad, Noh Chanting",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Song、Sing、Ballad、Noh Chanting"
  },
  {
    "char": "鎌",
    "on": "れん、けん",
    "kun": "かま",
    "english": "Sickle, Scythe, Trick",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Sickle、Scythe、လှည့်ဖြားမှု"
  },
  {
    "char": "酷",
    "on": "こく",
    "kun": "ひど.い",
    "english": "Cruel, Severe, Atrocious, Unjust",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Cruel、Severe、Atrocious、Unjust"
  },
  {
    "char": "叙",
    "on": "じょ",
    "kun": "つい.ず、ついで",
    "english": "Confer, Relate, Narrate, Describe",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "ဆု、ဆက်စပ်、Narrate、Describe"
  },
  {
    "char": "且",
    "on": "しょ、そ、しょう",
    "kun": "か.つ",
    "english": "Moreover, Also, Furthermore",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Moreover、လည်း、Furthermore"
  },
  {
    "char": "痴",
    "on": "ち",
    "kun": "し.れる、おろか",
    "english": "Stupid, Foolish",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Stupid、Foolish"
  },
  {
    "char": "哺",
    "on": "ほ",
    "kun": "はぐく.む、ふく.む",
    "english": "Nurse, Suckle",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Nurse、Suckle"
  },
  {
    "char": "傲",
    "on": "ごう",
    "kun": "おご.る、あなど.る",
    "english": "Be Proud",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Be Proud"
  },
  {
    "char": "茎",
    "on": "けい、きょう",
    "kun": "くき",
    "english": "Stalk, Stem",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Stalk、Stem"
  },
  {
    "char": "悠",
    "on": "ゆう",
    "kun": "",
    "english": "Permanence, Distant, Long Time, Leisure",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Permanence、Distant、ကြာသာချိန်、Leisure"
  },
  {
    "char": "伏",
    "on": "ふく",
    "kun": "ふ.せる、ふ.す",
    "english": "Prostrated, Bend Down, Bow, Cover, Lay (pipes)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Prostrated、Bend Down、Bow、ဖုံးကွယ်、Lay (pipes)"
  },
  {
    "char": "鎮",
    "on": "ちん",
    "kun": "しず.める、しず.まる、おさえ",
    "english": "Tranquilize, Ancient Peace-preservation Centers",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Tranquilize、Ancient Peace-preservation Centers"
  },
  {
    "char": "奉",
    "on": "ほう、ぶ",
    "kun": "たてまつ.る、まつ.る、ほう.ずる",
    "english": "Observance, Offer, Present, Dedicate",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Observance、Offer、Present、Dedicate"
  },
  {
    "char": "憂",
    "on": "ゆう",
    "kun": "うれ.える、うれ.い、う.い、う.き",
    "english": "Melancholy, Grieve, Lament, Be Anxious, Sad, Unhappy",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Melancholy、Grieve、Lament、Be Anxious、စိတ်ဆိုး、Unhappy"
  },
  {
    "char": "朴",
    "on": "ぼく",
    "kun": "ほう、ほお、えのき",
    "english": "Crude, Simple, Plain, Docile",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Crude、Simple、Plain、Docile"
  },
  {
    "char": "栃",
    "on": "",
    "kun": "とち",
    "english": "Horse Chestnut, (kokuji)",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Horse Chestnut、(kokuji)"
  },
  {
    "char": "惜",
    "on": "せき",
    "kun": "お.しい、お.しむ",
    "english": "Pity, Be Sparing Of, Frugal, Stingy, Regret",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Pity、Be Sparing Of、Frugal、Stingy、Regret"
  },
  {
    "char": "佳",
    "on": "か",
    "kun": "",
    "english": "Excellent, Beautiful, Good, Pleasing, Skilled",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "အလွန်အလန်းကြီး、လှပ、ကောင်း、Pleasing、Skilled"
  },
  {
    "char": "悼",
    "on": "とう",
    "kun": "いた.む",
    "english": "Lament, Grieve Over",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Lament、Grieve Over"
  },
  {
    "char": "該",
    "on": "がい",
    "kun": "",
    "english": "Above-stated, The Said, That Specific",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Above-stated、The Said、That Specific"
  },
  {
    "char": "赴",
    "on": "ふ",
    "kun": "おもむ.く",
    "english": "Proceed, Get, Become, Tend",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Proceed、Get、Become、Tend"
  },
  {
    "char": "髄",
    "on": "ずい",
    "kun": "",
    "english": "Marrow, Pith, Essence",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 19,
    "myanmar": "Marrow、Pith、Essence"
  },
  {
    "char": "傍",
    "on": "ぼう",
    "kun": "かたわ.ら、わき、おか-、はた、そば",
    "english": "Bystander, Side, Besides, While, Nearby, Third Person",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Bystander、Side、အပြင်、While、Nearby、Third Person"
  },
  {
    "char": "累",
    "on": "るい",
    "kun": "",
    "english": "Accumulate, Involvement, Trouble, Tie Up, Continually",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Accumulate、Involvement、Trouble、Tie Up、Continually"
  },
  {
    "char": "癒",
    "on": "ゆ",
    "kun": "い.える、いや.す、い.やす",
    "english": "Healing, Cure, Quench (thirst), Wreak",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Healing、ပျောက်ကွယ်、Quench (thirst)、Wreak"
  },
  {
    "char": "郭",
    "on": "かく",
    "kun": "くるわ",
    "english": "Enclosure, Quarters, Fortification, Red-light District",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "ပတ်ပေါက်、Quarters、Fortification、Red-light District"
  },
  {
    "char": "尿",
    "on": "にょう",
    "kun": "ゆばり、いばり、しと",
    "english": "Urine",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Urine"
  },
  {
    "char": "賓",
    "on": "ひん",
    "kun": "",
    "english": "V.i.p., Guest",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "V.i.p.、Guest"
  },
  {
    "char": "虜",
    "on": "りょ、ろ",
    "kun": "とりこ、とりく",
    "english": "Captive, Barbarian, Low Epithet For The Enemy",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Captive、Barbarian、Low Epithet For The Enemy"
  },
  {
    "char": "憾",
    "on": "かん",
    "kun": "うら.む",
    "english": "Remorse, Regret, Be Sorry",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Remorse、Regret、Be Sorry"
  },
  {
    "char": "弥",
    "on": "み、び",
    "kun": "や、いや、いよ.いよ、わた.る",
    "english": "All The More, Increasingly",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "All The More、Increasingly"
  },
  {
    "char": "粗",
    "on": "そ",
    "kun": "あら.い、あら-",
    "english": "Coarse, Rough, Rugged",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Coarse、ကျဉ်းမြောင်း、Rugged"
  },
  {
    "char": "循",
    "on": "じゅん",
    "kun": "",
    "english": "Sequential, Follow",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Sequential、လိုက်"
  },
  {
    "char": "凝",
    "on": "ぎょう",
    "kun": "こ.る、こ.らす、こご.らす、こご.らせる、こご.る",
    "english": "Congeal, Freeze, Stiff, Be Absorbed In",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Congeal、Freeze、ကြမ်းတမ်း、Be Absorbed In"
  },
  {
    "char": "脊",
    "on": "せき",
    "kun": "せ、せい",
    "english": "Stature, Height",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Stature、Height"
  },
  {
    "char": "旦",
    "on": "たん、だん",
    "kun": "あき.らか、あきら、ただし、あさ、あした",
    "english": "Daybreak, Dawn, Morning",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Daybreak、Dawn、မနက်ပိုင်း"
  },
  {
    "char": "愉",
    "on": "ゆ",
    "kun": "たの.しい、たの.しむ",
    "english": "Pleasure, Happy, Rejoice",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Pleasure、ပျော်ရွှင်、Rejoice"
  },
  {
    "char": "抹",
    "on": "まつ",
    "kun": "",
    "english": "Rub, Paint, Erase",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Rub、Paint、Erase"
  },
  {
    "char": "栓",
    "on": "せん",
    "kun": "",
    "english": "Plug, Bolt, Cork, Bung, Stopper",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Plug、Bolt、Cork、Bung、Stopper"
  },
  {
    "char": "那",
    "on": "な、だ",
    "kun": "なに、なんぞ、いかん",
    "english": "What?",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "What?"
  },
  {
    "char": "拍",
    "on": "はく、ひょう",
    "kun": "",
    "english": "Clap, Beat (music)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Clap、Beat (music)"
  },
  {
    "char": "猶",
    "on": "ゆう、ゆ",
    "kun": "なお",
    "english": "Furthermore, Still, Yet",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Furthermore、အဆင်မပြေဘဲ、အဆင်မပြေဘဲ"
  },
  {
    "char": "宰",
    "on": "さい",
    "kun": "",
    "english": "Superintend, Manager, Rule",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Superintend、Manager、စည်းကမ်း"
  },
  {
    "char": "寂",
    "on": "じゃく、せき",
    "kun": "さび、さび.しい、さび.れる、さみ.しい",
    "english": "Loneliness, Quietly, Mellow, Mature, Death Of A Priest",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Loneliness、Quietly、Mellow、Mature、Death Of A Priest"
  },
  {
    "char": "縫",
    "on": "ほう",
    "kun": "ぬ.う",
    "english": "Sew, Stitch, Embroider",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Sew、Stitch、Embroider"
  },
  {
    "char": "呉",
    "on": "ご",
    "kun": "く.れる、くれ",
    "english": "Give, Do Something For, Kingdom Of Wu",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "ပေး、Do Something For、Kingdom Of Wu"
  },
  {
    "char": "凡",
    "on": "ぼん、はん",
    "kun": "およ.そ、おうよ.そ、すべ.て",
    "english": "Commonplace, Ordinary, Mediocre",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 3,
    "myanmar": "Commonplace、Ordinary、Mediocre"
  },
  {
    "char": "恭",
    "on": "きょう",
    "kun": "うやうや.しい",
    "english": "Respect, Reverent",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Respect、Reverent"
  },
  {
    "char": "錯",
    "on": "さく、しゃく",
    "kun": "",
    "english": "Confused, Mix, Be In Disorder",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Confused、ပေါင်းစပ်、Be In Disorder"
  },
  {
    "char": "穀",
    "on": "こく",
    "kun": "",
    "english": "Cereals, Grain",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 14,
    "myanmar": "Cereals、ဆူးပြာ"
  },
  {
    "char": "陵",
    "on": "りょう",
    "kun": "みささぎ",
    "english": "Mausoleum, Imperial Tomb, Mound, Hill",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Mausoleum、Imperial Tomb、Mound、တောင်"
  },
  {
    "char": "弊",
    "on": "へい",
    "kun": "",
    "english": "Abuse, Evil, Vice, Breakage",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Abuse、Evil、ဒုတိယ、Breakage"
  },
  {
    "char": "舶",
    "on": "はく",
    "kun": "",
    "english": "Liner, Ship",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Liner、သင်္ဘော်"
  },
  {
    "char": "窮",
    "on": "きゅう、きょう",
    "kun": "きわ.める、きわ.まる、きわ.まり、きわ.み",
    "english": "Hard Up, Destitute, Suffer, Perplexed, Cornered",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Hard Up、Destitute、စွန့်စား、Perplexed、Cornered"
  },
  {
    "char": "悦",
    "on": "えつ",
    "kun": "よろこ.ぶ、よろこ.ばす",
    "english": "Ecstasy, Joy, Rapture",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Ecstasy、Joy、Rapture"
  },
  {
    "char": "縛",
    "on": "ばく",
    "kun": "しば.る",
    "english": "Truss, Arrest, Bind, Tie, Restrain",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Truss、Arrest、Bind、ချိတ်、Restrain"
  },
  {
    "char": "轄",
    "on": "かつ",
    "kun": "くさび",
    "english": "Control, Wedge",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "ထိန်းချုပ်、Wedge"
  },
  {
    "char": "弦",
    "on": "げん",
    "kun": "つる",
    "english": "Bowstring, Chord, Hypotenuse",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Bowstring、Chord、Hypotenuse"
  },
  {
    "char": "窒",
    "on": "ちつ",
    "kun": "",
    "english": "Plug Up, Obstruct",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Plug Up、Obstruct"
  },
  {
    "char": "洪",
    "on": "こう",
    "kun": "",
    "english": "Deluge, Flood, Vast",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Deluge、Flood、Vast"
  },
  {
    "char": "摂",
    "on": "せつ、しょう",
    "kun": "おさ.める、かね.る、と.る",
    "english": "Vicarious, Surrogate, Act In Addition To, Take In, Absorb",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Vicarious、Surrogate、Act In Addition To、Take In、Absorb"
  },
  {
    "char": "飽",
    "on": "ほう",
    "kun": "あ.きる、あ.かす、あ.く",
    "english": "Sated, Tired Of, Bored, Satiate",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Sated、Tired Of、Bored、Satiate"
  },
  {
    "char": "紳",
    "on": "しん",
    "kun": "",
    "english": "Sire, Good Belt, Gentleman",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Sire、Good Belt、Gentleman"
  },
  {
    "char": "庸",
    "on": "よう",
    "kun": "",
    "english": "Commonplace, Ordinary, Employment",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Commonplace、Ordinary、Employment"
  },
  {
    "char": "搾",
    "on": "さく",
    "kun": "しぼ.る",
    "english": "Squeeze",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Squeeze"
  },
  {
    "char": "碑",
    "on": "ひ",
    "kun": "いしぶみ",
    "english": "Tombstone, Monument",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Tombstone、Monument"
  },
  {
    "char": "尉",
    "on": "い、じょう",
    "kun": "",
    "english": "Military Officer, Jailer, Old Man, Rank",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Military Officer、Jailer、Old Man、Rank"
  },
  {
    "char": "匠",
    "on": "しょう",
    "kun": "たくみ",
    "english": "Artisan, Workman, Carpenter",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Artisan、Workman、Carpenter"
  },
  {
    "char": "賊",
    "on": "ぞく",
    "kun": "",
    "english": "Burglar, Rebel, Traitor, Robber",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Burglar、Rebel、Traitor、Robber"
  },
  {
    "char": "鼓",
    "on": "こ",
    "kun": "つづみ",
    "english": "Drum, Beat, Rouse, Muster",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Drum、Beat、Rouse、Muster"
  },
  {
    "char": "旋",
    "on": "せん",
    "kun": "め.ぐる、いばり",
    "english": "Rotation, Go Around",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Rotation、Go Around"
  },
  {
    "char": "腸",
    "on": "ちょう",
    "kun": "はらわた、わた",
    "english": "Intestines, Guts, Bowels, Viscera",
    "jlpt_new": 1,
    "grade": 4,
    "strokes": 13,
    "myanmar": "Intestines、Guts、အစိတ်အပိုင်း、အစိတ်အပိုင်း"
  },
  {
    "char": "槽",
    "on": "そう",
    "kun": "ふね",
    "english": "Vat, Tub, Tank",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Vat、Tub、Tank"
  },
  {
    "char": "伐",
    "on": "ばつ、はつ、か、ぼち",
    "kun": "き.る、そむ.く、う.つ",
    "english": "Fell, Strike, Attack, Punish",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Fell、Strike、တိုက်ခိုက်、ပြစ်ဒဏ်"
  },
  {
    "char": "漬",
    "on": "し",
    "kun": "つ.ける、つ.かる、-づ.け、-づけ",
    "english": "Pickling, Soak, Moisten, Steep",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Pickling、Soak、Moisten、Steep"
  },
  {
    "char": "坪",
    "on": "へい",
    "kun": "つぼ",
    "english": "Two-mat Area, Approx. Thirty-six Sq Ft",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Two-mat Area、Approx. Thirty-six Sq Ft"
  },
  {
    "char": "紺",
    "on": "こん",
    "kun": "",
    "english": "Dark Blue, Navy",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Dark Blue、Navy"
  },
  {
    "char": "羅",
    "on": "ら",
    "kun": "うすもの",
    "english": "Gauze, Thin Silk, Rome, Arrange, Spread Out",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 19,
    "myanmar": "Gauze、Thin Silk、Rome、စီစဉ်、Spread Out"
  },
  {
    "char": "峡",
    "on": "きょう、こう",
    "kun": "はざま",
    "english": "Gorge, Ravine",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Gorge、Ravine"
  },
  {
    "char": "俸",
    "on": "ほう",
    "kun": "",
    "english": "Stipend, Salary",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Stipend、Salary"
  },
  {
    "char": "醸",
    "on": "じょう",
    "kun": "かも.す",
    "english": "Brew, Cause",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 20,
    "myanmar": "Brew、အကြောင်းရင်း"
  },
  {
    "char": "弔",
    "on": "ちょう",
    "kun": "とむら.う、とぶら.う",
    "english": "Condolences, Mourning, Funeral",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 4,
    "myanmar": "Condolences、Mourning、Funeral"
  },
  {
    "char": "乙",
    "on": "おつ、いつ",
    "kun": "おと-、きのと",
    "english": "The Latter, Duplicate, Strange, Witty, Fishhook Radical (no. 5)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 1,
    "myanmar": "The Latter、ပွားလည်း、Strange、Witty、Fishhook Radical (no. 5)"
  },
  {
    "char": "遍",
    "on": "へん",
    "kun": "あまね.く",
    "english": "Everywhere, Times, Widely, Generally",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Everywhere、အချိန်、အလွန်အလန်းကြီး、အထွေထွေ"
  },
  {
    "char": "衡",
    "on": "こう",
    "kun": "",
    "english": "Equilibrium, Measuring Rod, Scale",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Equilibrium、Measuring Rod、Scale"
  },
  {
    "char": "款",
    "on": "かん",
    "kun": "",
    "english": "Goodwill, Article, Section, Friendship, Collusion",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Goodwill、Article、အပိုင်း、Friendship、Collusion"
  },
  {
    "char": "閲",
    "on": "えつ",
    "kun": "けみ.する",
    "english": "Review, Inspection, Revision",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Review、Inspection、Revision"
  },
  {
    "char": "喝",
    "on": "かつ",
    "kun": "",
    "english": "Hoarse, Scold",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Hoarse、Scold"
  },
  {
    "char": "敢",
    "on": "かん",
    "kun": "あ.えて、あ.えない、あ.えず",
    "english": "Daring, Brave, Bold, Sad, Tragic, Pitiful",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Daring、Brave、Bold、စိတ်ဆိုး、Tragic、Pitiful"
  },
  {
    "char": "膜",
    "on": "まく",
    "kun": "",
    "english": "Membrane",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Membrane"
  },
  {
    "char": "盲",
    "on": "もう",
    "kun": "めくら",
    "english": "Blind, Blind Man, Ignoramus",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Blind、Blind Man、Ignoramus"
  },
  {
    "char": "胎",
    "on": "たい",
    "kun": "",
    "english": "Womb, Uterus",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Womb、Uterus"
  },
  {
    "char": "酵",
    "on": "こう",
    "kun": "",
    "english": "Fermentation",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Fermentation"
  },
  {
    "char": "堕",
    "on": "だ",
    "kun": "お.ちる、くず.す、くず.れる",
    "english": "Degenerate, Descend To, Lapse Into",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Degenerate、Descend To、Lapse Into"
  },
  {
    "char": "遮",
    "on": "しゃ",
    "kun": "さえぎ.る",
    "english": "Intercept, Interrupt, Obstruct",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Intercept、Interrupt、Obstruct"
  },
  {
    "char": "凸",
    "on": "とつ",
    "kun": "でこ",
    "english": "Convex, Beetle Brow, Uneven",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Convex、Beetle Brow、Uneven"
  },
  {
    "char": "凹",
    "on": "おう",
    "kun": "くぼ.む、へこ.む、ぼこ",
    "english": "Concave, Hollow, Sunken",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Concave、Hollow、Sunken"
  },
  {
    "char": "瑠",
    "on": "る、りゅう",
    "kun": "",
    "english": "Lapis Lazuli",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Lapis Lazuli"
  },
  {
    "char": "硫",
    "on": "りゅう",
    "kun": "",
    "english": "Sulphur",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Sulphur"
  },
  {
    "char": "赦",
    "on": "しゃ",
    "kun": "",
    "english": "Pardon, Forgiveness",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Pardon、Forgiveness"
  },
  {
    "char": "窃",
    "on": "せつ",
    "kun": "ぬす.む、ひそ.か",
    "english": "Stealth, Steal, Secret, Private, Hushed",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Stealth、Steal、Secret、ယာယီ、Hushed"
  },
  {
    "char": "慨",
    "on": "がい",
    "kun": "",
    "english": "Rue, Be Sad, Sigh, Lament",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Rue、Be Sad、Sigh、Lament"
  },
  {
    "char": "扶",
    "on": "ふ",
    "kun": "たす.ける",
    "english": "Aid, Help, Assist",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Aid、ကူညီ、Assist"
  },
  {
    "char": "戯",
    "on": "ぎ、げ",
    "kun": "たわむ.れる、ざ.れる、じゃ.れる",
    "english": "Frolic, Play, Sport",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Frolic、ကစား、Sport"
  },
  {
    "char": "忌",
    "on": "き",
    "kun": "い.む、い.み、い.まわしい",
    "english": "Mourning, Abhor, Detestable, Death Anniversary",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Mourning、Abhor、Detestable、Death Anniversary"
  },
  {
    "char": "濁",
    "on": "だく、じょく",
    "kun": "にご.る、にご.す",
    "english": "Voiced, Uncleanness, Wrong, Nigori, Impurity",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Voiced、Uncleanness、Wrong、Nigori、Impurity"
  },
  {
    "char": "奔",
    "on": "ほん",
    "kun": "はし.る",
    "english": "Run, Bustle",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "ပြေးသည်、Bustle"
  },
  {
    "char": "肖",
    "on": "しょう",
    "kun": "あやか.る",
    "english": "Resemblance",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Resemblance"
  },
  {
    "char": "朽",
    "on": "きゅう",
    "kun": "く.ちる",
    "english": "Decay, Rot, Remain In Seclusion",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Decay、Rot、Remain In Seclusion"
  },
  {
    "char": "殻",
    "on": "かく、こく、ばい",
    "kun": "から、がら",
    "english": "Husk, Nut Shell",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Husk、Nut Shell"
  },
  {
    "char": "享",
    "on": "きょう、こう",
    "kun": "う.ける",
    "english": "Enjoy, Receive, Undergo, Answer (phone), Take, Get, Catch",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "ပျော်ရွှင်、လက်ခံ、Undergo、Answer (phone)、ယူ、Get、Catch"
  },
  {
    "char": "藩",
    "on": "はん",
    "kun": "",
    "english": "Clan, Enclosure",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Clan、ပတ်ပေါက်"
  },
  {
    "char": "媒",
    "on": "ばい",
    "kun": "なこうど",
    "english": "Mediator, Go-between",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Mediator、Go-between"
  },
  {
    "char": "鶏",
    "on": "けい",
    "kun": "にわとり、とり",
    "english": "Chicken",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 19,
    "myanmar": "Chicken"
  },
  {
    "char": "嘱",
    "on": "しょく",
    "kun": "しょく.する、たの.む",
    "english": "Entrust, Request, Send A Message",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "အပ်နှံ、တောင်းပန်、Send A Message"
  },
  {
    "char": "迭",
    "on": "てつ",
    "kun": "",
    "english": "Transfer, Alternation",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Transfer、Alternation"
  },
  {
    "char": "椎",
    "on": "つい、すい",
    "kun": "つち、う.つ",
    "english": "Chinquapin, Mallet, Spine",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Chinquapin、Mallet、Spine"
  },
  {
    "char": "絹",
    "on": "けん",
    "kun": "きぬ",
    "english": "Silk",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 13,
    "myanmar": "Silk"
  },
  {
    "char": "陪",
    "on": "ばい",
    "kun": "",
    "english": "Obeisance, Follow, Accompany, Attend On",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Obeisance、လိုက်、Accompany、Attend On"
  },
  {
    "char": "剖",
    "on": "ぼう",
    "kun": "",
    "english": "Divide",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "ခွဲ"
  },
  {
    "char": "譜",
    "on": "ふ",
    "kun": "",
    "english": "Musical Score, Music, Note, Staff, Table, Genealogy",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 19,
    "myanmar": "Musical Score、ဂီတ、Note、Staff、စားပွဲ、Genealogy"
  },
  {
    "char": "淑",
    "on": "しゅく",
    "kun": "しと.やか",
    "english": "Graceful, Gentle, Pure",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Graceful、Gentle、သန့်ရှင်းသော"
  },
  {
    "char": "帆",
    "on": "はん",
    "kun": "ほ",
    "english": "Sail",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "လှေလှန်လှုပ်"
  },
  {
    "char": "憤",
    "on": "ふん",
    "kun": "いきどお.る",
    "english": "Aroused, Resent, Be Indignant, Anger",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Aroused、Resent、Be Indignant、Anger"
  },
  {
    "char": "酌",
    "on": "しゃく",
    "kun": "く.む",
    "english": "Bar-tending, Serving Sake, The Host, Draw (water), Ladle, Scoop, Pump",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Bar-tending、Serving Sake、The Host、Draw (water)、Ladle、Scoop、Pump"
  },
  {
    "char": "暁",
    "on": "ぎょう、きょう",
    "kun": "あかつき、さと.る",
    "english": "Daybreak, Dawn, In The Event",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Daybreak、Dawn、In The Event"
  },
  {
    "char": "傑",
    "on": "けつ",
    "kun": "すぐ.れる",
    "english": "Greatness, Excellence",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Greatness、Excellence"
  },
  {
    "char": "錠",
    "on": "じょう",
    "kun": "",
    "english": "Lock, Fetters, Shackles",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Lock、Fetters、Shackles"
  },
  {
    "char": "璃",
    "on": "り",
    "kun": "",
    "english": "Glassy, Lapis Lazuli",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Glassy、Lapis Lazuli"
  },
  {
    "char": "遷",
    "on": "せん",
    "kun": "うつ.る、うつ.す、みやこがえ",
    "english": "Transition, Move, Change",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Transition、ရွှေ့、ပြောင်း"
  },
  {
    "char": "拙",
    "on": "せつ",
    "kun": "つたな.い",
    "english": "Bungling, Clumsy, Unskillful",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Bungling、Clumsy、Unskillful"
  },
  {
    "char": "峠",
    "on": "",
    "kun": "とうげ",
    "english": "Mountain Peak, Mountain Pass, Climax, Crest, (kokuji)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Mountain Peak、Mountain Pass、Climax、Crest、(kokuji)"
  },
  {
    "char": "篤",
    "on": "とく",
    "kun": "あつ.い",
    "english": "Fervent, Kind, Cordial, Serious, Deliberate",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Fervent、မျိုးစိတ်、စိတ်ချစ်ကြိုး、Serious、Deliberate"
  },
  {
    "char": "叔",
    "on": "しゅく",
    "kun": "",
    "english": "Uncle, Youth",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Uncle、Youth"
  },
  {
    "char": "雌",
    "on": "し",
    "kun": "め-、めす、めん",
    "english": "Feminine, Female",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Feminine、Female"
  },
  {
    "char": "堪",
    "on": "かん、たん",
    "kun": "た.える、たま.る、こら.える、こた.える",
    "english": "Withstand, Endure, Support, Resist",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Withstand、Endure、ထောက်ခံ、ပူးပေါင်း"
  },
  {
    "char": "吟",
    "on": "ぎん",
    "kun": "",
    "english": "Versify, Singing, Recital",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Versify、Singing、Recital"
  },
  {
    "char": "甚",
    "on": "じん",
    "kun": "はなは.だ、はなは.だしい",
    "english": "Tremendously, Very, Great, Exceedingly",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Tremendously、အလွန်အလန်းကြီး、ကြီးစာ、Exceedingly"
  },
  {
    "char": "崇",
    "on": "すう",
    "kun": "あが.める",
    "english": "Adore, Respect, Revere, Worship",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Adore、Respect、Revere、Worship"
  },
  {
    "char": "漆",
    "on": "しつ",
    "kun": "うるし",
    "english": "Lacquer, Varnish, Seven",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Lacquer、Varnish、ခုနစ်"
  },
  {
    "char": "岬",
    "on": "こう",
    "kun": "みさき",
    "english": "Headland, Cape, Spit, Promontory",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Headland、Cape、Spit、Promontory"
  },
  {
    "char": "紡",
    "on": "ぼう",
    "kun": "つむ.ぐ",
    "english": "Spinning",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Spinning"
  },
  {
    "char": "礁",
    "on": "しょう",
    "kun": "",
    "english": "Reef, Sunken Rock",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Reef、Sunken Rock"
  },
  {
    "char": "屯",
    "on": "とん",
    "kun": "たむろ",
    "english": "Barracks, Police Station, Camp, Ton",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 4,
    "myanmar": "Barracks、ရဲစခန်း、ြံဝnake、Ton"
  },
  {
    "char": "姻",
    "on": "いん",
    "kun": "",
    "english": "Matrimony, Marry",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Matrimony、Marry"
  },
  {
    "char": "擬",
    "on": "ぎ",
    "kun": "まが.い、もど.き",
    "english": "Mimic, Aim (a Gun) At, Nominate, Imitate",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Mimic、Aim (a Gun) At、Nominate、မှန်ကန်စွာ"
  },
  {
    "char": "睦",
    "on": "ぼく、もく",
    "kun": "むつ.まじい、むつ.む、むつ.ぶ",
    "english": "Intimate, Friendly, Harmonious",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Intimate、Friendly、Harmonious"
  },
  {
    "char": "閑",
    "on": "かん",
    "kun": "",
    "english": "Leisure",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Leisure"
  },
  {
    "char": "曹",
    "on": "そう、ぞう",
    "kun": "",
    "english": "Office, Official, Comrade, Fellow",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "ရုံး、Official、Comrade、Fellow"
  },
  {
    "char": "詠",
    "on": "えい",
    "kun": "よ.む、うた.う",
    "english": "Recitation, Poem, Song, Composing",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Recitation、ကဗျာ、Song、Composing"
  },
  {
    "char": "卑",
    "on": "ひ",
    "kun": "いや.しい、いや.しむ、いや.しめる",
    "english": "Lowly, Base, Vile, Vulgar",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Lowly、အခြေခံ、Vile、Vulgar"
  },
  {
    "char": "侮",
    "on": "ぶ",
    "kun": "あなど.る、あなず.る",
    "english": "Scorn, Despise, Make Light Of, Contempt",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Scorn、Despise、Make Light Of、Contempt"
  },
  {
    "char": "鋳",
    "on": "ちゅう、い、しゅ、しゅう",
    "kun": "い.る",
    "english": "Casting, Mint",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Casting、Mint"
  },
  {
    "char": "蔑",
    "on": "べつ",
    "kun": "ないがしろ、なみ.する、くらい、さげす.む",
    "english": "Ignore, Despise, Neglect, Ridicule",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Ignore、Despise、Neglect、Ridicule"
  },
  {
    "char": "胆",
    "on": "たん",
    "kun": "きも",
    "english": "Gall Bladder, Courage, Pluck, Nerve",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Gall Bladder、Courage、Pluck、Nerve"
  },
  {
    "char": "浪",
    "on": "ろう",
    "kun": "",
    "english": "Wandering, Waves, Billows, Reckless, Unrestrained",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Wandering、လှိုင်း、လှိုင်း、Reckless、Unrestrained"
  },
  {
    "char": "禍",
    "on": "か",
    "kun": "わざわい",
    "english": "Calamity, Misfortune, Evil, Curse",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Calamity、Misfortune、Evil、Curse"
  },
  {
    "char": "酪",
    "on": "らく",
    "kun": "",
    "english": "Dairy Products, Whey, Broth, Fruit Juice",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Dairy Products、Whey、Broth、Fruit Juice"
  },
  {
    "char": "憧",
    "on": "しょう、とう、どう",
    "kun": "あこが.れる",
    "english": "Yearn After, Long For, Aspire To, Admire, Adore",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Yearn After、Long For、Aspire To、Admire、Adore"
  },
  {
    "char": "慶",
    "on": "けい",
    "kun": "よろこ.び",
    "english": "Jubilation, Congratulate, Rejoice, Be Happy",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Jubilation、Congratulate、Rejoice、Be Happy"
  },
  {
    "char": "亜",
    "on": "あ",
    "kun": "つ.ぐ",
    "english": "Asia, Rank Next, Come After, -ous",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Asia、Rank Next、Come After、-ous"
  },
  {
    "char": "汰",
    "on": "た、たい",
    "kun": "おご.る、にご.る、よな.げる",
    "english": "Washing, Sieving, Filtering, Weeding Out, Luxury",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Washing、Sieving、Filtering、Weeding Out、Luxury"
  },
  {
    "char": "沙",
    "on": "さ、しゃ",
    "kun": "すな、よなげる",
    "english": "Sand",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Sand"
  },
  {
    "char": "逝",
    "on": "せい",
    "kun": "ゆ.く、い.く",
    "english": "Departed, Die",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Departed、သေ"
  },
  {
    "char": "匿",
    "on": "とく",
    "kun": "かくま.う",
    "english": "Hide, Shelter, Shield",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "ဝှက်、ကာကွယ်、Shield"
  },
  {
    "char": "寡",
    "on": "か",
    "kun": "",
    "english": "Widow, Minority, Few",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Widow、Minority、နည်းပါး"
  },
  {
    "char": "痢",
    "on": "り",
    "kun": "",
    "english": "Diarrhea",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Diarrhea"
  },
  {
    "char": "坑",
    "on": "こう",
    "kun": "",
    "english": "Pit, Hole",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Pit、Hole"
  },
  {
    "char": "藍",
    "on": "らん",
    "kun": "あい",
    "english": "Indigo",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Indigo"
  },
  {
    "char": "畔",
    "on": "はん",
    "kun": "あぜ、くろ、ほとり",
    "english": "Paddy Ridge, Levee",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Paddy Ridge、Levee"
  },
  {
    "char": "唄",
    "on": "ばい",
    "kun": "うた、うた.う",
    "english": "Song, Ballad",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Song、Ballad"
  },
  {
    "char": "拷",
    "on": "ごう",
    "kun": "",
    "english": "Torture, Beat",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Torture、Beat"
  },
  {
    "char": "渓",
    "on": "けい",
    "kun": "たに、たにがわ",
    "english": "Mountain Stream, Valley",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Mountain Stream、ချောင်း"
  },
  {
    "char": "廉",
    "on": "れん",
    "kun": "",
    "english": "Bargain, Reason, Charge, Suspicion, Point, Account, Purity, Honest, Low Price, Cheap, Rested, Contented, Peaceful",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Bargain、အကြောင်းရင်း、စျေး、Suspicion、Point、Account、Purity、Honest、Low Price、Cheap、Rested、Contented、Peaceful"
  },
  {
    "char": "謹",
    "on": "きん",
    "kun": "つつし.む",
    "english": "Discreet, Reverently, Humbly",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Discreet、Reverently、Humbly"
  },
  {
    "char": "湧",
    "on": "ゆう、よう、ゆ",
    "kun": "わ.く",
    "english": "Boil, Ferment, Seethe, Uproar, Breed",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "လောင်း、လောင်း、လောင်း、လူပုလဲ、မွေးမြူ"
  },
  {
    "char": "醜",
    "on": "しゅう",
    "kun": "みにく.い、しこ",
    "english": "Ugly, Unclean, Shame, Bad Looking",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "ပိန်လှ、Unclean、Shame、Bad Looking"
  },
  {
    "char": "升",
    "on": "しょう",
    "kun": "ます",
    "english": "Measuring Box, 1.8 Liter",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 4,
    "myanmar": "Measuring Box、1.8 Liter"
  },
  {
    "char": "殉",
    "on": "じゅん",
    "kun": "",
    "english": "Martyrdom, Follow By Resigning",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Martyrdom、Follow By Resigning"
  },
  {
    "char": "煩",
    "on": "はん、ぼん",
    "kun": "わずら.う、わずら.わす、うるさ.がる、うるさ.い",
    "english": "Anxiety, Trouble, Worry, Pain, Ill, Annoy, Nuisance, Irksome",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Anxiety、Trouble、Worry、Pain、ဖျားနာ、Annoy、Nuisance、Irksome"
  },
  {
    "char": "劾",
    "on": "がい",
    "kun": "",
    "english": "Censure, Criminal Investigation",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Censure、Criminal Investigation"
  },
  {
    "char": "桟",
    "on": "さん、せん",
    "kun": "かけはし",
    "english": "Scaffold, Cleat, Frame, Jetty, Bolt (door)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Scaffold、Cleat、ခြား、Jetty、Bolt (door)"
  },
  {
    "char": "婿",
    "on": "せい",
    "kun": "むこ",
    "english": "Bridegroom, Son-in-law",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Bridegroom、Son-in-law"
  },
  {
    "char": "慕",
    "on": "ぼ",
    "kun": "した.う",
    "english": "Pining, Yearn For, Love Dearly, Adore",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Pining、Yearn For、Love Dearly、Adore"
  },
  {
    "char": "罷",
    "on": "ひ",
    "kun": "まか.り-、や.める",
    "english": "Quit, Stop, Leave, Withdraw, Go",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Quit、ရပ်、ထွက်、Withdraw、သွား"
  },
  {
    "char": "矯",
    "on": "きょう",
    "kun": "た.める",
    "english": "Rectify, Straighten, Correct, Reform, Cure, Control, Pretend, Falsify",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Rectify、Straighten、Correct、Reform、ပျောက်ကွယ်、ထိန်းချုပ်、အလိုမရှိဘဲ、Falsify"
  },
  {
    "char": "某",
    "on": "ぼう",
    "kun": "それがし、なにがし",
    "english": "So-and-so, One, A Certain, That Person",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "So-and-so、တစ်、A Certain、That Person"
  },
  {
    "char": "囚",
    "on": "しゅう",
    "kun": "とら.われる",
    "english": "Captured, Criminal, Arrest, Catch",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Captured、Criminal、Arrest、Catch"
  },
  {
    "char": "泌",
    "on": "ひつ、ひ",
    "kun": "",
    "english": "Ooze, Flow, Soak In, Penetrate, Secrete",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Ooze、Flow、Soak In、Penetrate、Secrete"
  },
  {
    "char": "漸",
    "on": "ぜん",
    "kun": "ようや.く、やや、ようよ.う、すす.む",
    "english": "Steadily, Gradually Advancing, Finally, Barely",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Steadily、Gradually Advancing、Finally、Barely"
  },
  {
    "char": "藻",
    "on": "そう",
    "kun": "も",
    "english": "Seaweed, Duckweed",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 19,
    "myanmar": "Seaweed、Duckweed"
  },
  {
    "char": "妄",
    "on": "もう、ぼう",
    "kun": "みだ.りに",
    "english": "Delusion, Unnecessarily, Without Authority, Reckless",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Delusion、Unnecessarily、Without Authority、Reckless"
  },
  {
    "char": "蛮",
    "on": "ばん",
    "kun": "えびす",
    "english": "Barbarian",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Barbarian"
  },
  {
    "char": "倹",
    "on": "けん",
    "kun": "つま.しい、つづまやか",
    "english": "Frugal, Economy, Thrifty",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Frugal、Economy、Thrifty"
  },
  {
    "char": "挨",
    "on": "あい",
    "kun": "ひら.く",
    "english": "Approach, Draw Near, Push Open",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Approach、Draw Near、Push Open"
  },
  {
    "char": "宛",
    "on": "えん",
    "kun": "あ.てる、-あて、-づつ、あたか.も",
    "english": "Address, Just Like, Fortunately",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Address、Just Like、Fortunately"
  },
  {
    "char": "畏",
    "on": "い",
    "kun": "おそ.れる、かしこま.る、かしこ、かしこ.し",
    "english": "Fear, Majestic, Graciously, Be Apprehensive",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 9,
    "myanmar": "ကြောက်、Majestic、Graciously、Be Apprehensive"
  },
  {
    "char": "萎",
    "on": "い",
    "kun": "な、しお.れる、しな.びる、しぼ.む、な.える",
    "english": "Wither, Droop, Lame",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 11,
    "myanmar": "ခြောက်、Droop、Lame"
  },
  {
    "char": "壱",
    "on": "いち、いつ",
    "kun": "ひとつ",
    "english": "One (in Documents)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "One (in Documents)"
  },
  {
    "char": "咽",
    "on": "いん、えん、えつ",
    "kun": "むせ.ぶ、むせ.る、のど、の.む",
    "english": "Throat, Choked, Smothered, Stuffy",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Throat、Choked、Smothered、Stuffy"
  },
  {
    "char": "淫",
    "on": "いん",
    "kun": "ひた.す、ほしいまま、みだ.ら、みだ.れる、みだり",
    "english": "Lewdness, Licentiousness",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Lewdness、Licentiousness"
  },
  {
    "char": "韻",
    "on": "いん",
    "kun": "",
    "english": "Rhyme, Elegance, Tone",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 19,
    "myanmar": "Rhyme、Elegance、Tone"
  },
  {
    "char": "臼",
    "on": "きゅう、ぐ",
    "kun": "うす、うすづ.く",
    "english": "Mortar",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Mortar"
  },
  {
    "char": "餌",
    "on": "じ、に",
    "kun": "え、えば、えさ、もち",
    "english": "Food, Bait, Prey, Tempting Profit",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 14,
    "myanmar": "စာ、Bait、Prey、Tempting Profit"
  },
  {
    "char": "謁",
    "on": "えつ",
    "kun": "",
    "english": "Audience, Audience (with King)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Audience、Audience (with King)"
  },
  {
    "char": "怨",
    "on": "えん、おん、うん",
    "kun": "うら.む、うらみ、うら.めしい",
    "english": "Grudge, Show Resentment, Be Jealous",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Grudge、Show Resentment、Be Jealous"
  },
  {
    "char": "艶",
    "on": "えん",
    "kun": "つや、なま.めかしい、あで.やか、つや.めく、なま.めく",
    "english": "Glossy, Luster, Glaze, Polish, Charm, Colorful, Captivating",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 19,
    "myanmar": "Glossy、Luster、Glaze、သန့်ရှင်းသည်、လက်မှတ်、Colorful、Captivating"
  },
  {
    "char": "旺",
    "on": "おう、きょう、ごう",
    "kun": "かがや.き、うつくし.い、さかん",
    "english": "Flourishing, Successful, Beautiful, Vigorous",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Flourishing、Successful、လှပ、Vigorous"
  },
  {
    "char": "翁",
    "on": "おう",
    "kun": "おきな",
    "english": "Venerable Old Man",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Venerable Old Man"
  },
  {
    "char": "臆",
    "on": "おく、よく",
    "kun": "むね、おくする",
    "english": "Timidity, Heart, Mind, Fear, Cowardly",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Timidity、စိတ်、Mind、ကြောက်、Cowardly"
  },
  {
    "char": "箇",
    "on": "か、こ",
    "kun": "",
    "english": "Counter For Articles",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Counter For Articles"
  },
  {
    "char": "苛",
    "on": "か",
    "kun": "いじ.める、さいな.む、いらだ.つ、からい、こまかい",
    "english": "Torment, Scold, Chastise",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Torment、Scold、Chastise"
  },
  {
    "char": "蓋",
    "on": "がい、かい、こう",
    "kun": "ふた、けだ.し、おお.う、かさ、かこう",
    "english": "Cover, Lid, Flap",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "ဖုံးကွယ်、Lid、Flap"
  },
  {
    "char": "骸",
    "on": "がい、かい",
    "kun": "むくろ",
    "english": "Bone, Body, Corpse",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 16,
    "myanmar": "အရိုး、ခန္ဓာ、Corpse"
  },
  {
    "char": "柿",
    "on": "し",
    "kun": "かき",
    "english": "Persimmon",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Persimmon"
  },
  {
    "char": "嚇",
    "on": "かく",
    "kun": "おど.す",
    "english": "Menacing, Dignity, Majesty, Threaten",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Menacing、Dignity、Majesty、Threaten"
  },
  {
    "char": "顎",
    "on": "がく",
    "kun": "あご、あぎと",
    "english": "Jaw, Chin, Gill",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Jaw、Chin、Gill"
  },
  {
    "char": "葛",
    "on": "かつ、かち",
    "kun": "つづら、くず",
    "english": "Arrowroot, Kudzu",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Arrowroot、Kudzu"
  },
  {
    "char": "褐",
    "on": "かつ",
    "kun": "",
    "english": "Brown, Woollen Kimono",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Brown、Woollen Kimono"
  },
  {
    "char": "釜",
    "on": "ふ",
    "kun": "かま",
    "english": "Kettle, Cauldron, Iron Pot",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Kettle、Cauldron、Iron Pot"
  },
  {
    "char": "瓦",
    "on": "が",
    "kun": "かわら、ぐらむ",
    "english": "Tile, Gram",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Tile、Gram"
  },
  {
    "char": "棺",
    "on": "かん",
    "kun": "",
    "english": "Coffin, Casket",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Coffin、Casket"
  },
  {
    "char": "玩",
    "on": "がん",
    "kun": "もちあそ.ぶ、もてあそ.ぶ",
    "english": "Play, Take Pleasure In, Trifle With, Make Sport Of",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 8,
    "myanmar": "ကစား、Take Pleasure In、Trifle With、Make Sport Of"
  },
  {
    "char": "畿",
    "on": "き",
    "kun": "みやこ",
    "english": "Capital, Suburbs Of Capital",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Capital、Suburbs Of Capital"
  },
  {
    "char": "僅",
    "on": "きん、ごん",
    "kun": "わず.か",
    "english": "A Wee Bit",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 12,
    "myanmar": "A Wee Bit"
  },
  {
    "char": "斤",
    "on": "きん",
    "kun": "",
    "english": "Axe, 1.32 Lb, Catty, Counter For Loaves Of Bread, Axe Radical (no. 69)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 4,
    "myanmar": "Axe、1.32 Lb、Catty、Counter For Loaves Of Bread、Axe Radical (no. 69)"
  },
  {
    "char": "虞",
    "on": "ぐ",
    "kun": "おそれ、おもんぱか.る、はか.る、うれ.える、あざむ.く、あやま.る、のぞ.む、たの.しむ",
    "english": "Fear, Uneasiness, Anxiety, Concern, Expectation, Consideration",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "ကြောက်、Uneasiness、Anxiety、စိတ်ဝင်စား、Expectation、Consideration"
  },
  {
    "char": "串",
    "on": "かん、けん、せん",
    "kun": "くし、つらぬ.く",
    "english": "Spit, Skewer",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Spit、Skewer"
  },
  {
    "char": "窟",
    "on": "くつ、こつ",
    "kun": "いわや、いはや、あな",
    "english": "Cavern",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Cavern"
  },
  {
    "char": "薫",
    "on": "くん",
    "kun": "かお.る",
    "english": "Send Forth Fragrance, Fragrant, Be Scented, Smoke (tobacco)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Send Forth Fragrance、Fragrant、Be Scented、Smoke (tobacco)"
  },
  {
    "char": "稽",
    "on": "けい",
    "kun": "かんが.える、とど.める",
    "english": "Think, Consider",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 16,
    "myanmar": "အတွေးအမြင်ဆွဲ、စဉ်းစား"
  },
  {
    "char": "詣",
    "on": "けい、げい",
    "kun": "けい.する、まい.る、いた.る、もう.でる",
    "english": "Visit A Temple, Arrive, Attain",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Visit A Temple、ရောက်、Attain"
  },
  {
    "char": "桁",
    "on": "こう",
    "kun": "けた",
    "english": "Beam, Girder, Spar, Unit Or Column (accounting)",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Beam、Girder、Spar、Unit Or Column (accounting)"
  },
  {
    "char": "舷",
    "on": "げん",
    "kun": "ふなばた、ふなべり",
    "english": "Gunwale",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Gunwale"
  },
  {
    "char": "股",
    "on": "こ",
    "kun": "また、もも",
    "english": "Thigh, Crotch",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Thigh、Crotch"
  },
  {
    "char": "乞",
    "on": "こつ、きつ、き、きけ、こち",
    "kun": "こ.う",
    "english": "Beg, Invite, Ask",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 3,
    "myanmar": "တောင်းပန်、Invite、မေးသည်"
  },
  {
    "char": "侯",
    "on": "こう",
    "kun": "",
    "english": "Marquis, Lord, Daimyo",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Marquis、Lord、Daimyo"
  },
  {
    "char": "勾",
    "on": "こう、く",
    "kun": "かぎ、ま.がる",
    "english": "Be Bent, Slope, Capture",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 4,
    "myanmar": "Be Bent、တောင်တန်း、သိမ်းပိုက်"
  },
  {
    "char": "喉",
    "on": "こう",
    "kun": "のど",
    "english": "Throat, Voice",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Throat、Voice"
  },
  {
    "char": "慌",
    "on": "こう",
    "kun": "あわ.てる、あわ.ただしい",
    "english": "Disconcerted, Be Confused, Lose One's Head",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Disconcerted、Be Confused、Lose One's Head"
  },
  {
    "char": "梗",
    "on": "こう、きょう",
    "kun": "ふさぐ、やまにれ、おおむね",
    "english": "For The Most Part, Close Up, Flower Stem",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 11,
    "myanmar": "For The Most Part、Close Up、Flower Stem"
  },
  {
    "char": "墾",
    "on": "こん",
    "kun": "は.る、ひら.く",
    "english": "Ground-breaking, Open Up Farmland",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Ground-breaking、Open Up Farmland"
  },
  {
    "char": "痕",
    "on": "こん",
    "kun": "あと",
    "english": "Mark, Foot Print",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 11,
    "myanmar": "မှတ်ချက်、Foot Print"
  },
  {
    "char": "挫",
    "on": "ざ、さ",
    "kun": "くじ.く、くじ.ける",
    "english": "Crush, Break, Sprain, Discourage",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Crush、Break、Sprain、Discourage"
  },
  {
    "char": "塞",
    "on": "そく、さい",
    "kun": "ふさ.ぐ、とりで、み.ちる",
    "english": "Close, Shut, Cover, Block, Obstruct",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "ပိတ်、Shut、ဖုံးကွယ်、Block、Obstruct"
  },
  {
    "char": "采",
    "on": "さい",
    "kun": "と.る、いろどり",
    "english": "Dice, Form, Appearance, Take, Gather, Coloring",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Dice、Form、Appearance、ယူ、စုဆည်း、Coloring"
  },
  {
    "char": "柵",
    "on": "さく、さん",
    "kun": "しがら.む、しがらみ、とりで、やらい",
    "english": "Stockade, Fence, Weir, Entwine Around",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Stockade、Fence、Weir、Entwine Around"
  },
  {
    "char": "拶",
    "on": "さつ",
    "kun": "せま.る",
    "english": "Be Imminent, Draw Close",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Be Imminent、Draw Close"
  },
  {
    "char": "蚕",
    "on": "さん、てん",
    "kun": "かいこ、こ",
    "english": "Silkworm",
    "jlpt_new": 1,
    "grade": 6,
    "strokes": 10,
    "myanmar": "Silkworm"
  },
  {
    "char": "嗣",
    "on": "し",
    "kun": "",
    "english": "Heir, Succeed",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Heir、Succeed"
  },
  {
    "char": "肢",
    "on": "し",
    "kun": "",
    "english": "Limb, Arms & Legs",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Limb、Arms & Legs"
  },
  {
    "char": "賜",
    "on": "し",
    "kun": "たまわ.る、たま.う、たも.う",
    "english": "Grant, Gift, Boon, Results",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Grant、Gift、Boon、Results"
  },
  {
    "char": "璽",
    "on": "じ",
    "kun": "",
    "english": "Emperor's Seal",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 19,
    "myanmar": "Emperor's Seal"
  },
  {
    "char": "嫉",
    "on": "しつ",
    "kun": "そね.む、ねた.む、にく.む",
    "english": "Jealous, Envy",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Jealous、Envy"
  },
  {
    "char": "爵",
    "on": "しゃく",
    "kun": "",
    "english": "Baron, Peerage, Court Rank",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Baron、Peerage、Court Rank"
  },
  {
    "char": "腫",
    "on": "しゅ、しょう",
    "kun": "は.れる、は.れ、は.らす、く.む、はれもの",
    "english": "Tumor, Swelling",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Tumor、Swelling"
  },
  {
    "char": "儒",
    "on": "じゅ",
    "kun": "",
    "english": "Confucian",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Confucian"
  },
  {
    "char": "愁",
    "on": "しゅう",
    "kun": "うれ.える、うれ.い",
    "english": "Distress, Grieve, Lament, Be Anxious",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Distress、Grieve、Lament、Be Anxious"
  },
  {
    "char": "蹴",
    "on": "しゅく、しゅう",
    "kun": "け.る",
    "english": "Kick",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 19,
    "myanmar": "Kick"
  },
  {
    "char": "遵",
    "on": "じゅん",
    "kun": "",
    "english": "Abide By, Follow, Obey, Learn",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Abide By、လိုက်、လိုက်、သင်ယူ"
  },
  {
    "char": "宵",
    "on": "しょう",
    "kun": "よい",
    "english": "Wee Hours, Evening, Early Night",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Wee Hours、ညနေခင်း、Early Night"
  },
  {
    "char": "抄",
    "on": "しょう",
    "kun": "",
    "english": "Extract, Selection, Summary, Copy, Spread Thin",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Extract、Selection、Summary、ကူးယူ、Spread Thin"
  },
  {
    "char": "硝",
    "on": "しょう",
    "kun": "",
    "english": "Nitrate, Saltpeter",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Nitrate、Saltpeter"
  },
  {
    "char": "詔",
    "on": "しょう",
    "kun": "みことのり",
    "english": "Imperial Edict",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Imperial Edict"
  },
  {
    "char": "拭",
    "on": "しょく、しき",
    "kun": "ぬぐ.う、ふ.く",
    "english": "Wipe, Mop, Swab",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Wipe、Mop、Swab"
  },
  {
    "char": "薪",
    "on": "しん",
    "kun": "たきぎ、まき",
    "english": "Fuel, Firewood, Kindling",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Fuel、Firewood、Kindling"
  },
  {
    "char": "腎",
    "on": "じん",
    "kun": "",
    "english": "Kidney",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Kidney"
  },
  {
    "char": "裾",
    "on": "きょ、こ",
    "kun": "すそ",
    "english": "Cuff, Hem, Foot Of Mountain",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Cuff、Hem、Foot Of Mountain"
  },
  {
    "char": "畝",
    "on": "ぼう、ほ、も、む",
    "kun": "せ、うね",
    "english": "Furrow, Thirty Tsubo, Ridge, Rib",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Furrow、Thirty Tsubo、Ridge、Rib"
  },
  {
    "char": "凄",
    "on": "せい、さい",
    "kun": "さむ.い、すご.い、すさ.まじい",
    "english": "Uncanny, Weird, Threatening, Horrible",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Uncanny、Weird、Threatening、Horrible"
  },
  {
    "char": "醒",
    "on": "せい",
    "kun": "さ.ます、さ.める",
    "english": "Awake, Be Disillusioned, Sober Up",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Awake、Be Disillusioned、Sober Up"
  },
  {
    "char": "戚",
    "on": "そく、せき",
    "kun": "いた.む、うれ.える、みうち",
    "english": "Grieve, Relatives",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Grieve、Relatives"
  },
  {
    "char": "斥",
    "on": "せき",
    "kun": "しりぞ.ける",
    "english": "Reject, Retreat, Recede, Withdraw, Repel, Repulse",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Reject、Retreat、Recede、Withdraw、Repel、Repulse"
  },
  {
    "char": "煎",
    "on": "せん",
    "kun": "せん.じる、い.る、に.る",
    "english": "Broil, Parch, Roast, Boil",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Broil、ခြောက်、Roast、လောင်း"
  },
  {
    "char": "羨",
    "on": "せん、えん",
    "kun": "うらや.む、あまり",
    "english": "Envious, Be Jealous, Covet",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Envious、Be Jealous、Covet"
  },
  {
    "char": "腺",
    "on": "せん",
    "kun": "",
    "english": "Gland",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Gland"
  },
  {
    "char": "詮",
    "on": "せん",
    "kun": "せん.ずる、かい、あき.らか",
    "english": "Discussion, Methods Called For, Selection, Result",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Discussion、Methods Called For、Selection、ရလဒ်"
  },
  {
    "char": "繕",
    "on": "ぜん",
    "kun": "つくろ.う",
    "english": "Darning, Repair, Mend, Trim, Tidy Up, Adjust",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Darning、ပြုပြင်、ပြုပြင်、Trim、Tidy Up、Adjust"
  },
  {
    "char": "膳",
    "on": "ぜん、せん",
    "kun": "かしわ、すす.める、そな.える",
    "english": "Small Low Table, Tray",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Small Low Table、Tray"
  },
  {
    "char": "塑",
    "on": "そ",
    "kun": "でく",
    "english": "Model, Molding",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "မှန်ကန်စွာ、Molding"
  },
  {
    "char": "曽",
    "on": "そう、そ、ぞう",
    "kun": "かつ、かつて、すなわち",
    "english": "Formerly, Once, Before, Ever, Never, Ex-",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Formerly、Once、Before、Ever、ဘယ်တော့မျှ、ယခင်"
  },
  {
    "char": "遡",
    "on": "そ、さく",
    "kun": "さかのぼ.る",
    "english": "Go Upstream, Retrace The Past",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Go Upstream、Retrace The Past"
  },
  {
    "char": "痩",
    "on": "そう、ちゅう、しゅう、しゅ",
    "kun": "や.せる",
    "english": "Get Thin",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 12,
    "myanmar": "ဝက်လှမ်း"
  },
  {
    "char": "捉",
    "on": "そく、さく",
    "kun": "とら.える",
    "english": "Catch, Capture",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Catch、သိမ်းပိုက်"
  },
  {
    "char": "袖",
    "on": "しゅう",
    "kun": "そで",
    "english": "Sleeve, Wing (building), Extension, Give Cold Shoulder",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 10,
    "myanmar": "လက်ရာ、Wing (building)、Extension、Give Cold Shoulder"
  },
  {
    "char": "唾",
    "on": "だ、た",
    "kun": "つば、つばき",
    "english": "Saliva, Sputum",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Saliva、Sputum"
  },
  {
    "char": "堆",
    "on": "たい、つい",
    "kun": "うずたか.い",
    "english": "Piled High",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Piled High"
  },
  {
    "char": "但",
    "on": "たん",
    "kun": "ただ.し",
    "english": "However, But",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "However、But"
  },
  {
    "char": "綻",
    "on": "たん",
    "kun": "ほころ.びる",
    "english": "Be Rent, Ripped, Unravel, Run, Begin To Open, Smile",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Be Rent、Ripped、Unravel、ပြေးသည်、Begin To Open、Smile"
  },
  {
    "char": "逐",
    "on": "ちく",
    "kun": "",
    "english": "Pursue, Drive Away, Chase, Accomplish, Attain, Commit",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Pursue、Drive Away、Chase、Accomplish、Attain、Commit"
  },
  {
    "char": "嫡",
    "on": "ちゃく、てき",
    "kun": "",
    "english": "Legitimate Wife, Direct Descent (non-bastard)",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Legitimate Wife、Direct Descent (non-bastard)"
  },
  {
    "char": "衷",
    "on": "ちゅう",
    "kun": "",
    "english": "Inmost, Heart, Mind, Inside",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Inmost、စိတ်、Mind、အထဲ"
  },
  {
    "char": "勅",
    "on": "ちょく",
    "kun": "いまし.める、みことのり",
    "english": "Imperial Order",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Imperial Order"
  },
  {
    "char": "捗",
    "on": "ちょく、ほ",
    "kun": "はかど.る",
    "english": "Make Progress",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Make Progress"
  },
  {
    "char": "朕",
    "on": "ちん",
    "kun": "",
    "english": "Majestic Plural, Imperial We",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Majestic Plural、Imperial We"
  },
  {
    "char": "潰",
    "on": "かい、え",
    "kun": "つぶ.す、つぶ.れる、つい.える",
    "english": "Crush, Smash, Break, Dissipate",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Crush、Smash、Break、Dissipate"
  },
  {
    "char": "諦",
    "on": "てい、たい",
    "kun": "あきら.める、つまびらか、まこと",
    "english": "Truth, Clarity, Abandon, Give Up",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Truth、Clarity、Abandon、Give Up"
  },
  {
    "char": "逓",
    "on": "てい",
    "kun": "かわ.る、たがいに",
    "english": "Relay, In Turn, Sending",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Relay、In Turn、Sending"
  },
  {
    "char": "溺",
    "on": "でき、じょう、にょう",
    "kun": "いばり、おぼ.れる",
    "english": "Drown, Indulge",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Drown、Indulge"
  },
  {
    "char": "妬",
    "on": "と、つ",
    "kun": "ねた.む、そね.む、つも.る、ふさ.ぐ",
    "english": "Jealous, Envy",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Jealous、Envy"
  },
  {
    "char": "痘",
    "on": "とう",
    "kun": "",
    "english": "Pox, Smallpox",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Pox、Smallpox"
  },
  {
    "char": "謄",
    "on": "とう",
    "kun": "",
    "english": "Mimeograph, Copy",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 17,
    "myanmar": "Mimeograph、ကူးယူ"
  },
  {
    "char": "頓",
    "on": "とん、とつ",
    "kun": "にわか.に、とん.と、つまず.く、とみ.に、ぬかずく",
    "english": "Suddenly, Immediately, In A Hurry, Arrange, Stay In Place, Bow, Kowtow",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Suddenly、Immediately、In A Hurry、စီစဉ်、Stay In Place、Bow、Kowtow"
  },
  {
    "char": "弐",
    "on": "に、じ",
    "kun": "ふた.つ、そえ",
    "english": "Ii, Two, Second",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Ii、နှစ်、စက္ကန့်"
  },
  {
    "char": "匂",
    "on": "",
    "kun": "にお.う、にお.い、にお.わせる",
    "english": "Fragrant, Stink, Glow, Insinuate, (kokuji)",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 4,
    "myanmar": "Fragrant、Stink、လောင်း、Insinuate、(kokuji)"
  },
  {
    "char": "捻",
    "on": "ねん、じょう",
    "kun": "ね.じる、ねじ.る、ひね.くる、ひね.る",
    "english": "Twirl, Twist, Play With",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Twirl、ကိုက်ဖွဲ့、Play With"
  },
  {
    "char": "罵",
    "on": "ば",
    "kun": "ののし.る",
    "english": "Abuse, Insult",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Abuse、Insult"
  },
  {
    "char": "剥",
    "on": "はく、ほく",
    "kun": "へ.ぐ、へず.る、む.く、む.ける、は.がれる、は.ぐ、は.げる、は.がす",
    "english": "Come Off, Peel, Fade, Discolor",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Come Off、Peel、Fade、Discolor"
  },
  {
    "char": "斑",
    "on": "はん",
    "kun": "ふ、まだら",
    "english": "Spot, Blemish, Speck, Patches",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 12,
    "myanmar": "နေရာ、Blemish、Speck、Patches"
  },
  {
    "char": "氾",
    "on": "はん",
    "kun": "ひろ.がる",
    "english": "Spread Out, Wide",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Spread Out、Wide"
  },
  {
    "char": "汎",
    "on": "はん、ぶ、ふう、ほう、ほん",
    "kun": "ただよ.う、ひろ.い",
    "english": "Pan-",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Pan-"
  },
  {
    "char": "頒",
    "on": "はん",
    "kun": "わか.つ",
    "english": "Distribute, Disseminate, Partition, Understand",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Distribute、Disseminate、Partition、နားလည်"
  },
  {
    "char": "眉",
    "on": "び、み",
    "kun": "まゆ",
    "english": "Eyebrow",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Eyebrow"
  },
  {
    "char": "膝",
    "on": "しつ",
    "kun": "ひざ",
    "english": "Knee, Lap",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Knee、လက်တစ်တန်"
  },
  {
    "char": "肘",
    "on": "ちゅう",
    "kun": "ひじ",
    "english": "Elbow, Arm",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Elbow、Arm"
  },
  {
    "char": "賦",
    "on": "ふ、ぶ",
    "kun": "",
    "english": "Levy, Ode, Prose, Poem, Tribute, Installment",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Levy、Ode、Prose、ကဗျာ、Tribute、Installment"
  },
  {
    "char": "附",
    "on": "ふ",
    "kun": "つ.ける、つ.く",
    "english": "Affixed, Attach, Refer To, Append",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Affixed、Attach、Refer To、Append"
  },
  {
    "char": "丙",
    "on": "へい",
    "kun": "ひのえ",
    "english": "Third Class, 3rd, 3rd Calendar Sign",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 5,
    "myanmar": "Third Class、3rd、3rd Calendar Sign"
  },
  {
    "char": "蔽",
    "on": "へい、へつ、ふつ",
    "kun": "おお.う、おお.い",
    "english": "Cover, Shade, Mantle, Capsize, Be Ruined",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 15,
    "myanmar": "ဖုံးကွယ်、Shade、Mantle、Capsize、Be Ruined"
  },
  {
    "char": "倣",
    "on": "ほう",
    "kun": "なら.う",
    "english": "Emulate, Imitate",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "နှိုင်းယှဉ်、မှန်ကန်စွာ"
  },
  {
    "char": "貌",
    "on": "ぼう、ばく",
    "kun": "かたち、かたどる",
    "english": "Form, Appearance, Countenance",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Form、Appearance、Countenance"
  },
  {
    "char": "勃",
    "on": "ぼつ、ほつ",
    "kun": "おこ.る、にわかに",
    "english": "Suddenness, Rise",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Suddenness、တက်လာ"
  },
  {
    "char": "昧",
    "on": "まい、ばい",
    "kun": "くら.い、むさぼ.る",
    "english": "Dark, Foolish",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 9,
    "myanmar": "ှောင်、Foolish"
  },
  {
    "char": "繭",
    "on": "けん",
    "kun": "まゆ、きぬ",
    "english": "Cocoon",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Cocoon"
  },
  {
    "char": "冥",
    "on": "めい、みょう",
    "kun": "くら.い",
    "english": "Dark",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 10,
    "myanmar": "ှောင်"
  },
  {
    "char": "麺",
    "on": "めん、べん",
    "kun": "むぎこ",
    "english": "Noodles, Wheat Flour",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Noodles、Wheat Flour"
  },
  {
    "char": "耗",
    "on": "もう、こう",
    "kun": "",
    "english": "Decrease",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 10,
    "myanmar": "လျှော့ချ"
  },
  {
    "char": "餅",
    "on": "へい、ひょう",
    "kun": "もち、もちい",
    "english": "Mochi Rice Cake",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Mochi Rice Cake"
  },
  {
    "char": "冶",
    "on": "や",
    "kun": "い.る",
    "english": "Melting, Smelting",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Melting、Smelting"
  },
  {
    "char": "妖",
    "on": "よう",
    "kun": "あや.しい、なま.めく、わざわ.い",
    "english": "Attractive, Bewitching, Calamity",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Attractive、Bewitching、Calamity"
  },
  {
    "char": "窯",
    "on": "よう",
    "kun": "かま",
    "english": "Kiln, Oven, Furnace",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Kiln、Oven、Furnace"
  },
  {
    "char": "沃",
    "on": "よう、よく、おく",
    "kun": "そそ.ぐ",
    "english": "Fertility",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Fertility"
  },
  {
    "char": "濫",
    "on": "らん",
    "kun": "みだ.りに、みだ.りがましい",
    "english": "Excessive, Overflow, Spread Out",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Excessive、Overflow、Spread Out"
  },
  {
    "char": "吏",
    "on": "り",
    "kun": "",
    "english": "Officer, An Official",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 6,
    "myanmar": "Officer、An Official"
  },
  {
    "char": "侶",
    "on": "りょ、ろ",
    "kun": "とも",
    "english": "Companion, Follower",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Companion、Follower"
  },
  {
    "char": "厘",
    "on": "りん",
    "kun": "",
    "english": "Rin, 1/10 Sen, 1/10 Bu",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Rin、1/10 Sen、1/10 Bu"
  },
  {
    "char": "弄",
    "on": "ろう、る",
    "kun": "いじく.る、ろう.する、いじ.る、ひねく.る、たわむ.れる、もてあそ.ぶ",
    "english": "Play With, Tamper, Trifle With",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 7,
    "myanmar": "Play With、Tamper、Trifle With"
  },
  {
    "char": "楼",
    "on": "ろう",
    "kun": "たかどの",
    "english": "Watchtower, Lookout, High Building",
    "jlpt_new": 1,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Watchtower、Lookout、High Building"
  },
  {
    "char": "麓",
    "on": "ろく",
    "kun": "ふもと",
    "english": "Foot Of A Mountain",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 19,
    "myanmar": "Foot Of A Mountain"
  },
  {
    "char": "刹",
    "on": "せち、せつ、さつ",
    "kun": "",
    "english": "Temple",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Temple"
  },
  {
    "char": "喩",
    "on": "ゆ",
    "kun": "たと.える、さと.す",
    "english": "Metaphor, Compare",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 12,
    "myanmar": "Metaphor、နှိုင်းယှဉ်"
  },
  {
    "char": "嗅",
    "on": "きゅう",
    "kun": "か.ぐ",
    "english": "Smell, Sniff, Scent",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "နှပ်သည်、Sniff、Scent"
  },
  {
    "char": "嘲",
    "on": "ちょう、とう",
    "kun": "あざけ.る",
    "english": "Ridicule, Insult",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Ridicule、Insult"
  },
  {
    "char": "毀",
    "on": "き",
    "kun": "こぼ.つ、こわ.す、こぼ.れる、こわ.れる、そし.る、やぶ.る",
    "english": "Break, Destroy, Censure, Be Chipped, Be Scratched, Be Broken, Be Ruined",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Break、ဖျက်ဆီး、Censure、Be Chipped、Be Scratched、Be Broken、Be Ruined"
  },
  {
    "char": "彙",
    "on": "い",
    "kun": "はりねずみ",
    "english": "Same Kind, Collect, Classify, Category, Hedgehog",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Same Kind、Collect、Classify、Category、Hedgehog"
  },
  {
    "char": "恣",
    "on": "し",
    "kun": "ほしいまま",
    "english": "Selfish, Arbitrary",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 10,
    "myanmar": "Selfish、Arbitrary"
  },
  {
    "char": "惧",
    "on": "く、ぐ",
    "kun": "おそ.れる",
    "english": "Fear, Be Afraid Of, Dread",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 11,
    "myanmar": "ကြောက်、Be Afraid Of、Dread"
  },
  {
    "char": "慄",
    "on": "りつ",
    "kun": "ふる.える、おそ.れる、おのの.く",
    "english": "Fear",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "ကြောက်"
  },
  {
    "char": "憬",
    "on": "けい",
    "kun": "あこが.れる",
    "english": "Yearn For, Aspire To, Admire",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Yearn For、Aspire To、Admire"
  },
  {
    "char": "拉",
    "on": "らつ、ら、ろう",
    "kun": "らっ.する、ひし.ぐ、くだ.く",
    "english": "Latin, Kidnap, Crush",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 8,
    "myanmar": "Latin、Kidnap、Crush"
  },
  {
    "char": "摯",
    "on": "し",
    "kun": "いた.る",
    "english": "Gift, Seriousness",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 15,
    "myanmar": "Gift、Seriousness"
  },
  {
    "char": "曖",
    "on": "あい",
    "kun": "くら.い",
    "english": "Dark, Not Clear",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 17,
    "myanmar": "ှောင်、Not Clear"
  },
  {
    "char": "楷",
    "on": "かい",
    "kun": "",
    "english": "Square Character Style, Correctness",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Square Character Style、Correctness"
  },
  {
    "char": "璧",
    "on": "へき",
    "kun": "たま",
    "english": "Sphere, Ball",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 18,
    "myanmar": "Sphere、ဘောလုံး"
  },
  {
    "char": "瘍",
    "on": "よう",
    "kun": "かさ",
    "english": "Swelling, Boil, Tumor",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Swelling、လောင်း、Tumor"
  },
  {
    "char": "箋",
    "on": "せん",
    "kun": "ふだ",
    "english": "Paper, Label, Letter, Composition",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Paper、လက်မှတ်、Letter、ဖွဲ့စည်း"
  },
  {
    "char": "籠",
    "on": "ろう、る",
    "kun": "かご、こ.める、こも.る、こ.む",
    "english": "Basket, Devote Oneself, Seclude Oneself, Cage, Coop, Implied",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 22,
    "myanmar": "Basket、Devote Oneself、Seclude Oneself、Cage、Coop、Implied"
  },
  {
    "char": "緻",
    "on": "ち",
    "kun": "こまか.い",
    "english": "Fine (i.e. Not Coarse)",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Fine (i.e. Not Coarse)"
  },
  {
    "char": "羞",
    "on": "しゅう",
    "kun": "はじ.る、すすめ.る、は.ずかしい",
    "english": "Feel Ashamed",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Feel Ashamed"
  },
  {
    "char": "訃",
    "on": "ふ",
    "kun": "しらせ",
    "english": "Obituary",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 9,
    "myanmar": "Obituary"
  },
  {
    "char": "諧",
    "on": "かい",
    "kun": "かな.う、やわ.らぐ",
    "english": "Harmony",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Harmony"
  },
  {
    "char": "貪",
    "on": "たん、どん、とん",
    "kun": "むさぼ.る",
    "english": "Covet, Indulge In",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 11,
    "myanmar": "Covet、Indulge In"
  },
  {
    "char": "踪",
    "on": "そう、しょう",
    "kun": "あと",
    "english": "Remains, Clue, Footprint",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 15,
    "myanmar": "ကျန်းမာရေး、Clue、Footprint"
  },
  {
    "char": "辣",
    "on": "らつ",
    "kun": "から.い",
    "english": "Pungent, Spicy, Harsh, Cruel, Severe",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 14,
    "myanmar": "Pungent、အရသာ、Harsh、Cruel、Severe"
  },
  {
    "char": "錮",
    "on": "こ",
    "kun": "ふさ.ぐ",
    "english": "Confinement, To Tie",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Confinement、To Tie"
  },
  {
    "char": "塡",
    "on": "てん、ちん",
    "kun": "はま.る、うず.める、は.める、ふさ.ぐ",
    "english": "Fill In, Fill Up, Make Good",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 13,
    "myanmar": "Fill In、Fill Up、ပြုပြင်"
  },
  {
    "char": "頰",
    "on": "きょう",
    "kun": "ほお、ほほ",
    "english": "Cheeks, Jaw",
    "jlpt_new": null,
    "grade": 8,
    "strokes": 16,
    "myanmar": "Cheeks、Jaw"
  }
];
