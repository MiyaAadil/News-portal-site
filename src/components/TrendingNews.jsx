import useNews from '../hooks/useNews';


const TrendingNews = () => {
    const { articles, loading } = useNews()

  return (
    <div className='flex flex-col p-5 gap-4'>
        <h1 className='text-3xl font-bold'>Trending News</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto'>
        {articles.map((article) => (
            <div className='border-b border-gray-400 flex flex-col gap-1' key={article.id}>
            <img className='rounded-2xl h-60 object-cover' src={article.image} alt="" />
            <h1 className='font-semibold text-xl'>{article.title}</h1>
            <p className='text-sm'>{article.description}</p>
            <p className='text-sm underline text-blue-800 mb-5'>{article.url}</p>       
            </div>
        ))}
        </div>
    </div>
  )
}

export default TrendingNews
