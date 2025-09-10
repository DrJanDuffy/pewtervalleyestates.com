<script>
import { trackEvent } from "$lib/analytics"

function _handleCtaClick(action) {
  trackEvent("hero_cta_click", {
    action: action,
    section: "hero",
  })
}
</script>

<section class="hero">
  <div class="hero-background">
    <img 
      src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop" 
      alt="Pewter Valley Estates - Beautiful Home Exterior"
      class="hero-image"
    />
    <div class="hero-overlay"></div>
  </div>
  
  <div class="hero-content">
    <div class="container">
      <div class="hero-text">
        <h1 class="hero-title">
          Welcome to <span class="highlight">Pewter Valley Estates</span>
        </h1>
        <p class="hero-subtitle">
          Discover your dream home in Las Vegas, Nevada. Modern designs, 
          resort-style amenities, and the perfect location for your family.
        </p>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">50+</span>
            <span class="stat-label">Homes Available</span>
          </div>
          <div class="stat">
            <span class="stat-number">3-5</span>
            <span class="stat-label">Bedrooms</span>
          </div>
          <div class="stat">
            <span class="stat-number">2-4</span>
            <span class="stat-label">Bathrooms</span>
          </div>
        </div>
        <div class="hero-actions">
          <a href="/richmond-demo" class="cta-button cta-primary" on:click={() => handleCtaClick('virtual_tour')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M21 12H9"/>
            </svg>
            Take Virtual Tour
          </a>
          <a href="/contact" class="cta-button cta-secondary" on:click={() => handleCtaClick('schedule_tour')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"/>
            </svg>
            Schedule Tour
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="scroll-indicator">
    <div class="scroll-arrow"></div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    height: 100vh;
    min-height: 600px;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  
  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  
  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(30, 58, 138, 0.8) 0%,
      rgba(30, 58, 138, 0.6) 50%,
      rgba(30, 58, 138, 0.4) 100%
    );
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
  }
  
  .hero-text {
    max-width: 600px;
    color: white;
  }
  
  .hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  .highlight {
    color: #fbbf24;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    opacity: 0.95;
    font-weight: 400;
  }
  
  .hero-stats {
    display: flex;
    gap: 2rem;
    margin-bottom: 2.5rem;
    flex-wrap: wrap;
  }
  
  .stat {
    text-align: center;
  }
  
  .stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: #fbbf24;
    line-height: 1;
  }
  
  .stat-label {
    display: block;
    font-size: 0.875rem;
    opacity: 0.9;
    margin-top: 0.25rem;
  }
  
  .hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.5rem;
    text-decoration: none;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  .cta-primary {
    background-color: #fbbf24;
    color: #1e3a8a;
    box-shadow: 0 4px 14px 0 rgba(251, 191, 36, 0.4);
  }
  
  .cta-primary:hover {
    background-color: #f59e0b;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px 0 rgba(251, 191, 36, 0.6);
  }
  
  .cta-secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;
  }
  
  .cta-secondary:hover {
    background-color: white;
    color: #1e3a8a;
    transform: translateY(-2px);
  }
  
  .cta-button svg {
    width: 20px;
    height: 20px;
  }
  
  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    animation: bounce 2s infinite;
  }
  
  .scroll-arrow {
    width: 24px;
    height: 24px;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    transform: rotate(45deg);
    opacity: 0.8;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
  
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
    }
    
    .hero-subtitle {
      font-size: 1.1rem;
    }
    
    .hero-stats {
      gap: 1.5rem;
    }
    
    .stat-number {
      font-size: 1.5rem;
    }
    
    .hero-actions {
      flex-direction: column;
      align-items: stretch;
    }
    
    .cta-button {
      justify-content: center;
    }
  }
  
  @media (max-width: 480px) {
    .hero-title {
      font-size: 2rem;
    }
    
    .hero-stats {
      justify-content: center;
    }
  }
</style>
