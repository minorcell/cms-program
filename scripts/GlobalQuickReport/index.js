const news = [
    {
        title: '神舟二十号航天员乘组圆满完成第一次出舱活动',
        content: '北京时间2025年5月22日16时49分，经过约8小时的出舱活动，神舟二十号乘组航天员陈冬、陈中瑞、王杰密切协同，在地面科研人员配合支持下，航天员从核心舱节点舱出舱，将前期已通过货物气闸舱出舱并利用机械臂转移至中转位置的空间碎片防护装置，安装至预定位置，同时开展了舱外设备设施巡检及处置等任务。出舱航天员陈冬、陈中瑞已安全返回天和核心舱，出舱活动取得圆满成功。这是进入空间站应用与发展阶段以来，航天员首次通过天和核心舱节点舱出舱，航天员出舱与货物出舱任务首次关联耦合实施，航天员陈冬时隔两年再度漫步太空，航天员陈中瑞首次执行出舱任务。',
        date: '2025-05-22',
    },
    {
        title: '神舟十九号载人飞船返回舱成功着陆 神舟十九号载人飞行任务取得圆满成功',
        content: '北京时间2025年4月30日13时08分，神舟十九号载人飞船返回舱在东风着陆场成功着陆，现场医监医保人员确认航天员蔡旭哲、宋令东、王浩泽身体状态良好，神舟十九号载人飞行任务取得圆满成功。12时17分，北京航天飞行控制中心通过地面测控站发出返回指令，神舟十九号载人飞船轨道舱与返回舱成功分离。之后，飞船返回制动发动机点火，返回舱与推进舱分离，返回舱成功着陆，担负搜救回收任务的搜救分队及时发现目标并抵达着陆现场。返回舱舱门打开后，医监医保人员确认航天员身体健康。神舟十九号载人飞船于2024年10月30日从酒泉卫星发射中心发射升空，随后与天和核心舱对接形成组合体。3名航天员在轨驻留183天，期间进行了3次出舱活动，完成空间站空间碎片防护装置安装、多次货物出舱任务，先后开展了舱内外设备设施安装、调试、巡检、维护维修等各项工作，为空间站长期稳定在轨运行进一步积累了宝贵的数据和经验。乘组在2024年12月17日首次出舱活动期间，创造了航天员单次出舱活动时长世界纪录。在轨驻留期间，乘组还在地面科研人员密切配合下，完成了涉及微重力基础物理、空间材料科学、空间生命科学、航天医学、航天技术等领域的大量空间科学实（试）验。',
        date: '2025-04-30',
    },
    {
        title: '神舟二十号载人飞船发射取得圆满成功',
        content: '北京时间2025年4月24日17时17分，搭载神舟二十号载人飞船的长征二号F遥二十运载火箭在酒泉卫星发射中心点火发射，约10分钟后，神舟二十号载人飞船与火箭成功分离，进入预定轨道。目前，航天员乘组状态良好，发射取得圆满成功。飞船入轨后，将按照预定程序与空间站组合体进行自主快速交会对接，神舟二十号航天员乘组将与神舟十九号航天员乘组进行在轨轮换。在空间站工作生活期间，神舟二十号航天员乘组将在空间生命与人体研究、微重力物理科学、空间新技术等领域开展多项实（试）验与应用，进行多次出舱活动，完成空间站碎片防护装置安装、舱外载荷和舱外平台设备安装与回收等任务。',
        date: '2025-04-24',
    },
    {
        title: '神舟二十号载人飞行任务航天员乘组出征仪式在酒泉卫星发射中心举行',
        content: '北京时间2025年4月24日14时25分，神舟二十号载人飞行任务航天员乘组出征仪式在酒泉卫星发射中心问天阁圆梦园广场举行。14时26分，中国载人航天工程总指挥、空间站应用与发展阶段飞行任务总指挥部总指挥长许学强下达"出发"命令，陈冬、陈中瑞、王杰3名航天员在第十个"中国航天日"当天领命出征。目前，神舟十九号航天员乘组进驻空间站近六个月，正在积极准备迎接即将到来的神舟二十号航天员乘组。55年前的今天，中国第一颗人造地球卫星"东方红一号"在酒泉卫星发射中心成功发射，吹响了中国人进军太空的号角。22年前，中国首位飞天航天员杨利伟从这里出征太空，实现了中华民族千年飞天梦想。如今，空间站已经建成，登月梦正在从蓝图走向现实，一代代后来者接过"接力棒"、踏着前人的足迹接力出征，"一张蓝图绘到底"的中国航天未来可期！',
        date: '2025-04-24',
    },
    {
        title: '神舟二十号载人飞行任务新闻发布会召开',
        content: '2025年4月23日上午9时，神舟二十号载人飞行任务新闻发布会在酒泉卫星发射中心召开，中国载人航天工程办公室副主任、中国载人航天工程新闻发言人林西强介绍了本次任务的相关情况。其中介绍到，北京时间4月24日17时17分发射神舟二十号载人飞船，飞行乘组由陈冬、陈中瑞、王杰组成，陈冬担任指令长。航天员陈冬执行过神舟十一号、神舟十四号载人飞行任务，时隔两年再次担任指令长。陈中瑞和王杰均来自于我国第三批航天员，是首次执行飞行任务。其中，陈中瑞入选前是空军飞行员；王杰入选前是航天科技集团有限公司空间技术研究院的工程师。目前，任务各项准备工作正在稳步推进，执行此次发射任务的长征二号F遥二十运载火箭即将加注推进剂，神舟二十号航天员乘组将于中国航天日当天出征太空。目前，船箭飞行产品质量受控，航天员乘组状态良好，地面系统设施设备运行稳定，空间站组合体状态正常，具备执行发射任务的各项条件。神舟十九号航天员乘组在与神舟二十号航天员乘组完成在轨轮换后，计划于本月29日返回东风着陆场。',
        date: '2025-04-23',
    },
    {
        title: '神舟十九号航天员乘组圆满完成第三次出舱活动',
        content: '北京时间2025年3月21日20时50分，经过约7小时的出舱活动，神舟十九号乘组航天员蔡旭哲、宋令东、王浩泽密切协同，在空间站机械臂和地面科研人员的配合支持下，完成了空间站空间碎片防护装置及舱外辅助设施安装、舱外设备设施巡检等任务。出舱航天员蔡旭哲、宋令东已安全返回问天实验舱，出舱活动取得圆满成功。航天员蔡旭哲已完成5次出舱活动，成为目前在舱外执行任务次数最多的中国航天员。神舟十九号航天员乘组的"太空出差之旅"已近5个月，各项空间科学实（试）验任务进展顺利。按计划，乘组将于1个多月后返回地球家园。',
        date: '2025-03-21',
    },
    {
        title: '2025年中国载人航天工程将扎实推进空间站应用与发展和载人月球探测两大任务',
        content: '2025年，中国载人航天工程将扎实推进空间站应用与发展和载人月球探测两大任务，为推动科技强国、航天强国建设作出更大贡献。目前，中国空间站在轨运行稳定、效益发挥良好，载人月球探测工程登月阶段任务各项研制建设工作按计划稳步推进。空间站建成以来，工程全线密切协同，先后组织完成4次载人飞行、3次货运补给、4次飞船返回任务，5个航天员乘组、15人次在轨长期驻留，累计进行了11次航天员出舱和多次应用载荷出舱，开展多次舱外维修任务，刷新航天员单次出舱活动时长的世界纪录，完成包括2名港澳载荷专家的第四批预备航天员选拔、低成本货物运输系统择优并启动研制、《中国空间站科学研究与应用进展报告》（2024年）发布等工作。与此同时，瞄准2030年前实现中国人首次登陆月球的目标，载人月球探测工程登月阶段任务各项研制建设工作按计划稳步推进。',
        date: '2025-03-03',
    },
]

