<script>
import { onMount } from "svelte"
import { trackEvent } from "$lib/analytics"

// SEO data for listings page
const _pageData = {
  title: "Las Vegas New Home Listings - Pewter Valley Estates",
  description:
    "Browse available new construction homes at Pewter Valley Estates in Las Vegas, Nevada. Modern 3-5 bedroom homes with resort-style amenities starting from $400,000.",
  image: "https://www.pewtervalleyestates.com/listings-og-image.jpg",
  type: "website",
  canonical: "https://www.pewtervalleyestates.com/listings",
}

// Breadcrumbs for listings page
const _breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Property Listings", url: "/listings" },
]

onMount(() => {
  trackEvent("page_view", {
    page_title: "Property Listings",
    page_location: window.location.href,
  })

  // Load RealScout widget
  loadRealScoutWidget()
})

function loadRealScoutWidget() {
  console.log("Loading RealScout widget on listings page...")

  // Check if RealScout script is already loaded
  if (document.querySelector('script[src*="realscout"]')) {
    console.log("RealScout script already loaded")
    initializeWidget()
    return
  }

  // Load the script
  const script = document.createElement("script")
  script.src = "https://em.realscout.com/widgets/realscout-web-components.umd.js"
  script.type = "module"
  script.crossOrigin = "anonymous"
  script.onload = () => {
    console.log("RealScout script loaded")
    initializeWidget()
  }
  script.onerror = () => {
    console.error("Failed to load RealScout script")
  }
  document.head.appendChild(script)
}

function initializeWidget() {
  // Wait for custom element to be defined
  const checkElement = () => {
    if (customElements.get("realscout-office-listings")) {
      console.log("RealScout custom element is available")
      renderWidget()
    } else {
      console.log("Waiting for RealScout custom element...")
      setTimeout(checkElement, 500)
    }
  }
  checkElement()
}

function renderWidget() {
  const container = document.getElementById("realscout-container")
  if (container) {
    container.innerHTML = `
        <realscout-office-listings 
          agent-encoded-id="QWdlbnQtMjI1MDUw"
          sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
          listing-status="For Sale"
          property-types="SFR,MF,TC">
        </realscout-office-listings>
      `
  }
}
</script>

<!-- SEO Head Component -->
<SEOHead 
  {pageData} 
  includeRealEstate={true} 
/>

<!-- Breadcrumb Navigation -->
<Breadcrumbs {breadcrumbs} />

<div class="listings-page">
  <div class="container">
    <header class="page-header">
      <h1>Property Listings</h1>
      <p>Browse our available homes in Las Vegas and surrounding areas</p>
    </header>

    <div class="widget-container">
      <div id="realscout-container" class="realscout-widget">
        <div class="loading-message">
          <div class="spinner"></div>
          <p>Loading property listings...</p>
        </div>
      </div>
    </div>

    <div class="fallback-content">
      <h2>Property Listings</h2>
      <p>If you don't see listings above, please refresh the page or contact us directly.</p>
      <div class="contact-info">
        <h3>Contact Dr. Jan Duffy</h3>
        <p><strong>Phone:</strong> <a href="tel:702-222-1964">(702) 222-1964</a></p>
        <p><strong>Email:</strong> <a href="mailto:jan.duffy@pewtervalleyestates.com">jan.duffy@pewtervalleyestates.com</a></p>
        <p><strong>Specializing in:</strong> Las Vegas real estate, new construction homes, first-time buyers</p>
      </div>
    </div>

    <div class="back-to-home">
      <a href="/" class="back-button">← Back to Home</a>
    </div>
  </div>
</div>

<style>
  .listings-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    padding: 2rem 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .page-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .page-header h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 1rem;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .page-header p {
    font-size: 1.3rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
  }

  .widget-container {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    min-height: 500px;
  }

  .realscout-widget {
    min-height: 400px;
  }

  .loading-message {
    text-align: center;
    padding: 3rem;
    color: #64748b;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #e5e7eb;
    border-top: 4px solid #1e3a8a;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 1rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .fallback-content {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-bottom: 2rem;
  }

  .fallback-content h2 {
    color: #1e3a8a;
    margin-bottom: 1rem;
  }

  .contact-info {
    margin-top: 2rem;
    padding: 2rem;
    background: #f8fafc;
    border-radius: 0.5rem;
    text-align: left;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .contact-info h3 {
    color: #1e3a8a;
    margin-bottom: 1rem;
    text-align: center;
  }

  .contact-info p {
    margin: 0.5rem 0;
    color: #374151;
  }

  .contact-info a {
    color: #1e3a8a;
    text-decoration: none;
    font-weight: 600;
  }

  .contact-info a:hover {
    color: #fbbf24;
    text-decoration: underline;
  }

  .back-to-home {
    text-align: center;
  }

  .back-button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: #1e3a8a;
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .back-button:hover {
    background: #1e40af;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 58, 138, 0.4);
  }

  /* RealScout widget styling */
  realscout-office-listings {
    --rs-listing-divider-color: rgb(101, 141, 172);
    width: 100%;
    min-height: 400px;
    display: block;
  }

  @media (max-width: 768px) {
    .listings-page {
      padding: 1rem 0;
    }

    .page-header h1 {
      font-size: 2.5rem;
    }

    .widget-container {
      padding: 1rem;
    }

    .container {
      padding: 0 1rem;
    }
  }
</style>
