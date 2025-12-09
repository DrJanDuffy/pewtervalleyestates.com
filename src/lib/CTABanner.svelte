<script>
  import { SITE_CONFIG } from "$lib/seo.js"
  import { trackEvent } from "$lib/analytics"
  
  // Svelte 5: Use $props() instead of export let
  let {
    variant = "primary", // "primary" | "secondary" | "accent"
    showPhone = true,
    showEmail = true,
    showValuation = false,
    showTour = false
  } = $props()
  
  function handleCtaClick(action) {
    trackEvent("cta_click", {
      action,
      location: "cta_banner",
    })
  }
</script>

<section class="cta-banner cta-{variant}">
  <div class="container">
    <div class="cta-content">
      <h2>Ready to Buy or Sell in Pewter Valley Estates?</h2>
      <p>Contact Dr. Jan Duffy for expert real estate services in Southwest Las Vegas</p>
      
      <div class="cta-buttons">
        {#if showPhone}
          <a 
            href={`tel:${SITE_CONFIG.phoneTel}`} 
            class="cta-button phone"
            onclick={() => handleCtaClick('phone')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call {SITE_CONFIG.phone}
          </a>
        {/if}
        
        {#if showEmail}
          <a 
            href="/contact" 
            class="cta-button email"
            onclick={() => handleCtaClick('email')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Get in Touch
          </a>
        {/if}
        
        {#if showValuation}
          <a 
            href="/home-valuation" 
            class="cta-button valuation"
            onclick={() => handleCtaClick('valuation')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            Get Free Valuation
          </a>
        {/if}
        
        {#if showTour}
          <a 
            href="/contact" 
            class="cta-button tour"
            onclick={() => handleCtaClick('tour')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Schedule Tour
          </a>
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  .cta-banner {
    padding: 3rem 0;
    text-align: center;
  }
  
  .cta-primary {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    color: white;
  }
  
  .cta-secondary {
    background: #f8fafc;
    color: #1e3a8a;
  }
  
  .cta-accent {
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    color: #1e3a8a;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .cta-content h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .cta-content p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
  
  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.125rem;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
  }
  
  .cta-button svg {
    width: 20px;
    height: 20px;
  }
  
  .cta-primary .cta-button {
    background: white;
    color: #1e3a8a;
  }
  
  .cta-primary .cta-button:hover {
    background: #f8fafc;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  .cta-secondary .cta-button {
    background: #1e3a8a;
    color: white;
  }
  
  .cta-secondary .cta-button:hover {
    background: #1e40af;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 58, 138, 0.4);
  }
  
  .cta-accent .cta-button {
    background: #1e3a8a;
    color: white;
  }
  
  .cta-accent .cta-button:hover {
    background: #1e40af;
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    .cta-content h2 {
      font-size: 1.5rem;
    }
    
    .cta-buttons {
      flex-direction: column;
    }
    
    .cta-button {
      width: 100%;
      justify-content: center;
    }
  }
</style>

