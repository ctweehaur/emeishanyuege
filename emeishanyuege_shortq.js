/**
 * 互动古文教学平台 - 《峨眉山月歌》简答题特训专属题库 (Q1 - Q5 标点拦截无损分行版)
 * 核心设计：采用原生字符数组格式，完美避开标点对齐错位，支持 Google Sites 深度嵌套
 */

const shortQData = [
    {
        id: "Q1",
        qZh: "分析诗中“月”这一意象的作用。",
        qPy: "fān xī shī zhōng yuè zhè yī yì xiàng de zuò yòng",
        qEn: "Analyze the role of the 'moon' imagery in the poem.",
        sZh: [
            "第一步：诗中的“月”起到了什么贯穿全诗的作用？",
            "第二步：“半轮秋”营造了怎样的季节氛围？",
            "第三步：月亮最后和诗人的情感（思君）有什么联系？"
        ],
        sPy: [
            "dì yī bù shī zhōng de yuè qǐ dào le shén me guàn chuān quán shī de zuò yòng",
            "dì èr bù bàn lún qiū yíng zào le zěn yàng de jì jié fēn wéi",
            "dì sān bù yuè liàng zuì hòu hé shī rén de qíng gǎn sī jūn shén me lián xì"
        ],
        sEn: "Step 1: What unifying role does the moon play throughout the entire poem?<br>Step 2: What kind of seasonal atmosphere does 'half-round autumn' create?<br>Step 3: How does the moon connect with the poet's emotions of missing someone at the end?",
        aZh: "“月”是贯穿全诗的线索。初秋的半轮明月营造了清朗而略带惆怅的远游氛围。月亮既是旅途的伴侣，也是思念的寄托，诗人借由对月影的依恋，含蓄地抒发了对故乡和友人的不舍之情。",
        aPy: "yuè shì guàn chuān quán shī de xiàn suǒ chū qiū de bàn lún míng yuè yíng zào le qīng lǎng ér lüè dài chóu chàng de yuǎn yóu fēn wéi yuè liàng jì shì lǚ tú de bàn lǚ yě shì sī niàn de jì tuō shī rén jiè yóu duì yuè yǐng de yī liàn hán xù de shū fā le duì gù xiāng hé yǒu rén de bù shě qíng gǎn",
        aEn: "The 'moon' serves as the thread running through the poem. The half-moon of early autumn creates a clear yet nostalgic atmosphere for the journey. The moon is both a companion and a repository of longing, implicitly expressing the poet's deep affection for his hometown and friends."
    },
    {
        id: "Q2",
        qZh: "这首诗是如何展现行程的行进速度与诗人的情感波澜的？",
        qPy: "zhè shǒu shī shì rú hé zhǎn xiàn háng chéng de xíng jìn sù dù yǔ shī rén de qíng gǎn bō lán de",
        qEn: "How does the poem showcase the pace of the journey and the fluctuations of the poet's emotions?",
        sZh: [
            "第一步：五个地名串联起来展现了怎样的空间移动？",
            "第二步：顺流而下的船速暗示了诗人的什么心情？",
            "第三步：“思君不见”在急速的行程中表达了怎样的遗憾？"
        ],
        sPy: [
            "dì yī bù wǔ gè dì míng chuàn lián qǐ lái zhǎn xiàn le zěn yàng de kōng jiān yí dòng",
            "dì èr bù shùn liú ér xià de chuán sù àn shì le shī rén de shén me xīn qíng",
            "dì sān bù sī jūn bú jiàn zài jí sù de háng chéng zhōng biǎo dá le zěn yàng de yí hàn"
        ],
        sEn: "Step 1: What spatial movement does the chain of five place names demonstrate?<br>Step 2: What emotional state does the rapid downstream cruise imply?<br>Step 3: What kind of sudden regret does 'missing you but unable to see you' inject into this fast pace?",
        aZh: "全诗通过五个地名的转换，展现了从峨眉山到渝州千里之遥的轻快行程。江水流速快、船行速度急，暗示了诗人仗剑远游的向往；而“思君不见”则在轻快的节奏中突然跌宕，流露出因行程匆匆、无暇与友人相聚的深切遗憾。",
        aPy: "quán shī tōng guò wǔ gè dì míng de zhuǎn huàn zhǎn xiàn le cóng é méi shān dào yú zhōu qiān lǐ zhī yáo de qīng kuài háng chéng jiāng shuǐ liú sù kuài chuán xíng sù dù jí àn shì le shī rén zhàng jiàn yuǎn yóu de xiàng wǎng ér sī jūn bú jiàn zài qīng kuài de jié zòu zhōng tū rán diē dàng liú lù chū yīn háng chéng cōng cōng wú xiá yǔ yǒu rén xiāng jù de shēn qiè yí hàn",
        aEn: "By transitioning through five locations, the poem showcases a swift journey spanning thousands of miles. The rushing river and fast-moving boat hint at the poet's eagerness for exploration, while 'missing you but unable to see you' suddenly introduces a poignant note of regret amid the brisk rhythm."
    },
    {
        id: "Q3",
        qZh: "请谈谈第一句中“半轮秋”的“秋”字好在哪里？",
        qPy: "qǐng tán tán dì yī jù zhōng bàn lún qiū de qiū zì hǎo zài nǎ lǐ",
        qEn: "What is the poetic merit of the word 'autumn' in the first line's phrase 'half-round autumn'?",
        sZh: [
            "第一步：“秋”字点明了什么时间和季节？",
            "第二步：秋天在中国传统文学中通常和什么情感联系在一起？",
            "第三步：这个字为全诗奠定了怎样的情感基调？"
        ],
        sPy: [
            "dì yī bù qiū zì diǎn míng le shén me shí jiān hé jì jié",
            "dì èr bù qiū tiān zài zhōng guó chuán tǒng wén xué zhōng tōng cháng hé shén me qíng gǎn lián xì zài yī qǐ",
            "dì sān bù zhè gè zì wèi quán shī diàn dì le zěn yàng de qíng gǎn jī tiào"
        ],
        sEn: "Step 1: What seasonal timeline does the word 'autumn' directly indicate?<br>Step 2: What emotional themes is autumn traditionally linked with in Chinese literature?<br>Step 3: What emotional undertone does this word establish for the whole poem?",
        aZh: "“秋”字妙在字面点明时令，暗指初秋的清朗；深层则触发了中国传统文化中“秋天思乡”的情感内核。它与下文的“思君”遥相呼应，将原本轻快的远游涂抹上了一层淡淡的、富有诗意的离别愁绪。",
        aPy: "qiū zì miào zài zì miàn diǎn míng shí lìng àn zhǐ chū qiū de qīng lǎng shēn céng zé chù fā le zhōng guó chuán tǒng wén huà zhōng qiū tiān sī xiāng de qíng gǎn nèi hé tā yǔ xià wén de sī jūn yáo xiāng hū yìng jiāng yuán běn qīng kuài de yuǎn yóu tú mǒ shàng le yī céng dàn dàn de fù yǒu shī yì de lí bié chóu xù",
        aEn: "The word 'autumn' masterfully indicates the season, implying the crispness of early autumn. On a deeper level, it evokes the traditional Chinese cultural association between autumn and nostalgia. It echoes the later 'missing you,' infusing the brisk journey with a hint of poetic melancholy."
    },
    {
        id: "Q4",
        qZh: "诗中的“君”可以有哪两种不同的理解？请分别说明。",
        qPy: "shī zhōng de jūn kě yǐ yǒu nǎ liǎng zhǒng bù tóng de lǐ jiě qǐng fēn bié shuō míng",
        qEn: "What are the two different interpretations of 'you' in this poem? Please explain each.",
        sZh: [
            "第一步：第一种普通的理解，“君”指谁？",
            "第二步：从拟人的角度来看，“君”还可以指代什么自然景物？",
            "第三步：这两种理解各带来了怎样的艺术美感？"
        ],
        sPy: [
            "dì yī bù dì yī zhǒng pǔ tōng de lǐ jiě jūn zhǐ shéi",
            "dì èr bù cóng nǐ rén de jiào dù lái kàn jūn hái kě yǐ zhǐ dài shén me zì rán jǐng wù",
            "dì sān bù zhè liǎng zhǒng lǐ jiě gè dài lái le zěn yàng de yì shù měi gǎn"
        ],
        sEn: "Step 1: In the most common literal reading, who does 'you' refer to?<br>Step 2: From a personified perspective, what natural scenery can 'you' also represent?<br>Step 3: What unique artistic aesthetics do these two layerings bring to the audience?",
        aZh: "第一种理解指“诗人的友人”，表达旅途中对远方朋友的深切怀念；第二种理解指“峨眉山月”，运用拟人手法，将月亮视作如影随形的知己，因山重水复、月亮“不见”而产生惜别之情。两种理解都极具深情。",
        aPy: "dì yī zhǒng lǐ jiě zhǐ shī rén de yǒu rén biǎo dá lǚ tú zhōng duì yuǎn fāng péng yǒu de shēn qiè huái niàn dì èr zhǒng lǐ jiě zhǐ é méi shān yuè yùn yòng nǐ rén shǒu fǎ jiāng yuè liàng shì zuò rú yǐng suí xíng de zhī jǐ yīn shān chóng shuǐ fù yuè liàng bú jiàn ér chǎn shēng xī bié zhī qíng liǎng zhǒng lǐ jiě dōu jí jù shēn qíng",
        aEn: "The first interpretation refers to 'the poet's friend,' expressing deep nostalgia. The second refers to 'the Emei moon,' using personification to view the moon as an inseparable confidant. The moon 'disappearing' due to winding rivers evokes a tender feeling of parting. Both interpretations are deeply affectionate."
    },
    {
        id: "Q5",
        qZh: "李白在这首诗中连用五个地名，为什么读者读起来却不觉得堆砌和枯燥？",
        qPy: "lǐ bái zài zhè shǒu shī zhōng lián yòng wǔ gè dì míng wèi shén me dú zhě dú qǐ lái què bù jué de duī qì hé kū zào",
        qEn: "Li Bai used five place names consecutively. Why don't readers find it repetitive or dry?",
        sZh: [
            "第一步：这些地名是孤立存在的还是流动的？",
            "第二步：诗中使用了哪些动态词汇来串联地名？",
            "第三步：这种地名连接方式创造了怎样的视觉画面感？"
        ],
        sPy: [
            "dì yī bù zhè xiē dì míng shì gū lì cún zài de hái shì liú dòng de",
            "dì èr bù shī zhōng shǐ yòng le nǎ xiē dòng tài cí huì lái chuàn lián dì míng",
            "dì sān bù zhè zhǒng dì míng lián jiē fāng shì chuàng zào le zěn yàng de shì jué huà miàn gǎn"
        ],
        sEn: "Step 1: Are these geographical sites isolated landmarks or part of a moving timeline?<br>Step 2: What active action verbs does the poet deploy to chain these landmarks?<br>Step 3: What kind of cinematic fluid imagery does this mapping technique build for readers?",
        aZh: "因为这些地名并非孤立堆砌，而是用“入”、“流”、“发”、“向”、“下”等一连串极具动感的词汇紧密串联。地名的转换伴随着船只的行进与江水的流动，形成了一幅高动态、有起伏的行舟远游图，因此读起来流畅自然、一气呵成。",
        aPy: "yīn wèi zhè xiē dì míng bìng fēi gū lì duī qì ér shì yòng rù liú fā xiàng xià děng yī lián chuàn jí jù dòng gǎn de cí huì jǐn mì chuàn lián dì míng de zhuǎn huàn bàn suí zhe chuán zhī de xíng jìn yǔ jiāng shuǐ de liú dòng xíng chéng le yī fú gāo dòng tài yǒu qǐ fú de xíng zhōu yuǎn yóu tú yīn cǐ dú qǐ lái liú chàng zì rán yī qì hé chéng",
        aEn: "Because these names are not static, but tightly linked by a series of dynamic verbs like 'enter,' 'flow,' 'depart,' 'towards,' and 'go down.' The rapid shifts of locations complement the moving boat and rushing river, creating a fluid, high-tempo landscape painting that reads seamlessly."
    }
];

console.log("成功加载：_shortq 数据包");
