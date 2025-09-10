<script>
  import { trackEvent } from '$lib/analytics';
  
  const homeDesigns = [
    {
      id: 'the-avalon',
      name: 'The Avalon',
      bedrooms: 4,
      bathrooms: 3,
      sqft: '2,847',
      price: 'From $485,000',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
      features: ['Open Concept Living', 'Gourmet Kitchen', 'Master Suite', '2-Car Garage'],
      popular: true
    },
    {
      id: 'the-berkeley',
      name: 'The Berkeley',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: '2,156',
      price: 'From $425,000',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=400&fit=crop',
      features: ['Great Room', 'Island Kitchen', 'Loft Space', 'Covered Patio'],
      popular: false
    },
    {
      id: 'the-cambridge',
      name: 'The Cambridge',
      bedrooms: 5,
      bathrooms: 4,
      sqft: '3,245',
      price: 'From $565,000',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop',
      features: ['Formal Dining', 'Bonus Room', 'Walk-in Closets', '3-Car Garage'],
      popular: true
    }
  ];
  
  function handleDesignClick(design) {
    trackEvent('home_design_click', {
      design_name: design.name,
      design_id: design.id,
      section: 'home_designs'
    });
  }
  
  function handleScheduleTour(design) {
    trackEvent('schedule_tour_click', {
      design_name: design.name,
      design_id: design.id,
      section: 'home_designs'
    });
  }
</script>

<section class="home-designs">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Featured Home Designs</h2>
      <p class="section-subtitle">
        Choose from our collection of thoughtfully designed floor plans, each crafted to meet your family's unique needs.
      </p>
    </div>
    
    <div class="designs-grid">
      {#each homeDesigns as design, index}
        <div class="design-card" class:popular={design.popular}>
          {#if design.popular}
            <div class="popular-badge">Most Popular</div>
          {/if}
          
          <div class="design-image-container">
            <img 
              src={design.image} 
              alt={design.name + ' floor plan'}
              class="design-image"
            />
            <div class="design-overlay">
              <button class="view-details-btn" on:click={() => handleDesignClick(design)}>
                View Details
              </button>
            </div>
          </div>
          
          <div class="design-content">
            <div class="design-header">
              <h3 class="design-name">{design.name}</h3>
              <div class="design-price">{design.price}</div>
            </div>
            
            <div class="design-specs">
              <div class="spec">
                <span class="spec-icon">🛏️</span>
                <span class="spec-text">{design.bedrooms} Bedrooms</span>
              </div>
              <div class="spec">
                <span class="spec-icon">🚿</span>
                <span class="spec-text">{design.bathrooms} Bathrooms</span>
              </div>
              <div class="spec">
                <span class="spec-icon">📐</span>
                <span class="spec-text">{design.sqft} Sq Ft</span>
              </div>
            </div>
            
            <div class="design-features">
              {#each design.features as feature}
                <span class="feature-tag">{feature}</span>
              {/each}
            </div>
            
            <div class="design-actions">
              <button 
                class="action-btn primary" 
                on:click={() => handleScheduleTour(design)}
              >
                Schedule Tour
              </button>
              <button 
                class="action-btn secondary" 
                on:click={() => handleDesignClick(design)}
              >
                View Floor Plan
              </button>
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    <div class="section-footer">
      <a href="/richmond-demo" class="view-all-btn">
        View All Floor Plans
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>
</section>

<style>
  .home-designs {
    padding: 5rem 0;
    background: white;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 1rem;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  .section-subtitle {
    font-size: 1.2rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  .designs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .design-card {
    background: white;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 1px solid #e2e8f0;
    position: relative;
  }
  
  .design-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  .design-card.popular {
    border-color: #fbbf24;
  }
  
  .popular-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #fbbf24;
    color: #1e3a8a;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 600;
    z-index: 2;
  }
  
  .design-image-container {
    position: relative;
    height: 250px;
    overflow: hidden;
  }
  
  .design-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .design-card:hover .design-image {
    transform: scale(1.05);
  }
  
  .design-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(30, 58, 138, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .design-card:hover .design-overlay {
    opacity: 1;
  }
  
  .view-details-btn {
    background: white;
    color: #1e3a8a;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .view-details-btn:hover {
    background: #fbbf24;
    transform: translateY(-2px);
  }
  
  .design-content {
    padding: 1.5rem;
  }
  
  .design-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }
  
  .design-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e3a8a;
    margin: 0;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  .design-price {
    font-size: 1.125rem;
    font-weight: 700;
    color: #fbbf24;
  }
  
  .design-specs {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }
  
  .spec {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #64748b;
    font-size: 0.875rem;
  }
  
  .spec-icon {
    font-size: 1rem;
  }
  
  .design-features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .feature-tag {
    background: #f1f5f9;
    color: #475569;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 500;
  }
  
  .design-actions {
    display: flex;
    gap: 0.75rem;
  }
  
  .action-btn {
    flex: 1;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    font-size: 0.875rem;
  }
  
  .action-btn.primary {
    background: #1e3a8a;
    color: white;
  }
  
  .action-btn.primary:hover {
    background: #1e40af;
    transform: translateY(-1px);
  }
  
  .action-btn.secondary {
    background: transparent;
    color: #1e3a8a;
    border: 1px solid #1e3a8a;
  }
  
  .action-btn.secondary:hover {
    background: #1e3a8a;
    color: white;
  }
  
  .section-footer {
    text-align: center;
  }
  
  .view-all-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #fbbf24;
    color: #1e3a8a;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .view-all-btn:hover {
    background: #f59e0b;
    transform: translateY(-2px);
  }
  
  .view-all-btn svg {
    width: 20px;
    height: 20px;
  }
  
  @media (max-width: 768px) {
    .home-designs {
      padding: 3rem 0;
    }
    
    .section-title {
      font-size: 2rem;
    }
    
    .designs-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .design-actions {
      flex-direction: column;
    }
  }
</style>
