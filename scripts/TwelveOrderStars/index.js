let rocketScene, rocketCamera, rocketRenderer
let rocketModel
let clock = new THREE.Clock()
let launchTimeline = null // 使用GSAP Timeline替代多个计时器
let currentPartIndex = 0
let hoveredPartIndex = -1 // -1 means no part is hovered
let arrowTimeline = null // 箭头动画时间轴
let isRocketVisible = true

/**
 * 鼠标事件
 * 1. 移动到当前的part上时，当前的part和stage-info显示，其他的动画继续
 */
function setupMouseEvents() {
    const parts = document.querySelectorAll('.page:nth-child(2) .parts .part')
    if (!parts.length) return

    parts.forEach((part, index) => {
        part.index = index
        part.addEventListener('mouseenter', () => {
            hoveredPartIndex = index
            part.querySelector('video')?.play().catch(() => {})
            gsap.to(part, { opacity: 1, duration: 0.3 })
            gsap.to(part.querySelector('.stage-info'), { opacity: 1, duration: 0.3 })
        })
        part.addEventListener('mouseleave', () => {
            part.querySelector('video')?.pause()
            if (hoveredPartIndex === index) {
                hoveredPartIndex = -1
                if (currentPartIndex === index) {
                    gsap.to(part, { opacity: 1, duration: 0.3 })
                    gsap.to(part.querySelector('.stage-info'), { opacity: 1, duration: 0.3 })
                } else {
                    gsap.to(part, { opacity: 0.1, duration: 0.3 })
                    gsap.to(part.querySelector('.stage-info'), { opacity: 0, duration: 0.3 })
                }
            }
        })
    })
}

/**
 * 初始化Three.js场景和加载3D模型
 */
function initRocketModel() {
    const canvas = document.querySelector('.rocket')
    if (!canvas) return

    // 创建场景
    rocketScene = new THREE.Scene()

    // 创建透视相机
    rocketCamera = new THREE.PerspectiveCamera(14, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
    rocketCamera.position.set(0, 0, 10)

    // 创建渲染器
    rocketRenderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    })
    rocketRenderer.setSize(canvas.clientWidth, canvas.clientHeight)
    rocketRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    rocketRenderer.shadowMap.enabled = true // 启用阴影
    rocketRenderer.toneMapping = THREE.ACESFilmicToneMapping // 设置色调映射
    rocketRenderer.toneMappingExposure = 1.0 // 调整曝光度

    // 添加环境光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 1) // 降低环境光强度
    rocketScene.add(ambientLight)

    // 添加平行光源
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1) // 增强平行光强度
    directionalLight.position.set(5, 10, 7) // 调整光源位置，使其从斜上方照射
    directionalLight.castShadow = true // 平行光投射阴影
    // 配置阴影属性
    directionalLight.shadow.mapSize.width = 2048 // 提高阴影贴图分辨率
    directionalLight.shadow.mapSize.height = 2048
    directionalLight.shadow.camera.near = 0.5
    directionalLight.shadow.camera.far = 50
    directionalLight.shadow.bias = -0.0001 // 调整阴影偏移，防止条纹
    rocketScene.add(directionalLight)

    // 添加点光源 (可以稍微降低强度或调整位置作为补光)
    const pointLight = new THREE.PointLight(0xffffff, 0.3)
    pointLight.position.set(-5, 5, 5) // 调整点光源位置
    rocketScene.add(pointLight)

    // 为3D场景中的标签创建一个组
    labelsGroup = new THREE.Group()
    rocketScene.add(labelsGroup)

    new IntersectionObserver(([entry]) => {
        isRocketVisible = entry.isIntersecting
    }, { rootMargin: '100px' }).observe(canvas)

    // 加载3D模型
    const loader = new THREE.GLTFLoader()
    const rocketModelUrl = "../assets/models/long-march-2f.glb"
    loader.load(
        rocketModelUrl,
        (gltf) => {
            rocketModel = gltf.scene

            // 调整模型尺寸和位置
            rocketModel.scale.set(1, 1, 1)

            // 遍历模型，设置阴影投射和接收，并调整材质
            rocketModel.traverse((object) => {
                if (object.isMesh) {
                    object.castShadow = true
                    object.receiveShadow = true
                    if (object.material.isMeshStandardMaterial) {
                        object.material.roughness = 0.1 // 调整粗糙度
                        object.material.metalness = 0.2 // 调整金属感
                        // 如果有贴图，确保颜色空间正确
                        if (object.material.map) {
                            object.material.map.encoding = THREE.sRGBEncoding
                        }
                    }
                }
            })

            // 计算模型的边界框以确定中心点和底部
            const box = new THREE.Box3().setFromObject(rocketModel)
            const center = box.getCenter(new THREE.Vector3())

            // 将模型移至原点
            rocketModel.position.set(-center.x, -center.y, -center.z)

            // 创建一个组来包含模型
            const modelGroup = new THREE.Group()
            modelGroup.add(rocketModel)

            // 将组添加到场景中
            rocketScene.add(modelGroup)

            // 将整个模型组向左移动（例如，移动到X轴的-2位置）
            modelGroup.position.x = -1

            // 更新模型变量为组
            rocketModel = modelGroup

            // 显示canvas和火箭信息元素，使用GSAP实现渐显效果
            setTimeout(() => {
                const canvas = document.querySelector('.rocket')
                const rocketInfo = document.querySelector('.rocket-info')

                if (canvas) {
                    gsap.to(canvas, { opacity: 1, duration: 0.8 })
                }

                if (rocketInfo) {
                    gsap.to(rocketInfo, { opacity: 1, duration: 0.8 })
                }
            }, 100)

            // 自动旋转展示模型
            animate()
        },
        (xhr) => {
            console.log('Loading model: ' + Math.floor((xhr.loaded / xhr.total) * 100) + '%')
        },
        (error) => {
            console.error('Error loading model:', error)
        }
    )

    // 添加窗口大小变化的监听器
    window.addEventListener('resize', onWindowResize)
}

