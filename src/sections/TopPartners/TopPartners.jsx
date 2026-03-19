import './TopPartners.scss'
import Section from '@/layouts/Section'

const partners = [
  {
    initials: 'JK',
    name: 'Jason Kim',
    games: 24,
    color: '#62af3b',
    bgColor: '#62af3b1a',
  },
  {
    initials: 'ML',
    name: 'Maria Lopez',
    games: 18,
    color: '#2babee',
    bgColor: '#2babee1a',
  },
  {
    initials: 'AT',
    name: 'Alex Turner',
    games: 12,
    color: '#f7931a',
    bgColor: '#f7931a1a',
  },
]

export default () => {
  return (
    <Section
      className="top-partners"
      title="Top Partners"
      titleId="top-partners-title"
    >
      <div className="top-partners__list">
        {partners.map((partner) => (
          <div className="top-partners__item" key={partner.name}>
            <span
              className="top-partners__avatar"
              style={{ color: partner.color, backgroundColor: partner.bgColor }}
            >
              {partner.initials}
            </span>
            <div className="top-partners__info">
              <span className="top-partners__name">{partner.name}</span>
              <span className="top-partners__games">
                {partner.games} games together
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
