import './TopSports.scss'
import Section from '@/layouts/Section'

const sports = [
  {
    name: 'Football',
    emoji: '\u26BD',
    rank: '#8',
    rankColor: '#62af3b',
    bgColor: '#62af3b1a',
  },
  {
    name: 'Basketball',
    emoji: '\uD83C\uDFC0',
    rank: '#15',
    rankColor: '#f59e0b',
    bgColor: '#f59e0b1a',
  },
  {
    name: 'Tennis',
    emoji: '\uD83C\uDFBE',
    rank: '#22',
    rankColor: '#3b82f6',
    bgColor: '#3b82f61a',
  },
]

export default () => {
  return (
    <Section
      className="top-sports"
      title="Top Sports"
      titleId="top-sports-title"
    >
      <div className="top-sports__list">
        {sports.map((sport) => (
          <div className="top-sports__row" key={sport.name}>
            <div className="top-sports__sport">
              <span
                className="top-sports__icon"
                style={{ backgroundColor: sport.bgColor }}
              >
                {sport.emoji}
              </span>
              <span className="top-sports__name">{sport.name}</span>
            </div>
            <span
              className="top-sports__rank"
              style={{ color: sport.rankColor }}
            >
              {sport.rank}
            </span>
          </div>
        ))}
      </div>
    </Section>
  )
}
