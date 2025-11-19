import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Onboarding(){
  const [form, setForm] = useState({company:'', url:'', hours:'', jobs:'', questions:'', emergency:''})

  function onSubmit(e){
    e.preventDefault()
    alert('Danke! Onboarding-Daten gespeichert (Platzhalter).')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar/>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Onboarding</h1>
        <form onSubmit={onSubmit} className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <label className="grid gap-1 text-sm"><span>Unternehmensname</span><input required className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.company} onChange={e=>setForm({...form, company:e.target.value})}/></label>
          <label className="grid gap-1 text-sm"><span>Website-URL</span><input required type="url" className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.url} onChange={e=>setForm({...form, url:e.target.value})}/></label>
          <label className="grid gap-1 text-sm"><span>Öffnungszeiten</span><input className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.hours} onChange={e=>setForm({...form, hours:e.target.value})}/></label>
          <label className="grid gap-1 text-sm"><span>Art der Aufträge</span><input className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.jobs} onChange={e=>setForm({...form, jobs:e.target.value})}/></label>
          <label className="grid gap-1 text-sm"><span>Standardfragen, die der Agent stellen soll</span><textarea className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" rows={4} value={form.questions} onChange={e=>setForm({...form, questions:e.target.value})}/></label>
          <label className="grid gap-1 text-sm"><span>Notfall-Regeln</span><textarea className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" rows={4} value={form.emergency} onChange={e=>setForm({...form, emergency:e.target.value})}/></label>
          <button className="mt-2 px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-400">Absenden</button>
        </form>
      </main>
      <Footer/>
    </div>
  )
}
