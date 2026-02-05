import type { Metadata } from 'next';
import MoebeltransportDuisburg from '@/views/duisburg/MoebeltransportDuisburg';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Möbeltransport Duisburg | Flexibel & versichert ab 119€',
  description: 'Günstiger Möbeltransport in Duisburg. Einzelstücke, IKEA-Abholung, Komplettladung. Flexibel, versichert, kurzfristig möglich. Jetzt anfragen!',
  alternates: {
    canonical: `${BASE_URL}/moebeltransport-duisburg`,
    languages: {
      'de': `${BASE_URL}/moebeltransport-duisburg`,
      'en': `${BASE_URL}/en/services/furniture-transport`,
      'ru': `${BASE_URL}/ru/services/perevozka-mebeli`,
      'x-default': `${BASE_URL}/moebeltransport-duisburg`,
    },
  },
  openGraph: { title: 'Möbeltransport Duisburg | Flexibel & versichert ab 119€', description: 'Günstiger Möbeltransport in Duisburg.', url: `${BASE_URL}/moebeltransport-duisburg`, locale: 'de_DE' },
};

export default function MoebeltransportDuisburgPage() {
  return <MoebeltransportDuisburg />;
}
