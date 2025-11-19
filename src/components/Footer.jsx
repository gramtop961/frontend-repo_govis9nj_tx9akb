import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 mb-3" />
          <p className="text-slate-300 text-sm">Omnichannel KI-Voice-Agents für Handwerksbetriebe. Mehr Umsatz, weniger No-Shows, 24/7 erreichbar.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Seiten</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><Link to="/">Start</Link></li>
            <li><Link to="/loesungen">Lösungen</Link></li>
            <li><Link to="/preise">Preise</Link></li>
            <li><Link to="/roi-rechner">ROI-Rechner</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/ueber-uns">Über uns</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Rechtliches</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><Link to="/rechtliches/impressum">Impressum</Link></li>
            <li><Link to="/rechtliches/datenschutz">Datenschutz</Link></li>
            <li><Link to="/rechtliches/agb">AGB</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Kontakt</h4>
          <p className="text-slate-300 text-sm">Vertrieb & Beratung<br/>hello@voiceforge.example<br/>+49 (0) 30 123 456 78</p>
          <div className="mt-4 flex gap-2">
            <Link to="/demo" className="px-4 py-2 rounded-lg bg-slate-800 text-slate-100 hover:bg-slate-700 transition">Demo buchen</Link>
            <Link to="/kaufen" className="px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-400 transition">Jetzt kaufen</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} VoiceForge. Alle Rechte vorbehalten.
      </div>
    </footer>
  )
}
