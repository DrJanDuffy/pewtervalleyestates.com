<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import EnhancedSEOHead from "$lib/EnhancedSEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import RelatedPages from "$lib/RelatedPages.svelte"
  import { attractions } from "$lib/data/silverado-pewter-area.js"
  import { SITE_CONFIG, SILVERADO_RANCH } from "$lib/seo.js"

  const pageData = {
    title: "Las Vegas Attractions & Day Trips Near Silverado Ranch | Strip, Downtown & Beyond",
    description: `From the Las Vegas Strip to Hoover Dam and Valley of Fire—day-trip ideas from Silverado Ranch & Pewter Valley (${SILVERADO_RANCH.zips.join(", ")}). Local context from Dr. Jan Duffy.`,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    type: "website",
    canonical: `${SITE_CONFIG.url}/silverado-ranch/attractions`,
    keywords:
      "things to do near Silverado Ranch, Las Vegas Strip distance, Hoover Dam day trip, Valley of Fire from Henderson, southeast Las Vegas entertainment",
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Silverado Ranch", url: "/silverado-ranch" },
    { name: "Attractions & day trips", url: "/silverado-ranch/attractions" },
  ]

  const faqs = [
    {
      question: "How far is the Las Vegas Strip from Silverado Ranch?",
      answer:
        "Drive times to major Strip corridors are often cited in the ~15-minute range depending on traffic and your exact starting address in 89123/89183. Verify with your preferred map app before scheduling tours or dinner plans.",
    },
    {
      question: "Are these attractions part of buying a home?",
      answer:
        "Lifestyle context matters for resale and enjoyment, but your purchase decision should still rest on schools, HOA, condition, and comps. Dr. Jan Duffy keeps the conversation grounded in your contract and closing priorities.",
    },
  ]

  onMount(() => {
    trackEvent("page_view", { page_title: "Silverado Ranch attractions", page_location: typeof window !== "undefined" ? window.location.href : "" })
  })
</script>

<EnhancedSEOHead {pageData} {breadcrumbs} {faqs} />
<Breadcrumbs {breadcrumbs} showHome={false} />

<main class="guide-page">
  <section class="hero">
    <div class="container">
      <h1>Las Vegas Attractions &amp; Day Trips Near Silverado Ranch</h1>
      <p class="lead">
        Living in <strong>Silverado Ranch</strong> puts world-famous entertainment within reach—while keeping a quieter
        suburban base in <strong>{SILVERADO_RANCH.county}</strong>.
      </p>
    </div>
  </section>

  <section class="attractions">
    <div class="container">
      <p class="intro">
        Distances are typical driving estimates; traffic and seasonality vary. Use this page for lifestyle orientation, not
        for commute guarantees tied to a specific job site.
      </p>
      <div class="attractions-grid">
        {#each attractions as attraction}
          <article class="attraction-card">
            <div class="attraction-image">
              <img src={attraction.image} alt={attraction.name} loading="lazy" />
              <span class="attraction-category">{attraction.category}</span>
            </div>
            <div class="attraction-content">
              <h3 class="attraction-name">{attraction.name}</h3>
              <p class="attraction-distance">{attraction.distance} away</p>
              <p class="attraction-description">{attraction.description}</p>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <RelatedPages currentPage="/silverado-ranch/attractions" />
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
    background: linear-gradient(135deg, #0a2540 0%, #3a8dde 100%);
    color: white;
    padding: 3rem 0 2rem;
    text-align: center;
  }
  .hero h1 {
    font-size: clamp(1.45rem, 3.5vw, 2.1rem);
    font-weight: 800;
    line-height: 1.2;
    margin: 0 0 1rem;
  }
  .lead {
    font-size: 1.1rem;
    line-height: 1.65;
    max-width: 44rem;
    margin: 0 auto;
    opacity: 0.95;
  }
  .attractions {
    padding: 3rem 0 4rem;
    background: #f7f9fc;
  }
  .intro {
    text-align: center;
    color: #64748b;
    max-width: 40rem;
    margin: 0 auto 2rem;
    font-size: 0.98rem;
    line-height: 1.55;
  }
  .attractions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
  }
  .attraction-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }
  .attraction-image {
    position: relative;
    height: 180px;
    overflow: hidden;
  }
  .attraction-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .attraction-category {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background: #3a8dde;
    color: white;
    padding: 0.2rem 0.65rem;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 600;
  }
  .attraction-content {
    padding: 1.25rem;
  }
  .attraction-name {
    font-size: 1.15rem;
    font-weight: 700;
    color: #0a2540;
    margin: 0 0 0.35rem;
  }
  .attraction-distance {
    color: #3a8dde;
    font-weight: 600;
    font-size: 0.95rem;
    margin: 0 0 0.5rem;
  }
  .attraction-description {
    color: #475569;
    font-size: 0.95rem;
    line-height: 1.55;
    margin: 0;
  }
</style>
