<script>
import { onMount } from "svelte"

let _scriptLoaded = false
let widgetReady = false

onMount(() => {
  console.log("RealScout Widget component mounted")

  // Load RealScout script dynamically if not already loaded
  const loadRealScoutScript = () => {
    if (document.querySelector('script[src*="realscout"]')) {
      console.log("RealScout script already loaded")
      _scriptLoaded = true
      return
    }

    console.log("Loading RealScout script...")
    const script = document.createElement("script")
    script.src = "https://em.realscout.com/widgets/realscout-web-components.umd.js"
    script.type = "module"
    script.crossOrigin = "anonymous"
    script.onload = () => {
      console.log("RealScout script loaded successfully")
      _scriptLoaded = true
      checkWidget()
    }
    script.onerror = () => {
      console.error("Failed to load RealScout script")
    }
    document.head.appendChild(script)
  }

  // Check if widget is ready
  const checkWidget = () => {
    if (customElements.get("realscout-office-listings")) {
      console.log("RealScout custom element is available")
      widgetReady = true
      return true
    } else {
      console.log("RealScout custom element not available yet")
      return false
    }
  }

  // Start the process
  loadRealScoutScript()

  // Check periodically for widget readiness
  const checkInterval = setInterval(() => {
    if (checkWidget()) {
      clearInterval(checkInterval)
    }
  }, 500)

  // Stop checking after 10 seconds
  setTimeout(() => {
    clearInterval(checkInterval)
    if (!widgetReady) {
      console.log("RealScout widget failed to load after 10 seconds")
    }
  }, 10000)
})
</script>

<section class="realscout-widget-section">
  <div class="container">
    <h2>Current Property Listings</h2>
    <p>Browse our available homes in Las Vegas and surrounding areas</p>
    
    <div class="widget-container">
      <realscout-office-listings 
        agent-encoded-id="QWdlbnQtMjI1MDUw"
        sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
        listing-status="For Sale"
        property-types="SFR,MF,TC">
      </realscout-office-listings>
    </div>
    
    <div class="fallback-content">
      <h3>Property Listings</h3>
      <p>If you don't see listings above, please refresh the page or contact us directly.</p>
      <div class="contact-info">
        <p><strong>Dr. Jan Duffy</strong></p>
        <p>Phone: <a href="tel:702-500-1955">(702) 500-1955</a></p>
        <p>Email: <a href="mailto:jan.duffy@pewtervalleyestates.com">jan.duffy@pewtervalleyestates.com</a></p>
      </div>
    </div>
  </div>
</section>

<style>
  .realscout-widget-section {
    padding: 4rem 0;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e3a8a;
    text-align: center;
    margin-bottom: 1rem;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  p {
    text-align: center;
    color: #64748b;
    font-size: 1.2rem;
    margin-bottom: 3rem;
  }

  .widget-container {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    min-height: 400px;
  }

  .fallback-content {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .fallback-content h3 {
    color: #1e3a8a;
    margin-bottom: 1rem;
  }

  .contact-info {
    margin-top: 1rem;
    padding: 1rem;
    background: #f8fafc;
    border-radius: 0.5rem;
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

  /* RealScout widget styling */
  realscout-office-listings {
    --rs-listing-divider-color: rgb(101, 141, 172);
    width: 100%;
    min-height: 300px;
    display: block;
  }

  @media (max-width: 768px) {
    .realscout-widget-section {
      padding: 2rem 0;
    }

    h2 {
      font-size: 2rem;
    }

    .widget-container {
      padding: 1rem;
    }

    .container {
      padding: 0 1rem;
    }
  }
</style>