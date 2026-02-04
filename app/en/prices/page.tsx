import type { Metadata } from 'next';
import PricesEn from '@/views/en/Prices';

const BASE_URL = 'https://tsumzug.de';

export const metadata: Metadata = {
  title: 'Prices Duisburg | All Moving & Service Prices at a Glance',
  description: 'Transparent prices for moves, furniture transport, clearance, handyman services and renovation in Duisburg. Fixed prices from 119€. Free inspection!',
  alternates: { canonical: `${BASE_URL}/en/prices` },
  openGraph: { title: 'Prices Duisburg | All Moving & Service Prices at a Glance', description: 'Transparent prices for moves in Duisburg.', url: `${BASE_URL}/en/prices`, locale: 'en_GB' },
};

export default function PricesEnPage() {
  return <PricesEn />;
}
