class LogoAnimation {
    constructor() {
        this.logo = document.getElementById('logo');
        this.isAnimating = false;

        if (this.logo) {
            this.init();
        }
    }

    init() {
        // 页面加载时的初始动画
        this.playLoadAnimation();

        // 添加悬停交互
        this.addHoverEffects();

        // 添加周期性的微妙动画
        this.addIdleAnimation();
    }

    // 页面加载时的初始动画
    playLoadAnimation() {
        gsap.fromTo(this.logo,
            {
                scale: 0.8,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: "back.out(1.7)",
                delay: 0.5
            }
        );
    }

    // 悬停效果
    addHoverEffects() {
        // 鼠标进入时的动画
        this.logo.addEventListener('mouseenter', () => {
            if (this.isAnimating) return;

            gsap.to(this.logo, {
                scale: 1.1,
                duration: 0.4,
                ease: "power2.out"
            });

            // 添加发光效果
            gsap.to(this.logo, {
                filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))',
                duration: 0.4,
                ease: "power2.out"
            });

            // 创建围绕logo的粒子效果
            this.createHoverParticles();
        });

        // 鼠标离开时的动画
        this.logo.addEventListener('mouseleave', () => {
            gsap.to(this.logo, {
                scale: 1,
                filter: 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))',
                duration: 0.6,
                ease: "back.out(1.7)"
            });
        });

        // 点击时的动画
        this.logo.addEventListener('click', (e) => {
            // 检查是否在首页，如果在首页则不阻止默认行为
            const path = window.location.pathname;
            const isHomePage = path.includes('index.html') || path === '/' || path.endsWith('/cms-program/') || path.endsWith('/cms-program');

            if (!isHomePage) {
                e.preventDefault();
                this.playClickAnimation();
            } else {
                // 在首页时只播放动画效果，不改变跳转行为
                this.playClickAnimationOnly();
            }
        });
    }

    // 点击动画
    playClickAnimation() {
        if (this.isAnimating) return;
        this.isAnimating = true;

        const tl = gsap.timeline({
            onComplete: () => {
                this.isAnimating = false;
                // 点击后跳转到首页
                window.location.href = '../index.html';
            }
        });

        tl.to(this.logo, {
            scale: 0.9,
            duration: 0.1,
            ease: "power2.in"
        })
        .to(this.logo, {
            scale: 1.3,
            duration: 0.8,
            ease: "back.out(1.7)"
        })
        .to(this.logo, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
        }, "-=0.2");

        // 创建点击爆发粒子效果
        this.createClickParticles();
    }

    // 仅播放点击动画（不跳转）
    playClickAnimationOnly() {
        if (this.isAnimating) return;
        this.isAnimating = true;

        const tl = gsap.timeline({
            onComplete: () => {
                this.isAnimating = false;
            }
        });

        tl.to(this.logo, {
            scale: 0.9,
            duration: 0.1,
            ease: "power2.in"
        })
        .to(this.logo, {
            scale: 1.2,
            duration: 0.6,
            ease: "back.out(1.7)"
        })
        .to(this.logo, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
        }, "-=0.2");

        // 创建点击爆发粒子效果
        this.createClickParticles();
    }

    // 空闲时的微妙动画
    addIdleAnimation() {
        // 每隔5-8秒播放一次微妙的呼吸动画
        const playIdleAnimation = () => {
            if (this.isAnimating) {
                setTimeout(playIdleAnimation, 2000);
                return;
            }

            gsap.to(this.logo, {
                scale: 1.05,
                duration: 2,
                ease: "sine.inOut",
                yoyo: true,
                repeat: 1,
                onComplete: () => {
                    // 随机延迟下次动画
                    const delay = 5000 + Math.random() * 3000;
                    setTimeout(playIdleAnimation, delay);
                }
            });
        };

        // 初次延迟3秒后开始
        setTimeout(playIdleAnimation, 3000);
    }

    // 创建悬停时的粒子效果
    createHoverParticles() {
        const rect = this.logo.getBoundingClientRect();
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

        // 创建环绕粒子
        for (let i = 0; i < 6; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(255, 255, 255, 0.8);
                border-radius: 50%;
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top + rect.height / 2}px;
            `;
            particleContainer.appendChild(particle);

            // 圆形轨道运动
            const radius = 40;
            const startAngle = (Math.PI * 2 * i) / 6;

            gsap.to(particle, {
                motionPath: {
                    path: `M0,0 A${radius},${radius} 0 1,1 0,0.1`,
                    autoRotate: false,
                },
                duration: 2,
                ease: "none",
                repeat: 1,
                transformOrigin: "center center",
                onComplete: () => {
                    gsap.to(particle, {
                        opacity: 0,
                        scale: 0,
                        duration: 0.3
                    });
                }
            });
        }

        // 清理粒子容器
        setTimeout(() => {
            if (particleContainer.parentNode) {
                document.body.removeChild(particleContainer);
            }
        }, 5000);
    }

    // 创建点击时的爆发粒子效果
    createClickParticles() {
        const rect = this.logo.getBoundingClientRect();
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

        // 创建爆发粒子
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 8px;
                height: 8px;
                background: rgba(255, 255, 255, 0.9);
                border-radius: 50%;
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top + rect.height / 2}px;
            `;
            particleContainer.appendChild(particle);

            // 随机方向爆发
            const angle = (Math.PI * 2 * i) / 12 + (Math.random() - 0.5) * 0.5;
            const distance = 80 + Math.random() * 40;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            gsap.to(particle, {
                x: x,
                y: y,
                opacity: 0,
                scale: 0,
                duration: 1.2,
                ease: "power2.out",
                delay: Math.random() * 0.2
            });
        }

        // 清理粒子容器
        setTimeout(() => {
            if (particleContainer.parentNode) {
                document.body.removeChild(particleContainer);
            }
        }, 2000);
    }

    // 播放特殊场景动画（可以从外部调用）
    playSpecialAnimation(type = 'pulse') {
        if (this.isAnimating) return;
        this.isAnimating = true;

        switch (type) {
            case 'pulse':
                this.playPulseAnimation();
                break;
            case 'rotate':
                this.playRotateAnimation();
                break;
            case 'shake':
                this.playShakeAnimation();
                break;
            default:
                this.playPulseAnimation();
        }
    }

    playPulseAnimation() {
        gsap.to(this.logo, {
            scale: 1.2,
            duration: 0.3,
            ease: "power2.out",
            yoyo: true,
            repeat: 3,
            onComplete: () => {
                this.isAnimating = false;
            }
        });
    }

    playRotateAnimation() {
        // 改为脉冲动画，不再旋转
        gsap.to(this.logo, {
            scale: 1.3,
            duration: 0.5,
            ease: "power2.out",
            yoyo: true,
            repeat: 1,
            onComplete: () => {
                this.isAnimating = false;
            }
        });
    }

    playShakeAnimation() {
        gsap.to(this.logo, {
            x: -5,
            duration: 0.1,
            yoyo: true,
            repeat: 10,
            ease: "power2.inOut",
            onComplete: () => {
                gsap.set(this.logo, { x: 0 });
                this.isAnimating = false;
            }
        });
    }
}

// 导出类以便在其他文件中使用
window.LogoAnimation = LogoAnimation;