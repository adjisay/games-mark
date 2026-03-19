import './SummaryCards.scss'
import Section from '@/layouts/Section'
import Icon from '@/components/Icon'

const cards = [
  {
    label: 'Total Matches',
    value: '156',
    icon: 'trophy',
    iconColor: '#62af3b',
    iconBg: '#62af3b1a',
  },
  {
    label: 'Wins',
    value: '98',
    icon: 'trophy',
    iconColor: '#4caf50',
    iconBg: '#4caf501a',
  },
  {
    label: 'Losses',
    value: '42',
    icon: 'trophy',
    iconColor: '#ef4444',
    iconBg: '#ef44441a',
  },
  {
    label: 'Win Rate',
    value: '70%',
    icon: 'trending-up',
    iconColor: '#f7931a',
    iconBg: '#f7931a1a',
  },
]

export default () => {
  return (
    <Section className="summary-cards">
      <div className="summary-cards__grid">
        {cards.map((card) => (
          <div className="summary-cards__card" key={card.label}>
            <span
              className="summary-cards__icon"
              style={{ color: card.iconColor, backgroundColor: card.iconBg }}
            >
              <Icon name={card.icon} />
            </span>
            <div className="summary-cards__text">
              <span className="summary-cards__value">{card.value}</span>
              <span className="summary-cards__label">{card.label}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
