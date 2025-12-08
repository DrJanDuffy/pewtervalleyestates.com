<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import SEOHead from "$lib/SEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import NAPDisplay from "$lib/NAPDisplay.svelte"
  import GoogleMap from "$lib/GoogleMap.svelte"
  import GoogleReviews from "$lib/GoogleReviews.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"
  
  // SEO data for About page
  const pageData = {
    title: "About Dr. Jan Duffy - Las Vegas Real Estate Agent | Pewter Valley Estates",
    description: `Learn about Dr. Jan Duffy, your trusted Las Vegas real estate agent specializing in new construction homes at Pewter Valley Estates. ${SITE_CONFIG.phone} - ${SITE_CONFIG.email}`,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    type: "website",
    canonical: `${SITE_CONFIG.url}/about`,
    keywords: "Dr. Jan Duffy, Las Vegas real estate agent, Pewter Valley Estates, new construction homes, Las Vegas realtor",
  }
  
  const breadcrumbs = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "About", url: `${SITE_CONFIG.url}/about` },
  ]
  
  const faqData = [
    {
      question: "Who is Dr. Jan Duffy?",
      answer: "Dr. Jan Duffy is a trusted Las Vegas real estate agent specializing in new construction homes and luxury properties. With extensive knowledge of the Las Vegas market, she helps clients find their dream homes at Pewter Valley Estates and throughout the greater Las Vegas area.",
    },
    {
      question: "What areas does Dr. Jan Duffy serve?",
      answer: "Dr. Jan Duffy serves the entire Las Vegas metropolitan area including Las Vegas, Henderson, Summerlin, Green Valley, Anthem, Inspirada, Mountain's Edge, and Silverado Ranch.",
    },
    {
      question: "How can I contact Dr. Jan Duffy?",
      answer: `You can reach Dr. Jan Duffy by phone at ${SITE_CONFIG.phone}, email at ${SITE_CONFIG.email}, or by filling out the contact form on our website. She's available Monday-Friday 9am-6pm and Saturday 10am-4pm.`,
    },
    {
      question: "What makes Dr. Jan Duffy different from other real estate agents?",
      answer: "Dr. Jan Duffy combines deep local market knowledge with personalized service. She specializes in new construction homes and has strong relationships with builders like Richmond American Homes, ensuring her clients get the best deals and service throughout the home buying process.",
    },
  ]
  
  onMount(() => {
    trackEvent("page_view", {
      page_title: "About",
      page_location: window.location.href,
    })
  })
</script>

<svelte:head>
  <title>{pageData.title}</title>
  <meta name="description" content={pageData.description} />
</svelte:head>

<!-- SEO Head Component -->
<SEOHead 
  {pageData} 
  includeLocalBusiness={true} 
  includeFAQ={true} 
  {faqData} 
/>

<Breadcrumbs {breadcrumbs} />

