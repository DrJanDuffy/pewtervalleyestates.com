<script>
import { createForm } from "svelte-forms-lib"
import { trackEvent } from "$lib/analytics"

const { form, handleChange, handleSubmit, errors, isSubmitting } = createForm({
  initialValues: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    homeSize: "",
  },
  validationSchema: {
    firstName: (value) => (value ? null : "First name is required"),
    lastName: (value) => (value ? null : "Last name is required"),
    email: (value) => {
      if (!value) return "Email is required"
      if (!value.includes("@")) return "Please enter a valid email"
      return null
    },
    phone: (value) => {
      if (!value) return "Phone number is required"
      if (value.length < 10) return "Please enter a valid phone number"
      return null
    },
    homeSize: (value) => (value ? null : "Please select a home size"),
  },
})

function _onSubmit(values) {
  trackEvent("cta_form_submit", {
    form_type: "lead_capture",
    home_size: values.homeSize,
  })

  // Here you would typically send the data to your backend
  console.log("Form submitted:", values)

  // Show success message
  alert("Thank you! We'll send you the information packet shortly.")
}
</script>

<div class="cta-form">
  <div class="form-header">
    <h3>Get Your Free Information Packet</h3>
    <p>Receive floor plans, pricing, and community details</p>
  </div>
  
  <form on:submit={handleSubmit(onSubmit)}>
    <div class="form-group">
      <input 
        type="text" 
        name="firstName"
        placeholder="First Name" 
        bind:value={$form.firstName}
        on:input={handleChange}
        class="form-input"
        class:error={$errors.firstName}
      />
      {#if $errors.firstName}
        <span class="error-message">{$errors.firstName}</span>
      {/if}
    </div>
    
    <div class="form-group">
      <input 
        type="text" 
        name="lastName"
        placeholder="Last Name" 
        bind:value={$form.lastName}
        on:input={handleChange}
        class="form-input"
        class:error={$errors.lastName}
      />
      {#if $errors.lastName}
        <span class="error-message">{$errors.lastName}</span>
      {/if}
    </div>
    
    <div class="form-group">
      <input 
        type="email" 
        name="email"
        placeholder="Email Address" 
        bind:value={$form.email}
        on:input={handleChange}
        class="form-input"
        class:error={$errors.email}
      />
      {#if $errors.email}
        <span class="error-message">{$errors.email}</span>
      {/if}
    </div>
    
    <div class="form-group">
      <input 
        type="tel" 
        name="phone"
        placeholder="Phone Number" 
        bind:value={$form.phone}
        on:input={handleChange}
        class="form-input"
        class:error={$errors.phone}
      />
      {#if $errors.phone}
        <span class="error-message">{$errors.phone}</span>
      {/if}
    </div>
    
    <div class="form-group">
      <select 
        name="homeSize"
        bind:value={$form.homeSize}
        on:change={handleChange}
        class="form-select"
        class:error={$errors.homeSize}
      >
        <option value="">Preferred Home Size</option>
        <option value="3-bedroom">3 Bedroom (2,000-2,500 sq ft)</option>
        <option value="4-bedroom">4 Bedroom (2,500-3,000 sq ft)</option>
        <option value="5-bedroom">5+ Bedroom (3,000+ sq ft)</option>
      </select>
      {#if $errors.homeSize}
        <span class="error-message">{$errors.homeSize}</span>
      {/if}
    </div>
    
    <button 
      type="submit" 
      class="submit-btn"
      disabled={$isSubmitting}
    >
      {#if $isSubmitting}
        Sending...
      {:else}
        Get Free Information
      {/if}
    </button>
  </form>
  
  <div class="form-footer">
    <p>By submitting this form, you agree to receive communications from Richmond American Homes.</p>
  </div>
</div>

<style>
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
  
  .form-input.error,
  .form-select.error {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
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
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 1rem;
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
  
  .form-footer {
    text-align: center;
  }
  
  .form-footer p {
    font-size: 0.75rem;
    color: #9ca3af;
    line-height: 1.4;
  }
</style>
