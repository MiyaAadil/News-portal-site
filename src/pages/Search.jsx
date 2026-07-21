import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import useNews from '../hooks/useNews'
import NewsCard from '../components/NewsCard'
import { Search as SearchIcon } from 'lucide-react'

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ""
  const [input, setInput] = useState(query)

  const { articles, loading } = useNews(null, query)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() === "") return
    setSearchParams({ q: input })
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-bold mb-6">Search News</h1>

      <form onSubmit={handleSubmit} className="flex gap-3 mb-10 max-w-xl">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search articles..."
          className="flex-1 border p-3 rounded-full px-5"
        />
        <button type="submit" className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full px-6 flex items-center gap-2 cursor-pointer">
          <SearchIcon size={18} /> Search
        </button>
      </form>

      {query && !loading && (
        <p className="text-gray-500 mb-6">
          {articles.length} result{articles.length !== 1 ? "s" : ""} for "{query}"
        </p>
      )}

      {loading && <p className='text-xl text-gray-300'>Searching...</p>}

      {!loading && query && articles.length === 0 && (
        <p className="text-gray-500">No articles matched your search.</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}

export default Search
