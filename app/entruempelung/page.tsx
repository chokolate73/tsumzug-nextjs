import type { Metadata } from 'next';
import Entruempelung from '@/views/services/Entruempelung';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Entrümpelung Duisburg - Haushaltsauflösung & Sperrmüll Entsorgung',
  description: 'Professionelle Entrümpelung in Duisburg und NRW. Haushaltsauflösung, Kellerentrümpelung & Sperrmüll. Schnell & umweltgerecht ✓ Festpreise ✓ Jetzt anfragen!',
  keywords: 'Entrümpelung, Haushaltsauflösung, Sperrmüll Entsorgung, Kellerentrümpelung, Wohnungsauflösung Duisburg',
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
    title: 'Entrümpelung Duisburg - Haushaltsauflösung & Sperrmüll Entsorgung',
    description: 'Professionelle Entrümpelung in Duisburg und NRW. Haushaltsauflösung, Kellerentrümpelung & Sperrmüll.',
    url: `${BASE_URL}/entruempelung`,
    locale: 'de_DE',
  },
};

export default function EntruempelungPage() {
  return <Entruempelung />;
}
