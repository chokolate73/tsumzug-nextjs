'use client';
import ServicePage from '@/components/ServicePage';
import { getServiceById } from '@/data/services';

export default function Remont() {
  const service = getServiceById('renovierung')!;
  return <ServicePage service={service} lang="ru" />;
}
