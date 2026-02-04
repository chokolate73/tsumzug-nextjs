import type { Metadata } from 'next';
import Remont from '@/views/ru/services/Remont';

const BASE_URL = 'https://tsumzug.de';

export const metadata: Metadata = {
  title: 'Ремонт квартир Дуйсбург | Покраска от 12€/м²',
  description: 'Профессиональный ремонт в Дуйсбурге. Покраска, поклейка обоев, укладка полов. Идеально для сдачи квартиры. Честные цены. Запросите сейчас!',
  alternates: { canonical: `${BASE_URL}/ru/services/remont` },
  openGraph: { title: 'Ремонт квартир Дуйсбург | Покраска от 12€/м²', description: 'Профессиональный ремонт в Дуйсбурге.', url: `${BASE_URL}/ru/services/remont`, locale: 'ru_RU' },
};

export default function RemontPage() {
  return <Remont />;
}
