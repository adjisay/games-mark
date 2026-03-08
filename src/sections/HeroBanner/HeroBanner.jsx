import './HeroBanner.scss'
import Button from '@/components/Button'
import Section from '@/layouts/Section'

export default () => {
  return (
    <Section className="hero-banner">
      <div className="hero-banner__content">
        <h1 className="hero-banner__title" id="hero-banner-title">
          Check your current &amp; upcoming games activities here.
        </h1>
        <p className="hero-banner__description">
          Check the current game you are setting to get notifier.
        </p>
        <Button className="hero-banner__btn" href="#notifications">
          Push Notification
        </Button>
      </div>
      <div className="hero-banner__illustration">
        <div className="hero-banner__illustration-placeholder" />
      </div>
    </Section>
  )
}
