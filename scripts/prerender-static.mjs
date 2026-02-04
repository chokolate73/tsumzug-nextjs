#!/usr/bin/env node
/**
 * Static Prerender Script for Local SEO Pages
 *
 * This script generates static HTML files with proper meta tags for SEO.
 * No headless browser required - uses predefined page data.
 *
 * Usage: node scripts/prerender-static.mjs
 * Run AFTER vite build completes.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = join(__dirname, '..', 'dist');

// Centralized company config (mirrors src/config/company.ts)
const COMPANY = {
  name: 'TS Umzug',
  legalName: 'TopSicher Umzüge',
  url: 'https://tsumzug.de',
  logo: 'https://tsumzug.de/logo.png',
  ogImage: 'https://tsumzug.de/og-image.png',
  phone: '+49 176 6519 7997',
  phoneLink: 'tel:+4917665197997',
  email: 'info@tsumzug.de',
  address: {
    street: 'Brückelstraße 54',
    postalCode: '47137',
    city: 'Duisburg',
    region: 'NRW',
    country: 'DE',
    full: 'Brückelstraße 54, 47137 Duisburg',
  },
  geo: {
    latitude: 51.47270749488183,
    longitude: 6.782824339817898,
  },
  priceRange: '€€',
  serviceAreas: ['Duisburg', 'Oberhausen', 'Mülheim an der Ruhr', 'Essen', 'Düsseldorf'],
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '20:00' },
    { days: ['Saturday'], opens: '09:00', closes: '18:00' },
  ],
};

// Page data for prerendering (matches LocalSEOPage props)
const PAGES = [
  {
    route: '/umzugsunternehmen-duisburg',
    title: 'Umzugsunternehmen Duisburg | Faire Preise & Versichert | TS Umzug',
    description: 'Ihr Umzugsunternehmen in Duisburg: Privatumzüge, Firmenumzüge & Entrümpelung. Festpreisgarantie, versicherter Transport. Jetzt kostenloses Angebot!',
    h1: 'Umzugsunternehmen in Duisburg',
    breadcrumb: 'Umzugsunternehmen',
  },
  {
    route: '/privatumzug-duisburg',
    title: 'Privatumzug Duisburg | Günstiger Wohnungsumzug ab 299€ | TS Umzug',
    description: 'Privatumzug in Duisburg zum Festpreis. Komplettservice inkl. Verpackung & Möbelmontage. Versichert & zuverlässig. Jetzt kostenloses Angebot anfordern!',
    h1: 'Privatumzug in Duisburg',
    breadcrumb: 'Privatumzug',
  },
  {
    route: '/firmenumzug-duisburg',
    title: 'Firmenumzug Duisburg | Büroumzug mit minimaler Ausfallzeit | TS Umzug',
    description: 'Professioneller Firmenumzug in Duisburg. Büroumzug am Wochenende möglich. IT-Transport, Möbelmontage & Festpreis. Jetzt Angebot anfordern!',
    h1: 'Firmenumzug in Duisburg',
    breadcrumb: 'Firmenumzug',
  },
  {
    route: '/entruempelung-duisburg',
    title: 'Entrümpelung Duisburg | Haushaltsauflösung zum Festpreis | TS Umzug',
    description: 'Professionelle Entrümpelung in Duisburg. Haushaltsauflösung, Wohnungsauflösung & Kellerentrümpelung. Faire Festpreise. Jetzt anfragen!',
    h1: 'Entrümpelung in Duisburg',
    breadcrumb: 'Entrümpelung',
  },
  {
    route: '/haushaltsaufloesung-duisburg',
    title: 'Haushaltsauflösung Duisburg | Komplett-Service zum Festpreis | TS Umzug',
    description: 'Professionelle Haushaltsauflösung in Duisburg. Wohnungsauflösung für Erben & Vermieter. Besenreine Übergabe. Faire Festpreise!',
    h1: 'Haushaltsauflösung in Duisburg',
    breadcrumb: 'Haushaltsauflösung',
  },
  {
    route: '/moebeltransport-duisburg',
    title: 'Möbeltransport Duisburg | Günstig & Versichert | TS Umzug',
    description: 'Günstiger Möbeltransport in Duisburg. Einzelstücke oder Komplettladung. Versicherter Transport. Flexible Termine. Jetzt Angebot anfordern!',
    h1: 'Möbeltransport in Duisburg',
    breadcrumb: 'Möbeltransport',
  },
  {
    route: '/umzug-und-entruempelung-duisburg',
    title: 'Umzug und Entrümpelung Duisburg | Kombi-Service | TS Umzug',
    description: 'Umzug und Entrümpelung in Duisburg kombinieren und sparen. Alles aus einer Hand. Ein Termin, ein Ansprechpartner. Jetzt Kombi-Angebot!',
    h1: 'Umzug und Entrümpelung in Duisburg',
    breadcrumb: 'Umzug & Entrümpelung',
  },
  {
    route: '/umzug-kosten-duisburg',
    title: 'Umzug Kosten Duisburg | Preise & Rechner | TS Umzug',
    description: 'Was kostet ein Umzug in Duisburg? Preisübersicht, Kostenfaktoren & Spartipps. Transparente Festpreise ohne versteckte Kosten!',
    h1: 'Umzug Kosten in Duisburg',
    breadcrumb: 'Umzug Kosten',
  },
  {
    route: '/angebot',
    title: 'Kostenloses Angebot anfordern | TS Umzug Duisburg',
    description: 'Fordern Sie jetzt Ihr kostenloses Umzugsangebot an. Unverbindliche Beratung, transparente Festpreise. TS Umzug - Ihr Partner in Duisburg.',
    h1: 'Kostenloses Angebot anfordern',
    breadcrumb: 'Angebot',
  },
];

// Build MovingCompany schema
function buildMovingCompanySchema(pageUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    '@id': `${COMPANY.url}/#organization`,
    name: COMPANY.name,
    alternateName: COMPANY.legalName,
    url: pageUrl || COMPANY.url,
    logo: { '@type': 'ImageObject', url: COMPANY.logo },
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
    areaServed: COMPANY.serviceAreas.map(area => ({ '@type': 'City', name: area })),
    openingHoursSpecification: COMPANY.openingHours.map(spec => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: spec.days,
      opens: spec.opens,
      closes: spec.closes,
    })),
  };
}

// Build BreadcrumbList schema
function buildBreadcrumbSchema(page) {
  const pageUrl = `${COMPANY.url}${page.route}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: COMPANY.url },
      { '@type': 'ListItem', position: 2, name: page.breadcrumb || page.h1, item: pageUrl },
    ],
  };
}

function generateHTML(page, jsFile, cssFile) {
  const pageUrl = `${COMPANY.url}${page.route}`;
  const schemas = [
    buildMovingCompanySchema(pageUrl),
    buildBreadcrumbSchema(page),
  ];

  return `<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${pageUrl}" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <meta name="author" content="${COMPANY.name}" />

    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${pageUrl}" />
    <meta property="og:image" content="${COMPANY.ogImage}" />
    <meta property="og:locale" content="de_DE" />
    <meta property="og:site_name" content="${COMPANY.name}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="${COMPANY.ogImage}" />

    ${schemas.map(s => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n    ')}

    <script type="module" crossorigin src="${jsFile}"></script>
    <link rel="stylesheet" crossorigin href="${cssFile}">
  </head>

  <body>
    <div id="root">
      <!-- Prerendered SEO content - React will hydrate and replace -->
      <header style="background:#1e293b;color:white;padding:1rem">
        <div style="max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;align-items:center">
          <a href="/" style="font-size:1.25rem;font-weight:bold;color:white;text-decoration:none">
            <span>TS</span><span style="color:#f97316"> Umzug</span>
          </a>
          <a href="${COMPANY.phoneLink}" style="background:#f97316;color:white;padding:0.5rem 1rem;border-radius:0.5rem;text-decoration:none">
            ${COMPANY.phone}
          </a>
        </div>
      </header>

      <!-- Breadcrumb Navigation -->
      <nav aria-label="Breadcrumb" style="background:#f1f5f9;padding:0.75rem 1rem">
        <div style="max-width:1200px;margin:0 auto;font-size:0.875rem;color:#475569">
          <a href="/" style="color:#475569;text-decoration:none">Home</a>
          <span style="margin:0 0.5rem;color:#94a3b8">›</span>
          <span style="color:#1e293b;font-weight:500">${page.breadcrumb || page.h1}</span>
        </div>
      </nav>

      <main style="max-width:1200px;margin:0 auto;padding:2rem 1rem">
        <h1 style="font-size:2.5rem;font-weight:bold;color:#1e293b;margin-bottom:1rem">${page.h1}</h1>
        <p style="font-size:1.125rem;color:#475569;margin-bottom:2rem">${page.description}</p>

        <section id="leistungen" style="background:#f8fafc;padding:1.5rem;border-radius:1rem;margin-bottom:2rem">
          <h2 style="font-size:1.5rem;font-weight:bold;color:#1e293b;margin-bottom:1rem">Warum ${COMPANY.name}?</h2>
          <ul style="list-style:none;padding:0;margin:0">
            <li style="padding:0.5rem 0;color:#475569">✓ Festpreisgarantie ohne versteckte Kosten</li>
            <li style="padding:0.5rem 0;color:#475569">✓ Versicherter Transport aller Gegenstände</li>
            <li style="padding:0.5rem 0;color:#475569">✓ Lokales Team aus ${COMPANY.address.city}</li>
            <li style="padding:0.5rem 0;color:#475569">✓ Flexible Termine - auch am Wochenende</li>
          </ul>
        </section>

        <section id="kontakt" style="margin-bottom:2rem">
          <h2 style="font-size:1.5rem;font-weight:bold;color:#1e293b;margin-bottom:1rem">Kontakt</h2>
          <p style="color:#475569;margin:0.5rem 0">Telefon: <a href="${COMPANY.phoneLink}" style="color:#f97316">${COMPANY.phone}</a></p>
          <p style="color:#475569;margin:0.5rem 0">E-Mail: <a href="mailto:${COMPANY.email}" style="color:#f97316">${COMPANY.email}</a></p>
          <p style="color:#475569;margin:0.5rem 0">Adresse: ${COMPANY.address.full}</p>
        </section>

        <a href="/angebot" style="display:inline-block;background:#f97316;color:white;padding:1rem 2rem;border-radius:0.75rem;text-decoration:none;font-weight:bold">
          Kostenloses Angebot anfordern →
        </a>
      </main>
      <footer style="background:#1e293b;color:#94a3b8;padding:2rem 1rem;margin-top:2rem">
        <div style="max-width:1200px;margin:0 auto;text-align:center">
          <p>© ${new Date().getFullYear()} ${COMPANY.name} - Ihr Umzugsunternehmen in ${COMPANY.address.city}</p>
          <p style="margin-top:0.5rem">${COMPANY.address.full} | ${COMPANY.phone}</p>
        </div>
      </footer>
    </div>
  </body>
</html>`;
}

async function prerender() {
  console.log('Static Prerender for Local SEO Pages');
  console.log('=====================================\n');

  // Read the original index.html to extract JS/CSS file references
  const indexHTML = readFileSync(join(distDir, 'index.html'), 'utf-8');

  // Extract JS and CSS file paths
  const jsMatch = indexHTML.match(/src="(\/assets\/index-[^"]+\.js)"/);
  const cssMatch = indexHTML.match(/href="(\/assets\/index-[^"]+\.css)"/);

  if (!jsMatch || !cssMatch) {
    console.error('Could not find JS/CSS files in index.html');
    process.exit(1);
  }

  const jsFile = jsMatch[1];
  const cssFile = cssMatch[1];

  console.log(`JS file: ${jsFile}`);
  console.log(`CSS file: ${cssFile}\n`);

  let successCount = 0;

  for (const page of PAGES) {
    const html = generateHTML(page, jsFile, cssFile);

    // Create directory
    const outputDir = join(distDir, page.route);
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }

    // Write HTML file
    const outputPath = join(outputDir, 'index.html');
    writeFileSync(outputPath, html);

    // Verify content
    const hasTitle = html.includes(`<title>${page.title}</title>`);
    const hasMeta = html.includes(`<meta name="description" content="${page.description}"`);
    const hasCanonical = html.includes(`<link rel="canonical" href="${COMPANY.url}${page.route}"`);
    const hasSchema = html.includes('application/ld+json');
    const hasBreadcrumb = html.includes('BreadcrumbList');
    const hasH1 = html.includes(`>${page.h1}</h1>`);
    const hasRobots = html.includes('name="robots"');

    console.log(`${page.route}`);
    console.log(`  → ${outputPath}`);
    console.log(`  Title: ${hasTitle ? '✓' : '✗'} | Meta: ${hasMeta ? '✓' : '✗'} | Canonical: ${hasCanonical ? '✓' : '✗'} | Schema: ${hasSchema ? '✓' : '✗'} | Breadcrumb: ${hasBreadcrumb ? '✓' : '✗'} | H1: ${hasH1 ? '✓' : '✗'} | Robots: ${hasRobots ? '✓' : '✗'}`);

    if (hasTitle && hasMeta && hasCanonical && hasSchema && hasBreadcrumb && hasH1 && hasRobots) {
      successCount++;
    }
  }

  console.log(`\n=====================================`);
  console.log(`Prerendered ${successCount}/${PAGES.length} pages successfully.`);
  console.log(`\nVerify with: ls -la dist/*/index.html`);
}

prerender().catch(console.error);
