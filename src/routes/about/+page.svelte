<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import EnhancedSEOHead from "$lib/EnhancedSEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import NAPDisplay from "$lib/NAPDisplay.svelte"
  import GoogleReviews from "$lib/GoogleReviews.svelte"
  import RealScoutListings from "$lib/RealScoutListings.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"
  
  // SEO data
  const pageData = {
    title: "Dr. Jan Duffy - Las Vegas Real Estate Agent | Pewter Valley Estates",
    description: `Dr. Jan Duffy: Las Vegas real estate expert specializing in luxury homes and new construction at Pewter Valley Estates. ${SITE_CONFIG.phone}`,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    type: "profile",
    canonical: `${SITE_CONFIG.url}/about`,
    keywords: "Dr. Jan Duffy, Las Vegas realtor, luxury real estate, Pewter Valley Estates, Richmond American Homes",
  }
  
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "About Dr. Jan Duffy", url: "/about" },
  ]
  
  const stats = [
    { label: "Years Experience", value: "20+" },
    { label: "Satisfied Clients", value: "1000+" },
    { label: "Neighborhoods", value: "50+" },
    { label: "Google Reviews", value: "5-Star" }
  ]

  const serviceAreas = [
    "Las Vegas", "Henderson", "Summerlin", "Green Valley", 
    "Anthem", "Inspirada", "Mountain's Edge", "Silverado Ranch",
    "Pewter Valley", "Southwest Las Vegas"
  ]
  
  const FALLBACK_HEADSHOT =
    "https://ui-avatars.com/api/?name=Jan+Duffy&size=500&background=0A2540&color=fff"
  
  function handleHeadshotError(event) {
    const target = event.currentTarget
    if (target && typeof target === "object" && "src" in target) {
      target.src = FALLBACK_HEADSHOT
      if ("onerror" in target) {
        target.onerror = null
      }
    }
  }

  onMount(() => {
    trackEvent("page_view", {
      page_title: "About",
      page_location: window.location.href,
    })
  })
</script>

<EnhancedSEOHead {pageData} {breadcrumbs} />

