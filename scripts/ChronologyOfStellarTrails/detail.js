const container = document.querySelector(".star-bg");
const orbitalCircles = document.querySelectorAll('.orbital-circle');
const lastCircle = document.querySelector(".last-circle");
const nextCircle = document.querySelector(".next-circle");

const infoContainer = document.querySelector('.info');
const missionLogo = document.querySelector('.info .intro .left .logo');
const missionRocketName = document.querySelector('.info .intro .left .roctet-name');
const missionLaunchDate = document.querySelector('.info .intro .left .launch-date');
const missionPeoplesContainer = document.querySelector('.info .intro .right .peoples');
const missionLaunchInfoContainer = document.querySelector('.info .intro .right .launch-info');
const missionDetailContent = document.querySelector('.info .detail-content');

let currentMissionIndex = 0; // 当前任务索引
let isAnimating = false; // 是否正在执行动画的标志
const animationDuration = 300; // 动画持续时间 (毫秒), 如果CSS中的动画时间修改了，这里也需要对应调整

const missionData = [
  {
    id: 1,  // id
    logoSrc: "../assets/images/ChronologyOfStellarTrails/logo01.png",  // 任务logo
    rocketName: "神舟五号",  // 火箭名称
    launchDate: "2003 10 15",  // 发射日期
    people: [  // 参与人员
      {
        name: "杨利伟",  // 姓名
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero01_1.jpg",  // 头像图片路径
      }
      // {
      //   name: "聂海胜",
      //   imgSrc: "../assets/images/ChronologyOfStellarTrails/niehaisheng.webp",
      // }
    ],
    missionStartDate: "2003.10.15 09：00",  // 起飞时间
    flyTime: "21时28分",  // 飞行市场
    missionEndDate: "2003.10.16 06：28",  // 着陆时间
    description: "公元2003年10月15日（中元4700年农历09月20日）神舟五号飞船搭载航天员杨利伟在酒泉卫星发射中心发射升空，在轨飞行14圈，顺利完成各项预定操作任务后，其返回舱于2003年10月16日6时23分返回内蒙古主着陆场，“神五”任务的圆满成功，标志着中国成为世界上第三个独立掌握载人航天技术的国家，实现了中华民族千年飞天梦！"  // 任务描述
  },
  {
    id: 2,  // id
    logoSrc: "../assets/images/ChronologyOfStellarTrails/logo02.png",  // 任务logo
    rocketName: "神舟六号",  // 火箭名称
    launchDate: "2005 10 12",  // 发射日期
    people: [  // 参与人员
      {
        name: "费俊龙",  // 姓名
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero02_1.jpg",  // 头像图片路径
      },
      {
        name: "聂海胜",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero02_2.jpg",
      }
    ],
    missionStartDate: "2005.10.12 9：00",  // 起飞时间
    flyTime: "4天19时32分",  // 飞行市场
    missionEndDate: "2005.10.17 4：32",  // 着陆时间
    description: "公元2005年10月12日神舟六号飞船搭载航天员费俊龙、聂海胜成功发射升空进入预定轨道。2005年10月17日返回舱在内蒙古中部预定区域成功着陆，完成了多人多天”航天飞行的任务。神标志着载人工程第二步任务舟六号载人航天飞行的成功实现顺利开局，是中国载人航天工程继神舟五号首次载人飞行之后取得的又一具有里程碑意义的重大成果。"  // 任务描述
  },
  {
    id: 3,  // id
    logoSrc: "../assets/images/ChronologyOfStellarTrails/logo03.png",  // 任务logo
    rocketName: "神舟七号",  // 火箭名称
    launchDate: "2008 09 15",  // 发射日期
    people: [  // 参与人员
      {
        name: "刘伯明",  // 姓名
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero03_1.jpg",  // 头像图片路径
      },
      {
        name: "聂海胜",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero03_2.jpg",
      },
      {
        name: "景海鹏",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero03_3.jpg",
      }
    ],
    missionStartDate: "2008.09.25 21：10",  // 起飞时间
    flyTime: "2天20时27分",  // 飞行市场
    missionEndDate: "2008.09.28 17：37",  // 着陆时间
    description: "公元2008年09月25日（中元4705年农历09月10日）神舟七号发射升空，成功进入预定轨道，于2008年9月27日进行出舱活动，完成中国人首次太空行走，并实现了小卫星伴飞，成功完成了多项技术试验。于2008年9月28日进入返回程序，返回舱安全着陆于内蒙古预定区域，“神七”载人飞行任务取得圆满成功！"  // 任务描述
  },
  {
    id: 4,  // id
    logoSrc: "../assets/images/ChronologyOfStellarTrails/logo04.png",  // 任务logo
    rocketName: "神舟九号",  // 火箭名称
    launchDate: "2012 06 16",  // 发射日期
    people: [  // 参与人员
      {
        name: "景海鹏",  // 姓名
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero04_1.jpg",  // 头像图片路径
      },
      {
        name: "刘旺",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero04_2.jpg",
      },
      {
        name: "刘洋",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero04_3.jpg",
      }
    ],
    missionStartDate: "2012.06.16 18：37",  // 起飞时间
    flyTime: "12天15时",  // 飞行市场
    missionEndDate: "2012.06.29 10：03",  // 着陆时间
    description: "公元2012年06月16日（中元4709年农历04月27日）神舟九号发射升空，成功进入预定轨道，于2012年6月18日与天宫一号完成自动交会对接工作，建立刚性连接，形成组合体，于2012年6月29日返回舱在内蒙古主着陆场安全着陆。神舟九号任务的圆满成功为今后的载人航天的发展、空间站的建设奠定了良好的基础！"  // 任务描述
  },
  {
    id: 5,  // id
    logoSrc: "../assets/images/ChronologyOfStellarTrails/logo05.png",  // 任务logo
    rocketName: "神舟十号",  // 火箭名称
    launchDate: "2013 06 11",  // 发射日期
    people: [  // 参与人员
      {
        name: "聂海胜",  // 姓名
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero05_1.jpg",  // 头像图片路径
      },
      {
        name: "张晓光",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero05_2.jpg",
      },
      {
        name: "王亚平",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero05_3.jpg",
      }
    ],
    missionStartDate: "2013.06.11 17：38",  // 起飞时间
    flyTime: "15天",  // 飞行市场
    missionEndDate: "2013.06.26 08：27",  // 着陆时间
    description: "公元2013年06月11日（中元4710年农历05月04日）神舟十号发射升空，成功进入预定轨道。飞行期间，王亚平担任主讲老师，向地面课堂演示了几项物理实验，共计6000万名中小学生通过电视转播同步收看，分享宇宙知识，实现了航天工程领域、科普界和教育界在培养青少年方面的无间协作，并为后续空间站工程建设积累经验！"  // 任务描述
  },
  {
    id: 6,  // id
    logoSrc: "../assets/images/ChronologyOfStellarTrails/logo06.png",  // 任务logo
    rocketName: "神舟十一号",  // 火箭名称
    launchDate: "2016 10 17",  // 发射日期
    people: [  // 参与人员
      {
        name: "景海鹏",  // 姓名
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero06_1.jpg",  // 头像图片路径
      },
      {
        name: "陈冬",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero06_2.jpg",
      }
    ],
    missionStartDate: "2016.10.17 07：30",  // 起飞时间
    flyTime: "32天",  // 飞行市场
    missionEndDate: "2016.11.18 13：33",  // 着陆时间
    description: "公元2016年10月17日（中元4713年农历09月17日）神舟十一号发射升空，成功进入预定轨道，于2016年10月19日与天宫二号实现自动交会对接工作，形成组合体。于2016年11月18日进入返回程序，返回舱降落主着陆场。神舟十一号实现中国载人航天工程三步走中从第二步到第三步的跨越，为中国空间站建造运营和航天员长期驻留奠定了坚实的基础！"  // 任务描述
  },
  {
    id: 7,  // id
    logoSrc: "../assets/images/ChronologyOfStellarTrails/logo07.png",  // 任务logo
    rocketName: "神舟十二号",  // 火箭名称
    launchDate: "2021 06 17",  // 发射日期
    people: [  // 参与人员
      {
        name: "聂海胜",  // 姓名
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero07_1.jpg",  // 头像图片路径
      },
      {
        name: "刘伯明",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero07_2.jpg",
      },
      {
        name: "汤洪波",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero07_3.jpg",
      }
    ],
    missionStartDate: "2021.06.17 09：22",  // 起飞时间
    flyTime: "93天",  // 飞行市场
    missionEndDate: "2021.09.17 13：34",  // 着陆时间
    description: "公元2021年06月17日（中元4718年农历05月08日）神舟十二号发射升空，成功进入预定轨道，北京时间2021年6月17日15时54分，神舟十二号载人飞船采用自主快速交会对接模式成功对接于天和核心舱前向端口，与此前已对接的天舟二号货运飞船一起构成三舱（船）组合体。神舟十二号是我国空间站任务首次载人飞行任务，具有重要的里程碑意义！"  // 任务描述
  },
  {
    id: 8,  // id
    logoSrc: "../assets/images/ChronologyOfStellarTrails/logo08.png",  // 任务logo
    rocketName: "神舟十三号",  // 火箭名称
    launchDate: "2021 10 16",  // 发射日期
    people: [  // 参与人员
      {
        name: "王亚平",  // 姓名
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero08_1.jpg",  // 头像图片路径
      },
      {
        name: "翟志刚",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero08_2.jpg",
      },
      {
        name: "叶光富",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero08_3.jpg",
      }
    ],
    missionStartDate: "2021.10.16 00：23",  // 起飞时间
    flyTime: "183天",  // 飞行市场
    missionEndDate: "2022.04.16 09：56",  // 着陆时间
    description: "公元2021年10月16日（中元4718年农历09月11日）神舟十三号发射升空，成功进入预定轨道。“神十三”飞行任务是空间站关键技术验证阶段第六次飞行任务，也是该阶段最后一次飞行任务。神舟十三号载人飞行任务的圆满成功，标志着空间站关键技术验证阶段任务圆满完成，中国空间站即将进入建造阶段！"  // 任务描述
  },
  {
    id: 9,  // id
    logoSrc: "../assets/images/ChronologyOfStellarTrails/logo09.png",  // 任务logo
    rocketName: "神舟十四号",  // 火箭名称
    launchDate: "2022 06 05",  // 发射日期
    people: [  // 参与人员
      {
        name: "陈冬",  // 姓名
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero09_1.jpg",  // 头像图片路径
      },
      {
        name: "刘洋",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero09_2.jpg",
      },
      {
        name: "蔡旭哲",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero09_3.jpg",
      }
    ],
    missionStartDate: "2022.06.05 10：44",  // 起飞时间
    flyTime: "183天",  // 飞行市场
    missionEndDate: "2022.12.04 20：09",  // 着陆时间
    description: "公元2022年06月05日（中元4719年农历05月07日）神舟十四号发射升空，成功进入预定轨道，北京时间2022年6月5日17时42分，成功对接干天和核心舱径向端口，整个对接过程历时约7小时！北京时间2022年11月30日7时33分，神舟十四号乘组迎来神舟十五号3名航天员顺利进驻中国空间站，完成“太空会师〞！"  // 任务描述
  },
  {
    id: 10,  // id
    logoSrc: "../assets/images/ChronologyOfStellarTrails/logo10.png",  // 任务logo
    rocketName: "神舟十五号",  // 火箭名称
    launchDate: "2022 11 29",  // 发射日期
    people: [  // 参与人员
      {
        name: "费俊龙",  // 姓名
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero10_1.jpg",  // 头像图片路径
      },
      {
        name: "邓清明",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero10_2.jpg",
      },
      {
        name: "张陆",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero10_3.jpg",
      }
    ],
    missionStartDate: "2022.11.29 23：08",  // 起飞时间
    flyTime: "187天",  // 飞行市场
    missionEndDate: "2023.06.04 06：33",  // 着陆时间
    description: "公元2022年11月29日（中元4720年农历11月06日），搭载神舟十五号载人飞船的长征二号F遥十五运载火箭在酒泉卫星发射中心点发射升空，成功进入预定轨道。11月30日7时33分，神舟十五号3名航天员顺利进驻中国空间站，与神舟十四号航天员乘组首次实现“太空会师”。此次发射成功标志着空间站关键技术验证和建造阶段规划的12次发射任务全部圆满完成！"  // 任务描述
  },
  {
    id: 11,  // id
    logoSrc: "../assets/images/ChronologyOfStellarTrails/logo11.png",  // 任务logo
    rocketName: "神舟十六号",  // 火箭名称
    launchDate: "2023 05 30",  // 发射日期
    people: [  // 参与人员
      {
        name: "景海鹏",  // 姓名
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero11_1.jpg",  // 头像图片路径
      },
      {
        name: "朱杨柱",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero11_2.jpg",
      },
      {
        name: "桂海潮",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero11_3.jpg",
      }
    ],
    missionStartDate: "2023.05.30 09：31",  // 起飞时间
    flyTime: "154天",  // 飞行市场
    missionEndDate: "2023.10.31 08：11",  // 着陆时间
    description: "公元2023年5月30日（中元4721年农历4月12日），神舟十六号发射升空。神舟十六号任务是中国载人航天工程进入空间站应用与发展阶段的首次载人飞行任务，开展了人因工程、航天医学等多项空间科学实验，在空间生命科学与人体研究、微重力物理和空间新技术等领域取得重要进展，迈出了载人航天工程从建设向应用、从投入向产出转变的重要一步！"  // 任务描述
  },
  {
    id: 12,  // id
    logoSrc: "../assets/images/ChronologyOfStellarTrails/logo12.png",  // 任务logo
    rocketName: "神舟十七号",  // 火箭名称
    launchDate: "2023 10 26",  // 发射日期
    people: [  // 参与人员
      {
        name: "汤洪波",  // 姓名
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero12_1.jpg",  // 头像图片路径
      },
      {
        name: "唐胜杰",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero12_2.jpg",
      },
      {
        name: "江新林",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero12_3.jpg",
      }
    ],
    missionStartDate: "2023.10.26 11：14",  // 起飞时间
    flyTime: "187天",  // 飞行市场
    missionEndDate: "2024.04.30 17：46",  // 着陆时间
    description: "公元2023年10月26日（中元4721年农历9月12日），搭载神舟十七号载人飞船的长征二号F遥十七运载火箭点火发射升空。神舟十七号发射成功并对接中国空间站，标志着中国载人航天走过空间站关键技术验证阶段和建造阶段，突破掌握航天员长期在轨驻留、空间站组装建造、再生式环控生保等8项关键技术，如期建成空间站，展现出新时代中国航天的加速度！"  // 任务描述
  },
  {
    id: 13,  // id
    logoSrc: "../assets/images/ChronologyOfStellarTrails/logo13.png",  // 任务logo
    rocketName: "神舟十八号",  // 火箭名称
    launchDate: "2024 04 25",  // 发射日期
    people: [  // 参与人员
      {
        name: "叶光富",  // 姓名
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero13_1.jpg",  // 头像图片路径
      },
      {
        name: "李聪",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero13_2.jpg",
      },
      {
        name: "李广苏",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero13_3.jpg",
      }
    ],
    missionStartDate: "2024.04.25 20：58",  // 起飞时间
    flyTime: "192天",  // 飞行市场
    missionEndDate: "2024.11.04 01：24",  // 着陆时间
    description: "公元2024年4月25日（中元4722年农历3月17日），神舟十八号发射升空。神舟十八号与神舟十七号乘组完成在轨轮换，开展空间科学与应用实验，实施航天员出舱活动及货物进出舱，进行空间站空间碎片防护装置安装、舱外载荷和舱外设备安装与回收等任务，开展科普教育和公益活动，以及空间搭载试验，进一步提升空间站运行效率，持续发挥综合应用效益！"  // 任务描述
  },
  {
    id: 14,  // id
    logoSrc: "../assets/images/ChronologyOfStellarTrails/logo14.png",  // 任务logo
    rocketName: "神舟十九号",  // 火箭名称
    launchDate: "2024 10 30",  // 发射日期
    people: [  // 参与人员
      {
        name: "蔡旭哲",  // 姓名
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero14_1.jpg",  // 头像图片路径
      },
      {
        name: "宋令东",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero14_2.jpg",
      },
      {
        name: "王浩泽",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero14_3.jpg",
      }
    ],
    missionStartDate: "2024.10.30 04：27",  // 起飞时间
    flyTime: "183天",  // 飞行市场
    missionEndDate: "2025.04.30 13：08",  // 着陆时间
    description: "公元2024年10月30日（中元4722年农历9月28日），神舟十九号载人飞船发射取得圆满成功，神舟十九号航天员乘组顺利进驻中国空间站。神舟十九号飞船发射，中国航天行稳致远，太空探索永无止境。一代代中国航天人努力拼搏、接续奋斗，不断刷新着中国高度，创造着中国奇迹，向着建设航天强国的奋斗目标勇毅前行！"  // 任务描述
  },
  {
    id: 15,  // id
    logoSrc: "../assets/images/ChronologyOfStellarTrails/logo15.png",  // 任务logo
    rocketName: "神舟二十号",  // 火箭名称
    launchDate: "2025 04 24",  // 发射日期
    people: [  // 参与人员
      {
        name: "陈冬",  // 姓名
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero15_1.jpg",  // 头像图片路径
      },
      {
        name: "陈中瑞",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero15_2.jpg",
      },
      {
        name: "王杰",
        imgSrc: "../assets/images/ChronologyOfStellarTrails/hero15_3.jpg",
      }
    ],
    missionStartDate: " 2025.04.24 17：17",  // 起飞时间
    flyTime: "任务执行中",  // 飞行市场
    missionEndDate: "任务执行中",  // 着陆时间
    description: "公元2025年4月24日（中元4723年农历3月27日），神舟二十号发射升空。这一次，是神舟飞船第20次叩问苍穹。这一天，是中国第一颗人造地球卫星“东方红一号”发射成功55周年纪念日，也是第十个“中国航天日”。这一路，是中国人问天求索、迈向星辰大海的漫漫征途。“神舟二十号”的顺利升空，标志着中国航天事业再次取得了新的辉煌成就！"  // 任务描述
  },
]

