<script>
  import { SITE_CONFIG } from "$lib/seo.js"
  import { generateReviewSchema } from "$lib/seo.js"
  
  // Google Reviews data - update with actual reviews from Google Business Profile
  // You can fetch this via Google My Business API or manually update
  export let reviews = []
  export let showSchema = true
  
  $: reviewSchema = showSchema ? generateReviewSchema(reviews) : null
</script>

{#if reviewSchema}
  <script type="application/ld+json">
    {JSON.stringify(reviewSchema)}
  </script>
{/if}

<section class="google-reviews">
  <div class="container">
    <div class="reviews-header">
      <h2>Google Reviews</h2>
      <p>See what our clients say about working with Dr. Jan Duffy</p>
    </div>
    
    <div class="reviews-actions">
      <a 
        href={SITE_CONFIG.googleReviewsUrl || "#"} 
        target="_blank" 
        rel="noopener noreferrer"
        class="review-button primary"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        Write a Review on Google
      </a>
      {#if SITE_CONFIG.googleBusinessProfile}
        <a 
          href={SITE_CONFIG.googleBusinessProfile} 
          target="_blank" 
          rel="noopener noreferrer"
          class="review-button secondary"
        >
          View All Google Reviews
        </a>
      {/if}
    </div>
    
    {#if reviews.length > 0}
      <div class="reviews-grid">
        {#each reviews as review}
          <div class="review-card">
            <div class="review-header">
              <div class="review-author">
                <div class="author-avatar">{review.author.charAt(0)}</div>
                <div class="author-info">
                  <div class="author-name">{review.author}</div>
                  <div class="review-date">{review.datePublished}</div>
                </div>
              </div>
              <div class="review-rating">
                {#each Array(review.rating) as _}
                  <span class="star">★</span>
                {/each}
              </div>
            </div>
            <p class="review-text">{review.reviewBody}</p>
          </div>
        {/each}
      </div>
    {:else}
      <div class="reviews-placeholder">
        <p>Reviews will be displayed here. Connect your Google Business Profile to show live reviews.</p>
      </div>
    {/if}
  </div>
</section>

<style>
  .google-reviews {
    padding: 4rem 0;
    background: #f8fafc;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .reviews-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .reviews-header h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 0.5rem;
  }
  
  .reviews-header p {
    color: #64748b;
    font-size: 1.125rem;
  }
  
  .reviews-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }
  
  .review-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
  }
  
  .review-button svg {
    width: 20px;
    height: 20px;
  }
  
  .review-button.primary {
    background: #1e3a8a;
    color: white;
  }
  
  .review-button.primary:hover {
    background: #1e40af;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 58, 138, 0.4);
  }
  
  .review-button.secondary {
    background: white;
    color: #1e3a8a;
    border: 2px solid #1e3a8a;
  }
  
  .review-button.secondary:hover {
    background: #f8fafc;
    transform: translateY(-2px);
  }
  
  .reviews-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .review-card {
    background: white;
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .review-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  .review-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }
  
  .review-author {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  
  .author-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1e3a8a, #1e40af);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.25rem;
  }
  
  .author-name {
    font-weight: 600;
    color: #1e3a8a;
    margin-bottom: 0.25rem;
  }
  
  .review-date {
    font-size: 0.875rem;
    color: #64748b;
  }
  
  .review-rating {
    display: flex;
    gap: 0.25rem;
  }
  
  .review-rating .star {
    color: #fbbf24;
    font-size: 1.25rem;
  }
  
  .review-text {
    color: #374151;
    line-height: 1.6;
    margin: 0;
  }
  
  .reviews-placeholder {
    text-align: center;
    padding: 3rem;
    background: white;
    border-radius: 1rem;
    color: #64748b;
  }
  
  @media (max-width: 768px) {
    .reviews-header h2 {
      font-size: 2rem;
    }
    
    .reviews-actions {
      flex-direction: column;
    }
    
    .review-button {
      width: 100%;
      justify-content: center;
    }
  }
</style>

