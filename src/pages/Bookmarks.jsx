import { useContext } from 'react'
import { BookmarkContext } from '../context/BookmarkContext'
import NewsCard from '../components/NewsCard'

const Bookmark = () => {
  const { bookmarks } = useContext(BookmarkContext)

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Bookmarks</h1>

      {bookmarks.length === 0 && (
        <p className="text-gray-500">You haven't bookmarked any articles yet.</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookmarks.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}

export default Bookmark;