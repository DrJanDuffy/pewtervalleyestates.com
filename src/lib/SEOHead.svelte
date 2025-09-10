<script>
import {
  generateFAQSchema,
  generateLocalBusinessSchema,
  generateMetaTags,
  generateRealEstateSchema,
} from "$lib/seo.js"

export const pageData = {}
export const includeLocalBusiness = false
export const includeRealEstate = false
export const includeFAQ = false
export const faqData = []

// Generate meta tags
$: metaTags = generateMetaTags(pageData)

// Generate structured data
$: localBusinessSchema = includeLocalBusiness ? generateLocalBusinessSchema() : null
$: realEstateSchema = includeRealEstate ? generateRealEstateSchema(pageData) : null
$: faqSchema = includeFAQ ? generateFAQSchema(faqData) : null
</script>

<!-- Dynamic Meta Tags -->
<svelte:head>
  <title>{metaTags.title}</title>
  <meta name="description" content={metaTags.description} />
  <meta name="keywords" content={metaTags.keywords} />
  <meta name="robots" content={metaTags.robots} />
  <meta name="googlebot" content={metaTags.googlebot} />
  <meta name="bingbot" content={metaTags.bingbot} />
  
  <!-- Canonical URL -->
  <link rel="canonical" href={metaTags.canonical} />
  
  <!-- Open Graph -->
  <meta property="og:title" content={metaTags['og:title']} />
  <meta property="og:description" content={metaTags['og:description']} />
  <meta property="og:image" content={metaTags['og:image']} />
  <meta property="og:url" content={metaTags['og:url']} />
  <meta property="og:type" content={metaTags['og:type']} />
  <meta property="og:site_name" content={metaTags['og:site_name']} />
  <meta property="og:locale" content={metaTags['og:locale']} />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content={metaTags['twitter:card']} />
  <meta name="twitter:title" content={metaTags['twitter:title']} />
  <meta name="twitter:description" content={metaTags['twitter:description']} />
  <meta name="twitter:image" content={metaTags['twitter:image']} />
  <meta name="twitter:site" content={metaTags['twitter:site']} />
  <meta name="twitter:creator" content={metaTags['twitter:creator']} />
</svelte:head>

<!-- Structured Data -->
{#if localBusinessSchema}
  <script type="application/ld+json">
    {JSON.stringify(localBusinessSchema)}
  </script>
{/if}

{#if realEstateSchema}
  <script type="application/ld+json">
    {JSON.stringify(realEstateSchema)}
  </script>
{/if}

{#if faqSchema}
  <script type="application/ld+json">
    {JSON.stringify(faqSchema)}
  </script>
{/if}
