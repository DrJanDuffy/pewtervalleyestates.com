<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import SEOHead from "$lib/SEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"
  
  const pageData = {
    title: "Pewter Valley Estates Market Analysis | Las Vegas Real Estate Trends & Data",
    description: `Comprehensive market analysis for Pewter Valley Estates in Southwest Las Vegas (89183). Price trends, inventory data, and market insights by Dr. Jan Duffy.`,
    canonical: `${SITE_CONFIG.url}/market-analysis`,
  }
  
  const breadcrumbs = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Market Analysis", url: `${SITE_CONFIG.url}/market-analysis` },
  ]
  
  onMount(() => {
    trackEvent("page_view", { page_title: "Market Analysis" })
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
      <h1>Pewter Valley Estates Market Analysis | Las Vegas Real Estate Trends & Data</h1>
      <p>Comprehensive market data and analysis coming soon.</p>
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

