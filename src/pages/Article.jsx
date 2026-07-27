import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BookmarkContext } from "../context/BookmarkContext";
import { Bookmark, ArrowLeft } from "lucide-react";

const Article = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const article = state?.article;

  const { toggleBookmark, isBookmarked } = useContext(BookmarkContext);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Article not found</h1>

        <Link
          to="/"
          className="text-red-500 underline mt-4 inline-block"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const bookmarked = isBookmarked(article.article_id);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-white hover:bg-black/80 transition-all duration-300 mb-6 bg-black px-4 py-2.5 rounded-full cursor-pointer"
      >
        <ArrowLeft size={18} />
      </button>

      <img
        src={article.image_url}
        alt={article.title}
        className="w-full h-60 md:h-[450px] object-cover rounded-2xl mb-6"
      />

      <div className="flex items-center justify-between mb-4">

        <span className="text-red-500 font-semibold uppercase text-sm">
          {article.category?.join(", ")}
        </span>

        <button
          className="cursor-pointer border border-gray-200 rounded-full p-1"
          onClick={() => toggleBookmark(article)}
        >
          <Bookmark
            size={22}
            className={
              bookmarked
                ? "fill-red-500 text-red-500"
                : "text-gray-400"
            }
          />
        </button>

      </div>

      <h1 className="text-3xl font-bold mb-3">
        {article.title}
      </h1>

      <p className="text-gray-500 mb-2">
        {article.source_name}
      </p>

      <p className="text-sm text-gray-400 mb-6">
        {new Date(article.pubDate).toLocaleDateString()}
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        {article.description}
      </p>

      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 text-blue-600 font-semibold"
      >
        Read Full Article →
      </a>

    </div>
  );
};

export default Article;