import './RecentResults.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section'

const results = [
  {
    match: 'Alba BBC vs Chemniz99 BC',
    result: 'Win',
    resultType: 'win',
    score: '3 - 1',
    date: 'Mar 4',
  },
  {
    match: 'EBC vs TGBC',
    result: 'Loss',
    resultType: 'loss',
    score: '1 - 2',
    date: 'Mar 2',
  },
  {
    match: 'TGBC vs BSC',
    result: 'Win',
    resultType: 'win',
    score: '5 - 3',
    date: 'Feb 28',
  },
  {
    match: 'Red Bulls vs Hawks',
    result: 'Win',
    resultType: 'win',
    score: '2 - 0',
    date: 'Feb 25',
  },
]

export default () => {
  return (
    <Section
      className="recent-results"
      title="Recent Results"
      titleId="recent-results-title"
    >
      <div className="recent-results__table">
        <div className="recent-results__header">
          <span className="recent-results__th recent-results__th--match">
            Match
          </span>
          <span className="recent-results__th recent-results__th--result">
            Result
          </span>
          <span className="recent-results__th recent-results__th--score">
            Score
          </span>
          <span className="recent-results__th recent-results__th--date">
            Date
          </span>
        </div>
        {results.map((item) => (
          <div className="recent-results__row" key={item.match}>
            <span className="recent-results__cell recent-results__cell--match">
              {item.match}
            </span>
            <span className="recent-results__cell recent-results__cell--result">
              <span
                className={clsx(
                  'recent-results__badge',
                  `recent-results__badge--${item.resultType}`
                )}
              >
                {item.result}
              </span>
            </span>
            <span className="recent-results__cell recent-results__cell--score">
              {item.score}
            </span>
            <span className="recent-results__cell recent-results__cell--date">
              {item.date}
            </span>
          </div>
        ))}
      </div>

      <div className="recent-results__list">
        {results.map((item) => (
          <div className="recent-results__list-row" key={item.match}>
            <div className="recent-results__list-info">
              <span className="recent-results__list-match">{item.match}</span>
              <span className="recent-results__list-meta">
                {item.score} &middot; {item.date}
              </span>
            </div>
            <span
              className={clsx(
                'recent-results__badge',
                `recent-results__badge--${item.resultType}`
              )}
            >
              {item.result}
            </span>
          </div>
        ))}
      </div>
    </Section>
  )
}
