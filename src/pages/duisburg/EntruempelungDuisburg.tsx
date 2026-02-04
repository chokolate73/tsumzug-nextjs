import LocalSEOPage from '@/components/LocalSEOPage';
import { Trash2 } from 'lucide-react';

export default function EntruempelungDuisburg() {
  return (
    <LocalSEOPage
      metaTitle="Entrümpelung Duisburg | Schnell & fair ab 199€"
      metaDescription="Professionelle Entrümpelung in Duisburg. Wohnung, Keller, Dachboden. Fachgerechte Entsorgung, kurzfristige Termine. Festpreis. Jetzt anfragen!"
      canonicalPath="/entruempelung-duisburg"
      icon={Trash2}
      badge="Schnell, sauber, zuverlässig"
      h1="Entrümpelung in Duisburg"
      subtitle="Keller, Dachboden, Wohnung - wir räumen für Sie"
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
      introText={`Manchmal muss man aufräumen. Ob übervoller Keller, vollgestopfter Dachboden oder eine komplette Wohnung - wir übernehmen die Entrümpelung in Duisburg schnell, gründlich und zu fairen Preisen.

Unser Entrümpelungsservice ist mehr als nur Müll entsorgen. Wir sortieren sorgfältig, trennen Wertstoffe fachgerecht und kümmern uns um die umweltgerechte Entsorgung. Brauchbare Gegenstände werden auf Wunsch an soziale Einrichtungen gespendet oder verrechnet.

Ob Sie als Vermieter eine Wohnung räumen müssen, als Erbe vor einer Haushaltsauflösung stehen oder einfach Platz schaffen wollen - wir sind Ihr Ansprechpartner in Duisburg. Diskret, zuverlässig und mit transparenten Festpreisen.`}
      processTitle="Ablauf Ihrer Entrümpelung"
      processSteps={[
        { title: 'Anfrage', description: 'Sie kontaktieren uns mit Ihrem Anliegen' },
        { title: 'Besichtigung', description: 'Wir schauen uns die Situation vor Ort an' },
        { title: 'Festpreis', description: 'Sie erhalten ein verbindliches Angebot' },
        { title: 'Räumung', description: 'Wir entrümpeln zum vereinbarten Termin' },
        { title: 'Übergabe', description: 'Besenreine Übergabe auf Wunsch' },
      ]}
      featuresTitle="Das entrümpeln wir"
      features={[
        'Kellerverschläge & Kellerräume',
        'Dachböden & Speicher',
        'Wohnungen & Häuser',
        'Garagen & Schuppen',
        'Büros & Gewerbeflächen',
        'Gärten & Außenanlagen',
        'Sperrmüll & Elektroschrott',
      ]}
      benefitsTitle="Ihre Vorteile"
      benefits={[
        'Kurzfristige Termine möglich',
        'Besenreine Übergabe auf Wunsch',
        'Fachgerechte Entsorgung aller Materialien',
        'Verwertung brauchbarer Gegenstände',
        'Transparente Festpreise',
        'Diskrete Abwicklung',
      ]}
      pricingTitle="Entrümpelung Preise in Duisburg"
      pricingIntro="Faire Preise nach Aufwand. Die Besichtigung ist kostenlos und unverbindlich."
      priceExamples={[
        { label: 'Keller/Dachboden', price: 'ab 199€', note: 'Bis ca. 15m². Inklusive Entsorgung' },
        { label: 'Garage/Schuppen', price: 'ab 399€', note: 'Komplettentsorgung inklusive. Mit Wertanrechnung möglich' },
        { label: 'Wohnung komplett', price: 'ab 699€', note: '2-Zimmer-Wohnung, besenrein. Inklusive Entsorgung und Endreinigung' },
      ]}
      priceFactors={[
        'Raumgröße & Füllmenge',
        'Art der Gegenstände',
        'Zugänglichkeit (Etage, Aufzug)',
        'Sondermüll vorhanden',
        'Besenreine Übergabe gewünscht',
        'Verwertbare Gegenstände',
      ]}
      localTitle="Entrümpelung in allen Stadtteilen"
      localText="Ob Keller in Marxloh, Dachboden in Rheinhausen oder Wohnung in Hochfeld - wir entrümpeln in ganz Duisburg. Als lokales Unternehmen kennen wir die Gegebenheiten vor Ort und können schnell und flexibel reagieren."
      neighborhoods={[
        'Duisburg-Mitte',
        'Meiderich',
        'Hamborn',
        'Marxloh',
        'Hochfeld',
        'Neudorf',
        'Rheinhausen',
        'Homberg',
        'Ruhrort',
        'Beeck',
        'Laar',
        'Walsum',
      ]}
      faqs={[
        {
          question: 'Was kostet eine Entrümpelung in Duisburg?',
          answer: 'Die Kosten für eine Entrümpelung in Duisburg beginnen ab 199€ für Keller oder Dachboden (bis ca. 15m²). Der genaue Preis hängt von der Größe, Füllmenge und Art der zu entsorgenden Gegenstände ab. Nach einer kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreisangebot.',
        },
        {
          question: 'Wie schnell können Sie entrümpeln?',
          answer: 'Oft sind kurzfristige Termine innerhalb weniger Tage möglich. Bei dringenden Fällen wie Wohnungsübergaben versuchen wir, einen schnellen Termin zu finden. Rufen Sie uns einfach an.',
        },
        {
          question: 'Entsorgen Sie auch Sondermüll?',
          answer: 'Ja, wir kümmern uns auch um Sondermüll wie Farben, Lacke oder Chemikalien. Diese werden fachgerecht und umweltkonform entsorgt. Die Kosten dafür sind im Angebot transparent ausgewiesen.',
        },
        {
          question: 'Was passiert mit brauchbaren Gegenständen?',
          answer: 'Brauchbare Möbel und Gegenstände können wir auf Wunsch an soziale Einrichtungen spenden. Alternativ werden verwertbare Materialien dem Recycling zugeführt. Der Wert kann mit den Entrümpelungskosten verrechnet werden.',
        },
        {
          question: 'Bieten Sie auch besenreine Übergabe an?',
          answer: 'Ja, auf Wunsch übergeben wir die entrümpelten Räume besenrein. Das ist besonders für Vermieter oder bei Wohnungsübergaben wichtig. Dieser Service ist im Angebot enthalten oder kann hinzugebucht werden.',
        },
        {
          question: 'Kann ich bei der Entrümpelung dabei sein?',
          answer: 'Natürlich. Sie können während der gesamten Entrümpelung anwesend sein, müssen es aber nicht. Viele Kunden übergeben uns den Schlüssel und erhalten die Räume besenrein zurück.',
        },
        {
          question: 'Entrümpeln Sie auch Messie-Wohnungen?',
          answer: 'Ja, wir übernehmen auch die Entrümpelung von stark vermüllten Wohnungen. Dabei arbeiten wir diskret und professionell. Sprechen Sie uns vertraulich an.',
        },
        {
          question: 'Was ist der Unterschied zu Haushaltsauflösung?',
          answer: 'Eine Entrümpelung räumt einzelne Räume oder entfernt bestimmte Gegenstände. Eine Haushaltsauflösung umfasst die komplette Räumung eines Haushalts, oft nach Todesfall oder Umzug ins Pflegeheim.',
        },
      ]}
      relatedServices={[
        { text: 'Haushaltsauflösung Duisburg', href: '/haushaltsaufloesung-duisburg' },
        { text: 'Umzug mit Entrümpelung', href: '/umzug-und-entruempelung-duisburg' },
        { text: 'Umzugsunternehmen Duisburg', href: '/umzugsunternehmen-duisburg' },
        { text: 'Privatumzug Duisburg', href: '/privatumzug-duisburg' },
        { text: 'Möbeltransport Duisburg', href: '/moebeltransport-duisburg' },
        { text: 'Umzugskosten Duisburg', href: '/umzug-kosten-duisburg' },
      ]}
    />
  );
}
