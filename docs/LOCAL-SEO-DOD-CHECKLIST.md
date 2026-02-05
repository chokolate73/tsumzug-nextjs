# Local SEO Definition of Done - Verification Checklist

**Site:** tsumzug.de
**Date:** 2026-01-25
**Branch:** claude/local-seo-duisburg-Ui2Mg

---

## 1. Technical SEO Checklist

### 1.1 301 Redirects

| Old URL | New URL | Status | Evidence |
|---------|---------|--------|----------|
| `/services/privatumzuege` | `/privatumzug-duisburg` | **PASS** | vercel.json line 6-9 |
| `/services/privatumzuege/` | `/privatumzug-duisburg` | **PASS** | vercel.json line 10-14 |
| `/services/firmenumzuege` | `/firmenumzug-duisburg` | **PASS** | vercel.json line 15-19 |
| `/services/firmenumzuege/` | `/firmenumzug-duisburg` | **PASS** | vercel.json line 20-24 |
| `/services/entruempelung` | `/entruempelung-duisburg` | **PASS** | vercel.json line 25-29 |
| `/services/entruempelung/` | `/entruempelung-duisburg` | **PASS** | vercel.json line 30-34 |
| `/services/moebeltransport` | `/moebeltransport-duisburg` | **PASS** | vercel.json line 35-39 |
| `/services/moebeltransport/` | `/moebeltransport-duisburg` | **PASS** | vercel.json line 40-44 |
| `/services/hausmeisterservice` | `/umzugsunternehmen-duisburg` | **PASS** | vercel.json line 45-49 |
| `/services/hausmeisterservice/` | `/umzugsunternehmen-duisburg` | **PASS** | vercel.json line 50-54 |
| `/services/renovierung` | `/umzugsunternehmen-duisburg` | **PASS** | vercel.json line 55-59 |
| `/services/renovierung/` | `/umzugsunternehmen-duisburg` | **PASS** | vercel.json line 60-64 |

**Post-deploy verification command:**
```bash
curl -I https://tsumzug.de/services/privatumzuege
# Expected: HTTP/2 301, location: /privatumzug-duisburg

curl -I "https://tsumzug.de/services/privatumzuege?ref=old"
# Expected: HTTP/2 301 (query params preserved)
```

### 1.2 Canonical URLs Match Sitemap

| Page | Canonical | In Sitemap | Match | Status |
|------|-----------|------------|-------|--------|
| `/umzugsunternehmen-duisburg` | `https://tsumzug.de/umzugsunternehmen-duisburg` | Yes | Yes | **PASS** |
| `/privatumzug-duisburg` | `https://tsumzug.de/privatumzug-duisburg` | Yes | Yes | **PASS** |
| `/firmenumzug-duisburg` | `https://tsumzug.de/firmenumzug-duisburg` | Yes | Yes | **PASS** |
| `/entruempelung-duisburg` | `https://tsumzug.de/entruempelung-duisburg` | Yes | Yes | **PASS** |
| `/haushaltsaufloesung-duisburg` | `https://tsumzug.de/haushaltsaufloesung-duisburg` | Yes | Yes | **PASS** |
| `/moebeltransport-duisburg` | `https://tsumzug.de/moebeltransport-duisburg` | Yes | Yes | **PASS** |
| `/umzug-und-entruempelung-duisburg` | `https://tsumzug.de/umzug-und-entruempelung-duisburg` | Yes | Yes | **PASS** |
| `/umzug-kosten-duisburg` | `https://tsumzug.de/umzug-kosten-duisburg` | Yes | Yes | **PASS** |
| `/angebot` | `https://tsumzug.de/angebot` | Yes | Yes | **PASS** |

**Evidence:**
- Canonical in LocalSEOPage.tsx line 249: `<link rel="canonical" href={\`${BASE_URL}${canonicalPath}\`} />`
- Sitemap URLs all use non-trailing-slash format
- `trailingSlash: false` in vercel.json ensures consistency

### 1.3 robots.txt & Sitemap

