<script>
import { onMount } from "svelte"
import { trackEvent } from "$lib/analytics"
import SEOHead from "$lib/SEOHead.svelte"
import Breadcrumbs from "$lib/Breadcrumbs.svelte"
import RichmondAmericanAssets from "$lib/RichmondAmericanAssets.svelte"

// SEO data for neighborhood page
const pageData = {
  title: "Neighborhood & Location - Pewter Valley Estates Las Vegas",
  description: "Discover the vibrant Las Vegas neighborhood surrounding Pewter Valley Estates. Explore local amenities, schools, shopping, dining, and entertainment options in this premier location.",
  image: "https://www.pewtervalleyestates.com/neighborhood-og-image.jpg",
  type: "website",
  canonical: "https://www.pewtervalleyestates.com/neighborhood",
  keywords: "Las Vegas neighborhood, Henderson NV, Summerlin, local amenities, schools, shopping, dining, entertainment, Las Vegas real estate location"
}

// Breadcrumbs for neighborhood page
const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Neighborhood", href: "/neighborhood" }
]

// Neighborhood data
const neighborhoodFeatures = [
  {
    category: "Shopping & Dining",
    features: [
      {
        name: "The District at Green Valley Ranch",
        distance: "5 minutes",
        description: "Upscale shopping center with premium retailers and restaurants",
        type: "shopping"
      },
      {
        name: "Green Valley Ranch Resort & Casino",
        distance: "3 minutes",
        description: "World-class entertainment, dining, and gaming",
        type: "entertainment"
      },
      {
        name: "Galleria at Sunset",
        distance: "8 minutes",
        description: "Major shopping mall with department stores and dining",
        type: "shopping"
      },
      {
        name: "Downtown Summerlin",
        distance: "15 minutes",
        description: "Modern outdoor shopping and entertainment district",
        type: "shopping"
      }
    ]
  },
  {
    category: "Education",
    features: [
      {
        name: "Green Valley High School",
        distance: "2 minutes",
        description: "Top-rated public high school with excellent academics",
        type: "school"
      },
      {
        name: "Green Valley Elementary",
        distance: "1 minute",
        description: "Highly rated elementary school serving the community",
        type: "school"
      },
      {
        name: "University of Nevada, Las Vegas",
        distance: "20 minutes",
        description: "Major university with diverse programs and research",
        type: "university"
      },
      {
        name: "Nevada State College",
        distance: "15 minutes",
        description: "Growing four-year college with modern facilities",
        type: "university"
      }
    ]
  },
  {
    category: "Recreation & Parks",
    features: [
      {
        name: "Green Valley Ranch Golf Club",
        distance: "2 minutes",
        description: "Championship 18-hole golf course with stunning views",
        type: "golf"
      },
      {
        name: "Cornerstone Park",
        distance: "3 minutes",
        description: "Beautiful park with walking trails and playgrounds",
        type: "park"
      },
      {
        name: "Lake Las Vegas",
        distance: "10 minutes",
        description: "Resort community with water activities and dining",
        type: "recreation"
      },
      {
        name: "Red Rock Canyon",
        distance: "25 minutes",
        description: "National Conservation Area with hiking and rock climbing",
        type: "nature"
      }
    ]
  },
  {
    category: "Healthcare & Services",
    features: [
      {
        name: "St. Rose Dominican Hospital",
        distance: "5 minutes",
        description: "Full-service hospital with emergency care",
        type: "healthcare"
      },
      {
        name: "Green Valley Library",
        distance: "4 minutes",
        description: "Modern library with extensive resources and programs",
        type: "library"
      },
      {
        name: "Henderson Police Department",
        distance: "6 minutes",
        description: "Local law enforcement ensuring community safety",
        type: "safety"
      },
      {
        name: "McCullough Hills Fire Station",
        distance: "3 minutes",
        description: "Fire and emergency services for the area",
        type: "safety"
      }
    ]
  }
]

// Local attractions
const attractions = [
  {
    name: "The Strip",
    distance: "15 minutes",
    description: "World-famous Las Vegas Strip with casinos, shows, and entertainment",
    image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=300&fit=crop",
    category: "Entertainment"
  },
  {
    name: "Fremont Street Experience",
    distance: "18 minutes",
    description: "Historic downtown Las Vegas with light shows and live music",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    category: "Entertainment"
  },
  {
    name: "Hoover Dam",
    distance: "45 minutes",
    description: "Engineering marvel and National Historic Landmark",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    category: "Attractions"
  },
  {
    name: "Valley of Fire State Park",
    distance: "50 minutes",
    description: "Nevada's oldest state park with stunning red rock formations",
    image: "https://images.unsplash.com/photo-1506905925346-14bda5d4c4c0?w=400&h=300&fit=crop",
    category: "Nature"
  }
]

