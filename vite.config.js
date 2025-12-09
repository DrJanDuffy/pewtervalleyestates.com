import { sveltekit } from "@sveltejs/kit/vite"

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  define: {
    "import.meta.env.VERCEL_ANALYTICS_ID": JSON.stringify(process.env.VERCEL_ANALYTICS_ID),
  },
  build: {
    rollupOptions: {
      treeshake: {
        moduleSideEffects: (id) => {
          // Prevent tree-shaking of seo-utils module functions used in SSR
          if (id.includes('seo-utils.js') || id.includes('seo-utils')) {
            return true
          }
          return false
        },
      },
    },
  },
}

export default config
