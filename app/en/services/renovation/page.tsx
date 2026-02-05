import type { Metadata } from 'next';
import Renovation from '@/views/en/services/Renovation';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Renovation Duisburg | Painting from €12/m²',
  description: 'Professional renovation in Duisburg. Painting, wallpapering, flooring. Perfect for apartment handovers. Fair prices. Request now!',
  alternates: {
    canonical: `${BASE_URL}/en/services/renovation`,
    languages: {
      'de': `${BASE_URL}/renovierung-duisburg`,
      'en': `${BASE_URL}/en/services/renovation`,
      'ru': `${BASE_URL}/ru/services/remont`,
      'x-default': `${BASE_URL}/renovierung-duisburg`,
    },
  },
  openGraph: { title: 'Renovation Duisburg | Painting from €12/m²', description: 'Professional renovation in Duisburg.', url: `${BASE_URL}/en/services/renovation`, locale: 'en_GB' },
};

export default function RenovationPage() {
  return <Renovation />;
}
