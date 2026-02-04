/**
 * SEO Helpers
 * Shared utilities for base URL resolution and slug generation
 */

import { LOCATIONS, type Location } from './locations';
import { SERVICES, type ServiceDef } from './services';

/**
 * Returns the canonical base URL.
 * Prefers NEXT_PUBLIC_SITE_URL env var, falls back to production domain.
 */
export function getBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '') ||
    'https://tsumzug.de'
  );
}

/** Build a city+service slug, e.g. "umzug-duesseldorf" */
export function buildCityServiceSlug(
  service: ServiceDef,
  location: Location,
): string {
  return `${service.slug}-${location.slug}`;
}

/** Return every valid { serviceSlug, citySlug, service, location } combination */
export function getAllServiceCityPairs() {
  const pairs: {
    slug: string;
    service: ServiceDef;
    location: Location;
  }[] = [];

  for (const service of SERVICES) {
    for (const location of LOCATIONS) {
      pairs.push({
        slug: buildCityServiceSlug(service, location),
        service,
        location,
      });
    }
  }
  return pairs;
}

/**
 * All static routes for the sitemap.
 * Must be kept in sync with app/ directory.
 */
export function getStaticRoutes(): string[] {
  return [
    '/',
    '/angebot',
    '/impressum',
    '/datenschutz',
    '/preise-duisburg',
    '/privatumzug-duisburg',
    '/firmenumzug-duisburg',
    '/entruempelung-duisburg',
    '/moebeltransport-duisburg',
    '/hausmeisterservice-duisburg',
    '/renovierung-duisburg',
    '/umzugsunternehmen-duisburg',
    '/umzug-kosten-duisburg',
    '/umzug-und-entruempelung-duisburg',
    '/haushaltsaufloesung-duisburg',
    // EN
    '/en',
    '/en/prices',
    '/en/services/residential-moves',
    '/en/services/office-relocations',
    '/en/services/clearance-disposal',
    '/en/services/furniture-transport',
    '/en/services/handyman-services',
    '/en/services/renovation',
    // RU
    '/ru',
    '/ru/prices',
    '/ru/services/chastnye-pereezdy',
    '/ru/services/ofisnye-pereezdy',
    '/ru/services/uborka-vyvoz',
    '/ru/services/perevozka-mebeli',
    '/ru/services/uslugi-masterov',
    '/ru/services/remont',
  ];
}
