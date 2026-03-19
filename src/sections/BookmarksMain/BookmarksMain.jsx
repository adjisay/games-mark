import './BookmarksMain.scss'
import Section from '@/layouts/Section'
import BookmarkCard from '@/components/BookmarkCard'

const filters = ['All', 'Upcoming', 'Past']

const upcomingGames = [
  {
    teamA: 'Eagles',
    teamB: 'Hawks',
    sport: 'Football',
    location: 'Central Stadium',
    date: 'Mar 8, 18:00',
    attendees: '12/22',
    variant: 'upcoming',
  },
  {
    teamA: 'Wolves',
    teamB: 'Tigers',
    sport: 'Basketball',
    location: 'Sports Arena',
    date: 'Mar 10, 20:00',
    attendees: '8/10',
    variant: 'upcoming',
  },
]

const pastGames = [
  {
    teamA: 'Lions',
    teamB: 'Panthers',
    sport: 'Tennis',
    location: 'City Courts',
    date: 'Mar 2, 14:00',
    result: 'won',
    resultScore: '6-3, 6-4',
    variant: 'past',
  },
  {
    teamA: 'Sharks',
    teamB: 'Dolphins',
    sport: 'Football',
    location: 'West Field',
    date: 'Feb 26, 16:00',
    result: 'lost',
    resultScore: '2-3',
    variant: 'past',
  },
]

const filtersMarkup = (
  <div className="bookmarks-main__filters" data-js-toggle-group>
    {filters.map((filter, index) => (
      <button
        className={`bookmarks-main__filter${index === 0 ? ' is-active' : ''}`}
        type="button"
        key={filter}
        data-js-toggle-btn
      >
        {filter}
      </button>
    ))}
  </div>
)

export default () => {
  return (
    <Section
      className="bookmarks-main"
      title="Bookmarks"
      titleId="bookmarks-title"
      description="Your saved games and matches"
      actions={filtersMarkup}
    >
      <div className="bookmarks-main__group">
        <h3 className="bookmarks-main__group-title">Upcoming Games</h3>
        <div className="bookmarks-main__list">
          {upcomingGames.map((game, index) => (
            <BookmarkCard key={index} {...game} />
          ))}
        </div>
      </div>
      <div className="bookmarks-main__group">
        <h3 className="bookmarks-main__group-title">Past Games</h3>
        <div className="bookmarks-main__list">
          {pastGames.map((game, index) => (
            <BookmarkCard key={index} {...game} />
          ))}
        </div>
      </div>
    </Section>
  )
}
