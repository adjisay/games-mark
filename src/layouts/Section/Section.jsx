import './Section.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, title, titleId, description, actions, children } = props

  return (
    <section
      className={clsx('section', className)}
      aria-labelledby={titleId}
    >
      {title && (
        <header className="section__header">
          <div className="section__info">
            <h2 className="section__title" id={titleId}>
              {title}
            </h2>
            {description && (
              <p className="section__description">{description}</p>
            )}
          </div>
          {actions && <div className="section__actions">{actions}</div>}
        </header>
      )}
      {children}
    </section>
  )
}