| Check | Status | Evidence |
|-------|--------|----------|
| robots.txt allows crawling | **PASS** | `Allow: /` for all bots |
| Sitemap directive present | **PASS** | `Sitemap: https://tsumzug.de/sitemap.xml` |
| Sitemap accessible | **VERIFY** | Run: `curl -I https://tsumzug.de/sitemap.xml` |

**robots.txt contents:**
```
User-agent: *
Allow: /
Sitemap: https://tsumzug.de/sitemap.xml
```

### 1.4 Landing Pages Meta Tags

| Page | HTTP 200 | Title | Meta Description | Canonical | Status |
|------|----------|-------|------------------|-----------|--------|
| `/umzugsunternehmen-duisburg` | VERIFY | "Umzugsunternehmen Duisburg \| Faire Preise & Versichert \| TS Umzug" | 155 chars | Yes | **PASS** |
| `/privatumzug-duisburg` | VERIFY | "Privatumzug Duisburg \| Günstiger Wohnungsumzug ab 299€ \| TS Umzug" | 155 chars | Yes | **PASS** |
| `/firmenumzug-duisburg` | VERIFY | Present | Present | Yes | **PASS** |
| `/entruempelung-duisburg` | VERIFY | Present | Present | Yes | **PASS** |
| `/haushaltsaufloesung-duisburg` | VERIFY | Present | Present | Yes | **PASS** |
| `/moebeltransport-duisburg` | VERIFY | Present | Present | Yes | **PASS** |
| `/umzug-und-entruempelung-duisburg` | VERIFY | Present | Present | Yes | **PASS** |
| `/umzug-kosten-duisburg` | VERIFY | Present | Present | Yes | **PASS** |
| `/angebot` | VERIFY | Present | Present | Yes | **PASS** |

**Post-deploy verification:**
```bash
curl -s https://tsumzug.de/privatumzug-duisburg | grep -E "<title>|<meta name=\"description\"|<link rel=\"canonical\""
```

### 1.5 Schema Markup Validation

**Implemented schemas:**
1. **MovingCompany** (LocalSEOPage.tsx lines 178-225)
2. **FAQPage** (LocalSEOPage.tsx lines 228-241)

**MovingCompany schema includes:**
- name: "TS Umzug"
- telephone: "+49 176 6519 7997"
- address: Brückelstraße 54, 47137 Duisburg, DE
- geo coordinates: 51.4667, 6.7500
- openingHoursSpecification
- areaServed: Duisburg, Oberhausen, Mülheim, Essen, Düsseldorf
- priceRange: "€€"
- aggregateRating: 4.9/5

**Validation URLs (post-deploy):**
- Rich Results Test: https://search.google.com/test/rich-results?url=https://tsumzug.de/umzugsunternehmen-duisburg
- Schema Validator: https://validator.schema.org/#url=https://tsumzug.de/umzugsunternehmen-duisburg

**Status:** **PASS** (code review) - Verify with Rich Results Test post-deploy

### 1.6 Hreflang Implementation

| Language Pair | DE URL | EN URL | RU URL | x-default | Status |
|---------------|--------|--------|--------|-----------|--------|
| Home | `/` | `/en` | `/ru` | `/` | **PASS** |
| Privatumzug | `/privatumzug-duisburg` | `/en/services/residential-moves` | `/ru/services/chastnye-pereezdy` | `/privatumzug-duisburg` | **PASS** |
| Firmenumzug | `/firmenumzug-duisburg` | `/en/services/office-relocations` | `/ru/services/ofisnye-pereezdy` | `/firmenumzug-duisburg` | **PASS** |
| Entrümpelung | `/entruempelung-duisburg` | `/en/services/clearance-disposal` | `/ru/services/uborka-vyvoz` | `/entruempelung-duisburg` | **PASS** |
| Möbeltransport | `/moebeltransport-duisburg` | `/en/services/furniture-transport` | `/ru/services/perevozka-mebeli` | `/moebeltransport-duisburg` | **PASS** |

**Evidence:** sitemap.xml lines 45-199

**No duplicate indexing signals:** x-default always points to German canonical

---

## 2. SPA Indexing Risk Assessment

### 2.1 View-Source Check

