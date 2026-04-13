<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import EnhancedSEOHead from "$lib/EnhancedSEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import NAPDisplay from "$lib/NAPDisplay.svelte"
  import RelatedPages from "$lib/RelatedPages.svelte"
  import { transportation, getFeatureIcon } from "$lib/data/silverado-pewter-area.js"
  import { SITE_CONFIG, SILVERADO_RANCH } from "$lib/seo.js"

  const pageData = {
    title: "Commute & Transportation | Silverado Ranch, Henderson & Las Vegas Valley",
    description: `Freeways, airport, and transit from Silverado Ranch (${SILVERADO_RANCH.zips.join(", ")}): I-15, I-215, RTC, and McCarran access. Plan your Pewter Valley Estates commute with Dr. Jan Duffy.`,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    type: "website",
    canonical: `${SITE_CONFIG.url}/silverado-ranch/getting-around`,
    keywords:
      "Silverado Ranch commute, I-15 access Henderson, Las Vegas airport from 89183, RTC transit Silverado Ranch, I-215 beltway Las Vegas",
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Silverado Ranch", url: "/silverado-ranch" },
    { name: "Getting around", url: "/silverado-ranch/getting-around" },
  ]

  const faqs = [
    {
      question: "Which freeways matter most for Silverado Ranch commuters?",
      answer:
        "Buyers often reference I-15 and the I-215 beltway for cross-valley access. Your best route depends on job location and time of day—Dr. Jan Duffy encourages test-driving commutes from specific listings, not just zip-level averages.",
    },
    {
      question: "How close is the airport?",
      answer:
        "Harry Reid International Airport (historically known as McCarran) is a common ~15-minute reference from parts of the southeast valley; confirm from your exact address when timing flights.",
    },
  ]

  onMount(() => {
    trackEvent("page_view", {
      page_title: "Silverado Ranch getting around",
      page_location: typeof window !== "undefined" ? window.location.href : "",
    })
  })
</script>

<EnhancedSEOHead {pageData} {breadcrumbs} {faqs} />
<Breadcrumbs {breadcrumbs} showHome={false} />

<main class="guide-page">
  <section class="hero">
    <div class="container">
      <h1>Commute &amp; Transportation from Silverado Ranch &amp; Pewter Valley</h1>
      <p class="lead">
        {SILVERADO_RANCH.access.positioning} Key corridors include
        <strong>{SILVERADO_RANCH.access.freeways.join(" and ")}</strong>; many residents benchmark roughly
        <strong>{SILVERADO_RANCH.access.stripMilesApprox} miles</strong> to major Strip entertainment—always verify with live
        maps for your workplace and schedule.
      </p>
    </div>
  </section>

  <section class="transport">
    <div class="container">
      <h2 class="h2c">Airport, transit &amp; major roads</h2>
      <div class="transportation-grid">
        {#each transportation as t}
          <div class="transport-card">
            <div class="transport-icon">{getFeatureIcon(t.type)}</div>
            <h3 class="transport-name">{t.name}</h3>
            <p class="transport-distance">{t.distance} away</p>
            <p class="transport-description">{t.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="highlights">
    <div class="container">
      <h2 class="h2c">Why buyers cite “easy access”</h2>
      <div class="highlights-grid">
        <div class="highlight-card">
          <span class="hi">🚗</span>
          <h3>Regional highways</h3>
          <p>Beltway and interstate connections support commutes across Henderson, Las Vegas, and employment hubs.</p>
        </div>
        <div class="highlight-card">
          <span class="hi">✈️</span>
          <h3>Travel &amp; visitors</h3>
          <p>Major airport access matters for frequent flyers and hospitality-adjacent careers.</p>
        </div>
        <div class="highlight-card">
          <span class="hi">🚌</span>
          <h3>Local transit</h3>
          <p>RTC and other options may fit select routes—pair transit planning with your daily schedule.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="nap-section">
    <div class="container">
      <NAPDisplay showGoogleReviewsLink={true} showDirections={true} />
    </div>
  </section>

  <RelatedPages currentPage="/silverado-ranch/getting-around" />
</main>

<style>
  .guide-page {
    min-height: 60vh;
  }
  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  .hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
    color: white;
    padding: 3rem 0 2.5rem;
    text-align: center;
  }
  .hero h1 {
    font-size: clamp(1.45rem, 3.5vw, 2rem);
    font-weight: 800;
    line-height: 1.2;
    margin: 0 0 1rem;
  }
  .lead {
    font-size: 1.05rem;
    line-height: 1.75;
    max-width: 52rem;
    margin: 0 auto;
    opacity: 0.95;
  }
  .transport {
    padding: 3rem 0;
    background: white;
  }
  .h2c {
    text-align: center;
    color: #1e3a8a;
    font-size: 1.65rem;
    margin-bottom: 2rem;
  }
  .transportation-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.25rem;
  }
  .transport-card {
    background: #f8fafc;
    border-radius: 12px;
    padding: 1.35rem;
    text-align: center;
    border: 1px solid #e2e8f0;
  }
  .transport-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  .transport-name {
    font-size: 1.1rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 0.35rem;
  }
  .transport-distance {
    color: #3a8dde;
    font-weight: 600;
    font-size: 0.92rem;
    margin: 0 0 0.5rem;
  }
  .transport-description {
    color: #475569;
    font-size: 0.92rem;
    line-height: 1.5;
    margin: 0;
  }
  .highlights {
    padding: 3rem 0;
    background: #f1f5f9;
  }
  .highlights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.25rem;
  }
  .highlight-card {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
  }
  .hi {
    font-size: 1.75rem;
    display: block;
    margin-bottom: 0.5rem;
  }
  .highlight-card h3 {
    margin: 0 0 0.5rem;
    font-size: 1.1rem;
    color: #1e3a8a;
  }
  .highlight-card p {
    margin: 0;
    color: #475569;
    font-size: 0.95rem;
    line-height: 1.55;
  }
  .nap-section {
    padding: 2rem 0 3rem;
    background: white;
  }
</style>
