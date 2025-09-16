class Mouse {
    constructor({
        defaultCursor,
        clickCursor,
    }) {
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';

        // 设置初始样式和硬件加速
        this.cursor.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 48px;
            height: 48px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            pointer-events: none;
            z-index: 10000;
            transform-origin: center;
            will-change: transform;
            transition: none;
        `;

        document.body.appendChild(this.cursor);

        this.defaultCursor = defaultCursor;
        this.clickCursor = clickCursor;
        this.currentCursor = null; // 缓存当前光标状态

        this.visible = true;

        this.init();
    }

    init() {
        this.setCursorImage(this.defaultCursor);

        // 使用 requestAnimationFrame 优化鼠标移动
        let animationId;
        const updateCursor = (e) => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }

            animationId = requestAnimationFrame(() => {
                this.showCursor();

                // 检查是否为可交互元素
                const isInteractive = this.isInteractiveElement(e.target);
                const cursorImg = isInteractive ? this.clickCursor : this.defaultCursor;

                // 只在需要时更新光标图片
                this.setCursorImage(cursorImg);

                // 使用 translate3d 进行硬件加速的位置更新
                const x = e.clientX - 24; // 居中偏移
                const y = e.clientY - 24;
                const scale = isInteractive ? 1.2 : 1.0;
                const rotation = isInteractive ? 0 : 15;

                this.cursor.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale}) rotate(${rotation}deg)`;
            });
        };

        // Move
        document.addEventListener('mousemove', updateCursor, { passive: true });

        // Down
        document.addEventListener('mousedown', () => {
            this.setCursorImage(this.clickCursor);
            // 保持当前位置，只改变缩放
            const currentTransform = this.cursor.style.transform;
            const scaleMatch = currentTransform.match(/scale\([\d.]+\)/);
            const rotateMatch = currentTransform.match(/rotate\([\d.-]+deg\)/);
            const translateMatch = currentTransform.match(/translate3d\([^)]+\)/);

            if (translateMatch) {
                this.cursor.style.transform = `${translateMatch[0]} scale(1.1) rotate(0deg)`;
            }
        });

        // Up
        document.addEventListener('mouseup', (e) => {
            const isInteractive = this.isInteractiveElement(e.target);
            const cursorImg = isInteractive ? this.clickCursor : this.defaultCursor;
            const scale = isInteractive ? 1.2 : 1.0;
            const rotation = isInteractive ? 0 : 15;

            this.setCursorImage(cursorImg);

            const currentTransform = this.cursor.style.transform;
            const translateMatch = currentTransform.match(/translate3d\([^)]+\)/);

            if (translateMatch) {
                this.cursor.style.transform = `${translateMatch[0]} scale(${scale}) rotate(${rotation}deg)`;
            }
        });

        // Hide native cursor
        document.body.style.cursor = 'none';

        // Handle leave/enter with proper visibility
        document.addEventListener('mouseleave', () => this.hideCursor());
        document.addEventListener('mouseenter', () => this.showCursor());
    }

    // 检查元素是否可交互
    isInteractiveElement(element) {
        if (!element) return false;

        // 检查标签类型
        const interactiveTags = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'];
        if (interactiveTags.includes(element.tagName)) {
            return true;
        }

        // 检查是否有点击事件或cursor样式
        const styles = window.getComputedStyle(element);
        if (styles.cursor === 'pointer') {
            return true;
        }

        // 检查是否有特定的类名
        const interactiveClasses = ['option', 'start-btn', 'submit', 'analysis', 'continue-btn', 'next', 'prev'];
        if (interactiveClasses.some(cls => element.classList.contains(cls))) {
            return true;
        }

        return false;
    }

    setCursorImage(src) {
        // 只在光标图片真正需要改变时更新
        if (this.currentCursor !== src) {
            this.cursor.style.backgroundImage = `url("${src}")`;
            this.currentCursor = src;
        }
    }

    hideCursor() {
        this.visible = false;
        this.cursor.style.opacity = '0';
        this.cursor.style.pointerEvents = 'none';
    }

    showCursor() {
        if (!this.visible) {
            this.visible = true;
            this.cursor.style.opacity = '1';
            this.cursor.style.pointerEvents = 'none';
        }
    }
}