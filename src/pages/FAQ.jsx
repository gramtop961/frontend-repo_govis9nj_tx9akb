import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const items = [
  {q:'Wie funktioniert der Agent technisch?',a:'Ein Omnichannel-Agent verbindet Telefonie (z.B. Twilio) mit Sprachsynthese (z.B. ElevenLabs) und einem Web-Widget. Er nutzt Ihr Website-Wissen und Onboarding-Informationen, um Anrufer und Website-Besucher zu führen.'},
  {q:'Welche Informationen müssen bereitgestellt werden?',a:'Ihre Website-URL, Öffnungszeiten, Leistungen, gewünschte Fragen/Antworten, Weiterleitungsregeln und ggf. Kalenderzugänge.'},
  {q:'Welche Tools/Accounts brauche ich?',a:'Eigene Accounts bei Telefonie- und TTS-Anbietern, z.B. Twilio und ElevenLabs. Die dort anfallenden Kosten werden direkt von diesen Anbietern berechnet.'},
  {q:'Wie läuft die Einrichtung ab?',a:'Nach Demo oder Kauf füllen Sie das Onboarding-Formular aus. Wir konfigurieren den Agenten, binden das Widget ein und testen gemeinsam. Standard-Setup ist in Starter inklusive.'},
  {q:'Welche rechtlichen Aspekte muss ich beachten?',a:'Transparente KI-Hinweise für Anrufer/Besucher, Datenschutzhinweise auf Ihrer Website und AVV mit Drittanbietern. Wir stellen Textbausteine und Hinweise bereit.'},
  {q:'Ist eine Weiterleitung zum Menschen möglich?',a:'Ja. Jeder Agent kann bei Bedarf gezielt eskalieren und Anrufe/Chats weiterleiten.'},
  {q:'Wie lange dauert die Implementierung?',a:'Standard-Setup meist 3–7 Werktage nach Onboarding.'},
  {q:'Kann ich ohne Demo direkt kaufen?',a:'Ja. Beim Starter ist Direktkauf möglich. Pro & Enterprise laufen über Demo/Beratung.'},
  {q:'Gibt es Mindestvertragslaufzeiten?',a:'Monatlich kündbar, sofern nicht anders vereinbart. Enterprise individuell.'},
]

function Item({q,a}){
  return (
    <details className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
      <summary className="cursor-pointer text-white font-medium">{q}</summary>
      <p className="mt-2 text-sm text-slate-300">{a}</p>
    </details>
  )
}

export default function FAQ(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar/>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 grid gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Häufige Fragen</h1>
        {items.map(i=> <Item key={i.q} {...i}/>)}
      </main>
      <Footer/>
    </div>
  )
}
