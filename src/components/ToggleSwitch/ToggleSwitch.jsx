import './ToggleSwitch.scss'
import clsx from 'clsx'

export default (props) => {
  const { isOn = false, className } = props

  return (
    <button
      className={clsx('toggle-switch', isOn && 'is-on', className)}
      type="button"
      role="switch"
      aria-checked={isOn}
    >
      <span className="toggle-switch__knob" />
    </button>
  )
}
