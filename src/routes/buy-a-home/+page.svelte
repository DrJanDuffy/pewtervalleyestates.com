<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import EnhancedSEOHead from "$lib/EnhancedSEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import NAPDisplay from "$lib/NAPDisplay.svelte"
  import LeadCaptureForm from "$lib/LeadCaptureForm.svelte"
  import GoogleMap from "$lib/GoogleMap.svelte"
  import RelatedPages from "$lib/RelatedPages.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"
  
  const pageData = {
    title: "Buy a Home in Pewter Valley Estates | Buyer Agent Services & Support",
    description: `Expert buyer representation for Pewter Valley Estates homes in Southwest Las Vegas (89183). Dr. Jan Duffy provides comprehensive buyer services including property search, offer strategy, and transaction management. Call ${SITE_CONFIG.phone}.`,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    type: "website",
    canonical: `${SITE_CONFIG.url}/buy-a-home`,
    keywords: "buy a home Pewter Valley Estates, buyer agent Las Vegas, home buying services, Southwest Las Vegas real estate, Dr. Jan Duffy buyer representation",
  }
  
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Buy a Home", url: "/buy-a-home" },
  ]
  
  onMount(() => {
    trackEvent("page_view", { page_title: "Buy a Home" })
  })
</script>

<EnhancedSEOHead {pageData} {breadcrumbs} />
<Breadcrumbs {breadcrumbs} />

