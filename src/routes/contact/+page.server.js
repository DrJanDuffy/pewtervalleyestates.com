import { fail } from '@sveltejs/kit';

// Simple validation functions (can be upgraded to Zod later)
function validateEmail(email) {
  return email && email.includes('@') && email.includes('.');
}

function validatePhone(phone) {
  return phone && phone.replace(/\D/g, '').length >= 10;
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const data = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      phone: formData.get('phone')?.toString() || '',
      message: formData.get('message')?.toString() || '',
      propertyInterest: formData.get('propertyInterest')?.toString() || '',
      preferredContact: formData.get('preferredContact')?.toString() || '',
    };

    // Validate form data
    const errors = {};
    
    if (!data.name || data.name.trim().length === 0) {
      errors.name = 'Name is required';
    }
    
    if (!data.email || !validateEmail(data.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!data.phone || !validatePhone(data.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    
    if (!data.message || data.message.trim().length === 0) {
      errors.message = 'Please tell us how we can help you';
    }
    
    if (!data.propertyInterest) {
      errors.propertyInterest = 'Please select a property interest';
    }
    
    if (!data.preferredContact) {
      errors.preferredContact = 'Please select preferred contact method';
    }

    if (Object.keys(errors).length > 0) {
      return fail(400, {
        errors,
        values: data,
        success: false,
      });
    }

    // TODO: Send email notification
    // TODO: Save to database
    // TODO: Send to CRM system
    // TODO: Add rate limiting
    // TODO: Add spam protection
    
    // Log submission for now
    console.log('Contact form submitted:', data);

    // Return success
    return {
      success: true,
      message: 'Thank you for your message! Dr. Jan Duffy will contact you within 24 hours.',
    };
  },
};

