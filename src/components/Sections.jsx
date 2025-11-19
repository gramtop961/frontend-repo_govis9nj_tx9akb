import { Link } from 'react-router-dom'

export function Problems(){
  const items = [
    {t:'Verpasste Anrufe',d:'Gerade abends und am Wochenende gehen wertvolle Aufträge verloren.'},
    {t:'No-Shows',d:'Fehlende Erinnerungen führen zu leeren Zeitfenstern und Umsatzverlust.'},
    {t:'Doppelbuchungen',d:'Uneinheitliche Terminabsprachen erzeugen Chaos im Kalender.'},
    {t:'Überlastung',d:'Ihr Team verbringt Zeit mit Standardfragen statt mit wertschöpfender Arbeit.'},
  ]
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-white">Die typischen Probleme im Handwerk</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((i)=> (
          <div key={i.t} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-slate-200">
            <h3 className="text-white font-medium mb-2">{i.t}</h3>
            <p className="text-slate-300 text-sm">{i.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function SolutionsTeaser(){
  const agents = [
    {t:'Termin-Lead-Agent',d:'Qualifiziert Anfragen und bucht Termine direkt in Ihren Kalender.'},
    {t:'After-Hours-Hotline',d:'Nimmt Notfälle abends/wochenends auf und koordiniert Rückrufe.'},
    {t:'Outbound-Reminder',d:'Erinnert Kunden automatisiert an Termine und Zahlungen.'},
    {t:'Service L1/L2 Agent',d:'Beantwortet Standardfragen und eskaliert komplexe Fälle.'},
  ]
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Unsere Lösungen</h2>
        <Link to="/loesungen" className="text-cyan-300">Alle Agents ansehen →</Link>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {agents.map(a=> (
          <div key={a.t} className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
            <h3 className="text-white font-medium mb-2">{a.t}</h3>
            <p className="text-slate-300 text-sm">{a.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Outcomes(){
  const items = [
    {t:'Mehr Umsatz',d:'Sie erreichen mehr Anrufer und wandeln mehr Leads in Aufträge um.'},
    {t:'Weniger No-Shows',d:'Automatische Erinnerungen reduzieren Ausfälle um bis zu 80%.'},
    {t:'Entlastetes Team',d:'Der Agent übernimmt Standardgespräche und Koordination.'},
  ]
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-white">Ergebnisse, die zählen</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map(i=> (
          <div key={i.t} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-slate-200">
            <h3 className="text-white font-medium mb-2">{i.t}</h3>
            <p className="text-slate-300 text-sm">{i.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function RoiCta(){
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-white text-2xl font-semibold">ROI in 30 Sekunden berechnen</h3>
            <p className="text-slate-300 mt-1">Schätzen Sie Ihren monatlichen Mehrumsatz – konservativ und realistisch.</p>
          </div>
          <Link to="/roi-rechner" className="px-5 py-3 rounded-lg bg-cyan-400 text-slate-900 font-medium hover:bg-cyan-300 transition">Jetzt berechnen</Link>
        </div>
      </div>
    </section>
  )
}
