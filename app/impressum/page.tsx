import type { Metadata } from 'next';
import Impressum from '@/views/Impressum';

const BASE_URL = 'https://tsumzug.de';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Informationen von TopSicher Umzüge - Professionelle Umzugs- und Transportdienstleistungen in Duisburg.',
  alternates: {
    canonical: `${BASE_URL}/impressum`,
  },
};

export default function ImpressumPage() {
  return <Impressum />;
}
