import { useParams } from 'react-router-dom'
import useNews from '../hooks/useNews'
import NewsCard from '../components/NewsCard'

const Category = () => {
  const { name } = useParams()
  const { articles, loading } = useNews(name)

  return (
    <div>
      <h1>{name} News</h1>
      <p>Latest headlines in {name}</p>

      {loading && <p>Loading...</p>}

      {!loading && articles.length === 0 && (
        <p>No articles found for "{name}"</p>
      )}

      <div>
        {articles.map((article) => (
          <NewsCard key={article.id} title={article.title} description={article.description} image={article.image} url={article.url} source={article.source} />
        ))}
      </div>
    </div>
  )
}

export default Category
