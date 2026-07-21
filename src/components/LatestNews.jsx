import useNews from "../hooks/useNews";
import { ArrowRight } from "lucide-react";

const LatestNews = () => {
    const { articles, loading } = useNews()

  return (
    <section className="max-w-7xl mx-auto px-5 py-16">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-4xl font-bold">
          Latest News
        </h2>

        <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold cursor-pointer">
          View All
          <ArrowRight size={18} />
        </button>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {articles.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col justify-between"
          >

            <div className="overflow-hidden">

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />

            </div>

            <div className="p-5">

              <span className="inline-block bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full font-medium">
                {item.category}
              </span>

              <h3 className="text-2xl font-bold mt-4 group-hover:text-red-600 transition">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.description}
              </p>

              <div className="flex justify-between items-center mt-6 text-sm text-gray-500">

                <span>{item.author}</span>

                <span>{item.publishedAt}</span>

              </div>

              <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl transition cursor-pointer">
                Read Article
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default LatestNews;