class BackgroundMusic {
    constructor() {
        this.audio = document.getElementById('bgm');
        this.fadeInDuration = 10000;
        this.init();
    }

    init() {
        this.audio.volume = 0;

        const startPlayback = () => {
            this.audio.play();
            this.fadeIn();
            ['click', 'touchstart', 'keydown'].forEach(event => {
                document.removeEventListener(event, startPlayback);
            });
        };

        ['click', 'touchstart', 'keydown'].forEach(event => {
            document.addEventListener(event, startPlayback);
        });
    }

    fadeIn() {
        const startTime = performance.now();
        const startVolume = 0;
        const targetVolume = 0.3;

        const updateVolume = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(Math.max(elapsed / this.fadeInDuration, 0), 1);

            const volume = startVolume + (targetVolume - startVolume) * progress;
            this.audio.volume = Math.min(Math.max(volume, 0), 1);

            if (progress < 1) {
                requestAnimationFrame(updateVolume);
            }
        };

        requestAnimationFrame(updateVolume);
    }
}

const config = {
    gridHeight: 7,  // 设置网格的垂直方向上有多少行
    gridWidth: 12,  // 设置网格的水平方向上有多少列
    cellSize: 40,   // 设置网格单元格的大小（以像素为单位）
    mouseInfluenceRadius: 200,  // 设置鼠标影响网格的范围（以像素为单位），越大对性能要求越高
    throttleDelay: 20, // 鼠标移动事件的节流延迟（毫秒）
};

class InteractiveGrid {
    constructor(gridElement) {
        this.grid = gridElement;
        this.cells = [];
        this.rows = 7;
        this.cols = 12;
        this.setupGrid();
        this.setupEventListeners();
    }

    setupGrid() {
        // 创建格子
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const div = document.createElement("div");
                div.classList.add("grid-cell");
                div.dataset.row = row;
                div.dataset.col = col;
                this.grid.appendChild(div);
                this.cells.push(div);
            }
        }
    }

    setupEventListeners() {
        this.cells.forEach((cell) => {
            cell.addEventListener("mouseenter", () => {
                const row = parseInt(cell.dataset.row);
                const col = parseInt(cell.dataset.col);
                this.highlight(row, col);
            });
        });

        this.grid.addEventListener("mouseleave", () => {
            this.resetGrid();
        });
    }

    // 高亮边框函数
    highlight(row, col) {
        const radius = 1.5;
        this.cells.forEach((cell) => {
            const r = parseInt(cell.dataset.row);
            const c = parseInt(cell.dataset.col);
            const dist = Math.hypot(r - row, c - col);

            if (dist <= radius) {
                const intensity = 1 - dist / radius;
                const glow = Math.floor(200 + 55 * intensity);
                const color = `rgb(${glow}, ${glow}, ${glow})`;

                if (window.gsap) {
                    gsap.to(cell, {
                        borderColor: color,
                        boxShadow: `0 0 ${10 * intensity}px ${color}`,
                        duration: 0.2
                    });
                }
            } else {
                if (window.gsap) {
                    gsap.to(cell, {
                        borderColor: "rgba(255, 255, 255, 0.1)",
                        boxShadow: "none",
                        duration: 0.5
                    });
                } else {
                    cell.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    cell.style.boxShadow = "none";
                }
            }
        });
    }

    resetGrid() {
        this.cells.forEach((cell) => {
            if (window.gsap) {
                gsap.to(cell, {
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "none",
                    duration: 0.5
                });
            } else {
                cell.style.borderColor = "rgba(255, 255, 255, 0.1)";
                cell.style.boxShadow = "none";
            }
        });
    }
}

class PlanetStars {
    constructor() {
        this.canvas = document.querySelector('.planet-canvas');
        if (!this.canvas) return;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true
        });

        this.stars = [];
        this.init();
        this.animate();
    }

    init() {
        // 设置渲染器尺寸
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        // 设置相机位置
        this.camera.position.z = 5;

        // 创建星星
        const starGeometry = new THREE.SphereGeometry(0.01, 5, 5);
        const starMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true
        });

        // 创建多个星星
        for (let i = 0; i < 50; i++) {
            const star = new THREE.Mesh(starGeometry, starMaterial.clone());

            // 随机位置
            star.position.x = (Math.random() - 0.4) * 10;
            star.position.y = (Math.random() - 0.5) * 5;
            star.position.z = (Math.random() - 0.5) * 5;

            // 为每个星星添加动画属性
            star.userData = {
                speed: Math.random() * 0.001 + 0.001,
                opacity: Math.random() * 0.5 + 0.5
            };

            this.stars.push(star);
            this.scene.add(star);
        }

        // 监听窗口大小变化
        window.addEventListener('resize', () => this.onWindowResize());
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // 更新星星位置和透明度
        this.stars.forEach(star => {
            // 向上移动
            star.position.y += star.userData.speed;

            // 透明度闪烁
            const material = star.material;
            material.opacity = star.userData.opacity * (0.7 + 0.3 * Math.sin(Date.now() * 0.003));

            // 如果星星超出视野，重置到底部
            if (star.position.y > 3) {
                star.position.y = -3;
                star.position.x = (Math.random() - 0.5) * 5;
                star.position.z = (Math.random() - 0.5) * 5;
            }
        });

        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    }
}

