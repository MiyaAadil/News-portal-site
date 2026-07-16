import { Cat, Menu, X } from "lucide-react";
import { Link } from "react-router-dom"
import { useState } from "react";

const links = [
  {
    id: 1,
    path: '/',
    name: "Home",
  }, {
    id: 2,
    path: '/about',
    name: "About",
  }, {
    id: 3,
    path: 'bookmark',
    name: "Bookmark",
  }, {
    id: 4,
    path: 'search',
    name: "Search",
  },
];

const categories =["Technology", "Business", "Sports", "Health", "Entertainment", "World"]

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div  className='flex justify-between items-center p-5 bg-[#dc2626] text-[#f8fafc] font-medium h-15 sticky top-0 z-50 shadow-lg'>
      <Link to='/'>
        <p onClick={() => setIsOpen(false)} className='bg-black py-2 px-3 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 text-gray-100'>NewsPulse</p>
      </Link>


      {/* NavLinks for desktop */}
      <div className="hidden md:flex gap-5">
        {links.map((link) => (
        <div className="transition-all duration-500 hover:bg-[#f86262] py-1 px-3 rounded-full">
          <Link key={link.id} to={link.path}>{link.name}</Link>
        </div>
      ))}
      </div>


      {/* Mobile menu */}
      <div className="md:hidden flex relative">

        <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={30} /> : <Menu size={30} />}</button>

        {isOpen && (
          <div className="fixed h-screen w-[60%] right-0 top-15 flex flex-col gap-5 items-center py-8 bg-[#dc2626]">
            {links.map((link) => (
            <div key={link.id} className="py-1 px-3 rounded-full text-2xl hover:text-gray-300">
              <Link onClick={() => setIsOpen(false)} to={link.path}>{link.name}</Link>
            </div>
          ))}
      </div>
        )}
      
    </div>

  </div>
  )
}

export default Navbar
