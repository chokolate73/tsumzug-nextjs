import type { Metadata } from 'next';
import MoebeltransportDuisburg from '@/views/duisburg/MoebeltransportDuisburg';

const BASE_URL = 'https://tsumzug.de';

export const metadata: Metadata = {
  title: 'Möbeltransport Duisburg | Flexibel & versichert ab 119€',
  description: 'Günstiger Möbeltransport in Duisburg. Einzelstücke, IKEA-Abholung, Komplettladung. Flexibel, versichert, kurzfristig möglich. Jetzt anfragen!',
  alternates: { canonical: `${BASE_URL}/moebeltransport-duisburg` },
  openGraph: { title: 'Möbeltransport Duisburg | Flexibel & versichert ab 119€', description: 'Günstiger Möbeltransport in Duisburg.', url: `${BASE_URL}/moebeltransport-duisburg`, locale: 'de_DE' },
};

export default function MoebeltransportDuisburgPage() {
  return <MoebeltransportDuisburg />;
}
