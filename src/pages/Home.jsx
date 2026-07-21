import CategoryNav from '../components/CategoryNav';
import HeroNews from '../components/HeroNews';
import LatestNews from '../components/LatestNews';
import TrendingNews from '../components/TrendingNews';
import useNews from '../hooks/useNews';

const Home = () => {
  const { articles, loading } = useNews()

  return (
    <div className='max-w-7xl mx-auto flex flex-col gap-4'>
      <HeroNews />
      <TrendingNews />
      <LatestNews />
      <CategoryNav />
    </div>
  )
}

export default Home;
