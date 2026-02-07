import type { Metadata } from 'next';
import Remont from '@/views/ru/services/Remont';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Ремонт квартир Дуйсбург | Покраска от 12€/м²',
  description: 'Профессиональный ремонт в Дуйсбурге. Покраска, поклейка обоев, укладка полов. Идеально для сдачи квартиры. Честные цены. Запросите сейчас!',
  alternates: {
    canonical: `${BASE_URL}/ru/services/remont`,
    languages: {
      'de': `${BASE_URL}/renovierung`,
      'en': `${BASE_URL}/en/services/renovation`,
      'ru': `${BASE_URL}/ru/services/remont`,
      'x-default': `${BASE_URL}/renovierung`,
    },
  },
  openGraph: { title: 'Ремонт квартир Дуйсбург | Покраска от 12€/м²', description: 'Профессиональный ремонт в Дуйсбурге.', url: `${BASE_URL}/ru/services/remont`, locale: 'ru_RU' },
};

export default function RemontPage() {
  return <Remont />;
}
