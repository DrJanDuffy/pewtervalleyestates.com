import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { URL } from 'url';

// Create photos directory if it doesn't exist
const photosDir = './static/photos';
if (!fs.existsSync(photosDir)) {
    fs.mkdirSync(photosDir, { recursive: true });
}

// Image URLs extracted from the Richmond American website
const imageUrls = [
    'https://www.richmondamerican.com/images/nevada/las-vegas/pewter-valley-estates/hero-bg.jpg',
    'https://www.richmondamerican.com/images/nevada/las-vegas/pewter-valley-estates/community-overview.jpg',
    'https://www.richmondamerican.com/images/nevada/las-vegas/pewter-valley-estates/amenities.jpg',
    'https://www.richmondamerican.com/images/nevada/las-vegas/pewter-valley-estates/home-designs.jpg',
    'https://www.richmondamerican.com/images/nevada/las-vegas/pewter-valley-estates/location.jpg',
    'https://www.richmondamerican.com/images/nevada/las-vegas/pewter-valley-estates/gallery-1.jpg',
    'https://www.richmondamerican.com/images/nevada/las-vegas/pewter-valley-estates/gallery-2.jpg',
    'https://www.richmondamerican.com/images/nevada/las-vegas/pewter-valley-estates/gallery-3.jpg',
    'https://www.richmondamerican.com/images/nevada/las-vegas/pewter-valley-estates/gallery-4.jpg',
    'https://www.richmondamerican.com/images/nevada/las-vegas/pewter-valley-estates/gallery-5.jpg'
];

function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https:') ? https : http;
        
        protocol.get(url, (response) => {
            if (response.statusCode === 200) {
                const fileStream = fs.createWriteStream(path.join(photosDir, filename));
                response.pipe(fileStream);
                
                fileStream.on('finish', () => {
                    fileStream.close();
                    console.log(`Downloaded: ${filename}`);
                    resolve();
                });
                
                fileStream.on('error', (err) => {
                    fs.unlink(path.join(photosDir, filename), () => {}); // Delete the file on error
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

async function downloadAllImages() {
    console.log('Starting image downloads...');
    
    for (let i = 0; i < imageUrls.length; i++) {
        const url = imageUrls[i];
        const filename = `pewter-valley-${i + 1}.jpg`;
        
        try {
            await downloadImage(url, filename);
        } catch (error) {
            console.error(`Error downloading ${url}:`, error.message);
        }
    }
    
    console.log('Download process completed!');
}

downloadAllImages();
