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
]

const controlsMarkup = (
  <div className="games-section__controls">
    <button className="games-section__view-btn is-active" type="button">
      <Icon name="grid-view" />
    </button>
    <button className="games-section__view-btn" type="button">
      <Icon name="list-view" />
    </button>
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
      <div className="games-section__list">
        {gamesData.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
    </Section>
  )
}
