import './PillButton.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, children } = props

  return (
    <button className={clsx('pill-button', className)} type="button">
      {children}
    </button>
  )
}
