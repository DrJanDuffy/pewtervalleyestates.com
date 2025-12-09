<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  import RichmondAmericanAssets from "$lib/RichmondAmericanAssets.svelte"
  import EnhancedSEOHead from "$lib/EnhancedSEOHead.svelte"
  import Breadcrumbs from "$lib/Breadcrumbs.svelte"
  import NAPDisplay from "$lib/NAPDisplay.svelte"
  import GoogleMap from "$lib/GoogleMap.svelte"
  import GoogleReviews from "$lib/GoogleReviews.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"

  let form = $state({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyInterest: "",
    preferredContact: "phone",
  })

  let errors = $state({})
  let isSubmitting = $state(false)

  function validateForm() {
    const newErrors = {}
    if (!form.name) newErrors.name = "Name is required"
    if (!form.email) {
      newErrors.email = "Email is required"
    } else if (!form.email.includes("@")) {
      newErrors.email = "Please enter a valid email"
    }
    if (!form.phone) {
      newErrors.phone = "Phone number is required"
    } else if (form.phone.length < 10) {
      newErrors.phone = "Please enter a valid phone number"
    }
    if (!form.message) newErrors.message = "Please tell us how we can help you"
    if (!form.propertyInterest) newErrors.propertyInterest = "Please select a property interest"
    if (!form.preferredContact) newErrors.preferredContact = "Please select preferred contact method"
    
    errors = newErrors
    return Object.keys(newErrors).length === 0
  }

  function handleChange(e) {
    const target = e.target
    const { name, value } = target
    // Errors are cleared automatically by binding in some cases, but we can be explicit
    if (name && errors[name]) {
      errors = { ...errors, [name]: null }
    }
  }

  function onSubmit(e) {
    e.preventDefault()
    if (!validateForm()) return

    isSubmitting = true
    trackEvent("contact_form_submit", {
      form_type: "contact",
      property_interest: form.propertyInterest,
      preferred_contact: form.preferredContact,
    })

    // Here you would typically send the data to your backend
    console.log("Contact form submitted:", form)

    // Show success message
    setTimeout(() => {
        alert("Thank you for your message! Dr. Jan Duffy will contact you within 24 hours.")
        isSubmitting = false
        // Reset form
        form = {
            name: "",
            email: "",
            phone: "",
            message: "",
            propertyInterest: "",
            preferredContact: "phone",
        }
    }, 500)
  }

  function handlePhoneClick() {
    trackEvent("phone_click", {
      phone_number: SITE_CONFIG.phone,
      section: "contact",
    })
  }

  onMount(() => {
    trackEvent("page_view", {
      page_title: "Contact",
      page_location: window.location.href,
    })
  })

  // SEO data for Contact page
  const pageData = {
    title: "Contact Dr. Jan Duffy - Real Estate Agent | Pewter Valley Estates",
    description: `Contact Dr. Jan Duffy, your trusted real estate agent for Pewter Valley Estates in Las Vegas. Call ${SITE_CONFIG.phone} or send a message for expert home buying assistance.`,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    type: "website",
    canonical: `${SITE_CONFIG.url}/contact`,
    keywords: "contact Dr. Jan Duffy, Las Vegas real estate agent, Pewter Valley Estates contact, real estate consultation, Southwest Las Vegas realtor",
  }

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ]

  const faqs = [
    {
      question: "What are Dr. Jan Duffy's business hours?",
      answer: "Dr. Jan Duffy is available Monday-Friday 9:00 AM - 6:00 PM and Saturday 10:00 AM - 4:00 PM. For urgent matters, you can call or text at any time.",
    },
    {
      question: "How quickly will I receive a response?",
      answer: "Dr. Jan Duffy typically responds to all inquiries within 24 hours. For urgent matters, calling or texting directly is the fastest way to reach her.",
    },
    {
      question: "What information should I include in my contact form?",
      answer: "Please include your name, contact information, preferred contact method, property interest (buying, selling, investing), and any specific questions or requirements you have.",
    },
  ]
</script>

<!-- SEO Head Component -->
<EnhancedSEOHead 
  {pageData} 
  {breadcrumbs}
  {faqs}
/>

<Breadcrumbs {breadcrumbs} />

<RichmondAmericanAssets />

