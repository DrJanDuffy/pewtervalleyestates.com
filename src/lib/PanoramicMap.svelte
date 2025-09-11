<script>
  import { onMount } from 'svelte'
  import { trackEvent } from '$lib/analytics'

  // Props
  export let mapUrl = 'https://panomaps.us/homes/richmondamerican/nv/pewter-valley-estates/'
  export let title = 'Pewter Valley Estates - Interactive Panoramic Map'
  export let height = '500px'
  export let showControls = true
  export let className = ''
  export let realScoutUrl = 'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xMjEwOQ=='

  let mapContainer
  let isLoaded = false
  let errorMessage = ''

  onMount(() => {
    // Track map load event
    trackEvent('panoramic_map_view', { 
      map_url: mapUrl,
      page: 'neighborhood'
    })
  })

  function handleMapLoad() {
    isLoaded = true
    trackEvent('panoramic_map_loaded', { 
      map_url: mapUrl,
      page: 'neighborhood'
    })
  }

  function handleMapError() {
    errorMessage = 'Unable to load the panoramic map. Please try refreshing the page.'
    trackEvent('panoramic_map_error', { 
      map_url: mapUrl,
      page: 'neighborhood'
    })
  }

  function openFullscreenMap() {
    window.open(mapUrl, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes')
    trackEvent('panoramic_map_fullscreen', { 
      map_url: mapUrl,
      page: 'neighborhood'
    })
  }

  function openRealScoutSearch() {
    window.open(realScoutUrl, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes')
    trackEvent('panoramic_map_realscout_click', { 
      map_url: mapUrl,
      realscout_url: realScoutUrl,
      page: 'neighborhood'
    })
  }
</script>

<div class="panoramic-map-container {className}">
  <div class="map-header">
    <h3>{title}</h3>
    {#if showControls}
      <div class="map-controls">
        <button 
          class="control-button fullscreen" 
          on:click={openFullscreenMap}
          title="Open in fullscreen"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
          </svg>
          Fullscreen
        </button>
        <a 
          href={mapUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          class="control-button external"
          title="Open in new tab"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15,3 21,3 21,9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          Open Map
        </a>
        <button 
          class="control-button realscout" 
          on:click={openRealScoutSearch}
          title="View available homes on RealScout"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
          View Homes
        </button>
      </div>
    {/if}
  </div>

  <div class="map-wrapper" style="height: {height}">
    {#if errorMessage}
      <div class="map-error">
        <div class="error-icon">🗺️</div>
        <p>{errorMessage}</p>
        <button class="retry-button" on:click={() => window.location.reload()}>
          Retry
        </button>
      </div>
    {:else}
      <iframe
        bind:this={mapContainer}
        src={mapUrl}
        title={title}
        frameborder="0"
        allowfullscreen
        loading="lazy"
        on:load={handleMapLoad}
        on:error={handleMapError}
        class="panoramic-map-iframe"
      ></iframe>
      
      {#if !isLoaded}
        <div class="map-loading">
          <div class="loading-spinner"></div>
          <p>Loading panoramic map...</p>
        </div>
      {/if}
      
      <!-- Floating RealScout Action Button -->
      <div class="floating-action">
        <button 
          class="floating-btn"
          on:click={openRealScoutSearch}
          title="View available homes on RealScout"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
          <span>View Available Homes</span>
        </button>
      </div>
    {/if}
  </div>

  <div class="map-footer">
    <p class="map-description">
      Explore Pewter Valley Estates with our interactive panoramic map. 
      Discover the community layout, nearby amenities, and get a bird's-eye view of your future home.
    </p>
    <div class="map-features">
      <span class="feature-tag">Interactive</span>
      <span class="feature-tag">360° View</span>
      <span class="feature-tag">Richmond American</span>
    </div>
  </div>
</div>

<style>
  .panoramic-map-container {
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin: 2rem 0;
  }

  .map-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
    color: white;
  }

  .map-header h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .map-controls {
    display: flex;
    gap: 0.75rem;
  }

  .control-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .control-button:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }

  .control-button.realscout {
    background: rgba(22, 178, 134, 0.2);
    border-color: rgba(22, 178, 134, 0.4);
  }

  .control-button.realscout:hover {
    background: rgba(22, 178, 134, 0.3);
    border-color: rgba(22, 178, 134, 0.6);
  }

  .control-button svg {
    flex-shrink: 0;
  }

  .map-wrapper {
    position: relative;
    width: 100%;
    background: #f8f9fa;
  }

  .floating-action {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 20;
  }

  .floating-btn {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 1.5rem;
    background: linear-gradient(135deg, #16B286 0%, #0D8A5B 100%);
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(22, 178, 134, 0.3);
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .floating-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(22, 178, 134, 0.4);
    background: linear-gradient(135deg, #0D8A5B 0%, #16B286 100%);
  }

  .floating-btn svg {
    flex-shrink: 0;
  }

  .floating-btn span {
    white-space: nowrap;
  }

  .panoramic-map-iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }

  .map-loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    z-index: 10;
  }

  .loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #e3e3e3;
    border-top: 4px solid #3A8DDE;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .map-loading p {
    color: #666;
    font-size: 1rem;
    margin: 0;
  }

  .map-error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 2rem;
    text-align: center;
  }

  .error-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .map-error p {
    color: #666;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }

  .retry-button {
    padding: 0.75rem 1.5rem;
    background: #3A8DDE;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .retry-button:hover {
    background: #2a7bc7;
  }

  .map-footer {
    padding: 1.5rem 2rem;
    background: #f8f9fa;
    border-top: 1px solid #e9ecef;
  }

  .map-description {
    color: #666;
    line-height: 1.6;
    margin: 0 0 1rem 0;
    font-size: 1rem;
  }

  .map-features {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .feature-tag {
    background: #e3f2fd;
    color: #1976d2;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .map-header {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }

    .map-header h3 {
      font-size: 1.25rem;
    }

    .map-controls {
      justify-content: center;
    }

    .control-button {
      padding: 0.4rem 0.8rem;
      font-size: 0.85rem;
    }

    .map-footer {
      padding: 1rem 1.5rem;
    }

    .map-description {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    .map-controls {
      flex-direction: column;
      width: 100%;
    }

    .control-button {
      justify-content: center;
    }

    .floating-btn {
      padding: 0.75rem 1rem;
      font-size: 0.9rem;
    }

    .floating-btn span {
      display: none;
    }
  }
</style>
