/**
 * Service Definitions for Dynamic Landing Pages
 * Each service generates pages for every city in locations.ts
 */

export interface ServiceDef {
  slug: string;
  name: string;
  /** Short description used in meta tags */
  metaSnippet: string;
}

export const SERVICES: ServiceDef[] = [
  {
    slug: 'umzug',
    name: 'Umzug',
    metaSnippet: 'Professioneller Umzugsservice',
  },
  {
    slug: 'moebeltransport',
    name: 'Möbeltransport',
    metaSnippet: 'Sicherer Möbeltransport',
  },
  {
    slug: 'entruempelung',
    name: 'Entrümpelung',
    metaSnippet: 'Entrümpelung & Entsorgung',
  },
  {
    slug: 'firmenumzug',
    name: 'Firmenumzug',
    metaSnippet: 'Professioneller Firmenumzug',
  },
  {
    slug: 'transport',
    name: 'Transport',
    metaSnippet: 'Zuverlässiger Transportservice',
  },
];

export function getServiceBySlug(slug: string): ServiceDef | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
