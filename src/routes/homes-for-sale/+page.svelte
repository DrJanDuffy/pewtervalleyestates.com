<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import SEOHead from "$lib/SEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import NAPDisplay from "$lib/NAPDisplay.svelte"
  import CTABanner from "$lib/CTABanner.svelte"
  import LeadCaptureForm from "$lib/LeadCaptureForm.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"
  
  const pageData = {
    title: "Pewter Valley Estates Homes For Sale | Las Vegas Resale & New Inventory",
    description: `Browse current Pewter Valley Estates homes for sale in Southwest Las Vegas (89183). Ranch-style homes 1,950-2,240 sq ft by Richmond American Homes. Expert representation by Dr. Jan Duffy. Call (702) 222-1964.`,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    type: "website",
    canonical: `${SITE_CONFIG.url}/homes-for-sale`,
    keywords: "Pewter Valley Estates homes for sale, 89183 homes, Pyle Avenue homes, S Rancho Destino Rd properties, Southwest Las Vegas real estate",
  }
  
  const breadcrumbs = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Homes for Sale", url: `${SITE_CONFIG.url}/homes-for-sale` },
  ]
  
  onMount(() => {
    trackEvent("page_view", {
      page_title: "Homes for Sale",
      page_location: window.location.href,
    })
  })
</script>

<svelte:head>
  <title>{pageData.title}</title>
  <meta name="description" content={pageData.description} />
</svelte:head>

<SEOHead {pageData} includeLocalBusiness={true} includeRealEstate={true} />

<Breadcrumbs {breadcrumbs} />

