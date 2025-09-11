<script>
  import { onMount } from 'svelte'
  import { trackEvent } from '$lib/analytics'
  import EnhancedSEOHead from '$lib/EnhancedSEOHead.svelte'
  import Breadcrumbs from '$lib/Breadcrumbs.svelte'
  import RichmondAmericanAssets from '$lib/RichmondAmericanAssets.svelte'
  import StickyContactButton from '$lib/StickyContactButton.svelte'
  import MortgageCalculator from '$lib/MortgageCalculator.svelte'

  // SEO data for listings page
  const pageData = {
    title: "Active Las Vegas Homes for Sale | Dr. Jan Duffy Real Estate",
    description: "Browse current Las Vegas home listings with Dr. Jan Duffy. Updated daily with new properties, price changes, and market insights. Call 702-222-1964 for exclusive access.",
    image: "https://www.pewtervalleyestates.com/listings-og-image.jpg",
    type: "website",
    canonical: "https://www.pewtervalleyestates.com/listings",
    keywords: "Las Vegas homes for sale, Dr. Jan Duffy real estate, Las Vegas MLS, Las Vegas real estate agent, Las Vegas property listings, Henderson homes, Summerlin homes, Green Valley homes, Las Vegas real estate market"
  }

  // Breadcrumbs for listings page
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Las Vegas Listings", href: "/listings" },
    { name: "Active Properties", href: "/listings" }
  ]

  // Market stats (would typically come from API)
  const marketStats = {
    newListings: 47,
    priceReductions: 23,
    pendingSales: 89,
    averageDaysOnMarket: 28
  }

  // Quick search filters
  const priceRanges = [
    { label: "Under $300K", value: "0-300000" },
    { label: "$300K - $500K", value: "300000-500000" },
    { label: "$500K - $750K", value: "500000-750000" },
    { label: "$750K - $1M", value: "750000-1000000" },
    { label: "Over $1M", value: "1000000-999999999" }
  ]

  const neighborhoods = [
    "Henderson", "Summerlin", "Green Valley", "Anthem", "Inspirada", 
    "Mountain's Edge", "Silverado Ranch", "Centennial Hills", "North Las Vegas"
  ]

  const bedroomOptions = [1, 2, 3, 4, 5, 6]

  // State management
  let isRealScoutLoaded = false
  let realScoutError = false
  let selectedPriceRange = ""
  let selectedBedrooms = ""
  let selectedNeighborhood = ""
  let showFilters = false
  let isSubmitting = false
  let emailSignup = { email: "", name: "" }
  let propertyInquiry = {
    name: "",
    email: "",
    phone: "",
    propertyInterest: "",
    message: ""
  }

  // RealScout URL with parameters
  const realScoutUrl = "https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xMjEwOQ=="

  onMount(() => {
    trackEvent('page_view', {
      page_title: 'Active Listings',
      page_location: window.location.href
    })
  })

  function handleRealScoutLoad() {
    isRealScoutLoaded = true
    realScoutError = false
    trackEvent('realscout_widget_loaded', {
      page: 'listings'
    })
  }

  function handleRealScoutError() {
    realScoutError = true
    isRealScoutLoaded = false
    trackEvent('realscout_widget_error', {
      page: 'listings'
    })
  }

  function applyFilters() {
    const params = new URLSearchParams()
    if (selectedPriceRange) params.set('price', selectedPriceRange)
    if (selectedBedrooms) params.set('bedrooms', selectedBedrooms)
    if (selectedNeighborhood) params.set('neighborhood', selectedNeighborhood)
    
    const filteredUrl = `${realScoutUrl}${params.toString() ? '?' + params.toString() : ''}`
    
    // Reload iframe with new parameters
    const iframe = document.getElementById('realscout-iframe')
    if (iframe) {
      iframe.src = filteredUrl
    }
    
    trackEvent('listing_filters_applied', {
      price_range: selectedPriceRange,
      bedrooms: selectedBedrooms,
      neighborhood: selectedNeighborhood
    })
  }

  function clearFilters() {
    selectedPriceRange = ""
    selectedBedrooms = ""
    selectedNeighborhood = ""
    
    const iframe = document.getElementById('realscout-iframe')
    if (iframe) {
      iframe.src = realScoutUrl
    }
    
    trackEvent('listing_filters_cleared', {
      page: 'listings'
    })
  }

  function handleEmailSignup() {
    if (!emailSignup.email || !emailSignup.name) return
    
    isSubmitting = true
    trackEvent('email_signup', {
      form_type: 'new_listings_alert',
      page: 'listings'
    })
    
    // Simulate API call
    setTimeout(() => {
      isSubmitting = false
      alert('Thank you! You\'ll receive new listing alerts from Dr. Jan Duffy.')
      emailSignup = { email: "", name: "" }
    }, 1000)
  }

  function handlePropertyInquiry() {
    if (!propertyInquiry.name || !propertyInquiry.email || !propertyInquiry.phone) return
    
    isSubmitting = true
    trackEvent('property_inquiry', {
      form_type: 'property_interest',
      page: 'listings'
    })
    
    // Simulate API call
    setTimeout(() => {
      isSubmitting = false
      alert('Thank you! Dr. Jan Duffy will contact you within 2 hours about your property interest.')
      propertyInquiry = {
        name: "",
        email: "",
        phone: "",
        propertyInterest: "",
        message: ""
      }
    }, 1000)
  }

  function handlePhoneClick() {
    trackEvent('phone_click', {
      phone_number: '702-222-1964',
      section: 'listings_header'
    })
  }

  function handleScheduleShowing(propertyId) {
    trackEvent('schedule_showing_click', {
      property_id: propertyId,
      page: 'listings'
    })
  }

  function handleShareListing(platform, propertyId) {
    trackEvent('share_listing', {
      platform: platform,
      property_id: propertyId,
      page: 'listings'
    })
  }
