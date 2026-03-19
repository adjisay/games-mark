import ProfileSummary from '@/sections/ProfileSummary'
import YourRanking from '@/sections/YourRanking'
import Achievements from '@/sections/Achievements'
import SportsBreakdown from '@/sections/SportsBreakdown'
import TopPartners from '@/sections/TopPartners'
import LinkedAccounts from '@/sections/LinkedAccounts'
import DangerZone from '@/sections/DangerZone'

export const metadata = {
  title: 'Profile',
}

export default () => {
  return (
    <div className="page-grid profile-page">
      <ProfileSummary />
      <YourRanking />
      <Achievements />
      <SportsBreakdown />
      <TopPartners />
      <LinkedAccounts />
      <DangerZone />
    </div>
  )
}
