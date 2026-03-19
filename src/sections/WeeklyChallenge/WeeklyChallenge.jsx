import './WeeklyChallenge.scss'
import Icon from '@/components/Icon'
import Section from '@/layouts/Section'

export default () => {
  return (
    <Section className="weekly-challenge">
      <div className="weekly-challenge__heading">
        <Icon className="weekly-challenge__heading-icon" name="trophy" />
        <span className="weekly-challenge__heading-text">Weekly Challenge</span>
      </div>
      <p className="weekly-challenge__desc">
        Win 5 matches this week to earn bonus points and climb the leaderboard!
      </p>
      <div className="weekly-challenge__progress">
        <div className="weekly-challenge__progress-header">
          <span className="weekly-challenge__progress-label">Progress</span>
          <span className="weekly-challenge__progress-value">3/5 wins</span>
        </div>
        <div className="weekly-challenge__bar-bg">
          <div
            className="weekly-challenge__bar-fill"
            style={{ width: '60%' }}
          />
        </div>
      </div>
      <div className="weekly-challenge__reward">
        <Icon className="weekly-challenge__reward-icon" name="trophy" />
        <span>Reward: +500 bonus points</span>
      </div>
    </Section>
  )
}
