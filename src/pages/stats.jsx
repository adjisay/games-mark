import SummaryCards from '@/sections/SummaryCards'
import TournamentProgress from '@/sections/TournamentProgress'
import RecentResults from '@/sections/RecentResults'
import SportsBreakdown from '@/sections/SportsBreakdown'
import Achievements from '@/sections/Achievements'
import TopPartners from '@/sections/TopPartners'

export const metadata = {
  title: 'Stats',
}

export default () => {
  return (
    <div className="page-grid stats-page">
      <SummaryCards />
      <TournamentProgress />
      <RecentResults />
      <SportsBreakdown />
      <Achievements />
      <TopPartners />
    </div>
  )
}
