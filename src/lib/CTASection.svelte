<script>
  import { trackEvent } from '$lib/analytics';
  
  function handleCtaClick(action) {
    trackEvent('cta_click', {
      action: action,
      section: 'final_cta'
    });
  }
</script>

<section class="cta-section">
  <div class="container">
    <div class="cta-content">
      <div class="cta-text">
        <h2 class="cta-title">Ready to Find Your Dream Home?</h2>
        <p class="cta-subtitle">
          Join the growing community at Pewter Valley Estates. Limited homes available - 
          don't miss your chance to own a piece of Las Vegas luxury.
        </p>
        
        <div class="cta-features">
          <div class="feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22,4 12,14.01 9,11.01"/>
            </svg>
            <span>No Obligation Consultation</span>
          </div>
          <div class="feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22,4 12,14.01 9,11.01"/>
            </svg>
            <span>Flexible Financing Options</span>
          </div>
          <div class="feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22,4 12,14.01 9,11.01"/>
            </svg>
            <span>Move-In Ready Homes</span>
          </div>
        </div>
      </div>
      
      <div class="cta-form">
        <div class="form-header">
          <h3>Get Your Free Information Packet</h3>
          <p>Receive floor plans, pricing, and community details</p>
        </div>
        
        <form class="contact-form">
          <div class="form-group">
            <input 
              type="text" 
              placeholder="First Name" 
              required
              class="form-input"
            />
          </div>
          
          <div class="form-group">
            <input 
              type="text" 
              placeholder="Last Name" 
              required
              class="form-input"
            />
          </div>
          
          <div class="form-group">
            <input 
              type="email" 
              placeholder="Email Address" 
              required
              class="form-input"
            />
          </div>
          
          <div class="form-group">
            <input 
              type="tel" 
              placeholder="Phone Number" 
              required
              class="form-input"
            />
          </div>
          
          <div class="form-group">
            <select class="form-select" required>
              <option value="">Preferred Home Size</option>
              <option value="3-bedroom">3 Bedroom (2,000-2,500 sq ft)</option>
              <option value="4-bedroom">4 Bedroom (2,500-3,000 sq ft)</option>
              <option value="5-bedroom">5+ Bedroom (3,000+ sq ft)</option>
            </select>
          </div>
          
          <button 
            type="submit" 
            class="submit-btn"
            on:click={() => handleCtaClick('form_submit')}
          >
            Get Free Information
          </button>
        </form>
        
        <div class="form-footer">
          <p>By submitting this form, you agree to receive communications from Richmond American Homes.</p>
        </div>
      </div>
    </div>
    
    <div class="cta-actions">
      <a 
        href="tel:+1-888-500-7060" 
        class="action-btn primary"
        on:click={() => handleCtaClick('phone_call')}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        Call (888) 500-7060
      </a>
      
      <a 
        href="/richmond-demo" 
        class="action-btn secondary"
        on:click={() => handleCtaClick('virtual_tour')}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M21 12H9"/>
        </svg>
        Take Virtual Tour
      </a>
      
      <a 
        href="/contact" 
        class="action-btn outline"
        on:click={() => handleCtaClick('schedule_tour')}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        Schedule Tour
      </a>
    </div>
  </div>
</section>

<style>
  .cta-section {
    padding: 5rem 0;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .cta-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-bottom: 3rem;
    align-items: start;
  }
  
  .cta-text {
    padding-right: 2rem;
  }
  
  .cta-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  .cta-subtitle {
    font-size: 1.2rem;
    color: #64748b;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
  
  .cta-features {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .feature {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #475569;
    font-weight: 500;
  }
  
  .feature svg {
    width: 20px;
    height: 20px;
    color: #10b981;
    flex-shrink: 0;
  }
  
  .cta-form {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border: 1px solid #e2e8f0;
  }
  
  .form-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .form-header h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-bottom: 0.5rem;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  .form-header p {
    color: #64748b;
    font-size: 0.9rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-input,
  .form-select {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: white;
  }
  
  .form-input:focus,
  .form-select:focus {
    outline: none;
    border-color: #1e3a8a;
    box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
  }
  
  .submit-btn {
    width: 100%;
    background: #1e3a8a;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 1rem;
  }
  
  .submit-btn:hover {
    background: #1e40af;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 58, 138, 0.4);
  }
  
  .form-footer {
    text-align: center;
  }
  
  .form-footer p {
    font-size: 0.75rem;
    color: #9ca3af;
    line-height: 1.4;
  }
  
  .cta-actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .action-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    font-size: 1rem;
  }
  
  .action-btn.primary {
    background: #fbbf24;
    color: #1e3a8a;
  }
  
  .action-btn.primary:hover {
    background: #f59e0b;
    transform: translateY(-2px);
  }
  
  .action-btn.secondary {
    background: #1e3a8a;
    color: white;
  }
  
  .action-btn.secondary:hover {
    background: #1e40af;
    transform: translateY(-2px);
  }
  
  .action-btn.outline {
    background: transparent;
    color: #1e3a8a;
    border: 2px solid #1e3a8a;
  }
  
  .action-btn.outline:hover {
    background: #1e3a8a;
    color: white;
  }
  
  .action-btn svg {
    width: 20px;
    height: 20px;
  }
  
  @media (max-width: 768px) {
    .cta-section {
      padding: 3rem 0;
    }
    
    .cta-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .cta-text {
      padding-right: 0;
      text-align: center;
    }
    
    .cta-title {
      font-size: 2rem;
    }
    
    .cta-actions {
      flex-direction: column;
      align-items: center;
    }
    
    .action-btn {
      width: 100%;
      justify-content: center;
    }
  }
</style>
