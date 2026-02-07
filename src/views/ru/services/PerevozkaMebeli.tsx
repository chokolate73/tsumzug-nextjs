'use client';
import ServicePage from '@/components/ServicePage';
import { getServiceById } from '@/data/services';

export default function PerevozkaMebeli() {
  const service = getServiceById('moebeltransport')!;
  return <ServicePage service={service} lang="ru" />;
}
