const data = [
    {
        id: '1',
        title: "载人航天基建步骤",
        isCompleted: false,
        questions: [
            {
                id: '1-1',
                title: "中国载人航天工程“三步走”战略中，第一步核心任务是？",
                isCompleted: false,
                options: [
                    {
                        id: '1-1-1',
                        content: "建成空间站",
                    },
                    {
                        id: '1-1-2',
                        content: "实现载人飞船天地往返",
                    }
                ],
                answer: '1-1-1',
                analysis: "载人航天的基本步骤包括设计和建造航天器，以及进行载人飞行测试。载人航天的主要目标是探索太空和建立太空站。"
            },
            {
                id: '1-2',
                title: "空间站建造阶段，需通过多次任务完成舱段组装，其中首次实现两个20吨级舱段对接的是？",
                isCompleted: false,
                options: [
                    {
                        id: '1-2-1',
                        content: "天和核心舱发射",
                    },
                    {
                        id: '1-2-2',
                        content: "问天实验舱与天和核心舱对接",
                    }
                ],
                answer: '1-2-2',
                analysis: "载人航天的主要目标是探索太空和建立太空站。载人航天的主要任务是探索太空，寻找未知的世界。"
            },
            {
                id: '1-3',
                title: "载人航天基建中，为空间站长期驻留提供物资保障的核心航天器是?",
                isCompleted: false,
                options: [
                    {
                        id: '1-3-1',
                        content: "载人飞船",
                    },
                    {
                        id: '1-3-2',
                        content: "货运飞船",
                    },
                    {
                        id: '1-3-3',
                        content: "核心舱"
                    }
                ],
                answer: "1-3-2",
                analysis: "载人航天的主要目标是探索太空和建立太空站。载人航天的主要任务是探索太空，寻找未知的世界。"
            }
        ],
        reward: "../assets/images/WenTianPavilion/back01.webp",
    },
    {
        id: '2',
        title: "神舟系列载人飞船",
        isCompleted: false,
        questions: [
            {
                id: '2-1',
                title: "神舟系列飞船的返回舱采用的特殊结构，主要是为了?",
                isCompleted: false,
                options: [
                    {
                        id: '2-1-1',
                        content: "便于安装设备",
                    },
                    {
                        id: '2-1-2',
                        content: "安全返回地球，承受再入大气层的高温和冲击",
                    }
                ],
                answer: '2-1-1',
                analysis: "神舟系列飞船的返回舱采用的特殊结构，主要是为了安全返回地球，承受再入大气层的高温和冲击。"
            },
            {
                id: '2-2',
                title: "神舟七号载人飞船实现了中国航天员首次？",
                isCompleted: false,
                options: [
                    {
                        id: '2-2-1',
                        content: "太空授课",
                    },
                    {
                        id: '2-2-2',
                        content: "多人多天飞行",
                    },
                    {
                        id: '2-2-3',
                        content: "出舱活动",
                    }
                ],
                answer: '2-2-3',
                analysis: "2008 年，神舟七号航天员翟志刚实现了中国首次太空出舱行走。"
            },
            {
                id: '2-3',
                title: "神舟十二号载人飞船将航天员送入了中国的",
                isCompleted: false,
                options: [
                    {
                        id: '2-3-1',
                        content: "天宫一号"
                    },
                    {
                        id: '2-3-2',
                        content: "天宫二号"
                    },
                    {
                        id: '2-3-3',
                        content: "天和核心舱"
                    }
                ],
                answer: '2-3-3',
                analysis: "神舟十二号是空间站关键技术验证阶段第四次飞行任务，航天员入驻天和核心舱。"
            }
        ],
        reward: "../assets/images/WenTianPavilion/back04.webp",
    },
    {
        id: '3',
        title: "空间站",
        isCompleted: false,
        questions: [
            {
                id: '3-1',
                title: "中国空间站的核心舱是？",
                isCompleted: false,
                options: [
                    {
                        id: '3-1-1',
                        content: "问天实验舱",
                    },
                    {
                        id: '3-1-2',
                        content: "梦天实验舱",
                    },
                    {
                        id: '3-1-3',
                        content: "天和核心舱"
                    }
                ],
                answer: '3-1-3',
                analysis: "天和核心舱是中国空间站的管理和控制中心，是空间站建造的首个舱段。"
            },
            {
                id: '3-2',
                title: "空间站在太空中运行时，主要依靠（  ）提供能源？",
                isCompleted: false,
                options: [
                    {
                        id: '3-2-1',
                        content: "核能",
                    },
                    {
                        id: '3-2-2',
                        content: "太阳能电池翼",
                    },
                    {
                        id: '3-2-3',
                        content: "化学燃料"
                    }
                ],
                answer: '3-2-2',
                analysis: "空间站通过大面积的太阳能电池翼将太阳能转化为电能。"
            },
            {
                id: '3-3',
                title: "空间站的再生生保系统可以实现（  ）?",
                isCompleted: false,
                options: [
                    {
                        id: "3-3-1",
                        content: "制造食物"
                    },
                    {
                        id: "3-3-2",
                        content: "将尿液等废水净化为可饮用的水"
                    },
                    {
                        id: "3-3-3",
                        content: "产生重力环境"
                    }
                ],
                answer: '3-3-2',
                analysis: "空间站的再生生保系统可以实现将尿液等废水净化为可饮用的水。"
            }
        ],
        reward: "../assets/images/WenTianPavilion/back02.webp",
    },
    {
        id: '4',
        title: "人造卫星",
        isCompleted: false,
        questions: [
            {
                id: '4-1',
                title: "通信卫星主要用于？",
                isCompleted: false,
                options: [
                    {
                        id: '4-1-1',
                        content: "观测地球表面",
                    },
                    {
                        id: '4-1-2',
                        content: "天气预报",
                    },
                    {
                        id: "4-1-3",
                        content: "传输电话、电视、数据等通信信号"
                    }
                ],
                answer: '4-1-3',
                analysis: "通信卫星通过转发无线电信号，实现地球不同地区之间的通信。"
            },
            {
                id: '4-2',
                title: "以下哪种卫星可以用来监测农作物的生长状况（  ）",
                isCompleted: false,
                options: [
                    {
                        id: '4-2-1',
                        content: "导航卫星",
                    },
                    {
                        id: '4-2-2',
                        content: "气象卫星",
                    },
                    {
                        id: "4-2-3",
                        content: "遥感卫星"
                    }
                ],
                answer: "4-2-3",
                analysis: "遥感卫星可以通过拍摄地球表面图像，分析农作物的生长、病虫害等状况"
            },
            {
                id: '4-3',
                title: "人造卫星围绕地球运行的轨道中，离地面高度最低的是（  ）",
                isCompleted: false,
                options: [
                    {
                        id: "4-3-1",
                        content: "地球同步轨道"
                    },
                    {
                        id: "4-3-2",
                        content: "极地轨道"
                    },
                    {
                        id: "4-3-3",
                        content: "低地球轨道"
                    }
                ],
                answer: "4-3-3",
                analysis: "低地球轨道一般距离地面200 - 2000千米，是高度最低的常见轨道"
            }
        ],
        reward: "../assets/images/WenTianPavilion/back03.webp",
    },
]