<div class="contact-page">
  <!-- Hero Section -->
  <section class="contact-hero">
    <div class="container">
      <div class="hero-content">
        <h1>Contact Dr. Jan Duffy - Real Estate Agent | Pewter Valley Estates</h1>
        <p class="hero-subtitle">Your Trusted Real Estate Agent for Pewter Valley Estates</p>
        <p class="hero-description">
          Ready to find your dream home in Las Vegas? I'm here to guide you through every step of the home buying process with personalized service and expert local knowledge.
        </p>
      </div>
    </div>
  </section>

  <!-- Contact Information -->
  <section class="contact-info">
    <div class="container">
      <div class="info-grid">
        <div class="info-card">
          <div class="info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <h3>Call Me Directly</h3>
          <p>Speak with me personally about your real estate needs</p>
          <a href={`tel:${SITE_CONFIG.phoneFormatted}`} class="contact-link" onclick={handlePhoneClick}>
            {SITE_CONFIG.phone}
          </a>
        </div>

        <div class="info-card">
          <div class="info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <h3>Email Me</h3>
          <p>Send me a detailed message about your requirements</p>
          <a href={`mailto:${SITE_CONFIG.email}`} class="contact-link">
            {SITE_CONFIG.email}
          </a>
        </div>

        <div class="info-card">
          <div class="info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </div>
          <h3>Schedule a Tour</h3>
          <p>Book a personal tour of Pewter Valley Estates</p>
          <a href="/richmond-demo" class="contact-link">
            Schedule Virtual Tour
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form -->
  <section class="contact-form-section">
    <div class="container">
      <div class="form-container">
        <div class="form-header">
          <h2>Send Me a Message</h2>
          <p>Fill out the form below and I'll get back to you within 24 hours</p>
        </div>

        <form onsubmit={onSubmit} class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Full Name *</label>
              <input 
                type="text" 
                id="name"
                name="name"
                bind:value={form.name}
                oninput={handleChange}
                class="form-input"
                class:error={errors.name}
                placeholder="Your full name"
              />
              {#if errors.name}
                <span class="error-message">{errors.name}</span>
              {/if}
            </div>

            <div class="form-group">
              <label for="email">Email Address *</label>
              <input 
                type="email" 
                id="email"
                name="email"
                bind:value={form.email}
                oninput={handleChange}
                class="form-input"
                class:error={errors.email}
                placeholder="your.email@example.com"
              />
              {#if errors.email}
                <span class="error-message">{errors.email}</span>
              {/if}
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="phone">Phone Number *</label>
              <input 
                type="tel" 
                id="phone"
                name="phone"
                bind:value={form.phone}
                oninput={handleChange}
                class="form-input"
                class:error={errors.phone}
                placeholder="(702) 555-0123"
              />
              {#if errors.phone}
                <span class="error-message">{errors.phone}</span>
              {/if}
            </div>

            <div class="form-group">
              <label for="propertyInterest">Property Interest *</label>
              <select 
                id="propertyInterest"
                name="propertyInterest"
                bind:value={form.propertyInterest}
                onchange={handleChange}
                class="form-select"
                class:error={errors.propertyInterest}
              >
                <option value="">Select your interest</option>
                <option value="buying">Buying a Home</option>
                <option value="selling">Selling a Home</option>
                <option value="investing">Real Estate Investment</option>
                <option value="renting">Rental Property</option>
                <option value="general">General Inquiry</option>
              </select>
              {#if errors.propertyInterest}
                <span class="error-message">{errors.propertyInterest}</span>
              {/if}
            </div>
          </div>

          <div class="form-group">
            <label for="preferredContact">Preferred Contact Method *</label>
            <div class="radio-group">
              <label class="radio-label">
                <input 
                  type="radio" 
                  name="preferredContact"
                  value="phone"
                  bind:group={form.preferredContact}
                  onchange={handleChange}
                />
                <span class="radio-text">Phone Call</span>
              </label>
              <label class="radio-label">
                <input 
                  type="radio" 
                  name="preferredContact"
                  value="email"
                  bind:group={form.preferredContact}
                  onchange={handleChange}
                />
                <span class="radio-text">Email</span>
              </label>
              <label class="radio-label">
                <input 
                  type="radio" 
                  name="preferredContact"
                  value="text"
                  bind:group={form.preferredContact}
                  onchange={handleChange}
                />
                <span class="radio-text">Text Message</span>
              </label>
            </div>
            {#if errors.preferredContact}
              <span class="error-message">{errors.preferredContact}</span>
            {/if}
          </div>

          <div class="form-group">
            <label for="message">Message *</label>
            <textarea 
              id="message"
              name="message"
              bind:value={form.message}
              oninput={handleChange}
              class="form-textarea"
              class:error={errors.message}
              placeholder="Tell me about your real estate needs, timeline, budget, or any questions you have about Pewter Valley Estates..."
              rows="5"
            ></textarea>
            {#if errors.message}
              <span class="error-message">{errors.message}</span>
            {/if}
          </div>

          <button 
            type="submit" 
            class="submit-btn"
            disabled={isSubmitting}
          >
            {#if isSubmitting}
              Sending Message...
            {:else}
              Send Message to Dr. Jan Duffy
            {/if}
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- NAP Display Section -->
  <section class="nap-section">
    <div class="container">
      <NAPDisplay showGoogleReviewsLink={true} showDirections={true} />
    </div>
  </section>

  <!-- Google Map Section -->
  <section class="map-section">
    <GoogleMap />
  </section>

  <!-- Google Reviews Section -->
  <section class="reviews-section">
    <GoogleReviews showSchema={false} />
  </section>

  <!-- Why Choose Me Section -->
  <section class="why-choose-me">
    <div class="container">
      <h2>Why Choose Dr. Jan Duffy for Your Pewter Valley Estates Real Estate Needs?</h2>
      <p class="lead">
        Dr. Jan Duffy's specialized focus on Pewter Valley Estates and Southwest Las Vegas provides advantages that generalist agents cannot match. Her expertise ensures clients receive comprehensive representation tailored to this unique community in zip code 89183.
      </p>
      
      <div class="benefits-grid">
        <div class="benefit">
          <div class="benefit-icon">🏠</div>
          <h3>Specialized Community Expertise</h3>
          <p>Deep knowledge of Pewter Valley Estates including every floor plan, lot location, market trend, and resale transaction nuance. Dr. Jan Duffy understands community-specific factors affecting property values, buyer preferences, and successful transactions in this Richmond American Homes community.</p>
        </div>
        <div class="benefit">
          <div class="benefit-icon">🤝</div>
          <h3>Personalized Service and Attention</h3>
          <p>One-on-one attention and customized approach tailored to individual goals, budgets, and timelines. Dr. Jan Duffy adapts her services to match each client's unique situation, whether buying a first home, selling to maximize value, or building investment portfolios in Southwest Las Vegas.</p>
        </div>
        <div class="benefit">
          <div class="benefit-icon">📋</div>
          <h3>Comprehensive Transaction Support</h3>
          <p>Complete guidance through every step of buying or selling processes, from initial consultation through post-closing follow-up. Dr. Jan Duffy manages all transaction details proactively, coordinates with service providers, and ensures successful outcomes for Pewter Valley Estates clients.</p>
        </div>
        <div class="benefit">
          <div class="benefit-icon">⚡</div>
          <h3>Quick Response and Availability</h3>
          <p>Fast response times and availability when clients need support most. Real estate transactions move quickly, and Dr. Jan Duffy ensures clients receive prompt responses to questions, immediate access to new listings, and timely coordination of time-sensitive activities throughout transactions.</p>
        </div>
        <div class="benefit">
          <div class="benefit-icon">📊</div>
          <h3>Real-Time Market Intelligence</h3>
          <p>Immediate access to MLS listings, market data, and community-specific insights that inform timely decisions. Dr. Jan Duffy's market knowledge ensures clients receive current information about pricing trends, inventory levels, and market conditions affecting Pewter Valley Estates specifically.</p>
        </div>
        <div class="benefit">
          <div class="benefit-icon">🎯</div>
          <h3>Results-Driven Representation</h3>
          <p>Proven track record of successful transactions, satisfied clients, and optimal outcomes for buyers, sellers, and investors. Dr. Jan Duffy's specialized expertise translates to better results whether maximizing sale prices, securing competitive purchases, or building profitable investment portfolios.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="contact-methods">
    <div class="container">
      <h2>Multiple Ways to Reach Dr. Jan Duffy</h2>
      <p class="lead">
        Dr. Jan Duffy makes it easy to connect about your Pewter Valley Estates real estate needs. Choose the contact method that works best for you.
      </p>

      <h3>Phone Communication for Immediate Assistance</h3>
      <p>
        Calling Dr. Jan Duffy directly at {SITE_CONFIG.phone} provides immediate access to expert guidance and answers to your real estate questions. Phone calls are ideal for urgent matters, time-sensitive questions, scheduling property tours, or discussing complex real estate situations requiring detailed explanation. Dr. Jan Duffy maintains availability during business hours and responds promptly to voicemails for non-urgent matters.
      </p>
      <p>
        Phone communication also allows for personal connection and detailed discussion that may be difficult through other channels. Whether you're exploring buying opportunities, evaluating selling strategies, or discussing investment potential in Pewter Valley Estates, phone conversations provide opportunities for thorough discussion and immediate clarification of questions or concerns. Dr. Jan Duffy welcomes phone calls from clients seeking expert real estate guidance.
      </p>

      <h3>Email for Detailed Inquiries and Documentation</h3>
      <p>
        Email communication at {SITE_CONFIG.email} provides opportunities for detailed inquiries, document sharing, and comprehensive responses to complex questions. Email is ideal for sharing property information, discussing market analysis, reviewing contracts, or communicating detailed requirements. Dr. Jan Duffy responds to emails promptly, typically within 24 hours, ensuring clients receive timely responses to all inquiries.
      </p>
      <p>
        Email also provides written documentation of communications, which can be helpful for tracking discussions, referencing previous conversations, and maintaining records of real estate decisions. This documentation benefit makes email valuable for complex transactions, investment analyses, and situations requiring detailed written communication. Dr. Jan Duffy uses email to provide comprehensive responses and detailed information supporting client decisions.
      </p>

      <h3>Contact Form for Initial Inquiries</h3>
      <p>
        The contact form on this page provides convenient ways to initiate contact about your Pewter Valley Estates real estate needs. Contact forms allow you to specify property interests, preferred contact methods, timelines, and specific questions, helping Dr. Jan Duffy prepare for initial consultations and provide targeted responses. Form submissions are reviewed promptly, and Dr. Jan Duffy responds according to your preferred contact method.
      </p>
      <p>
        Contact forms are particularly useful for initial inquiries when you're exploring options, gathering information, or determining whether Dr. Jan Duffy's services align with your needs. The form captures essential information that helps Dr. Jan Duffy understand your situation and provide relevant guidance. Whether you're considering buying, selling, or investing in Pewter Valley Estates, the contact form provides an easy starting point for connecting with expert representation.
      </p>
    </div>
  </section>

  <section class="response-commitment">
    <div class="container">
      <h2>Dr. Jan Duffy's Commitment to Responsive Service</h2>
      <p class="lead">
        Real estate transactions move quickly, and responsive communication is essential for successful outcomes. Dr. Jan Duffy maintains high standards for communication responsiveness, ensuring clients receive timely responses and support when needed.
      </p>

      <h3>Response Time Commitments</h3>
      <p>
        Dr. Jan Duffy typically responds to all inquiries within 24 hours, with most phone calls and emails receiving responses much faster. Urgent matters receive immediate attention, ensuring time-sensitive issues don't delay transactions or create problems. This responsiveness standard ensures clients stay informed and can make timely decisions throughout real estate processes.
      </p>
      <p>
        Response commitments extend to all communication channels including phone calls, emails, contact form submissions, and text messages. Dr. Jan Duffy understands that real estate decisions often require quick action, and responsive communication ensures clients have information needed for timely decisions. This commitment to responsiveness reflects Dr. Jan Duffy's dedication to client service and transaction success.
      </p>

      <h3>Availability and Accessibility</h3>
      <p>
        Dr. Jan Duffy maintains availability during standard business hours (Monday-Friday 9:00 AM - 6:00 PM and Saturday 10:00 AM - 4:00 PM) while remaining accessible for urgent matters outside these hours when needed. Understanding that real estate transactions don't always fit standard schedules, Dr. Jan Duffy accommodates client needs while maintaining work-life balance that ensures quality service.
      </p>
      <p>
        Accessibility also includes flexibility in communication methods, accommodating client preferences for phone, email, text, or in-person meetings. This flexibility ensures clients can communicate using methods most comfortable and convenient for them. Dr. Jan Duffy's goal is removing barriers to communication, making it easy for clients to connect about their Pewter Valley Estates real estate needs whenever questions or concerns arise.
      </p>
    </div>
  </section>
</div>

<style>
  .contact-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Hero Section */
  .contact-hero {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    color: white;
    padding: 4rem 0;
    text-align: center;
  }

  .hero-content h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .hero-subtitle {
    font-size: 1.5rem;
    color: #fbbf24;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .hero-description {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
    opacity: 0.9;
    line-height: 1.6;
  }

  /* Contact Info Section */
  .contact-info {
    padding: 4rem 0;
    background: white;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .info-card {
    text-align: center;
    padding: 2rem;
    border-radius: 1rem;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
  }

  .info-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }

  .info-icon {
    width: 4rem;
    height: 4rem;
    background: linear-gradient(135deg, #1e3a8a, #1e40af);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
  }

  .info-icon svg {
    width: 24px;
    height: 24px;
    color: white;
  }

  .info-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-bottom: 0.5rem;
  }

  .info-card p {
    color: #64748b;
    margin-bottom: 1rem;
  }

  .contact-link {
    color: #1e3a8a;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: color 0.3s ease;
  }

  .contact-link:hover {
    color: #fbbf24;
  }

  /* Contact Form Section */
  .contact-form-section {
    padding: 4rem 0;
    background: #f8fafc;
  }

  .form-container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 3rem;
    border-radius: 1rem;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }

  .form-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .form-header h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 0.5rem;
  }

  .form-header p {
    color: #64748b;
    font-size: 1.1rem;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.5rem;
  }

  .form-input,
  .form-select,
  .form-textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: white;
  }

  .form-input:focus,
  .form-select:focus,
  .form-textarea:focus {
    outline: none;
    border-color: #1e3a8a;
    box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
  }

  .form-input.error,
  .form-select.error,
  .form-textarea.error {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }

  .form-textarea {
    resize: vertical;
    min-height: 120px;
  }

  .radio-group {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .radio-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  .radio-label input[type="radio"] {
    margin: 0;
  }

  .radio-text {
    font-weight: 500;
    color: #374151;
  }

  .error-message {
    display: block;
    color: #ef4444;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }

  .submit-btn {
    width: 100%;
    background: #1e3a8a;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;
  }

  .submit-btn:hover:not(:disabled) {
    background: #1e40af;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 58, 138, 0.4);
  }

  .submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Why Choose Me Section */
  /* NAP Section */
  .nap-section {
    padding: 4rem 0;
    background: #f8fafc;
  }
  
  /* Map Section */
  .map-section {
    padding: 0;
    background: white;
  }
  
  /* Reviews Section */
  .reviews-section {
    padding: 0;
    background: #f8fafc;
  }
  
  .why-choose-me {
    padding: 4rem 0;
    background: white;
  }

  .why-choose-me .lead {
    font-size: 1.25rem;
    color: #374151;
    line-height: 1.8;
    margin-bottom: 2rem;
    font-weight: 500;
    text-align: center;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  .contact-methods,
  .response-commitment {
    padding: 4rem 0;
  }

  .contact-methods {
    background: #f8fafc;
  }

  .response-commitment {
    background: white;
  }

  .contact-methods h2,
  .response-commitment h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 2rem;
    text-align: center;
  }

  .contact-methods .lead,
  .response-commitment .lead {
    font-size: 1.25rem;
    color: #374151;
    line-height: 1.8;
    margin-bottom: 2rem;
    font-weight: 500;
    text-align: center;
  }

  .contact-methods h3,
  .response-commitment h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .contact-methods p,
  .response-commitment p {
    color: #374151;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
  }

  .why-choose-me h2 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 3rem;
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .benefit {
    text-align: center;
    padding: 1.5rem;
  }

  .benefit-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .benefit h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-bottom: 0.5rem;
  }

  .benefit p {
    color: #64748b;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2.5rem;
    }

    .form-row {
      grid-template-columns: 1fr;
    }

    .form-container {
      padding: 2rem;
    }

    .radio-group {
      flex-direction: column;
    }
  }
</style>
