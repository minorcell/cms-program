const bar = document.querySelector('.bar');

const cards = [
  {
    id: 1,
    imgSrc: "../assets/images/ChronologyOfStellarTrails/01.jpg",
    year: "2003",
    description: "神舟五号（Shenzhou V，简称“神五”），是中国载人航天工程发射的第五艘飞船，也是中华人民共和国发射的第一艘载人航天飞船。",
    title: "发射第一颗载人航天飞船"
  },
  {
    id: 2,
    imgSrc: "../assets/images/ChronologyOfStellarTrails/02.jpg",
    year: "2005",
    description: "神舟六号，简称“神六”，为中国载人航天工程发射的第六艘飞船，是中国的第二次载人航天飞行任务、人类世界上第243次太空飞行，也是中国“三步走”空间发展战略的第二阶段。",
    title: "三步走空间发展战略的第二阶段"
  },
  {
    id: 3,
    imgSrc: "../assets/images/ChronologyOfStellarTrails/03.jpg",
    year: "2008",
    description: "中国于1980年成神舟七号（Shenzhou VII，简称：神七），是中国载人航天工程发射的第七艘飞船，是中国的第三次载人航天飞行任务，也是中国“三步走”空间发展战略的第二阶段。功发射了第一颗实用气象卫星风云一号，标志着中国掌握了气象卫星技术。",
    title: "中国“三步走”空间发展战略的第二阶段"
  },
  {
    id: 4,
    imgSrc: "../assets/images/ChronologyOfStellarTrails/04.jpg",
    year: "2012",
    description: "神舟九号（简称“神九”）为中国载人航天工程发射的第九艘飞船，是中国的第四次载人航天飞行任务，也是中国首次载人交会对接任务。",
    title: "中国首次载人交会对接任务"
  },
  {
    id: 5,
    imgSrc: "../assets/images/ChronologyOfStellarTrails/05.jpg",
    year: "2013",
    description: "神舟十号（简称“神十”），是中国载人航天工程发射的第十艘飞船，也是中国的第五次载人航天飞行任务。",
    title: "航天员王亚平首次进入太空"
  },
  {
    id: 6,
    imgSrc: "../assets/images/ChronologyOfStellarTrails/06.jpg",
    year: "2016",
    description: "神舟十一号（简称“神十一”），为中国载人航天工程发射的第十一艘飞船，是中国第六次载人飞行任务，也是创造中国载人航天在轨飞行时间的新纪录的重要里程碑。",
    title: "在轨飞行时间的新纪录的重要里程碑"
  },
  {
    id: 7,
    imgSrc: "../assets/images/ChronologyOfStellarTrails/07.jpg",
    year: "2021",
    description: "神舟十二号（英文：Shenzhou-12或Shenzhou Ⅻ ，简称：神十二），是中国载人航天工程发射的第十二艘飞船，也是空间站关键技术验证阶段第四次飞行任务和空间站阶段首次载人飞行任务。",
    title: "第四次飞行任务和空间站阶段首次载人飞行任务"
  },
  {
    id: 8,
    imgSrc: "../assets/images/ChronologyOfStellarTrails/08.jpg",
    year: "2021",
    description: "神舟十三号（Shenzhou XIII 或 Shenzhou-13，简称“神十三”），为中国载人航天工程发射的第十三艘飞船，是中国空间站关键技术验证阶段第六次飞行，也是该阶段最后一次飞行任务。",
    title: "女航天员王亚平二次进入太空"
  },
  {
    id: 9,
    imgSrc: "../assets/images/ChronologyOfStellarTrails/09.jpg",
    year: "2022",
    description: "神舟十四号（英文：Shenzhou-14，英文又称：Shenzhou XIV，简称：神十四），为中国载人航天工程发射的第十四艘飞船，是中国空间站组合体之一。",
    title: "中国空间站组合体之一"
  },
  {
    id: 10,
    imgSrc: "../assets/images/ChronologyOfStellarTrails/10.jpg",
    year: "2022",
    description: " 神舟十五号（英文：Shenzhou-15，又称：Shenzhou XV，简称：神十五），是中国发射载人航天工程的第十五艘飞船。",
    title: "发射第十五艘飞船"
  },
  {
    id: 11,
    imgSrc: "../assets/images/ChronologyOfStellarTrails/11.jpg",
    year: "2023",
    description: "神舟十六号（Shenzhou XVI 或 Shenzhou-16，简称：神十六），是中国载人航天工程神舟系列载人飞船的第十六艘飞船。中国空间站应用与发展阶段的首艘载人飞船。",
    title: "中国空间站应用与发展阶段的首艘载人飞船"
  },
  {
    id: 12,
    imgSrc: "../assets/images/ChronologyOfStellarTrails/12.jpg",
    year: "2023",
    description: "神舟十七号（Shenzhou XVII，简称：神十七），为中国载人航天工程的第十七艘飞船。",
    title: "发射第十七艘飞船"
  },
  {
    id: 13,
    imgSrc: "../assets/images/ChronologyOfStellarTrails/13.jpg",
    year: "2024",
    description: "中国于1980年成功神舟十八号（Shenzhou XVIII ,简称神十八），是中国自行研制的用于天地往返运输人员和物资的载人航天器，飞船由轨道舱、返回舱和推进舱构成，是中国可靠性、安全性要求最严苛的航天器。发射了第一颗实用气象卫星风云一号，标志着中国掌握了气象卫星技术。",
    title: "中国可靠性、安全性要求最严苛的航天器"
  },
  {
    id: 14,
    imgSrc: "../assets/images/ChronologyOfStellarTrails/14.jpg",
    year: "2024",
    description: "神舟十九号（Shenzhou XIX，简称：神十九），是由中国航天科技集团五院抓总研制，为中国载人航天工程的第十九艘神舟载人飞船。",
    title: "中国载人航天工程的第十九艘神舟载人飞船"
  },
  {
    id: 15,
    imgSrc: "../assets/images/ChronologyOfStellarTrails/15.jpg",
    year: "2025",
    description: "神舟二十号（Shenzhou20，Shenzhou XX，简称：神二十），是由航天科技集团五院抓总研制的用于天地往返运输人员和物资的载人航天器，是中国载人航天工程的第二十艘神舟系列载人飞船，中国载人航天进入中国空间站应用与发展阶段的第五艘飞船。",
    title: "中国空间站应用与发展阶段的第五艘飞船"
  },
]


