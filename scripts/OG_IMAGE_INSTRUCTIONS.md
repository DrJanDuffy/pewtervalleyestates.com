# OG Image Generation Instructions

## Quick Method: Screenshot (Easiest)

1. Open `static/og-image-generator.html` in your browser
2. Press `F12` to open Developer Tools
3. Press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac)
4. Type "screenshot" and select "Capture screenshot"
5. Or use a browser extension like "Full Page Screen Capture"
6. Save as `og-image.jpg` in the `static/` folder
7. Ensure dimensions are exactly **1200x630 pixels**

## Automated Method: Using Puppeteer Script

### Prerequisites
```bash
npm install puppeteer
```

### Run the script
```bash
node scripts/generate-og-image.js
```

This will automatically:
- Load the HTML template
- Render it at 1200x630px
- Save as `static/og-image.jpg`

## Alternative: Online Tools

### Option 1: Canva
1. Create a 1200x630px design
2. Use the branding colors:
   - Primary: #1e3a8a (dark blue)
   - Accent: #fbbf24 (gold)
   - Text: White
3. Include:
   - "Pewter Valley Estates" (large, bold)
   - "Las Vegas New Home Community" (subtitle)
   - "Call Dr. Jan Duffy • 702 500-1955" (CTA)
   - Las Vegas, NV location
4. Export as JPG, high quality
5. Save to `static/og-image.jpg`

### Option 2: Figma
1. Create 1200x630px frame
2. Use the HTML template as reference
3. Export as JPG at 2x resolution (2400x1260)
4. Optimize to 1200x630px
5. Save to `static/og-image.jpg`

### Option 3: Photoshop/GIMP
1. Create new document: 1200x630px
2. Use gradient background: #1e3a8a to #3b82f6
3. Add text layers matching the HTML template
4. Export as JPG, quality 90
5. Save to `static/og-image.jpg`

## Image Requirements

- **Dimensions**: Exactly 1200x630 pixels (1.91:1 aspect ratio)
- **Format**: JPG
- **File size**: Under 300KB (optimize if needed)
- **Quality**: High resolution, sharp text
- **Colors**: Match site branding (#1e3a8a, #fbbf24)

## Content to Include

- **Main Title**: "Pewter Valley Estates" (large, bold, white)
- **Subtitle**: "Las Vegas New Home Community" (gold/yellow)
- **Description**: Brief tagline about the community
- **CTA**: Phone number or call-to-action
- **Location**: "Las Vegas, NV" (optional, bottom corner)

## Testing

After creating the image:

1. **Validate with Facebook Debugger**:
   - https://developers.facebook.com/tools/debug/
   - Enter: https://www.pewtervalleyestates.com
   - Click "Scrape Again" to refresh cache

2. **Validate with Twitter Card Validator**:
   - https://cards-dev.twitter.com/validator
   - Enter your URL

3. **Check LinkedIn**:
   - https://www.linkedin.com/post-inspector/
   - Enter your URL

## Notes

- The image should be visually appealing and readable at small sizes
- Use high contrast for text readability
- Keep text concise (social platforms crop long text)
- Test on multiple platforms to ensure it displays correctly
