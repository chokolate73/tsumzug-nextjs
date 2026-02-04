import type { Metadata } from 'next';
import Datenschutz from '@/views/Datenschutz';

const BASE_URL = 'https://tsumzug.de';

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
