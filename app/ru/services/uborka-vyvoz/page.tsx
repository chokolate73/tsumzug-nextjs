import type { Metadata } from 'next';
import UborkaVyvoz from '@/views/ru/services/UborkaVyvoz';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Уборка и вывоз мусора Дуйсбург | Быстро и честно от 199€',
  description: 'Профессиональная уборка и вывоз в Дуйсбурге. Квартиры, подвалы, чердаки. Правильная утилизация, срочные сроки. Фиксированная цена. Запросите сейчас!',
  alternates: {
    canonical: `${BASE_URL}/ru/services/uborka-vyvoz`,
    languages: {
      'de': `${BASE_URL}/entruempelung`,
      'en': `${BASE_URL}/en/services/clearance-disposal`,
      'ru': `${BASE_URL}/ru/services/uborka-vyvoz`,
      'x-default': `${BASE_URL}/entruempelung`,
    },
  },
  openGraph: { title: 'Уборка и вывоз мусора Дуйсбург | Быстро и честно от 199€', description: 'Профессиональная уборка и вывоз в Дуйсбурге.', url: `${BASE_URL}/ru/services/uborka-vyvoz`, locale: 'ru_RU' },
};

export default function UborkaVyvozPage() {
  return <UborkaVyvoz />;
}
