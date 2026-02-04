import type { Metadata } from 'next';
import HomeEn from '@/views/HomeEn';

const BASE_URL = 'https://tsumzug.de';

export const metadata: Metadata = {
  title: 'Professional Moving Services in Duisburg & NRW',
  description: 'TopSicher Umzüge - Your reliable partner for moving in Duisburg and NRW. Residential moves, office relocations, clearance, furniture transport and more. Fixed price guarantee ✓ Insured ✓',
  keywords: 'moving company Duisburg, moving NRW, residential moving, office relocation, furniture transport, clearance, handyman services',
  alternates: {
    canonical: `${BASE_URL}/en`,
    languages: {
      'de': `${BASE_URL}/`,
      'en': `${BASE_URL}/en`,
      'ru': `${BASE_URL}/ru`,
      'x-default': `${BASE_URL}/`,
    },
  },
  openGraph: {
    title: 'Professional Moving Services in Duisburg & NRW',
    description: 'TopSicher Umzüge - Your reliable partner for moving in Duisburg and NRW.',
    url: `${BASE_URL}/en`,
    locale: 'en_GB',
  },
};

export default function HomeEnPage() {
  return <HomeEn />;
}
