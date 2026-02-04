import type { Metadata } from 'next';
import PreiseDuisburg from '@/views/duisburg/PreiseDuisburg';

const BASE_URL = 'https://tsumzug.de';

export const metadata: Metadata = {
  title: 'Preise Duisburg | Alle Umzugs- und Servicepreise auf einen Blick',
  description: 'Transparente Preise für Umzüge, Möbeltransport, Entrümpelung, Hausmeisterservice und Renovierung in Duisburg. Festpreise ab 119€. Kostenlose Besichtigung!',
  alternates: { canonical: `${BASE_URL}/preise-duisburg` },
  openGraph: { title: 'Preise Duisburg | Alle Umzugs- und Servicepreise auf einen Blick', description: 'Transparente Preise für Umzüge in Duisburg.', url: `${BASE_URL}/preise-duisburg`, locale: 'de_DE' },
};

export default function PreiseDuisburgPage() {
  return <PreiseDuisburg />;
}
