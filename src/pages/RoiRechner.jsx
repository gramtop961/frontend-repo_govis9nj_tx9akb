import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

function calc({calls, missedPct, avgValue, noShows}){
  const missed = Math.max(0, Math.round(calls * (missedPct/100)))
  const recoveredMin = Math.round(missed * 0.5)
  const recoveredMax = Math.round(missed * 0.7)
  const revenueMin = recoveredMin * avgValue
  const revenueMax = recoveredMax * avgValue
  const reducedNoShowsMin = Math.round(noShows * 0.6)
  const reducedNoShowsMax = Math.round(noShows * 0.8)
  const savedMin = reducedNoShowsMin * avgValue
  const savedMax = reducedNoShowsMax * avgValue
  return { missed, recoveredMin, recoveredMax, revenueMin, revenueMax, reducedNoShowsMin, reducedNoShowsMax, savedMin, savedMax }
}

export default function RoiRechner(){
  const [form, setForm] = useState({calls: 400, missedPct: 30, avgValue: 180, noShows: 8, agents: 1})
  const r = calc(form)
  const agentCost = form.agents===1?149: form.agents===2?269: form.agents===3?379: 599
  const monthlyGainMin = r.revenueMin + r.savedMin
  const monthlyGainMax = r.revenueMax + r.savedMax
  const roiMin = Math.round(((monthlyGainMin - agentCost)/agentCost)*100)
  const roiMax = Math.round(((monthlyGainMax - agentCost)/agentCost)*100)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar/>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white">ROI-Rechner</h1>
        <p className="mt-2 text-slate-300 max-w-3xl">Konservative Schätzung Ihres Mehrumsatzes und ROI. Individuelle Ergebnisse können abweichen.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="grid gap-4">
              <label className="grid gap-1 text-sm">
                <span>Monatliches Anrufvolumen (Inbound)</span>
                <input type="number" className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.calls} onChange={e=>setForm({...form, calls: Number(e.target.value)})} />
              </label>
              <label className="grid gap-1 text-sm">
                <span>Geschätzter Anteil verpasster Anrufe (%)</span>
                <input type="number" className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.missedPct} onChange={e=>setForm({...form, missedPct: Number(e.target.value)})} />
              </label>
              <label className="grid gap-1 text-sm">
                <span>Durchschnittlicher Auftragswert (€)</span>
                <input type="number" className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.avgValue} onChange={e=>setForm({...form, avgValue: Number(e.target.value)})} />
              </label>
              <label className="grid gap-1 text-sm">
                <span>No-Shows pro Monat</span>
                <input type="number" className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.noShows} onChange={e=>setForm({...form, noShows: Number(e.target.value)})} />
              </label>
              <label className="grid gap-1 text-sm">
                <span>Anzahl benötigter Agenten</span>
                <select className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.agents} onChange={e=>setForm({...form, agents: Number(e.target.value)})}>
                  <option value={1}>1 (Starter)</option>
                  <option value={2}>2 (Pro)</option>
                  <option value={3}>3 (Pro)</option>
                  <option value={4}>4+ (Enterprise ab 599 €)</option>
                </select>
              </label>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="text-sm text-slate-300">Zusätzliche gewonnene Anrufe: {r.recoveredMin}–{r.recoveredMax}/Monat</div>
            <div className="text-sm text-slate-300 mt-1">Mehrumsatz: {r.revenueMin.toLocaleString('de-DE')}–{r.revenueMax.toLocaleString('de-DE')} €</div>
            <div className="text-sm text-slate-300 mt-1">Reduzierte No-Shows: {r.reducedNoShowsMin}–{r.reducedNoShowsMax}/Monat</div>
            <div className="text-sm text-slate-300 mt-1">Ersparnis durch No-Shows: {r.savedMin.toLocaleString('de-DE')}–{r.savedMax.toLocaleString('de-DE')} €</div>
            <div className="mt-6 p-4 rounded-xl bg-emerald-400/10 border border-emerald-400/20">
              <div className="text-white font-semibold">Geschätzter Mehrumsatz/Monat</div>
              <div className="text-3xl font-bold text-emerald-300">{(r.revenueMin + r.savedMin).toLocaleString('de-DE')} – {(r.revenueMax + r.savedMax).toLocaleString('de-DE')} €</div>
              <div className="mt-2 text-slate-300 text-sm">Monatliche Agent-Kosten berücksichtigt: ca. {agentCost} €</div>
              <div className="mt-1 text-slate-300 text-sm">Geschätzter ROI: {roiMin}% – {roiMax}%</div>
            </div>
            <div className="mt-6 flex gap-2">
              <a href="/demo" className="px-4 py-2 rounded-lg bg-slate-800 text-slate-100">Demo buchen</a>
              <a href="/kaufen" className="px-4 py-2 rounded-lg bg-emerald-500 text-white">Jetzt kaufen</a>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
