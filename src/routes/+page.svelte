<script>
	import Counter from '$lib/Counter.svelte';
	import RichmondAmericanAssets from '$lib/RichmondAmericanAssets.svelte';
	import { trackEvent } from '$lib/analytics';
	import { onMount } from 'svelte';

	// Track page engagement
	onMount(() => {
		// Track when the page loads
		trackEvent('page_view', {
			page_title: 'Home',
			page_location: window.location.href
		});
	});

	function handleButtonClick(buttonName) {
		trackEvent('button_click', {
			button_name: buttonName,
			page: 'home'
		});
	}
</script>

<RichmondAmericanAssets />

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		Pewter Valley Estates - Las Vegas, Nevada
	</h2>

	<p>Experience modern home design inspired by Richmond American Homes</p>

	<div class="demo-links">
		<a href="/richmond-demo" class="ra-button ra-button-primary">
			View Richmond American Demo
		</a>
		<a href="/about" class="ra-button ra-button-outline">
			About Us
		</a>
	</div>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	.demo-links {
		display: flex;
		gap: 1rem;
		justify-content: center;
		margin: 2rem 0;
		flex-wrap: wrap;
	}

	.ra-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.75rem 1.5rem;
		font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		font-size: 1rem;
		font-weight: 600;
		line-height: 1;
		border-radius: 0.5rem;
		border: none;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		text-decoration: none;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	}

	.ra-button-primary {
		background-color: #1e3a8a;
		color: white;
	}

	.ra-button-primary:hover {
		background-color: #1e40af;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
		transform: translateY(-1px);
	}

	.ra-button-outline {
		background-color: transparent;
		color: #1e3a8a;
		border: 2px solid #1e3a8a;
	}

	.ra-button-outline:hover {
		background-color: #1e3a8a;
		color: white;
	}
</style>
