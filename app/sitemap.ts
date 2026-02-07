import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/lib/seo/helpers';

function getPriority(route: string): number {
  if (route === '/') return 1.0;
  // DE service pages
  if (
    route === '/privatumzuege' ||
    route === '/firmenumzuege' ||
    route === '/entruempelung' ||
    route === '/moebeltransport' ||
    route === '/hausmeisterservice' ||
    route === '/renovierung'
  )
    return 0.8;
  // Legal pages
  if (route === '/impressum' || route === '/datenschutz') return 0.2;
  // EN home
  if (route === '/en') return 0.7;
  // EN service pages
  if (route.startsWith('/en/services/')) return 0.6;
  // RU home
  if (route === '/ru') return 0.5;
  // RU service pages
  if (route.startsWith('/ru/services/')) return 0.5;
  return 0.5;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const now = new Date().toISOString();

  const routes = [
    // DE
    '/',
    '/privatumzuege',
    '/firmenumzuege',
    '/entruempelung',
    '/moebeltransport',
    '/hausmeisterservice',
    '/renovierung',
    '/impressum',
    '/datenschutz',
    // EN
    '/en',
    '/en/services/residential-moves',
    '/en/services/office-relocations',
    '/en/services/clearance-disposal',
    '/en/services/furniture-transport',
    '/en/services/handyman-services',
    '/en/services/renovation',
    // RU
    '/ru',
    '/ru/services/chastnye-pereezdy',
    '/ru/services/ofisnye-pereezdy',
    '/ru/services/uborka-vyvoz',
    '/ru/services/perevozka-mebeli',
    '/ru/services/uslugi-masterov',
    '/ru/services/remont',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: getPriority(route),
  }));
}
