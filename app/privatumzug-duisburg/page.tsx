import type { Metadata } from 'next';
import PrivatumzugDuisburg from '@/views/duisburg/PrivatumzugDuisburg';

const BASE_URL = 'https://tsumzug.de';

export const metadata: Metadata = {
  title: 'Privatumzug Duisburg | Stressfrei umziehen ab 299€',
  description: 'Professioneller Privatumzug in Duisburg. Komplettservice mit Verpackung, Möbelmontage & Transport. Festpreise, versichert. Kostenlose Besichtigung!',
  alternates: { canonical: `${BASE_URL}/privatumzug-duisburg` },
  openGraph: { title: 'Privatumzug Duisburg | Stressfrei umziehen ab 299€', description: 'Professioneller Privatumzug in Duisburg.', url: `${BASE_URL}/privatumzug-duisburg`, locale: 'de_DE' },
};

export default function PrivatumzugDuisburgPage() {
  return <PrivatumzugDuisburg />;
}
