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
  import StickyContactButton from "$lib/StickyContactButton.svelte"
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
  
  function handleCtaClick(action, type) {
    trackEvent("homepage_cta_click", {
      action,
      type, // "buyer" | "seller"
      location: "hero"
    })
  }
  
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
  <!-- Conversion-Focused Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>Find Your Dream Home or Sell Fast in Pewter Valley Estates</h1>
        <p class="hero-subtitle">Southwest Las Vegas's #1 Real Estate Expert | Zip Code 89183</p>
        
        <!-- Split Buyer/Seller Path -->
        <div class="buyer-seller-split">
          <div class="path-card buyer-path">
            <div class="path-icon">🏠</div>
            <h2>I Want to Buy a Home</h2>
            <p class="path-description">Get instant access to all available homes in Pewter Valley Estates. Expert guidance from search to closing.</p>
            <ul class="path-benefits">
              <li>✓ Access to all MLS listings</li>
              <li>✓ Free home search & alerts</li>
              <li>✓ Expert negotiation</li>
              <li>✓ Full buyer representation</li>
            </ul>
            <div class="path-ctas">
              <a href="/homes-for-sale" class="cta-primary" on:click={() => handleCtaClick('view_homes', 'buyer')}>
                View Available Homes
              </a>
              <a href="tel:{SITE_CONFIG.phoneTel}" class="cta-phone" on:click={() => handleCtaClick('phone', 'buyer')}>
                📞 Call {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
          
          <div class="path-card seller-path">
            <div class="path-icon">💰</div>
            <h2>I Want to Sell My Home</h2>
            <p class="path-description">Get a free home valuation and expert marketing to sell faster and for more money.</p>
            <ul class="path-benefits">
              <li>✓ Free home valuation</li>
              <li>✓ Professional marketing</li>
              <li>✓ Expert pricing strategy</li>
              <li>✓ Faster sales, higher prices</li>
            </ul>
            <div class="path-ctas">
              <a href="/home-valuation" class="cta-primary" on:click={() => handleCtaClick('valuation', 'seller')}>
                Get Free Valuation
              </a>
              <a href="tel:{SITE_CONFIG.phoneTel}" class="cta-phone" on:click={() => handleCtaClick('phone', 'seller')}>
                📞 Call {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
        
        <!-- Trust Signals -->
        <div class="trust-signals">
          <div class="trust-item">
            <strong>100+</strong>
            <span>Homes Sold</span>
          </div>
          <div class="trust-item">
            <strong>24hr</strong>
            <span>Response Time</span>
          </div>
          <div class="trust-item">
            <strong>5★</strong>
            <span>Google Rating</span>
          </div>
          <div class="trust-item">
            <strong>Free</strong>
            <span>Consultation</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Quick Lead Capture Above the Fold -->
  <section class="quick-lead">
    <div class="container">
      <div class="lead-grid">
        <div class="lead-form-card">
          <h3>Get Instant Access to New Listings</h3>
          <p>Be the first to know when new homes hit the market</p>
          <LeadCaptureForm 
            formType="buyer"
            title=""
            subtitle=""
          />
        </div>
        
        <div class="lead-form-card">
          <h3>Get Your Home's Value Instantly</h3>
          <p>See what your home is worth in today's market</p>
          <LeadCaptureForm 
            formType="valuation"
            title=""
            subtitle=""
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Section - Conversion Focused -->
  <section class="why-choose">
    <div class="container">
      <h2>Why Dr. Jan Duffy is Southwest Las Vegas's #1 Real Estate Expert</h2>
      
      <div class="expertise-grid">
        <div class="expertise-card">
          <div class="expertise-icon">🎯</div>
          <h3>Hyperlocal Specialist</h3>
          <p>Exclusive focus on Pewter Valley Estates means deep knowledge of every street, floor plan, and market trend. This expertise translates to better deals and faster transactions.</p>
        </div>
        
        <div class="expertise-card">
          <div class="expertise-icon">⚡</div>
          <h3>Fast Response Time</h3>
          <p>24-hour response guarantee. When homes move fast, you need an agent who moves faster. Get instant updates on new listings and offers.</p>
        </div>
        
        <div class="expertise-card">
          <div class="expertise-icon">📊</div>
          <h3>Data-Driven Pricing</h3>
          <p>Advanced market analysis ensures you buy at the right price or sell for maximum value. No guesswork, just proven results.</p>
        </div>
        
        <div class="expertise-card">
          <div class="expertise-icon">🤝</div>
          <h3>Full-Service Support</h3>
          <p>From search to closing, every step handled professionally. Professional photography, staging, negotiation, and transaction management included.</p>
        </div>
      </div>
      
      <div class="content-grid">
        <div class="content-main">
          <NAPDisplay showGoogleReviewsLink={true} showDirections={true} />
          
          <h3>Pewter Valley Estates: Your Next Home Awaits</h3>
          <p>
            Located at Pyle Avenue and S Rancho Destino Rd in zip code 89183, Pewter Valley Estates offers ranch-style homes from 1,950-2,240 sq ft with 3-4 bedrooms. Built by Richmond American Homes, this sold-out community is now in the resale phase, offering exceptional opportunities for buyers and sellers.
          </p>
          
          <h3>What Makes This Community Special</h3>
          <p>
            Family-friendly environment, proximity to parks (Somerset Hills Park, Goett Family Park), easy I-15 access, and quiet residential streets. Perfect for first-time buyers, growing families, and those seeking single-story living.
          </p>
        </div>
        
        <aside class="content-sidebar">
          <div class="quick-stats">
            <h3>Community Quick Facts</h3>
            <ul>
              <li><strong>Location:</strong> Pyle Ave & S Rancho Destino Rd</li>
              <li><strong>Zip Code:</strong> 89183</li>
              <li><strong>Builder:</strong> Richmond American Homes</li>
              <li><strong>Home Styles:</strong> Ranch-style, Single-story</li>
              <li><strong>Square Footage:</strong> 1,950-2,240 sq ft</li>
              <li><strong>Bedrooms:</strong> 3-4</li>
              <li><strong>Price Range:</strong> $450,000-$650,000</li>
              <li><strong>Market Status:</strong> Resale</li>
            </ul>
          </div>
          
          <div class="cta-box">
            <h3>Ready to Get Started?</h3>
            <a href="tel:{SITE_CONFIG.phoneTel}" class="cta-button-phone">
              📞 Call {SITE_CONFIG.phone}
            </a>
            <a href="/contact" class="cta-button-secondary">
              Schedule Consultation
            </a>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <!-- Current Listings - Conversion Focused -->
  <section class="listings-market">
    <div class="container">
      <div class="section-header">
        <h2>Homes Available Now in Pewter Valley Estates</h2>
        <p class="section-subtitle">New listings added daily. Get instant alerts when homes match your criteria.</p>
      </div>
      
      <div class="market-cta-box">
        <div class="market-info">
          <h3>Current Market Overview</h3>
          <p>Active resale listings range from $450,000 to $650,000. Homes move fast in this desirable community. Don't miss out on your dream home.</p>
          <ul class="market-features">
            <li>✓ Real-time MLS access</li>
            <li>✓ Instant listing alerts</li>
            <li>✓ Expert market analysis</li>
            <li>✓ Priority showing access</li>
          </ul>
        </div>
        
        <div class="market-cta">
          <a href="/homes-for-sale" class="cta-large">
            View All Available Homes
          </a>
          <a href="tel:{SITE_CONFIG.phoneTel}" class="cta-large-secondary">
            📞 Call to Schedule Tour
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Services - Buyer/Seller Focused -->
  <section class="services">
    <div class="container">
      <h2>Complete Real Estate Services for Buyers & Sellers</h2>
      
      <div class="services-split">
        <div class="services-column buyer-services">
          <h3>For Home Buyers</h3>
          <div class="service-list">
            <div class="service-item">
              <span class="check">✓</span>
              <div>
                <strong>Free Home Search & Alerts</strong>
                <p>Get instant notifications when new homes match your criteria</p>
              </div>
            </div>
            <div class="service-item">
              <span class="check">✓</span>
              <div>
                <strong>Expert Negotiation</strong>
                <p>Save thousands with proven negotiation strategies</p>
              </div>
            </div>
            <div class="service-item">
              <span class="check">✓</span>
              <div>
                <strong>Full Buyer Representation</strong>
                <p>From search to closing, we handle everything</p>
              </div>
            </div>
            <div class="service-item">
              <span class="check">✓</span>
              <div>
                <strong>Priority Showing Access</strong>
                <p>See homes before they hit the market</p>
              </div>
            </div>
          </div>
          <a href="/buy-a-home" class="service-cta">Start Your Home Search →</a>
        </div>
        
        <div class="services-column seller-services">
          <h3>For Home Sellers</h3>
          <div class="service-list">
            <div class="service-item">
              <span class="check">✓</span>
              <div>
                <strong>Free Home Valuation</strong>
                <p>Know your home's true market value instantly</p>
              </div>
            </div>
            <div class="service-item">
              <span class="check">✓</span>
              <div>
                <strong>Professional Marketing</strong>
                <p>Professional photos, staging, and multi-channel promotion</p>
              </div>
            </div>
            <div class="service-item">
              <span class="check">✓</span>
              <div>
                <strong>Strategic Pricing</strong>
                <p>Data-driven pricing to sell faster for more money</p>
              </div>
            </div>
            <div class="service-item">
              <span class="check">✓</span>
              <div>
                <strong>Faster Sales</strong>
                <p>Average 30% faster than market average</p>
              </div>
            </div>
          </div>
          <a href="/sell-your-home" class="service-cta">Get Your Free Valuation →</a>
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

  <!-- Final CTA Section -->
  <section class="final-cta">
    <div class="container">
      <h2>Ready to Buy or Sell in Pewter Valley Estates?</h2>
      <p class="cta-subtitle">Get expert guidance from Southwest Las Vegas's #1 real estate specialist</p>
      
      <div class="final-cta-buttons">
        <a href="tel:{SITE_CONFIG.phoneTel}" class="cta-mega phone">
          📞 Call {SITE_CONFIG.phone}
        </a>
        <a href="/contact" class="cta-mega email">
          ✉️ Get in Touch
        </a>
        <a href="/home-valuation" class="cta-mega valuation">
          💰 Free Home Valuation
        </a>
      </div>
      
      <p class="cta-guarantee">✓ 24-Hour Response Guarantee | ✓ Free Consultation | ✓ No Obligation</p>
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

  <!-- Sticky Contact Button (Mobile) -->
  <StickyContactButton />
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
  
  /* Hero Section - Conversion Focused */
  .hero {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    color: white;
    padding: 3rem 0 4rem;
    text-align: center;
  }
  
  .hero-content h1 {
    font-size: 2.75rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    line-height: 1.2;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    color: #fbbf24;
    margin-bottom: 2.5rem;
    font-weight: 600;
  }
  
  /* Buyer/Seller Split */
  .buyer-seller-split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto 3rem;
  }
  
  .path-card {
    background: white;
    color: #1e3a8a;
    padding: 2.5rem;
    border-radius: 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .path-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }
  
  .path-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .path-card h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1e3a8a;
  }
  
  .path-description {
    color: #64748b;
    margin-bottom: 1.5rem;
    line-height: 1.6;
    font-size: 1rem;
  }
  
  .path-benefits {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem 0;
    text-align: left;
  }
  
  .path-benefits li {
    padding: 0.5rem 0;
    color: #374151;
    font-size: 0.95rem;
  }
  
  .path-ctas {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .cta-primary {
    display: block;
    padding: 1rem 1.5rem;
    background: #1e3a8a;
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 1.125rem;
    text-align: center;
    transition: all 0.3s ease;
  }
  
  .cta-primary:hover {
    background: #1e40af;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  .cta-phone {
    display: block;
    padding: 0.875rem 1.5rem;
    background: #16B286;
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
    transition: all 0.3s ease;
  }
  
  .cta-phone:hover {
    background: #0D8A5B;
    transform: translateY(-2px);
  }
  
  /* Trust Signals */
  .trust-signals {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-top: 2rem;
    flex-wrap: wrap;
  }
  
  .trust-item {
    text-align: center;
  }
  
  .trust-item strong {
    display: block;
    font-size: 2rem;
    font-weight: 800;
    color: #fbbf24;
    margin-bottom: 0.25rem;
  }
  
  .trust-item span {
    display: block;
    font-size: 0.875rem;
    opacity: 0.9;
  }
  
  /* Quick Lead Capture */
  .quick-lead {
    padding: 3rem 0;
    background: #f8fafc;
  }
  
  .lead-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  .lead-form-card {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .lead-form-card h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 0.5rem;
  }
  
  .lead-form-card p {
    color: #64748b;
    margin-bottom: 1.5rem;
    font-size: 1rem;
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
    margin-bottom: 3rem;
    text-align: center;
  }
  
  /* Expertise Grid */
  .expertise-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-bottom: 4rem;
  }
  
  .expertise-card {
    text-align: center;
    padding: 1.5rem;
  }
  
  .expertise-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .expertise-card h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 0.75rem;
  }
  
  .expertise-card p {
    color: #64748b;
    line-height: 1.6;
    font-size: 0.95rem;
  }
  
  .cta-box {
    background: #f8fafc;
    padding: 2rem;
    border-radius: 1rem;
    margin-top: 2rem;
    text-align: center;
  }
  
  .cta-box h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 1.5rem;
  }
  
  .cta-button-phone,
  .cta-button-secondary {
    display: block;
    width: 100%;
    padding: 1rem;
    margin-bottom: 0.75rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
  }
  
  .cta-button-phone {
    background: #16B286;
    color: white;
  }
  
  .cta-button-phone:hover {
    background: #0D8A5B;
    transform: translateY(-2px);
  }
  
  .cta-button-secondary {
    background: #1e3a8a;
    color: white;
  }
  
  .cta-button-secondary:hover {
    background: #1e40af;
    transform: translateY(-2px);
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
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
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
  }
  
  .section-subtitle {
    font-size: 1.125rem;
    color: #64748b;
  }
  
  .market-cta-box {
    background: white;
    padding: 3rem;
    border-radius: 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 3rem;
    align-items: center;
  }
  
  .market-info h3 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 1rem;
  }
  
  .market-info p {
    color: #374151;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
  }
  
  .market-features {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .market-features li {
    padding: 0.5rem 0;
    color: #374151;
    font-size: 1rem;
  }
  
  .market-cta {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .cta-large,
  .cta-large-secondary {
    display: block;
    padding: 1.25rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.125rem;
    text-align: center;
    transition: all 0.3s ease;
  }
  
  .cta-large {
    background: #1e3a8a;
    color: white;
  }
  
  .cta-large:hover {
    background: #1e40af;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 58, 138, 0.4);
  }
  
  .cta-large-secondary {
    background: #16B286;
    color: white;
  }
  
  .cta-large-secondary:hover {
    background: #0D8A5B;
    transform: translateY(-2px);
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
  
  .services-split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .services-column {
    background: #f8fafc;
    padding: 2.5rem;
    border-radius: 1rem;
    border-top: 4px solid;
  }
  
  .buyer-services {
    border-top-color: #16B286;
  }
  
  .seller-services {
    border-top-color: #1e3a8a;
  }
  
  .services-column h3 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 2rem;
  }
  
  .service-list {
    margin-bottom: 2rem;
  }
  
  .service-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    align-items: flex-start;
  }
  
  .service-item .check {
    color: #16B286;
    font-size: 1.5rem;
    font-weight: 700;
    flex-shrink: 0;
  }
  
  .service-item strong {
    display: block;
    color: #1e3a8a;
    font-size: 1.125rem;
    margin-bottom: 0.25rem;
  }
  
  .service-item p {
    color: #64748b;
    font-size: 0.95rem;
    margin: 0;
    line-height: 1.5;
  }
  
  .service-cta {
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
  
  .service-cta:hover {
    background: #1e40af;
    transform: translateY(-2px);
  }
  
  .seller-services .service-cta {
    background: #16B286;
  }
  
  .seller-services .service-cta:hover {
    background: #0D8A5B;
  }
  
  /* Reviews Section */
  .reviews-section {
    padding: 0;
  }
  
  /* Map Section */
  .map-section {
    padding: 0;
  }
  
  /* Final CTA Section */
  .final-cta {
    padding: 4rem 0;
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    color: white;
    text-align: center;
  }
  
  .final-cta h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .cta-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
    opacity: 0.95;
  }
  
  .final-cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }
  
  .cta-mega {
    display: inline-block;
    padding: 1.25rem 2.5rem;
    background: white;
    color: #1e3a8a;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 700;
    font-size: 1.125rem;
    transition: all 0.3s ease;
  }
  
  .cta-mega:hover {
    background: #f8fafc;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  
  .cta-mega.phone {
    background: #16B286;
    color: white;
  }
  
  .cta-mega.phone:hover {
    background: #0D8A5B;
  }
  
  .cta-guarantee {
    font-size: 1rem;
    opacity: 0.9;
    margin-top: 1rem;
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
    
    .expertise-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .services-split {
      grid-template-columns: 1fr;
    }
    
    .buyer-seller-split {
      grid-template-columns: 1fr;
    }
    
    .lead-grid {
      grid-template-columns: 1fr;
    }
    
    .market-cta-box {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2rem;
    }
    
    .hero-subtitle {
      font-size: 1.125rem;
    }
    
    .why-choose h2,
    .listings-market h2,
    .services h2,
    .final-cta h2 {
      font-size: 2rem;
    }
    
    .expertise-grid {
      grid-template-columns: 1fr;
    }
    
    .trust-signals {
      gap: 2rem;
    }
    
    .final-cta-buttons {
      flex-direction: column;
    }
    
    .cta-mega {
      width: 100%;
    }
    
    .path-card {
      padding: 2rem 1.5rem;
    }
  }
</style>
