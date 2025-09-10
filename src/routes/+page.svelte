<script>
import { onMount } from "svelte"
import { trackEvent } from "$lib/analytics"
import SEOHead from "$lib/SEOHead.svelte"
import Breadcrumbs from "$lib/Breadcrumbs.svelte"
import RichmondAmericanAssets from "$lib/RichmondAmericanAssets.svelte"
import HeroSection from "$lib/HeroSection.svelte"
import FeaturesSection from "$lib/FeaturesSection.svelte"
import HomeDesignsSection from "$lib/HomeDesignsSection.svelte"
import TestimonialsSection from "$lib/TestimonialsSection.svelte"
import CTASection from "$lib/CTASection.svelte"
import SimpleAnimatedSection from "$lib/SimpleAnimatedSection.svelte"
import Analytics from "$lib/Analytics.svelte"

// SEO data for homepage
const pageData = {
  title: "Pewter Valley Estates Las Vegas - New Construction Homes",
  description:
    "Discover your dream home at Pewter Valley Estates in Las Vegas, Nevada. Modern new construction homes with 3-5 bedrooms, resort-style amenities, and prime Las Vegas locations.",
  image: "https://www.pewtervalleyestates.com/og-image.jpg",
  type: "website",
  canonical: "https://www.pewtervalleyestates.com",
}

// Breadcrumb data
const breadcrumbs = [
  { name: "Home", href: "/" }
]

// FAQ data for structured data
const faqData = [
  {
    question: "What types of homes are available at Pewter Valley Estates?",
    answer:
      "Pewter Valley Estates offers modern new construction homes with 3-5 bedrooms, 2-4 bathrooms, and 2-3 car garages. All homes feature open floor plans, energy-efficient designs, and smart home capabilities.",
  },
  {
    question: "What amenities are available in the community?",
    answer:
      "The community features resort-style amenities including a community pool, walking trails, parks, playgrounds, and beautifully landscaped common areas perfect for families.",
  },
  {
    question: "Where is Pewter Valley Estates located?",
    answer:
      "Pewter Valley Estates is located in Las Vegas, Nevada, offering easy access to major highways, shopping, dining, and entertainment while maintaining a peaceful residential atmosphere.",
  },
  {
    question: "What is the price range for homes at Pewter Valley Estates?",
    answer:
      "Homes at Pewter Valley Estates start from $400,000, offering excellent value for modern new construction in the Las Vegas area.",
  },
  {
    question: "Who is the builder for Pewter Valley Estates?",
    answer:
      "Pewter Valley Estates is built by Richmond American Homes, a trusted builder with over 40 years of experience in creating quality new construction homes.",
  },
]

// Breadcrumbs for homepage
const _breadcrumbs = [
  { name: "Las Vegas New Homes", url: "/listings" },
  { name: "Pewter Valley Estates", url: "/" },
]

// Track page engagement
onMount(() => {
  // Track when the page loads
  trackEvent("page_view", {
    page_title: "Home",
    page_location: window.location.href,
  })
})
</script>

<!-- SEO Head Component -->
<SEOHead 
  {pageData} 
  includeLocalBusiness={true} 
  includeRealEstate={true} 
  includeFAQ={true} 
  {faqData} 
/>

<!-- Global Assets -->
<RichmondAmericanAssets />

<!-- Breadcrumb Navigation -->
<Breadcrumbs {breadcrumbs} />

<!-- Main Content -->
<main>
  <!-- Hero Section -->
  <HeroSection />
  
  <!-- Features Section -->
  <FeaturesSection />
  
  <!-- Home Designs Section -->
  <HomeDesignsSection />
  
  <!-- Property Listings Preview Section -->
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
  
  <!-- Testimonials Section -->
  <TestimonialsSection />
  
  <!-- CTA Section -->
  <CTASection />
  
  <!-- Animated Section -->
  <SimpleAnimatedSection>
    <p>This is an animated section with content.</p>
  </SimpleAnimatedSection>
</main>

<!-- Analytics -->
<Analytics />

<style>
  .listings-preview {
    padding: 4rem 0;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .listings-preview h2 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-color, #0A2540);
    margin-bottom: 1rem;
  }
  
  .listings-preview p {
    text-align: center;
    font-size: 1.125rem;
    color: var(--text-secondary, #666);
    margin-bottom: 3rem;
  }
  
  .listings-preview-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .preview-card,
  .contact-card {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .preview-card:hover,
  .contact-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  .preview-card h3,
  .contact-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--primary-color, #0A2540);
    margin-bottom: 1rem;
  }
  
  .preview-card p,
  .contact-card p {
    color: var(--text-secondary, #666);
    margin-bottom: 1.5rem;
  }
  
  .feature-list {
    list-style: none;
    padding: 0;
    margin: 1.5rem 0;
  }
  
  .feature-list li {
    padding: 0.5rem 0;
    color: var(--text-primary, #333);
    position: relative;
    padding-left: 1.5rem;
  }
  
  .feature-list li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--accent-color, #3A8DDE);
    font-weight: bold;
  }
  
  .contact-details {
    margin: 1.5rem 0;
  }
  
  .contact-details p {
    margin: 0.5rem 0;
    color: var(--text-primary, #333);
  }
  
  .contact-details a {
    color: var(--accent-color, #3A8DDE);
    text-decoration: none;
    font-weight: 500;
  }
  
  .contact-details a:hover {
    text-decoration: underline;
  }
  
  .cta-button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: var(--accent-color, #3A8DDE);
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
  }
  
  .cta-button:hover {
    background: var(--accent-hover, #2c6bb3);
    transform: translateY(-2px);
  }
  
  .cta-button.secondary {
    background: var(--primary-color, #0A2540);
  }
  
  .cta-button.secondary:hover {
    background: var(--primary-hover, #1a3a5c);
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .listings-preview-content {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .listings-preview h2 {
      font-size: 2rem;
    }
    
    .preview-card,
    .contact-card {
      padding: 1.5rem;
    }
  }
</style>