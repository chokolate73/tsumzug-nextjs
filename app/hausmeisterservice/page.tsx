import type { Metadata } from 'next';
import Hausmeisterservice from '@/views/services/Hausmeisterservice';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Hausmeisterservice Duisburg - Möbelmontage & Handwerkerservice',
  description: 'Professioneller Hausmeisterservice in Duisburg. IKEA Möbelmontage, Küchenmontage, Lampen aufhängen & Geräteanschluss. Schnell & zuverlässig ✓ Jetzt anfragen!',
  keywords: 'Hausmeisterservice, Möbelmontage, IKEA Aufbau, Handwerker Duisburg, Küchenmontage, Geräteanschluss',
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
    title: 'Hausmeisterservice Duisburg - Möbelmontage & Handwerkerservice',
    description: 'Professioneller Hausmeisterservice in Duisburg. IKEA Möbelmontage, Küchenmontage, Lampen aufhängen & Geräteanschluss.',
    url: `${BASE_URL}/hausmeisterservice`,
    locale: 'de_DE',
  },
};

export default function HausmeisterservicePage() {
  return <Hausmeisterservice />;
}
