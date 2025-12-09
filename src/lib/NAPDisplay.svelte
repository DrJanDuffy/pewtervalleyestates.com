<script>
  import { SITE_CONFIG } from "$lib/seo.js"
  import { trackEvent } from "$lib/analytics"
  
  // Svelte 5: Use $props() instead of export let
  let {
    showGoogleReviewsLink = true,
    showDirections = true,
    variant = "default" // "default" | "compact" | "inline"
  } = $props()
  
  function handlePhoneClick() {
    trackEvent("phone_click", {
      phone_number: SITE_CONFIG.phone,
      section: "nap_display",
    })
  }
  
  function handleDirectionsClick() {
    trackEvent("directions_click", {
      address: SITE_CONFIG.address.street,
    })
  }
  
  function handleReviewsClick() {
    trackEvent("google_reviews_click", {
      source: "nap_display",
    })
  }
</script>

<div class="nap-display nap-{variant}">
  <div class="nap-content">
    <div class="nap-item">
      <div class="nap-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      </div>
      <div class="nap-details">
        <div class="nap-label">Address</div>
        <div class="nap-value">
          {SITE_CONFIG.address.street}<br>
          {SITE_CONFIG.address.city}, {SITE_CONFIG.address.stateAbbr} {SITE_CONFIG.address.zipCode}
        </div>
      </div>
    </div>
    
    <div class="nap-item">
      <div class="nap-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      </div>
      <div class="nap-details">
        <div class="nap-label">Phone</div>
        <div class="nap-value">
          <a href={`tel:${SITE_CONFIG.phoneTel}`} onclick={handlePhoneClick}>
            {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    </div>
    
    <div class="nap-item">
      <div class="nap-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      </div>
      <div class="nap-details">
        <div class="nap-label">Email</div>
        <div class="nap-value">
          <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
        </div>
      </div>
    </div>
  </div>
  
  {#if showDirections || showGoogleReviewsLink}
    <div class="nap-actions">
      {#if showDirections}
        <a 
          href="https://www.google.com/maps/dir/?api=1&destination={encodeURIComponent(`${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.stateAbbr} ${SITE_CONFIG.address.zipCode}`)}"
          target="_blank"
          rel="noopener noreferrer"
          class="nap-action-button"
          onclick={handleDirectionsClick}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          Directions
        </a>
      {/if}
      {#if showGoogleReviewsLink && SITE_CONFIG.googleBusinessProfile}
        <a 
          href={SITE_CONFIG.googleBusinessProfile}
          target="_blank"
          rel="noopener noreferrer"
          class="nap-action-button"
          onclick={handleReviewsClick}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          View Google Reviews
        </a>
      {/if}
    </div>
  {/if}
</div>

<style>
  .nap-display {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .nap-content {
    display: grid;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .nap-item {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .nap-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #1e3a8a, #1e40af);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: white;
  }
  
  .nap-icon svg {
    width: 24px;
    height: 24px;
  }
  
  .nap-details {
    flex: 1;
  }
  
  .nap-label {
    font-size: 0.875rem;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  
  .nap-value {
    font-size: 1.125rem;
    color: #1e3a8a;
    font-weight: 500;
    line-height: 1.5;
  }
  
  .nap-value a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .nap-value a:hover {
    color: #1e40af;
    text-decoration: underline;
  }
  
  .nap-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    padding-top: 1.5rem;
    border-top: 1px solid #e2e8f0;
  }
  
  .nap-action-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: #1e3a8a;
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: all 0.3s ease;
    font-size: 0.875rem;
  }
  
  .nap-action-button:hover {
    background: #1e40af;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 58, 138, 0.4);
  }
  
  .nap-action-button svg {
    width: 18px;
    height: 18px;
  }
  
  /* Variants */
  .nap-compact {
    padding: 1.5rem;
  }
  
  .nap-compact .nap-content {
    gap: 1rem;
  }
  
  .nap-compact .nap-icon {
    width: 40px;
    height: 40px;
  }
  
  .nap-compact .nap-icon svg {
    width: 20px;
    height: 20px;
  }
  
  .nap-compact .nap-value {
    font-size: 1rem;
  }
  
  .nap-inline {
    padding: 0;
    box-shadow: none;
    background: transparent;
  }
  
  .nap-inline .nap-content {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 0;
  }
  
  .nap-inline .nap-item {
    gap: 0.5rem;
  }
  
  .nap-inline .nap-icon {
    width: 32px;
    height: 32px;
  }
  
  .nap-inline .nap-icon svg {
    width: 16px;
    height: 16px;
  }
  
  .nap-inline .nap-label {
    display: inline;
    margin-right: 0.5rem;
  }
  
  .nap-inline .nap-value {
    display: inline;
    font-size: 1rem;
  }
  
  @media (max-width: 768px) {
    .nap-display {
      padding: 1.5rem;
    }
    
    .nap-actions {
      flex-direction: column;
    }
    
    .nap-action-button {
      width: 100%;
      justify-content: center;
    }
  }
</style>