<main class="buy-a-home-page">
  <section class="hero">
    <div class="container">
      <h1>Buy a Home in Pewter Valley Estates | Buyer Agent Services & Support by Dr. Jan Duffy</h1>
      <p class="hero-subtitle">Expert Buyer Representation for Southwest Las Vegas Real Estate (89183)</p>
      <p class="hero-description">
        Dr. Jan Duffy specializes exclusively in helping buyers find their perfect home in Pewter Valley Estates and Southwest Las Vegas. With deep knowledge of the resale market, community dynamics, and buyer representation, Dr. Jan Duffy provides comprehensive buyer services that protect your interests and ensure successful home purchases in zip code 89183.
      </p>
    </div>
  </section>

  <section class="buyer-services">
    <div class="container">
      <h2>Comprehensive Buyer Services for Pewter Valley Estates Homes</h2>
      <p class="lead">
        Buying a home in Pewter Valley Estates requires specialized expertise. As a sold-out Richmond American Homes community in Southwest Las Vegas (89183), the resale market demands agents who understand community-specific factors, resale transaction nuances, and the unique dynamics of this master-planned community. Dr. Jan Duffy provides complete buyer representation from initial search through closing and beyond.
      </p>

      <h3>Real-Time MLS Access and Property Search</h3>
      <p>
        Dr. Jan Duffy provides immediate access to all MLS listings in Pewter Valley Estates, ensuring you never miss an opportunity. Unlike public real estate websites that show delayed or incomplete information, Dr. Jan Duffy's direct MLS access means you see new listings as they hit the market, receive instant notifications about price reductions, and access comprehensive property details including square footage, lot characteristics, condition reports, and seller disclosures. This real-time access is critical in Pewter Valley Estates, where well-priced resale homes often receive multiple offers within days of listing.
      </p>
      <p>
        The property search process extends beyond basic criteria like bedrooms and bathrooms. Dr. Jan Duffy helps buyers understand which Pewter Valley Estates floor plans work best for their lifestyle, how lot locations within the community impact value and lifestyle, and which properties have the best resale potential. This deep community knowledge helps buyers make informed decisions that align with both immediate needs and long-term investment goals.
      </p>

      <h3>Market Analysis and Pricing Strategy</h3>
      <p>
        Understanding true market value in Pewter Valley Estates requires analyzing comparable sales within the community, not just broader Southwest Las Vegas trends. Dr. Jan Duffy provides detailed comparative market analysis (CMA) specific to Pewter Valley Estates, including recent sales of similar floor plans, lot characteristics, condition, and upgrades. This analysis helps buyers understand fair market value, identify overpriced listings, and recognize opportunities when properties are priced competitively.
      </p>
      <p>
        Pricing strategy involves more than determining fair value. Dr. Jan Duffy helps buyers understand current market conditions in Pewter Valley Estates, including inventory levels, average days on market, price per square foot trends, and seasonal variations. This knowledge informs offer strategy, negotiation approach, and timing decisions. In competitive situations, Dr. Jan Duffy crafts compelling offers that stand out while protecting buyer interests through appropriate contingencies.
      </p>

      <h3>Property Evaluation and Due Diligence</h3>
      <p>
        Resale properties in Pewter Valley Estates require thorough evaluation beyond basic home inspections. Dr. Jan Duffy coordinates comprehensive inspections including general home inspection, roof evaluation, HVAC systems, plumbing, electrical, and structural assessments. Understanding the age and condition of major systems helps buyers make informed decisions and negotiate repairs or credits when necessary.
      </p>
      <p>
        Due diligence also includes reviewing homeowner association documents, understanding community rules and restrictions, verifying lot characteristics, checking for any liens or title issues, and confirming property boundaries. Dr. Jan Duffy's experience with Pewter Valley Estates means understanding which issues are common in Richmond American Homes of this vintage and which require immediate attention. This comprehensive due diligence protects buyers from unexpected costs and ensures they understand what they're purchasing.
      </p>

      <h3>Offer Strategy and Negotiation</h3>
      <p>
        Crafting successful offers in Pewter Valley Estates requires understanding both market dynamics and seller motivations. Dr. Jan Duffy evaluates each listing individually, considering asking price relative to recent sales, days on market, listing history, property condition, and seller circumstances. This analysis informs offer amount, contingencies, closing timeline, and other terms that make offers attractive while protecting buyer interests.
      </p>
      <p>
        Negotiation extends beyond price. Dr. Jan Duffy negotiates repair credits, closing cost contributions, included items, inspection timelines, appraisal contingencies, and closing dates. Her negotiation expertise helps buyers secure favorable terms while maintaining professional relationships with listing agents. This is particularly important in Pewter Valley Estates, where the real estate community is tight-knit and professional relationships impact transaction success.
      </p>
    </div>
  </section>

  <section class="transaction-management">
    <div class="container">
      <h2>Transaction Management and Closing Support</h2>
      <p class="lead">
        From accepted offer to closing day, Dr. Jan Duffy manages every detail of your Pewter Valley Estates home purchase. This comprehensive transaction management ensures nothing falls through the cracks and protects your interests throughout the process.
      </p>

      <h3>Contract Administration and Timeline Management</h3>
      <p>
        Once your offer is accepted, Dr. Jan Duffy coordinates all contract deadlines including inspection periods, appraisal completion, loan approval, title review, and final walkthrough. Missing deadlines can result in contract cancellation or loss of contingencies, so proactive timeline management is critical. Dr. Jan Duffy maintains detailed tracking of all contract dates, coordinates with lenders and title companies, and ensures all parties meet deadlines.
      </p>
      <p>
        Communication during the transaction is comprehensive and timely. Dr. Jan Duffy provides regular updates on loan progress, inspection results, appraisal outcomes, and any issues that arise. This transparent communication ensures buyers are always informed and can make timely decisions when needed. Questions are answered promptly, and concerns are addressed proactively.
      </p>

      <h3>Lender Coordination and Financing Support</h3>
      <p>
        Successful home purchases require seamless coordination between buyers, agents, lenders, and title companies. Dr. Jan Duffy maintains strong relationships with trusted lenders familiar with Las Vegas real estate transactions, including those who understand Pewter Valley Estates specifically. She coordinates with lenders to ensure loan approvals proceed smoothly, deadlines are met, and any loan conditions are satisfied.
      </p>
      <p>
        When financing issues arise, Dr. Jan Duffy works with buyers and lenders to find solutions. This might involve coordinating additional documentation, addressing appraisal issues, or adjusting timelines to accommodate lender requirements. Her experience navigating common financing challenges helps buyers overcome obstacles and close successfully.
      </p>

      <h3>Final Walkthrough and Closing Coordination</h3>
      <p>
        The final walkthrough is your last opportunity to verify property condition before closing. Dr. Jan Duffy accompanies buyers on walkthroughs, checking that agreed-upon repairs were completed, property condition matches expectations, included items are present, and no new issues have developed. This thorough walkthrough protects buyers and ensures they receive what they're purchasing.
      </p>
      <p>
        Closing coordination involves ensuring all parties are prepared, documents are ready, funds are wired, and the closing appointment proceeds smoothly. Dr. Jan Duffy reviews closing documents with buyers, explains what they're signing, and ensures all terms match the contract. Her presence at closing provides buyers with support and ensures questions are answered before final signatures.
      </p>
    </div>
  </section>

  <section class="pewter-valley-expertise">
    <div class="container">
      <h2>Why Dr. Jan Duffy's Pewter Valley Estates Expertise Matters</h2>
      <p class="lead">
        Not all real estate agents understand Pewter Valley Estates. As a specialized community with unique characteristics, buying here requires agents who know the community intimately. Dr. Jan Duffy's exclusive focus on Pewter Valley Estates and Southwest Las Vegas provides buyers with unmatched expertise.
      </p>

      <h3>Deep Community Knowledge</h3>
      <p>
        Dr. Jan Duffy knows every floor plan in Pewter Valley Estates, understands which lots are most desirable, recognizes value-enhancing features, and knows which properties represent the best opportunities. This community-specific knowledge helps buyers identify properties that match their preferences and budgets while understanding long-term value and resale potential. Generalist agents lack this depth of knowledge and may miss important factors that impact value and lifestyle.
      </p>
      <p>
        Understanding Pewter Valley Estates also means knowing community amenities, nearby parks like Somerset Hills Park and Goett Family Park, proximity to I-15 and Las Vegas Boulevard, school assignments, and future development plans. This comprehensive community knowledge helps buyers evaluate not just individual properties but the overall lifestyle and investment value of living in Pewter Valley Estates.
      </p>

      <h3>Resale Market Expertise</h3>
      <p>
        Pewter Valley Estates is now in the resale phase, meaning all available properties are previously owned. Resale transactions differ from new construction in significant ways: properties may have upgrades or modifications, condition varies based on maintenance and improvements, and pricing reflects both original purchase price and market appreciation. Dr. Jan Duffy's expertise in resale markets helps buyers evaluate properties accurately, understand condition implications, and make informed decisions.
      </p>
      <p>
        Resale expertise also includes understanding which improvements add value versus those that are personal preferences, recognizing deferred maintenance issues, evaluating upgrade quality, and assessing whether seller pricing reflects actual market value. This knowledge helps buyers avoid overpaying and identify properties that represent good value in today's market.
      </p>

      <h3>Relationship Network</h3>
      <p>
        Successful real estate transactions in Pewter Valley Estates benefit from strong relationships with listing agents, lenders, inspectors, title companies, and contractors. Dr. Jan Duffy's established network means smoother transactions, faster problem resolution, and access to trusted service providers. These relationships often result in more favorable terms, faster closings, and better outcomes for buyers.
      </p>
      <p>
        These relationships also provide valuable market intelligence. Dr. Jan Duffy often learns about upcoming listings before they hit MLS, understands seller motivations that aren't publicly disclosed, and knows which properties might accept offers below asking price. This inside knowledge provides buyers with advantages in competitive markets.
      </p>
    </div>
  </section>

  <section class="buyer-benefits">
    <div class="container">
      <h2>What Makes Dr. Jan Duffy's Buyer Services Different</h2>
      <p class="lead">
        Dr. Jan Duffy's buyer representation goes beyond standard real estate services. The comprehensive approach ensures buyers receive maximum value, protection, and support throughout their Pewter Valley Estates home purchase.
      </p>

      <h3>Personalized Service and Attention</h3>
      <p>
        Every buyer's situation is unique, and Dr. Jan Duffy provides personalized service tailored to individual needs, preferences, budgets, and timelines. Whether you're a first-time buyer navigating your first purchase, a growing family needing more space, or an empty-nester downsizing, Dr. Jan Duffy adapts her approach to match your specific circumstances. This personalization ensures you receive relevant guidance and support throughout the process.
      </p>
      <p>
        Attention to detail means nothing is overlooked. From initial consultation through post-closing follow-up, Dr. Jan Duffy maintains focus on your goals and priorities. Questions are answered thoroughly, concerns are addressed promptly, and you receive regular communication about transaction progress. This level of attention provides peace of mind and ensures successful outcomes.
      </p>

      <h3>Buyer Protection and Advocacy</h3>
      <p>
        As your buyer's agent, Dr. Jan Duffy's fiduciary duty is to protect your interests. This means negotiating the best possible terms, identifying potential issues before they become problems, ensuring contract terms are favorable, and advocating on your behalf throughout the transaction. This protection is particularly important in competitive markets where sellers may attempt to push buyers into accepting unfavorable terms.
      </p>
      <p>
        Protection also includes ensuring you understand all aspects of your purchase. Dr. Jan Duffy explains contracts in detail, discusses inspection findings thoroughly, reviews appraisal results comprehensively, and ensures you're making informed decisions at every step. This education empowers buyers and helps prevent costly mistakes.
      </p>

      <h3>Post-Closing Support</h3>
      <p>
        Dr. Jan Duffy's relationship with buyers doesn't end at closing. Post-closing support includes connecting buyers with trusted contractors for any needed repairs or improvements, recommending service providers for maintenance needs, providing information about community amenities and services, and remaining available for questions or concerns. This ongoing relationship reflects Dr. Jan Duffy's commitment to long-term client satisfaction.
      </p>
      <p>
        Many buyers return to Dr. Jan Duffy when they're ready to sell or purchase additional properties. This repeat business reflects the quality of service and successful outcomes Dr. Jan Duffy provides. Building long-term relationships means buyers have a trusted real estate resource for all future transactions.
      </p>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2>Start Your Pewter Valley Estates Home Search Today</h2>
        <p>
          Ready to find your perfect home in Pewter Valley Estates? Dr. Jan Duffy is here to guide you through every step of the buying process. Contact Dr. Jan Duffy at {SITE_CONFIG.phone} to schedule your buyer consultation and begin your search for the perfect Pewter Valley Estates home.
        </p>
        <div class="cta-buttons">
          <LeadCaptureForm 
            formType="buyer"
            title="Get Started with Your Home Search"
            subtitle="Receive instant access to Pewter Valley Estates listings and expert buyer representation"
          />
          <NAPDisplay showGoogleReviewsLink={true} showDirections={true} />
        </div>
      </div>
    </div>
  </section>

  <!-- Related Pages for SEO Internal Linking -->
  <RelatedPages currentPage="/buy-a-home" />

  <section class="map-section">
    <GoogleMap />
  </section>
</main>

<style>
  .buy-a-home-page {
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
  
  .buyer-services,
  .pewter-valley-expertise {
    background: white;
  }
  
  .transaction-management,
  .buyer-benefits {
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
