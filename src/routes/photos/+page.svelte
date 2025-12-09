<script>
import { onMount } from "svelte"
import { trackEvent } from "$lib/analytics"
import EnhancedSEOHead from "$lib/EnhancedSEOHead.svelte"
import Breadcrumbs from "$lib/Breadcrumbs.svelte"
import RichmondAmericanAssets from "$lib/RichmondAmericanAssets.svelte"
import PhotoGallery from "$lib/PhotoGallery.svelte"
import NAPDisplay from "$lib/NAPDisplay.svelte"
import { SITE_CONFIG } from "$lib/seo.js"

const pageData = {
  title: "Photo Gallery - Pewter Valley Estates Homes & Community by Dr. Jan Duffy",
  description: `Explore beautiful homes and community through our photo gallery. See modern designs, spacious layouts, and resort-style amenities at Pewter Valley Estates in Southwest Las Vegas (89183).`,
  image: `${SITE_CONFIG.url}/og-image.jpg`,
  type: "website",
  canonical: `${SITE_CONFIG.url}/photos`,
  keywords: "Pewter Valley Estates photos, home gallery, community photos, Southwest Las Vegas homes, Richmond American Homes photos",
}

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Photos", url: "/photos" },
]

const photos = [
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    title: "Beautiful Home Exterior",
    description: "Stunning front view of our modern homes",
    alt: "Pewter Valley Estates home exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    title: "Spacious Living Room",
    description: "Open concept living space with natural light",
    alt: "Modern living room interior",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    title: "Gourmet Kitchen",
    description: "State-of-the-art kitchen with premium appliances",
    alt: "Modern kitchen with island",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    title: "Master Suite",
    description: "Luxurious master bedroom with walk-in closet",
    alt: "Master bedroom interior",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
    title: "Community Amenities",
    description: "Resort-style pool and recreation area",
    alt: "Community pool and amenities",
  },
  {
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    title: "Prime Location",
    description: "Convenient access to shopping and entertainment",
    alt: "Neighborhood view and location",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
    title: "Modern Architecture",
    description: "Contemporary design with clean lines",
    alt: "Modern home architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=300&fit=crop",
    title: "Outdoor Living",
    description: "Beautiful outdoor spaces for relaxation",
    alt: "Outdoor living space",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop",
    title: "Family Room",
    description: "Perfect space for family gatherings",
    alt: "Family room interior",
  },
]

onMount(() => {
  trackEvent("page_view", {
    page_title: "Photo Gallery",
    page_location: window.location.href,
  })
})
</script>

<EnhancedSEOHead {pageData} {breadcrumbs} />
<Breadcrumbs {breadcrumbs} />
<RichmondAmericanAssets />

