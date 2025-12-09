// SEO utility functions following SvelteKit best practices

// Import from main SEO config to ensure consistency
import { SITE_CONFIG as MAIN_CONFIG, generateLocalBusinessSchema } from "$lib/seo.js"

// Re-export for backward compatibility
export const SITE_CONFIG = {
  name: MAIN_CONFIG.businessName,
  url: MAIN_CONFIG.url,
  description: MAIN_CONFIG.description,
  image: `${MAIN_CONFIG.url}/og-image.jpg`,
  twitter: "@DrJanDuffy",
  phone: MAIN_CONFIG.phoneTel,
  email: MAIN_CONFIG.email,
  address: {
    street: MAIN_CONFIG.address.street,
    region: MAIN_CONFIG.address.state,
    country: MAIN_CONFIG.address.country
  }
}

/**
 * Generate canonical URL from page path
 * Helper function for dynamic URL generation
 */
export function generateCanonicalUrl(pathname = '/') {
  // Remove trailing slash except for root
  const cleanPath = pathname === '/' ? '' : pathname.replace(/\/$/, '')
  return `${SITE_CONFIG.url}${cleanPath}`
}

// Generate comprehensive meta tags for any page
export function generateMetaTags(pageData) {
  const {
    title,
    description,
    image = SITE_CONFIG.image,
    type = "website",
    canonical,
    pathname, // Optional: SvelteKit page pathname for auto-generating canonical
    keywords = "",
    noindex = false,
    publishedTime,
    modifiedTime,
    author = "Dr. Jan Duffy",
    section = "Real Estate"
  } = pageData

  const fullTitle = title.includes(SITE_CONFIG.name) ? title : `${title} | ${SITE_CONFIG.name}`
  const fullDescription = description || SITE_CONFIG.description
  // Use provided canonical, or generate from pathname, or fallback to base URL
  const canonicalUrl = canonical || (pathname ? generateCanonicalUrl(pathname) : SITE_CONFIG.url)
  const imageUrl = image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`

  // Ensure title and description are optimized for social sharing
  const ogTitle = fullTitle.length > 60 ? fullTitle.substring(0, 57) + '...' : fullTitle
  const ogDescription = fullDescription.length > 160 ? fullDescription.substring(0, 157) + '...' : fullDescription
  const twitterTitle = fullTitle.length > 70 ? fullTitle.substring(0, 67) + '...' : fullTitle
  const twitterDescription = fullDescription.length > 200 ? fullDescription.substring(0, 197) + '...' : fullDescription

  return {
    title: fullTitle,
    description: fullDescription,
    canonical: canonicalUrl,
    keywords: keywords || generateKeywords(pageData),
    image: imageUrl,
    type,
    noindex,
    publishedTime,
    modifiedTime,
    author,
    section,
    // Open Graph - Enhanced for 2025
    ogTitle: ogTitle,
    ogDescription: ogDescription,
    ogImage: imageUrl,
    ogImageSecureUrl: imageUrl.startsWith('https://') ? imageUrl : imageUrl.replace('http://', 'https://'),
    ogImageType: 'image/jpeg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    ogImageAlt: pageData.imageAlt || `${fullTitle} - ${SITE_CONFIG.name}`,
    ogType: type,
    ogUrl: canonicalUrl,
    ogSiteName: SITE_CONFIG.name,
    ogLocale: 'en_US',
    ogLocaleAlternate: 'es_US',
    // Article-specific OG tags (when type is 'article')
    ...(type === 'article' && {
      articleAuthor: author,
      articlePublishedTime: publishedTime,
      articleModifiedTime: modifiedTime || publishedTime,
      articleSection: section,
      articleTag: pageData.tags || []
    }),
    // Twitter Card - Enhanced
    twitterCard: "summary_large_image",
    twitterTitle: twitterTitle,
    twitterDescription: twitterDescription,
    twitterImage: imageUrl,
    twitterImageAlt: pageData.imageAlt || `${fullTitle} - ${SITE_CONFIG.name}`,
    twitterSite: SITE_CONFIG.twitter,
    twitterCreator: SITE_CONFIG.twitter,
    twitterDomain: canonicalUrl.replace(/^https?:\/\//, '').split('/')[0]
  }
}

// Generate keywords based on page content
export function generateKeywords(pageData) {
  const baseKeywords = [
    "Las Vegas real estate",
    "Dr. Jan Duffy",
    "Pewter Valley Estates",
    "Las Vegas homes for sale",
    "new construction Las Vegas",
    "Las Vegas real estate agent"
  ]

  const pageKeywords = pageData.keywords ? pageData.keywords.split(',').map(k => k.trim()) : []
  const locationKeywords = pageData.location ? [
    `${pageData.location} real estate`,
    `${pageData.location} homes`,
    `${pageData.location} properties`
  ] : []

  return [...baseKeywords, ...pageKeywords, ...locationKeywords].join(', ')
}

// Generate structured data for different page types
export function generateStructuredData(pageData) {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageData.title,
    "description": pageData.description,
    "url": pageData.canonical,
    "mainEntity": {
      "@type": "RealEstateAgent",
      "name": "Dr. Jan Duffy",
      "description": "Las Vegas Real Estate Agent specializing in luxury homes and investment properties",
      "url": SITE_CONFIG.url,
      "telephone": SITE_CONFIG.phone,
      "email": SITE_CONFIG.email,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": SITE_CONFIG.address.street,
        "addressRegion": SITE_CONFIG.address.region,
        "addressCountry": SITE_CONFIG.address.country
      },
      "areaServed": [
        "Las Vegas",
        "Henderson", 
        "Summerlin",
        "Green Valley",
        "Anthem",
        "Inspirada",
        "Mountain's Edge",
        "Silverado Ranch"
      ],
      "serviceType": "Real Estate Sales"
    }
  }

  // Add specific structured data based on page type
  if (pageData.type === 'RealEstateListing') {
    baseStructuredData["@type"] = "RealEstateListing"
    baseStructuredData.mainEntity = {
      "@type": "RealEstateAgent",
      ...baseStructuredData.mainEntity
    }
  }

  return baseStructuredData
}

// Generate breadcrumb structured data
export function generateBreadcrumbStructuredData(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${SITE_CONFIG.url}${crumb.url || crumb.href || ''}`
    }))
  }
}

// Generate FAQ structured data
export function generateFAQStructuredData(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

// Generate local business structured data - imports from main SEO config
export function generateLocalBusinessStructuredData() {
  return generateLocalBusinessSchema()
}

// Performance optimization helpers
export function preloadCriticalResources() {
  return [
    { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    { href: '/images/hero-bg.webp', as: 'image' },
    { href: '/images/dr-jan-headshot.jpg', as: 'image' }
  ]
}

// Generate hreflang tags for internationalization
export function generateHreflangTags(canonicalUrl) {
  return [
    { hreflang: 'en-us', href: canonicalUrl },
    { hreflang: 'en', href: canonicalUrl },
    { hreflang: 'x-default', href: canonicalUrl }
  ]
}

// Validate SEO data
export function validateSEOData(pageData) {
  const errors = []
  
  if (!pageData.title || pageData.title.length < 30) {
    errors.push('Title should be at least 30 characters')
  }
  
  if (!pageData.description || pageData.description.length < 120) {
    errors.push('Description should be at least 120 characters')
  }
  
  if (pageData.title && pageData.title.length > 60) {
    errors.push('Title should be under 60 characters for optimal display')
  }
  
  if (pageData.description && pageData.description.length > 160) {
    errors.push('Description should be under 160 characters for optimal display')
  }
  
  return errors
}
