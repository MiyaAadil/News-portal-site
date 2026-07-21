import { useState, useEffect } from "react";
import { mockDatas } from "../data/mockData";


const useNews = (category = null, query = null) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            let result = mockDatas
            
            if (category) {
                result = result.filter(a => a.category.toLocaleLowerCase() === category.toLocaleLowerCase())
            }

            if (query) {
                const lowerQuery = query.toLocaleLowerCase()
                result = result.filter(a => 
                    a.title.toLocaleLowerCase().includes(lowerQuery) ||
                    a.description.toLocaleLowerCase().includes(lowerQuery)
                )
            }

            setArticles(result)
            setLoading(false)
        }, 500)
    }, [category, query])

  return { articles, loading }
}

export default useNews;
