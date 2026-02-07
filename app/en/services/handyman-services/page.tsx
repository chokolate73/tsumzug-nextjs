import type { Metadata } from 'next';
import HandymanServices from '@/views/en/services/HandymanServices';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Handyman Services Duisburg | Professional from €35/hour',
  description: 'Professional handyman services in Duisburg. Minor repairs, furniture assembly, property maintenance. Hourly rate or monthly flat rate. Request now!',
  alternates: {
    canonical: `${BASE_URL}/en/services/handyman-services`,
    languages: {
      'de': `${BASE_URL}/hausmeisterservice`,
      'en': `${BASE_URL}/en/services/handyman-services`,
      'ru': `${BASE_URL}/ru/services/uslugi-masterov`,
      'x-default': `${BASE_URL}/hausmeisterservice`,
    },
  },
  openGraph: { title: 'Handyman Services Duisburg | Professional from €35/hour', description: 'Professional handyman services in Duisburg.', url: `${BASE_URL}/en/services/handyman-services`, locale: 'en_GB', type: 'website', images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'TopSicher Umzüge – Moving Company in Duisburg' }] },
};

export default function HandymanServicesPage() {
  return <HandymanServices />;
}
