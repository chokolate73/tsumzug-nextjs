import type { Metadata } from 'next';
import Privatumzuege from '@/views/services/Privatumzuege';
import { getBaseUrl } from '@/lib/seo/helpers';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Privatumzug Duisburg | TopSicher Umzüge – Festpreis & Full-Service',
  description: 'Privatumzug in Duisburg zum Festpreis ✓ Full-Service Umzug ✓ Möbelmontage ✓ Packservice ✓ Versicherter Transport ✓ Auch am Wochenende. Jetzt kostenloses Angebot anfordern!',
  keywords: 'Privatumzug Duisburg, Umzugsfirma Duisburg, Umzugsservice Duisburg, Umzug Festpreis Duisburg, Full-Service Umzug, Umzugskosten Duisburg, Expressumzug Duisburg, Seniorenumzug Duisburg, Studentenumzug Duisburg, Wochenendumzug, versicherter Umzug, Möbelmontage Umzug',
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
    title: 'Privatumzug Duisburg | TopSicher Umzüge – Festpreis & Full-Service',
    description: 'Privatumzug in Duisburg zum Festpreis ✓ Full-Service Umzug ✓ Möbelmontage ✓ Packservice ✓ Versicherter Transport.',
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