// 初始化轨道动画
function initOrbitAnimation() {
  // 首先清除所有已有的点
  orbitalCircles.forEach(circle => {
    // 保留轨道圆，清除所有点
    while (circle.firstChild) {
      circle.removeChild(circle.firstChild);
    }
  });

  // 获取轨道容器的尺寸
  const orbitContainer = document.querySelector('.orbital');
  const containerWidth = orbitContainer.offsetWidth;
  const containerHeight = orbitContainer.offsetHeight;

  // 每个轨道圆的大小比例数组
  const sizeRatios = [2 / 12, 3 / 12, 4.5 / 12, 6.5 / 12, 9 / 12, 12 / 12];

  // 为每个轨道圆设置不同的旋转速度和点
  orbitalCircles.forEach((circle, index) => {
    // 计算每个轨道的半径
    const ratio = sizeRatios[index];
    const diameter = Math.min(containerWidth, containerHeight) * ratio;
    const radius = diameter / 2;

    // 设置基础旋转速度和方向（偶数圈顺时针，奇数圈逆时针）
    const baseSpeed = 20;
    const speed = baseSpeed + (index * 5);
    const direction = index % 2 === 0 ? 1 : -1; // 1顺时针，-1逆时针

    // 使用GSAP创建更平滑的旋转动画
    gsap.to(circle, {
      rotation: 360 * direction,
      duration: speed,
      repeat: -1,
      ease: "none"
    });

    // 在每个轨道上添加点
    const dotCount = index === 0 ? 0 : 3 + index; // 第一个轨道没有点，其他轨道点数递增

    for (let i = 0; i < dotCount; i++) {
      // 计算点的位置角度（均匀分布）
      const angle = (360 / dotCount) * i;
      const radian = (angle * Math.PI) / 180;

      // 创建新的点
      const dot = document.createElement('div');
      dot.className = 'dot';

      // 计算并设置点的位置
      const x = radius * Math.cos(radian);
      const y = radius * Math.sin(radian);

      dot.style.position = 'absolute';
      dot.style.left = `calc(50% + ${x}px)`;
      dot.style.top = `calc(50% + ${y}px)`;

      // 添加到轨道
      circle.appendChild(dot);
    }
  });
}

