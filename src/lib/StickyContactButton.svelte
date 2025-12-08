<script>
  import { onMount } from 'svelte'
  import { trackEvent } from '$lib/analytics'

  let isVisible = false
  let isMobile = false

  onMount(() => {
    // Check if mobile
    isMobile = window.innerWidth <= 768
    
    // Show button after scrolling down 300px
    const handleScroll = () => {
      isVisible = window.scrollY > 300
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  function handlePhoneClick() {
    trackEvent('sticky_phone_click', {
      phone_number: '702-500-1955',
      page: 'listings'
    })
  }

  function handleTextClick() {
    trackEvent('sticky_text_click', {
      phone_number: '702-500-1955',
      page: 'listings'
    })
  }
</script>

{#if isMobile && isVisible}
  <div class="sticky-contact">
    <div class="contact-buttons">
      <a 
        href="tel:+17025001955" 
        class="contact-btn phone"
        on:click={handlePhoneClick}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        Call
      </a>
      
      <a 
        href="sms:+17025001955" 
        class="contact-btn text"
        on:click={handleTextClick}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        Text
      </a>
    </div>
  </div>
{/if}

<style>
  .sticky-contact {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    animation: slideUp 0.3s ease-out;
  }

  .contact-buttons {
    display: flex;
    gap: 0.5rem;
    background: white;
    padding: 0.5rem;
    border-radius: 50px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    border: 2px solid #3A8DDE;
  }

  .contact-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    min-width: 80px;
    justify-content: center;
  }

  .contact-btn.phone {
    background: #16B286;
    color: white;
  }

  .contact-btn.phone:hover {
    background: #0D8A5B;
    transform: translateY(-2px);
  }

  .contact-btn.text {
    background: #3A8DDE;
    color: white;
  }

  .contact-btn.text:hover {
    background: #2a7bc7;
    transform: translateY(-2px);
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  /* Hide on desktop */
  @media (min-width: 769px) {
    .sticky-contact {
      display: none;
    }
  }
</style>
