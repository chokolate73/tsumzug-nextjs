import type { Metadata } from 'next';
import HomeRu from '@/views/HomeRu';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Профессиональные переезды в Дуйсбурге и NRW',
  description: 'TopSicher Umzüge - Ваш надёжный партнёр по переездам в Дуйсбурге и NRW. Частные переезды, офисные переезды, уборка, перевозка мебели и многое другое. Фиксированная цена ✓ Страховка ✓',
  keywords: 'транспортная компания Дуйсбург, переезд NRW, частный переезд, офисный переезд, перевозка мебели, уборка, услуги мастеров',
  alternates: {
    canonical: `${BASE_URL}/ru`,
    languages: {
      'de': `${BASE_URL}/`,
      'en': `${BASE_URL}/en`,
      'ru': `${BASE_URL}/ru`,
      'x-default': `${BASE_URL}/`,
    },
  },
  openGraph: {
    title: 'Профессиональные переезды в Дуйсбурге и NRW',
    description: 'TopSicher Umzüge - Ваш надёжный партнёр по переездам в Дуйсбурге и NRW.',
    url: `${BASE_URL}/ru`,
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'TopSicher Umzüge – Транспортная компания в Дуйсбурге' }],
  },
};

export default function HomeRuPage() {
  return <HomeRu />;
}
