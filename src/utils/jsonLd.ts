/**
 * JSON-LD Structured Data Builders
 * Helpers to generate schema.org markup for SEO
 */

import { COMPANY } from '@/config/company';

// ============================================
// Types
// ============================================

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServicePageData {
  name: string;
  description: string;
  url: string;
  image?: string;
  priceRange?: string;
  areaServed?: string[];
}

// ============================================
// MovingCompany Schema (Organization)
// ============================================

export function buildMovingCompanySchema(overrides?: Partial<{
  url: string;
  areaServed: string[];
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    '@id': `${COMPANY.url}/#organization`,
    name: COMPANY.name,
    alternateName: COMPANY.legalName,
    url: overrides?.url || COMPANY.url,
    logo: {
      '@type': 'ImageObject',
      url: COMPANY.logo,
    },
    image: COMPANY.ogImage,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.region,
      postalCode: COMPANY.address.postalCode,
      addressCountry: COMPANY.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY.geo.latitude,
      longitude: COMPANY.geo.longitude,
    },
    priceRange: COMPANY.priceRange,
    areaServed: (overrides?.areaServed || COMPANY.serviceAreas).map(area => ({
      '@type': 'City',
      name: area,
    })),
    openingHoursSpecification: COMPANY.openingHoursSpecification.map(spec => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: spec.dayOfWeek,
      opens: spec.opens,
      closes: spec.closes,
    })),
    sameAs: [
      COMPANY.social.facebook,
      COMPANY.social.instagram,
      COMPANY.social.google,
    ].filter(Boolean),
  };
}

// ============================================
// LocalBusiness Schema (for city-specific pages)
// ============================================

export function buildLocalBusinessSchema(pageData: {
  name: string;
  description: string;
  url: string;
  city?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${pageData.url}/#localbusiness`,
    name: pageData.name,
    description: pageData.description,
    url: pageData.url,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address.street,
      addressLocality: pageData.city || COMPANY.address.city,
      addressRegion: COMPANY.address.region,
      postalCode: COMPANY.address.postalCode,
      addressCountry: COMPANY.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY.geo.latitude,
      longitude: COMPANY.geo.longitude,
    },
    priceRange: COMPANY.priceRange,
    image: COMPANY.ogImage,
    parentOrganization: {
      '@id': `${COMPANY.url}/#organization`,
    },
  };
}

// ============================================
// Service Schema
// ============================================

export function buildServiceSchema(service: ServicePageData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${service.url}/#service`,
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@id': `${COMPANY.url}/#organization`,
    },
    areaServed: (service.areaServed || COMPANY.serviceAreas).map(area => ({
      '@type': 'City',
      name: area,
    })),
    ...(service.image && { image: service.image }),
  };
}

// ============================================
// FAQ Schema
// ============================================

export function buildFAQSchema(faqs: FAQItem[], pageUrl?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': pageUrl ? `${pageUrl}/#faq` : undefined,
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ============================================
// Breadcrumb Schema
// ============================================

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ============================================
// WebPage Schema
// ============================================

export function buildWebPageSchema(page: {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${page.url}/#webpage`,
    name: page.name,
    description: page.description,
    url: page.url,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${COMPANY.url}/#website`,
      name: COMPANY.name,
      url: COMPANY.url,
    },
    about: {
      '@id': `${COMPANY.url}/#organization`,
    },
    ...(page.datePublished && { datePublished: page.datePublished }),
    ...(page.dateModified && { dateModified: page.dateModified }),
  };
}

// ============================================
// Combined Schema for Landing Pages
// ============================================

export function buildLandingPageSchemas(config: {
  pageTitle: string;
  pageDescription: string;
  pageUrl: string;
  serviceName: string;
  city?: string;
  breadcrumbs: BreadcrumbItem[];
  faqs?: FAQItem[];
}) {
  const schemas = [
    buildMovingCompanySchema({ url: config.pageUrl }),
    buildBreadcrumbSchema(config.breadcrumbs),
    buildWebPageSchema({
      name: config.pageTitle,
      description: config.pageDescription,
      url: config.pageUrl,
    }),
  ];

  if (config.faqs && config.faqs.length > 0) {
    schemas.push(buildFAQSchema(config.faqs, config.pageUrl));
  }

  return schemas;
}

// ============================================
// Serialize to Script Tag Content
// ============================================

export function serializeSchema(schema: object | object[]): string {
  if (Array.isArray(schema)) {
    return schema.map(s => JSON.stringify(s)).join('</script><script type="application/ld+json">');
  }
  return JSON.stringify(schema);
}
