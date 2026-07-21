import { Menu, X, Moon, Sun } from "lucide-react";
import { Link,NavLink } from "react-router-dom"
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import Logo from '../assets/images/llogo.png'

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
    path: '/bookmark',
    name: "Bookmark",
  }, {
    id: 4,
    path: '/search',
    name: "Search",
  },
];

const categories =["Technology", "Business", "Sports", "Health", "Entertainment", "World"]

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div  className='flex justify-between items-center p-5 bg-[#dc2626] text-[#f8fafc] font-medium h-15 sticky top-0 z-50 shadow-lg'>
      <Link to='/'>
        {/* <p onClick={() => setIsOpen(false)} className='bg-black py-2 px-3 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 text-gray-100'>NewsPulse</p> */}
          <img className="h-9 hover:scale-105 transition-all duration-300" src={Logo} alt="Logo" />
      </Link>


      {/* NavLinks for desktop */}
      <div className="hidden md:flex gap-5 items-center">

        {/* Dark mode button */}
          <button
            onClick={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
            className="p-2 rounded-full transition-all cursor-pointer duration-500 hover:bg-[#f86262]"
          >
            {theme === "light" ? <Moon /> : <Sun className="text-black" />}
          </button>

        {links.map((link) => (
        <div key={link.id} className="hover:text-gray-200">
          <NavLink to={link.path}
          className={({ isActive }) =>
            `transition duration-300 ${
              isActive
                ? "font-semibold shadow-md bg-[#f86262] py-1.5 px-3 rounded-full transition-all duration-300"
                : ""
            }`
          }
          >{link.name}</NavLink>
        </div>
      ))}
      </div>


      {/* Mobile menu */}
      <div className="md:hidden flex relative gap-3">

        {/* Dark mode button */}
          <button
            onClick={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
            className="p-2 rounded-full transition-all cursor-pointer duration-500 hover:bg-[#f86262]"
          >
            {theme === "light" ? <Moon /> : <Sun className="text-black" />}
          </button>

        <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={30} /> : <Menu size={30} />}</button>

        <AnimatePresence>

        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed h-screen w-[60%] right-0 top-15 flex flex-col gap-5 items-center py-8 bg-[#dc2626]">
            {links.map((link) => (
            <div key={link.id} className="py-1 px-3 rounded-full text-2xl hover:text-gray-300 transition-all duration-200">
              <NavLink onClick={() => setIsOpen(false)} to={link.path}
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive
                    ? "font-semibold border-b-2"
                    : "text-"
                }`
              }
              >{link.name}</NavLink>
            </div>
          ))}
      </motion.div>
        )}
      </AnimatePresence>
    </div>

  </div>
  )
}

export default Navbar
