import './DangerZone.scss'
import SettingsCard from '@/components/SettingsCard'
import Icon from '@/components/Icon'

export default () => {
  return (
    <SettingsCard title="Danger Zone" className="danger-zone">
      <div className="danger-zone__actions">
        <button
          className="danger-zone__btn danger-zone__btn--logout"
          type="button"
        >
          <Icon className="danger-zone__btn-icon" name="logout" />
          <span>Log Out</span>
        </button>
        <button
          className="danger-zone__btn danger-zone__btn--delete"
          type="button"
        >
          Delete Account
        </button>
      </div>
    </SettingsCard>
  )
}
