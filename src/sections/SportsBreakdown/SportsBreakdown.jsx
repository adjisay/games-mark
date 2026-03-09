import './SportsBreakdown.scss'
import Section from '@/layouts/Section'

const sports = [
  { name: 'Basketball', percent: 45, color: '#62af3b' },
  { name: 'Football', percent: 30, color: '#2babee' },
  { name: 'Tennis', percent: 15, color: '#f7931a' },
  { name: 'Volleyball', percent: 10, color: '#8b5cf6' },
]

export default () => {
  return (
    <Section
      className="sports-breakdown"
      title="Sports"
      titleId="sports-breakdown-title"
      hideOnMobile
    >
      <div className="sports-breakdown__list">
        {sports.map((sport) => (
          <div className="sports-breakdown__item" key={sport.name}>
            <div className="sports-breakdown__top">
              <span className="sports-breakdown__name">{sport.name}</span>
              <span className="sports-breakdown__percent">
                {sport.percent}%
              </span>
            </div>
            <div className="sports-breakdown__bar">
              <div
                className="sports-breakdown__bar-fill"
                style={{
                  width: `${sport.percent}%`,
                  backgroundColor: sport.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
