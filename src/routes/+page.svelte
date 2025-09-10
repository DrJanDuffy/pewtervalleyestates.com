<script>
import { onMount } from "svelte"
import { trackEvent } from "$lib/analytics"

// Track page engagement
onMount(() => {
  // Track when the page loads
  trackEvent("page_view", {
    page_title: "Home",
    page_location: window.location.href,
  })

  // Load RealScout widget after page loads
  setTimeout(() => {
    loadRealScoutWidget()
  }, 1000)
})

function loadRealScoutWidget() {
  console.log("Loading RealScout widget...")

  // Check if RealScout script is already loaded
  if (document.querySelector('script[src*="realscout"]')) {
    console.log("RealScout script already loaded")
    initializeWidget()
    return
  }

  // Load the script
  const script = document.createElement("script")
  script.src = "https://em.realscout.com/widgets/realscout-web-components.umd.js"
  script.type = "module"
  script.crossOrigin = "anonymous"
  script.onload = () => {
    console.log("RealScout script loaded")
    initializeWidget()
  }
  script.onerror = () => {
    console.error("Failed to load RealScout script")
  }
  document.head.appendChild(script)
}

function initializeWidget() {
  // Wait for custom element to be defined
  const checkElement = () => {
    if (customElements.get("realscout-office-listings")) {
      console.log("RealScout custom element is available")
      renderWidget()
    } else {
      console.log("Waiting for RealScout custom element...")
      setTimeout(checkElement, 500)
    }
  }
  checkElement()
}

function renderWidget() {
  const container = document.getElementById("realscout-container")
  if (container) {
    container.innerHTML = `
				<realscout-office-listings 
					agent-encoded-id="QWdlbnQtMjI1MDUw"
					sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
					listing-status="For Sale"
					property-types="SFR,MF,TC">
				</realscout-office-listings>
			`
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
	
	<!-- Property Listings Section -->
	<section class="listings-preview">
		<div class="container">
			<h2>Current Property Listings</h2>
			<p>Browse our available homes in Las Vegas and surrounding areas</p>
			
			<div class="listings-preview-content">
				<div class="preview-card">
					<h3>🏠 Featured Properties</h3>
					<p>Discover your dream home with our curated selection of available properties</p>
					<ul class="feature-list">
						<li>Modern new construction homes</li>
						<li>3-5 bedrooms, 2-4 bathrooms</li>
						<li>Resort-style amenities</li>
						<li>Prime Las Vegas locations</li>
					</ul>
					<a href="/listings" class="cta-button">View All Listings</a>
				</div>
				
				<div class="contact-card">
					<h3>📞 Contact Dr. Jan Duffy</h3>
					<p>Your trusted real estate agent for Las Vegas properties</p>
					<div class="contact-details">
						<p><strong>Phone:</strong> <a href="tel:702-222-1964">(702) 222-1964</a></p>
						<p><strong>Email:</strong> <a href="mailto:jan.duffy@pewtervalleyestates.com">jan.duffy@pewtervalleyestates.com</a></p>
					</div>
					<a href="/contact" class="cta-button secondary">Get in Touch</a>
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

	.listings-preview {
		padding: 4rem 0;
		background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.listings-preview h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #1e3a8a;
		text-align: center;
		margin-bottom: 1rem;
		font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.listings-preview p {
		text-align: center;
		color: #64748b;
		font-size: 1.2rem;
		margin-bottom: 3rem;
	}

	.listings-preview-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	.preview-card,
	.contact-card {
		background: white;
		padding: 2rem;
		border-radius: 1rem;
		box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
		text-align: center;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.preview-card:hover,
	.contact-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15);
	}

	.preview-card h3,
	.contact-card h3 {
		font-size: 1.5rem;
		color: #1e3a8a;
		margin-bottom: 1rem;
	}

	.preview-card p,
	.contact-card p {
		color: #64748b;
		margin-bottom: 1.5rem;
		text-align: center;
	}

	.feature-list {
		text-align: left;
		list-style: none;
		padding: 0;
		margin: 1.5rem 0;
	}

	.feature-list li {
		padding: 0.5rem 0;
		color: #374151;
		position: relative;
		padding-left: 1.5rem;
	}

	.feature-list li::before {
		content: "✓";
		position: absolute;
		left: 0;
		color: #10b981;
		font-weight: bold;
	}

	.contact-details {
		background: #f8fafc;
		padding: 1rem;
		border-radius: 0.5rem;
		margin: 1rem 0;
		text-align: left;
	}

	.contact-details p {
		margin: 0.5rem 0;
		text-align: left;
	}

	.contact-details a {
		color: #1e3a8a;
		text-decoration: none;
		font-weight: 600;
	}

	.contact-details a:hover {
		color: #fbbf24;
		text-decoration: underline;
	}

	.cta-button {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		background: #1e3a8a;
		color: white;
		text-decoration: none;
		border-radius: 0.5rem;
		font-weight: 600;
		transition: all 0.3s ease;
		margin-top: 1rem;
	}

	.cta-button:hover {
		background: #1e40af;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(30, 58, 138, 0.4);
	}

	.cta-button.secondary {
		background: #fbbf24;
		color: #1e3a8a;
	}

	.cta-button.secondary:hover {
		background: #f59e0b;
		box-shadow: 0 4px 12px rgba(251, 191, 36, 0.4);
	}

	@media (max-width: 768px) {
		.listings-preview {
			padding: 2rem 0;
		}

		.listings-preview h2 {
			font-size: 2rem;
		}

		.listings-preview-content {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.preview-card,
		.contact-card {
			padding: 1.5rem;
		}

		.container {
			padding: 0 1rem;
		}
	}
</style>