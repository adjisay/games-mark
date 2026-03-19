import AboutHero from '@/sections/AboutHero'
import AboutFeatures from '@/sections/AboutFeatures'

export const metadata = {
  title: 'About',
}

export default () => {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutFeatures />
    </div>
  )
}
