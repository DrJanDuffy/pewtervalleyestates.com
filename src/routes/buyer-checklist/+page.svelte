<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import EnhancedSEOHead from "$lib/EnhancedSEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import NAPDisplay from "$lib/NAPDisplay.svelte"
  import RelatedPages from "$lib/RelatedPages.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"

  const pageData = {
    title: "Las Vegas Home Buyer Checklist | Step‑by‑Step Guide for Pewter Valley Estates",
    description:
      "Use this Las Vegas home buyer checklist from Dr. Jan Duffy to navigate financing, home tours, offers, inspections, and closing when buying in Pewter Valley Estates and Southwest Las Vegas (89183).",
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    type: "website",
    canonical: `${SITE_CONFIG.url}/buyer-checklist`,
    keywords:
      "Las Vegas home buyer checklist, Pewter Valley Estates buyer guide, buying a home 89183, Dr. Jan Duffy buyer checklist, Southwest Las Vegas home buying steps"
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Buy a Home", url: "/buy-a-home" },
    { name: "Buyer Checklist", url: "/buyer-checklist" }
  ]

  onMount(() => {
    trackEvent("page_view", { page_title: "Buyer Checklist", page_location: window.location.href })
  })
</script>

<EnhancedSEOHead {pageData} {breadcrumbs} />
<Breadcrumbs {breadcrumbs} />

<main class="buyer-checklist-page">
  <section class="hero">
    <div class="container">
      <h1>Las Vegas Home Buyer Checklist for Pewter Valley Estates</h1>
      <p class="hero-subtitle">
        This step‑by‑step checklist from Dr. Jan Duffy walks you through every phase of buying a home in Pewter Valley
        Estates and Southwest Las Vegas, from first conversation to closing.
      </p>
    </div>
  </section>

  <section class="steps">
    <div class="container">
      <h2>Step‑by‑Step Home Buying Process</h2>
      <ol class="steps-list">
        <li>
          <h3>1. Clarify Your Goals & Budget</h3>
          <p>
            Decide whether you are buying your first home, moving up, downsizing, or purchasing an investment property.
            Review your comfort level for monthly payments and ideal price range in Pewter Valley Estates and Southwest
            Las Vegas.
          </p>
        </li>
        <li>
          <h3>2. Get Pre‑Approved with a Local Lender</h3>
          <p>
            Obtain a written pre‑approval from a lender familiar with Las Vegas and Nevada guidelines. A strong
            pre‑approval letter helps your offer stand out and clarifies your true budget before you fall in love with a
            home.
          </p>
        </li>
        <li>
          <h3>3. Strategy Session with Dr. Jan Duffy</h3>
          <p>
            Schedule a consultation to review Pewter Valley Estates floor plans, nearby communities, commute needs,
            schools, and timing. Together you will create a focused search plan so you are only touring homes that match
            your goals.
          </p>
        </li>
        <li>
          <h3>4. Tour Homes In‑Person and Virtually</h3>
          <p>
            Use a combination of in‑person showings, model home tours, and video walk‑throughs to narrow down your top
            choices. Dr. Jan Duffy will highlight resale considerations, potential repair items, and long‑term
            livability.
          </p>
        </li>
        <li>
          <h3>5. Review Comparables & Choose Offer Terms</h3>
          <p>
            Before writing an offer, you will review recent comparable sales in Pewter Valley Estates and Southwest Las
            Vegas to understand value. Together you will choose price, contingencies, closing timeline, and any credits or
            repairs to request.
          </p>
        </li>
        <li>
          <h3>6. Conduct Inspections & Due Diligence</h3>
          <p>
            Once your offer is accepted, schedule home, roof, HVAC, and other inspections as appropriate. Dr. Jan Duffy
            will help you interpret reports, negotiate repairs, and coordinate any follow‑up evaluations.
          </p>
        </li>
        <li>
          <h3>7. Final Loan Approval & Appraisal</h3>
          <p>
            Your lender will order an appraisal and finalize your loan approval. During this time you will provide any
            updated documentation and avoid major financial changes that could affect your qualification.
          </p>
        </li>
        <li>
          <h3>8. Closing Preparation & Utilities</h3>
          <p>
            Prior to closing, you will arrange utilities, homeowner’s insurance, HOA registration (if applicable), and
            moving logistics. Dr. Jan Duffy will schedule your final walk‑through and ensure all agreed‑upon repairs are
            complete.
          </p>
        </li>
        <li>
          <h3>9. Closing Day & Move‑In</h3>
          <p>
            Sign your closing documents, receive your keys, and celebrate your new home. Dr. Jan Duffy remains available
            after closing to answer questions and connect you with trusted local service providers.
          </p>
        </li>
      </ol>
    </div>
  </section>

  <section class="download-section">
    <div class="container">
      <h2>Printable Buyer Checklist</h2>
      <p>
        Use this simplified version of the buyer checklist as a quick reference while you move through the process. You
        can copy and paste this list into your notes app or print it for your relocation folder.
      </p>
      <ul class="bullet-list">
        <li>Define your purchase goals and ideal timeline</li>
        <li>Obtain lender pre‑approval with a target price and payment range</li>
        <li>Schedule a strategy call with Dr. Jan Duffy</li>
        <li>Tour priority homes in Pewter Valley Estates and Southwest Las Vegas</li>
        <li>Review comparables and write a competitive offer</li>
        <li>Complete inspections and negotiate any repairs</li>
        <li>Finalize loan approval and appraisal</li>
        <li>Arrange utilities, insurance, and movers</li>
        <li>Complete final walk‑through and close</li>
      </ul>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <div class="cta-box">
        <h2>Start Your Home Buying Journey with a 15‑Minute Call</h2>
        <p>
          If you are thinking about buying in Pewter Valley Estates or Southwest Las Vegas, a brief call with Dr. Jan
          Duffy can clarify your options and provide a realistic game plan for your next steps.
        </p>
        <div class="cta-actions">
          <a href="/buy-a-home" class="btn primary">View Buyer Services</a>
          <a href="/contact" class="btn outline">Schedule a Consultation</a>
          <a href={`tel:${SITE_CONFIG.phoneTel}`} class="btn text">Call {SITE_CONFIG.phone}</a>
        </div>
      </div>
    </div>
  </section>

  <section class="nap-section">
    <div class="container">
      <NAPDisplay showGoogleReviewsLink={true} showDirections={true} />
    </div>
  </section>

  <RelatedPages currentPage="/buyer-checklist" />
