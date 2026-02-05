import type { Metadata } from 'next';
import FurnitureTransport from '@/views/en/services/FurnitureTransport';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Furniture Transport Duisburg | Flexible & Insured from €119',
  description: 'Affordable furniture transport in Duisburg. Single items, IKEA pickup, full loads. Flexible, insured, short-notice possible. Request now!',
  alternates: {
    canonical: `${BASE_URL}/en/services/furniture-transport`,
    languages: {
      'de': `${BASE_URL}/moebeltransport-duisburg`,
      'en': `${BASE_URL}/en/services/furniture-transport`,
      'ru': `${BASE_URL}/ru/services/perevozka-mebeli`,
      'x-default': `${BASE_URL}/moebeltransport-duisburg`,
    },
  },
  openGraph: { title: 'Furniture Transport Duisburg | Flexible & Insured from €119', description: 'Affordable furniture transport in Duisburg.', url: `${BASE_URL}/en/services/furniture-transport`, locale: 'en_GB' },
};

export default function FurnitureTransportPage() {
  return <FurnitureTransport />;
}
