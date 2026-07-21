import { Link } from 'react-router-dom'
import { Zap, Shield, Globe2 } from 'lucide-react'

const About = () => {
  return (
    <div className='dark:text-gray-200 dark:bg-slate-900'>
      <section className="bg-slate-100 dark:bg-gray-900 py-15 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          About <span className="text-red-500">NewsPulse</span>
        </h1>
        <p className="text-slate-600 mt-4 max-w-xl mx-auto text-lg">
          A modern news aggregator built to keep you informed <br /> Fast, clean, and free of noise.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          NewsPulse pulls headlines from trusted sources into one place, so you spend less time
          hunting across ten different apps and more time actually reading what matters to you.
          No clutter, no popups fighting for your attention — just the news.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-700">
          <Zap className="text-red-500 mb-3" size={28} />
          <h3 className="font-bold mb-2">Real-Time Updates</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Fresh headlines pulled continuously across every category.</p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-700">
          <Shield className="text-red-500 mb-3" size={28} />
          <h3 className="font-bold mb-2">Trusted Sources</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Aggregated only from established, credible outlets.</p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-700">
          <Globe2 className="text-red-500 mb-3" size={28} />
          <h3 className="font-bold mb-2">Global Coverage</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Technology, business, sports, health, and world news in one feed.</p>
        </div>
      </section>

      <section className="bg-slate-100 py-16 px-6 text-center dark:bg-slate-900">
        <h2 className="text-2xl font-bold mb-4">Ready to catch up?</h2>
        <Link to="/" className="bg-red-500 text-white hover:scale-105 transition-all duration-300 px-8 py-3 rounded-full font-semibold inline-block">
          Browse Headlines
        </Link>
      </section>
    </div>
  )
}

export default About