<main class="homes-for-sale-page">
  <section class="hero">
    <div class="container">
      <h1>Pewter Valley Estates Homes For Sale | Las Vegas Resale & New Inventory</h1>
      <p class="hero-subtitle">Expert Real Estate Services by Dr. Jan Duffy | Zip Code 89183</p>
      <p class="hero-description">
        Discover available homes in Pewter Valley Estates, Southwest Las Vegas's premier master-planned community. Located at Pyle Avenue and S Rancho Destino Rd, these ranch-style homes by Richmond American Homes offer exceptional value in a family-friendly environment.
      </p>
    </div>
  </section>

  <section class="current-listings">
    <div class="container">
      <h2>Current Pewter Valley Estates Home Listings</h2>
      
      <p class="lead">
        The Pewter Valley Estates resale market offers quality ranch-style homes ranging from 1,950 to 2,240 square feet with 3-4 bedrooms. As a sold-out community, all available properties are resales, requiring specialized knowledge of condition, upgrades, and market positioning that Dr. Jan Duffy provides.
      </p>
      
      <div class="listings-note">
        <p>
          <strong>Note:</strong> All current listings are resale properties. The community was built by Richmond American Homes and is now in the resale phase. Dr. Jan Duffy maintains real-time access to MLS listings and can provide immediate updates on new inventory.
        </p>
      </div>
      
      <h3>Active Resale Inventory Overview</h3>
      <p>
        Current resale listings in Pewter Valley Estates typically range from $450,000 to $650,000, depending on square footage, condition, location within the community, and any upgrades or improvements made by previous owners. Homes closer to community amenities like parks and with premium lot locations command higher prices.
      </p>
      
      <h3>Property Types Available</h3>
      <p>
        All homes in Pewter Valley Estates are ranch-style, single-story designs built by Richmond American Homes. Floor plans range from 1,950 to 2,240 square feet with 3-4 bedrooms and 2-3 bathrooms. These single-story homes appeal to families, empty nesters, and those planning for aging in place.
      </p>
      
      <h3>Real-Time MLS Access</h3>
      <p>
        Dr. Jan Duffy provides real-time access to all MLS listings in Pewter Valley Estates. This includes new listings as they hit the market, price reductions, pending sales, and recently sold properties. Contact Dr. Jan Duffy at (702) 222-1964 for immediate listing updates and property alerts.
      </p>
      
      <div class="cta-box">
        <h3>Get Instant Listing Updates</h3>
        <p>Receive email alerts when new Pewter Valley Estates homes hit the market</p>
        <a href="/contact" class="cta-button">Request Listing Alerts</a>
      </div>
    </div>
  </section>

  <section class="home-features">
    <div class="container">
      <h2>Pewter Valley Estates Home Features & Architecture</h2>
      
      <p class="lead">
        Richmond American Homes designed Pewter Valley Estates with quality construction, modern floor plans, and energy-efficient features. Understanding these architectural details helps buyers make informed decisions and sellers properly position their properties.
      </p>
      
      <h3>Ranch-Style Architecture</h3>
      <p>
        All homes in Pewter Valley Estates feature ranch-style, single-story architecture. This design emphasizes open floor plans, seamless indoor-outdoor living, and accessibility. The single-story layout appeals to families with young children, empty nesters, and those planning for long-term residence.
      </p>
      
      <h3>Square Footage & Layout Options</h3>
      <p>
        Homes range from 1,950 to 2,240 square feet, providing options for different family sizes and lifestyles. Floor plans typically include open-concept living areas, well-appointed kitchens, master suites, and additional bedrooms. The efficient use of space maximizes functionality within the square footage range.
      </p>
      
      <h3>Bedroom & Bathroom Configurations</h3>
      <p>
        Most homes feature 3-4 bedrooms and 2-3 bathrooms. The master suite typically includes an ensuite bathroom, while additional bedrooms share hall bathrooms. This configuration accommodates families while maintaining privacy for the primary bedroom.
      </p>
      
      <h3>Builder Features & Upgrades</h3>
      <p>
        Original Richmond American Homes features include energy-efficient construction, modern appliances, quality flooring, and well-designed kitchens and bathrooms. Resale properties may include additional upgrades such as landscaping improvements, interior updates, or smart home features added by previous owners.
      </p>
      
      <h3>Lot Characteristics</h3>
      <p>
        Lot sizes vary within the community, with some properties offering larger yards or premium locations near parks and amenities. Understanding lot characteristics helps buyers find properties matching their preferences and helps sellers highlight unique features.
      </p>
      
      <h3>Community Integration</h3>
      <p>
        Homes are designed to integrate with the community's overall aesthetic and lifestyle. The consistent architectural style creates a cohesive neighborhood appearance while allowing individual expression through landscaping and exterior color choices.
      </p>
    </div>
  </section>

  <section class="price-trends">
    <div class="container">
      <h2>Pewter Valley Estates Price Trends & Market Analysis</h2>
      
      <p class="lead">
        Understanding price trends in Pewter Valley Estates requires specialized knowledge of the resale market dynamics, comparable sales, and community-specific factors. Dr. Jan Duffy provides comprehensive market analysis to inform buying and selling decisions.
      </p>
      
      <h3>Price Per Square Foot Analysis</h3>
      <p>
        Current price per square foot in Pewter Valley Estates typically ranges from $230 to $290, depending on condition, upgrades, and location. This metric helps buyers compare properties and sellers understand market positioning. Dr. Jan Duffy's market analysis includes detailed price per square foot comparisons.
      </p>
      
      <h3>Days on Market Trends</h3>
      <p>
        Well-priced properties in Pewter Valley Estates typically sell within 30-60 days, though this varies based on market conditions, pricing strategy, and property condition. Understanding days on market trends helps sellers set realistic expectations and helps buyers identify opportunities.
      </p>
      
      <h3>Comparable Sales Analysis</h3>
      <p>
        Dr. Jan Duffy provides detailed comparable sales analysis (CMA) using recent sales within Pewter Valley Estates. This includes properties with similar square footage, bedroom counts, and locations. Understanding comparable sales is essential for accurate pricing and competitive offers.
      </p>
      
      <h3>Market Appreciation Trends</h3>
      <p>
        As a newer community transitioning to resale, Pewter Valley Estates has shown steady appreciation. Market analysis includes tracking appreciation rates, comparing to broader Southwest Las Vegas trends, and understanding factors driving value in zip code 89183.
      </p>
      
      <h3>Investment Property Considerations</h3>
      <p>
        For investors, price trends must be analyzed alongside rental income potential, cash flow, and long-term appreciation. Dr. Jan Duffy provides investment analysis including cap rates, cash-on-cash returns, and rental market data specific to Pewter Valley Estates and zip code 89183.
      </p>
      
      <div class="cta-box">
        <h3>Get Your Free Market Analysis</h3>
        <p>Receive a comprehensive market report for Pewter Valley Estates</p>
        <a href="/market-analysis" class="cta-button">View Market Analysis</a>
      </div>
    </div>
  </section>

  <section class="buying-process">
    <div class="container">
      <h2>Buying a Home in Pewter Valley Estates</h2>
      
      <p class="lead">
        The home buying process in Pewter Valley Estates requires specialized knowledge of resale transactions, community-specific considerations, and market dynamics. Dr. Jan Duffy provides expert buyer representation throughout the entire process.
      </p>
      
      <h3>Pre-Approval & Financing</h3>
      <p>
        Before viewing properties, buyers should obtain mortgage pre-approval. This establishes your budget, strengthens your offer position, and streamlines the buying process. Dr. Jan Duffy can recommend trusted lenders familiar with Las Vegas real estate transactions.
      </p>
      
      <h3>Property Search & Viewing</h3>
      <p>
        Dr. Jan Duffy provides comprehensive property search services, including MLS access, private showings, and property analysis. Understanding each property's condition, upgrades, and market position helps buyers make informed decisions.
      </p>
      
      <h3>Offer Strategy & Negotiation</h3>
      <p>
        Crafting competitive offers requires understanding market conditions, comparable sales, and seller motivations. Dr. Jan Duffy's negotiation expertise helps buyers secure properties at optimal prices while protecting their interests through appropriate contingencies.
      </p>
      
      <h3>Inspection & Due Diligence</h3>
      <p>
        Resale properties require thorough inspection to identify condition issues, needed repairs, and upgrade opportunities. Dr. Jan Duffy coordinates inspections, reviews findings, and negotiates repairs or credits when necessary.
      </p>
      
      <h3>Closing Process</h3>
      <p>
        From contract to closing, Dr. Jan Duffy manages all transaction details, coordinates with lenders and title companies, and ensures smooth, timely closings. This includes addressing any issues that arise and keeping all parties informed.
      </p>
      
      <div class="cta-box">
        <h3>Start Your Home Search Today</h3>
        <p>Contact Dr. Jan Duffy to begin finding your perfect Pewter Valley Estates home</p>
        <a href="/buy-a-home" class="cta-button">Learn About Buyer Services</a>
      </div>
    </div>
  </section>

  <section class="sidebar-section">
    <div class="container">
      <div class="sidebar-grid">
        <div class="main-content">
          <h2>Why Work with Dr. Jan Duffy for Pewter Valley Estates Homes</h2>
          
          <p>
            Dr. Jan Duffy's specialization in Pewter Valley Estates provides buyers with unmatched expertise. This includes understanding every floor plan, knowing community dynamics, tracking market trends, and maintaining relationships that facilitate smooth transactions.
          </p>
          
          <h3>Specialized Market Knowledge</h3>
          <p>
            Unlike generalist agents, Dr. Jan Duffy focuses exclusively on Pewter Valley Estates and Southwest Las Vegas. This specialization means deeper market insights, better pricing strategies, and more effective negotiation.
          </p>
          
          <h3>Comprehensive Buyer Services</h3>
          <p>
            From initial search through closing, Dr. Jan Duffy provides full-service buyer representation. This includes property search, market analysis, offer strategy, inspection coordination, and transaction management.
          </p>
          
          <h3>Investment Property Expertise</h3>
          <p>
            For investors, Dr. Jan Duffy provides cash flow analysis, rental market insights, and investment property guidance. Understanding the investment potential of Pewter Valley Estates properties helps investors make data-driven decisions.
          </p>
        </div>
        
        <aside class="sidebar">
          <NAPDisplay showGoogleReviewsLink={true} showDirections={true} />
          
          <div class="info-box">
            <h3>Quick Property Facts</h3>
            <ul>
              <li><strong>Square Footage:</strong> 1,950-2,240 sq ft</li>
              <li><strong>Bedrooms:</strong> 3-4</li>
              <li><strong>Bathrooms:</strong> 2-3</li>
              <li><strong>Style:</strong> Ranch-style, Single-story</li>
              <li><strong>Builder:</strong> Richmond American Homes</li>
              <li><strong>Price Range:</strong> $450,000-$650,000</li>
              <li><strong>Zip Code:</strong> 89183</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <section class="lead-capture">
    <LeadCaptureForm 
      formType="buyer"
      title="Get Started Finding Your Home"
      subtitle="Contact Dr. Jan Duffy for expert buyer representation in Pewter Valley Estates"
    />
  </section>

  <CTABanner 
    variant="primary"
    showPhone={true}
    showEmail={true}
    showValuation={false}
    showTour={true}
  />
