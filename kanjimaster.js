// Kanji data from kanjimaster.csv
// Loaded via <script> tag so it works without a web server (file:// protocol).
const kanjiMasterData = [
  {
    "char": "党",
    "on": "トウ",
    "kun": "なかま むら",
    "english": "party, faction, clique"
  },
  {
    "char": "協",
    "on": "キョウ",
    "kun": "",
    "english": "co-, cooperation"
  },
  {
    "char": "総",
    "on": "ソウ",
    "kun": "フ す.べて すべ.て",
    "english": "general, whole, all, full, total"
  },
  {
    "char": "区",
    "on": "ク オウ コウ",
    "kun": "",
    "english": "ward, district"
  },
  {
    "char": "領",
    "on": "リョウ",
    "kun": "",
    "english": "jurisdiction, dominion, territory, fief, reign"
  },
  {
    "char": "県",
    "on": "ケン",
    "kun": "カ.ケ",
    "english": "prefecture"
  },
  {
    "char": "設",
    "on": "セツ",
    "kun": "モウ.ケ",
    "english": "establishment, provision, prepare"
  },
  {
    "char": "改",
    "on": "カイ",
    "kun": "あらた.める あらた.まる",
    "english": "reformation, change, modify, mend, renew, examine, inspect, search"
  },
  {
    "char": "府",
    "on": "",
    "kun": "",
    "english": "borough, urban prefecture, govt office, representative body, storehouse"
  },
  {
    "char": "査",
    "on": "サ",
    "kun": "",
    "english": "investigate"
  },
  {
    "char": "委",
    "on": "イ",
    "kun": "ユダ.ネ",
    "english": "committee, entrust to, leave to, devote, discard"
  },
  {
    "char": "軍",
    "on": "グン",
    "kun": "",
    "english": "army, force, troops, war, battle"
  },
  {
    "char": "団",
    "on": "ダン トン",
    "kun": "かたまり まる.い",
    "english": "group, association"
  },
  {
    "char": "各",
    "on": "カク",
    "kun": "オノオ",
    "english": "each, every, either"
  },
  {
    "char": "島",
    "on": "トウ",
    "kun": "しま",
    "english": "island"
  },
  {
    "char": "革",
    "on": "カク",
    "kun": "かわ",
    "english": "leather, become serious, skin, hide, pelt"
  },
  {
    "char": "村",
    "on": "ソン ム",
    "kun": "",
    "english": "town, village"
  },
  {
    "char": "勢",
    "on": "セイ ゼイ ハズ",
    "kun": "いきおい",
    "english": "forces, energy, military strength"
  },
  {
    "char": "減",
    "on": "ゲン",
    "kun": "へる へらす",
    "english": "dwindle, decrease, reduce, decline, curtail, get hungry"
  },
  {
    "char": "再",
    "on": "サイ サ フタタ.",
    "kun": "",
    "english": "again, twice, second time"
  },
  {
    "char": "税",
    "on": "ゼ",
    "kun": "",
    "english": "tax, duty"
  },
  {
    "char": "営",
    "on": "エイ",
    "kun": "いとなむ いとな.み",
    "english": "occupation, camp, perform, build, conduct (business)"
  },
  {
    "char": "比",
    "on": "ヒ クラベ",
    "kun": "",
    "english": "compare, race, ratio, Philippines"
  },
  {
    "char": "防",
    "on": "ボウ フセ",
    "kun": "",
    "english": "ward off, defend, protect, resist"
  },
  {
    "char": "補",
    "on": "ホ",
    "kun": "おぎなう",
    "english": "supplement, supply, make good, offset, compensate, assistant, learner"
  },
  {
    "char": "境",
    "on": "キョウ ケイ",
    "kun": "サカ",
    "english": "boundary, border, region"
  },
  {
    "char": "導",
    "on": "ドウ ミチビ",
    "kun": "",
    "english": "guidance, leading, conduct, usher"
  },
  {
    "char": "副",
    "on": "フ",
    "kun": "",
    "english": "vice-, duplicate, copy"
  },
  {
    "char": "算",
    "on": "サン",
    "kun": "そろ",
    "english": "calculate, divining, number, abacus, probability"
  },
  {
    "char": "輸",
    "on": "ユ シュ",
    "kun": "",
    "english": "transport, send, be inferior"
  },
  {
    "char": "述",
    "on": "ジュツ",
    "kun": "の、べる",
    "english": "mention, state, speak, relate"
  },
  {
    "char": "線",
    "on": "セン",
    "kun": "すじ",
    "english": "line, track"
  },
  {
    "char": "農",
    "on": "",
    "kun": "",
    "english": "agriculture, farmers"
  },
  {
    "char": "州",
    "on": "シュウ ス",
    "kun": "",
    "english": "state, province"
  },
  {
    "char": "武",
    "on": "ブ ム タケ、",
    "kun": "",
    "english": "warrior, military, chivalry, arms"
  },
  {
    "char": "象",
    "on": "ショウ ゾウ",
    "kun": "カタド",
    "english": "elephant, pattern after, imitate, image, shape, sign (of the times)"
  },
  {
    "char": "城",
    "on": "イキ",
    "kun": "",
    "english": "range, region, limits, stage, level"
  },
  {
    "char": "額",
    "on": "ガク ヒタ",
    "kun": "",
    "english": "forehead, tablet, plaque, framed picture, sum, amount, volume"
  },
  {
    "char": "欧",
    "on": "オウ ハ",
    "kun": "うた、う",
    "english": "Europe"
  },
  {
    "char": "担",
    "on": "タン",
    "kun": "かつ、ぐ にな、う",
    "english": "shouldering, carry, raise, bear"
  },
  {
    "char": "準",
    "on": "ジュン",
    "kun": "じゅん、じる じゅん、ずる なぞらえる のり ひと.しい みずもり",
    "english": "semi-, correspond to, proportionate to, conform, imitate"
  },
  {
    "char": "賞",
    "on": "ショウ",
    "kun": "ほめる",
    "english": "prize, reward, praise"
  },
  {
    "char": "造",
    "on": "ゾウ ヅク",
    "kun": "つくる つくり",
    "english": "create, make, structure, physique"
  },
  {
    "char": "被",
    "on": "ヒ カブ、 セ",
    "kun": "こうむる おお、う かぶる",
    "english": "incur, cover, veil, brood over, shelter, wear, put on, be exposed (film), receiving"
  },
  {
    "char": "技",
    "on": "ギ",
    "kun": "わざ",
    "english": "skill, art, craft, ability, feat, performance, vocation, arts"
  },
  {
    "char": "低",
    "on": "テイ",
    "kun": "ひくい ひく.める ひく.まる",
    "english": "lower, short, humble"
  },
  {
    "char": "復",
    "on": "フク",
    "kun": "また",
    "english": "restore, return to, revert, resume"
  },
  {
    "char": "移",
    "on": "イ",
    "kun": "うつる うつす",
    "english": "shift, move, change, drift, catch (cold, fire), pass into"
  },
  {
    "char": "個",
    "on": "コ カ",
    "kun": "",
    "english": "individual, counter for articles and military units"
  },
  {
    "char": "門",
    "on": "モン",
    "kun": "かど",
    "english": "gates"
  },
  {
    "char": "課",
    "on": "カ",
    "kun": "",
    "english": "chapter, lesson, section, department, division, counter for chapters (of a book)"
  },
  {
    "char": "脳",
    "on": "ノウ ドウ キョク ゴク",
    "kun": "のうずる きわめる きわ.まる きわまり きわ.み き.める -ぎ め.き ま.る",
    "english": "brain, memory, poles, settlement, conclusion, end, highest rank, electric poles, very, extremely, most, highly"
  },
  {
    "char": "含",
    "on": "ガン",
    "kun": "ふくむ ふくめる",
    "english": "include, bear in mind, understand, cherish"
  },
  {
    "char": "蔵",
    "on": "ゾウ ソウ カクレ",
    "kun": "くら おさめる",
    "english": "storehouse, hide, own, have, possess"
  },
  {
    "char": "量",
    "on": "リョウ ハカ",
    "kun": "",
    "english": "quantity, measure, weight, amount, consider, estimate, surmise"
  },
  {
    "char": "型",
    "on": "ケイ",
    "kun": "かた がた",
    "english": "mould, type, model"
  },
  {
    "char": "況",
    "on": "キョウ",
    "kun": "まし.て いわんや おもむき",
    "english": "condition, situation"
  },
  {
    "char": "針",
    "on": "シン ハ",
    "kun": "",
    "english": "needle, pin, staple, stinger"
  },
  {
    "char": "専",
    "on": "セン",
    "kun": "もっぱら",
    "english": "specialty, exclusive, mainly, solely"
  },
  {
    "char": "谷",
    "on": "コク キワマ",
    "kun": "たに",
    "english": "valley"
  },
  {
    "char": "史",
    "on": "",
    "kun": "",
    "english": "history, chronicle"
  },
  {
    "char": "階",
    "on": "カイ キザハ",
    "kun": "",
    "english": "storey, stair, counter for storeys of a building"
  },
  {
    "char": "管",
    "on": "カン ク",
    "kun": "",
    "english": "pipe, tube, wind instrument, drunken talk"
  },
  {
    "char": "兵",
    "on": "ヘイ ヒョウ",
    "kun": "ツワモ",
    "english": "soldier, private, troops, army, warfare, strategy, tactics"
  },
  {
    "char": "接",
    "on": "セツ ショウ",
    "kun": "つぐ",
    "english": "touch, contact, adjoin, piece together"
  },
  {
    "char": "細",
    "on": "サイ",
    "kun": "ほそい ほそ.る こまか こまかい",
    "english": "dainty, get thin, taper, slender, narrow"
  },
  {
    "char": "効",
    "on": "コウ",
    "kun": "きく ききめ なら、う",
    "english": "merit, efficacy, efficiency, benefit"
  },
  {
    "char": "丸",
    "on": "ガン マル、",
    "kun": "まるまる.める",
    "english": "round, full, month, perfection, -ship, pills, make round, roll up, curl up, seduce, explain away"
  },
  {
    "char": "湾",
    "on": "ワン",
    "kun": "いりえ",
    "english": "gulf, bay, inlet"
  },
  {
    "char": "録",
    "on": "ロク",
    "kun": "",
    "english": "record"
  },
  {
    "char": "省",
    "on": "セイ ショウ ハブ、",
    "kun": "かえり、みる",
    "english": "focus, government ministry, conserve"
  },
  {
    "char": "旧",
    "on": "キュウ",
    "kun": "ふる.い もと",
    "english": "old times, old things, old friend, former, ex-"
  },
  {
    "char": "橋",
    "on": "キョウ ハ",
    "kun": "",
    "english": "bridge"
  },
  {
    "char": "岸",
    "on": "ガン キ",
    "kun": "",
    "english": "beach"
  },
  {
    "char": "周",
    "on": "シュウ マワ、",
    "kun": "",
    "english": "circumference, circuit, lap"
  },
  {
    "char": "材",
    "on": "",
    "kun": "",
    "english": "lumber, log, timber, wood, talent"
  },
  {
    "char": "戸",
    "on": "コ",
    "kun": "",
    "english": "door"
  },
  {
    "char": "央",
    "on": "才",
    "kun": "",
    "english": "center, middle"
  },
  {
    "char": "券",
    "on": "ケン ヘン",
    "kun": "あむ あ、み",
    "english": "ticket, compilation, knit, plait, braid, twist, editing, completed poem, part of a book"
  },
  {
    "char": "搜",
    "on": "ソウ シュ シュウ",
    "kun": "さがす",
    "english": "search, look for, locate"
  },
  {
    "char": "竹",
    "on": "チク タ",
    "kun": "",
    "english": "bamboo"
  },
  {
    "char": "超",
    "on": "チョウ コ",
    "kun": "こえる",
    "english": "transcend, super-, ultra-"
  },
  {
    "char": "並",
    "on": "ヘイ ホウ ナラ、ビ",
    "kun": "なみ なら.べる なら、ぶ",
    "english": "row, and, besides, as well as, line up, rank with, rival, equal"
  },
  {
    "char": "療",
    "on": "リョウ",
    "kun": "",
    "english": "heal, cure"
  },
  {
    "char": "採",
    "on": "サイ",
    "kun": "とる",
    "english": "pick, take, fetch, take up"
  },
  {
    "char": "森",
    "on": "シン モ",
    "kun": "",
    "english": "forest, woods"
  },
  {
    "char": "競",
    "on": "キョウ ケイ セ",
    "kun": "きそう",
    "english": "emulate, compete with, bid, sell at auction, bout, contest, race"
  },
  {
    "char": "介",
    "on": "カ",
    "kun": "",
    "english": "jammed in, shellfish, mediate, concern oneself with"
  },
  {
    "char": "根",
    "on": "コン ハン",
    "kun": "ねー ね",
    "english": "root, radical, head (pimple), marketing, sell, trade"
  },
  {
    "char": "将",
    "on": "ショウ ソウ モッ",
    "kun": "まさには たまさ ひきいる",
    "english": "leader, commander, general, admiral, or, and again, soon, from now on, just about"
  },
  {
    "char": "幅",
    "on": "フク",
    "kun": "はば",
    "english": "hanging scroll, width"
  },
  {
    "char": "般",
    "on": "ハン",
    "kun": "",
    "english": "carrier, carry, all"
  },
  {
    "char": "貿",
    "on": "ボウ",
    "kun": "",
    "english": "trade, exchange"
  },
  {
    "char": "講",
    "on": "コウ",
    "kun": "",
    "english": "lecture, club, association"
  },
  {
    "char": "林",
    "on": "リン ハヤ",
    "kun": "",
    "english": "grove, forest"
  },
  {
    "char": "装",
    "on": "ソウ ショウ",
    "kun": "よそお.う よそおい",
    "english": "attire, dress, pretend, disguise, profess"
  },
  {
    "char": "諸",
    "on": "ショ",
    "kun": "もろ",
    "english": "various, many, several, together"
  },
  {
    "char": "劇",
    "on": "ゲキ",
    "kun": "",
    "english": "drama, play"
  },
  {
    "char": "河",
    "on": "カ カ",
    "kun": "",
    "english": "river"
  },
  {
    "char": "航",
    "on": "コ",
    "kun": "",
    "english": "navigate, sail, cruise, fly"
  },
  {
    "char": "鉄",
    "on": "テツ クロ ガ",
    "kun": "",
    "english": "iron"
  },
  {
    "char": "児",
    "on": "ジ ニ ゲイッ キン",
    "kun": "ここ",
    "english": "newborn babe, child, young of animals, prohibition, ban, forbid"
  },
  {
    "char": "印",
    "on": "イン",
    "kun": "しるし じるし しる.す",
    "english": "stamp, seal, mark, imprint, symbol, emblem, trademark, evidence, souvenir, India"
  },
  {
    "char": "換",
    "on": "カン",
    "kun": "かえる か、える か.わる",
    "english": "interchange, period, charge, change"
  },
  {
    "char": "久",
    "on": "キュウ ク ヒサシ",
    "kun": "",
    "english": "long time, old story"
  },
  {
    "char": "短",
    "on": "タン",
    "kun": "みじか.い",
    "english": "short, brevity, fault, defect, weak point"
  },
  {
    "char": "油",
    "on": "ユ ユウ",
    "kun": "あぶら",
    "english": "oil, fat"
  },
  {
    "char": "暴",
    "on": "ボウ バク リン",
    "kun": "あば、く あばれる",
    "english": "outburst, rave, fret, force, violence, cruelty, outrage, wheel, ring, circle, link, loop, counter for wheels and flowers"
  },
  {
    "char": "占",
    "on": "セン ウラナ",
    "kun": "しめる",
    "english": "fortune-telling, divining, forecasting, occupy, hold, have, get, take"
  },
  {
    "char": "植",
    "on": "ショク ウワ",
    "kun": "うえる",
    "english": "plant"
  },
  {
    "char": "清",
    "on": "セイ ショウ シン キヨ、メ",
    "kun": "きよ.い きよ、まる",
    "english": "pure, purify, cleanse, exorcise, Manchu dynasty"
  },
  {
    "char": "倍",
    "on": "バ",
    "kun": "",
    "english": "double, twice, times, fold"
  },
  {
    "char": "均",
    "on": "キン ナラ、",
    "kun": "",
    "english": "level, average"
  },
  {
    "char": "億",
    "on": "才",
    "kun": "",
    "english": "hundred million, 108"
  },
  {
    "char": "圧",
    "on": "アツ エン オウ",
    "kun": "おす へす おさえる おさえる",
    "english": "pressure, push, overwhelm, oppress, dominate"
  },
  {
    "char": "芸",
    "on": "ゲイ ウン ワ",
    "kun": "うえる のり",
    "english": "technique, art, craft, performance, acting, trick, stunt"
  },
  {
    "char": "署",
    "on": "ショ",
    "kun": "",
    "english": "signature, govt office, police station"
  },
  {
    "char": "伸",
    "on": "シン ノ",
    "kun": "のびる の.ばす の.べる",
    "english": "expand, stretch, extend, lengthen, increase"
  },
  {
    "char": "停",
    "on": "テイ",
    "kun": "と、める と、まる",
    "english": "halt, stopping"
  },
  {
    "char": "爆",
    "on": "バク",
    "kun": "は、ぜる",
    "english": "bomb, burst open, pop, split"
  },
  {
    "char": "陸",
    "on": "リ ク ロ ク オ",
    "kun": "",
    "english": "land, six"
  },
  {
    "char": "玉",
    "on": "ギョク ー ダ",
    "kun": "たまたま-",
    "english": "jewel, ball"
  },
  {
    "char": "波",
    "on": "ハ ナ",
    "kun": "",
    "english": "waves, billows, Poland"
  },
  {
    "char": "帯",
    "on": "タイ オ",
    "kun": "お.びる",
    "english": "sash, belt, obi, zone, region"
  },
  {
    "char": "延",
    "on": "エン ノバ",
    "kun": "のびる の.べる の、ベ",
    "english": "prolong, stretching"
  },
  {
    "char": "羽",
    "on": "ウ ハ",
    "kun": "は わ",
    "english": "feathers, counter for birds, rabbits"
  },
  {
    "char": "固",
    "on": "コ",
    "kun": "かた.める かた.まる かた、まり かた.い",
    "english": "harden, set, clot, curdle"
  },
  {
    "char": "則",
    "on": "ソク ノット. ラン ロン ワタ",
    "kun": "みだれる みだる みだ、す みだ おさめる",
    "english": "rule, follow, based on, model after, riot, war, disorder, disturb"
  },
  {
    "char": "普",
    "on": "フ ア マネ",
    "kun": "あまねく",
    "english": "universal, wide(ly), generally, Prussia"
  },
  {
    "char": "測",
    "on": "ソク",
    "kun": "はかる",
    "english": "fathom, plan, scheme, measure"
  },
  {
    "char": "豊",
    "on": "ホウ ブト",
    "kun": "ゆたか",
    "english": "bountiful, excellent, rich"
  },
  {
    "char": "厚",
    "on": "コウ ア",
    "kun": "あつい",
    "english": "thick, heavy, rich, kind, cordial, brazen, shameless"
  },
  {
    "char": "齡",
    "on": "レイ",
    "kun": "よわい とし",
    "english": "age"
  },
  {
    "char": "囲",
    "on": "イ",
    "kun": "かこむ かこう かこい",
    "english": "surround, besiege, store, paling, enclosure, encircle, preserve, keep"
  },
  {
    "char": "卒",
    "on": "ソツ シュツ",
    "kun": "そっ する お.える お.わる ついに にわか",
    "english": "graduate, soldier, private, die"
  },
  {
    "char": "略",
    "on": "リャク",
    "kun": "ほぼ おかす おさめる はかりごと はかる はぶ.く りゃくす りゃくする",
    "english": "abbreviation, omission, outline, shorten, capture, plunder"
  },
  {
    "char": "承",
    "on": "ショウ ウケ",
    "kun": "うけたまわる",
    "english": "acquiesce, hear, listen to, be informed, receive"
  },
  {
    "char": "順",
    "on": "ジュ",
    "kun": "",
    "english": "obey, order, turn, right, docility, occasion"
  },
  {
    "char": "岩",
    "on": "ガン",
    "kun": "いわ",
    "english": "boulder, rock, cliff"
  },
  {
    "char": "練",
    "on": "レン ネ",
    "kun": "ねる",
    "english": "practice, gloss, train, drill, polish, refine"
  },
  {
    "char": "軽",
    "on": "ケイ",
    "kun": "かる.い かろやか かろ.んじる",
    "english": "lightly, trifling, unimportant"
  },
  {
    "char": "了",
    "on": "リョ",
    "kun": "",
    "english": "complete, finish"
  },
  {
    "char": "庁",
    "on": "チョウ テイ",
    "kun": "やくしょ",
    "english": "government office"
  },
  {
    "char": "城",
    "on": "ジョウ シ",
    "kun": "",
    "english": "castle"
  },
  {
    "char": "患",
    "on": "カン ワズラ",
    "kun": "",
    "english": "afflicted, disease, suffer from, be ill"
  },
  {
    "char": "層",
    "on": "ソウ",
    "kun": "",
    "english": "stratum, social class, layer, story, floor"
  },
  {
    "char": "版",
    "on": "ハン",
    "kun": "",
    "english": "printing block, printing plate, edition, impression, label"
  },
  {
    "char": "令",
    "on": "レ",
    "kun": "",
    "english": "orders, ancient laws, command, decree"
  },
  {
    "char": "角",
    "on": "カク ツ",
    "kun": "かど",
    "english": "angle, corner, square, horn, antlers"
  },
  {
    "char": "絡",
    "on": "ラク",
    "kun": "から.む から.まる",
    "english": "entwine, coil around, get caught in"
  },
  {
    "char": "損",
    "on": "ソン",
    "kun": "そこなう そこなう- そこなう そこねる- そこねる",
    "english": "damage, loss, disadvantage, hurt, injure"
  },
  {
    "char": "募",
    "on": "ボ",
    "kun": "つのる",
    "english": "recruit, campaign, gather (contributions), enlist, grow violent"
  },
  {
    "char": "裏",
    "on": "リ",
    "kun": "うら",
    "english": "back, amidst, in, reverse, inside, palm, sole, rear, lining, wrong side"
  },
  {
    "char": "仏",
    "on": "ブツ フツ",
    "kun": "ほとけ",
    "english": "Buddha, the dead, France"
  },
  {
    "char": "績",
    "on": "セ",
    "kun": "",
    "english": "exploits, unreeling cocoons"
  },
  {
    "char": "築",
    "on": "チク キズ、",
    "kun": "",
    "english": "fabricate, build, construct"
  },
  {
    "char": "貨",
    "on": "カ",
    "kun": "",
    "english": "freight, goods, property"
  },
  {
    "char": "混",
    "on": "コン",
    "kun": "ま.じる ま.じり ま.ざる まぜる こむ",
    "english": "mix, blend, confuse"
  },
  {
    "char": "昇",
    "on": "ショウ ノボ、",
    "kun": "",
    "english": "rise up"
  },
  {
    "char": "池",
    "on": "チ ケツ オン ヌ セイ ショウ エイ ナガ チョ チャク",
    "kun": "いけ ち あたたか あたたかい あたたまる あたためる ほしー ぼし あらわす いちじるしい",
    "english": "pond, cistern, pool, reservoir, seasons, star, spot, dot, mark, long, lengthy, renowned, publish, write, remarkable, phenomenal, put on, don, wear, arrival, finish (race), blood, warm, eternity"
  },
  {
    "char": "誌",
    "on": "シ",
    "kun": "",
    "english": "document, records"
  },
  {
    "char": "庫",
    "on": "コク",
    "kun": "くら",
    "english": "warehouse, storehouse"
  },
  {
    "char": "刊",
    "on": "カン",
    "kun": "",
    "english": "publish, carve, engrave"
  },
  {
    "char": "像",
    "on": "ソ",
    "kun": "",
    "english": "statue, picture, image, figure, portrait"
  },
  {
    "char": "香",
    "on": "コウ キョウ カオ.",
    "kun": "か かおり",
    "english": "incense, smell, perfume"
  },
  {
    "char": "坂",
    "on": "ハン サ",
    "kun": "",
    "english": "slope, incline, hill"
  },
  {
    "char": "底",
    "on": "テイ",
    "kun": "そこ",
    "english": "bottom, sole, depth, bottom price, base, kind, sort"
  },
  {
    "char": "布",
    "on": "フ ヌ ジ キ",
    "kun": "てら",
    "english": "linen, cloth, Buddhist temple, eaves, roof, house, heaven, gigantic, big, large, great"
  },
  {
    "char": "巨",
    "on": "シン",
    "kun": "ふるう ふるえる",
    "english": "quake, shake, tremble, quiver, shiver"
  },
  {
    "char": "希",
    "on": "キ ケ マ",
    "kun": "",
    "english": "hope, beg, request, pray, beseech, Greece, dilute (acid), rare, few, phenomenal"
  },
  {
    "char": "触",
    "on": "ショク",
    "kun": "ふれる さわる さわ.",
    "english": "contact, touch, feel, hit, proclaim, announce, conflict"
  },
  {
    "char": "依",
    "on": "イ エ ヨ",
    "kun": "",
    "english": "reliant, depend on, consequently, therefore, due to"
  },
  {
    "char": "籍",
    "on": "セキ",
    "kun": "",
    "english": "enroll, domiciliary register, membership"
  },
  {
    "char": "汚",
    "on": "オ",
    "kun": "けが.す けが.れる けが.らわしい よごす よごれる きたな.い",
    "english": "dirty, pollute, disgrace, rape, defile"
  },
  {
    "char": "枚",
    "on": "マイ バ",
    "kun": "",
    "english": "sheet of..., counter for flat thin objects or sheets"
  },
  {
    "char": "複",
    "on": "フク",
    "kun": "",
    "english": "duplicate, double, compound, multiple"
  },
  {
    "char": "郵",
    "on": "ユウ",
    "kun": "",
    "english": "mail, stagecoach stop"
  },
  {
    "char": "仲",
    "on": "チュウ ナ",
    "kun": "",
    "english": "go-between, relationship"
  },
  {
    "char": "栄",
    "on": "エイ ヨウ",
    "kun": "さかえる は、えば、え は.える",
    "english": "flourish, prosperity, honor, glory, splendor"
  },
  {
    "char": "札",
    "on": "サツ フ",
    "kun": "",
    "english": "tag, paper money, counter for bonds, placard, bid"
  },
  {
    "char": "板",
    "on": "ハン バン コツ",
    "kun": "いた ほね",
    "english": "plank, board, plate, stage, skeleton, bone, remains, frame"
  },
  {
    "char": "傾",
    "on": "ケイ",
    "kun": "かたむく かたむける かたぶく かたげる かし、げる",
    "english": "lean, incline, tilt, trend, wane, sink, ruin, bias"
  },
  {
    "char": "届",
    "on": "カイ",
    "kun": "とどける とどけ とどく",
    "english": "deliver, reach, arrive, report, notify, forward"
  },
  {
    "char": "卷",
    "on": "カン ケン",
    "kun": "ま.く まき まき",
    "english": "scroll, volume, book, part, roll up, wind up, tie, coil, counter for texts (or book scrolls)"
  },
  {
    "char": "燃",
    "on": "ネン",
    "kun": "もえる もやす も.す",
    "english": "burn, blaze, glow"
  },
  {
    "char": "跡",
    "on": "セキ",
    "kun": "あと",
    "english": "tracks, mark, print, impression"
  },
  {
    "char": "包",
    "on": "ホウ クル、",
    "kun": "つつむ",
    "english": "wrap, pack up, cover, conceal"
  },
  {
    "char": "駐",
    "on": "チュウ",
    "kun": "",
    "english": "stop-over, reside in, resident"
  },
  {
    "char": "弱",
    "on": "ジャク",
    "kun": "よわい よわる よわ.まる よわ.める",
    "english": "weak, frail"
  },
  {
    "char": "紹",
    "on": "ショ",
    "kun": "",
    "english": "introduce, inherit, help"
  },
  {
    "char": "雇",
    "on": "コ",
    "kun": "やと、う",
    "english": "employ, hire"
  },
  {
    "char": "替",
    "on": "タイ カワ",
    "kun": "か.える か.えー",
    "english": "exchange, spare, substitute, per-"
  },
  {
    "char": "預",
    "on": "ヨ",
    "kun": "あずける あず、かる",
    "english": "deposit, custody, leave with, entrust to"
  },
  {
    "char": "燒",
    "on": "ショウ ヤケ",
    "kun": "やく やき やき-- や.き",
    "english": "bake, burning"
  },
  {
    "char": "簡",
    "on": "カン ショ",
    "kun": "",
    "english": "simplicity, brevity, badge, chapter, composition, poem, design"
  },
  {
    "char": "臓",
    "on": "ゾウ",
    "kun": "はらわた",
    "english": "entrails, viscera, bowels"
  },
  {
    "char": "律",
    "on": "リツ リチ レ",
    "kun": "",
    "english": "rhythm, law, regulation, gauge, control"
  },
  {
    "char": "贈",
    "on": "ゾウ ソウ",
    "kun": "おくる",
    "english": "presents, send, give to, award to, confer on, presenting something"
  },
  {
    "char": "照",
    "on": "ショウ テレ",
    "kun": "てる て.らす",
    "english": "illuminate, shine, compare, bashful"
  },
  {
    "char": "薄",
    "on": "ハク",
    "kun": "うすい うす-- うす うす.める うす.まる うすらぐ うすら- うす.れる すすき",
    "english": "dilute, thin, weak (tea)"
  },
  {
    "char": "群",
    "on": "グン ムラ、 ガ",
    "kun": "むれ むら むれる",
    "english": "flock, group, crowd, herd, swarm, cluster"
  },
  {
    "char": "秒",
    "on": "ビョウ",
    "kun": "",
    "english": "second (1/60 minute)"
  },
  {
    "char": "奥",
    "on": "オウ オク ク",
    "kun": "おく まる",
    "english": "heart, interior"
  },
  {
    "char": "詰",
    "on": "キツ キチツ",
    "kun": "つめる つめづめ つまる",
    "english": "packed, close, pressed, reprove, rebuke, blame"
  },
  {
    "char": "双",
    "on": "ソウ フタ",
    "kun": "ふた たぐい ならぶ",
    "english": "pair, set, comparison, counter for pairs"
  },
  {
    "char": "刺",
    "on": "シ ジュ ヨク カイ ココロヨ ヘン ケイ キョウ ウヤマ、 ノウ",
    "kun": "さす さ.さる さ.し さ.し とげ なや.む なや.ます なやましい なやみ かた かた",
    "english": "thorn, pierce, stab, prick, sting, calling card, genuine, purity, innocence, net (profit), the following, next, cheerful, pleasant, agreeable, comfortable, one-sided, leaf, sheet, awe, respect, honor, revere, trouble, worry, in pain, distress, illness"
  },
  {
    "char": "泉",
    "on": "セン イズ",
    "kun": "",
    "english": "spring, fountain"
  },
  {
    "char": "皮",
    "on": "",
    "kun": "けがわ",
    "english": "pelt, skin, hide, leather"
  },
  {
    "char": "漁",
    "on": "ギョ リョウ",
    "kun": "あさる",
    "english": "fishing, fishery"
  },
  {
    "char": "荒",
    "on": "コウ スサ",
    "kun": "あら.い あら- あ.れる あらす あ.らし",
    "english": "laid waste, rough, rude, wild"
  },
  {
    "char": "貯",
    "on": "チョ",
    "kun": "ためる たくわえる",
    "english": "savings, store, lay in, keep, wear mustache"
  },
  {
    "char": "硬",
    "on": "コウ",
    "kun": "かた.い",
    "english": "stiff, hard"
  },
  {
    "char": "埋",
    "on": "マイ",
    "kun": "うめる う.まる う.もれる うずめる うず.まる いける",
    "english": "bury, be filled up, embedded"
  },
  {
    "char": "柱",
    "on": "チュウ",
    "kun": "はしら",
    "english": "pillar, post, cylinder, support"
  },
  {
    "char": "祭",
    "on": "サイ タイ ダイ フク",
    "kun": "まつる まつり まつり",
    "english": "ritual, offer prayers, celebrate, deify, enshrine, worship, sack, bag, pouch"
  },
  {
    "char": "筆",
    "on": "ヒツ フ クン キン クン、ズ",
    "kun": "おしえる よ.む",
    "english": "writing brush, writing, painting brush, handwriting, instruction, Japanese character reading, explanation, read"
  },
  {
    "char": "浴",
    "on": "ヨク ア ビセ",
    "kun": "あびる",
    "english": "bathe, be favored with, bask in"
  },
  {
    "char": "童",
    "on": "ドウ ワラ",
    "kun": "",
    "english": "juvenile, child"
  },
  {
    "char": "宝",
    "on": "ホウ タカ",
    "kun": "",
    "english": "treasure, wealth, valuables"
  },
  {
    "char": "封",
    "on": "フウ ホウ",
    "kun": "",
    "english": "seal, closing"
  },
  {
    "char": "胸",
    "on": "キョウ",
    "kun": "むね むな-",
    "english": "bosom, breast, chest, heart, feelings"
  },
  {
    "char": "砂",
    "on": "サ シャ ス",
    "kun": "",
    "english": "sand"
  },
  {
    "char": "塩",
    "on": "エン",
    "kun": "しお",
    "english": "salt"
  },
  {
    "char": "賢",
    "on": "ケン カシコ、",
    "kun": "",
    "english": "intelligent, wise, wisdom, cleverness"
  },
  {
    "char": "腕",
    "on": "ワン",
    "kun": "うで",
    "english": "arm, ability, talent"
  },
  {
    "char": "兆",
    "on": "チョウ",
    "kun": "きざす きざし",
    "english": "portent, 1012, trillion, sign, omen, symptoms"
  },
  {
    "char": "床",
    "on": "ショウ",
    "kun": "とこ ゆか",
    "english": "bed, floor, padding, tatami"
  },
  {
    "char": "毛",
    "on": "モウ",
    "kun": "",
    "english": "fur, hair, feather, down"
  },
  {
    "char": "緑",
    "on": "リョク ロク",
    "kun": "みどり",
    "english": "green"
  },
  {
    "char": "尊",
    "on": "ソントウ ト。",
    "kun": "たっと.い とうと.い t=k.ξ",
    "english": "revered, valuable, precious, noble, exalted"
  },
  {
    "char": "祝",
    "on": "シュク シュウ イワ、",
    "kun": "",
    "english": "celebrate, congratulate"
  },
  {
    "char": "柔",
    "on": "ジュウ ニュウ ヤワ. デン テン - ド",
    "kun": "やわらか やわらかい やわ との",
    "english": "tender, weakness, gentleness, softness, Mr., hall, mansion, palace, temple, lord"
  },
  {
    "char": "濃",
    "on": "ノウ コ、",
    "kun": "",
    "english": "concentrated, thick, dark, undiluted"
  },
  {
    "char": "液",
    "on": "エキ",
    "kun": "",
    "english": "fluid, liquid, juice, sap, secretion"
  },
  {
    "char": "衣",
    "on": "イ エ",
    "kun": "ころも きぬ ぎ",
    "english": "garment, clothes, dressing"
  },
  {
    "char": "肩",
    "on": "ケン",
    "kun": "かた",
    "english": "shoulder"
  },
  {
    "char": "零",
    "on": "レイ",
    "kun": "ぜろ こぼす こぼれる",
    "english": "zero, spill, overflow, nothing, cipher"
  },
  {
    "char": "幼",
    "on": "ヨウ オサナ.",
    "kun": "",
    "english": "infancy, childhood"
  },
  {
    "char": "荷",
    "on": "カ",
    "kun": "",
    "english": "baggage, shoulder-pole load, bear (a burden), shoulder (a gun), load, cargo, freight"
  },
  {
    "char": "泊",
    "on": "ハク トメ",
    "kun": "と、まる",
    "english": "overnight, put up at, ride at anchor, 3-day stay"
  },
  {
    "char": "甘",
    "on": "カン ウマ、",
    "kun": "あまい あま.える あまやかす",
    "english": "sweet, coax, pamper, be content, sugary"
  },
  {
    "char": "臣",
    "on": "シンジ",
    "kun": "",
    "english": "retainer, subject"
  },
  {
    "char": "浅",
    "on": "セン アサ",
    "kun": "",
    "english": "shallow, superficial, frivolous, wretched, shameful"
  },
  {
    "char": "掃",
    "on": "ソウ シュ ハ",
    "kun": "",
    "english": "sweep, brush"
  },
  {
    "char": "雲",
    "on": "ウン - グ",
    "kun": "くも",
    "english": "cloud"
  },
  {
    "char": "掘",
    "on": "クツ ホ",
    "kun": "",
    "english": "dig, delve, excavate"
  },
  {
    "char": "捨",
    "on": "シャ",
    "kun": "す.てる す.る",
    "english": "discard, throw away, abandon, resign, reject, sacrifice"
  },
  {
    "char": "軟",
    "on": "ナン チン ジン シズ、メ",
    "kun": "やわらか やわらかい しず.む",
    "english": "soft, sink, be submerged, subside, be depressed, aloes"
  },
  {
    "char": "凍",
    "on": "トウ シミ",
    "kun": "こおる こごえる こごる いってる",
    "english": "frozen, congeal, refrigerate"
  },
  {
    "char": "乳",
    "on": "ニュウ",
    "kun": "ちち ち",
    "english": "milk, breasts"
  },
  {
    "char": "亦",
    "on": "レン",
    "kun": "こう こい こい。しい",
    "english": "romance, in love, yearn for, miss, darling"
  },
  {
    "char": "紅",
    "on": "コウ クア カ",
    "kun": "べに くれない",
    "english": "crimson, deep red"
  },
  {
    "char": "郊",
    "on": "コウ",
    "kun": "",
    "english": "outskirts, suburbs, rural area"
  },
  {
    "char": "腰",
    "on": "ヨウ コ",
    "kun": "",
    "english": "loins, hips, waist, low wainscoting"
  },
  {
    "char": "炭",
    "on": "タン ヨウ",
    "kun": "すみ おどる",
    "english": "charcoal, coal, jump, dance, leap, skip"
  },
  {
    "char": "冊",
    "on": "サツ サク",
    "kun": "ふみ",
    "english": "tome, counter for books, volume"
  },
  {
    "char": "勇",
    "on": "ユウ イサ",
    "kun": "",
    "english": "courage, cheer up, be in high spirits, bravery, heroism"
  },
  {
    "char": "械",
    "on": "カイ",
    "kun": "かせ",
    "english": "contraption, fetter, machine, instrument"
  },
  {
    "char": "菜",
    "on": "サイ",
    "kun": "",
    "english": "vegetable, side dish, greens"
  },
  {
    "char": "珍",
    "on": "チン タカ",
    "kun": "めずらしい",
    "english": "rare, curious, strange"
  },
  {
    "char": "卵",
    "on": "ラン",
    "kun": "たまご",
    "english": "egg, ovum, spawn, roe"
  },
  {
    "char": "湖",
    "on": "コ ミズ ウ",
    "kun": "",
    "english": "lake"
  },
  {
    "char": "喫",
    "on": "キツ",
    "kun": "",
    "english": "consume, eat, drink, smoke, receive (a blow)"
  },
  {
    "char": "干",
    "on": "カン ヒ、 チュウ キム",
    "kun": "ほ、す ほ、し ぼ、し",
    "english": "dry, parch, insect, bug, temper"
  },
  {
    "char": "刷",
    "on": "サツ",
    "kun": "する ずり ずり はく",
    "english": "printing, print"
  },
  {
    "char": "湯",
    "on": "トウ",
    "kun": "ゆ",
    "english": "hot water, bath, hot spring"
  },
  {
    "char": "溶",
    "on": "ヨウ",
    "kun": "と.ける と、かす と.く",
    "english": "melt, dissolve, thaw"
  },
  {
    "char": "鉱",
    "on": "コウ",
    "kun": "あらがね",
    "english": "mineral, ore"
  },
  {
    "char": "涙",
    "on": "ルイ レイ",
    "kun": "なみだ",
    "english": "tears, sympathy"
  },
  {
    "char": "匹",
    "on": "ヒツ",
    "kun": "ひき",
    "english": "equal, head, counter for small animals, roll of cloth"
  },
  {
    "char": "孫",
    "on": "ソン マ",
    "kun": "",
    "english": "grandchild, descendants"
  },
  {
    "char": "枝",
    "on": "シェ",
    "kun": "",
    "english": "bough, branch, twig, limb"
  },
  {
    "char": "塗",
    "on": "ト",
    "kun": "ぬる ぬ、り まみれる",
    "english": "paint, plaster, daub, smear, coating"
  },
  {
    "char": "軒",
    "on": "ケン",
    "kun": "のき",
    "english": "flats, counter for houses, eaves"
  },
  {
    "char": "毒",
    "on": "ドク",
    "kun": "",
    "english": "poison, virus, venom, germ, harm, injury, spite"
  },
  {
    "char": "叫",
    "on": "キョウ ハイ",
    "kun": "さけ、ぶ おが.む おろが.む",
    "english": "shout, exclaim, yell, worship, adore, pray to"
  },
  {
    "char": "氷",
    "on": "ヒョウ コオ、",
    "kun": "こおり ひ",
    "english": "icicle, ice, hail, freeze, congeal"
  },
  {
    "char": "乾",
    "on": "カン ケン",
    "kun": "かわく かわ.かす ほす ひ るい ぬい",
    "english": "drought, dry, dessicate, drink up, heaven, emperor"
  },
  {
    "char": "棒",
    "on": "ボウ",
    "kun": "",
    "english": "rod, stick, cane, pole, club, line"
  },
  {
    "char": "祈",
    "on": "キ イノ",
    "kun": "",
    "english": "pray, wish"
  },
  {
    "char": "拾",
    "on": "シュウ ジュウ",
    "kun": "ひろう",
    "english": "pick up, gather, find, go on foot, ten"
  },
  {
    "char": "粉",
    "on": "フン デシメートル",
    "kun": "ここな",
    "english": "flour, powder, dust"
  },
  {
    "char": "糸",
    "on": "シ",
    "kun": "いと",
    "english": "thread"
  },
  {
    "char": "綿",
    "on": "メン ワ",
    "kun": "",
    "english": "cotton"
  },
  {
    "char": "汗",
    "on": "カン",
    "kun": "あせ",
    "english": "sweat, perspire"
  },
  {
    "char": "銅",
    "on": "ドウ",
    "kun": "あかがね",
    "english": "copper"
  },
  {
    "char": "湿",
    "on": "シツ シュウ",
    "kun": "しめる しめます うるおう うるおす",
    "english": "damp, wet, moist"
  },
  {
    "char": "瓶",
    "on": "ピン カ",
    "kun": "",
    "english": "flower pot, bottle, vial, jar, jug, vat, urn"
  },
  {
    "char": "咲",
    "on": "ショウー ザ",
    "kun": "さく",
    "english": "blossom, bloom"
  },
  {
    "char": "召",
    "on": "ショウ",
    "kun": "めす",
    "english": "seduce, call, send for, wear, put"
  },
  {
    "char": "缶",
    "on": "カン カ",
    "kun": "",
    "english": "on, ride in, buy, eat, drink, catch (cold), tin can, container"
  },
  {
    "char": "隻",
    "on": "セキ",
    "kun": "",
    "english": "vessels, counter for ships, fish, birds, arrows, one of a pair"
  },
  {
    "char": "脂",
    "on": "シ",
    "kun": "あぶら",
    "english": "fat, grease, tallow, lard, rosin, gum, tar"
  },
  {
    "char": "蒸",
    "on": "ジョウ セイ",
    "kun": "むす むれる むらす",
    "english": "steam, heat, sultry, foment, get musty"
  },
  {
    "char": "肌",
    "on": "キ",
    "kun": "はだ",
    "english": "texture, skin, body, grain"
  },
  {
    "char": "耕",
    "on": "コウ タガヤ",
    "kun": "",
    "english": "till, plow, cultivate"
  },
  {
    "char": "鈍",
    "on": "ドン",
    "kun": "にぶい にぶる にぶ なまる なまくら",
    "english": "dull, slow, foolish, blunt"
  },
  {
    "char": "泥",
    "on": "デイ ナイ デニ ド",
    "kun": "",
    "english": "mud, mire, adhere to, be attached to"
  },
  {
    "char": "隅",
    "on": "グウ",
    "kun": "すみ",
    "english": "corner, nook"
  },
  {
    "char": "灯",
    "on": "トウ",
    "kun": "ひ ほともしび とも.す あかり",
    "english": "lamp, a light, light, counter for lights"
  },
  {
    "char": "辛",
    "on": "シン",
    "kun": "から、い つら、い づらい かのと",
    "english": "spicy, bitter, hot, acrid"
  },
  {
    "char": "磨",
    "on": "マス。",
    "kun": "みがく",
    "english": "grind, polish, scour, improve, brush (teeth)"
  },
  {
    "char": "麦",
    "on": "バク",
    "kun": "むぎ",
    "english": "barley, wheat"
  },
  {
    "char": "姓",
    "on": "セイ ショウ",
    "kun": "",
    "english": "surname"
  },
  {
    "char": "筒",
    "on": "トウ",
    "kun": "つつ",
    "english": "cylinder, pipe, tube, gun barrel, sleeve"
  },
  {
    "char": "鼻",
    "on": "ビ",
    "kun": "はな",
    "english": "nose, snout"
  },
  {
    "char": "粒",
    "on": "リュウ",
    "kun": "つぶ",
    "english": "grains, drop, counter for tiny particles"
  },
  {
    "char": "詞",
    "on": "シ",
    "kun": "",
    "english": "part of speech, words, poetry"
  },
  {
    "char": "胃",
    "on": "イ",
    "kun": "",
    "english": "stomach, paunch, crop, craw"
  },
  {
    "char": "畳",
    "on": "ジョウ チョウ",
    "kun": "たた.む たたみ かさ.なる",
    "english": "tatami mat, counter for tatami mats, fold, shut up, do away with"
  },
  {
    "char": "机",
    "on": "キ",
    "kun": "つくえ",
    "english": "desk, table"
  },
  {
    "char": "膚",
    "on": "フ",
    "kun": "はだ",
    "english": "skin, body, grain, texture, disposition"
  },
  {
    "char": "濯",
    "on": "タク",
    "kun": "すす.ぐ ゆす.ぐ",
    "english": "laundry, wash, pour on, rinse"
  },
  {
    "char": "塔",
    "on": "トウ",
    "kun": "",
    "english": "pagoda, tower, steeple"
  },
  {
    "char": "沸",
    "on": "フツ",
    "kun": "わ.く わ.かす",
    "english": "seethe, boil, ferment, uproar, breed"
  },
  {
    "char": "灰",
    "on": "カイ",
    "kun": "はい",
    "english": "ashes, puckery juice, cremate"
  },
  {
    "char": "菓",
    "on": "カ",
    "kun": "",
    "english": "candy, cakes, fruit"
  },
  {
    "char": "帽",
    "on": "ボウ モウ",
    "kun": "ずきん おお.う",
    "english": "cap, headgear"
  },
  {
    "char": "枯",
    "on": "コ",
    "kun": "か.れる か.らす",
    "english": "wither, die, dry up, be seasoned"
  },
  {
    "char": "涼",
    "on": "リョウ マコト",
    "kun": "すず.しい すず.む すず.やか うす.い ひや.す",
    "english": "refreshing, nice and cool"
  },
  {
    "char": "舟",
    "on": "シュウ",
    "kun": "ふね ふな- -ぶね",
    "english": "boat, ship"
  },
  {
    "char": "貝",
    "on": "バイ",
    "kun": "かい",
    "english": "shellfish"
  },
  {
    "char": "符",
    "on": "フ",
    "kun": "",
    "english": "token, sign, mark, tally, charm"
  },
  {
    "char": "憎",
    "on": "ゾウ",
    "kun": "にくむ にくい にく らしい にく しみ",
    "english": "hate, detest"
  },
  {
    "char": "肯",
    "on": "コウ",
    "kun": "がえんじる",
    "english": "agreement, consent, comply with"
  },
  {
    "char": "燥",
    "on": "ソウ",
    "kun": "はしゃぐ",
    "english": "parch, dry up"
  },
  {
    "char": "畜",
    "on": "チク",
    "kun": "",
    "english": "livestock, domestic fowl and animals"
  },
  {
    "char": "挟",
    "on": "キョウ ショウ",
    "kun": "はさむ はさ、まる わきばさ.む さしはさむ",
    "english": "pinch, between"
  },
  {
    "char": "曇",
    "on": "ドン クモ",
    "kun": "",
    "english": "cloudy weather, cloud up"
  },
  {
    "char": "滴",
    "on": "テキ",
    "kun": "しずく したたる",
    "english": "drop"
  },
  {
    "char": "伺",
    "on": "シ",
    "kun": "うかが、う",
    "english": "pay respects, visit, ask, inquire, question, implore"
  }
];
