import './SecuritySettings.scss'
import SettingsCard from '@/components/SettingsCard'
import ToggleSwitch from '@/components/ToggleSwitch'

export default () => {
  return (
    <SettingsCard title="Security" className="security-settings">
      <div className="security-settings__list">
        <div className="security-settings__row">
          <div className="security-settings__row-info">
            <span className="security-settings__row-title">Password</span>
            <span className="security-settings__row-desc">
              Last changed 3 months ago
            </span>
          </div>
          <button className="security-settings__btn" type="button">
            Change Password
          </button>
        </div>
        <div className="security-settings__row">
          <div className="security-settings__row-info">
            <span className="security-settings__row-title">
              Two-Factor Authentication
            </span>
            <span className="security-settings__row-desc">
              Add an extra layer of security to your account
            </span>
          </div>
          <ToggleSwitch isOn={false} />
        </div>
        <div className="security-settings__row">
          <div className="security-settings__row-info">
            <span className="security-settings__row-title">
              Active Sessions
            </span>
            <span className="security-settings__row-desc">
              2 devices currently signed in
            </span>
          </div>
          <button className="security-settings__btn" type="button">
            Manage
          </button>
        </div>
      </div>
    </SettingsCard>
  )
}
