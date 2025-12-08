<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import SEOHead from "$lib/SEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"
  
  const pageData = {
    title: "Buy a Home in Pewter Valley Estates | Buyer Agent Services & Support",
    description: `Expert buyer representation for Pewter Valley Estates homes. Dr. Jan Duffy provides comprehensive buyer services including property search, offer strategy, and transaction management.`,
    canonical: `${SITE_CONFIG.url}/buy-a-home`,
  }
  
  const breadcrumbs = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Buy a Home", url: `${SITE_CONFIG.url}/buy-a-home` },
  ]
  
  onMount(() => {
    trackEvent("page_view", { page_title: "Buy a Home" })
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
      <h1>Buy a Home in Pewter Valley Estates | Buyer Agent Services & Support</h1>
      <p>Complete buyer services guide coming soon.</p>
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

