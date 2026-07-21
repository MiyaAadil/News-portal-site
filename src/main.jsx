import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { BookmarkProvider } from './context/BookmarkContext.jsx'
import ThemeProvider from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <BrowserRouter>
      <BookmarkProvider>
        <App />
      </BookmarkProvider>
    </BrowserRouter>
  </ThemeProvider>
    
)
