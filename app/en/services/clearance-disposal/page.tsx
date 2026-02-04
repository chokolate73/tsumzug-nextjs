import type { Metadata } from 'next';
import ClearanceDisposal from '@/views/en/services/ClearanceDisposal';

const BASE_URL = 'https://tsumzug.de';

export const metadata: Metadata = {
  title: 'Clearance & Disposal Duisburg | Fast & Fair from €199',
  description: 'Professional clearance in Duisburg. Apartments, basements, attics. Proper disposal, short-notice appointments. Fixed price. Request now!',
  alternates: { canonical: `${BASE_URL}/en/services/clearance-disposal` },
  openGraph: { title: 'Clearance & Disposal Duisburg | Fast & Fair from €199', description: 'Professional clearance in Duisburg.', url: `${BASE_URL}/en/services/clearance-disposal`, locale: 'en_GB' },
};

export default function ClearanceDisposalPage() {
  return <ClearanceDisposal />;
}
