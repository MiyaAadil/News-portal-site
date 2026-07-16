import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Article from '../pages/Article'
import Bookmark from '../pages/Bookmarks'
import Category from '../pages/Category'
import Search from '../pages/Search'
import Notfound from '../pages/Notfound'
import Mainlayout from '../layout/Mainlayout'

const Approutes = () => {
  return (
      <Routes>
        <Route element={<Mainlayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/article" element={<Article />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/search" element={<Search />} /> 
         </Route>   

            <Route path="*" element={<Notfound />} />
      </Routes>
  )
}

export default Approutes;
