<script>
import { onMount } from "svelte"
import { trackEvent } from "$lib/analytics"
import EnhancedSEOHead from "$lib/EnhancedSEOHead.svelte"
import Breadcrumbs from "$lib/Breadcrumbs.svelte"
import RichmondAmericanAssets from "$lib/RichmondAmericanAssets.svelte"
import RichmondAmericanBackground from "$lib/RichmondAmericanBackground.svelte"
import NAPDisplay from "$lib/NAPDisplay.svelte"
import { SITE_CONFIG } from "$lib/seo.js"

const pageData = {
  title: "Pewter Valley Estates - Richmond American Homes Virtual Tour & Design by Dr. Jan Duffy",
  description: `Experience the modern design and functionality inspired by Richmond American Homes for Pewter Valley Estates in Southwest Las Vegas. Virtual tour and community information.`,
  image: `${SITE_CONFIG.url}/og-image.jpg`,
  type: "website",
  canonical: `${SITE_CONFIG.url}/richmond-demo`,
  keywords: "Pewter Valley Estates virtual tour, Richmond American Homes, Southwest Las Vegas new homes, virtual home tour",
}

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Virtual Tour", url: "/richmond-demo" },
]

let isLoaded = false

onMount(() => {
  isLoaded = true
  trackEvent("page_view", {
    page_title: "Richmond American Demo",
    page_location: window.location.href,
  })
})

function handleButtonClick(buttonType) {
  trackEvent("button_click", {
    button_name: buttonType,
    page: "richmond_demo",
  })
}
</script>

<EnhancedSEOHead {pageData} {breadcrumbs} />
<Breadcrumbs {breadcrumbs} />
<RichmondAmericanAssets />

