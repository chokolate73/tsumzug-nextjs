import ServicePage from '@/components/ServicePage';
import { getServiceById } from '@/data/services';

export default function PrivatumzuegePage() {
  const service = getServiceById('privatumzuege')!;
  return <ServicePage service={service} lang="de" />;
}
