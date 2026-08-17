// ============================================================
// 交通ルールの言葉データ (Traffic Rule Vocabulary)
// Each word: kanji + hiragana reading + Myanmar meaning.
// Displayed as a list/grid for study.
// ============================================================
const trafficWordData = [
  // 信号 (Signals)
  { word: '信号', reading: 'しんごう', meaning: 'မီးပွိုင့် (မီးပြ)', category: '信号' },
  { word: '赤信号', reading: 'あかしんごう', meaning: 'မီးနီ', category: '信号' },
  { word: '青信号', reading: 'あおしんごう', meaning: 'မီးစိမ်း', category: '信号' },
  { word: '黄信号', reading: 'きしんごう', meaning: 'မီးဝါ', category: '信号' },
  { word: '点滅信号', reading: 'てんめつしんごう', meaning: 'မှိတ်တုတ်မှိတ်တုတ်မီး', category: '信号' },
  { word: '矢印信号', reading: 'やじるししんごう', meaning: 'မြှားမီး', category: '信号' },
  { word: '歩行者用信号', reading: 'ほこうしゃようしんごう', meaning: 'လူကူးမီး', category: '信号' },
  // 交差点 (Intersections)
  { word: '交差点', reading: 'こうさてん', meaning: 'လမ်းဆုံ', category: '交差点' },
  { word: '右折', reading: 'うせつ', meaning: 'ညာဘက်ကွေ့', category: '交差点' },
  { word: '左折', reading: 'させつ', meaning: 'ဘယ်ဘက်ကွေ့', category: '交差点' },
  { word: '直進', reading: 'ちょくしん', meaning: 'တည့်တည့်သွား', category: '交差点' },
  { word: '二段階右折', reading: 'にだんかいうせつ', meaning: 'အဆင့်နှစ်ဆင့် ညာဘက်ကွေ့', category: '交差点' },
  { word: '進路変更', reading: 'しんろへんこう', meaning: 'လမ်းကြောင်းပြောင်း', category: '交差点' },
  { word: '環状交差点', reading: 'かんじょうこうさてん', meaning: 'ပတ်လမ်းဆုံ (ရော့တာရီ)', category: '交差点' },
  // 停止・駐車 (Stop / Parking)
  { word: '一時停止', reading: 'いちじていし', meaning: 'တစ်ကြိမ်ရပ်တန့်', category: '停止・駐車' },
  { word: '停止線', reading: 'ていしせん', meaning: 'ရပ်တန့်မျဉ်း', category: '停止・駐車' },
  { word: '停車禁止', reading: 'ていしゃきんし', meaning: 'ယာဉ်ရပ်တားမြစ်', category: '停止・駐車' },
  { word: '駐車禁止', reading: 'ちゅうしゃきんし', meaning: 'ယာဉ်ရပ်နားတားမြစ်', category: '停止・駐車' },
  { word: '駐車場', reading: 'ちゅうしゃじょう', meaning: 'ယာဉ်ရပ်နားရာနေရာ', category: '停止・駐車' },
  // 歩行者 (Pedestrians)
  { word: '横断歩道', reading: 'おうだんほどう', meaning: 'လူကူးဖြတ်ကူးလမ်း', category: '歩行者' },
  { word: '歩行者', reading: 'ほこうしゃ', meaning: 'လူကူး', category: '歩行者' },
  { word: '優先道路', reading: 'ゆうせんどうろ', meaning: 'ဦးစားပေးလမ်း', category: '歩行者' },
  { word: '歩道', reading: 'ほどう', meaning: 'လူသွားလမ်း', category: '歩行者' }
  ,{ word: '進入禁止', reading: 'しんにゅうきんし', meaning: 'ဝင်ရောက်တားမြစ်', category: '標識' }
  ,{ word: '一方通行', reading: 'いっぽうつうこう', meaning: 'တစ်လမ်းသွား', category: '標識' }
  ,{ word: '転回禁止', reading: 'てんかいきんし', meaning: 'U-ကွေ့တားမြစ်', category: '標識' }
  ,{ word: '追い越し禁止', reading: 'おいこしきんし', meaning: 'ကျော်တက်တားမြစ်', category: '標識' }
  ,{ word: '追い抜き禁止', reading: 'おいぬききんし', meaning: 'ဘေးမှဖြတ်တားမြစ်', category: '標識' }
  ,{ word: '最高速度', reading: 'さいこうそくど', meaning: 'မြန်နှုန်းအမြင့်ဆုံး', category: '標識' }
  ,{ word: '車両通行止め', reading: 'しゃりょうつうこうどめ', meaning: 'ယာဉ်အားလုံးပိတ်', category: '標識' }
  ,{ word: '高さ制限', reading: 'たかさせいげん', meaning: 'အမြင့်ကန့်သတ်', category: '標識' }
  ,{ word: '自動車専用道路', reading: 'じどうしゃせんようどうろ', meaning: 'ကားသီးသန့်လမ်း', category: '標識' }
  ,{ word: '警戒標識', reading: 'けいかいひょうしき', meaning: 'သတိပေးဆိုင်းဘုတ်', category: '標識' }
  ,{ word: '案内標識', reading: 'あんないひょうしき', meaning: 'လမ်းညွှန်ဆိုင်းဘုတ်', category: '標識' }
  ,{ word: '指定方向外進行禁止', reading: 'していほうこうがいしんこうきんし', meaning: 'ညွှန်မဟုတ်သောဘက်သွားတားမြစ်', category: '標識' }
  // 速度 (Speed)
  ,{ word: '法定速度', reading: 'ほうていそくど', meaning: 'ဥပဒေကန့်မြန်နှုန်း', category: '速度' }
  ,{ word: '徐行', reading: 'じょこう', meaning: 'ဖြေးဖြေးသွား', category: '速度' }
  ,{ word: '速度超過', reading: 'そくどちょうか', meaning: 'အမြန်လွန်', category: '速度' }
  ,{ word: '車間距離', reading: 'しゃかんきょり', meaning: 'ရှေ့ယာဉ်အကွာအဝေး', category: '速度' }
  // 踏切・道路 (Railway / Road)
  ,{ word: '踏切', reading: 'ふみきり', meaning: 'ရထားလမ်းဖြတ်ကူး', category: '踏切・道路' }
  ,{ word: '遮断機', reading: 'しゃだんき', meaning: 'ပိတ်တံခါး (ရထားလမ်းတံခါး)', category: '踏切・道路' }
  ,{ word: '高架道路', reading: 'こうかどうろ', meaning: 'တံတားလမ်း', category: '踏切・道路' }
  ,{ word: 'インターチェンジ', reading: 'インターチェンジ', meaning: 'လမ်းကိုင်း (အဝင်အထွက်)', category: '踏切・道路' }
  ,{ word: 'サービスエリア', reading: 'サービスエリア', meaning: 'အနားယူရာနေရာ', category: '踏切・道路' }
  // 高速道路 (Highway)
  ,{ word: '高速道路', reading: 'こうそくどうろ', meaning: 'အမြန်လမ်း', category: '高速道路' }
  ,{ word: '料金所', reading: 'りょうきんじょ', meaning: 'ဖြတ်သန်းခနေရာ', category: '高速道路' }
  ,{ word: '本線', reading: 'ほんせん', meaning: 'ပင်မလမ်းကြောင်း', category: '高速道路' }
  ,{ word: '合流', reading: 'ごうりゅう', meaning: 'ရောနှောဝင်ရာ', category: '高速道路' }
  // 車両 (Vehicles)
  ,{ word: '自動車', reading: 'じどうしゃ', meaning: 'ကား', category: '車両' }
  ,{ word: '普通自動車', reading: 'ふつうじどうしゃ', meaning: 'သာမန်ကား', category: '車両' }
  ,{ word: '大型自動車', reading: 'おおがたじどうしゃ', meaning: 'ကြီးမားသောကား', category: '車両' }
  ,{ word: '自動二輪車', reading: 'じどうにりんしゃ', meaning: 'ဆိုင်ကယ်ကြီး', category: '車両' }
  ,{ word: '原動機付自転車', reading: 'げんどうきつきじてんしゃ', meaning: 'အငယ်စားဆိုင်ကယ်', category: '車両' }
  ,{ word: '非常信号', reading: 'ひじょうしんごう', meaning: 'အချက်ပြမီး', category: '車両' }
  ,{ word: '運転', reading: 'うんてん', meaning: 'မောင်းနှင်', category: '運転' }
  ,{ word: '運転手', reading: 'うんてんしゅ', meaning: 'ယာဉ်မောင်း', category: '運転' }
  ,{ word: '運転免許', reading: 'うんてんめんきょ', meaning: 'မောင်းခွင့်လိုင်စင်', category: '免許' }
  ,{ word: '免許証', reading: 'めんきょしょう', meaning: 'လိုင်စင်စာရွက်', category: '免許' }
  ,{ word: '仮免許', reading: 'かりめんきょ', meaning: 'ယာယီလိုင်စင်', category: '免許' }
  ,{ word: '本免許', reading: 'ほんめんきょ', meaning: 'အပြည့်အဝလိုင်စင်', category: '免許' }
  ,{ word: '初心者', reading: 'しょしんしゃ', meaning: 'အစပြုသူ (အသစ်)', category: '免許' }
  ,{ word: '有効期限', reading: 'ゆうこうきげん', meaning: 'သက်တမ်းကုန်ဆုံးရက်', category: '免許' }
  ,{ word: '更新', reading: 'こうしん', meaning: 'သက်တမ်းတိုး', category: '免許' }
  ,{ word: '安全運転', reading: 'あんぜんうんてん', meaning: 'လုံခြုံသောမောင်းနှင်', category: '安全' }
  ,{ word: '飲酒運転', reading: 'いんしゅうんてん', meaning: 'အရက်မူးမောင်း', category: '安全' }
  ,{ word: 'シートベルト', reading: 'シートベルト', meaning: 'ခါးပတ်', category: '安全' }
  ,{ word: 'ヘルメット', reading: 'ヘルメット', meaning: 'ဦးထုပ်', category: '安全' }
  ,{ word: 'チャイルドシート', reading: 'チャイルドシート', meaning: 'ကလေးထိုင်ခုံ', category: '安全' }
  ,{ word: '救急車', reading: 'きゅうきゅうしゃ', meaning: 'လူနာတင်ကား', category: '安全' }
  ,{ word: '消防車', reading: 'しょうぼうしゃ', meaning: 'မီးသတ်ကား', category: '安全' }
  ,{ word: '事故', reading: 'じこ', meaning: 'မတော်တဆမှု', category: '事故' }
  ,{ word: 'けが人', reading: 'けがにん', meaning: 'ဒဏ်ရာရသူ', category: '事故' }
  ,{ word: '違反', reading: 'いはん', meaning: 'ချိုးဖောက်မှု', category: '事故' }
  ,{ word: '警察', reading: 'けいさつ', meaning: 'ရဲ', category: '事故' }
  ,{ word: '危険', reading: 'きけん', meaning: 'အန္တရာယ်', category: '安全' }
  ,{ word: '安全', reading: 'あんぜん', meaning: 'လုံခြုံ', category: '安全' }
  ,{ word: '信号無視', reading: 'しんごうむし', meaning: 'မီးကိုမလိုက်နာ', category: '信号' }
  ,{ word: '信号待ち', reading: 'しんごうまち', meaning: 'မီးစောင့်', category: '信号' }
  ,{ word: '赤色点滅', reading: 'あかいろてんめつ', meaning: 'အနီမှိတ်တုတ်', category: '信号' }
  ,{ word: '黄色点滅', reading: 'きいろてんめつ', meaning: 'အဝါမှိတ်တုတ်', category: '信号' }
  ,{ word: '右折矢印信号', reading: 'うせつやじるししんごう', meaning: 'ညာကွေ့မြှားမီး', category: '信号' }
  ,{ word: '横断歩道の信号', reading: 'おうだんほどうのしんごう', meaning: 'လူကူးကူးလမ်း မီး', category: '信号' }
  ,{ word: '優先順位', reading: 'ゆうせんじゅんい', meaning: 'ဦးစားပေးအစီအစဉ်', category: '交差点' }
  ,{ word: '交差点の優先', reading: 'こうさてんのゆうせん', meaning: 'လမ်းဆုံ ဦးစားပေး', category: '交差点' }
  ,{ word: '譲り合い', reading: 'ゆずりあい', meaning: 'လမ်းပေးခြင်း', category: '交差点' }
  ,{ word: '行き止まり', reading: 'ゆきどまり', meaning: 'လမ်းဆုံး (အဆုံး)', category: '交差点' }
  ,{ word: 'ロータリー', reading: 'ロータリー', meaning: 'ပတ်လည်လမ်းဆုံ', category: '交差点' }
  ,{ word: 'クランク', reading: 'クランク', meaning: 'ကွေ့ကောက်လမ်း (S ကွေ့)', category: '交差点' }
  ,{ word: '丁字路', reading: 'ていじろ', meaning: 'T ပုံလမ်းဆုံ', category: '交差点' }
  ,{ word: '十字路', reading: 'じゅうじろ', meaning: 'လမ်းဆုံလေး', category: '交差点' }
  ,{ word: '五叉路', reading: 'ごさろ', meaning: 'လမ်း ၅ ခွလမ်းဆုံ', category: '交差点' }
  ,{ word: '停車', reading: 'ていしゃ', meaning: 'ယာဉ်ရပ်', category: '停止・駐車' }
  ,{ word: '駐車', reading: 'ちゅうしゃ', meaning: 'ယာဉ်ရပ်နား (ချန်ထား)', category: '停止・駐車' }
  ,{ word: '路上駐車', reading: 'ろじょうちゅうしゃ', meaning: 'လမ်းပေါ် ယာဉ်ရပ်နား', category: '停止・駐車' }
  ,{ word: '駐車違反', reading: 'ちゅうしゃいはん', meaning: 'ယာဉ်ရပ်နားချိုးဖောက်', category: '停止・駐車' }
  ,{ word: '横断歩道橋', reading: 'おうだんほどうきょう', meaning: 'လူကူးတံတား', category: '歩行者' }
  ,{ word: '信号のない横断歩道', reading: 'しんごうのないおうだんほどう', meaning: 'မီးမရှိ လူကူးလမ်း', category: '歩行者' }
  ,{ word: 'こどもの飛び出し', reading: 'こどものとびだし', meaning: 'ကလေးရုတ်တရက်ထွက်', category: '歩行者' }
  ,{ word: '児童', reading: 'じどう', meaning: 'ကလေးသူငယ်', category: '歩行者' }
  ,{ word: '通学路', reading: 'つうがくろ', meaning: 'ကျောင်းသွားလမ်း', category: '歩行者' }
  ,{ word: '横断禁止', reading: 'おうだんきんし', meaning: 'ဖြတ်ကူးတားမြစ်', category: '歩行者' }
  ,{ word: '歩行者優先', reading: 'ほこうしゃゆうせん', meaning: 'လူကူးဦးစားပေး', category: '歩行者' }
  ,{ word: '横断中', reading: 'おうだんちゅう', meaning: 'ကူးနေစဉ်', category: '歩行者' }
  ,{ word: '指定場所', reading: 'していばしょ', meaning: 'သတ်မှတ်နေရာ', category: '歩行者' }
  ,{ word: '譲渡', reading: 'じょうと', meaning: 'လွှဲပြောင်း', category: '歩行者' }
  ,{ word: '標識', reading: 'ひょうしき', meaning: 'ဆိုင်းဘုတ်', category: '標識' }
  ,{ word: '規制標識', reading: 'きせいひょうしき', meaning: 'ကန့်သတ်ဆိုင်းဘုတ်', category: '標識' }
  ,{ word: '指示標識', reading: 'しじひょうしき', meaning: 'ညွှန်ကြားဆိုင်းဘုတ်', category: '標識' }
  ,{ word: '補助標識', reading: 'ほじょひょうしき', meaning: 'အကူဆိုင်းဘုတ်', category: '標識' }
  ,{ word: '道路標示', reading: 'どうろひょうじ', meaning: 'လမ်းအမှတ်အသား', category: '標識' }
  ,{ word: '停止線(路面)', reading: 'ていしせん', meaning: 'ရပ်တန့်မျဉ်း (လမ်းပေါ်)', category: '標識' }
  ,{ word: 'センターライン', reading: 'センターライン', meaning: 'အလယ်မျဉ်း', category: '標識' }
  ,{ word: 'オービス', reading: 'オービス', meaning: 'အမြန်နှုန်းကင်မရာ', category: '標識' }
  ,{ word: '速度違反', reading: 'そくどいはん', meaning: 'မြန်နှုန်းချိုးဖောက်', category: '速度' }
  ,{ word: '最低速度', reading: 'さいていそくど', meaning: 'အနိမ့်ဆုံးမြန်နှုန်း', category: '速度' }
  ,{ word: '制限速度', reading: 'せいげんそくど', meaning: 'ကန့်သတ်မြန်နှုန်း', category: '速度' }
  ,{ word: '時速', reading: 'じそく', meaning: 'နာရီနှုန်း', category: '速度' }
  ,{ word: '加速', reading: 'かそく', meaning: 'အရှိန်မြှင့်', category: '速度' }
  ,{ word: '減速', reading: 'げんそく', meaning: 'အရှိန်လျှော့', category: '速度' }
  ,{ word: '急ブレーキ', reading: 'きゅうブレーキ', meaning: 'ရုတ်တရက်ဘရိတ်', category: '速度' }
  ,{ word: '走行速度', reading: 'そうこうそくど', meaning: 'သွားလာမြန်နှုန်း', category: '速度' }
  ,{ word: '国道', reading: 'こくどう', meaning: 'နိုင်ငံလမ်းမ', category: '道路' }
  ,{ word: '県道', reading: 'けんどう', meaning: 'ခရိုင်လမ်း', category: '道路' }
  ,{ word: '市道', reading: 'しどう', meaning: 'မြို့လမ်း', category: '道路' }
  ,{ word: '路側帯', reading: 'ろそくたい', meaning: 'လမ်းဘေးအနား', category: '道路' }
  ,{ word: '路肩', reading: 'ろかた', meaning: 'လမ်းဘေးပခုံးနေရာ', category: '道路' }
  ,{ word: '凍結', reading: 'とうけつ', meaning: 'ရေခဲသော', category: '道路' }
  ,{ word: '冠水', reading: 'かんすい', meaning: 'ရေလွှမ်း', category: '道路' }
  ,{ word: '工事中', reading: 'こうじちゅう', meaning: 'လမ်းဖောက်လုပ်နေစဉ်', category: '道路' }
  ,{ word: '迂回', reading: 'うかい', meaning: 'ရှောင်ပတ်လမ်း', category: '道路' }
  ,{ word: '雨天', reading: 'うてん', meaning: 'မိုးရွာသောနေ့', category: '道路' }
  ,{ word: '雪道', reading: 'ゆきみち', meaning: 'နှင်းလမ်း', category: '道路' }
  ,{ word: '夜間', reading: 'やかん', meaning: 'ညအချိန်', category: '道路' }
  ,{ word: '視界', reading: 'しかい', meaning: 'မြင်ကွင်း', category: '道路' }
  ,{ word: '感知車両', reading: 'かんちしゃりょう', meaning: 'ခံစားယာဉ်', category: '車両' }
  ,{ word: '乗用車', reading: 'じょうようしゃ', meaning: 'ခရီးသည်ကား (စီးကရာကား)', category: '車両' }
  ,{ word: '小型自動車', reading: 'こがたじどうしゃ', meaning: 'အသေးစားကား', category: '車両' }
  ,{ word: '大型トラック', reading: 'おおがたトラック', meaning: 'ကုန်ကားကြီး', category: '車両' }
  ,{ word: 'バス', reading: 'バス', meaning: 'ဘတ်စ်ကား', category: '車両' }
  ,{ word: 'タクシー', reading: 'タクシー', meaning: 'တက္ကစီ', category: '車両' }
  ,{ word: '緊急自動車', reading: 'きんきゅうじどうしゃ', meaning: 'အရေးပေါ်ယာဉ်', category: '車両' }
  ,{ word: '故障車', reading: 'こしょうしゃ', meaning: 'ပျက်စီးယာဉ်', category: '車両' }
  ,{ word: '二輪車', reading: 'にりんしゃ', meaning: 'ဆိုင်ကယ်', category: '車両' }
  ,{ word: '自転車', reading: 'じてんしゃ', meaning: 'စက်ဘီး', category: '車両' }
  ,{ word: '定員', reading: 'ていいん', meaning: 'သတ်မှတ်ခရီးသည်', category: '車両' }
  ,{ word: '積載量', reading: 'せきさいりょう', meaning: 'တင်နိုင်သောပမာဏ', category: '車両' }
  ,{ word: '運転操作', reading: 'うんてんそうさ', meaning: 'မောင်းနှင်လုပ်ဆောင်မှု', category: '運転' }
  ,{ word: 'ハンドル', reading: 'ハンドル', meaning: 'စတီယာလက်', category: '運転' }
  ,{ word: 'ブレーキ', reading: 'ブレーキ', meaning: 'ဘရိတ်', category: '運転' }
  ,{ word: 'アクセル', reading: 'アクセル', meaning: 'ဓာတ်ငွ့ (အရှိန်နင်း)', category: '運転' }
  ,{ word: 'クラッチ', reading: 'クラッチ', meaning: 'ကလက်ချ်', category: '運転' }
  ,{ word: 'シフトレバー', reading: 'シフトレバー', meaning: 'ဂီယာရှင်', category: '運転' }
  ,{ word: 'ウインカー', reading: 'ウインカー', meaning: 'မီးပြ (အချက်ပြမီး)', category: '運転' }
  ,{ word: 'ハザードランプ', reading: 'ハザードランプ', meaning: 'အရေးပေါ်အချက်ပြမီး', category: '運転' }
  ,{ word: 'ワイパー', reading: 'ワイパー', meaning: 'မျက်နှာပြင်ရှင်း', category: '運転' }
  ,{ word: 'ヘッドライト', reading: 'ヘッドライト', meaning: 'ရှေ့မီး', category: '運転' }
  ,{ word: 'フォグランプ', reading: 'フォグランプ', meaning: 'မြူမီး', category: '運転' }
  ,{ word: 'クラクション', reading: 'クラクション', meaning: 'ဟွန်း', category: '運転' }
  ,{ word: 'エンジンブレーキ', reading: 'エンジンブレーキ', meaning: 'အင်ဂျင်ဘရိတ်', category: '運転' }
  ,{ word: '学科試験', reading: 'がっかしけん', meaning: 'စာတွေ့ဖြေစာမေးပွဲ', category: '免許' }
  ,{ word: '技能試験', reading: 'ぎのうしけん', meaning: 'လက်တွေ့စာမေးပွဲ', category: '免許' }
  ,{ word: '卒業証明書', reading: 'そつぎょうしょうめいしょ', meaning: 'ဘွဲ့ထောက်ခံလွှာ', category: '免許' }
  ,{ word: '教習所', reading: 'きょうしゅうじょ', meaning: 'ယာဉ်မောင်းသင်တန်းကျောင်း', category: '免許' }
  ,{ word: '講習', reading: 'こうしゅう', meaning: 'သင်တန်း', category: '免許' }
  ,{ word: '初心運転者', reading: 'しょしんうんてんしゃ', meaning: 'အစပြုယာဉ်မောင်း', category: '免許' }
  ,{ word: '高齢運転者', reading: 'こうれいうんてんしゃ', meaning: 'သက်ကြီးယာဉ်မောင်း', category: '免許' }
  ,{ word: '助手席', reading: 'じょしゅせき', meaning: 'ရှေ့ခန်းဘေးထိုင်', category: '安全' }
  ,{ word: '後部座席', reading: 'こうぶざせき', meaning: 'နောက်ခန်း', category: '安全' }
  ,{ word: 'ヘッドレスト', reading: 'ヘッドレスト', meaning: 'ခေါင်းမှီ', category: '安全' }
  ,{ word: 'エアバッグ', reading: 'エアバッグ', meaning: 'လေအိတ်', category: '安全' }
  ,{ word: '車両点検', reading: 'しゃりょうてんけん', meaning: 'ယာဉ်စစ်ဆေး', category: '安全' }
  ,{ word: '命を守る', reading: 'いのちをまもる', meaning: 'အသက်ကာကွယ်', category: '安全' }
  ,{ word: '人身事故', reading: 'じんしんじこ', meaning: 'လူထိခိုက်မတော်တဆ', category: '事故' }
  ,{ word: '物損事故', reading: 'ぶっそんじこ', meaning: 'ပစ္စည်းပျက်စီးမှု', category: '事故' }
  ,{ word: '当て逃げ', reading: 'あてにげ', meaning: 'တိုက်ပြီးထွက်ပြေး', category: '事故' }
  ,{ word: '応急救護', reading: 'おうきゅうきゅうご', meaning: 'အရေးပေါ်ကူညီ', category: '事故' }
  ,{ word: '通報', reading: 'つうほう', meaning: 'သတင်းပို့', category: '事故' }
  ,{ word: '保険', reading: 'ほけん', meaning: 'အာမခံ', category: '事故' }
  ,{ word: '天気', reading: 'てんき', meaning: 'ရာသီဥတု', category: '天候' }
  ,{ word: '雨', reading: 'あめ', meaning: 'မိုး', category: '天候' }
  ,{ word: '雪', reading: 'ゆき', meaning: 'နှင်း', category: '天候' }
  ,{ word: '風', reading: 'かぜ', meaning: 'လေပြင်း', category: '天候' }
  ,{ word: '霧', reading: 'きり', meaning: 'မြူ', category: '天候' }
];

// Expose globally when loaded as a plain <script>.
if (typeof window !== 'undefined') {
    window.trafficWordData = trafficWordData;
}