<script>
import { onDestroy, onMount } from "svelte"
import { browser } from "$app/env"
import { trackEvent } from "$lib/analytics"

let widgetLoaded = false
let widgetError = false
let widgetElement
let observer
let _isVisible = false

// Configuration
export const agentEncodedId = "QWdlbnQtMjI1MDUw"
export const sortOrder = "STATUS_AND_SIGNIFICANT_CHANGE"
export const listingStatus = "For Sale"
export const propertyTypes = "SFR,MF,TC"
export const lazyLoad = true
export const showLoadingState = true

onMount(() => {
  if (browser) {
    if (lazyLoad) {
      setupIntersectionObserver()
    } else {
      loadWidget()
    }
  }
})

onDestroy(() => {
  if (observer) {
    observer.disconnect()
  }
})

function setupIntersectionObserver() {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !widgetLoaded && !widgetError) {
          _isVisible = true
          loadWidget()
          observer.disconnect()
        }
      })
    },
    {
      rootMargin: "50px",
      threshold: 0.1,
    }
  )

  if (widgetElement) {
    observer.observe(widgetElement)
  }
}

function loadWidget() {
  // Check if script is already loaded
  if (document.querySelector('script[src*="realscout-web-components"]')) {
    widgetLoaded = true
    return
  }

  const script = document.createElement("script")
  script.src = "https://em.realscout.com/widgets/realscout-web-components.umd.js"
  script.type = "module"
  script.async = true
  script.defer = true

  script.onload = () => {
    widgetLoaded = true
    trackEvent("widget_loaded", {
      widget_type: "realscout",
      agent_id: agentEncodedId,
    })
  }

  script.onerror = () => {
    widgetError = true
    console.error("Failed to load RealScout widget")
    trackEvent("widget_error", {
      widget_type: "realscout",
      error: "script_load_failed",
    })
  }

  document.head.appendChild(script)
}

function handleWidgetClick() {
  trackEvent("widget_interaction", {
    widget_type: "realscout",
    action: "listing_click",
  })
}
</script>

<div bind:this={widgetElement} class="realscout-container">
  {#if widgetLoaded}
    <realscout-office-listings 
      {agent-encoded-id}
      {sort-order}
      {listing-status}
      {property-types}
      on:click={handleWidgetClick}
    ></realscout-office-listings>
  {:else if widgetError}
    <div class="error-state">
      <p>Unable to load property listings. Please try again later.</p>
      <button on:click={loadWidget} class="retry-button">Retry</button>
    </div>
  {:else if showLoadingState}
    <div class="loading-placeholder">
      <div class="spinner"></div>
      <p>Loading property listings...</p>
    </div>
  {/if}
</div>

<style>
  .realscout-container {
    width: 100%;
    min-height: 400px;
    position: relative;
  }
  
  realscout-office-listings {
    --rs-listing-divider-color: rgb(101, 141, 172);
    width: 100%;
    min-height: 400px;
  }
  
  .loading-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    background: #f8f9fa;
    border-radius: 8px;
    color: #666;
  }
  
  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 16px;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .error-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    background: #fff5f5;
    border: 1px solid #fed7d7;
    border-radius: 8px;
    color: #c53030;
    text-align: center;
    padding: 20px;
  }
  
  .retry-button {
    margin-top: 16px;
    padding: 8px 16px;
    background: #3182ce;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
  }
  
  .retry-button:hover {
    background: #2c5aa0;
  }
</style>
