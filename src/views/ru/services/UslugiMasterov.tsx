'use client';
import ServicePage from '@/components/ServicePage';
import { getServiceById } from '@/data/services';

export default function UslugiMasterov() {
  const service = getServiceById('hausmeisterservice')!;
  return <ServicePage service={service} lang="ru" />;
}
