import type { Metadata } from 'next';
import Renovierung from '@/views/services/Renovierung';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Renovierung Duisburg - Malerarbeiten & Bodenverlegung',
  description: 'Professionelle Renovierung in Duisburg. Malerarbeiten, Tapezieren, Laminat verlegen & Endreinigung. Für Übergabe oder Einzug ✓ Jetzt anfragen!',
  keywords: 'Renovierung, Malerarbeiten, Tapezieren, Laminat verlegen, Wohnungsrenovierung Duisburg, Streichen',
  alternates: {
    canonical: `${BASE_URL}/renovierung`,
    languages: {
      'de': `${BASE_URL}/renovierung`,
      'en': `${BASE_URL}/en/services/renovation`,
      'ru': `${BASE_URL}/ru/services/remont`,
      'x-default': `${BASE_URL}/renovierung`,
    },
  },
  openGraph: {
    title: 'Renovierung Duisburg - Malerarbeiten & Bodenverlegung',
    description: 'Professionelle Renovierung in Duisburg. Malerarbeiten, Tapezieren, Laminat verlegen & Endreinigung.',
    url: `${BASE_URL}/renovierung`,
    locale: 'de_DE',
  },
};

export default function RenovierungPage() {
  return <Renovierung />;
}
