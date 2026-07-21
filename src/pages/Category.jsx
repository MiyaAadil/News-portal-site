import { useParams } from 'react-router-dom'
import useNews from '../hooks/useNews'
import NewsCard from '../components/NewsCard'

const Category = () => {
  const { name } = useParams()
  const { articles, loading } = useNews(name)

  return (
    <div className='p-5 flex flex-col gap-3'>
      <h1 className='text-4xl font-bold uppercase'>{name} News</h1>
      <p className='text-gray-600 text-xl'>Latest headlines in {name}</p>

      {loading && <p className='text-xl text-gray-400'>Loading...</p>}

      {!loading && articles.length === 0 && (
        <p>No articles found for "{name}"</p>
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}

export default Category
