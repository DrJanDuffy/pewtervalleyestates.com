<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import EnhancedSEOHead from "$lib/EnhancedSEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import NAPDisplay from "$lib/NAPDisplay.svelte"
  import RelatedPages from "$lib/RelatedPages.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"

  const pageData = {
    title: "Las Vegas Home Selling Checklist | Prep Your Pewter Valley Estates Home for Sale",
    description:
      "Follow this Las Vegas home selling checklist from Dr. Jan Duffy to prepare, price, and market your Pewter Valley Estates home or Southwest Las Vegas property for a successful sale.",
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    type: "website",
    canonical: `${SITE_CONFIG.url}/selling-checklist`,
    keywords:
      "Las Vegas home selling checklist, Pewter Valley Estates selling guide, prepare home for sale 89183, Dr. Jan Duffy seller checklist, Southwest Las Vegas home selling steps"
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Sell Your Home", url: "/sell-your-home" },
    { name: "Selling Checklist", url: "/selling-checklist" }
  ]

  onMount(() => {
    trackEvent("page_view", { page_title: "Selling Checklist", page_location: window.location.href })
  })
</script>

<EnhancedSEOHead {pageData} {breadcrumbs} />
<Breadcrumbs {breadcrumbs} />

<main class="selling-checklist-page">
  <section class="hero">
    <div class="container">
      <h1>Las Vegas Home Selling Checklist for Pewter Valley Estates</h1>
      <p class="hero-subtitle">
        Use this practical checklist from Dr. Jan Duffy to prepare, position, and successfully sell your home in Pewter
        Valley Estates or Southwest Las Vegas.
      </p>
    </div>
  </section>

  <section class="steps">
    <div class="container">
      <h2>Pre‑Listing Preparation</h2>
      <ol class="steps-list">
        <li>
          <h3>1. Clarify Your Timing & Move Plan</h3>
          <p>
            Decide when you need to move, whether you will buy before you sell, and how flexible your dates are. This
            helps determine pricing strategy, showing logistics, and contingency planning.
          </p>
        </li>
        <li>
          <h3>2. Schedule a Pricing & Strategy Consultation</h3>
          <p>
            Meet with Dr. Jan Duffy to review comparable sales in Pewter Valley Estates and nearby Southwest Las Vegas
            communities, discuss recommended list price range, ideal launch timing, and prep priorities.
          </p>
        </li>
        <li>
          <h3>3. Complete Repairs & Deferred Maintenance</h3>
          <p>
            Address obvious repairs such as leaky faucets, damaged drywall, worn caulking, or non‑functional fixtures.
            Handling these items before listing helps avoid contract‑time surprises and makes a stronger first impression.
          </p>
        </li>
        <li>
          <h3>4. Declutter, Depersonalize & Deep Clean</h3>
          <p>
            Remove excess items from surfaces, closets, and garages so rooms feel spacious. Depersonalize family photos
            and highly specific decor. Schedule a thorough deep clean, including windows, baseboards, and flooring.
          </p>
        </li>
        <li>
          <h3>5. Enhance Curb Appeal</h3>
          <p>
            In a community like Pewter Valley Estates, buyers often form an opinion before they walk to the front door.
            Refresh landscaping, tidy rock or desert scape, repaint the front door if needed, and ensure exterior lighting
            is working properly.
          </p>
        </li>
      </ol>
    </div>
  </section>

  <section class="marketing-section">
    <div class="container">
      <h2>Listing Launch & Marketing Checklist</h2>
      <ol class="steps-list">
        <li>
          <h3>6. Professional Photos & Media</h3>
          <p>
            High‑quality photography, and when appropriate video or virtual tours, are essential in today’s Las Vegas
            market. Dr. Jan Duffy coordinates media that highlights your home’s best features and aligns with how buyers
            search online.
          </p>
        </li>
        <li>
          <h3>7. MLS Listing Details & Property Story</h3>
          <p>
            Together with Dr. Jan Duffy you will craft a compelling property description that emphasizes Pewter Valley
            Estates benefits, upgrades, floor plan, and lifestyle features, and ensure room dimensions and feature lists
            are accurate.
          </p>
        </li>
        <li>
          <h3>8. Showing Strategy & Showing Instructions</h3>
          <p>
            Determine how showings will be handled (lockbox with notice, appointment only, open houses) and how much
            advance notice you need. Clear instructions help buyers and agents schedule efficiently.
          </p>
        </li>
        <li>
          <h3>9. Review Feedback & Market Response</h3>
          <p>
            After launch, Dr. Jan Duffy will monitor showing activity, feedback, and online traffic. Together you will
            review whether price, presentation, or terms should be adjusted based on early market response.
          </p>
        </li>
      </ol>
    </div>
  </section>

  <section class="escrow-section">
    <div class="container">
      <h2>Under Contract to Closing</h2>
      <ol class="steps-list">
        <li>
          <h3>10. Evaluate Offers & Negotiate Terms</h3>
          <p>
            When offers arrive, you will compare price, financing type, contingencies, timelines, and net proceeds. Dr. Jan
            Duffy will help you evaluate strengths and risks of each offer and negotiate terms that match your goals.
          </p>
        </li>
        <li>
          <h3>11. Inspection & Repair Negotiations</h3>
          <p>
            Buyers may request repairs or credits after inspections. Dr. Jan Duffy will help you prioritize which items to
            address, coordinate contractors when needed, and keep negotiations aligned with your net targets.
          </p>
        </li>
        <li>
          <h3>12. Appraisal & Loan Milestones</h3>
          <p>
            During escrow, your buyer’s lender will order an appraisal. If the value comes in lower than expected, Dr. Jan
            Duffy will guide you through options including price negotiations or appraisal rebuttal, depending on the
            circumstances.
          </p>
        </li>
        <li>
          <h3>13. Final Walk‑Through & Move‑Out</h3>
          <p>
            Prior to closing, buyers conduct a final walk‑through to confirm the property condition and completion of
            agreed‑upon repairs. You will coordinate move‑out, utility transfers, HOA move‑out requirements, and final
            cleaning.
          </p>
        </li>
        <li>
          <h3>14. Closing & Next Chapter</h3>
          <p>
            On closing day you will sign documents, confirm payoff figures, and receive final settlement statements. Dr.
            Jan Duffy remains available for post‑closing questions and to help you with next‑home strategies or relocation
            support.
          </p>
        </li>
      </ol>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <div class="cta-box">
        <h2>Thinking About Selling in Pewter Valley Estates?</h2>
        <p>
          A brief consultation with Dr. Jan Duffy can help you understand your current market value, timeline options, and
          the exact steps needed to prepare your home for a successful sale in Southwest Las Vegas.
        </p>
        <div class="cta-actions">
          <a href="/sell-your-home" class="btn primary">View Seller Services</a>
          <a href="/home-valuation" class="btn outline">Request Home Valuation</a>
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

  <RelatedPages currentPage="/selling-checklist" />
</main>

<style>
  .selling-checklist-page {
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

  section {
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

