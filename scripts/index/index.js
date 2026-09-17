class BackgroundMusic {
    constructor() {
        this.audio = document.getElementById('bgm')
        this.fadeInDuration = 10000
        this.init()
    }

    init() {
        this.audio.volume = 0

        const startPlayback = () => {
            this.audio.play().catch(() => {})
            this.fadeIn();
            ['click', 'touchstart', 'keydown'].forEach(event => {
                document.removeEventListener(event, startPlayback)
            })
        };

        ['click', 'touchstart', 'keydown'].forEach(event => {
            document.addEventListener(event, startPlayback)
        })
    }

    fadeIn() {
        const startTime = performance.now()
        const startVolume = 0
        const targetVolume = 0.3

        const updateVolume = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(Math.max(elapsed / this.fadeInDuration, 0), 1)

            const volume = startVolume + (targetVolume - startVolume) * progress
            this.audio.volume = Math.min(Math.max(volume, 0), 1)

            if (progress < 1) {
                requestAnimationFrame(updateVolume)
            }
        }

        requestAnimationFrame(updateVolume)
    }
}

class InteractiveGrid {
    constructor(canvas) {
        this.canvas = canvas
        this.context = canvas.getContext('2d')
        this.rows = 6
        this.cols = 10
        this.pointer = null
        this.frame = null

        new ResizeObserver(() => this.resize()).observe(canvas)
        canvas.addEventListener('pointermove', (event) => this.onPointerMove(event), { passive: true })
        canvas.addEventListener('pointerleave', () => {
            this.pointer = null
            this.scheduleDraw()
        })
        this.resize()
    }

    resize() {
        const { width, height } = this.canvas.getBoundingClientRect()
        const pixelRatio = Math.min(window.devicePixelRatio, 2)
        this.canvas.width = Math.round(width * pixelRatio)
        this.canvas.height = Math.round(height * pixelRatio)
        this.context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
        this.width = width
        this.height = height
        this.draw()
    }

    onPointerMove(event) {
        const bounds = this.canvas.getBoundingClientRect()
        this.pointer = {
            column: (event.clientX - bounds.left) / (bounds.width / this.cols) - 0.5,
            row: (event.clientY - bounds.top) / (bounds.height / this.rows) - 0.5,
        }
        this.scheduleDraw()
    }

    scheduleDraw() {
        if (this.frame) return
        this.frame = requestAnimationFrame(() => {
            this.frame = null
            this.draw()
        })
    }

    draw() {
        const context = this.context
        const cellWidth = this.width / this.cols
        const cellHeight = this.height / this.rows

        context.clearRect(0, 0, this.width, this.height)

        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.cols; column++) {
                const distance = this.pointer
                    ? Math.hypot(row - this.pointer.row, column - this.pointer.column)
                    : Infinity
                const intensity = Math.max(0, 1 - distance / 1.8)

                context.strokeStyle = `rgba(255, 255, 255, ${0.045 + intensity * 0.4})`
                context.shadowColor = `rgba(159, 135, 255, ${intensity * 0.45})`
                context.shadowBlur = intensity * 14
                context.lineWidth = 1
                context.strokeRect(
                    column * cellWidth + 0.5,
                    row * cellHeight + 0.5,
                    cellWidth - 1,
                    cellHeight - 1
                )
            }
        }

        context.shadowBlur = 0
    }
}

