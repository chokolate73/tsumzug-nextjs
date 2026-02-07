import type { Metadata } from 'next';
import Privatumzuege from '@/views/services/Privatumzuege';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Privatumzüge Duisburg & NRW - Stressfreier Wohnungsumzug',
  description: 'Professionelle Privatumzüge in Duisburg und NRW. Komplettservice inkl. Verpackung, Möbelmontage & Transport. Festpreisgarantie ✓ Versichert ✓ Jetzt Angebot anfordern!',
  keywords: 'Privatumzug, Wohnungsumzug, Umzugsfirma Duisburg, Umzug NRW, Möbeltransport, Umzugsservice',
  alternates: {
    canonical: `${BASE_URL}/privatumzuege`,
    languages: {
      'de': `${BASE_URL}/privatumzuege`,
      'en': `${BASE_URL}/en/services/residential-moves`,
      'ru': `${BASE_URL}/ru/services/chastnye-pereezdy`,
      'x-default': `${BASE_URL}/privatumzuege`,
    },
  },
  openGraph: {
    title: 'Privatumzüge Duisburg & NRW - Stressfreier Wohnungsumzug',
    description: 'Professionelle Privatumzüge in Duisburg und NRW. Komplettservice inkl. Verpackung, Möbelmontage & Transport.',
    url: `${BASE_URL}/privatumzuege`,
    locale: 'de_DE',
  },
};

export default function PrivatumzuegePage() {
  return <Privatumzuege />;
}
