<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import EnhancedSEOHead from "$lib/EnhancedSEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import GoogleMap from "$lib/GoogleMap.svelte"
  import CTABanner from "$lib/CTABanner.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"
  
  const pageData = {
    title: "Pewter Valley Estates Neighborhood Guide | Southwest Las Vegas Living",
    description: `Complete guide to Pewter Valley Estates neighborhood in Southwest Las Vegas (89183). Parks, schools, shopping, dining, and amenities near Pyle Avenue and S Rancho Destino Rd. Expert insights by Dr. Jan Duffy.`,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    type: "website",
    canonical: `${SITE_CONFIG.url}/neighborhood-guide`,
    keywords: "Pewter Valley Estates neighborhood, 89183 community guide, Southwest Las Vegas amenities, Pyle Avenue area, S Rancho Destino Rd",
  }
  
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Neighborhood Guide", url: "/neighborhood-guide" },
  ]
  
  onMount(() => {
    trackEvent("page_view", {
      page_title: "Neighborhood Guide",
      page_location: window.location.href,
    })
  })
</script>

<EnhancedSEOHead {pageData} {breadcrumbs} />

<Breadcrumbs {breadcrumbs} />

<main class="neighborhood-guide-page">
  <section class="hero">
    <div class="container">
      <h1>Pewter Valley Estates Neighborhood Guide | Southwest Las Vegas Living by Dr. Jan Duffy</h1>
      <p class="hero-subtitle">Complete Guide to Community Life in Zip Code 89183</p>
      <p class="hero-description">
        Discover everything Pewter Valley Estates and Southwest Las Vegas have to offer. From community parks and recreational facilities to schools, shopping, dining, and transportation, this comprehensive guide helps you understand the lifestyle and amenities available to residents.
      </p>
    </div>
  </section>

  <section class="community-amenities">
    <div class="container">
      <h2>Pewter Valley Estates Community Amenities & Recreation</h2>
      
      <p class="lead">
        Pewter Valley Estates residents enjoy access to multiple parks, recreational facilities, and community amenities that create an active, family-friendly lifestyle. The community's location in Southwest Las Vegas provides the perfect balance of quiet residential living and convenient access to recreational opportunities.
      </p>
      
      <h3>Somerset Hills Park</h3>
      <p>
        Located within easy walking or driving distance, Somerset Hills Park offers playgrounds, sports courts, walking trails, and open green spaces. This park serves as a central gathering place for families, providing safe play areas for children and recreational opportunities for all ages. The park's well-maintained facilities and proximity to Pewter Valley Estates make it a popular destination for residents.
      </p>
      
      <h3>Goett Family Park</h3>
      <p>
        Goett Family Park provides additional recreational options including sports facilities, picnic areas, and walking paths. This park complements Somerset Hills Park by offering varied recreational activities and additional space for community gatherings and events.
      </p>
      
      <h3>Jimmy Pettyjohn Jr. Park</h3>
      <p>
        Jimmy Pettyjohn Jr. Park adds to the recreational infrastructure available to Pewter Valley Estates residents. This park offers playground equipment, sports facilities, and open spaces perfect for family activities and community events.
      </p>
      
      <h3>South Point Skatepark</h3>
      <p>
        For active residents and families with older children, the South Point Skatepark provides specialized recreational facilities. This amenity appeals to skateboarders and BMX riders, offering a dedicated space for these activities within the broader Southwest Las Vegas area.
      </p>
      
      <h3>Southern Highlands Golf Club</h3>
      <p>
        Golf enthusiasts appreciate proximity to the Southern Highlands Golf Club, a championship golf course offering premium golfing experiences and social amenities. This nearby facility provides additional recreational options and social opportunities for Pewter Valley Estates residents interested in golf.
      </p>
      
      <h3>Community Design & Walkability</h3>
      <p>
        Pewter Valley Estates itself features well-designed streets, sidewalks, and common areas that encourage walking and neighbor interaction. The community's layout promotes a sense of community while maintaining privacy and quiet residential character.
      </p>
    </div>
  </section>

  <section class="schools-shopping">
    <div class="container">
      <h2>Schools, Shopping & Dining Near Pewter Valley Estates</h2>
      
      <p class="lead">
        The zip code 89183 location provides convenient access to quality schools, diverse shopping options, and excellent dining establishments. Understanding these nearby amenities helps families make informed decisions about living in Pewter Valley Estates.
      </p>
      
      <h3>Educational Opportunities</h3>
      <p>
        Southwest Las Vegas offers access to quality public and private schools serving the 89183 zip code area. Families considering Pewter Valley Estates should research specific school assignments, which may vary based on exact location within the community. The area's growing population has led to investment in educational infrastructure, providing families with quality educational options.
      </p>
      
      <h3>Shopping Convenience</h3>
      <p>
        Shopping centers along Las Vegas Boulevard and nearby retail developments provide everyday convenience for Pewter Valley Estates residents. These shopping areas include grocery stores, pharmacies, retail stores, and service providers, ensuring residents have access to all necessary goods and services without extensive travel.
      </p>
      
      <h3>Dining Options</h3>
      <p>
        The Southwest Las Vegas area offers diverse dining options, from casual family restaurants to upscale establishments. Notable nearby restaurants include Seasalt Sushi & Oyster, offering fresh seafood and sushi in an upscale casual atmosphere. Rosati's provides Italian dining options, while PT's Gold offers casual dining and entertainment. These establishments, along with numerous other dining options, provide variety for residents' dining preferences.
      </p>
      
      <h3>Specialty Shopping & Services</h3>
      <p>
        Beyond everyday shopping, the area offers specialty stores, professional services, and entertainment venues. This includes fitness centers, medical facilities, professional services, and entertainment options that contribute to a well-rounded lifestyle.
      </p>
      
      <h3>Future Development</h3>
      <p>
        The Southwest Las Vegas area continues to see development, with new shopping centers, restaurants, and services being added. This ongoing development enhances convenience and property values while maintaining the area's residential character.
      </p>
    </div>
  </section>

  <section class="commute-transportation">
    <div class="container">
      <h2>Commute Times & Transportation from Pewter Valley Estates</h2>
      
      <p class="lead">
        Pewter Valley Estates' location at Pyle Avenue and S Rancho Destino Rd provides excellent transportation connectivity. Understanding commute times and transportation options helps residents and potential buyers evaluate the community's accessibility.
      </p>
      
      <h3>I-15 Access</h3>
      <p>
        Easy access to I-15 makes commutes to the Las Vegas Strip, downtown Las Vegas, and employment centers throughout the valley convenient. The proximity to this major highway reduces commute times and provides route flexibility. This accessibility appeals to professionals working in various Las Vegas locations.
      </p>
      
      <h3>Las Vegas Boulevard Connectivity</h3>
      <p>
        Proximity to Las Vegas Boulevard provides additional route options and access to businesses, services, and entertainment along this major corridor. This connectivity enhances convenience while maintaining the community's quiet residential character.
      </p>
      
      <h3>Employment Center Access</h3>
      <p>
        The location provides reasonable commute times to major employment centers including the Las Vegas Strip, downtown Las Vegas, McCarran International Airport, and various business districts. This accessibility makes Pewter Valley Estates attractive to professionals working throughout the Las Vegas Valley.
      </p>
      
      <h3>Public Transportation</h3>
      <p>
        While the area is primarily automobile-oriented, public transportation options are available for residents who prefer or require alternative transportation. Understanding these options helps residents plan their transportation needs.
      </p>
      
      <h3>Airport Access</h3>
      <p>
        McCarran International Airport is accessible from Pewter Valley Estates, making travel convenient for residents who travel frequently for business or leisure. The reasonable drive time to the airport adds to the location's appeal.
      </p>
    </div>
  </section>

  <section class="lifestyle">
    <div class="container">
      <h2>Pewter Valley Estates Lifestyle & Community Character</h2>
      
      <p class="lead">
        Pewter Valley Estates offers a unique lifestyle combining quiet residential living with convenient access to amenities and employment centers. Understanding this lifestyle helps potential residents evaluate whether the community matches their preferences and needs.
      </p>
      
      <h3>Rural-Urban Balance</h3>
      <p>
        The community's location in Southwest Las Vegas provides a rural-urban balance that appeals to many residents. You're close to city amenities and employment centers while maintaining a quieter, more residential atmosphere. This balance creates an appealing lifestyle for families, professionals, and those seeking a peaceful residential environment.
      </p>
      
      <h3>Family-Friendly Environment</h3>
      <p>
        The combination of quiet streets, well-maintained common areas, proximity to parks, and family-oriented amenities creates an ideal environment for families. The single-story, ranch-style homes appeal to families with young children, while the community's design emphasizes safety and neighbor interaction.
      </p>
      
      <h3>Community Cohesion</h3>
      <p>
        The master-planned design and consistent architecture create a sense of community cohesion. Residents share common spaces, parks, and community amenities, fostering neighbor interaction and community engagement. This cohesion contributes to the community's appeal and property values.
      </p>
      
      <h3>Quiet Residential Character</h3>
      <p>
        Despite proximity to major transportation routes, Pewter Valley Estates maintains a quiet residential character. The community's design, location, and development patterns create a peaceful living environment that appeals to those seeking tranquility while maintaining accessibility.
      </p>
      
      <h3>Zip Code 89183 Context</h3>
      <p>
        As part of zip code 89183, Pewter Valley Estates benefits from the broader area's reputation for quality residential development, good schools, and convenient amenities. This zip code context contributes to property values and community appeal.
      </p>
    </div>
  </section>

  <section class="map-section">
    <GoogleMap />
  </section>

  <CTABanner 
    variant="primary"
    showPhone={true}
    showEmail={true}
    showValuation={false}
    showTour={true}
  />
</main>

<style>
  .neighborhood-guide-page {
    width: 100%;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .hero {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    color: white;
    padding: 4rem 0;
    text-align: center;
  }
  
  .hero h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    color: #fbbf24;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  .hero-description {
    font-size: 1.125rem;
    max-width: 900px;
    margin: 0 auto;
    line-height: 1.7;
    opacity: 0.95;
  }
  
  section {
    padding: 4rem 0;
  }
  
  .community-amenities,
  .commute-transportation {
    background: white;
  }
  
  .schools-shopping,
  .lifestyle {
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
  
  .map-section {
    padding: 0;
  }
  
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }
    
    h2 {
      font-size: 2rem;
    }
  }
</style>

