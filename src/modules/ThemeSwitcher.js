class ThemeSwitcher {
  selectors = {
    root: '[data-js-theme-switcher]',
    button: '[data-js-theme-btn]',
  }

  stateClasses = {
    isActive: 'is-active',
  }

  storageKey = 'gamesmark-theme'

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.applyStoredTheme()

    if (!this.rootElement) {
      return
    }

    this.buttons = this.rootElement.querySelectorAll(this.selectors.button)
    this.syncButtons()
    this.bindEvents()
  }

  get currentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light'
  }

  applyStoredTheme() {
    const stored = localStorage.getItem(this.storageKey)

    if (stored === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }

  syncButtons() {
    this.buttons.forEach((btn) => {
      const theme = btn.getAttribute('data-js-theme-btn')

      btn.classList.toggle(
        this.stateClasses.isActive,
        theme === this.currentTheme
      )
    })
  }

  setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }

    localStorage.setItem(this.storageKey, theme)
    this.syncButtons()
  }

  onButtonClick = (event) => {
    const theme = event.currentTarget.getAttribute('data-js-theme-btn')

    this.setTheme(theme)
  }

  bindEvents() {
    this.buttons.forEach((btn) => {
      btn.addEventListener('click', this.onButtonClick)
    })
  }
}

export default ThemeSwitcher
