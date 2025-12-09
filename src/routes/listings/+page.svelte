<script>
  import { onMount } from 'svelte'
  import { slide } from 'svelte/transition'
  import { trackEvent } from '$lib/analytics'
  import { SITE_CONFIG } from '$lib/seo.js'
  import EnhancedSEOHead from '$lib/EnhancedSEOHead.svelte'
  import Breadcrumbs from '$lib/Breadcrumbs.svelte'
  import RichmondAmericanAssets from '$lib/RichmondAmericanAssets.svelte'
  import StickyContactButton from '$lib/StickyContactButton.svelte'
  import MortgageCalculator from '$lib/MortgageCalculator.svelte'
  import LeadCaptureForm from '$lib/LeadCaptureForm.svelte'
  import GoogleReviews from '$lib/GoogleReviews.svelte'

  // SEO data for listings page
  const pageData = {
    title: "Active Las Vegas Homes for Sale | Dr. Jan Duffy Real Estate",
    description: `Browse current Las Vegas home listings with Dr. Jan Duffy. Updated daily with new properties, price changes, and market insights. Call ${SITE_CONFIG.phone} for exclusive access.`,
    image: "https://www.pewtervalleyestates.com/listings-og-image.jpg",
    type: "website",
    canonical: "https://www.pewtervalleyestates.com/listings",
    keywords: "Las Vegas homes for sale, Dr. Jan Duffy real estate, Las Vegas MLS, Las Vegas real estate agent, Las Vegas property listings, Henderson homes, Summerlin homes, Green Valley homes, Las Vegas real estate market"
  }

  // Breadcrumbs for listings page
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Las Vegas Listings", url: "/listings" },
    { name: "Active Properties", url: "/listings" }
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

  // State management (Svelte 5)
  let selectedPriceRange = $state("")
  let selectedBedrooms = $state("")
  let selectedNeighborhood = $state("")
  let showFilters = $state(true) // Visible by default for better UX

  // Derived state for RealScout widget
  let priceMin = $derived(selectedPriceRange ? selectedPriceRange.split('-')[0] : "200000")
  let priceMax = $derived(selectedPriceRange ? selectedPriceRange.split('-')[1] : "400000")
  // Note: The widget doesn't natively support neighborhood string filtering via attribute easily without more complex mapping, 
  // but we can use the property types and sorting.
  // We'll keep the sort order static as per the snippet for now.

  onMount(() => {
    trackEvent('page_view', {
      page_title: 'Active Listings',
      page_location: window.location.href
    })
  })

  function applyFilters() {
    // In this version, reactivity handles the updates to the widget via priceMin/priceMax
    trackEvent('listing_filters_applied', {
      price_range: selectedPriceRange,
      bedrooms: selectedBedrooms,
      neighborhood: selectedNeighborhood
    })
    
    // Scroll to results
    document.querySelector('.realscout-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  function clearFilters() {
    selectedPriceRange = ""
    selectedBedrooms = ""
    selectedNeighborhood = ""
    
    trackEvent('listing_filters_cleared', {
      page: 'listings'
    })
  }

  function handlePhoneClick() {
    trackEvent('phone_click', {
      phone_number: SITE_CONFIG.phone,
      section: 'listings_header'
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

  <!-- RealScout Widget Script -->
  <script src="https://em.realscout.com/widgets/realscout-web-components.umd.js" type="module"></script>
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
          <h1>Pewter Valley Estates Listings | Active Homes for Sale in Southwest Las Vegas by Dr. Jan Duffy</h1>
          <p class="hero-subtitle">Expert Real Estate Services for Pewter Valley Estates & Southwest Las Vegas (89183)</p>
          
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
            <h3>Your Las Vegas Expert</h3>
            <p>Questions about any property?</p>
            <a 
              href={`tel:${SITE_CONFIG.phoneTel}`} 
              class="phone-cta"
              onclick={handlePhoneClick}
            >
              📞 {SITE_CONFIG.phone}
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
          onclick={() => showFilters = !showFilters}
        >
          {showFilters ? 'Hide' : 'Show'} Filters
        </button>
      </div>
      
      {#if showFilters}
        <div class="search-filters" transition:slide>
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
            <button class="apply-filters" onclick={applyFilters}>
              Update Search
            </button>
            {#if selectedPriceRange || selectedBedrooms || selectedNeighborhood}
              <button class="clear-filters" onclick={clearFilters}>
                Clear
              </button>
            {/if}
          </div>
        </div>
      {/if}
    </div>
  </section>

  <!-- RealScout Integration -->
  <section class="realscout-section">
    <div class="container">
      <div class="realscout-header">
        <h2>Live Las Vegas MLS Listings | Pewter Valley Estates & Southwest Las Vegas</h2>
        <p class="lead">Real-time MLS access with expert guidance from Dr. Jan Duffy. Updated every 15 minutes with the latest properties in Pewter Valley Estates and throughout Southwest Las Vegas zip code 89183.</p>
      </div>
      
      <div class="realscout-container">
        <!-- RealScout Web Component -->
        <realscout-office-listings 
          agent-encoded-id="QWdlbnQtMjI1MDUw" 
          sort-order="NEWEST" 
          listing-status="For Sale" 
          property-types=",SFR,OTHER,MOBILE" 
          price-min={priceMin} 
          price-max={priceMax}
        ></realscout-office-listings>
      </div>
    </div>
  </section>

  <section class="pewter-valley-listings">
    <div class="container">
      <h2>Pewter Valley Estates Listings and Community Expertise</h2>
      <p class="lead">
        While Dr. Jan Duffy serves clients throughout Las Vegas, her specialized focus on Pewter Valley Estates provides unique advantages for buyers and sellers interested in this specific Southwest Las Vegas community in zip code 89183.
      </p>

      <h3>Specialized Knowledge of Pewter Valley Estates Market</h3>
      <p>
        Dr. Jan Duffy's exclusive focus on Pewter Valley Estates means deep understanding of this Richmond American Homes community's resale market dynamics. She knows every floor plan, understands which lot locations command premiums, recognizes value-enhancing features, and tracks market trends specific to Pewter Valley Estates. This specialized knowledge helps buyers identify properties matching their preferences and helps sellers position properties competitively in the resale market.
      </p>
      <p>
        Understanding resale market dynamics is essential for Pewter Valley Estates transactions. As a sold-out community, all available properties are previously owned homes requiring expertise in condition evaluation, upgrade assessment, and value determination. Dr. Jan Duffy's resale market expertise ensures clients navigate inspections, negotiations, and transactions successfully while achieving optimal outcomes whether buying or selling.
      </p>

      <h3>Real-Time MLS Access and Instant Notifications</h3>
      <p>
        Dr. Jan Duffy provides immediate access to all MLS listings in Pewter Valley Estates and Southwest Las Vegas, ensuring clients see new listings as they hit the market, receive instant notifications about price changes, and access comprehensive property information not available on public websites. This real-time access is critical in competitive markets where well-priced properties receive multiple offers quickly. Direct MLS access means clients never miss opportunities and can move quickly when finding ideal properties.
      </p>
      <p>
        Instant notifications keep clients informed about market activity affecting their interests. Whether tracking new Pewter Valley Estates listings, monitoring price reductions, or staying updated on pending sales that affect market conditions, Dr. Jan Duffy's notification system ensures clients have timely information for decision-making. This proactive communication helps buyers identify opportunities and helps sellers understand competitive positioning.
      </p>

      <h3>Expert Property Evaluation and Market Analysis</h3>
      <p>
        Every listing requires expert evaluation to determine true market value, condition implications, and investment potential. Dr. Jan Duffy provides detailed property analysis considering square footage, condition, upgrades, lot characteristics, and community-specific factors affecting value in Pewter Valley Estates. This comprehensive evaluation helps buyers make informed decisions and helps sellers understand competitive positioning.
      </p>
      <p>
        Market analysis extends beyond individual properties to include current market conditions, pricing trends, inventory levels, and buyer demand patterns specific to Pewter Valley Estates. Understanding these market dynamics helps buyers evaluate whether properties represent good value and helps sellers understand expected time on market and pricing strategies. Dr. Jan Duffy's market intelligence ensures clients make decisions informed by comprehensive data rather than assumptions or incomplete information.
      </p>
    </div>
  </section>

  <section class="buyer-seller-support">
    <div class="container">
      <h2>Comprehensive Support for Buyers and Sellers</h2>
      <p class="lead">
        Dr. Jan Duffy provides complete real estate services whether you're buying, selling, or investing in Pewter Valley Estates or other Southwest Las Vegas properties. Her expertise ensures clients receive expert representation tailored to their specific goals.
      </p>

      <h3>Buyer Representation Services</h3>
      <p>
        Buying in Pewter Valley Estates or Southwest Las Vegas requires expert representation that understands resale markets, community dynamics, and buyer protection. Dr. Jan Duffy provides comprehensive buyer services including property search, market analysis, offer strategy, inspection coordination, and transaction management. Her specialized knowledge of Pewter Valley Estates ensures buyers receive guidance informed by deep community understanding rather than generic advice.
      </p>
      <p>
        Buyer services extend beyond basic property search to include understanding floor plan efficiency, lot location value, condition implications, upgrade quality, and resale potential. Dr. Jan Duffy's expertise helps buyers evaluate properties holistically, considering factors affecting both immediate needs and long-term value. This comprehensive approach ensures buyers find properties truly matching their goals rather than just meeting basic criteria.
      </p>

      <h3>Seller Services and Marketing</h3>
      <p>
        Selling Pewter Valley Estates properties requires pricing strategy, professional marketing, and negotiation expertise that maximizes sale prices while minimizing time on market. Dr. Jan Duffy provides comprehensive seller services including home valuation, pricing strategy, professional marketing, and transaction management. Her specialized knowledge ensures sellers receive guidance informed by community-specific market intelligence.
      </p>
      <p>
        Seller services include detailed market analysis comparing properties to recent sales, current listings, and market trends specific to Pewter Valley Estates. Understanding competitive positioning helps sellers price accurately, market effectively, and negotiate favorable terms. Dr. Jan Duffy's market knowledge ensures sellers receive guidance informed by comprehensive market intelligence rather than generic advice that doesn't account for community-specific factors.
      </p>

      <h3>Investment Property Analysis</h3>
      <p>
        Real estate investors require specialized analysis evaluating cash flow, returns, risks, and strategies. Dr. Jan Duffy provides comprehensive investment property analysis including rental income projections, operating expense estimates, cash flow calculations, cap rate analysis, ROI projections, and risk evaluation. Her specialized knowledge of Pewter Valley Estates investment properties provides particular advantages for investors.
      </p>
      <p>
        Investment analysis considers factors specific to Pewter Valley Estates including rental demand, tenant profiles, appreciation potential, and market trends affecting investment returns. Understanding how these factors affect investment potential helps investors make data-driven decisions about building portfolios. Dr. Jan Duffy's expertise ensures investors receive analysis informed by comprehensive market knowledge rather than generic estimates ignoring location-specific factors.
      </p>
    </div>
  </section>

  <!-- Google Reviews -->
  <GoogleReviews showSchema={false} />

  <!-- Lead Capture Forms -->
  <section class="lead-capture">
    <div class="container">
      <h2>Get Notified & Schedule Showings</h2>
      <p class="lead-subtitle">Stay ahead of the market with instant alerts and priority access.</p>
      
      <div class="lead-grid">
        <!-- New Listings Alert -->
        <div class="lead-card-wrapper">
          <LeadCaptureForm 
            formType="general" 
            title="📧 New Listings Alert"
            subtitle="Get notified when new properties match your criteria"
          />
        </div>

        <!-- Property Inquiry -->
        <div class="lead-card-wrapper">
          <LeadCaptureForm 
            formType="buyer" 
            title="🏠 Property Inquiry"
            subtitle="Interested in a specific property? Let us know!"
          />
        </div>

        <!-- Schedule Showing -->
        <div class="lead-card schedule-card">
          <h3>📅 Schedule Showing</h3>
          <p>Ready to see properties in person?</p>
          <div class="showing-actions">
            <a href={`tel:${SITE_CONFIG.phoneTel}`} class="phone-btn" onclick={handlePhoneClick}>
              Call {SITE_CONFIG.phone}
            </a>
            <a href="/contact" class="contact-btn">
              Contact Form
            </a>
          </div>
          <div class="showing-info">
            <small>Available 7 days a week</small>
            <br>
            <small>Same-day showings often available</small>
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
      <h2>Why Choose Las Vegas Real Estate with Dr. Jan Duffy?</h2>
      <p class="lead">
        Las Vegas offers diverse real estate opportunities, and Dr. Jan Duffy's specialized focus on Pewter Valley Estates and Southwest Las Vegas provides expert guidance for buyers, sellers, and investors throughout the region.
      </p>
      <div class="context-grid">
        <div class="context-card">
          <div class="context-icon">🎰</div>
          <h3>Entertainment Capital Access</h3>
          <p>Pewter Valley Estates provides convenient access to world-class entertainment, dining, and nightlife on the Las Vegas Strip while maintaining quiet residential tranquility. This balance appeals to professionals working in entertainment, hospitality, and related industries who want convenient access without sacrificing residential character.</p>
          <a href="/neighborhood" class="context-link">Explore Neighborhoods &rarr;</a>
        </div>
        <div class="context-card">
          <div class="context-icon">🏫</div>
          <h3>Quality Educational Opportunities</h3>
          <p>Southwest Las Vegas zip code 89183 offers access to quality public and private schools serving families in Pewter Valley Estates. Dr. Jan Duffy helps families understand school assignments, evaluate educational options, and choose communities that align with educational priorities and lifestyle preferences.</p>
          <a href="/about" class="context-link">Learn About Our Area &rarr;</a>
        </div>
        <div class="context-card">
          <div class="context-icon">⛳</div>
          <h3>Recreational Amenities</h3>
          <p>Pewter Valley Estates residents enjoy proximity to parks like Somerset Hills Park and Goett Family Park, golf courses including Southern Highlands Golf Club, and recreational facilities that create active, family-friendly lifestyles. These amenities enhance property values and appeal to buyers seeking comprehensive community living.</p>
          <a href="/neighborhood-guide" class="context-link">Explore Amenities &rarr;</a>
        </div>
        <div class="context-card">
          <div class="context-icon">💼</div>
          <h3>Employment Center Access</h3>
          <p>Pewter Valley Estates' location at Pyle Avenue and S Rancho Destino Rd provides excellent access to major employment centers throughout Las Vegas including the Strip, downtown, McCarran International Airport, and business districts. This accessibility makes the community attractive to professionals across multiple industries.</p>
          <a href="/market-analysis" class="context-link">Market Analysis &rarr;</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Sticky Contact Button for Mobile -->
  <StickyContactButton />
</main>

<style>

  /* Custom styles for RealScout widget */
  realscout-office-listings {
    --rs-listing-divider-color: #0e64c8;
    width: 100%;
    display: block;
    min-height: 600px;
  }

  .listings-page {
    min-height: 100vh;
    background: #f8fbff;
  }

  /* Hero Section */
  .listings-hero {
    background: linear-gradient(135deg, #0A2540 0%, #1e3a8a 100%);
    color: white;
    padding: 5rem 0;
    position: relative;
    overflow: hidden;
  }

  .hero-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .hero-text h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    line-height: 1.1;
    color: white;
  }

  .hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 3rem;
    opacity: 0.9;
    font-weight: 300;
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
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease;
  }

  .stat:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }

  .stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: #4ade80; /* Brighter green for contrast */
    margin-bottom: 0.25rem;
  }

  .stat-label {
    font-size: 0.875rem;
    opacity: 0.9;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .hero-contact {
    display: flex;
    justify-content: center;
  }

  .contact-card {
    background: white;
    color: #333;
    padding: 2.5rem;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 350px;
  }

  .headshot {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.5rem;
    border: 4px solid #3A8DDE;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  }

  .contact-card h3 {
    color: #0A2540;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .phone-cta {
    display: inline-block;
    background: #16B286;
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 700;
    margin-top: 1.5rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(22, 178, 134, 0.3);
  }

  .phone-cta:hover {
    background: #0D8A5B;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(22, 178, 134, 0.4);
  }

  /* Quick Search */
  .quick-search {
    background: white;
    padding: 2rem 0;
    border-bottom: 1px solid #e9ecef;
    position: relative;
    z-index: 10;
    margin-top: -2rem; /* Overlap hero */
  }

  .quick-search .container {
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    padding: 2rem;
  }

  .search-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .search-header h2 {
    font-size: 1.5rem;
    color: #0A2540;
    margin: 0;
  }

  .filter-toggle {
    background: transparent;
    color: #3A8DDE;
    border: 2px solid #3A8DDE;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s;
  }

  .filter-toggle:hover {
    background: #3A8DDE;
    color: white;
  }

  .search-filters {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    align-items: end;
  }

  .filter-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #4b5563;
    font-size: 0.9rem;
  }

  .filter-group select {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 1rem;
    background-color: #f9fafb;
    transition: border-color 0.2s;
  }

  .filter-group select:focus {
    border-color: #3A8DDE;
    outline: none;
  }

  .filter-actions {
    display: flex;
    gap: 1rem;
  }

  .apply-filters {
    background: #3A8DDE;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    flex: 1;
    transition: background 0.2s;
  }

  .apply-filters:hover {
    background: #2563eb;
  }

  .clear-filters {
    background: white;
    color: #6b7280;
    border: 2px solid #e5e7eb;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s;
  }

  .clear-filters:hover {
    border-color: #d1d5db;
    color: #374151;
  }

  /* RealScout Section */
  .realscout-section {
    padding: 4rem 0;
    background: #f8fbff;
  }

  .realscout-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .realscout-header h2 {
    font-size: 2.5rem;
    color: #0A2540;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .realscout-header .lead {
    font-size: 1.25rem;
    color: #374151;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto;
  }

  .pewter-valley-listings,
  .buyer-seller-support {
    padding: 4rem 0;
  }

  .pewter-valley-listings {
    background: white;
  }

  .buyer-seller-support {
    background: #f8fafc;
  }

  .pewter-valley-listings h2,
  .buyer-seller-support h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 2rem;
    text-align: center;
  }

  .pewter-valley-listings .lead,
  .buyer-seller-support .lead {
    font-size: 1.25rem;
    color: #374151;
    line-height: 1.8;
    margin-bottom: 2rem;
    font-weight: 500;
    text-align: center;
  }

  .pewter-valley-listings h3,
  .buyer-seller-support h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .pewter-valley-listings p,
  .buyer-seller-support p {
    color: #374151;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
  }

  .realscout-container {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    min-height: 600px;
    padding: 1rem;
  }

  /* Lead Capture */
  .lead-capture {
    background: white;
    padding: 5rem 0;
  }

  .lead-capture h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #0A2540;
    margin-bottom: 0.5rem;
  }

  .lead-subtitle {
    text-align: center;
    color: #6b7280;
    margin-bottom: 4rem;
    font-size: 1.25rem;
  }

  .lead-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .lead-card-wrapper {
    /* Wrapper to make components fit the grid */
  }

  .schedule-card {
    background: #f8fbff;
    padding: 2rem;
    border-radius: 16px;
    border: 2px solid #e0f2fe;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .schedule-card h3 {
    color: #0A2540;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .showing-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem 0;
  }

  .phone-btn,
  .contact-btn {
    display: block;
    text-align: center;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: transform 0.2s;
  }

  .phone-btn {
    background: #16B286;
    color: white;
    box-shadow: 0 4px 10px rgba(22, 178, 134, 0.2);
  }

  .contact-btn {
    background: white;
    color: #3A8DDE;
    border: 2px solid #3A8DDE;
  }

  .phone-btn:hover,
  .contact-btn:hover {
    transform: translateY(-2px);
  }

  .showing-info {
    color: #6b7280;
    font-size: 0.9rem;
  }

  /* Local Context */
  .local-context {
    background: #f0fdf4; /* Very light green hint */
    padding: 5rem 0;
  }

  .local-context h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #0A2540;
    margin-bottom: 4rem;
  }

  .context-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2.5rem;
  }

  .context-card {
    text-align: center;
    padding: 2.5rem;
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
    transition: transform 0.3s ease;
  }

  .context-card:hover {
    transform: translateY(-5px);
  }

  .context-icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    display: inline-block;
  }

  .context-card h3 {
    color: #0A2540;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 700;
  }

  .context-link {
    display: inline-block;
    margin-top: 1.5rem;
    color: #3A8DDE;
    font-weight: 600;
    text-decoration: none;
    font-size: 0.95rem;
  }

  .context-link:hover {
    text-decoration: underline;
  }

  /* Mobile Optimization */
  @media (max-width: 768px) {
    .hero-content {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 3rem;
    }

    .hero-text h1 {
      font-size: 2.5rem;
    }

    .market-stats {
      grid-template-columns: repeat(2, 1fr);
    }

    .contact-card {
      margin: 0 auto;
    }
    
    .quick-search {
      margin-top: 0;
    }
    
    .quick-search .container {
      padding: 1.5rem;
    }

    .search-filters {
      grid-template-columns: 1fr;
    }

    .filter-actions {
      flex-direction: column;
    }
  }

  @media (max-width: 480px) {
    .market-stats {
      grid-template-columns: 1fr;
    }
  }
</style>
