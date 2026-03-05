import './Logo.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Home'

  return (
    <a
      className={clsx('logo', className)}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src="/src/assets/images/main-logo.svg"
        alt=""
        width={180}
        height={40}
        loading={loading}
      />
    </a>
  )
}
