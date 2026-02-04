import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  lang: 'de' | 'en' | 'ru';
  canonicalPath: string;
  ogImage?: string;
  type?: 'website' | 'article' | 'service';
  structuredData?: object;
  alternates?: {
    de: string;
    en: string;
    ru: string;
  };
}

const BASE_URL = 'https://tsumzug.de';

const langAlternates = {
  de: '',
  en: '/en',
  ru: '/ru',
};

export default function SEO({
  title,
  description,
  keywords,
  lang,
  canonicalPath,
  ogImage = '/og-image.png',
  type = 'website',
  structuredData,
  alternates,
}: SEOProps) {
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  const fullTitle = `${title} | TopSicher Umzüge`;

  // Generate hreflang URLs for alternates
  const getAlternateUrl = (targetLang: 'de' | 'en' | 'ru') => {
    // Use explicit alternates if provided (for pages with translated slugs)
    if (alternates) {
      return `${BASE_URL}${alternates[targetLang]}`;
    }

    // Auto-generate for pages with consistent paths (home pages, etc.)
    let basePath = canonicalPath;

    // Remove language prefix if exists
    if (basePath.startsWith('/en')) {
      basePath = basePath.replace('/en', '') || '/';
    } else if (basePath.startsWith('/ru')) {
      basePath = basePath.replace('/ru', '') || '/';
    }

    // For home page
    if (basePath === '/' || basePath === '') {
      return `${BASE_URL}${langAlternates[targetLang]}` || BASE_URL;
    }

    // For other pages, add language prefix
    if (targetLang === 'de') {
      return `${BASE_URL}${basePath}`;
    }
    return `${BASE_URL}${langAlternates[targetLang]}${basePath}`;
  };

  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: 'TS Umzug',
    alternateName: 'TopSicher Umzüge',
    image: `${BASE_URL}/og-image.png`,
    '@id': BASE_URL,
    url: BASE_URL,
    telephone: '+49 176 6519 7997',
    email: 'info@tsumzug.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Brückelstraße 54',
      addressLocality: 'Duisburg',
      addressRegion: 'NRW',
      postalCode: '47137',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.4667,
      longitude: 6.7500,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '€€',
    areaServed: [
      {
        '@type': 'City',
        name: 'Duisburg',
      },
      {
        '@type': 'State',
        name: 'Nordrhein-Westfalen',
      },
    ],
    // sameAs: Add real social media URLs when available
    // e.g., Google Business Profile, Facebook Page, Instagram
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="TopSicher Umzüge" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang Tags */}
      <link rel="alternate" hrefLang="de" href={getAlternateUrl('de')} />
      <link rel="alternate" hrefLang="en" href={getAlternateUrl('en')} />
      <link rel="alternate" hrefLang="ru" href={getAlternateUrl('ru')} />
      <link rel="alternate" hrefLang="x-default" href={getAlternateUrl('de')} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${BASE_URL}${ogImage}`} />
      <meta property="og:locale" content={lang === 'de' ? 'de_DE' : lang === 'en' ? 'en_US' : 'ru_RU'} />
      <meta property="og:site_name" content="TopSicher Umzüge" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${BASE_URL}${ogImage}`} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
}
