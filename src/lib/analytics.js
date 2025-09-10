import { browser } from "$app/environment"

// Google Analytics 4 utility functions
export const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID || "G-YB0SCBWM09"

// Initialize Google Analytics
export function initGA() {
  if (browser && typeof gtag !== "undefined") {
    gtag("config", GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    })
  }
}

// Track page views
export function trackPageView(url, title) {
  if (browser && typeof gtag !== "undefined") {
    gtag("config", GA_MEASUREMENT_ID, {
      page_title: title || document.title,
      page_location: url || window.location.href,
    })
  }
}

// Track custom events
export function trackEvent(eventName, parameters = {}) {
  if (browser && typeof gtag !== "undefined") {
    gtag("event", eventName, parameters)
  }
}

// Track clicks on external links
export function trackExternalLink(url, linkText) {
  trackEvent("click", {
    event_category: "external_link",
    event_label: linkText,
    value: url,
  })
}

// Track form submissions
export function trackFormSubmission(formName) {
  trackEvent("form_submit", {
    event_category: "form",
    event_label: formName,
  })
}

// Track downloads
export function trackDownload(fileName, fileType) {
  trackEvent("file_download", {
    event_category: "download",
    event_label: fileName,
    value: fileType,
  })
}

// Track scroll depth
export function trackScrollDepth(percent) {
  trackEvent("scroll", {
    event_category: "engagement",
    event_label: `${percent}%`,
    value: percent,
  })
}

// Track time on page
export function trackTimeOnPage(timeInSeconds) {
  trackEvent("timing_complete", {
    event_category: "engagement",
    event_label: "time_on_page",
    value: timeInSeconds,
  })
}
