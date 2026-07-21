import { createContext, useState, useEffect } from 'react'

export const BookmarkContext = createContext()

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(() => {
    const stored = localStorage.getItem('bookmarks')
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }, [bookmarks])

  const toggleBookmark = (article) => {
    setBookmarks((prev) => {
      const exists = prev.some((a) => a.id === article.id)
      if (exists) {
        return prev.filter((a) => a.id !== article.id)
      }
      return [...prev, article]
    })
  }

  const isBookmarked = (id) => bookmarks.some((a) => a.id === id)

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  )
}