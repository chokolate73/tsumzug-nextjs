#!/usr/bin/env node
/**
 * Production SEO Audit Script
 *
 * Validates:
 * - sitemap.xml contents and structure
 * - robots.txt configuration
 * - All pages have proper meta tags
 * - JSON-LD structured data presence
 * - NAP consistency
 * - Canonical URLs
 *
 * Usage: node scripts/prod-seo-audit.mjs [--url=https://tsumzug.de]
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

// Parse command line args
const args = process.argv.slice(2);
const urlArg = args.find(a => a.startsWith('--url='));
const PROD_URL = urlArg ? urlArg.split('=')[1] : 'https://tsumzug.de';

// Company data for NAP verification
const EXPECTED_NAP = {
  name: ['TS Umzug', 'TopSicher Umzüge'],
  phone: ['+49 176 6519 7997', '+4917665197997', '0176 6519 7997'],
  address: {
    street: 'Brückelstraße 54',
    postalCode: '47137',
    city: 'Duisburg',
  },
  email: 'info@tsumzug.de',
};

// Expected pages (must match routes in App.tsx)
const EXPECTED_PAGES = [
  '/',
  '/angebot',
  '/impressum',
  '/datenschutz',
  '/en',
  '/ru',
  // Local SEO pages
  '/umzugsunternehmen-duisburg',
  '/privatumzug-duisburg',
  '/firmenumzug-duisburg',
  '/entruempelung-duisburg',
  '/haushaltsaufloesung-duisburg',
  '/moebeltransport-duisburg',
  '/umzug-und-entruempelung-duisburg',
  '/umzug-kosten-duisburg',
];

let errors = 0;
let warnings = 0;

function logPass(msg) {
  console.log(`  ✓ ${msg}`);
}

function logFail(msg) {
  console.log(`  ✗ ${msg}`);
  errors++;
}

function logWarn(msg) {
  console.log(`  ⚠ ${msg}`);
  warnings++;
}

function logSection(title) {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`  ${title}`);
  console.log('='.repeat(50));
}

// ============================================
// Check sitemap.xml
// ============================================
function checkSitemap() {
  logSection('SITEMAP.XML');

  const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml');

  if (!existsSync(sitemapPath)) {
    logFail('sitemap.xml not found in /public');
    return;
  }

  const content = readFileSync(sitemapPath, 'utf-8');

  // Check XML declaration
  if (!content.includes('<?xml version="1.0"')) {
    logFail('Missing XML declaration');
  } else {
    logPass('Valid XML declaration');
  }

  // Check urlset
  if (!content.includes('<urlset')) {
    logFail('Missing <urlset> element');
  } else {
    logPass('Has <urlset> element');
  }

  // Check for expected pages
  let foundPages = 0;
  let missingPages = [];

  EXPECTED_PAGES.forEach(page => {
    const fullUrl = `${PROD_URL}${page}`;
    // Handle both with and without trailing slash
    if (content.includes(`<loc>${fullUrl}</loc>`) || content.includes(`<loc>${fullUrl}/</loc>`)) {
      foundPages++;
    } else {
      missingPages.push(page);
    }
  });

  if (missingPages.length === 0) {
    logPass(`All ${EXPECTED_PAGES.length} expected pages in sitemap`);
  } else {
    logWarn(`Missing pages in sitemap: ${missingPages.join(', ')}`);
  }

  // Check lastmod dates
  const lastmodCount = (content.match(/<lastmod>/g) || []).length;
  const urlCount = (content.match(/<url>/g) || []).length;

  if (lastmodCount === urlCount) {
    logPass(`All ${urlCount} URLs have lastmod dates`);
  } else {
    logWarn(`${urlCount - lastmodCount} URLs missing lastmod dates`);
  }

  // Check priority
  if (content.includes('<priority>')) {
    logPass('Priority values present');
  } else {
    logWarn('No priority values (optional but recommended)');
  }
}

// ============================================
// Check robots.txt
// ============================================
function checkRobots() {
  logSection('ROBOTS.TXT');

  const robotsPath = join(process.cwd(), 'public', 'robots.txt');

  if (!existsSync(robotsPath)) {
    logFail('robots.txt not found in /public');
    return;
  }

  const content = readFileSync(robotsPath, 'utf-8');

  // Check User-agent
  if (content.includes('User-agent: *')) {
    logPass('Has User-agent: * directive');
  } else {
    logFail('Missing User-agent: * directive');
  }

  // Check Sitemap reference
  if (content.includes(`Sitemap: ${PROD_URL}/sitemap.xml`)) {
    logPass('Sitemap URL correctly specified');
  } else if (content.includes('Sitemap:')) {
    logWarn('Sitemap URL may be incorrect');
  } else {
    logFail('Missing Sitemap directive');
  }

  // Check for blocked paths
  const blocked = content.match(/Disallow:\s*(.+)/g) || [];
  if (blocked.length > 0) {
    console.log(`  ℹ Blocked paths: ${blocked.map(b => b.replace('Disallow:', '').trim()).join(', ')}`);
  }

  // Check critical paths are NOT blocked
  const criticalPaths = ['/', '/angebot', '/umzug', '/en', '/ru'];
  criticalPaths.forEach(path => {
    if (content.includes(`Disallow: ${path}`) && !content.includes(`Disallow: ${path}/`)) {
      logFail(`Critical path blocked: ${path}`);
    }
  });
  logPass('Critical paths not blocked');
}

// ============================================
// Check company.ts NAP consistency
// ============================================
function checkCompanyConfig() {
  logSection('COMPANY CONFIG (NAP)');

  const companyPath = join(process.cwd(), 'src', 'config', 'company.ts');

  if (!existsSync(companyPath)) {
    logFail('company.ts not found');
    return;
  }

  const content = readFileSync(companyPath, 'utf-8');

  // Check name
  if (EXPECTED_NAP.name.some(n => content.includes(`name: '${n}'`) || content.includes(`legalName: '${n}'`))) {
    logPass('Company name matches expected');
  } else {
    logFail('Company name mismatch');
  }

  // Check phone
  if (content.includes(EXPECTED_NAP.phone[0]) || content.includes(EXPECTED_NAP.phone[1])) {
    logPass('Phone number matches expected');
  } else {
    logFail('Phone number mismatch');
  }

  // Check address
  if (content.includes(EXPECTED_NAP.address.street) &&
      content.includes(EXPECTED_NAP.address.postalCode) &&
      content.includes(EXPECTED_NAP.address.city)) {
    logPass('Address matches expected');
  } else {
    logFail('Address mismatch');
  }

  // Check email
  if (content.includes(EXPECTED_NAP.email)) {
    logPass('Email matches expected');
  } else {
    logFail('Email mismatch');
  }

  // Check geo coordinates (exact for Brückelstraße 54)
  if (content.includes('51.47270749488183') && content.includes('6.782824339817898')) {
    logPass('Geo coordinates are exact');
  } else if (content.includes('51.47') && content.includes('6.78')) {
    logWarn('Geo coordinates may be approximate');
  } else {
    logFail('Geo coordinates missing or incorrect');
  }
}

// ============================================
// Check prerender output
// ============================================
function checkPrerenderOutput() {
  logSection('PRERENDER OUTPUT');

  const prerenderDir = join(process.cwd(), 'dist', 'prerender');

  if (!existsSync(prerenderDir)) {
    logWarn('Prerender directory not found (run npm run prerender first)');
    return;
  }

  const expectedFiles = EXPECTED_PAGES
    .filter(p => p.startsWith('/umzug') || p.startsWith('/moebel') || p.startsWith('/entruempel') || p.startsWith('/haushalts') || p.startsWith('/buero') || p.startsWith('/firmen'))
    .map(p => `${p.slice(1)}.html`);

  let found = 0;
  let missing = [];

  expectedFiles.forEach(file => {
    const filePath = join(prerenderDir, file);
    if (existsSync(filePath)) {
      found++;

      // Check content quality
      const content = readFileSync(filePath, 'utf-8');

      // Check for JSON-LD
      if (!content.includes('application/ld+json')) {
        logWarn(`${file}: Missing JSON-LD`);
      }

      // Check for meta description
      if (!content.includes('name="description"')) {
        logWarn(`${file}: Missing meta description`);
      }

      // Check for canonical
      if (!content.includes('rel="canonical"')) {
        logWarn(`${file}: Missing canonical URL`);
      }

      // Check for NAP
      if (!content.includes(EXPECTED_NAP.phone[0]) && !content.includes(EXPECTED_NAP.phone[1])) {
        logWarn(`${file}: Phone not visible in prerender`);
      }
    } else {
      missing.push(file);
    }
  });

  if (missing.length === 0) {
    logPass(`All ${expectedFiles.length} Local SEO pages prerendered`);
  } else {
    logWarn(`Missing prerender files: ${missing.join(', ')}`);
  }
}

// ============================================
// Check index.html
// ============================================
function checkIndexHtml() {
  logSection('INDEX.HTML');

  const indexPath = join(process.cwd(), 'index.html');

  if (!existsSync(indexPath)) {
    logFail('index.html not found');
    return;
  }

  const content = readFileSync(indexPath, 'utf-8');

  // Check lang attribute
  if (content.includes('lang="de"')) {
    logPass('Has lang="de" attribute');
  } else {
    logFail('Missing or incorrect lang attribute');
  }

  // Check meta charset
  if (content.includes('charset="UTF-8"')) {
    logPass('Has UTF-8 charset');
  } else {
    logFail('Missing UTF-8 charset');
  }

  // Check viewport
  if (content.includes('name="viewport"')) {
    logPass('Has viewport meta tag');
  } else {
    logFail('Missing viewport meta tag');
  }

  // Check title
  if (content.includes('<title>') && content.includes('Umzüge') || content.includes('Umzug')) {
    logPass('Has relevant title tag');
  } else {
    logWarn('Title may not be optimized');
  }

  // Check meta description
  if (content.includes('name="description"')) {
    logPass('Has meta description');
  } else {
    logFail('Missing meta description');
  }

  // Check OG tags
  if (content.includes('og:title') && content.includes('og:description')) {
    logPass('Has Open Graph tags');
  } else {
    logWarn('Missing Open Graph tags');
  }

  // Check GA4
  if (content.includes('googletagmanager.com/gtag')) {
    if (content.includes('GA_MEASUREMENT_ID')) {
      logWarn('GA4 script present but ID not configured (placeholder)');
    } else {
      logPass('GA4 tracking configured');
    }
  } else {
    logWarn('GA4 tracking not found');
  }
}

// ============================================
// Check tracking utilities
// ============================================
function checkTracking() {
  logSection('TRACKING UTILITIES');

  const trackingPath = join(process.cwd(), 'src', 'utils', 'tracking.ts');

  if (!existsSync(trackingPath)) {
    logWarn('tracking.ts not found');
    return;
  }

  const content = readFileSync(trackingPath, 'utf-8');

  // Check for key tracking functions
  const requiredFunctions = [
    'trackCallClick',
    'trackWhatsAppClick',
    'trackFormSubmit',
    'trackAngebotClick',
    'captureUTMParams',
    'getStoredUTMParams',
  ];

  requiredFunctions.forEach(fn => {
    if (content.includes(`export function ${fn}`) || content.includes(`export const ${fn}`)) {
      logPass(`Has ${fn} function`);
    } else {
      logFail(`Missing ${fn} function`);
    }
  });

  // Check UTM persistence
  if (content.includes('localStorage')) {
    logPass('UTM persistence implemented');
  } else {
    logWarn('UTM persistence may not be implemented');
  }
}

// ============================================
// Main
// ============================================
console.log('\n🔍 PRODUCTION SEO AUDIT');
console.log(`Target: ${PROD_URL}`);
console.log(`Time: ${new Date().toISOString()}`);

checkSitemap();
checkRobots();
checkCompanyConfig();
checkIndexHtml();
checkTracking();
checkPrerenderOutput();

// Summary
logSection('SUMMARY');
console.log(`\n  Errors: ${errors}`);
console.log(`  Warnings: ${warnings}`);

if (errors === 0 && warnings === 0) {
  console.log('\n  ✅ All checks passed!\n');
  process.exit(0);
} else if (errors === 0) {
  console.log('\n  ⚠️  Passed with warnings\n');
  process.exit(0);
} else {
  console.log('\n  ❌ Failed - please fix errors\n');
  process.exit(1);
}
