import type { Metadata } from 'next';
import OfficeRelocations from '@/views/en/services/OfficeRelocations';

const BASE_URL = 'https://tsumzug.de';

export const metadata: Metadata = {
  title: 'Office Relocation Duisburg | Business Moving with Minimal Downtime',
  description: 'Professional office relocation in Duisburg. IT transport, weekend moves possible. Minimal downtime. Fixed price. Plan your move now!',
  alternates: { canonical: `${BASE_URL}/en/services/office-relocations` },
  openGraph: { title: 'Office Relocation Duisburg | Business Moving with Minimal Downtime', description: 'Professional office relocation in Duisburg.', url: `${BASE_URL}/en/services/office-relocations`, locale: 'en_GB' },
};

export default function OfficeRelocationsPage() {
  return <OfficeRelocations />;
}
