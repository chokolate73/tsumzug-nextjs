import LocalSEOPage from '@/components/LocalSEOPage';
import { Wrench } from 'lucide-react';

export default function HausmeisterserviceDuisburg() {
  return (
    <LocalSEOPage
      metaTitle="Hausmeisterservice Duisburg | Professionell ab 35€/Std"
      metaDescription="Professioneller Hausmeisterservice in Duisburg. Kleinreparaturen, Möbelmontage, Objektpflege. Stundensatz oder Monatspauschale. Jetzt anfragen!"
      canonicalPath="/hausmeisterservice-duisburg"
      icon={Wrench}
      badge="Flexibel und zuverlässig"
      h1="Hausmeisterservice in Duisburg"
      subtitle="Kleinreparaturen, Wartung und Objektpflege - professionell und flexibel"
      heroImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80"
      introText={`Sie suchen einen zuverlässigen Hausmeisterservice in Duisburg? Ob Kleinreparaturen, regelmäßige Objektbetreuung oder schnelle Hilfe bei Notfällen - wir sind Ihr kompetenter Partner für alle handwerklichen Aufgaben rund um Haus und Wohnung.

Unser Hausmeisterservice ist ideal für Privatpersonen, Vermieter und Hausverwaltungen. Wir übernehmen alles, was anfällt: von der tropfenden Wasserhahn bis zur kompletten Objektpflege. Flexibel buchbar nach Stunden oder als Monatspauschale.

Mit uns haben Sie einen Ansprechpartner für alle kleineren und größeren Reparaturen. Professionell, schnell und zu fairen Preisen.`}
      processTitle="So funktioniert's"
      processSteps={[
        { title: 'Anfrage', description: 'Sie beschreiben Ihr Anliegen' },
        { title: 'Angebot', description: 'Schnelle Preisauskunft per Telefon' },
        { title: 'Termin', description: 'Flexibler Termin nach Ihrem Wunsch' },
        { title: 'Ausführung', description: 'Professionelle Erledigung vor Ort' },
        { title: 'Fertig', description: 'Saubere Übergabe und Rechnung' },
      ]}
      featuresTitle="Unsere Leistungen"
      features={[
        'Kleinreparaturen aller Art',
        'Möbelmontage (IKEA, etc.)',
        'Lampen und Gardinenstangen montieren',
        'Türen und Schlösser reparieren',
        'Wasserhähne und Siphone austauschen',
        'Regelmäßige Objektbetreuung',
        'Winterdienst und Gartenpflege',
      ]}
      benefitsTitle="Ihre Vorteile"
      benefits={[
        'Flexible Terminvereinbarung',
        'Transparente Preise - Stundensatz oder Pauschale',
        'Erfahrene Handwerker',
        'Schnelle Reaktionszeit',
        'Alle Werkzeuge inklusive',
        'Zuverlässig und sauber',
      ]}
      pricingTitle="Hausmeisterservice Preise"
      pricingIntro="Regelmäßige Betreuung oder nach Bedarf. Flexibel buchbar."
      priceExamples={[
        { label: 'Stundensatz', price: 'ab 35€/Stunde', note: 'Kleinreparaturen, Wartung, Objektpflege' },
        { label: 'Monatspauschale', price: 'ab 250€/Monat', note: 'Regelmäßige Betreuung eines Objekts mit festem Leistungsumfang' },
        { label: 'Notdienst', price: 'ab 89€', note: 'Schnelle Hilfe bei Notfällen. Einsatzpauschale + Arbeitszeit' },
      ]}
      priceFactors={[
        'Art der Arbeiten',
        'Dauer des Einsatzes',
        'Regelmäßigkeit',
        'Materialkosten (falls nötig)',
        'Anfahrt bei weiten Strecken',
        'Sonderleistungen',
      ]}
      localTitle="Hausmeisterservice in ganz Duisburg"
      localText="Ob Mietwohnung in Hochfeld, Mehrfamilienhaus in Meiderich oder Gewerbeobjekt im Innenhafen - wir betreuen Objekte in allen Stadtteilen von Duisburg. Als lokales Unternehmen sind wir schnell vor Ort."
      neighborhoods={[
        'Duisburg-Mitte',
        'Meiderich',
        'Hamborn',
        'Hochfeld',
        'Neudorf',
        'Rheinhausen',
        'Homberg',
        'Buchholz',
        'Großenbaum',
        'Wedau',
        'Ruhrort',
        'Duissern',
      ]}
      faqs={[
        {
          question: 'Was kostet der Hausmeisterservice?',
          answer: 'Unser Stundensatz beginnt ab 35€/Stunde für Kleinreparaturen und Wartungsarbeiten. Für regelmäßige Objektbetreuung bieten wir Monatspauschalen ab 250€ an. Bei Notfällen gilt eine Einsatzpauschale ab 89€ plus Arbeitszeit.',
        },
        {
          question: 'Welche Arbeiten übernehmen Sie?',
          answer: 'Wir übernehmen alle typischen Hausmeisterarbeiten: Kleinreparaturen, Möbelmontage, Lampen aufhängen, Türen reparieren, Wasserhähne austauschen, Winterdienst, Gartenpflege und vieles mehr.',
        },
        {
          question: 'Wie schnell können Sie kommen?',
          answer: 'Für reguläre Aufträge vereinbaren wir einen Termin innerhalb weniger Tage. Bei Notfällen versuchen wir, noch am selben Tag zu helfen.',
        },
        {
          question: 'Bieten Sie auch regelmäßige Betreuung an?',
          answer: 'Ja, wir bieten Monatspauschalen für die regelmäßige Betreuung von Objekten an. Der Leistungsumfang wird individuell vereinbart.',
        },
        {
          question: 'Bauen Sie auch IKEA-Möbel auf?',
          answer: 'Ja, Möbelmontage gehört zu unseren Kernleistungen. Wir bauen IKEA-Möbel, PAX-Schränke, Küchen und andere Möbel professionell auf.',
        },
        {
          question: 'Ist das Material im Preis enthalten?',
          answer: 'Der Stundensatz gilt für die Arbeitszeit. Benötigtes Material wie Schrauben, Dübel oder Ersatzteile wird separat berechnet und im Angebot ausgewiesen.',
        },
      ]}
      relatedServices={[
        { text: 'Umzugsunternehmen Duisburg', href: '/umzugsunternehmen-duisburg' },
        { text: 'Möbeltransport Duisburg', href: '/moebeltransport-duisburg' },
        { text: 'Renovierung Duisburg', href: '/renovierung-duisburg' },
        { text: 'Entrümpelung Duisburg', href: '/entruempelung-duisburg' },
        { text: 'Privatumzug Duisburg', href: '/privatumzug-duisburg' },
        { text: 'Umzugskosten Duisburg', href: '/umzug-kosten-duisburg' },
      ]}
    />
  );
}
