class ActiveToggle {
  selectors = {
    group: '[data-js-toggle-group]',
    btn: '[data-js-toggle-btn]',
  }

  stateClasses = {
    isActive: 'is-active',
  }

  constructor() {
    this.groups = document.querySelectorAll(this.selectors.group)

    if (!this.groups.length) {
      return
    }

    this.bindEvents()
  }

  onButtonClick = (event) => {
    const btn = event.currentTarget
    const group = btn.closest(this.selectors.group)
    const buttons = group.querySelectorAll(this.selectors.btn)

    buttons.forEach((b) => b.classList.remove(this.stateClasses.isActive))
    btn.classList.add(this.stateClasses.isActive)
  }

  bindEvents() {
    this.groups.forEach((group) => {
      const buttons = group.querySelectorAll(this.selectors.btn)

      buttons.forEach((btn) => {
        btn.addEventListener('click', this.onButtonClick)
      })
    })
  }
}

export default ActiveToggle
