import type { Metadata } from 'next';
import ResidentialMoves from '@/views/en/services/ResidentialMoves';

const BASE_URL = 'https://tsumzug.de';

export const metadata: Metadata = {
  title: 'Residential Moves Duisburg | Stress-Free Moving from €299',
  description: 'Professional residential moving in Duisburg. Full service with packing, furniture assembly & transport. Fixed prices, insured. Free inspection!',
  alternates: { canonical: `${BASE_URL}/en/services/residential-moves` },
  openGraph: { title: 'Residential Moves Duisburg | Stress-Free Moving from €299', description: 'Professional residential moving in Duisburg.', url: `${BASE_URL}/en/services/residential-moves`, locale: 'en_GB' },
};

export default function ResidentialMovesPage() {
  return <ResidentialMoves />;
}
