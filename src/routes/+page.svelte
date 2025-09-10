<script>
	import HeroSection from '$lib/HeroSection.svelte';
	import FeaturesSection from '$lib/FeaturesSection.svelte';
	import HomeDesignsSection from '$lib/HomeDesignsSection.svelte';
	import RealScoutSimple from '$lib/RealScoutSimple.svelte';
	import TestimonialsSection from '$lib/TestimonialsSection.svelte';
	import CTASection from '$lib/CTASection.svelte';
	import SimpleAnimatedSection from '$lib/SimpleAnimatedSection.svelte';
	import Analytics from '$lib/Analytics.svelte';
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
</script>

<RichmondAmericanAssets />

<svelte:head>
	<title>Pewter Valley Estates - Las Vegas New Homes | Richmond American Homes</title>
	<meta name="description" content="Discover your dream home at Pewter Valley Estates in Las Vegas, Nevada. Modern designs, resort-style amenities, and prime location. New construction homes from Richmond American." />
	<meta property="og:title" content="Pewter Valley Estates - Las Vegas New Homes | Richmond American Homes" />
	<meta property="og:description" content="Discover your dream home at Pewter Valley Estates in Las Vegas, Nevada. Modern designs, resort-style amenities, and prime location. New construction homes from Richmond American." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.pewtervalleyestates.com/" />
</svelte:head>

<Analytics />

<main>
	<HeroSection />
	<SimpleAnimatedSection delay={0.2}>
		<FeaturesSection />
	</SimpleAnimatedSection>
	<SimpleAnimatedSection delay={0.4} direction="up">
		<HomeDesignsSection />
	</SimpleAnimatedSection>
	<SimpleAnimatedSection delay={0.5}>
		<RealScoutSimple />
	</SimpleAnimatedSection>
	<SimpleAnimatedSection delay={0.6}>
		<TestimonialsSection />
	</SimpleAnimatedSection>
	<SimpleAnimatedSection delay={0.8} direction="up">
		<CTASection />
	</SimpleAnimatedSection>
</main>

<style>
	main {
		overflow-x: hidden;
	}
</style>
