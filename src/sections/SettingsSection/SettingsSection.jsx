import './SettingsSection.scss'
import Section from '@/layouts/Section'

export default (props) => {
  const { title, titleId, description, items } = props

  return (
    <Section
      className="settings-section"
      title={title}
      titleId={titleId}
      description={description}
    >
      <div className="settings-section__list">
        {items.map((item, index) => (
          <div className="settings-section__row" key={index}>
            <div className="settings-section__row-info">
              <span className="settings-section__row-title">{item.title}</span>
              <span className="settings-section__row-desc">
                {item.description}
              </span>
            </div>
            <div className="settings-section__row-control">{item.control}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
