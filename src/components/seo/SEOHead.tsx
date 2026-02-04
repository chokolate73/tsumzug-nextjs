/**
 * SEOHead Component
 * Reusable component for all SEO meta tags
 */

import { Helmet } from 'react-helmet-async';
import { COMPANY } from '@/config/company';

export interface SEOHeadProps {
  // Required
  title: string;
  description: string;
  canonical: string;

  // Optional overrides
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';

  // Robots
  noindex?: boolean;
  nofollow?: boolean;

  // Hreflang
  hreflang?: {
    de?: string;
    en?: string;
    ru?: string;
  };

  // JSON-LD (pass pre-built schemas)
  jsonLd?: object | object[];

  // Additional
  keywords?: string;
  author?: string;
}

export function SEOHead({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = COMPANY.ogImage,
  ogType = 'website',
  noindex = false,
  nofollow = false,
  hreflang,
  jsonLd,
  keywords,
  author = COMPANY.name,
}: SEOHeadProps) {
  // Build robots directive
  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
  ].join(', ');

  // Serialize JSON-LD
  const renderJsonLd = () => {
    if (!jsonLd) return null;

    const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
    return schemas.map((schema, index) => (
      <script
        key={index}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    ));
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={robotsContent} />

      {/* Optional Meta */}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content={COMPANY.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Hreflang */}
      {hreflang?.de && <link rel="alternate" hrefLang="de" href={hreflang.de} />}
      {hreflang?.en && <link rel="alternate" hrefLang="en" href={hreflang.en} />}
      {hreflang?.ru && <link rel="alternate" hrefLang="ru" href={hreflang.ru} />}
      {hreflang && (
        <link
          rel="alternate"
          hrefLang="x-default"
          href={hreflang.de || canonical}
        />
      )}

      {/* JSON-LD Structured Data */}
      {renderJsonLd()}
    </Helmet>
  );
}

export default SEOHead;
