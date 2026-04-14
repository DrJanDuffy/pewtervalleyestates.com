/**
 * Single source of truth for NAP and site identity — align with Google Business Profile.
 * Set NEXT_PUBLIC_GOOGLE_* URLs in the deployment environment when you have the live GBP links.
 */

const STATIC_SITE = {
  name: "Dr. Jan Duffy",
  businessName: "Silverado Ranch | Homes by Dr. Jan Duffy",
  tagline: "Homes by Dr. Jan Duffy",
  description:
    "Silverado Ranch real estate in Henderson and Clark County—including Pewter Valley Estates, a community within Silverado Ranch (89183). Dr. Jan Duffy helps buyers and sellers with MLS-backed search, pricing, and neighborhood context.",
  url: "https://www.pewtervalleyestates.com",
  /** Public favicon; used in JSON-LD logo (square asset). */
  logoPath: "/favicon.png",
  phone: "702 500-1955",
  phoneFormatted: "+1-702-500-1955",
  phoneTel: "+17025001955",
  email: "DrDuffy@PewterValleyEstates.com",
  address: {
    street: "Pyle Avenue and, S Rancho Destino Rd",
    city: "Las Vegas",
    state: "Nevada",
    stateAbbr: "NV",
    zipCode: "89183",
    country: "United States",
    countryCode: "US",
  },
  coordinates: {
    latitude: "36.0694",
    longitude: "-115.2408",
  },
  /** Nevada real estate salesperson license — visible on marketing pages where required. */
  licenseNumber: "S.0197614.LLC",
  brokerage: {
    name: "Berkshire Hathaway HomeServices Nevada Properties",
    url: "https://www.berkshirehathawayhs.com/nevada",
  },
  social: {
    facebook: "https://facebook.com/pewtervalleyestates",
    twitter: "https://twitter.com/pewtervalleyestates",
    instagram: "https://instagram.com/pewtervalleyestates",
    linkedin: "https://linkedin.com/company/pewtervalleyestates",
  },
} as const

function absoluteUrl(path: string): string {
  const base = STATIC_SITE.url.replace(/\/$/, "")
  const p = path.startsWith("/") ? path : `/${path}`
  return `${base}${p}`
}

export const SITE_CONFIG = {
  ...STATIC_SITE,
  logo: absoluteUrl(STATIC_SITE.logoPath),
  googleBusinessProfile:
    typeof process !== "undefined" && process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL
      ? process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL
      : "",
  googleReviewsUrl:
    typeof process !== "undefined" && process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL
      ? process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL
      : "",
}

export type SiteConfig = typeof SITE_CONFIG
