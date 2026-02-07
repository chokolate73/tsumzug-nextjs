import type { Metadata } from 'next';
import Moebeltransport from '@/views/services/Moebeltransport';
import { getBaseUrl } from '@/lib/seo/helpers';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Möbeltransport Duisburg | Einzelstücke & Großgeräte – TopSicher Umzüge',
  description: 'Möbeltransport in Duisburg ✓ Sofa, Schrank, Waschmaschine ✓ Klaviertransport ✓ IKEA Abholung ✓ Versichert ✓ Ab Einzelstück. Jetzt Angebot anfordern!',
  keywords: 'Möbeltransport Duisburg, Kleintransport Duisburg, Einzelstück Transport Duisburg, Klaviertransport Duisburg, IKEA Abholung Duisburg, Sofa Transport Duisburg, Waschmaschine Transport Duisburg, Möbel liefern lassen Duisburg',
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
    title: 'Möbeltransport Duisburg | Einzelstücke & Großgeräte – TopSicher Umzüge',
    description: 'Möbeltransport in Duisburg ✓ Sofa, Schrank, Waschmaschine ✓ Klaviertransport ✓ IKEA Abholung ✓ Versichert.',
    url: `${BASE_URL}/moebeltransport`,
    locale: 'de_DE',
  },
};

export default function MoebeltransportPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Startseite', path: '/' },
        { name: 'Möbeltransport', path: '/moebeltransport' },
      ]} />
      <Moebeltransport />
    </>
  );
}