/**
 * 渲染卡片到指定容器
 * @param {HTMLElement} container - 卡片容器
 * @param {Array} cardsData - 卡片数据
 */
function renderCards(container, cardsData) {
  // 清空容器
  container.innerHTML = '';

  // reverse
  cardsData.reverse();

  // 遍历卡片数据生成HTML
  cardsData.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-id', card.id);

    let btn = '';
    if (index % 2 === 0) {
      btn = `<button class="detail-btn" data-id="${card.id}">
            查看详情
            <svg xmlns="http://www.w3.org/2000/svg" style="margin-left: 2rem;" width="128" height="128" viewBox="0 0 24 24"><path fill="#ffffff" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z"/></svg>
          </button>`

    } else {
      btn = `<button class="detail-btn" data-id="${card.id}">
            <svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 2rem;" width="128" height="128" viewBox="0 0 24 24"><path fill="#ffffff" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z"/></svg>
            查看详情
          </button>`
    }


    cardElement.innerHTML = `
        <div class="left">
          <div class="card-image"
          style="background-image: url('${card.imgSrc}'); background-size: cover; background-position: center; background-repeat: no-repeat;"
        ></div>
        <div class="card-content">
          <div class="card-year">${card.year}</div>
          <div class="card-description">${card.description}</div>
          ${btn}
        </div>
        </div>
        <div class="bar"></div>
        <div class="right">
          <div class="card-title">${card.title}</div>
        </div>
    `;

    container.appendChild(cardElement);
  });

  // 添加详情按钮点击事件监听
  addDetailButtonListeners();
  
  // 重新刷新ScrollTrigger以识别新添加的元素
  ScrollTrigger.refresh();
}