const htkjyymfw = [
    {
        img: "../assets/images/GlobalQuickReport/hf01.jpg",
        vodeo: "../assets/videos/GlobalQuickReport/hf01.mp4",
    },
    {
        img: "../assets/images/GlobalQuickReport/hf02.jpg",
        vodeo: "../assets/videos/GlobalQuickReport/hf02.mp4",
    },
    {
        img: "../assets/images/GlobalQuickReport/hf03.jpg",
        vodeo: "../assets/videos/GlobalQuickReport/hf03.mp4",
    },
    {
        img: "../assets/images/GlobalQuickReport/hf04.jpg",
        vodeo: "../assets/videos/GlobalQuickReport/hf04.mp4",
    },
    {
        img: "../assets/images/GlobalQuickReport/hf05.jpg",
        vodeo: "../assets/videos/GlobalQuickReport/hf05.mp4",
    },
    {
        img: "../assets/images/GlobalQuickReport/hf06.jpg",
        vodeo: "../assets/videos/GlobalQuickReport/hf06.mp4",
    },
    {
        img: "../assets/images/GlobalQuickReport/hf07.jpg",
        vodeo: "../assets/videos/GlobalQuickReport/hf07.mp4",
    }
]

const gkhz = [
    {
        img: "../assets/images/GlobalQuickReport/gj01.jpg",
        vodeo: "../assets/videos/GlobalQuickReport/gj01.mp4",
    },
    {
        img: "../assets/images/GlobalQuickReport/gj02.jpg",
        vodeo: "../assets/videos/GlobalQuickReport/gj02.mp4",
    },
    {
        img: "../assets/images/GlobalQuickReport/gj03.jpg",
        vodeo: "../assets/videos/GlobalQuickReport/gj03.mp4",
    },
    {
        img: "../assets/images/GlobalQuickReport/gj04.jpg",
        vodeo: "../assets/videos/GlobalQuickReport/gj04.mp4",
    },
    {
        img: "../assets/images/GlobalQuickReport/gj05.jpg",
        vodeo: "../assets/videos/GlobalQuickReport/gj05.mp4",
    },
    {
        img: "../assets/images/GlobalQuickReport/gj06.jpg",
        vodeo: "../assets/videos/GlobalQuickReport/gj06.mp4",
    }
]

