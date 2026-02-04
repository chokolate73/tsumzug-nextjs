#!/bin/bash
#
# Local SEO Go/No-Go Verification Script
# Run this AFTER deployment to production
#
# Usage: ./scripts/verify-local-seo.sh
#

DOMAIN="https://tsumzug.de"
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "=========================================="
echo "  Local SEO Go/No-Go Verification"
echo "  Domain: $DOMAIN"
echo "  Date: $(date)"
echo "=========================================="
echo ""

# ============================================
# 1. 301 REDIRECTS TEST
# ============================================
echo "1. 301 REDIRECTS TEST"
echo "--------------------------------------------"

declare -A REDIRECTS
REDIRECTS["/services/privatumzuege"]="/privatumzug-duisburg"
REDIRECTS["/services/privatumzuege/"]="/privatumzug-duisburg"
REDIRECTS["/services/firmenumzuege"]="/firmenumzug-duisburg"
REDIRECTS["/services/firmenumzuege/"]="/firmenumzug-duisburg"
REDIRECTS["/services/entruempelung"]="/entruempelung-duisburg"
REDIRECTS["/services/entruempelung/"]="/entruempelung-duisburg"
REDIRECTS["/services/moebeltransport"]="/moebeltransport-duisburg"
REDIRECTS["/services/moebeltransport/"]="/moebeltransport-duisburg"
REDIRECTS["/services/hausmeisterservice"]="/umzugsunternehmen-duisburg"
REDIRECTS["/services/hausmeisterservice/"]="/umzugsunternehmen-duisburg"
REDIRECTS["/services/renovierung"]="/umzugsunternehmen-duisburg"
REDIRECTS["/services/renovierung/"]="/umzugsunternehmen-duisburg"

echo ""
printf "%-35s | %-6s | %-30s | %s\n" "OLD URL" "STATUS" "LOCATION" "RESULT"
echo "-----------------------------------|--------|--------------------------------|--------"

REDIRECT_PASS=0
REDIRECT_FAIL=0

for old_url in "${!REDIRECTS[@]}"; do
    expected="${REDIRECTS[$old_url]}"
    response=$(curl -sI --max-time 10 "${DOMAIN}${old_url}" 2>/dev/null)
    status=$(echo "$response" | grep -i "^HTTP" | head -1 | awk '{print $2}')
    location=$(echo "$response" | grep -i "^location:" | head -1 | awk '{print $2}' | tr -d '\r')

    if [[ "$status" == "301" ]] && [[ "$location" == "$expected" || "$location" == "${DOMAIN}${expected}" ]]; then
        result="${GREEN}PASS${NC}"
        ((REDIRECT_PASS++))
    else
        result="${RED}FAIL${NC}"
        ((REDIRECT_FAIL++))
    fi

    printf "%-35s | %-6s | %-30s | " "$old_url" "$status" "$location"
    echo -e "$result"
done

echo ""
echo "Redirects: $REDIRECT_PASS passed, $REDIRECT_FAIL failed"
echo ""

# ============================================
# 2. LANDING PAGES HTTP 200 TEST
# ============================================
echo "2. LANDING PAGES HTTP 200 TEST"
echo "--------------------------------------------"

PAGES=(
    "/umzugsunternehmen-duisburg"
    "/privatumzug-duisburg"
    "/firmenumzug-duisburg"
    "/entruempelung-duisburg"
    "/haushaltsaufloesung-duisburg"
    "/moebeltransport-duisburg"
    "/umzug-und-entruempelung-duisburg"
    "/umzug-kosten-duisburg"
    "/angebot"
)

echo ""
printf "%-40s | %-6s | %s\n" "PAGE" "STATUS" "RESULT"
echo "-----------------------------------------|--------|--------"

PAGE_PASS=0
PAGE_FAIL=0

for page in "${PAGES[@]}"; do
    status=$(curl -sI --max-time 10 "${DOMAIN}${page}" 2>/dev/null | grep -i "^HTTP" | head -1 | awk '{print $2}')

    if [[ "$status" == "200" ]]; then
        result="${GREEN}PASS${NC}"
        ((PAGE_PASS++))
    else
        result="${RED}FAIL${NC}"
        ((PAGE_FAIL++))
    fi

    printf "%-40s | %-6s | " "$page" "$status"
    echo -e "$result"
done

echo ""
echo "Pages: $PAGE_PASS passed, $PAGE_FAIL failed"
echo ""

# ============================================
# 3. META TAGS CHECK (2 key pages)
# ============================================
echo "3. META TAGS CHECK"
echo "--------------------------------------------"

KEY_PAGES=(
    "/umzugsunternehmen-duisburg"
    "/entruempelung-duisburg"
)

