"use client"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ServiceWorkerCleanup } from "@/components/ServiceWorkerCleanup"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceWorkerCleanup />
      {children}
      <Analytics />
      <SpeedInsights />
    </>
  )
}
