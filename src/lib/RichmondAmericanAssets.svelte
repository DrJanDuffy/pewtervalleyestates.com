<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  // Asset configuration
  export let enableFonts = true;
  export let enableFavicons = true;
  export let enableStyles = true;

  onMount(() => {
    if (browser && enableFonts) {
      loadFonts();
    }
  });

  function loadFonts() {
    // Preload Google Fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preconnect';
    fontLink.href = 'https://fonts.googleapis.com';
    document.head.appendChild(fontLink);

    const fontLink2 = document.createElement('link');
    fontLink2.rel = 'preconnect';
    fontLink2.href = 'https://fonts.gstatic.com';
    fontLink2.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink2);

    // Load Nunito Sans font
    const nunitoLink = document.createElement('link');
    nunitoLink.href = 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap';
    nunitoLink.rel = 'stylesheet';
    nunitoLink.media = 'print';
    nunitoLink.onload = function() {
      this.media = 'all';
      this.onload = null;
    };
    document.head.appendChild(nunitoLink);
  }
</script>

<svelte:head>
  {#if enableFavicons}
    <!-- Favicon options - using default SvelteKit favicon -->
    <link rel="icon" href="/favicon.png" />
  {/if}

  {#if enableStyles}
    <!-- Richmond American inspired styles -->
    <style>
      :root {
        /* Richmond American Color Palette */
        --ra-primary: #1e3a8a;
        --ra-secondary: #3b82f6;
        --ra-accent: #f59e0b;
        --ra-success: #10b981;
        --ra-warning: #f59e0b;
        --ra-error: #ef4444;
        
        /* Typography */
        --ra-font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        --ra-font-size-xs: 0.75rem;
        --ra-font-size-sm: 0.875rem;
        --ra-font-size-base: 1rem;
        --ra-font-size-lg: 1.125rem;
        --ra-font-size-xl: 1.25rem;
        --ra-font-size-2xl: 1.5rem;
        --ra-font-size-3xl: 1.875rem;
        --ra-font-size-4xl: 2.25rem;
        
        /* Spacing */
        --ra-spacing-1: 0.25rem;
        --ra-spacing-2: 0.5rem;
        --ra-spacing-3: 0.75rem;
 --ra-spacing-4: 1rem;
        --ra-spacing-5: 1.25rem;
        --ra-spacing-6: 1.5rem;
        --ra-spacing-8: 2rem;
        --ra-spacing-10: 2.5rem;
        --ra-spacing-12: 3rem;
        --ra-spacing-16: 4rem;
        --ra-spacing-20: 5rem;
        
        /* Shadows */
        --ra-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        --ra-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        --ra-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        --ra-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        --ra-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        
        /* Border radius */
        --ra-radius-sm: 0.125rem;
        --ra-radius: 0.25rem;
        --ra-radius-md: 0.375rem;
        --ra-radius-lg: 0.5rem;
        --ra-radius-xl: 0.75rem;
        --ra-radius-2xl: 1rem;
        --ra-radius-full: 9999px;
      }

      /* Base typography */
      body {
        font-family: var(--ra-font-family);
        line-height: 1.6;
        color: #1f2937;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: var(--ra-font-family);
        font-weight: 700;
        line-height: 1.2;
        color: var(--ra-primary);
      }

      h1 { font-size: var(--ra-font-size-4xl); }
      h2 { font-size: var(--ra-font-size-3xl); }
      h3 { font-size: var(--ra-font-size-2xl); }
      h4 { font-size: var(--ra-font-size-xl); }
      h5 { font-size: var(--ra-font-size-lg); }
      h6 { font-size: var(--ra-font-size-base); }

      /* Button styles inspired by Richmond American */
      .ra-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: var(--ra-spacing-3) var(--ra-spacing-6);
        font-family: var(--ra-font-family);
        font-size: var(--ra-font-size-base);
        font-weight: 600;
        line-height: 1;
        border-radius: var(--ra-radius-lg);
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        box-shadow: var(--ra-shadow);
      }

      .ra-button-primary {
        background-color: var(--ra-primary);
        color: white;
      }

      .ra-button-primary:hover {
        background-color: #1e40af;
        box-shadow: var(--ra-shadow-md);
        transform: translateY(-1px);
      }

      .ra-button-secondary {
        background-color: var(--ra-secondary);
        color: white;
      }

      .ra-button-secondary:hover {
        background-color: #2563eb;
        box-shadow: var(--ra-shadow-md);
        transform: translateY(-1px);
      }

      .ra-button-outline {
        background-color: transparent;
        color: var(--ra-primary);
        border: 2px solid var(--ra-primary);
      }

      .ra-button-outline:hover {
        background-color: var(--ra-primary);
        color: white;
      }

      /* Card styles */
      .ra-card {
        background: white;
        border-radius: var(--ra-radius-xl);
        box-shadow: var(--ra-shadow-lg);
        padding: var(--ra-spacing-6);
        transition: all 0.3s ease;
      }

      .ra-card:hover {
        box-shadow: var(--ra-shadow-xl);
        transform: translateY(-2px);
      }

      /* Form styles */
      .ra-input {
        width: 100%;
        padding: var(--ra-spacing-3) var(--ra-spacing-4);
        font-family: var(--ra-font-family);
        font-size: var(--ra-font-size-base);
        border: 2px solid #e5e7eb;
        border-radius: var(--ra-radius-lg);
        transition: border-color 0.2s ease;
      }

      .ra-input:focus {
        outline: none;
        border-color: var(--ra-primary);
        box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
      }

      /* Responsive design */
      @media (max-width: 768px) {
        h1 { font-size: var(--ra-font-size-3xl); }
        h2 { font-size: var(--ra-font-size-2xl); }
        h3 { font-size: var(--ra-font-size-xl); }
        
        .ra-button {
          padding: var(--ra-spacing-2) var(--ra-spacing-4);
          font-size: var(--ra-font-size-sm);
        }
        
        .ra-card {
          padding: var(--ra-spacing-4);
        }
      }
    </style>
  {/if}
</svelte:head>
