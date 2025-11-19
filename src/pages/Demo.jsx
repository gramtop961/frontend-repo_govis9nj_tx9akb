import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Demo(){
  const [form, setForm] = useState({name:'', email:'', company:'', timeslot:'', interest:'Starter'})
  const navigate = useNavigate()

  function onSubmit(e){
    e.preventDefault()
    navigate('/danke-demo')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar/>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Demo-Termin buchen</h1>
        <p className="mt-2 text-slate-300">Live-Demo, Fallbeispiele und individuelle Fragen – in 20–30 Minuten.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <label className="grid gap-1 text-sm"><span>Name</span><input required className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/></label>
            <label className="grid gap-1 text-sm"><span>E-Mail</span><input required type="email" className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/></label>
            <label className="grid gap-1 text-sm"><span>Unternehmen</span><input className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.company} onChange={e=>setForm({...form, company:e.target.value})}/></label>
            <label className="grid gap-1 text-sm"><span>Wunschzeitraum</span><input className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.timeslot} onChange={e=>setForm({...form, timeslot:e.target.value})}/></label>
            <label className="grid gap-1 text-sm"><span>Interesse an</span>
              <select className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.interest} onChange={e=>setForm({...form, interest:e.target.value})}>
                <option>Starter</option>
                <option>Pro – 2 Agenten</option>
                <option>Pro – 3 Agenten</option>
                <option>Enterprise</option>
              </select>
            </label>
            <button className="mt-2 px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-400">Termin anfragen</button>
            <p className="text-xs text-slate-400">Kalender-Widget (Platzhalter) kann hier eingebettet werden.</p>
          </form>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="aspect-video w-full rounded-lg bg-black/40 border border-white/10" />
            <p className="text-sm text-slate-300 mt-3">Platz für ein eingebettetes Termintool (z.B. Calendly) oder Video.</p>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
