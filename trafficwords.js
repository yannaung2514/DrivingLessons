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
];

// Expose globally when loaded as a plain <script>.
if (typeof window !== 'undefined') {
    window.trafficWordData = trafficWordData;
}