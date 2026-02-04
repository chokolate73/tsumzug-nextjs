import ServicePage from '@/components/ServicePage';
import { getServiceById } from '@/data/services';

export default function HausmeisterservicePage() {
  const service = getServiceById('hausmeisterservice')!;
  return <ServicePage service={service} lang="de" />;
}
