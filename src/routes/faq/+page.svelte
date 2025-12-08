<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import SEOHead from "$lib/SEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"
  
  const pageData = {
    title: "FAQ | Pewter Valley Estates Real Estate Questions Answered",
    description: `Frequently asked questions about Pewter Valley Estates real estate, buying, selling, and investing. Expert answers by Dr. Jan Duffy.`,
    canonical: `${SITE_CONFIG.url}/faq`,
  }
  
  const breadcrumbs = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "FAQ", url: `${SITE_CONFIG.url}/faq` },
  ]
  
  onMount(() => {
    trackEvent("page_view", { page_title: "FAQ" })
  })
</script>

<svelte:head>
  <title>{pageData.title}</title>
  <meta name="description" content={pageData.description} />
</svelte:head>

<SEOHead {pageData} includeLocalBusiness={true} includeFAQ={true} />
<Breadcrumbs {breadcrumbs} />

<main>
  <section class="hero">
    <div class="container">
      <h1>FAQ | Pewter Valley Estates Real Estate Questions Answered</h1>
      <p>Frequently asked questions coming soon.</p>
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

