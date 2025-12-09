<script>
import { page } from '$app/stores';
import { SITE_CONFIG } from '$lib/seo.js';

let mobileMenuOpen = $state(false);

function toggleMenu() {
  mobileMenuOpen = !mobileMenuOpen;
}

function closeMenu() {
  mobileMenuOpen = false;
}
</script>

<header class="site-header">
  <div class="header-container">
    <!-- Logo/Brand -->
    <a href="/" class="brand" onclick={closeMenu}>
      <span class="brand-name">Pewter Valley Estates</span>
      <span class="brand-tagline">Dr. Jan Duffy, Realtor</span>
    </a>

    <!-- Desktop Navigation -->
    <nav class="desktop-nav">
      <ul>
        <li class:active={$page.url.pathname === '/'}>
          <a href="/">Home</a>
        </li>
        <li class="has-dropdown" class:active={$page.url.pathname.startsWith('/homes') || $page.url.pathname === '/buy-a-home' || $page.url.pathname === '/buyer-checklist' || $page.url.pathname === '/listings'}>
          <a href="/homes-for-sale">Buy</a>
          <ul class="dropdown">
            <li><a href="/homes-for-sale">Homes for Sale</a></li>
            <li><a href="/buy-a-home">Buyer's Guide</a></li>
            <li><a href="/buyer-checklist">Buyer Checklist</a></li>
            <li><a href="/listings">All Listings</a></li>
            <li><a href="/investment-properties">Investment Properties</a></li>
          </ul>
        </li>
        <li class="has-dropdown" class:active={$page.url.pathname === '/sell-your-home' || $page.url.pathname === '/home-valuation' || $page.url.pathname === '/selling-checklist'}>
          <a href="/sell-your-home">Sell</a>
          <ul class="dropdown">
            <li><a href="/sell-your-home">Sell Your Home</a></li>
            <li><a href="/home-valuation">Free Home Valuation</a></li>
            <li><a href="/market-analysis">Market Analysis</a></li>
            <li><a href="/selling-checklist">Selling Checklist</a></li>
          </ul>
        </li>
        <li class="has-dropdown" class:active={$page.url.pathname.startsWith('/neighborhood') || $page.url.pathname === '/southwest-las-vegas' || $page.url.pathname === '/las-vegas-relocation-guide'}>
          <a href="/neighborhood">Areas</a>
          <ul class="dropdown">
            <li><a href="/neighborhood">Pewter Valley Estates</a></li>
            <li><a href="/southwest-las-vegas">Southwest Las Vegas</a></li>
            <li><a href="/neighborhood-guide">Neighborhood Guide</a></li>
            <li><a href="/photos">Community Photos</a></li>
            <li><a href="/las-vegas-relocation-guide">Relocation Guide</a></li>
          </ul>
        </li>
        <li class:active={$page.url.pathname === '/about' || $page.url.pathname === '/dr-jan-duffy'}>
          <a href="/about">About</a>
        </li>
        <li class:active={$page.url.pathname === '/contact'}>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>

    <!-- CTA Button -->
    <a href={`tel:${SITE_CONFIG.phoneTel}`} class="header-cta">
      <span class="cta-icon">📞</span>
      <span class="cta-text">{SITE_CONFIG.phone}</span>
    </a>

    <!-- Mobile Menu Toggle -->
    <button class="mobile-toggle" onclick={toggleMenu} aria-label="Toggle menu">
      <span class="hamburger" class:open={mobileMenuOpen}></span>
    </button>
  </div>

  <!-- Mobile Navigation -->
  {#if mobileMenuOpen}
    <nav class="mobile-nav">
      <ul>
        <li><a href="/" onclick={closeMenu}>Home</a></li>
        <li class="mobile-section">
          <span class="section-title">Buy a Home</span>
          <ul>
            <li><a href="/homes-for-sale" onclick={closeMenu}>Homes for Sale</a></li>
            <li><a href="/buy-a-home" onclick={closeMenu}>Buyer's Guide</a></li>
            <li><a href="/buyer-checklist" onclick={closeMenu}>Buyer Checklist</a></li>
            <li><a href="/listings" onclick={closeMenu}>All Listings</a></li>
            <li><a href="/investment-properties" onclick={closeMenu}>Investment Properties</a></li>
          </ul>
        </li>
        <li class="mobile-section">
          <span class="section-title">Sell Your Home</span>
          <ul>
            <li><a href="/sell-your-home" onclick={closeMenu}>Sell Your Home</a></li>
            <li><a href="/selling-checklist" onclick={closeMenu}>Selling Checklist</a></li>
            <li><a href="/home-valuation" onclick={closeMenu}>Free Home Valuation</a></li>
            <li><a href="/market-analysis" onclick={closeMenu}>Market Analysis</a></li>
          </ul>
        </li>
        <li class="mobile-section">
          <span class="section-title">Explore Areas</span>
          <ul>
            <li><a href="/neighborhood" onclick={closeMenu}>Pewter Valley Estates</a></li>
            <li><a href="/southwest-las-vegas" onclick={closeMenu}>Southwest Las Vegas</a></li>
            <li><a href="/neighborhood-guide" onclick={closeMenu}>Neighborhood Guide</a></li>
            <li><a href="/las-vegas-relocation-guide" onclick={closeMenu}>Relocation Guide</a></li>
            <li><a href="/photos" onclick={closeMenu}>Community Photos</a></li>
          </ul>
        </li>
        <li><a href="/about" onclick={closeMenu}>About Dr. Jan Duffy</a></li>
        <li><a href="/faq" onclick={closeMenu}>FAQ</a></li>
        <li><a href="/contact" onclick={closeMenu}>Contact</a></li>
      </ul>
      <a href={`tel:${SITE_CONFIG.phoneTel}`} class="mobile-cta" onclick={closeMenu}>
        📞 Call {SITE_CONFIG.phone}
      </a>
    </nav>
  {/if}
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
  }

  .brand {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    gap: 0;
  }

  .brand-name {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1e3a8a;
    line-height: 1.2;
  }

  .brand-tagline {
    font-size: 0.75rem;
    color: #64748b;
  }

  /* Desktop Navigation */
  .desktop-nav {
    display: none;
  }

  .desktop-nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 0.25rem;
  }

  .desktop-nav > ul > li {
    position: relative;
  }

  .desktop-nav > ul > li > a {
    display: block;
    padding: 0.75rem 1rem;
    color: #374151;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: color 0.2s;
    border-radius: 0.375rem;
  }

  .desktop-nav > ul > li > a:hover,
  .desktop-nav > ul > li.active > a {
    color: #1e3a8a;
    background: #f1f5f9;
  }

  /* Dropdown */
  .dropdown {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    min-width: 200px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    border-radius: 0.5rem;
    padding: 0.5rem 0;
    z-index: 100;
  }

  .has-dropdown:hover .dropdown {
    display: block;
  }

  .dropdown li a {
    display: block;
    padding: 0.625rem 1.25rem;
    color: #374151;
    text-decoration: none;
    font-size: 0.875rem;
    transition: all 0.2s;
  }

  .dropdown li a:hover {
    background: #f1f5f9;
    color: #1e3a8a;
  }

  /* Header CTA */
  .header-cta {
    display: none;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1.25rem;
    background: #16B286;
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.2s;
  }

  .header-cta:hover {
    background: #0D8A5B;
    transform: translateY(-1px);
  }

  .cta-icon {
    font-size: 1rem;
  }

  /* Mobile Toggle */
  .mobile-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .hamburger {
    position: relative;
    width: 24px;
    height: 2px;
    background: #374151;
    transition: all 0.3s;
  }

  .hamburger::before,
  .hamburger::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: #374151;
    transition: all 0.3s;
  }

  .hamburger::before {
    top: -7px;
  }

  .hamburger::after {
    top: 7px;
  }

  .hamburger.open {
    background: transparent;
  }

  .hamburger.open::before {
    top: 0;
    transform: rotate(45deg);
  }

  .hamburger.open::after {
    top: 0;
    transform: rotate(-45deg);
  }

  /* Mobile Navigation */
  .mobile-nav {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: white;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    padding: 1rem;
    max-height: calc(100vh - 70px);
    overflow-y: auto;
  }

  .mobile-nav > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .mobile-nav > ul > li > a {
    display: block;
    padding: 0.875rem 1rem;
    color: #1e3a8a;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    border-bottom: 1px solid #e2e8f0;
  }

  .mobile-section {
    border-bottom: 1px solid #e2e8f0;
    padding: 0.875rem 0;
  }

  .section-title {
    display: block;
    padding: 0 1rem 0.5rem;
    color: #64748b;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .mobile-section ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .mobile-section ul li a {
    display: block;
    padding: 0.625rem 1rem 0.625rem 1.5rem;
    color: #374151;
    text-decoration: none;
    font-size: 0.95rem;
  }

  .mobile-cta {
    display: block;
    margin-top: 1rem;
    padding: 1rem;
    background: #16B286;
    color: white;
    text-decoration: none;
    text-align: center;
    border-radius: 0.5rem;
    font-weight: 700;
    font-size: 1rem;
  }

  /* Responsive */
  @media (min-width: 1024px) {
    .desktop-nav {
      display: block;
    }

    .header-cta {
      display: flex;
    }

    .mobile-toggle {
      display: none;
    }

    .mobile-nav {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .brand-name {
      font-size: 1.1rem;
    }

    .cta-text {
      display: none;
    }
  }
</style>
