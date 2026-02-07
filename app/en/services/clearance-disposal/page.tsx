import type { Metadata } from 'next';
import ClearanceDisposal from '@/views/en/services/ClearanceDisposal';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Clearance & Disposal Duisburg | Fast & Fair from €199',
  description: 'Professional clearance in Duisburg. Apartments, basements, attics. Proper disposal, short-notice appointments. Fixed price. Request now!',
  alternates: {
    canonical: `${BASE_URL}/en/services/clearance-disposal`,
    languages: {
      'de': `${BASE_URL}/entruempelung`,
      'en': `${BASE_URL}/en/services/clearance-disposal`,
      'ru': `${BASE_URL}/ru/services/uborka-vyvoz`,
      'x-default': `${BASE_URL}/entruempelung`,
    },
  },
  openGraph: { title: 'Clearance & Disposal Duisburg | Fast & Fair from €199', description: 'Professional clearance in Duisburg.', url: `${BASE_URL}/en/services/clearance-disposal`, locale: 'en_GB', type: 'website', images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'TopSicher Umzüge – Moving Company in Duisburg' }] },
};

export default function ClearanceDisposalPage() {
  return <ClearanceDisposal />;
}
