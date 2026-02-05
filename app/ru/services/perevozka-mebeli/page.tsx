import type { Metadata } from 'next';
import PerevozkaMebeli from '@/views/ru/services/PerevozkaMebeli';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Перевозка мебели Дуйсбург | Гибко и застраховано от 119€',
  description: 'Доступная перевозка мебели в Дуйсбурге. Отдельные предметы, доставка из IKEA, полные загрузки. Гибко, застраховано, срочно возможно. Запросите сейчас!',
  alternates: {
    canonical: `${BASE_URL}/ru/services/perevozka-mebeli`,
    languages: {
      'de': `${BASE_URL}/moebeltransport-duisburg`,
      'en': `${BASE_URL}/en/services/furniture-transport`,
      'ru': `${BASE_URL}/ru/services/perevozka-mebeli`,
      'x-default': `${BASE_URL}/moebeltransport-duisburg`,
    },
  },
  openGraph: { title: 'Перевозка мебели Дуйсбург | Гибко и застраховано от 119€', description: 'Доступная перевозка мебели в Дуйсбурге.', url: `${BASE_URL}/ru/services/perevozka-mebeli`, locale: 'ru_RU' },
};

export default function PerevozkaMebeliPage() {
  return <PerevozkaMebeli />;
}
