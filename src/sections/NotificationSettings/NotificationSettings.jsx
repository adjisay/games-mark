import './NotificationSettings.scss'
import SettingsCard from '@/components/SettingsCard'
import ToggleSwitch from '@/components/ToggleSwitch'

const notificationsData = [
  {
    title: 'Match Reminders',
    description: 'Get notified 30 min before your scheduled matches',
    isOn: true,
  },
  {
    title: 'Game Invites',
    description: 'Receive invitations to join new games',
    isOn: true,
  },
  {
    title: 'Messages',
    description: 'Notifications for new direct messages',
    isOn: false,
  },
  {
    title: 'Results Updates',
    description: 'Get updates on match results and scores',
    isOn: true,
  },
]

export default () => {
  return (
    <SettingsCard
      title="Notification Settings"
      description="Choose what notifications you want to receive"
      className="notification-settings"
    >
      <div className="notification-settings__list">
        {notificationsData.map(({ title, description, isOn }, index) => (
          <div className="notification-settings__row" key={index}>
            <div className="notification-settings__row-info">
              <span className="notification-settings__row-title">{title}</span>
              <span className="notification-settings__row-desc">
                {description}
              </span>
            </div>
            <ToggleSwitch isOn={isOn} />
          </div>
        ))}
      </div>
    </SettingsCard>
  )
}
