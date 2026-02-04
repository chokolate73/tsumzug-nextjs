import type { Metadata } from 'next';
import UmzugKostenDuisburg from '@/views/duisburg/UmzugKostenDuisburg';

const BASE_URL = 'https://tsumzug.de';

export const metadata: Metadata = {
  title: 'Umzugskosten Duisburg | Preise & Kostenübersicht 2024',
  description: 'Was kostet ein Umzug in Duisburg? Preisübersicht, Kostenfaktoren & Spartipps. Festpreise ab 299€. Jetzt kostenloses Angebot anfordern!',
  alternates: { canonical: `${BASE_URL}/umzug-kosten-duisburg` },
  openGraph: { title: 'Umzugskosten Duisburg | Preise & Kostenübersicht 2024', description: 'Was kostet ein Umzug in Duisburg?', url: `${BASE_URL}/umzug-kosten-duisburg`, locale: 'de_DE' },
};

export default function UmzugKostenDuisburgPage() {
  return <UmzugKostenDuisburg />;
}
