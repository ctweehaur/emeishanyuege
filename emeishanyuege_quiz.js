/**
 * 互动古文教学平台 - 《峨眉山月歌》客观题自测专属题库 (5题全洗牌版)
 */

const quizQuestions = [
    {
        id: "1",
        text: "诗中“夜发清溪向三峡”的“发”字，最准确的解释是什么？",
        py: "shī zhōng yè fā qīng xī xiàng sān xiá de fā zì zuì zhǔn què de jiě shì shì shén me",
        en: "What does 'fā' mean in this line?",
        options: [
            { text: "发现", py: "fā xiàn", en: "Discover", correct: false, explanation: "错误，非古代汉语在此处的词义。", explanationPy: "cuò wù fēi gǔ dài hàn yǔ zài cǐ chù de cí yì", explanationEn: "Incorrect. This is a modern meaning, not the classical Chinese context here." },
            { text: "头发", py: "tóu fà", en: "Hair", correct: false, explanation: "错误，字义完全不符。", explanationPy: "cuò wù zì yì wán quán bù fú", explanationEn: "Incorrect. The definition is completely irrelevant to the poem." },
            { text: "出发 / 启航", py: "chū fā qǐ háng", en: "Set off / Depart", correct: true, explanation: "正确，“夜发”指诗人在夜间乘船出发、启程。", explanationPy: "zhèng què yè fā zhǐ shī rén zài yè jiān chéng chuán chū fā qǐ chéng", explanationEn: "Correct. 'Yè fā' means departing or setting sail by boat at night." },
            { text: "抒发", py: "shū fā", en: "Express", correct: false, explanation: "错误，不能与动作及时间词直接搭配。", explanationPy: "cuò wù bù néng yǔ dòng zuò jí shí jiān cí zhí jiē dā pèi", explanationEn: "Incorrect. It cannot be grammatically paired with the time keyword 'night'." }
        ]
    },
    {
        id: "2",
        text: "关于“影入平羌江水流”这句诗，以下哪项艺术特点分析是正确的？",
        py: "guān yú yǐng rù píng qiāng jiāng shuǐ liú zhè jù shī yǐ xià nǎ xiàng yì shù tè diǎn fān xī shì zhèng què de",
        en: "Which analysis of the artistic feature in this line is correct?",
        options: [
            { text: "运用了夸张手法，写出月影的庞大。", py: "yùn yòng le kuā zhāng shǒu fǎ xiě chū yuè yǐng de páng dà", en: "It uses exaggeration to describe the immense size of the moon's reflection.", correct: false, explanation: "错误，诗句是对月影映入江水随流而去的写实描绘。", explanationPy: "cuò wù shī jù shì duì yuè yǐng yìng rù jiāng shuǐ suí liú ér qù de xiě shí miáo huì", explanationEn: "Incorrect. The poem presents a realistic, vivid depiction of the reflection flowing along." },
            { text: "运用了拟人手法，月亮自己跳进了江水里。", py: "yùn yòng le nǐ rén shǒu fǎ yuè liàng zì jǐ tiào jìn le jiāng shuǐ lǐ", en: "It uses personification, as if the moon jumped into the river itself.", correct: false, explanation: "错误，月影“入”江是自然动态的投射，此处非拟人。", explanationPy: "cuò wù yuè yǐng rù jiāng shì zì rán dòng tài de tóu shè cǐ chù fēi nǐ rén", explanationEn: "Incorrect. The moon's reflection appearing in the river is a natural visual phenomenon, not personification here." },
            { text: "静态与动态结合，以“月影落江”的静转入“江水流”的动。", py: "jìng tài yǔ dòng tài jié hé yǐ xuè yǐng luò jiāng de jìng zhuǎn rù jiāng shuǐ liú de dòng", en: "Combining stillness and motion, transitioning from the moon's reflection to the flowing water.", correct: true, explanation: "正确。月影映入江水是静，随江水流动是动，展现了灵动的江夜美景。", explanationPy: "zhèng què yuè yǐng yìng rù jiāng shuǐ shì jìng suí jiāng shuǐ liú dòng shì dòng zhǎn xiàn le líng dòng de jiāng yè měi jǐng", explanationEn: "Correct. The moon reflection cast on the river is still, while flowing with the water is active, capturing a vivid river night." },
            { text: "这句诗主要描写了诗人在岸边慢跑散步的场景。", py: "zhè jù shī zhǔ yào miáo huǐ le shī rén zài àn biān màn pǎo sàn bù de chǎng jǐng", en: "This line mainly describes the scene of the poet jogging or walking on the riverbank.", correct: false, explanation: "错误，诗人此时已经在乘船远行的航道中了。", explanationPy: "cuò wù shī rén cǐ shí yǐ jīng zài chéng chuán yuǎn xíng de háng dào zhōng le", explanationEn: "Incorrect. The poet is already onboard the ship on a long journey at this point." }
        ]
    },
    {
        id: "3",
        text: "这首诗最大的艺术特色是在短短28个字中连用了多个地名。请问全诗共出现了几个地名？",
        py: "zhè shǒu shī zuì dà de yì shù tè sè shì zài duǎn duǎn èr shí bā gè zì zhōng lián yòng le duō gè dì míng qǐng wèn quán shī gòng chū xiàn le jǐ gè dì míng",
        en: "How many geographical names are used in the entire poem?",
        options: [
            { text: "3个地名", py: "sān gè dì míng", en: "3 place names", correct: false, explanation: "错误，数量漏算了大半。", explanationPy: "cuò wù shù liàng lòu suàn le dà bàn", explanationEn: "Incorrect. You have missed more than half of the geographical milestones." },
            { text: "4个地名", py: "sì gè dì míng", en: "4 place names", correct: false, explanation: "错误，漏掉了河流或驿站的古地名。", explanationPy: "cuò wù lòu diào le hé liú huò yì zhàn de gǔ dì míng", explanationEn: "Incorrect. You missed either the river name or the station name." },
            { text: "5个地名", py: "wǔ gè dì míng", en: "5 place names", correct: true, explanation: "正确。五个地名依次为：峨眉山、平羌江、清溪、三峡、渝州。", explanationPy: "zhèng què wǔ gè dì míng yī cì wéi é méi shān píng qiāng jiāng qīng xī sān xiá yú zhōu", explanationEn: "Correct. The five places are: Mount Emei, Pingqiang River, Qingxi, the Three Gorges, and Yuzhou." },
            { text: "6个地名", py: "liù gè dì míng", en: "6 place names", correct: false, explanation: "错误，数量数多了，诗中并没有这么多地名。", explanationPy: "cuò wù shù liàng shǔ duō le shī zhōng bìng méi yǒu zhè me duō dì míng", explanationEn: "Incorrect. You overcounted; there aren't that many locations in 28 characters." }
        ]
    },
    {
        id: "4",
        text: "诗句“思君不见下渝州”中，诗人为什么会“不见君”？",
        py: "shī jù sī jūn bú jiàn xià yú zhōu zhōng shī rén wèi shén me huì bú jiàn jūn",
        en: "Why couldn't the poet see 'you' in this line?",
        options: [
            { text: "因为夜色太暗，行船迷失了方向。", py: "yīn wèi yè sè tài àn xíng chuán mí shī le fāng xiàng", en: "Because the night was too dark and the boat lost its direction.", correct: false, explanation: "错误，诗人的航向非常明确且水流顺畅。", explanationPy: "cuò wù shī rén de háng xiàng fēi cháng míng què qiě shuǐ liú shùn chàng", explanationEn: "Incorrect. The poet's sailing path is very clear and smooth with the current." },
            { text: "因山峦遮挡月亮，或行色匆匆无暇与友人相聚。", py: "yīn shān luán zhē dǎng yuè liàng huò xíng sè cōng cōng wú xiá yǔ yǒu rén xiāng jù", en: "Due to mountains blocking the moon, or sailing too fast to gather with friends.", correct: true, explanation: "正确。“君”可指月亮或友人，因两岸高山遮挡或船速极快、行程匆忙而不得见，流露出遗憾。", explanationPy: "zhèng què jūn kě zhǐ yuè liàng huò yǒu rén yīn liǎng àn gāo shān zhē dǎng huò chuán sù jí kuài xíng chéng cōng máng ér bù dé jiàn liú lù chū yí hàn", explanationEn: "Correct. 'You' can refer to the moon or a friend; it highlights a poignant regret due to swift traveling." },
            { text: "因为友人生病了，在清溪驿无法出门送行。", py: "yīn wèi yǒu rén shēng bìng le zài qīng xī yì wú fǎ chū mén sòng xíng", en: "Because the friend was ill and could not come out to say goodbye.", correct: false, explanation: "错误，历史背景与诗句原文中没有这类记载，属于无中生有。", explanationPy: "cuò wù lì shǐ bèi jǐng yǔ shī jù yuán wén zhōng méi yǒu zhè lèi jì zǎi shǔ yú wú zhōng shēng yǒu", explanationEn: "Incorrect. This is a completely fabricated assumption with no contextual backing." },
            { text: "因为诗人在黑夜里走错了道路，没有经过渝州。", py: "yīn wèi shī rén zài hēi yè lǐ zǒu cuò le dào lù méi yǒu jīng guò yú zhōu", en: "Because the poet took the wrong route in the dark and missed Yuzhou.", correct: false, explanation: "错误，“下渝州”明确说明诗人正顺流前往目的地渝州。", explanationPy: "cuò wù xià yú zhōu míng què shuō míng shī rén zhèng shùn liú qián wǎng mù dì dì yú zhōu", explanationEn: "Incorrect. 'Xià Yuzhou' explicitly marks that the boat is safely en route to Yuzhou." }
        ]
    },
    {
        id: "5",
        text: "根据诗意、时令线索和文化常识，这首诗描写的季节是以下哪一个？",
        py: "gēn jù shī yì shí lìng xiàn suǒ hé wén huà cháng shí zhè shǒu shī miáo huǐ de jì jié shì yǐ xià nǎ yí gè",
        en: "Which season is depicted in this poem based on textual and cultural clues?",
        options: [
            { text: "春季", py: "chūn jì", en: "Spring", correct: false, explanation: "错误，春季景物与诗中的月相和秋色线索完全不符。", explanationPy: "cuò wù chūn jì jǐng wù yǔ shī zhōng de yuè xiàng hé qiū sè xiàn suǒ wán quán bù fú", explanationEn: "Incorrect. Spring scenery contradicts the explicit seasonal keywords in the text." },
            { text: "夏季", py: "xià jì", en: "Summer", correct: false, explanation: "错误，夏夜繁星繁茂，与全诗核心冷月意境不同。", explanationPy: "cuò wù xià jì fán xīng fán mào yǔ quán shī hé xīn lěng yuè yì jìng bù tóng", explanationEn: "Incorrect. The unique moon profile described does not match mid-summer conditions." },
            { text: "秋季", py: "qiū jì", en: "Autumn", correct: true, explanation: "正确。第一句中的“半轮秋”直接点明了这是初秋或中秋过后的特有秋景。", explanationPy: "zhèng què dì yī jù zhōng de bàn lún qiū zhí jiē diǎn míng le zhè shì chū qiū huò zhōng qiū guò hòu de tè yǒu qiū jǐng", explanationEn: "Correct. 'Bàn lún qiū' in the very first line clearly identifies early or mid-autumn." },
            { text: "冬季", py: "dōng jì", en: "Winter", correct: false, explanation: "错误，冬景极度严寒，与全诗轻快、仗剑远游的阔大基调完全相左。", explanationPy: "cuò wù dōng jǐng jí dù yán hán yǔ quán shī qīng kuài zhàng jiàn yuǎn yóu de kuò dà jī tiào wán quán xiāng zuǒ", explanationEn: "Incorrect. Winter's freeze contradicts the energetic, wandering nature of Li Bai's trip." }
        ]
    }
];

console.log("成功加载：_quiz 数据包");
