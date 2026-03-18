import './BookmarkCard.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'

export default (props) => {
  const {
    className,
    teamA,
    teamB,
    sport,
    location,
    date,
    attendees,
    result,
    resultScore,
    variant = 'upcoming',
  } = props

  const isUpcoming = variant === 'upcoming'
  const isWon = result === 'won'

  return (
    <div className={clsx('bookmark-card', className)}>
      <div className="bookmark-card__icon">
        <Icon className="bookmark-card__icon-svg" name="matches" hasFill />
      </div>
      <div className="bookmark-card__body">
        <div className="bookmark-card__top">
          <div className="bookmark-card__info">
            <h4 className="bookmark-card__title">
              {teamA} vs {teamB}
            </h4>
            <p className="bookmark-card__detail">
              {sport} &bull; {location} &bull; {date}
            </p>
          </div>
          <button className="bookmark-card__bookmark" type="button">
            <Icon name="bookmark" />
          </button>
        </div>
        <div className="bookmark-card__bottom">
          {isUpcoming ? (
            <>
              <span className="bookmark-card__attendees">
                {attendees} players joined
              </span>
              <button className="bookmark-card__join" type="button">
                Join
              </button>
            </>
          ) : (
            <div className="bookmark-card__result">
              <span
                className={clsx(
                  'bookmark-card__result-badge',
                  isWon
                    ? 'bookmark-card__result-badge--won'
                    : 'bookmark-card__result-badge--lost'
                )}
              >
                {isWon ? 'Win' : 'Lost'}
              </span>
              <span className="bookmark-card__result-score">{resultScore}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
