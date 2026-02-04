import type { Metadata } from 'next';
import ChastnyePereezdy from '@/views/ru/services/ChastnyePereezdy';

const BASE_URL = 'https://tsumzug.de';

export const metadata: Metadata = {
  title: 'Частный переезд Дуйсбург | Без стресса от 299€',
  description: 'Профессиональный частный переезд в Дуйсбурге. Полный сервис: упаковка, сборка мебели и транспортировка. Фиксированные цены, страховка. Бесплатный осмотр!',
  alternates: { canonical: `${BASE_URL}/ru/services/chastnye-pereezdy` },
  openGraph: { title: 'Частный переезд Дуйсбург | Без стресса от 299€', description: 'Профессиональный частный переезд в Дуйсбурге.', url: `${BASE_URL}/ru/services/chastnye-pereezdy`, locale: 'ru_RU' },
};

export default function ChastnyePereeezdyPage() {
  return <ChastnyePereezdy />;
}
