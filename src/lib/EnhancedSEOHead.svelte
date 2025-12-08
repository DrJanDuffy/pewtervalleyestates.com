<script>
  import {
    generateMetaTags,
    generateStructuredData,
    generateBreadcrumbStructuredData,
    generateLocalBusinessStructuredData,
    preloadCriticalResources,
    generateHreflangTags,
    validateSEOData,
    generateWebSiteSchema,
    generateOrganizationSchema,
    VERIFICATION_CODES
  } from '$lib/seo-utils.js'

  export let pageData = {}
  export let breadcrumbs = []
  export let faqs = []
  export let structuredData = null
  export let showValidation = false
  export let pageType = 'default' // 'default', 'listing', 'contact', 'private'

  // Generate comprehensive meta tags
  const metaTags = generateMetaTags(pageData)

  // Generate structured data
  const baseStructuredData = structuredData || generateStructuredData(pageData)
  const breadcrumbStructuredData = breadcrumbs.length > 0 ? generateBreadcrumbStructuredData(breadcrumbs) : null
  const faqStructuredData = faqs.length > 0 ? generateFAQStructuredData(faqs) : null
  const localBusinessStructuredData = generateLocalBusinessStructuredData()

  // Google Search Console 2025: WebSite and Organization schemas
  const webSiteSchema = generateWebSiteSchema()
  const organizationSchema = generateOrganizationSchema()

  // Preload critical resources
  const criticalResources = preloadCriticalResources()

  // Generate hreflang tags
  const hreflangTags = generateHreflangTags(metaTags.canonical)

  // Google Search Console 2025: Enhanced robots meta
  const robotsConfig = {
    default: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    listing: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    contact: 'index, follow, max-snippet:160, max-image-preview:standard',
    private: 'noindex, nofollow'
  }
  const robotsContent = robotsConfig[pageType] || robotsConfig.default

  // Validate SEO data if in development
  if (showValidation && typeof window !== 'undefined') {
    const errors = validateSEOData(pageData)
    if (errors.length > 0) {
      console.warn('SEO Validation Errors:', errors)
    }
  }
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{metaTags.title}</title>
  <meta name="description" content={metaTags.description} />
  <meta name="keywords" content={metaTags.keywords} />
  <meta name="author" content={metaTags.author} />

  <!-- Google Search Console 2025: Enhanced Robots Meta -->
  <meta name="robots" content={metaTags.noindex ? 'noindex,nofollow' : robotsContent} />
  <meta name="googlebot" content={robotsContent} />
  <meta name="bingbot" content={metaTags.noindex ? 'noindex,nofollow' : 'index,follow'} />

  <!-- Google Search Console 2025: Site Verification Tags -->
  {#if VERIFICATION_CODES.google && VERIFICATION_CODES.google !== 'YOUR_GOOGLE_VERIFICATION_CODE'}
    <meta name="google-site-verification" content={VERIFICATION_CODES.google} />
  {/if}
  {#if VERIFICATION_CODES.bing && VERIFICATION_CODES.bing !== 'YOUR_BING_VERIFICATION_CODE'}
    <meta name="msvalidate.01" content={VERIFICATION_CODES.bing} />
  {/if}
  
  <!-- Canonical URL -->
  <link rel="canonical" href={metaTags.canonical} />
  
  <!-- Hreflang Tags -->
  {#each hreflangTags as tag}
    <link rel="alternate" hreflang={tag.hreflang} href={tag.href} />
  {/each}
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={metaTags.ogType} />
  <meta property="og:title" content={metaTags.ogTitle} />
  <meta property="og:description" content={metaTags.ogDescription} />
  <meta property="og:image" content={metaTags.ogImage} />
  <meta property="og:url" content={metaTags.ogUrl} />
  <meta property="og:site_name" content={metaTags.ogSiteName} />
  <meta property="og:locale" content="en_US" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content={metaTags.twitterCard} />
  <meta name="twitter:title" content={metaTags.twitterTitle} />
  <meta name="twitter:description" content={metaTags.twitterDescription} />
  <meta name="twitter:image" content={metaTags.twitterImage} />
  <meta name="twitter:site" content={metaTags.twitterSite} />
  <meta name="twitter:creator" content={metaTags.twitterCreator} />
  
  <!-- Additional Meta Tags -->
  <meta name="theme-color" content="#0A2540" />
  <meta name="msapplication-TileColor" content="#0A2540" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  
  <!-- Preload Critical Resources -->
  {#each criticalResources as resource}
    <link rel="preload" href={resource.href} as={resource.as} type={resource.type} crossorigin={resource.crossorigin} />
  {/each}
  
  <!-- Preconnect to External Domains -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preconnect" href="https://www.google-analytics.com" />
  <link rel="preconnect" href="https://drjanduffy.realscout.com" />
  
  <!-- DNS Prefetch for Performance -->
  <link rel="dns-prefetch" href="//panomaps.us" />
  <link rel="dns-prefetch" href="//www.richmondamerican.com" />
  
  <!-- Google Search Console 2025: Enhanced Structured Data -->
  <!-- WebSite Schema with SearchAction for Sitelinks Searchbox -->
  {@html `<script type="application/ld+json">${JSON.stringify(webSiteSchema)}</script>`}

  <!-- Organization Schema -->
  {@html `<script type="application/ld+json">${JSON.stringify(organizationSchema)}</script>`}

  <!-- Page-specific Structured Data -->
  {@html `<script type="application/ld+json">${JSON.stringify(baseStructuredData)}</script>`}

  {#if breadcrumbStructuredData}
    {@html `<script type="application/ld+json">${JSON.stringify(breadcrumbStructuredData)}</script>`}
  {/if}

  {#if faqStructuredData}
    {@html `<script type="application/ld+json">${JSON.stringify(faqStructuredData)}</script>`}
  {/if}

  <!-- Local Business Schema -->
  {@html `<script type="application/ld+json">${JSON.stringify(localBusinessStructuredData)}</script>`}
  
  <!-- Additional Meta for Real Estate -->
  <meta name="geo.region" content="US-NV" />
  <meta name="geo.placename" content="Las Vegas" />
  <meta name="geo.position" content="36.1699;-115.1398" />
  <meta name="ICBM" content="36.1699, -115.1398" />
  
  <!-- Mobile App Meta -->
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="Pewter Valley Estates" />
  
  <!-- Security Headers -->
  <meta http-equiv="X-Content-Type-Options" content="nosniff" />
  <meta http-equiv="X-Frame-Options" content="DENY" />
  <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
</svelte:head>
