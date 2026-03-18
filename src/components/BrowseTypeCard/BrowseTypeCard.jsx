import './BrowseTypeCard.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'

export default (props) => {
  const { className, icon, title, description, count, isActive, hasFill } =
    props

  return (
    <button
      className={clsx('browse-type-card', isActive && 'is-active', className)}
      type="button"
    >
      <span className="browse-type-card__icon">
        <Icon
          className="browse-type-card__icon-svg"
          name={icon}
          hasFill={hasFill}
        />
      </span>
      <span className="browse-type-card__info">
        <span className="browse-type-card__title">{title}</span>
        <span className="browse-type-card__description">{description}</span>
      </span>
      <span className="browse-type-card__count">{count}</span>
    </button>
  )
}
