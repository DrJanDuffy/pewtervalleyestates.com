<script>
import { onMount } from "svelte"
import { trackEvent } from "$lib/analytics"
import RichmondAmericanAssets from "$lib/RichmondAmericanAssets.svelte"
import PhotoGallery from "$lib/PhotoGallery.svelte"

// Sample photos using Unsplash images
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

<svelte:head>
  <title>Photo Gallery - Pewter Valley Estates</title>
  <meta name="description" content="Explore our beautiful homes and community through our photo gallery. See the modern designs, spacious layouts, and resort-style amenities at Pewter Valley Estates." />
  <meta property="og:title" content="Photo Gallery - Pewter Valley Estates" />
  <meta property="og:description" content="Explore our beautiful homes and community through our photo gallery. See the modern designs, spacious layouts, and resort-style amenities at Pewter Valley Estates." />
  <meta property="og:type" content="website" />
</svelte:head>

<RichmondAmericanAssets />

<div class="photos-page">
  <div class="hero-section">
    <h1>Photo Gallery</h1>
    <p>Discover the beauty and elegance of Pewter Valley Estates through our stunning photo collection. From modern home designs to resort-style amenities, see what makes our community special.</p>
  </div>

  <PhotoGallery 
    {photos} 
    title="Our Homes & Community"
    columns={3}
    enableLightbox={true}
    enableLazyLoading={true}
  />

  <div class="cta-section">
    <h2>Ready to See More?</h2>
    <p>Schedule a personal tour to experience our homes in person.</p>
    <div class="cta-buttons">
      <a href="/contact" class="ra-button ra-button-primary">
        Schedule Tour
      </a>
      <a href="/richmond-demo" class="ra-button ra-button-outline">
        Virtual Tour
      </a>
    </div>
  </div>
</div>

<style>
  .photos-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  }

  .hero-section {
    text-align: center;
    padding: 4rem 2rem 2rem;
    background: white;
    margin-bottom: 2rem;
  }

  .hero-section h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--ra-primary, #1e3a8a);
  }

  .hero-section p {
    font-size: 1.2rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .cta-section {
    text-align: center;
    padding: 4rem 2rem;
    background: var(--ra-primary, #1e3a8a);
    color: white;
    margin-top: 2rem;
  }

  .cta-section h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: white;
  }

  .cta-section p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
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
    color: var(--ra-primary, #1e3a8a);
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
    color: var(--ra-primary, #1e3a8a);
  }

  @media (max-width: 768px) {
    .hero-section h1 {
      font-size: 2.5rem;
    }

    .hero-section p {
      font-size: 1.1rem;
    }

    .cta-section h2 {
      font-size: 2rem;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
