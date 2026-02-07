import type { Metadata } from 'next';
import Firmenumzuege from '@/views/services/Firmenumzuege';
import { getBaseUrl } from '@/lib/seo/helpers';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Firmenumzug Duisburg | Büroumzug mit minimaler Ausfallzeit',
  description: 'Professioneller Firmenumzug & Büroumzug in Duisburg und NRW. IT-Transport, Büromöbel Montage & Umzug außerhalb der Arbeitszeit. Minimale Ausfallzeit ✓ Jetzt anfragen!',
  keywords: 'Firmenumzug Duisburg, Büroumzug Duisburg, Gewerbeumzug, IT-Umzug, Umzugsfirma Unternehmen, Büroumzug NRW',
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
    title: 'Firmenumzug Duisburg | Büroumzug mit minimaler Ausfallzeit',
    description: 'Professioneller Firmenumzug & Büroumzug in Duisburg und NRW. IT-Transport, Büromöbel Montage.',
    url: `${BASE_URL}/firmenumzuege`,
    locale: 'de_DE',
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
