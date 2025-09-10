import https from 'https';
import fs from 'fs';
import path from 'path';

// Unsplash API credentials
const ACCESS_KEY = 'nXoX4z5LLngiho26WbkYj1ZWupSizTcsdpnFiR95f7w';
const APPLICATION_ID = '802783';

// Create photos directory if it doesn't exist
const photosDir = './static/photos';
if (!fs.existsSync(photosDir)) {
    fs.mkdirSync(photosDir, { recursive: true });
}

// Real estate related search terms
const searchTerms = [
    'modern home exterior',
    'luxury house front',
    'new construction home',
    'suburban neighborhood',
    'residential community',
    'home development',
    'house architecture',
    'residential street',
    'new home construction',
    'housing development'
];

function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(path.join(photosDir, filename));
        
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                
                file.on('finish', () => {
                    file.close();
                    console.log(`Downloaded: ${filename}`);
                    resolve();
                });
                
                file.on('error', (err) => {
                    fs.unlink(path.join(photosDir, filename), () => {});
                    reject(err);
                });
            } else {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
            }
        }).on('error', (err) => {
            reject(err);
        });
    });
}

async function searchAndDownloadPhotos() {
    console.log('Searching for real estate photos on Unsplash...');
    
    for (let i = 0; i < searchTerms.length; i++) {
        const searchTerm = searchTerms[i];
        const filename = `pewter-valley-${i + 1}.jpg`;
        
        try {
            // Search for photos
            const searchUrl = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchTerm)}&per_page=1&orientation=landscape&w=800&h=600&fit=crop`;
            
            const options = {
                headers: {
                    'Authorization': `Client-ID ${ACCESS_KEY}`,
                    'Accept-Version': 'v1'
                }
            };
            
            const response = await new Promise((resolve, reject) => {
                https.get(searchUrl, options, (res) => {
                    let data = '';
                    res.on('data', chunk => data += chunk);
                    res.on('end', () => resolve(JSON.parse(data)));
                }).on('error', reject);
            });
            
            if (response.results && response.results.length > 0) {
                const photo = response.results[0];
                const imageUrl = photo.urls.regular;
                
                console.log(`Downloading photo for: ${searchTerm}`);
                await downloadImage(imageUrl, filename);
                
                // Add a small delay to be respectful to the API
                await new Promise(resolve => setTimeout(resolve, 1000));
            } else {
                console.log(`No photos found for: ${searchTerm}`);
            }
            
        } catch (error) {
            console.error(`Error processing ${searchTerm}:`, error.message);
        }
    }
    
    console.log('Download process completed!');
}

searchAndDownloadPhotos();
