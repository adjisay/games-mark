import './Dropdown.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'

export default (props) => {
  const { className, children } = props

  return (
    <button className={clsx('dropdown', className)} type="button">
      <span>{children}</span>
      <Icon className="dropdown__icon" name="chevron-down" />
    </button>
  )
}
