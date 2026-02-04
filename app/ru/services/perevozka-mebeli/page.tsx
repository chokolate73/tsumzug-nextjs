import type { Metadata } from 'next';
import PerevozkaMebeli from '@/views/ru/services/PerevozkaMebeli';

const BASE_URL = 'https://tsumzug.de';

export const metadata: Metadata = {
  title: 'Перевозка мебели Дуйсбург | Гибко и застраховано от 119€',
  description: 'Доступная перевозка мебели в Дуйсбурге. Отдельные предметы, доставка из IKEA, полные загрузки. Гибко, застраховано, срочно возможно. Запросите сейчас!',
  alternates: { canonical: `${BASE_URL}/ru/services/perevozka-mebeli` },
  openGraph: { title: 'Перевозка мебели Дуйсбург | Гибко и застраховано от 119€', description: 'Доступная перевозка мебели в Дуйсбурге.', url: `${BASE_URL}/ru/services/perevozka-mebeli`, locale: 'ru_RU' },
};

export default function PerevozkaMebeliPage() {
  return <PerevozkaMebeli />;
}
