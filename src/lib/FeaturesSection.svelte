<script>
import { trackEvent } from "$lib/analytics"

const _features = [
  {
    icon: "🏠",
    title: "Modern Home Designs",
    description:
      "Contemporary floor plans with open concepts, high ceilings, and premium finishes throughout.",
    highlight: "50+ Floor Plans",
  },
  {
    icon: "🏊‍♀️",
    title: "Resort-Style Amenities",
    description:
      "Community pool, fitness center, clubhouse, and walking trails for an active lifestyle.",
    highlight: "5-Star Amenities",
  },
  {
    icon: "📍",
    title: "Prime Las Vegas Location",
    description:
      "Convenient access to shopping, dining, entertainment, and major employment centers.",
    highlight: "15 Min to Strip",
  },
  {
    icon: "🌱",
    title: "Energy Efficient",
    description:
      "Built with the latest green technology to reduce utility costs and environmental impact.",
    highlight: "LEED Certified",
  },
  {
    icon: "🛡️",
    title: "10-Year Warranty",
    description: "Comprehensive warranty coverage on all major systems and structural components.",
    highlight: "Peace of Mind",
  },
  {
    icon: "💰",
    title: "Competitive Pricing",
    description:
      "Exceptional value with flexible financing options and special incentives available.",
    highlight: "From $350K",
  },
]

function _handleFeatureClick(feature) {
  trackEvent("feature_click", {
    feature: feature.title,
    section: "features",
  })
}
</script>

<section class="features">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Why Choose Pewter Valley Estates?</h2>
      <p class="section-subtitle">
        Experience the perfect blend of luxury, comfort, and convenience in one of Las Vegas' most desirable communities.
      </p>
    </div>
    
    <div class="features-grid">
      {#each features as feature, index}
        <div 
          class="feature-card" 
          role="button"
          tabindex="0"
          on:click={() => handleFeatureClick(feature)}
          on:keydown={(e) => e.key === 'Enter' && handleFeatureClick(feature)}
        >
          <div class="feature-icon">
            <span class="icon-emoji">{feature.icon}</span>
          </div>
          <div class="feature-content">
            <h3 class="feature-title">{feature.title}</h3>
            <p class="feature-description">{feature.description}</p>
            <div class="feature-highlight">{feature.highlight}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .features {
    padding: 5rem 0;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
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
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }
  
  .feature-card {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    border: 1px solid #e2e8f0;
  }
  
  .feature-card:hover,
  .feature-card:focus {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: #fbbf24;
    outline: none;
  }
  
  .feature-card:focus {
    outline: 2px solid #1e3a8a;
    outline-offset: 2px;
  }
  
  .feature-icon {
    width: 4rem;
    height: 4rem;
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  
  .icon-emoji {
    font-size: 2rem;
  }
  
  .feature-content {
    flex: 1;
  }
  
  .feature-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-bottom: 0.75rem;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  .feature-description {
    color: #64748b;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .feature-highlight {
    display: inline-block;
    background: #dbeafe;
    color: #1e40af;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 600;
  }
  
  @media (max-width: 768px) {
    .features {
      padding: 3rem 0;
    }
    
    .section-title {
      font-size: 2rem;
    }
    
    .section-subtitle {
      font-size: 1.1rem;
    }
    
    .features-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .feature-card {
      padding: 1.5rem;
    }
  }
</style>