</main>

<style>
  .buyer-checklist-page {
    background: #f8fafc;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .hero {
    padding: 3rem 0 2rem;
    text-align: center;
  }

  .hero h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    max-width: 720px;
    margin: 0 auto;
    color: #475569;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  .steps {
    padding: 2.5rem 0;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-bottom: 0.5rem;
  }

  .steps-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 1.5rem;
  }

  .steps-list li {
    background: #ffffff;
    border-radius: 1rem;
    padding: 1.5rem 1.75rem;
    box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08);
    border: 1px solid #e2e8f0;
  }

  .steps-list p {
    margin: 0;
    color: #374151;
    line-height: 1.7;
  }

  .download-section {
    padding: 2.5rem 0;
  }

  .bullet-list {
    list-style: disc inside;
    color: #374151;
    line-height: 1.7;
  }

  .cta-section {
    background: #0f172a;
    color: #ffffff;
    padding: 3rem 0;
  }

  .cta-box {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  .cta-box p {
    color: #cbd5f5;
    margin-bottom: 1.5rem;
  }

  .cta-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }

  .btn {
    padding: 0.85rem 1.75rem;
    border-radius: 999px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .btn.primary {
    background: #fbbf24;
    color: #1f2937;
  }

  .btn.outline {
    border: 1px solid #e5e7eb;
    color: #e5e7eb;
  }

  .btn.text {
    color: #e5e7eb;
  }

  .btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.4);
  }

  .nap-section {
    padding: 3rem 0;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1.25rem;
    }

    .hero h1 {
      font-size: 2rem;
    }
  }
</style>

