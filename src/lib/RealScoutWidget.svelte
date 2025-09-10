<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/env';

  let widgetLoaded = false;
  let widgetElement;

  onMount(() => {
    if (browser) {
      // Load the script dynamically
      const script = document.createElement('script');
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      script.type = 'module';
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        widgetLoaded = true;
      };
      
      script.onerror = () => {
        console.error('Failed to load RealScout widget');
      };
      
      document.head.appendChild(script);
    }
  });

  // Cleanup on component destroy
  $: if (browser && widgetElement) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !widgetLoaded) {
          // Widget will load when it comes into view
        }
      });
    });
    
    observer.observe(widgetElement);
    
    return () => observer.disconnect();
  }
</script>

<div bind:this={widgetElement} class="realscout-container">
  {#if widgetLoaded}
    <realscout-office-listings 
      agent-encoded-id="QWdlbnQtMjI1MDUw" 
      sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
      listing-status="For Sale" 
      property-types="SFR,MF,TC"
    ></realscout-office-listings>
  {:else}
    <div class="loading-placeholder">
      <p>Loading property listings...</p>
    </div>
  {/if}
</div>

<style>
  .realscout-container {
    width: 100%;
    min-height: 400px;
  }
  
  realscout-office-listings {
    --rs-listing-divider-color: rgb(101, 141, 172);
    width: 100%;
  }
  
  .loading-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    background: #f8f9fa;
    border-radius: 8px;
    color: #666;
  }
</style>
