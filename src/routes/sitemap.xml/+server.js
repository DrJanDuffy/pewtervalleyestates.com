import { generateSitemapData } from "$lib/seo.js"

export async function GET() {
  const sitemapData = generateSitemapData()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${sitemapData
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${
      page.url.includes("/listings")
        ? `
    <image:image>
      <image:loc>${page.url}/og-image.jpg</image:loc>
      <image:title>Pewter Valley Estates Las Vegas - Property Listings</image:title>
      <image:caption>Modern new construction homes in Las Vegas, Nevada</image:caption>
    </image:image>`
        : ""
    }
  </url>`
  )
  .join("\n")}
</urlset>`

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
