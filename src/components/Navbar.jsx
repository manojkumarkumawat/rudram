import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/neighborhoods', label: 'Neighborhoods' },
  { to: '/properties', label: 'Properties' },
  { to: '/relocation-guide', label: 'Relocation Guide' },
  { to: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 bg-oyster/95 backdrop-blur border-b border-line">
      <div className="max-w-content mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="font-display text-2xl tracking-tight text-ink">
          Ironwood <span className="text-brass">Legacy</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[15px] transition-colors ${
                  isActive ? 'text-brass' : 'text-ink/80 hover:text-ink'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-block border border-ink px-5 py-2.5 text-[15px] text-ink hover:bg-ink hover:text-oyster transition-colors"
        >
         SCHEDULE A TOUR
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-end justify-center"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className={`block h-px bg-ink transition-all ${open ? 'w-6 rotate-45 translate-y-[3px]' : 'w-6'}`} />
          <span className={`block h-px bg-ink transition-all ${open ? 'w-6 -rotate-45 -translate-y-[3px]' : 'w-4'}`} />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-line bg-oyster px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `text-base ${isActive ? 'text-brass' : 'text-ink/80'}`}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mt-2 border border-ink text-center px-5 py-3 text-ink"
          >
           SCHEDULE A TOUR
          </Link>
        </nav>
      )}
    </header>
  )
}
