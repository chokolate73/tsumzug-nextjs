import type { Metadata } from 'next';
import HaushaltsaufloesungDuisburg from '@/views/duisburg/HaushaltsaufloesungDuisburg';

const BASE_URL = 'https://tsumzug.de';

export const metadata: Metadata = {
  title: 'Haushaltsauflösung Duisburg | Diskret & komplett',
  description: 'Komplette Haushaltsauflösung in Duisburg. Wohnungsauflösung, Nachlassauflösung, besenreine Übergabe. Diskret, fair. Kostenlose Beratung!',
  alternates: { canonical: `${BASE_URL}/haushaltsaufloesung-duisburg` },
  openGraph: { title: 'Haushaltsauflösung Duisburg | Diskret & komplett', description: 'Komplette Haushaltsauflösung in Duisburg.', url: `${BASE_URL}/haushaltsaufloesung-duisburg`, locale: 'de_DE' },
};

export default function HaushaltsaufloesungDuisburgPage() {
  return <HaushaltsaufloesungDuisburg />;
}
