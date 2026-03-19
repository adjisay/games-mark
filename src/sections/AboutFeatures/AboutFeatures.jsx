import './AboutFeatures.scss'
import Icon from '@/components/Icon'
import Section from '@/layouts/Section'

const features = [
  {
    icon: 'matches',
    title: 'Organize Games',
    description:
      'Create and manage sports matches with your friends and community.',
    hasFill: true,
  },
  {
    icon: 'stats',
    title: 'Track Stats',
    description:
      'Monitor your performance with detailed statistics and analytics.',
    hasFill: false,
  },
  {
    icon: 'ratings',
    title: 'Climb Rankings',
    description: 'Compete with others and rise through the leaderboard.',
    hasFill: false,
  },
  {
    icon: 'trophy',
    title: 'Earn Achievements',
    description: 'Unlock achievements as you reach new milestones.',
    hasFill: false,
  },
]

export default () => {
  return (
    <Section
      className="about-features"
      title="What We Offer"
      titleId="about-features-title"
    >
      <div className="about-features__grid">
        {features.map((feature) => (
          <div className="about-features__card" key={feature.title}>
            <span className="about-features__icon">
              <Icon name={feature.icon} hasFill={feature.hasFill} />
            </span>
            <h3 className="about-features__card-title">{feature.title}</h3>
            <p className="about-features__card-text">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
