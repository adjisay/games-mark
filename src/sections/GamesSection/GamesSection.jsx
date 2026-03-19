import './GamesSection.scss'
import Icon from '@/components/Icon'
import GameCard from '@/components/GameCard'
import Section from '@/layouts/Section'

const gamesData = [
  {
    teamA: 'Alba BBC',
    teamB: 'Chemniz99 BC',
    location: 'London Stadium',
    time: '5:00 pm',
    attendees: 25,
    sport: 'BB',
  },
  {
    teamA: 'EBC',
    teamB: 'TGBC',
    location: 'London Stadium',
    time: '5:00 pm',
    attendees: 45,
    sport: 'BB',
  },
  {
    teamA: 'TGBC',
    teamB: 'BSC',
    location: 'London Stadium',
    time: '5:00 pm',
    attendees: 30,
    sport: 'FB',
  },
  {
    teamA: 'Red Bulls',
    teamB: 'Hawks',
    location: 'Central Arena',
    time: '7:00 pm',
    attendees: 18,
    sport: 'BB',
  },
  {
    teamA: 'Wolves',
    teamB: 'Tigers',
    location: 'Sports Park',
    time: '3:30 pm',
    attendees: 35,
    sport: 'FB',
  },
]

const controlsMarkup = (
  <div className="games-section__controls">
    <div className="games-section__views" data-js-toggle-group>
      <button
        className="games-section__view-btn is-active"
        type="button"
        data-js-toggle-btn
        data-js-view="grid"
      >
        <Icon name="grid-view" />
      </button>
      <button
        className="games-section__view-btn"
        type="button"
        data-js-toggle-btn
        data-js-view="list"
      >
        <Icon name="list-view" />
      </button>
    </div>
    <div className="games-section__sort">
      <Icon className="games-section__sort-icon" name="sort" />
      <span>Newest</span>
    </div>
  </div>
)

export default () => {
  return (
    <Section
      className="games-section"
      title="Games"
      titleId="games-section-title"
      actions={controlsMarkup}
    >
      <div className="games-section__list is-grid" data-js-games-list>
        {gamesData.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
    </Section>
  )
}
