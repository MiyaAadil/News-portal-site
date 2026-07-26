import { ArrowRight } from 'lucide-react'
import useNews from '../hooks/useNews'
import { motion } from 'framer-motion'


const HeroNews = () => {
    const { articles, loading } = useNews()

  return (
    <div className='flex flex-col lg:flex-row lg:p-5 dark:text-gray-300'>

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
        className='relative cursor-pointer group overflow-hidden w-full'>
            {articles.slice(0, 1).map((article) => (
                <div>
                    <img loading='lazy' className='w-full lg:h-140 object-cover lg:rounded-xl' src={article.image} alt="Hero-news" />

                    <div className='absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent lg:h-140 lg:rounded-xl'></div>

                    <h1 className='absolute inset-0 px-5 py-2 m-2 text-4xl md:text-6xl md:py-5 text-gray-100 dark:text-gray-200 font-bold md:text-center'>Featured News</h1>

                <div className='absolute bottom-0 md:bottom-10 lg:bottom-5 text-white p-5 flex flex-col gap-2 md:gap-6 py-1'>
                
                    <p className='text-sm text-gray-200 bg-gray-200/30 w-30 text-center py-2 rounded-full'>{article.category}</p>
                    {/* <h1 className='text-2xl md:text-5xl font-bold md:leading-15 dark:text-gray-200'>{article.title}</h1> */}
                    <h2 className='text-2xl md:text-4xl dark:text-gray-200 font-bold md:leading-12'>{article.title}</h2>

                    <p className='text-gray-300 text-sm'>{article.pubDate}</p>

                    <button className='bg-blue-700 p-2 rounded-full cursor-pointer hover:bg-blue-500 transition-all duration-300 w-32 flex items-center justify-center gap-1'>Read more <ArrowRight size={17} /> </button>
            </div>
                </div>
            ))}
                
    </motion.div>


    {/* Right side small news for desktop */}
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
    className='overflow-hidden'>
        {articles.slice(2, 6).map((article) => (
            <div className='flex flex-col border-b border-gray-300 hover:scale-103 transition-all duration-500 cursor-pointer'>
                <div className='p-5 flex gap-3'>
                    <img className='w-25 h-25 object-cover rounded-xl' src={article.image} alt="" />

                    <div className='flex flex-col justify-between gap-1'>
                        <p className='font-semibold'>{article.source.name}
                            <span className='text-sm text-gray-400 font-normal ml-2'>{article.pubDate}1 hour ago</span></p>
                        <h2 className='font-bold leading-5'>{article.title}</h2>
                        <p className='text-sm text-red-500 font-semibold bg-gray-100 p-1 rounded-xl w-25 text-center'>{article.category} </p>
                    </div>
                </div>
            </div>
        ))}
    </motion.div>
    
</div>
  )
}

export default HeroNews
