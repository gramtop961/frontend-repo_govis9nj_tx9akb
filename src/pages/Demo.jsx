import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function Demo(){
  const [form, setForm] = useState({name:'', email:'', company:'', timeslot:'', interest:'Starter', note:''})
  const [submitting, setSubmitting] = useState(false)
  const [calendarUrl, setCalendarUrl] = useState('')
  const navigate = useNavigate()

  async function onSubmit(e){
    e.preventDefault()
    setSubmitting(true)
    try{
      const res = await fetch(`${BACKEND}/api/demo`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company || undefined,
          timeslot: form.timeslot || undefined,
          interest: form.interest,
          note: form.note || undefined,
          source: 'website'
        })
      })
      if(!res.ok) throw new Error('Network error')
      // ignore response body for UX speed
      navigate('/danke-demo')
    }catch(err){
      console.error(err)
      alert('Konnte die Anfrage nicht senden. Bitte später erneut versuchen.')
    }finally{
      setSubmitting(false)
    }
  }

  useEffect(()=>{
    // Optionale Vorbelegung über URL-Param or ENV (z.B. Google Appointments Link)
    const def = import.meta.env.VITE_GCAL_APPOINTMENTS_URL || ''
    setCalendarUrl(def)
  },[])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar/>
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Demo-Termin buchen</h1>
        <p className="mt-2 text-slate-300">Live-Demo, Fallbeispiele und individuelle Fragen – in 20–30 Minuten.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <label className="grid gap-1 text-sm"><span>Name</span><input required className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/></label>
            <label className="grid gap-1 text-sm"><span>E-Mail</span><input required type="email" className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/></label>
            <label className="grid gap-1 text-sm"><span>Unternehmen</span><input className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.company} onChange={e=>setForm({...form, company:e.target.value})}/></label>
            <label className="grid gap-1 text-sm"><span>Wunschzeitraum</span><input className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.timeslot} onChange={e=>setForm({...form, timeslot:e.target.value})}/></label>
            <label className="grid gap-1 text-sm"><span>Interesse</span>
              <select className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.interest} onChange={e=>setForm({...form, interest:e.target.value})}>
                <option>Starter</option>
                <option>Pro – 2 Agenten</option>
                <option>Pro – 3 Agenten</option>
                <option>Enterprise</option>
              </select>
            </label>
            <label className="grid gap-1 text-sm"><span>Notiz</span><textarea rows={3} className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.note} onChange={e=>setForm({...form, note:e.target.value})}/></label>
            <button disabled={submitting} className="mt-2 px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-400 disabled:opacity-60">{submitting? 'Sende…' : 'Termin anfragen'}</button>
            <p className="text-xs text-slate-400">Kalender-Widget via Google Calendar Appointments kann rechts angezeigt werden.</p>
          </form>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="text-white font-medium">Kalender</div>
            {calendarUrl ? (
              <>
                <div className="mt-3 aspect-video w-full rounded-lg bg-black/40 border border-white/10 overflow-hidden">
                  {/* Hinweis: Manche Google-Links erlauben kein Embed. In dem Fall fallback zum Button unten. */}
                  <iframe title="Google Calendar" src={calendarUrl} className="w-full h-full" loading="lazy"/>
                </div>
                <a href={calendarUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex px-3 py-2 rounded-lg bg-cyan-600 text-white text-sm hover:bg-cyan-500">In Google Calendar öffnen</a>
              </>
            ) : (
              <div className="mt-2 text-sm text-slate-300">
                <div className="aspect-video w-full rounded-lg bg-black/40 border border-white/10 flex items-center justify-center text-slate-400 text-sm">Kalender-Embed (Google) – URL nicht konfiguriert</div>
                <p className="mt-3">Hinterlegen Sie Ihre Google-Appointments-URL als Umgebungsvariable VITE_GCAL_APPOINTMENTS_URL, um die direkte Buchung zu ermöglichen.</p>
              </div>
            )}
            <ul className="mt-4 text-sm text-slate-300 list-disc pl-5 space-y-1">
              <li>Direkte Terminbuchung mit 2 Klicks</li>
              <li>Automatische Kalender-Einladungen (Google Workspace)</li>
              <li>Optionale Erinnerungen per E-Mail/SMS</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
