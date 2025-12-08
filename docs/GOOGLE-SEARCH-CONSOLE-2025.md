# Google Search Console 2025 Setup Guide

This guide explains how to complete the Google Search Console setup for pewtervalleyestates.com.

## Quick Start

### Step 1: Add Property to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Choose **Domain** property (recommended) or **URL prefix**
   - Domain: `pewtervalleyestates.com` (covers all subdomains)
   - URL prefix: `https://www.pewtervalleyestates.com` (specific URL)

### Step 2: Verify Ownership

#### Option A: HTML Meta Tag (Recommended)

1. In Google Search Console, choose "HTML tag" verification
2. Copy the verification code (just the content value, e.g., `abc123def456`)
3. Update `src/lib/google-search-console.js`:

```javascript
export const GOOGLE_SITE_VERIFICATION = 'abc123def456'
```

4. Deploy the site
5. Click "Verify" in Google Search Console

#### Option B: HTML File

1. In Google Search Console, choose "HTML file" verification
2. Note the filename (e.g., `google1234567890abcdef.html`)
3. The site automatically handles verification files at any `google*.html` URL
4. Deploy and verify

#### Option C: DNS TXT Record (Domain Property Only)

1. Add a TXT record to your DNS:
   - Type: `TXT`
   - Name: `@` or `pewtervalleyestates.com`
   - Value: `google-site-verification=YOUR_CODE`
2. Wait for DNS propagation (up to 48 hours)
3. Verify in Google Search Console

### Step 3: Submit Sitemap

1. In Google Search Console, go to "Sitemaps"
2. Enter: `sitemap.xml`
3. Click "Submit"

The sitemap includes:
- All main pages with proper priorities
- Image sitemap data with geo-locations
- Mobile-friendly markers
- hreflang tags for language targeting

### Step 4: Configure IndexNow (Optional but Recommended)

IndexNow provides faster indexing on Bing, Yandex, and other search engines.

1. Generate an IndexNow key at [Bing IndexNow](https://www.bing.com/indexnow)
2. Update `src/lib/google-search-console.js`:

```javascript
export const INDEXNOW_KEY = 'your-generated-key-here'
```

3. Deploy the site
4. The key file will be automatically served at `https://www.pewtervalleyestates.com/YOUR_KEY.txt`

#### Using IndexNow API

Notify search engines when content changes:

```bash
curl -X POST https://www.pewtervalleyestates.com/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"urls": ["https://www.pewtervalleyestates.com/listings"]}'
```

---

## Features Implemented

### 1. Site Verification Support

- **Meta tag verification**: Automatically added to `<head>` when configured
- **HTML file verification**: Dynamic route handles `google*.html` requests
- **Bing verification**: Support for `msvalidate.01` meta tag

### 2. Enhanced Sitemap (2025 Standards)

Location: `https://www.pewtervalleyestates.com/sitemap.xml`

Features:
- XML Schema validation
- Image sitemap with geo-location data
- Mobile-friendly markers
- hreflang tags for US English
- Proper lastmod timestamps
- Priority and changefreq settings

### 3. Structured Data (Schema.org 2025)

The site includes multiple structured data types for rich search results:

| Schema Type | Purpose | Rich Result |
|-------------|---------|-------------|
| WebSite | Sitelinks searchbox | Search box in results |
| Organization | Brand knowledge panel | Logo, contact info |
| RealEstateAgent | Agent info | Business profile |
| LocalBusiness | Local SEO | Maps, hours |
| BreadcrumbList | Navigation | Breadcrumb trail |
| FAQPage | FAQ content | Expandable FAQs |

### 4. Enhanced Robots Meta Tags

Pages include optimized robots meta tags:

```html
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
```

This allows:
- Full snippets in search results
- Large image previews
- Video previews (if applicable)

### 5. IndexNow API

Endpoint: `POST /api/indexnow`

Notifies these search engines of content updates:
- Bing
- Yandex
- Seznam.cz
- Naver

---

## Core Web Vitals Targets (2025)

Google uses these metrics for ranking:

| Metric | Target | Description |
|--------|--------|-------------|
| LCP | < 2.5s | Largest Contentful Paint |
| INP | < 200ms | Interaction to Next Paint (replaced FID) |
| CLS | < 0.1 | Cumulative Layout Shift |

The site includes Web Vitals tracking via `src/lib/vitals.js`.

---

## Monitoring in Google Search Console

### Key Reports to Monitor

1. **Performance Report**
   - Check daily for traffic trends
   - Monitor click-through rates (CTR)
   - Identify top-performing pages

2. **Coverage Report**
   - Ensure all pages are indexed
   - Fix any crawl errors
   - Check for excluded pages

3. **Enhancements**
   - Structured data validation
   - Mobile usability
   - Page experience

4. **Core Web Vitals**
   - Monitor LCP, INP, CLS
   - Fix any failing URLs

### Recommended Actions

**Weekly:**
- Check Performance report for ranking changes
- Review any new Coverage errors
- Monitor Core Web Vitals status

**Monthly:**
- Analyze search query trends
- Review structured data validation
- Check for manual actions

**After Content Updates:**
- Use IndexNow API to notify search engines
- Verify new pages appear in Coverage
- Check structured data for new pages

---

## File Reference

| File | Purpose |
|------|---------|
| `src/lib/google-search-console.js` | Main GSC configuration |
| `src/lib/seo-utils.js` | SEO utility functions |
| `src/lib/EnhancedSEOHead.svelte` | SEO head component |
| `src/routes/sitemap.xml/+server.js` | Dynamic sitemap |
| `src/routes/robots.txt/+server.js` | Dynamic robots.txt |
| `src/routes/[verification]/+server.js` | Verification file handler |
| `src/routes/api/indexnow/+server.js` | IndexNow API endpoint |

---

## Troubleshooting

### Verification Failed

1. Ensure the verification code is correct
2. Check that the site is deployed
3. Wait a few minutes and try again
4. Try an alternative verification method

### Pages Not Indexed

1. Check robots.txt isn't blocking
2. Submit URL in Google Search Console
3. Use IndexNow API to notify search engines
4. Verify the page has proper meta tags

### Structured Data Errors

1. Test at [Rich Results Test](https://search.google.com/test/rich-results)
2. Check for required properties
3. Validate JSON-LD syntax
4. Review error details in GSC Enhancements

### Core Web Vitals Issues

1. Check Chrome DevTools Lighthouse
2. Optimize images (WebP, lazy loading)
3. Reduce JavaScript bundle size
4. Minimize layout shifts

---

## Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org)
- [IndexNow Protocol](https://www.indexnow.org)
- [Core Web Vitals](https://web.dev/vitals)

---

Last updated: December 2025
