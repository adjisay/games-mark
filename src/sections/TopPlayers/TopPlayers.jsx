import './TopPlayers.scss'
import clsx from 'clsx'

const players = [
  {
    rank: 2,
    name: 'Mike Kelvin',
    initials: 'MK',
    points: '2,840',
    winRate: '89%',
    color: '#3b82f6',
    place: 'silver',
  },
  {
    rank: 1,
    name: 'James Rodriguez',
    initials: 'JR',
    points: '3,120',
    winRate: '94%',
    color: '#62af3b',
    place: 'gold',
  },
  {
    rank: 3,
    name: 'Sara Lopez',
    initials: 'SL',
    points: '2,650',
    winRate: '85%',
    color: '#f59e0b',
    place: 'bronze',
  },
]

export default () => {
  return (
    <div className="top-players">
      <h3 className="top-players__title">Top Players</h3>
      <div className="top-players__podium">
        {players.map((player) => (
          <div
            className={clsx(
              'top-players__card',
              `top-players__card--${player.place}`
            )}
            key={player.rank}
          >
            <span
              className={`top-players__badge top-players__badge--${player.place}`}
            >
              {player.rank}
            </span>
            <span
              className="top-players__avatar"
              style={{
                color: player.color,
                backgroundColor: `${player.color}1a`,
              }}
            >
              {player.initials}
            </span>
            <span className="top-players__name">{player.name}</span>
            <span className="top-players__points">{player.points} pts</span>
            <span className="top-players__win-rate">
              {player.winRate} Win Rate
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
