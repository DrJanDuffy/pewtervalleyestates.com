<script>
  import { createForm } from 'svelte-forms-lib';
  import { trackEvent } from '$lib/analytics';
  import { onMount } from 'svelte';
  import RichmondAmericanAssets from '$lib/RichmondAmericanAssets.svelte';

  const { form, handleChange, handleSubmit, errors, isSubmitting } = createForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      propertyInterest: '',
      preferredContact: 'phone'
    },
    validationSchema: {
      name: (value) => value ? null : 'Name is required',
      email: (value) => {
        if (!value) return 'Email is required';
        if (!value.includes('@')) return 'Please enter a valid email';
        return null;
      },
      phone: (value) => {
        if (!value) return 'Phone number is required';
        if (value.length < 10) return 'Please enter a valid phone number';
        return null;
      },
      message: (value) => value ? null : 'Please tell us how we can help you',
      propertyInterest: (value) => value ? null : 'Please select a property interest',
      preferredContact: (value) => value ? null : 'Please select preferred contact method'
    }
  });

  onMount(() => {
    trackEvent('page_view', {
      page_title: 'Contact',
      page_location: window.location.href
    });
  });

  function onSubmit(values) {
    trackEvent('contact_form_submit', {
      form_type: 'contact',
      property_interest: values.propertyInterest,
      preferred_contact: values.preferredContact
    });
    
    // Here you would typically send the data to your backend
    console.log('Contact form submitted:', values);
    
    // Show success message
    alert('Thank you for your message! Dr. Jan Duffy will contact you within 24 hours.');
  }

  function handlePhoneClick() {
    trackEvent('phone_click', {
      phone_number: '702-222-1964',
      section: 'contact'
    });
  }
</script>

<svelte:head>
  <title>Contact Dr. Jan Duffy - Real Estate Agent | Pewter Valley Estates</title>
  <meta name="description" content="Contact Dr. Jan Duffy, your trusted real estate agent for Pewter Valley Estates in Las Vegas. Call 702-222-1964 or send a message for expert home buying assistance." />
  <meta property="og:title" content="Contact Dr. Jan Duffy - Real Estate Agent | Pewter Valley Estates" />
  <meta property="og:description" content="Contact Dr. Jan Duffy, your trusted real estate agent for Pewter Valley Estates in Las Vegas. Call 702-222-1964 or send a message for expert home buying assistance." />
  <meta property="og:type" content="website" />
</svelte:head>

<RichmondAmericanAssets />

<div class="contact-page">
  <!-- Hero Section -->
  <section class="contact-hero">
    <div class="container">
      <div class="hero-content">
        <h1>Contact Dr. Jan Duffy</h1>
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
          <a href="tel:+1-702-222-1964" class="contact-link" on:click={handlePhoneClick}>
            (702) 222-1964
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
          <a href="mailto:jan.duffy@pewtervalleyestates.com" class="contact-link">
            jan.duffy@pewtervalleyestates.com
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

        <form on:submit={handleSubmit(onSubmit)} class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Full Name *</label>
              <input 
                type="text" 
                id="name"
                name="name"
                bind:value={$form.name}
                on:input={handleChange}
                class="form-input"
                class:error={$errors.name}
                placeholder="Your full name"
              />
              {#if $errors.name}
                <span class="error-message">{$errors.name}</span>
              {/if}
            </div>

            <div class="form-group">
              <label for="email">Email Address *</label>
              <input 
                type="email" 
                id="email"
                name="email"
                bind:value={$form.email}
                on:input={handleChange}
                class="form-input"
                class:error={$errors.email}
                placeholder="your.email@example.com"
              />
              {#if $errors.email}
                <span class="error-message">{$errors.email}</span>
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
                bind:value={$form.phone}
                on:input={handleChange}
                class="form-input"
                class:error={$errors.phone}
                placeholder="(702) 555-0123"
              />
              {#if $errors.phone}
                <span class="error-message">{$errors.phone}</span>
              {/if}
            </div>

            <div class="form-group">
              <label for="propertyInterest">Property Interest *</label>
              <select 
                id="propertyInterest"
                name="propertyInterest"
                bind:value={$form.propertyInterest}
                on:change={handleChange}
                class="form-select"
                class:error={$errors.propertyInterest}
              >
                <option value="">Select your interest</option>
                <option value="buying">Buying a Home</option>
                <option value="selling">Selling a Home</option>
                <option value="investing">Real Estate Investment</option>
                <option value="renting">Rental Property</option>
                <option value="general">General Inquiry</option>
              </select>
              {#if $errors.propertyInterest}
                <span class="error-message">{$errors.propertyInterest}</span>
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
                  bind:group={$form.preferredContact}
                  on:change={handleChange}
                />
                <span class="radio-text">Phone Call</span>
              </label>
              <label class="radio-label">
                <input 
                  type="radio" 
                  name="preferredContact"
                  value="email"
                  bind:group={$form.preferredContact}
                  on:change={handleChange}
                />
                <span class="radio-text">Email</span>
              </label>
              <label class="radio-label">
                <input 
                  type="radio" 
                  name="preferredContact"
                  value="text"
                  bind:group={$form.preferredContact}
                  on:change={handleChange}
                />
                <span class="radio-text">Text Message</span>
              </label>
            </div>
            {#if $errors.preferredContact}
              <span class="error-message">{$errors.preferredContact}</span>
            {/if}
          </div>

          <div class="form-group">
            <label for="message">Message *</label>
            <textarea 
              id="message"
              name="message"
              bind:value={$form.message}
              on:input={handleChange}
              class="form-textarea"
              class:error={$errors.message}
              placeholder="Tell me about your real estate needs, timeline, budget, or any questions you have about Pewter Valley Estates..."
              rows="5"
            ></textarea>
            {#if $errors.message}
              <span class="error-message">{$errors.message}</span>
            {/if}
          </div>

          <button 
            type="submit" 
            class="submit-btn"
            disabled={$isSubmitting}
          >
            {#if $isSubmitting}
              Sending Message...
            {:else}
              Send Message to Dr. Jan Duffy
            {/if}
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- Why Choose Me Section -->
  <section class="why-choose-me">
    <div class="container">
      <h2>Why Choose Dr. Jan Duffy?</h2>
      <div class="benefits-grid">
        <div class="benefit">
          <div class="benefit-icon">🏠</div>
          <h3>Local Expertise</h3>
          <p>Deep knowledge of Las Vegas real estate market and Pewter Valley Estates community</p>
        </div>
        <div class="benefit">
          <div class="benefit-icon">🤝</div>
          <h3>Personalized Service</h3>
          <p>One-on-one attention and customized approach to meet your unique needs</p>
        </div>
        <div class="benefit">
          <div class="benefit-icon">📋</div>
          <h3>Full Support</h3>
          <p>Complete guidance through every step of the home buying or selling process</p>
        </div>
        <div class="benefit">
          <div class="benefit-icon">⚡</div>
          <h3>Quick Response</h3>
          <p>Fast response times and availability when you need me most</p>
        </div>
      </div>
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
  .why-choose-me {
    padding: 4rem 0;
    background: white;
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
