import type { Metadata } from 'next';
import Angebot from '@/views/Angebot';

const BASE_URL = 'https://tsumzug.de';

export const metadata: Metadata = {
  title: 'Kostenloses Angebot anfordern | TS Umzug Duisburg',
  description: 'Fordern Sie jetzt Ihr kostenloses Umzugsangebot an. Festpreisgarantie, versicherter Transport. TS Umzug - Ihr Umzugsunternehmen in Duisburg.',
  alternates: {
    canonical: `${BASE_URL}/angebot`,
  },
  openGraph: {
    title: 'Kostenloses Angebot anfordern | TS Umzug Duisburg',
    description: 'Fordern Sie jetzt Ihr kostenloses Umzugsangebot an. Festpreisgarantie, versicherter Transport.',
    url: `${BASE_URL}/angebot`,
    locale: 'de_DE',
  },
};

export default function AngebotPage() {
  return <Angebot />;
}
