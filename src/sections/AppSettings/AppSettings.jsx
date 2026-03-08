import './AppSettings.scss'
import SettingsCard from '@/components/SettingsCard'
import Icon from '@/components/Icon'

export default () => {
  return (
    <SettingsCard title="App Settings" className="app-settings">
      <div className="app-settings__list">
        <div className="app-settings__row">
          <div className="app-settings__row-info">
            <span className="app-settings__row-title">Theme</span>
            <span className="app-settings__row-desc">
              Choose your preferred appearance
            </span>
          </div>
          <div className="app-settings__theme-selector" data-js-theme-switcher>
            <button
              className="app-settings__theme-btn is-active"
              data-js-theme-btn="light"
              type="button"
            >
              Light
            </button>
            <button
              className="app-settings__theme-btn"
              data-js-theme-btn="dark"
              type="button"
            >
              Dark
            </button>
          </div>
        </div>
        <div className="app-settings__row">
          <div className="app-settings__row-info">
            <span className="app-settings__row-title">Language</span>
            <span className="app-settings__row-desc">
              Select your preferred language
            </span>
          </div>
          <button className="app-settings__dropdown" type="button">
            <span>English</span>
            <Icon className="app-settings__dropdown-icon" name="chevron-down" />
          </button>
        </div>
      </div>
    </SettingsCard>
  )
}
