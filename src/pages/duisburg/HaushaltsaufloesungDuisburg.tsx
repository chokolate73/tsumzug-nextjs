import LocalSEOPage from '@/components/LocalSEOPage';
import { Home } from 'lucide-react';

export default function HaushaltsaufloesungDuisburg() {
  return (
    <LocalSEOPage
      metaTitle="Haushaltsauflösung Duisburg | Diskret & komplett"
      metaDescription="Komplette Haushaltsauflösung in Duisburg. Wohnungsauflösung, Nachlassauflösung, besenreine Übergabe. Diskret, fair. Kostenlose Beratung!"
      canonicalPath="/haushaltsaufloesung-duisburg"
      icon={Home}
      badge="Einfühlsam und professionell"
      h1="Haushaltsauflösung in Duisburg"
      subtitle="Komplette Wohnungsauflösung - diskret und respektvoll"
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
      introText={`Eine Haushaltsauflösung ist oft mit einer emotionalen Situation verbunden. Ob nach einem Todesfall, beim Umzug ins Pflegeheim oder bei einer Scheidung - wir verstehen, dass dies kein einfacher Moment ist. Deshalb gehen wir besonders einfühlsam und respektvoll vor.

Bei einer Haushaltsauflösung in Duisburg kümmern wir uns um alles: Vom Sortieren persönlicher Gegenstände über die Verwertung brauchbarer Möbel bis zur fachgerechten Entsorgung. Am Ende übergeben wir die Wohnung besenrein - bereit für die Übergabe an den Vermieter oder den Verkauf.

Als lokales Familienunternehmen legen wir Wert auf persönlichen Kontakt und individuelle Lösungen. Wir nehmen uns Zeit für Ihre Fragen und Wünsche. Und sollten sich unter den Gegenständen Erinnerungsstücke befinden, die Sie behalten möchten, sortieren wir diese selbstverständlich für Sie aus.`}
      processTitle="So läuft die Haushaltsauflösung"
      processSteps={[
        { title: 'Beratung', description: 'Erstes Gespräch und Klärung Ihrer Wünsche' },
        { title: 'Besichtigung', description: 'Kostenlose Vor-Ort-Besichtigung' },
        { title: 'Angebot', description: 'Transparentes Festpreisangebot' },
        { title: 'Auflösung', description: 'Sortieren, Verwerten, Entsorgen' },
        { title: 'Übergabe', description: 'Besenreine Wohnungsübergabe' },
      ]}
      featuresTitle="Unser Leistungsumfang"
      features={[
        'Komplette Wohnungsräumung',
        'Sortieren persönlicher Gegenstände',
        'Verwertung und Ankauf',
        'Spende an soziale Einrichtungen',
        'Fachgerechte Entsorgung',
        'Besenreine Übergabe',
        'Schlüsselübergabe an Vermieter',
      ]}
      benefitsTitle="Ihre Vorteile"
      benefits={[
        'Einfühlsame und diskrete Abwicklung',
        'Ein Ansprechpartner für alles',
        'Transparente Festpreise',
        'Wertanrechnung möglich',
        'Schnelle Terminvergabe',
        'Komplettservice aus einer Hand',
      ]}
      pricingTitle="Haushaltsauflösung Preise"
      pricingIntro="Die Kosten einer Haushaltsauflösung hängen vom Umfang ab. Verwertbare Gegenstände werden angerechnet."
      priceExamples={[
        { label: '1-Zimmer-Wohnung', price: 'ab 400€', note: 'Komplett inkl. besenrein' },
        { label: '2-Zimmer-Wohnung', price: 'ab 600€', note: 'Komplett inkl. besenrein' },
        { label: '3-Zimmer-Wohnung', price: 'ab 900€', note: 'Komplett inkl. besenrein' },
      ]}
      priceFactors={[
        'Wohnungsgröße und Füllmenge',
        'Etage und Zugänglichkeit',
        'Verwertbare Gegenstände',
        'Sondermüll vorhanden',
        'Zeitdruck / Dringlichkeit',
        'Gewünschte Zusatzleistungen',
      ]}
      localTitle="Haushaltsauflösungen in Duisburg"
      localText="Wir führen Haushaltsauflösungen in allen Stadtteilen von Duisburg durch. Als lokales Unternehmen können wir flexibel auf Ihre Termine reagieren und sind schnell vor Ort. Ob Wohnungsauflösung in Meiderich, Nachlassauflösung in Rheinhausen oder Seniorenumzug in Neudorf - wir sind für Sie da."
      neighborhoods={[
        'Duisburg-Mitte',
        'Meiderich',
        'Hamborn',
        'Hochfeld',
        'Neudorf',
        'Rheinhausen',
        'Homberg',
        'Ruhrort',
        'Buchholz',
        'Großenbaum',
        'Wedau',
        'Kaßlerfeld',
      ]}
      faqs={[
        {
          question: 'Was kostet eine Haushaltsauflösung in Duisburg?',
          answer: 'Eine Haushaltsauflösung in Duisburg kostet ab ca. 400€ für eine 1-Zimmer-Wohnung bis zu 1.500€ oder mehr für größere Häuser. Der genaue Preis hängt von Wohnungsgröße, Füllmenge und verwertbaren Gegenständen ab. Brauchbare Möbel werden angerechnet.',
        },
        {
          question: 'Wie läuft eine Haushaltsauflösung nach Todesfall ab?',
          answer: 'Wir gehen bei Nachlassauflösungen besonders einfühlsam vor. Nach einem Beratungsgespräch besichtigen wir die Wohnung, erstellen ein Angebot und führen die Auflösung zum vereinbarten Termin durch. Persönliche Gegenstände und Erinnerungsstücke sortieren wir für Sie aus.',
        },
        {
          question: 'Kaufen Sie auch Möbel an?',
          answer: 'Ja, gut erhaltene Möbel, Antiquitäten oder Sammlerstücke können wir ankaufen oder mit den Auflösungskosten verrechnen. Bei der Besichtigung schätzen wir den Wert ein und berücksichtigen ihn im Angebot.',
        },
        {
          question: 'Wie schnell kann die Auflösung erfolgen?',
          answer: 'Je nach Umfang ist eine Haushaltsauflösung oft innerhalb weniger Tage möglich. Bei dringenden Fällen (Kündigungsfristen, Verkauf) versuchen wir, schnellstmöglich zu helfen. Sprechen Sie uns an.',
        },
        {
          question: 'Übernehmen Sie auch die Wohnungsübergabe?',
          answer: 'Ja, auf Wunsch übergeben wir die Wohnung besenrein an den Vermieter oder Nachmieter. Wir können auch die Schlüsselübergabe für Sie übernehmen, wenn Sie nicht vor Ort sein können.',
        },
        {
          question: 'Was passiert mit Dokumenten und persönlichen Unterlagen?',
          answer: 'Wichtige Dokumente, Fotos und persönliche Unterlagen sortieren wir sorgfältig aus und übergeben sie Ihnen. Auf Wunsch vernichten wir vertrauliche Unterlagen datenschutzkonform.',
        },
        {
          question: 'Ist die Haushaltsauflösung auch in Erbengemeinschaften möglich?',
          answer: 'Ja, wir arbeiten regelmäßig mit Erbengemeinschaften zusammen. Wir dokumentieren die Räumung auf Wunsch mit Fotos und können den Erlös aus verwertbaren Gegenständen entsprechend aufteilen.',
        },
        {
          question: 'Was ist der Unterschied zwischen Haushaltsauflösung und Entrümpelung?',
          answer: 'Eine Haushaltsauflösung ist die komplette Räumung eines Haushalts mit allen Gegenständen - oft nach Todesfall oder Umzug. Eine Entrümpelung bezieht sich meist auf einzelne Räume wie Keller oder Dachboden.',
        },
      ]}
      relatedServices={[
        { text: 'Entrümpelung Duisburg', href: '/entruempelung-duisburg' },
        { text: 'Umzug mit Entrümpelung', href: '/umzug-und-entruempelung-duisburg' },
        { text: 'Umzugsunternehmen Duisburg', href: '/umzugsunternehmen-duisburg' },
        { text: 'Privatumzug Duisburg', href: '/privatumzug-duisburg' },
        { text: 'Möbeltransport Duisburg', href: '/moebeltransport-duisburg' },
        { text: 'Umzugskosten Duisburg', href: '/umzug-kosten-duisburg' },
      ]}
    />
  );
}
