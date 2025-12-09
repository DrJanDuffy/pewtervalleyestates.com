/**
 * Generate OG Image for Pewter Valley Estates
 * 
 * This script generates the og-image.jpg file from the HTML template.
 * 
 * Requirements:
 * - Node.js 18+
 * - puppeteer: npm install puppeteer
 * 
 * Usage:
 * node scripts/generate-og-image.js
 */

import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

async function generateOGImage() {
  console.log('🚀 Starting OG image generation...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Set viewport to OG image dimensions
    await page.setViewport({
      width: 1200,
      height: 630,
      deviceScaleFactor: 2 // For high DPI
    });
    
    // Load the HTML template
    const htmlPath = join(projectRoot, 'static', 'og-image-generator.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    
    // Wait a bit for any animations/rendering
    await page.waitForTimeout(500);
    
    // Take screenshot
    const outputPath = join(projectRoot, 'static', 'og-image.jpg');
    await page.screenshot({
      path: outputPath,
      type: 'jpeg',
      quality: 90,
      fullPage: false
    });
    
    console.log('✅ OG image generated successfully!');
    console.log(`📁 Saved to: ${outputPath}`);
    
  } catch (error) {
    console.error('❌ Error generating OG image:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// Always run when script is executed directly
generateOGImage().catch(error => {
  console.error('Failed to generate OG image:', error);
  process.exit(1);
});

export { generateOGImage };
