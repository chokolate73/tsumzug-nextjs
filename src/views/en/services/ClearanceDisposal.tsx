'use client';
import ServicePage from '@/components/ServicePage';
import { getServiceById } from '@/data/services';

export default function ClearanceDisposal() {
  const service = getServiceById('entruempelung')!;
  return <ServicePage service={service} lang="en" />;
}
