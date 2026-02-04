import type { Metadata } from 'next';
import EntruempelungDuisburg from '@/views/duisburg/EntruempelungDuisburg';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Entrümpelung Duisburg | Schnell & fair ab 199€',
  description: 'Professionelle Entrümpelung in Duisburg. Wohnung, Keller, Dachboden. Fachgerechte Entsorgung, kurzfristige Termine. Festpreis. Jetzt anfragen!',
  alternates: { canonical: `${BASE_URL}/entruempelung-duisburg` },
  openGraph: { title: 'Entrümpelung Duisburg | Schnell & fair ab 199€', description: 'Professionelle Entrümpelung in Duisburg.', url: `${BASE_URL}/entruempelung-duisburg`, locale: 'de_DE' },
};

export default function EntruempelungDuisburgPage() {
  return <EntruempelungDuisburg />;
}
