import Sam from '../assets/images/Altman.png'
import { ArrowRight } from 'lucide-react'
import useNews from '../hooks/useNews'


const HeroNews = () => {
    const { articles, loading } = useNews()

  return (
    <div className='flex flex-col lg:grid grid-cols-2 lg:p-5'>

        <div className='relative cursor-pointer group overflow-hidden'>
                <img loading='lazy' className='w-full lg:h-140 object-cover group-hover:scale-103 transition-all duration-500 lg:rounded-xl' src={Sam} alt="Sam altman" />

                <div className='absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent lg:h-140 lg:rounded-xl'></div>

                <h1 className='absolute inset-0 p-5 text-4xl md:text-6xl md:py-20 text-gray-200 font-bold'>Featured News</h1>

            <div className='absolute bottom-0 md:bottom-10 lg:bottom-0 text-white p-5 flex flex-col gap-2 md:gap-6'>
                
                <p className='text-xs text-gray-200 bg-gray-200/30 w-10 text-center py-1 rounded-full'>AI</p>
                <h1 className='text-2xl md:text-5xl font-bold md:leading-15'>OpenAI's first hardware device is reportedly a screenless speaker that can move</h1>
                <p className='text-gray-300 text-sm'>Lucas Ropek - 9 hours ago</p>

                <button className='bg-blue-700 p-2 rounded-full cursor-pointer hover:bg-blue-500 transition-all duration-300 w-32 flex items-center justify-center gap-1'>Read more <ArrowRight size={17} /> </button>
            </div>
    </div>


    {/* Right side small news for desktop */}
    <div className='overflow-hidden'>
        {articles.slice(1, 5).map((article) => (
            <div className='flex flex-col border-b border-gray-300 hover:scale-103 transition-all duration-500 cursor-pointer'>
                <div className='p-5 flex gap-3'>
                    <img className='w-25 h-25 object-cover rounded-xl' src={article.image} alt="" />

                    <div className='flex flex-col justify-between gap-1'>
                        <p className='font-semibold'>{article.source.name}
                            <span className='text-sm text-gray-400 font-normal ml-2'>1 hour ago</span></p>
                        <h2 className='font-bold leading-5'>{article.title}</h2>
                        <p className='text-sm text-red-500 font-semibold'>{article.category}
                        <span className='text-gray-400 ml-3 font-normal'>2 min read</span></p>
                    </div>
                </div>
            </div>
        ))}
    </div>
    
</div>
  )
}

export default HeroNews
