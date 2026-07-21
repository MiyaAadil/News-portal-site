import useNews from '../hooks/useNews';
import { motion } from 'framer-motion';


const TrendingNews = ({ article }) => {
    const { articles, loading } = useNews()

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    className='flex flex-col p-5 gap-4 relative dark:text-gray-200'>
      
        <h1 className='text-3xl font-bold'>Trending News</h1>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 },
        }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto cursor-pointer'>
        {articles.map((article) => (
            <div className='border-b border-gray-400 flex flex-col gap-1 hover:text-red-400 transition-colors duration-300 ' key={article.id}>
            <img className='rounded-2xl h-60 object-cover hover:scale-102 transition-all duration-300' src={article.image} alt="" />
            <h1 className='font-semibold text-xl'>{article.title}</h1>
            <p className='text-sm'>{article.description}</p>
            <p className='text-sm underline text-blue-800 mb-5'>{article.url}</p>       
            </div>
        ))}
        </motion.div>
    </motion.div>
  )
}

export default TrendingNews
