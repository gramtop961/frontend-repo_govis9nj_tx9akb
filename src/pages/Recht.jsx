import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Section({title, children}){
  return (
    <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
      <h2 className="text-white font-semibold text-xl">{title}</h2>
      <div className="mt-3 text-sm text-slate-300 space-y-3">{children}</div>
    </section>
  )
}

export function Impressum(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar/>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 grid gap-6">
        <Section title="Impressum">
          <p>VoiceForge GmbH (Platzhalter)<br/>Musterstraße 1, 10115 Berlin<br/>Geschäftsführer: Max Mustermann<br/>USt-IdNr.: DE123456789<br/>Kontakt: hello@voiceforge.example</p>
        </Section>
      </main>
      <Footer/>
    </div>
  )
}

export function Datenschutz(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar/>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 grid gap-6">
        <Section title="Datenschutz (Auszug)">
          <p>Wir verarbeiten personenbezogene Daten im Rahmen der Bereitstellung von Omnichannel-Agents. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertrag) bzw. lit. f (berechtigtes Interesse). Für Telefonie und Sprachsynthese nutzen Sie eigene Accounts bei Drittanbietern (z.B. Twilio, ElevenLabs). Die dort entstehenden Kosten und Datenverarbeitungen liegen in Ihrer Verantwortung. Wir unterstützen bei der Einrichtung.</p>
          <p>Bitte ergänzen Sie auf Ihrer Website Hinweise zur KI-Nutzung im Telefonansagetext und im Widget. Ebenso sind AVV/Verträge mit Drittanbietern separat zu schließen.</p>
        </Section>
      </main>
      <Footer/>
    </div>
  )
}

export function AGB(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar/>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 grid gap-6">
        <Section title="Allgemeine Geschäftsbedingungen (Kurzfassung)">
          <ul className="list-disc pl-5">
            <li>Monatliche SaaS-Gebühr pro Agent. Kündbar mit 30 Tagen zum Monatsende, sofern nicht anders vereinbart.</li>
            <li>Externe Nutzungskosten (Telefonie/TTS etc.) werden direkt von Drittanbietern berechnet.</li>
            <li>Setup- und Integrationsleistungen nach Aufwand – vorher transparent angeboten.</li>
            <li>Haftung begrenzt auf Vorsatz und grobe Fahrlässigkeit. Keine Haftung für Ausfälle bei Drittanbietern.</li>
            <li>Gerichtsstand: Berlin, sofern gesetzlich zulässig.</li>
          </ul>
        </Section>
      </main>
      <Footer/>
    </div>
  )
}
