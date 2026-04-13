<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import EnhancedSEOHead from "$lib/EnhancedSEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import NAPDisplay from "$lib/NAPDisplay.svelte"
  import GoogleMap from "$lib/GoogleMap.svelte"
  import RelatedPages from "$lib/RelatedPages.svelte"
  import { SILVERADO_RANCH, SITE_CONFIG } from "$lib/seo.js"

  const pageData = {
    title: `Silverado Ranch Real Estate | Henderson & Clark County (${SILVERADO_RANCH.zips.join(", ")}) | Dr. Jan Duffy`,
    description: `Silverado Ranch: master-planned Henderson & Clark County (${SILVERADO_RANCH.zips.join(", ")})—20+ subdivisions, condos to estates. Pewter Valley Estates is inside this area. MLS-backed guidance: Dr. Jan Duffy ${SITE_CONFIG.phone}.`,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    type: "website",
    canonical: `${SITE_CONFIG.url}/silverado-ranch`,
    keywords:
      "Silverado Ranch real estate, American West Silverado Ranch, Henderson NV homes, Clark County 89123, 89183, master-planned Silverado Ranch, Dr. Jan Duffy realtor",
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Silverado Ranch", url: "/silverado-ranch" },
  ]

  const faqs = [
    {
      question: "What zip codes are associated with Silverado Ranch?",
      answer: `Buyers and sellers often search Silverado Ranch alongside Clark County zip codes ${SILVERADO_RANCH.zips[0]} and ${SILVERADO_RANCH.zips[1]}. Boundaries can vary by data source; Dr. Jan Duffy helps you align MLS searches, comps, and tours with the neighborhoods and pockets that match your commute, schools, and lifestyle goals.`,
    },
    {
      question: "Is Silverado Ranch only in Henderson, Nevada?",
      answer:
        "Silverado Ranch is widely known as a suburban master-planned area in the southeast Las Vegas Valley. Parts of the surrounding market fall within Henderson city limits, while nearby addresses may show Las Vegas or Clark County depending on the parcel. Dr. Jan Duffy focuses on accurate address-level guidance—not generic map labels—so your offer, pricing, and disclosures match the property you choose.",
    },
    {
      question: "What makes Silverado Ranch appealing for suburban buyers?",
      answer:
        "The area is known for residential neighborhoods, parks, and everyday conveniences that fit family and commuter lifestyles, with access toward major employment and retail corridors in the Las Vegas Valley. Communities such as Pewter Valley Estates sit within Silverado Ranch; Dr. Jan Duffy helps you compare floor plans, HOA context, and resale trends here and in nearby southeast valley neighborhoods when you are cross-shopping.",
    },
    {
      question: "How do I search homes for sale in Silverado Ranch?",
      answer: `Start with the site listings and map tools, then refine by price, beds/baths, and HOA. For a curated search aligned to ${SILVERADO_RANCH.zips.join("/")} and your must-haves, call Dr. Jan Duffy at ${SITE_CONFIG.phone} or use the contact form to request a personalized Silverado Ranch search.`,
    },
    {
      question: "Can Dr. Jan Duffy help me sell a home in Silverado Ranch?",
      answer:
        "Yes—seller services include pricing strategy using relevant comps, preparation guidance, professional marketing, and negotiation aligned to current buyer demand in the Silverado Ranch area and adjacent Clark County neighborhoods.",
    },
    {
      question: "How does Silverado Ranch relate to Pewter Valley Estates?",
      answer:
        "Pewter Valley Estates is a community within Silverado Ranch. It is a Richmond American master-planned pocket in zip code 89183 (Pyle Avenue and S Rancho Destino Rd) that Dr. Jan Duffy highlights for resale expertise. When you search Silverado Ranch, you are in the right area—Pewter Valley Estates is one of the neighborhoods inside it. Dr. Jan Duffy can tour and advise with address-level detail across Silverado Ranch and nearby southeast valley options.",
    },
    {
      question: "Is Silverado Ranch a master-planned community?",
      answer:
        "Yes. Silverado Ranch is a large master-planned footprint developed by American West with roots in the 1990s. It is made up of more than 20 subdivisions with a mix of condos, townhomes, detached single-family homes, and custom estates—so pricing and HOA rules can vary by pocket. Dr. Jan Duffy helps you compare subdivisions with real comps, not generic map labels.",
    },
    {
      question: "What schools serve Silverado Ranch?",
      answer:
        "Many Silverado Ranch students attend Clark County School District schools; common references include John C. Bass Elementary, Charles A. Silvestri Junior High, and Liberty High School—ratings and boundaries change, so verify the address you are considering with CCSD. Liberty High offers dual-enrollment pathways with Nevada State College for eligible students. Dr. Jan Duffy encourages buyers to confirm attendance zones and programs before writing an offer.",
    },
  ]

  onMount(() => {
    trackEvent("page_view", {
      page_title: "Silverado Ranch",
      page_location: typeof window !== "undefined" ? window.location.href : "",
    })
  })