/**
 * 为详情按钮添加点击事件监听
 */
function addDetailButtonListeners() {
  const detailButtons = document.querySelectorAll('.detail-btn');

  detailButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const cardId = button.getAttribute('data-id');

      // 将选中的卡片ID存储到localStorage
      localStorage.setItem('selectedCardId', cardId);

      // 跳转到详情页
      window.location.href = 'ChronologyOfStellarTrailsDetails.html';
    });
  });
}

/**
 * 使用GSAP ScrollTrigger监听卡片进入视口并添加动画效果
 */
function observeCards() {
  gsap.utils.toArray('.card').forEach(card => {
    gsap.fromTo(card, 
      { 
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          // markers: true // 可选：用于调试，显示触发标记
        }
      }
    );
  });
}

/**
 * 使用GSAP ScrollTrigger监视年份进入视口并添加动画效果
 */
function observeYears() {
  gsap.utils.toArray('.card-year').forEach(year => {
    gsap.fromTo(year,
      {
        opacity: 0,
        x: (index, target) => {
          // 根据卡片是奇数还是偶数来确定动画方向
          const card = target.closest('.card');
          return card && card.classList.contains('card:nth-child(even)') ? -100 : 100;
        },
        y: -50,
        scale: 0.8
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: year,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          // markers: true // 可选：用于调试，显示触发标记
        }
      }
    );
  });
}

/**
 * 使用GSAP ScrollTrigger监视标题进入视口并添加动画效果
 */
function observeTitles() {
  gsap.utils.toArray('.card-title').forEach(title => {
    gsap.fromTo(title,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
          end: "top 60%",
          toggleActions: "play none none reverse",
          // markers: true // 可选：用于调试，显示触发标记
        }
      }
    );
  });
}

/**
 * 滚动到指定ID的卡片
 */
function scrollToCard() {
  const scrollToCardId = localStorage.getItem('scrollToCardId');

  if (scrollToCardId) {
    // 清除localStorage中的数据
    localStorage.removeItem('scrollToCardId');

    // 等待页面渲染完成后再滚动
    setTimeout(() => {
      const targetCard = document.querySelector(`[data-id="${scrollToCardId}"]`);

      if (targetCard) {
        // 滚动到目标卡片，并居中显示
        targetCard.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });

        // 添加高亮效果
        targetCard.style.transition = 'all 0.5s ease';
        targetCard.style.transform = 'scale(1.02)';

        // 3秒后移除高亮效果
        setTimeout(() => {
          targetCard.style.transform = '';
        }, 2000);
      }
    }, 200); // 等待500ms确保页面渲染完成
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('.header');
  const starContainer = document.querySelector('.star-bg');
  const scrollContainer = document.querySelector('.container');
  const cardsContainer = document.querySelector('.cards');

  // 初始化GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  
  // 刷新ScrollTrigger以确保正确计算
  ScrollTrigger.refresh();

  // 初始化头部控制器
  new HeaderController(header, { scrollContainer });

  // 初始化星空背景
  new StarBackground(starContainer, {
    starCount: 500,
    starSizeMin: 0.08,
    starSizeMax: 0.16,
    xSpeed: 0.0002,
    ySpeed: 0.0002,
    elapsed: 0,
  });

  // 初始化流星效果
  new MeteorEffect(starContainer, {
    maxMeteors: 20,
    zIndex: 1,
  });

  // 渲染卡片
  renderCards(cardsContainer, cards);

  // 监听卡片可见性
  observeCards();

  // 监听年份可见性
  observeYears();

  // 监听标题可见性
  observeTitles();

  // 检查是否需要滚动到特定卡片
  scrollToCard();

  // 初始化鼠标控制器
  new Mouse({
    defaultCursor: '../assets/images/common/MouseDefault.svg',
    clickCursor: '../assets/images/common/MouseClick.svg',
  });
});