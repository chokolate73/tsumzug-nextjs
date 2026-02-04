import type { Metadata } from 'next';
import UslugiMasterov from '@/views/ru/services/UslugiMasterov';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Услуги мастеров Дуйсбург | Профессионально от 35€/час',
  description: 'Профессиональные услуги мастеров в Дуйсбурге. Мелкий ремонт, сборка мебели, обслуживание объектов. Почасовая оплата или месячный абонемент. Запросите сейчас!',
  alternates: { canonical: `${BASE_URL}/ru/services/uslugi-masterov` },
  openGraph: { title: 'Услуги мастеров Дуйсбург | Профессионально от 35€/час', description: 'Профессиональные услуги мастеров в Дуйсбурге.', url: `${BASE_URL}/ru/services/uslugi-masterov`, locale: 'ru_RU' },
};

export default function UslugiMasterovPage() {
  return <UslugiMasterov />;
}
