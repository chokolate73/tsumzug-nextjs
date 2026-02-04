import type { Metadata } from 'next';
import OfisnyePereezdy from '@/views/ru/services/OfisnyePereezdy';

const BASE_URL = 'https://tsumzug.de';

export const metadata: Metadata = {
  title: 'Офисный переезд Дуйсбург | Минимальный простой',
  description: 'Профессиональный офисный переезд в Дуйсбурге. Перевозка IT-оборудования, переезды в выходные. Минимальный простой. Фиксированная цена. Планируйте сейчас!',
  alternates: { canonical: `${BASE_URL}/ru/services/ofisnye-pereezdy` },
  openGraph: { title: 'Офисный переезд Дуйсбург | Минимальный простой', description: 'Профессиональный офисный переезд в Дуйсбурге.', url: `${BASE_URL}/ru/services/ofisnye-pereezdy`, locale: 'ru_RU' },
};

export default function OfisnyePereeezdyPage() {
  return <OfisnyePereezdy />;
}