/**
 * 响应窗口大小变化
 */
function onWindowResize() {
    const canvas = document.querySelector('.rocket')
    if (!canvas || !rocketCamera || !rocketRenderer) return

    rocketCamera.aspect = canvas.clientWidth / canvas.clientHeight
    rocketCamera.updateProjectionMatrix()
    rocketRenderer.setSize(canvas.clientWidth, canvas.clientHeight)
}

/**
 * 动画循环
 */
function animate() {
    requestAnimationFrame(animate)

    if (!isRocketVisible || document.hidden) return

    if (rocketModel) {
        rocketModel.rotation.y += 0.015
    }

    if (rocketRenderer && rocketScene && rocketCamera) {
        rocketRenderer.render(rocketScene, rocketCamera)
    }
}

/**
 * 初始化火箭发射动画
 */
function initLaunchAnimation() {
    const parts = document.querySelectorAll('.page:nth-child(2) .parts .part')
    const digitElement = document.querySelector('.page:nth-child(2) .time .digit')
    const secondElement = document.querySelector('.page:nth-child(2) .time .second')
    const arrow = document.querySelector('.page:nth-child(2) .process .arrow')

    if (!parts.length || !digitElement || !secondElement || !arrow) return

    // 初始设置，先给箭头设置底部位置和透明度
    gsap.set(arrow, {
        bottom: '0',
        opacity: '0'
    })

    // 初始化其他元素
    digitElement.textContent = '0'
    secondElement.textContent = '分钟'

    parts.forEach((part, index) => {
        if (index === hoveredPartIndex) return
        if (currentPartIndex !== index) {
            gsap.set(part, { opacity: 0.1 })
            gsap.set(part.querySelector('.stage-info'), { opacity: 0 })
        } else {
            gsap.set(part, { opacity: 1 })
            gsap.set(part.querySelector('.stage-info'), { opacity: 1 })
        }
    })

    // 等待一小段时间，确保元素都加载完成
    setTimeout(() => {
        // 直接开始发射序列而不是倒计时
        startLaunchSequence()
    }, 500)
}

/**
 * 重置火箭发射动画
 */
function resetLaunchAnimation() {
    const parts = document.querySelectorAll('.page:nth-child(2) .parts .part')
    const digitElement = document.querySelector('.page:nth-child(2) .time .digit')
    const secondElement = document.querySelector('.page:nth-child(2) .time .second')
    const arrow = document.querySelector('.page:nth-child(2) .process .arrow')

    if (!parts.length || !digitElement || !secondElement || !arrow) return

    // 清除任何现有的时间轴
    if (launchTimeline) {
        launchTimeline.kill()
        launchTimeline = null
    }

    if (arrowTimeline) {
        arrowTimeline.kill()
        arrowTimeline = null
    }

    // 重置时间显示为0分钟
    digitElement.textContent = '0'
    secondElement.textContent = '分钟'

    // 隐藏所有部分
    parts.forEach((part, index) => {
        if (index === hoveredPartIndex) return
        if (currentPartIndex !== index) {
            gsap.set(part, { opacity: 0.1 })
            gsap.set(part.querySelector('.stage-info'), { opacity: 0 })
        } else {
            gsap.set(part, { opacity: 1 })
            gsap.set(part.querySelector('.stage-info'), { opacity: 1 })
        }
    })

    // 重置箭头位置和透明度
    gsap.set(arrow, {
        bottom: '0',
        opacity: 0,
        clearProps: "transition" // 清除CSS过渡属性
    })

    // 重置状态变量
    currentPartIndex = 0
}

/**
 * 开始火箭发射序列
 */
