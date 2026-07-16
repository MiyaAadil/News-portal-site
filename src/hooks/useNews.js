import { useState, useEffect } from "react";
import { mockDatas } from "../data/mockData";


const useNews = (category = null) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            const filtered = category ? mockDatas.filter(a => a.category === category) : mockDatas

            setArticles(filtered)
            setLoading(false)
        }, 500)
    }, [category])

  return { articles, loading }
}

export default useNews;
