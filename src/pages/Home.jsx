import useNews from '../hooks/useNews'

const Home = () => {
    const { articles, loading, error } = useNews('top-headlines', { category: 'general', lang: 'en' })

        if (loading) return <p>Loading...</p>
        if (error) return <p>{error}</p>

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between">
      {articles.map((article) => (
        <div className='p-5 border-b border-gray-300'>
          <img src={article.image} alt={article.title} className='rounded-lg mb-3' />
          <h3 className='font-semibold text-xl'>{article.title}</h3>
          <p className='text-sm text-gray-500'>{article.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Home;
