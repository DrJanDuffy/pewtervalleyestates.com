# Google Setup Guide for Pewter Valley Estates

This guide will help you complete the Google Business Profile integration and optimize your site for Google Search.

## ✅ Completed Setup

The following Google optimizations have been implemented:

1. **Consolidated NAP Data** - All Name, Address, Phone information is now centralized in `src/lib/seo.js`
2. **LocalBusiness Schema** - Added to all pages with proper structured data
3. **Google Reviews Component** - Ready to display reviews with schema markup
4. **Google Map Integration** - Embedded maps on Contact and About pages
5. **Google Search Console Support** - Meta tag ready for verification
6. **NAP Display Component** - Consistent business information display
7. **SEO Components** - All pages now have proper meta tags and structured data

## 🔧 Required Actions

### 1. Update Google Business Profile Information

**File:** `src/lib/seo.js`

Update the following fields to match your **exact** Google Business Profile:

```javascript
export const SITE_CONFIG = {
  // Update these fields:
  address: {
    street: "Las Vegas, NV", // ⚠️ Replace with actual street address from GBP
    zipCode: "89101", // ⚠️ Replace with actual ZIP code from GBP
  },
  googleBusinessProfile: "https://g.page/r/YOUR_GBP_ID", // ⚠️ Replace with your GBP URL
  googleReviewsUrl: "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID", // ⚠️ Replace with Place ID
}
```

**How to find your Google Business Profile URL:**
1. Go to [Google Business Profile](https://business.google.com)
2. Select your business
3. Click "Info" → Copy the "Business profile link"
4. Or search for your business on Google Maps and copy the URL

**How to find your Place ID:**
1. Search for your business on [Google Maps](https://www.google.com/maps)
2. Click on your business listing
3. The Place ID is in the URL: `...&cid=YOUR_PLACE_ID` or use [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)

### 2. Add Google Search Console Verification

**File:** `.env` or Vercel Environment Variables

Add your Google Search Console verification code:

```
PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code-here
```

**How to get verification code:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (website URL)
3. Choose "HTML tag" verification method
4. Copy the `content` value from the meta tag
5. Add it to your environment variables

### 3. Update Google Reviews Data

**File:** `src/lib/GoogleReviews.svelte` or fetch from API

You have two options:

**Option A: Manual Updates**
- Update the `reviews` prop when calling `<GoogleReviews />` component
- Add actual reviews from your Google Business Profile

**Option B: API Integration (Recommended)**
- Use Google My Business API to fetch reviews dynamically
- Or use a service like [LocalReviews](https://localreviews.com) or [Grade.us](https://grade.us)

Example with manual reviews:
```svelte
<GoogleReviews 
  reviews={[
    {
      author: "John Smith",
      rating: 5,
      reviewBody: "Excellent service!",
      datePublished: "2024-01-15",
    },
    // Add more reviews...
  ]}
/>
```

### 4. Verify NAP Consistency

**Critical:** Ensure these match **exactly** across:
- Google Business Profile
- Website schema markup
- Visible text on website
- Directory listings

**Check these locations:**
- `src/lib/seo.js` - SITE_CONFIG
- `src/app.html` - Organization schema
- All page components using NAPDisplay

**Format standards:**
- Phone: `(702) 222-1964` (display) / `+17022221964` (tel: links)
- Address: Must match GBP exactly including abbreviations
- Business Name: Must match GBP exactly

### 5. Submit Sitemap to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property
3. Go to "Sitemaps" in the left menu
4. Add sitemap URL: `https://www.pewtervalleyestates.com/sitemap.xml`
5. Click "Submit"

### 6. Test Structured Data

Use these tools to verify your schema markup:

1. **Google Rich Results Test:**
   - [Rich Results Test](https://search.google.com/test/rich-results)
   - Test your homepage and key pages
   - Verify LocalBusiness, Review, and FAQ schemas

2. **Schema.org Validator:**
   - [Schema Markup Validator](https://validator.schema.org/)
   - Validate all structured data

3. **Google Business Profile:**
   - Ensure your website link is added to your GBP
   - Verify business hours match website
   - Confirm address matches exactly

## 📋 Checklist

- [ ] Update street address in `src/lib/seo.js` to match GBP
- [ ] Update ZIP code in `src/lib/seo.js` to match GBP
- [ ] Add Google Business Profile URL
- [ ] Add Google Place ID for reviews
- [ ] Add Google Search Console verification code to environment variables
- [ ] Update Google Reviews data (manual or API)
- [ ] Verify NAP consistency across all pages
- [ ] Submit sitemap to Google Search Console
- [ ] Test structured data with Google's tools
- [ ] Link website in Google Business Profile
- [ ] Verify business hours match between GBP and website

## 🎯 Next Steps After Setup

1. **Monitor Google Search Console:**
   - Check for indexing issues
   - Monitor search performance
   - Review Core Web Vitals

2. **Optimize for Local SEO:**
   - Add location-specific content
   - Create neighborhood pages
   - Build local citations

3. **Encourage Reviews:**
   - Add review request CTAs
   - Follow up with clients
   - Respond to all reviews

4. **Track Performance:**
   - Monitor local search rankings
   - Track phone calls from website
   - Measure form submissions

## 📞 Support

If you need help with any of these steps, refer to:
- [Google Business Profile Help](https://support.google.com/business)
- [Google Search Console Help](https://support.google.com/webmasters)
- [Schema.org Documentation](https://schema.org/)

---

**Last Updated:** January 2025
**Status:** Ready for Google Business Profile integration

