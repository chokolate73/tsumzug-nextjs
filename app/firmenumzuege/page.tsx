import type { Metadata } from 'next';
import Firmenumzuege from '@/views/services/Firmenumzuege';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Firmenumzüge & Büroumzüge Duisburg - Minimale Ausfallzeit',
  description: 'Professionelle Firmenumzüge in Duisburg und NRW. IT-Transport, Büromöbel Montage & Umzug außerhalb der Arbeitszeit. Minimale Ausfallzeit ✓ Jetzt anfragen!',
  keywords: 'Firmenumzug, Büroumzug, Gewerbeumzug, IT-Umzug, Umzugsfirma Unternehmen, Büroumzug NRW',
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
    title: 'Firmenumzüge & Büroumzüge Duisburg - Minimale Ausfallzeit',
    description: 'Professionelle Firmenumzüge in Duisburg und NRW. IT-Transport, Büromöbel Montage & Umzug außerhalb der Arbeitszeit.',
    url: `${BASE_URL}/firmenumzuege`,
    locale: 'de_DE',
  },
};

export default function FirmenumzuegePage() {
  return <Firmenumzuege />;
}
