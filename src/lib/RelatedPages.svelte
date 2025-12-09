<script>
  /**
   * RelatedPages component for SEO internal linking
   * Use this on every page to link to related content
   */
  
  // Svelte 5: Use $props()
  const { 
    currentPage = '', 
    variant = 'default' // 'default', 'compact', 'sidebar'
  } = $props()
  
  // Define page relationships for SEO
  const pageRelationships = {
    '/': {
      title: 'Home',
      related: [
        { href: '/homes-for-sale', label: 'Browse Homes for Sale in Pewter Valley', description: 'View all available properties' },
        { href: '/sell-your-home', label: 'Sell Your Las Vegas Home', description: 'Get expert selling assistance' },
        { href: '/about', label: 'About Dr. Jan Duffy', description: 'Meet your local real estate expert' },
        { href: '/neighborhood', label: 'Explore Pewter Valley Estates', description: 'Discover the community' }
      ]
    },
    '/homes-for-sale': {
      title: 'Homes for Sale',
      related: [
        { href: '/buy-a-home', label: 'Home Buying Guide', description: 'Tips for Las Vegas home buyers' },
        { href: '/listings', label: 'View All Active Listings', description: 'Browse our full inventory' },
        { href: '/neighborhood', label: 'Pewter Valley Estates Community', description: 'Learn about the neighborhood' },
        { href: '/home-valuation', label: 'What\'s Your Home Worth?', description: 'Free instant valuation' }
      ]
    },
    '/buy-a-home': {
      title: 'Buy a Home',
      related: [
        { href: '/homes-for-sale', label: 'Homes for Sale in Pewter Valley', description: 'Start your search' },
        { href: '/investment-properties', label: 'Las Vegas Investment Properties', description: 'Build your portfolio' },
        { href: '/neighborhood-guide', label: 'Las Vegas Neighborhood Guide', description: 'Find the right area' },
        { href: '/contact', label: 'Schedule a Consultation', description: 'Talk to Dr. Jan Duffy' }
      ]
    },
    '/sell-your-home': {
      title: 'Sell Your Home',
      related: [
        { href: '/home-valuation', label: 'Free Home Valuation', description: 'Know your home\'s value' },
        { href: '/market-analysis', label: 'Las Vegas Market Analysis', description: 'Current market trends' },
        { href: '/about', label: 'Why Choose Dr. Jan Duffy', description: 'Expert selling strategies' },
        { href: '/contact', label: 'Get Started Selling', description: 'Schedule your consultation' }
      ]
    },
    '/home-valuation': {
      title: 'Home Valuation',
      related: [
        { href: '/sell-your-home', label: 'Ready to Sell?', description: 'Expert selling services' },
        { href: '/market-analysis', label: 'Market Analysis Report', description: 'Understand local trends' },
        { href: '/homes-for-sale', label: 'Compare Similar Homes', description: 'See what\'s selling' },
        { href: '/contact', label: 'Discuss Your Valuation', description: 'Talk to an expert' }
      ]
    },
    '/neighborhood': {
      title: 'Pewter Valley Estates',
      related: [
        { href: '/homes-for-sale', label: 'Homes for Sale in Pewter Valley', description: 'Browse available properties' },
        { href: '/southwest-las-vegas', label: 'Southwest Las Vegas Overview', description: 'Explore the region' },
        { href: '/neighborhood-guide', label: 'Las Vegas Neighborhoods', description: 'Compare communities' },
        { href: '/photos', label: 'Community Photos', description: 'See Pewter Valley' }
      ]
    },
    '/southwest-las-vegas': {
      title: 'Southwest Las Vegas',
      related: [
        { href: '/neighborhood', label: 'Pewter Valley Estates', description: 'Premier community' },
        { href: '/homes-for-sale', label: 'Southwest Las Vegas Homes', description: 'Browse listings' },
        { href: '/neighborhood-guide', label: 'All Las Vegas Neighborhoods', description: 'Explore more areas' },
        { href: '/market-analysis', label: 'Southwest Market Trends', description: 'Local market data' }
      ]
    },
    '/about': {
      title: 'About Dr. Jan Duffy',
      related: [
        { href: '/dr-jan-duffy', label: 'Meet Dr. Jan Duffy', description: 'Your realtor profile' },
        { href: '/contact', label: 'Contact Dr. Jan Duffy', description: 'Get in touch today' },
        { href: '/homes-for-sale', label: 'View Current Listings', description: 'Properties for sale' },
        { href: '/faq', label: 'Frequently Asked Questions', description: 'Common questions answered' }
      ]
    },
    '/contact': {
      title: 'Contact',
      related: [
        { href: '/about', label: 'About Dr. Jan Duffy', description: 'Learn about your agent' },
        { href: '/homes-for-sale', label: 'Browse Homes First', description: 'Find properties' },
        { href: '/home-valuation', label: 'Get a Free Valuation', description: 'Know your home\'s worth' },
        { href: '/faq', label: 'FAQ', description: 'Quick answers' }
      ]
    },
    '/investment-properties': {
      title: 'Investment Properties',
      related: [
        { href: '/homes-for-sale', label: 'All Properties for Sale', description: 'Browse inventory' },
        { href: '/market-analysis', label: 'Investment Market Analysis', description: 'ROI insights' },
        { href: '/buy-a-home', label: 'Buying Guide', description: 'Investment tips' },
        { href: '/contact', label: 'Discuss Investment Strategy', description: 'Expert consultation' }
      ]
    },
    '/market-analysis': {
      title: 'Market Analysis',
      related: [
        { href: '/home-valuation', label: 'Get Your Home Valued', description: 'Free valuation' },
        { href: '/sell-your-home', label: 'Selling Strategies', description: 'Maximize your sale' },
        { href: '/investment-properties', label: 'Investment Opportunities', description: 'Market insights' },
        { href: '/neighborhood', label: 'Pewter Valley Market', description: 'Local focus' }
      ]
    },
    '/faq': {
      title: 'FAQ',
      related: [
        { href: '/buy-a-home', label: 'Home Buying Process', description: 'Step-by-step guide' },
        { href: '/sell-your-home', label: 'Home Selling Process', description: 'What to expect' },
        { href: '/contact', label: 'Ask a Question', description: 'Get personal help' },
        { href: '/about', label: 'About Dr. Jan Duffy', description: 'Your expert agent' }
      ]
    },
    '/las-vegas-relocation-guide': {
      title: 'Las Vegas Relocation Guide',
      related: [
        { href: '/neighborhood', label: 'Pewter Valley Estates Neighborhood', description: 'Learn about the community' },
        { href: '/southwest-las-vegas', label: 'Southwest Las Vegas Overview', description: 'Explore nearby areas' },
        { href: '/homes-for-sale', label: 'Homes for Sale in Pewter Valley Estates', description: 'View current listings' },
        { href: '/contact', label: 'Relocation Consultation', description: 'Plan your move with Dr. Jan Duffy' }
      ]
    },
    '/buyer-checklist': {
      title: 'Buyer Checklist',
      related: [
        { href: '/buy-a-home', label: 'Buyer Services in Pewter Valley Estates', description: 'Full buyer representation' },
        { href: '/homes-for-sale', label: 'Browse Available Homes', description: 'Current properties for sale' },
        { href: '/listings', label: 'Active Las Vegas Listings', description: 'Wider Las Vegas inventory' },
        { href: '/contact', label: 'Ask Buying Questions', description: 'Talk directly with Dr. Jan Duffy' }
      ]
    },
    '/selling-checklist': {
      title: 'Selling Checklist',
      related: [
        { href: '/sell-your-home', label: 'Seller Services in Pewter Valley Estates', description: 'Expert listing strategy' },
        { href: '/home-valuation', label: 'Free Home Valuation', description: 'Understand your home’s value' },
        { href: '/market-analysis', label: 'Market Analysis & Trends', description: 'Track pricing and demand' },
        { href: '/contact', label: 'Schedule Listing Consultation', description: 'Plan your sale with Dr. Jan Duffy' }
      ]
    },
    '/google-reviews': {
      title: 'Google Reviews',
      related: [
        { href: '/about', label: 'About Dr. Jan Duffy', description: 'Background and approach' },
        { href: '/buy-a-home', label: 'Buyer Services', description: 'How buyers are represented' },
        { href: '/sell-your-home', label: 'Seller Services', description: 'How sellers are represented' },
        { href: '/contact', label: 'Contact Dr. Jan Duffy', description: 'Get in touch today' }
      ]
    }
  }
  
  // Get related pages for current page, with fallback
  const currentRelated = pageRelationships[currentPage] || pageRelationships['/']
  const relatedPages = currentRelated.related || []
