<script>
import { onMount } from "svelte"
import { browser } from "$app/environment"
import { page } from "$app/state"
import { initGA, trackPageView } from "$lib/analytics"
import Footer from "$lib/Footer.svelte"
import Header from "$lib/header/Header.svelte"
import { webVitals } from "$lib/vitals"
import "../app.css"

/** @type {{ children: import("svelte").Snippet }} */
let { children } = $props()

const analyticsId = import.meta.env.VERCEL_ANALYTICS_ID

onMount(() => {
  if (browser) {
    initGA()
  }
  if (browser && analyticsId) {
    webVitals({
      path: page.url.pathname,
      params: page.params,
      analyticsId,
    })
  }
})

$effect(() => {
  if (!browser) return
  trackPageView(page.url.href, document.title)
})
</script>

<div class="app-layout">
  <Header />

  <main>
    {@render children()}
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
