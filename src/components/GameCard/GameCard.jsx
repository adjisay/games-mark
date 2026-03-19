import './GameCard.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'

export default (props) => {
  const {
    className,
    teamA,
    teamB,
    teamALogo,
    teamBLogo,
    location,
    time,
    attendees,
    sport,
  } = props

  return (
    <div className={clsx('game-card', className)}>
      <div className="game-card__sport-icon">
        <Icon className="game-card__sport-icon-svg" name="matches" hasFill />
      </div>
      <div className="game-card__body">
        <div className="game-card__top">
          <div className="game-card__info">
            <div className="game-card__teams">
              <h4 className="game-card__title">
                {teamA} vs {teamB}
              </h4>
            </div>
            <div className="game-card__detail">
              <Icon className="game-card__detail-icon" name="location" />
              <span>
                {location} | {time}
              </span>
            </div>
          </div>
          <button className="game-card__bookmark" type="button">
            <Icon name="bookmark" />
          </button>
          <button className="game-card__more" type="button">
            <Icon name="more" />
          </button>
        </div>
        <div className="game-card__footer">
          <div className="game-card__attendees">
            <div className="game-card__attendees-avatars">
              {['JK', 'ML', 'AT', 'SW', 'RD'].map((initials, i) => (
                <span className="game-card__attendees-avatar" key={i}>
                  {initials}
                </span>
              ))}
            </div>
            <span className="game-card__attendees-text">
              {attendees}+ People will come
            </span>
          </div>
          <button className="game-card__join-btn" type="button">
            Join Now
          </button>
        </div>
      </div>
    </div>
  )
}