for page in "${KEY_PAGES[@]}"; do
    echo ""
    echo "Page: ${DOMAIN}${page}"
    echo "---"

    html=$(curl -s --max-time 15 "${DOMAIN}${page}" 2>/dev/null)

    # Check if content is JS-rendered (look for actual content vs empty root)
    if echo "$html" | grep -q "Umzugsunternehmen\|Entrümpelung"; then
        echo -e "Content: ${GREEN}Server-rendered (prerendered)${NC}"
    else
        echo -e "Content: ${YELLOW}Client-rendered (JS required)${NC}"
    fi

    # Title
    title=$(echo "$html" | grep -oP '(?<=<title>)[^<]+' | head -1)
    if [[ -n "$title" && "$title" != "TS Umzug" ]]; then
        echo -e "Title: ${GREEN}$title${NC}"
    else
        echo -e "Title: ${YELLOW}$title (check if dynamic)${NC}"
    fi

    # Meta description
    meta_desc=$(echo "$html" | grep -oP '(?<=<meta name="description" content=")[^"]+' | head -1)
    if [[ -n "$meta_desc" ]]; then
        echo -e "Meta Desc: ${GREEN}Present (${#meta_desc} chars)${NC}"
    else
        echo -e "Meta Desc: ${YELLOW}Not in initial HTML${NC}"
    fi

    # Canonical
    canonical=$(echo "$html" | grep -oP '(?<=<link rel="canonical" href=")[^"]+' | head -1)
    if [[ -n "$canonical" ]]; then
        echo -e "Canonical: ${GREEN}$canonical${NC}"
    else
        echo -e "Canonical: ${YELLOW}Not in initial HTML${NC}"
    fi

    # Schema
    if echo "$html" | grep -q "application/ld+json"; then
        schema_count=$(echo "$html" | grep -c "application/ld+json")
        echo -e "Schema: ${GREEN}Found $schema_count JSON-LD blocks${NC}"
    else
        echo -e "Schema: ${YELLOW}Not in initial HTML${NC}"
    fi
done

echo ""

# ============================================
# 4. ROBOTS.TXT & SITEMAP CHECK
# ============================================
echo "4. ROBOTS.TXT & SITEMAP CHECK"
echo "--------------------------------------------"

# Robots.txt
robots_status=$(curl -sI --max-time 10 "${DOMAIN}/robots.txt" 2>/dev/null | grep -i "^HTTP" | head -1 | awk '{print $2}')
robots_content=$(curl -s --max-time 10 "${DOMAIN}/robots.txt" 2>/dev/null)

echo ""
if [[ "$robots_status" == "200" ]]; then
    echo -e "robots.txt: ${GREEN}HTTP 200${NC}"
    if echo "$robots_content" | grep -q "Sitemap:"; then
        echo -e "Sitemap directive: ${GREEN}Present${NC}"
        echo "$robots_content" | grep "Sitemap:"
    else
        echo -e "Sitemap directive: ${RED}MISSING${NC}"
    fi
else
    echo -e "robots.txt: ${RED}HTTP $robots_status${NC}"
fi

# Sitemap
sitemap_status=$(curl -sI --max-time 10 "${DOMAIN}/sitemap.xml" 2>/dev/null | grep -i "^HTTP" | head -1 | awk '{print $2}')
echo ""
if [[ "$sitemap_status" == "200" ]]; then
    echo -e "sitemap.xml: ${GREEN}HTTP 200${NC}"
    url_count=$(curl -s --max-time 10 "${DOMAIN}/sitemap.xml" 2>/dev/null | grep -c "<loc>")
    echo "URLs in sitemap: $url_count"
else
    echo -e "sitemap.xml: ${RED}HTTP $sitemap_status${NC}"
fi

echo ""

# ============================================
# 5. HREFLANG CHECK
# ============================================
echo "5. HREFLANG CHECK (from sitemap)"
echo "--------------------------------------------"

sitemap=$(curl -s --max-time 10 "${DOMAIN}/sitemap.xml" 2>/dev/null)
hreflang_count=$(echo "$sitemap" | grep -c "xhtml:link")

echo ""
if [[ $hreflang_count -gt 0 ]]; then
    echo -e "Hreflang tags: ${GREEN}Found $hreflang_count xhtml:link tags${NC}"
    echo ""
    echo "Sample hreflang (privatumzug-duisburg):"
    echo "$sitemap" | grep -A5 "privatumzug-duisburg" | head -6
else
    echo -e "Hreflang tags: ${RED}NOT FOUND${NC}"
fi

echo ""

# ============================================
# SUMMARY
# ============================================
echo "=========================================="
echo "  SUMMARY"
echo "=========================================="
echo ""

TOTAL_PASS=$((REDIRECT_PASS + PAGE_PASS))
TOTAL_FAIL=$((REDIRECT_FAIL + PAGE_FAIL))

if [[ $TOTAL_FAIL -eq 0 ]]; then
    echo -e "${GREEN}GO: All critical checks passed!${NC}"
else
    echo -e "${RED}NO-GO: $TOTAL_FAIL checks failed${NC}"
fi

echo ""
echo "Next steps:"
echo "1. Run Rich Results Test: https://search.google.com/test/rich-results?url=${DOMAIN}/umzugsunternehmen-duisburg"
echo "2. Submit sitemap to GSC: ${DOMAIN}/sitemap.xml"
echo "3. Request indexing for all 9 Duisburg pages"
echo ""
