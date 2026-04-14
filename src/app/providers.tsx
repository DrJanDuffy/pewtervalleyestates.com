"use client"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { CalendlyBadge } from "@/components/CalendlyWidgets"
import { ServiceWorkerCleanup } from "@/components/ServiceWorkerCleanup"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceWorkerCleanup />
      <CalendlyBadge />
      {children}
      <Analytics />
      <SpeedInsights />
    </>
  )
}
