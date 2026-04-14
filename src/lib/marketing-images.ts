/**
 * First-party marketing image paths. Files are produced by `scripts/generate-site-images.mjs`
 * (run locally with OPENROUTER_API_KEY or via `.github/workflows/generate-site-images.yml` using GitHub Actions secrets).
 */
export const MARKETING_IMAGES = {
  hero: "/images/hero-marketing.png",
  og: "/images/og-marketing.png",
  community: "/photos/pewter-valley-community.png",
} as const
