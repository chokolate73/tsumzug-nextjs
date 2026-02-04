import type { Metadata } from 'next';
import UmzugUndEntruempelungDuisburg from '@/views/duisburg/UmzugUndEntruempelungDuisburg';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Umzug & Entrümpelung Duisburg | Alles aus einer Hand',
  description: 'Umzug mit Entrümpelung in Duisburg kombinieren. Ein Ansprechpartner, ein Termin, ein Preis. Komplettservice, Zeit & Geld sparen. Jetzt anfragen!',
  alternates: { canonical: `${BASE_URL}/umzug-und-entruempelung-duisburg` },
  openGraph: { title: 'Umzug & Entrümpelung Duisburg | Alles aus einer Hand', description: 'Umzug mit Entrümpelung in Duisburg kombinieren.', url: `${BASE_URL}/umzug-und-entruempelung-duisburg`, locale: 'de_DE' },
};

export default function UmzugUndEntruempelungDuisburgPage() {
  return <UmzugUndEntruempelungDuisburg />;
}
