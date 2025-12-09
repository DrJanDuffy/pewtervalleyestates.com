<script>
  import { onMount } from "svelte"
  import { trackEvent } from "$lib/analytics"
  
  // Svelte 5: Use $props() instead of export let
  let { 
    formType = "general", // "general" | "valuation" | "buyer" | "seller"
    title = "Get in Touch",
    subtitle = "Fill out the form below and we'll get back to you within 24 hours"
  } = $props()
  
  // Svelte 5: Use $state() for reactive state
  let form = $state({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyAddress: "",
    interestType: formType === "general" ? "" : formType,
  })
  
  let errors = $state({})
  let isSubmitting = $state(false)
  
  // Try to use svelte-forms-lib if available, otherwise use fallback
  let formLib = $state(null)
  let useFormLib = $state(false)
  
  // Use onMount for one-time async initialization (still recommended in Svelte 5)
  onMount(async () => {
    try {
      const { createForm } = await import("svelte-forms-lib")
      const formResult = createForm({
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
      formLib = formResult
      useFormLib = true
      form = formResult.form
      errors = formResult.errors
      isSubmitting = formResult.isSubmitting
    } catch (e) {
      // Fallback to manual form handling
      console.warn("svelte-forms-lib not available, using fallback form handling", e)
      useFormLib = false
    }
  })
  
  function validateForm() {
    const newErrors = {}
    if (!form.name) newErrors.name = "Name is required"
    if (!form.email) {
      newErrors.email = "Email is required"
    } else if (!form.email.includes("@")) {
      newErrors.email = "Please enter a valid email"
    }
    if (!form.phone) {
      newErrors.phone = "Phone number is required"
    } else if (form.phone.length < 10) {
      newErrors.phone = "Please enter a valid phone number"
    }
    if (!form.message) newErrors.message = "Please tell us how we can help"
    errors = newErrors
    return Object.keys(newErrors).length === 0
  }
  
  function handleChange(e) {
    if (useFormLib && formLib?.handleChange) {
      formLib.handleChange(e)
    } else {
      // bind:value handles the form update automatically
      // This function only clears errors when user starts typing
      const { name } = e.target
      if (errors[name]) {
        errors = { ...errors, [name]: null }
      }
    }
  }
  
  function handleSubmit(callback) {
    return (e) => {
      e.preventDefault()
      
      if (useFormLib && formLib?.handleSubmit) {
        formLib.handleSubmit(callback)(e)
      } else {
        if (validateForm()) {
          callback(form)
        }
      }
    }
  }
  
  function onSubmit(values) {
    isSubmitting = true
    
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
    form = {
      name: "",
      email: "",
      phone: "",
      message: "",
      propertyAddress: "",
      interestType: formType === "general" ? "" : formType,
    }
    errors = {}
    isSubmitting = false
  }
</script>

<section class="lead-capture">
  <div class="container">
    <div class="form-header">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
    
    <form onsubmit={handleSubmit(onSubmit)} class="lead-form">
      <div class="form-row">
        <div class="form-group">
          <label for="name">Full Name *</label>
          <input 
            type="text" 
            id="name"
            name="name"
            bind:value={form.name}
            oninput={handleChange}
            class="form-input"
            class:error={errors.name}
            placeholder="Your full name"
            required
          />
          {#if errors.name}
            <span class="error-message">{errors.name}</span>
          {/if}
        </div>
        
        <div class="form-group">
          <label for="email">Email Address *</label>
          <input 
            type="email" 
            id="email"
            name="email"
            bind:value={form.email}
            oninput={handleChange}
            class="form-input"
            class:error={errors.email}
            placeholder="your.email@example.com"
            required
          />
          {#if errors.email}
            <span class="error-message">{errors.email}</span>
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
            bind:value={form.phone}
            oninput={handleChange}
            class="form-input"
            class:error={errors.phone}
            placeholder="(702) 555-0123"
            required
          />
          {#if errors.phone}
            <span class="error-message">{errors.phone}</span>
          {/if}
        </div>
        
        {#if formType === "valuation"}
          <div class="form-group">
            <label for="propertyAddress">Property Address</label>
            <input 
              type="text" 
              id="propertyAddress"
              name="propertyAddress"
              bind:value={form.propertyAddress}
              oninput={handleChange}
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
          bind:value={form.message}
          oninput={handleChange}
          class="form-textarea"
          class:error={errors.message}
          placeholder="Tell us about your real estate needs..."
          rows="5"
          required
        ></textarea>
        {#if errors.message}
          <span class="error-message">{errors.message}</span>
        {/if}
      </div>
      
      <button 
        type="submit" 
        class="submit-btn"
        disabled={isSubmitting}
      >
        {#if isSubmitting}
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

