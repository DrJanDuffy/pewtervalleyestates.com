<script>
import { onMount } from "svelte"

let scriptLoaded = false
let customElementDefined = false
const debugInfo = []
let widgetVisible = false

onMount(() => {
  debugInfo.push("Component mounted")

  // Check if script is loaded
  const checkScript = () => {
    if (document.querySelector('script[src*="realscout"]')) {
      scriptLoaded = true
      debugInfo.push("RealScout script found in DOM")
    } else {
      debugInfo.push("RealScout script NOT found in DOM")
    }
  }

  // Check if custom element is defined
  const checkCustomElement = () => {
    if (customElements.get("realscout-office-listings")) {
      customElementDefined = true
      debugInfo.push("realscout-office-listings custom element is defined")
    } else {
      debugInfo.push("realscout-office-listings custom element NOT defined")
    }
  }

  // Initial checks
  checkScript()
  checkCustomElement()

  // Check again after a delay
  setTimeout(() => {
    checkScript()
    checkCustomElement()
    debugInfo.push("Delayed check completed")
  }, 2000)

  // Check one more time after longer delay
  setTimeout(() => {
    checkScript()
    checkCustomElement()
    debugInfo.push("Final check completed")
  }, 5000)
})
</script>

<section class="realscout-debug">
  <div class="container">
    <h2>🔍 RealScout Debug Information</h2>
    
    <div class="debug-section">
      <h3>Status:</h3>
      <ul>
        <li><strong>Script Loaded:</strong> {scriptLoaded ? '✅ Yes' : '❌ No'}</li>
        <li><strong>Custom Element Defined:</strong> {customElementDefined ? '✅ Yes' : '❌ No'}</li>
        <li><strong>Widget Visible:</strong> {widgetVisible ? '✅ Yes' : '❌ No'}</li>
      </ul>
    </div>

    <div class="debug-section">
      <h3>Debug Log:</h3>
      <div class="debug-log">
        {#each debugInfo as info}
          <div class="debug-item">{info}</div>
        {/each}
      </div>
    </div>

    <div class="debug-section">
      <h3>Test Widget (if available):</h3>
      <div class="widget-container">
        {#if customElementDefined}
          <p>✅ Custom element is defined, attempting to render widget...</p>
          <realscout-office-listings 
            agent-encoded-id="QWdlbnQtMjI1MDUw"
            sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
            listing-status="For Sale"
            property-types="SFR,MF,TC">
          </realscout-office-listings>
        {:else}
          <p>❌ Custom element not defined. Widget cannot render.</p>
          <div class="fallback-content">
            <h4>Fallback Content - Property Listings</h4>
            <p>RealScout widget is not available. Here's some sample content:</p>
            <div class="sample-listings">
              <div class="sample-listing">
                <h5>Sample Property 1</h5>
                <p>3 Bedrooms, 2 Bathrooms - $450,000</p>
              </div>
              <div class="sample-listing">
                <h5>Sample Property 2</h5>
                <p>4 Bedrooms, 3 Bathrooms - $520,000</p>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>

    <div class="debug-section">
      <h3>Script Information:</h3>
      <p>Looking for script: <code>https://em.realscout.com/widgets/realscout-web-components.umd.js</code></p>
      <p>Script elements found: {document.querySelectorAll('script[src*="realscout"]').length}</p>
    </div>
  </div>
</section>

<style>
  .realscout-debug {
    padding: 2rem;
    background: #f8f9fa;
    border: 2px solid #e9ecef;
    margin: 2rem 0;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  h2 {
    color: #dc3545;
    margin-bottom: 1rem;
  }

  .debug-section {
    background: white;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 0.5rem;
    border: 1px solid #dee2e6;
  }

  .debug-log {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 0.25rem;
    font-family: monospace;
    font-size: 0.9rem;
    max-height: 200px;
    overflow-y: auto;
  }

  .debug-item {
    margin: 0.25rem 0;
    padding: 0.25rem;
    background: white;
    border-radius: 0.25rem;
  }

  .widget-container {
    min-height: 200px;
    border: 2px dashed #6c757d;
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .fallback-content {
    text-align: center;
    padding: 2rem;
  }

  .sample-listings {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }

  .sample-listing {
    background: #e9ecef;
    padding: 1rem;
    border-radius: 0.5rem;
    text-align: left;
  }

  .sample-listing h5 {
    margin: 0 0 0.5rem 0;
    color: #495057;
  }

  .sample-listing p {
    margin: 0;
    color: #6c757d;
  }

  code {
    background: #e9ecef;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-family: monospace;
  }
</style>