function makeGradientFollowMouse() {
    const intro = document.querySelector('.intro');
    if (!intro) return;

    let degree = 0;
    let increasing = true;
    let lastTime = 0;
    let autoAnimId = null;
    let isThrottled = false;
    let pendingUpdate = false;
    let targetDegree = 0;

    function calcDegree(x) {
        const w = window.innerWidth;
        return (x / w) * 360;
    }

    function updateBackground(deg) {
        intro.style.background = `
        linear-gradient(
          ${deg.toFixed(1)}deg,
          rgba(127,48,150,0.2) 0%,
          rgba(70,48,191,0.1) 10%,
          rgba(0,0,0,0.2) 100%
        )
      `;
    }

    // 平滑插值函数
    function lerp(start, end, factor) {
        return start + (end - start) * factor;
    }

    function startAutoAnimation() {
        lastTime = performance.now();
        function animate(time) {
            const delta = (time - lastTime) / 1000;
            lastTime = time;

            const speed = 30;
            if (increasing) {
                degree = (degree + speed * delta) % 360;
            } else {
                degree = (degree - speed * delta + 360) % 360;
            }

            updateBackground(degree);
            autoAnimId = requestAnimationFrame(animate);
        }

        if (autoAnimId === null) {
            autoAnimId = requestAnimationFrame(animate);
        }
    }

    function stopAutoAnimation() {
        if (autoAnimId !== null) {
            cancelAnimationFrame(autoAnimId);
            autoAnimId = null;
        }
    }

    // 节流的背景更新函数
    function throttledUpdate() {
        if (isThrottled) {
            pendingUpdate = true;
            return;
        }

        isThrottled = true;

        // 使用平滑插值让过渡更自然
        const smoothStep = () => {
            const diff = targetDegree - degree;

            // 处理角度循环（0-360度）
            let shortestDiff = diff;
            if (Math.abs(diff) > 180) {
                if (diff > 0) {
                    shortestDiff = diff - 360;
                } else {
                    shortestDiff = diff + 360;
                }
            }

            // 使用缓动插值
            degree += shortestDiff * 0.3;

            // 确保角度在0-360范围内
            if (degree < 0) degree += 360;
            if (degree >= 360) degree -= 360;

            updateBackground(degree);

            // 如果还没到达目标角度，继续动画
            if (Math.abs(shortestDiff) > 0.1) {
                requestAnimationFrame(smoothStep);
            } else {
                degree = targetDegree;
                updateBackground(degree);
            }
        };

        requestAnimationFrame(smoothStep);

        setTimeout(() => {
            isThrottled = false;
            if (pendingUpdate) {
                pendingUpdate = false;
                throttledUpdate();
            }
        }, 16); // 约60fps的节流
    }

    intro.addEventListener('mouseenter', () => {
        stopAutoAnimation();
    });

    intro.addEventListener('mousemove', e => {
        const newDeg = calcDegree(e.clientX);
        increasing = newDeg >= degree;
        targetDegree = newDeg;
        throttledUpdate();
    });

    intro.addEventListener('mouseleave', () => {
        startAutoAnimation();
    });

    startAutoAnimation();
}

function rocketShow() {
    const rocket = document.querySelector('.rocket-line-draft');
    const page = document.querySelectorAll('.page')[1];

    if (!rocket || !page) return;

    let isVisible = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isVisible) {
                rocket.style.animation = 'rocket-show 1.2s ease-out forwards';
                isVisible = true;
            }
            else if (!entry.isIntersecting && isVisible) {
                rocket.style.animation = 'none';
                rocket.style.opacity = '0';
                rocket.style.transform = 'translateY(100vh)';
                isVisible = false;

                setTimeout(() => {
                    rocket.style.transition = 'none';
                }, 500);
            }
        });
    }, {
        threshold: 0.01,
        root: null
    });

    observer.observe(page);
}

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const container = document.querySelector('.container');
    const pages = document.querySelectorAll('.page');
    const starsBgOfPageFive = document.querySelector('.stars-bg')
    // 导航栏控制
    new HeaderController(header, { container });
    // 背景音乐控制
    new BackgroundMusic();
    // 第二页背景图控制
    makeGradientFollowMouse();
    // 火箭线稿控制
    rocketShow();

    // 前三页面特效
    for (let i = 0; i < Math.min(3, pages.length); i++) {
        // 添加星空背景
        new StarBackground(pages[i]);

        // 在第二页添加流星效果
        if (i == 1) {
            new MeteorEffect(pages[i], {
                maxMeteors: 5,
                zIndex: 1,
                meteor: {
                    startXMin: 50,
                    startXMax: 100,
                    startYMin: 0,
                    startYMax: 30,
                    lengthMin: 10,
                    lengthMax: 20,
                    angleMin: 150,
                    angleMax: 180,
                    speedMin: 1,
                    speedMax: 2,
                    widthMin: 0.1,
                    widthMax: 0.2,
                    tailLengthMin: 1.2,
                    tailLengthMax: 2
                }
            });
        }
    }

    // 第五页面的部分的流行效果
    if (starsBgOfPageFive) {
        new StarBackground(starsBgOfPageFive, {
            starCount: 500,
            starSizeMin: 0.1,
            starSizeMax: 0.2,
            xSpeed: 0.0003,
            ySpeed: 0.0003
        });
    }

    const gridElement = document.getElementById('grid');
    if (gridElement) {
        new InteractiveGrid(gridElement);
    }

    // 第四页面的行星星星效果
    new PlanetStars();

    // 鼠标特效
    new Mouse({
        defaultCursor: './assets/images/common/MouseDefault.svg',
        clickCursor: './assets/images/common/MouseClick.svg',
    });
});
