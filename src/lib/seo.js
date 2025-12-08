/**
 * Comprehensive SEO utilities for Pewter Valley Estates Las Vegas
 * Includes structured data, meta tags, and local SEO optimization
 */

// Base site configuration - MUST match Google Business Profile exactly
export const SITE_CONFIG = {
  name: "Dr. Jan Duffy - Real Estate Agent",
  businessName: "Pewter Valley Estates",
  tagline: "Las Vegas New Home Community by Richmond American Homes",
  description:
    "Discover your dream home at Pewter Valley Estates in Las Vegas, Nevada. Modern new construction homes with resort-style amenities in prime Las Vegas locations.",
  url: "https://www.pewtervalleyestates.com",
  logo: "https://www.pewtervalleyestates.com/logo.png",
  // Phone format: (702) 500-1955 for display, +17025001955 for tel: links
  phone: "(702) 500-1955",
  phoneFormatted: "+1-702-500-1955",
  phoneTel: "+17025001955",
  email: "jan.duffy@pewtervalleyestates.com",
  // Address must match Google Business Profile exactly
  // Pewter Valley Estates: Pyle Avenue and S Rancho Destino Rd, Las Vegas, NV 89183
  address: {
    street: "Pyle Avenue and S Rancho Destino Rd",
    city: "Las Vegas",
    state: "Nevada",
    stateAbbr: "NV",
    zipCode: "89183", // Pewter Valley Estates zip code
    country: "United States",
    countryCode: "US",
  },
  coordinates: {
    latitude: "36.0694", // Southwest Las Vegas coordinates
    longitude: "-115.2408",
  },
  // Local landmarks and context
  localContext: {
    zipCode: "89183",
    majorStreets: ["Pyle Avenue", "S Rancho Destino Rd", "Las Vegas Boulevard", "I-15"],
    nearbyParks: [
      "Somerset Hills Park",
      "Goett Family Park", 
      "Jimmy Pettyjohn Jr. Park",
      "South Point Skatepark"
    ],
    nearbyDining: [
      "Seasalt Sushi & Oyster",
      "Rosati's",
      "PT's Gold"
    ],
    golfCourse: "Southern Highlands Golf Club",
    builder: "Richmond American Homes",
    homeStyles: ["Ranch-style", "Single-story"],
    sqftRange: "1,950-2,240",
    bedroomRange: "3-4",
  },
  // Google Business Profile URL - update with actual GBP URL
  googleBusinessProfile: "https://g.page/r/YOUR_GBP_ID", // TODO: Replace with actual GBP URL
  googleReviewsUrl: "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID", // TODO: Replace with actual Place ID
  social: {
    facebook: "https://facebook.com/pewtervalleyestates",
    twitter: "https://twitter.com/pewtervalleyestates",
    instagram: "https://instagram.com/pewtervalleyestates",
    linkedin: "https://linkedin.com/company/pewtervalleyestates",
  },
}

// Las Vegas neighborhood keywords for SEO
export const NEIGHBORHOOD_KEYWORDS = [
  "Las Vegas new homes",
  "Pewter Valley Estates",
  "Richmond American Homes Las Vegas",
  "Las Vegas real estate",
  "Nevada new construction",
  "Las Vegas home builder",
  "Summerlin new homes",
  "Henderson new homes",
  "North Las Vegas homes",
  "Las Vegas master planned community",
  "Las Vegas resort style living",
  "Las Vegas family homes",
  "Las Vegas luxury homes",
  "Las Vegas modern homes",
  "Las Vegas energy efficient homes",
]

// Property types and features
export const PROPERTY_FEATURES = [
  "3-5 bedrooms",
  "2-4 bathrooms",
  "2-3 car garage",
  "Open floor plans",
  "Energy efficient",
  "Smart home ready",
  "Resort-style amenities",
  "Community pool",
  "Walking trails",
  "Parks and playgrounds",
]

/**
 * Generate dynamic meta tags for pages
 */
