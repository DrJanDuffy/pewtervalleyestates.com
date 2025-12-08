<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import SEOHead from "$lib/SEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import NAPDisplay from "$lib/NAPDisplay.svelte"
  import GoogleReviews from "$lib/GoogleReviews.svelte"
  import GoogleMap from "$lib/GoogleMap.svelte"
  import CTABanner from "$lib/CTABanner.svelte"
  import LeadCaptureForm from "$lib/LeadCaptureForm.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"
  
  // SEO data for homepage - optimized for "Pewter Valley Estates" + "Dr. Jan Duffy"
  const pageData = {
    title: "Pewter Valley Estates Real Estate | Buy, Sell & Invest with Dr. Jan Duffy",
    description: `Expert real estate services for Pewter Valley Estates in Southwest Las Vegas (89183). Dr. Jan Duffy specializes in resale homes, market analysis, and investment properties. Call ${SITE_CONFIG.phone}.`,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    type: "website",
    canonical: SITE_CONFIG.url,
    keywords: "Pewter Valley Estates, Dr. Jan Duffy realtor, Southwest Las Vegas homes, 89183 real estate, Pyle Avenue homes, S Rancho Destino Rd properties",
  }
  
  const breadcrumbs = [
    { name: "Home", url: SITE_CONFIG.url }
  ]
  
  const faqData = [
    {
      question: "What is Pewter Valley Estates?",
      answer: `Pewter Valley Estates is a sold-out master-planned community in Southwest Las Vegas (zip code 89183), located at the intersection of Pyle Avenue and S Rancho Destino Rd. Built by Richmond American Homes, the community features ranch-style homes ranging from 1,950 to 2,240 square feet with 3-4 bedrooms. The community is now in the resale market phase.`,
    },
    {
      question: "Who is Dr. Jan Duffy?",
      answer: "Dr. Jan Duffy is a specialized real estate agent focusing exclusively on Pewter Valley Estates and Southwest Las Vegas properties. With deep local market knowledge and expertise in resale transactions, market analysis, and investment properties, Dr. Jan Duffy helps buyers, sellers, and investors navigate the unique dynamics of this community.",
    },
    {
      question: "What types of homes are available in Pewter Valley Estates?",
      answer: `Pewter Valley Estates features ranch-style, single-story homes built by Richmond American Homes. Homes range from 1,950 to 2,240 square feet with 3-4 bedrooms. All homes feature modern floor plans, energy-efficient designs, and are situated on well-maintained lots in a quiet, family-friendly environment.`,
    },
    {
      question: "Where is Pewter Valley Estates located?",
      answer: `Pewter Valley Estates is located in Southwest Las Vegas at the intersection of Pyle Avenue and S Rancho Destino Rd, zip code 89183. The community offers easy access to I-15 and Las Vegas Boulevard, while maintaining a peaceful, rural-urban balance. Nearby amenities include Somerset Hills Park, Goett Family Park, Jimmy Pettyjohn Jr. Park, and the Southern Highlands Golf Club.`,
    },
    {
      question: "How can I buy or sell a home in Pewter Valley Estates?",
      answer: `Contact Dr. Jan Duffy at ${SITE_CONFIG.phone} for expert representation in buying or selling Pewter Valley Estates properties. Dr. Jan Duffy provides comprehensive services including market analysis, home valuations, buyer representation, seller marketing, and investment property consultation.`,
    },
  ]
  
  onMount(() => {
    trackEvent("page_view", {
      page_title: "Homepage",
      page_location: window.location.href,
    })
  })
</script>

<svelte:head>
  <title>{pageData.title}</title>
  <meta name="description" content={pageData.description} />
  <meta name="keywords" content={pageData.keywords} />
</svelte:head>

<SEOHead 
  {pageData} 
  includeLocalBusiness={true} 
  includeRealEstate={true} 
  includeFAQ={true} 
  {faqData} 
/>

<Breadcrumbs {breadcrumbs} />

