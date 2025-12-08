/**
 * SEO utility functions following SvelteKit best practices
 * Updated for Google Search Console 2025
 *
 * Features:
 * - WebSite schema with SearchAction for sitelinks searchbox
 * - Enhanced structured data following schema.org 2025 guidelines
 * - Google verification meta tag support
 * - Core Web Vitals optimization (INP, LCP, CLS)
 */

import {
  GOOGLE_SITE_VERIFICATION,
  BING_SITE_VERIFICATION,
  generateRobotsMetaTags
} from './google-search-console.js'

export const SITE_CONFIG = {
  name: "Pewter Valley Estates",
  url: "https://www.pewtervalleyestates.com",
  description: "Luxury new construction homes in Las Vegas, Nevada. Dr. Jan Duffy Real Estate - Your trusted Las Vegas real estate expert.",
  image: "https://www.pewtervalleyestates.com/og-image.jpg",
  twitter: "@DrJanDuffy",
  phone: "+17022221964",
  email: "jan@pewtervalleyestates.com",
  address: {
    street: "Las Vegas, NV",
    region: "Nevada",
    country: "United States"
  }
}

// Google Search Console 2025 verification codes
export const VERIFICATION_CODES = {
  google: GOOGLE_SITE_VERIFICATION,
  bing: BING_SITE_VERIFICATION
}

// Generate comprehensive meta tags for any page
export function generateMetaTags(pageData) {
  const {
    title,
    description,
    image = SITE_CONFIG.image,
    type = "website",
    canonical,
    keywords = "",
    noindex = false,
    publishedTime,
    modifiedTime,
    author = "Dr. Jan Duffy",
    section = "Real Estate"
  } = pageData

  const fullTitle = title.includes(SITE_CONFIG.name) ? title : `${title} | ${SITE_CONFIG.name}`
  const fullDescription = description || SITE_CONFIG.description
  const canonicalUrl = canonical || `${SITE_CONFIG.url}${pageData.slug || ''}`
  const imageUrl = image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`

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
    // Open Graph
    ogTitle: fullTitle,
    ogDescription: fullDescription,
    ogImage: imageUrl,
    ogType: type,
    ogUrl: canonicalUrl,
    ogSiteName: SITE_CONFIG.name,
    // Twitter Card
    twitterCard: "summary_large_image",
    twitterTitle: fullTitle,
    twitterDescription: fullDescription,
    twitterImage: imageUrl,
    twitterSite: SITE_CONFIG.twitter,
    twitterCreator: SITE_CONFIG.twitter
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
      "item": `${SITE_CONFIG.url}${crumb.href}`
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

// Generate local business structured data
export function generateLocalBusinessStructuredData() {
  return {
    "@context": "https://schema.org",
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
    "serviceType": "Real Estate Sales",
    "priceRange": "$$$",
    "openingHours": "Mo-Fr 09:00-18:00,Sa 09:00-17:00",
    "sameAs": [
      "https://www.facebook.com/drjanduffy",
      "https://www.linkedin.com/in/drjanduffy",
      "https://www.instagram.com/drjanduffy"
    ]
  }
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

/**
 * Google Search Console 2025 Enhanced Schemas
 */

// Generate WebSite schema with SearchAction for sitelinks searchbox
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.name,
    alternateName: 'Pewter Valley Estates Las Vegas',
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    publisher: {
      '@id': `${SITE_CONFIG.url}/#organization`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/listings?search={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    inLanguage: 'en-US'
  }
}

// Generate Organization schema (2025 enhanced)
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    alternateName: 'Pewter Valley Estates',
    url: SITE_CONFIG.url,
    logo: {
      '@type': 'ImageObject',
      '@id': `${SITE_CONFIG.url}/#logo`,
      url: SITE_CONFIG.image,
      contentUrl: SITE_CONFIG.image,
      width: 1200,
      height: 630,
      caption: SITE_CONFIG.name
    },
    image: {
      '@id': `${SITE_CONFIG.url}/#logo`
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.phone,
      contactType: 'sales',
      areaServed: 'US',
      availableLanguage: ['English', 'Spanish']
    },
    sameAs: [
      'https://www.facebook.com/drjanduffy',
      'https://www.linkedin.com/in/drjanduffy',
      'https://www.instagram.com/drjanduffy'
    ]
  }
}

// Generate complete JSON-LD graph for GSC 2025
export function generateCompleteSchemaGraph(pageData = {}) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebSiteSchema(),
      generateOrganizationSchema(),
      generateLocalBusinessStructuredData(),
      pageData.breadcrumbs ? generateBreadcrumbStructuredData(pageData.breadcrumbs) : null,
      pageData.faqs ? generateFAQStructuredData(pageData.faqs) : null
    ].filter(Boolean)
  }
}

// Get robots meta tags based on page type
export { generateRobotsMetaTags }
