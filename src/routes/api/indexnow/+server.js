/**
 * IndexNow API Endpoint for Google Search Console 2025
 *
 * IndexNow is a protocol that allows websites to notify search engines
 * about new or updated content for faster indexing.
 *
 * Supported search engines:
 * - Bing
 * - Yandex
 * - Seznam.cz
 * - Naver
 *
 * Usage:
 * POST /api/indexnow
 * Body: { "urls": ["https://www.pewtervalleyestates.com/listings"] }
 *
 * Note: Google does not currently support IndexNow but may in 2025.
 * This endpoint provides proactive support for faster indexing across
 * search engines that do support it.
 */

import { INDEXNOW_KEY, GSC_CONFIG } from '$lib/google-search-console.js'
import { SITE_CONFIG } from '$lib/seo.js'

// IndexNow search engine endpoints
const INDEXNOW_ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
  'https://search.seznam.cz/indexnow'
]

export async function POST({ request }) {
  try {
    // Check if IndexNow is configured
    if (!INDEXNOW_KEY || INDEXNOW_KEY === 'YOUR_INDEXNOW_KEY') {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'IndexNow key not configured',
          message: 'Please update INDEXNOW_KEY in src/lib/google-search-console.js'
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    const body = await request.json()
    const urls = body.urls || [SITE_CONFIG.url]

    // Validate URLs
    const validUrls = urls.filter(url => {
      try {
        const parsed = new URL(url)
        return parsed.hostname === new URL(SITE_CONFIG.url).hostname
      } catch {
        return false
      }
    })

    if (validUrls.length === 0) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'No valid URLs provided',
          message: 'URLs must belong to the site domain'
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    // Prepare IndexNow payload
    const payload = {
      host: new URL(SITE_CONFIG.url).hostname,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_CONFIG.url}/${INDEXNOW_KEY}.txt`,
      urlList: validUrls
    }

    // Send to all IndexNow endpoints
    const results = await Promise.allSettled(
      INDEXNOW_ENDPOINTS.map(async (endpoint) => {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify(payload)
        })

        return {
          endpoint,
          status: response.status,
          statusText: response.statusText,
          success: response.ok || response.status === 200 || response.status === 202
        }
      })
    )

    // Process results
    const processedResults = results.map((result, index) => {
      if (result.status === 'fulfilled') {
        return result.value
      }
      return {
        endpoint: INDEXNOW_ENDPOINTS[index],
        status: 'error',
        error: result.reason?.message || 'Request failed',
        success: false
      }
    })

    const successCount = processedResults.filter(r => r.success).length
    const totalCount = processedResults.length

    return new Response(
      JSON.stringify({
        success: successCount > 0,
        message: `Notified ${successCount}/${totalCount} search engines`,
        urlsSubmitted: validUrls.length,
        results: processedResults,
        timestamp: new Date().toISOString()
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store'
        }
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Internal server error'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}

// GET endpoint to check IndexNow status
export async function GET() {
  const isConfigured = INDEXNOW_KEY && INDEXNOW_KEY !== 'YOUR_INDEXNOW_KEY'

  return new Response(
    JSON.stringify({
      configured: isConfigured,
      keyLocation: isConfigured ? `${SITE_CONFIG.url}/${INDEXNOW_KEY}.txt` : null,
      supportedEndpoints: INDEXNOW_ENDPOINTS,
      usage: {
        method: 'POST',
        body: '{ "urls": ["https://www.pewtervalleyestates.com/your-page"] }',
        description: 'Submit URLs for faster indexing across search engines'
      }
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600'
      }
    }
  )
}
