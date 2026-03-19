import './Badge.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'

export default (props) => {
  const {
    className,
    children,
    color = 'green',
    shape = 'pill',
    bordered,
    icon,
    iconHasFill,
  } = props

  return (
    <span
      className={clsx(
        'badge',
        `badge--${color}`,
        `badge--${shape}`,
        bordered && 'badge--bordered',
        className
      )}
    >
      {icon && (
        <Icon className="badge__icon" name={icon} hasFill={iconHasFill} />
      )}
      {children}
    </span>
  )
}
