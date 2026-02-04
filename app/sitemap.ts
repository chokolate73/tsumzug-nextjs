import type { MetadataRoute } from 'next';
import { getBaseUrl, getStaticRoutes, getAllServiceCityPairs } from '@/lib/seo/helpers';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const now = new Date().toISOString();

  const staticEntries: MetadataRoute.Sitemap = getStaticRoutes().map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: route === '/' ? 'weekly' : 'monthly',
      priority: route === '/' ? 1.0 : 0.7,
    }),
  );

  const dynamicEntries: MetadataRoute.Sitemap = getAllServiceCityPairs().map(
    (pair) => ({
      url: `${baseUrl}/${pair.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }),
  );

  return [...staticEntries, ...dynamicEntries];
}
