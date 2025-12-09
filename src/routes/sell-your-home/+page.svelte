<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import EnhancedSEOHead from "$lib/EnhancedSEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import NAPDisplay from "$lib/NAPDisplay.svelte"
  import LeadCaptureForm from "$lib/LeadCaptureForm.svelte"
  import GoogleMap from "$lib/GoogleMap.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"
  
  const pageData = {
    title: "Sell Your Pewter Valley Estates Home | Expert Realtor Services by Dr. Jan Duffy",
    description: `Expert home selling services for Pewter Valley Estates properties in Southwest Las Vegas (89183). Dr. Jan Duffy provides comprehensive seller services including market analysis, pricing strategy, and professional marketing. Call ${SITE_CONFIG.phone}.`,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    type: "website",
    canonical: `${SITE_CONFIG.url}/sell-your-home`,
    keywords: "sell Pewter Valley Estates home, seller agent Las Vegas, home selling services, Southwest Las Vegas real estate, Dr. Jan Duffy seller representation, market analysis",
  }
  
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Sell Your Home", url: "/sell-your-home" },
  ]
  
  onMount(() => {
    trackEvent("page_view", { page_title: "Sell Your Home" })
  })
</script>

<EnhancedSEOHead {pageData} {breadcrumbs} />
<Breadcrumbs {breadcrumbs} />

