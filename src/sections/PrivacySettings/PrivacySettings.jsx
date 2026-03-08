import './PrivacySettings.scss'
import SettingsCard from '@/components/SettingsCard'
import ToggleSwitch from '@/components/ToggleSwitch'
import Icon from '@/components/Icon'

export default () => {
  return (
    <SettingsCard title="Privacy" className="privacy-settings">
      <div className="privacy-settings__list">
        <div className="privacy-settings__row">
          <div className="privacy-settings__row-info">
            <span className="privacy-settings__row-title">
              Profile Visibility
            </span>
            <span className="privacy-settings__row-desc">
              Control who can see your profile
            </span>
          </div>
          <button className="privacy-settings__dropdown" type="button">
            <span>Everyone</span>
            <Icon
              className="privacy-settings__dropdown-icon"
              name="chevron-down"
            />
          </button>
        </div>
        <div className="privacy-settings__row">
          <div className="privacy-settings__row-info">
            <span className="privacy-settings__row-title">
              Game Invite Permissions
            </span>
            <span className="privacy-settings__row-desc">
              Choose who can invite you to games
            </span>
          </div>
          <button className="privacy-settings__dropdown" type="button">
            <span>Friends Only</span>
            <Icon
              className="privacy-settings__dropdown-icon"
              name="chevron-down"
            />
          </button>
        </div>
        <div className="privacy-settings__row">
          <div className="privacy-settings__row-info">
            <span className="privacy-settings__row-title">
              Show Activity Status
            </span>
            <span className="privacy-settings__row-desc">
              Let others see when you&apos;re online
            </span>
          </div>
          <ToggleSwitch isOn={true} />
        </div>
      </div>
    </SettingsCard>
  )
}
