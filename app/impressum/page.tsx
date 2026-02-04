import type { Metadata } from 'next';
import Impressum from '@/views/Impressum';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

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