<main class="homepage">
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>Pewter Valley Estates Real Estate | Buy, Sell & Invest with Dr. Jan Duffy</h1>
        <p class="hero-subtitle">Southwest Las Vegas's Premier Real Estate Expert | Zip Code 89183</p>
        <p class="hero-description">
          Specializing exclusively in Pewter Valley Estates and Southwest Las Vegas real estate, Dr. Jan Duffy provides expert guidance for buyers, sellers, and investors. Located at Pyle Avenue and S Rancho Destino Rd, this sold-out Richmond American Homes community offers exceptional resale opportunities in a family-friendly environment.
        </p>
        <div class="hero-ctas">
          <a href="/homes-for-sale" class="cta-primary">View Homes for Sale</a>
          <a href="/contact" class="cta-secondary">Contact Dr. Jan Duffy</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Dr. Jan Duffy Section -->
  <section class="why-choose">
    <div class="container">
      <h2>Why Choose Dr. Jan Duffy for Pewter Valley Estates Homes</h2>
      
      <div class="content-grid">
        <div class="content-main">
          <p class="lead">
            As the leading real estate specialist for Pewter Valley Estates in Southwest Las Vegas, Dr. Jan Duffy brings unparalleled local expertise, market knowledge, and personalized service to every transaction. Whether you're buying your first home, selling to upgrade, or investing in rental properties, Dr. Jan Duffy's deep understanding of this unique community ensures optimal results.
          </p>
          
          <h3>Hyperlocal Market Expertise</h3>
          <p>
            Dr. Jan Duffy's specialization in Pewter Valley Estates means you're working with an agent who knows every street, every floor plan variation, and every market nuance. From understanding the premium value of homes near Somerset Hills Park to recognizing investment opportunities in the resale market, this hyperlocal focus translates to better pricing, faster sales, and smarter purchases.
          </p>
          
          <h3>Comprehensive Service Portfolio</h3>
          <p>
            Dr. Jan Duffy offers full-service real estate representation including buyer agency, seller marketing, home valuations, market analysis, and investment property consultation. For sellers, services include professional photography, staging recommendations, comparative market analysis (CMA), and strategic pricing. For buyers, expect pre-approval guidance, property search, negotiation expertise, and transaction management.
          </p>
          
          <h3>Resale Market Specialization</h3>
          <p>
            With Pewter Valley Estates now in the resale phase, Dr. Jan Duffy understands the unique dynamics of this transition. Unlike new construction sales, resale transactions require expertise in condition assessment, comparable sales analysis, and understanding how original builder features impact value. This specialization ensures accurate pricing and smooth transactions.
          </p>
          
          <h3>Investment Property Expertise</h3>
          <p>
            For investors, Dr. Jan Duffy provides cash flow analysis, cap rate calculations, rental market insights, and 1031 exchange guidance. Understanding the rental demand in zip code 89183, proximity to employment centers, and long-term appreciation potential helps investors make data-driven decisions.
          </p>
        </div>
        
        <aside class="content-sidebar">
          <NAPDisplay showGoogleReviewsLink={true} showDirections={true} />
          <div class="quick-stats">
            <h3>Quick Facts</h3>
            <ul>
              <li><strong>Location:</strong> Pyle Ave & S Rancho Destino Rd</li>
              <li><strong>Zip Code:</strong> 89183</li>
              <li><strong>Builder:</strong> Richmond American Homes</li>
              <li><strong>Home Styles:</strong> Ranch-style, Single-story</li>
              <li><strong>Square Footage:</strong> 1,950-2,240 sq ft</li>
              <li><strong>Bedrooms:</strong> 3-4</li>
              <li><strong>Market Status:</strong> Resale</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <!-- Current Listings & Market Status -->
  <section class="listings-market">
    <div class="container">
      <h2>Current Pewter Valley Estates Listings & Market Status</h2>
      
      <div class="market-overview">
        <p class="lead">
          The Pewter Valley Estates resale market offers opportunities for buyers seeking quality ranch-style homes in Southwest Las Vegas. As a sold-out community, all available properties are resales, requiring specialized knowledge of condition, upgrades, and market positioning.
        </p>
        
        <h3>Active Resale Inventory</h3>
        <p>
          Current resale listings in Pewter Valley Estates typically range from $450,000 to $650,000, depending on square footage, condition, and location within the community. Homes closer to community amenities like parks and with premium lot locations command higher prices. Dr. Jan Duffy maintains up-to-date access to all MLS listings and can provide real-time inventory updates.
        </p>
        
        <h3>Market Dynamics & Pricing Trends</h3>
        <p>
          The transition from new construction to resale market creates unique pricing dynamics. Original purchase prices, builder upgrades, and subsequent owner improvements all factor into current valuations. Dr. Jan Duffy's market analysis includes tracking days on market (DOM), price per square foot trends, and absorption rates specific to Pewter Valley Estates.
        </p>
        
        <h3>Buyer Profile & Demand</h3>
        <p>
          Current buyers in Pewter Valley Estates include first-time homeowners attracted to the family-friendly environment, empty nesters seeking single-story living, and investors recognizing the rental potential. The zip code 89183 location offers proximity to employment centers while maintaining a quiet, residential atmosphere.
        </p>
        
        <div class="cta-inline">
          <a href="/homes-for-sale" class="cta-link">View All Current Listings →</a>
          <a href="/market-analysis" class="cta-link">See Market Analysis & Trends →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Southwest Las Vegas Location & Lifestyle -->
  <section class="location-lifestyle">
    <div class="container">
      <h2>Southwest Las Vegas: Location & Lifestyle Benefits</h2>
      
      <p class="lead">
        Pewter Valley Estates' location in Southwest Las Vegas (zip code 89183) offers the perfect balance of accessibility and tranquility. Situated at Pyle Avenue and S Rancho Destino Rd, residents enjoy easy access to major employment centers, shopping, dining, and entertainment while living in a quiet, family-oriented community.
      </p>
      
      <div class="lifestyle-grid">
        <div class="lifestyle-card">
          <h3>Prime Location & Accessibility</h3>
          <p>
            The intersection of Pyle Avenue and S Rancho Destino Rd provides excellent connectivity. I-15 access is just minutes away, making commutes to the Las Vegas Strip, downtown Las Vegas, and employment centers convenient. Las Vegas Boulevard proximity offers additional route options. This strategic location appeals to professionals working throughout the Las Vegas Valley.
          </p>
        </div>
        
        <div class="lifestyle-card">
          <h3>Community Parks & Recreation</h3>
          <p>
            Pewter Valley Estates residents enjoy proximity to multiple parks including Somerset Hills Park, Goett Family Park, and Jimmy Pettyjohn Jr. Park. These facilities offer playgrounds, sports courts, walking trails, and open spaces perfect for families. The South Point Skatepark provides additional recreational options for active residents.
          </p>
        </div>
        
        <div class="lifestyle-card">
          <h3>Dining & Shopping Convenience</h3>
          <p>
            Local dining options include Seasalt Sushi & Oyster, Rosati's, and PT's Gold, all within easy reach. Shopping centers along Las Vegas Boulevard and nearby retail developments provide everyday convenience. The rural-urban balance means you're close to amenities without sacrificing the quiet residential atmosphere.
          </p>
        </div>
        
        <div class="lifestyle-card">
          <h3>Golf & Leisure Activities</h3>
          <p>
            The Southern Highlands Golf Club is nearby, offering championship golf and social amenities. This proximity appeals to golf enthusiasts and those seeking an active lifestyle. The combination of community parks and nearby recreational facilities creates a well-rounded living environment.
          </p>
        </div>
      </div>
      
      <h3>Zip Code 89183: A Growing Southwest Las Vegas Community</h3>
      <p>
        Zip code 89183 represents one of Southwest Las Vegas's most desirable residential areas. The combination of newer construction, master-planned communities, and established infrastructure creates strong property values. Pewter Valley Estates benefits from this broader market strength while maintaining its unique community identity.
      </p>
      
      <h3>Family-Friendly Environment</h3>
      <p>
        The quiet streets, well-maintained common areas, and proximity to parks make Pewter Valley Estates ideal for families. The ranch-style, single-story homes appeal to families with young children and those planning for aging in place. The community's design emphasizes safety, walkability, and neighbor interaction.
      </p>
      
      <div class="cta-inline">
        <a href="/neighborhood-guide" class="cta-link">Explore Full Neighborhood Guide →</a>
        <a href="/southwest-las-vegas" class="cta-link">Learn About Southwest Las Vegas →</a>
      </div>
    </div>
  </section>

  <!-- Agent Bio Highlight -->
  <section class="agent-bio">
    <div class="container">
      <h2>Dr. Jan Duffy: Your Pewter Valley Estates Specialist</h2>
      
      <div class="bio-content">
        <div class="bio-text">
          <p class="lead">
            Dr. Jan Duffy has built a reputation as the go-to real estate expert for Pewter Valley Estates and Southwest Las Vegas. This specialization means every client benefits from deep market knowledge, established relationships, and proven transaction expertise.
          </p>
          
          <h3>Specialization Creates Results</h3>
          <p>
            Unlike generalist agents who serve broad geographic areas, Dr. Jan Duffy's focus on Pewter Valley Estates enables superior market insights. Understanding every floor plan, every street's characteristics, and every market trend specific to this community results in better outcomes for buyers and sellers.
          </p>
          
          <h3>Comprehensive Market Knowledge</h3>
          <p>
            From tracking resale inventory to analyzing price trends, Dr. Jan Duffy maintains comprehensive market intelligence. This includes understanding how original builder features impact resale value, which upgrades provide the best ROI, and what buyers are seeking in the current market.
          </p>
          
          <h3>Client-Focused Service</h3>
          <p>
            Every transaction receives personalized attention. For sellers, this means strategic pricing, professional marketing, and negotiation expertise. For buyers, expect property search, offer strategy, inspection guidance, and transaction management. For investors, receive cash flow analysis, market data, and investment guidance.
          </p>
        </div>
        
        <div class="bio-cta">
          <a href="/dr-jan-duffy" class="cta-button">Learn More About Dr. Jan Duffy</a>
          <a href="/contact" class="cta-button secondary">Schedule a Consultation</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Service Highlights -->
  <section class="services">
    <div class="container">
      <h2>Real Estate Services for Pewter Valley Estates</h2>
      
      <div class="services-grid">
        <div class="service-card">
          <h3>Buyer Representation</h3>
          <p>Expert guidance through the entire home buying process, from pre-approval to closing. Access to all MLS listings, property search, offer strategy, and negotiation.</p>
          <a href="/buy-a-home" class="service-link">Learn More →</a>
        </div>
        
        <div class="service-card">
          <h3>Seller Services</h3>
          <p>Comprehensive marketing, pricing strategy, professional photography, staging recommendations, and negotiation to maximize your home's value and minimize time on market.</p>
          <a href="/sell-your-home" class="service-link">Learn More →</a>
        </div>
        
        <div class="service-card">
          <h3>Home Valuations</h3>
          <p>Free, accurate home valuations using comparable sales analysis, condition assessment, and market data specific to Pewter Valley Estates and zip code 89183.</p>
          <a href="/home-valuation" class="service-link">Get Your Valuation →</a>
        </div>
        
        <div class="service-card">
          <h3>Investment Properties</h3>
          <p>Cash flow analysis, cap rate calculations, rental market insights, and 1031 exchange guidance for investors seeking properties in Southwest Las Vegas.</p>
          <a href="/investment-properties" class="service-link">Learn More →</a>
        </div>
        
        <div class="service-card">
          <h3>Market Analysis</h3>
          <p>Comprehensive market reports, price trends, inventory analysis, and demographic data to inform your real estate decisions in Pewter Valley Estates.</p>
          <a href="/market-analysis" class="service-link">View Market Data →</a>
        </div>
        
        <div class="service-card">
          <h3>Transaction Management</h3>
          <p>Full-service transaction coordination from contract to closing, ensuring smooth, timely transactions with attention to every detail.</p>
          <a href="/contact" class="service-link">Get Started →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Google Reviews -->
  <section class="reviews-section">
    <GoogleReviews />
  </section>

  <!-- Map Section -->
  <section class="map-section">
    <GoogleMap />
  </section>

  <!-- Lead Capture -->
  <section class="lead-section">
    <LeadCaptureForm 
      formType="general"
      title="Get Expert Real Estate Guidance"
      subtitle="Contact Dr. Jan Duffy for personalized service in Pewter Valley Estates"
    />
  </section>

  <!-- CTA Banner -->
  <CTABanner 
    variant="primary"
    showPhone={true}
    showEmail={true}
    showValuation={true}
    showTour={true}
  />
