import type { MetadataRoute } from 'next';
import { getBaseUrl, getStaticRoutes } from '@/lib/seo/helpers';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const now = new Date().toISOString();

  return getStaticRoutes().map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' || route === '/en' || route === '/ru' ? 1.0 : 0.8,
  }));
}
