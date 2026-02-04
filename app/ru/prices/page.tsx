import type { Metadata } from 'next';
import PricesRu from '@/views/ru/Prices';

const BASE_URL = 'https://tsumzug.de';

export const metadata: Metadata = {
  title: 'Цены Дуйсбург | Все цены на переезды и услуги',
  description: 'Прозрачные цены на переезды, перевозку мебели, уборку, услуги мастеров и ремонт в Дуйсбурге. Фиксированные цены от 119€. Бесплатный осмотр!',
  alternates: { canonical: `${BASE_URL}/ru/prices` },
  openGraph: { title: 'Цены Дуйсбург | Все цены на переезды и услуги', description: 'Прозрачные цены на переезды в Дуйсбурге.', url: `${BASE_URL}/ru/prices`, locale: 'ru_RU' },
};

export default function PricesRuPage() {
  return <PricesRu />;
}
