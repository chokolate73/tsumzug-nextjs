import type { Metadata } from 'next';
import Index from '@/views/Index';
import { getBaseUrl } from '@/lib/seo/helpers';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import FAQSchema from '@/components/seo/FAQSchema';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Umzugsfirma Duisburg | TopSicher Umzüge – Ihr Umzugsunternehmen',
  description: 'TopSicher Umzüge – Ihre zuverlässige Umzugsfirma in Duisburg. Privatumzug, Firmenumzug, Entrümpelung, Möbeltransport zum Festpreis. Kostenlose Besichtigung & Festpreisgarantie. Jetzt Angebot anfordern!',
  keywords: 'Umzugsunternehmen Duisburg, Umzugsfirma Duisburg, Privatumzug Duisburg, Firmenumzug Duisburg, Büroumzug Duisburg, Umzugsservice Duisburg, Umzugskosten Duisburg, Umzug Festpreis Duisburg, Umzugsangebot Duisburg, Umzugshelfer Duisburg, Full-Service Umzug Duisburg, Seniorenumzug Duisburg, Möbelmontage Umzug, Packservice Umzug, Halteverbotszone Umzug Duisburg, Entrümpelung Duisburg, Möbeltransport Duisburg',
  alternates: {
    canonical: `${BASE_URL}/`,
    languages: {
      'de': `${BASE_URL}/`,
      'en': `${BASE_URL}/en`,
      'ru': `${BASE_URL}/ru`,
      'x-default': `${BASE_URL}/`,
    },
  },
  openGraph: {
    title: 'TopSicher Umzüge – Umzugsfirma Duisburg | Festpreis & Full-Service',
    description: 'Professionelles Umzugsunternehmen in Duisburg. Privatumzug, Büroumzug, Entrümpelung – alles aus einer Hand. Kostenlose Besichtigung & Festpreisgarantie.',
    url: `${BASE_URL}/`,
    locale: 'de_DE',
    type: 'website',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'TopSicher Umzüge – Umzugsfirma in Duisburg' }],
  },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema />
      <Index />
    </>
  );
}
