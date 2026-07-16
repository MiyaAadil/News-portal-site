const NewsCard = ({ article }) => {

  return (
    <div className="rounded-xl shadow-lg overflow-hidden">

      <img
        src={article.image}
        alt={article.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        <p className="text-sm text-gray-500">
          {article.source.name}
        </p>

        <h2 className="text-xl font-bold mt-2">
          {article.title}
        </h2>

        <p className="mt-3 text-gray-600">
          {article.description}
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 mt-4 inline-block"
        >
          Read More →
        </a>

      </div>

    </div>
  );
};

export default NewsCard;
