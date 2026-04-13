<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import EnhancedSEOHead from "$lib/EnhancedSEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import NAPDisplay from "$lib/NAPDisplay.svelte"
  import RelatedPages from "$lib/RelatedPages.svelte"
  import AmenitiesCategoryExplorer from "$lib/AmenitiesCategoryExplorer.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"

  const pageData = {
    title: "Shopping, Parks & Schools Near Pewter Valley Estates | Silverado Ranch Amenities",
    description: `Explore shopping, dining, parks, schools, and services near Pewter Valley Estates (89183) inside Silverado Ranch. Hyper-local context for buyers and sellers. Dr. Jan Duffy ${SITE_CONFIG.phone}.`,
    image: `${SITE_CONFIG.url}/neighborhood-og-image.jpg`,
    type: "website",
    canonical: `${SITE_CONFIG.url}/pewter-valley-estates/amenities`,
    keywords:
      "Silverado Ranch shopping, Pewter Valley Estates parks, 89183 schools, Green Valley Ranch dining, Silverado Ranch amenities, Henderson NV services",
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Pewter Valley Estates", url: "/neighborhood" },
    { name: "Nearby amenities", url: "/pewter-valley-estates/amenities" },
  ]

  const faqs = [
    {
      question: "What shopping is near Pewter Valley Estates?",
      answer:
        "Silverado Ranch Shopping Center, The District at Green Valley Ranch, and resort retail at M Resort and Green Valley Ranch are common references. Drive times vary by traffic—Dr. Jan Duffy orients tours to the pockets that match your daily routine.",
    },
    {
      question: "Are school assignments guaranteed by this page?",
      answer:
        "No. School boundaries and programs change. Use this guide for orientation, then verify the specific address you are considering with Clark County School District and official school sites before you write an offer.",
    },
    {
      question: "How does this relate to Silverado Ranch?",
      answer:
        "Pewter Valley Estates is a community within Silverado Ranch. Amenities listed here are typical of the broader Silverado Ranch and southeast Henderson context—always confirm distance from your exact lot.",
    },
  ]

  onMount(() => {
    trackEvent("page_view", { page_title: "Pewter Valley amenities guide", page_location: typeof window !== "undefined" ? window.location.href : "" })
  })
</script>

<EnhancedSEOHead {pageData} {breadcrumbs} {faqs} />
<Breadcrumbs {breadcrumbs} showHome={false} />

<main class="guide-page">
  <section class="hero">
    <div class="container">
      <h1>Shopping, Parks &amp; Services Near Pewter Valley Estates (Silverado Ranch)</h1>
      <p class="lead">
        Pewter Valley Estates sits inside <strong>Silverado Ranch</strong> in zip code <strong>89183</strong>. Use this guide
        to understand everyday convenience—then call Dr. Jan Duffy to align listings and tours to the commute, schools, and
        lifestyle you actually want.
      </p>
    </div>
  </section>

  <section class="section-body">
    <div class="container">
      <h2 class="h2-c">Everything within minutes — explore by category</h2>
      <p class="sub">
        Distances are typical driving references, not guarantees. Traffic and your exact address within the community will
        vary.
      </p>
      <AmenitiesCategoryExplorer />
    </div>
  </section>

  <section class="nap-section">
    <div class="container">
      <NAPDisplay showGoogleReviewsLink={true} showDirections={true} />
    </div>
  </section>

  <RelatedPages currentPage="/pewter-valley-estates/amenities" />
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
    background: linear-gradient(135deg, #0a2540 0%, #1e3a8a 100%);
    color: white;
    padding: 3rem 0 2.5rem;
    text-align: center;
  }
  .hero h1 {
    font-size: clamp(1.5rem, 4vw, 2.25rem);
    font-weight: 800;
    line-height: 1.2;
    margin: 0 0 1rem;
  }
  .lead {
    font-size: 1.1rem;
    line-height: 1.7;
    max-width: 52rem;
    margin: 0 auto;
    opacity: 0.95;
  }
  .section-body {
    padding: 3rem 0 4rem;
    background: #fff;
  }
  .h2-c {
    text-align: center;
    color: #1e3a8a;
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }
  .sub {
    text-align: center;
    color: #64748b;
    font-size: 0.95rem;
    max-width: 40rem;
    margin: 0 auto 2rem;
    line-height: 1.5;
  }
  .nap-section {
    padding: 2rem 0 3rem;
    background: #f8fafc;
  }
</style>
