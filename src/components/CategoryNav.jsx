import { Link } from 'react-router-dom'
import { Cpu, Briefcase, Trophy, HeartPulse, Clapperboard, Globe } from 'lucide-react'

const categories = [
  { name: "technology", icon: Cpu },
  { name: "business", icon: Briefcase },
  { name: "sports", icon: Trophy },
  { name: "health", icon: HeartPulse },
  { name: "entertainment", icon: Clapperboard },
  { name: "world", icon: Globe },
]

const CategoryNav = () => {
  return (
    <section className="max-w-7xl px-5 py-5">
      <h2 className="text-3xl font-bold mb-6">Browse by Category</h2>

      <div className="flex flex-wrap gap-3">
        {categories.map(({ name, icon: Icon }) => (
          <Link
            key={name}
            to={`/category/${name}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 text-sm font-medium capitalize hover:bg-red-500 hover:text-white transition-colors duration-300"
          >
            <Icon size={16} />
            {name}
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoryNav;