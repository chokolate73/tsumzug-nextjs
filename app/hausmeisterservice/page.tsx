import type { Metadata } from 'next';
import Hausmeisterservice from '@/views/services/Hausmeisterservice';
import { getBaseUrl } from '@/lib/seo/helpers';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Hausmeisterservice Duisburg | Möbelmontage & Kleinreparaturen – TopSicher',
  description: 'Hausmeisterservice in Duisburg ✓ IKEA Möbelmontage ✓ Küchenmontage ✓ Kleinreparaturen ✓ Lampen & Regale aufhängen ✓ Zuverlässig & schnell. Jetzt anfragen!',
  keywords: 'Hausmeisterservice Duisburg, Kleinreparaturen Duisburg, Gebäudeservice Duisburg, Möbelmontage Duisburg, IKEA Aufbau, Küchenmontage, Facility Service Duisburg, Objektbetreuung Duisburg',
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
    title: 'Hausmeisterservice Duisburg | Möbelmontage & Kleinreparaturen – TopSicher',
    description: 'Hausmeisterservice in Duisburg ✓ IKEA Möbelmontage ✓ Küchenmontage ✓ Kleinreparaturen ✓ Zuverlässig & schnell.',
    url: `${BASE_URL}/hausmeisterservice`,
    locale: 'de_DE',
    type: 'website',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'TopSicher Umzüge – Umzugsfirma in Duisburg' }],
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