class PlanetStars {
    constructor() {
        this.canvas = document.querySelector('.planet-canvas')
        if (!this.canvas) return

        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(75, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 1000)
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true
        })

        this.stars = []
        this.isVisible = false
        this.init()
        this.animate()
    }

    init() {
        // 设置渲染器尺寸
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        // 设置相机位置
        this.camera.position.z = 5

        // 创建星星
        const starGeometry = new THREE.SphereGeometry(0.01, 5, 5)
        const starMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true
        })

        // 创建多个星星
        for (let i = 0; i < 50; i++) {
            const star = new THREE.Mesh(starGeometry, starMaterial.clone())

            // 随机位置
            star.position.x = (Math.random() - 0.4) * 10
            star.position.y = (Math.random() - 0.5) * 5
            star.position.z = (Math.random() - 0.5) * 5

            // 为每个星星添加动画属性
            star.userData = {
                speed: Math.random() * 0.001 + 0.001,
                opacity: Math.random() * 0.5 + 0.5
            }

            this.stars.push(star)
            this.scene.add(star)
        }

        new IntersectionObserver(([entry]) => {
            this.isVisible = entry.isIntersecting
        }, { rootMargin: '100px' }).observe(this.canvas)

        // 监听窗口大小变化
        window.addEventListener('resize', () => this.onWindowResize())
    }

    animate() {
        requestAnimationFrame(() => this.animate())

        if (!this.isVisible || document.hidden) return

        // 更新星星位置和透明度
        this.stars.forEach(star => {
            // 向上移动
            star.position.y += star.userData.speed

            // 透明度闪烁
            const material = star.material
            material.opacity = star.userData.opacity * (0.7 + 0.3 * Math.sin(Date.now() * 0.003))

            // 如果星星超出视野，重置到底部
            if (star.position.y > 3) {
                star.position.y = -3
                star.position.x = (Math.random() - 0.5) * 5
                star.position.z = (Math.random() - 0.5) * 5
            }
        })

        this.renderer.render(this.scene, this.camera)
    }

    onWindowResize() {
        this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight)
    }
}

function makeGradientFollowMouse() {
    const intro = document.querySelector('.intro')
    if (!intro) return

    let degree = 0
    let increasing = true
    let lastTime = 0
    let autoAnimId = null
    let isThrottled = false
    let pendingUpdate = false
    let targetDegree = 0

    function calcDegree(x) {
        const w = window.innerWidth
        return (x / w) * 360
    }

    function updateBackground(deg) {
        intro.style.background = `
        linear-gradient(
          ${deg.toFixed(1)}deg,
          rgba(127,48,150,0.2) 0%,
          rgba(70,48,191,0.1) 10%,
          rgba(0,0,0,0.2) 100%
        )
      `
    }

    // 平滑插值函数
    function lerp(start, end, factor) {
        return start + (end - start) * factor
    }

    function startAutoAnimation() {
        lastTime = performance.now()
        function animate(time) {
            const delta = (time - lastTime) / 1000
            lastTime = time

            const speed = 30
            if (increasing) {
                degree = (degree + speed * delta) % 360
            } else {
                degree = (degree - speed * delta + 360) % 360
            }

            updateBackground(degree)
            autoAnimId = requestAnimationFrame(animate)
        }

        if (autoAnimId === null) {
            autoAnimId = requestAnimationFrame(animate)
        }
    }

    function stopAutoAnimation() {
        if (autoAnimId !== null) {
            cancelAnimationFrame(autoAnimId)
            autoAnimId = null
        }
    }

    // 节流的背景更新函数
    function throttledUpdate() {
        if (isThrottled) {
            pendingUpdate = true
            return
        }

        isThrottled = true

        // 使用平滑插值让过渡更自然
        const smoothStep = () => {
            const diff = targetDegree - degree

            // 处理角度循环（0-360度）
            let shortestDiff = diff
            if (Math.abs(diff) > 180) {
                if (diff > 0) {
                    shortestDiff = diff - 360
                } else {
                    shortestDiff = diff + 360
                }
            }

            // 使用缓动插值
            degree += shortestDiff * 0.3

            // 确保角度在0-360范围内
            if (degree < 0) degree += 360
            if (degree >= 360) degree -= 360

            updateBackground(degree)

            // 如果还没到达目标角度，继续动画
            if (Math.abs(shortestDiff) > 0.1) {
                requestAnimationFrame(smoothStep)
            } else {
                degree = targetDegree
                updateBackground(degree)
            }
        }

        requestAnimationFrame(smoothStep)

        setTimeout(() => {
            isThrottled = false
            if (pendingUpdate) {
                pendingUpdate = false
                throttledUpdate()
            }
        }, 16) // 约60fps的节流
    }

    intro.addEventListener('mouseenter', () => {
        stopAutoAnimation()
    })

    intro.addEventListener('mousemove', e => {
        const newDeg = calcDegree(e.clientX)
        increasing = newDeg >= degree
        targetDegree = newDeg
        throttledUpdate()
    })

    intro.addEventListener('mouseleave', () => {
        startAutoAnimation()
    })

    startAutoAnimation()
}

