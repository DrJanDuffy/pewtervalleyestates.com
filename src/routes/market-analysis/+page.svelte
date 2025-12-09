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
    title: "Pewter Valley Estates Market Analysis | Las Vegas Real Estate Trends & Data by Dr. Jan Duffy",
    description: `Comprehensive market analysis for Pewter Valley Estates in Southwest Las Vegas (89183). Price trends, inventory data, and market insights by Dr. Jan Duffy. Call ${SITE_CONFIG.phone}.`,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    type: "website",
    canonical: `${SITE_CONFIG.url}/market-analysis`,
    keywords: "Pewter Valley Estates market analysis, Las Vegas real estate trends, 89183 market data, home price trends, real estate statistics",
  }
  
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Market Analysis", url: "/market-analysis" },
  ]
  
  onMount(() => {
    trackEvent("page_view", { page_title: "Market Analysis" })
  })
</script>

<EnhancedSEOHead {pageData} {breadcrumbs} />
<Breadcrumbs {breadcrumbs} />

<main class="market-analysis-page">
  <section class="hero">
    <div class="container">
      <h1>Pewter Valley Estates Market Analysis | Las Vegas Real Estate Trends & Data by Dr. Jan Duffy</h1>
      <p class="hero-subtitle">Comprehensive Market Intelligence for Southwest Las Vegas Real Estate (89183)</p>
      <p class="hero-description">
        Understanding Pewter Valley Estates market trends is essential for buyers, sellers, and investors making real estate decisions. Dr. Jan Duffy provides comprehensive market analysis specific to Pewter Valley Estates and Southwest Las Vegas, delivering data-driven insights about price trends, inventory levels, days on market, and market conditions that inform strategic real estate decisions. Her specialized knowledge of zip code 89183 ensures analyses reflect true community-specific market dynamics.
      </p>
    </div>
  </section>

  <section class="price-trends">
    <div class="container">
      <h2>Pewter Valley Estates Price Trends and Appreciation Analysis</h2>
      <p class="lead">
        Home prices in Pewter Valley Estates reflect community-specific factors including builder reputation, location desirability, and resale market dynamics. Dr. Jan Duffy tracks price trends specific to this Richmond American Homes community, providing buyers and sellers with accurate pricing intelligence that informs purchase and sale decisions.
      </p>

      <h3>Current Market Pricing and Price Per Square Foot Trends</h3>
      <p>
        Pewter Valley Estates homes typically sell for $450,000 to $650,000 depending on square footage, condition, lot location, and upgrades. Price per square foot ranges from $230 to $290, reflecting factors like property condition, floor plan efficiency, lot characteristics, and improvement quality. Dr. Jan Duffy's market analysis tracks these pricing metrics over time, identifying trends that indicate market direction and helping buyers and sellers understand whether current pricing reflects rising, stable, or declining market conditions.
      </p>
      <p>
        Price per square foot analysis is particularly valuable for comparing properties within Pewter Valley Estates. Homes with similar square footage may command different prices based on condition, upgrades, and lot characteristics. Dr. Jan Duffy's analysis helps buyers identify value opportunities when properties are priced below market and helps sellers understand whether asking prices reflect true market value. This detailed pricing intelligence ensures real estate decisions are data-driven rather than based on assumptions or incomplete information.
      </p>

      <h3>Historical Appreciation Trends and Future Projections</h3>
      <p>
        Pewter Valley Estates has shown steady appreciation since the community transitioned to resale market. Historical appreciation data helps investors and homeowners understand long-term value trends and evaluate whether properties represent good investments. Dr. Jan Duffy analyzes appreciation rates over multiple time periods, comparing Pewter Valley Estates performance to broader Southwest Las Vegas trends and identifying factors driving appreciation within the community.
      </p>
      <p>
        Future appreciation projections consider factors like planned development in Southwest Las Vegas, employment growth, population trends, infrastructure improvements, and market conditions affecting Las Vegas real estate overall. While past performance doesn't guarantee future results, understanding historical trends and current market drivers helps buyers and sellers make informed decisions about timing and pricing. Dr. Jan Duffy's analysis provides realistic projections based on market data rather than optimistic speculation.
      </p>

      <h3>Price Variations by Property Characteristics</h3>
      <p>
        Property prices within Pewter Valley Estates vary based on square footage, bedroom and bathroom counts, condition, upgrades, and lot location. Larger homes with four bedrooms typically command higher prices than three-bedroom properties. Homes with updated kitchens and bathrooms sell for premiums over properties needing updates. Corner lots, lots backing to parks or open spaces, and premium locations within the community command higher prices than standard lots. Dr. Jan Duffy's analysis breaks down pricing by these characteristics, helping buyers and sellers understand how specific features affect value.
      </p>
      <p>
        Understanding price variations helps sellers position properties competitively and helps buyers evaluate whether asking prices reflect property characteristics appropriately. Properties priced significantly above or below similar homes require investigation to understand reasons for pricing differences. Dr. Jan Duffy's market knowledge helps identify when pricing differences reflect legitimate value factors versus pricing errors that create buying or selling opportunities.
      </p>
    </div>
  </section>

  <section class="inventory-analysis">
    <div class="container">
      <h2>Inventory Levels and Market Balance in Pewter Valley Estates</h2>
      <p class="lead">
        Inventory levels indicate market balance between supply and demand, affecting pricing power, negotiation dynamics, and time on market. Dr. Jan Duffy tracks Pewter Valley Estates inventory trends, providing insights about whether markets favor buyers or sellers and how inventory changes affect pricing and transaction terms.
      </p>

      <h3>Current Inventory Levels and Absorption Rates</h3>
      <p>
        Inventory levels in Pewter Valley Estates fluctuate with market conditions, seasonal patterns, and seller decisions. Low inventory (fewer than 3-4 months of supply) typically creates seller's market conditions with multiple offers, quick sales, and pricing at or above asking price. High inventory (more than 6 months of supply) creates buyer's market conditions with more negotiation power, longer time on market, and pricing flexibility. Dr. Jan Duffy tracks inventory levels specific to Pewter Valley Estates, ensuring buyers and sellers understand current market balance and how it affects their transactions.
      </p>
      <p>
        Absorption rates measure how quickly inventory sells, indicating market velocity. Fast absorption (homes selling in 30-45 days) suggests strong demand and seller advantage. Slow absorption (homes taking 60+ days) suggests weaker demand and buyer advantage. Dr. Jan Duffy's analysis tracks absorption rates within Pewter Valley Estates, helping sellers understand expected time on market and helping buyers understand urgency levels affecting offer strategies.
      </p>

      <h3>New Listing Trends and Inventory Changes</h3>
      <p>
        Tracking new listing activity helps predict future inventory levels and market direction. Increasing new listings may indicate expanding inventory and softening market conditions. Decreasing new listings may indicate tightening inventory and strengthening market conditions. Dr. Jan Duffy monitors new listing trends in Pewter Valley Estates, providing early indicators of market direction that inform timing and pricing decisions.
      </p>
      <p>
        Seasonal patterns also affect inventory levels. Spring and summer typically see increased listing activity as families prefer moving during school breaks. Fall and winter typically see decreased activity. Understanding these seasonal patterns helps sellers time listings optimally and helps buyers understand when inventory might expand or contract. Dr. Jan Duffy's analysis accounts for seasonal variations, ensuring market intelligence reflects true trends rather than temporary seasonal fluctuations.
      </p>

      <h3>Pending Sales and Market Momentum</h3>
      <p>
        Pending sales indicate market momentum and future inventory reductions. High pending sales relative to active inventory suggest strong demand and seller advantage. Low pending sales suggest weaker demand and buyer advantage. Dr. Jan Duffy tracks pending sales in Pewter Valley Estates, providing insights about market momentum that help buyers and sellers understand whether market conditions are strengthening or weakening.
      </p>
      <p>
        Pending sales also provide early indicators of closing activity affecting future market data. Understanding pending sales helps predict future sales prices and market direction. Properties under contract today will close in 30-45 days, affecting future market statistics. Dr. Jan Duffy's analysis incorporates pending sales data, providing forward-looking insights that complement historical sales data.
      </p>
    </div>
  </section>

  <section class="days-on-market">
    <div class="container">
      <h2>Days on Market Analysis and Pricing Strategy</h2>
      <p class="lead">
        Days on market (DOM) measures how quickly properties sell, indicating pricing accuracy, market demand, and seller strategy effectiveness. Dr. Jan Duffy analyzes DOM trends in Pewter Valley Estates, helping sellers price properties optimally and helping buyers identify opportunities when properties have been on market longer than average.
      </p>

      <h3>Average Days on Market and Pricing Accuracy</h3>
      <p>
        Average days on market in Pewter Valley Estates typically ranges from 30-60 days for well-priced properties in normal market conditions. Properties selling in under 30 days often indicate competitive pricing or strong buyer demand. Properties taking 60+ days may indicate pricing above market value or other factors reducing buyer interest. Dr. Jan Duffy tracks average DOM, helping sellers understand expected timeframes and evaluate whether their pricing strategies are effective.
      </p>
      <p>
        DOM analysis also reveals pricing accuracy. Properties selling quickly (under 30 days) often indicate accurate or slightly aggressive pricing that attracts buyers immediately. Properties sitting longer (60+ days) may indicate pricing above market value requiring price reductions to sell. Dr. Jan Duffy's analysis helps sellers understand when pricing adjustments might be necessary and helps buyers identify properties where sellers might be more motivated to negotiate.
      </p>

      <h3>Price Reduction Trends and Seller Motivation</h3>
      <p>
        Price reductions indicate seller motivation and market resistance to asking prices. Properties requiring price reductions often started with asking prices above market value. Tracking price reduction patterns helps sellers avoid pricing errors and helps buyers identify motivated sellers willing to negotiate. Dr. Jan Duffy monitors price reduction trends in Pewter Valley Estates, providing insights about pricing accuracy and seller motivation levels.
      </p>
      <p>
        Price reduction timing also matters. Reductions occurring early (within first 30 days) may indicate initial pricing errors. Reductions occurring later (after 60+ days) may indicate market conditions changed or seller circumstances changed. Understanding reduction patterns helps sellers price accurately initially and helps buyers evaluate seller motivation when properties have reduced prices.
      </p>

      <h3>Seasonal Variations and Timing Strategies</h3>
      <p>
        Days on market vary seasonally with listing activity and buyer demand patterns. Spring and summer typically see faster sales as more buyers are active. Fall and winter may see longer DOM as fewer buyers are searching. Dr. Jan Duffy's analysis accounts for seasonal variations, helping sellers understand expected timelines based on listing timing and helping buyers understand when they might have more negotiation leverage due to slower markets.
      </p>
      <p>
        Timing strategies also consider market conditions and inventory levels. Listing when inventory is low may result in faster sales and better prices. Listing when inventory is high may require more competitive pricing and longer timelines. Dr. Jan Duffy's market analysis helps sellers time listings optimally and helps buyers understand when market conditions favor their interests.
      </p>
    </div>
  </section>

  <section class="market-conditions">
    <div class="container">
      <h2>Current Market Conditions and Future Outlook</h2>
      <p class="lead">
        Understanding current market conditions helps buyers and sellers make informed decisions about timing, pricing, and strategies. Dr. Jan Duffy provides ongoing market condition analysis specific to Pewter Valley Estates, delivering timely intelligence that reflects real-time market dynamics.
      </p>

      <h3>Seller's Market vs. Buyer's Market Indicators</h3>
      <p>
        Market conditions fall on a spectrum from strong seller's markets (low inventory, high demand, multiple offers, pricing above asking) to strong buyer's markets (high inventory, low demand, negotiation power, pricing flexibility). Dr. Jan Duffy analyzes multiple indicators to determine current market position: inventory levels, days on market, price trends, offer activity, and sales-to-list price ratios. This comprehensive analysis provides accurate market characterization that informs pricing and negotiation strategies.
      </p>
      <p>
        Market conditions affect transaction dynamics significantly. In seller's markets, buyers may need to offer above asking price, waive contingencies, or move quickly. In buyer's markets, sellers may need to price competitively, offer incentives, or negotiate more flexibly. Dr. Jan Duffy's market condition analysis helps buyers and sellers understand current dynamics and adjust strategies accordingly.
      </p>

      <h3>Economic Factors Affecting Pewter Valley Estates Market</h3>
      <p>
        Broader economic factors affect local real estate markets including interest rates, employment growth, population trends, and economic confidence. Las Vegas's economy, heavily dependent on tourism and entertainment, responds to broader economic conditions affecting consumer spending and travel. Dr. Jan Duffy's analysis considers these economic factors and their impacts on Pewter Valley Estates specifically, ensuring market intelligence reflects both local and broader economic influences.
      </p>
      <p>
        Interest rates significantly affect buyer purchasing power and demand. Rising rates reduce buyer budgets and demand. Falling rates increase purchasing power and demand. Employment growth drives population growth and housing demand. Economic confidence affects buyer willingness to make major purchases. Dr. Jan Duffy tracks these factors and their impacts on Pewter Valley Estates market conditions, providing forward-looking insights that complement historical data.
      </p>

      <h3>Future Market Outlook and Strategic Planning</h3>
      <p>
        While predicting exact future market conditions is impossible, analyzing current trends, economic indicators, and historical patterns helps form reasonable expectations. Dr. Jan Duffy's market analysis includes forward-looking perspectives that help buyers and sellers plan strategically. This might involve recommendations about timing purchases or sales, pricing strategies for different market scenarios, or positioning decisions that account for expected market changes.
      </p>
      <p>
        Strategic planning based on market outlook helps buyers and sellers make decisions that account for likely future conditions rather than just current conditions. Buyers might accelerate purchases if markets are expected to strengthen, or wait if conditions are expected to soften. Sellers might list sooner if markets are expected to weaken, or wait if conditions are expected to strengthen. Dr. Jan Duffy's analysis provides the insights needed for strategic planning that maximizes outcomes over time.
      </p>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2>Get Your Custom Pewter Valley Estates Market Analysis</h2>
        <p>
          Need detailed market analysis for your specific Pewter Valley Estates property or investment decision? Dr. Jan Duffy provides custom market reports tailored to your needs. Contact Dr. Jan Duffy at {SITE_CONFIG.phone} to request your comprehensive market analysis for Southwest Las Vegas zip code 89183.
        </p>
        <div class="cta-buttons">
          <LeadCaptureForm 
            formType="buyer"
            title="Request Market Analysis Report"
            subtitle="Get detailed market intelligence for Pewter Valley Estates"
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
  .market-analysis-page {
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
  
  .price-trends,
  .days-on-market {
    background: white;
  }
  
  .inventory-analysis,
  .market-conditions {
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
