<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import EnhancedSEOHead from "$lib/EnhancedSEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import NAPDisplay from "$lib/NAPDisplay.svelte"
  import GoogleReviews from "$lib/GoogleReviews.svelte"
  import GoogleMap from "$lib/GoogleMap.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"
  
  const pageData = {
    title: "Dr. Jan Duffy | Pewter Valley Estates & Southwest Las Vegas Real Estate Expert",
    description: `Learn about Dr. Jan Duffy, your trusted real estate expert specializing in Pewter Valley Estates and Southwest Las Vegas properties. Expert buyer and seller representation. Call ${SITE_CONFIG.phone}.`,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    type: "profile",
    canonical: `${SITE_CONFIG.url}/dr-jan-duffy`,
    keywords: "Dr. Jan Duffy realtor, Pewter Valley Estates agent, Southwest Las Vegas real estate expert, Las Vegas realtor",
  }
  
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Dr. Jan Duffy", url: "/dr-jan-duffy" },
  ]
  
  onMount(() => {
    trackEvent("page_view", { page_title: "Dr. Jan Duffy" })
  })
</script>

<EnhancedSEOHead {pageData} {breadcrumbs} />
<Breadcrumbs {breadcrumbs} />

<main class="dr-jan-duffy-page">
  <section class="hero">
    <div class="container">
      <h1>Dr. Jan Duffy | Pewter Valley Estates & Southwest Las Vegas Real Estate Expert</h1>
      <p class="hero-subtitle">Specialized Real Estate Services for Zip Code 89183</p>
      <p class="hero-description">
        Dr. Jan Duffy is a specialized real estate professional focused exclusively on helping clients buy, sell, and invest in Pewter Valley Estates and Southwest Las Vegas properties. With deep community knowledge, extensive experience in resale markets, and commitment to client success, Dr. Jan Duffy provides comprehensive real estate services tailored to this unique master-planned community in zip code 89183. Her expertise ensures clients receive expert guidance whether buying their first home, selling to maximize value, or building investment portfolios.
      </p>
    </div>
  </section>

  <section class="expertise">
    <div class="container">
      <h2>Why Dr. Jan Duffy Specializes in Pewter Valley Estates</h2>
      <p class="lead">
        Specialization matters in real estate. Dr. Jan Duffy's exclusive focus on Pewter Valley Estates and Southwest Las Vegas provides clients with expertise that generalist agents cannot match. This specialization ensures buyers, sellers, and investors receive guidance informed by deep community knowledge and extensive experience with this specific market.
      </p>

      <h3>Deep Community Knowledge and Market Expertise</h3>
      <p>
        Dr. Jan Duffy knows Pewter Valley Estates intimately: every floor plan, lot location, upgrade value, and market dynamic affecting this Richmond American Homes community. This knowledge extends beyond basic property characteristics to understanding buyer preferences, seller motivations, pricing trends, rental market dynamics, and investment potential specific to zip code 89183. This comprehensive understanding ensures clients receive advice informed by real-world experience rather than generic guidance applicable to any community.
      </p>
      <p>
        Community knowledge also means understanding the resale market phase, recognizing that Pewter Valley Estates transactions involve previously owned properties with varying conditions, upgrades, and histories. Dr. Jan Duffy's expertise in resale markets helps clients navigate inspections, condition evaluations, upgrade assessments, and negotiations that differ from new construction transactions. This specialized knowledge protects client interests and ensures successful outcomes.
      </p>

      <h3>Comprehensive Real Estate Services</h3>
      <p>
        Dr. Jan Duffy provides complete real estate services for Pewter Valley Estates clients including buyer representation, seller services, investment property analysis, market intelligence, and ongoing support. Buyer services include MLS access, property search, market analysis, offer strategy, inspection coordination, and transaction management. Seller services include home valuation, pricing strategy, professional marketing, negotiation, and transaction coordination. Investment services include cash flow analysis, ROI calculations, market evaluation, and portfolio support.
      </p>
      <p>
        This comprehensive service approach ensures clients receive expert guidance throughout entire real estate transactions, not just basic listing or showing services. Dr. Jan Duffy manages all transaction details proactively, coordinates with service providers, resolves problems efficiently, and maintains communication ensuring clients stay informed. This full-service approach distinguishes expert representation from basic agent services and ensures successful outcomes.
      </p>

      <h3>Proven Track Record and Client Success</h3>
      <p>
        Dr. Jan Duffy's specialization in Pewter Valley Estates results from proven success helping clients achieve their real estate goals. Successful transactions, satisfied clients, and repeat business reflect the quality of service and outcomes Dr. Jan Duffy provides. This track record demonstrates expertise that delivers results, whether helping buyers find perfect homes, sellers maximize sale prices, or investors build profitable portfolios.
      </p>
      <p>
        Client success stories include buyers finding ideal properties at competitive prices, sellers achieving sale prices exceeding expectations, and investors building profitable rental portfolios. These successes result from Dr. Jan Duffy's specialized knowledge, comprehensive services, and commitment to client satisfaction. Understanding this track record helps potential clients evaluate whether Dr. Jan Duffy's services align with their needs and goals.
      </p>
    </div>
  </section>

  <section class="buyer-services">
    <div class="container">
      <h2>Comprehensive Buyer Representation Services</h2>
      <p class="lead">
        Buying a home in Pewter Valley Estates requires expert representation that understands resale markets, community dynamics, and buyer protection. Dr. Jan Duffy provides comprehensive buyer services ensuring clients find perfect properties, negotiate favorable terms, and complete successful purchases.
      </p>

      <h3>Property Search and MLS Access</h3>
      <p>
        Dr. Jan Duffy provides immediate access to all MLS listings in Pewter Valley Estates, ensuring buyers see new listings as they hit the market, receive instant notifications about price changes, and access comprehensive property information not available on public websites. This real-time access is critical in competitive markets where well-priced properties receive multiple offers quickly. Dr. Jan Duffy's direct MLS access means buyers never miss opportunities and can move quickly when finding ideal properties.
      </p>
      <p>
        Property search extends beyond basic criteria to understanding which floor plans work best for buyer lifestyles, how lot locations affect value and lifestyle, and which properties represent best value opportunities. Dr. Jan Duffy's community knowledge helps buyers evaluate properties holistically, considering factors that affect both immediate needs and long-term value. This comprehensive search approach ensures buyers find properties that truly match their goals rather than just meeting basic criteria.
      </p>

      <h3>Market Analysis and Pricing Strategy</h3>
      <p>
        Understanding market value is essential for making competitive offers that secure properties without overpaying. Dr. Jan Duffy provides detailed comparative market analysis (CMA) specific to Pewter Valley Estates, analyzing recent sales of comparable properties, current market conditions, and pricing trends. This analysis helps buyers understand fair market value, identify overpriced listings, and recognize opportunities when properties are priced competitively.
      </p>
      <p>
        Pricing strategy involves crafting offers that stand out in competitive situations while protecting buyer interests through appropriate contingencies. Dr. Jan Duffy's negotiation expertise helps buyers secure properties at optimal prices while maintaining protections through inspection, appraisal, and financing contingencies. Her experience with Pewter Valley Estates transactions means understanding seller motivations, market dynamics, and negotiation strategies that achieve buyer goals.
      </p>

      <h3>Transaction Management and Problem Resolution</h3>
      <p>
        Successful home purchases require careful coordination of inspections, appraisals, loan approvals, title work, and closing logistics. Dr. Jan Duffy manages these details proactively, ensuring all parties meet deadlines and transactions proceed smoothly. Her coordination with lenders, inspectors, appraisers, and title companies ensures efficient transactions and prevents delays that could jeopardize purchases.
      </p>
      <p>
        Problems inevitably arise during real estate transactions. Inspections may reveal issues requiring repair negotiations. Appraisals might come in below contract price, requiring resolution strategies. Loan approvals may encounter obstacles requiring creative solutions. Dr. Jan Duffy's experience navigating these challenges helps buyers overcome obstacles and achieve successful closings. Her problem-solving approach focuses on finding solutions that preserve transactions while protecting buyer interests.
      </p>
    </div>
  </section>

  <section class="seller-services">
    <div class="container">
      <h2>Expert Seller Services for Maximum Results</h2>
      <p class="lead">
        Selling your Pewter Valley Estates home requires pricing strategy, professional marketing, and negotiation expertise that maximizes sale price while minimizing time on market. Dr. Jan Duffy provides comprehensive seller services ensuring optimal outcomes.
      </p>

      <h3>Accurate Home Valuation and Pricing Strategy</h3>
      <p>
        Setting the right asking price is critical to selling success. Price too high and properties sit on the market, becoming stale and ultimately selling for less. Price too low and sellers leave money on the table unnecessarily. Dr. Jan Duffy provides detailed home valuations using comprehensive market analysis specific to Pewter Valley Estates, analyzing recent sales, current market conditions, property characteristics, and community-specific factors affecting value. This analysis ensures asking prices reflect true market value and position properties competitively.
      </p>
      <p>
        Pricing strategy also considers seller goals and timelines. Sellers needing quick sales may benefit from pricing slightly below market to attract buyers quickly. Sellers prioritizing maximum price may benefit from pricing at market with strong marketing. Dr. Jan Duffy helps sellers understand pricing trade-offs and make informed decisions aligned with selling objectives. This strategic approach ensures pricing decisions achieve seller goals rather than following generic strategies that don't fit specific situations.
      </p>

      <h3>Professional Marketing and Property Presentation</h3>
      <p>
        Effective marketing distinguishes listings from competing properties and attracts qualified buyers. Dr. Jan Duffy creates comprehensive marketing campaigns including professional photography, virtual tours, detailed property descriptions, targeted advertising, and networking with buyer agents. This multi-channel marketing approach ensures listings reach maximum audiences of qualified buyers actively searching for Pewter Valley Estates homes.
      </p>
      <p>
        Property presentation also matters significantly. Dr. Jan Duffy provides staging recommendations helping properties show at their best, including decluttering, depersonalizing, minor repairs, cosmetic improvements, and exterior enhancements. Properties that present well receive more showings, generate stronger offers, and sell faster. Investment in presentation typically yields significant returns in sale price and speed of sale.
      </p>

      <h3>Strategic Negotiation and Transaction Management</h3>
      <p>
        Receiving offers is just the beginning. Dr. Jan Duffy helps sellers evaluate offers comprehensively, considering buyer qualifications, financing strength, contingencies, closing timelines, and terms beyond just price. This evaluation ensures sellers make informed decisions accepting offers most likely to close successfully at favorable terms.
      </p>
      <p>
        Negotiation requires understanding buyer motivations and crafting counter-offers that address concerns while protecting seller interests. Dr. Jan Duffy's negotiation expertise helps sellers secure favorable terms while maintaining transaction momentum. Her transaction management ensures inspections, appraisals, loan approvals, and closings proceed smoothly, resolving problems efficiently when they arise. This comprehensive approach ensures sellers achieve optimal outcomes with minimal stress.
      </p>
    </div>
  </section>

  <section class="investment-expertise">
    <div class="container">
      <h2>Investment Property Analysis and Portfolio Support</h2>
      <p class="lead">
        Real estate investors require specialized analysis evaluating cash flow, returns, risks, and strategies. Dr. Jan Duffy provides comprehensive investment property services helping investors build profitable portfolios in Pewter Valley Estates.
      </p>

      <h3>Investment Property Evaluation and Analysis</h3>
      <p>
        Evaluating investment properties requires analyzing cash flow potential, return on investment, risks, and strategies. Dr. Jan Duffy provides detailed investment analysis including rental income projections, operating expense estimates, cash flow calculations, cap rate analysis, ROI projections, and risk evaluation. This comprehensive analysis helps investors understand investment potential and make data-driven decisions rather than emotional ones.
      </p>
      <p>
        Investment analysis also considers property characteristics affecting rental appeal and investment returns including condition, upgrades, location within community, lot characteristics, and market trends. Understanding how these factors affect rental income, appreciation potential, and investment returns helps investors choose properties that meet investment objectives. Dr. Jan Duffy's community knowledge ensures investment analysis reflects true market dynamics specific to Pewter Valley Estates rather than generic estimates.
      </p>

      <h3>Portfolio Building and Strategic Planning</h3>
      <p>
        Building profitable investment portfolios requires strategic planning balancing cash flow, appreciation, risk, and diversification. Dr. Jan Duffy helps investors develop portfolio strategies identifying properties that complement existing holdings, evaluating portfolio performance, and making strategic decisions about acquisitions and dispositions. This strategic approach helps investors build portfolios that generate consistent returns while managing risk effectively.
      </p>
      <p>
        Portfolio support includes ongoing market intelligence, property performance evaluation, strategic timing decisions, and recommendations about portfolio optimization. Dr. Jan Duffy's ongoing relationship with investors ensures access to market information affecting investment decisions and strategic guidance for managing portfolios over time. This long-term partnership helps investors maximize returns and achieve investment objectives.
      </p>
    </div>
  </section>

  <section class="contact-section">
    <div class="container">
      <h2>Work with Dr. Jan Duffy for Your Pewter Valley Estates Real Estate Needs</h2>
      <p class="lead">
        Whether you're buying, selling, or investing in Pewter Valley Estates, Dr. Jan Duffy provides expert representation tailored to your goals. Contact Dr. Jan Duffy today to discuss your real estate needs and discover how specialized expertise can help you achieve success.
      </p>
      <div class="contact-grid">
        <NAPDisplay showGoogleReviewsLink={true} showDirections={true} />
        <GoogleReviews showSchema={false} />
      </div>
    </div>
  </section>

  <section class="map-section">
    <GoogleMap />
  </section>
</main>

<style>
  .dr-jan-duffy-page {
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
  
  .expertise,
  .seller-services {
    background: white;
  }
  
  .buyer-services,
  .investment-expertise {
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
  
  .contact-section {
    background: #1e3a8a;
    color: white;
    padding: 4rem 0;
  }
  
  .contact-section h2 {
    color: white;
  }
  
  .contact-section .lead {
    color: rgba(255, 255, 255, 0.9);
  }
  
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 3rem;
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
    
    .contact-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
