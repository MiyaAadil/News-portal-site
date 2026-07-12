import { useEffect, useState } from 'react'
import axios from 'axios'

const useNews = (endpoint, params) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect (() => {
        const fetchNews = async () => {
            setLoading(true);
            setError("");
            try {
                const res = await axios.get(`https://gnews.io/api/v4/${endpoint}`, {
                    params: {
                        apikey: import.meta.env.VITE_GNEWS_API_KEY,
                        ...params
                    }
                })
                setArticles(res.data.articles);
            } catch (err) {
                setError("Failed to fetch news")
            } finally {
                setLoading(false);
            }
        }

        fetchNews()
    }, [endpoint, JSON.stringify(params)])

  return { articles, loading, error }
}

export default useNews;