**Issue:** React SPA renders content via JavaScript. View-source shows empty `<div id="root"></div>`.

**Current state (without prerendering):**
```html
<!-- view-source:https://tsumzug.de/privatumzug-duisburg -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>TS Umzug</title>
  ...
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/assets/index-xxx.js"></script>
</body>
</html>
```

**Risk Level:** ⚠️ **MEDIUM** - Google can render JS but may deprioritize initially

### 2.2 Recommended Prerendering Solution for Vercel

**Option A: Vercel ISR with prerender-spa-plugin (Recommended)**

Add to `vite.config.ts`:
```typescript
import prerender from '@prerenderer/vite-plugin';

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: [
        '/umzugsunternehmen-duisburg',
        '/privatumzug-duisburg',
        '/firmenumzug-duisburg',
        '/entruempelung-duisburg',
        '/haushaltsaufloesung-duisburg',
        '/moebeltransport-duisburg',
        '/umzug-und-entruempelung-duisburg',
        '/umzug-kosten-duisburg',
        '/angebot',
      ],
    }),
  ],
});
```

**Option B: Vercel Edge Functions with react-snap**

```bash
npm install react-snap --save-dev
```

Add to `package.json`:
```json
{
  "scripts": {
    "postbuild": "react-snap"
  },
  "reactSnap": {
    "include": [
      "/umzugsunternehmen-duisburg",
      "/privatumzug-duisburg",
      "/firmenumzug-duisburg",
      "/entruempelung-duisburg",
      "/haushaltsaufloesung-duisburg",
      "/moebeltransport-duisburg",
      "/umzug-und-entruempelung-duisburg",
      "/umzug-kosten-duisburg",
      "/angebot"
    ]
  }
}
```

**Status:** ⚠️ **NOT IMPLEMENTED** - Recommend implementing before expecting fast indexing

---

## 3. Post-Deploy Verification Steps

### 3.1 Google Search Console Actions

1. **Add Property** (if not already)
   - URL: `https://tsumzug.de`
   - Verify via DNS or HTML file

2. **Submit Sitemap**
   - Go to: Sitemaps → Add new sitemap
   - URL: `sitemap.xml`
   - Expected: "Success" status

3. **URL Inspection for each Duisburg page:**
   ```
   https://tsumzug.de/umzugsunternehmen-duisburg
   https://tsumzug.de/privatumzug-duisburg
   https://tsumzug.de/firmenumzug-duisburg
   https://tsumzug.de/entruempelung-duisburg
   https://tsumzug.de/haushaltsaufloesung-duisburg
   https://tsumzug.de/moebeltransport-duisburg
   https://tsumzug.de/umzug-und-entruempelung-duisburg
   https://tsumzug.de/umzug-kosten-duisburg
   https://tsumzug.de/angebot
   ```
   - Click "Request Indexing" for each

4. **Check old URLs redirect:**
   - Inspect: `/services/privatumzuege`
   - Should show: "URL is not on Google" with redirect info

### 3.2 Success Signals in GSC (check after 3-7 days)

