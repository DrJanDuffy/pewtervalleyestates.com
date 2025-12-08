<script>
  import { createForm } from "svelte-forms-lib"
  import { trackEvent } from "$lib/analytics"
  
  export let formType = "general" // "general" | "valuation" | "buyer" | "seller"
  export let title = "Get in Touch"
  export let subtitle = "Fill out the form below and we'll get back to you within 24 hours"
  
  const { form, handleChange, handleSubmit, errors, isSubmitting } = createForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      propertyAddress: "",
      interestType: formType === "general" ? "" : formType,
    },
    validationSchema: {
      name: (value) => (value ? null : "Name is required"),
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
      message: (value) => (value ? null : "Please tell us how we can help"),
    },
  })
  
  function onSubmit(values) {
    trackEvent("lead_capture", {
      form_type: formType,
      has_property_address: !!values.propertyAddress,
      interest_type: values.interestType,
    })
    
    // Here you would typically send the data to your backend
    console.log("Lead captured:", values)
    
    // Show success message
    alert("Thank you! Dr. Jan Duffy will contact you within 24 hours.")
    
    // Reset form
    form.name = ""
    form.email = ""
    form.phone = ""
    form.message = ""
    form.propertyAddress = ""
  }
</script>

<section class="lead-capture">
  <div class="container">
    <div class="form-header">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
    
    <form on:submit={handleSubmit(onSubmit)} class="lead-form">
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
            required
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
            required
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
            required
          />
          {#if $errors.phone}
            <span class="error-message">{$errors.phone}</span>
          {/if}
        </div>
        
        {#if formType === "valuation"}
          <div class="form-group">
            <label for="propertyAddress">Property Address</label>
            <input 
              type="text" 
              id="propertyAddress"
              name="propertyAddress"
              bind:value={$form.propertyAddress}
              on:input={handleChange}
              class="form-input"
              placeholder="Pyle Avenue, Las Vegas, NV 89183"
            />
          </div>
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
          placeholder="Tell us about your real estate needs..."
          rows="5"
          required
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
          Sending...
        {:else}
          Submit
        {/if}
      </button>
    </form>
  </div>
</section>

<style>
  .lead-capture {
    padding: 4rem 0;
    background: #f8fafc;
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
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
    font-size: 1.125rem;
  }
  
  .lead-form {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
  .form-textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: white;
    box-sizing: border-box;
  }
  
  .form-input:focus,
  .form-textarea:focus {
    outline: none;
    border-color: #1e3a8a;
    box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
  }
  
  .form-input.error,
  .form-textarea.error {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }
  
  .form-textarea {
    resize: vertical;
    min-height: 120px;
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
    font-size: 1.125rem;
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
  
  @media (max-width: 768px) {
    .form-row {
      grid-template-columns: 1fr;
    }
    
    .lead-form {
      padding: 1.5rem;
    }
  }
</style>

