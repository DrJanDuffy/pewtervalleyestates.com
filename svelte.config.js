import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // Vercel-specific optimizations
      runtime: 'nodejs20.x',
      regions: ['iad1'],
      memory: 1024,
      maxDuration: 10,
      images: {
        sizes: [640, 828, 1200, 1920, 3840],
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 300,
        domains: ['pewtervalleyestates.com', 'www.pewtervalleyestates.com']
      }
    })
  }
};

export default config;
