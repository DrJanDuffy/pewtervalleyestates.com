<script>
import { onMount } from "svelte"
import { trackEvent } from "$lib/analytics"

let _isLoaded = false

onMount(() => {
  _isLoaded = true
  trackEvent("page_view", {
    page_title: "Richmond American Demo",
    page_location: window.location.href,
  })
})

function _handleButtonClick(buttonType) {
  trackEvent("button_click", {
    button_name: buttonType,
    page: "richmond_demo",
  })
}
</script>

<svelte:head>
  <title>Pewter Valley Estates - Richmond American Inspired Design</title>
  <meta name="description" content="Experience the modern design and functionality inspired by Richmond American Homes for Pewter Valley Estates." />
  <meta property="og:title" content="Pewter Valley Estates - Richmond American Inspired Design" />
  <meta property="og:description" content="Experience the modern design and functionality inspired by Richmond American Homes for Pewter Valley Estates." />
  <meta property="og:type" content="website" />
</svelte:head>

<RichmondAmericanAssets />

<RichmondAmericanBackground enableMouseEffects={true} enableGlassEffect={true}>
    <div class="container">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Welcome to Pewter Valley Estates</h1>
          <p class="hero-subtitle">
            Discover your dream home in Las Vegas, Nevada with modern design and exceptional quality.
          </p>
          <div class="hero-buttons">
            <button 
              class="ra-button ra-button-primary"
              on:click={() => handleButtonClick('explore_homes')}
            >
              Explore Homes
            </button>
            <button 
              class="ra-button ra-button-outline"
              on:click={() => handleButtonClick('virtual_tour')}
            >
              Virtual Tour
            </button>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features">
        <div class="features-grid">
          <div class="ra-card">
            <h3>🏠 New Construction</h3>
            <p>Brand new homes built with the latest materials and energy-efficient features.</p>
          </div>
          <div class="ra-card">
            <h3>📍 Prime Location</h3>
            <p>Located in the heart of Las Vegas with easy access to shopping, dining, and entertainment.</p>
          </div>
          <div class="ra-card">
            <h3>🎨 Customizable</h3>
            <p>Personalize your home with a wide range of finishes and upgrade options.</p>
          </div>
        </div>
      </section>

      <!-- Contact Form -->
      <section class="contact">
        <div class="contact-content">
          <h2>Get in Touch</h2>
          <p>Ready to find your perfect home? Contact us today!</p>
          <form class="contact-form">
            <div class="form-group">
              <input 
                type="text" 
                class="ra-input" 
                placeholder="Your Name"
                required
              />
            </div>
            <div class="form-group">
              <input 
                type="email" 
                class="ra-input" 
                placeholder="Your Email"
                required
              />
            </div>
            <div class="form-group">
              <input 
                type="tel" 
                class="ra-input" 
                placeholder="Your Phone"
              />
            </div>
            <div class="form-group">
              <textarea 
                class="ra-input" 
                placeholder="Tell us about your dream home..."
                rows="4"
              ></textarea>
            </div>
            <button 
              type="submit" 
              class="ra-button ra-button-primary"
              on:click={() => handleButtonClick('contact_form')}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
</RichmondAmericanBackground>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--ra-spacing-4);
  }

  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--ra-spacing-20) 0;
  }

  .hero-content h1 {
    font-size: var(--ra-font-size-4xl);
    margin-bottom: var(--ra-spacing-6);
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .hero-subtitle {
    font-size: var(--ra-font-size-xl);
    margin-bottom: var(--ra-spacing-8);
    color: rgba(255, 255, 255, 0.9);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-buttons {
    display: flex;
    gap: var(--ra-spacing-4);
    justify-content: center;
    flex-wrap: wrap;
  }

  .features {
    padding: var(--ra-spacing-20) 0;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--ra-spacing-6);
    margin-top: var(--ra-spacing-12);
  }

  .contact {
    padding: var(--ra-spacing-20) 0;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    margin: var(--ra-spacing-20) 0;
    border-radius: var(--ra-radius-2xl);
  }

  .contact-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }

  .contact-content h2 {
    color: white;
    margin-bottom: var(--ra-spacing-4);
  }

  .contact-content p {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: var(--ra-spacing-8);
  }

  .contact-form {
    display: grid;
    gap: var(--ra-spacing-4);
    text-align: left;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .ra-input {
    background: rgba(255, 255, 255, 0.9);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }

  .ra-input:focus {
    background: white;
    border-color: var(--ra-primary);
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: var(--ra-font-size-3xl);
    }

    .hero-subtitle {
      font-size: var(--ra-font-size-lg);
    }

    .hero-buttons {
      flex-direction: column;
      align-items: center;
    }

    .features-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