function startLaunchSequence() {
    const parts = document.querySelectorAll('.page:nth-child(2) .parts .part')
    const digitElement = document.querySelector('.page:nth-child(2) .time .digit')
    const secondElement = document.querySelector('.page:nth-child(2) .time .second')
    const arrow = document.querySelector('.page:nth-child(2) .process .arrow')

    if (!parts.length || !digitElement || !secondElement || !arrow) return

    // 首先重置动画
    resetLaunchAnimation()

    // 创建主时间轴
    launchTimeline = gsap.timeline({
        onComplete: () => {
            // 全部阶段完成后重置动画
            resetLaunchAnimation()
            // 短暂延迟后重新开始
            setTimeout(() => startLaunchSequence(), 2000)
        }
    })

    // 各阶段显示的持续时间（秒）
    const stageDuration = 1.5
    const totalAnimationTime = parts.length * stageDuration // 总动画时间（秒）

    // 更新时间显示为分钟
    digitElement.textContent = '0'
    secondElement.textContent = '分钟'

    // 启动发射时间计数器动画
    launchTimeline.to({}, {
        duration: totalAnimationTime,
        onUpdate: function () {
            const progress = this.progress()
            const minutes = Math.floor(progress * 56)
            digitElement.textContent = minutes
        }
    }, 0)

    // 箭头动画时间轴
    arrowTimeline = gsap.timeline()

    // 先显示箭头
    arrowTimeline.set(arrow, { opacity: 1 }, 0)

    // 箭头上升动画
    arrowTimeline.to(arrow, {
        bottom: '90vh',
        duration: totalAnimationTime,
        ease: "power1.inOut"
    }, 0)

    // 将箭头时间轴添加到主时间轴
    launchTimeline.add(arrowTimeline, 0)

    // 依次显示各个阶段
    parts.forEach((part, index) => {
        const stageInfo = part.querySelector('.stage-info')

        // 隐藏所有部分（除了当前hover的）
        launchTimeline.to({}, {
            duration: 0.01,
            onStart: function () {
                parts.forEach((p, i) => {
                    if (i === hoveredPartIndex) return
                    if (i !== index) {
                        gsap.to(p, { opacity: 0.1, duration: 0.3 })
                        gsap.to(p.querySelector('.stage-info'), { opacity: 0, duration: 0.3 })
                    }
                })
            }
        }, index * stageDuration)

        // 显示当前阶段
        launchTimeline.to({}, {
            duration: 0.01,
            onStart: function () {
                currentPartIndex = index
                if (index !== hoveredPartIndex) {
                    gsap.to(part, { opacity: 1, duration: 0.3 })
                    gsap.to(stageInfo, { opacity: 1, duration: 0.3 })
                }
            }
        }, index * stageDuration)
    })
}

/**
 * 初始化视频播放器功能
 */
function setupVideoPlayer() {
    const launchDetailBtn = document.getElementById('launch-detail-btn')
    const videoPlayer = document.getElementById('video-player')
    const closeVideoBtn = document.getElementById('close-video-btn')
    const launchVideo = document.getElementById('launch-video')
    const content = document.querySelector('.page:nth-child(3) .content')

    if (!launchDetailBtn || !videoPlayer || !closeVideoBtn || !launchVideo || !content) return

    launchDetailBtn.addEventListener('click', () => {
        gsap.to(content, {
            opacity: 0,
            scale: 0.95,
            duration: 0.5,
            onComplete: () => {
                videoPlayer.classList.add('active')
                launchVideo.play().catch(() => {})
            }
        })
    })

    closeVideoBtn.addEventListener('click', () => {
        launchVideo.pause()
        launchVideo.currentTime = 0
        videoPlayer.classList.remove('active')
        gsap.to(content, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: 0.5
        })
    })

    launchVideo.addEventListener('ended', () => {
        videoPlayer.classList.remove('active')
        gsap.to(content, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: 0.5
        })
    })
}

document.addEventListener("DOMContentLoaded", function () {
    // 设置视频播放器功能
    setupVideoPlayer()

    // 初始化火箭发射动画
    initLaunchAnimation()

    const header = document.querySelector('.header')
    const lastPageContentStarContainer = document.querySelector('.page:nth-child(3) .content .star-bg')
    const bgContainer = document.querySelector('.page:nth-child(1) .bg')

    new HeaderController(header)

    // 核心交互就绪后再初始化3D和装饰效果
    initRocketModel()

    new StarBackground(lastPageContentStarContainer, {
        starCount: 200,
        starSizeMin: 0.08,
        starSizeMax: 0.16,
        xSpeed: 0.0002,
        ySpeed: 0.0002,
        elapsed: 0,
    })

    new StarBackground(bgContainer, {
        starCount: 500,
        starSizeMin: 0.10,
        starSizeMax: 0.20,
        xSpeed: 0.0002,
        ySpeed: 0.0002,

        elapsed: 0,
    })

    new MeteorEffect(bgContainer, {
        maxMeteors: 5,
    })

    setupMouseEvents()

})
