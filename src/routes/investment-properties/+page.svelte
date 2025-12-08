<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import SEOHead from "$lib/SEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"
  
  const pageData = {
    title: "Investment Properties in Pewter Valley Estates | Cash Flow & ROI Analysis",
    description: `Expert investment property analysis for Pewter Valley Estates. Dr. Jan Duffy provides cash flow analysis, cap rate calculations, and rental market insights.`,
    canonical: `${SITE_CONFIG.url}/investment-properties`,
  }
  
  const breadcrumbs = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Investment Properties", url: `${SITE_CONFIG.url}/investment-properties` },
  ]
  
  onMount(() => {
    trackEvent("page_view", { page_title: "Investment Properties" })
  })
</script>

<svelte:head>
  <title>{pageData.title}</title>
  <meta name="description" content={pageData.description} />
</svelte:head>

<SEOHead {pageData} includeLocalBusiness={true} />
<Breadcrumbs {breadcrumbs} />

<main>
  <section class="hero">
    <div class="container">
      <h1>Investment Properties in Pewter Valley Estates | Cash Flow & ROI Analysis</h1>
      <p>Investment property analysis and guidance coming soon.</p>
    </div>
  </section>
</main>

<style>
  .hero {
    padding: 4rem 0;
    text-align: center;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
</style>

