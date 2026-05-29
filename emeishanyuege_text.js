/**
 * 互动古文教学平台 - 《峨眉山月歌》原文、注音与词解数据包
 * 适用标准：新加坡、马来西亚中学华文 Pedagogy / 变调规范（bú jiàn）
 */

// 1. 核心原文与立体注音流数据
const poemData = [
    { text: "峨眉山", py: "é méi shān", zh: "山名，在四川省峨眉山市西南，是著名的佛教圣地。", en: "Mount Emei, a famous mountain located in Sichuan Province.", exam: true },
    { text: "月", py: "yuè", zh: "月亮。在诗中既是自然美景，也是陪伴诗人的忠实伙伴。", en: "The moon." },
    { text: "半轮秋", py: "bàn lún qiū", zh: "半圆的秋月。影射中秋之后或初秋的清冷月相。", en: "Half-round autumn moon, implying the clear scenery of early autumn.", exam: true },
    { punc: true, text: "，" },
    { text: "影", py: "yǐng", zh: "指月亮倒映在水中的影子。", en: "The reflection of the moon in the water." },
    { text: "入", py: "rù", zh: "映入、落入。", en: "Cast into / reflected upon." },
    { text: "平羌江", py: "píng qiāng jiāng", zh: "即青衣江，大渡河的支流，流经四川峨眉山，以水流湍急著称。", en: "Pingqiang River (now Qingyi River), a swift-flowing tributary in Sichuan.", exam: true },
    { text: "水", py: "shuǐ", zh: "江水。", en: "River water." },
    { text: "流", py: "liú", zh: "随着江水一同飘流、流动。", en: "Flowing / drifting along with the current." },
    { punc: true, text: "。" },
    { text: "夜发", py: "yè fā", zh: "在夜间乘船出发、启航。", en: "Setting sail or departing at night." },
    { text: "清溪", py: "qīng xī", zh: "地名，即清溪驿，在今四川犍为县西南。", en: "Qingxi (Qingxi Station), a historical location in Sichuan.", exam: true },
    { text: "向", py: "xiàng", zh: "驶向、前往。", en: "Heading towards / sailing to." },
    { text: "三峡", py: "sān xiá", zh: "指长江三峡（瞿塘峡、巫峡、西陵峡），古代蜀地出川的必经险隘。", en: "The Three Gorges of the Yangtze River.", exam: true },
    { punc: true, text: "密" }, // 占位标记，HTML引擎会自动过滤标点
    { punc: true, text: "，" },
    { text: "思君", py: "sī jūn", zh: "思念友人。在诗中诗人也通过拟人法，把陪伴自己的月亮当成了思念的朋友。", en: "Longing for you (the poet's friend, or metaphorically the moon)." },
    { text: "不", py: "bú", zh: "因为行色匆匆或山体遮挡而“不能”。此处依规范变调为第二声。", en: "Not / unable to." },
    { text: "见", py: "jiàn", zh: "看见、相见。", en: "See / meet." },
    { text: "下", py: "xià", zh: "顺流而下、顺水疾驶。", en: "Sailing rapidly downstream." },
    { text: "渝州", py: "yú zhōu", zh: "地名，隋唐时设立，即今天的重庆市，是诗人本次航行的目的地。", en: "Yuzhou (modern-day Chongqing), the destination of the poet's journey.", exam: true },
    { punc: true, text: "。" }
];

console.log("成功加载：_text 数据包");
