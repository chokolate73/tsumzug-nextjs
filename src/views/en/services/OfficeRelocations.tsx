'use client';
import ServicePage from '@/components/ServicePage';
import { getServiceById } from '@/data/services';

export default function OfficeRelocations() {
  const service = getServiceById('firmenumzuege')!;
  return <ServicePage service={service} lang="en" />;
}
