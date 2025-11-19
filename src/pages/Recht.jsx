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
          <p>
            VoiceForge GmbH (Platzhalter)<br/>
            Musterstraße 1, 10115 Berlin, Deutschland<br/>
            Vertreten durch die Geschäftsführung: Max Mustermann<br/>
            Handelsregister: Amtsgericht Berlin, HRB 123456<br/>
            USt-IdNr.: DE123456789
          </p>
          <p>
            Kontakt:<br/>
            E-Mail: hello@voiceforge.example<br/>
            Telefon: +49 (0)30 123 456 78
          </p>
          <p>
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Max Mustermann, Anschrift wie oben.
          </p>
          <p className="text-xs text-slate-400">
            Hinweis: Diese Angaben sind Platzhalter und müssen vor Livegang mit Ihren echten Unternehmensdaten ersetzt werden.
          </p>
        </Section>
        <Section title="Haftungsausschluss">
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt
            der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Die Informationen auf dieser Website werden
            regelmäßig geprüft und aktualisiert. Dennoch können sich Daten zwischenzeitlich ändern. Eine Haftung oder Garantie für die
            Aktualität, Richtigkeit und Vollständigkeit der zur Verfügung gestellten Informationen wird nicht übernommen.
          </p>
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
        <Section title="1. Verantwortlicher & Geltungsbereich">
          <p>
            Diese Datenschutzhinweise informieren über die Verarbeitung personenbezogener Daten bei Nutzung der Website sowie der
            angebotenen Dienste (z. B. Demo-Buchung, Onboarding). Verantwortlicher im Sinne der DSGVO ist die VoiceForge GmbH (siehe Impressum).
          </p>
        </Section>
        <Section title="2. Verarbeitete Daten & Zwecke">
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Website-Nutzung</b>: Server-Logs, IP-Adresse, Zeitstempel zur Sicherstellung des Betriebs (Art. 6 Abs. 1 lit. f DSGVO).</li>
            <li><b>Demo-/Kontaktformulare</b>: Stammdaten (Name, E-Mail, Unternehmen), Terminwünsche, Notizen zur Terminvereinbarung und Vertragsanbahnung (Art. 6 Abs. 1 lit. b DSGVO).</li>
            <li><b>Onboarding</b>: Geschäftsinfos (URL, Öffnungszeiten, Leistungsprofil), gewünschte Fragen/Prozesse zur Einrichtung des Voice-/Chat-Agents (Art. 6 Abs. 1 lit. b DSGVO).</li>
          </ul>
        </Section>
        <Section title="3. Drittanbieter & Auftragsverarbeitung">
          <p>
            Für Telefonie und Sprachsynthese nutzen Kunden eigene Accounts bei Drittanbietern (z. B. Twilio für Telefonie, ElevenLabs für TTS). VoiceForge handelt hier unterstützend (Einrichtung, Konfiguration). Die Abrechnung und Verantwortlichkeit für die Datenverarbeitung bei diesen Drittanbietern liegt beim Kunden mit dem jeweiligen Anbieter. Es sind eigenständige Verträge und AVV (Auftragsverarbeitungsverträge) mit diesen Anbietern zu schließen.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><b>Twilio Inc.</b>, 101 Spear Street, San Francisco, CA 94105, USA – Telefonie-/SMS-Dienste. EU-Übermittlung nach Art. 46 DSGVO (Standardvertragsklauseln) möglich.</li>
            <li><b>ElevenLabs</b> – Text-to-Speech. Bitte prüfen Sie die jeweils gültigen Datenverarbeitungsbedingungen und schließen Sie eine AVV, sofern erforderlich.</li>
            <li><b>Google Workspace</b> – Kalender (Meet/Calendar), Drive. Nutzung über Ihre Organisation; ggf. Datenübermittlung an Google. Prüfen Sie Freigaben & Berechtigungen.</li>
          </ul>
          <p>
            VoiceForge kann als Auftragsverarbeiter tätig werden, soweit wir Kundendaten in Ihrem Auftrag verarbeiten. In diesem Fall schließen wir mit Ihnen eine AVV gemäß Art. 28 DSGVO. Für die Drittanbieter (Twilio, ElevenLabs, Google) bestehen separate Vertragsbeziehungen zwischen Ihnen und dem jeweiligen Anbieter.
          </p>
        </Section>
        <Section title="4. Speicherdauer">
          <p>Wir speichern personenbezogene Daten nur so lange, wie es für die Zwecke der Verarbeitung erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.</p>
        </Section>
        <Section title="5. Betroffenenrechte">
          <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit sowie Widerspruch. Wenden Sie sich hierfür an die im Impressum genannte Kontaktadresse.</p>
        </Section>
        <Section title="6. Datensicherheit">
          <p>Wir treffen technische und organisatorische Maßnahmen, um Ihre Daten gegen Verlust, Missbrauch oder unbefugten Zugriff zu schützen. Kommunikation kann TLS-verschlüsselt erfolgen.</p>
        </Section>
        <Section title="7. Internationale Datenübermittlung">
          <p>Bei Nutzung von US-Dienstleistern (z. B. Twilio, Google) kann eine Datenübermittlung in Drittländer stattfinden. Rechtsgrundlagen sind Standardvertragsklauseln oder gleichwertige Schutzmechanismen der Anbieter.</p>
        </Section>
        <Section title="8. Änderungen">
          <p>Diese Hinweise können aktualisiert werden, um geänderte rechtliche oder technische Entwicklungen zu berücksichtigen.</p>
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
        <Section title="1. Geltungsbereich">
          <p>Diese AGB gelten für alle Verträge zwischen VoiceForge und Geschäftskunden (B2B) über die Nutzung der VoiceForge-Services.</p>
        </Section>
        <Section title="2. Leistungen">
          <ul className="list-disc pl-5 space-y-2">
            <li>SaaS-Nutzung für Omnichannel-KI-Voice-Agents (Telefon und Web-Widget).</li>
            <li>Optionale Setup-/Integrationsleistungen nach Aufwand.</li>
            <li>Unterstützung bei der Einrichtung externer Dienste (z. B. Twilio/ElevenLabs/Google Workspace). Externe Kosten trägt der Kunde.</li>
          </ul>
        </Section>
        <Section title="3. Vergütung & Abrechnung">
          <p>Monatliche Gebühren gemäß ausgewähltem Paket. Externe Nutzungsentgelte (z. B. Telefonie/TTS) werden direkt von den jeweiligen Anbietern berechnet und sind nicht Bestandteil der VoiceForge-Gebühren.</p>
        </Section>
        <Section title="4. Laufzeit & Kündigung">
          <p>SaaS-Verträge sind, sofern nicht anders vereinbart, monatlich kündbar mit einer Frist von 30 Tagen zum Monatsende.</p>
        </Section>
        <Section title="5. Pflichten des Kunden">
          <ul className="list-disc pl-5 space-y-2">
            <li>Bereitstellung korrekter Inhalte (z. B. Öffnungszeiten, Notfallregeln, Datenschutzhinweise).</li>
            <li>Abschluss notwendiger Verträge/AVV mit Drittanbietern und Prüfung datenschutzrechtlicher Anforderungen.</li>
            <li>Keine rechtswidrige Nutzung der Dienste; Beachtung von Telekommunikations- und Datenschutzrecht.</li>
          </ul>
        </Section>
        <Section title="6. Haftung">
          <p>VoiceForge haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit. Bei einfacher Fahrlässigkeit nur für Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) und beschränkt auf den vertragstypisch vorhersehbaren Schaden. Keine Haftung für Ausfälle bei Drittanbietern.</p>
        </Section>
        <Section title="7. Datenschutz & AVV">
          <p>VoiceForge verarbeitet personenbezogene Daten im Einklang mit der DSGVO. Soweit VoiceForge als Auftragsverarbeiter tätig ist, wird eine AVV geschlossen. Für Twilio, ElevenLabs und Google Workspace bestehen eigenständige Verträge/AVV zwischen Kunde und Anbieter.</p>
        </Section>
        <Section title="8. Verfügbarkeit & Wartung">
          <p>Wartungsfenster und Serviceverfügbarkeit werden angemessen angekündigt. Es kann zu temporären Einschränkungen kommen.</p>
        </Section>
        <Section title="9. Schlussbestimmungen">
          <p>Es gilt deutsches Recht. Gerichtsstand ist – soweit zulässig – Berlin. Nebenabreden bedürfen der Schriftform.</p>
        </Section>
        <p className="text-xs text-slate-400">Hinweis: Diese AGB sind Mustertexte und sollten vor Einsatz rechtlich geprüft und an Ihr Unternehmen angepasst werden.</p>
      </main>
      <Footer/>
    </div>
  )
}
