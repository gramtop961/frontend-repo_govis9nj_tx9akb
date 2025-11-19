import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function PriceCard({title,price,subtitle,features,cta, note, badge}){
  return (
    <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 flex flex-col">
      {badge && <div className="absolute -top-3 right-4 text-xs px-2 py-1 rounded-full bg-emerald-500 text-white">{badge}</div>}
      <h3 className="text-white text-xl font-semibold">{title}</h3>
      <div className="mt-2 text-3xl font-bold text-white">{price}</div>
      {subtitle && <div className="text-slate-300 text-sm">{subtitle}</div>}
      <ul className="mt-4 text-slate-300 text-sm space-y-2">
        {features.map(f=> <li key={f}>• {f}</li>)}
      </ul>
      {note && <div className="mt-3 text-xs text-slate-400">{note}</div>}
      <div className="mt-6 grid grid-cols-2 gap-2">
        <Link to="/kaufen" className="px-4 py-2 rounded-lg bg-emerald-500 text-white text-center hover:bg-emerald-400">Jetzt kaufen</Link>
        <Link to="/demo" className="px-4 py-2 rounded-lg bg-slate-800 text-slate-100 text-center hover:bg-slate-700">Demo buchen</Link>
      </div>
    </div>
  )
}

export default function Preise(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar/>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Preise & Pakete</h1>
        <p className="mt-2 text-slate-300 max-w-3xl">Preis pro Agent/Monat. Externe Nutzungskosten (Telefonie/TTS) werden separat über Ihre eigenen Accounts (z.B. Twilio, ElevenLabs) abgerechnet und sind nicht enthalten.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <PriceCard
            title="Starter Omnichannel Agent"
            price="149 €/Monat (Direktkauf) / 179 € mit Demo"
            subtitle="1 Agent, Standard-Setup inkl."
            badge="Beliebt"
            features={[
              'Voice + Chat-Widget',
              'Anpassung anhand Website + Onboarding-Formular',
              'Basis-Dialog (z.B. Terminbuchung oder After-Hours)',
              'E-Mail-Benachrichtigungen über neue Leads/Termine',
              'Kündbar monatlich'
            ]}
          />

          <PriceCard
            title="Pro Omnichannel Agents"
            price="2 Agenten: 269 € / 299 € | 3 Agenten: 379 € / 419 €"
            subtitle="Erweiterte Anpassung & Reporting"
            features={[
              '2–3 Agenten (Termin, Hotline, Reminder)',
              'Individuelle Fragen & Routing-Logik',
              'Basis-Kalender-Integration',
              'SMS/E-Mail-Bestätigungen & Erinnerungen',
              'Einfache Reporting-Übersicht (Export)'
            ]}
            note="Optionale Setup-Gebühr bei tiefer Integration: ab 490 €"
          />

          <PriceCard
            title="Enterprise Handwerk Suite"
            price="ab 599 €/Monat (4 Agenten)"
            subtitle="Individuelle Integrationen & SLA"
            features={[
              '4+ Agenten',
              'CRM/ERP-Integrationen nach Aufwand',
              'Priorisierter Support & SLA',
              'Individuelles Reporting',
              'Implementierung ab 1.500 €'
            ]}
            note="Einmalige Implementierung nach Aufwand (z.B. ab 1.500 €). Nur via Demo & Beratung."
          />
        </div>

        <div className="mt-10 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-200 text-sm">
          Hinweis: Externe Telefonie- und Sprachkosten (z.B. Twilio, ElevenLabs) fallen zusätzlich an und werden direkt von diesen Anbietern berechnet. VoiceForge ist nicht Zahlungsanbieter dieser Dienste – wir unterstützen lediglich bei der Einrichtung.
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-white text-2xl font-semibold">Welche Pakete passen zu welchem Gewerk?</h2>
          <div className="grid gap-4 md:grid-cols-3 mt-4 text-sm text-slate-300">
            <div>
              <div className="text-white font-medium">Sanitär/Klempner</div>
              <p>Starter reicht oft zum Start (Termin + Notfallannahme). Pro sinnvoll bei Reminder + Hotline.</p>
            </div>
            <div>
              <div className="text-white font-medium">Elektriker</div>
              <p>Pro (2–3 Agenten) für Beratung/Termin + After-Hours. Enterprise bei CRM/ERP-Anbindung.</p>
            </div>
            <div>
              <div className="text-white font-medium">HKLS</div>
              <p>Starter für Wartungstermine, Pro für Notfall/Reminder-Kombi. Enterprise bei Bereitschaftsplänen.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
