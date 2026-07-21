import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BookmarkContext } from '../context/BookmarkContext'
import { Bookmark } from 'lucide-react'

const NewsCard = ({ article }) => {
  const { toggleBookmark, isBookmarked } = useContext(BookmarkContext)
  const bookmarked = isBookmarked(article.id)

  return (
    <div className="rounded-xl shadow-lg overflow-hidden relative dark:bg-slate-900 dark:text-gray-200">

      <button
        onClick={() => toggleBookmark(article)}
        className="absolute top-3 right-3 bg-white/90 p-2 rounded-full hover:bg-white transition z-10 cursor-pointer"
      >
        <Bookmark size={18} className={bookmarked ? "fill-red-500 text-red-500" : "text-gray-600"} />
      </button>

      <Link to={`/article/${article.id}`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-52 object-cover"
        />
      </Link>
      

      <div className="p-5">

        <p className="text-sm text-gray-500">
          {article.source.name}
        </p>

        <Link to={`/article/${article.id}`}>
          <h2 className="text-xl font-bold mt-2 hover:text-red-500 transition">{article.title}</h2>
        </Link>

        <p className="mt-3 text-gray-600">
          {article.description}
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 mt-4 inline-block"
        >
          Read Full Article →
        </a>

      </div>

    </div>
  );
};

export default NewsCard;
