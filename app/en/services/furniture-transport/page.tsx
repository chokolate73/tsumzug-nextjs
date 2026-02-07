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
      'de': `${BASE_URL}/moebeltransport`,
      'en': `${BASE_URL}/en/services/furniture-transport`,
      'ru': `${BASE_URL}/ru/services/perevozka-mebeli`,
      'x-default': `${BASE_URL}/moebeltransport`,
    },
  },
  openGraph: { title: 'Furniture Transport Duisburg | Flexible & Insured from €119', description: 'Affordable furniture transport in Duisburg.', url: `${BASE_URL}/en/services/furniture-transport`, locale: 'en_GB', type: 'website', images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'TopSicher Umzüge – Moving Company in Duisburg' }] },
};

export default function FurnitureTransportPage() {
  return <FurnitureTransport />;
}
