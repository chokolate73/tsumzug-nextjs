#!/usr/bin/env node
/**
 * Prerender Script for Local SEO Pages
 *
 * This script prerenders specific routes to static HTML for better SEO.
 * Run after `npm run build` completes.
 *
 * Usage:
 *   npm run build && node scripts/prerender.mjs
 *
 * Prerequisites:
 *   npm install puppeteer --save-dev
 */

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = join(__dirname, '..', 'dist');

// Routes to prerender
const ROUTES = [
  '/',
  '/umzugsunternehmen-duisburg',
  '/privatumzug-duisburg',
  '/firmenumzug-duisburg',
  '/entruempelung-duisburg',
  '/haushaltsaufloesung-duisburg',
  '/moebeltransport-duisburg',
  '/umzug-und-entruempelung-duisburg',
  '/umzug-kosten-duisburg',
  '/angebot',
];

async function prerender() {
  let puppeteer;
  try {
    puppeteer = await import('puppeteer');
  } catch (e) {
    console.error('Puppeteer not installed. Run: npm install puppeteer --save-dev');
    process.exit(1);
  }

  const browser = await puppeteer.default.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  // Start a simple HTTP server for the dist folder
  const { createServer } = await import('http');
  const { readFile } = await import('fs/promises');
  const { extname } = await import('path');

  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
  };

  const server = createServer(async (req, res) => {
    let filePath = join(distDir, req.url === '/' ? '/index.html' : req.url);

    // SPA fallback
    if (!existsSync(filePath) && !req.url.includes('.')) {
      filePath = join(distDir, 'index.html');
    }

    try {
      const data = await readFile(filePath);
      const ext = extname(filePath);
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
      res.end(data);
    } catch (err) {
      res.writeHead(404);
      res.end('Not found');
    }
  });

  await new Promise((resolve) => server.listen(3333, resolve));
  console.log('Preview server started on http://localhost:3333');

  console.log(`\nPrerendering ${ROUTES.length} routes...\n`);

  for (const route of ROUTES) {
    const page = await browser.newPage();

    try {
      const url = `http://localhost:3333${route}`;
      console.log(`Prerendering: ${route}`);

      await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });

      // Wait for React to render
      await page.waitForSelector('h1', { timeout: 10000 }).catch(() => {});

      // Get the fully rendered HTML
      const html = await page.content();

      // Determine output path
      const outputPath = route === '/'
        ? join(distDir, 'index.html')
        : join(distDir, route, 'index.html');

      // Create directory if needed
      const outputDir = dirname(outputPath);
      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
      }

      // Write the prerendered HTML
      writeFileSync(outputPath, html);

      // Verify content
      const hasTitle = html.includes('<title>') && !html.includes('<title>TS Umzug</title>');
      const hasSchema = html.includes('application/ld+json');
      const hasContent = html.includes('Duisburg') || html.includes('Umzug');

      console.log(`  ✓ Saved: ${outputPath}`);
      console.log(`    Title: ${hasTitle ? '✓' : '○'} | Schema: ${hasSchema ? '✓' : '○'} | Content: ${hasContent ? '✓' : '○'}`);

    } catch (err) {
      console.error(`  ✗ Failed: ${route}`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();

  console.log('\nPrerendering complete!');
  console.log('The dist folder now contains prerendered HTML for all Local SEO pages.');
}

prerender().catch(console.error);