// 原rocketShow函数已移除，使用initOptimizedRocketShow替代

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header')
    const container = document.querySelector('.container')
    const pages = document.querySelectorAll('.page')
    const starsBgOfPageFive = document.querySelector('.stars-bg')

    // 导航栏控制
    new HeaderController(header, { container })
    // 背景音乐控制
    new BackgroundMusic()
    // 第二页背景图控制
    makeGradientFollowMouse()

    // GSAP优化的火箭线稿控制
    initOptimizedRocketShow()

    const gridElement = document.getElementById('grid')
    if (gridElement) {
        new InteractiveGrid(gridElement)
    }

    initKeyAnimations()

    // 前三页面特效
    for (let i = 0; i < Math.min(3, pages.length); i++) {
        // 添加星空背景
        new StarBackground(pages[i])

        // 在第二页添加流星效果
        if (i == 1) {
            new MeteorEffect(pages[i], {
                maxMeteors: 3, // 减少流星数量提升性能
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
            })
        }
    }

    // 第五页面的部分的流行效果
    if (starsBgOfPageFive) {
        new StarBackground(starsBgOfPageFive, {
            starCount: 300, // 减少星星数量
            starSizeMin: 0.1,
            starSizeMax: 0.2,
            xSpeed: 0.0003,
            ySpeed: 0.0003
        })
    }

    // 第四页面的行星星星效果
    new PlanetStars()
})

// 性能优化版的关键动画
function initKeyAnimations() {
    const pages = document.querySelectorAll('.page')

    // 首页标题动画 - 简化版
    const slogan = pages[0]?.querySelector('.slogan')
    const title = pages[0]?.querySelector('.title')

    if (slogan) {
        gsap.fromTo(slogan, {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            delay: 0.5
        })
    }

    if (title) {
        gsap.fromTo(title, {
            x: 30,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            delay: 1
        })
    }

    // 按钮悬停效果 - 轻量版
    const buttons = document.querySelectorAll('button, .link-container a')
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.2,
                ease: "power2.out"
            })
        })

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: "back.out(1.7)"
            })
        })
    })
}

// 优化的火箭线稿显示
function initOptimizedRocketShow() {
    const rocket = document.querySelector('.rocket-line-draft')
    const page = document.querySelectorAll('.page')[1]

    if (!rocket || !page) return

    gsap.set(rocket, { y: '100vh', opacity: 0 })

    const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return

        const reveal = () => gsap.to(rocket, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
            overwrite: true,
        })

        if (rocket.complete) {
            reveal()
        } else {
            rocket.addEventListener('load', reveal, { once: true })
        }

        observer.disconnect()
    }, {
        threshold: 0.55,
    })

    observer.observe(page)
}

function initHomeLineProgress() {
    const curve = document.getElementById('home-line-geometry')
    const progressLine = document.getElementById('home-line-progress')
    const slider = document.getElementById('slider')

    if (!curve || !progressLine || !slider) return

    const pathLength = curve.getTotalLength()
    let totalHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
    let ticking = false

    progressLine.style.strokeDasharray = `${pathLength} ${pathLength}`

    function render() {
        const scrollProgress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1)
        const offset = scrollProgress * pathLength
        const point = curve.getPointAtLength(offset)
        const before = curve.getPointAtLength(Math.max(offset - 1, 0))
        const after = curve.getPointAtLength(Math.min(offset + 1, pathLength))
        const angle = Math.atan2(after.y - before.y, after.x - before.x) * 180 / Math.PI

        progressLine.style.strokeDashoffset = String(pathLength - offset)
        slider.setAttribute('transform', `translate(${point.x}, ${point.y}) rotate(${angle})`)
        ticking = false
    }

    function requestRender() {
        if (ticking) return
        ticking = true
        requestAnimationFrame(render)
    }

    window.addEventListener('scroll', requestRender, { passive: true })
    window.addEventListener('resize', () => {
        totalHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
        requestRender()
    })

    render()
}

initHomeLineProgress()
