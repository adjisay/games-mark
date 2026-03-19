import './AboutHero.scss'
import Section from '@/layouts/Section'

export default () => {
  return (
    <Section className="about-hero">
      <h1 className="about-hero__title">About GamesMark</h1>
      <p className="about-hero__text">
        GamesMark is a sports platform for organizing and tracking matches.
        Whether you play basketball, football, tennis, or any other sport — we
        help you find games, track your progress, and connect with players.
      </p>
    </Section>
  )
}
