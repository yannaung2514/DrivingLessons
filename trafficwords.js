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
  // 規制標識 (Regulatory signs) — 仮免 第3課
  ,{ word: '規制標識', reading: 'きせいひょうしき', meaning: 'တားမြစ်ဆိုင်းဘုတ်', category: '規制標識' }
  ,{ word: '注意', reading: 'ちゅうい', meaning: 'သတိထားပါ', category: '規制標識' }
  ,{ word: '車両通行止め', reading: 'しゃりょうつうこうどめ', meaning: 'ယာဉ်အားလုံးပိတ်', category: '規制標識' }
  ,{ word: '二輪の自動車以外の自動車通行止め', reading: 'にりんのじどうしゃいがいのじどうしゃつうこうどめ', meaning: 'ဆိုင်ကယ်မဟုတ်သော ကားများပိတ်', category: '規制標識' }
  ,{ word: '重量制限', reading: 'じゅうりょうせいげん', meaning: 'အလေးချိန်ကန့်သတ်', category: '規制標識' }
  ,{ word: '高さ制限', reading: 'たかさせいげん', meaning: 'အမြင့်ကန့်သတ်', category: '規制標識' }
  // 指示標識 (Instruction/priority signs) — 仮免 第3課
  ,{ word: '指示標識', reading: 'しじひょうしき', meaning: 'လမ်းညွှန်ဆိုင်းဘုတ်', category: '指示標識' }
  ,{ word: '歩行者専用', reading: 'ほこうしゃせんよう', meaning: 'လူကူးသီးသန့်', category: '指示標識' }
  ,{ word: '自転車専用', reading: 'じてんしゃせんよう', meaning: 'စက်ဘီးသီးသန့်', category: '指示標識' }
  ,{ word: '緊急自動車の通行区分', reading: 'きんきゅうじどうしゃのつうこうくぶん', meaning: 'အရေးပေါ်ယာဉ်လမ်းကြောင်း', category: '指示標識' }
  ,{ word: '徐行', reading: 'じょこう', meaning: 'ဖြည်းဖြည်းမောင်း', category: '指示標識' }
  // 警戒標識 (Warning signs) — 仮免 第3課
  ,{ word: '警戒標識', reading: 'けいかいひょうしき', meaning: 'အန္တရာယ်သတိပေးဆိုင်းဘုတ်', category: '警戒標識' }
  ,{ word: '前方優先道路', reading: 'ぜんぽうゆうせんどうろ', meaning: 'ရှေ့ဦးစားပေးလမ်း', category: '警戒標識' }
  ,{ word: '横断歩道あり', reading: 'おうだんほどうあり', meaning: 'လူကူးဖြတ်လမ်းရှိ', category: '警戒標識' }
  ,{ word: '踏切あり', reading: 'ふみきりあり', meaning: 'မီးရထားဖြတ်လမ်းရှိ', category: '警戒標識' }
  ,{ word: '信号機あり', reading: 'しんごうきあり', meaning: 'မီးပွိုင့်ရှိ', category: '警戒標識' }
  ,{ word: '歩行者に注意', reading: 'ほこうしゃにちゅうい', meaning: 'လူကူးကိုသတိ', category: '警戒標識' }
  ,{ word: '路面のすべりやすさ', reading: 'ろめんのすべりやすさ', meaning: 'လမ်းချော်နိုင်', category: '警戒標識' }
  // 案内標識 (Guide signs) — 仮免 第3課
  ,{ word: '案内標識', reading: 'あんないひょうしき', meaning: 'လမ်းညွှန်ဆိုင်းဘုတ်', category: '案内標識' }
  ,{ word: '方面・方向の案内', reading: 'ほうめん・ほうこうのあんない', meaning: 'ဦးတည်ရာလမ်းညွှန်', category: '案内標識' }
  ,{ word: '距離の案内', reading: 'きょりのあんない', meaning: 'အကွာအဝေးလမ်းညွှန်', category: '案内標識' }
  ,{ word: '主要地点を示す案内', reading: 'しゅようちてんをしめすあんない', meaning: 'အဓိကနေရာလမ်းညွှန်', category: '案内標識' }
  // 動詞・フレーズ (Verbs & phrases) — driving actions
  ,{ word: '運転する', reading: 'うんてんする', meaning: 'ကားမောင်းသည်', category: '動詞・フレーズ' }
  ,{ word: '止まる', reading: 'とまる', meaning: 'ရပ်သည်', category: '動詞・フレーズ' }
  ,{ word: '曲がる', reading: 'まがる', meaning: 'ကွေ့သည်', category: '動詞・フレーズ' }
  ,{ word: '右に曲がる', reading: 'みぎにまがる', meaning: 'ညာဘက်ကွေ့သည်', category: '動詞・フレーズ' }
  ,{ word: '左に曲がる', reading: 'ひだりにまがる', meaning: 'ဘယ်ဘက်ကွေ့သည်', category: '動詞・フレーズ' }
  ,{ word: '進む', reading: 'すすむ', meaning: 'ရှေ့ဆက်သည်', category: '動詞・フレーズ' }
  ,{ word: '走る', reading: 'はしる', meaning: 'ပြေးသည် (မောင်းသည်)', category: '動詞・フレーズ' }
  ,{ word: '加速する', reading: 'かそくする', meaning: 'အရှိန်မြှင့်သည်', category: '動詞・フレーズ' }
  ,{ word: '減速する', reading: 'げんそくする', meaning: 'အရှိန်လျှော့သည်', category: '動詞・フレーズ' }
  ,{ word: '追い越す', reading: 'おいこす', meaning: 'ကျော်တက်သည်', category: '動詞・フレーズ' }
  ,{ word: '信号を守る', reading: 'しんごうをまもる', meaning: 'မီးပွိုင့်ကိုလိုက်နာသည်', category: '動詞・フレーズ' }
  ,{ word: '横断する', reading: 'おうだんする', meaning: 'ဖြတ်ကူးသည်', category: '動詞・フレーズ' }
  ,{ word: '合流する', reading: 'ごうりゅうする', meaning: 'လမ်းပေါင်းဆုံသည်', category: '動詞・フレーズ' }
  // 車両点検 (Vehicle check)
  ,{ word: 'タイヤ', reading: 'タイヤ', meaning: 'ဘီး တာယာ', category: '車両点検' }
  ,{ word: 'ワイパー', reading: 'ワイパー', meaning: 'ကားရှေ့ဖန် သုတ်ကိရိယာ', category: '車両点検' }
  ,{ word: 'ミラー', reading: 'ミラー', meaning: 'မှန်', category: '車両点検' }
  ,{ word: 'ライト', reading: 'ライト', meaning: 'မီး', category: '車両点検' }
  ,{ word: 'ヘッドライト', reading: 'ヘッドライト', meaning: 'ရှေ့မီး', category: '車両点検' }
  ,{ word: 'ブレーキ', reading: 'ブレーキ', meaning: 'ဘရိတ်', category: '車両点検' }
  ,{ word: 'エンジン', reading: 'エンジン', meaning: 'အင်ဂျင်', category: '車両点検' }
  ,{ word: 'ガソリン', reading: 'ガソリン', meaning: 'ဓာတ်ဆီ', category: '車両点検' }
  ,{ word: '燃料', reading: 'ねんりょう', meaning: 'လောင်စာ', category: '車両点検' }
  ,{ word: 'オイル', reading: 'オイル', meaning: 'ဆီ', category: '車両点検' }
  ,{ word: 'ハンドル', reading: 'ハンドル', meaning: 'စတီယာရင်', category: '車両点検' }
  ,{ word: 'シート', reading: 'シート', meaning: 'ထိုင်ခုံ', category: '車両点検' }
  ,{ word: 'クラクション', reading: 'クラクション', meaning: 'ဟွန်း', category: '車両点検' }
  ,{ word: 'ウインカー', reading: 'ウインカー', meaning: 'အချက်ပြ (လှည့်မီး)', category: '車両点検' }
  ,{ word: 'バッテリー', reading: 'バッテリー', meaning: 'ဘက်ထရီ', category: '車両点検' }
  ,{ word: '積載荷重', reading: 'せきさいかじゅう', meaning: 'သယ်ဆောင်နိုင်သောဝန်', category: '車両点検' }
  ,{ word: '点検する', reading: 'てんけんする', meaning: 'စစ်ဆေးသည်', category: '車両点検' }
  // 道路・道路設備 (Road & facilities)
  ,{ word: 'トンネル', reading: 'トンネル', meaning: 'ဥမင်', category: '道路・設備' }
  ,{ word: '橋', reading: 'はし', meaning: 'တံတား', category: '道路・設備' }
  ,{ word: '歩道橋', reading: 'ほどうきょう', meaning: 'လူကူးတံတား', category: '道路・設備' }
  ,{ word: '料金所', reading: 'りょうきんじょ', meaning: 'အခပေးဂိတ်', category: '道路・設備' }
  ,{ word: '信号柱', reading: 'しんごうちゅう', meaning: 'မီးပွိုင့်တိုင်', category: '道路・設備' }
  ,{ word: '横断歩道橋', reading: 'おうだんほどうきょう', meaning: 'လူကူးဖြတ်ကူးတံတား', category: '道路・設備' }
  ,{ word: 'ガードレール', reading: 'ガードレール', meaning: 'လမ်းဘေးအကာ', category: '道路・設備' }
  ,{ word: '道路工事', reading: 'どうろこうじ', meaning: 'လမ်းပြုပြင်ခြင်း', category: '道路・設備' }
  ,{ word: '渋滞', reading: 'じゅうたい', meaning: 'ယာဉ်ကြောပိတ်ဆို့', category: '道路・設備' }
  ,{ word: 'カーブ', reading: 'カーブ', meaning: 'လမ်းကွေ့', category: '道路・設備' }
  // 免許・手続き (License & procedure)
  ,{ word: '初心者マーク', reading: 'しょしんしゃマーク', meaning: 'အစပြုသူ အမှတ်', category: '免許・手続き' }
  ,{ word: '高齢者マーク', reading: 'こうれいしゃマーク', meaning: 'သက်ကြီးရွယ်အို အမှတ်', category: '免許・手続き' }
  ,{ word: '仮免許', reading: 'かりめんきょ', meaning: 'ယာယီလိုင်စင်', category: '免許・手続き' }
  ,{ word: '本免許', reading: 'ほんめんきょ', meaning: 'တရားဝင်လိုင်စင်', category: '免許・手続き' }
  ,{ word: '失効', reading: 'しっこう', meaning: 'သက်တမ်းကုန်ခြင်း', category: '免許・手続き' }
  ,{ word: '更新', reading: 'こうしん', meaning: 'သက်တမ်းတိုးခြင်း', category: '免許・手続き' }
  ,{ word: '有効期限', reading: 'ゆうこうきげん', meaning: 'သက်တမ်းကုန်ရက်', category: '免許・手続き' }
  ,{ word: '学科試験', reading: 'がっかしけん', meaning: 'စာမေးပွဲ', category: '免許・手続き' }
  ,{ word: '技能試験', reading: 'ぎのうしけん', meaning: 'လက်တွေ့စမ်းသပ်မှု', category: '免許・手続き' }
  // 安全・心得 (Safety & etiquette)
  ,{ word: '安全運転', reading: 'あんぜんうんてん', meaning: 'လုံခြုံသောမောင်းနှင်မှု', category: '安全・心得' }
  ,{ word: '運転マナー', reading: 'うんてんマナー', meaning: 'လမ်းစည်းကမ်း ထုံးတမ်း', category: '安全・心得' }
  ,{ word: '車間距離を保つ', reading: 'しゃかんきょりをたもつ', meaning: 'အကွာအဝေးထိန်းသည်', category: '安全・心得' }
  ,{ word: '反射材', reading: 'はんしゃざい', meaning: 'ရောင်ပြန် ပစ္စည်း', category: '安全・心得' }
  ,{ word: '路肩', reading: 'ろかた', meaning: 'လမ်းဘေး', category: '安全・心得' }
  ,{ word: '一時停車', reading: 'いちじていしゃ', meaning: 'ခဏရပ်တန့်ခြင်း', category: '安全・心得' }
  ,{ word: '確認して進む', reading: 'かくにんしてすすむ', meaning: 'စစ်ဆေး၍ဆက်သည်', category: '安全・心得' }
  // その他 (Extra) — misc useful terms
  ,{ word: '反対方向', reading: 'はんたいほうこう', meaning: 'ဆန့်ကျင်ဘက်ဘက်', category: 'その他' }
  ,{ word: '進行方向', reading: 'しんこうほうこう', meaning: 'သွားမည့်ဘက်', category: 'その他' }
  ,{ word: '交差点付近', reading: 'こうさてんふきん', meaning: 'လမ်းဆုံအနီး', category: 'その他' }
  ,{ word: '視界が悪い', reading: 'しかいがわるい', meaning: 'မြင်ကွင်းဆိုးသည်', category: 'その他' }
  ,{ word: '安全な速度', reading: 'あんぜんなそくど', meaning: 'လုံခြုံသောအမြန်နှုန်း', category: 'その他' }
  ,{ word: '前方確認', reading: 'ぜんぽうかくにん', meaning: 'ရှေ့စစ်ဆေးခြင်း', category: 'その他' }
  ,{ word: '後方確認', reading: 'こうほうかくにん', meaning: 'နောက်စစ်ဆေးခြင်း', category: 'その他' }
  ,{ word: '指差し確認', reading: 'ゆびさしかくにん', meaning: 'လက်ညှိုး၍စစ်ဆေးခြင်း', category: 'その他' }
  ,{ word: '目視確認', reading: 'もくしかくにん', meaning: 'မြင်ကွင်းစစ်ဆေးခြင်း', category: 'その他' }
  ,{ word: '余裕を持つ', reading: 'よゆうをもつ', meaning: 'အပိုချန်ထားသည်', category: 'その他' }
  ,{ word: '早めの行動', reading: 'はやめのこうどう', meaning: 'စောစောလုပ်ဆောင်ခြင်း', category: 'その他' }
  ,{ word: '交通整理', reading: 'こうつうせいり', meaning: 'လမ်းစည်းကမ်းထိန်းသိမ်း', category: 'その他' }
  ,{ word: '交通違反', reading: 'こうつういはん', meaning: 'လမ်းစည်းကမ်းချိုးဖောက်', category: 'その他' }
  ,{ word: '交通ルール', reading: 'こうつうルール', meaning: 'လမ်းစည်းကမ်း', category: 'その他' }
  ,{ word: '運転免許証', reading: 'うんてんめんきょしょう', meaning: 'မောင်းလိုင်စင်ကတ်', category: 'その他' }
  ,{ word: '身分証明書', reading: 'みぶんしょうめいしょ', meaning: 'သက်သေခံကတ်', category: 'その他' }
  ,{ word: '保険証', reading: 'ほけんしょう', meaning: 'အာမခံကတ်', category: 'その他' }
  ,{ word: '保険', reading: 'ほけん', meaning: 'အာမခံ', category: 'その他' }
  ,{ word: '違反点数', reading: 'いはんてんすう', meaning: 'ဒဏ်မှတ်', category: 'その他' }
  ,{ word: '免許停止', reading: 'めんきょていし', meaning: 'လိုင်စင်ရပ်ဆိုင်း', category: 'その他' }
  ,{ word: '罰金', reading: 'ばっきん', meaning: 'ငွေဒဏ်', category: 'その他' }
  ,{ word: '出発', reading: 'しゅっぱつ', meaning: 'ထွက်ခွာခြင်း', category: '動詞・フレーズ' }
  ,{ word: '到着', reading: 'とうちゃく', meaning: 'ရောက်ရှိခြင်း', category: '動詞・フレーズ' }
  ,{ word: '停止', reading: 'ていし', meaning: 'ရပ်တန့်ခြင်း', category: '動詞・フレーズ' }
  ,{ word: '発進', reading: 'はっしん', meaning: 'ထွက်ခွာမောင်းခြင်း', category: '動詞・フレーズ' }
  ,{ word: '発車', reading: 'はっしゃ', meaning: 'ထွက်ခွာသည်', category: '動詞・フレーズ' }
  ,{ word: '右折する', reading: 'うせつする', meaning: 'ညာဘက်ကွေ့သည်', category: '動詞・フレーズ' }
  ,{ word: '左折する', reading: 'させつする', meaning: 'ဘယ်ဘက်ကွေ့သည်', category: '動詞・フレーズ' }
  ,{ word: '巻き込み', reading: 'まきこみ', meaning: 'လှည့်စဉ် ဝင်ပါခြင်း', category: '動詞・フレーズ' }
  ,{ word: '追い付く', reading: 'おいつく', meaning: 'လိုက်မှီသည်', category: '動詞・フレーズ' }
  ,{ word: '通過', reading: 'つうか', meaning: 'ဖြတ်သွားခြင်း', category: '動詞・フレーズ' }
  ,{ word: '横切る', reading: 'よこぎる', meaning: 'ဖြတ်ကူးသည်', category: '動詞・フレーズ' }
  ,{ word: 'バック', reading: 'バック', meaning: 'နောက်ပြန်မောင်း', category: '動詞・フレーズ' }
  ,{ word: 'クラッチを切る', reading: 'クラッチをきる', meaning: 'ကလပ်ချ် လွှတ်သည်', category: '車両点検' }
  ,{ word: 'ギアチェンジ', reading: 'ギアチェンジ', meaning: 'ဂီယာပြောင်း', category: '車両点検' }
  ,{ word: 'サイドミラー', reading: 'サイドミラー', meaning: 'ဘေးမှန်', category: '車両点検' }
  ,{ word: 'バックミラー', reading: 'バックミラー', meaning: 'နောက်မှန်', category: '車両点検' }
  ,{ word: 'ウォッシャー液', reading: 'ウォッシャーえき', meaning: 'ရေသန့် အရည်', category: '車両点検' }
  ,{ word: '冷却水', reading: 'れいきゃくすい', meaning: 'အအေးခံရေ', category: '車両点検' }
  ,{ word: 'ラジエーター', reading: 'ラジエーター', meaning: 'အပူထုတ်စက်', category: '車両点検' }
  ,{ word: 'タイヤの空気圧', reading: 'タイヤのくうきあつ', meaning: 'ဘီးလေဖိအား', category: '車両点検' }
  ,{ word: 'ブレーキ液', reading: 'ブレーキえき', meaning: 'ဘရိတ်အရည်', category: '車両点検' }
  ,{ word: 'エンジンオイル', reading: 'エンジンオイル', meaning: 'အင်ဂျင်ဆီ', category: '車両点検' }
  ,{ word: '定期点検', reading: 'ていきてんけん', meaning: 'ပုံမှန်စစ်ဆေးခြင်း', category: '車両点検' }
  ,{ word: '交差点の中心', reading: 'こうさてんのちゅうしん', meaning: 'လမ်းဆုံဗဟို', category: '道路・設備' }
  ,{ word: '中央線', reading: 'ちゅうおうせん', meaning: 'အလယ်မျဉ်း', category: '道路・設備' }
  ,{ word: '追越車線', reading: 'おいこししゃせん', meaning: 'ကျော်တက်လမ်းကြောင်း', category: '道路・設備' }
  ,{ word: '登坂車線', reading: 'とはんしゃせん', meaning: 'တောင်တက်လမ်းကြောင်း', category: '道路・設備' }
  ,{ word: '非常駐車帯', reading: 'ひじょうちゅうしゃたい', meaning: 'အရေးပေါ်ရပ်နားကွင်း', category: '道路・設備' }
  ,{ word: '路肩の広い所', reading: 'ろかたのひろいところ', meaning: 'လမ်းဘေးကျယ်သောနေရာ', category: '道路・設備' }
  ,{ word: '待避所', reading: 'たいひしょ', meaning: 'ဘေးရှောင်ကွင်း', category: '道路・設備' }
  ,{ word: '駐車区画', reading: 'ちゅうしゃくかく', meaning: 'ရပ်နားကွက်ခွဲ', category: '道路・設備' }
  ,{ word: '標識前の停止線', reading: 'ひょうしきまえのていしせん', meaning: 'ဆိုင်းဘုတ်ရှေ့ရပ်မျဉ်း', category: '道路・設備' }
  ,{ word: '免許の種類', reading: 'めんきょのしゅるい', meaning: 'လိုင်စင်အမျိုးအစား', category: '免許・手続き' }
  ,{ word: '運転免許の欠格事由', reading: 'うんてんめんきょのけっかくじゆう', meaning: 'လိုင်စင်မရနိုင်သောအကြောင်း', category: '免許・手続き' }
  ,{ word: '免許の効力', reading: 'めんきょのこうりょく', meaning: 'လိုင်စင်အာနုဇော', category: '免許・手続き' }
  ,{ word: '試験場', reading: 'しけんじょう', meaning: 'စာမေးပွဲဌာန', category: '免許・手続き' }
  ,{ word: '練習', reading: 'れんしゅう', meaning: 'လေ့ကျင့်ခန်း', category: '免許・手続き' }
  ,{ word: '石', reading: 'いし', meaning: 'ကျောက်', category: 'その他' }
  ,{ word: '新設の交差点', reading: 'しんせつのこうさてん', meaning: 'အသစ်ဖွဲ့လမ်းဆုံ', category: 'その他' }
  ,{ word: '駐車スペース', reading: 'ちゅうしゃスペース', meaning: 'ရပ်နားနေရာ', category: 'その他' }
  ,{ word: '停止位置', reading: 'ていしいち', meaning: 'ရပ်တန့်ဆိုက်', category: 'その他' }
  ,{ word: '方向指示器', reading: 'ほうこうしじき', meaning: 'ဦးတည်အချက်ပြ', category: 'その他' }
  ,{ word: '見通し', reading: 'みとおし', meaning: 'မြင်ကွင်းကြည့်', category: 'その他' }
];

// Expose globally when loaded as a plain <script>.
if (typeof window !== 'undefined') {
    window.trafficWordData = trafficWordData;
}