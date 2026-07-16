import HeroNews from '../components/HeroNews';
import TrendingNews from '../components/TrendingNews';
import { mockDatas } from '../data/mockData'
import useNews from '../hooks/useNews';

const Home = () => {
  const { articles, loading } = useNews()

  return (
    <div className='max-w-7xl mx-auto flex flex-col gap-4'>
      <HeroNews />
      <TrendingNews />
      
    </div>
  )
}

export default Home;
