/**
 * Google Search Console 2025 Configuration
 *
 * This file contains all configuration needed for Google Search Console integration.
 * Update the verification codes below after obtaining them from Google Search Console.
 *
 * How to get verification codes:
 * 1. Go to https://search.google.com/search-console
 * 2. Add your property (use Domain or URL prefix)
 * 3. Choose HTML tag method and copy the content value
 * 4. Update GOOGLE_SITE_VERIFICATION below
 *
 * For IndexNow (Bing, Yandex):
 * 1. Generate a key at https://www.bing.com/indexnow
 * 2. Update INDEXNOW_KEY below
 */

import { SITE_CONFIG } from './seo.js'

// Google Search Console Verification
// Replace with your actual verification code from Google Search Console
export const GOOGLE_SITE_VERIFICATION = 'YOUR_GOOGLE_VERIFICATION_CODE'

// Bing Webmaster Tools Verification (optional)
export const BING_SITE_VERIFICATION = 'YOUR_BING_VERIFICATION_CODE'

// Yandex Webmaster Verification (optional)
export const YANDEX_SITE_VERIFICATION = 'YOUR_YANDEX_VERIFICATION_CODE'

// IndexNow API Key for faster indexing (Bing, Yandex, Seznam, Naver)
// Generate at https://www.bing.com/indexnow
export const INDEXNOW_KEY = 'YOUR_INDEXNOW_KEY'

/**
 * Google Search Console 2025 Best Practices Configuration
 */
export const GSC_CONFIG = {
  // Site information
  siteUrl: SITE_CONFIG.url,

  // Verification methods supported
  verificationMethods: {
    htmlTag: true,      // Meta tag in <head>
    htmlFile: true,     // HTML file at root
    dnsRecord: false,   // TXT record (domain verification)
    googleAnalytics: true,  // GA4 verification
    googleTagManager: false
  },

  // Sitemap configuration
  sitemap: {
    url: `${SITE_CONFIG.url}/sitemap.xml`,
    updateFrequency: 'daily',
    maxUrls: 50000,
    includeImages: true,
    includeLastmod: true,
    includePriority: true,
    includeChangefreq: true
  },

  // IndexNow configuration for faster indexing
  indexNow: {
    enabled: true,
    keyLocation: `${SITE_CONFIG.url}`,
    searchEngines: [
      'https://api.indexnow.org/indexnow',
      'https://www.bing.com/indexnow',
      'https://yandex.com/indexnow',
      'https://search.seznam.cz/indexnow'
    ]
  },

  // Core Web Vitals targets (2025 standards)
  coreWebVitals: {
    LCP: 2500,   // Largest Contentful Paint (ms) - should be < 2.5s
    INP: 200,    // Interaction to Next Paint (ms) - should be < 200ms (replaced FID in 2024)
    CLS: 0.1     // Cumulative Layout Shift - should be < 0.1
  },

  // Mobile-first indexing compliance
  mobileFirst: {
    viewport: 'width=device-width, initial-scale=1',
    tapTargetSize: '48px',
    fontSizeMinimum: '16px',
    contentWidth: 'responsive'
  }
}

/**
 * Generate WebSite structured data with SearchAction for sitelinks searchbox
 * This is a 2025 GSC enhancement for better search appearance
 */
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
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.logo,
        width: 600,
        height: 60
      }
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

/**
 * Generate WebPage structured data for individual pages
 */
export function generateWebPageSchema(pageData = {}) {
  const {
    title = SITE_CONFIG.name,
    description = SITE_CONFIG.description,
    url = SITE_CONFIG.url,
    image = `${SITE_CONFIG.url}/og-image.jpg`,
    datePublished = new Date().toISOString(),
    dateModified = new Date().toISOString()
  } = pageData

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}/#webpage`,
    url: url,
    name: title,
    description: description,
    isPartOf: {
      '@id': `${SITE_CONFIG.url}/#website`
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: image
    },
    datePublished: datePublished,
    dateModified: dateModified,
    inLanguage: 'en-US',
    potentialAction: [
      {
        '@type': 'ReadAction',
        target: [url]
      }
    ]
  }
}

/**
 * Generate speakable structured data for voice search (2025 enhancement)
 * Helps Google Assistant and voice search understand content
 */
