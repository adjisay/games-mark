class MobileSearch {
  selectors = {
    root: '[data-js-header]',
    toggle: '[data-js-header-search-toggle]',
    searchBar: '[data-js-header-mobile-search]',
  }

  stateClasses = {
    isOpen: 'is-search-open',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)

    if (!this.rootElement) {
      return
    }

    this.toggleButton = this.rootElement.querySelector(this.selectors.toggle)
    this.searchBar = this.rootElement.querySelector(this.selectors.searchBar)
    this.searchInput = this.searchBar.querySelector('input')
    this.bindEvents()
  }

  onToggleClick = () => {
    const isOpen = this.rootElement.classList.toggle(this.stateClasses.isOpen)

    if (isOpen) {
      this.searchInput.focus()
    }
  }

  bindEvents() {
    this.toggleButton.addEventListener('click', this.onToggleClick)
  }
}

export default MobileSearch
