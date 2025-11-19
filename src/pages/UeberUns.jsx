import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function UeberUns(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar/>
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Über VoiceForge</h1>
        <p className="mt-3 text-slate-300">Wir sind spezialisiert auf Omnichannel-KI-Agenten für das Handwerk. Unser Fokus: messbarer Mehrumsatz und echte Entlastung im Alltag.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-slate-900/60 p-6"><div className="text-white font-semibold">Mission</div><p className="text-sm text-slate-300 mt-2">Handwerksbetriebe 24/7 erreichbar machen und Routinekommunikation automatisieren.</p></div>
          <div className="rounded-xl border border-white/10 bg-slate-900/60 p-6"><div className="text-white font-semibold">Werte</div><p className="text-sm text-slate-300 mt-2">Transparenz, Zuverlässigkeit, klare Preise und praktische Umsetzung.</p></div>
          <div className="rounded-xl border border-white/10 bg-slate-900/60 p-6"><div className="text-white font-semibold">Team</div><p className="text-sm text-slate-300 mt-2">Senior-Builder mit Erfahrung in KI, Telefonie und Service-Design.</p></div>
        </div>
        <div className="mt-10 rounded-xl border border-white/10 bg-slate-900/60 p-6">
          <div className="text-white font-semibold">Gründer/Team</div>
          <p className="text-sm text-slate-300 mt-2">Platzhalter für Fotos und kurze Bios. Wir sprechen die Sprache des Handwerks und liefern zügig nutzbare Ergebnisse.</p>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
