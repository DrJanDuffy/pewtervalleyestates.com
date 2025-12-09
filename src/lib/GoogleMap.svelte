<script>
  import { SITE_CONFIG } from "$lib/seo.js"
  
  // Svelte 5: Use $props() instead of export let
  let {
    height = "400px",
    width = "100%",
    zoom = 15
  } = $props()
  
  // Generate Google Maps embed URL
  // Format: https://www.google.com/maps/embed/v1/place?key=API_KEY&q=ADDRESS
  // For public embed without API key, use: https://www.google.com/maps?q=ADDRESS&output=embed
  const mapAddress = `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.stateAbbr} ${SITE_CONFIG.address.zipCode}`
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapAddress)}&output=embed&zoom=${zoom}`
  
  // Google Maps directions URL
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapAddress)}`
</script>

<section class="google-map-section">
  <div class="container">
    <div class="map-header">
      <h2>Find Us</h2>
      <p>Visit our location in Las Vegas, Nevada</p>
    </div>
    
    <div class="map-container">
      <iframe
        src={mapUrl}
        width={width}
        height={height}
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Pewter Valley Estates Location"
        class="map-iframe"
      ></iframe>
    </div>
    
    <div class="map-actions">
      <a 
        href={directionsUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        class="map-button"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        Get Directions
      </a>
      <a 
        href={`tel:${SITE_CONFIG.phoneTel}`} 
        class="map-button"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        Call {SITE_CONFIG.phone}
      </a>
    </div>
    
    <div class="address-info">
      <div class="address-card">
        <h3>Address</h3>
        <p>
          {SITE_CONFIG.address.street}<br>
          {SITE_CONFIG.address.city}, {SITE_CONFIG.address.stateAbbr} {SITE_CONFIG.address.zipCode}
        </p>
      </div>
      <div class="address-card">
        <h3>Phone</h3>
        <p><a href={`tel:${SITE_CONFIG.phoneTel}`}>{SITE_CONFIG.phone}</a></p>
      </div>
      <div class="address-card">
        <h3>Email</h3>
        <p><a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a></p>
      </div>
    </div>
  </div>
</section>

<style>
  .google-map-section {
    padding: 4rem 0;
    background: white;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .map-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .map-header h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 0.5rem;
  }
  
  .map-header p {
    color: #64748b;
    font-size: 1.125rem;
  }
  
  .map-container {
    margin-bottom: 2rem;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  .map-iframe {
    width: 100%;
    display: block;
  }
  
  .map-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }
  
  .map-button {
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
  }
  
  .map-button:hover {
    background: #1e40af;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 58, 138, 0.4);
  }
  
  .map-button svg {
    width: 20px;
    height: 20px;
  }
  
  .address-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .address-card {
    background: #f8fafc;
    padding: 1.5rem;
    border-radius: 1rem;
    text-align: center;
  }
  
  .address-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-bottom: 0.75rem;
  }
  
  .address-card p {
    color: #374151;
    line-height: 1.6;
    margin: 0;
  }
  
  .address-card a {
    color: #1e3a8a;
    text-decoration: none;
    font-weight: 500;
  }
  
  .address-card a:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    .map-header h2 {
      font-size: 2rem;
    }
    
    .map-actions {
      flex-direction: column;
    }
    
    .map-button {
      width: 100%;
      justify-content: center;
    }
  }
</style>

