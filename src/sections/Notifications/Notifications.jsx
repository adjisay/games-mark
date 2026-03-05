import './Notifications.scss'
import Icon from '@/components/Icon'

const notificationsData = [
  {
    icon: 'matches',
    text: 'EBC vs TGBC will started tomorrow at 8:00 am, prepare yourself! See what you need for the match.',
    time: 'Just now',
    isNew: true,
  },
  {
    icon: 'message',
    text: 'Jason send you a message! Open now.',
    time: '5h ago',
    isNew: false,
  },
  {
    icon: 'matches',
    text: 'TGBC vs BSC match has been rescheduled! Join now',
    time: 'Yesterday',
    isNew: false,
  },
]

export default () => {
  return (
    <div className="notifications-panel">
      <div className="notifications-panel__header">
        <Icon className="notifications-panel__header-icon" name="notification" />
        <h3 className="notifications-panel__title">Notifications</h3>
      </div>
      <ul className="notifications-panel__list">
        {notificationsData.map(({ icon, text, time, isNew }, index) => (
          <li
            className={`notifications-panel__item${isNew ? ' is-new' : ''}`}
            key={index}
          >
            <Icon className="notifications-panel__item-icon" name={icon} />
            <div className="notifications-panel__item-content">
              <p className="notifications-panel__item-text">{text}</p>
              <span className="notifications-panel__item-time">{time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
