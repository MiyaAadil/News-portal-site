import useNews from "../hooks/useNews";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom'

const LatestNews = () => {
    const { articles, loading } = useNews()

  return (
    <section className="max-w-7xl mx-auto px-5 py-16 dark:text-gray-200">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-4xl font-bold">
          Latest News
        </h2>

        <Link to='/search'>
        <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold cursor-pointer">
          View All
          <ArrowRight size={18} />
        </button>
        </Link>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {articles.slice(11, 17).map((article) => (

          
          <div
            key={article.id}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col"
          >

            <div className="overflow-hidden">

              <img
                src={article.image_url}
                alt={article.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />

            </div>

            <div className="p-5">

              <span className="inline-block bg-red-100 dark:bg-gray-300 text-red-600 text-sm px-3 py-1 rounded-full font-medium">
                {article.category}
              </span>

              <h3 className="text-2xl font-bold mt-4 group-hover:text-red-500 transition">
                {article.title}
              </h3>

              <p className="text-gray-600 mt-3 line-clamp-3">
                {article.description}
              </p>

              <div className="flex justify-between items-center mt-6 text-sm text-gray-500">

                <span>{article.author}</span>

                <span>{article.pubDate}</span>

              </div>

              <Link to={`/article/${article.article_id}`}
              state={{ article }}
              >
                <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl transition cursor-pointer">
                Read Article
                </button>
              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default LatestNews;