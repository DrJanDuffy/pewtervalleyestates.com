// Performance optimization utilities following SvelteKit best practices

// Image optimization helpers
export function getOptimizedImageUrl(src, options = {}) {
  const {
    width = 800,
    height = 600,
    quality = 80,
    format = 'webp',
    fit = 'cover'
  } = options

  // If using a CDN like Vercel or Cloudinary, add optimization parameters
  if (src.includes('vercel.app') || src.includes('cloudinary.com')) {
    const params = new URLSearchParams({
      w: width.toString(),
      h: height.toString(),
      q: quality.toString(),
      f: format,
      fit
    })
    return `${src}?${params.toString()}`
  }

  return src
}

// Lazy loading configuration
export function getLazyLoadingConfig() {
  return {
    rootMargin: '50px 0px',
    threshold: 0.1
  }
}

// Critical CSS inlining
export function getCriticalCSS() {
  return `
    /* Critical above-the-fold styles */
    .hero-section {
      background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
      color: white;
      padding: 4rem 0;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    h1, h2, h3 {
      font-weight: 700;
      line-height: 1.2;
    }
    
    .btn-primary {
      background: #3A8DDE;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
    }
  `
}

// Resource hints for performance
export function getResourceHints() {
  return [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    { rel: 'preconnect', href: 'https://www.google-analytics.com' },
    { rel: 'preconnect', href: 'https://drjanduffy.realscout.com' },
    { rel: 'dns-prefetch', href: '//panomaps.us' },
    { rel: 'dns-prefetch', href: '//www.richmondamerican.com' }
  ]
}

// Service Worker registration
export function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration)
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError)
        })
    })
  }
}

// Web Vitals monitoring
export function trackWebVitals() {
  if (typeof window !== 'undefined') {
    // Track Core Web Vitals
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log)
      getFID(console.log)
      getFCP(console.log)
      getLCP(console.log)
      getTTFB(console.log)
    })
  }
}

// Image preloading for above-the-fold content
export function preloadCriticalImages() {
  const criticalImages = [
    '/images/hero-bg.webp',
    '/images/dr-jan-headshot.jpg',
    '/images/pewter-valley-estates-logo.png'
  ]

  return criticalImages.map(src => ({
    rel: 'preload',
    as: 'image',
    href: src,
    type: 'image/webp'
  }))
}

// Font preloading
export function preloadFonts() {
  return [
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/inter-var.woff2',
      type: 'font/woff2',
      crossorigin: 'anonymous'
    }
  ]
}

// Bundle analysis helper
export function analyzeBundleSize() {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    // Log bundle size information
    const scripts = document.querySelectorAll('script[src]')
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
    
    console.group('Bundle Analysis')
    console.log('Scripts:', scripts.length)
    console.log('Stylesheets:', stylesheets.length)
    console.groupEnd()
  }
}

// Memory usage monitoring
export function monitorMemoryUsage() {
  if (typeof window !== 'undefined' && 'memory' in performance) {
    const memory = performance.memory
    console.log('Memory Usage:', {
      used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
      total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
      limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
    })
  }
}

// Intersection Observer for lazy loading
export function createIntersectionObserver(callback, options = {}) {
  if (typeof window === 'undefined') return null

  const defaultOptions = {
    root: null,
    rootMargin: '50px 0px',
    threshold: 0.1,
    ...options
  }

  return new IntersectionObserver(callback, defaultOptions)
}

// Debounce function for performance
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function for performance
export function throttle(func, limit) {
  let inThrottle
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}
