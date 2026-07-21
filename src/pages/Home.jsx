import CategoryNav from '../components/CategoryNav';
import HeroNews from '../components/HeroNews';
import LatestNews from '../components/LatestNews';
import TrendingNews from '../components/TrendingNews';

import { useState } from 'react';

const Home = () => {
  const [loading, setLoading] = useState(true);

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
