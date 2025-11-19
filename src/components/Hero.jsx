import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-block text-cyan-300/90 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full text-xs mb-4">Omnichannel • Voice + Chat • 24/7</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Omnichannel KI-Voice-Agents für Handwerksbetriebe</h1>
          <p className="mt-4 text-slate-200 text-lg">Beantworten Sie mehr Anrufe, reduzieren Sie No-Shows und gewinnen Sie messbar mehr Umsatz – mit einem Agenten, der per Telefon und Web-Widget sofort hilft.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/demo" className="px-5 py-3 rounded-lg bg-emerald-500 text-white shadow shadow-emerald-500/30 hover:bg-emerald-400 transition">Demo-Termin buchen</Link>
            <Link to="/kaufen" className="px-5 py-3 rounded-lg bg-slate-800 text-slate-100 hover:bg-slate-700 transition">Agent jetzt direkt kaufen</Link>
          </div>
          <div className="mt-6 text-slate-300 text-sm">60‑Sekunden Demo-Video (Platzhalter)</div>
          <div className="mt-2 aspect-video w-full max-w-xl rounded-xl bg-black/40 border border-white/10"></div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950"></div>
    </section>
  )
}