// 预创建新闻弹窗元素，避免重复创建
let newsModalOverlay = null;

function createNewsModal() {
    if (newsModalOverlay) return newsModalOverlay;
    
    newsModalOverlay = document.createElement('div');
    newsModalOverlay.className = 'news-modal-overlay';
    newsModalOverlay.innerHTML = `
        <div class="new-content-box">
            <div class="close-btn"></div>
            <div class="children">
                <div class="new-box-title"></div>
                <div class="line"></div>
                <p class="new-content"></p>
            </div>
        </div>
    `;
    
    document.body.appendChild(newsModalOverlay);
    
    // 为关闭按钮添加事件监听器
    const closeBtn = newsModalOverlay.querySelector('.close-btn');
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        hideNewsModal();
    });
    
    // 点击背景关闭弹窗
    newsModalOverlay.addEventListener('click', (e) => {
        if (e.target === newsModalOverlay) {
            hideNewsModal();
        }
    });
    
    // 初始隐藏
    newsModalOverlay.style.display = 'none';
    
    return newsModalOverlay;
}

function showNewsModal(newsItem) {
    const modalOverlay = createNewsModal();
    
    // 更新内容
    modalOverlay.querySelector('.new-box-title').textContent = newsItem.title;
    
    // 对长内容进行处理，提高渲染性能
    const contentElement = modalOverlay.querySelector('.new-content');
    contentElement.textContent = newsItem.content;
    
    // 显示弹窗
    modalOverlay.style.display = 'flex';
    
    // 使用GSAP动画显示弹窗
    gsap.set(modalOverlay, { opacity: 0 });
    gsap.set(modalOverlay.querySelector('.children'), { y: 50, opacity: 0 });
    
    const tl = gsap.timeline();
    tl.to(modalOverlay, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
    })
    .to(modalOverlay.querySelector('.children'), {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(1.7)"
    }, "-=0.1");
}

function hideNewsModal() {
    const modalOverlay = newsModalOverlay;
    if (!modalOverlay || modalOverlay.style.display === 'none') return;
    
    // 使用GSAP动画关闭弹窗
    const tl = gsap.timeline({
        onComplete: () => {
            modalOverlay.style.display = 'none';
        }
    });
    tl.to(modalOverlay.querySelector('.children'), {
        y: 50,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
    })
    .to(modalOverlay, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in"
    }, "-=0.1");
}

