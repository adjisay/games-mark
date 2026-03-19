import './BrowseByType.scss'
import Section from '@/layouts/Section'
import BrowseTypeCard from '@/components/BrowseTypeCard'

const types = [
  {
    icon: 'matches',
    title: 'Matches',
    description: 'Saved games and results',
    count: 12,
    isActive: true,
    hasFill: true,
  },
  {
    icon: 'users',
    title: 'Teams / Clubs',
    description: 'Followed teams and clubs',
    count: 4,
    hasFill: false,
  },
  {
    icon: 'trophy',
    title: 'Leagues / Tournaments',
    description: 'Tracked competitions',
    count: 3,
    hasFill: false,
  },
  {
    icon: 'profile',
    title: 'Players',
    description: 'Favorite athletes & MVPs',
    count: 2,
    hasFill: false,
  },
]

export default () => {
  return (
    <Section
      className="browse-by-type"
      title="Browse by Type"
      titleId="browse-type-title"
      description="Filter your bookmarks"
    >
      <div className="browse-by-type__list">
        {types.map((type, index) => (
          <BrowseTypeCard key={index} {...type} />
        ))}
      </div>
    </Section>
  )
}
