import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Checkout(){
  const [form, setForm] = useState({plan:'starter', agents:1, needDemo:false})
  const navigate = useNavigate()

  function onSubmit(e){
    e.preventDefault()
    navigate('/danke-kauf')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar/>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Jetzt Agent kaufen</h1>
        <form onSubmit={onSubmit} className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <label className="grid gap-1 text-sm">
            <span>Paketauswahl</span>
            <select className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.plan} onChange={e=>setForm({...form, plan:e.target.value})}>
              <option value="starter">Starter Omnichannel Agent</option>
              <option value="pro2">Pro – 2 Agenten</option>
              <option value="pro3">Pro – 3 Agenten</option>
              <option value="enterprise">Enterprise – 4+ Agenten (Anfrage)</option>
            </select>
          </label>
          <label className="grid gap-1 text-sm">
            <span>Anzahl Agenten</span>
            <input type="number" min={1} className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.agents} onChange={e=>setForm({...form, agents:Number(e.target.value)})} />
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={form.needDemo} onChange={e=>setForm({...form, needDemo:e.target.checked})} />
            <span>Ich möchte vorab eine Demo & Beratung (empfohlen bei Pro/Enterprise)</span>
          </label>
          <button className="mt-2 px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-400 w-full">Zur Bestätigung</button>
          <p className="text-xs text-slate-400">Zahlungsabwicklung folgt separat (externer Provider). Nach dem Kauf kontaktieren wir Sie für das Onboarding.</p>
        </form>
      </main>
      <Footer/>
    </div>
  )
}
