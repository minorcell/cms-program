const mouseScriptUrl = document.currentScript?.src
const mousePositionStorageKey = 'cms-program:mouse-position'

class Mouse {
    constructor({ defaultCursor, clickCursor }) {
        if (!window.matchMedia('(pointer: fine)').matches) return

        this.defaultCursor = defaultCursor
        this.clickCursor = clickCursor
        this.currentCursor = null
        this.position = { x: -100, y: -100 }
        this.hasPosition = this.restorePosition()
        this.frame = null
        this.ready = false
        this.visible = false

        this.addCriticalStyle()
        this.createCursorLayer()
        this.setCursorImage(defaultCursor)
        this.bindEvents()
        this.loadImages()
    }

    addCriticalStyle() {
        const style = document.createElement('style')
        style.textContent = 'html.custom-cursor-ready,html.custom-cursor-ready *{cursor:none!important}'
        document.head.appendChild(style)
    }

    createCursorLayer() {
        this.layer = document.createElement('div')
        this.layer.setAttribute('aria-hidden', 'true')
        Object.assign(this.layer.style, {
            position: 'fixed',
            inset: '0',
            pointerEvents: 'none',
            zIndex: '2147483647',
            overflow: 'visible',
        })

        const shadow = this.layer.attachShadow({ mode: 'closed' })
        this.cursor = document.createElement('div')
        Object.assign(this.cursor.style, {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '48px',
            height: '48px',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: '0',
            transform: 'translate3d(-100px, -100px, 0)',
            transformOrigin: 'center',
            transition: 'opacity 80ms linear',
            willChange: 'transform',
        })

        shadow.appendChild(this.cursor)
        document.documentElement.appendChild(this.layer)
    }

    loadImages() {
        Promise.all([this.defaultCursor, this.clickCursor].map((src) => new Promise((resolve, reject) => {
            const image = new Image()
            image.onload = resolve
            image.onerror = reject
            image.src = src
        }))).then(() => {
            this.ready = true
            if (this.hasPosition) this.render()
        }).catch(() => {
            this.destroy()
        })
    }

    bindEvents() {
        document.addEventListener('pointermove', (event) => {
            this.position.x = event.clientX
            this.position.y = event.clientY
            this.hasPosition = true
            this.target = event.target

            if (!this.frame) {
                this.frame = requestAnimationFrame(() => this.render())
            }
        }, { passive: true })

        document.addEventListener('pointerdown', () => {
            if (!this.ready) return
            this.setCursorImage(this.clickCursor)
            this.updateTransform(1.05, 0)
        }, { passive: true })

        document.addEventListener('pointerup', (event) => {
            if (!this.ready) return
            const interactive = this.isInteractiveElement(event.target)
            this.setCursorImage(interactive ? this.clickCursor : this.defaultCursor)
            this.updateTransform(interactive ? 1.15 : 1, interactive ? 0 : 15)
        }, { passive: true })

        document.addEventListener('mouseleave', () => this.hide())
        window.addEventListener('blur', () => this.hide())
        window.addEventListener('pagehide', () => {
            this.savePosition()
            this.restoreNativeCursor()
        })
    }

    render() {
        this.frame = null
        if (!this.ready) return

        const interactive = this.isInteractiveElement(this.target)

        this.setCursorImage(interactive ? this.clickCursor : this.defaultCursor)
        this.updateTransform(interactive ? 1.15 : 1, interactive ? 0 : 15)

        document.documentElement.classList.add('custom-cursor-ready')
        this.cursor.style.opacity = '1'
        this.visible = true
    }

    updateTransform(scale, rotation) {
        this.cursor.style.transform = `translate3d(${this.position.x - 24}px, ${this.position.y - 24}px, 0) scale(${scale}) rotate(${rotation}deg)`
    }

    isInteractiveElement(element) {
        return element instanceof Element && Boolean(element.closest('a, button, input, select, textarea, .option, .start-btn, .submit, .analysis, .continue-btn, .next, .prev'))
    }

    setCursorImage(src) {
        if (this.currentCursor === src) return
        this.cursor.style.backgroundImage = `url("${src}")`
        this.currentCursor = src
    }

    hide() {
        if (!this.visible) return
        this.cursor.style.opacity = '0'
        this.visible = false
        this.restoreNativeCursor()
    }

    restoreNativeCursor() {
        document.documentElement.classList.remove('custom-cursor-ready')
    }

    restorePosition() {
        try {
            const position = JSON.parse(sessionStorage.getItem(mousePositionStorageKey))
            if (!Number.isFinite(position?.x) || !Number.isFinite(position?.y)) return false
            if (position.x < 0 || position.x > window.innerWidth || position.y < 0 || position.y > window.innerHeight) return false

            this.position = position
            return true
        } catch {
            return false
        }
    }

    savePosition() {
        if (!this.hasPosition) return

        try {
            sessionStorage.setItem(mousePositionStorageKey, JSON.stringify(this.position))
        } catch {
            // The cursor still works when storage is unavailable.
        }
    }

    destroy() {
        this.restoreNativeCursor()
        this.layer.remove()
    }
}

if (mouseScriptUrl) {
    const cursorBaseUrl = new URL('../../assets/images/common/', mouseScriptUrl)
    new Mouse({
        defaultCursor: new URL('MouseDefault.svg', cursorBaseUrl).href,
        clickCursor: new URL('MouseClick.svg', cursorBaseUrl).href,
    })
}
