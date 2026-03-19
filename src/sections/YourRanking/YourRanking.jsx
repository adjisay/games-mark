import './YourRanking.scss'
import Badge from '@/components/Badge'
import Section from '@/layouts/Section'

const stats = [
  { value: '156', label: 'Games' },
  { value: '72%', label: 'Win Rate', accent: true },
  { value: '112', label: 'Wins' },
]

export default () => {
  return (
    <Section
      className="your-ranking"
      title="Your Ranking"
      titleId="your-ranking-title"
      hideOnMobile
    >
      <div className="your-ranking__rank-circle">
        <span className="your-ranking__rank-num">#12</span>
      </div>
      <span className="your-ranking__points">1,890 points</span>
      <Badge
        className="your-ranking__change"
        color="green"
        icon="trending-up"
      >
        +3 this week
      </Badge>
      <div className="your-ranking__stats">
        {stats.map((stat) => (
          <div className="your-ranking__stat" key={stat.label}>
            <span
              className={`your-ranking__stat-value ${stat.accent ? 'your-ranking__stat-value--accent' : ''}`}
            >
              {stat.value}
            </span>
            <span className="your-ranking__stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
