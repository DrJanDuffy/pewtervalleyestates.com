<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import EnhancedSEOHead from "$lib/EnhancedSEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import NAPDisplay from "$lib/NAPDisplay.svelte"
  import GoogleMap from "$lib/GoogleMap.svelte"
  import RelatedPages from "$lib/RelatedPages.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"

  const pageData = {
    title: "Las Vegas Relocation Guide | Moving to Pewter Valley Estates & Southwest Las Vegas",
    description:
      "Planning a move to Las Vegas? Use this relocation guide for Pewter Valley Estates and Southwest Las Vegas (89183) with tips on neighborhoods, commutes, schools, cost of living, and buying with Dr. Jan Duffy.",
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    type: "website",
    canonical: `${SITE_CONFIG.url}/las-vegas-relocation-guide`,
    keywords:
      "Las Vegas relocation guide, moving to Las Vegas 89183, Pewter Valley Estates relocation, Southwest Las Vegas neighborhoods, Las Vegas home buyer tips"
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Las Vegas Relocation Guide", url: "/las-vegas-relocation-guide" }
  ]

  onMount(() => {
    trackEvent("page_view", { page_title: "Las Vegas Relocation Guide", page_location: window.location.href })
  })
</script>

<EnhancedSEOHead {pageData} {breadcrumbs} />
<Breadcrumbs {breadcrumbs} />

<main class="relocation-page">
  <section class="hero">
    <div class="container">
      <h1>Las Vegas Relocation Guide for Pewter Valley Estates & Southwest Las Vegas</h1>
      <p class="hero-subtitle">
        Moving to Las Vegas or relocating within the valley? Use this practical guide from Dr. Jan Duffy to understand
        neighborhoods, commutes, schools, and what to expect in zip code 89183.
      </p>
    </div>
  </section>

  <section class="why-las-vegas">
    <div class="container">
      <h2>Why People Are Relocating to Southwest Las Vegas</h2>
      <p>
        Southwest Las Vegas has become one of the most desirable areas in the valley, offering newer communities, strong
        amenities, and easy freeway access without the congestion of the central Strip corridor. Pewter Valley Estates
        sits in a pocket of Southwest Las Vegas that balances quiet residential streets with quick access to restaurants,
        shopping, and employment centers.
      </p>
      <div class="grid">
        <div class="card">
          <h3>Modern Master‑Planned Communities</h3>
          <p>
            Communities like Pewter Valley Estates offer modern floor plans, energy‑efficient construction, and HOA‑maintained
            common areas that appeal to buyers who want low‑maintenance living and predictable neighborhood standards.
          </p>
        </div>
        <div class="card">
          <h3>Convenient Access & Commutes</h3>
          <p>
            From zip code 89183, you can reach the Strip, airport, and major employment centers via I‑15 and Las Vegas
            Boulevard in roughly 15–25 minutes depending on traffic. Many residents choose Southwest Las Vegas to avoid
            longer cross‑valley commutes from the northwest or far east side.
          </p>
        </div>
        <div class="card">
          <h3>Amenity‑Rich Lifestyle</h3>
          <p>
            Southwest Las Vegas offers neighborhood parks, walking trails, nearby golf, and quick access to shopping and
            dining at centers such as Silverado Ranch, South Point, and the Southern Highlands corridor.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="neighborhoods">
    <div class="container">
      <h2>Understanding Pewter Valley Estates & Nearby Neighborhoods</h2>
      <div class="grid two-col">
        <div>
          <h3>Pewter Valley Estates (89183)</h3>
          <ul class="list">
            <li>Ranch‑style, single‑story homes built by Richmond American Homes</li>
            <li>3–4 bedrooms with approximately 1,950–2,240 square feet</li>
            <li>Located near Pyle Avenue & S Rancho Destino Rd in Southwest Las Vegas</li>
            <li>Easy access to I‑15, South Point, and the Southern Highlands corridor</li>
          </ul>
        </div>
        <div>
          <h3>Nearby Southwest Communities</h3>
          <ul class="list">
            <li>Southern Highlands – gated communities, golf, and higher‑end custom homes</li>
            <li>Silverado Ranch – established area with mature landscaping and shopping</li>
            <li>Inspirada / Anthem – master‑planned Henderson communities within a reasonable drive</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="schools-cost">
    <div class="container">
      <h2>Schools, Cost of Living & Daily Life</h2>
      <div class="grid two-col">
        <div>
          <h3>Schools & Education</h3>
          <p>
            Families relocating to Pewter Valley Estates typically review Clark County School District options, nearby
            charter schools, and private programs in Southwest Las Vegas. Because school boundaries and ratings can change,
            it is important to verify current information directly with CCSD and any private institutions you may be
            considering.
          </p>
        </div>
        <div>
          <h3>Cost of Living & Utilities</h3>
          <p>
            Compared to many coastal markets, Las Vegas offers relatively favorable housing costs and no state income tax.
            Buyers should plan for HOA dues (where applicable), water usage during warmer months, and modern
            energy‑efficient systems that help stabilize electric costs in newer construction communities like Pewter
            Valley Estates.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="relocation-checklist">
    <div class="container">
      <h2>Relocation Checklist for Pewter Valley Estates</h2>
      <ol class="checklist">
        <li>
          <strong>Clarify your timeline and purchase goals.</strong>
          Decide whether you are relocating for work, lifestyle, investment, or retirement and whether you need to buy
          before selling your current home.
        </li>
        <li>
          <strong>Get pre‑approved with a Las Vegas‑experienced lender.</strong>
          Local lenders familiar with Nevada guidelines and new‑construction nuances can help avoid delays.
        </li>
        <li>
          <strong>Schedule a consultation with Dr. Jan Duffy.</strong>
          Review neighborhoods, commute needs, budget, and preferred home features specific to Pewter Valley Estates and
          Southwest Las Vegas.
        </li>
        <li>
          <strong>Tour homes virtually and in person.</strong>
          Combine video tours, model home visits, and in‑person showings to refine your top choices before making an
          offer.
        </li>
        <li>
          <strong>Plan your move‑in logistics.</strong>
          Coordinate movers, utilities, HOA registration (if applicable), and local services before your closing date.
        </li>
      </ol>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <div class="cta-box">
        <h2>Relocating to Las Vegas? Get a Personalized Relocation Plan.</h2>
        <p>
          Whether you are moving from out of state or relocating across the valley, Dr. Jan Duffy can help you evaluate
          Pewter Valley Estates, understand Southwest Las Vegas neighborhoods, and coordinate a smooth transition.
        </p>
        <div class="cta-actions">
          <a href="/contact" class="btn primary">Request Relocation Consultation</a>
          <a href={`tel:${SITE_CONFIG.phoneTel}`} class="btn outline">Call {SITE_CONFIG.phone}</a>
        </div>
      </div>
    </div>
  </section>

  <section class="nap-map">
    <div class="container">
      <NAPDisplay showGoogleReviewsLink={true} showDirections={true} />
    </div>
    <GoogleMap />
  </section>

  <RelatedPages currentPage="/las-vegas-relocation-guide" />
