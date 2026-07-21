import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTopButton from '../components/ScrollTopButton'

const Mainlayout = () => {
  return (
    <div className='bg-white dark:bg-zinc-950 text-black dark:text-white transition-colors duration-300 min-h-screen'>
      <Navbar />
        <Outlet />
      <Footer />
      <ScrollTopButton />
    </div>
  )
}

export default Mainlayout
