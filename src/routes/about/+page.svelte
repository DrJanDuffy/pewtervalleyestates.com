<script>
  import EnhancedSEOHead from '$lib/EnhancedSEOHead.svelte'
  import Breadcrumbs from '$lib/Breadcrumbs.svelte'

  const pageData = {
    title: 'About Dr. Jan Duffy - Las Vegas Real Estate Expert',
    description: 'Meet Dr. Jan Duffy, your trusted Las Vegas real estate professional specializing in Pewter Valley Estates and new construction homes. Over 20 years of experience helping families find their dream homes.',
    canonical: 'https://www.pewtervalleyestates.com/about',
    keywords: 'Dr. Jan Duffy, Las Vegas realtor, Pewter Valley Estates agent, Las Vegas real estate expert, Nevada home specialist'
  }

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' }
  ]

  const faqs = [
    {
      question: 'How long has Dr. Jan Duffy been in real estate?',
      answer: 'Dr. Jan Duffy has over 20 years of experience in Las Vegas real estate, specializing in new construction homes and master-planned communities.'
    },
    {
      question: 'What areas does Dr. Jan Duffy serve?',
      answer: 'Dr. Jan Duffy serves all of Las Vegas and surrounding areas including Henderson, Summerlin, Green Valley, Anthem, Inspirada, Mountain\'s Edge, and Silverado Ranch.'
    },
    {
      question: 'Does Dr. Jan Duffy specialize in new construction?',
      answer: 'Yes, Dr. Jan Duffy specializes in new construction homes, particularly Richmond American Homes communities like Pewter Valley Estates.'
    }
  ]
</script>

<EnhancedSEOHead {pageData} {breadcrumbs} {faqs} />

<div class="about-page">
  <Breadcrumbs items={breadcrumbs} />

  <header class="hero">
    <h1>About Dr. Jan Duffy</h1>
    <p class="tagline">Your Trusted Las Vegas Real Estate Expert</p>
  </header>

  <section class="intro">
    <div class="content-wrapper">
      <h2>Welcome to Pewter Valley Estates</h2>
      <p>
        With over 20 years of experience in Las Vegas real estate, Dr. Jan Duffy has helped
        hundreds of families find their perfect home. Specializing in new construction homes
        and master-planned communities, Dr. Duffy brings unparalleled expertise to every
        client relationship.
      </p>
      <p>
        As a dedicated representative for Pewter Valley Estates by Richmond American Homes,
        Dr. Duffy offers exclusive access to Las Vegas's most desirable new home community,
        featuring modern designs, energy-efficient construction, and resort-style amenities.
      </p>
    </div>
  </section>

  <section class="expertise">
    <h2>Areas of Expertise</h2>
    <div class="expertise-grid">
      <div class="expertise-item">
        <h3>New Construction Homes</h3>
        <p>Expert guidance through the new home buying process, from lot selection to final walkthrough.</p>
      </div>
      <div class="expertise-item">
        <h3>Richmond American Homes</h3>
        <p>Authorized representative with deep knowledge of all floor plans, upgrades, and incentives.</p>
      </div>
      <div class="expertise-item">
        <h3>Las Vegas Market</h3>
        <p>Comprehensive understanding of Las Vegas neighborhoods, schools, and market trends.</p>
      </div>
      <div class="expertise-item">
        <h3>Investment Properties</h3>
        <p>Strategic advice for investors looking to build wealth through Las Vegas real estate.</p>
      </div>
    </div>
  </section>

  <section class="service-areas">
    <h2>Service Areas</h2>
    <p>Dr. Jan Duffy proudly serves home buyers throughout the Las Vegas Valley:</p>
    <ul class="areas-list">
      <li>Las Vegas</li>
      <li>Henderson</li>
      <li>Summerlin</li>
      <li>Green Valley</li>
      <li>Anthem</li>
      <li>Inspirada</li>
      <li>Mountain's Edge</li>
      <li>Silverado Ranch</li>
      <li>North Las Vegas</li>
    </ul>
  </section>

  <section class="why-choose">
    <h2>Why Choose Dr. Jan Duffy?</h2>
    <div class="benefits">
      <div class="benefit">
        <span class="benefit-icon">✓</span>
        <div>
          <h4>20+ Years Experience</h4>
          <p>Decades of Las Vegas real estate expertise at your service</p>
        </div>
      </div>
      <div class="benefit">
        <span class="benefit-icon">✓</span>
        <div>
          <h4>New Home Specialist</h4>
          <p>Expert knowledge of new construction and builder incentives</p>
        </div>
      </div>
      <div class="benefit">
        <span class="benefit-icon">✓</span>
        <div>
          <h4>Personalized Service</h4>
          <p>Dedicated attention to your unique home buying needs</p>
        </div>
      </div>
      <div class="benefit">
        <span class="benefit-icon">✓</span>
        <div>
          <h4>Local Market Expert</h4>
          <p>Deep knowledge of Las Vegas neighborhoods and communities</p>
        </div>
      </div>
    </div>
  </section>

  <section class="cta">
    <h2>Ready to Find Your Dream Home?</h2>
    <p>Contact Dr. Jan Duffy today to start your journey to homeownership in Las Vegas.</p>
    <div class="cta-buttons">
      <a href="/contact" class="btn btn-primary">Contact Dr. Duffy</a>
      <a href="/listings" class="btn btn-secondary">View Available Homes</a>
    </div>
    <div class="contact-info">
      <p><strong>Phone:</strong> <a href="tel:+17022221964">(702) 222-1964</a></p>
      <p><strong>Email:</strong> <a href="mailto:jan@pewtervalleyestates.com">jan@pewtervalleyestates.com</a></p>
    </div>
  </section>
