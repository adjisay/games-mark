import BookmarksMain from '@/sections/BookmarksMain'
import BrowseByType from '@/sections/BrowseByType'

export const metadata = {
  title: 'Bookmarks',
}

export default () => {
  return (
    <div className="page-grid bookmarks-page">
      <BookmarksMain />
      <BrowseByType />
    </div>
  )
}
