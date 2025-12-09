<script>
import { trackEvent } from "$lib/analytics"

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael Johnson",
    location: "The Avalon Homeowner",
    rating: 5,
    text: "We absolutely love our new home at Pewter Valley Estates! The quality is outstanding and the community amenities are fantastic. Our kids love the pool and we enjoy the walking trails.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "David Chen",
    location: "The Cambridge Homeowner",
    rating: 5,
    text: "The location is perfect - close to everything but still quiet and peaceful. The Richmond American team made the entire process smooth and stress-free. Highly recommend!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    location: "The Berkeley Homeowner",
    rating: 5,
    text: "The energy efficiency features have saved us so much on utilities. The open floor plan is perfect for entertaining, and our neighbors are wonderful. This truly feels like home.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
]

let currentTestimonial = 0

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length
  trackEvent("testimonial_navigation", {
    action: "next",
    current_index: currentTestimonial,
  })
}

function prevTestimonial() {
  currentTestimonial = currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1
  trackEvent("testimonial_navigation", {
    action: "previous",
    current_index: currentTestimonial,
  })
}

function goToTestimonial(index) {
  currentTestimonial = index
  trackEvent("testimonial_navigation", {
    action: "direct",
    current_index: currentTestimonial,
  })
}
</script>

<section class="testimonials">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">What Our Homeowners Say</h2>
      <p class="section-subtitle">
        Don't just take our word for it - hear from families who have made Pewter Valley Estates their home.
      </p>
    </div>
    
    <div class="testimonials-container">
      <div class="testimonial-card">
        <div class="testimonial-content">
          <div class="stars">
            {#each Array(testimonials[currentTestimonial].rating) as _}
              <span class="star">★</span>
            {/each}
          </div>
          
          <blockquote class="testimonial-text">
            "{testimonials[currentTestimonial].text}"
          </blockquote>
          
          <div class="testimonial-author">
            <img 
              src={testimonials[currentTestimonial].image} 
              alt={testimonials[currentTestimonial].name}
              class="author-image"
            />
            <div class="author-info">
              <div class="author-name">{testimonials[currentTestimonial].name}</div>
              <div class="author-location">{testimonials[currentTestimonial].location}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="testimonial-controls">
        <button class="control-btn prev" onclick={prevTestimonial} aria-label="Previous testimonial">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        
        <div class="testimonial-dots">
          {#each testimonials as _, index}
            <button 
              class="dot" 
              class:active={index === currentTestimonial}
              onclick={() => goToTestimonial(index)}
              aria-label="Go to testimonial {index + 1}"
            ></button>
          {/each}
        </div>
        
        <button class="control-btn next" onclick={nextTestimonial} aria-label="Next testimonial">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
    
    <div class="testimonials-footer">
      <div class="rating-summary">
        <div class="average-rating">
          <span class="rating-number">4.9</span>
          <div class="rating-stars">
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
          </div>
        </div>
        <div class="rating-text">Based on 127 homeowner reviews</div>
      </div>
      
      <a href="/contact" class="view-reviews-btn">
        Share Your Experience
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>
</section>

<style>
  .testimonials {
    padding: 5rem 0;
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    color: white;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  .section-subtitle {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  .testimonials-container {
    position: relative;
    max-width: 800px;
    margin: 0 auto 3rem;
  }
  
  .testimonial-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 1rem;
    padding: 3rem;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .stars {
    display: flex;
    justify-content: center;
    gap: 0.25rem;
    margin-bottom: 1.5rem;
  }
  
  .star {
    color: #fbbf24;
    font-size: 1.5rem;
  }
  
  .testimonial-text {
    font-size: 1.25rem;
    line-height: 1.6;
    margin: 0 0 2rem 0;
    font-style: italic;
    color: rgba(255, 255, 255, 0.95);
  }
  
  .testimonial-author {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  
  .author-image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgba(255, 255, 255, 0.3);
  }
  
  .author-name {
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }
  
  .author-location {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
  }
  
  .testimonial-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .control-btn {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .control-btn:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
  
  .control-btn svg {
    width: 20px;
    height: 20px;
  }
  
  .testimonial-dots {
    display: flex;
    gap: 0.5rem;
  }
  
  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .dot.active {
    background: #fbbf24;
    transform: scale(1.2);
  }
  
  .testimonials-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
  }
  
  .rating-summary {
    text-align: center;
  }
  
  .average-rating {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .rating-number {
    font-size: 2rem;
    font-weight: 700;
  }
  
  .rating-stars {
    display: flex;
    gap: 0.125rem;
  }
  
  .rating-text {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
  }
  
  .view-reviews-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #fbbf24;
    color: #1e3a8a;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .view-reviews-btn:hover {
    background: #f59e0b;
    transform: translateY(-2px);
  }
  
  .view-reviews-btn svg {
    width: 20px;
    height: 20px;
  }
  
  @media (max-width: 768px) {
    .testimonials {
      padding: 3rem 0;
    }
    
    .section-title {
      font-size: 2rem;
    }
    
    .testimonial-card {
      padding: 2rem;
    }
    
    .testimonial-text {
      font-size: 1.1rem;
    }
    
    .testimonials-footer {
      flex-direction: column;
      text-align: center;
    }
  }
</style>
