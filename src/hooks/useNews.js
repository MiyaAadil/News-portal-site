import { useState, useEffect } from "react";
import { getTopHeadlines } from "../services/newsApi";


const useNews = (category = null, query = null) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);

      const data = await getTopHeadlines();

      let result = data;

      // Category Filter
      if (category) {
        result = result.filter(
          (article) =>
            article.category &&
            article.category.some(
              (cat) => cat.toLowerCase() === category.toLowerCase()
            )
        );
      }

      // Search
      if (query) {
        const lowerQuery = query.toLowerCase();

        result = result.filter(
          (article) =>
            article.title?.toLowerCase().includes(lowerQuery) ||
            article.description?.toLowerCase().includes(lowerQuery)
        );
      }

      setArticles(result);
      setLoading(false);
    };

    fetchNews();
  }, [category, query]);

  return { articles, loading };
};

export default useNews;
