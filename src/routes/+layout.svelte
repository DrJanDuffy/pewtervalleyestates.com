<script>
import { onMount } from "svelte"
import { page } from "$app/stores"
import { browser } from "$app/environment"
import { initGA, trackPageView } from "$lib/analytics"
import { webVitals } from "$lib/vitals"
import Header from "$lib/header/Header.svelte"
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

<Header />

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
