import adapter from "@sveltejs/adapter-vercel"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // Vercel-specific optimizations
      runtime: "nodejs20.x",
      regions: ["iad1"],
      memory: 1024,
      maxDuration: 10,
      images: {
        sizes: [640, 828, 1200, 1920, 3840],
        formats: ["image/avif", "image/webp"],
        minimumCacheTTL: 300,
        domains: ["pewtervalleyestates.com", "www.pewtervalleyestates.com"],
      },
    }),
    prerender: {
      // Handle 404s during prerender gracefully
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore missing font and image files during prerender
        if (
          path.includes('/fonts/') ||
          path.includes('/images/') ||
          path.includes('.woff2') ||
          path.includes('.webp') ||
          path.includes('.jpg') ||
          path.includes('.jpeg') ||
          path.includes('.png')
        ) {
          console.warn(`[Prerender] Missing asset (ignored): ${path}${referrer ? ` (linked from ${referrer})` : ''}`)
          return
        }
        // For other 404s, throw to fail the build
        throw new Error(`404 ${path}${referrer ? ` (linked from ${referrer})` : ''}: ${message}`)
      },
      handleMissingId: 'warn'
    },
  },
}

export default config