// 答题控制器
class QAController {
    constructor(data) {
        this.data = data;
        this.currentLevelIndex = 0;
        this.currentQuestionIndex = 0;
        this.currentRewardFragments = [];
        this.isAllLevelCompleted = false;
        this.selectedOptionId = null;

        // DOM 元素
        this.initInfo = document.querySelector(".init-info");
        this.levelInfo = document.querySelector(".level-info");
        this.startContent = document.querySelector(".start-content");
        this.qaBox = document.querySelector(".qa-box");
        this.fragmentBox = document.querySelector(".fragment-box");
        this.backpackBox = document.querySelector(".backpack-box");
        this.puzzleBox = document.querySelector(".puzzle-box");
        this.backEntry = document.querySelector(".back-entry");

        this.levelTitleElem = this.levelInfo.querySelector(".level-title");
        this.progressTextContainer = this.levelInfo.querySelector(".progress-text");
        this.processBarElem = this.levelInfo.querySelector(".process-bar");

        this.questionElem = this.qaBox.querySelector(".question");
        this.optionsContainer = this.qaBox.querySelector(".options");
        this.submitBtn = this.qaBox.querySelector(".submit");
        this.analysisBtn = this.qaBox.querySelector(".analysis");
        this.nextBtn = this.qaBox.querySelector(".next");
        this.prevBtn = this.qaBox.querySelector(".prev");
        this.analysisTextElem = null;

        this.fragmentContinueBtn = this.fragmentBox.querySelector(".continue-btn");
        this.fragmentImgElem = this.fragmentBox.querySelector(".fragment-img img");
        this.fragmentProgressElem = this.fragmentBox.querySelector(".progress-box");

        this.backpackContinueBtn = this.backpackBox.querySelector(".continue-btn");
        this.backpackItemContainer = this.backpackBox.querySelector(".backpack-item");
        this.backpackInfoElem = this.backpackBox.querySelector(".info");

        this.puzzleInfoElem = this.puzzleBox.querySelector(".info");
        this.puzzleItemContainer = this.puzzleBox.querySelector(".puzzle-item");

        this.startBtn = this.startContent.querySelector(".start-btn");

        this.init();
    }

