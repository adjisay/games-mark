import './NotFound.scss'
import Icon from '@/components/Icon'
import Button from '@/components/Button'

export default () => {
  return (
    <div className="not-found">
      <div className="not-found__icon">
        <Icon name="search" />
      </div>
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Button className="not-found__btn" href="/">
        Back to Home
      </Button>
    </div>
  )
}
