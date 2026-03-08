import './SettingsCard.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, title, description, children } = props

  return (
    <div className={clsx('settings-card', className)}>
      {title && <h3 className="settings-card__title">{title}</h3>}
      {description && (
        <p className="settings-card__description">{description}</p>
      )}
      {children}
    </div>
  )
}
