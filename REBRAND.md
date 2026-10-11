# REBRAND GUIDE: APEX DRIVE DUBAI (CAR RENTAL TEMPLATE)

Transform this template for any UAE or GCC luxury car rental agency in under 10 minutes.

---

## 1. Edit Brand Identity & Contact Data (3 Minutes)
Open `src/config/brand.ts`. Every phone number, WhatsApp link, license number, and delivery hub is defined here:

```typescript
export const brandConfig = {
  name: "YOUR RENTAL BRAND",
  tagline: "YOUR CUSTOM TAGLINE",
  brokerage: "Legal LLC Company Name",
  permitNumber: "RTA Permit #...",
  phone: "+97140000000",
  whatsappNumber: "971500000000",
  email: "dispatch@yourdomain.ae",
  address: "Your Garage Address, Dubai",
  coordinates: "25.1328° N, 55.2289° E",
  // ...
};
```
Changing `brand.ts` updates:
- Header logos, wordmarks, and phone numbers
- WhatsApp concierge buttons across all pages with context-aware messages
- Footer compliance details, addresses, and coordinates
- Structured JSON-LD schema metadata for search engines

---

## 2. Customize Palette (2 Minutes)
Open `src/app/globals.css`. Adjust the core CSS variables:

```css
:root {
  --bg-paper: #F3F1EC;    /* Warm editorial background */
  --bg-surface: #FFFFFF;  /* Clean contrast card panels */
  --text-ink: #0E0E0E;    /* Deep typographic black */
  --accent: #E8590C;      /* Signal Orange CTA accent */
  --accent-hover: #C94A06;
}
```

Recommended accent alternatives:
- Racing Green: `#1B4D3E`
- Signal Red: `#D9230F`
- Deep Brass: `#8C6A2F`
- Monza Yellow: `#E5A910`

---

## 3. Update Vehicle Roster & Pricing (5 Minutes)
Open `src/data/fleet.ts`. Each vehicle is an object with:
- `slug`: URL identifier
- `name`, `brand`, `model`, `year`, `category`
- `pricePerDay`, `pricePerWeek`, `pricePerMonth`
- `securityDeposit`, `zeroDepositAvailable`, `mileageLimitPerDay`
- `specs`: `horsepower`, `zeroToHundred`, `topSpeed`, `transmission`, `seats`, `doors`
- `image`: Path to WebP image in `public/images/fleet/`

To add a new vehicle:
1. Place a compressed WebP asset (<150 KB) in `public/images/fleet/`.
2. Add the vehicle object to `FLEET_DATA` in `src/data/fleet.ts`.
3. All static pages and filters update automatically upon next build.

---

## 4. Regenerate OG Share Image & Favicon (1 Minute)
1. Replace or tweak `public/icon.svg` and `src/app/icon.svg`.
2. Run:
```bash
node scripts/generate-og-image.mjs
```
This generates an optimized 1200x630 `public/images/og-share.webp` graphic with brand typography.

---

## 5. Build and Deploy
```bash
npm run build
```
Generates 100% static HTML inside `/out`. Zero backend, zero database, deployable to Vercel, Netlify, or Cloudflare Pages with zero configuration.
