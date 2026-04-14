"use client"

import { useEffect } from "react"

/**
 * Safety cleanup for visitors with stale service workers/caches from older builds.
 * This runs once per session and keeps the current CSS/JS in sync.
 */
export function ServiceWorkerCleanup() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const ran = window.sessionStorage.getItem("sw-cleanup-ran")
    if (ran) return
    window.sessionStorage.setItem("sw-cleanup-ran", "1")

    void (async () => {
      if ("serviceWorker" in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations()
        await Promise.all(registrations.map((registration) => registration.unregister()))
      }

      if ("caches" in window) {
        const cacheNames = await caches.keys()
        await Promise.all(cacheNames.map((name) => caches.delete(name)))
      }
    })()
  }, [])

  return null
}
