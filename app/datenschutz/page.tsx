import type { Metadata } from 'next';
import Datenschutz from '@/views/Datenschutz';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von TopSicher Umzüge - Informationen zum Schutz Ihrer personenbezogenen Daten.',
  alternates: {
    canonical: `${BASE_URL}/datenschutz`,
  },
};

export default function DatenschutzPage() {
  return <Datenschutz />;
}
