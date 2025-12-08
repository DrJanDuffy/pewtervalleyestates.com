/**
 * Enhanced Sitemap Generator for Google Search Console 2025
 *
 * Features:
 * - Full image sitemap support with alt text and geo-location
 * - Mobile-friendly markers
 * - Proper lastmod timestamps
 * - hreflang for multi-language support
 * - Optimized for Google Search Console Insights
 */

import { generateSitemapData, SITE_CONFIG } from "$lib/seo.js"

// Enhanced page data with images for rich sitemap
const PAGE_IMAGES = {
  '/': [
    {
      loc: '/og-image.jpg',
      title: 'Pewter Valley Estates - Las Vegas New Home Community',
      caption: 'Modern new construction homes by Richmond American Homes in Las Vegas, Nevada',
      geo_location: 'Las Vegas, Nevada, USA'
    }
  ],
  '/listings': [
    {
      loc: '/photos/pewter-valley-1.jpg',
      title: 'Pewter Valley Estates Home Listings',
      caption: 'Browse available homes at Pewter Valley Estates in Las Vegas',
      geo_location: 'Las Vegas, Nevada, USA'
    },
    {
      loc: '/og-image.jpg',
      title: 'Las Vegas New Home Listings',
      caption: 'Modern new construction homes starting from $400,000',
      geo_location: 'Las Vegas, Nevada, USA'
    }
  ],
  '/neighborhood': [
    {
      loc: '/photos/pewter-valley-1.jpg',
      title: 'Pewter Valley Estates Neighborhood',
      caption: 'Explore the community amenities and surroundings',
      geo_location: 'Las Vegas, Nevada, USA'
    }
  ],
  '/photos': [
    {
      loc: '/photos/pewter-valley-1.jpg',
      title: 'Pewter Valley Estates Photo Gallery',
      caption: 'View photos of available homes and community features',
      geo_location: 'Las Vegas, Nevada, USA'
    }
  ],
  '/contact': [
    {
      loc: '/og-image.jpg',
      title: 'Contact Pewter Valley Estates',
      caption: 'Get in touch with Dr. Jan Duffy for home buying assistance',
      geo_location: 'Las Vegas, Nevada, USA'
    }
  ],
  '/about': [
    {
      loc: '/og-image.jpg',
      title: 'About Pewter Valley Estates',
      caption: 'Learn about our new home community in Las Vegas',
      geo_location: 'Las Vegas, Nevada, USA'
    }
  ],
  '/richmond-demo': [
    {
      loc: '/og-image.jpg',
      title: 'Richmond American Homes Demo',
      caption: 'Experience our home models and floor plans',
      geo_location: 'Las Vegas, Nevada, USA'
    }
  ]
}

function generateImageTags(pageUrl) {
  const path = pageUrl.replace(SITE_CONFIG.url, '') || '/'
  const images = PAGE_IMAGES[path] || []

  if (images.length === 0) return ''

  return images.map(img => `
    <image:image>
      <image:loc>${SITE_CONFIG.url}${img.loc}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
      <image:geo_location>${escapeXml(img.geo_location)}</image:geo_location>
    </image:image>`).join('')
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const sitemapData = generateSitemapData()
  const currentDate = new Date().toISOString()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap-style.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
                            http://www.google.com/schemas/sitemap-image/1.1
                            http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">
  <!-- Sitemap generated: ${currentDate} -->
  <!-- Google Search Console 2025 Enhanced Sitemap -->
  <!-- Site: ${SITE_CONFIG.name} - ${SITE_CONFIG.url} -->

${sitemapData
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    <!-- hreflang for US English -->
    <xhtml:link rel="alternate" hreflang="en-us" href="${page.url}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${page.url}"/>${generateImageTags(page.url)}
  </url>`
  )
  .join("\n")}
</urlset>`

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "X-Robots-Tag": "noindex",
      "Last-Modified": new Date().toUTCString()
    },
  })
}
