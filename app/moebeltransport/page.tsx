import type { Metadata } from 'next';
import Moebeltransport from '@/views/services/Moebeltransport';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Möbeltransport Duisburg & NRW - Günstig & Zuverlässig',
  description: 'Günstiger Möbeltransport in Duisburg und NRW. Einzelstücke oder Komplettladung. Versichert ✓ Flexibel ✓ Deutschlandweit ✓ Jetzt anfragen!',
  keywords: 'Möbeltransport, Möbelspedition, Gütertransport, Lieferservice Möbel, Transport Duisburg, Möbellieferung',
  alternates: {
    canonical: `${BASE_URL}/moebeltransport`,
    languages: {
      'de': `${BASE_URL}/moebeltransport`,
      'en': `${BASE_URL}/en/services/furniture-transport`,
      'ru': `${BASE_URL}/ru/services/perevozka-mebeli`,
      'x-default': `${BASE_URL}/moebeltransport`,
    },
  },
  openGraph: {
    title: 'Möbeltransport Duisburg & NRW - Günstig & Zuverlässig',
    description: 'Günstiger Möbeltransport in Duisburg und NRW. Einzelstücke oder Komplettladung.',
    url: `${BASE_URL}/moebeltransport`,
    locale: 'de_DE',
  },
};

export default function MoebeltransportPage() {
  return <Moebeltransport />;
}
