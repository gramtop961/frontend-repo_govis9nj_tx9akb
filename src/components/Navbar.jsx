import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const linkBase = 'text-slate-200 hover:text-white transition-colors'
  const active = 'text-white'

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 shadow-lg shadow-blue-500/30" />
            <span className="text-white font-semibold text-lg tracking-tight">VoiceForge</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={({isActive})=>`${linkBase} ${isActive?active:''}`}>Start</NavLink>
            <NavLink to="/loesungen" className={({isActive})=>`${linkBase} ${isActive?active:''}`}>Lösungen</NavLink>
            <NavLink to="/preise" className={({isActive})=>`${linkBase} ${isActive?active:''}`}>Preise</NavLink>
            <NavLink to="/roi-rechner" className={({isActive})=>`${linkBase} ${isActive?active:''}`}>ROI-Rechner</NavLink>
            <NavLink to="/faq" className={({isActive})=>`${linkBase} ${isActive?active:''}`}>FAQ</NavLink>
            <NavLink to="/ueber-uns" className={({isActive})=>`${linkBase} ${isActive?active:''}`}>Über uns</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/demo" className="px-4 py-2 rounded-lg bg-slate-800 text-slate-100 hover:bg-slate-700 transition">Demo buchen</Link>
            <Link to="/kaufen" className="px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-400 transition shadow shadow-emerald-500/20">Jetzt kaufen</Link>
          </div>

          <button className="md:hidden text-white" onClick={()=>setOpen(!open)} aria-label="Menu">
            {open? <X/> : <Menu/>}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2">
              <NavLink to="/" className={linkBase}>Start</NavLink>
              <NavLink to="/loesungen" className={linkBase}>Lösungen</NavLink>
              <NavLink to="/preise" className={linkBase}>Preise</NavLink>
              <NavLink to="/roi-rechner" className={linkBase}>ROI-Rechner</NavLink>
              <NavLink to="/faq" className={linkBase}>FAQ</NavLink>
              <NavLink to="/ueber-uns" className={linkBase}>Über uns</NavLink>
              <div className="flex gap-2 pt-2">
                <Link to="/demo" className="flex-1 px-4 py-2 rounded-lg bg-slate-800 text-slate-100">Demo buchen</Link>
                <Link to="/kaufen" className="flex-1 px-4 py-2 rounded-lg bg-emerald-500 text-white">Jetzt kaufen</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
