import type { Metadata } from 'next';
import ResidentialMoves from '@/views/en/services/ResidentialMoves';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Residential Moves Duisburg | Stress-Free Moving from €299',
  description: 'Professional residential moving in Duisburg. Full service with packing, furniture assembly & transport. Fixed prices, insured. Free inspection!',
  alternates: {
    canonical: `${BASE_URL}/en/services/residential-moves`,
    languages: {
      'de': `${BASE_URL}/privatumzuege`,
      'en': `${BASE_URL}/en/services/residential-moves`,
      'ru': `${BASE_URL}/ru/services/chastnye-pereezdy`,
      'x-default': `${BASE_URL}/privatumzuege`,
    },
  },
  openGraph: { title: 'Residential Moves Duisburg | Stress-Free Moving from €299', description: 'Professional residential moving in Duisburg.', url: `${BASE_URL}/en/services/residential-moves`, locale: 'en_GB', type: 'website', images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'TopSicher Umzüge – Moving Company in Duisburg' }] },
};

export default function ResidentialMovesPage() {
  return <ResidentialMoves />;
}