<RichmondAmericanBackground enableMouseEffects={true} enableGlassEffect={true}>
  <div class="container">
    <section class="hero">
      <div class="hero-content">
        <h1>Pewter Valley Estates - Richmond American Homes Virtual Tour & Design by Dr. Jan Duffy</h1>
        <p class="hero-subtitle">
          Experience Modern Design and Quality Construction in Southwest Las Vegas (89183)
        </p>
        <p class="hero-description">
          Explore Pewter Valley Estates through our virtual tour showcasing Richmond American Homes' commitment to quality construction, modern design, and thoughtful community planning. Located at Pyle Avenue and S Rancho Destino Rd in zip code 89183, Pewter Valley Estates represents quality single-family living in Southwest Las Vegas. Dr. Jan Duffy provides expert real estate services for buyers and sellers interested in these Richmond American Homes properties.
        </p>
        <div class="hero-buttons">
          <a href="/homes-for-sale" class="ra-button ra-button-primary" onclick={() => handleButtonClick('explore_homes')}>
            Explore Homes
          </a>
          <a href="/contact" class="ra-button ra-button-outline" onclick={() => handleButtonClick('virtual_tour')}>
            Schedule Tour
          </a>
        </div>
      </div>
    </section>

    <section class="richmond-heritage">
      <div class="content-section">
        <h2>Richmond American Homes Quality and Heritage</h2>
        <p class="lead">
          Pewter Valley Estates benefits from Richmond American Homes' reputation for quality construction, thoughtful design, and attention to detail. This builder heritage affects property values, buyer confidence, and long-term investment potential in the resale market.
        </p>

        <h3>Builder Reputation and Quality Construction</h3>
        <p>
          Richmond American Homes has built a reputation for quality construction, thoughtful design, and attention to detail throughout their communities. This reputation provides confidence for buyers purchasing resale properties, knowing homes were constructed to high standards with quality materials and workmanship. Builder reputation affects resale values, as buyers seeking quality construction often prefer properties built by established, reputable builders like Richmond American Homes.
        </p>
        <p>
          Quality construction means homes in Pewter Valley Estates feature solid foundations, quality framing, energy-efficient systems, and durable materials designed for long-term performance. Understanding Richmond American Homes construction standards helps buyers evaluate properties accurately and helps sellers highlight quality features that distinguish their homes in the resale market. This builder heritage contributes to property values and buyer confidence in Pewter Valley Estates.
        </p>

        <h3>Design Philosophy and Architectural Consistency</h3>
        <p>
          Richmond American Homes' design philosophy emphasizes functionality, efficiency, and contemporary aesthetics that appeal to modern buyers. Pewter Valley Estates reflects this philosophy through ranch-style architecture, open floor plans, and thoughtful space utilization that maximizes livability within 1,950 to 2,240 square feet. This design consistency creates cohesive community aesthetics while allowing individual expression through landscaping and exterior choices.
        </p>
        <p>
          Architectural consistency also contributes to community appeal and property values. Homes that maintain consistent design standards and quality levels throughout the community create cohesive neighborhoods that attract buyers seeking well-planned communities. Understanding Richmond American Homes' design philosophy helps buyers appreciate property features and helps sellers highlight design benefits that appeal to buyers in the resale market.
        </p>

        <h3>Energy Efficiency and Modern Systems</h3>
        <p>
          Richmond American Homes incorporates energy-efficient features and modern systems designed to reduce utility costs and environmental impact. These features include efficient HVAC systems, insulation, windows, and appliances that meet or exceed energy efficiency standards. Energy efficiency benefits homeowners through reduced utility costs and appeals to environmentally conscious buyers seeking sustainable living options.
        </p>
        <p>
          Modern systems also include updated electrical, plumbing, and other infrastructure designed for contemporary living. These systems reduce maintenance needs, improve functionality, and appeal to buyers seeking homes with modern infrastructure. Understanding these features helps buyers evaluate property value and helps sellers highlight energy efficiency benefits that distinguish their properties in competitive markets.
        </p>
      </div>
    </section>

    <section class="virtual-tour-features">
      <div class="content-section">
        <h2>Virtual Tour Features and Home Exploration</h2>
        <p class="lead">
          Virtual tours provide convenient ways to explore Pewter Valley Estates homes, understand layouts, and evaluate properties before scheduling in-person visits. Dr. Jan Duffy helps buyers utilize virtual tour technology effectively to identify properties matching their preferences.
        </p>

        <h3>Interactive Floor Plan Exploration</h3>
        <p>
          Virtual tours allow buyers to explore floor plans interactively, understanding room layouts, flow, and space utilization without physical visits. This exploration helps buyers evaluate whether floor plans match their lifestyles, understand how space is utilized, and identify properties worth viewing in person. Interactive exploration saves time by allowing buyers to eliminate properties that don't match preferences before scheduling showings.
        </p>
        <p>
          Floor plan exploration also helps buyers understand property features including bedroom and bathroom placement, kitchen layouts, living space configurations, and storage availability. Understanding these features helps buyers evaluate property fit and prioritize which properties to view in person. Dr. Jan Duffy helps buyers interpret virtual tours effectively, understanding how virtual representations translate to actual living spaces and property characteristics.
        </p>

        <h3>Property Condition and Feature Assessment</h3>
        <p>
          Virtual tours provide opportunities to assess property condition, upgrades, and features through detailed photography and interactive exploration. Buyers can evaluate kitchen and bathroom conditions, flooring quality, paint condition, and overall property maintenance through virtual tour technology. This assessment helps buyers identify properties that meet condition expectations and eliminates properties needing significant work that don't match buyer goals.
        </p>
        <p>
          Feature assessment through virtual tours helps buyers understand upgrade quality, special features, and property characteristics that affect value. Understanding these features helps buyers evaluate property value relative to asking prices and identify properties representing good value opportunities. Dr. Jan Duffy's expertise helps buyers interpret virtual tour information accurately, ensuring virtual assessments translate to informed in-person evaluation.
        </p>

        <h3>Neighborhood and Community Context</h3>
        <p>
          Virtual tours and community information help buyers understand neighborhood context, community layout, and location characteristics affecting lifestyle and value. Understanding community layout, lot locations, proximity to amenities, and neighborhood character helps buyers evaluate lifestyle fit and property value. This contextual understanding is essential for making informed decisions about purchases in Pewter Valley Estates.
        </p>
        <p>
          Community context also includes understanding nearby parks like Somerset Hills Park and Goett Family Park, proximity to shopping and dining, school access, and transportation connectivity. Virtual tours combined with community information provide comprehensive understanding that helps buyers evaluate properties holistically. Dr. Jan Duffy provides community context that complements virtual tour exploration, ensuring buyers understand all factors affecting property value and lifestyle fit.
        </p>
      </div>
    </section>

    <section class="resale-market">
      <div class="content-section">
        <h2>Understanding Pewter Valley Estates Resale Market</h2>
        <p class="lead">
          Pewter Valley Estates is now in the resale market phase, meaning all available properties are previously owned. Understanding resale market dynamics helps buyers and sellers make informed decisions about transactions in this Richmond American Homes community.
        </p>

        <h3>Resale Market Characteristics and Considerations</h3>
        <p>
          Resale markets differ from new construction in significant ways affecting both buying and selling. Properties may have upgrades, modifications, or condition variations that affect value and require careful evaluation. Resale transactions involve inspections, condition assessments, and negotiations that differ from new construction purchases. Understanding these differences helps buyers and sellers navigate resale markets effectively and achieve successful outcomes.
        </p>
        <p>
          Resale market characteristics include varied property conditions, diverse upgrade histories, and pricing that reflects both original purchase prices and market appreciation. Properties may have improved or declined in condition since original construction, affecting values and buyer appeal. Dr. Jan Duffy's expertise in resale markets ensures clients understand these characteristics and navigate transactions with knowledge that protects their interests and achieves their goals.
        </p>

        <h3>Property Condition Evaluation in Resale Properties</h3>
        <p>
          Evaluating resale properties requires assessing condition, identifying needed repairs, understanding upgrade quality, and determining property value relative to condition. Inspections are essential for identifying condition issues, system ages, needed repairs, and factors affecting property value. Understanding condition implications helps buyers make informed decisions and helps sellers position properties competitively based on actual condition.
        </p>
        <p>
          Condition evaluation also includes understanding which improvements add value versus those that are personal preferences, recognizing deferred maintenance issues, and assessing upgrade quality relative to community standards. Dr. Jan Duffy's experience with Pewter Valley Estates resale properties ensures accurate condition evaluation that informs pricing, negotiation, and transaction decisions. This expertise protects client interests and ensures successful outcomes in resale transactions.
        </p>

        <h3>Value Assessment and Pricing in Resale Markets</h3>
        <p>
          Pricing resale properties requires analyzing comparable sales, current market conditions, property condition, upgrades, and community-specific factors affecting value. Dr. Jan Duffy provides detailed market analysis specific to Pewter Valley Estates resale markets, ensuring pricing reflects true market value and positions properties competitively. This analysis helps sellers maximize sale prices and helps buyers evaluate whether asking prices reflect property value accurately.
        </p>
        <p>
          Value assessment also considers property characteristics affecting desirability including lot location, condition, upgrades, floor plan efficiency, and special features. Understanding how these factors affect value helps buyers identify good value opportunities and helps sellers highlight value factors that justify asking prices. Dr. Jan Duffy's market knowledge ensures value assessments reflect real-world buyer preferences and market dynamics specific to Pewter Valley Estates resale markets.
        </p>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-content">
        <h2>Experience Pewter Valley Estates with Dr. Jan Duffy</h2>
        <p>Ready to explore Pewter Valley Estates homes in person? Contact Dr. Jan Duffy for expert buyer representation, property tours, and comprehensive real estate services in Southwest Las Vegas zip code 89183.</p>
        <NAPDisplay showGoogleReviewsLink={true} showDirections={true} />
      </div>
    </section>
  </div>