</div>

<style>
  .about-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .hero {
    text-align: center;
    padding: 3rem 1rem;
    background: linear-gradient(135deg, #0A2540 0%, #1a4a7a 100%);
    color: white;
    border-radius: 12px;
    margin-bottom: 2rem;
  }

  .hero h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .tagline {
    font-size: 1.25rem;
    opacity: 0.9;
  }

  section {
    margin-bottom: 3rem;
  }

  h2 {
    color: #0A2540;
    font-size: 1.75rem;
    margin-bottom: 1rem;
    border-bottom: 3px solid #3A8DDE;
    padding-bottom: 0.5rem;
  }

  .intro p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #444;
    margin-bottom: 1rem;
  }

  .expertise-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .expertise-item {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    border-left: 4px solid #3A8DDE;
  }

  .expertise-item h3 {
    color: #0A2540;
    margin-bottom: 0.5rem;
  }

  .areas-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 0.5rem;
    list-style: none;
    padding: 0;
  }

  .areas-list li {
    background: #e8f4fd;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    text-align: center;
    color: #0A2540;
    font-weight: 500;
  }

  .benefits {
    display: grid;
    gap: 1rem;
  }

  .benefit {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
  }

  .benefit-icon {
    background: #28a745;
    color: white;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-weight: bold;
  }

  .benefit h4 {
    margin: 0 0 0.25rem 0;
    color: #0A2540;
  }

  .benefit p {
    margin: 0;
    color: #666;
    font-size: 0.95rem;
  }

  .cta {
    text-align: center;
    background: #f8f9fa;
    padding: 2.5rem;
    border-radius: 12px;
  }

  .cta h2 {
    border: none;
    text-align: center;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: 1.5rem 0;
    flex-wrap: wrap;
  }

  .btn {
    padding: 0.875rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s;
  }

  .btn-primary {
    background: #3A8DDE;
    color: white;
  }

  .btn-primary:hover {
    background: #2a7dcf;
  }

  .btn-secondary {
    background: #0A2540;
    color: white;
  }

  .btn-secondary:hover {
    background: #0d3a5c;
  }

  .contact-info {
    margin-top: 1.5rem;
  }

  .contact-info p {
    margin: 0.5rem 0;
  }

  .contact-info a {
    color: #3A8DDE;
    text-decoration: none;
  }

  .contact-info a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }

    .btn {
      width: 100%;
      max-width: 300px;
      text-align: center;
    }
  }
</style>
