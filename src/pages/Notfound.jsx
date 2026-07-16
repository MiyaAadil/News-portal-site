import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='bg-gray-200 h-screen flex flex-col items-center py-50 gap-8'>
      <h1 className='text-5xl font-semibold'> <span className='text-red-500'>404</span> - Page not Found</h1>

      <Link className='bg-blue-950 py-2 px-4 text-white rounded-full hover:bg-blue-900 transition-all duration-300' to='/'>Back to Home</Link>
    </div>
  )
}

export default Notfound
