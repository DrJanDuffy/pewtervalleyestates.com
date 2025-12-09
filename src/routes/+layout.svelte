<script>
import { onMount } from "svelte"
import { page } from "$app/stores"
import { browser } from "$app/environment"
import { initGA, trackPageView } from "$lib/analytics"
import { webVitals } from "$lib/vitals"
import Header from "$lib/header/Header.svelte"
import Footer from "$lib/Footer.svelte"
import "../app.css"

const analyticsId = import.meta.env.VERCEL_ANALYTICS_ID

// Initialize Google Analytics on mount
onMount(() => {
  if (browser) {
    initGA()
  }
})

// Track page views when route changes
$: if (browser && $page) {
  trackPageView($page.url.href, document.title)
}

$: if (browser && analyticsId && $page) {
  webVitals({
    path: $page.url.pathname,
    params: $page.params,
    analyticsId,
  })
}
</script>

<div class="app-layout">
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style>
  .app-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