<main class="about-page">
  <!-- Hero Section -->
  <section class="about-hero">
    <div class="container">
      <div class="hero-content">
        <h1>About Dr. Jan Duffy</h1>
        <p class="hero-subtitle">Your Trusted Las Vegas Real Estate Expert</p>
        <p class="hero-description">
          With years of experience in the Las Vegas real estate market, Dr. Jan Duffy specializes in helping clients find their perfect home, whether it's a new construction property at Pewter Valley Estates or a luxury home throughout the greater Las Vegas area.
        </p>
      </div>
    </div>
  </section>

  <!-- About Content -->
  <section class="about-content">
    <div class="container">
      <div class="content-grid">
        <div class="content-main">
          <h2>Experience & Expertise</h2>
          <p>
            Dr. Jan Duffy brings a unique combination of expertise, dedication, and local market knowledge to every real estate transaction. Specializing in new construction homes and luxury properties, she has helped countless families find their dream homes in Las Vegas.
          </p>
          
          <h3>Why Choose Dr. Jan Duffy?</h3>
          <ul class="feature-list">
            <li>
              <strong>Local Market Expertise:</strong> Deep knowledge of Las Vegas neighborhoods, market trends, and new construction communities
            </li>
            <li>
              <strong>Builder Relationships:</strong> Strong connections with premier builders like Richmond American Homes
            </li>
            <li>
              <strong>Personalized Service:</strong> One-on-one attention tailored to your unique needs and timeline
            </li>
            <li>
              <strong>Full-Service Support:</strong> Guidance through every step from initial search to closing and beyond
            </li>
            <li>
              <strong>Technology-Enabled:</strong> Access to real-time MLS listings and advanced search tools
            </li>
          </ul>
          
          <h3>Service Areas</h3>
          <p>
            Dr. Jan Duffy serves clients throughout the Las Vegas metropolitan area, including:
          </p>
          <div class="service-areas">
            <span class="area-tag">Las Vegas</span>
            <span class="area-tag">Henderson</span>
            <span class="area-tag">Summerlin</span>
            <span class="area-tag">Green Valley</span>
            <span class="area-tag">Anthem</span>
            <span class="area-tag">Inspirada</span>
            <span class="area-tag">Mountain's Edge</span>
            <span class="area-tag">Silverado Ranch</span>
          </div>
        </div>
        
        <div class="content-sidebar">
          <NAPDisplay showGoogleReviewsLink={true} showDirections={true} />
        </div>
      </div>
    </div>
  </section>

  <!-- Google Map Section -->
  <section class="map-section">
    <GoogleMap />
  </section>

  <!-- Google Reviews Section -->
  <section class="reviews-section">
    <GoogleReviews />
  </section>

  <!-- Contact CTA -->
  <section class="contact-cta">
    <div class="container">
      <h2>Ready to Find Your Dream Home?</h2>
      <p>Contact Dr. Jan Duffy today to start your home buying journey</p>
      <div class="cta-buttons">
        <a href="/contact" class="cta-button primary">Get in Touch</a>
        <a href="tel:{SITE_CONFIG.phoneTel}" class="cta-button secondary">Call {SITE_CONFIG.phone}</a>
      </div>
    </div>
  </section>
</main>

<style>
  .about-page {
    min-height: 100vh;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  /* Hero Section */
  .about-hero {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    color: white;
    padding: 4rem 0;
    text-align: center;
  }
  
  .hero-content h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    color: #fbbf24;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  .hero-description {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    opacity: 0.9;
    line-height: 1.6;
  }
  
  /* About Content */
  .about-content {
    padding: 4rem 0;
    background: white;
  }
  
  .content-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
  }
  
  .content-main h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 1rem;
    margin-top: 0;
  }
  
  .content-main h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  .content-main p {
    color: #374151;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
  }
  
  .feature-list {
    list-style: none;
    padding: 0;
    margin: 1.5rem 0;
  }
  
  .feature-list li {
    padding: 1rem 0;
    border-bottom: 1px solid #e2e8f0;
    color: #374151;
    line-height: 1.6;
  }
  
  .feature-list li:last-child {
    border-bottom: none;
  }
  
  .feature-list strong {
    color: #1e3a8a;
  }
  
  .service-areas {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1rem;
  }
  
  .area-tag {
    padding: 0.5rem 1rem;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    color: #1e3a8a;
    font-weight: 500;
    font-size: 0.875rem;
  }
  
  .content-sidebar {
    position: sticky;
    top: 2rem;
    height: fit-content;
  }
  
  /* Map Section */
  .map-section {
    background: #f8fafc;
  }
  
  /* Reviews Section */
  .reviews-section {
    background: white;
  }
  
  /* Contact CTA */
  .contact-cta {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    color: white;
    padding: 4rem 0;
    text-align: center;
  }
  
  .contact-cta h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .contact-cta p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
  
  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .cta-button {
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.125rem;
    transition: all 0.3s ease;
  }
  
  .cta-button.primary {
    background: white;
    color: #1e3a8a;
  }
  
  .cta-button.primary:hover {
    background: #f8fafc;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  .cta-button.secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
  }
  
  .cta-button.secondary:hover {
    background: white;
    color: #1e3a8a;
    transform: translateY(-2px);
  }
  
  @media (max-width: 968px) {
    .content-grid {
      grid-template-columns: 1fr;
    }
    
    .content-sidebar {
      position: static;
    }
    
    .hero-content h1 {
      font-size: 2.5rem;
    }
    
    .contact-cta h2 {
      font-size: 2rem;
    }
    
    .cta-buttons {
      flex-direction: column;
      align-items: stretch;
    }
    
    .cta-button {
      width: 100%;
      text-align: center;
    }
  }
</style>

