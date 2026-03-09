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
    <div className="page-grid ratings-page">
      <TopPlayers />
      <Leaderboard />
      <YourRanking />
      <TopSports />
      <WeeklyChallenge />
    </div>
  )
}
