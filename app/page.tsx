import type { Metadata } from 'next';
import Index from '@/views/Index';

const BASE_URL = 'https://tsumzug.de';

export const metadata: Metadata = {
  title: 'Professionelle Umzüge in Duisburg & NRW',
  description: 'TopSicher Umzüge - Ihr zuverlässiger Partner für Umzüge in Duisburg und NRW. Privatumzüge, Firmenumzüge, Entrümpelung, Möbeltransport und mehr. Festpreisgarantie ✓ Versichert ✓',
  keywords: 'Umzugsfirma Duisburg, Umzug NRW, Privatumzug, Firmenumzug, Möbeltransport, Entrümpelung, Hausmeisterservice',
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
    title: 'Professionelle Umzüge in Duisburg & NRW',
    description: 'TopSicher Umzüge - Ihr zuverlässiger Partner für Umzüge in Duisburg und NRW.',
    url: `${BASE_URL}/`,
    locale: 'de_DE',
  },
};

export default function HomePage() {
  return <Index />;
}
