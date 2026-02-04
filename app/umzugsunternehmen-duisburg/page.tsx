import type { Metadata } from 'next';
import UmzugsunternehmenDuisburg from '@/views/duisburg/UmzugsunternehmenDuisburg';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Umzugsunternehmen Duisburg | Faire Preise & Versichert',
  description: 'Ihr Umzugsunternehmen in Duisburg: Privatumzüge, Firmenumzüge & Entrümpelung. Festpreisgarantie, versicherter Transport. Jetzt kostenloses Angebot!',
  alternates: {
    canonical: `${BASE_URL}/umzugsunternehmen-duisburg`,
  },
  openGraph: {
    title: 'Umzugsunternehmen Duisburg | Faire Preise & Versichert',
    description: 'Ihr Umzugsunternehmen in Duisburg: Privatumzüge, Firmenumzüge & Entrümpelung.',
    url: `${BASE_URL}/umzugsunternehmen-duisburg`,
    locale: 'de_DE',
  },
};

export default function UmzugsunternehmenDuisburgPage() {
  return <UmzugsunternehmenDuisburg />;
}