</script>

{#if relatedPages.length > 0}
  <section class="related-pages {variant}">
    <div class="related-container">
      <h3 class="related-title">Explore More</h3>
      <div class="related-grid">
        {#each relatedPages as page}
          <a href={page.href} class="related-card">
            <span class="related-label">{page.label}</span>
            <span class="related-description">{page.description}</span>
            <span class="related-arrow">→</span>
          </a>
        {/each}
      </div>
    </div>
  </section>
{/if}

<style>
  .related-pages {
    padding: 3rem 0;
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
  }

  .related-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .related-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .related-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }

  .related-card {
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    background: white;
    border-radius: 0.5rem;
    text-decoration: none;
    border: 1px solid #e2e8f0;
    transition: all 0.2s;
    position: relative;
  }

  .related-card:hover {
    border-color: #1e3a8a;
    box-shadow: 0 4px 12px rgba(30, 58, 138, 0.1);
    transform: translateY(-2px);
  }

  .related-label {
    font-weight: 600;
    color: #1e3a8a;
    font-size: 0.95rem;
    margin-bottom: 0.375rem;
    padding-right: 1.5rem;
  }

  .related-description {
    font-size: 0.85rem;
    color: #64748b;
    line-height: 1.4;
  }

  .related-arrow {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    color: #94a3b8;
    transition: all 0.2s;
  }

  .related-card:hover .related-arrow {
    color: #1e3a8a;
    transform: translateX(3px);
  }

  /* Compact variant */
  .compact .related-container {
    padding: 0 1rem;
  }

  .compact .related-title {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .compact .related-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .compact .related-card {
    padding: 1rem;
  }

  /* Sidebar variant */
  .sidebar {
    padding: 1.5rem 0;
    background: transparent;
    border-top: none;
  }

  .sidebar .related-container {
    padding: 0;
  }

  .sidebar .related-title {
    font-size: 1.125rem;
    text-align: left;
    margin-bottom: 1rem;
  }

  .sidebar .related-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .sidebar .related-card {
    padding: 1rem;
  }

  .sidebar .related-description {
    display: none;
  }

  @media (max-width: 968px) {
    .related-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .related-grid {
      grid-template-columns: 1fr;
    }

    .compact .related-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
