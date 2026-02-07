import { COMPANY } from '@/config/company';
import { getBaseUrl } from '@/lib/seo/helpers';

export default function LocalBusinessSchema() {
  const baseUrl = getBaseUrl();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    '@id': `${baseUrl}/#organization`,
    name: COMPANY.legalName,
    alternateName: COMPANY.name,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/og-image.png`,
    description:
      'TopSicher Umzüge ist Ihr professionelles Umzugsunternehmen in Duisburg. Wir bieten Privatumzüge, Firmenumzüge, Entrümpelung, Möbeltransport, Hausmeisterservice und Renovierung zum Festpreis.',
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: 'Nordrhein-Westfalen',
      postalCode: COMPANY.address.postalCode,
      addressCountry: COMPANY.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY.geo.latitude,
      longitude: COMPANY.geo.longitude,
    },
    areaServed: [
      { '@type': 'City', name: 'Duisburg' },
      { '@type': 'City', name: 'Oberhausen' },
      { '@type': 'City', name: 'Mülheim an der Ruhr' },
      { '@type': 'City', name: 'Essen' },
      { '@type': 'City', name: 'Düsseldorf' },
      { '@type': 'State', name: 'Nordrhein-Westfalen' },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: COMPANY.geo.latitude,
        longitude: COMPANY.geo.longitude,
      },
      geoRadius: '50000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Umzugsdienstleistungen',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Privatumzug Duisburg',
            description:
              'Professioneller Privatumzug in Duisburg und Umgebung – sicher, schnell und zum Festpreis.',
            url: `${baseUrl}/privatumzuege`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Firmenumzug Duisburg',
            description:
              'Büroumzug und Firmenumzug in Duisburg – minimale Ausfallzeiten, maximale Effizienz.',
            url: `${baseUrl}/firmenumzuege`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Entrümpelung Duisburg',
            description:
              'Professionelle Entrümpelung und Haushaltsauflösung in Duisburg – schnell und umweltgerecht.',
            url: `${baseUrl}/entruempelung`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Möbeltransport Duisburg',
            description:
              'Günstiger Möbeltransport in Duisburg und NRW – Einzelstücke oder Komplettladung, versichert.',
            url: `${baseUrl}/moebeltransport`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hausmeisterservice Duisburg',
            description:
              'Möbelmontage, IKEA-Aufbau, Küchenmontage und Handwerkerservice in Duisburg.',
            url: `${baseUrl}/hausmeisterservice`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Renovierung Duisburg',
            description:
              'Malerarbeiten, Tapezieren, Bodenverlegung und Endreinigung in Duisburg.',
            url: `${baseUrl}/renovierung`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Möbelmontage & Ab-/Aufbau',
            description:
              'Professionelle Möbel Ab- und Aufbau bei Ihrem Umzug.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Packservice Umzug',
            description:
              'Wir packen Ihre Umzugskartons sicher und effizient.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Halteverbotszone einrichten',
            description:
              'Wir kümmern uns um die Halteverbotszone für Ihren Umzug in Duisburg.',
          },
        },
      ],
    },
    openingHoursSpecification: COMPANY.openingHoursSpecification.map(
      (spec) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: spec.dayOfWeek,
        opens: spec.opens,
        closes: spec.closes,
      }),
    ),
    priceRange: COMPANY.priceRange,
    paymentAccepted: 'Cash, Bank Transfer',
    currenciesAccepted: 'EUR',
    sameAs: [
      COMPANY.social.facebook,
      COMPANY.social.instagram,
      COMPANY.social.google,
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
