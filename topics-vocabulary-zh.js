// Learn Vocabulary (Chinese / Simplified) — 150 words (50 easy, 50 medium, 50 hard)
// Each entry: { word, pos, def, sentence, angle, difficulty }

var vocabularyWordsZh = [
    // ========================
    // EASY (50 words)
    // ========================
    { word: "珍惜", pos: "动词", def: "重视并爱护，不轻易放弃", sentence: "我们应该珍惜和家人在一起的每一刻。", angle: "谈谈你最珍惜的一段经历，以及为什么它对你如此重要。", difficulty: "easy" },
    { word: "勇敢", pos: "形容词", def: "不畏惧危险和困难，敢于面对", sentence: "面对困难时，她表现得非常勇敢。", angle: "讲述一次你鼓起勇气做了一件事的经历，以及结果如何。", difficulty: "easy" },
    { word: "坚持", pos: "动词", def: "不改变立场或意见，持续努力不放弃", sentence: "他坚持每天跑步，终于在比赛中取得了好成绩。", angle: "谈谈坚持某件事情给你带来了什么收获。", difficulty: "easy" },
    { word: "温暖", pos: "形容词", def: "使人感到舒适和关怀的", sentence: "妈妈做的饭菜总是让人感到温暖。", angle: "描述一件让你感到温暖的小事，以及它为什么打动了你。", difficulty: "easy" },
    { word: "善良", pos: "形容词", def: "心地纯洁，乐于助人", sentence: "她是一个善良的人，总是愿意帮助别人。", angle: "讨论善良在现代社会中是否仍然重要，为什么。", difficulty: "easy" },
    { word: "责任", pos: "名词", def: "应当承担的义务和职责", sentence: "作为班长，他觉得自己有责任帮助同学们。", angle: "谈谈你对责任的理解，以及承担责任如何让你成长。", difficulty: "easy" },
    { word: "努力", pos: "动词", def: "尽量使出自己的力气来做事", sentence: "只要你足够努力，就一定能实现自己的梦想。", angle: "分享一次你特别努力却未能成功的经历，以及你从中学到了什么。", difficulty: "easy" },
    { word: "感激", pos: "动词", def: "因对方的好意或帮助而感到感谢", sentence: "我非常感激老师对我的悉心指导。", angle: "谈谈你最想感激的一个人，以及他对你的影响。", difficulty: "easy" },
    { word: "陪伴", pos: "动词", def: "在旁边一起做某事，给予同在的感觉", sentence: "最好的礼物不是物质，而是陪伴。", angle: "讨论陪伴和物质哪个更重要，用个人经历来支持你的观点。", difficulty: "easy" },
    { word: "信任", pos: "名词", def: "相信并依靠对方", sentence: "朋友之间最重要的就是信任。", angle: "谈谈信任一旦被打破，是否还能修复，为什么。", difficulty: "easy" },
    { word: "宽容", pos: "形容词", def: "度量大，能容忍他人的过错", sentence: "她对别人的错误总是很宽容。", angle: "讨论宽容和纵容之间的区别，并举例说明。", difficulty: "easy" },
    { word: "期待", pos: "动词", def: "对未来的事物怀有希望和等待", sentence: "我很期待明天的旅行。", angle: "谈谈你现在最期待的一件事，以及它为什么让你兴奋。", difficulty: "easy" },
    { word: "成就", pos: "名词", def: "事业上取得的成绩和成果", sentence: "这个项目的成功是团队共同努力的成就。", angle: "分享你最引以为豪的一项成就，以及你为此付出了什么。", difficulty: "easy" },
    { word: "尊重", pos: "动词", def: "敬重并认真对待", sentence: "我们应该尊重每个人的选择。", angle: "讨论尊重别人和同意别人有什么区别。", difficulty: "easy" },
    { word: "诚实", pos: "形容词", def: "说真话，不欺骗", sentence: "诚实是做人最基本的品质。", angle: "谈谈在什么情况下诚实可能会带来麻烦，你会怎么处理。", difficulty: "easy" },
    { word: "孤独", pos: "形容词", def: "独自一人，感到寂寞", sentence: "在异乡求学的日子里，他常常感到孤独。", angle: "讨论孤独和独处的区别，以及如何把孤独变成自我成长的机会。", difficulty: "easy" },
    { word: "热情", pos: "名词", def: "对人或事物表现出的积极和浓厚的兴趣", sentence: "她对工作充满了热情。", angle: "谈谈热情对于做好一件事有多重要，并举一个例子。", difficulty: "easy" },
    { word: "回忆", pos: "名词", def: "对过去经历的记忆和怀念", sentence: "这张照片勾起了我许多美好的回忆。", angle: "描述一段你最珍贵的回忆，以及它为什么历久弥新。", difficulty: "easy" },
    { word: "谦虚", pos: "形容词", def: "不自满，不骄傲", sentence: "尽管成绩优秀，他仍然很谦虚。", angle: "讨论谦虚是真正的美德还是一种社交策略。", difficulty: "easy" },
    { word: "勤奋", pos: "形容词", def: "努力不懈，认真工作或学习", sentence: "他的成功离不开多年的勤奋学习。", angle: "谈谈你认为勤奋和天赋哪个更重要，为什么。", difficulty: "easy" },
    { word: "犹豫", pos: "动词", def: "拿不定主意，迟疑不决", sentence: "面对两个工作机会，她犹豫了很久。", angle: "分享一次犹豫不决的经历，以及你最终是如何做出决定的。", difficulty: "easy" },
    { word: "遗憾", pos: "名词", def: "因未能如愿而感到惋惜", sentence: "没能参加他的婚礼是我最大的遗憾。", angle: "谈谈一件让你感到遗憾的事情，如果重来你会怎么做。", difficulty: "easy" },
    { word: "奋斗", pos: "动词", def: "为达到目标而努力拼搏", sentence: "年轻人应该为自己的理想而奋斗。", angle: "讨论奋斗的意义是否在于结果还是过程本身。", difficulty: "easy" },
    { word: "默契", pos: "名词", def: "双方配合得很好，心照不宣", sentence: "多年的合作让他们之间形成了一种默契。", angle: "描述你和某个人之间的默契是如何建立起来的。", difficulty: "easy" },
    { word: "沉默", pos: "形容词", def: "不说话，安静无声", sentence: "听到这个消息后，大家都沉默了。", angle: "讨论沉默在不同情况下可能传达的不同含义。", difficulty: "easy" },
    { word: "鼓励", pos: "动词", def: "激发信心和勇气，使人振作", sentence: "老师的鼓励让他重新找回了自信。", angle: "谈谈一句鼓励的话如何改变了你的人生轨迹。", difficulty: "easy" },
    { word: "成熟", pos: "形容词", def: "发展到完善的程度，思想行为稳重", sentence: "经历了这些挫折之后，她变得更加成熟了。", angle: "讨论什么事件最能让一个人迅速成熟起来。", difficulty: "easy" },
    { word: "包容", pos: "动词", def: "宽容接纳不同的意见或行为", sentence: "一个好的社会应该包容各种不同的声音。", angle: "谈谈包容的边界在哪里，是否有些事情不应该被包容。", difficulty: "easy" },
    { word: "启发", pos: "动词", def: "开导引发，使人领悟", sentence: "这本书给了我很大的启发。", angle: "分享一件给你启发的事情，以及它如何改变了你的思考方式。", difficulty: "easy" },
    { word: "困惑", pos: "形容词", def: "感到迷惑不解", sentence: "面对这个复杂的问题，他感到很困惑。", angle: "谈谈你目前最困惑的一件事，以及你打算如何去解决它。", difficulty: "easy" },
    { word: "妥协", pos: "动词", def: "双方各让一步以求达成一致", sentence: "在谈判中，双方最终做出了妥协。", angle: "讨论妥协是软弱的表现还是一种智慧。", difficulty: "easy" },
    { word: "氛围", pos: "名词", def: "周围的气氛和环境感觉", sentence: "这家咖啡馆的氛围特别适合读书。", angle: "描述你最喜欢的一种氛围，以及它为什么让你感到放松。", difficulty: "easy" },
    { word: "领悟", pos: "动词", def: "理解和体会到事物的道理", sentence: "经过多年的实践，他终于领悟了其中的道理。", angle: "分享你在某个瞬间突然领悟到什么重要道理的经历。", difficulty: "easy" },
    { word: "辜负", pos: "动词", def: "对不起别人的好意或期望", sentence: "他不想辜负父母对自己的期望。", angle: "谈谈害怕辜负别人的期望是否会给人带来压力。", difficulty: "easy" },
    { word: "牺牲", pos: "动词", def: "为了正义或他人而放弃自己的利益", sentence: "父母为了孩子的教育做出了很多牺牲。", angle: "讨论牺牲是否总是值得的，以及什么情况下不应该牺牲自己。", difficulty: "easy" },
    { word: "怀念", pos: "动词", def: "思念过去的人或事", sentence: "我常常怀念小时候在乡下度过的暑假。", angle: "谈谈你最怀念的一段时光，以及为什么再也回不去了。", difficulty: "easy" },
    { word: "格局", pos: "名词", def: "对事物的认知范围和思维境界", sentence: "一个人的格局决定了他能走多远。", angle: "讨论如何培养更大的格局，以及格局对成功的影响。", difficulty: "easy" },
    { word: "沟通", pos: "动词", def: "通过交流使双方相互了解", sentence: "良好的沟通是解决矛盾的关键。", angle: "谈谈你经历过的一次沟通失败，以及你从中学到了什么。", difficulty: "easy" },
    { word: "分寸", pos: "名词", def: "说话或做事的适当限度", sentence: "和人交往要注意分寸，不要过于随意。", angle: "讨论如何在社交中把握好分寸，举一个正面和反面的例子。", difficulty: "easy" },
    { word: "执着", pos: "形容词", def: "坚持不懈，不轻易放弃", sentence: "正是这份执着让他最终实现了梦想。", angle: "谈谈执着和固执的区别，以及什么时候该放手。", difficulty: "easy" },
    { word: "纠结", pos: "动词", def: "内心矛盾，难以抉择", sentence: "她为是否出国留学的事纠结了好久。", angle: "分享你最近一次纠结的经历，以及你是如何做出最终选择的。", difficulty: "easy" },
    { word: "释然", pos: "动词", def: "心中的疑虑或不快消散，感到轻松", sentence: "听到他的解释后，我终于释然了。", angle: "描述一次你释然的经历，以及放下心结后的感受。", difficulty: "easy" },
    { word: "敬佩", pos: "动词", def: "尊敬并佩服", sentence: "我非常敬佩那些在困境中仍然乐观的人。", angle: "谈谈你最敬佩的一个人，以及他的哪种品质最打动你。", difficulty: "easy" },
    { word: "底线", pos: "名词", def: "不可逾越的最低限度或原则", sentence: "每个人都应该有自己的底线。", angle: "讨论你的底线是什么，以及你是否曾经被迫突破过它。", difficulty: "easy" },
    { word: "惭愧", pos: "形容词", def: "因做了不好的事而感到不安和羞耻", sentence: "想起当初对他的态度，我感到非常惭愧。", angle: "分享一件让你感到惭愧的事情，以及你后来是如何弥补的。", difficulty: "easy" },
    { word: "共鸣", pos: "名词", def: "因有相同的感受而产生的内心回应", sentence: "这首歌引起了很多人的共鸣。", angle: "谈谈一部作品（书、电影、音乐）如何引起了你的共鸣。", difficulty: "easy" },
    { word: "磨练", pos: "动词", def: "通过艰苦的锻炼使意志坚强", sentence: "军训的经历磨练了他的意志。", angle: "讨论什么样的经历最能磨练一个人的性格。", difficulty: "easy" },
    { word: "境界", pos: "名词", def: "事物所达到的程度或呈现的情况", sentence: "他对书法的理解已经达到了很高的境界。", angle: "谈谈你在某个领域追求更高境界的过程。", difficulty: "easy" },
    { word: "触动", pos: "动词", def: "引起内心的感动或反应", sentence: "他的故事深深触动了在场的每一个人。", angle: "描述最近一次被什么东西触动的经历。", difficulty: "easy" },
    { word: "担当", pos: "名词", def: "承担责任的勇气和能力", sentence: "他是一个有担当的人，从不推卸责任。", angle: "讨论现代社会中年轻人是否缺乏担当精神。", difficulty: "easy" },

    // ========================
    // MEDIUM (50 words)
    // ========================
    { word: "抉择", pos: "名词", def: "在重大问题上做出的选择和决定", sentence: "人生中总会面临几次重大的抉择。", angle: "谈谈你人生中最艰难的一次抉择，以及它如何塑造了你。", difficulty: "medium" },
    { word: "蕴含", pos: "动词", def: "内部包含着某种意义或道理", sentence: "这幅画蕴含着深刻的哲学思想。", angle: "讨论一件看似普通的事物中蕴含的深层含义。", difficulty: "medium" },
    { word: "笃定", pos: "形容词", def: "坚定不移，确信不疑", sentence: "他对自己的选择非常笃定，从不后悔。", angle: "谈谈笃定和盲目自信之间的区别。", difficulty: "medium" },
    { word: "深邃", pos: "形容词", def: "深奥而难以测量或理解", sentence: "他的目光深邃，仿佛能看穿一切。", angle: "描述一次你被某个深邃的思想或景象所吸引的经历。", difficulty: "medium" },
    { word: "涵养", pos: "名词", def: "内在的修养和素质", sentence: "一个人的涵养体现在他对待弱者的态度上。", angle: "讨论涵养是与生俱来的还是后天培养的。", difficulty: "medium" },
    { word: "斟酌", pos: "动词", def: "反复考虑，仔细权衡", sentence: "这份合同的每一条款都需要仔细斟酌。", angle: "谈谈在什么情况下过度斟酌反而会适得其反。", difficulty: "medium" },
    { word: "弥补", pos: "动词", def: "填补不足或修复缺失", sentence: "他想用实际行动来弥补自己犯下的错误。", angle: "讨论有些错误是否真的无法弥补，以及如何面对不可挽回的过失。", difficulty: "medium" },
    { word: "沉淀", pos: "动词", def: "经过时间的积累而变得更加深厚", sentence: "多年的经验让他的技艺得到了充分的沉淀。", angle: "谈谈为什么有些事情需要时间的沉淀才能显现价值。", difficulty: "medium" },
    { word: "契机", pos: "名词", def: "事物发展转变的关键时机", sentence: "这次危机反而成为了公司改革的契机。", angle: "分享一次危机变成契机的经历。", difficulty: "medium" },
    { word: "践行", pos: "动词", def: "用实际行动去履行和实现", sentence: "我们不仅要学习理论，更要在生活中践行。", angle: "谈谈知行合一的重要性，以及你如何践行自己的信念。", difficulty: "medium" },
    { word: "隽永", pos: "形容词", def: "意味深长，经久不衰", sentence: "这篇散文语言隽永，值得反复品味。", angle: "推荐一部你认为具有隽永价值的作品，并说明原因。", difficulty: "medium" },
    { word: "权衡", pos: "动词", def: "比较各方面的利弊得失", sentence: "在做决定之前，你需要权衡各种因素。", angle: "讨论在效率和公平之间如何权衡。", difficulty: "medium" },
    { word: "素养", pos: "名词", def: "通过学习和实践获得的知识和能力", sentence: "提高公民的科学素养是教育的重要任务。", angle: "谈谈你认为现代人最需要具备的一种素养是什么。", difficulty: "medium" },
    { word: "洞察", pos: "动词", def: "深入观察和理解事物的本质", sentence: "优秀的领导者需要具备敏锐的洞察力。", angle: "分享一次你通过洞察发现了别人没有注意到的问题的经历。", difficulty: "medium" },
    { word: "审视", pos: "动词", def: "仔细地观察和检查", sentence: "我们需要重新审视这个计划的可行性。", angle: "谈谈定期审视自己的生活和选择有多重要。", difficulty: "medium" },
    { word: "磅礴", pos: "形容词", def: "气势盛大，规模宏伟", sentence: "站在山顶，眼前的景色气势磅礴。", angle: "描述一次让你感受到大自然磅礴力量的经历。", difficulty: "medium" },
    { word: "凝聚", pos: "动词", def: "聚集集中，使分散的力量团结在一起", sentence: "这个项目凝聚了整个团队的心血。", angle: "讨论什么样的因素能够凝聚一群人的力量。", difficulty: "medium" },
    { word: "沉浸", pos: "动词", def: "全身心投入某种状态或活动中", sentence: "她完全沉浸在音乐的世界里。", angle: "谈谈你最容易沉浸其中的活动，以及这种沉浸感带给你什么。", difficulty: "medium" },
    { word: "辩证", pos: "形容词", def: "用对立统一的观点分析事物", sentence: "我们要辩证地看待科技发展带来的利弊。", angle: "选择一个热门话题，用辩证的角度来分析它的两面性。", difficulty: "medium" },
    { word: "韧性", pos: "名词", def: "经受挫折而不屈服的坚强品质", sentence: "成功的创业者往往具有很强的韧性。", angle: "谈谈韧性和顽固之间的界限在哪里。", difficulty: "medium" },
    { word: "共识", pos: "名词", def: "经过讨论后达成的一致意见", sentence: "团队成员经过讨论终于达成了共识。", angle: "讨论在多元化社会中达成共识为什么越来越困难。", difficulty: "medium" },
    { word: "格调", pos: "名词", def: "风格和品位的高低", sentence: "这家餐厅的装修很有格调。", angle: "谈谈格调是否等同于高消费，普通人如何提升生活格调。", difficulty: "medium" },
    { word: "蜕变", pos: "名词", def: "像蜕皮一样发生本质性的改变", sentence: "经过一年的努力，她完成了从新手到专家的蜕变。", angle: "分享你经历过的一次蜕变，以及触发这种变化的关键因素。", difficulty: "medium" },
    { word: "淬炼", pos: "动词", def: "经过反复锤炼使之更加精良", sentence: "这部小说经过多年的淬炼，终于出版了。", angle: "讨论一个技能或作品需要多长时间的淬炼才能达到巅峰。", difficulty: "medium" },
    { word: "积淀", pos: "名词", def: "长期积累沉淀下来的经验或文化", sentence: "这座城市有着深厚的历史文化积淀。", angle: "谈谈文化积淀对一个民族或城市意味着什么。", difficulty: "medium" },
    { word: "裨益", pos: "名词", def: "益处，好处", sentence: "阅读经典文学对提高写作能力大有裨益。", angle: "推荐一项对个人成长大有裨益的习惯。", difficulty: "medium" },
    { word: "研磨", pos: "动词", def: "反复打磨，精心雕琢", sentence: "每一件精品都是工匠用心研磨出来的。", angle: "谈谈在快节奏的时代，慢工出细活的精神是否还有价值。", difficulty: "medium" },
    { word: "彰显", pos: "动词", def: "明显地表现和展示出来", sentence: "他的行为彰显了一个企业家的社会责任感。", angle: "讨论一个人应该通过什么方式来彰显自己的价值。", difficulty: "medium" },
    { word: "颠覆", pos: "动词", def: "从根本上推翻和改变", sentence: "这项技术颠覆了传统的商业模式。", angle: "谈谈一项颠覆了你认知的发现或经历。", difficulty: "medium" },
    { word: "悖论", pos: "名词", def: "看似矛盾但可能包含真理的说法", sentence: "选择越多反而越不幸福，这是一个有趣的悖论。", angle: "讨论一个你在生活中发现的悖论现象。", difficulty: "medium" },
    { word: "博弈", pos: "名词", def: "各方之间的策略性竞争和较量", sentence: "国际贸易本质上是各国之间的博弈。", angle: "谈谈日常生活中存在的博弈现象。", difficulty: "medium" },
    { word: "嬗变", pos: "名词", def: "事物逐渐发生的演变和转化", sentence: "社会观念在过去几十年间发生了巨大的嬗变。", angle: "讨论你所见证的一种社会观念的嬗变。", difficulty: "medium" },
    { word: "恪守", pos: "动词", def: "严格遵守，不违背", sentence: "他一直恪守着自己的职业道德。", angle: "谈谈在利益面前恪守原则有多难，以及为什么值得坚持。", difficulty: "medium" },
    { word: "笃行", pos: "动词", def: "切实地实行，坚定地执行", sentence: "知识不仅要学，更重要的是笃行。", angle: "讨论为什么很多人知道道理却做不到笃行。", difficulty: "medium" },
    { word: "潜移默化", pos: "动词", def: "不知不觉中受到影响而发生变化", sentence: "环境对一个人的影响是潜移默化的。", angle: "谈谈某个人或环境是如何潜移默化地影响了你。", difficulty: "medium" },
    { word: "兼容", pos: "动词", def: "同时包容不同的事物或观点", sentence: "一个好的制度应该能兼容多元的价值观。", angle: "讨论在个人生活中如何兼容工作与兴趣。", difficulty: "medium" },
    { word: "厚重", pos: "形容词", def: "深沉有分量，不轻浮", sentence: "这座古城有着厚重的历史底蕴。", angle: "谈谈你觉得什么样的人或事物可以用厚重来形容。", difficulty: "medium" },
    { word: "沉稳", pos: "形容词", def: "沉着稳重，不慌张", sentence: "面对突发状况，他表现得非常沉稳。", angle: "讨论如何在压力下保持沉稳的心态。", difficulty: "medium" },
    { word: "辐射", pos: "动词", def: "从中心向四周扩展和影响", sentence: "上海的经济发展辐射到了周边城市。", angle: "谈谈一个人的影响力是如何辐射到他身边的人的。", difficulty: "medium" },
    { word: "自省", pos: "动词", def: "自我检查和反思", sentence: "每天花一点时间自省，能让人不断进步。", angle: "讨论自省和自我批评之间的区别。", difficulty: "medium" },
    { word: "拓展", pos: "动词", def: "开拓和扩展范围或领域", sentence: "公司计划拓展海外市场。", angle: "谈谈你如何拓展自己的能力边界。", difficulty: "medium" },
    { word: "稳健", pos: "形容词", def: "稳定而又有力，不冒进", sentence: "他以稳健的风格管理着整个部门。", angle: "讨论在创新和稳健之间如何找到平衡。", difficulty: "medium" },
    { word: "凝练", pos: "形容词", def: "精练集中，简洁有力", sentence: "他的文字凝练而富有力量。", angle: "谈谈凝练的表达为什么比冗长的描述更有力。", difficulty: "medium" },
    { word: "深谙", pos: "动词", def: "非常了解和精通", sentence: "她深谙人际交往的艺术。", angle: "谈谈你深谙的一个领域，以及你是如何精通它的。", difficulty: "medium" },
    { word: "遵循", pos: "动词", def: "依照某种规则或准则行事", sentence: "科学研究必须遵循严格的方法论。", angle: "讨论何时应该遵循规则，何时应该打破规则。", difficulty: "medium" },
    { word: "奠基", pos: "动词", def: "打下基础，建立根基", sentence: "这项研究为后来的发展奠定了基础。", angle: "谈谈什么经历为你今天的成功奠定了基础。", difficulty: "medium" },
    { word: "精粹", pos: "名词", def: "精华和精髓", sentence: "这部作品集中了传统文化的精粹。", angle: "讨论你认为中国文化的精粹是什么。", difficulty: "medium" },
    { word: "赋予", pos: "动词", def: "给予某种权利、意义或特征", sentence: "这个角色被赋予了丰富的情感层次。", angle: "谈谈经历如何赋予平凡事物以特殊意义。", difficulty: "medium" },
    { word: "根植", pos: "动词", def: "深深扎根于某处", sentence: "这种文化传统已经根植于人们的生活中。", angle: "讨论有哪些观念根植在你的思想中，影响着你的决策。", difficulty: "medium" },
    { word: "流变", pos: "名词", def: "随时间推移而发生的变化和演进", sentence: "语言的流变反映了社会的发展。", angle: "谈谈你观察到的某种文化或习惯的流变。", difficulty: "medium" },

    // ========================
    // HARD (50 words)
    // ========================
    { word: "醍醐灌顶", pos: "动词", def: "比喻灌输智慧，使人彻底觉悟", sentence: "听了他的一番话，我如醍醐灌顶，豁然开朗。", angle: "分享一次让你醍醐灌顶的经历或道理。", difficulty: "hard" },
    { word: "高屋建瓴", pos: "形容词", def: "比喻居高临下，形势不可阻挡；也指见解高远", sentence: "他的分析高屋建瓴，把握住了问题的关键。", angle: "讨论为什么领导者需要高屋建瓴的视野。", difficulty: "hard" },
    { word: "鞭辟入里", pos: "形容词", def: "形容分析透彻，深入到事物的核心", sentence: "他的评论鞭辟入里，令人信服。", angle: "谈谈你读过的一篇鞭辟入里的分析文章。", difficulty: "hard" },
    { word: "殚精竭虑", pos: "动词", def: "用尽精力和心思", sentence: "他为这个项目殚精竭虑，终于取得了成功。", angle: "讨论殚精竭虑和过度劳累之间的界限。", difficulty: "hard" },
    { word: "矫枉过正", pos: "动词", def: "纠正错误超过了应有的限度", sentence: "管理制度改革不能矫枉过正，否则会引发新的问题。", angle: "举例说明社会中矫枉过正的现象。", difficulty: "hard" },
    { word: "窥斑见豹", pos: "动词", def: "从局部可以推知全貌", sentence: "从这件小事就能窥斑见豹，看出公司的管理水平。", angle: "分享一个你通过小事窥斑见豹的经历。", difficulty: "hard" },
    { word: "未雨绸缪", pos: "动词", def: "事先做好准备，防患于未然", sentence: "聪明的投资者懂得未雨绸缪。", angle: "谈谈在你的生活中，未雨绸缪的意识何时帮助了你。", difficulty: "hard" },
    { word: "鳞次栉比", pos: "形容词", def: "像鱼鳞和梳齿那样密密排列", sentence: "城市中高楼大厦鳞次栉比。", angle: "描述一个鳞次栉比的城市景象，并谈谈它给你的感受。", difficulty: "hard" },
    { word: "举重若轻", pos: "形容词", def: "做繁难的事情却显得很轻松", sentence: "他处理复杂事务时举重若轻，令人佩服。", angle: "讨论举重若轻的能力是如何培养出来的。", difficulty: "hard" },
    { word: "厚积薄发", pos: "动词", def: "经过长期积累后突然爆发出巨大力量", sentence: "他的成功看似突然，其实是多年厚积薄发的结果。", angle: "谈谈厚积薄发与急功近利的对比。", difficulty: "hard" },
    { word: "振聋发聩", pos: "形容词", def: "声音大得使聋人都能听见，比喻言论惊人", sentence: "鲁迅的文章在当时可谓振聋发聩。", angle: "谈谈在当今社会什么样的声音能够振聋发聩。", difficulty: "hard" },
    { word: "运筹帷幄", pos: "动词", def: "在后方策划谋略，指挥全局", sentence: "作为总指挥，他运筹帷幄，决胜千里。", angle: "讨论运筹帷幄需要什么样的能力和素质。", difficulty: "hard" },
    { word: "见微知著", pos: "动词", def: "从细微的征兆就能看出事物发展的趋势", sentence: "优秀的分析师能够见微知著，提前预判市场变化。", angle: "分享一次你见微知著的经历。", difficulty: "hard" },
    { word: "淋漓尽致", pos: "副词", def: "形容表现得非常充分彻底", sentence: "她在演讲中把自己的观点表达得淋漓尽致。", angle: "描述一次你将某项能力发挥得淋漓尽致的经历。", difficulty: "hard" },
    { word: "深入浅出", pos: "形容词", def: "内容深刻但表达通俗易懂", sentence: "这位教授讲课深入浅出，学生们都很喜欢。", angle: "讨论深入浅出的表达能力为什么如此珍贵。", difficulty: "hard" },
    { word: "旁征博引", pos: "动词", def: "广泛引用各种材料作为论证依据", sentence: "他的论文旁征博引，论证非常有力。", angle: "谈谈旁征博引的能力对学术研究有多重要。", difficulty: "hard" },
    { word: "入木三分", pos: "形容词", def: "比喻分析或描写深刻透彻", sentence: "他对人物性格的刻画入木三分。", angle: "推荐一部你认为刻画人物入木三分的作品。", difficulty: "hard" },
    { word: "推陈出新", pos: "动词", def: "去除旧的，创造新的", sentence: "传统手艺需要在传承中推陈出新。", angle: "讨论如何在保留传统的同时推陈出新。", difficulty: "hard" },
    { word: "砥砺前行", pos: "动词", def: "经受磨炼，奋勇前进", sentence: "面对种种困难，我们仍要砥砺前行。", angle: "谈谈什么力量支撑你在困境中砥砺前行。", difficulty: "hard" },
    { word: "兼收并蓄", pos: "动词", def: "广泛吸收各种不同的事物", sentence: "中华文化的特点之一就是兼收并蓄。", angle: "讨论兼收并蓄的文化态度有什么优势和风险。", difficulty: "hard" },
    { word: "以偏概全", pos: "动词", def: "用片面的观点概括全部", sentence: "我们不能以偏概全地评价一个人。", angle: "举例说明以偏概全的思维方式造成的误解。", difficulty: "hard" },
    { word: "匠心独运", pos: "形容词", def: "独创性地运用巧妙的心思", sentence: "这座建筑的设计匠心独运，令人叹为观止。", angle: "谈谈你见过的匠心独运的设计或作品。", difficulty: "hard" },
    { word: "曲高和寡", pos: "形容词", def: "作品或言论太高深，能理解的人很少", sentence: "这部实验电影虽然艺术价值很高，但曲高和寡。", angle: "讨论艺术是否应该追求大众化还是坚持曲高和寡。", difficulty: "hard" },
    { word: "一以贯之", pos: "副词", def: "用一个基本原则贯穿始终", sentence: "他对品质的追求一以贯之。", angle: "谈谈你人生中一以贯之的原则是什么。", difficulty: "hard" },
    { word: "寥寥", pos: "形容词", def: "形容数量极少", sentence: "能真正理解他思想的人寥寥无几。", angle: "讨论为什么真正深刻的思想往往只有寥寥数人能理解。", difficulty: "hard" },
    { word: "睿智", pos: "形容词", def: "聪明而有远见", sentence: "她以睿智的眼光预见了行业的变化。", angle: "谈谈你遇到的最睿智的人给你留下了什么印象。", difficulty: "hard" },
    { word: "笃信", pos: "动词", def: "忠实而深切地相信", sentence: "他笃信教育是改变命运的唯一途径。", angle: "谈谈你笃信的一个信念，以及是什么让你如此确信。", difficulty: "hard" },
    { word: "冗赘", pos: "形容词", def: "多余而累赘，不简洁", sentence: "这篇文章语言冗赘，需要大幅修改。", angle: "讨论在写作和表达中如何避免冗赘。", difficulty: "hard" },
    { word: "恣意", pos: "副词", def: "放纵自己，不加约束", sentence: "年轻时的恣意挥霍让他后来追悔莫及。", angle: "讨论恣意的生活和自律的生活各有什么利弊。", difficulty: "hard" },
    { word: "赓续", pos: "动词", def: "继续延续，接续不断", sentence: "我们有责任赓续中华文明的优秀传统。", angle: "谈谈当代人如何赓续传统文化的精神。", difficulty: "hard" },
    { word: "缜密", pos: "形容词", def: "细致周到，没有疏漏", sentence: "他的推理过程非常缜密，无懈可击。", angle: "讨论缜密的思维对于科学研究有多重要。", difficulty: "hard" },
    { word: "锲而不舍", pos: "动词", def: "不停地雕刻，比喻坚持不懈", sentence: "正是锲而不舍的精神让他攻克了这个难题。", angle: "分享一次你锲而不舍最终成功的经历。", difficulty: "hard" },
    { word: "游刃有余", pos: "形容词", def: "比喻技术熟练，做事轻松自如", sentence: "多年经验让她处理这类问题游刃有余。", angle: "谈谈你在哪个领域已经能够游刃有余。", difficulty: "hard" },
    { word: "掣肘", pos: "动词", def: "拉住胳膊，比喻从旁阻碍或牵制", sentence: "部门间的矛盾严重掣肘了项目的推进。", angle: "讨论工作中被掣肘时应该如何应对。", difficulty: "hard" },
    { word: "桎梏", pos: "名词", def: "束缚手脚的刑具，比喻束缚和限制", sentence: "他终于冲破了传统观念的桎梏。", angle: "谈谈什么样的桎梏最难突破，以及如何做到。", difficulty: "hard" },
    { word: "肇始", pos: "动词", def: "最初发生，开始起源", sentence: "这场运动肇始于一群年轻学者的讨论。", angle: "讨论伟大变革往往肇始于看似微小的事件。", difficulty: "hard" },
    { word: "踯躅", pos: "动词", def: "徘徊不前，犹豫不决", sentence: "他在人生的十字路口踯躅良久。", angle: "谈谈踯躅不前时应该如何找到前进的方向。", difficulty: "hard" },
    { word: "赅博", pos: "形容词", def: "学识渊博而详尽", sentence: "他的知识赅博，涉猎广泛。", angle: "讨论在专精和赅博之间应该如何选择。", difficulty: "hard" },
    { word: "洞若观火", pos: "形容词", def: "看得非常清楚，如同看火一样明白", sentence: "他对局势洞若观火，早已料到了这个结果。", angle: "谈谈什么样的经验能让人对事物洞若观火。", difficulty: "hard" },
    { word: "浮光掠影", pos: "名词", def: "比喻印象不深刻，对事物观察不仔细", sentence: "如果只是浮光掠影地看一看，是无法理解这部作品的。", angle: "讨论为什么很多人对事物的了解只停留在浮光掠影的层面。", difficulty: "hard" },
    { word: "殊途同归", pos: "形容词", def: "通过不同的途径达到相同的目的", sentence: "虽然方法不同，但最终殊途同归。", angle: "举例说明殊途同归在哪些领域特别明显。", difficulty: "hard" },
    { word: "纷繁芜杂", pos: "形容词", def: "事物多而杂乱，缺乏条理", sentence: "面对纷繁芜杂的信息，我们需要独立思考。", angle: "谈谈在信息纷繁芜杂的时代如何保持清醒的判断力。", difficulty: "hard" },
    { word: "鸿篇巨制", pos: "名词", def: "规模宏大的作品", sentence: "这部纪录片堪称鸿篇巨制。", angle: "讨论一部你认为称得上鸿篇巨制的作品。", difficulty: "hard" },
    { word: "返璞归真", pos: "动词", def: "回复到事物的本来面目或原始状态", sentence: "经历了繁华之后，他选择了返璞归真的生活。", angle: "讨论现代人为什么越来越渴望返璞归真。", difficulty: "hard" },
    { word: "微言大义", pos: "名词", def: "精微的语言中蕴含着深远的道理", sentence: "经典作品往往微言大义，需要细细品读。", angle: "分享一句你认为微言大义的话，并解释它的深层含义。", difficulty: "hard" },
    { word: "删繁就简", pos: "动词", def: "删去繁杂的部分，保留简要的内容", sentence: "写作的最高境界是删繁就简。", angle: "谈谈删繁就简的哲学如何应用到生活中。", difficulty: "hard" },
    { word: "醉心", pos: "动词", def: "对某事极度着迷和投入", sentence: "他一生醉心于古典音乐的研究。", angle: "谈谈你醉心于什么事物，以及这种热爱带给你什么。", difficulty: "hard" },
    { word: "通衢", pos: "名词", def: "四通八达的道路，大路", sentence: "这条路是连接南北的交通通衢。", angle: "以通衢为比喻，谈谈人生中的重要通道或转折点。", difficulty: "hard" },
    { word: "耳濡目染", pos: "动词", def: "经常听到看到而不知不觉受到影响", sentence: "在音乐世家长大，他从小耳濡目染。", angle: "谈谈你在成长过程中耳濡目染受到了什么影响。", difficulty: "hard" },
    { word: "韬光养晦", pos: "动词", def: "隐藏才能锋芒，暗中积蓄力量", sentence: "有时候韬光养晦比锋芒毕露更有智慧。", angle: "讨论在竞争激烈的环境中韬光养晦是否明智。", difficulty: "hard" }
];

// Derived arrays with Zh suffix

var vocabEasyZh = [];
var vocabMediumZh = [];
var vocabHardZh = [];
for (var i = 0; i < vocabularyWordsZh.length; i++) {
    if (vocabularyWordsZh[i].difficulty === 'easy') vocabEasyZh.push(vocabularyWordsZh[i].word);
    else if (vocabularyWordsZh[i].difficulty === 'medium') vocabMediumZh.push(vocabularyWordsZh[i].word);
    else if (vocabularyWordsZh[i].difficulty === 'hard') vocabHardZh.push(vocabularyWordsZh[i].word);
}

// Flat string array (all words) for the spinner
var vocabAllStringsZh = [];
for (var i = 0; i < vocabularyWordsZh.length; i++) {
    vocabAllStringsZh.push(vocabularyWordsZh[i].word);
}

// Lookup map: word -> { pos, def, angle, sentence }
var vocabDefinitionMapZh = {};
for (var i = 0; i < vocabularyWordsZh.length; i++) {
    var w = vocabularyWordsZh[i];
    vocabDefinitionMapZh[w.word] = { pos: w.pos, def: w.def, angle: w.angle, sentence: w.sentence };
}
