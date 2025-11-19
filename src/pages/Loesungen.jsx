import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const data = [
  {t:'Termin-Lead-Agent',d:'Qualifiziert Anfragen, stellt die richtigen Fragen und bucht direkt Termine in Ihren Kalender.',req:['Website-URL','Öffnungszeiten','Leistungsspektrum','Kontakt-E-Mail'],res:'Mehr qualifizierte Termine, weniger Ping-Pong.'},
  {t:'Service L1/L2',d:'Beantwortet Standardfragen (Anfahrt, Preise, Verfügbarkeit) und eskaliert komplexe Fälle strukturiert.',req:['FAQ/Liste häufiger Fragen','Servicezeiten','Weiterleitungsregeln'],res:'Weniger Unterbrechungen, schnellere Antworten.'},
  {t:'Outbound-Reminder',d:'Ruft automatisch an oder versendet SMS/E-Mail-Erinnerungen zu Terminen und Zahlungen.',req:['Kalenderzugang (read)','Vorlagen für SMS/E-Mail','Zeiträume für Erinnerungen'],res:'Bis zu 80% weniger No-Shows.'},
  {t:'After-Hours-Hotline',d:'Nimmt Notfälle abends/wochenends auf, triagiert und koordiniert Rückrufe oder Bereitschaft.',req:['Notfallregeln','Bereitschaftsnummern','Zeiträume'],res:'Keine verpassten Chancen außerhalb der Öffnungszeiten.'},
]

function AgentCard({a}){
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
      <h3 className="text-white text-xl font-semibold">{a.t}</h3>
      <p className="text-slate-300 mt-2">{a.d}</p>
      <div className="mt-4">
        <div className="text-slate-400 text-sm font-medium">Benötigte Informationen</div>
        <ul className="mt-2 list-disc pl-5 text-slate-300 text-sm space-y-1">
          {a.req.map(r=> <li key={r}>{r}</li>)}
        </ul>
      </div>
      <div className="mt-4 text-emerald-300 text-sm">Ergebnis: {a.res}</div>
    </div>
  )
}

export default function Loesungen(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar/>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Lösungen & Agents</h1>
        <p className="mt-2 text-slate-300">Ein Agent pro Anwendungsfall – Telefon und Web-Widget inklusive.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {data.map(a=> <AgentCard key={a.t} a={a}/>)}
        </div>
      </main>
      <Footer/>
    </div>
  )
}
