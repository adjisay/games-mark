import './index.scss'
import HeroBanner from '@/sections/HeroBanner'
import GamesSection from '@/sections/GamesSection'
import CreateGame from '@/sections/CreateGame'
import Notifications from '@/sections/Notifications'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <div className="home-page">
      <HeroBanner />
      <GamesSection />
      <CreateGame />
      <Notifications />
    </div>
  )
}
