#!/usr/bin/env node
/**
 * SEO QA Checklist Script
 *
 * Validates all SEO requirements across the site:
 * - Meta tags (title, description, canonical, robots)
 * - JSON-LD schemas (MovingCompany, BreadcrumbList, FAQPage)
 * - Open Graph and Twitter Cards
 * - NAP consistency
 * - Internal linking
 * - Accessibility basics
 *
 * Usage:
 *   node scripts/seo-qa-checklist.mjs [--local | --production]
 *
 * Options:
 *   --local       Check built files in dist/ (default)
 *   --production  Check live site at https://tsumzug.de
 */

import { readFileSync, existsSync, readdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = join(__dirname, '..', 'dist');

// Expected company data for NAP consistency
const EXPECTED_NAP = {
  name: 'TS Umzug',
  phone: '+49 176 6519 7997',
  email: 'info@tsumzug.de',
  street: 'Brückelstraße 54',
  postalCode: '47137',
  city: 'Duisburg',
};

// Pages to check
const PAGES = [
  { path: '/umzugsunternehmen-duisburg', name: 'Umzugsunternehmen' },
  { path: '/privatumzug-duisburg', name: 'Privatumzug' },
  { path: '/firmenumzug-duisburg', name: 'Firmenumzug' },
  { path: '/entruempelung-duisburg', name: 'Entrümpelung' },
  { path: '/haushaltsaufloesung-duisburg', name: 'Haushaltsauflösung' },
  { path: '/moebeltransport-duisburg', name: 'Möbeltransport' },
  { path: '/umzug-und-entruempelung-duisburg', name: 'Umzug & Entrümpelung' },
  { path: '/umzug-kosten-duisburg', name: 'Umzug Kosten' },
  { path: '/angebot', name: 'Angebot' },
];

// Colors
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';

function pass(msg) { console.log(`  ${GREEN}✓${RESET} ${msg}`); return true; }
function fail(msg) { console.log(`  ${RED}✗${RESET} ${msg}`); return false; }
function warn(msg) { console.log(`  ${YELLOW}○${RESET} ${msg}`); return null; }
function info(msg) { console.log(`  ${CYAN}ℹ${RESET} ${msg}`); }

function checkPage(html, pagePath, pageName) {
  console.log(`\n${BOLD}${pageName}${RESET} (${pagePath})`);
  console.log('─'.repeat(50));

  let passed = 0;
  let failed = 0;
  let warnings = 0;

  // 1. Title tag
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  if (titleMatch && titleMatch[1].length > 10) {
    const title = titleMatch[1];
    if (title.includes('Duisburg') || title.includes('TS Umzug')) {
      pass(`Title: "${title.substring(0, 60)}${title.length > 60 ? '...' : ''}"`);
      passed++;
    } else {
      warn(`Title missing location/brand: "${title.substring(0, 50)}..."`);
      warnings++;
    }

    if (title.length < 30) {
      warn(`Title too short (${title.length} chars, recommend 50-60)`);
      warnings++;
    } else if (title.length > 60) {
      warn(`Title may be truncated in SERP (${title.length} chars)`);
      warnings++;
    }
  } else {
    fail('Title tag missing or too short');
    failed++;
  }

  // 2. Meta description
  const descMatch = html.match(/<meta name="description" content="([^"]+)"/);
  if (descMatch && descMatch[1].length > 50) {
    const desc = descMatch[1];
    pass(`Meta description: ${desc.length} chars`);
    passed++;

    if (desc.length < 120) {
      warn(`Description short (${desc.length} chars, recommend 150-160)`);
      warnings++;
    } else if (desc.length > 160) {
      warn(`Description may be truncated (${desc.length} chars)`);
      warnings++;
    }
  } else {
    fail('Meta description missing or too short');
    failed++;
  }

  // 3. Canonical URL
  const canonicalMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (canonicalMatch) {
    const canonical = canonicalMatch[1];
    if (canonical.includes('tsumzug.de') && canonical.includes(pagePath)) {
      pass(`Canonical: ${canonical}`);
      passed++;
    } else {
      fail(`Canonical mismatch: ${canonical}`);
      failed++;
    }
  } else {
    fail('Canonical tag missing');
    failed++;
  }

  // 4. Robots meta
  const robotsMatch = html.match(/<meta name="robots" content="([^"]+)"/);
  if (robotsMatch) {
    const robots = robotsMatch[1];
    if (robots.includes('index') && robots.includes('follow')) {
      pass(`Robots: ${robots}`);
      passed++;
    } else {
      warn(`Robots directive may block indexing: ${robots}`);
      warnings++;
    }
  } else {
    warn('Robots meta tag not found (default: index, follow)');
    warnings++;
  }

  // 5. H1 tag
  const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  if (h1Match) {
    pass(`H1: "${h1Match[1]}"`);
    passed++;
  } else {
    fail('H1 tag missing');
    failed++;
  }

  // 6. JSON-LD Schemas
  const schemaMatches = html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/g);
  if (schemaMatches && schemaMatches.length > 0) {
    info(`Found ${schemaMatches.length} JSON-LD schema(s)`);

    let hasMovingCompany = false;
    let hasBreadcrumb = false;
    let hasFAQ = false;

    for (const match of schemaMatches) {
      try {
        const jsonStr = match.replace(/<script type="application\/ld\+json">/, '').replace(/<\/script>/, '');
        const schema = JSON.parse(jsonStr);

        if (schema['@type'] === 'MovingCompany') {
          hasMovingCompany = true;
          // Check NAP in schema
          if (schema.telephone?.includes('176 6519 7997')) {
            pass('MovingCompany schema with correct phone');
            passed++;
          } else {
            fail('MovingCompany schema has wrong phone');
            failed++;
          }
        }

        if (schema['@type'] === 'BreadcrumbList') {
          hasBreadcrumb = true;
          pass('BreadcrumbList schema present');
          passed++;
        }

        if (schema['@type'] === 'FAQPage') {
          hasFAQ = true;
          const faqCount = schema.mainEntity?.length || 0;
          pass(`FAQPage schema with ${faqCount} questions`);
          passed++;
        }
      } catch (e) {
        fail(`Invalid JSON-LD: ${e.message}`);
        failed++;
      }
    }

    if (!hasMovingCompany) {
      fail('MovingCompany schema missing');
      failed++;
    }
    if (!hasBreadcrumb) {
      warn('BreadcrumbList schema missing');
      warnings++;
    }
  } else {
    fail('No JSON-LD schemas found');
    failed++;
  }

  // 7. Open Graph tags
  const ogTitle = html.includes('property="og:title"');
  const ogDesc = html.includes('property="og:description"');
  const ogImage = html.includes('property="og:image"');
  const ogUrl = html.includes('property="og:url"');

  if (ogTitle && ogDesc && ogImage && ogUrl) {
    pass('Open Graph tags present (title, description, image, url)');
    passed++;
  } else {
    const missing = [];
    if (!ogTitle) missing.push('og:title');
    if (!ogDesc) missing.push('og:description');
    if (!ogImage) missing.push('og:image');
    if (!ogUrl) missing.push('og:url');
    fail(`Missing Open Graph tags: ${missing.join(', ')}`);
    failed++;
  }

  // 8. Twitter Card tags
  const twitterCard = html.includes('name="twitter:card"');
  if (twitterCard) {
    pass('Twitter Card tags present');
    passed++;
  } else {
    warn('Twitter Card tags missing');
    warnings++;
  }

  // 9. NAP Consistency check
  const hasPhone = html.includes(EXPECTED_NAP.phone) || html.includes('4917665197997');
  const hasEmail = html.includes(EXPECTED_NAP.email);
  const hasAddress = html.includes(EXPECTED_NAP.street) || html.includes('Brückelstraße');

  if (hasPhone && hasEmail && hasAddress) {
    pass('NAP data consistent');
    passed++;
  } else {
    const missing = [];
    if (!hasPhone) missing.push('phone');
    if (!hasEmail) missing.push('email');
    if (!hasAddress) missing.push('address');
    warn(`NAP data incomplete: missing ${missing.join(', ')}`);
    warnings++;
  }

  // 10. Internal links
  const internalLinks = (html.match(/href="\/[^"]+"/g) || []).length;
  if (internalLinks >= 3) {
    pass(`Internal links: ${internalLinks} found`);
    passed++;
  } else {
    warn(`Few internal links: ${internalLinks} found`);
    warnings++;
  }

  // 11. Images with alt text
  const imgTags = html.match(/<img[^>]+>/g) || [];
  const imgsWithAlt = imgTags.filter(img => img.includes('alt="') && !img.includes('alt=""')).length;
  if (imgTags.length === 0) {
    info('No images found in prerendered HTML');
  } else if (imgsWithAlt === imgTags.length) {
    pass(`All ${imgTags.length} images have alt text`);
    passed++;
  } else {
    warn(`${imgTags.length - imgsWithAlt}/${imgTags.length} images missing alt text`);
    warnings++;
  }

  // 12. Section anchors
  const hasLeistungen = html.includes('id="leistungen"');
  const hasPreise = html.includes('id="preise"');
  const hasKontakt = html.includes('id="kontakt"');
  const hasFaq = html.includes('id="faq"');

  const anchors = [hasLeistungen, hasPreise, hasKontakt, hasFaq].filter(Boolean).length;
  if (anchors >= 2) {
    pass(`Section anchors: ${anchors}/4 present`);
    passed++;
  } else {
    warn(`Section anchors: only ${anchors}/4 present`);
    warnings++;
  }

  return { passed, failed, warnings };
}

