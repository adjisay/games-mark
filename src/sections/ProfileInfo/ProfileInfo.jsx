import './ProfileInfo.scss'
import Icon from '@/components/Icon'

const fieldsData = [
  { label: 'Full Name', value: 'Daniella Rake' },
  { label: 'Phone Number', value: '+1 (555) 234-5678' },
  { label: 'Email Address', value: 'daniella.rake@email.com' },
  { label: 'Date of Birth', value: 'March 15, 1992' },
]

export default () => {
  return (
    <div className="profile-info settings-card">
      <div className="profile-info__header">
        <h3 className="settings-card__title">Profile Information</h3>
        <button className="profile-info__edit-btn" type="button">
          <Icon className="profile-info__edit-icon" name="plus" />
          <span>Edit Profile</span>
        </button>
      </div>
      <div className="profile-info__user">
        <div className="profile-info__avatar">
          <span className="profile-info__avatar-text">DR</span>
        </div>
        <div className="profile-info__user-info">
          <span className="profile-info__user-name">Daniella Rake</span>
          <span className="profile-info__user-role">Coach · Legend</span>
        </div>
      </div>
      <div className="profile-info__fields">
        {fieldsData.map(({ label, value }, index) => (
          <div className="profile-info__field" key={index}>
            <label className="profile-info__field-label">{label}</label>
            <div className="profile-info__field-input">
              <span>{value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
