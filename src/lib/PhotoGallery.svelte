<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { trackEvent } from '$lib/analytics';

  // Props
  export let photos = [];
  export let title = 'Photo Gallery';
  export let showTitle = true;
  export let columns = 3;
  export let enableLightbox = true;
  export let enableLazyLoading = true;

  let selectedPhoto = null;
  let lightboxOpen = false;
  let galleryRef;

  // Responsive columns
  $: responsiveColumns = browser ? getResponsiveColumns() : columns;

  function getResponsiveColumns() {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return columns;
  }

  onMount(() => {
    if (browser) {
      window.addEventListener('resize', () => {
        responsiveColumns = getResponsiveColumns();
      });

      // Track gallery view
      trackEvent('gallery_view', {
        gallery_title: title,
        photo_count: photos.length
      });
    }
  });

  function openLightbox(photo, index) {
    if (enableLightbox) {
      selectedPhoto = { ...photo, index };
      lightboxOpen = true;
      document.body.style.overflow = 'hidden';
      
      trackEvent('photo_click', {
        photo_index: index,
        photo_title: photo.title || 'Untitled',
        gallery_title: title
      });
    }
  }

  function closeLightbox() {
    lightboxOpen = false;
    selectedPhoto = null;
    document.body.style.overflow = 'auto';
  }

  function nextPhoto() {
    if (selectedPhoto) {
      const nextIndex = (selectedPhoto.index + 1) % photos.length;
      selectedPhoto = { ...photos[nextIndex], index: nextIndex };
    }
  }

  function prevPhoto() {
    if (selectedPhoto) {
      const prevIndex = selectedPhoto.index === 0 ? photos.length - 1 : selectedPhoto.index - 1;
      selectedPhoto = { ...photos[prevIndex], index: prevIndex };
    }
  }

  function handleKeydown(event) {
    if (lightboxOpen) {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowRight') nextPhoto();
      if (event.key === 'ArrowLeft') prevPhoto();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="photo-gallery" bind:this={galleryRef}>
  {#if showTitle}
    <h2 class="gallery-title">{title}</h2>
  {/if}

  <div class="gallery-grid" style="grid-template-columns: repeat({responsiveColumns}, 1fr);">
    {#each photos as photo, index}
      <div class="photo-item" class:lazy={enableLazyLoading}>
        <div 
          class="photo-container" 
          role="button"
          tabindex="0"
          on:click={() => openLightbox(photo, index)}
          on:keydown={(e) => e.key === 'Enter' && openLightbox(photo, index)}
        >
          {#if enableLazyLoading}
            <img
              src={photo.thumbnail || photo.src}
              alt={photo.alt || photo.title || 'Gallery photo'}
              loading="lazy"
              class="photo-image"
            />
          {:else}
            <img
              src={photo.src}
              alt={photo.alt || photo.title || 'Gallery photo'}
              class="photo-image"
            />
          {/if}
          
          {#if photo.title}
            <div class="photo-overlay">
              <h3 class="photo-title">{photo.title}</h3>
              {#if photo.description}
                <p class="photo-description">{photo.description}</p>
              {/if}
            </div>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>

<!-- Lightbox Modal -->
{#if lightboxOpen && selectedPhoto}
  <div 
    class="lightbox" 
    role="dialog"
    aria-modal="true"
    aria-label="Photo lightbox"
    on:click={closeLightbox}
    on:keydown={(e) => e.key === 'Escape' && closeLightbox()}
  >
    <div 
      class="lightbox-content" 
      role="document"
      on:click|stopPropagation
    >
      <button class="lightbox-close" on:click={closeLightbox} aria-label="Close lightbox">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      
      <button class="lightbox-nav lightbox-prev" on:click={prevPhoto} aria-label="Previous photo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15,18 9,12 15,6"></polyline>
        </svg>
      </button>
      
      <button class="lightbox-nav lightbox-next" on:click={nextPhoto} aria-label="Next photo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9,18 15,12 9,6"></polyline>
        </svg>
      </button>
      
      <img 
        src={selectedPhoto.src} 
        alt={selectedPhoto.alt || selectedPhoto.title || 'Gallery photo'}
        class="lightbox-image"
      />
      
      {#if selectedPhoto.title || selectedPhoto.description}
        <div class="lightbox-info">
          {#if selectedPhoto.title}
            <h3 class="lightbox-title">{selectedPhoto.title}</h3>
          {/if}
          {#if selectedPhoto.description}
            <p class="lightbox-description">{selectedPhoto.description}</p>
          {/if}
          <div class="lightbox-counter">
            {selectedPhoto.index + 1} of {photos.length}
          </div>
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .photo-gallery {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .gallery-title {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--ra-primary, #1e3a8a);
    font-size: 2.5rem;
    font-weight: 700;
  }

  .gallery-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
  }

  .photo-item {
    position: relative;
    aspect-ratio: 4/3;
    overflow: hidden;
    border-radius: var(--ra-radius-lg, 0.5rem);
    box-shadow: var(--ra-shadow, 0 1px 3px 0 rgba(0, 0, 0, 0.1));
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .photo-item:hover,
  .photo-container:focus {
    transform: translateY(-4px);
    box-shadow: var(--ra-shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
  }
  
  .photo-container:focus {
    outline: 2px solid #1e3a8a;
    outline-offset: 2px;
  }

  .photo-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .photo-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .photo-item:hover .photo-image {
    transform: scale(1.05);
  }

  .photo-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    color: white;
    padding: 1rem;
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }

  .photo-item:hover .photo-overlay {
    transform: translateY(0);
  }

  .photo-title {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .photo-description {
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.9;
  }

  /* Lightbox Styles */
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  .lightbox-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .lightbox-close {
    position: absolute;
    top: -3rem;
    right: 0;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    transition: background-color 0.2s ease;
  }

  .lightbox-close:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .lightbox-close svg {
    width: 24px;
    height: 24px;
  }

  .lightbox-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    cursor: pointer;
    padding: 1rem;
    border-radius: 50%;
    transition: background-color 0.2s ease;
  }

  .lightbox-nav:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  .lightbox-prev {
    left: -4rem;
  }

  .lightbox-next {
    right: -4rem;
  }

  .lightbox-nav svg {
    width: 20px;
    height: 20px;
  }

  .lightbox-image {
    max-width: 100%;
    max-height: 70vh;
    object-fit: contain;
    border-radius: var(--ra-radius-lg, 0.5rem);
  }

  .lightbox-info {
    margin-top: 1rem;
    text-align: center;
    color: white;
  }

  .lightbox-title {
    margin: 0 0 0.5rem 0;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .lightbox-description {
    margin: 0 0 1rem 0;
    opacity: 0.9;
  }

  .lightbox-counter {
    font-size: 0.9rem;
    opacity: 0.7;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .lightbox-prev {
      left: -2rem;
    }
    
    .lightbox-next {
      right: -2rem;
    }
  }

  @media (max-width: 640px) {
    .gallery-grid {
      grid-template-columns: 1fr;
    }
    
    .gallery-title {
      font-size: 2rem;
    }
    
    .lightbox {
      padding: 1rem;
    }
    
    .lightbox-nav {
      display: none;
    }
  }
</style>