async function runChecks() {
  const args = process.argv.slice(2);
  const isProduction = args.includes('--production');

  console.log(`\n${BOLD}═══════════════════════════════════════════════════════${RESET}`);
  console.log(`${BOLD}  SEO QA Checklist - ${isProduction ? 'PRODUCTION' : 'LOCAL BUILD'}${RESET}`);
  console.log(`${BOLD}═══════════════════════════════════════════════════════${RESET}`);

  if (isProduction) {
    console.log(`\n${YELLOW}Production checks require curl. Running HTTP requests...${RESET}`);
    // For production, we'd need to fetch pages via HTTP
    // This is a simplified version that only checks local builds
    console.log(`${RED}Production mode not yet implemented. Use --local for now.${RESET}`);
    process.exit(1);
  }

  // Check local dist folder
  if (!existsSync(distDir)) {
    console.log(`\n${RED}Error: dist/ folder not found. Run 'npm run build:prerender' first.${RESET}\n`);
    process.exit(1);
  }

  let totalPassed = 0;
  let totalFailed = 0;
  let totalWarnings = 0;

  for (const page of PAGES) {
    const htmlPath = join(distDir, page.path, 'index.html');

    if (!existsSync(htmlPath)) {
      console.log(`\n${BOLD}${page.name}${RESET} (${page.path})`);
      console.log('─'.repeat(50));
      fail(`File not found: ${htmlPath}`);
      totalFailed++;
      continue;
    }

    const html = readFileSync(htmlPath, 'utf-8');
    const results = checkPage(html, page.path, page.name);

    totalPassed += results.passed;
    totalFailed += results.failed;
    totalWarnings += results.warnings;
  }

  // Summary
  console.log(`\n${BOLD}═══════════════════════════════════════════════════════${RESET}`);
  console.log(`${BOLD}  SUMMARY${RESET}`);
  console.log(`${BOLD}═══════════════════════════════════════════════════════${RESET}`);
  console.log(`\n  ${GREEN}Passed:${RESET}   ${totalPassed}`);
  console.log(`  ${RED}Failed:${RESET}   ${totalFailed}`);
  console.log(`  ${YELLOW}Warnings:${RESET} ${totalWarnings}`);

  const score = Math.round((totalPassed / (totalPassed + totalFailed)) * 100);
  console.log(`\n  ${BOLD}Score: ${score >= 80 ? GREEN : score >= 60 ? YELLOW : RED}${score}%${RESET}`);

  if (totalFailed === 0) {
    console.log(`\n  ${GREEN}${BOLD}✓ All critical checks passed!${RESET}`);
  } else {
    console.log(`\n  ${RED}${BOLD}✗ ${totalFailed} critical issues need fixing${RESET}`);
  }

  // Next steps
  console.log(`\n${BOLD}Next Steps:${RESET}`);
  console.log('  1. Fix any failed checks above');
  console.log('  2. Run Rich Results Test: https://search.google.com/test/rich-results');
  console.log('  3. Run PageSpeed Insights: https://pagespeed.web.dev/');
  console.log('  4. Submit sitemap to Google Search Console');
  console.log('');

  process.exit(totalFailed > 0 ? 1 : 0);
}

runChecks().catch(console.error);
