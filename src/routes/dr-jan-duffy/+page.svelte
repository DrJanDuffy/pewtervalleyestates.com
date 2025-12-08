<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import SEOHead from "$lib/SEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"
  
  const pageData = {
    title: "Dr. Jan Duffy | Pewter Valley Estates & Southwest Las Vegas Real Estate Expert",
    description: `Learn about Dr. Jan Duffy, your trusted real estate expert specializing in Pewter Valley Estates and Southwest Las Vegas properties.`,
    canonical: `${SITE_CONFIG.url}/dr-jan-duffy`,
  }
  
  const breadcrumbs = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Dr. Jan Duffy", url: `${SITE_CONFIG.url}/dr-jan-duffy` },
  ]
  
  onMount(() => {
    trackEvent("page_view", { page_title: "Dr. Jan Duffy" })
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
      <h1>Dr. Jan Duffy | Pewter Valley Estates & Southwest Las Vegas Real Estate Expert</h1>
      <p>Complete bio and expertise profile coming soon.</p>
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

