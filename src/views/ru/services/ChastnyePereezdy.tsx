'use client';
import ServicePage from '@/components/ServicePage';
import { getServiceById } from '@/data/services';

export default function ChastnyePereezdy() {
  const service = getServiceById('privatumzuege')!;
  return <ServicePage service={service} lang="ru" />;
}
