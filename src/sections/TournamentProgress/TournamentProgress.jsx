import './TournamentProgress.scss'
import Section from '@/layouts/Section'
import Badge from '@/components/Badge'

const statusColorMap = {
  live: 'green',
  upcoming: 'blue',
  finished: 'gray',
}

const tournaments = [
  {
    league: 'City Basketball League',
    wins: 12,
    losses: 3,
    position: '#2',
    status: 'Live',
    statusType: 'live',
  },
  {
    league: 'Regional Football Cup',
    wins: 8,
    losses: 5,
    position: '#4',
    status: 'Upcoming',
    statusType: 'upcoming',
  },
  {
    league: 'Tennis Open Season',
    wins: 6,
    losses: 2,
    position: '#1',
    status: 'Finished',
    statusType: 'finished',
  },
]

export default () => {
  return (
    <Section
      className="tournament-progress"
      title="Tournament Progress"
      titleId="tournament-progress-title"
    >
      <div className="tournament-progress__table">
        <div className="tournament-progress__header">
          <span className="tournament-progress__th tournament-progress__th--league">
            League
          </span>
          <span className="tournament-progress__th tournament-progress__th--wl">
            W/L
          </span>
          <span className="tournament-progress__th tournament-progress__th--pos">
            Pos
          </span>
          <span className="tournament-progress__th tournament-progress__th--status">
            Status
          </span>
        </div>
        {tournaments.map((item) => (
          <div className="tournament-progress__row" key={item.league}>
            <span className="tournament-progress__cell tournament-progress__cell--league">
              {item.league}
            </span>
            <span className="tournament-progress__cell tournament-progress__cell--wl">
              {item.wins}/{item.losses}
            </span>
            <span className="tournament-progress__cell tournament-progress__cell--pos">
              {item.position}
            </span>
            <Badge
              className="tournament-progress__badge"
              color={statusColorMap[item.statusType]}
              shape="rounded"
            >
              {item.status}
            </Badge>
          </div>
        ))}
      </div>

      <div className="tournament-progress__list">
        {tournaments.map((item) => (
          <div className="tournament-progress__list-row" key={item.league}>
            <div className="tournament-progress__list-info">
              <span className="tournament-progress__list-name">
                {item.league}
              </span>
              <span className="tournament-progress__list-meta">
                {item.wins}W / {item.losses}L &middot; {item.position}
              </span>
            </div>
            <Badge
              className="tournament-progress__badge"
              color={statusColorMap[item.statusType]}
              shape="rounded"
            >
              {item.status}
            </Badge>
          </div>
        ))}
      </div>
    </Section>
  )
}
