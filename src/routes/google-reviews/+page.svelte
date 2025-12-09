<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import EnhancedSEOHead from "$lib/EnhancedSEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import NAPDisplay from "$lib/NAPDisplay.svelte"
  import GoogleMap from "$lib/GoogleMap.svelte"
  import GoogleReviews from "$lib/GoogleReviews.svelte"
  import RelatedPages from "$lib/RelatedPages.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"

  const pageData = {
    title: "Google Reviews for Pewter Valley Estates | Dr. Jan Duffy Real Estate",
    description:
      "Read Google reviews for Pewter Valley Estates and Dr. Jan Duffy, your dedicated Las Vegas real estate expert for Southwest Las Vegas and zip code 89183.",
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    type: "website",
    canonical: `${SITE_CONFIG.url}/google-reviews`,
    keywords:
      "Pewter Valley Estates reviews, Dr. Jan Duffy reviews, Las Vegas real estate reviews, Google reviews Las Vegas realtor, Southwest Las Vegas real estate agent reviews"
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Google Reviews", url: "/google-reviews" }
  ]

  onMount(() => {
    trackEvent("page_view", {
      page_title: "Google Reviews",
      page_location: window.location.href
    })
  })
</script>

<EnhancedSEOHead {pageData} {breadcrumbs} />
<Breadcrumbs {breadcrumbs} />

<main class="reviews-page">
  <section class="hero">
    <div class="container">
      <h1>Google Reviews for Pewter Valley Estates & Dr. Jan Duffy</h1>
      <p class="hero-subtitle">
        See what homeowners and buyers are saying about their experience in Pewter Valley Estates and working with Dr. Jan Duffy in Southwest Las Vegas (89183).
      </p>
    </div>
  </section>

  <section class="review-actions">
    <div class="container">
      <div class="actions-grid">
        <div class="card">
          <h2>Write a Review on Google</h2>
          <p>Share your experience buying, selling, or investing in Pewter Valley Estates with Dr. Jan Duffy.</p>
          <a
            href={SITE_CONFIG.googleReviewsUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            class="primary-btn"
          >
            ⭐ Write a Google Review
          </a>
        </div>
        <div class="card">
          <h2>View All Google Reviews</h2>
          <p>See the full list of reviews on Google for Pewter Valley Estates and Dr. Jan Duffy.</p>
          <a
            href={SITE_CONFIG.googleBusinessProfile || "#"}
            target="_blank"
            rel="noopener noreferrer"
            class="secondary-btn"
          >
            📖 View Reviews on Google
          </a>
        </div>
      </div>
    </div>
  </section>

  <GoogleReviews showSchema={false} />

  <section class="nap-section">
    <div class="container">
      <NAPDisplay showGoogleReviewsLink={true} showDirections={true} />
    </div>
  </section>

  <section class="map-section">
    <GoogleMap />
  </section>

  <RelatedPages currentPage="/google-reviews" />
</main>

<style>
  .reviews-page {
    background: #f8fafc;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .hero {
    padding: 3rem 0 2rem;
    text-align: center;
  }

  .hero h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    max-width: 720px;
    margin: 0 auto;
    color: #475569;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  .review-actions {
    padding: 2rem 0 1rem;
  }

  .actions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
  }

  .card {
    background: #ffffff;
    border-radius: 1rem;
    padding: 1.75rem;
    box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.15);
    border: 1px solid #e2e8f0;
  }

  .card h2 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-bottom: 0.5rem;
  }

  .card p {
    color: #64748b;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  .primary-btn,
  .secondary-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 999px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .primary-btn {
    background: #1e3a8a;
    color: #ffffff;
  }

  .primary-btn:hover {
    background: #1e40af;
    box-shadow: 0 8px 20px rgba(30, 64, 175, 0.4);
    transform: translateY(-1px);
  }

  .secondary-btn {
    border: 1px solid #1e3a8a;
    color: #1e3a8a;
    background: #ffffff;
  }

  .secondary-btn:hover {
    background: #eff6ff;
    transform: translateY(-1px);
  }

  .nap-section {
    padding: 3rem 0;
  }

  .map-section {
    padding: 0 0 3rem;
  }

  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }

    .container {
      padding: 0 1.25rem;
    }
  }
</style>

