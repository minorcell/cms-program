/**
 * 创建一个基于 js 的星空背景
 * 
 * @class StarBackground
 * @param {HTMLElement} container - 要添加星空背景的容器元素
 * @param {Object} [options] - 配置选项
 * @param {number} [options.starCount=1000] - 星星数量
 * @param {number} [options.starSizeMin=0.04] - 星星最小尺寸
 * @param {number} [options.starSizeMax=0.12] - 星星最大尺寸
 * @param {number} [options.xSpeed=0.00005] - X轴旋转速度
 * @param {number} [options.ySpeed=0.00005] - Y轴旋转速度
 * @param {number} [options.elapsed=0] - 初始动画时间
 */
class StarBackground {
    constructor(container, options = {}) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            75,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        this.camera.position.z = 5;

        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setClearColor(0x000000, 0);
        this.canvas = this.renderer.domElement;
        this.canvas.style.position = 'absolute';
        this.canvas.style.zIndex = '0'; // 确保星星在网格背景之下
        this.canvas.style.pointerEvents = 'none';
        container.appendChild(this.canvas);

        // 设置星星的默认参数和从options获取的参数
        this.starCount = options.starCount || 1000; // 默认1000颗星星
        this.starSizeMin = options.starSizeMin || 0.04; // 默认最小尺寸
        this.starSizeMax = options.starSizeMax || 0.12; // 默认最大尺寸 (0.04 + 0.08)
        this.xSpeed = options.xSpeed || 0.00005; // X轴转动速度
        this.ySpeed = options.ySpeed || 0.00005; // Y轴转动速度
        this.elapsed = options.elapsed || 0;  // 闪缩速度

        this.createStars();
        this.isVisible = false;
        this.visibilityObserver = new IntersectionObserver(([entry]) => {
            this.isVisible = entry.isIntersecting;
        }, { rootMargin: '100px' });
        this.visibilityObserver.observe(container);
        this.animate();

        window.addEventListener('resize', () => this.handleResize());
    }

    createStars() {
        const count = this.starCount;
        const positions = new Float32Array(count * 3);
        const phases = new Float32Array(count);
        const sizes = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            positions[3 * i] = (Math.random() - 0.5) * 40;
            positions[3 * i + 1] = (Math.random() - 0.5) * 40;
            positions[3 * i + 2] = (Math.random() - 0.5) * 40;
            phases[i] = Math.random() * Math.PI * 2;
            sizes[i] = Math.random() * (this.starSizeMax - this.starSizeMin) + this.starSizeMin;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.ShaderMaterial({
            uniforms: {
                elapsed: { value: 0 },
                color: { value: new THREE.Color(0xffffff) }
            },
            vertexShader: `
                uniform float elapsed;
                attribute float phase;
                attribute float size;
                varying float vOpacity;
                void main() {
                    vec4 mv = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = size * (200.0 / -mv.z);
                    vOpacity = 0.5 + 0.5 * sin(elapsed + phase);
                    gl_Position = projectionMatrix * mv;
                }
            `,
            fragmentShader: `
                uniform vec3 color;
                varying float vOpacity;
                void main() {
                    float d = distance(gl_PointCoord, vec2(0.5));
                    float alpha = smoothstep(0.5, 0.45, d) * vOpacity;
                    if (alpha < 0.01) discard;
                    gl_FragColor = vec4(color, alpha);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.stars = new THREE.Points(geometry, material);
        this.scene.add(this.stars);
    }

    animate = () => {
        requestAnimationFrame(this.animate);
        if (!this.isVisible || document.hidden) return;

        this.elapsed += 0.008; // 减慢闪烁速度
        this.stars.rotation.x += this.xSpeed;
        this.stars.rotation.y += this.ySpeed;
        this.stars.material.uniforms.elapsed.value = this.elapsed;
        this.renderer.render(this.scene, this.camera);
    }

    handleResize() {
        const parent = this.canvas.parentElement;
        this.camera.aspect = parent.clientWidth / parent.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(parent.clientWidth, parent.clientHeight);
    }
}
