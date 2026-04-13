<script>
import { onMount } from "svelte"
import { trackEvent } from "$lib/analytics"
import EnhancedSEOHead from "$lib/EnhancedSEOHead.svelte"
import Breadcrumbs from "$lib/Breadcrumbs.svelte"
import RichmondAmericanAssets from "$lib/RichmondAmericanAssets.svelte"
import PanoramicMap from "$lib/PanoramicMap.svelte"
import RelatedPages from "$lib/RelatedPages.svelte"
import { SITE_CONFIG } from "$lib/seo.js"

// SEO — Pewter Valley Estates is a community within Silverado Ranch
const pageData = {
  title: "Pewter Valley Estates | A Silverado Ranch Community in Las Vegas (89183)",
  description:
    "Pewter Valley Estates (89183) within Silverado Ranch—community map, location overview, and links to dedicated guides: nearby amenities, commute/transport, attractions, and area history. Dr. Jan Duffy.",
  image: `${SITE_CONFIG.url}/neighborhood-og-image.jpg`,
  type: "website",
  canonical: `${SITE_CONFIG.url}/neighborhood`,
  keywords: "Silverado Ranch Las Vegas, Pewter Valley Estates, Las Vegas southeast, Silverado Ranch history, Las Vegas new homes, southeast Las Vegas real estate, local amenities, schools, shopping, dining, entertainment, historic Las Vegas community"
}

// Breadcrumbs for neighborhood page
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Neighborhood", url: "/neighborhood" }
]

onMount(() => {
  trackEvent("page_view", {
    page_title: "Neighborhood & Location",
    page_location: window.location.href,
  })
})
</script>

<!-- SEO Head Component -->
<EnhancedSEOHead {pageData} {breadcrumbs} />

<!-- Breadcrumb Navigation -->
<Breadcrumbs {breadcrumbs} />

<!-- Richmond American Assets -->
<RichmondAmericanAssets />

<main class="neighborhood-page">
  <!-- Hero Section -->
  <section class="neighborhood-hero">
    <div class="container">
      <div class="hero-content">
        <h1>Pewter Valley Estates | A Silverado Ranch Community | Southwest Las Vegas (89183)</h1>
        <p class="hero-subtitle">
          Pewter Valley Estates is strategically located in Silverado Ranch, a vibrant Las Vegas community with rich history dating back to the late 1800s when the area was primarily used for ranching and agriculture. Over time, it has evolved and developed, becoming the thriving community it is today.
        </p>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">15</span>
            <span class="stat-label">Minutes to The Strip</span>
          </div>
          <div class="stat">
            <span class="stat-number">2</span>
            <span class="stat-label">Minutes to Shopping</span>
          </div>
          <div class="stat">
            <span class="stat-number">5</span>
            <span class="stat-label">Minutes to Golf</span>
          </div>
          <div class="stat">
            <span class="stat-number">1</span>
            <span class="stat-label">Minute to Park</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Location Overview -->
  <section class="location-overview">
    <div class="container">
      <h2>Prime Southwest Las Vegas Location | Pewter Valley Estates by Dr. Jan Duffy</h2>
      <p class="lead">
        Pewter Valley Estates benefits from its strategic location in Southwest Las Vegas at Pyle Avenue and S Rancho Destino Rd in zip code 89183. Dr. Jan Duffy's expertise in this location helps buyers and sellers understand location advantages affecting property values and lifestyle.
      </p>
      <div class="overview-grid">
        <div class="overview-content">
          <h3>Why Pewter Valley Estates Location is Ideal</h3>
          <p>
            Pewter Valley Estates is strategically located in Silverado Ranch, a vibrant Las Vegas community 
            with rich history dating back to the late 1800s when the area was primarily used for ranching and agriculture. 
            Over time, it has evolved and developed, becoming the thriving community it is today. This southeast Las Vegas 
            location offers the perfect combination of historic charm, modern amenities, and easy access to all the 
            excitement and opportunities that Las Vegas has to offer.
          </p>
          <ul class="location-benefits">
            <li>✅ Safe, family-friendly community with low crime rates</li>
            <li>✅ Top-rated schools and educational opportunities</li>
            <li>✅ Convenient access to major employment centers</li>
            <li>✅ Abundant shopping, dining, and entertainment options</li>
            <li>✅ Beautiful parks and recreational facilities</li>
            <li>✅ Easy access to major highways and transportation</li>
          </ul>
        </div>
        <div class="overview-map">
          <div class="map-placeholder">
            <h4>Interactive Map</h4>
            <p>Explore the neighborhood and nearby amenities</p>
            <button class="map-button" onclick={() => trackEvent('map_interaction', { action: 'view_map', page: 'neighborhood' })}>
              View Interactive Map
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Interactive Panoramic Map -->
  <section class="panoramic-map-section">
    <div class="container">
      <h2>Explore Pewter Valley Estates</h2>
      <p class="section-subtitle">
        Take a virtual tour of Pewter Valley Estates with our interactive panoramic map. 
        Get a bird's-eye view of the community layout, nearby amenities, and the beautiful Silverado Ranch surroundings.
      </p>
      
      <PanoramicMap 
        mapUrl="https://panomaps.us/homes/richmondamerican/nv/pewter-valley-estates/"
        title="Pewter Valley Estates - Interactive Community Map"
        height="600px"
        showControls={true}
        className="neighborhood-panomap"
        realScoutUrl="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xMjEwOQ=="
      />
    </div>
  </section>

  <!-- Deep-dive guides (split for SEO / indexing) -->
  <section class="guides-hub">
    <div class="container">
      <h2>Silverado Ranch &amp; Pewter Valley guides</h2>
      <p class="guides-lead">
        We split long neighborhood topics into focused pages—each with its own title, FAQs, and internal links—so Google can
        index clear answers (AEO) and local entities (GEO) without one overloaded URL.
      </p>
      <div class="guides-grid">
        <a class="guide-card" href="/pewter-valley-estates/amenities">
          <h3>Shopping, parks &amp; schools</h3>
          <p>Browse amenities by category—dining, education, recreation, healthcare.</p>
          <span class="guide-cta">Open amenities guide →</span>
        </a>
        <a class="guide-card" href="/silverado-ranch/getting-around">
          <h3>Commute &amp; transportation</h3>
          <p>Freeways, airport, transit, and why buyers cite easy regional access.</p>
          <span class="guide-cta">Open commute guide →</span>
        </a>
        <a class="guide-card" href="/silverado-ranch/attractions">
          <h3>Attractions &amp; day trips</h3>
          <p>Strip, downtown, Hoover Dam, Valley of Fire—orientation for lifestyle buyers.</p>
          <span class="guide-cta">View attractions →</span>
        </a>
        <a class="guide-card" href="/silverado-ranch/history">
          <h3>Silverado Ranch history</h3>
          <p>Ranching roots, development context, and why lot patterns vary.</p>
          <span class="guide-cta">Read history →</span>
        </a>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="neighborhood-cta">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to Call Silverado Ranch Home?</h2>
        <p>
          Discover why so many families choose Pewter Valley Estates in Silverado Ranch for their perfect Las Vegas lifestyle. 
          Schedule a tour today and experience this historic southeast Las Vegas community for yourself.
        </p>
        <div class="cta-buttons">
          <a href="/contact" class="cta-button primary" onclick={() => trackEvent('neighborhood_cta_click', { action: 'schedule_tour', page: 'neighborhood' })}>
            Schedule a Tour
          </a>
          <a href="/listings" class="cta-button secondary" onclick={() => trackEvent('neighborhood_cta_click', { action: 'view_listings', page: 'neighborhood' })}>
            View Available Homes
          </a>
        </div>
      </div>
    </div>
  </section>

  <RelatedPages currentPage="/neighborhood" />
