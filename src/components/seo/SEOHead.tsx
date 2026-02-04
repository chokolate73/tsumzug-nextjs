'use client';

/**
 * SEOHead Component
 * In Next.js, meta tags are handled by the metadata export in page.tsx.
 * This component only renders JSON-LD structured data.
 */

import { COMPANY } from '@/config/company';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  nofollow?: boolean;
  hreflang?: {
    de?: string;
    en?: string;
    ru?: string;
  };
  jsonLd?: object | object[];
  keywords?: string;
  author?: string;
}

export function SEOHead({
  jsonLd,
}: SEOHeadProps) {
  if (!jsonLd) return null;

  const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export default SEOHead;
