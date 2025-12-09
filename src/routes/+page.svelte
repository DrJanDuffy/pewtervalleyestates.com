<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import EnhancedSEOHead from "$lib/EnhancedSEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import NAPDisplay from "$lib/NAPDisplay.svelte"
  import GoogleReviews from "$lib/GoogleReviews.svelte"
  import GoogleMap from "$lib/GoogleMap.svelte"
  import LeadCaptureForm from "$lib/LeadCaptureForm.svelte"
  import StickyContactButton from "$lib/StickyContactButton.svelte"
  import HeroSection from "$lib/HeroSection.svelte"
  import FeaturesSection from "$lib/FeaturesSection.svelte"
  import TestimonialsSection from "$lib/TestimonialsSection.svelte"
  import CTASection from "$lib/CTASection.svelte"
  import Counter from "$lib/Counter.svelte"
  import RelatedPages from "$lib/RelatedPages.svelte"
  import RealScoutListings from "$lib/RealScoutListings.svelte"
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

<EnhancedSEOHead 
  {pageData} 
  {breadcrumbs}
  includeLocalBusiness={true} 
  includeRealEstate={true} 
  includeFAQ={true} 
  faqs={faqData} 
  showValidation={true}
/>

<main class="homepage">
  <!-- Primary Hero Section -->
  <HeroSection />

  <!-- Quick Lead Capture -->
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

  <!-- Buyer/Seller Pathways -->
  <section class="pathways">
    <div class="container">
      <h2 class="section-title">Choose Your Path</h2>
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
            <a href="/homes-for-sale" class="cta-primary" onclick={() => handleCtaClick('view_homes', 'buyer')}>
              View Available Homes
            </a>
            <a href={`tel:${SITE_CONFIG.phoneTel}`} class="cta-phone" onclick={() => handleCtaClick('phone', 'buyer')}>
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
            <a href="/home-valuation" class="cta-primary" onclick={() => handleCtaClick('valuation', 'seller')}>
              Get Free Valuation
            </a>
            <a href={`tel:${SITE_CONFIG.phoneTel}`} class="cta-phone" onclick={() => handleCtaClick('phone', 'seller')}>
              📞 Call {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Trust & Social Proof -->
  <TestimonialsSection />

  <!-- Google Reviews -->
  <GoogleReviews showSchema={false} />

  <!-- Value & Features -->
  <FeaturesSection />
  
  <!-- Expertise & Content -->
  <section class="content-section">
    <div class="container">
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
          <a href={`tel:${SITE_CONFIG.phoneTel}`} class="cta-large-secondary">
            📞 Call to Schedule Tour
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- RealScout Listings Widget - Below the Fold -->
  <section class="homepage-listings">
    <div class="container">
      <div class="listings-header">
        <h2>Live MLS Listings | Pewter Valley Estates & Southwest Las Vegas</h2>
        <p class="listings-subtitle">Real-time property search with expert guidance from Dr. Jan Duffy. Updated every 15 minutes with the latest homes in zip code 89183.</p>
      </div>
      <RealScoutListings />
    </div>
  </section>

  <!-- Services -->
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
          </div>
          <a href="/sell-your-home" class="service-cta">Get Your Free Valuation →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Map Section -->
  <section class="map-section">
    <GoogleMap />
  </section>

  <!-- Related Pages for SEO Internal Linking -->
  <RelatedPages currentPage="/" />

  <!-- Final CTA Section -->
  <CTASection />

  <!-- Sticky Contact Button (Mobile) -->
  <StickyContactButton />
</main>

<style>
  .homepage {
    width: 100%;
  }
  
  .container {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--space-4);
  }

  .section-title {
    font-size: clamp(2rem, 2.5vw, 2.75rem);
    font-weight: 700;
    color: var(--color-indigo-700);
    margin-bottom: var(--space-8);
    text-align: center;
  }
  
  /* Pathways Section */
  .pathways {
    padding: var(--space-10) 0;
    background: var(--color-slate-100);
  }

  /* Buyer/Seller Split */
  .buyer-seller-split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-5);
    max-width: var(--content-width);
    margin: 0 auto;
  }
  
  .path-card {
    background: var(--color-white);
    color: var(--color-indigo-700);
    padding: var(--space-6);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    border: 1px solid rgba(7, 20, 39, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .path-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  .path-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .path-card h2 {
    font-size: clamp(1.5rem, 1.5vw + 1rem, 2rem);
    font-weight: 700;
    margin-bottom: var(--space-3);
    color: var(--color-indigo-700);
  }
  
  .path-description {
    color: var(--color-slate-500);
    margin-bottom: var(--space-4);
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
    padding: var(--space-2) 0;
    color: var(--color-slate-700);
    font-size: 0.95rem;
  }
  
  .path-ctas {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }
  
  .cta-primary {
    display: block;
    padding: var(--space-3) var(--space-5);
    background: var(--color-indigo-700);
    color: var(--color-white);
    text-decoration: none;
    border-radius: var(--radius-md);
    font-weight: 600;
    font-size: 1.125rem;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0 10px 20px rgba(30, 58, 138, 0.25);
  }

  .cta-primary:hover {
    background: var(--color-indigo-600);
    transform: translateY(-2px);
  }

  .cta-phone {
    display: block;
    padding: var(--space-3) var(--space-5);
    background: var(--color-teal-500);
    color: var(--color-white);
    text-decoration: none;
    border-radius: var(--radius-md);
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0 10px 20px rgba(22, 178, 134, 0.2);
  }

  .cta-phone:hover {
    background: var(--color-teal-600);
    transform: translateY(-2px);
  }
  
  /* Quick Lead Capture */
  .quick-lead {
    padding: var(--space-10) 0;
    background: var(--color-white);
    border-bottom: 1px solid var(--color-slate-200);
  }
  
  .lead-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-5);
  }
  
  .lead-form-card {
    background: var(--color-slate-100);
    padding: var(--space-6);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--color-slate-200);
  }
  
  .lead-form-card h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-indigo-700);
    margin-bottom: var(--space-2);
  }
  
  .lead-form-card p {
    color: var(--color-slate-500);
    margin-bottom: var(--space-4);
    font-size: 1rem;
  }
  
  /* Content Section */
  .content-section {
    padding: var(--space-10) 0;
    background: var(--color-white);
  }

  .content-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--space-6);
  }
  
  .content-main h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-indigo-700);
    margin-top: var(--space-6);
    margin-bottom: var(--space-3);
  }
  
  .content-main p {
    color: var(--color-slate-700);
    line-height: 1.8;
    margin-bottom: var(--space-4);
    font-size: 1.125rem;
  }
  
  .content-sidebar {
    position: sticky;
    top: var(--space-6);
    height: fit-content;
  }
  
  .quick-stats {
    background: var(--color-slate-100);
    padding: var(--space-5);
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-slate-200);
  }
  
  .quick-stats h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-indigo-700);
    margin-bottom: var(--space-3);
  }
  
  .quick-stats ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .quick-stats li {
    padding: var(--space-2) 0;
    color: var(--color-slate-700);
    border-bottom: 1px solid var(--color-slate-200);
  }
  
  .quick-stats li:last-child {
    border-bottom: none;
  }
  
  .quick-stats strong {
    color: var(--color-indigo-700);
  }
  
  /* Listings Market Section */
  .listings-market {
    padding: var(--space-10) 0;
    background: linear-gradient(135deg, var(--color-slate-100) 0%, var(--color-slate-200) 100%);
  }
  
  .section-header {
    text-align: center;
    margin-bottom: var(--space-8);
  }
  
  .section-header h2 {
    font-size: clamp(2rem, 2.5vw, 2.75rem);
    font-weight: 700;
    color: var(--color-indigo-700);
    margin-bottom: var(--space-3);
  }
  
  .section-subtitle {
    font-size: 1.125rem;
    color: var(--color-slate-500);
  }
  
  .market-cta-box {
    background: var(--color-white);
    padding: var(--space-8);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: var(--space-6);
    align-items: center;
    border: 1px solid rgba(7, 20, 39, 0.05);
  }
  
  .market-info h3 {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--color-indigo-700);
    margin-bottom: var(--space-3);
  }
  
  .market-info p {
    color: var(--color-slate-700);
    line-height: 1.7;
    margin-bottom: var(--space-4);
    font-size: 1.125rem;
  }
  
  .market-features {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .market-features li {
    padding: var(--space-2) 0;
    color: var(--color-slate-700);
    font-size: 1rem;
  }
  
  .market-cta {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }
  
  .cta-large,
  .cta-large-secondary {
    display: block;
    padding: var(--space-3) var(--space-5);
    border-radius: var(--radius-md);
    text-decoration: none;
    font-weight: 700;
    font-size: 1.125rem;
    text-align: center;
    transition: all 0.3s ease;
  }
  
  .cta-large {
    background: var(--color-indigo-700);
    color: var(--color-white);
    box-shadow: 0 10px 18px rgba(30, 58, 138, 0.25);
  }

  .cta-large:hover {
    background: var(--color-indigo-600);
    transform: translateY(-2px);
  }

  .cta-large-secondary {
    background: var(--color-teal-500);
    color: var(--color-white);
    box-shadow: 0 10px 18px rgba(22, 178, 134, 0.25);
  }
  
  .cta-large-secondary:hover {
    background: var(--color-teal-600);
    transform: translateY(-2px);
  }
  
  /* Services Section */
  .services {
    padding: var(--space-10) 0;
    background: var(--color-white);
  }

  .services h2 {
    font-size: clamp(2rem, 2.5vw, 2.5rem);
    font-weight: 700;
    color: var(--color-indigo-700);
    margin-bottom: var(--space-8);
    text-align: center;
  }

  .services-split {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-6);
    max-width: var(--content-width);
    margin: 0 auto;
  }

  .services-column {
    background: var(--color-slate-100);
    padding: var(--space-6);
    border-radius: var(--radius-lg);
    border-top: 4px solid;
    box-shadow: var(--shadow-sm);
  }

  .buyer-services {
    border-top-color: var(--color-teal-500);
  }

  .seller-services {
    border-top-color: var(--color-indigo-700);
  }

  .services-column h3 {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--color-indigo-700);
    margin-bottom: var(--space-4);
  }
  
  .service-list {
    margin-bottom: 2rem;
  }
  
  .service-item {
    display: flex;
    gap: var(--space-3);
    margin-bottom: var(--space-4);
    align-items: flex-start;
  }

  .service-item .check {
    color: var(--color-teal-500);
    font-size: 1.5rem;
    font-weight: 700;
    flex-shrink: 0;
  }

  .service-item strong {
    display: block;
    color: var(--color-indigo-700);
    font-size: 1.125rem;
    margin-bottom: var(--space-1);
  }

  .service-item p {
    color: var(--color-slate-500);
    font-size: 0.95rem;
    margin: 0;
    line-height: 1.5;
  }
  
  .service-cta {
    display: block;
    padding: var(--space-3) var(--space-5);
    background: var(--color-indigo-700);
    color: var(--color-white);
    text-decoration: none;
    border-radius: var(--radius-md);
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
  }

  .service-cta:hover {
    background: var(--color-indigo-600);
    transform: translateY(-2px);
  }

  .seller-services .service-cta {
    background: var(--color-teal-500);
  }

  .seller-services .service-cta:hover {
    background: var(--color-teal-600);
  }
  
  /* Homepage Listings Section */
  .homepage-listings {
    padding: var(--space-10) 0;
    background: var(--color-white);
    border-top: 1px solid var(--color-slate-200);
    border-bottom: 1px solid var(--color-slate-200);
  }
  
  .listings-header {
    text-align: center;
    max-width: 900px;
    margin: 0 auto var(--space-8);
  }
  
  .listings-header h2 {
    font-size: clamp(2rem, 2.5vw, 2.75rem);
    font-weight: 700;
    color: var(--color-indigo-700);
    margin-bottom: var(--space-4);
    line-height: 1.2;
  }
  
  .listings-subtitle {
    font-size: 1.125rem;
    color: var(--color-slate-600);
    line-height: 1.7;
    margin: 0;
  }
  
  /* Map Section */
  .map-section {
    padding: 0;
  }
  
  /* Responsive Design */
  @media (max-width: 968px) {
    .content-grid {
      grid-template-columns: 1fr;
    }
    
    .content-sidebar {
      position: static;
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
    .why-choose h2,
    .listings-market h2,
    .services h2 {
      font-size: 2rem;
    }
    
    .path-card {
      padding: 2rem 1.5rem;
    }
  }
</style>
