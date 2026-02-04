/**
 * NRW Priority Cities Configuration
 * Used for dynamic service-city landing page generation
 */

export interface Location {
  slug: string;
  name: string;
  state: string;
}

export const LOCATIONS: Location[] = [
  { slug: 'duisburg', name: 'Duisburg', state: 'NRW' },
  { slug: 'duesseldorf', name: 'Düsseldorf', state: 'NRW' },
  { slug: 'essen', name: 'Essen', state: 'NRW' },
  { slug: 'oberhausen', name: 'Oberhausen', state: 'NRW' },
  { slug: 'koeln', name: 'Köln', state: 'NRW' },
  { slug: 'dortmund', name: 'Dortmund', state: 'NRW' },
  { slug: 'bochum', name: 'Bochum', state: 'NRW' },
  { slug: 'wuppertal', name: 'Wuppertal', state: 'NRW' },
  { slug: 'krefeld', name: 'Krefeld', state: 'NRW' },
  { slug: 'muelheim', name: 'Mülheim an der Ruhr', state: 'NRW' },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