<div class="photos-page">
  <section class="hero-section">
    <div class="container">
      <h1>Photo Gallery - Pewter Valley Estates Homes & Community by Dr. Jan Duffy</h1>
      <p class="hero-subtitle">Discover the Beauty and Quality of Pewter Valley Estates in Southwest Las Vegas (89183)</p>
      <p class="hero-description">
        Explore Pewter Valley Estates through our comprehensive photo gallery showcasing beautiful homes, modern designs, and community amenities. These images represent the quality and lifestyle available in this Richmond American Homes community located at Pyle Avenue and S Rancho Destino Rd in zip code 89183. Dr. Jan Duffy provides expert real estate services for buyers and sellers interested in Pewter Valley Estates properties.
      </p>
    </div>
  </section>

  <section class="home-features">
    <div class="container">
      <h2>Pewter Valley Estates Home Features and Architecture</h2>
      <p class="lead">
        Pewter Valley Estates features ranch-style, single-story homes built by Richmond American Homes with attention to quality construction, modern design, and energy efficiency. These homes range from 1,950 to 2,240 square feet with 3-4 bedrooms and 2-3 bathrooms, offering spacious layouts perfect for families, empty nesters, and those seeking single-story living.
      </p>

      <h3>Ranch-Style Architecture and Single-Story Design</h3>
      <p>
        All Pewter Valley Estates homes feature ranch-style architecture emphasizing single-story living with open floor plans that maximize functionality and flow. This design approach creates seamless transitions between living spaces, promotes accessibility for all ages, and appeals to buyers seeking convenience without sacrificing style. The ranch-style aesthetic maintains consistency throughout the community while allowing individual expression through landscaping and exterior color choices.
      </p>
      <p>
        Single-story design eliminates stairs, making homes ideal for families with young children, empty nesters planning for aging in place, and anyone seeking accessibility and convenience. This design choice reflects thoughtful planning for diverse buyer needs and long-term livability. The absence of stairs also facilitates easier maintenance and creates more usable square footage compared to multi-story designs with similar total square footage.
      </p>

      <h3>Open Floor Plans and Spacious Interiors</h3>
      <p>
        Pewter Valley Estates homes feature open-concept designs that create spacious, light-filled interiors maximizing the sense of space within 1,950 to 2,240 square feet. Open floor plans typically connect living rooms, dining areas, and kitchens, creating great rooms that serve as central gathering spaces for families. This design philosophy emphasizes functionality and modern living while maintaining defined spaces for different activities.
      </p>
      <p>
        Spacious interiors result from efficient space planning that eliminates wasted square footage and creates rooms that feel larger than their dimensions suggest. High ceilings, large windows, and thoughtful layouts contribute to the sense of space and light. These design elements make homes feel comfortable and inviting, appealing to buyers seeking modern living environments that accommodate contemporary lifestyles while providing traditional comfort and functionality.
      </p>

      <h3>Modern Kitchens and Quality Finishes</h3>
      <p>
        Kitchens in Pewter Valley Estates homes feature modern designs with quality finishes, efficient layouts, and contemporary amenities. These kitchens typically include center islands providing additional workspace and casual dining, ample cabinetry for storage, and appliances that meet modern efficiency and functionality standards. Kitchen designs prioritize both aesthetics and practicality, creating spaces that serve as central hubs for daily living and entertaining.
      </p>
      <p>
        Quality finishes extend beyond kitchens to include bathrooms, flooring, lighting, and other interior details. Richmond American Homes selected finishes that balance durability, style, and value, ensuring homes maintain their appeal over time while providing owners with quality environments for daily living. These finishes contribute to overall home value and buyer appeal, making Pewter Valley Estates properties attractive investments and comfortable homes.
      </p>

      <h3>Master Suites and Private Retreats</h3>
      <p>
        Master suites in Pewter Valley Estates homes provide private retreats for homeowners, typically featuring spacious bedrooms, walk-in closets, and ensuite bathrooms. These master suites offer separation from other bedrooms, creating quiet spaces for relaxation and privacy. Ensuite bathrooms typically include separate vanities, walk-in showers, and sometimes soaking tubs, providing spa-like environments within the home.
      </p>
      <p>
        Master suite design emphasizes comfort, privacy, and luxury within the context of the overall home size. These suites represent significant portions of total square footage, reflecting their importance in modern home design and buyer preferences. Well-designed master suites add considerable value to homes and appeal strongly to buyers seeking comfortable primary bedrooms that serve as personal sanctuaries.
      </p>
    </div>
  </section>

  <section class="community-features">
    <div class="container">
      <h2>Community Amenities and Lifestyle Features</h2>
      <p class="lead">
        Pewter Valley Estates offers more than just quality homes. The community features well-designed streets, sidewalks, common areas, and proximity to parks and recreational facilities that create an active, family-friendly lifestyle in Southwest Las Vegas.
      </p>

      <h3>Well-Designed Community Infrastructure</h3>
      <p>
        Pewter Valley Estates features thoughtfully designed streets and sidewalks that encourage walking, neighbor interaction, and outdoor activity. The community layout promotes a sense of community while maintaining privacy through well-planned lot arrangements and landscaping. Common areas and green spaces throughout the community provide gathering places and visual appeal that enhance the overall living experience.
      </p>
      <p>
        Community infrastructure also includes well-maintained streets, street lighting, and other public amenities that contribute to safety, aesthetics, and property values. These infrastructure investments reflect Richmond American Homes' commitment to creating communities that maintain their appeal over time. Well-maintained infrastructure ensures Pewter Valley Estates remains desirable for residents and attractive to potential buyers in the resale market.
      </p>

      <h3>Proximity to Parks and Recreation</h3>
      <p>
        Pewter Valley Estates residents enjoy proximity to multiple parks including Somerset Hills Park, Goett Family Park, and Jimmy Pettyjohn Jr. Park. These parks offer playgrounds, sports courts, walking trails, and open green spaces perfect for families and outdoor recreation. The community's location also provides access to the South Point Skatepark and Southern Highlands Golf Club, offering diverse recreational opportunities for residents of all ages.
      </p>
      <p>
        Park proximity enhances lifestyle quality by providing convenient access to outdoor recreation, family activities, and community gathering spaces. These amenities appeal to families with children, active adults, and anyone seeking outdoor recreation opportunities. Understanding these recreational amenities helps buyers evaluate lifestyle fit and helps sellers highlight location benefits that contribute to property value and community appeal.
      </p>

      <h3>Quiet Residential Atmosphere</h3>
      <p>
        Despite convenient access to major transportation routes, Pewter Valley Estates maintains a quiet, residential atmosphere that appeals to families and those seeking tranquility. The community's design, location, and development patterns create peaceful living environments that balance accessibility with residential character. This rural-urban balance makes Pewter Valley Estates attractive to buyers seeking suburban tranquility with city convenience.
      </p>
      <p>
        Quiet residential atmosphere results from thoughtful community planning that minimizes through traffic, creates safe streets for children, and promotes neighbor interaction. This atmosphere appeals to families with children, empty nesters, and professionals seeking peaceful home environments. Understanding this community character helps buyers evaluate lifestyle fit and helps sellers market properties by highlighting the quiet, family-friendly environment that distinguishes Pewter Valley Estates from busier areas.
      </p>
    </div>
  </section>

  <section class="photo-gallery-section">
    <div class="container">
      <h2>Explore Pewter Valley Estates Through Photos</h2>
      <p class="lead">
        Our photo gallery showcases the quality, design, and lifestyle available in Pewter Valley Estates. These images help buyers visualize living in the community and help sellers showcase their properties effectively.
      </p>
      <PhotoGallery 
        {photos} 
        title="Pewter Valley Estates Homes & Community"
        columns={3}
        enableLightbox={true}
        enableLazyLoading={true}
      />
    </div>
  </section>

  <section class="location-advantages">
    <div class="container">
      <h2>Prime Southwest Las Vegas Location Advantages</h2>
      <p class="lead">
        Pewter Valley Estates' location in Southwest Las Vegas (zip code 89183) provides convenient access to employment centers, shopping, dining, entertainment, and recreational opportunities while maintaining residential tranquility.
      </p>

      <h3>Convenient Access to Major Employment Centers</h3>
      <p>
        Pewter Valley Estates' location at Pyle Avenue and S Rancho Destino Rd provides easy access to I-15 and Las Vegas Boulevard, making commutes to the Las Vegas Strip, downtown Las Vegas, McCarran International Airport, and employment centers throughout the valley convenient. Typical commute times range from 15-30 minutes depending on destination, appealing to professionals working throughout the Las Vegas Valley who want convenient access without sacrificing residential tranquility.
      </p>
      <p>
        Employment center access contributes to property values and rental demand, as professionals prefer communities with convenient commutes. This accessibility advantage makes Pewter Valley Estates attractive to working professionals, contributes to strong rental markets, and enhances long-term property values. Understanding these location advantages helps buyers evaluate lifestyle fit and helps sellers highlight accessibility benefits that appeal to buyers and renters.
      </p>

      <h3>Nearby Shopping, Dining, and Services</h3>
      <p>
        Pewter Valley Estates residents enjoy convenient access to shopping centers along Las Vegas Boulevard, providing everyday convenience for groceries, retail shopping, and services. Nearby dining options include diverse restaurants ranging from casual family establishments to upscale dining, including Seasalt Sushi & Oyster, Rosati's, and PT's Gold. These amenities provide convenience and lifestyle quality that enhance daily living and appeal to buyers seeking comprehensive community amenities.
      </p>
      <p>
        Service access includes healthcare facilities, professional services, entertainment venues, and other services that contribute to complete community living. This comprehensive amenity access reduces the need for extensive travel for daily needs, enhancing convenience and lifestyle quality. Understanding these amenities helps buyers evaluate lifestyle fit and helps sellers highlight convenience benefits that contribute to property value and community appeal.
      </p>

      <h3>Quality Schools and Educational Opportunities</h3>
      <p>
        Pewter Valley Estates is located in zip code 89183, which provides access to quality public and private schools serving the Southwest Las Vegas area. The area's growing population has led to investment in educational infrastructure, providing families with quality educational options. School quality is an important consideration for families, and Pewter Valley Estates' location provides access to schools that appeal to families with children.
      </p>
      <p>
        Educational opportunities extend beyond K-12 schools to include access to higher education institutions and continuing education programs. Understanding educational options helps families evaluate community fit and helps sellers highlight educational benefits when marketing to families. School access contributes to property values and community appeal, making Pewter Valley Estates attractive to families seeking quality education for their children.
      </p>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to See Pewter Valley Estates Homes in Person?</h2>
        <p>
          Photos provide a glimpse of Pewter Valley Estates, but experiencing homes in person is essential for making informed decisions. Dr. Jan Duffy provides expert guidance for buyers and sellers, including property tours, market analysis, and comprehensive real estate services. Contact Dr. Jan Duffy at {SITE_CONFIG.phone} to schedule your personal tour of Pewter Valley Estates homes.
        </p>
        <div class="cta-buttons">
          <a href="/contact" class="ra-button ra-button-primary">
            Schedule Tour
          </a>
          <a href="/richmond-demo" class="ra-button ra-button-outline">
            Virtual Tour
          </a>
        </div>
        <NAPDisplay showGoogleReviewsLink={true} showDirections={true} />
      </div>
    </div>
  </section>
