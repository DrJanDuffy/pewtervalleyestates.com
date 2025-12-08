<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import SEOHead from "$lib/SEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"
  
  const pageData = {
    title: "Sell Your Pewter Valley Estates Home | Expert Realtor Services by Dr. Jan Duffy",
    description: `Expert home selling services for Pewter Valley Estates properties. Dr. Jan Duffy provides comprehensive seller services including market analysis, pricing strategy, and professional marketing.`,
    canonical: `${SITE_CONFIG.url}/sell-your-home`,
  }
  
  const breadcrumbs = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Sell Your Home", url: `${SITE_CONFIG.url}/sell-your-home` },
  ]
  
  onMount(() => {
    trackEvent("page_view", { page_title: "Sell Your Home" })
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
      <h1>Sell Your Pewter Valley Estates Home | Expert Realtor Services by Dr. Jan Duffy</h1>
      <p>Complete seller services guide coming soon.</p>
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

