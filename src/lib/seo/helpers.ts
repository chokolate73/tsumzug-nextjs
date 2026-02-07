/**
 * SEO Helpers
 * Shared utilities for base URL resolution
 */

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

/**
 * All static routes for the sitemap.
 * Must be kept in sync with app/ directory.
 */
export function getStaticRoutes(): string[] {
  return [
    // DE
    '/',
    '/impressum',
    '/datenschutz',
    '/privatumzuege',
    '/firmenumzuege',
    '/entruempelung',
    '/moebeltransport',
    '/hausmeisterservice',
    '/renovierung',
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
}
