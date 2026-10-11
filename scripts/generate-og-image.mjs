import sharp from 'sharp';
import fs from 'fs';

async function generateOg() {
  const width = 1200;
  const height = 630;

  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <!-- Dark brutalist gradient-free contrast container -->
      <rect x="0" y="0" width="${width}" height="${height}" fill="#0E0E0E" fill-opacity="0.72" />
      
      <!-- Outer Hairline Border -->
      <rect x="40" y="40" width="${width - 80}" height="${height - 80}" fill="none" stroke="#F3F1EC" stroke-width="2" />
      <rect x="48" y="48" width="${width - 96}" height="${height - 96}" fill="none" stroke="#E8590C" stroke-width="1" />

      <!-- Top Label Strip -->
      <text x="80" y="110" font-family="monospace" font-size="16" font-weight="bold" fill="#E8590C" letter-spacing="4">
        APEX DRIVE DUBAI · PERFORMANCE &amp; LUXURY FLEET
      </text>
      <text x="${width - 80}" y="110" text-anchor="end" font-family="monospace" font-size="14" fill="#F3F1EC" letter-spacing="2">
        RTA PERMIT #2026-DXB-9912
      </text>

      <!-- Main Colossal Title -->
      <text x="80" y="240" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="900" fill="#FFFFFF" letter-spacing="-1">
        PRECISION AUTOMOTIVE FLEET.
      </text>
      <text x="80" y="325" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="900" fill="#FFFFFF" letter-spacing="-1">
        ZERO <tspan fill="#E8590C">COMPROMISE.</tspan>
      </text>

      <!-- Proof Line -->
      <text x="80" y="400" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="500" fill="#E5E0D8">
        VIP delivery to DXB Terminals 1, 2, 3 and private residences across Dubai.
      </text>

      <!-- Bottom Pillar Metrics Strip -->
      <line x1="80" y1="460" x2="${width - 80}" y2="460" stroke="#F3F1EC" stroke-opacity="0.3" stroke-width="1" />

      <text x="80" y="515" font-family="monospace" font-size="14" fill="#A39E93" letter-spacing="2">
        FLEET COUNT: <tspan fill="#FFFFFF" font-weight="bold">12 EXOTIC &amp; LUXURY</tspan>
      </text>
      <text x="500" y="515" font-family="monospace" font-size="14" fill="#A39E93" letter-spacing="2">
        SECURITY DEPOSIT: <tspan fill="#E8590C" font-weight="bold">0-DEPOSIT OPTIONS</tspan>
      </text>
      <text x="${width - 80}" y="515" text-anchor="end" font-family="monospace" font-size="14" fill="#F3F1EC" letter-spacing="2">
        WHATSAPP DISPATCH DIRECT
      </text>
    </svg>
  `);

  await sharp('public/images/hero/car-hero.webp')
    .resize(width, height, { fit: 'cover' })
    .composite([{ input: svgOverlay, top: 0, left: 0 }])
    .webp({ quality: 80 })
    .toFile('public/images/og-share.webp');

  console.log('Generated og-share.webp successfully. Size:', (fs.statSync('public/images/og-share.webp').size / 1024).toFixed(1), 'KB');
}

generateOg().catch(console.error);
