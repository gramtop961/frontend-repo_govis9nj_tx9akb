import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export function DankeDemo(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar/>
      <main className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Danke für Ihre Demo-Anfrage!</h1>
        <p className="mt-3 text-slate-300">Wir melden uns in Kürze mit Terminvorschlägen. Sie erhalten außerdem eine Bestätigung per E‑Mail.</p>
      </main>
      <Footer/>
    </div>
  )
}

export function DankeKauf(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar/>
      <main className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Kauf bestätigt – willkommen bei VoiceForge!</h1>
        <p className="mt-3 text-slate-300">Als nächstes: Bitte füllen Sie das Onboarding-Formular aus. Wir melden uns danach für einen kurzen Abstimmungs-Call.</p>
      </main>
      <Footer/>
    </div>
  )
}