</main>

<style>
  .homes-for-sale-page {
    width: 100%;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .hero {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    color: white;
    padding: 4rem 0;
    text-align: center;
  }
  
  .hero h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    color: #fbbf24;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  .hero-description {
    font-size: 1.125rem;
    max-width: 900px;
    margin: 0 auto;
    line-height: 1.7;
    opacity: 0.95;
  }
  
  section {
    padding: 4rem 0;
  }
  
  .current-listings,
  .price-trends {
    background: white;
  }
  
  .home-features,
  .buying-process {
    background: #f8fafc;
  }
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .lead {
    font-size: 1.25rem;
    color: #374151;
    line-height: 1.8;
    margin-bottom: 2rem;
    font-weight: 500;
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: #374151;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
  }
  
  .listings-note {
    background: #fef3c7;
    border-left: 4px solid #fbbf24;
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin: 2rem 0;
  }
  
  .listings-note p {
    margin: 0;
    color: #92400e;
  }
  
  .cta-box {
    background: #1e3a8a;
    color: white;
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    margin: 3rem 0;
  }
  
  .cta-box h3 {
    color: white;
    margin-top: 0;
  }
  
  .cta-box p {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 1.5rem;
  }
  
  .cta-button {
    display: inline-block;
    padding: 1rem 2rem;
    background: white;
    color: #1e3a8a;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .cta-button:hover {
    background: #f8fafc;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  .sidebar-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
  }
  
  .sidebar {
    position: sticky;
    top: 2rem;
    height: fit-content;
  }
  
  .info-box {
    background: #f8fafc;
    padding: 1.5rem;
    border-radius: 1rem;
    margin-top: 2rem;
  }
  
  .info-box h3 {
    font-size: 1.25rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  
  .info-box ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .info-box li {
    padding: 0.5rem 0;
    color: #374151;
    border-bottom: 1px solid #e2e8f0;
  }
  
  .info-box li:last-child {
    border-bottom: none;
  }
  
  .info-box strong {
    color: #1e3a8a;
  }
  
  .lead-capture {
    padding: 0;
  }
  
  @media (max-width: 968px) {
    .sidebar-grid {
      grid-template-columns: 1fr;
    }
    
    .sidebar {
      position: static;
    }
  }
  
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }
    
    h2 {
      font-size: 2rem;
    }
  }
</style>

