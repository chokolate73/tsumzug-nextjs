#!/usr/bin/env node
/**
 * SEO Duplicates & Canonicals Checker
 *
 * Validates:
 * - Unique title tags across all pages
 * - Unique meta descriptions across all pages
 * - Proper canonical URLs (no trailing slashes, no parameters)
 * - No keyword cannibalization between Local SEO pages
 *
 * Usage: node scripts/check-seo-duplicates.mjs
 */

import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// Pages to check (path -> component file)
const PAGES = {
  '/': 'src/pages/Index.tsx',
  '/en': 'src/pages/HomeEn.tsx',
  '/ru': 'src/pages/HomeRu.tsx',
  '/angebot': 'src/pages/Angebot.tsx',
  '/umzugsunternehmen-duisburg': 'src/pages/duisburg/UmzugsunternehmenDuisburg.tsx',
  '/privatumzug-duisburg': 'src/pages/duisburg/PrivatumzugDuisburg.tsx',
  '/firmenumzug-duisburg': 'src/pages/duisburg/FirmenumzugDuisburg.tsx',
  '/entruempelung-duisburg': 'src/pages/duisburg/EntruempelungDuisburg.tsx',
  '/haushaltsaufloesung-duisburg': 'src/pages/duisburg/HaushaltsaufloesungDuisburg.tsx',
  '/moebeltransport-duisburg': 'src/pages/duisburg/MoebeltransportDuisburg.tsx',
  '/umzug-und-entruempelung-duisburg': 'src/pages/duisburg/UmzugUndEntruempelungDuisburg.tsx',
  '/umzug-kosten-duisburg': 'src/pages/duisburg/UmzugKostenDuisburg.tsx',
};

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

