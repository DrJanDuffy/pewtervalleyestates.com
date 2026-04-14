/**
 * Purge Cloudflare cache for the production zone.
 *
 * Required:
 * - CLOUDFLARE_API_TOKEN
 *
 * Optional:
 * - CLOUDFLARE_ZONE_ID       (preferred if known)
 * - CLOUDFLARE_ZONE_NAME     (default: pewtervalleyestates.com)
 * - CLOUDFLARE_PURGE_MODE    (everything | urls, default: everything)
 * - CLOUDFLARE_PURGE_URLS    (comma-separated URLs when mode=urls)
 * - CLOUDFLARE_PURGE_DRY_RUN (true|false, default: false)
 */

const API_BASE = "https://api.cloudflare.com/client/v4"
const DEFAULT_ZONE_NAME = "pewtervalleyestates.com"

function required(name) {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

function cfHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  }
}

async function resolveZoneId(token, explicitZoneId, zoneName) {
  if (explicitZoneId) return explicitZoneId

  const url = `${API_BASE}/zones?name=${encodeURIComponent(zoneName)}&status=active&per_page=1`
  const response = await fetch(url, { headers: cfHeaders(token) })
  if (!response.ok) {
    throw new Error(`Cloudflare zone lookup failed: HTTP ${response.status}`)
  }

  const body = await response.json()
  if (!body.success || !Array.isArray(body.result) || body.result.length === 0) {
    throw new Error(`No active Cloudflare zone found for "${zoneName}"`)
  }

  return body.result[0].id
}

function parseUrls(rawUrls) {
  return (rawUrls || "")
    .split(",")
    .map((url) => url.trim())
    .filter(Boolean)
}

async function purgeCache() {
  const token = required("CLOUDFLARE_API_TOKEN")
  const zoneName = process.env.CLOUDFLARE_ZONE_NAME || DEFAULT_ZONE_NAME
  const zoneId = await resolveZoneId(token, process.env.CLOUDFLARE_ZONE_ID, zoneName)
  const dryRun = (process.env.CLOUDFLARE_PURGE_DRY_RUN || "false").toLowerCase() === "true"
  const mode = (process.env.CLOUDFLARE_PURGE_MODE || "everything").toLowerCase()

  let payload
  if (mode === "urls") {
    const urls = parseUrls(process.env.CLOUDFLARE_PURGE_URLS)
    if (urls.length === 0) {
      throw new Error(
        "CLOUDFLARE_PURGE_MODE=urls requires CLOUDFLARE_PURGE_URLS with at least one URL"
      )
    }
    payload = { files: urls }
  } else {
    payload = { purge_everything: true }
  }

  if (dryRun) {
    console.log("[DRY RUN] Cloudflare purge request prepared")
    console.log(`zone: ${zoneName} (${zoneId})`)
    console.log(`mode: ${mode}`)
    console.log(`payload keys: ${Object.keys(payload).join(", ")}`)
    return
  }

  const purgeUrl = `${API_BASE}/zones/${zoneId}/purge_cache`
  const response = await fetch(purgeUrl, {
    method: "POST",
    headers: cfHeaders(token),
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`Cloudflare purge failed: HTTP ${response.status}`)
  }

  const body = await response.json()
  if (!body.success) {
    const messages = (body.errors || []).map((e) => e.message).join("; ")
    throw new Error(`Cloudflare purge rejected: ${messages || "unknown error"}`)
  }

  console.log("Cloudflare cache purge successful.")
  console.log(`zone: ${zoneName} (${zoneId})`)
  console.log(`mode: ${mode}`)
}

purgeCache().catch((error) => {
  console.error("Cloudflare cache purge failed.")
  console.error(error instanceof Error ? error.message : String(error))
  process.exit(1)
})