<main class="about-page">
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-bg"></div>
    <div class="container hero-container">
      <div class="hero-content">
        <h1 class="hero-title">Dr. Jan Duffy - Las Vegas Real Estate Agent | Pewter Valley Estates</h1>
        <p class="hero-subtitle">Expert Real Estate Services for Southwest Las Vegas (89183)</p>
        <div class="hero-separator"></div>
        <p class="hero-tagline">Professional Excellence Meets Personal Service</p>
        
        <div class="hero-actions">
          <a href="/contact" class="btn btn-primary">Work With Jan</a>
          <a href="/listings" class="btn btn-outline">View Listings</a>
        </div>
      </div>
      <div class="hero-image-wrapper">
         <!-- Placeholder for Headshot - Ensure this file exists in static/ -->
        <img
          src="/dr-jan-headshot.jpg"
          alt="Dr. Jan Duffy"
          class="hero-headshot"
          on:error={handleHeadshotError}
        />
      </div>
    </div>
  </section>

  <!-- Stats Bar -->
  <section class="stats-section">
    <div class="container">
      <div class="stats-grid">
        {#each stats as stat}
          <div class="stat-item">
            <span class="stat-value">{stat.value}</span>
            <span class="stat-label">{stat.label}</span>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Bio / About Section -->
  <section class="bio-section">
    <div class="container">
      <div class="bio-grid">
        <div class="bio-content">
          <span class="section-overline">About Dr. Jan Duffy</span>
          <h2>A Standard of Excellence in Las Vegas Real Estate</h2>
          
          <div class="bio-text">
            <p>
              Are you in search of a Realtor who can turn your real estate dreams into reality? Meet Dr. Jan Duffy, a dynamic Las Vegas real estate professional. With a track record that spans decades of professional excellence, Dr. Jan isn't just another agent—she is a dedicated advocate for her clients.
            </p>
            <p>
              Specializing exclusively in Pewter Valley Estates and Southwest Las Vegas real estate, Dr. Jan Duffy combines deep local market knowledge with a personalized approach. Whether you're buying your first resale home in Pewter Valley Estates, selling to maximize value, or building an investment portfolio, her attention to detail and commitment to integrity ensure seamless transactions. Her expertise in zip code 89183 and the resale market dynamics of this Richmond American Homes community ensures clients receive specialized guidance that generalist agents cannot provide.
            </p>
            <p>
              When you choose Dr. Jan Duffy, you're not just hiring a Realtor; you're gaining a trusted advisor, a skilled negotiator, and a long-term resource for all your real estate needs in Pewter Valley Estates. Her specialized focus on this community means understanding every floor plan, lot location, market trend, and transaction nuance that affects your real estate goals. This comprehensive expertise translates to better outcomes whether you're buying, selling, or investing in Southwest Las Vegas properties.
            </p>
          </div>

          <div class="contact-card">
            <h3>Get in Touch</h3>
            <NAPDisplay variant="compact" />
            <div class="contact-actions">
              <a href={`tel:${SITE_CONFIG.phoneTel}`} class="contact-link">{SITE_CONFIG.phone}</a>
              <a href={`mailto:${SITE_CONFIG.email}`} class="contact-link">{SITE_CONFIG.email}</a>
            </div>
          </div>
        </div>
        
        <div class="bio-features">
          <div class="feature-card">
            <span class="feature-icon">🏆</span>
            <h3>Market Expert</h3>
            <p>Deep insight into Southwest Las Vegas real estate trends, pricing dynamics, resale market conditions, and community-specific factors affecting Pewter Valley Estates. Dr. Jan Duffy tracks market trends specific to zip code 89183, providing clients with accurate pricing intelligence and strategic guidance.</p>
          </div>
          <div class="feature-card">
            <span class="feature-icon">🤝</span>
            <h3>Client Focused</h3>
            <p>Your goals are the priority. Personalized strategies tailored to individual needs, preferences, budgets, and timelines. Whether buying a first home, selling to maximize value, or building investment portfolios, Dr. Jan Duffy adapts her approach to achieve your specific objectives.</p>
          </div>
          <div class="feature-card">
            <span class="feature-icon">🏘️</span>
            <h3>Pewter Valley Estates Specialist</h3>
            <p>Expert guidance through resale transactions, market analysis, and investment opportunities in Pewter Valley Estates. Deep knowledge of Richmond American Homes construction, community-specific factors affecting property values, and resale market dynamics that generalist agents cannot match.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Current Listings (Sold Properties Style) -->
  <section class="listings-section">
    <div class="container">
      <div class="section-header custom-header">
        <span class="section-overline">Available Properties</span>
        <h2>Pewter Valley Estates Featured Listings</h2>
        <p>Discover exceptional resale homes in Pewter Valley Estates, Southwest Las Vegas's premier master-planned community. Dr. Jan Duffy provides expert representation for buyers and sellers in zip code 89183.</p>
      </div>
      
      <!-- Reusing the RealScout Listings Component -->
      <div class="listings-wrapper">
        <RealScoutListings />
      </div>
      
      <div class="listings-cta">
        <a href="/listings" class="btn btn-dark">View All Properties</a>
      </div>
    </div>
  </section>

  <!-- Service Areas Section -->
  <section class="service-areas-section">
    <div class="container">
      <div class="section-header">
        <span class="section-overline">Service Areas</span>
        <h2>Southwest Las Vegas Service Areas</h2>
        <p class="lead">While Dr. Jan Duffy specializes in Pewter Valley Estates, she serves clients throughout Southwest Las Vegas, providing expert real estate services across multiple communities in zip code 89183 and surrounding areas.</p>
      </div>

      <h3>Primary Focus: Pewter Valley Estates</h3>
      <p>
        Dr. Jan Duffy's primary specialization is Pewter Valley Estates, a Richmond American Homes community located at Pyle Avenue and S Rancho Destino Rd in zip code 89183. This specialized focus ensures clients receive expert guidance informed by deep community knowledge, extensive resale market experience, and comprehensive understanding of factors affecting property values and transactions in this specific community.
      </p>
      <p>
        Specialization in Pewter Valley Estates means understanding every floor plan, lot location characteristic, market trend, and transaction nuance specific to this community. This expertise extends beyond basic property information to include builder-specific knowledge, community history, resale market dynamics, and factors affecting long-term value and investment potential. Clients benefit from this specialized knowledge whether buying, selling, or investing in Pewter Valley Estates.
      </p>

      <h3>Southwest Las Vegas Coverage</h3>
      <p>
        While Pewter Valley Estates is the primary focus, Dr. Jan Duffy serves clients throughout Southwest Las Vegas, providing expert real estate services across multiple communities and neighborhoods. This broader coverage ensures clients receive professional representation regardless of which Southwest Las Vegas communities they're considering for purchases or sales. The combination of specialized Pewter Valley Estates expertise and broader Southwest Las Vegas knowledge provides comprehensive real estate services.
      </p>
      <p>
        Southwest Las Vegas coverage includes understanding market dynamics across different communities, comparing opportunities, and providing guidance that helps clients make informed decisions about community selection and property purchases. This comparative knowledge helps buyers evaluate options and helps sellers understand competitive positioning relative to broader Southwest Las Vegas markets.
      </p>

      <h3>Extended Service Areas</h3>
      <p>
        Dr. Jan Duffy's service areas extend to include Las Vegas, Henderson, Summerlin, Green Valley, Anthem, Inspirada, Mountain's Edge, Silverado Ranch, and other Las Vegas Valley communities. While specialized expertise focuses on Pewter Valley Estates, professional real estate services are available throughout the Las Vegas metropolitan area, ensuring clients receive expert representation regardless of location.
      </p>
      
      <div class="neighborhoods-grid">
        {#each serviceAreas as area}
          <a href="/neighborhood" class="neighborhood-card">
            <span class="neighborhood-name">{area}</span>
            <span class="arrow">→</span>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <!-- Reviews Section -->
  <section class="reviews-section">
    <GoogleReviews showSchema={false} />
  </section>

  <!-- Final CTA -->
  <section class="final-cta">
    <div class="container">
      <div class="cta-box">
        <h2>Ready to Start Your Journey?</h2>
        <p>Schedule a complimentary consultation with Dr. Jan Duffy today.</p>
        <div class="cta-buttons">
          <a href="/contact" class="btn btn-primary">Contact Me</a>
          <a href={`tel:${SITE_CONFIG.phoneTel}`} class="btn btn-outline-light">Call Now</a>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  :global(body) {
    font-family: 'Nunito Sans', sans-serif;
    color: #333;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Typography Helper */
  .section-overline {
    display: block;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #fbbf24; /* Gold */
    font-weight: 700;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2.5rem;
    color: #0A2540;
    margin-bottom: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
  }

  /* Hero Section */
  .hero-section {
    position: relative;
    background-color: #0A2540;
    color: white;
    padding: 6rem 0;
    overflow: hidden;
  }

  .hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 2;
  }

  .hero-content {
    padding-right: 2rem;
  }

  .hero-title {
    font-size: 4.5rem;
    font-weight: 800;
    line-height: 1;
    margin-bottom: 0.5rem;
    letter-spacing: -1px;
    text-transform: uppercase;
  }

  .hero-subtitle {
    font-size: 1.5rem;
    color: #e2e8f0;
    font-weight: 300;
    margin-bottom: 2rem;
    letter-spacing: 1px;
  }

  .hero-separator {
    width: 80px;
    height: 4px;
    background-color: #fbbf24;
    margin-bottom: 2rem;
  }

  .hero-tagline {
    font-size: 1.25rem;
    line-height: 1.6;
    margin-bottom: 3rem;
    color: #cbd5e1;
    max-width: 500px;
  }

  .hero-actions {
    display: flex;
    gap: 1.5rem;
  }

  .hero-image-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .hero-headshot {
    width: 100%;
    max-width: 450px;
    height: auto;
    border-radius: 4px;
    box-shadow: 20px 20px 0 rgba(251, 191, 36, 0.2); /* Gold shadow offset */
    filter: grayscale(100%); /* Artistic touch */
    transition: filter 0.3s ease;
  }

  .hero-headshot:hover {
    filter: grayscale(0%);
  }

  /* Stats Section */
  .stats-section {
    background-color: #f8fafc;
    padding: 3rem 0;
    border-bottom: 1px solid #e2e8f0;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    text-align: center;
  }

  .stat-value {
    display: block;
    font-size: 2.5rem;
    font-weight: 800;
    color: #0A2540;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #64748b;
    font-weight: 600;
  }

  /* Bio Section */
  .bio-section {
    padding: 6rem 0;
    background: white;
  }

  .bio-grid {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 5rem;
  }

  .bio-text p {
    font-size: 1.125rem;
    line-height: 1.8;
    color: #4b5563;
    margin-bottom: 1.5rem;
  }

  .bio-features {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .feature-card {
    background: #f8fbff;
    padding: 2rem;
    border-left: 4px solid #0A2540;
    transition: transform 0.2s ease;
  }
  
  .feature-card:hover {
    transform: translateX(5px);
    border-left-color: #fbbf24;
  }

  .feature-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
    display: block;
  }

  .feature-card h3 {
    font-size: 1.25rem;
    color: #0A2540;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  .contact-card {
    margin-top: 3rem;
    padding: 2rem;
    background: #0A2540;
    color: white;
    border-radius: 8px;
  }

  .contact-card h3 {
    color: white;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  .contact-actions {
    display: flex;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  .contact-link {
    color: #fbbf24;
    text-decoration: none;
    font-weight: 600;
  }

  .contact-link:hover {
    text-decoration: underline;
  }

  /* Listings Section */
  .listings-section {
    padding: 6rem 0;
    background-color: #f1f5f9;
  }

  .section-header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 4rem;
  }

  .section-header p {
    font-size: 1.25rem;
    color: #64748b;
  }
  
  /* CSS Hacks for RealScout Widget inside this page */
  :global(.listings-wrapper .realscout-section) {
    padding: 0 !important;
    background: transparent !important;
  }
  
  :global(.listings-wrapper .section-header) {
    display: none !important;
  }
  
  :global(.listings-wrapper .container) {
    padding: 0 !important;
    max-width: 100% !important;
  }
  
  :global(.listings-wrapper .realscout-container) {
    box-shadow: none !important;
    background: transparent !important;
    padding: 0 !important;
  }

  .listings-cta {
    text-align: center;
    margin-top: 3rem;
  }

  /* Service Areas */
  .service-areas-section {
    padding: 6rem 0;
    background: white;
  }

  .service-areas-section .lead {
    font-size: 1.25rem;
    color: #374151;
    line-height: 1.8;
    margin-bottom: 2rem;
    font-weight: 500;
    text-align: center;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  .service-areas-section h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .service-areas-section p {
    color: #374151;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
  }

  .neighborhoods-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .neighborhood-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    text-decoration: none;
    color: #0A2540;
    transition: all 0.2s ease;
  }

  .neighborhood-card:hover {
    background: #0A2540;
    color: white;
    border-color: #0A2540;
    transform: translateY(-2px);
  }

  .neighborhood-name {
    font-weight: 600;
  }

  /* Buttons */
  .btn {
    display: inline-block;
    padding: 1rem 2rem;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  .btn-primary {
    background-color: #fbbf24;
    color: #0A2540;
    border: 2px solid #fbbf24;
  }

  .btn-primary:hover {
    background-color: #f59e0b;
    border-color: #f59e0b;
  }

  .btn-outline {
    background-color: transparent;
    color: white;
    border: 2px solid white;
  }

  .btn-outline:hover {
    background-color: white;
    color: #0A2540;
  }

  .btn-dark {
    background-color: #0A2540;
    color: white;
    border: 2px solid #0A2540;
  }
  
  .btn-dark:hover {
    background-color: #1e3a8a;
    border-color: #1e3a8a;
  }
  
  .btn-outline-light {
    border: 2px solid #0A2540;
    color: #0A2540;
    background: transparent;
  }
  
  .btn-outline-light:hover {
    background: #0A2540;
    color: white;
  }

  /* Final CTA */
  .final-cta {
    padding: 6rem 0;
    background: #f8fafc;
  }
  
  .cta-box {
    background: white;
    padding: 4rem;
    text-align: center;
    border: 1px solid #e2e8f0;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    max-width: 900px;
    margin: 0 auto;
  }
  
  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  /* Responsive */
  @media (max-width: 968px) {
    .hero-container {
      grid-template-columns: 1fr;
      text-align: center;
    }
    
    .hero-content {
      padding-right: 0;
      order: 2;
    }
    
    .hero-image-wrapper {
      order: 1;
      margin-bottom: 2rem;
    }
    
    .hero-separator {
      margin: 0 auto 2rem;
    }
    
    .hero-actions {
      justify-content: center;
    }
    
    .bio-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .hero-title {
      font-size: 3rem;
    }
    
    .stats-grid {
      grid-template-columns: 1fr;
    }
    
    .neighborhoods-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
