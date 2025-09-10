<script>
	import HeroSection from '$lib/HeroSection.svelte';
	import FeaturesSection from '$lib/FeaturesSection.svelte';
	import HomeDesignsSection from '$lib/HomeDesignsSection.svelte';
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

		// Load RealScout widget after page loads
		setTimeout(() => {
			loadRealScoutWidget();
		}, 1000);
	});

	function loadRealScoutWidget() {
		console.log('Loading RealScout widget...');
		
		// Check if RealScout script is already loaded
		if (document.querySelector('script[src*="realscout"]')) {
			console.log('RealScout script already loaded');
			initializeWidget();
			return;
		}

		// Load the script
		const script = document.createElement('script');
		script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
		script.type = 'module';
		script.crossOrigin = 'anonymous';
		script.onload = () => {
			console.log('RealScout script loaded');
			initializeWidget();
		};
		script.onerror = () => {
			console.error('Failed to load RealScout script');
		};
		document.head.appendChild(script);
	}

	function initializeWidget() {
		// Wait for custom element to be defined
		const checkElement = () => {
			if (customElements.get('realscout-office-listings')) {
				console.log('RealScout custom element is available');
				renderWidget();
			} else {
				console.log('Waiting for RealScout custom element...');
				setTimeout(checkElement, 500);
			}
		};
		checkElement();
	}

	function renderWidget() {
		const container = document.getElementById('realscout-container');
		if (container) {
			container.innerHTML = `
				<realscout-office-listings 
					agent-encoded-id="QWdlbnQtMjI1MDUw"
					sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
					listing-status="For Sale"
					property-types="SFR,MF,TC">
				</realscout-office-listings>
			`;
		}
	}
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
	
	<!-- RealScout Widget Section - Static HTML -->
	<section class="realscout-section">
		<div class="container">
			<h2>Current Property Listings</h2>
			<p>Browse our available homes in Las Vegas and surrounding areas</p>
			
			<div class="widget-container">
				<div id="realscout-container" class="realscout-widget">
					<div class="loading-message">
						<p>Loading property listings...</p>
					</div>
				</div>
			</div>
			
			<div class="fallback-content">
				<h3>Property Listings</h3>
				<p>If you don't see listings above, please refresh the page or contact us directly.</p>
				<div class="contact-info">
					<p><strong>Dr. Jan Duffy</strong></p>
					<p>Phone: <a href="tel:702-222-1964">(702) 222-1964</a></p>
					<p>Email: <a href="mailto:jan.duffy@pewtervalleyestates.com">jan.duffy@pewtervalleyestates.com</a></p>
				</div>
			</div>
		</div>
	</section>
	
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

	.realscout-section {
		padding: 4rem 0;
		background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.realscout-section h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #1e3a8a;
		text-align: center;
		margin-bottom: 1rem;
		font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.realscout-section p {
		text-align: center;
		color: #64748b;
		font-size: 1.2rem;
		margin-bottom: 3rem;
	}

	.widget-container {
		background: white;
		border-radius: 1rem;
		padding: 2rem;
		box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
		margin-bottom: 2rem;
		min-height: 400px;
	}

	.realscout-widget {
		min-height: 300px;
	}

	.loading-message {
		text-align: center;
		padding: 2rem;
		color: #64748b;
	}

	.fallback-content {
		background: white;
		padding: 2rem;
		border-radius: 1rem;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
		text-align: center;
	}

	.fallback-content h3 {
		color: #1e3a8a;
		margin-bottom: 1rem;
	}

	.contact-info {
		margin-top: 1rem;
		padding: 1rem;
		background: #f8fafc;
		border-radius: 0.5rem;
	}

	.contact-info a {
		color: #1e3a8a;
		text-decoration: none;
		font-weight: 600;
	}

	.contact-info a:hover {
		color: #fbbf24;
		text-decoration: underline;
	}

	/* RealScout widget styling */
	realscout-office-listings {
		--rs-listing-divider-color: rgb(101, 141, 172);
		width: 100%;
		min-height: 300px;
		display: block;
	}

	@media (max-width: 768px) {
		.realscout-section {
			padding: 2rem 0;
		}

		.realscout-section h2 {
			font-size: 2rem;
		}

		.widget-container {
			padding: 1rem;
		}

		.container {
			padding: 0 1rem;
		}
	}
</style>