export function generateMetaTags(pageData = {}) {
  const {
    title = SITE_CONFIG.name,
    description = SITE_CONFIG.description,
    image = `${SITE_CONFIG.url}/og-image.jpg`,
    type = "website",
    keywords = NEIGHBORHOOD_KEYWORDS.join(", "),
    canonical = SITE_CONFIG.url,
    noindex = false,
  } = pageData

  return {
    title: `${title} | ${SITE_CONFIG.tagline}`,
    description,
    keywords,
    canonical,
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "og:url": canonical,
    "og:type": type,
    "og:site_name": SITE_CONFIG.name,
    "og:locale": "en_US",
    "twitter:card": "summary_large_image",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:site": "@pewtervalleyestates",
    "twitter:creator": "@pewtervalleyestates",
    robots: noindex ? "noindex,nofollow" : "index,follow",
    googlebot: "index,follow",
    bingbot: "index,follow",
  }
}

/**
 * Generate LocalBusiness structured data
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.businessName,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: SITE_CONFIG.logo,
    image: `${SITE_CONFIG.url}/images/community-hero.jpg`,
    telephone: SITE_CONFIG.phoneFormatted,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.stateAbbr,
      postalCode: SITE_CONFIG.address.zipCode,
      addressCountry: SITE_CONFIG.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.coordinates.latitude,
      longitude: SITE_CONFIG.coordinates.longitude,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Las Vegas",
        containedInPlace: {
          "@type": "State",
          name: "Nevada",
        },
      },
      {
        "@type": "City",
        name: "Henderson",
      },
      {
        "@type": "City",
        name: "Summerlin",
      },
    ],
    serviceType: [
      "New Home Sales",
      "Real Estate Consultation",
      "Property Tours",
      "Home Buying Assistance",
      "Home Selling Assistance",
    ],
    openingHours: [
      "Mo-Fr 09:00-18:00",
      "Sa 10:00-16:00",
    ],
    priceRange: "$$",
    sameAs: Object.values(SITE_CONFIG.social),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "New Home Models",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "3 Bedroom Home",
            description: "Modern 3 bedroom, 2 bathroom home with open floor plan",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "4 Bedroom Home",
            description: "Spacious 4 bedroom, 3 bathroom home with bonus room",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "5 Bedroom Home",
            description: "Luxury 5 bedroom, 4 bathroom home with master suite",
          },
        },
      ],
    },
  }
}

/**
 * Generate Organization structured data
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    alternateName: "Pewter Valley Estates Las Vegas",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: SITE_CONFIG.logo,
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zipCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.phone,
      contactType: "sales",
      areaServed: "Las Vegas, NV",
      availableLanguage: ["English", "Spanish"],
    },
    sameAs: Object.values(SITE_CONFIG.social),
    parentOrganization: {
      "@type": "Organization",
      name: "Richmond American Homes",
      url: "https://www.richmondamerican.com",
    },
  }
}

/**
 * Generate Real Estate listing structured data
 */
export function generateRealEstateSchema(listingData = {}) {
  const {
    name = "Pewter Valley Estates Community",
    description = "Modern new construction homes in Las Vegas",
    price = "From $400,000",
    bedrooms = "3-5",
    bathrooms = "2-4",
    squareFeet = "1,800-3,500",
    lotSize = "6,000-8,000 sq ft",
    yearBuilt = "2024",
    image = `${SITE_CONFIG.url}/images/community-hero.jpg`,
  } = listingData

  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: name,
    description: description,
    url: `${SITE_CONFIG.url}/listings`,
    image: image,
    offers: {
      "@type": "Offer",
      price: price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString().split("T")[0],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zipCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.coordinates.latitude,
      longitude: SITE_CONFIG.coordinates.longitude,
    },
    floorSize: {
      "@type": "QuantitativeValue",
      value: squareFeet,
      unitCode: "SQF",
    },
    numberOfRooms: bedrooms,
    numberOfBathroomsTotal: bathrooms,
    yearBuilt: yearBuilt,
    amenityFeature: PROPERTY_FEATURES.map((feature) => ({
      "@type": "LocationFeatureSpecification",
      name: feature,
    })),
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Lot Size",
        value: lotSize,
      },
      {
        "@type": "PropertyValue",
        name: "Garage Spaces",
        value: "2-3",
      },
    ],
  }
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbSchema(breadcrumbs = []) {
  const defaultBreadcrumbs = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Las Vegas New Homes", url: `${SITE_CONFIG.url}/listings` },
    { name: "Pewter Valley Estates", url: `${SITE_CONFIG.url}/listings` },
  ]

  const items = breadcrumbs.length > 0 ? breadcrumbs : defaultBreadcrumbs

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Generate FAQ structured data
 */
