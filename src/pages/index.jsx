import HeroBanner from '@/sections/HeroBanner'
import GamesSection from '@/sections/GamesSection'
import CreateGame from '@/sections/CreateGame'
import Notifications from '@/sections/Notifications'

export const metadata = {
  title: 'Matches',
}

export default () => {
  return (
    <div className="page-grid matches-page">
      <HeroBanner />
      <GamesSection />
      <CreateGame />
      <Notifications />
    </div>
  )
}
