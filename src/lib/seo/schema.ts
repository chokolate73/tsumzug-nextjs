/**
 * Schema.org JSON-LD Builders for SEO
 * Generates structured data for LocalBusiness, Service and FAQPage types.
 */

import { COMPANY } from '@/config/company';
import { getBaseUrl } from './helpers';

// ---- Types ----

export interface FAQEntry {
  question: string;
  answer: string;
}

// ---- LocalBusiness / MovingCompany ----

export function buildLocalBusinessJsonLd(overrides?: {
  url?: string;
  city?: string;
  serviceArea?: string;
}) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    '@id': `${baseUrl}/#organization`,
    name: COMPANY.legalName,
    alternateName: COMPANY.name,
    url: overrides?.url ?? baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/logo.png`,
    },
    image: `${baseUrl}/og-image.png`,
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
    openingHoursSpecification: COMPANY.openingHoursSpecification.map(
      (spec) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: spec.dayOfWeek,
        opens: spec.opens,
        closes: spec.closes,
      }),
    ),
    areaServed: {
      '@type': 'State',
      name: overrides?.serviceArea ?? 'Nordrhein-Westfalen',
    },
    ...(overrides?.city && {
      serviceArea: {
        '@type': 'City',
        name: overrides.city,
      },
    }),
    sameAs: [
      COMPANY.social.facebook,
      COMPANY.social.instagram,
      COMPANY.social.google,
    ].filter(Boolean),
  };
}

// ---- Service schema ----

export function buildServiceJsonLd(opts: {
  serviceName: string;
  description: string;
  url: string;
  city: string;
}) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${opts.url}/#service`,
    name: opts.serviceName,
    description: opts.description,
    url: opts.url,
    provider: {
      '@type': 'MovingCompany',
      '@id': `${baseUrl}/#organization`,
      name: COMPANY.legalName,
    },
    areaServed: {
      '@type': 'City',
      name: opts.city,
    },
    serviceType: opts.serviceName,
  };
}

// ---- FAQPage schema ----

export function buildFAQPageJsonLd(faqs: FAQEntry[], pageUrl?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(pageUrl && { '@id': `${pageUrl}/#faq` }),
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ---- Serialization helper ----

export function jsonLdScriptTag(data: Record<string, unknown>): string {
  return JSON.stringify(data);
}
