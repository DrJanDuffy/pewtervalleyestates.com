<script>
  // Import SEO utilities
  import { browser } from '$app/environment'
  import {
    generateMetaTags,
    generateStructuredData,
    generateBreadcrumbStructuredData,
    generateLocalBusinessStructuredData,
    generateFAQStructuredData,
    preloadCriticalResources,
    generateHreflangTags,
    validateSEOData
  } from '$lib/seo-utils.js'

  // Svelte 5: Use $props() instead of export let
  const {
    pageData = {},
    breadcrumbs = [],
    faqs = [],
    structuredData = null,
    showValidation = false
  } = $props()

  // Generate comprehensive meta tags
  const metaTags = generateMetaTags(pageData)
  
  // Generate structured data
  const baseStructuredData = structuredData || generateStructuredData(pageData)
  const breadcrumbStructuredData = breadcrumbs && breadcrumbs.length > 0 ? generateBreadcrumbStructuredData(breadcrumbs) : null
  
  // Generate FAQ structured data if FAQs are provided
  const faqsArray = faqs && Array.isArray(faqs) ? faqs : []
  const hasValidFAQs = faqsArray.length > 0
  const faqStructuredData = hasValidFAQs ? generateFAQStructuredData(faqsArray) : null
  
  const localBusinessStructuredData = generateLocalBusinessStructuredData()
  
  // Preload critical resources
  const criticalResources = preloadCriticalResources()
  
  // Generate hreflang tags
  const hreflangTags = generateHreflangTags(metaTags.canonical)
  
  // Validate SEO data if in development (only in browser)
  if (showValidation && browser) {
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
  <meta name="robots" content={metaTags.noindex ? 'noindex,nofollow' : 'index,follow'} />
  <meta name="googlebot" content="index,follow" />
  <meta name="bingbot" content="index,follow" />
  
  <!-- Canonical URL -->
  <link rel="canonical" href={metaTags.canonical} />
  
  <!-- Hreflang Tags -->
  {#each hreflangTags as tag}
    <link rel="alternate" hreflang={tag.hreflang} href={tag.href} />
  {/each}
  
  <!-- Open Graph / Facebook - Enhanced for 2025 Best Practices -->
  <meta property="og:type" content={metaTags.ogType} />
  <meta property="og:title" content={metaTags.ogTitle} />
  <meta property="og:description" content={metaTags.ogDescription} />
  <meta property="og:image" content={metaTags.ogImage} />
  <meta property="og:image:secure_url" content={metaTags.ogImageSecureUrl} />
  <meta property="og:image:type" content={metaTags.ogImageType} />
  <meta property="og:image:width" content={metaTags.ogImageWidth} />
  <meta property="og:image:height" content={metaTags.ogImageHeight} />
  <meta property="og:image:alt" content={metaTags.ogImageAlt} />
  <meta property="og:url" content={metaTags.ogUrl} />
  <meta property="og:site_name" content={metaTags.ogSiteName} />
  <meta property="og:locale" content={metaTags.ogLocale} />
  <meta property="og:locale:alternate" content={metaTags.ogLocaleAlternate} />
  
  <!-- Article-specific OG tags (when applicable) -->
  {#if metaTags.articleAuthor}
    <meta property="article:author" content={metaTags.articleAuthor} />
  {/if}
  {#if metaTags.articlePublishedTime}
    <meta property="article:published_time" content={metaTags.articlePublishedTime} />
  {/if}
  {#if metaTags.articleModifiedTime}
    <meta property="article:modified_time" content={metaTags.articleModifiedTime} />
  {/if}
  {#if metaTags.articleSection}
    <meta property="article:section" content={metaTags.articleSection} />
  {/if}
  {#if metaTags.articleTag && metaTags.articleTag.length > 0}
    {#each metaTags.articleTag as tag}
      <meta property="article:tag" content={tag} />
    {/each}
  {/if}
  
  <!-- Twitter Card - Enhanced -->
  <meta name="twitter:card" content={metaTags.twitterCard} />
  <meta name="twitter:title" content={metaTags.twitterTitle} />
  <meta name="twitter:description" content={metaTags.twitterDescription} />
  <meta name="twitter:image" content={metaTags.twitterImage} />
  <meta name="twitter:image:alt" content={metaTags.twitterImageAlt} />
  <meta name="twitter:site" content={metaTags.twitterSite} />
  <meta name="twitter:creator" content={metaTags.twitterCreator} />
  <meta name="twitter:domain" content={metaTags.twitterDomain} />
  
  <!-- LinkedIn Open Graph Support -->
  <meta property="og:image:url" content={metaTags.ogImage} />
  
  <!-- Additional Platform Support -->
  <meta name="pinterest" content="nohover" />
  <meta name="pinterest-rich-pin" content="true" />
  
  <!-- Additional Meta Tags -->
  <meta name="theme-color" content="#0A2540" />
  <meta name="msapplication-TileColor" content="#0A2540" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  
  <!-- Preload Critical Resources -->
  {#each criticalResources as resource}
    {@const asType = resource.as === 'font' ? 'font' : resource.as === 'image' ? 'image' : 'fetch'}
    {@const crossOrigin = resource.crossorigin === 'anonymous'
      ? 'anonymous'
      : resource.crossorigin === 'use-credentials'
        ? 'use-credentials'
        : null}
    <link rel="preload" href={resource.href} as={asType} type={resource.type || undefined} crossorigin={crossOrigin || undefined} />
  {/each}
  
  <!-- Preconnect to External Domains -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link rel="preconnect" href="https://www.google-analytics.com" />
  <link rel="preconnect" href="https://drjanduffy.realscout.com" />
  
  <!-- DNS Prefetch for Performance -->
  <link rel="dns-prefetch" href="//panomaps.us" />
  <link rel="dns-prefetch" href="//www.richmondamerican.com" />
  
  <!-- Structured Data -->
  {@html `<script type="application/ld+json">${JSON.stringify(baseStructuredData)}</script>`}
  
  {#if breadcrumbStructuredData}
    {@html `<script type="application/ld+json">${JSON.stringify(breadcrumbStructuredData)}</script>`}
  {/if}
  
  {#if faqStructuredData}
    {@html `<script type="application/ld+json">${JSON.stringify(faqStructuredData)}</script>`}
  {/if}
  
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
  
  <!-- Note: Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection) 
       should be set via server headers, not meta tags. Configure in Vercel or your hosting platform. -->
</svelte:head>