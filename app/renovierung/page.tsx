import type { Metadata } from 'next';
import Renovierung from '@/views/services/Renovierung';
import { getBaseUrl } from '@/lib/seo/helpers';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Renovierung Duisburg | Malerarbeiten & Bodenverlegung',
  description: 'Professionelle Renovierung in Duisburg. Malerarbeiten, Tapezieren, Laminat verlegen & Endreinigung. Für Übergabe oder Einzug ✓ Jetzt anfragen!',
  keywords: 'Renovierung Duisburg, Malerarbeiten Duisburg, Tapezieren, Laminat verlegen, Wohnungsrenovierung Duisburg, Streichen',
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
    title: 'Renovierung Duisburg | Malerarbeiten & Bodenverlegung',
    description: 'Professionelle Renovierung in Duisburg. Malerarbeiten, Tapezieren, Laminat verlegen & Endreinigung.',
    url: `${BASE_URL}/renovierung`,
    locale: 'de_DE',
  },
};

export default function RenovierungPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Startseite', path: '/' },
        { name: 'Renovierung', path: '/renovierung' },
      ]} />
      <Renovierung />
    </>
  );
}
