import type { Metadata } from 'next';
import Entruempelung from '@/views/services/Entruempelung';
import { getBaseUrl } from '@/lib/seo/helpers';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Entrümpelung Duisburg | Haushaltsauflösung & Entsorgung – TopSicher',
  description: 'Entrümpelung in Duisburg ✓ Haushaltsauflösung ✓ Keller & Dachboden ✓ Sperrmüll Entsorgung ✓ Besenrein ✓ Schnell & umweltgerecht. Jetzt Angebot einholen!',
  keywords: 'Entrümpelung Duisburg, Haushaltsauflösung Duisburg, Wohnungsauflösung Duisburg, Kellerentrümpelung Duisburg, Sperrmüll Entsorgung Duisburg, Dachboden entrümpeln Duisburg, Entrümpelung besenrein Duisburg, Nachlassauflösung Duisburg',
  alternates: {
    canonical: `${BASE_URL}/entruempelung`,
    languages: {
      'de': `${BASE_URL}/entruempelung`,
      'en': `${BASE_URL}/en/services/clearance-disposal`,
      'ru': `${BASE_URL}/ru/services/uborka-vyvoz`,
      'x-default': `${BASE_URL}/entruempelung`,
    },
  },
  openGraph: {
    title: 'Entrümpelung Duisburg | Haushaltsauflösung & Entsorgung – TopSicher',
    description: 'Entrümpelung in Duisburg ✓ Haushaltsauflösung ✓ Keller & Dachboden ✓ Sperrmüll Entsorgung ✓ Besenrein.',
    url: `${BASE_URL}/entruempelung`,
    locale: 'de_DE',
  },
};

export default function EntruempelungPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Startseite', path: '/' },
        { name: 'Entrümpelung', path: '/entruempelung' },
      ]} />
      <Entruempelung />
    </>
  );
}
