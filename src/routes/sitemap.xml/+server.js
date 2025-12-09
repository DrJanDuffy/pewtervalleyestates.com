// src/routes/sitemap.xml/+server.js

const site = 'https://www.pewtervalleyestates.com';

const pages = [
  '',
  '/homes-for-sale',
  '/buy-a-home',
  '/buyer-checklist',
  '/listings',
  '/investment-properties',
  '/sell-your-home',
  '/home-valuation',
  '/market-analysis',
  '/selling-checklist',
  '/neighborhood',
  '/southwest-las-vegas',
  '/neighborhood-guide',
  '/photos',
  '/las-vegas-relocation-guide',
  '/about',
  '/contact',
  '/richmond-demo',
  '/dr-jan-duffy',
  '/google-reviews',
  '/faq'
];

export async function GET() {
  const today = new Date().toISOString().split('T')[0];
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${site}${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.includes('homes-for-sale') || page.includes('listings') ? '0.9' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600'
    }
  });
}