</div>

<style>
  .photos-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .hero-section {
    text-align: center;
    padding: 4rem 2rem 2rem;
    background: white;
    margin-bottom: 2rem;
  }

  .hero-section h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #1e3a8a;
    font-weight: 700;
  }

  .hero-subtitle {
    font-size: 1.5rem;
    color: #fbbf24;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .hero-description {
    font-size: 1.125rem;
    color: #374151;
    max-width: 900px;
    margin: 0 auto;
    line-height: 1.7;
  }

  section {
    padding: 4rem 0;
  }

  .home-features,
  .location-advantages {
    background: white;
  }

  .community-features {
    background: #f8fafc;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 2rem;
    text-align: center;
  }

  .lead {
    font-size: 1.25rem;
    color: #374151;
    line-height: 1.8;
    margin-bottom: 2rem;
    font-weight: 500;
    text-align: center;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #374151;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
  }

  .photo-gallery-section {
    background: white;
    padding: 4rem 0;
  }

  .cta-section {
    text-align: center;
    padding: 4rem 2rem;
    background: #1e3a8a;
    color: white;
    margin-top: 2rem;
  }

  .cta-content h2 {
    color: white;
    margin-bottom: 1rem;
  }

  .cta-content p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.9);
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  .ra-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  .ra-button-primary {
    background-color: white;
    color: #1e3a8a;
  }

  .ra-button-primary:hover {
    background-color: #f1f5f9;
    transform: translateY(-1px);
  }

  .ra-button-outline {
    background-color: transparent;
    color: white;
    border: 2px solid white;
  }

  .ra-button-outline:hover {
    background-color: white;
    color: #1e3a8a;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    .hero-section h1 {
      font-size: 2rem;
    }

    .hero-description {
      font-size: 1rem;
    }

    h2 {
      font-size: 2rem;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
