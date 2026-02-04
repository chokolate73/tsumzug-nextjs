import ServicePage from '@/components/ServicePage';
import { getServiceById } from '@/data/services';

export default function MoebeltransportPage() {
  const service = getServiceById('moebeltransport')!;
  return <ServicePage service={service} lang="de" />;
}
