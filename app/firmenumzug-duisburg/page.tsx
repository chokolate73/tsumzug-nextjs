import type { Metadata } from 'next';
import FirmenumzugDuisburg from '@/views/duisburg/FirmenumzugDuisburg';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Firmenumzug Duisburg | Büroumzug ohne Ausfallzeit',
  description: 'Professioneller Firmenumzug & Büroumzug in Duisburg. IT-Transport, Wochenende möglich. Minimale Ausfallzeit. Festpreis. Jetzt planen!',
  alternates: { canonical: `${BASE_URL}/firmenumzug-duisburg` },
  openGraph: { title: 'Firmenumzug Duisburg | Büroumzug ohne Ausfallzeit', description: 'Professioneller Firmenumzug & Büroumzug in Duisburg.', url: `${BASE_URL}/firmenumzug-duisburg`, locale: 'de_DE' },
};

export default function FirmenumzugDuisburgPage() {
  return <FirmenumzugDuisburg />;
}
