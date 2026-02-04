import type { Metadata } from 'next';
import HandymanServices from '@/views/en/services/HandymanServices';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: 'Handyman Services Duisburg | Professional from €35/hour',
  description: 'Professional handyman services in Duisburg. Minor repairs, furniture assembly, property maintenance. Hourly rate or monthly flat rate. Request now!',
  alternates: { canonical: `${BASE_URL}/en/services/handyman-services` },
  openGraph: { title: 'Handyman Services Duisburg | Professional from €35/hour', description: 'Professional handyman services in Duisburg.', url: `${BASE_URL}/en/services/handyman-services`, locale: 'en_GB' },
};

export default function HandymanServicesPage() {
  return <HandymanServices />;
}