// 防抖函数，防止频繁点击
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function createNewsItem(news = []) {
    const newsContainer = document.querySelector('.news');
    if (!newsContainer) return;
    
    newsContainer.innerHTML = news.map((item, index) =>
        `<div class="new-item" data-index="${index}">
            <div class="title">${item.title}</div>
            <div class="date">${item.date}</div>
        </div>`
    ).join('');

    // 使用事件委托处理点击事件，避免为每个新闻项单独绑定事件
    // 添加防抖处理，防止频繁点击
    const debouncedClickHandler = debounce((event) => {
        const target = event.target.closest('.new-item');
        if (target) {
            // 添加点击反馈动画
            gsap.to(target, {
                scale: 0.98,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: "power2.out"
            });
            
            const index = target.getAttribute('data-index');
            const newsItem = news[index];

            showNewsModal(newsItem);
        }
    }, 300); // 300ms防抖延迟
    
    newsContainer.addEventListener('click', debouncedClickHandler);
}

function createPopupVideoOverlay(videoSrc) {
    // 如果已有弹窗，先清除
    const existing = document.querySelector('.video-popup-overlay');
    if (existing) {
        // 使用GSAP动画关闭现有弹窗
        const tl = gsap.timeline({
            onComplete: () => {
                existing.remove();
            }
        });
        tl.to(existing.querySelector('.video-popup'), {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in"
        })
        .to(existing, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in"
        }, "-=0.1");
    }

    const overlay = document.createElement('div');
    overlay.className = 'video-popup-overlay';
    overlay.innerHTML = `
        <div class="video-popup">
            <div class="close-video-btn"></div>
            <video src="${videoSrc}" autoplay controls></video>
        </div>
    `;

    document.body.appendChild(overlay);

    // 使用GSAP动画显示弹窗
    gsap.set(overlay, { opacity: 0 });
    gsap.set(overlay.querySelector('.video-popup'), { scale: 0.8, opacity: 0 });
    
    const tl = gsap.timeline();
    tl.to(overlay, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
    })
    .to(overlay.querySelector('.video-popup'), {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(1.7)"
    }, "-=0.1");

    overlay.querySelector('.close-video-btn').addEventListener('click', () => {
        // 使用GSAP动画关闭弹窗
        const tl = gsap.timeline({
            onComplete: () => {
                overlay.remove();
            }
        });
        tl.to(overlay.querySelector('.video-popup'), {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in"
        })
        .to(overlay, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in"
        }, "-=0.1");
    });
}

function initHTKJYYYMSFW() {
    const container = document.querySelector('.htkj-yyymsfw');
    if (!container) return;
    
    container.innerHTML = htkjyymfw.map((item, index) =>
        `<div class="item">
            <img src="${item.img}" data-index="${index}" alt="HTKJYYYMSFW Image">
        </div>`
    ).join('');

    container.addEventListener('click', (event) => {
        const img = event.target.closest('img');
        if (img) {
            // 添加点击反馈动画
            gsap.to(img, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: "power2.out"
            });
            
            const index = img.dataset.index;
            const videoSrc = htkjyymfw[index].vodeo;
            createPopupVideoOverlay(videoSrc);
        }
    });
}

function initGJHZ() {
    const container = document.querySelector('.gjhz');
    if (!container) return;
    
    container.innerHTML = gkhz.map((item, index) =>
        `<div class="item">
            <img src="${item.img}" data-index="${index}" alt="GKHZ Image">
        </div>`
    ).join('');

    container.addEventListener('click', (event) => {
        const img = event.target.closest('img');
        if (img) {
            // 添加点击反馈动画
            gsap.to(img, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: "power2.out"
            });
            
            const index = img.dataset.index;
            const videoSrc = gkhz[index].vodeo;
            createPopupVideoOverlay(videoSrc);
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // 初始化GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    const header = document.querySelector('.header');
    const scrollContainer = document.querySelector('.container');
    const starBg = document.querySelector('.star-bg');
    if (!header || !scrollContainer || !starBg) return;

    // 初始化头部控制器
    new HeaderController(header, { scrollContainer });

    // 初始化鼠标控制器
    new Mouse({
        defaultCursor: '../assets/images/common/MouseDefault.svg',
        clickCursor: '../assets/images/common/MouseClick.svg',
    });

    // 初始化Logo动画
    new LogoAnimation();

    // 初始化星空背景
    new StarBackground(starBg, {
        starCount: 200
    });

    new MeteorEffect(starBg)

    // 预创建新闻弹窗
    createNewsModal();

    // 创建新闻项
    createNewsItem(news);

    // 初始化HTKJYYYMSFW
    initHTKJYYYMSFW();

    // 初始化GKHZ
    initGJHZ();
});