</script>

<svelte:head>
  <title>{pageData.title}</title>
  <meta name="description" content={pageData.description} />
  <meta name="keywords" content={pageData.keywords} />
  <link rel="canonical" href={pageData.canonical} />
  
  <!-- Open Graph -->
  <meta property="og:title" content={pageData.title} />
  <meta property="og:description" content={pageData.description} />
  <meta property="og:image" content={pageData.image} />
  <meta property="og:type" content={pageData.type} />
  <meta property="og:url" content={pageData.canonical} />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={pageData.title} />
  <meta name="twitter:description" content={pageData.description} />
  <meta name="twitter:image" content={pageData.image} />
</svelte:head>

<EnhancedSEOHead {pageData} {breadcrumbs} showValidation={true} />
<RichmondAmericanAssets />

<main class="listings-page">
  <!-- Breadcrumbs -->
  <Breadcrumbs {breadcrumbs} />

  <!-- Hero Section -->
  <section class="listings-hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1>Dr. Jan's Exclusive Las Vegas Listings 🏠</h1>
          <p class="hero-subtitle">Real-time MLS access with insider market knowledge</p>
          
          <!-- Market Stats Banner -->
          <div class="market-stats">
            <div class="stat">
              <span class="stat-number">{marketStats.newListings}</span>
              <span class="stat-label">New This Week</span>
            </div>
            <div class="stat">
              <span class="stat-number">{marketStats.priceReductions}</span>
              <span class="stat-label">Price Reductions</span>
            </div>
            <div class="stat">
              <span class="stat-number">{marketStats.pendingSales}</span>
              <span class="stat-label">Pending Sales</span>
            </div>
            <div class="stat">
              <span class="stat-number">{marketStats.averageDaysOnMarket}</span>
              <span class="stat-label">Avg Days on Market</span>
            </div>
          </div>
        </div>
        
        <div class="hero-contact">
          <div class="contact-card">
            <img src="/dr-jan-headshot.jpg" alt="Dr. Jan Duffy" class="headshot" />
            <h3>Your Las Vegas Real Estate Expert</h3>
            <p>Questions about any property?</p>
            <a 
              href="tel:+17022221964" 
              class="phone-cta"
              on:click={handlePhoneClick}
            >
              📞 Text/Call (702) 222-1964
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Quick Search Filters -->
  <section class="quick-search">
    <div class="container">
      <div class="search-header">
        <h2>Find Your Perfect Las Vegas Home</h2>
        <button 
          class="filter-toggle"
          on:click={() => showFilters = !showFilters}
        >
          {showFilters ? 'Hide' : 'Show'} Filters
        </button>
      </div>
      
      {#if showFilters}
        <div class="search-filters">
          <div class="filter-group">
            <label for="price-range">Price Range</label>
            <select id="price-range" bind:value={selectedPriceRange}>
              <option value="">Any Price</option>
              {#each priceRanges as range}
                <option value={range.value}>{range.label}</option>
              {/each}
            </select>
          </div>
          
          <div class="filter-group">
            <label for="bedrooms">Bedrooms</label>
            <select id="bedrooms" bind:value={selectedBedrooms}>
              <option value="">Any</option>
              {#each bedroomOptions as beds}
                <option value={beds}>{beds}+ Bedrooms</option>
              {/each}
            </select>
          </div>
          
          <div class="filter-group">
            <label for="neighborhood">Neighborhood</label>
            <select id="neighborhood" bind:value={selectedNeighborhood}>
              <option value="">Any Area</option>
              {#each neighborhoods as neighborhood}
                <option value={neighborhood}>{neighborhood}</option>
              {/each}
            </select>
          </div>
          
          <div class="filter-actions">
            <button class="apply-filters" on:click={applyFilters}>
              Apply Filters
            </button>
            <button class="clear-filters" on:click={clearFilters}>
              Clear All
            </button>
          </div>
        </div>
      {/if}
    </div>
  </section>

  <!-- RealScout Integration -->
  <section class="realscout-section">
    <div class="container">
      <div class="realscout-header">
        <h2>Live Las Vegas MLS Listings</h2>
        <p>Updated every 15 minutes with the latest properties</p>
      </div>
      
      <div class="realscout-container">
        {#if realScoutError}
          <div class="realscout-error">
            <div class="error-icon">🏠</div>
            <h3>Unable to Load Listings</h3>
            <p>We're experiencing technical difficulties. Please try refreshing the page or contact Dr. Jan Duffy directly.</p>
            <div class="error-actions">
              <button on:click={() => window.location.reload()}>Refresh Page</button>
              <a href="tel:+17022221964" on:click={handlePhoneClick}>Call (702) 222-1964</a>
            </div>
          </div>
        {:else}
          <div class="realscout-widget">
            {#if !isRealScoutLoaded}
              <div class="loading-overlay">
                <div class="loading-spinner"></div>
                <p>Searching Las Vegas MLS...</p>
              </div>
            {/if}
            
            <iframe
              id="realscout-iframe"
              src={realScoutUrl}
              title="Las Vegas Real Estate Listings"
              frameborder="0"
              allowfullscreen
              loading="lazy"
              on:load={handleRealScoutLoad}
              on:error={handleRealScoutError}
              class="realscout-iframe"
            ></iframe>
          </div>
        {/if}
      </div>
    </div>
  </section>

  <!-- Lead Capture Forms -->
  <section class="lead-capture">
    <div class="container">
      <div class="lead-grid">
        <!-- New Listings Alert -->
        <div class="lead-card">
          <h3>📧 New Listings Alert</h3>
          <p>Get notified when new properties match your criteria</p>
          <form on:submit|preventDefault={handleEmailSignup}>
            <input 
              type="text" 
              placeholder="Your Name" 
              bind:value={emailSignup.name}
              required
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              bind:value={emailSignup.email}
              required
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Subscribing...' : 'Get Alerts'}
            </button>
          </form>
        </div>

        <!-- Property Inquiry -->
        <div class="lead-card">
          <h3>🏠 Property Inquiry</h3>
          <p>Interested in a specific property? Let us know!</p>
          <form on:submit|preventDefault={handlePropertyInquiry}>
            <input 
              type="text" 
              placeholder="Your Name" 
              bind:value={propertyInquiry.name}
              required
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              bind:value={propertyInquiry.email}
              required
            />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              bind:value={propertyInquiry.phone}
              required
            />
            <textarea 
              placeholder="Property address or MLS number you're interested in"
              bind:value={propertyInquiry.propertyInterest}
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>
        </div>

        <!-- Schedule Showing -->
        <div class="lead-card">
          <h3>📅 Schedule Showing</h3>
          <p>Ready to see properties in person?</p>
          <div class="showing-actions">
            <a href="tel:+17022221964" class="phone-btn" on:click={handlePhoneClick}>
              Call (702) 222-1964
            </a>
            <a href="/contact" class="contact-btn">
              Contact Form
            </a>
          </div>
        </div>
      </div>

      <!-- Mortgage Calculator -->
      <MortgageCalculator />
    </div>
  </section>

  <!-- Local Las Vegas Context -->
  <section class="local-context">
    <div class="container">
      <h2>Why Choose Las Vegas Real Estate?</h2>
      <div class="context-grid">
        <div class="context-card">
          <div class="context-icon">🎰</div>
          <h3>Entertainment Capital</h3>
          <p>Minutes from world-class entertainment, dining, and nightlife on the Las Vegas Strip</p>
        </div>
        <div class="context-card">
          <div class="context-icon">🏫</div>
          <h3>Top-Rated Schools</h3>
          <p>Excellent public and private schools with high academic standards and extracurricular programs</p>
        </div>
        <div class="context-card">
          <div class="context-icon">⛳</div>
          <h3>Golf Communities</h3>
          <p>Premier golf courses and resort-style living in master-planned communities</p>
        </div>
        <div class="context-card">
          <div class="context-icon">💼</div>
          <h3>Business Hub</h3>
          <p>Major employers including gaming, hospitality, technology, and healthcare industries</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Sticky Contact Button for Mobile -->
  <StickyContactButton />
</main>

<style>
  .listings-page {
    min-height: 100vh;
    background: #f8fbff;
  }

  /* Hero Section */
  .listings-hero {
    background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
    color: white;
    padding: 4rem 0;
  }

  .hero-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    align-items: start;
  }

  .hero-text h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .market-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .stat {
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    padding: 1.5rem;
    border-radius: 12px;
    backdrop-filter: blur(10px);
  }

  .stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: #16B286;
  }

  .stat-label {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-top: 0.5rem;
  }

  .hero-contact {
    display: flex;
    justify-content: center;
  }

  .contact-card {
    background: white;
    color: #333;
    padding: 2rem;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  .headshot {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 4px solid #3A8DDE;
  }

  .contact-card h3 {
    color: #0A2540;
    margin-bottom: 0.5rem;
  }

  .phone-cta {
    display: inline-block;
    background: #16B286;
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    margin-top: 1rem;
    transition: all 0.3s ease;
  }

  .phone-cta:hover {
    background: #0D8A5B;
    transform: translateY(-2px);
  }

  /* Quick Search */
  .quick-search {
    background: white;
    padding: 2rem 0;
    border-bottom: 1px solid #e9ecef;
  }

  .search-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .filter-toggle {
    background: #3A8DDE;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
  }

  .search-filters {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 12px;
  }

  .filter-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #333;
  }

  .filter-group select {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    font-size: 1rem;
  }

  .filter-actions {
    display: flex;
    gap: 1rem;
    align-items: end;
  }

  .apply-filters {
    background: #16B286;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
  }

  .clear-filters {
    background: #6c757d;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
  }

  /* RealScout Section */
  .realscout-section {
    padding: 4rem 0;
    background: white;
  }

  .realscout-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .realscout-header h2 {
    font-size: 2.5rem;
    color: #0A2540;
    margin-bottom: 1rem;
  }

  .realscout-container {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .realscout-widget {
    position: relative;
    height: 800px;
  }

  .realscout-iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  .loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f8f9fa;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .loading-spinner {
    width: 50px;
    height: 50px;
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

  .realscout-error {
    text-align: center;
    padding: 4rem 2rem;
    background: #f8f9fa;
  }

  .error-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  .error-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
  }

  .error-actions button,
  .error-actions a {
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
  }

  .error-actions button {
    background: #3A8DDE;
    color: white;
    border: none;
    cursor: pointer;
  }

  .error-actions a {
    background: #16B286;
    color: white;
  }

  /* Lead Capture */
  .lead-capture {
    background: #f8f9fa;
    padding: 4rem 0;
  }

  .lead-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .lead-card {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .lead-card h3 {
    color: #0A2540;
    margin-bottom: 1rem;
  }

  .lead-card form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .lead-card input,
  .lead-card textarea {
    padding: 0.75rem;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    font-size: 1rem;
  }

  .lead-card button {
    background: #3A8DDE;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
  }

  .lead-card button:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }

  .showing-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .phone-btn,
  .contact-btn {
    display: block;
    text-align: center;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
  }

  .phone-btn {
    background: #16B286;
    color: white;
  }

  .contact-btn {
    background: #3A8DDE;
    color: white;
  }

  /* Local Context */
  .local-context {
    background: white;
    padding: 4rem 0;
  }

  .local-context h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #0A2540;
    margin-bottom: 3rem;
  }

  .context-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .context-card {
    text-align: center;
    padding: 2rem;
    background: #f8fbff;
    border-radius: 16px;
    border: 2px solid #e8f4fd;
  }

  .context-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .context-card h3 {
    color: #0A2540;
    margin-bottom: 1rem;
  }

  /* Mobile Optimization */
  @media (max-width: 768px) {
    .hero-content {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .hero-text h1 {
      font-size: 2rem;
    }

    .market-stats {
      grid-template-columns: repeat(2, 1fr);
    }

    .search-filters {
      grid-template-columns: 1fr;
    }

    .filter-actions {
      flex-direction: column;
    }

    .realscout-widget {
      height: 600px;
    }

    .lead-grid {
      grid-template-columns: 1fr;
    }

    .context-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .market-stats {
      grid-template-columns: 1fr;
    }

    .stat {
      padding: 1rem;
    }

    .stat-number {
      font-size: 2rem;
    }

    .realscout-widget {
      height: 500px;
    }
  }
</style>

<!-- Structured Data -->
{@html `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Dr. Jan Duffy",
  "description": "Las Vegas Real Estate Agent specializing in luxury homes and investment properties",
  "url": "https://www.pewtervalleyestates.com",
  "telephone": "+17022221964",
  "email": "jan@pewtervalleyestates.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "addressCountry": "US"
  },
  "areaServed": [
    "Las Vegas",
    "Henderson", 
    "Summerlin",
    "Green Valley",
    "Anthem",
    "Inspirada",
    "Mountain's Edge",
    "Silverado Ranch"
  ],
  "serviceType": "Real Estate Sales",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Las Vegas Real Estate Listings",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "RealEstateListing",
          "name": "Las Vegas Homes for Sale",
          "description": "Current MLS listings in Las Vegas and surrounding areas"
        }
      }
    ]
  }
}
</script>`}