</main>

<style>
  .homepage {
    width: 100%;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  /* Hero Section */
  .hero {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    color: white;
    padding: 4rem 0;
    text-align: center;
  }
  
  .hero-content h1 {
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
    margin: 0 auto 2rem;
    line-height: 1.7;
    opacity: 0.95;
  }
  
  .hero-ctas {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .cta-primary,
  .cta-secondary {
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.125rem;
    transition: all 0.3s ease;
  }
  
  .cta-primary {
    background: white;
    color: #1e3a8a;
  }
  
  .cta-primary:hover {
    background: #f8fafc;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  .cta-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
  }
  
  .cta-secondary:hover {
    background: white;
    color: #1e3a8a;
  }
  
  /* Why Choose Section */
  .why-choose {
    padding: 4rem 0;
    background: white;
  }
  
  .why-choose h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .content-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    margin-top: 2rem;
  }
  
  .content-main .lead {
    font-size: 1.25rem;
    color: #374151;
    line-height: 1.8;
    margin-bottom: 2rem;
    font-weight: 500;
  }
  
  .content-main h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  .content-main p {
    color: #374151;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
  }
  
  .content-sidebar {
    position: sticky;
    top: 2rem;
    height: fit-content;
  }
  
  .quick-stats {
    background: #f8fafc;
    padding: 1.5rem;
    border-radius: 1rem;
    margin-top: 2rem;
  }
  
  .quick-stats h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-bottom: 1rem;
  }
  
  .quick-stats ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .quick-stats li {
    padding: 0.5rem 0;
    color: #374151;
    border-bottom: 1px solid #e2e8f0;
  }
  
  .quick-stats li:last-child {
    border-bottom: none;
  }
  
  .quick-stats strong {
    color: #1e3a8a;
  }
  
  /* Listings Market Section */
  .listings-market {
    padding: 4rem 0;
    background: #f8fafc;
  }
  
  .listings-market h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .market-overview .lead {
    font-size: 1.25rem;
    color: #374151;
    line-height: 1.8;
    margin-bottom: 2rem;
    font-weight: 500;
  }
  
  .market-overview h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  .market-overview p {
    color: #374151;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
  }
  
  .cta-inline {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    flex-wrap: wrap;
  }
  
  .cta-link {
    color: #1e3a8a;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.125rem;
    transition: color 0.3s ease;
  }
  
  .cta-link:hover {
    color: #1e40af;
    text-decoration: underline;
  }
  
  /* Location Lifestyle Section */
  .location-lifestyle {
    padding: 4rem 0;
    background: white;
  }
  
  .location-lifestyle h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .location-lifestyle .lead {
    font-size: 1.25rem;
    color: #374151;
    line-height: 1.8;
    margin-bottom: 2rem;
    font-weight: 500;
  }
  
  .lifestyle-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin: 2rem 0;
  }
  
  .lifestyle-card {
    background: #f8fafc;
    padding: 2rem;
    border-radius: 1rem;
  }
  
  .lifestyle-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-bottom: 1rem;
  }
  
  .lifestyle-card p {
    color: #374151;
    line-height: 1.8;
    font-size: 1.125rem;
  }
  
  .location-lifestyle h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  .location-lifestyle p {
    color: #374151;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
  }
  
  /* Agent Bio Section */
  .agent-bio {
    padding: 4rem 0;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  }
  
  .agent-bio h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .bio-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    align-items: start;
  }
  
  .bio-text .lead {
    font-size: 1.25rem;
    color: #374151;
    line-height: 1.8;
    margin-bottom: 2rem;
    font-weight: 500;
  }
  
  .bio-text h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  .bio-text p {
    color: #374151;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
  }
  
  .bio-cta {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .bio-cta .cta-button {
    display: block;
    padding: 1rem 1.5rem;
    background: #1e3a8a;
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
  }
  
  .bio-cta .cta-button:hover {
    background: #1e40af;
    transform: translateY(-2px);
  }
  
  .bio-cta .cta-button.secondary {
    background: white;
    color: #1e3a8a;
    border: 2px solid #1e3a8a;
  }
  
  .bio-cta .cta-button.secondary:hover {
    background: #f8fafc;
  }
  
  /* Services Section */
  .services {
    padding: 4rem 0;
    background: white;
  }
  
  .services h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 3rem;
    text-align: center;
  }
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  .service-card {
    background: #f8fafc;
    padding: 2rem;
    border-radius: 1rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
  
  .service-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-bottom: 1rem;
  }
  
  .service-card p {
    color: #374151;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
  }
  
  .service-link {
    color: #1e3a8a;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
  }
  
  .service-link:hover {
    color: #1e40af;
    text-decoration: underline;
  }
  
  /* Reviews Section */
  .reviews-section {
    padding: 0;
  }
  
  /* Map Section */
  .map-section {
    padding: 0;
  }
  
  /* Lead Section */
  .lead-section {
    padding: 0;
  }
  
  /* Responsive Design */
  @media (max-width: 968px) {
    .content-grid,
    .bio-content {
      grid-template-columns: 1fr;
    }
    
    .content-sidebar {
      position: static;
    }
    
    .lifestyle-grid {
      grid-template-columns: 1fr;
    }
    
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2rem;
    }
    
    .hero-subtitle {
      font-size: 1.25rem;
    }
    
    .why-choose h2,
    .listings-market h2,
    .location-lifestyle h2,
    .agent-bio h2,
    .services h2 {
      font-size: 2rem;
    }
    
    .services-grid {
      grid-template-columns: 1fr;
    }
    
    .hero-ctas {
      flex-direction: column;
    }
    
    .cta-primary,
    .cta-secondary {
      width: 100%;
      text-align: center;
    }
  }
</style>