// 初始化星空背景和流星效果
function StartBackground() {
  // 创建星空背景
  new StarBackground(container, {
    starCount: 500,
    starSizeMin: 0.08,
    starSizeMax: 0.24,
    xSpeed: 0.0001,
    ySpeed: 0.0001,
    elapsed: 0,
  });

  // 创建流星效果
  new MeteorEffect(container, {
    maxMeteors: 5,
    zIndex: 1,
  });
}

// 更新页面内容的函数
function updateMissionContent(index, direction) { // index: 目标任务的索引, direction: 切换方向 ('next', 'prev', 'initial')
  if (isAnimating) return;
  isAnimating = true; // 设置动画标志为真

  const mission = missionData[index];
  if (!mission) { // 如果找不到任务数据
    isAnimating = false; // 重置动画标志
    return;
  }

  const performUpdate = () => {
    // 更新Logo
    missionLogo.src = mission.logoSrc;
    missionLogo.alt = mission.rocketName + " logo";
    // 更新火箭名称
    missionRocketName.textContent = mission.rocketName;
    // 更新发射日期
    missionLaunchDate.textContent = mission.launchDate;
    // 更新宇航员信息
    const peopleElements = missionPeoplesContainer.querySelectorAll('.people');
    peopleElements.forEach(el => el.remove()); // 清除已有的宇航员元素 (保留标题)
    mission.people.forEach(person => {
      const personDiv = document.createElement('div');
      personDiv.classList.add('people');
      personDiv.innerHTML = `
        <img src="${person.imgSrc}" alt="宇航员 ${person.name}" class="avatar">
        <h3 class="name">${person.name}</h3>
      `;
      missionPeoplesContainer.appendChild(personDiv);
    });
    // 更新发射信息
    missionLaunchInfoContainer.innerHTML = `
      <h3>起飞时间：${mission.missionStartDate}</h3>
      <h3>飞行时长：${mission.flyTime}</h3>
      <h3>降落时间：${mission.missionEndDate}</h3>
    `;
    // 更新任务描述
    missionDetailContent.textContent = mission.description;
  };

  if (direction === 'initial') { // 如果是初始加载
    performUpdate();
    // 使用GSAP动画显示初始内容
    gsap.fromTo(infoContainer, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
    setTimeout(() => {
      isAnimating = false; // 动画结束后，重置动画标志
    }, 800);
  } else {
    // 使用GSAP Timeline创建更流畅的切换动画
    const timeline = gsap.timeline({
      onComplete: () => {
        isAnimating = false; // 动画结束后，重置动画标志
      }
    });

    // 根据方向设置滑出动画
    if (direction === 'next') {
      // 向上滑出
      timeline.to(infoContainer, {
        y: -window.innerHeight,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in"
      });
    } else {
      // 向下滑出
      timeline.to(infoContainer, {
        y: window.innerHeight,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in"
      });
    }

    // 在动画中间点更新内容
    timeline.add(() => {
      performUpdate();
      // 重置容器位置和透明度以准备滑入动画
      gsap.set(infoContainer, { y: direction === 'next' ? window.innerHeight : -window.innerHeight, opacity: 0 });
    }, 0.25);

    // 根据方向设置滑入动画
    if (direction === 'next') {
      // 从下方滑入
      timeline.fromTo(infoContainer,
        { y: window.innerHeight, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        0.3
      );
    } else {
      // 从上方滑入
      timeline.fromTo(infoContainer,
        { y: -window.innerHeight, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        0.3
      );
    }
  }
}

// 处理导航按钮点击
function handleNavigation() {
  // 创建波纹效果的函数
  function createRipple(event, button) {
    const circle = document.createElement("span");
    circle.classList.add("ripple");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    button.appendChild(circle);
    
    // 清理波纹元素
    setTimeout(() => {
      circle.remove();
    }, 600);
  }

  lastCircle.addEventListener("mouseenter", function () {
    // 悬停进入动画
    gsap.to(lastCircle, {
      scale: 1.1,
      boxShadow: "inset 0px 0px 3px 2px rgba(128, 48, 150), 0 0 0 8px rgba(152, 117, 161, 0.4)",
      duration: 0.3,
      ease: "power2.out"
    });
    
    // SVG图标颜色变化
    gsap.to(lastCircle.querySelector('svg path'), {
      fill: "#a0d8ff",
      duration: 0.3,
      ease: "power2.out"
    });
  });

  lastCircle.addEventListener("mouseleave", function () {
    // 悬停离开动画
    gsap.to(lastCircle, {
      scale: 1,
      boxShadow: "inset 0px 0px 3px 2px rgba(128, 48, 150), 0 0 0 0 rgba(152, 117, 161, 0.4)",
      duration: 0.3,
      ease: "power2.out"
    });
    
    // SVG图标颜色恢复
    gsap.to(lastCircle.querySelector('svg path'), {
      fill: "#ffffff",
      duration: 0.3,
      ease: "power2.out"
    });
  });

  nextCircle.addEventListener("mouseenter", function () {
    // 悬停进入动画
    gsap.to(nextCircle, {
      scale: 1.1,
      boxShadow: "inset 0px 0px 3px 2px rgba(128, 48, 150), 0 0 0 8px rgba(152, 117, 161, 0.4)",
      duration: 0.3,
      ease: "power2.out"
    });
    
    // SVG图标颜色变化
    gsap.to(nextCircle.querySelector('svg path'), {
      fill: "#a0d8ff",
      duration: 0.3,
      ease: "power2.out"
    });
  });

  nextCircle.addEventListener("mouseleave", function () {
    // 悬停离开动画
    gsap.to(nextCircle, {
      scale: 1,
      boxShadow: "inset 0px 0px 3px 2px rgba(128, 48, 150), 0 0 0 0 rgba(152, 117, 161, 0.4)",
      duration: 0.3,
      ease: "power2.out"
    });
    
    // SVG图标颜色恢复
    gsap.to(nextCircle.querySelector('svg path'), {
      fill: "#ffffff",
      duration: 0.3,
      ease: "power2.out"
    });
  });

  lastCircle.addEventListener("click", function (event) {
    if (isAnimating) return;
    
    // 创建波纹效果
    createRipple(event, lastCircle);
    
    // 按钮点击动画
    const tl = gsap.timeline();
    tl.to(lastCircle, {
      scale: 0.9,
      duration: 0.1,
      ease: "power2.out"
    })
    .to(lastCircle, {
      scale: 1,
      duration: 0.2,
      ease: "back.out(1.7)"
    });
    
    // SVG图标旋转动画
    gsap.to(lastCircle.querySelector('svg'), {
      rotation: 450,
      duration: 0.5,
      ease: "back.out(1.7)"
    });
    
    currentMissionIndex--;
    if (currentMissionIndex < 0) {
      currentMissionIndex = missionData.length - 1; // 循环到最后一个
    }
    updateMissionContent(currentMissionIndex, 'prev');
  });

  nextCircle.addEventListener("click", function (event) {
    if (isAnimating) return;
    
    // 创建波纹效果
    createRipple(event, nextCircle);
    
    // 按钮点击动画
    const tl = gsap.timeline();
    tl.to(nextCircle, {
      scale: 0.9,
      duration: 0.1,
      ease: "power2.out"
    })
    .to(nextCircle, {
      scale: 1,
      duration: 0.2,
      ease: "back.out(1.7)"
    });
    
    // SVG图标旋转动画
    gsap.to(nextCircle.querySelector('svg'), {
      rotation: -450,
      duration: 0.5,
      ease: "back.out(1.7)"
    });
    
    currentMissionIndex++;
    if (currentMissionIndex >= missionData.length) {
      currentMissionIndex = 0; // 循环到第一个
    }
    updateMissionContent(currentMissionIndex, 'next');
  });
}

/**
 * 根据localStorage中的ID初始化当前任务索引
 */
function initCurrentMissionIndex() {
  const selectedCardId = localStorage.getItem('selectedCardId');

  if (selectedCardId) {
    // 根据ID查找对应的任务索引
    const missionIndex = missionData.findIndex(mission => mission.id == selectedCardId);

    if (missionIndex !== -1) {
      currentMissionIndex = missionIndex;
    } else {
      // 如果找不到对应的ID，默认显示第一个
      currentMissionIndex = 0;
    }

    // 清除localStorage中的数据，避免下次进入时还是这个ID
    localStorage.removeItem('selectedCardId');
  } else {
    // 如果没有存储的ID，默认显示第一个
    currentMissionIndex = 0;
  }
}

/**
 * 处理返回按钮点击
 */
function handleBackButton() {
  const backButton = document.querySelector('.arrow');
  if (backButton) {
    backButton.addEventListener('click', (e) => {
      e.preventDefault();

      // 保存当前任务的ID到localStorage，用于返回时滚动定位
      const currentMission = missionData[currentMissionIndex];
      if (currentMission) {
        localStorage.setItem('scrollToCardId', currentMission.id);
      }

      // 跳转回列表页
      window.location.href = 'ChronologyOfStellarTrails.html';
    });
  }
}

// resize
window.addEventListener('resize', () => {
  initOrbitAnimation();
});

// 初始化页面
document.addEventListener("DOMContentLoaded", function () {
  // 初始化GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  
  initCurrentMissionIndex(); // 根据localStorage初始化任务索引
  StartBackground(); // 初始化星空背景和流星效果
  initOrbitAnimation(); // 初始化轨道动画
  updateMissionContent(currentMissionIndex, 'initial'); // 初始加载对应的任务数据
  handleNavigation(); // 设置导航按钮的点击事件监听
  handleBackButton(); // 设置返回按钮的点击事件监听
  
  // 添加按钮入场动画
  gsap.from([lastCircle, nextCircle], {
    duration: 0.8,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: "back.out(1.7)",
    onComplete: function() {
      // 添加按钮发光效果以吸引注意
      setTimeout(() => {
        lastCircle.classList.add('glow');
        nextCircle.classList.add('glow');
        
        // 3秒后移除发光效果
        setTimeout(() => {
          lastCircle.classList.remove('glow');
          nextCircle.classList.remove('glow');
        }, 3000);
      }, 500);
    }
  });
  
  // 初始化鼠标控制器
  new Mouse({
    defaultCursor: '../assets/images/common/MouseDefault.svg',
    clickCursor: '../assets/images/common/MouseClick.svg',
  });
});
