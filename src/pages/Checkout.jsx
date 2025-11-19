import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''
const PADDLE_URL = import.meta.env.VITE_PADDLE_CHECKOUT_URL || ''

export default function Checkout(){
  const [form, setForm] = useState({plan:'starter', agents:1, needDemo:false, email:'', company:''})
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  async function onSubmit(e){
    e.preventDefault()
    setSubmitting(true)
    try{
      const res = await fetch(`${BACKEND}/api/checkout`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          plan: form.plan,
          agents: form.agents,
          needDemo: form.needDemo,
          email: form.email || undefined,
          company: form.company || undefined
        })
      })
      if(!res.ok) throw new Error('Network error')
      if(PADDLE_URL){
        window.location.href = PADDLE_URL
      } else {
        navigate('/danke-kauf')
      }
    }catch(err){
      console.error(err)
      alert('Kaufanfrage konnte nicht gesendet werden. Bitte später erneut versuchen.')
    }finally{
      setSubmitting(false)
    }
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="grid gap-1 text-sm"><span>Geschäftliche E-Mail</span><input type="email" className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/></label>
            <label className="grid gap-1 text-sm"><span>Unternehmen</span><input className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10" value={form.company} onChange={e=>setForm({...form, company:e.target.value})}/></label>
          </div>
          <button disabled={submitting} className="mt-2 px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-400 w-full disabled:opacity-60">{submitting? 'Weiter…' : (PADDLE_URL ? 'Zur Zahlung mit Paddle' : 'Zur Bestätigung')}</button>
          {!PADDLE_URL && <p className="text-xs text-slate-400">Zahlungsabwicklung über Paddle – hinterlegen Sie VITE_PADDLE_CHECKOUT_URL, um den Checkout zu aktivieren.</p>}
          <p className="text-xs text-slate-400">Zusatzkosten für Telefonie/TTS fallen separat bei Twilio/ElevenLabs an.</p>
        </form>
      </main>
      <Footer/>
    </div>
  )
}
