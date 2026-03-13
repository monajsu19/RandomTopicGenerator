// Learn Vocabulary (Korean) — 150 words (50 easy, 50 medium, 50 hard)
// Each entry: { word, pos, def, sentence, angle, difficulty }

var vocabularyWordsKo = [
    // ========================
    // EASY (50 words)
    // ========================
    { word: "그리움", pos: "명사", def: "만나고 싶거나 돌아가고 싶은 마음이 간절한 느낌", sentence: "고향을 떠나 살다 보니 가족에 대한 그리움이 깊어졌다.", angle: "그리움이라는 감정이 우리 삶에서 어떤 의미를 갖는지, 그리움의 대상에 대해 이야기해 보세요.", difficulty: "easy" },
    { word: "보람", pos: "명사", def: "노력한 결과로 얻는 뿌듯한 느낌이나 가치", sentence: "봉사활동을 마치고 나니 보람을 느낄 수 있었다.", angle: "보람을 느꼈던 경험을 떠올리며, 보람이란 무엇인지 이야기해 보세요.", difficulty: "easy" },
    { word: "정성", pos: "명사", def: "마음을 다하여 힘쓰는 참된 성의", sentence: "어머니는 늘 정성을 담아 음식을 만들어 주셨다.", angle: "정성이 담긴 행동과 그렇지 않은 행동의 차이를 구체적인 예를 들어 설명해 보세요.", difficulty: "easy" },
    { word: "따뜻하다", pos: "형용사", def: "온도가 알맞게 높다; 마음이 푸근하고 다정하다", sentence: "추운 겨울날 따뜻한 말 한마디가 큰 위로가 되었다.", angle: "따뜻한 말이나 행동이 사람에게 미치는 영향에 대해 이야기해 보세요.", difficulty: "easy" },
    { word: "어울리다", pos: "동사", def: "서로 잘 맞거나 조화를 이루다", sentence: "그 두 사람은 성격이 달라도 참 잘 어울린다.", angle: "서로 다른 것들이 어울릴 때 생기는 아름다움에 대해 이야기해 보세요.", difficulty: "easy" },
    { word: "넉넉하다", pos: "형용사", def: "양이 충분하거나 마음이 너그럽다", sentence: "시간이 넉넉하니 서두르지 말고 천천히 준비하자.", angle: "넉넉한 마음을 갖는 것이 일상에서 왜 중요한지 이야기해 보세요.", difficulty: "easy" },
    { word: "다짐", pos: "명사", def: "마음속으로 굳게 결심함, 또는 그 결심", sentence: "새해를 맞아 건강을 챙기겠다는 다짐을 했다.", angle: "다짐을 지키기 어려운 이유와 이를 극복하는 방법에 대해 이야기해 보세요.", difficulty: "easy" },
    { word: "배려", pos: "명사", def: "다른 사람의 처지를 헤아려 도와주거나 돌보아 줌", sentence: "작은 배려 하나가 관계를 크게 변화시킬 수 있다.", angle: "일상에서 실천할 수 있는 배려의 구체적인 예를 들어 보세요.", difficulty: "easy" },
    { word: "소중하다", pos: "형용사", def: "매우 귀하고 중요하다", sentence: "건강이 얼마나 소중한지 아프고 나서야 깨달았다.", angle: "잃어본 뒤에야 소중함을 깨달은 경험에 대해 이야기해 보세요.", difficulty: "easy" },
    { word: "뿌듯하다", pos: "형용사", def: "마음에 흐뭇하고 흡족한 느낌이 있다", sentence: "오랜 노력 끝에 시험에 합격하니 뿌듯했다.", angle: "가장 뿌듯했던 순간을 떠올리며 그 느낌을 묘사해 보세요.", difficulty: "easy" },
    { word: "겸손", pos: "명사", def: "남을 존중하고 자기를 내세우지 않는 태도", sentence: "성공한 사람일수록 겸손한 태도를 보이는 경우가 많다.", angle: "겸손과 자신감 사이의 균형을 어떻게 유지할 수 있는지 이야기해 보세요.", difficulty: "easy" },
    { word: "든든하다", pos: "형용사", def: "마음이 놓이고 믿음직하다", sentence: "가족이 옆에 있다는 것만으로도 마음이 든든하다.", angle: "든든함을 느끼게 해주는 사람이나 경험에 대해 이야기해 보세요.", difficulty: "easy" },
    { word: "성실하다", pos: "형용사", def: "정성스럽고 참되며 꾸준하다", sentence: "그는 성실하게 일해서 주변의 신뢰를 얻었다.", angle: "성실함이 재능보다 중요할 수 있는 이유를 실제 사례를 들어 설명해 보세요.", difficulty: "easy" },
    { word: "아끼다", pos: "동사", def: "소중히 여기다; 절약하다", sentence: "부모님께서는 항상 자식을 아끼며 키워 주셨다.", angle: "아끼는 마음과 집착의 차이에 대해 이야기해 보세요.", difficulty: "easy" },
    { word: "정", pos: "명사", def: "사람 사이에 오가는 따뜻한 감정이나 애착", sentence: "오래 살던 동네를 떠나려니 정이 들어 아쉬웠다.", angle: "한국 문화에서 '정'이 갖는 독특한 의미와 역할에 대해 이야기해 보세요.", difficulty: "easy" },
    { word: "꾸준히", pos: "부사", def: "변함없이 한결같이 계속하여", sentence: "꾸준히 운동한 덕분에 건강이 많이 좋아졌다.", angle: "꾸준함의 힘에 대해 본인의 경험을 바탕으로 이야기해 보세요.", difficulty: "easy" },
    { word: "나누다", pos: "동사", def: "함께 쓰거나 갈라서 갖다; 이야기를 주고받다", sentence: "이웃과 음식을 나누며 친해졌다.", angle: "나눔이 주는 기쁨과 그 사회적 의미에 대해 이야기해 보세요.", difficulty: "easy" },
    { word: "극복", pos: "명사", def: "어려움이나 장애를 이겨 냄", sentence: "어려움을 극복한 경험이 나를 더 강하게 만들었다.", angle: "인생에서 극복해야 했던 도전과 그 과정에서 배운 점을 이야기해 보세요.", difficulty: "easy" },
    { word: "설레다", pos: "동사", def: "기대감이나 흥분으로 마음이 가만있지 못하다", sentence: "여행 전날이면 늘 마음이 설렌다.", angle: "최근에 설렜던 경험을 떠올리며 그 감정을 표현해 보세요.", difficulty: "easy" },
    { word: "다양하다", pos: "형용사", def: "종류나 모양이 여러 가지로 많다", sentence: "다양한 경험을 해 보는 것이 시야를 넓혀 준다.", angle: "다양성이 왜 중요한지 사회적 관점에서 이야기해 보세요.", difficulty: "easy" },
    { word: "후회", pos: "명사", def: "이전에 한 일이 잘못되었음을 뒤늦게 뉘우침", sentence: "그때 도전하지 않았던 것이 가장 큰 후회로 남아 있다.", angle: "후회를 줄이는 삶의 방식에 대해 이야기해 보세요.", difficulty: "easy" },
    { word: "용기", pos: "명사", def: "겁이나 두려움을 이기고 씩씩하게 나아가는 마음", sentence: "용기를 내어 먼저 사과했더니 관계가 회복되었다.", angle: "용기가 필요했던 순간과 그 결과에 대해 이야기해 보세요.", difficulty: "easy" },
    { word: "어색하다", pos: "형용사", def: "자연스럽지 못하고 서투르거나 낯설다", sentence: "오랜만에 만난 친구 사이에 어색한 분위기가 흘렀다.", angle: "어색한 상황을 자연스럽게 풀어가는 나만의 방법을 이야기해 보세요.", difficulty: "easy" },
    { word: "노력", pos: "명사", def: "목적을 이루기 위하여 힘을 들이고 애를 씀", sentence: "끊임없는 노력 없이 성공은 오지 않는다.", angle: "노력과 재능 중 어느 것이 더 중요한지 의견을 말해 보세요.", difficulty: "easy" },
    { word: "여유", pos: "명사", def: "넉넉하여 남음이 있음; 마음의 느긋함", sentence: "바쁜 일상 속에서도 여유를 찾는 것이 중요하다.", angle: "여유 있는 삶을 위해 어떤 것을 포기할 수 있는지 이야기해 보세요.", difficulty: "easy" },
    { word: "익숙하다", pos: "형용사", def: "자주 겪거나 해서 낯설지 않고 편하다", sentence: "새 환경에 익숙해지는 데 시간이 걸렸다.", angle: "익숙함이 주는 편안함과 새로움이 주는 자극 사이의 균형에 대해 이야기해 보세요.", difficulty: "easy" },
    { word: "믿음", pos: "명사", def: "어떤 것을 굳게 여기는 마음, 신뢰", sentence: "서로에 대한 믿음이 있어야 좋은 관계를 유지할 수 있다.", angle: "믿음이 깨진 경험과 다시 신뢰를 쌓아간 과정을 이야기해 보세요.", difficulty: "easy" },
    { word: "흐뭇하다", pos: "형용사", def: "마음에 흡족하고 기쁜 느낌이 있다", sentence: "아이가 건강하게 자라는 모습을 보니 흐뭇했다.", angle: "최근에 흐뭇한 감정을 느꼈던 순간을 떠올려 이야기해 보세요.", difficulty: "easy" },
    { word: "추억", pos: "명사", def: "지나간 일을 돌이켜 생각함, 또는 그 생각이나 일", sentence: "졸업 앨범을 보니 학창 시절 추억이 떠올랐다.", angle: "가장 소중한 추억을 하나 골라 그때의 감정과 함께 이야기해 보세요.", difficulty: "easy" },
    { word: "꿈", pos: "명사", def: "실현하고 싶은 희망이나 이상", sentence: "어릴 적 꿈은 변했지만 꿈을 꾸는 마음은 여전하다.", angle: "꿈을 이루기 위해 가장 중요한 것은 무엇인지 이야기해 보세요.", difficulty: "easy" },
    { word: "보살피다", pos: "동사", def: "관심을 갖고 돌보아 주다", sentence: "아픈 친구를 정성껏 보살펴 주었다.", angle: "누군가를 보살핀 경험이 자신에게 미친 영향을 이야기해 보세요.", difficulty: "easy" },
    { word: "정직하다", pos: "형용사", def: "마음에 거짓이나 꾸밈이 없이 바르고 곧다", sentence: "정직한 사람이 결국 신뢰를 얻는다.", angle: "정직함이 손해처럼 느껴질 때 어떻게 대처해야 하는지 이야기해 보세요.", difficulty: "easy" },
    { word: "고마움", pos: "명사", def: "남이 베풀어 준 호의나 도움에 대한 감사한 마음", sentence: "평소에 고마움을 표현하는 것이 관계를 더 깊게 만든다.", angle: "고마움을 제대로 표현하지 못했던 경험을 이야기해 보세요.", difficulty: "easy" },
    { word: "서두르다", pos: "동사", def: "일을 빨리 해치우려고 급히 행동하다", sentence: "서두르다 보면 실수하기 쉬우니 차분하게 하자.", angle: "서두름과 효율의 차이에 대해 이야기해 보세요.", difficulty: "easy" },
    { word: "포기", pos: "명사", def: "하던 일이나 생각을 중도에 그만둠", sentence: "포기하지 않고 끝까지 도전한 덕분에 결과를 얻었다.", angle: "포기해야 할 때와 견뎌야 할 때를 어떻게 구분하는지 이야기해 보세요.", difficulty: "easy" },
    { word: "반성", pos: "명사", def: "자신의 언행에 대하여 잘못이 없는지 돌이켜 봄", sentence: "실수한 후 진심으로 반성하고 행동을 바꾸었다.", angle: "반성이 성장으로 이어진 경험을 이야기해 보세요.", difficulty: "easy" },
    { word: "소박하다", pos: "형용사", def: "꾸밈이나 욕심이 없이 수수하다", sentence: "소박한 밥상이지만 정이 가득 담겨 있었다.", angle: "소박한 삶의 가치와 현대 사회의 과시 문화를 비교해 이야기해 보세요.", difficulty: "easy" },
    { word: "시도", pos: "명사", def: "어떤 것을 이루기 위해 행동을 해 봄", sentence: "실패하더라도 시도해 보는 것이 중요하다.", angle: "새로운 시도를 망설이게 되는 이유와 이를 극복하는 방법을 이야기해 보세요.", difficulty: "easy" },
    { word: "가꾸다", pos: "동사", def: "보살펴 좋은 상태가 되게 하다", sentence: "정원을 가꾸는 일이 마음의 안정을 준다.", angle: "관계, 건강, 재능 중 가장 정성껏 가꾸고 싶은 것에 대해 이야기해 보세요.", difficulty: "easy" },
    { word: "기대", pos: "명사", def: "어떤 일이 이루어지기를 바라며 기다림", sentence: "새 학기에 대한 기대와 걱정이 교차했다.", angle: "기대가 클수록 실망도 커지는 것에 대해 어떻게 생각하는지 이야기해 보세요.", difficulty: "easy" },
    { word: "변화", pos: "명사", def: "사물의 성질이나 모양이 달라짐", sentence: "작은 변화가 모여 큰 차이를 만들어 낸다.", angle: "인생에서 가장 큰 변화를 겪은 시기와 그 영향을 이야기해 보세요.", difficulty: "easy" },
    { word: "정돈", pos: "명사", def: "흐트러진 것을 바로잡아 가지런하게 함", sentence: "방을 정돈하고 나니 마음까지 깔끔해졌다.", angle: "물리적 정돈과 마음의 정리 사이의 관계에 대해 이야기해 보세요.", difficulty: "easy" },
    { word: "격려", pos: "명사", def: "용기나 의욕이 솟아나도록 북돋아 줌", sentence: "선생님의 격려 한마디가 인생의 방향을 바꾸었다.", angle: "격려가 큰 힘이 되었던 경험을 이야기해 보세요.", difficulty: "easy" },
    { word: "누리다", pos: "동사", def: "좋은 것을 마음껏 즐기거나 가지다", sentence: "자유를 누리기 위해서는 책임도 함께 져야 한다.", angle: "지금 누리고 있지만 당연하게 여기는 것들에 대해 이야기해 보세요.", difficulty: "easy" },
    { word: "헤아리다", pos: "동사", def: "상대의 마음이나 사정을 짐작하여 생각하다", sentence: "상대방의 마음을 헤아리는 것이 진정한 소통의 시작이다.", angle: "다른 사람의 마음을 헤아리기 어려웠던 경험을 이야기해 보세요.", difficulty: "easy" },
    { word: "솔직하다", pos: "형용사", def: "숨기거나 꾸밈이 없이 있는 그대로이다", sentence: "솔직하게 말해서 그 제안에 완전히 동의하지는 않는다.", angle: "솔직함과 무례함의 경계에 대해 이야기해 보세요.", difficulty: "easy" },
    { word: "뜻깊다", pos: "형용사", def: "의미나 보람이 크고 깊다", sentence: "가족과 함께한 졸업식은 정말 뜻깊은 행사였다.", angle: "가장 뜻깊었던 날을 떠올리며 그 의미를 이야기해 보세요.", difficulty: "easy" },
    { word: "갈등", pos: "명사", def: "서로 다른 의견이나 이해관계가 충돌하는 상태", sentence: "세대 간 갈등을 해소하려면 서로 이해하려는 노력이 필요하다.", angle: "갈등이 오히려 관계를 깊게 만든 경험이 있는지 이야기해 보세요.", difficulty: "easy" },
    { word: "미루다", pos: "동사", def: "해야 할 일을 뒤로 늦추다", sentence: "할 일을 자꾸 미루다 보면 결국 더 힘들어진다.", angle: "미루는 습관을 극복하기 위한 나만의 방법을 이야기해 보세요.", difficulty: "easy" },
    { word: "어른", pos: "명사", def: "다 자란 사람; 나이가 많아 공경을 받는 사람", sentence: "진정한 어른이란 나이가 아니라 태도에 달려 있다.", angle: "진정한 어른이란 어떤 사람인지 자신의 생각을 이야기해 보세요.", difficulty: "easy" },

    // ========================
    // MEDIUM (50 words)
    // ========================
    { word: "통찰", pos: "명사", def: "사물이나 현상의 본질을 꿰뚫어 봄", sentence: "그의 통찰력 있는 분석이 회의의 방향을 바꾸었다.", angle: "통찰력을 키우기 위해 어떤 노력이 필요한지 이야기해 보세요.", difficulty: "medium" },
    { word: "모색", pos: "명사", def: "일의 실마리나 해결 방법을 찾으려고 깊이 생각함", sentence: "위기 속에서 새로운 돌파구를 모색해야 한다.", angle: "해결책을 모색하는 과정에서 가장 중요한 태도에 대해 이야기해 보세요.", difficulty: "medium" },
    { word: "도모하다", pos: "동사", def: "어떤 일을 이루기 위해 대책과 방법을 세우다", sentence: "친목을 도모하기 위한 사내 행사를 기획했다.", angle: "좋은 결과를 도모하기 위해 계획을 세운 경험을 이야기해 보세요.", difficulty: "medium" },
    { word: "절실하다", pos: "형용사", def: "매우 간절하고 다급하다", sentence: "기후 변화에 대한 대응이 그 어느 때보다 절실하다.", angle: "절실한 마음이 행동으로 이어진 경험을 이야기해 보세요.", difficulty: "medium" },
    { word: "맥락", pos: "명사", def: "사물이나 사건이 서로 이어져 있는 관계나 흐름", sentence: "그 발언은 전체 맥락을 이해해야 제대로 해석할 수 있다.", angle: "맥락을 무시한 판단이 얼마나 위험할 수 있는지 이야기해 보세요.", difficulty: "medium" },
    { word: "시사하다", pos: "동사", def: "어떤 것을 미리 간접적으로 나타내 보이다", sentence: "이번 연구 결과는 교육 정책의 변화를 시사한다.", angle: "최근 사회 현상이 시사하는 바에 대해 이야기해 보세요.", difficulty: "medium" },
    { word: "취지", pos: "명사", def: "일이나 글의 근본적인 뜻이나 목적", sentence: "행사의 취지에 공감하여 많은 사람이 참여했다.", angle: "취지는 좋았지만 결과가 의도와 달랐던 사례를 이야기해 보세요.", difficulty: "medium" },
    { word: "역량", pos: "명사", def: "어떤 일을 해낼 수 있는 힘이나 능력", sentence: "개인의 역량을 키우는 것이 경쟁력의 핵심이다.", angle: "가장 키우고 싶은 역량이 무엇인지, 그 이유를 이야기해 보세요.", difficulty: "medium" },
    { word: "수반하다", pos: "동사", def: "어떤 일에 따르거나 함께 일어나다", sentence: "자유에는 항상 책임이 수반된다.", angle: "원하는 것을 얻기 위해 수반되는 대가에 대해 이야기해 보세요.", difficulty: "medium" },
    { word: "함양", pos: "명사", def: "학문이나 덕을 닦아 기르고 쌓아 올림", sentence: "인성 함양이 학교 교육의 핵심 목표가 되어야 한다.", angle: "어떤 덕목을 함양하는 것이 현대인에게 가장 필요한지 이야기해 보세요.", difficulty: "medium" },
    { word: "자초하다", pos: "동사", def: "자기가 원인이 되어 스스로 불러일으키다", sentence: "준비 부족으로 실패를 자초한 셈이 되었다.", angle: "스스로 문제를 자초한 경험에서 배운 교훈을 이야기해 보세요.", difficulty: "medium" },
    { word: "의의", pos: "명사", def: "어떤 사실이나 행위가 지니는 가치와 중요성", sentence: "이번 합의는 양측 간 신뢰를 회복했다는 점에서 큰 의의가 있다.", angle: "의의 있는 경험이 개인의 성장에 어떻게 기여하는지 이야기해 보세요.", difficulty: "medium" },
    { word: "간과하다", pos: "동사", def: "대수롭지 않게 보고 넘기다", sentence: "작은 신호를 간과한 것이 큰 사고로 이어졌다.", angle: "일상에서 흔히 간과하지만 중요한 것들에 대해 이야기해 보세요.", difficulty: "medium" },
    { word: "고취하다", pos: "동사", def: "사기나 의욕 따위를 북돋아 일으키다", sentence: "리더의 연설이 직원들의 사기를 고취했다.", angle: "사기를 고취하는 효과적인 방법에 대해 이야기해 보세요.", difficulty: "medium" },
    { word: "도약", pos: "명사", def: "높이 뛰어오름; 크게 발전함", sentence: "이번 계약은 회사의 도약을 위한 중요한 발판이 되었다.", angle: "도약을 위해 필요한 준비 과정에 대해 이야기해 보세요.", difficulty: "medium" },
    { word: "미덕", pos: "명사", def: "아름답고 훌륭한 덕행", sentence: "인내는 쉽게 얻어지지 않지만 가치 있는 미덕이다.", angle: "현대 사회에서 잊혀가는 미덕이 있다면 무엇인지 이야기해 보세요.", difficulty: "medium" },
    { word: "타당하다", pos: "형용사", def: "사리에 맞아 옳다", sentence: "그의 주장은 논리적으로 타당하여 반박하기 어려웠다.", angle: "타당한 근거를 바탕으로 설득했던 경험을 이야기해 보세요.", difficulty: "medium" },
    { word: "이바지하다", pos: "동사", def: "도움이 되도록 힘을 보태다", sentence: "지역 사회에 이바지하는 기업이 더 오래 살아남는다.", angle: "사회에 이바지하는 것이 개인에게도 도움이 되는 이유를 이야기해 보세요.", difficulty: "medium" },
    { word: "당부", pos: "명사", def: "간절하게 부탁하거나 타이름", sentence: "떠나기 전 부모님의 당부가 마음에 오래 남았다.", angle: "누군가에게 꼭 하고 싶은 당부의 말을 이야기해 보세요.", difficulty: "medium" },
    { word: "숙고하다", pos: "동사", def: "깊이 잘 생각하다", sentence: "중요한 결정은 충분히 숙고한 후에 내려야 한다.", angle: "숙고 끝에 내린 결정과 즉흥적 결정의 차이를 경험을 바탕으로 이야기해 보세요.", difficulty: "medium" },
    { word: "제고", pos: "명사", def: "수준이나 질을 더 높임", sentence: "국가 경쟁력 제고를 위한 교육 개혁이 필요하다.", angle: "삶의 질을 제고하기 위해 가장 먼저 바꿔야 할 것을 이야기해 보세요.", difficulty: "medium" },
    { word: "소양", pos: "명사", def: "평소에 닦아 쌓은 학식이나 교양", sentence: "기본적인 과학 소양은 현대인에게 필수적이다.", angle: "교양인으로서 갖춰야 할 기본 소양이 무엇인지 이야기해 보세요.", difficulty: "medium" },
    { word: "고찰", pos: "명사", def: "깊이 연구하고 살펴봄", sentence: "역사적 사건에 대한 깊은 고찰이 담긴 책이었다.", angle: "어떤 주제에 대해 깊이 고찰해 본 경험을 이야기해 보세요.", difficulty: "medium" },
    { word: "편견", pos: "명사", def: "공정하지 못하고 한쪽으로 치우친 생각", sentence: "편견을 깨기 위해서는 직접 경험해 보는 것이 중요하다.", angle: "자신이 가졌던 편견을 깨뜨린 경험을 이야기해 보세요.", difficulty: "medium" },
    { word: "귀감", pos: "명사", def: "본받을 만한 모범이 되는 대상", sentence: "그의 헌신적인 봉사 정신은 모든 이의 귀감이 된다.", angle: "귀감이 되는 인물을 한 명 선택하고 그 이유를 이야기해 보세요.", difficulty: "medium" },
    { word: "견디다", pos: "동사", def: "어려움이나 고통을 참고 버티다", sentence: "힘든 시기를 견디는 힘은 결국 마음에서 나온다.", angle: "견디기 어려운 상황에서 힘을 준 것이 무엇이었는지 이야기해 보세요.", difficulty: "medium" },
    { word: "두각", pos: "명사", def: "여럿 가운데 뛰어나게 드러남", sentence: "그는 입사 초기부터 두각을 나타내기 시작했다.", angle: "두각을 나타내기 위해 노력한 경험이나 관찰한 사례를 이야기해 보세요.", difficulty: "medium" },
    { word: "촉구하다", pos: "동사", def: "어떤 일을 빨리 하도록 재촉하고 요구하다", sentence: "시민 단체가 정부에 환경 정책 개선을 촉구했다.", angle: "사회적으로 촉구해야 할 변화가 있다면 무엇인지 이야기해 보세요.", difficulty: "medium" },
    { word: "소신", pos: "명사", def: "평소에 가지고 있는 자기만의 신념", sentence: "주변의 반대에도 소신을 지키며 결정을 내렸다.", angle: "소신을 지키는 것과 유연하게 적응하는 것 사이의 균형에 대해 이야기해 보세요.", difficulty: "medium" },
    { word: "풍토", pos: "명사", def: "어떤 지역의 기후와 토지 상태; 사회적 분위기", sentence: "자유로운 토론 풍토가 창의적인 조직을 만든다.", angle: "건강한 조직 풍토를 만들기 위해 가장 중요한 요소를 이야기해 보세요.", difficulty: "medium" },
    { word: "경시하다", pos: "동사", def: "가볍게 보아 업신여기다", sentence: "기본기를 경시하면 나중에 큰 대가를 치르게 된다.", angle: "흔히 경시되지만 실제로 매우 중요한 것들에 대해 이야기해 보세요.", difficulty: "medium" },
    { word: "사려", pos: "명사", def: "여러 가지를 깊이 생각하여 헤아림", sentence: "그녀는 사려 깊은 태도로 상대방의 입장을 고려했다.", angle: "사려 깊은 행동이 주변에 미친 영향에 대해 이야기해 보세요.", difficulty: "medium" },
    { word: "담대하다", pos: "형용사", def: "크게 대담하고 용감하다", sentence: "담대한 결단이 회사를 위기에서 구해냈다.", angle: "담대한 도전을 한 경험이나 담대함이 필요한 순간을 이야기해 보세요.", difficulty: "medium" },
    { word: "저해하다", pos: "동사", def: "막거나 방해하여 해를 끼치다", sentence: "과도한 규제가 혁신을 저해할 수 있다.", angle: "성장을 저해하는 요인을 파악하고 이를 극복한 경험을 이야기해 보세요.", difficulty: "medium" },
    { word: "지향하다", pos: "동사", def: "어떤 목표로 뜻이 쏠리어 향하다", sentence: "우리 사회는 지속 가능한 발전을 지향해야 한다.", angle: "인생에서 지향하는 가치가 무엇인지 이야기해 보세요.", difficulty: "medium" },
    { word: "자부심", pos: "명사", def: "자기 자신이나 자기와 관련된 것에 대한 긍지", sentence: "자기 일에 자부심을 가진 사람은 어디서든 빛이 난다.", angle: "자부심을 느끼는 것과 교만한 것의 차이를 이야기해 보세요.", difficulty: "medium" },
    { word: "여망", pos: "명사", def: "여러 사람의 바람이나 기대", sentence: "여망이 높았던 후보가 결국 당선되었다.", angle: "주변의 기대와 자신의 바람이 다를 때 어떻게 해야 하는지 이야기해 보세요.", difficulty: "medium" },
    { word: "파급", pos: "명사", def: "어떤 일의 영향이 차차 다른 데로 퍼져 나감", sentence: "그 사건의 파급 효과는 예상보다 훨씬 컸다.", angle: "작은 행동이 큰 파급 효과를 가져온 사례를 이야기해 보세요.", difficulty: "medium" },
    { word: "화합", pos: "명사", def: "화목하게 어울려 하나가 됨", sentence: "지역 간 화합을 위한 축제가 매년 열린다.", angle: "화합을 이루기 위해 가장 필요한 조건이 무엇인지 이야기해 보세요.", difficulty: "medium" },
    { word: "구현하다", pos: "동사", def: "생각이나 계획을 실제로 이루어 나타내다", sentence: "이상을 현실에서 구현하는 것이 가장 어려운 일이다.", angle: "아이디어를 구현하는 과정에서 겪은 도전을 이야기해 보세요.", difficulty: "medium" },
    { word: "역설", pos: "명사", def: "겉으로는 모순되지만 그 속에 진리를 담고 있는 말", sentence: "풍요 속의 빈곤이라는 역설이 현대 사회를 잘 설명한다.", angle: "삶에서 발견한 역설적인 진리에 대해 이야기해 보세요.", difficulty: "medium" },
    { word: "터득하다", pos: "동사", def: "경험이나 연습을 통해 스스로 깨달아 알다", sentence: "실패를 반복하면서 요령을 터득하게 되었다.", angle: "남에게 배운 것과 스스로 터득한 것의 차이를 이야기해 보세요.", difficulty: "medium" },
    { word: "관망하다", pos: "동사", def: "상황이 어떻게 될지 지켜보다", sentence: "시장이 불안정하여 투자자들이 관망하는 태도를 취하고 있다.", angle: "행동해야 할 때와 관망해야 할 때를 어떻게 구분하는지 이야기해 보세요.", difficulty: "medium" },
    { word: "부각되다", pos: "동사", def: "뚜렷하게 드러나거나 두드러지다", sentence: "고령화 문제가 사회적 이슈로 부각되고 있다.", angle: "최근 부각되고 있는 사회 문제와 그 원인을 이야기해 보세요.", difficulty: "medium" },
    { word: "아량", pos: "명사", def: "남의 잘못이나 부족함을 너그럽게 받아들이는 넓은 마음", sentence: "아량을 베풀 줄 아는 사람이 진정한 리더이다.", angle: "아량과 방임의 차이, 그리고 적절한 경계에 대해 이야기해 보세요.", difficulty: "medium" },
    { word: "필연적", pos: "형용사", def: "반드시 그렇게 될 수밖에 없는", sentence: "노력 없이 성장을 기대하는 것은 필연적으로 실패로 이어진다.", angle: "인생에서 필연적이라고 생각하는 것들이 있는지 이야기해 보세요.", difficulty: "medium" },
    { word: "도태되다", pos: "동사", def: "경쟁에서 뒤처져 밀려나다", sentence: "변화에 적응하지 못하면 도태될 수밖에 없다.", angle: "도태되지 않기 위해 어떤 노력을 하고 있는지 이야기해 보세요.", difficulty: "medium" },
    { word: "가치관", pos: "명사", def: "인생이나 사물에 대한 근본적인 판단 기준", sentence: "가치관이 다른 사람과도 존중하며 대화할 수 있어야 한다.", angle: "나의 가치관이 형성된 과정과 그 핵심을 이야기해 보세요.", difficulty: "medium" },
    { word: "공감", pos: "명사", def: "다른 사람의 감정이나 의견에 함께 느끼는 것", sentence: "공감 능력이 높은 사람이 좋은 리더가 될 수 있다.", angle: "공감이 어려웠던 상황과 이를 극복한 방법을 이야기해 보세요.", difficulty: "medium" },
    { word: "갈무리", pos: "명사", def: "거두어들이거나 정리하여 마무리함", sentence: "한 해를 갈무리하며 감사한 것들을 되돌아보았다.", angle: "무언가를 갈무리하는 과정이 왜 중요한지, 마무리의 의미를 이야기해 보세요.", difficulty: "medium" },

    // ========================
    // HARD (50 words)
    // ========================
    { word: "해박하다", pos: "형용사", def: "학식이나 지식이 매우 넓고 풍부하다", sentence: "그는 동양 철학에 해박하여 강의를 듣는 것이 즐거웠다.", angle: "한 분야에 해박한 것과 여러 분야를 폭넓게 아는 것 중 어느 쪽이 더 가치 있는지 이야기해 보세요.", difficulty: "hard" },
    { word: "선견지명", pos: "명사", def: "앞일을 미리 내다보는 밝은 지혜", sentence: "그의 선견지명 덕분에 회사는 위기를 피할 수 있었다.", angle: "선견지명을 가진 리더의 중요성과 미래를 내다보는 능력을 기르는 방법을 이야기해 보세요.", difficulty: "hard" },
    { word: "혜안", pos: "명사", def: "사물의 본질이나 이치를 꿰뚫어 보는 뛰어난 안목", sentence: "복잡한 문제를 단순하게 정리하는 그의 혜안이 놀라웠다.", angle: "혜안을 가진 사람의 특징과 그러한 안목을 키우는 방법을 이야기해 보세요.", difficulty: "hard" },
    { word: "사무치다", pos: "동사", def: "어떤 감정이 깊이 마음속에 스며들다", sentence: "고향을 떠난 후 외로움이 뼈에 사무쳤다.", angle: "마음에 사무치는 감정의 깊이와 그것이 삶에 미치는 영향을 이야기해 보세요.", difficulty: "hard" },
    { word: "불가피하다", pos: "형용사", def: "피할 수 없이 반드시 그렇게 되다", sentence: "경기 침체로 인한 구조 조정은 불가피한 선택이었다.", angle: "불가피한 결정을 내려야 했던 상황과 그 과정에서의 고뇌를 이야기해 보세요.", difficulty: "hard" },
    { word: "촌철살인", pos: "명사", def: "짧은 말로 핵심을 찌르듯이 정곡을 찌름", sentence: "그의 촌철살인 같은 한마디에 회의실이 조용해졌다.", angle: "촌철살인적인 말이 효과적인 경우와 위험한 경우를 비교하여 이야기해 보세요.", difficulty: "hard" },
    { word: "와신상담", pos: "명사", def: "원수를 갚거나 목표를 이루기 위해 온갖 고생을 견딤", sentence: "와신상담의 정신으로 10년간 연구에 매진한 끝에 성과를 거두었다.", angle: "와신상담의 자세가 현대인에게 시사하는 바를 이야기해 보세요.", difficulty: "hard" },
    { word: "감내하다", pos: "동사", def: "괴로움이나 어려움을 참고 견디어 내다", sentence: "성장을 위해서는 일정 수준의 고통을 감내해야 한다.", angle: "감내해야 하는 고통과 피해야 하는 고통을 어떻게 구분하는지 이야기해 보세요.", difficulty: "hard" },
    { word: "괴리", pos: "명사", def: "서로 동떨어져 있음, 차이가 벌어져 있음", sentence: "이상과 현실 사이의 괴리를 좁히는 것이 가장 큰 과제이다.", angle: "기대와 현실 사이의 괴리를 경험한 사례와 이를 극복한 방법을 이야기해 보세요.", difficulty: "hard" },
    { word: "반추하다", pos: "동사", def: "지나간 일을 되씹어 다시 생각하다", sentence: "지난 한 해를 반추하며 새해 계획을 세웠다.", angle: "과거를 반추하는 것이 미래를 준비하는 데 어떻게 도움이 되는지 이야기해 보세요.", difficulty: "hard" },
    { word: "미증유", pos: "명사", def: "이제까지 한 번도 있지 않았음", sentence: "미증유의 팬데믹 상황에서 인류는 새로운 도전에 직면했다.", angle: "미증유의 상황에서 인간이 보여주는 적응력에 대해 이야기해 보세요.", difficulty: "hard" },
    { word: "관조하다", pos: "동사", def: "고요한 마음으로 사물이나 현상의 본질을 바라보다", sentence: "한 발짝 물러서서 상황을 관조할 필요가 있다.", angle: "관조적 태도가 문제 해결에 도움이 되는 이유를 이야기해 보세요.", difficulty: "hard" },
    { word: "자성", pos: "명사", def: "자기 자신을 스스로 반성함", sentence: "사회 전체가 자성의 목소리를 내야 할 때이다.", angle: "개인적 자성과 사회적 자성의 중요성을 비교하여 이야기해 보세요.", difficulty: "hard" },
    { word: "숭고하다", pos: "형용사", def: "높고 거룩하여 감히 범할 수 없을 만큼 위대하다", sentence: "자기를 희생하며 남을 돕는 정신은 숭고하다.", angle: "숭고한 가치를 추구하는 것이 현실에서 얼마나 가능한지 이야기해 보세요.", difficulty: "hard" },
    { word: "궁여지책", pos: "명사", def: "막다른 상황에서 궁리 끝에 겨우 짜낸 방법", sentence: "궁여지책으로 마련한 방안이었지만 의외로 효과가 있었다.", angle: "궁여지책에서 오히려 창의적인 해결책이 탄생한 경험을 이야기해 보세요.", difficulty: "hard" },
    { word: "아이러니", pos: "명사", def: "예상이나 기대와 정반대되는 결과가 나타나는 상황", sentence: "평화를 위한 전쟁이라는 표현 자체가 아이러니이다.", angle: "인생에서 경험한 아이러니한 상황과 그로부터 얻은 깨달음을 이야기해 보세요.", difficulty: "hard" },
    { word: "부조리", pos: "명사", def: "이치에 맞지 않는 모순된 상태나 현상", sentence: "사회의 부조리에 맞서 싸우는 것이 시민의 의무이다.", angle: "부조리한 현실을 바꾸기 위해 개인이 할 수 있는 일을 이야기해 보세요.", difficulty: "hard" },
    { word: "일맥상통하다", pos: "동사", def: "서로 다른 것 같지만 근본적인 면에서 서로 통하다", sentence: "동서양의 철학은 겉은 달라도 핵심에서 일맥상통하는 점이 많다.", angle: "서로 관련 없어 보이는 두 개념이 일맥상통하는 사례를 찾아 이야기해 보세요.", difficulty: "hard" },
    { word: "유구하다", pos: "형용사", def: "오래되어 긴 세월이 지나다", sentence: "유구한 역사를 자랑하는 이 도시에는 곳곳에 문화유산이 남아 있다.", angle: "유구한 전통을 지키는 것과 새로운 변화를 받아들이는 것의 균형을 이야기해 보세요.", difficulty: "hard" },
    { word: "자괴감", pos: "명사", def: "자기 자신이 부끄럽고 한심한 느낌", sentence: "목표를 이루지 못했다는 자괴감에 한동안 힘들었다.", angle: "자괴감을 건설적인 동력으로 전환하는 방법을 이야기해 보세요.", difficulty: "hard" },
    { word: "점철되다", pos: "동사", def: "어떤 일이 계속 이어지거나 가득 차 있다", sentence: "그의 인생은 도전과 실패로 점철되었지만 결국 성공을 거두었다.", angle: "고난으로 점철된 시기가 나중에 어떤 의미를 갖게 되는지 이야기해 보세요.", difficulty: "hard" },
    { word: "온고지신", pos: "명사", def: "옛것을 익히고 그것을 통해 새것을 앎", sentence: "온고지신의 자세로 전통과 혁신의 조화를 추구해야 한다.", angle: "온고지신의 정신을 현대 사회에서 실천할 수 있는 방법을 이야기해 보세요.", difficulty: "hard" },
    { word: "천착하다", pos: "동사", def: "깊이 파고들어 연구하다", sentence: "하나의 주제에 천착하여 세계적인 전문가가 되었다.", angle: "한 분야에 천착하는 것의 가치와 위험성을 함께 이야기해 보세요.", difficulty: "hard" },
    { word: "편협하다", pos: "형용사", def: "생각이나 견해가 좁고 한쪽으로 치우쳐 있다", sentence: "편협한 시각으로는 복잡한 현대 사회를 이해할 수 없다.", angle: "편협한 사고를 넓히기 위해 가장 효과적인 방법을 이야기해 보세요.", difficulty: "hard" },
    { word: "회의적", pos: "형용사", def: "의심하는 태도를 가지고 쉽게 믿지 않는", sentence: "처음에는 회의적이었지만 직접 경험해 보니 생각이 달라졌다.", angle: "건강한 회의주의와 과도한 불신의 경계를 이야기해 보세요.", difficulty: "hard" },
    { word: "자양분", pos: "명사", def: "영양이 되는 성분; 성장이나 발전의 밑거름", sentence: "다양한 독서 경험이 사고의 자양분이 된다.", angle: "지적 성장의 자양분이 되는 활동에 대해 이야기해 보세요.", difficulty: "hard" },
    { word: "관용", pos: "명사", def: "남의 잘못을 너그러이 용서하거나 받아들임", sentence: "성숙한 사회일수록 관용의 정신이 살아 있다.", angle: "관용의 한계는 어디까지인지, 용서할 수 없는 것이 있는지 이야기해 보세요.", difficulty: "hard" },
    { word: "노정하다", pos: "동사", def: "드러내어 보이다", sentence: "이번 사건은 시스템의 구조적 문제점을 노정했다.", angle: "위기 상황이 숨겨진 문제를 노정한 사례를 이야기해 보세요.", difficulty: "hard" },
    { word: "묵과하다", pos: "동사", def: "잘못을 보고도 덮어두고 넘기다", sentence: "이런 비리를 묵과해서는 안 된다.", angle: "묵과하지 말아야 할 것과 넘어가야 할 것을 구분하는 기준을 이야기해 보세요.", difficulty: "hard" },
    { word: "척박하다", pos: "형용사", def: "땅이 기름지지 못하다; 환경이 열악하다", sentence: "척박한 환경에서도 꽃을 피우는 식물처럼 강인하게 살아가야 한다.", angle: "척박한 환경이 오히려 강한 의지를 키울 수 있는지 이야기해 보세요.", difficulty: "hard" },
    { word: "교착", pos: "명사", def: "서로 엇갈려 꼼짝 못하는 상태", sentence: "협상이 교착 상태에 빠져 진전이 없었다.", angle: "교착 상태를 돌파하기 위한 창의적인 방법을 이야기해 보세요.", difficulty: "hard" },
    { word: "탁월하다", pos: "형용사", def: "다른 것보다 뛰어나게 훌륭하다", sentence: "그의 탁월한 리더십이 팀을 성공으로 이끌었다.", angle: "탁월함은 타고나는 것인지 길러지는 것인지에 대해 이야기해 보세요.", difficulty: "hard" },
    { word: "안목", pos: "명사", def: "사물의 가치나 좋고 나쁨을 판단하는 능력", sentence: "안목이 높은 사람은 겉모습에 속지 않는다.", angle: "안목을 기르기 위해 필요한 경험과 태도를 이야기해 보세요.", difficulty: "hard" },
    { word: "표방하다", pos: "동사", def: "주의나 주장을 겉으로 드러내어 내세우다", sentence: "그 정당은 개혁을 표방했지만 실질적 변화는 미미했다.", angle: "표방하는 가치와 실제 행동 사이의 간극에 대해 이야기해 보세요.", difficulty: "hard" },
    { word: "건곤일척", pos: "명사", def: "운명을 걸고 단판으로 승부를 결정함", sentence: "건곤일척의 승부에서 마지막 한 수가 결과를 갈랐다.", angle: "건곤일척의 상황에서 필요한 정신력과 판단력을 이야기해 보세요.", difficulty: "hard" },
    { word: "고루하다", pos: "형용사", def: "생각이나 행동이 낡고 새로운 것에 어둡다", sentence: "고루한 사고방식에서 벗어나야 혁신이 가능하다.", angle: "고루한 관습을 타파한 사례와 그 과정에서의 저항을 이야기해 보세요.", difficulty: "hard" },
    { word: "심사숙고", pos: "명사", def: "깊이 잘 생각하고 또 생각함", sentence: "심사숙고 끝에 유학을 결심했다.", angle: "심사숙고의 과정이 중요한 이유와 과도한 고민의 함정을 이야기해 보세요.", difficulty: "hard" },
    { word: "매도하다", pos: "동사", def: "한쪽으로 몰아 심하게 비난하다", sentence: "충분한 근거 없이 남을 매도해서는 안 된다.", angle: "여론이 특정인을 매도하는 현상의 원인과 문제점을 이야기해 보세요.", difficulty: "hard" },
    { word: "자조적", pos: "형용사", def: "자기 자신을 비웃거나 조롱하는 태도의", sentence: "실패가 반복되자 자조적인 웃음이 나왔다.", angle: "자조적 태도가 자기 보호 수단인지 아니면 성장의 걸림돌인지 이야기해 보세요.", difficulty: "hard" },
    { word: "함축", pos: "명사", def: "겉으로 드러나지 않고 속에 담겨 있는 뜻", sentence: "그의 짧은 말에는 깊은 함축이 담겨 있었다.", angle: "함축적 표현이 직접적 표현보다 강력할 수 있는 이유를 이야기해 보세요.", difficulty: "hard" },
    { word: "퇴색하다", pos: "동사", def: "색이 바래다; 가치나 의미가 줄어들다", sentence: "시간이 흐르면서 그 약속의 의미가 퇴색했다.", angle: "한때 중요하게 여겨졌지만 퇴색한 가치에 대해 이야기해 보세요.", difficulty: "hard" },
    { word: "불문곡직", pos: "명사", def: "옳고 그름을 가리지 않음", sentence: "불문곡직하고 처벌하는 것은 공정하지 않다.", angle: "불문곡직의 태도가 가져오는 위험성을 구체적 사례로 이야기해 보세요.", difficulty: "hard" },
    { word: "자중하다", pos: "동사", def: "스스로 자기의 몸이나 행동을 삼가고 조심하다", sentence: "공인으로서 언행을 자중할 필요가 있다.", angle: "자중하는 태도가 필요한 상황과 그렇지 않은 상황을 비교해 이야기해 보세요.", difficulty: "hard" },
    { word: "유감없이", pos: "부사", def: "아쉬움 없이 충분하게, 남김없이", sentence: "그는 대회에서 실력을 유감없이 발휘했다.", angle: "자신의 능력을 유감없이 발휘하기 위해 필요한 조건을 이야기해 보세요.", difficulty: "hard" },
    { word: "자멸", pos: "명사", def: "스스로 망하여 없어짐", sentence: "내부 갈등이 결국 조직의 자멸을 불러왔다.", angle: "자멸의 원인으로 가장 흔한 것이 무엇인지, 이를 예방하는 방법을 이야기해 보세요.", difficulty: "hard" },
    { word: "와해되다", pos: "동사", def: "조직이나 체계가 무너져 흩어지다", sentence: "지도부의 부패로 인해 조직이 와해되었다.", angle: "견고해 보이던 것이 와해되는 과정에서 얻을 수 있는 교훈을 이야기해 보세요.", difficulty: "hard" },
    { word: "지대하다", pos: "형용사", def: "더할 나위 없이 크다", sentence: "스승의 가르침이 인생에 미친 영향은 지대했다.", angle: "지대한 영향을 끼친 만남이나 경험에 대해 이야기해 보세요.", difficulty: "hard" },
    { word: "필사적", pos: "형용사", def: "죽을 각오로 온 힘을 다하는", sentence: "필사적으로 노력한 끝에 마감을 겨우 맞출 수 있었다.", angle: "필사적으로 매달린 경험과 그때의 심리를 이야기해 보세요.", difficulty: "hard" },
    { word: "각고", pos: "명사", def: "뼈를 깎는 듯한 고생과 노력", sentence: "각고의 노력 끝에 마침내 연구 결과를 발표할 수 있었다.", angle: "각고의 노력이 빛을 발한 순간과 그 과정의 의미를 이야기해 보세요.", difficulty: "hard" },
    { word: "경이롭다", pos: "형용사", def: "놀랍고 신기하여 감탄할 만하다", sentence: "자연의 경이로운 풍경 앞에서 한동안 말을 잃었다.", angle: "경이로움을 느꼈던 경험과 그 감정이 남긴 여운을 이야기해 보세요.", difficulty: "hard" }
];

// --- Derived arrays ---

// Arrays by difficulty
var vocabEasyKo = [];
var vocabMediumKo = [];
var vocabHardKo = [];
for (var i = 0; i < vocabularyWordsKo.length; i++) {
    if (vocabularyWordsKo[i].difficulty === 'easy') vocabEasyKo.push(vocabularyWordsKo[i].word);
    else if (vocabularyWordsKo[i].difficulty === 'medium') vocabMediumKo.push(vocabularyWordsKo[i].word);
    else if (vocabularyWordsKo[i].difficulty === 'hard') vocabHardKo.push(vocabularyWordsKo[i].word);
}

// Flat string array (all words) for the spinner
var vocabAllStringsKo = [];
for (var i = 0; i < vocabularyWordsKo.length; i++) {
    vocabAllStringsKo.push(vocabularyWordsKo[i].word);
}

// Lookup map: word -> { pos, def, angle, sentence }
var vocabDefinitionMapKo = {};
for (var i = 0; i < vocabularyWordsKo.length; i++) {
    var w = vocabularyWordsKo[i];
    vocabDefinitionMapKo[w.word] = { pos: w.pos, def: w.def, angle: w.angle, sentence: w.sentence };
}