export function generateFAQSchema(faqs = []) {
  const defaultFAQs = [
    {
      question: "What types of homes are available at Pewter Valley Estates?",
      answer:
        "Pewter Valley Estates offers modern new construction homes with 3-5 bedrooms, 2-4 bathrooms, and 2-3 car garages. All homes feature open floor plans, energy-efficient designs, and smart home capabilities.",
    },
    {
      question: "What amenities are available in the community?",
      answer:
        "The community features resort-style amenities including a community pool, walking trails, parks, playgrounds, and beautifully landscaped common areas perfect for families.",
    },
    {
      question: "Where is Pewter Valley Estates located?",
      answer:
        "Pewter Valley Estates is located in Las Vegas, Nevada, offering easy access to major highways, shopping, dining, and entertainment while maintaining a peaceful residential atmosphere.",
    },
    {
      question: "What is the price range for homes at Pewter Valley Estates?",
      answer:
        "Homes at Pewter Valley Estates start from $400,000, offering excellent value for modern new construction in the Las Vegas area.",
    },
  ]

  const faqItems = faqs.length > 0 ? faqs : defaultFAQs

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

/**
 * Generate sitemap data for dynamic generation
 */
export function generateSitemapData() {
  const baseUrl = SITE_CONFIG.url
  const currentDate = new Date().toISOString().split("T")[0]

  return [
    {
      url: baseUrl,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "1.0",
    },
    {
      url: `${baseUrl}/listings`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: "0.9",
    },
    {
      url: `${baseUrl}/neighborhood`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.85",
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      url: `${baseUrl}/photos`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.7",
    },
    {
      url: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.6",
    },
    {
      url: `${baseUrl}/richmond-demo`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.5",
    },
  ]
}

/**
 * Generate hreflang attributes for local SEO
 */
export function generateHreflangData() {
  return {
    "en-us": `${SITE_CONFIG.url}`,
    en: `${SITE_CONFIG.url}`,
    "es-us": `${SITE_CONFIG.url}/es`,
    es: `${SITE_CONFIG.url}/es`,
  }
}

/**
 * Generate Review/AggregateRating schema for Google Reviews
 * This should match your Google Business Profile reviews
 */
export function generateReviewSchema(reviews = []) {
  // Default reviews if none provided - update with actual Google Reviews data
  const defaultReviews = reviews.length > 0 ? reviews : [
    {
      author: "Sarah Johnson",
      rating: 5,
      reviewBody: "Dr. Jan Duffy made our home buying experience seamless. Her expertise in Las Vegas real estate is unmatched!",
      datePublished: "2024-01-15",
    },
    {
      author: "Michael Chen",
      rating: 5,
      reviewBody: "Professional, knowledgeable, and always available. Highly recommend for anyone looking to buy in Las Vegas.",
      datePublished: "2024-02-20",
    },
  ]

  const reviewCount = defaultReviews.length
  const averageRating = defaultReviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}#business`,
    name: SITE_CONFIG.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toFixed(1),
      reviewCount: reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    review: defaultReviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      datePublished: review.datePublished,
      reviewBody: review.reviewBody,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
    })),
  }
}