// Transportation options
const transportation = [
  {
    name: "McCarran International Airport",
    distance: "12 minutes",
    description: "Major international airport with direct flights worldwide",
    type: "airport"
  },
  {
    name: "Las Vegas Monorail",
    distance: "15 minutes",
    description: "Convenient transportation along the Strip",
    type: "public"
  },
  {
    name: "RTC Transit",
    distance: "2 minutes",
    description: "Local bus service connecting to all major areas",
    type: "public"
  },
  {
    name: "Interstate 215",
    distance: "1 minute",
    description: "Beltway providing easy access to all parts of the valley",
    type: "highway"
  }
]

let selectedCategory = "Shopping & Dining"
let selectedFeature = null

function selectCategory(category) {
  selectedCategory = category
  selectedFeature = null
  trackEvent("neighborhood_category_select", {
    category: category,
    page: "neighborhood"
  })
}

function selectFeature(feature) {
  selectedFeature = feature
  trackEvent("neighborhood_feature_select", {
    feature: feature.name,
    category: selectedCategory,
    page: "neighborhood"
  })
}

function getFeatureIcon(type) {
  const icons = {
    shopping: "🛍️",
    entertainment: "🎭",
    school: "🎓",
    university: "🏛️",
    golf: "⛳",
    park: "🌳",
    recreation: "🏊",
    nature: "🏔️",
    healthcare: "🏥",
    library: "📚",
    safety: "🛡️",
    airport: "✈️",
    public: "🚌",
    highway: "🛣️"
  }
  return icons[type] || "📍"
}

onMount(() => {
  trackEvent("page_view", {
    page_title: "Neighborhood & Location",
    page_location: window.location.href,
  })
})
</script>

<svelte:head>
  <title>{pageData.title}</title>
  <meta name="description" content={pageData.description} />
  <meta name="keywords" content={pageData.keywords} />
  <link rel="canonical" href={pageData.canonical} />
</svelte:head>

<!-- SEO Head Component -->
<SEOHead
  {pageData}
  includeRealEstate={false}
  includeLocalBusiness={true}
/>

<!-- Breadcrumb Navigation -->
<Breadcrumbs {breadcrumbs} />

<!-- Richmond American Assets -->
<RichmondAmericanAssets />

