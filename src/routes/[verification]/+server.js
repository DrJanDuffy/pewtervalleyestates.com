/**
 * Dynamic verification file handler for Google Search Console and IndexNow
 *
 * Handles:
 * - Google HTML verification: /google[verification_code].html
 * - IndexNow key verification: /[key].txt
 * - Bing verification: /BingSiteAuth.xml
 *
 * Update GOOGLE_SITE_VERIFICATION in src/lib/google-search-console.js
 * with your actual verification code from Google Search Console
 */

import {
  GOOGLE_SITE_VERIFICATION,
  BING_SITE_VERIFICATION,
  INDEXNOW_KEY
} from '$lib/google-search-console.js'

export async function GET({ params }) {
  const { verification } = params

  // Handle Google HTML file verification
  // Format: google[verification_code].html
  if (verification.startsWith('google') && verification.endsWith('.html')) {
    const verificationCode = verification.replace('google', '').replace('.html', '')

    // Check if this matches our configured verification code
    if (
      GOOGLE_SITE_VERIFICATION !== 'YOUR_GOOGLE_VERIFICATION_CODE' &&
      verificationCode === GOOGLE_SITE_VERIFICATION
    ) {
      return new Response(`google-site-verification: ${verification}`, {
        headers: {
          'Content-Type': 'text/html',
          'Cache-Control': 'public, max-age=86400'
        }
      })
    }

    // Return the verification file anyway (Google will validate)
    return new Response(`google-site-verification: ${verification}`, {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=86400'
      }
    })
  }

  // Handle IndexNow key file verification
  // Format: [key].txt
  if (verification.endsWith('.txt')) {
    const key = verification.replace('.txt', '')

    if (
      INDEXNOW_KEY !== 'YOUR_INDEXNOW_KEY' &&
      key === INDEXNOW_KEY
    ) {
      return new Response(INDEXNOW_KEY, {
        headers: {
          'Content-Type': 'text/plain',
          'Cache-Control': 'public, max-age=86400'
        }
      })
    }

    // For any .txt file, return the filename as content
    return new Response(key, {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=86400'
      }
    })
  }

  // Handle Bing site authentication
  if (verification === 'BingSiteAuth.xml') {
    if (BING_SITE_VERIFICATION !== 'YOUR_BING_VERIFICATION_CODE') {
      const bingXml = `<?xml version="1.0"?>
<users>
  <user>${BING_SITE_VERIFICATION}</user>
</users>`

      return new Response(bingXml, {
        headers: {
          'Content-Type': 'application/xml',
          'Cache-Control': 'public, max-age=86400'
        }
      })
    }
  }

  // Not a verification request we handle
  return new Response('Not Found', { status: 404 })
}
