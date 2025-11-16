import { useEffect, useState } from 'react'

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  const iconUrl = isDark
    ? 'https://upload.wikimedia.org/wikipedia/commons/1/17/Batman_logo.svg'
    : 'https://upload.wikimedia.org/wikipedia/commons/3/35/Superman_S_symbol.svg'
  const altText = isDark ? 'Batman logo' : 'Superman logo'

  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      className={`relative inline-flex h-12 w-24 items-center justify-${isDark ? 'start' : 'end'} rounded-full transition-colors duration-300 px-2 ${
        isDark ? 'bg-zinc-800' : 'bg-blue-500'
      }`}
    >
      <span
        className={`absolute inset-0 rounded-full ring-2 ${
          isDark ? 'ring-zinc-700' : 'ring-blue-400'
        }`}
      />
      <span
        className={`z-10 h-9 w-9 rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300 ${
          isDark ? 'translate-x-0' : 'translate-x-0'
        }`}
      >
        <img src={iconUrl} alt={altText} className="h-6 w-6 object-contain" />
      </span>
    </button>
  )
}

export default function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored)
      if (stored === 'dark') document.documentElement.classList.add('dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
      if (prefersDark) document.documentElement.classList.add('dark')
    }
  }, [])

  useEffect(() => {
    // Apply theme class to html
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div className="min-h-screen bg-white text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:supports-[backdrop-filter]:bg-zinc-950/60 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 shadow-md" />
            <div className="leading-tight">
              <p className="font-bold text-lg">Your Name</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Frontend • 3D • Web</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#work" className="hover:text-blue-600 dark:hover:text-blue-400">Work</a>
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
          </nav>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
              Superhero mode portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Building immersive web experiences with style and superpowers
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-prose">
              I craft responsive, animated interfaces and interactive 3D moments. Toggle between light and dark to switch identities — Superman by day, Batman by night.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#work" className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition">View Work</a>
              <a href="#contact" className="px-5 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition">Get in Touch</a>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px] lg:h-[600px]">
            {/* Spline Viewer */}
            <spline-viewer class="rounded-xl shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800" url="https://prod.spline.design/zBXGLjse1OwBSbps/scene.splinecode" style={{ width: '100%', height: '100%', background: 'transparent' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-zinc-950/40" />
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-6">Selected Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="group rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition bg-white dark:bg-zinc-900">
              <div className="aspect-[16/10] bg-gradient-to-br from-blue-200 to-purple-200 dark:from-zinc-800 dark:to-zinc-700" />
              <div className="p-4">
                <p className="font-semibold">Project {i}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Interactive web build with animations and 3D</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About/Contact */}
      <section id="about" className="max-w-3xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          I’m a front‑end developer focused on crafting sleek, performant interfaces. I love blending utility-first design systems with playful, cinematic interactions.
        </p>
      </section>

      <footer id="contact" className="border-t border-zinc-200 dark:border-zinc-800 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="mailto:you@example.com" className="hover:text-blue-600 dark:hover:text-blue-400">Email</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">LinkedIn</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
