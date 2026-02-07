import { getBaseUrl } from '@/lib/seo/helpers';

const faqItems = [
  {
    question: 'Was kostet ein Umzug in Duisburg?',
    answer:
      'Die Umzugskosten in Duisburg hängen von der Wohnungsgröße, Entfernung und gewünschten Zusatzleistungen ab. Bei TopSicher Umzüge erhalten Sie ein kostenloses, unverbindliches Angebot zum Festpreis – ohne versteckte Kosten.',
  },
  {
    question: 'Bieten Sie Umzüge am Wochenende in Duisburg an?',
    answer:
      'Ja, TopSicher Umzüge bietet auch Wochenendumzüge und kurzfristige Umzüge in Duisburg an. Kontaktieren Sie uns für einen Termin – auch kurzfristig möglich.',
  },
  {
    question: 'Ist mein Umzug bei TopSicher versichert?',
    answer:
      'Ja, jeder Umzug bei TopSicher Umzüge ist vollständig versichert. Ihre Möbel und Gegenstände sind während des gesamten Transports abgesichert.',
  },
  {
    question: 'Kümmern Sie sich um die Halteverbotszone in Duisburg?',
    answer:
      'Ja, wir übernehmen die komplette Beantragung und Einrichtung der Halteverbotszone bei der Stadt Duisburg für Ihren Umzug.',
  },
  {
    question: 'Welche Umzugsleistungen bieten Sie in Duisburg an?',
    answer:
      'Wir bieten Privatumzüge, Firmenumzüge, Entrümpelung, Möbeltransport, Hausmeisterservice und Renovierung in Duisburg und ganz NRW an.',
  },
];

export default function FAQSchema() {
  const baseUrl = getBaseUrl();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${baseUrl}/#faq`,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
