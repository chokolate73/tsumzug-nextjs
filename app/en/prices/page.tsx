import type { Metadata } from 'next';
import PricesEn from '@/views/en/Prices';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Prices Duisburg | All Moving & Service Prices at a Glance',
  description: 'Transparent prices for moves, furniture transport, clearance, handyman services and renovation in Duisburg. Fixed prices from 119€. Free inspection!',
  alternates: {
    canonical: `${BASE_URL}/en/prices`,
    languages: {
      'de': `${BASE_URL}/preise-duisburg`,
      'en': `${BASE_URL}/en/prices`,
      'ru': `${BASE_URL}/ru/prices`,
      'x-default': `${BASE_URL}/preise-duisburg`,
    },
  },
  openGraph: { title: 'Prices Duisburg | All Moving & Service Prices at a Glance', description: 'Transparent prices for moves in Duisburg.', url: `${BASE_URL}/en/prices`, locale: 'en_GB' },
};

export default function PricesEnPage() {
  return <PricesEn />;
}
