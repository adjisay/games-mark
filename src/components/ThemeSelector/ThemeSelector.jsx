import './ThemeSelector.scss'

export default () => {
  return (
    <div className="theme-selector" data-js-theme-switcher>
      <button
        className="theme-selector__btn is-active"
        data-js-theme-btn="light"
        type="button"
      >
        Light
      </button>
      <button
        className="theme-selector__btn"
        data-js-theme-btn="dark"
        type="button"
      >
        Dark
      </button>
    </div>
  )
}
