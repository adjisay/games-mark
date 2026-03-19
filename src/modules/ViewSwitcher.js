class ViewSwitcher {
  selectors = {
    btn: '[data-js-view]',
    list: '[data-js-games-list]',
  }

  stateClasses = {
    isGrid: 'is-grid',
    isList: 'is-list',
  }

  constructor() {
    this.buttons = document.querySelectorAll(this.selectors.btn)
    this.list = document.querySelector(this.selectors.list)

    if (!this.buttons.length || !this.list) {
      return
    }

    this.bindEvents()
  }

  onButtonClick = (event) => {
    const view = event.currentTarget.getAttribute('data-js-view')

    this.list.classList.remove(
      this.stateClasses.isGrid,
      this.stateClasses.isList
    )
    this.list.classList.add(
      view === 'grid' ? this.stateClasses.isGrid : this.stateClasses.isList
    )
  }

  bindEvents() {
    this.buttons.forEach((btn) => {
      btn.addEventListener('click', this.onButtonClick)
    })
  }
}

export default ViewSwitcher
