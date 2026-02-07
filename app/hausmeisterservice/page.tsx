import type { Metadata } from 'next';
import Hausmeisterservice from '@/views/services/Hausmeisterservice';
import { getBaseUrl } from '@/lib/seo/helpers';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Hausmeisterservice Duisburg | Möbelmontage & Handwerker',
  description: 'Professioneller Hausmeisterservice in Duisburg. IKEA Möbelmontage, Küchenmontage, Lampen aufhängen & Geräteanschluss. Schnell & zuverlässig ✓ Jetzt anfragen!',
  keywords: 'Hausmeisterservice Duisburg, Möbelmontage Duisburg, IKEA Aufbau, Handwerker Duisburg, Küchenmontage, Geräteanschluss',
  alternates: {
    canonical: `${BASE_URL}/hausmeisterservice`,
    languages: {
      'de': `${BASE_URL}/hausmeisterservice`,
      'en': `${BASE_URL}/en/services/handyman-services`,
      'ru': `${BASE_URL}/ru/services/uslugi-masterov`,
      'x-default': `${BASE_URL}/hausmeisterservice`,
    },
  },
  openGraph: {
    title: 'Hausmeisterservice Duisburg | Möbelmontage & Handwerker',
    description: 'Professioneller Hausmeisterservice in Duisburg. IKEA Möbelmontage, Küchenmontage, Lampen aufhängen.',
    url: `${BASE_URL}/hausmeisterservice`,
    locale: 'de_DE',
  },
};

export default function HausmeisterservicePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Startseite', path: '/' },
        { name: 'Hausmeisterservice', path: '/hausmeisterservice' },
      ]} />
      <Hausmeisterservice />
    </>
  );
}
