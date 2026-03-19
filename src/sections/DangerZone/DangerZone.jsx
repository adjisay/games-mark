import './DangerZone.scss'
import Icon from '@/components/Icon'
import Section from '@/layouts/Section'

export default () => {
  return (
    <Section
      className="danger-zone"
      title="Danger Zone"
      titleId="danger-zone-title"
    >
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
    </Section>
  )
}
