import { createContext, useState, useEffect } from "react";

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(() => {
    const stored = localStorage.getItem("bookmarks");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (article) => {
    setBookmarks((prev) => {
      const exists = prev.some(
        (a) => a.article_id === article.article_id
      );

      if (exists) {
        return prev.filter(
          (a) => a.article_id !== article.article_id
        );
      }

      return [...prev, article];
    });
  };

  const isBookmarked = (articleId) =>
    bookmarks.some((a) => a.article_id === articleId);

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        toggleBookmark,
        isBookmarked,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};