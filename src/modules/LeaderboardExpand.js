class LeaderboardExpand {
  selectors = {
    root: '[data-js-leaderboard-expand]',
    toggle: '[data-js-leaderboard-toggle]',
  }

  stateClasses = {
    isExpanded: 'is-expanded',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)

    if (!this.rootElement) {
      return
    }

    this.toggleButton = this.rootElement.querySelector(this.selectors.toggle)
    this.bindEvents()
  }

  onToggleClick = () => {
    this.rootElement.classList.add(this.stateClasses.isExpanded)
  }

  bindEvents() {
    this.toggleButton.addEventListener('click', this.onToggleClick)
  }
}

export default LeaderboardExpand
