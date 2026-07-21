import { useParams, Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { mockDatas } from '../data/mockData'
import { BookmarkContext } from '../context/BookmarkContext'
import { Bookmark, ArrowLeft } from 'lucide-react'

const Article = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { toggleBookmark, isBookmarked } = useContext(BookmarkContext)

  const article = mockDatas.find((a) => a.id === Number(id))

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Link to="/" className="text-red-500 underline mt-4 inline-block">Back to Home</Link>
      </div>
    )
  }

  const bookmarked = isBookmarked(article.id)

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white hover:bg-black/80 transition-all duration-300 mb-6 bg-black px-3 md:px-4 py-2.5 rounded-full cursor-pointer">
        <ArrowLeft size={18} />
      </button>

      <img src={article.image} alt={article.title} className="w-full h-60 md:h-110 object-cover rounded-2xl mb-6" />

      <div className="flex items-center justify-between mb-4">
        <span className="text-red-500 font-semibold uppercase text-sm">{article.category}</span>
        <button className='cursor-pointer border border-gray-200 rounded-full p-1' onClick={() => toggleBookmark(article)}>
          <Bookmark size={22} className={bookmarked ? "fill-red-500 text-red-500" : "text-gray-400"} />
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-3">{article.title}</h1>
      <p className="text-gray-500 mb-6">{article.source.name}</p>

      <p className="text-lg text-gray-700 leading-relaxed">{article.description}</p>

      <a href={article.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-8 text-blue-600 font-semibold">
        Read the full article on {article.source.name} →
      </a>
    </div>
  )
}

export default Article