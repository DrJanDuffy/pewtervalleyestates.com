<script>
  import { SITE_CONFIG } from "$lib/seo.js"

  const primaryLinks = [
    { label: "Buy a Home", href: "/buy-a-home" },
    { label: "Sell Your Home", href: "/sell-your-home" },
    { label: "Homes for Sale", href: "/homes-for-sale" },
    { label: "Home Valuation", href: "/home-valuation" },
    { label: "Active Listings", href: "/listings" }
  ]

  const resourceLinks = [
    { label: "Neighborhood Guide", href: "/neighborhood-guide" },
    { label: "Southwest Las Vegas", href: "/southwest-las-vegas" },
    { label: "Market Analysis", href: "/market-analysis" },
    { label: "Investment Properties", href: "/investment-properties" },
    { label: "FAQ", href: "/faq" }
  ]

  const aboutLinks = [
    { label: "About Dr. Jan Duffy", href: "/about" },
    { label: "Meet Your Realtor", href: "/dr-jan-duffy" },
    { label: "Google Reviews", href: "/google-reviews" },
    { label: "Contact", href: "/contact" },
    { label: "Virtual Tours", href: "/richmond-demo" }
  ]

  const socialLinks = [
    { label: "Facebook", href: SITE_CONFIG.social.facebook },
    { label: "Instagram", href: SITE_CONFIG.social.instagram },
    { label: "LinkedIn", href: SITE_CONFIG.social.linkedin },
    { label: "Twitter", href: SITE_CONFIG.social.twitter }
  ].filter((link) => Boolean(link.href))
</script>

<footer class="site-footer">
  <div class="footer-cta">
    <div class="container">
      <div class="cta-content">
        <div>
          <p class="cta-eyebrow">Luxury Las Vegas Real Estate</p>
          <h2>Ready to tour Pewter Valley Estates?</h2>
          <p>Schedule a private consultation with Dr. Jan Duffy and explore the most exclusive homes in Southwest Las Vegas.</p>
        </div>
        <div class="cta-actions">
          <a href={`tel:${SITE_CONFIG.phoneTel}`} class="cta-button primary">
            <span>📞 Call {SITE_CONFIG.phone}</span>
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination={encodeURIComponent(`${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.stateAbbr} ${SITE_CONFIG.address.zipCode}`)}"
            target="_blank"
            rel="noopener noreferrer"
            class="cta-button outline"
          >
            🗺️ Directions
          </a>
          {#if SITE_CONFIG.googleReviewsUrl}
            <a href={SITE_CONFIG.googleReviewsUrl} target="_blank" rel="noopener noreferrer" class="cta-button ghost">
              ⭐ View Google Reviews
            </a>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <div class="footer-main">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <p class="footer-tagline">Pewter Valley Estates</p>
          <h3>Dr. Jan Duffy | Luxury Real Estate Advisor</h3>
          <p class="footer-description">
            Boutique representation for buyers, sellers, and investors seeking premium Southwest Las Vegas properties. Personal service, data-backed strategies, and unmatched neighborhood expertise.
          </p>
          <div class="footer-contact">
            <div>
              <span class="contact-label">Visit</span>
              <p>{SITE_CONFIG.address.street}<br />{SITE_CONFIG.address.city}, {SITE_CONFIG.address.stateAbbr} {SITE_CONFIG.address.zipCode}</p>
            </div>
            <div>
              <span class="contact-label">Call</span>
              <a href={`tel:${SITE_CONFIG.phoneTel}`}>{SITE_CONFIG.phone}</a>
            </div>
            <div>
              <span class="contact-label">Email</span>
              <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
            </div>
            <div>
              <span class="contact-label">Hours</span>
              <p>Mon–Fri 9am‑6pm · Sat 10am‑4pm</p>
            </div>
          </div>
          <div class="social-links">
            {#each socialLinks as link}
              <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
            {/each}
          </div>
        </div>

        <div class="footer-links">
          <h4>Buy & Sell</h4>
          <ul>
            {#each primaryLinks as link}
              <li><a href={link.href}>{link.label}</a></li>
            {/each}
          </ul>
        </div>

        <div class="footer-links">
          <h4>Resources</h4>
          <ul>
            {#each resourceLinks as link}
              <li><a href={link.href}>{link.label}</a></li>
            {/each}
          </ul>
        </div>

        <div class="footer-links">
          <h4>About</h4>
          <ul>
            {#each aboutLinks as link}
              <li><a href={link.href}>{link.label}</a></li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container">
      <div class="footer-bottom-content">
        <p>© {new Date().getFullYear()} Dr. Jan Duffy · Pewter Valley Estates · Luxury Real Estate in Las Vegas</p>
        <p class="footer-legal">NV Licensed Realtor · Equal Housing Opportunity · Powered by Richmond American Homes</p>
      </div>
    </div>
  </div>
</footer>

<style>
  .site-footer {
    background: #070c19;
    color: #e2e8f0;
    margin-top: auto;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .footer-cta {
    background: linear-gradient(120deg, #0f172a, #1e293b);
    padding: 3rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .cta-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  .cta-eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.8rem;
    color: #fbbf24;
    margin-bottom: 0.4rem;
  }

  .cta-content h2 {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
  }

  .cta-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .cta-button {
    padding: 0.85rem 1.5rem;
    border-radius: 999px;
    font-weight: 600;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .cta-button.primary {
    background: #fbbf24;
    color: #0f172a;
  }

  .cta-button.outline {
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: #e2e8f0;
  }

  .cta-button.ghost {
    color: #e2e8f0;
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  .footer-main {
    padding: 4rem 0 3rem;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 2.5rem;
  }

  .footer-brand h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .footer-description {
    color: #cbd5f5;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .footer-contact {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .contact-label {
    display: block;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #94a3b8;
    margin-bottom: 0.2rem;
  }

  .footer-contact a {
    color: #fbbf24;
    text-decoration: none;
    font-weight: 600;
  }

  .social-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .social-links a {
    color: #cbd5f5;
    text-decoration: none;
    font-size: 0.95rem;
  }

  .footer-links h4 {
    font-size: 1rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #f8fafc;
  }

  .footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  .footer-links a {
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .footer-links a:hover {
    color: #fbbf24;
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding: 1.5rem 0;
    background: #050812;
  }

  .footer-bottom-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    font-size: 0.9rem;
    color: #94a3b8;
  }

  @media (max-width: 1024px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr;
    }

    .footer-brand {
      grid-column: span 2;
    }
  }

  @media (max-width: 768px) {
    .cta-content {
      flex-direction: column;
      text-align: center;
    }

    .cta-actions {
      justify-content: center;
    }

    .footer-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .cta-button {
      width: 100%;
      text-align: center;
    }
  }
</style>
