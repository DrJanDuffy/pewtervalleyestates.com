<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import SEOHead from "$lib/SEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"
  
  const pageData = {
    title: "Free Home Valuation for Pewter Valley Estates Properties | Instant Estimate",
    description: `Get a free, accurate home valuation for your Pewter Valley Estates property. Dr. Jan Duffy provides comprehensive market analysis and property valuations.`,
    canonical: `${SITE_CONFIG.url}/home-valuation`,
  }
  
  const breadcrumbs = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Home Valuation", url: `${SITE_CONFIG.url}/home-valuation` },
  ]
  
  onMount(() => {
    trackEvent("page_view", { page_title: "Home Valuation" })
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
      <h1>Free Home Valuation for Pewter Valley Estates Properties | Instant Estimate</h1>
      <p>Home valuation tool and service coming soon.</p>
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

