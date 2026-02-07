import type { Metadata } from 'next';
import OfficeRelocations from '@/views/en/services/OfficeRelocations';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Office Relocation Duisburg | Business Moving with Minimal Downtime',
  description: 'Professional office relocation in Duisburg. IT transport, weekend moves possible. Minimal downtime. Fixed price. Plan your move now!',
  alternates: {
    canonical: `${BASE_URL}/en/services/office-relocations`,
    languages: {
      'de': `${BASE_URL}/firmenumzuege`,
      'en': `${BASE_URL}/en/services/office-relocations`,
      'ru': `${BASE_URL}/ru/services/ofisnye-pereezdy`,
      'x-default': `${BASE_URL}/firmenumzuege`,
    },
  },
  openGraph: { title: 'Office Relocation Duisburg | Business Moving with Minimal Downtime', description: 'Professional office relocation in Duisburg.', url: `${BASE_URL}/en/services/office-relocations`, locale: 'en_GB', type: 'website', images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'TopSicher Umzüge – Moving Company in Duisburg' }] },
};

export default function OfficeRelocationsPage() {
  return <OfficeRelocations />;
}
