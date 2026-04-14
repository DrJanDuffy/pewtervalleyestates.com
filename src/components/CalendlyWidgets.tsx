"use client"

import { useEffect } from "react"
import styles from "./CalendlyWidgets.module.css"

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
      initBadgeWidget: (options: {
        url: string
        text: string
        color: string
        textColor: string
        branding: boolean
      }) => void
    }
  }
}

type CalendlyPopupLinkProps = {
  className?: string
  label?: string
  url?: string
}

const DEFAULT_CALENDLY_URL = "https://calendly.com/drjanduffy/15min"

export function CalendlyPopupLink({
  className,
  label = "Schedule time with me",
  url = DEFAULT_CALENDLY_URL,
}: CalendlyPopupLinkProps) {
  function onClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    window.Calendly?.initPopupWidget({ url })
  }

  return (
    <a className={className} href={url} onClick={onClick} target="_blank" rel="noreferrer">
      {label}
    </a>
  )
}

type CalendlyInlineWidgetProps = {
  title?: string
  url?: string
}

export function CalendlyInlineWidget({
  title = "Book a consultation",
  url = DEFAULT_CALENDLY_URL,
}: CalendlyInlineWidgetProps) {
  return (
    <section aria-label={title} className={styles.inlineSection}>
      <h2 className={styles.inlineTitle}>{title}</h2>
      <div className={`calendly-inline-widget ${styles.inlineWidget}`} data-url={url} />
    </section>
  )
}

export function CalendlyBadge() {
  useEffect(() => {
    const existingBadge = document.querySelector(".calendly-badge-widget")
    if (existingBadge) return

    const tryInit = window.setInterval(() => {
      if (!window.Calendly?.initBadgeWidget) return

      window.Calendly.initBadgeWidget({
        url: DEFAULT_CALENDLY_URL,
        text: "Schedule time with me",
        color: "#0069ff",
        textColor: "#ffffff",
        branding: false,
      })
      window.clearInterval(tryInit)
    }, 300)

    return () => window.clearInterval(tryInit)
  }, [])

  return null
}