    init() {
        // 确保初始状态正确：只显示开始页面元素
        this.setInitialState();

        // 初始时隐藏背包入口
        this.hideBackEntry();

        if (this.startBtn) {
            this.startBtn.addEventListener("click", () => {
                this.animatedTransition(
                    [this.initInfo, this.startContent],
                    [this.levelInfo, this.qaBox],
                    () => {
                        this.showBackEntry();
                        this.updateHeader();
                        this.showQuestion();
                    }
                );
            });
        }

        if (this.nextBtn) {
            this.nextBtn.style.cursor = 'pointer';
            this.nextBtn.addEventListener("click", () => {
                const level = this.getCurrentLevel();
                if (this.currentQuestionIndex < level.questions.length - 1) {
                    this.currentQuestionIndex++;
                } else if (this.currentQuestionIndex === level.questions.length - 1 && this.currentLevelIndex < this.data.length - 1) {
                    this.currentLevelIndex++;
                    this.currentQuestionIndex = 0;
                } else {
                    return;
                }
                this.selectedOptionId = null;
                this.updateHeader();
                this.showQuestion();
            });
        }

        if (this.prevBtn) {
            this.prevBtn.style.cursor = 'pointer';
            this.prevBtn.addEventListener("click", () => {
                if (this.currentQuestionIndex > 0) {
                    this.currentQuestionIndex--;
                } else if (this.currentQuestionIndex === 0 && this.currentLevelIndex > 0) {
                    this.currentLevelIndex--;
                    const prevLevel = this.getCurrentLevel();
                    this.currentQuestionIndex = prevLevel.questions.length - 1;
                } else {
                    return;
                }
                this.selectedOptionId = null;
                this.updateHeader();
                this.showQuestion();
            });
        }

        if (this.submitBtn) this.submitBtn.addEventListener("click", () => this.handleSubmit());
        if (this.analysisBtn) this.analysisBtn.addEventListener("click", () => this.showAnalysis());
        if (this.fragmentContinueBtn) this.fragmentContinueBtn.addEventListener("click", () => this.handleFragmentContinue());
        if (this.backpackContinueBtn) this.backpackContinueBtn.addEventListener("click", () => this.handleBackpackContinue());
        if (this.backEntry) {
            this.backEntry.style.cursor = 'pointer';
            this.backEntry.addEventListener("click", () => this.openBackpack());
        }
    }

    getCurrentLevel() {
        return this.data[this.currentLevelIndex];
    }

    getTotalQuestions() {
        return this.data.reduce((sum, lvl) => sum + (lvl.questions ? lvl.questions.length : 0), 0);
    }

    getCompletedQuestions() {
        let count = 0;
        this.data.forEach(lvl => {
            lvl.questions.forEach(q => {
                if (q.isCompleted) count++;
            });
        });
        return count;
    }

    updateHeader() {
        const level = this.getCurrentLevel();
        if (this.levelTitleElem) this.levelTitleElem.textContent = `当前关卡：${level.title}`;
        const totalAll = this.getTotalQuestions();
        const doneAll = this.getCompletedQuestions();
        if (this.progressTextContainer) {
            this.progressTextContainer.innerHTML = `<span style="color: #7a93ff;">已答 ${doneAll}</span>/${totalAll}`;
        }
        if (this.processBarElem) {
            const ratio = totalAll > 0 ? doneAll / totalAll : 0;
            // GSAP 进度条动画
            gsap.to(this.processBarElem, {
                width: `${ratio * 100}%`,
                duration: 0.8,
                ease: "power2.out"
            });
        }

        if (this.prevBtn) {
            const showPrev = this.currentQuestionIndex > 0 || this.currentLevelIndex > 0;
            this.prevBtn.style.visibility = showPrev ? 'visible' : 'hidden';
        }
        if (this.nextBtn) {
            const hasNextInLevel = this.currentQuestionIndex < level.questions.length - 1;
            const hasNextLevel = this.currentQuestionIndex === level.questions.length - 1 && this.currentLevelIndex < this.data.length - 1;
            this.nextBtn.style.visibility = (hasNextInLevel || hasNextLevel) ? 'visible' : 'hidden';
        }
        if (this.analysisTextElem) {
            this.analysisTextElem.remove();
            this.analysisTextElem = null;
        }
    }

