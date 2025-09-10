<script>
  import { onMount } from 'svelte';
  import { trackEvent } from '$lib/analytics';

  onMount(() => {
    trackEvent('realscout_widget_loaded', {
      agent_id: 'QWdlbnQtMjI1MDUw',
      listing_status: 'For Sale',
      property_types: 'SFR,MF,TC'
    });
  });
</script>

<section class="realscout-simple">
  <div class="container">
    <div class="section-header">
      <h2>Current Listings</h2>
      <p>Explore our available properties in Las Vegas and surrounding areas</p>
    </div>
    
    <div class="realscout-container">
      <!-- Direct RealScout widget implementation -->
      <realscout-office-listings 
        agent-encoded-id="QWdlbnQtMjI1MDUw"
        sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
        listing-status="For Sale"
        property-types="SFR,MF,TC">
      </realscout-office-listings>
    </div>
    
    <div class="realscout-footer">
      <p>
        <strong>Need help finding the perfect home?</strong> 
        <a href="/contact" class="contact-link">Contact Dr. Jan Duffy</a> for personalized assistance.
      </p>
    </div>
  </div>
</section>

<style>
  .realscout-simple {
    padding: 4rem 0;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .section-header h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 1rem;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .section-header p {
    font-size: 1.2rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .realscout-container {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
  }

  .realscout-footer {
    text-align: center;
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .realscout-footer p {
    font-size: 1.1rem;
    color: #374151;
    margin: 0;
  }

  .contact-link {
    color: #1e3a8a;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
  }

  .contact-link:hover {
    color: #fbbf24;
    text-decoration: underline;
  }

  /* RealScout widget styling */
  realscout-office-listings {
    --rs-listing-divider-color: rgb(101, 141, 172);
    width: 100%;
    min-height: 400px;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .realscout-simple {
      padding: 2rem 0;
    }

    .section-header h2 {
      font-size: 2rem;
    }

    .realscout-container {
      padding: 1rem;
    }

    .container {
      padding: 0 1rem;
    }
  }
</style>