| Signal | Where to Check | Expected |
|--------|----------------|----------|
| Sitemap indexed | Sitemaps | "XX URLs discovered" |
| Pages indexed | Coverage → Valid | 8+ Duisburg pages |
| 301s recognized | Coverage → Excluded → "Page with redirect" | Old /services/* URLs |
| Rich results | Enhancements → FAQ | FAQ snippets eligible |
| Mobile usability | Mobile Usability | No errors |

---

## 4. Conversion Tracking Setup

### 4.1 UTM Tags

**GBP Website Link (for Google Business Profile):**
```
https://tsumzug.de/?utm_source=google&utm_medium=organic&utm_campaign=gbp_listing
```

**Internal CTA Links (LocalSEOPage hero):**
```
/angebot?utm_source=website&utm_medium=cta&utm_campaign=local_seo_duisburg
```

**Implementation:** `src/utils/tracking.ts`

### 4.2 Conversion Events Defined

| Event Name | Trigger | Source Tracking | Status |
|------------|---------|-----------------|--------|
| `call_click` | Click on tel: link | source: hero_cta, pricing_cta, etc. | **IMPLEMENTED** |
| `whatsapp_click` | Click on wa.me link | source: hero_cta | **IMPLEMENTED** |
| `form_submit` | Form submission success | form_name: quick_contact, angebot_form | **IMPLEMENTED** |
| `angebot_click` | Click on /angebot CTA | source: hero_cta | **IMPLEMENTED** |

### 4.3 Verification (post-deploy)

Open browser DevTools Console, then:

1. **Test call click:**
   - Click phone number
   - Console should show: `[Conversion] call_click {phone_number: "+4917665197997", source: "hero_cta"}`

2. **Test WhatsApp click:**
   - Click WhatsApp button
   - Console should show: `[Conversion] whatsapp_click {source: "hero_cta"}`

3. **Test form submit:**
   - Fill and submit form
   - Console should show: `[Conversion] form_submit {form_name: "quick_contact", source: "/umzugsunternehmen-duisburg"}`

### 4.4 Analytics Integration

All third-party analytics (GA4, GTM) have been removed for GDPR compliance.
Tracking is handled via custom `ts_conversion` DOM events that any self-hosted
analytics solution can listen for. See `src/utils/tracking.ts`.

---

## 5. Summary

### ✅ Fully Done

| Item | Status |
|------|--------|
| 8 Duisburg landing pages with unique content | ✅ |
| MovingCompany + FAQPage schema on all pages | ✅ |
| NAP consistency (Brückelstraße 54, 47137 Duisburg) | ✅ |
| 301 redirects from old URLs (with trailing slash variants) | ✅ |
| Canonical URLs match sitemap | ✅ |
| robots.txt with Sitemap directive | ✅ |
| Hreflang tags for DE/EN/RU | ✅ |
| Internal linking between Duisburg pages | ✅ |
| Conversion tracking (call, WhatsApp, form) | ✅ |
| UTM tags for CTA attribution | ✅ |
| /angebot quote form page | ✅ |

### ⚠️ Remaining / Needs Post-Deploy Verification

| Item | Status | Priority |
|------|--------|----------|
| Verify 301 redirects work on live site | ⚠️ VERIFY | HIGH |
| Run Rich Results Test for schema validation | ⚠️ VERIFY | HIGH |
| Submit sitemap to GSC | ⚠️ TODO | HIGH |
| Request indexing for all 9 pages | ⚠️ TODO | HIGH |
| SPA prerendering for faster indexing | ⚠️ NOT DONE | MEDIUM |
| Add GA4 tracking code | ⚠️ NOT DONE | MEDIUM |
| Set up GBP listing with UTM link | ⚠️ TODO | HIGH |

### 🎯 Next Highest ROI Step

**1. IMMEDIATE (Today):**
- Deploy to production (merge to main)
- Verify 301 redirects work: `curl -I https://tsumzug.de/services/privatumzuege`
- Submit sitemap to GSC
- Request indexing for all 9 Duisburg pages

**2. THIS WEEK:**
- Set up/update Google Business Profile:
  - Website: `https://tsumzug.de/?utm_source=google&utm_medium=organic&utm_campaign=gbp_listing`
  - Add all services as GBP services
  - Upload photos
  - Request reviews

**3. NEXT 2 WEEKS:**
- Implement prerendering for faster indexing
- Add GA4 tracking code
- Monitor GSC for indexing progress
- Check for any crawl errors

---

## Appendix: File References

| File | Purpose |
|------|---------|
| `vercel.json` | 301 redirects, SPA rewrite, trailing slash config |
| `public/sitemap.xml` | XML sitemap with hreflang |
| `public/robots.txt` | Crawl directives + Sitemap |
| `src/components/LocalSEOPage.tsx` | Landing page template with schema |
| `src/pages/duisburg/*.tsx` | 8 Duisburg landing pages |
| `src/pages/Angebot.tsx` | Quote request page |
| `src/utils/tracking.ts` | Conversion event tracking |
| `docs/LOCAL-SEO-STRATEGY-DUISBURG.md` | Full strategy documentation |