export function generateSpeakableSchema(pageData = {}) {
  const {
    url = SITE_CONFIG.url,
    cssSelectors = ['[data-speakable="true"]', 'h1', '.description']
  } = pageData

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}/#speakable`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors
    },
    url: url
  }
}

/**
 * Generate Service structured data for real estate services
 */
export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_CONFIG.url}/#service`,
    name: 'New Home Sales & Consultation',
    description: 'Professional new home sales and real estate consultation services in Las Vegas, Nevada. Expert guidance through the home buying process.',
    provider: {
      '@type': 'RealEstateAgent',
      '@id': `${SITE_CONFIG.url}/#realestate-agent`,
      name: 'Dr. Jan Duffy',
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email
    },
    serviceType: 'Real Estate Services',
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas',
      containedInPlace: {
        '@type': 'State',
        name: 'Nevada'
      }
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'New Home Consultation',
            description: 'Free consultation to understand your home buying needs'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Property Tours',
            description: 'Guided tours of available homes and communities'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Buying Assistance',
            description: 'Full support throughout the purchase process'
          }
        }
      ]
    }
  }
}

/**
 * Generate complete structured data graph for Google Search Console
 * Combines all schemas into a single @graph for better indexing
 */
export function generateCompleteStructuredDataGraph(pageData = {}) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebSiteSchema(),
      generateWebPageSchema(pageData),
      generateServiceSchema()
    ]
  }
}

/**
 * IndexNow API - Notify search engines of new/updated content
 * Use this function when content is published or updated
 */
export async function notifyIndexNow(urls = []) {
  if (!INDEXNOW_KEY || INDEXNOW_KEY === 'YOUR_INDEXNOW_KEY') {
    console.warn('IndexNow key not configured. Skipping notification.')
    return { success: false, reason: 'IndexNow key not configured' }
  }

  const payload = {
    host: new URL(SITE_CONFIG.url).hostname,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_CONFIG.url}/${INDEXNOW_KEY}.txt`,
    urlList: urls.length > 0 ? urls : [SITE_CONFIG.url]
  }

  const results = []

  for (const endpoint of GSC_CONFIG.indexNow.searchEngines) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      results.push({
        endpoint,
        status: response.status,
        success: response.ok
      })
    } catch (error) {
      results.push({
        endpoint,
        status: 'error',
        success: false,
        error: error.message
      })
    }
  }

  return { success: true, results }
}

/**
 * Generate robots meta tags based on page type
 */
export function generateRobotsMetaTags(pageType = 'default') {
  const robotsConfig = {
    default: {
      robots: 'index, follow',
      googlebot: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      bingbot: 'index, follow'
    },
    listing: {
      robots: 'index, follow',
      googlebot: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      bingbot: 'index, follow'
    },
    contact: {
      robots: 'index, follow',
      googlebot: 'index, follow, max-snippet:160, max-image-preview:standard',
      bingbot: 'index, follow'
    },
    private: {
      robots: 'noindex, nofollow',
      googlebot: 'noindex, nofollow',
      bingbot: 'noindex, nofollow'
    }
  }

  return robotsConfig[pageType] || robotsConfig.default
}

/**
 * Validate structured data against Google's requirements
 */
export function validateStructuredData(schema) {
  const errors = []
  const warnings = []

  // Check for required @context
  if (!schema['@context']) {
    errors.push('Missing @context - required for all structured data')
  }

  // Check for @type
  if (!schema['@type'] && !schema['@graph']) {
    errors.push('Missing @type - required for all structured data')
  }

  // Check for recommended properties based on type
  if (schema['@type'] === 'RealEstateAgent') {
    if (!schema.telephone) warnings.push('RealEstateAgent: telephone recommended')
    if (!schema.address) warnings.push('RealEstateAgent: address recommended')
    if (!schema.areaServed) warnings.push('RealEstateAgent: areaServed recommended')
  }

  if (schema['@type'] === 'WebSite') {
    if (!schema.url) errors.push('WebSite: url is required')
    if (!schema.name) warnings.push('WebSite: name is recommended')
    if (!schema.potentialAction) warnings.push('WebSite: SearchAction recommended for sitelinks searchbox')
  }

  return { valid: errors.length === 0, errors, warnings }
}
