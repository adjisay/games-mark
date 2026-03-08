import './Leaderboard.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section'

const filters = ['All Sports', 'Football', 'Basketball', 'Tennis']

const rows = [
  {
    rank: 1,
    name: 'James Rodriguez',
    initials: 'JR',
    color: '#62af3b',
    games: 189,
    wins: 178,
    winRate: '94%',
    points: '3,120',
    rankColor: '#eab308',
  },
  {
    rank: 2,
    name: 'Mike Kelvin',
    initials: 'MK',
    color: '#3b82f6',
    games: 165,
    wins: 147,
    winRate: '89%',
    points: '2,840',
    rankColor: '#c0c0c0',
  },
  {
    rank: 3,
    name: 'Sara Lopez',
    initials: 'SL',
    color: '#f59e0b',
    games: 142,
    wins: 121,
    winRate: '85%',
    points: '2,650',
    rankColor: '#cd7f32',
  },
  {
    rank: 4,
    name: 'Alex Turner',
    initials: 'AT',
    color: '#8b5cf6',
    games: 130,
    wins: 105,
    winRate: '81%',
    points: '2,410',
    rankColor: '#9ca3af',
  },
  {
    rank: 5,
    name: 'Emma Wilson',
    initials: 'EW',
    color: '#ec4899',
    games: 118,
    wins: 91,
    winRate: '77%',
    points: '2,180',
    rankColor: '#9ca3af',
  },
]

const hiddenRows = [
  {
    rank: 6,
    name: 'Lucas Martin',
    initials: 'LM',
    color: '#06b6d4',
    games: 110,
    wins: 82,
    winRate: '75%',
    points: '2,050',
    rankColor: '#9ca3af',
  },
  {
    rank: 7,
    name: 'Olivia Chen',
    initials: 'OC',
    color: '#f43f5e',
    games: 105,
    wins: 78,
    winRate: '74%',
    points: '1,980',
    rankColor: '#9ca3af',
  },
  {
    rank: 8,
    name: 'Noah Blake',
    initials: 'NB',
    color: '#8b5cf6',
    games: 99,
    wins: 73,
    winRate: '74%',
    points: '1,920',
    rankColor: '#9ca3af',
  },
  {
    rank: 9,
    name: 'Sophie Adams',
    initials: 'SA',
    color: '#f59e0b',
    games: 95,
    wins: 68,
    winRate: '72%',
    points: '1,870',
    rankColor: '#9ca3af',
  },
  {
    rank: 10,
    name: 'Ethan Park',
    initials: 'EP',
    color: '#10b981',
    games: 91,
    wins: 64,
    winRate: '70%',
    points: '1,840',
    rankColor: '#9ca3af',
  },
  {
    rank: 11,
    name: 'Mia Johnson',
    initials: 'MJ',
    color: '#3b82f6',
    games: 88,
    wins: 61,
    winRate: '69%',
    points: '1,810',
    rankColor: '#9ca3af',
  },
]

const currentUser = {
  rank: 12,
  name: 'Daniella Rake',
  initials: 'DR',
  color: '#62af3b',
  games: 156,
  wins: 112,
  winRate: '72%',
  points: '1,890',
}

const filtersMarkup = (
  <div className="leaderboard__filters">
    {filters.map((filter, index) => (
      <button
        className={clsx('leaderboard__filter', index === 0 && 'is-active')}
        type="button"
        key={filter}
      >
        {filter}
      </button>
    ))}
  </div>
)

const renderRow = (row, extraClass) => (
  <div className={clsx('leaderboard__row', extraClass)} key={row.rank}>
    <span
      className={clsx(
        'leaderboard__cell leaderboard__cell--rank',
        extraClass && 'leaderboard__cell--accent'
      )}
      style={{ color: row.rankColor }}
    >
      {row.rank}
    </span>
    <div className="leaderboard__cell leaderboard__cell--player">
      <span
        className="leaderboard__avatar"
        style={{
          color: row.color,
          backgroundColor: `${row.color}1a`,
        }}
      >
        {row.initials}
      </span>
      <span
        className={clsx(
          'leaderboard__player-name',
          extraClass && 'leaderboard__player-name--you'
        )}
      >
        {row.name}
      </span>
      {extraClass && <span className="leaderboard__you-badge">You</span>}
    </div>
    <span className="leaderboard__cell leaderboard__cell--center">
      {row.games}
    </span>
    <span className="leaderboard__cell leaderboard__cell--center">
      {row.wins}
    </span>
    <span className="leaderboard__cell leaderboard__cell--center leaderboard__cell--accent">
      {row.winRate}
    </span>
    <span className="leaderboard__cell leaderboard__cell--right leaderboard__cell--bold">
      {row.points}
    </span>
  </div>
)

export default () => {
  return (
    <Section
      className="leaderboard"
      title="Leaderboard"
      titleId="leaderboard-title"
      actions={filtersMarkup}
    >
      <div className="leaderboard__table-header">
        <span className="leaderboard__th leaderboard__th--rank">#</span>
        <span className="leaderboard__th leaderboard__th--player">Player</span>
        <span className="leaderboard__th leaderboard__th--center">Games</span>
        <span className="leaderboard__th leaderboard__th--center">Wins</span>
        <span className="leaderboard__th leaderboard__th--center">
          Win Rate
        </span>
        <span className="leaderboard__th leaderboard__th--right">Points</span>
      </div>

      {rows.map((row) => renderRow(row))}

      <div className="leaderboard__expand" data-js-leaderboard-expand>
        <div className="leaderboard__hidden-rows" data-js-leaderboard-hidden>
          <div>{hiddenRows.map((row) => renderRow(row))}</div>
        </div>
        <button
          className="leaderboard__gap"
          type="button"
          data-js-leaderboard-toggle
        >
          <span className="leaderboard__gap-dot" />
          <span className="leaderboard__gap-dot" />
          <span className="leaderboard__gap-dot" />
        </button>
      </div>

      {renderRow(currentUser, 'leaderboard__row--you')}
    </Section>
  )
}
