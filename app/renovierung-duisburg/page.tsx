import type { Metadata } from 'next';
import RenovierungDuisburg from '@/views/duisburg/RenovierungDuisburg';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Renovierung Duisburg | Malerarbeiten ab 12€/m²',
  description: 'Professionelle Renovierung in Duisburg. Malerarbeiten, Tapezieren, Bodenverlegung. Perfekt für Wohnungsübergaben. Faire Preise. Jetzt anfragen!',
  alternates: { canonical: `${BASE_URL}/renovierung-duisburg` },
  openGraph: { title: 'Renovierung Duisburg | Malerarbeiten ab 12€/m²', description: 'Professionelle Renovierung in Duisburg.', url: `${BASE_URL}/renovierung-duisburg`, locale: 'de_DE' },
};

export default function RenovierungDuisburgPage() {
  return <RenovierungDuisburg />;
}
