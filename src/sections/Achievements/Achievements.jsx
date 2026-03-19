import './Achievements.scss'
import Icon from '@/components/Icon'
import Section from '@/layouts/Section'

const achievements = [
  {
    icon: 'trophy',
    name: 'First Victory',
    description: 'Win your first match',
    color: '#62af3b',
    bgColor: '#62af3b1a',
  },
  {
    icon: 'trending-up',
    name: '10 Match Streak',
    description: 'Play 10 matches in a row',
    color: '#f7931a',
    bgColor: '#fff7ed',
  },
  {
    icon: 'trophy',
    name: 'MVP Award',
    description: 'Get voted as MVP',
    color: '#2babee',
    bgColor: '#edf9ff',
  },
]

export default () => {
  return (
    <Section
      className="achievements"
      title="Achievements"
      titleId="achievements-title"
    >
      <div className="achievements__list">
        {achievements.map((item) => (
          <div className="achievements__item" key={item.name}>
            <span
              className="achievements__icon"
              style={{ color: item.color, backgroundColor: item.bgColor }}
            >
              <Icon name={item.icon} />
            </span>
            <div className="achievements__text">
              <span className="achievements__name">{item.name}</span>
              <span className="achievements__desc">{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