</RichmondAmericanBackground>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--ra-spacing-4);
  }

  .hero {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--ra-spacing-20) 0;
  }

  .hero-content h1 {
    font-size: 2.5rem;
    margin-bottom: var(--ra-spacing-4);
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    font-weight: 700;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: var(--ra-spacing-4);
    color: #fbbf24;
    font-weight: 600;
  }

  .hero-description {
    font-size: 1.125rem;
    margin-bottom: var(--ra-spacing-8);
    color: rgba(255, 255, 255, 0.95);
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.7;
  }

  .hero-buttons {
    display: flex;
    gap: var(--ra-spacing-4);
    justify-content: center;
    flex-wrap: wrap;
  }

  .content-section {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 3rem;
    margin: 2rem 0;
    border-radius: var(--ra-radius-2xl);
    color: #374151;
  }

  .richmond-heritage,
  .virtual-tour-features,
  .resale-market {
    padding: 4rem 0;
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
    padding: var(--ra-spacing-20) 0;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    margin: var(--ra-spacing-20) 0;
    border-radius: var(--ra-radius-2xl);
    text-align: center;
  }

  .contact-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  .contact-content h2 {
    color: white;
    margin-bottom: var(--ra-spacing-4);
  }

  .contact-content p {
    color: rgba(255, 255, 255, 0.95);
    margin-bottom: var(--ra-spacing-6);
    font-size: 1.125rem;
  }

  .ra-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  .ra-button-primary {
    background-color: white;
    color: #1e3a8a;
  }

  .ra-button-primary:hover {
    background-color: #f1f5f9;
    transform: translateY(-1px);
  }

  .ra-button-outline {
    background-color: transparent;
    color: white;
    border: 2px solid white;
  }

  .ra-button-outline:hover {
    background-color: white;
    color: #1e3a8a;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2rem;
    }

    .hero-subtitle {
      font-size: 1.25rem;
    }

    .hero-description {
      font-size: 1rem;
    }

    .hero-buttons {
      flex-direction: column;
      align-items: center;
    }

    .content-section {
      padding: 2rem;
    }

    h2 {
      font-size: 2rem;
    }
  }
</style>
