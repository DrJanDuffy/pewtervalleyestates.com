<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import EnhancedSEOHead from "$lib/EnhancedSEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import RelatedPages from "$lib/RelatedPages.svelte"
  import { SITE_CONFIG, SILVERADO_RANCH } from "$lib/seo.js"

  const pageData = {
    title: "Silverado Ranch History | Ranching Roots to Modern Southeast Las Vegas",
    description: `How Silverado Ranch evolved from late-1800s ranch land into today’s master-planned Silverado Ranch area (${SILVERADO_RANCH.zips.join(", ")}). Context for Pewter Valley Estates buyers. Dr. Jan Duffy.`,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    type: "website",
    canonical: `${SITE_CONFIG.url}/silverado-ranch/history`,
    keywords:
      "Silverado Ranch history, Las Vegas ranching history, southeast Las Vegas development, Silverado Ranch 1990s, American West development, Henderson NV history",
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Silverado Ranch", url: "/silverado-ranch" },
    { name: "History", url: "/silverado-ranch/history" },
  ]

  const faqs = [
    {
      question: "When was Silverado Ranch developed as a residential area?",
      answer:
        "Residential build-out accelerated in the 1990s with large master-planned development; American West is widely associated with the Silverado Ranch footprint. Exact subdivision ages vary—Dr. Jan Duffy helps you read seller disclosures and HOA docs for the home you choose.",
    },
    {
      question: "Is Pewter Valley Estates part of this history?",
      answer:
        "Pewter Valley Estates is a Richmond American community within the broader Silverado Ranch area (89183). It is one of many subdivisions buyers compare when choosing schools, commute, and lot style.",
    },
  ]

  onMount(() => {
    trackEvent("page_view", { page_title: "Silverado Ranch history", page_location: typeof window !== "undefined" ? window.location.href : "" })
  })
</script>

<EnhancedSEOHead {pageData} {breadcrumbs} {faqs} />
<Breadcrumbs {breadcrumbs} showHome={false} />

<main class="guide-page">
  <section class="hero">
    <div class="container">
      <h1>Silverado Ranch History | From Ranch Land to a Thriving Suburb</h1>
      <p class="lead">
        Understanding <strong>Silverado Ranch</strong> helps buyers and sellers interpret lot sizes, street patterns, and
        neighborhood character across <strong>{SILVERADO_RANCH.zips.join(" & ")}</strong>.
      </p>
    </div>
  </section>

  <section class="content">
    <div class="container prose">
      <h2>Silverado Ranch’s rich heritage</h2>
      <p>
        Silverado Ranch’s story reaches back to the <strong>late 1800s</strong>, when much of the southeast valley was used
        for <strong>ranching and agriculture</strong>. That rural foundation shaped wide roads, generous lot patterns, and
        a quieter suburban feel than you find closer to the urban core.
      </p>
      <p>
        Over generations, the area evolved into the vibrant residential community it is today—blending historic context with
        modern shopping, parks, and commuter access. Today’s Silverado Ranch includes <strong>20+ subdivisions</strong> and
        a wide mix of housing types, from condos to custom estates.
      </p>
      <h2>Why history matters for real estate decisions</h2>
      <p>
        Older neighborhoods can offer <strong>larger lots</strong> and mature landscaping, while condition and updates vary
        home by home. Dr. Jan Duffy uses <strong>MLS comps</strong>, disclosures, and neighborhood-specific knowledge—not
        generic zip-level averages—to price and negotiate in Silverado Ranch and in Pewter Valley Estates.
      </p>
      <p>
        Ready for listings and tours? Start at <a href="/silverado-ranch">Silverado Ranch real estate</a> or
        <a href="/neighborhood">Pewter Valley Estates</a>, or call <a href={`tel:${SITE_CONFIG.phoneTel}`}>{SITE_CONFIG.phone}</a>.
      </p>
    </div>
  </section>

  <RelatedPages currentPage="/silverado-ranch/history" />
</main>

<style>
  .guide-page {
    min-height: 60vh;
  }
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  .hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
    color: white;
    padding: 3rem 0;
    text-align: center;
  }
  .hero h1 {
    font-size: clamp(1.45rem, 3.5vw, 2.1rem);
    font-weight: 800;
    line-height: 1.25;
    margin: 0 0 1rem;
  }
  .lead {
    font-size: 1.1rem;
    line-height: 1.7;
    margin: 0;
    opacity: 0.95;
  }
  .content {
    padding: 3rem 0 4rem;
    background: white;
  }
  .prose h2 {
    color: #1e3a8a;
    font-size: 1.5rem;
    margin: 2rem 0 1rem;
  }
  .prose p {
    color: #374151;
    line-height: 1.8;
    font-size: 1.05rem;
    margin: 0 0 1.25rem;
  }
  .prose a {
    color: #1d4ed8;
    font-weight: 600;
  }
</style>
