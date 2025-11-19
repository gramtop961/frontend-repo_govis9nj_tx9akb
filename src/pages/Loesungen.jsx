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

function GewerkeBlock({title, pains, usecases, kpis, example}){
  return (
    <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <div className="flex flex-col gap-3">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <div className="text-slate-400 text-sm font-medium">Typische Engpässe</div>
            <ul className="mt-2 list-disc pl-5 text-slate-300 text-sm space-y-1">
              {pains.map(p=> <li key={p}>{p}</li>)}
            </ul>
          </div>
          <div>
            <div className="text-slate-400 text-sm font-medium">Einsatzfälle des Agents</div>
            <ul className="mt-2 list-disc pl-5 text-slate-300 text-sm space-y-1">
              {usecases.map(u=> <li key={u}>{u}</li>)}
            </ul>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {kpis.map((k)=> (
            <div key={k.t} className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
              <div className="text-cyan-300 text-sm">{k.t}</div>
              <div className="text-white text-lg font-semibold">{k.v}</div>
              <div className="text-slate-400 text-xs">{k.s}</div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
          <div className="text-slate-400 text-sm font-medium">Beispieldialog</div>
          <p className="text-slate-300 text-sm mt-2 whitespace-pre-line">{example}</p>
        </div>
      </div>
    </section>
  )
}

export default function Loesungen(){
  const gewerke = [
    {
      title: 'HKLS / Heizung & Klima',
      pains: ['Stoßzeiten im Winter, viele Notrufe', 'Ersatzteil-Rückfragen blockieren das Telefon', 'No-Shows bei Wartungsterminen'],
      usecases: ['Notfall-Triage mit Priorisierung', 'Wartungstermine inkl. Ersatzteil-Fragen', 'Erinnerungen per SMS/E-Mail'],
      kpis: [
        {t:'Erreichbarkeit', v:'24/7', s:'inkl. After-Hours'},
        {t:'No-Shows', v:'-60–80%', s:'mit Erinnerungen'},
        {t:'Lead-to-Term', v:'+20–35%', s:'mehr Abschlüsse'}
      ],
      example: 'Agent: Guten Tag, hier ist der Heizungs-Notfallassistent Ihres Betriebs. Worum geht es?\nKunde: Heizung zeigt Fehler 118.\nAgent: Verstanden. Ist Warmwasser ebenfalls betroffen?\nKunde: Ja.\nAgent: Ich priorisiere das als Notfall und organisiere den Rückruf der Bereitschaft. Können Sie mir Ihre Adresse nennen?'
    },
    {
      title: 'Sanitär / Klempner',
      pains: ['Hohe Anruflast bei Rohrbrüchen', 'Viele Preisanfragen ohne Kontext', 'Terminabstimmung kostet Zeit'],
      usecases: ['Leck-Notfälle triagieren', 'Preisorientierte Qualifizierung (Ort, Umfang, Bilder-Link)', 'Direkte Terminbuchung mit Zeitfenster'],
      kpis: [
        {t:'Erstkontakt → Termin', v:'+25–40%', s:'qualifizierter'},
        {t:'Telefonlast', v:'-30–50%', s:'weniger Unterbrechung'},
        {t:'Bearbeitungszeit', v:'-2–5 Min', s:'pro Anfrage'}
      ],
      example: 'Agent: Willkommen bei Ihrem Sanitärbetrieb. Tritt das Wasser aktiv aus?\nKunde: Ja, seit 10 Minuten.\nAgent: Bitte schließen Sie, wenn möglich, das Hauptventil. Ich buche Ihnen direkt das nächste Zeitfenster und informiere den Bereitschaftsdienst.'
    },
    {
      title: 'Elektriker',
      pains: ['Notfälle bei Stromausfällen', 'Viele Fragen zu Wallbox/Smart-Home', 'Koordination von Ortsterminen'],
      usecases: ['Sicherheitsabfrage und Sofortmaßnahmen', 'Wallbox-Vorqualifizierung (Leitung, Sicherung, Stellplatz)', 'Terminbuchung und Material-Checkliste'],
      kpis: [
        {t:'Einsatzvorbereitung', v:'+15–25%', s:'bessere Infos'},
        {t:'Kalenderauslastung', v:'+10–20%', s:'weniger Lücken'},
        {t:'No-Shows', v:'-50–70%', s:'mit Erinnerungen'}
      ],
      example: 'Agent: Handelt es sich um einen kompletten Stromausfall oder um einzelne Räume?\nKunde: Nur Küche und Bad.\nAgent: Danke. Bitte prüfen Sie, ob der FI-Schutzschalter ausgelöst hat. Ich buche Ihnen einen Termin und sende eine kurze Checkliste per E-Mail.'
    },
    {
      title: 'Schädlingsbekämpfung',
      pains: ['Viele akute Fälle außerhalb der Öffnungszeiten', 'Preis-/Einsatzgebiet-Fragen', 'Dokudruck für Gewerbekunden'],
      usecases: ['Akutfälle triagieren, Fotos anfragen', 'Einsatzgebiet prüfen und Termin fixieren', 'Berichtsvorlagen ankündigen'],
      kpis: [
        {t:'Outbound-Erinnerung', v:'-70–90%', s:'No-Shows nach Ersttermin'},
        {t:'Qualifizierung', v:'+20–30%', s:'mit Foto-Link'},
        {t:'Durchlaufzeit', v:'-1–3 Tage', s:'bis Einsatz'}
      ],
      example: 'Agent: Können Sie mir kurz beschreiben, um welchen Schädlingsbefall es sich handelt?\nKunde: Vermutlich Wespen unterm Dach.\nAgent: Danke. Ich benötige, wenn möglich, ein Foto. Ich prüfe direkt das Einsatzgebiet und buche den nächstmöglichen Termin.'
    },
    {
      title: 'Dachdecker',
      pains: ['Wetterbedingte Stoßzeiten', 'Viele Angebotsanfragen mit fehlenden Angaben', 'Koordination von Gerüst/Material'],
      usecases: ['Sturmschaden-Notfallannahme', 'Vorqualifizierung mit Flächengrößen/Fotos', 'Terminierung der Vor-Ort-Besichtigung'],
      kpis: [
        {t:'Lead-Qualität', v:'+20–40%', s:'vollständiger'},
        {t:'Planungsaufwand', v:'-30–40%', s:'besser vorbereitet'},
        {t:'Erreichbarkeit', v:'24/7', s:'auch bei Unwetter'}
      ],
      example: 'Agent: Betrifft der Sturmschaden das Dach flächig oder lokal?\nKunde: Nur ein Bereich.\nAgent: Ich buche die Besichtigung und notiere Materialhinweise. Bitte laden Sie optional ein Foto hoch (Link folgt per SMS).'
    },
    {
      title: 'Maler & Lackierer',
      pains: ['Viele Schätzanfragen ohne Maße', 'Terminkoordination mit Privathaushalten', 'Saisonale Schwankungen'],
      usecases: ['Vorqualifizierung (Fläche, Untergrund, Farbe)', 'Beratungstermin + Angebotserstellung', 'Automatisierte Follow-ups'],
      kpis: [
        {t:'Angebots-Conversion', v:'+10–20%', s:'mit Follow-ups'},
        {t:'Zeit pro Lead', v:'-3–6 Min', s:'Vorqualifizierung'},
        {t:'Kalender-Füllung', v:'+15–25%', s:'gleichmäßiger'}
      ],
      example: 'Agent: Um welches Zimmer handelt es sich und wie groß ist es ungefähr?\nKunde: Wohnzimmer, ca. 20 m².\nAgent: Perfekt. Ich lege Ihnen einen Beratungstermin an und bitte um 2–3 Fotos per Link, damit wir das Angebot vorbereiten.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar/>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Lösungen & Agents</h1>
        <p className="mt-2 text-slate-300">Ein Agent pro Anwendungsfall – Telefon und Web-Widget inklusive. Individuelle Texte für Ihre Branche inklusive.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {data.map(a=> <AgentCard key={a.t} a={a}/>)}
        </div>

        <h2 className="mt-14 text-2xl md:text-3xl font-semibold text-white">Branchen & individuelle Texte</h2>
        <p className="mt-2 text-slate-300 max-w-3xl">Für jedes Gewerk liefern wir branchenspezifische Prompts, Dialoge und Formulierungen. So klingt Ihr Agent wie ein Profi aus Ihrem Fach.</p>
        <div className="mt-6 grid gap-6">
          {gewerke.map(g=> <GewerkeBlock key={g.title} {...g} />)}
        </div>
      </main>
      <Footer/>
    </div>
  )
}
