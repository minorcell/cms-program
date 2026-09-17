/**
 * @param {HTMLElement} header - 导航栏元素
 * @param {Object} options - 配置选项
 * @param {HTMLElement|Window} [options.container=window] - 滚动容器，默认为window
 */
class HeaderController {
    constructor(header, options = {}) {
        if (!header) {
            throw new Error('Header element is required');
        }
        this.header = header;
        this.container = options.container || window;
        this.lastScrollY = this.getScrollTop();
        this.ticking = false;
        this.init();
    }

    /**
     * 获取当前滚动位置
     * @returns {number} 滚动位置
     */
    getScrollTop() {
        return this.container === window
            ? window.scrollY
            : this.container.scrollTop;
    }

    /**
     * 初始化事件监听
     */
    init() {
        this.container.addEventListener('scroll', () => this.onScroll(), { passive: true });
    }

    /**
     * 滚动事件处理
     */
    onScroll() {
        if (!this.ticking) {
            window.requestAnimationFrame(() => {
                this.updateHeader();
                this.ticking = false;
            });
            this.ticking = true;
        }
    }

    /**
     * 更新导航栏状态
     */
    updateHeader() {
        const currentScrollY = this.getScrollTop();

        if (currentScrollY > this.lastScrollY && currentScrollY > this.header.offsetHeight) {
            this.header.style.transform = 'translateY(-100%)';
        } else {
            this.header.style.transform = 'translateY(0)';
        }

        this.lastScrollY = currentScrollY;
    }
}
