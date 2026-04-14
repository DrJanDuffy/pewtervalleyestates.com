import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const CACHE_RESET_COOKIE = "pve-cache-reset-v1"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Apply only to real page navigations (HTML docs), not static assets/API.
  const accept = request.headers.get("accept") || ""
  const isDocumentRequest = accept.includes("text/html")
  if (!isDocumentRequest) {
    return response
  }

  // Prevent stale HTML shells that can reference old CSS chunk hashes.
  response.headers.set("Cache-Control", "public, max-age=0, must-revalidate")

  // One-time client cache/storage reset to clear stale chunk references.
  if (!request.cookies.get(CACHE_RESET_COOKIE)?.value) {
    response.headers.set("Clear-Site-Data", '"cache", "storage"')
    response.cookies.set(CACHE_RESET_COOKIE, "1", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    })
  }

  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|api).*)"],
}
