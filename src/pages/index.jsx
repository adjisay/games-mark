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
      <div className="home-page__main">
        <HeroBanner />
        <GamesSection />
      </div>
      <aside className="home-page__aside hidden-tablet">
        <CreateGame />
        <Notifications />
      </aside>
    </div>
  )
}
