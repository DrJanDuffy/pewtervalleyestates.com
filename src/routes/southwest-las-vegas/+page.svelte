<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import SEOHead from "$lib/SEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"
  
  const pageData = {
    title: "Southwest Las Vegas Real Estate | Communities Near Pewter Valley Estates",
    description: `Explore Southwest Las Vegas real estate communities and neighborhoods near Pewter Valley Estates. Expert market insights by Dr. Jan Duffy.`,
    canonical: `${SITE_CONFIG.url}/southwest-las-vegas`,
  }
  
  const breadcrumbs = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Southwest Las Vegas", url: `${SITE_CONFIG.url}/southwest-las-vegas` },
  ]
  
  onMount(() => {
    trackEvent("page_view", { page_title: "Southwest Las Vegas" })
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
      <h1>Southwest Las Vegas Real Estate | Communities Near Pewter Valley Estates</h1>
      <p>Comprehensive guide to Southwest Las Vegas communities coming soon.</p>
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

