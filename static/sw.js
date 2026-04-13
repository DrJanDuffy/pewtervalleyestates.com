// Service Worker for Pewter Valley Estates
// Implements caching strategies for optimal performance

// Bump when changing caching rules so clients drop stale HTML/JS pairings.
const STATIC_CACHE = 'static-v2'
const DYNAMIC_CACHE = 'dynamic-v2'

/**
 * Precache only real static assets — never HTML documents.
 * Caching `/` or route URLs causes stale shells after deploys: old HTML
 * references deleted `/_app/immutable/*` chunks → hydration fails → white screen.
 */
const STATIC_ASSETS = ['/favicon.ico', '/manifest.json']

// Install event - cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => self.skipWaiting())
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE)
            .map(cacheName => caches.delete(cacheName))
        )
      })
      .then(() => self.clients.claim())
  )
})

function isHtmlNavigation(request) {
  if (request.method !== 'GET') return false
  const accept = request.headers.get('accept') || ''
  return request.mode === 'navigate' || accept.includes('text/html')
}

// Fetch event - implement caching strategies
self.addEventListener('fetch', event => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) return

  // HTML: always network-first — never serve cached document first (stale + wrong chunks).
  if (isHtmlNavigation(request)) {
    event.respondWith(networkFirstHtml(request))
    return
  }

  event.respondWith(
    caches.match(request)
      .then(response => {
        // Return cached version if available
        if (response) {
          return response
        }

        // Network first for API calls
        if (url.pathname.startsWith('/api/')) {
          return networkFirst(request)
        }

        // Cache first for static assets
        if (isStaticAsset(request)) {
          return cacheFirst(request)
        }

        // Default to network
        return fetch(request)
      })
  )
})

/** Always try network for HTML; fall back to cache only when offline. */
async function networkFirstHtml(request) {
  try {
    const response = await fetch(request)
    if (response.ok) {
      const cache = await caches.open(DYNAMIC_CACHE)
      cache.put(request, response.clone())
    }
    return response
  } catch (e) {
    const cached = await caches.match(request)
    if (cached) return cached
    throw e
  }
}

// Cache first strategy for static assets
async function cacheFirst(request) {
  try {
    const response = await fetch(request)
    if (response.ok) {
      const cache = await caches.open(STATIC_CACHE)
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    return caches.match(request)
  }
}

// Network first strategy for API calls
async function networkFirst(request) {
  try {
    const response = await fetch(request)
    if (response.ok) {
      const cache = await caches.open(DYNAMIC_CACHE)
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    return caches.match(request)
  }
}

// Check if request is for a static asset
function isStaticAsset(request) {
  const url = new URL(request.url)
  return (
    url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|ttf|eot)$/) ||
    url.pathname.startsWith('/_app/') ||
    url.pathname.startsWith('/images/') ||
    url.pathname.startsWith('/fonts/')
  )
}

// Background sync for form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync())
  }
})

async function doBackgroundSync() {
  // Handle offline form submissions
  const pendingSubmissions = await getPendingSubmissions()
  
  for (const submission of pendingSubmissions) {
    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(submission.data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      // Remove from pending submissions
      await removePendingSubmission(submission.id)
    } catch (error) {
      console.error('Background sync failed:', error)
    }
  }
}

// Push notification handling
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'New listing alert from Dr. Jan Duffy!',
    icon: '/favicon-192x192.png',
    badge: '/favicon-192x192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Listings',
        icon: '/images/icon-view.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/images/icon-close.png'
      }
    ]
  }

  event.waitUntil(
    self.registration.showNotification('Pewter Valley Estates', options)
  )
})

// Notification click handling
self.addEventListener('notificationclick', event => {
  event.notification.close()

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/listings')
    )
  }
})

// Helper functions for background sync
async function getPendingSubmissions() {
  // This would typically use IndexedDB
  return []
}

async function removePendingSubmission(id) {
  // This would typically use IndexedDB
  console.log('Removing pending submission:', id)
}