<main class="neighborhood-page">
  <!-- Hero Section -->
  <section class="neighborhood-hero">
    <div class="container">
      <div class="hero-content">
        <h1>Discover Your Perfect Las Vegas Neighborhood</h1>
        <p class="hero-subtitle">
          Pewter Valley Estates is strategically located in one of Las Vegas's most desirable areas, 
          offering the perfect blend of suburban tranquility and urban convenience.
        </p>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">15</span>
            <span class="stat-label">Minutes to The Strip</span>
          </div>
          <div class="stat">
            <span class="stat-number">5</span>
            <span class="stat-label">Minutes to Shopping</span>
          </div>
          <div class="stat">
            <span class="stat-number">2</span>
            <span class="stat-label">Minutes to Golf</span>
          </div>
          <div class="stat">
            <span class="stat-number">1</span>
            <span class="stat-label">Minute to School</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Location Overview -->
  <section class="location-overview">
    <div class="container">
      <h2>Prime Las Vegas Location</h2>
      <div class="overview-grid">
        <div class="overview-content">
          <h3>Why This Location is Perfect</h3>
          <p>
            Pewter Valley Estates is nestled in the heart of Henderson, Nevada's second-largest city, 
            known for its safety, excellent schools, and family-friendly atmosphere. Our community 
            offers the best of both worlds: peaceful suburban living with easy access to all the 
            excitement and opportunities that Las Vegas has to offer.
          </p>
          <ul class="location-benefits">
            <li>✅ Safe, family-friendly community with low crime rates</li>
            <li>✅ Top-rated schools and educational opportunities</li>
            <li>✅ Convenient access to major employment centers</li>
            <li>✅ Abundant shopping, dining, and entertainment options</li>
            <li>✅ Beautiful parks and recreational facilities</li>
            <li>✅ Easy access to major highways and transportation</li>
          </ul>
        </div>
        <div class="overview-map">
          <div class="map-placeholder">
            <h4>Interactive Map</h4>
            <p>Explore the neighborhood and nearby amenities</p>
            <button class="map-button" on:click={() => trackEvent('map_interaction', { action: 'view_map', page: 'neighborhood' })}>
              View Interactive Map
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Neighborhood Features -->
  <section class="neighborhood-features">
    <div class="container">
      <h2>Everything You Need Within Minutes</h2>
      <p class="section-subtitle">
        Our convenient location puts you close to all the amenities and attractions that make Las Vegas living exceptional.
      </p>
      
      <!-- Category Tabs -->
      <div class="category-tabs">
        {#each neighborhoodFeatures as category}
          <button 
            class="category-tab"
            class:active={selectedCategory === category.category}
            on:click={() => selectCategory(category.category)}
          >
            {category.category}
          </button>
        {/each}
      </div>

      <!-- Features Grid -->
      <div class="features-grid">
        {#each neighborhoodFeatures.find(c => c.category === selectedCategory).features as feature}
          <div 
            class="feature-card"
            class:selected={selectedFeature === feature}
            on:click={() => selectFeature(feature)}
            role="button"
            tabindex="0"
            on:keydown={(e) => e.key === 'Enter' && selectFeature(feature)}
          >
            <div class="feature-icon">{getFeatureIcon(feature.type)}</div>
            <div class="feature-content">
              <h3 class="feature-name">{feature.name}</h3>
              <p class="feature-distance">{feature.distance} away</p>
              <p class="feature-description">{feature.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Local Attractions -->
  <section class="local-attractions">
    <div class="container">
      <h2>Explore Las Vegas & Beyond</h2>
      <p class="section-subtitle">
        From world-famous attractions to natural wonders, there's always something exciting to discover.
      </p>
      
      <div class="attractions-grid">
        {#each attractions as attraction}
          <div class="attraction-card">
            <div class="attraction-image">
              <img src={attraction.image} alt={attraction.name} loading="lazy" />
              <div class="attraction-category">{attraction.category}</div>
            </div>
            <div class="attraction-content">
              <h3 class="attraction-name">{attraction.name}</h3>
              <p class="attraction-distance">{attraction.distance} away</p>
              <p class="attraction-description">{attraction.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Transportation -->
  <section class="transportation">
    <div class="container">
      <h2>Easy Access to Everywhere</h2>
      <p class="section-subtitle">
        Whether you're commuting to work, traveling for business, or exploring the city, 
        getting around is convenient and efficient.
      </p>
      
      <div class="transportation-grid">
        {#each transportation as transport}
          <div class="transport-card">
            <div class="transport-icon">{getFeatureIcon(transport.type)}</div>
            <div class="transport-content">
              <h3 class="transport-name">{transport.name}</h3>
              <p class="transport-distance">{transport.distance} away</p>
              <p class="transport-description">{transport.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Community Highlights -->
  <section class="community-highlights">
    <div class="container">
      <h2>Why Residents Love This Neighborhood</h2>
      <div class="highlights-grid">
        <div class="highlight-card">
          <div class="highlight-icon">🏆</div>
          <h3>Top-Rated Schools</h3>
          <p>Excellent public and private schools with high academic standards and extracurricular programs.</p>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">🛡️</div>
          <h3>Safe & Secure</h3>
          <p>Low crime rates and active community watch programs ensure a safe environment for families.</p>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">🌳</div>
          <h3>Green Spaces</h3>
          <p>Beautiful parks, walking trails, and recreational facilities for outdoor activities and relaxation.</p>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">🚗</div>
          <h3>Easy Commuting</h3>
          <p>Convenient access to major highways and employment centers throughout the Las Vegas valley.</p>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">🛍️</div>
          <h3>Shopping & Dining</h3>
          <p>Upscale shopping centers, diverse restaurants, and entertainment venues just minutes away.</p>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">🏥</div>
          <h3>Healthcare Access</h3>
          <p>Top-rated hospitals and medical facilities providing comprehensive healthcare services.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="neighborhood-cta">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to Call This Neighborhood Home?</h2>
        <p>
          Discover why so many families choose Pewter Valley Estates for their perfect Las Vegas lifestyle. 
          Schedule a tour today and experience the neighborhood for yourself.
        </p>
        <div class="cta-buttons">
          <a href="/contact" class="cta-button primary" on:click={() => trackEvent('neighborhood_cta_click', { action: 'schedule_tour', page: 'neighborhood' })}>
            Schedule a Tour
          </a>
          <a href="/listings" class="cta-button secondary" on:click={() => trackEvent('neighborhood_cta_click', { action: 'view_listings', page: 'neighborhood' })}>
            View Available Homes
          </a>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  .neighborhood-page {
    min-height: 100vh;
  }

  /* Hero Section */
  .neighborhood-hero {
    background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
    color: white;
    padding: 4rem 0;
    text-align: center;
  }

  .hero-content h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .stat {
    text-align: center;
  }

  .stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: #F7F9FC;
  }

  .stat-label {
    font-size: 1rem;
    opacity: 0.8;
  }

  /* Location Overview */
  .location-overview {
    padding: 4rem 0;
    background: #F7F9FC;
  }

  .overview-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    align-items: start;
    margin-top: 2rem;
  }

  .location-benefits {
    list-style: none;
    padding: 0;
    margin-top: 1.5rem;
  }

  .location-benefits li {
    padding: 0.5rem 0;
    font-size: 1.1rem;
  }

  .map-placeholder {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  }

  .map-button {
    background: #3A8DDE;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .map-button:hover {
    background: #2a7bc7;
    transform: translateY(-2px);
  }

  /* Neighborhood Features */
  .neighborhood-features {
    padding: 4rem 0;
  }

  .section-subtitle {
    font-size: 1.2rem;
    color: #666;
    text-align: center;
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .category-tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }

  .category-tab {
    background: white;
    border: 2px solid #e0e0e0;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .category-tab:hover {
    border-color: #3A8DDE;
    color: #3A8DDE;
  }

  .category-tab.active {
    background: #3A8DDE;
    border-color: #3A8DDE;
    color: white;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .feature-card {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    border-color: #3A8DDE;
  }

  .feature-card.selected {
    border-color: #3A8DDE;
    background: #f8fbff;
  }

  .feature-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .feature-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #0A2540;
  }

  .feature-distance {
    color: #3A8DDE;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .feature-description {
    color: #666;
    line-height: 1.5;
  }

  /* Local Attractions */
  .local-attractions {
    padding: 4rem 0;
    background: #F7F9FC;
  }

  .attractions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .attraction-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    transition: all 0.3s ease;
  }

  .attraction-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  }

  .attraction-image {
    position: relative;
    height: 200px;
    overflow: hidden;
  }

  .attraction-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .attraction-category {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #3A8DDE;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.875rem;
    font-weight: 600;
  }

  .attraction-content {
    padding: 1.5rem;
  }

  .attraction-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #0A2540;
  }

  .attraction-distance {
    color: #3A8DDE;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .attraction-description {
    color: #666;
    line-height: 1.5;
  }

  /* Transportation */
  .transportation {
    padding: 4rem 0;
  }

  .transportation-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
  }

  .transport-card {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    text-align: center;
    transition: all 0.3s ease;
  }

  .transport-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  }

  .transport-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .transport-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #0A2540;
  }

  .transport-distance {
    color: #3A8DDE;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .transport-description {
    color: #666;
    line-height: 1.5;
  }

  /* Community Highlights */
  .community-highlights {
    padding: 4rem 0;
    background: #F7F9FC;
  }

  .highlights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .highlight-card {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    transition: all 0.3s ease;
  }

  .highlight-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  }

  .highlight-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .highlight-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #0A2540;
  }

  .highlight-card p {
    color: #666;
    line-height: 1.5;
  }

  /* CTA Section */
  .neighborhood-cta {
    padding: 4rem 0;
    background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
    color: white;
    text-align: center;
  }

  .cta-content h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .cta-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cta-button {
    padding: 1rem 2rem;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
  }

  .cta-button.primary {
    background: white;
    color: #0A2540;
  }

  .cta-button.primary:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }

  .cta-button.secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
  }

  .cta-button.secondary:hover {
    background: white;
    color: #0A2540;
    transform: translateY(-2px);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2rem;
    }

    .hero-stats {
      grid-template-columns: repeat(2, 1fr);
    }

    .overview-grid {
      grid-template-columns: 1fr;
    }

    .category-tabs {
      flex-direction: column;
      align-items: center;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }

    .cta-button {
      width: 100%;
      max-width: 300px;
    }
  }
</style>