<main class="sell-your-home-page">
  <section class="hero">
    <div class="container">
      <h1>Sell Your Pewter Valley Estates Home | Expert Realtor Services by Dr. Jan Duffy</h1>
      <p class="hero-subtitle">Maximize Your Sale Price with Specialized Seller Representation in Southwest Las Vegas (89183)</p>
      <p class="hero-description">
        Selling your Pewter Valley Estates home requires an agent who understands this unique community's resale market dynamics. Dr. Jan Duffy specializes exclusively in Pewter Valley Estates and Southwest Las Vegas, providing comprehensive seller services that maximize sale prices, minimize time on market, and ensure smooth transactions. Her deep community knowledge and proven marketing strategies help sellers achieve optimal results.
      </p>
    </div>
  </section>

  <section class="seller-services">
    <div class="container">
      <h2>Comprehensive Seller Services for Pewter Valley Estates Properties</h2>
      <p class="lead">
        Selling a home in Pewter Valley Estates differs from selling in other Las Vegas communities. As a Richmond American Homes community in the resale phase, properties require specialized pricing strategies, targeted marketing, and community-specific knowledge. Dr. Jan Duffy provides complete seller representation that positions your property competitively and attracts qualified buyers ready to purchase in zip code 89183.
      </p>

      <h3>Accurate Market Analysis and Pricing Strategy</h3>
      <p>
        Setting the right asking price is critical to selling success in Pewter Valley Estates. Price too high and your home sits on the market, becoming stale and ultimately selling for less. Price too low and you leave money on the table. Dr. Jan Duffy provides detailed comparative market analysis (CMA) specific to Pewter Valley Estates, analyzing recent sales of comparable homes within the community, current market conditions, and buyer demand patterns. This analysis ensures your asking price reflects true market value and positions your property competitively.
      </p>
      <p>
        Pricing strategy also considers your home's unique characteristics: square footage, lot location, condition, upgrades, and special features. Dr. Jan Duffy evaluates how these factors impact value relative to recent sales, helping you understand where your home fits in the market. This comprehensive analysis forms the foundation for pricing decisions that maximize sale price while ensuring timely sale. Understanding price per square foot trends, days on market averages, and buyer preferences in Pewter Valley Estates helps sellers make informed pricing decisions.
      </p>

      <h3>Professional Marketing and Property Presentation</h3>
      <p>
        Effective marketing distinguishes your Pewter Valley Estates home from competing listings. Dr. Jan Duffy creates comprehensive marketing campaigns that showcase your property's best features and attract qualified buyers. This includes professional photography that highlights interior spaces, exterior views, community amenities, and nearby attractions like Somerset Hills Park and Goett Family Park. High-quality images make listings stand out in online searches and create strong first impressions.
      </p>
      <p>
        Marketing extends beyond photography to include detailed property descriptions that emphasize desirable features, virtual tours that allow remote viewing, drone photography showcasing lot characteristics and community layout, and targeted advertising that reaches buyers actively searching for Pewter Valley Estates homes. Dr. Jan Duffy utilizes multiple marketing channels including MLS, real estate websites, social media, email campaigns, and networking with buyer agents to ensure maximum exposure. This comprehensive approach ensures your property reaches the widest possible audience of qualified buyers.
      </p>

      <h3>Home Staging and Presentation Guidance</h3>
      <p>
        How your home presents to buyers significantly impacts their perception and offers. Dr. Jan Duffy provides staging recommendations that help your Pewter Valley Estates home show at its best. This might involve decluttering to create spacious, welcoming interiors, rearranging furniture to maximize flow, adding neutral decor that appeals to broad buyer tastes, and highlighting unique features that differentiate your property. Professional staging often results in faster sales and higher offers.
      </p>
      <p>
        Exterior presentation matters equally. Dr. Jan Duffy recommends curb appeal improvements including landscaping refresh, exterior cleaning, fresh paint touch-ups, and ensuring all exterior areas are well-maintained. First impressions begin the moment buyers arrive, so exterior presentation must reflect the quality and condition buyers expect in Pewter Valley Estates. Small investments in presentation often yield significant returns in sale price and speed of sale.
      </p>
    </div>
  </section>

  <section class="negotiation-management">
    <div class="container">
      <h2>Offer Negotiation and Transaction Management</h2>
      <p class="lead">
        Receiving offers is just the beginning. Dr. Jan Duffy's negotiation expertise ensures you evaluate offers comprehensively, understand buyer qualifications, and secure terms that protect your interests while achieving your selling goals.
      </p>

      <h3>Offer Evaluation and Buyer Qualification</h3>
      <p>
        Not all offers are created equal. Dr. Jan Duffy helps sellers evaluate offers beyond just price, considering buyer financing strength, down payment amounts, contingencies, closing timelines, and other terms that impact transaction success. An offer at asking price with weak financing and multiple contingencies may be less attractive than a slightly lower offer from a well-qualified buyer with cash and few contingencies. Understanding these nuances helps sellers make informed decisions.
      </p>
      <p>
        Buyer qualification involves verifying pre-approval letters, understanding loan types and their implications, evaluating buyer financial strength, and assessing the likelihood of successful closing. Dr. Jan Duffy coordinates with buyer agents and lenders to verify qualifications and ensure buyers can complete purchases. This due diligence protects sellers from accepting offers that ultimately fail, causing lost time and missed opportunities.
      </p>

      <h3>Strategic Negotiation and Counter-Offers</h3>
      <p>
        Negotiation requires understanding buyer motivations, market conditions, and how to achieve seller goals while maintaining transaction momentum. Dr. Jan Duffy crafts counter-offers that address buyer concerns while protecting seller interests. This might involve price adjustments, contingency modifications, closing date changes, or other terms that create win-win solutions. Her negotiation experience helps sellers secure favorable terms while keeping transactions on track.
      </p>
      <p>
        Strategic negotiation also means knowing when to hold firm and when to compromise. In competitive markets, multiple offers might allow sellers to maintain asking price and favorable terms. In slower markets, strategic concessions might be necessary to secure qualified buyers. Dr. Jan Duffy's market knowledge helps sellers navigate these situations effectively, maximizing outcomes regardless of market conditions.
      </p>

      <h3>Transaction Coordination and Problem Resolution</h3>
      <p>
        Once under contract, successful closings require careful coordination of inspections, appraisals, loan approvals, title work, and closing logistics. Dr. Jan Duffy manages these details proactively, ensuring all parties meet deadlines and transactions proceed smoothly. She coordinates with buyer agents, lenders, inspectors, appraisers, and title companies to maintain transaction momentum and resolve issues quickly when they arise.
      </p>
      <p>
        Problems are inevitable in real estate transactions. Inspections may reveal issues requiring repair negotiations. Appraisals might come in below contract price, requiring resolution strategies. Loan approvals may encounter obstacles requiring creative solutions. Dr. Jan Duffy's experience navigating these challenges helps sellers overcome obstacles and achieve successful closings. Her problem-solving approach focuses on finding solutions that preserve transactions while protecting seller interests.
      </p>
    </div>
  </section>

  <section class="pewter-valley-advantage">
    <div class="container">
      <h2>Why Dr. Jan Duffy's Pewter Valley Estates Expertise Benefits Sellers</h2>
      <p class="lead">
        Selling in Pewter Valley Estates requires specialized knowledge that generalist agents lack. Dr. Jan Duffy's exclusive focus on this community provides sellers with advantages that translate to higher sale prices, faster closings, and smoother transactions.
      </p>

      <h3>Community-Specific Market Knowledge</h3>
      <p>
        Dr. Jan Duffy knows Pewter Valley Estates intimately: which floor plans sell fastest, which lot locations command premiums, which upgrades buyers value most, and how market conditions affect different property types within the community. This knowledge informs pricing strategies that position properties competitively and marketing approaches that highlight features buyers in Pewter Valley Estates seek most. Generalist agents lack this depth of understanding, potentially leaving money on the table or extending time on market unnecessarily.
      </p>
      <p>
        Understanding buyer preferences in Pewter Valley Estates helps sellers make informed decisions about improvements and presentation. Dr. Jan Duffy knows which upgrades yield the best returns, which features to emphasize in marketing, and how to position properties to attract the right buyers. This targeted approach ensures marketing dollars are spent effectively and properties appeal to buyers most likely to pay top dollar.
      </p>

      <h3>Buyer Agent Relationships</h3>
      <p>
        Dr. Jan Duffy's established relationships with buyer agents throughout Las Vegas mean your listing receives attention from agents actively working with qualified buyers. These relationships result in more showings, faster offers, and smoother negotiations. Buyer agents trust Dr. Jan Duffy's listings because they know she provides accurate information, responds quickly, and facilitates successful transactions. This trust translates to more opportunities for sellers.
      </p>
      <p>
        These relationships also provide valuable market intelligence. Dr. Jan Duffy often knows which buyers are actively searching for Pewter Valley Estates homes, what price ranges they're considering, and what features they prioritize. This knowledge helps sellers price and position properties to attract motivated buyers ready to make offers. Leveraging these relationships gives sellers competitive advantages that generalist agents cannot provide.
      </p>

      <h3>Resale Market Expertise</h3>
      <p>
        Pewter Valley Estates is in the resale phase, meaning all transactions involve previously owned properties. Resale markets have different dynamics than new construction: condition matters more, upgrades influence value, and buyers evaluate properties differently. Dr. Jan Duffy's expertise in resale markets helps sellers understand how to position properties, price competitively, and address buyer concerns effectively.
      </p>
      <p>
        Resale expertise also includes understanding which condition issues are normal wear-and-tear versus concerns that affect value, how to present properties that need updates, and how to handle inspection negotiations common in resale transactions. This knowledge helps sellers avoid common pitfalls and achieve successful outcomes even when properties need work or have condition issues.
      </p>
    </div>
  </section>

  <section class="seller-benefits">
    <div class="container">
      <h2>What Makes Dr. Jan Duffy's Seller Services Superior</h2>
      <p class="lead">
        Dr. Jan Duffy provides comprehensive seller representation that goes beyond listing your home. The complete approach ensures sellers receive maximum value, professional service, and support throughout the selling process.
      </p>

      <h3>Maximize Sale Price Through Strategic Positioning</h3>
      <p>
        Every selling decision impacts final sale price. Dr. Jan Duffy helps sellers make informed decisions about pricing, improvements, presentation, and negotiation that maximize outcomes. Her strategic approach considers market conditions, buyer preferences, property characteristics, and competitive positioning to ensure sellers receive top dollar. This might involve timing the listing for optimal market conditions, making strategic improvements that increase value, or adjusting pricing based on buyer feedback.
      </p>
      <p>
        Strategic positioning also means understanding your goals and priorities. Whether you need a quick sale due to relocation, want maximum price regardless of timeline, or have specific requirements like rent-back periods, Dr. Jan Duffy tailors strategies to achieve your objectives. This personalized approach ensures selling decisions align with your needs rather than generic strategies that don't fit your situation.
      </p>

      <h3>Minimize Time on Market</h3>
      <p>
        Every day your home sits on the market costs money through mortgage payments, maintenance, utilities, and opportunity costs. Dr. Jan Duffy's proven marketing strategies and pricing expertise help properties sell quickly without sacrificing price. Effective marketing ensures your listing reaches qualified buyers immediately, while accurate pricing prevents the market rejection that leads to extended time on market and price reductions.
      </p>
      <p>
        Quick sales also require responsive service. Dr. Jan Duffy responds immediately to showing requests, provides prompt feedback, and facilitates fast decision-making. This responsiveness keeps momentum high and prevents buyer interest from cooling. Her availability and communication ensure nothing delays your sale unnecessarily.
      </p>

      <h3>Professional Representation and Advocacy</h3>
      <p>
        As your listing agent, Dr. Jan Duffy's fiduciary duty is to protect your interests throughout the selling process. This means negotiating the best possible terms, ensuring contracts protect you, addressing buyer concerns professionally, and advocating on your behalf when issues arise. This protection is particularly important during negotiations, inspections, and problem resolution when sellers need strong representation.
      </p>
      <p>
        Professional representation also means maintaining perspective during emotional transactions. Selling homes often involves significant life changes and financial decisions. Dr. Jan Duffy provides objective guidance that helps sellers make rational decisions rather than emotional ones. This perspective is invaluable when evaluating offers, responding to inspections, or navigating challenging situations.
      </p>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2>Get Your Free Pewter Valley Estates Home Valuation</h2>
        <p>
          Ready to sell your Pewter Valley Estates home? Dr. Jan Duffy provides free, no-obligation home valuations that help you understand your property's market value and selling potential. Contact Dr. Jan Duffy at {SITE_CONFIG.phone} to schedule your consultation and receive a comprehensive market analysis for your Pewter Valley Estates property.
        </p>
        <div class="cta-buttons">
          <LeadCaptureForm 
            formType="valuation"
            title="Get Your Free Home Valuation"
            subtitle="Discover what your Pewter Valley Estates home is worth in today's market"
          />
          <NAPDisplay showGoogleReviewsLink={true} showDirections={true} />
        </div>
      </div>
    </div>
  </section>

  <section class="map-section">
    <GoogleMap />
  </section>
</main>

<style>
  .sell-your-home-page {
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
  
  .seller-services,
  .pewter-valley-advantage {
    background: white;
  }
  
  .negotiation-management,
  .seller-benefits {
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
    text-align: center;
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
  
  .cta-section {
    background: #1e3a8a;
    color: white;
    padding: 4rem 0;
  }
  
  .cta-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .cta-content h2 {
    color: white;
    margin-bottom: 1.5rem;
  }
  
  .cta-content p {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
    font-size: 1.125rem;
  }
  
  .cta-buttons {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
  
  .map-section {
    padding: 0;
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
