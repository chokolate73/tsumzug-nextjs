import type { Metadata } from 'next';
import OfisnyePereezdy from '@/views/ru/services/OfisnyePereezdy';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Офисный переезд Дуйсбург | Минимальный простой',
  description: 'Профессиональный офисный переезд в Дуйсбурге. Перевозка IT-оборудования, переезды в выходные. Минимальный простой. Фиксированная цена. Планируйте сейчас!',
  alternates: {
    canonical: `${BASE_URL}/ru/services/ofisnye-pereezdy`,
    languages: {
      'de': `${BASE_URL}/firmenumzuege`,
      'en': `${BASE_URL}/en/services/office-relocations`,
      'ru': `${BASE_URL}/ru/services/ofisnye-pereezdy`,
      'x-default': `${BASE_URL}/firmenumzuege`,
    },
  },
  openGraph: { title: 'Офисный переезд Дуйсбург | Минимальный простой', description: 'Профессиональный офисный переезд в Дуйсбурге.', url: `${BASE_URL}/ru/services/ofisnye-pereezdy`, locale: 'ru_RU' },
};

export default function OfisnyePereeezdyPage() {
  return <OfisnyePereezdy />;
}