</main>

<style>
  .neighborhood-page {
    min-height: 100vh;
  }

  /* Hero Section */
  .neighborhood-hero {
    background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
    color: white;
    padding: 4rem 0;
    text-align: center;
  }

  .hero-content h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .stat {
    text-align: center;
  }

  .stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: #F7F9FC;
  }

  .stat-label {
    font-size: 1rem;
    opacity: 0.8;
  }

  /* Location Overview */
  .location-overview {
    padding: 4rem 0;
    background: #F7F9FC;
  }

  /* Panoramic Map Section */
  .panoramic-map-section {
    padding: 4rem 0;
    background: #f8fbff;
  }

  .panoramic-map-section .section-subtitle {
    font-size: 1.2rem;
    color: #666;
    text-align: center;
    margin-bottom: 1.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .overview-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    align-items: start;
    margin-top: 2rem;
  }

  .location-benefits {
    list-style: none;
    padding: 0;
    margin-top: 1.5rem;
  }

  .location-benefits li {
    padding: 0.5rem 0;
    font-size: 1.1rem;
  }

  .map-placeholder {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  }

  .map-button {
    background: #3A8DDE;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .map-button:hover {
    background: #2a7bc7;
    transform: translateY(-2px);
  }

  /* Guides hub (links to split SEO pages) */
  .guides-hub {
    padding: 4rem 0;
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
  }

  .guides-hub h2 {
    text-align: center;
    color: #1e3a8a;
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }

  .guides-lead {
    text-align: center;
    color: #64748b;
    max-width: 52rem;
    margin: 0 auto 2rem;
    font-size: 1.05rem;
    line-height: 1.65;
  }

  .guides-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.25rem;
  }

  .guide-card {
    display: flex;
    flex-direction: column;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 1.5rem;
    text-decoration: none;
    color: inherit;
    transition: box-shadow 0.2s, border-color 0.2s;
  }

  .guide-card:hover {
    border-color: #3a8dde;
    box-shadow: 0 8px 24px rgba(58, 141, 222, 0.12);
  }

  .guide-card h3 {
    margin: 0 0 0.5rem;
    font-size: 1.15rem;
    color: #0a2540;
  }

  .guide-card p {
    flex: 1;
    margin: 0 0 1rem;
    color: #64748b;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .guide-cta {
    font-weight: 700;
    color: #1d4ed8;
    font-size: 0.92rem;
  }

  /* CTA Section */
  .neighborhood-cta {
    padding: 4rem 0;
    background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
    color: white;
    text-align: center;
  }

  .cta-content h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .cta-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cta-button {
    padding: 1rem 2rem;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
  }

  .cta-button.primary {
    background: white;
    color: #0A2540;
  }

  .cta-button.primary:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }

  .cta-button.secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
  }

  .cta-button.secondary:hover {
    background: white;
    color: #0A2540;
    transform: translateY(-2px);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2rem;
    }

    .hero-stats {
      grid-template-columns: repeat(2, 1fr);
    }

    .overview-grid {
      grid-template-columns: 1fr;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }

    .cta-button {
      width: 100%;
      max-width: 300px;
    }
  }
</style>
