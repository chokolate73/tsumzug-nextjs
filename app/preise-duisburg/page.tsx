import type { Metadata } from 'next';
import PreiseDuisburg from '@/views/duisburg/PreiseDuisburg';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Preise Duisburg | Alle Umzugs- und Servicepreise auf einen Blick',
  description: 'Transparente Preise für Umzüge, Möbeltransport, Entrümpelung, Hausmeisterservice und Renovierung in Duisburg. Festpreise ab 119€. Kostenlose Besichtigung!',
  alternates: {
    canonical: `${BASE_URL}/preise-duisburg`,
    languages: {
      'de': `${BASE_URL}/preise-duisburg`,
      'en': `${BASE_URL}/en/prices`,
      'ru': `${BASE_URL}/ru/prices`,
      'x-default': `${BASE_URL}/preise-duisburg`,
    },
  },
  openGraph: { title: 'Preise Duisburg | Alle Umzugs- und Servicepreise auf einen Blick', description: 'Transparente Preise für Umzüge in Duisburg.', url: `${BASE_URL}/preise-duisburg`, locale: 'de_DE' },
};

export default function PreiseDuisburgPage() {
  return <PreiseDuisburg />;
}
