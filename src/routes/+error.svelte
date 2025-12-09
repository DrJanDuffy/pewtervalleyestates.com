<script>
  import EnhancedSEOHead from "$lib/EnhancedSEOHead.svelte"
  import { SITE_CONFIG } from "$lib/seo.js"

  let { error, status } = $props()

  const pageData = {
    title: "Page Not Found - 404 | Pewter Valley Estates",
    description: `The page you're looking for doesn't exist. Return to ${SITE_CONFIG.businessName} homepage.`,
    canonical: `${SITE_CONFIG.url}/404`,
    noindex: true,
  }

  const errorStatus = status || 404
  const errorMessage = error?.message || "Page not found"
</script>

<EnhancedSEOHead {pageData} />

<main class="error-page">
  <div class="container">
    <div class="error-content">
      <h1>{errorStatus}</h1>
      <h2>{errorMessage}</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <div class="error-actions">
        <a href="/" class="btn btn-primary">Return to Homepage</a>
        <a href="/contact" class="btn btn-outline">Contact Us</a>
      </div>
      <div class="error-links">
        <h3>Popular Pages</h3>
        <ul>
          <li><a href="/about">About Dr. Jan Duffy</a></li>
          <li><a href="/listings">View Listings</a></li>
          <li><a href="/homes-for-sale">Homes for Sale</a></li>
          <li><a href="/neighborhood-guide">Neighborhood Guide</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</main>

<style>
  .error-page {
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 0;
    background: #f8fafc;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .error-content {
    text-align: center;
    background: white;
    padding: 4rem 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 8rem;
    font-weight: 800;
    color: #0A2540;
    margin: 0;
    line-height: 1;
  }

  h2 {
    font-size: 2rem;
    color: #64748b;
    margin: 1rem 0;
    font-weight: 600;
  }

  p {
    font-size: 1.125rem;
    color: #64748b;
    margin-bottom: 2rem;
  }

  .error-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-block;
    padding: 0.875rem 2rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .btn-primary {
    background-color: #fbbf24;
    color: #0A2540;
    border: 2px solid #fbbf24;
  }

  .btn-primary:hover {
    background-color: #f59e0b;
    border-color: #f59e0b;
  }

  .btn-outline {
    background-color: transparent;
    color: #0A2540;
    border: 2px solid #0A2540;
  }

  .btn-outline:hover {
    background-color: #0A2540;
    color: white;
  }

  .error-links {
    margin-top: 3rem;
    padding-top: 3rem;
    border-top: 1px solid #e2e8f0;
  }

  .error-links h3 {
    font-size: 1.25rem;
    color: #0A2540;
    margin-bottom: 1rem;
  }

  .error-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  .error-links li {
    margin: 0;
  }

  .error-links a {
    color: #0A2540;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.2s ease;
  }

  .error-links a:hover {
    background-color: #f1f5f9;
    text-decoration: underline;
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 5rem;
    }

    .error-actions {
      flex-direction: column;
    }

    .btn {
      width: 100%;
    }
  }
</style>

