import type { Metadata } from 'next';
import Privatumzuege from '@/views/services/Privatumzuege';
import { getBaseUrl } from '@/lib/seo/helpers';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Privatumzug Duisburg | Stressfrei umziehen zum Festpreis',
  description: 'Professioneller Privatumzug in Duisburg und NRW. Komplettservice inkl. Verpackung, Möbelmontage & Transport. Festpreisgarantie ✓ Versichert ✓ Jetzt Angebot anfordern!',
  keywords: 'Privatumzug Duisburg, Wohnungsumzug Duisburg, Umzugsfirma Duisburg, Umzug Festpreis, Umzugshelfer Duisburg, Umzugsservice NRW',
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
    title: 'Privatumzug Duisburg | Stressfrei umziehen zum Festpreis',
    description: 'Professioneller Privatumzug in Duisburg und NRW. Komplettservice inkl. Verpackung, Möbelmontage & Transport.',
    url: `${BASE_URL}/privatumzuege`,
    locale: 'de_DE',
  },
};

export default function PrivatumzuegePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Startseite', path: '/' },
        { name: 'Privatumzüge', path: '/privatumzuege' },
      ]} />
      <Privatumzuege />
    </>
  );
}