// Extract title from component file
function extractTitle(content) {
  // Look for metaTitle prop or title in SEO component
  const metaTitleMatch = content.match(/metaTitle[=:]?\s*["'`]([^"'`]+)["'`]/);
  if (metaTitleMatch) return metaTitleMatch[1];

  const seoTitleMatch = content.match(/title[=:]?\s*["'`]([^"'`]+)["'`]/);
  if (seoTitleMatch) return seoTitleMatch[1];

  return null;
}

// Extract description from component file
function extractDescription(content) {
  const metaDescMatch = content.match(/metaDescription[=:]?\s*["'`]([^"'`]+)["'`]/);
  if (metaDescMatch) return metaDescMatch[1];

  const descMatch = content.match(/description[=:]?\s*["'`]([^"'`]+)["'`]/);
  if (descMatch) return descMatch[1];

  return null;
}

// Extract canonical from component file
function extractCanonical(content) {
  const canonicalMatch = content.match(/canonical(?:Path|Url)?[=:]?\s*["'`]([^"'`]+)["'`]/);
  if (canonicalMatch) return canonicalMatch[1];
  return null;
}

// Check for common keywords that might cause cannibalization
function extractKeywords(title, description) {
  const text = `${title} ${description}`.toLowerCase();
  const keywords = [];

  const keywordPatterns = [
    'umzug duisburg',
    'umzugsunternehmen duisburg',
    'umzugsfirma duisburg',
    'privatumzug duisburg',
    'firmenumzug duisburg',
    'büroumzug duisburg',
    'entrümpelung duisburg',
    'haushaltsauflösung duisburg',
    'möbeltransport duisburg',
  ];

  keywordPatterns.forEach(kw => {
    if (text.includes(kw)) {
      keywords.push(kw);
    }
  });

  return keywords;
}

// Main check
function main() {
  console.log('\n🔍 SEO DUPLICATES & CANONICALS CHECK');
  console.log(`Time: ${new Date().toISOString()}`);

  const pageData = [];

  // Collect data from all pages
  logSection('COLLECTING PAGE DATA');

  for (const [path, file] of Object.entries(PAGES)) {
    const filePath = join(ROOT, file);

    if (!existsSync(filePath)) {
      logWarn(`File not found: ${file}`);
      continue;
    }

    const content = readFileSync(filePath, 'utf-8');
    const title = extractTitle(content);
    const description = extractDescription(content);
    const canonical = extractCanonical(content);

    if (!title) {
      logWarn(`${path}: Could not extract title`);
    }
    if (!description) {
      logWarn(`${path}: Could not extract description`);
    }

    pageData.push({
      path,
      file,
      title: title || '(not found)',
      description: description || '(not found)',
      canonical: canonical || path,
      keywords: extractKeywords(title || '', description || ''),
    });

    console.log(`  ℹ ${path}: "${title?.substring(0, 40)}..."`);
  }

  // Check for duplicate titles
  logSection('CHECKING DUPLICATE TITLES');

  const titleMap = new Map();
  pageData.forEach(page => {
    if (page.title === '(not found)') return;

    if (titleMap.has(page.title)) {
      logFail(`Duplicate title found:`);
      console.log(`      "${page.title}"`);
      console.log(`      Used by: ${titleMap.get(page.title)} AND ${page.path}`);
    } else {
      titleMap.set(page.title, page.path);
    }
  });

  if (errors === 0) {
    logPass(`All ${titleMap.size} titles are unique`);
  }

  // Check for duplicate descriptions
  logSection('CHECKING DUPLICATE DESCRIPTIONS');

  const descMap = new Map();
  let descErrors = 0;
  pageData.forEach(page => {
    if (page.description === '(not found)') return;

    // Normalize description for comparison
    const normalizedDesc = page.description.toLowerCase().trim();

    if (descMap.has(normalizedDesc)) {
      logFail(`Duplicate description found:`);
      console.log(`      "${page.description.substring(0, 60)}..."`);
      console.log(`      Used by: ${descMap.get(normalizedDesc)} AND ${page.path}`);
      descErrors++;
    } else {
      descMap.set(normalizedDesc, page.path);
    }
  });

  if (descErrors === 0) {
    logPass(`All ${descMap.size} descriptions are unique`);
  }

  // Check canonical URLs
  logSection('CHECKING CANONICAL URLS');

  pageData.forEach(page => {
    const canonical = page.canonical;

    // Check for trailing slashes (except root)
    if (canonical !== '/' && canonical.endsWith('/')) {
      logFail(`${page.path}: Canonical has trailing slash: ${canonical}`);
    }

    // Check for query parameters
    if (canonical.includes('?')) {
      logFail(`${page.path}: Canonical has query params: ${canonical}`);
    }

    // Check canonical matches path (for local pages)
    if (page.path.startsWith('/') && !canonical.startsWith('http')) {
      if (canonical !== page.path && canonical !== page.path.replace(/\/$/, '')) {
        logWarn(`${page.path}: Canonical might not match path: ${canonical}`);
      }
    }
  });

  if (errors === 0) {
    logPass('All canonical URLs are properly formatted');
  }

  // Check for keyword cannibalization
  logSection('CHECKING KEYWORD CANNIBALIZATION');

  const keywordMap = new Map();
  pageData.forEach(page => {
    page.keywords.forEach(kw => {
      if (!keywordMap.has(kw)) {
        keywordMap.set(kw, []);
      }
      keywordMap.get(kw).push(page.path);
    });
  });

  let cannibalizationFound = false;
  keywordMap.forEach((pages, keyword) => {
    if (pages.length > 1) {
      // This is expected for some keywords, but flag if too many
      if (pages.length > 3) {
        logWarn(`Keyword "${keyword}" appears in ${pages.length} pages: ${pages.join(', ')}`);
        cannibalizationFound = true;
      }
    }
  });

  if (!cannibalizationFound) {
    logPass('No significant keyword cannibalization detected');
  }

  // Title length check
  logSection('CHECKING TITLE LENGTHS');

  pageData.forEach(page => {
    if (page.title === '(not found)') return;

    const len = page.title.length;
    if (len < 30) {
      logWarn(`${page.path}: Title too short (${len} chars)`);
    } else if (len > 60) {
      logWarn(`${page.path}: Title may be truncated (${len} chars)`);
    }
  });

  logPass('Title lengths checked');

  // Description length check
  logSection('CHECKING DESCRIPTION LENGTHS');

  pageData.forEach(page => {
    if (page.description === '(not found)') return;

    const len = page.description.length;
    if (len < 120) {
      logWarn(`${page.path}: Description too short (${len} chars)`);
    } else if (len > 160) {
      logWarn(`${page.path}: Description may be truncated (${len} chars)`);
    }
  });

  logPass('Description lengths checked');

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
}

main();
