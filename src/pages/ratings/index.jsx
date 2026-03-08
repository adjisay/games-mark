import './index.scss'
import TopPlayers from '@/sections/TopPlayers'
import Leaderboard from '@/sections/Leaderboard'
import YourRanking from '@/sections/YourRanking'
import TopSports from '@/sections/TopSports'
import WeeklyChallenge from '@/sections/WeeklyChallenge'

export const metadata = {
  title: 'Ratings',
}

export default () => {
  return (
    <div className="ratings-page">
      <div className="ratings-page__main">
        <TopPlayers />
        <Leaderboard />
      </div>
      <aside className="ratings-page__aside hidden-tablet">
        <YourRanking />
        <TopSports />
        <WeeklyChallenge />
      </aside>
    </div>
  )
}
