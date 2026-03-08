import './ProfileSummary.scss'
import SettingsCard from '@/components/SettingsCard'

const stats = [
  { label: 'Games', value: '156' },
  { label: 'Win Rate', value: '72%' },
  { label: 'Friends', value: '24' },
]

export default () => {
  return (
    <SettingsCard className="profile-summary">
      <div className="profile-summary__avatar">DR</div>
      <h3 className="profile-summary__name">Daniel Robertson</h3>
      <span className="profile-summary__role">Pro Player</span>
      <div className="profile-summary__stats">
        {stats.map((stat) => (
          <div className="profile-summary__stat" key={stat.label}>
            <span className="profile-summary__stat-value">{stat.value}</span>
            <span className="profile-summary__stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
      <span className="profile-summary__member">Member since January 2024</span>
    </SettingsCard>
  )
}
