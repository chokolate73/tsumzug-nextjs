import type { Metadata } from 'next';
import Firmenumzuege from '@/views/services/Firmenumzuege';
import { getBaseUrl } from '@/lib/seo/helpers';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Firmenumzug Duisburg | Büroumzug & Gewerbeumzug – TopSicher Umzüge',
  description: 'Firmenumzug in Duisburg ✓ Büroumzug mit IT-Transport ✓ Umzug außerhalb der Arbeitszeit ✓ Auch am Wochenende ✓ Möbelmontage inklusive. Jetzt Angebot anfordern!',
  keywords: 'Firmenumzug Duisburg, Büroumzug Duisburg, Gewerbeumzug Duisburg, IT-Umzug Duisburg, Umzug außerhalb der Arbeitszeit, Büroumzug mit Möbelmontage, Praxisumzug Duisburg, Umzug am Wochenende Duisburg',
  alternates: {
    canonical: `${BASE_URL}/firmenumzuege`,
    languages: {
      'de': `${BASE_URL}/firmenumzuege`,
      'en': `${BASE_URL}/en/services/office-relocations`,
      'ru': `${BASE_URL}/ru/services/ofisnye-pereezdy`,
      'x-default': `${BASE_URL}/firmenumzuege`,
    },
  },
  openGraph: {
    title: 'Firmenumzug Duisburg | Büroumzug & Gewerbeumzug – TopSicher Umzüge',
    description: 'Firmenumzug in Duisburg ✓ Büroumzug mit IT-Transport ✓ Umzug außerhalb der Arbeitszeit ✓ Möbelmontage inklusive.',
    url: `${BASE_URL}/firmenumzuege`,
    locale: 'de_DE',
    type: 'website',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'TopSicher Umzüge – Umzugsfirma in Duisburg' }],
  },
};

export default function FirmenumzuegePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Startseite', path: '/' },
        { name: 'Firmenumzüge', path: '/firmenumzuege' },
      ]} />
      <Firmenumzuege />
    </>
  );
}
