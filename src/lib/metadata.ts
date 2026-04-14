import type { Metadata } from "next"
import { MARKETING_IMAGES } from "./marketing-images"
import { SITE_CONFIG } from "./site-contact"

/** Canonical URL for a path like `/about` or `/` / `` for home. */
export function canonicalUrl(path = "/"): string {
  const base = SITE_CONFIG.url.replace(/\/$/, "")
  if (!path || path === "/") return base
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${base}${normalized.replace(/\/$/, "")}`
}

/** Default social share image (generated into `public/` — see `scripts/generate-site-images.mjs`). */
export const DEFAULT_OG_IMAGE_PATH = MARKETING_IMAGES.og

type PageMetadataInput = {
  /** Full `<title>` text (already includes branding when needed). */
  title: string
  description: string
  /** Path beginning with `/` (e.g. `/contact`). Use `/` for home. */
  path: string
  noindex?: boolean
  ogType?: "website" | "article"
  /** Relative path under `metadataBase`, e.g. `/images/og-marketing.png` */
  ogImagePath?: string
}

/**
 * Next.js App Router metadata aligned with `metadataBase` in root layout.
 * Uses `title.absolute` so titles from legacy `generateMetaTags` are not double-suffixed.
 */
export function buildPageMetadata(input: PageMetadataInput): Metadata {
  const url = canonicalUrl(input.path || "/")
  const { title, description, noindex, ogType = "website", ogImagePath } = input

  const ogImageRel =
    ogImagePath != null && ogImagePath.length > 0 ? ogImagePath : DEFAULT_OG_IMAGE_PATH
  const ogImage = [{ url: ogImageRel, width: 1200, height: 630, alt: title }]

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      type: ogType,
      siteName: SITE_CONFIG.businessName,
      locale: "en_US",
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageRel],
    },
  }
}