</main>

<style>
  .relocation-page {
    background: #f8fafc;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .hero {
    padding: 3rem 0 2rem;
    text-align: center;
  }

  .hero h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    max-width: 720px;
    margin: 0 auto;
    color: #475569;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  section {
    padding: 2.5rem 0;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-bottom: 0.75rem;
  }

  p {
    color: #374151;
    line-height: 1.7;
    margin-bottom: 0.75rem;
  }

  .grid {
    display: grid;
    gap: 1.5rem;
  }

  .grid.two-col {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }

  .card {
    background: #ffffff;
    border-radius: 1rem;
    padding: 1.75rem;
    box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08);
    border: 1px solid #e2e8f0;
  }

  .list {
    list-style: disc inside;
    color: #475569;
  }

  .checklist {
    list-style: decimal;
    padding-left: 1.25rem;
    color: #374151;
  }

  .checklist li {
    margin-bottom: 0.75rem;
  }

  .cta-section {
    background: linear-gradient(135deg, #1e3a8a, #1e40af);
    color: #ffffff;
  }

  .cta-box {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  .cta-box h2 {
    color: #ffffff;
  }

  .cta-box p {
    color: #e5e7eb;
    margin-bottom: 1.5rem;
  }

  .cta-actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .btn {
    padding: 0.85rem 1.75rem;
    border-radius: 999px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .btn.primary {
    background: #fbbf24;
    color: #1f2937;
  }

  .btn.outline {
    border: 1px solid #e5e7eb;
    color: #e5e7eb;
  }

  .btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.4);
  }

  .nap-map {
    padding-bottom: 3rem;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1.25rem;
    }

    .hero h1 {
      font-size: 2rem;
    }
  }
</style>