    showQuestion() {
        const level = this.getCurrentLevel();
        const question = level.questions[this.currentQuestionIndex];
        if (this.questionElem) this.questionElem.innerHTML = `<img src="../assets/images/WenTianPavilion/QuestionChar.svg" alt="question"> ${question.title}`;
        if (this.optionsContainer) this.optionsContainer.innerHTML = '';
        if (this.optionsContainer) {
            // 首先设置初始状态为隐藏
            gsap.set(this.optionsContainer, { opacity: 0, y: 20 });

            question.options.forEach((opt, index) => {
                const div = document.createElement('div');
                div.classList.add('option');
                div.dataset.id = opt.id;
                div.textContent = opt.content;
                div.addEventListener('click', () => this.selectOption(div));

                // 设置初始状态
                gsap.set(div, {
                    opacity: 0,
                    y: 30,
                    scale: 0.9
                });

                this.optionsContainer.appendChild(div);

                // 延迟动画显示每个选项
                gsap.to(div, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.5,
                    ease: "back.out(1.7)",
                    delay: index * 0.1
                });
            });

            // 显示选项容器
            gsap.to(this.optionsContainer, {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.out"
            });
        }
        this.selectedOptionId = null;
        if (this.submitBtn) {
            this.submitBtn.style.pointerEvents = 'auto';
            this.submitBtn.style.opacity = '1';
        }
        if (this.analysisBtn) this.analysisBtn.style.display = 'none';
    }

    selectOption(div) {
        if (this.optionsContainer) {
            Array.from(this.optionsContainer.children).forEach(child => {
                child.classList.remove('selected');
                gsap.to(child, {
                    scale: 1,
                    duration: 0.2,
                    ease: "back.out(1.7)"
                });
            });
        }

        div.classList.add('selected');
        this.selectedOptionId = div.dataset.id;

        // GSAP 选中动画
        gsap.fromTo(div,
            { scale: 1 },
            {
                scale: 1.05,
                duration: 0.3,
                ease: "back.out(1.7)",
                yoyo: true,
                repeat: 1
            }
        );

        // 添加粒子效果
        this.createSelectionParticles(div);
    }

    handleSubmit() {
        const level = this.getCurrentLevel();
        const question = level.questions[this.currentQuestionIndex];
        if (!this.selectedOptionId) {
            return;
        }
        if (this.submitBtn) {
            this.submitBtn.style.pointerEvents = 'none';
            this.submitBtn.style.opacity = '0.6';
        }
        question.isCompleted = true;
        if (this.analysisBtn) this.analysisBtn.style.display = 'flex';
        const correct = this.selectedOptionId === question.answer;
        if (this.optionsContainer) {
            const tl = gsap.timeline();

            Array.from(this.optionsContainer.children).forEach((child, index) => {
                if (child.dataset.id === question.answer) {
                    // 正确答案动画
                    tl.to(child, {
                        backgroundColor: '#e0ffe0',
                        scale: 1.05,
                        duration: 0.3,
                        ease: "back.out(1.7)",
                        delay: index * 0.1
                    }, 0);

                    const rightIcon = document.createElement('img');
                    rightIcon.src = '../assets/images/WenTianPavilion/right.svg';
                    rightIcon.alt = 'correct';
                    rightIcon.style.cssText = `
                        width: 2rem;
                        height: 2rem;
                        margin-left: 1rem;
                        vertical-align: middle;
                        opacity: 0;
                        transform: scale(0);
                    `;
                    child.appendChild(rightIcon);

                    // 图标动画
                    gsap.to(rightIcon, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.4,
                        ease: "back.out(1.7)",
                        delay: 0.3
                    });

                } else if (child.classList.contains('selected')) {
                    // 用户选择的错误答案
                    tl.to(child, {
                        backgroundColor: '#ffe0e0',
                        x: -5,
                        duration: 0.1,
                        ease: "power2.out",
                        yoyo: true,
                        repeat: 5,
                        delay: index * 0.1
                    }, 0);

                    const errorIcon = document.createElement('img');
                    errorIcon.src = '../assets/images/WenTianPavilion/error.svg';
                    errorIcon.alt = 'error';
                    errorIcon.style.cssText = `
                        width: 2rem;
                        height: 2rem;
                        margin-left: 1rem;
                        vertical-align: middle;
                        opacity: 0;
                        transform: scale(0);
                    `;
                    child.appendChild(errorIcon);

                    gsap.to(errorIcon, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.4,
                        ease: "back.out(1.7)",
                        delay: 0.3
                    });

                } else {
                    // 其他未选择的选项
                    tl.to(child, {
                        backgroundColor: 'rgba(128, 128, 128, 0.2)',
                        opacity: 0.6,
                        scale: 0.98,
                        duration: 0.3,
                        ease: "power2.out",
                        delay: index * 0.1
                    }, 0);
                }
            });
        }
        if (this.currentQuestionIndex === level.questions.length - 1) {
            level.isCompleted = true;
            this.currentRewardFragments.push(level.reward);
            if (this.currentLevelIndex === this.data.length - 1) {
                this.isAllLevelCompleted = true;
                this.showHideController([
                    this.qaBox,
                    this.levelInfo,
                    this.fragmentBox,
                    this.backpackBox
                ], [this.puzzleBox]);
                this.renderPuzzle();
            } else {
                this.collectFragment();
            }
        }
    }

    showAnalysis() {
        if (this.analysisTextElem) return;
        const level = this.getCurrentLevel();
        const question = level.questions[this.currentQuestionIndex];
        const div = document.createElement('div');
        div.classList.add('analysis-text');
        div.textContent = question.analysis;
        if (this.qaBox) this.qaBox.appendChild(div);
        this.analysisTextElem = div;
    }

    collectFragment() {
        const level = this.getCurrentLevel();
        this.animatedTransition([
            this.qaBox,
            this.levelInfo
        ], [this.fragmentBox], () => {
            if (this.fragmentImgElem) {
                this.fragmentImgElem.src = level.reward;
                // 添加碎片出现动画
                gsap.fromTo(this.fragmentImgElem,
                    { scale: 0, rotation: -180 },
                    { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" }
                );
            }
            const totalLevels = this.data.length;
            const got = this.currentRewardFragments.length;
            if (this.fragmentProgressElem) {
                this.fragmentProgressElem.textContent = `碎片获取进度 ${got}/${totalLevels}`;
            }
        });
    }

    handleFragmentContinue() {
        if (this.currentLevelIndex < this.data.length - 1) {
            this.currentLevelIndex++;
            this.currentQuestionIndex = 0;
            this.selectedOptionId = null;
            this.animatedTransition([
                this.fragmentBox
            ], [this.levelInfo, this.qaBox]);
            this.updateHeader();
            this.showQuestion();
        } else {
            this.isAllLevelCompleted = true;
            this.animatedTransition([
                this.fragmentBox,
                this.levelInfo,
                this.qaBox
            ], [this.backpackBox]);
            this.renderBackpack();
        }
    }

    openBackpack() {
        this.showHideController([
            this.initInfo,
            this.startContent,
            this.levelInfo,
            this.qaBox,
            this.fragmentBox,
            this.puzzleBox
        ], [this.backpackBox]);
        this.renderBackpack();
    }

    renderBackpack() {
        const totalLevels = this.data.length;
        const got = this.currentRewardFragments.length;
        if (this.backpackInfoElem) this.backpackInfoElem.textContent = `碎片收集进度 ${got}/${totalLevels}`;
        if (this.backpackItemContainer) this.backpackItemContainer.innerHTML = '';
        for (let i = 0; i < totalLevels; i++) {
            const img = document.createElement('img');
            if (i < got) {
                img.src = this.currentRewardFragments[i];
                img.alt = 'fragment';
            } else {
                img.src = '../assets/images/WenTianPavilion/unkonw.svg';
                img.alt = 'unkonw';
            }
            if (this.backpackItemContainer) this.backpackItemContainer.appendChild(img);
        }
        if (got === totalLevels) {
            this.showHideController([
                this.initInfo,
                this.startContent,
                this.levelInfo,
                this.qaBox,
                this.fragmentBox,
                this.backpackBox
            ], [this.puzzleBox]);
            this.renderPuzzle();
        }
    }

    handleBackpackContinue() {
        if (this.isAllLevelCompleted) {
            this.openBackpack();
        } else {
            this.showHideController([
                this.backpackBox
            ], [this.levelInfo, this.qaBox]);
            this.updateHeader();
            this.showQuestion();
        }
    }

    renderPuzzle() {
        if (this.puzzleInfoElem) this.puzzleInfoElem.textContent = '拖拽碎片到对应位置完成拼图';
        if (this.puzzleItemContainer) this.puzzleItemContainer.innerHTML = '';

        // 创建拼图碎片容器
        const piecesContainer = document.createElement('div');
        piecesContainer.classList.add('puzzle-pieces');
        this.puzzleItemContainer.appendChild(piecesContainer);

        // 创建目标区域容器
        const targetsContainer = document.createElement('div');
        targetsContainer.classList.add('puzzle-targets');
        this.puzzleItemContainer.appendChild(targetsContainer);

        // 打乱碎片顺序，增加难度
        const shuffledFragments = [...this.currentRewardFragments].sort(() => Math.random() - 0.5);

        // 创建拼图碎片（打乱的顺序）
        shuffledFragments.forEach((src, displayIndex) => {
            // 找到这个碎片的原始索引
            const originalIndex = this.currentRewardFragments.indexOf(src);

            const piece = document.createElement('img');
            piece.src = src;
            piece.classList.add('puzzle-piece');
            piece.setAttribute('draggable', 'true');
            piece.dataset.index = originalIndex; // 使用原始索引作为正确位置
            piece.style.cssText = `
                width: 8rem;
                height: 8rem;
                object-fit: cover;
                border-radius: 0.5rem;
                border: 0.2rem solid rgba(122, 147, 255, 0.3);
                cursor: move;
                transition: all 0.3s ease;
                background-color: rgba(0, 0, 0, 0.2);
            `;
            piece.title = `碎片 ${originalIndex + 1}`;
            piecesContainer.appendChild(piece);

            // 添加拖拽事件
            piece.addEventListener('dragstart', (e) => this.handleDragStart(e));
        });

        // 创建目标区域（按正确顺序）
        this.currentRewardFragments.forEach((src, index) => {
            const target = document.createElement('div');
            target.classList.add('puzzle-target');
            target.dataset.index = index;
            target.style.cssText = `
                width: 8rem;
                height: 8rem;
                border: 0.2rem dashed rgba(122, 147, 255, 0.3);
                border-radius: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: rgba(122, 147, 255, 0.05);
                transition: all 0.3s ease;
                position: relative;
                font-size: 1.4rem;
                color: rgba(122, 147, 255, 0.7);
                font-family: 'fys', sans-serif;
            `;
            target.textContent = `位置 ${index + 1}`;
            targetsContainer.appendChild(target);

            // 添加拖拽事件
            target.addEventListener('dragover', (e) => this.handleDragOver(e));
            target.addEventListener('drop', (e) => this.handleDrop(e));
            target.addEventListener('dragenter', (e) => this.handleDragEnter(e));
            target.addEventListener('dragleave', (e) => this.handleDragLeave(e));
        });
    }

    handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.dataset.index);

        // GSAP拖拽开始动画
        gsap.to(e.target, {
            opacity: 0.8,
            scale: 1.1,
            rotation: 5,
            duration: 0.2,
            ease: "power2.out"
        });

        // 创建拖拽阴影效果
        gsap.to(e.target, {
            boxShadow: '0 1rem 3rem rgba(127, 48, 150, 0.4)',
            duration: 0.2,
            ease: "power2.out"
        });
    }

    handleDragOver(e) {
        e.preventDefault();
    }

    handleDragEnter(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    }

    handleDragLeave(e) {
        e.target.classList.remove('drag-over');
    }

    handleDrop(e) {
        e.preventDefault();
        e.target.classList.remove('drag-over');

        const pieceIndex = e.dataTransfer.getData('text/plain');
        const targetIndex = e.target.dataset.index;
        const piece = document.querySelector(`.puzzle-piece[data-index="${pieceIndex}"]`);

        if (!piece) return;

        // 检查是否已有碎片在目标位置
        const existingPiece = e.target.querySelector('.puzzle-piece');
        if (existingPiece) {
            // 将现有碎片移回碎片容器
            const piecesContainer = document.querySelector('.puzzle-pieces');
            gsap.to(existingPiece, {
                x: 0,
                y: 0,
                scale: 1,
                opacity: 0.8,
                duration: 0.4,
                ease: "power2.out",
                onComplete: () => {
                    piecesContainer.appendChild(existingPiece);
                }
            });
        }

        if (pieceIndex === targetIndex) {
            // 正确放置 - 成功动画
            e.target.innerHTML = '';
            e.target.appendChild(piece);
            e.target.classList.add('puzzle-completed');

            // GSAP成功动画
            gsap.to(piece, {
                opacity: 1,
                scale: 1,
                rotation: 0,
                width: '100%',
                height: '100%',
                boxShadow: '0 0 2rem rgba(74, 222, 128, 0.5)',
                duration: 0.5,
                ease: "back.out(1.7)"
            });

            // 成功粒子效果
            this.createSuccessParticles(e.target);

            this.checkPuzzleCompletion();
        } else {
            // 错误放置 - 错误动画
            e.target.innerHTML = '';
            e.target.appendChild(piece);

            // GSAP错误动画序列
            const tl = gsap.timeline();
            tl.to(piece, {
                filter: 'sepia(1) hue-rotate(-50deg) saturate(2)',
                scale: 0.9,
                rotation: -10,
                duration: 0.2,
                ease: "power2.out"
            })
            .to(piece, {
                x: -10,
                duration: 0.1,
                yoyo: true,
                repeat: 5,
                ease: "power2.inOut"
            })
            .to(piece, {
                filter: 'none',
                scale: 1,
                rotation: 0,
                x: 0,
                opacity: 0.8,
                duration: 0.3,
                ease: "power2.out",
                onComplete: () => {
                    const piecesContainer = document.querySelector('.puzzle-pieces');
                    piecesContainer.appendChild(piece);
                    e.target.textContent = `位置 ${parseInt(targetIndex) + 1}`;
                    e.target.classList.remove('puzzle-completed');
                }
            });
        }
    }

    // 创建成功放置时的粒子效果
    createSuccessParticles(target) {
        const rect = target.getBoundingClientRect();
        const particleContainer = document.createElement('div');
        particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
        `;
        document.body.appendChild(particleContainer);

        // 创建成功粒子
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 6px;
                height: 6px;
                background: rgba(74, 222, 128, 0.9);
                border-radius: 50%;
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top + rect.height / 2}px;
            `;
            particleContainer.appendChild(particle);

            const angle = (Math.PI * 2 * i) / 12;
            const distance = 40 + Math.random() * 20;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            gsap.to(particle, {
                x: x,
                y: y,
                opacity: 0,
                scale: 0,
                duration: 1,
                ease: "power2.out",
                delay: Math.random() * 0.3
            });
        }

        setTimeout(() => {
            document.body.removeChild(particleContainer);
        }, 1500);
    }

    checkPuzzleCompletion() {
        const targets = document.querySelectorAll('.puzzle-target');
        let correctCount = 0;
        let totalCount = targets.length;

        targets.forEach(target => {
            const piece = target.querySelector('.puzzle-piece');
            if (piece && piece.dataset.index === target.dataset.index) {
                correctCount++;
            }
        });

        // 更新进度显示
        if (this.puzzleInfoElem) {
            this.puzzleInfoElem.textContent = "继续拖拽碎片到正确位置";
        }

        if (correctCount === totalCount) {
            // 拼图完成
            setTimeout(() => {
                this.showCompletionModal();
                // 可以添加完成后的效果
                const puzzleContainer = document.querySelector('.puzzle-targets');
                if (puzzleContainer) {
                    puzzleContainer.style.borderColor = '#4ade80';
                    puzzleContainer.style.backgroundColor = 'rgba(74, 222, 128, 0.2)';
                    puzzleContainer.style.boxShadow = '0 0 2rem rgba(74, 222, 128, 0.5)';
                }
            }, 500);
        }
    }

    showBackEntry() {
        if (this.backEntry) {
            this.backEntry.style.display = 'flex';
            this.backEntry.style.opacity = '1';
        }
    }

    hideBackEntry() {
        if (this.backEntry) {
            this.backEntry.style.display = 'none';
            this.backEntry.style.opacity = '0';
        }
    }

    showCompletionModal() {
        // 创建弹窗覆盖层
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'completion-modal-overlay';
        modalOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            backdrop-filter: blur(1rem);
        `;

        // 创建弹窗内容
        const modalContent = document.createElement('div');
        modalContent.className = 'completion-modal-content';
        modalContent.style.cssText = `
            background: linear-gradient(135deg, rgba(30, 0, 50, 0.95), rgba(70, 20, 100, 0.95));
            border-radius: 2rem;
            padding: 4rem;
            text-align: center;
            max-width: 60rem;
            position: relative;
            transform: scale(0.8);
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 2rem 4rem rgba(122, 147, 255, 0.3);
        `;

        // 创建标题
        const title = document.createElement('h2');
        title.textContent = '恭喜！拼图完成！';
        title.style.cssText = `
            font-size: 4rem;
            font-family: 'fys', sans-serif;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(191, 151, 202, 1), rgba(127, 48, 150, 1));
            background-clip: text;
            color: transparent;
            margin-bottom: 2rem;
        `;

        // 创建图片容器
        const imageContainer = document.createElement('div');
        imageContainer.style.cssText = `
            margin: 3rem 0;
            perspective: 150rem;
            display: flex;
            justify-content: center;
            align-items: center;
        `;

        // 创建奖杯图片
        const trophyImage = document.createElement('img');
        trophyImage.src = '../assets/images/WenTianPavilion/all.webp';
        trophyImage.alt = 'completion trophy';
        trophyImage.style.cssText = `
            width: 20rem;
            height: 20rem;
            object-fit: contain;
            transition: transform 0.2s ease-out;
            transform-style: preserve-3d;
            cursor: pointer;
            filter: drop-shadow(0 1rem 2rem rgba(122, 147, 255, 0.4));
        `;

        // 添加3D旋转交互
        imageContainer.addEventListener('mousemove', (e) => {
            const rect = imageContainer.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // 计算鼠标相对于容器中心的位置（-1到1之间）
            const mouseX = (e.clientX - centerX) / (rect.width / 2);
            const mouseY = (e.clientY - centerY) / (rect.height / 2);

            // 计算旋转角度，限制在合理范围内
            const rotateY = mouseX * 15; // 左右旋转最大15度
            const rotateX = -mouseY * 10; // 上下旋转最大10度

            trophyImage.style.transform = `
                perspective(150rem) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                scale(1.05)
                translateZ(2rem)
            `;
        });

        imageContainer.addEventListener('mouseleave', () => {
            trophyImage.style.transform = `
                perspective(150rem) 
                rotateX(0deg) 
                rotateY(0deg) 
                scale(1)
                translateZ(0rem)
            `;
        });

        // 创建描述文字
        const description = document.createElement('p');
        description.textContent = '你已经成功解开了宇宙的奥秘，收集了所有的知识碎片！';
        description.style.cssText = `
            font-size: 2.4rem;
            font-family: 'fys', sans-serif;
            color: rgba(255, 255, 255, 0.9);
            margin: 2rem 0;
            line-height: 1.5;
        `;

        // 创建关闭按钮
        const closeButton = document.createElement('button');
        closeButton.textContent = '完成';
        closeButton.style.cssText = `
            background: linear-gradient(135deg, rgba(122, 147, 255, 1), rgba(127, 48, 150, 1));
            border: none;
            border-radius: 1rem;
            color: white;
            font-size: 2.4rem;
            font-family: 'fys', sans-serif;
            padding: 1rem 2rem;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 2rem;
        `;

        closeButton.addEventListener('mouseover', () => {
            closeButton.style.transform = 'scale(1.05)';
            closeButton.style.boxShadow = '0 1rem 2rem rgba(122, 147, 255, 0.4)';
        });

        closeButton.addEventListener('mouseout', () => {
            closeButton.style.transform = 'scale(1)';
            closeButton.style.boxShadow = 'none';
        });

        closeButton.addEventListener('click', () => {
            modalOverlay.style.opacity = '0';
            modalContent.style.transform = 'scale(0.8)';
            setTimeout(() => {
                document.body.removeChild(modalOverlay);
            }, 300);
        });

        // 组装弹窗
        imageContainer.appendChild(trophyImage);
        modalContent.appendChild(title);
        modalContent.appendChild(imageContainer);
        modalContent.appendChild(description);
        modalContent.appendChild(closeButton);
        modalOverlay.appendChild(modalContent);

        // 添加到页面并显示动画
        document.body.appendChild(modalOverlay);

        // 触发进入动画
        setTimeout(() => {
            modalOverlay.style.opacity = '1';
            modalContent.style.transform = 'scale(1)';
        }, 50);

        // 点击背景关闭弹窗
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeButton.click();
            }
        });
    }

    // 使用GSAP的流畅页面切换动画
    animatedTransition(hideElements, showElements, callback) {
        const tl = gsap.timeline({
            onComplete: callback
        });

        // 先隐藏当前元素
        if (hideElements.length > 0) {
            tl.to(hideElements, {
                opacity: 0,
                y: -30,
                duration: 0.4,
                ease: "power2.in",
                stagger: 0.1,
                onComplete: () => {
                    hideElements.forEach(el => {
                        if (el) el.style.display = 'none';
                    });
                }
            });
        }

        // 再显示新元素
        if (showElements.length > 0) {
            tl.set(showElements, {
                display: 'flex',
                opacity: 0,
                y: 30,
                scale: 0.95
            })
            .to(showElements, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.15
            });
        }
    }

    // 创建选项选择时的粒子效果
    createSelectionParticles(element) {
        const rect = element.getBoundingClientRect();
        const particleContainer = document.createElement('div');
        particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
        `;
        document.body.appendChild(particleContainer);

        // 创建多个粒子
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 8px;
                height: 8px;
                background: rgba(127, 48, 150, 0.8);
                border-radius: 50%;
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top + rect.height / 2}px;
            `;
            particleContainer.appendChild(particle);

            // 随机方向动画
            const angle = (Math.PI * 2 * i) / 8;
            const distance = 50 + Math.random() * 30;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            gsap.to(particle, {
                x: x,
                y: y,
                opacity: 0,
                scale: 0,
                duration: 0.8,
                ease: "power2.out"
            });
        }

        // 清理粒子容器
        setTimeout(() => {
            document.body.removeChild(particleContainer);
        }, 1000);
    }

    // 设置页面初始状态
    setInitialState() {
        // 显示初始元素
        if (this.initInfo) {
            this.initInfo.style.display = 'flex';
            this.initInfo.style.opacity = '1';
        }
        if (this.startContent) {
            this.startContent.style.display = 'flex';
            this.startContent.style.opacity = '1';
        }

        // 隐藏所有其他元素
        const elementsToHide = [
            this.levelInfo,
            this.qaBox,
            this.fragmentBox,
            this.backpackBox,
            this.puzzleBox
        ];

        elementsToHide.forEach(element => {
            if (element) {
                element.style.display = 'none';
                element.style.opacity = '0';
            }
        });
    }

    showHideController(hiddenControllers, showControllers) {
        // 使用新的动画方法
        this.animatedTransition(hiddenControllers, showControllers);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const qaContainer = document.querySelector('.qa-container');
    new Mouse({
        defaultCursor: '../assets/images/common/MouseDefault.svg',
        clickCursor: '../assets/images/common/MouseClick.svg',
    });
    new StarBackground(qaContainer, {
        starCount: 300,
        starSizeMin: 0.08,
        starSizeMax: 0.16,
        xSpeed: 0.0002,
        ySpeed: 0.0002,
        elapsed: 0
    });
    new QAController(data);
});
