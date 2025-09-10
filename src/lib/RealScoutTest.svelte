<script>
import { onMount } from "svelte"

let widgetLoaded = false
let errorMessage = ""

onMount(() => {
  // Check if RealScout is available
  console.log("RealScout Test Component mounted")
  console.log("window.realscout:", window.realscout)
  console.log("Custom elements registry:", customElements)

  // Wait a bit for the script to load
  setTimeout(() => {
    if (customElements.get("realscout-office-listings")) {
      console.log("RealScout custom element is defined")
      widgetLoaded = true
    } else {
      console.log("RealScout custom element not found")
      errorMessage = "RealScout custom element not found. Check if script loaded correctly."
    }
  }, 2000)
})
</script>

<section class="realscout-test">
  <div class="container">
    <h2>RealScout Widget Test</h2>
    
    <div class="debug-info">
      <h3>Debug Information:</h3>
      <p><strong>Widget Loaded:</strong> {widgetLoaded ? 'Yes' : 'No'}</p>
      <p><strong>Error:</strong> {errorMessage || 'None'}</p>
      <p><strong>Custom Element Available:</strong> {customElements.get('realscout-office-listings') ? 'Yes' : 'No'}</p>
    </div>

    {#if widgetLoaded}
      <div class="widget-container">
        <h3>RealScout Widget (if loaded):</h3>
        <realscout-office-listings 
          agent-encoded-id="QWdlbnQtMjI1MDUw"
          sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
          listing-status="For Sale"
          property-types="SFR,MF,TC">
        </realscout-office-listings>
      </div>
    {:else}
      <div class="loading">
        <p>Loading RealScout widget...</p>
        <p>If this doesn't load, there may be an issue with the RealScout script.</p>
      </div>
    {/if}
  </div>
</section>

<style>
  .realscout-test {
    padding: 2rem;
    background: #f8f9fa;
    border: 2px solid #e9ecef;
    margin: 2rem 0;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  .debug-info {
    background: white;
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 1rem 0;
    border: 1px solid #dee2e6;
  }

  .widget-container {
    background: white;
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 1rem 0;
    border: 1px solid #dee2e6;
  }

  .loading {
    text-align: center;
    padding: 2rem;
    color: #6c757d;
  }

  h2, h3 {
    color: #495057;
  }
</style>
