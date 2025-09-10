<script>
import { generateBreadcrumbSchema } from "$lib/seo.js"

export const breadcrumbs = []
export const showHome = true

// Generate breadcrumb schema for SEO
$: breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)
</script>

<!-- Breadcrumb Navigation -->
<nav aria-label="Breadcrumb" class="breadcrumbs">
  <ol class="breadcrumb-list">
    {#if showHome}
      <li class="breadcrumb-item">
        <a href="/" class="breadcrumb-link">
          <svg class="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
          Home
        </a>
      </li>
    {/if}
    
    {#each breadcrumbs as breadcrumb, index}
      <li class="breadcrumb-item">
        <span class="breadcrumb-separator" aria-hidden="true">/</span>
        {#if index === breadcrumbs.length - 1}
          <span class="breadcrumb-current" aria-current="page">
            {breadcrumb.name}
          </span>
        {:else}
          <a href={breadcrumb.url} class="breadcrumb-link">
            {breadcrumb.name}
          </a>
        {/if}
      </li>
    {/each}
  </ol>
</nav>

<!-- JSON-LD Structured Data -->
{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>`}

<style>
  .breadcrumbs {
    margin: 1rem 0;
    padding: 0.5rem 0;
  }
  
  .breadcrumb-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 0.875rem;
    color: var(--text-secondary, #666);
  }
  
  .breadcrumb-item {
    display: flex;
    align-items: center;
    margin: 0;
  }
  
  .breadcrumb-link {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--text-secondary, #666);
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    transition: all 0.2s ease;
  }
  
  .breadcrumb-link:hover {
    color: var(--primary-color, #0A2540);
    background-color: var(--background-hover, #f5f5f5);
  }
  
  .breadcrumb-link:focus {
    outline: 2px solid var(--primary-color, #0A2540);
    outline-offset: 2px;
  }
  
  .breadcrumb-icon {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
  
  .breadcrumb-separator {
    margin: 0 0.5rem;
    color: var(--text-muted, #999);
    font-weight: 300;
  }
  
  .breadcrumb-current {
    color: var(--text-primary, #333);
    font-weight: 500;
    padding: 0.25rem 0.5rem;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .breadcrumbs {
      margin: 0.5rem 0;
    }
    
    .breadcrumb-list {
      font-size: 0.8rem;
    }
    
    .breadcrumb-link {
      padding: 0.125rem 0.25rem;
    }
    
    .breadcrumb-separator {
      margin: 0 0.25rem;
    }
  }
  
  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .breadcrumb-link {
      border: 1px solid transparent;
    }
    
    .breadcrumb-link:hover {
      border-color: currentColor;
    }
  }
  
  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .breadcrumb-link {
      transition: none;
    }
  }
</style>
