import type { Metadata } from 'next';
import HausmeisterserviceDuisburg from '@/views/duisburg/HausmeisterserviceDuisburg';

const BASE_URL = 'https://tsumzug.de';

export const metadata: Metadata = {
  title: 'Hausmeisterservice Duisburg | Professionell ab 35€/Std',
  description: 'Professioneller Hausmeisterservice in Duisburg. Kleinreparaturen, Möbelmontage, Objektpflege. Stundensatz oder Monatspauschale. Jetzt anfragen!',
  alternates: { canonical: `${BASE_URL}/hausmeisterservice-duisburg` },
  openGraph: { title: 'Hausmeisterservice Duisburg | Professionell ab 35€/Std', description: 'Professioneller Hausmeisterservice in Duisburg.', url: `${BASE_URL}/hausmeisterservice-duisburg`, locale: 'de_DE' },
};

export default function HausmeisterserviceDuisburgPage() {
  return <HausmeisterserviceDuisburg />;
}