</script>

<EnhancedSEOHead {pageData} {breadcrumbs} {faqs} />
<Breadcrumbs {breadcrumbs} showHome={false} />

<main class="silverado-page">
  <section class="hero">
    <div class="container">
      <h1>Silverado Ranch Real Estate | Henderson, Nevada &amp; Clark County ({SILVERADO_RANCH.zips.join(" & ")})</h1>
      <p class="hero-subtitle">
        Suburban neighborhood — {SILVERADO_RANCH.city}, {SILVERADO_RANCH.county} · Zips {SILVERADO_RANCH.zips.join(" & ")}
      </p>
      <p class="hero-description">
        <strong>Silverado Ranch</strong> is a master-planned southeast valley community with <strong>20+ subdivisions</strong>,
        mature landscaping, and homes from condos and townhomes to single-family and estate properties. Pewter Valley Estates
        is one neighborhood inside this footprint. Whether you are buying or selling in <strong>{SILVERADO_RANCH.zips[0]}</strong>
        or <strong>{SILVERADO_RANCH.zips[1]}</strong>, Dr. Jan Duffy ties strategy to live MLS data—not stale portal estimates.
      </p>
    </div>
  </section>

  <section class="section-stats" aria-labelledby="stats-heading">
    <div class="container">
      <h2 id="stats-heading" class="stats-section-title">Illustrative market snapshot</h2>
      <p class="stats-disclaimer">{SILVERADO_RANCH.marketSnapshotIllustrative.footnote}</p>
      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-value">{SILVERADO_RANCH.marketSnapshotIllustrative.averageValueDisplay}</span>
          <span class="stat-label">Average value (overview)</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">{SILVERADO_RANCH.marketSnapshotIllustrative.avgPricePerSqFtDisplay}</span>
          <span class="stat-label">Avg. price / sq ft (overview)</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">{SILVERADO_RANCH.marketSnapshotIllustrative.homesForSaleDisplay}</span>
          <span class="stat-label">Homes for sale (overview)</span>
        </div>
      </div>
    </div>
  </section>

  <section class="section-light">
    <div class="container content-prose">
      <h2>Master-planned Silverado Ranch</h2>
      <p>
        Silverado Ranch took shape in the <strong>{SILVERADO_RANCH.masterPlan.era}</strong> under
        <strong>{SILVERADO_RANCH.masterPlan.developer}</strong>. The area is organized into
        <strong>        {SILVERADO_RANCH.masterPlan.subdivisionsPlus} subdivisions</strong>, each with its own character—
        {SILVERADO_RANCH.masterPlan.housingTypes.join(", ")}. That variety matters for comps: Dr. Jan Duffy
        prices and markets your home against the right subdivision mix, not a generic zip-code average.
      </p>
      <h3>Location &amp; everyday convenience</h3>
      <p>
        {SILVERADO_RANCH.access.positioning} Freeway access via
        <strong>{SILVERADO_RANCH.access.freeways.join(" and ")}</strong> supports commuters across the valley; the Las Vegas
        Strip is roughly <strong>{SILVERADO_RANCH.access.stripMilesApprox} miles</strong> from much of the area. Parks, trails,
        shopping, and dining clusters are woven through the community—tell Dr. Jan Duffy what you want within a typical week
        and she will align tours accordingly.
      </p>
      <h3>Value &amp; housing mix</h3>
      <p>
        Because Silverado Ranch is an <strong>established</strong> neighborhood, buyers often find generous lots and
        single-story layouts with practical garages—plus townhomes and condos for lower-maintenance lifestyles. Reported
        market bands vary by product type; use the table below as orientation, then confirm against live listings and comps.
      </p>
      <div class="price-band-wrap">
        <table class="price-band-table">
          <caption>Illustrative price bands — verify with MLS</caption>
          <thead>
            <tr>
              <th scope="col">Segment</th>
              <th scope="col">Reported range</th>
            </tr>
          </thead>
          <tbody>
            {#each SILVERADO_RANCH.priceBandsIllustrative as row}
              <tr>
                <td>{row.label}</td>
                <td>{row.range}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      <p class="fine-print">
        Many homes date to the 1990s build era—condition, updates, and lot premiums move real numbers inside (or above) these
        bands. Dr. Jan Duffy prepares seller pricing and buyer offers using address-specific comps.
      </p>
    </div>
  </section>

  <section class="section-muted">
    <div class="container content-prose">
      <h2>Schools &amp; education (verify before you buy)</h2>
      <p>
        Students in Silverado Ranch typically attend schools in the <strong>{SILVERADO_RANCH.schoolsReference.district}</strong>.
        Examples families research include {SILVERADO_RANCH.schoolsReference.examples.join(", ")}. Ratings on sites like Niche
        shift over time—always confirm the home you want is in the attendance zone you expect.
      </p>
      <p>
        {SILVERADO_RANCH.schoolsReference.programsNote}
      </p>
    </div>
  </section>

  <section class="section-light">
    <div class="container">
      <h2>Zip codes {SILVERADO_RANCH.zips.join(" & ")} — how we optimize your search</h2>
      <p class="lead">
        Real estate platforms and buyers often overlap <strong>89123</strong> and <strong>89183</strong> when exploring
        Silverado Ranch and nearby southeast Clark County. Dr. Jan Duffy sets up searches and pricing reviews that respect
        those zip boundaries while still validating lot, HOA, and school-attendance details on a per-address basis—where it
        matters for your contract and closing.
      </p>
      <p>
        This page complements our <a href="/southwest-las-vegas">Southwest Las Vegas overview</a> and the
        <a href="/neighborhood">Pewter Valley Estates</a> community page—Pewter Valley Estates is a neighborhood
        <strong>within</strong> Silverado Ranch. If you are weighing schools, commute, or HOA, we will walk the tradeoffs
        transparently—without generic market hype.
      </p>
    </div>
  </section>

  <section class="section-muted">
    <div class="container">
      <h2>Suburban lifestyle in the Silverado Ranch area</h2>
      <p class="lead">
        Suburban buyers typically prioritize manageable commutes, neighborhood parks, and housing variety—from single-story
        layouts to larger family floor plans. Dr. Jan Duffy connects those priorities to what is realistically available in
        current inventory, seller motivation, and seasonal trends across the Silverado Ranch market footprint.
      </p>
      <h3>Buyers</h3>
      <p>
        Expect a structured process: budget confirmation, loan pre-approval coordination (with your lender), targeted
        tours, offer strategy, inspections, and closing checkpoints. You get clear explanations at each step so you can
        decide confidently in <strong>{SILVERADO_RANCH.county}</strong>.
      </p>
      <h3>Sellers</h3>
      <p>
        Selling in a suburban corridor means pricing against nearby competition—not only within Silverado Ranch but also
        against comparable neighborhoods buyers cross-shop in the southeast valley. Dr. Jan Duffy prepares a marketing plan
        and pricing narrative that reflects real buyer behavior in <strong>{SILVERADO_RANCH.zips.join(" / ")}</strong>.
      </p>
    </div>
  </section>

  <section class="section-light">
    <div class="container">
      <h2>Work with Dr. Jan Duffy (same phone & service standards site-wide)</h2>
      <p class="lead">
        Phone <a href={`tel:${SITE_CONFIG.phoneTel}`}>{SITE_CONFIG.phone}</a> — consistent with the contact information
        shown across this site and aligned with our local business details for Dr. Jan Duffy’s real estate services in the
        Las Vegas Valley.
      </p>
      <div class="cta-row">
        <a class="btn-primary" href="/homes-for-sale">Browse homes for sale</a>
        <a class="btn-outline" href="/contact">Plan a Silverado Ranch consultation</a>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2>Next step: tour-ready search in Silverado Ranch</h2>
        <p>
          Tell Dr. Jan Duffy whether you are focused on <strong>{SILVERADO_RANCH.zips[0]}</strong>,
          <strong>{SILVERADO_RANCH.zips[1]}</strong>, or both—and whether schools, commute, or HOA matter most. You will
          get a practical roadmap, not a cookie-cutter list.
        </p>
        <NAPDisplay showGoogleReviewsLink={true} showDirections={true} />
      </div>
    </div>
  </section>

  <section class="map-section">
    <GoogleMap />
  </section>

  <RelatedPages currentPage="/silverado-ranch" />
</main>

<style>
  .silverado-page {
    width: 100%;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
    color: white;
    padding: 4rem 0;
    text-align: center;
  }

  .hero h1 {
    font-size: 2.35rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 1.35rem;
    color: #fbbf24;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .hero-description {
    font-size: 1.125rem;
    max-width: 920px;
    margin: 0 auto;
    line-height: 1.75;
    opacity: 0.96;
  }

  .section-stats {
    background: #f1f5f9;
    padding: 3rem 0;
    border-top: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;
  }

  .stats-section-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e3a8a;
    text-align: center;
    margin-bottom: 0.75rem;
  }

  .stats-disclaimer {
    font-size: 0.9rem;
    color: #64748b;
    text-align: center;
    max-width: 800px;
    margin: 0 auto 1.75rem;
    line-height: 1.55;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    max-width: 960px;
    margin: 0 auto;
  }

  .stat-card {
    background: white;
    border-radius: 12px;
    padding: 1.5rem 1.25rem;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    border: 1px solid #e2e8f0;
  }

  .stat-value {
    display: block;
    font-size: 1.75rem;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 0.35rem;
  }

  .stat-label {
    font-size: 0.88rem;
    color: #64748b;
    line-height: 1.35;
  }

  .content-prose h2 {
    text-align: left;
    margin-bottom: 1rem;
  }

  .content-prose h3 {
    text-align: left;
  }

  .content-prose p {
    max-width: 72ch;
    margin-left: 0;
    margin-right: auto;
  }

  .price-band-wrap {
    max-width: 720px;
    margin: 1.5rem auto 0;
    overflow-x: auto;
  }

  .price-band-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.98rem;
  }

  .price-band-table caption {
    caption-side: bottom;
    font-size: 0.85rem;
    color: #64748b;
    padding-top: 0.75rem;
    text-align: left;
  }

  .price-band-table th,
  .price-band-table td {
    border: 1px solid #e2e8f0;
    padding: 0.65rem 0.85rem;
    text-align: left;
  }

  .price-band-table th {
    background: #f8fafc;
    font-weight: 600;
    color: #1e3a8a;
  }

  .fine-print {
    font-size: 0.92rem;
    color: #64748b;
    max-width: 72ch;
    margin-top: 1.25rem;
  }

  .section-light,
  .section-muted {
    padding: 4rem 0;
  }

  .section-light {
    background: white;
  }

  .section-muted {
    background: #f8fafc;
  }

  h2 {
    font-size: 2.1rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 1.25rem;
    text-align: center;
  }

  h3 {
    font-size: 1.35rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  .lead {
    font-size: 1.2rem;
    color: #374151;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-weight: 500;
    text-align: center;
  }

  p {
    color: #374151;
    line-height: 1.8;
    margin-bottom: 1.25rem;
    font-size: 1.08rem;
  }

  a {
    color: #1d4ed8;
    font-weight: 600;
    text-decoration: underline;
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
  }

  .btn-primary,
  .btn-outline {
    display: inline-block;
    padding: 0.85rem 1.75rem;
    border-radius: 8px;
    font-weight: 700;
    text-decoration: none;
  }

  .btn-primary {
    background: #16b286;
    color: white;
  }

  .btn-outline {
    border: 2px solid #1e3a8a;
    color: #1e3a8a;
    background: white;
  }

  .cta-section {
    background: #1e3a8a;
    color: white;
    padding: 4rem 0;
  }

  .cta-content {
    text-align: center;
    max-width: 860px;
    margin: 0 auto;
  }

  .cta-content h2 {
    color: white;
  }

  .cta-content p {
    color: rgba(255, 255, 255, 0.92);
  }

  .map-section {
    padding: 0;
  }

  @media (max-width: 768px) {
    .hero h1 {
      font-size: 1.75rem;
    }

    .stats-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
