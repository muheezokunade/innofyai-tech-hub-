import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a simple SVG icon
const svgIcon = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="64" fill="url(#grad)"/>
  <text x="256" y="300" font-family="Arial, sans-serif" font-size="120" font-weight="bold" text-anchor="middle" fill="white">IA</text>
</svg>
`;

// Convert SVG to a simple PNG-like file (base64 encoded SVG)
const pngData = Buffer.from(svgIcon, 'utf8');

// Write icon files
const publicDir = path.join(__dirname, '../public');

// Create icon-192x192.png (actually an SVG)
fs.writeFileSync(path.join(publicDir, 'icon-192x192.png'), pngData);

// Create icon-512x512.png (actually an SVG)
fs.writeFileSync(path.join(publicDir, 'icon-512x512.png'), pngData);

// Create favicon.ico (actually an SVG)
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), pngData);

console.log('Icon files created successfully!'); 