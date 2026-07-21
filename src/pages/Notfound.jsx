import { Link } from 'react-router-dom'
import { Newspaper } from 'lucide-react'

const Notfound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <Newspaper size={64} className="text-red-500 mb-6" />
      <h1 className="text-6xl font-bold mb-3">404</h1>
      <p className="text-xl font-semibold mb-2">This story doesn't exist</p>
      <p className="text-gray-500 mb-8 max-w-sm">
        The page you're looking for may have been moved, deleted, or never existed.
      </p>
      <Link to="/" className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-8 py-3 rounded-full font-semibold">
        Back to Home
      </Link>
    </div>
  )
}

export default Notfound