<script>
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  import { trackEvent } from '$lib/analytics';

  let containerRef;
  let isActive = false;
  let mousePosition = { x: 0, y: 0 };

  // Configuration
  export let enableMouseEffects = true;
  export let enableGlassEffect = true;
  export let enableGooeyEffect = false;

  onMount(() => {
    if (browser && enableMouseEffects) {
      setupMouseEffects();
    }
  });

  onDestroy(() => {
    if (browser) {
      cleanupMouseEffects();
    }
  });

  function setupMouseEffects() {
    const handleMouseMove = (e) => {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
    };

    const handleMouseEnter = () => {
      isActive = true;
      trackEvent('background_interaction', {
        interaction_type: 'mouse_enter',
        component: 'richmond_american_background'
      });
    };

    const handleMouseLeave = () => {
      isActive = false;
      trackEvent('background_interaction', {
        interaction_type: 'mouse_leave',
        component: 'richmond_american_background'
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    if (containerRef) {
      containerRef.addEventListener('mouseenter', handleMouseEnter);
      containerRef.addEventListener('mouseleave', handleMouseLeave);
    }
  }

  function cleanupMouseEffects() {
    // Cleanup will be handled by Svelte's automatic cleanup
  }
</script>

<div 
  bind:this={containerRef}
  class="richmond-background"
  class:active={isActive}
  style="--mouse-x: {mousePosition.x}px; --mouse-y: {mousePosition.y}px;"
>
  <!-- SVG Filters -->
  <svg class="filters" aria-hidden="true">
    <defs>
      {#if enableGlassEffect}
        <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0.02
                    0 1 0 0 0.02
                    0 0 1 0 0.05
                    0 0 0 0.9 0"
            result="tint"
          />
        </filter>
      {/if}
      
      {#if enableGooeyEffect}
        <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="gooey"
          />
          <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
        </filter>
      {/if}
    </defs>
  </svg>

  <!-- Background Layers -->
  <div class="background-layer primary">
    <div class="gradient-mesh"></div>
  </div>
  
  <div class="background-layer secondary">
    <div class="pattern-overlay"></div>
  </div>

  <!-- Content -->
  <div class="content">
    <slot />
  </div>
</div>

<style>
  .richmond-background {
    min-height: 100vh;
    background: #000000;
    position: relative;
    overflow: hidden;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .filters {
    position: absolute;
    inset: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  .background-layer {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .background-layer.primary {
    z-index: 1;
  }

  .background-layer.secondary {
    z-index: 2;
    opacity: 0.6;
  }

  .gradient-mesh {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      #000000 0%,
      #8b5cf6 25%,
      #ffffff 50%,
      #1e1b4b 75%,
      #4c1d95 100%
    );
    background-size: 400% 400%;
    animation: gradientShift 20s ease infinite;
  }

  .pattern-overlay {
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(30, 27, 75, 0.4) 0%, transparent 50%);
    filter: blur(1px);
  }

  .content {
    position: relative;
    z-index: 10;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Mouse interaction effects */
  .richmond-background.active .gradient-mesh {
    animation-duration: 5s;
  }

  .richmond-background.active .pattern-overlay {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }

  /* Glass effect when enabled - removed unused selector */

  /* Responsive design */
  @media (max-width: 768px) {
    .gradient-mesh {
      animation-duration: 15s;
    }
    
    .pattern-overlay {
      opacity: 0.4;
    }
  }

  /* Animation keyframes */
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* Performance optimizations */
  .richmond-background {
    will-change: transform;
    contain: layout style paint;
  }

  .gradient-mesh,
  .pattern-overlay {
    will-change: transform, opacity;
  }
</style>
