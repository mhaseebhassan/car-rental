# Hyperframes Composition Brief: Apex Drive Dubai

## Objective
Create a short, editorial, high-performance launch brag video for Apex Drive Dubai.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape — 1920x1080
- Duration: 18.0 seconds

## Source Material
- Project root: `c:\Users\muham\OneDrive\Desktop\or\dubai-car-rental`
- Primary files read: `README.md`, `src/app/globals.css`, `src/components/HeroSection.tsx`, `src/data/fleet.ts`, `src/config/brand.ts`
- Product name: Apex Drive Dubai
- Tagline / strongest claim: "Ferrari, Lamborghini, Rolls-Royce, and AMG delivered directly to DXB Airport or your private residence in under 60 minutes. Direct fleet ownership · Zero broker markups."
- Key UI or visual moment to recreate:
  - Technical telemetry header with RTA permit & Al Quoz depot coordinates
  - High-contrast automotive editorial typography (`#F3F1EC` base, `#0E0E0E` ink, `#E8590C` accent)
  - Factory spec sheet monograph for Ferrari F8 Tributo (710 HP, 0-100 in 2.9s)
  - 3-card fleet lineup (Ferrari F8, Porsche 911 GT3, Rolls-Royce Cullinan) with real transparent car renders
  - Curbside terminal dispatch badge with vector speedometer emblem
- Copy that must appear verbatim:
  - "PRECISION AUTOMOTIVE. ZERO COMPROMISE."
  - "DIRECT FLEET OWNERSHIP · ZERO BROKER MARKUPS"
  - "COMMERCIAL RTA REGISTERED FLEET"
  - "DXB AIRPORT DELIVERY IN < 60 MINUTES"
  - "FERRARI F8 TRIBUTO · 710 HP · 0–100 IN 2.9S"

## Creative Direction
- Tone preset: `polished`
- Creative direction: Automotive editorial monograph with precision telemetry
- Interpretation: Clean lines, tabular numbers, high-contrast layouts, confident pacing, zero filler. Factual claims grounded strictly in the project code.
- Angle: Rejecting opaque brokers and generic aggregators. Every car is in stock, owned directly, and dispatched on demand with real factory numbers.
- Hook: Telemetry header ticks in; "PRECISION AUTOMOTIVE. ZERO COMPROMISE." locks in with editorial weight.
- Outro / punchline: "APEX DRIVE DUBAI · DIRECT FLEET DISPATCH IN < 60 MIN" with speedometer dial and WhatsApp VIP status.
- Avoid:
  - Generic SaaS language ("streamline", "seamless", "curated", "elevate")
  - Abstract 3D filler or synthetic neon glow
  - Invented numbers or fake testimonials

## Visual Identity
- Background: `#F3F1EC` (Warm paper base)
- Panel Surface: `#FFFFFF` (Pure white)
- Text Ink: `#0E0E0E` (Typographic black)
- Accent: `#E8590C` (Signal Orange)
- Subtle Hairlines: `#0E0E0E` / `#D6D2C8`
- Display font: `Geist Sans`, system-ui, -apple-system, sans-serif
- Body / Monospace font: `Geist Mono`, ui-monospace, Menlo, monospace
- Visual references from the project:
  - `assets/images/ferrari-f8-tributo.webp`
  - `assets/images/porsche-911-gt3.webp`
  - `assets/images/rolls-royce-cullinan.webp`
  - `assets/images/icon.svg`

## Storyboard
Contracted from `brag-output/brag-plan.md`:
1. Scene 1 (0.0s – 4.2s) — The Telemetry Manifesto: RTA badge, Al Quoz Depot coordinates, "PRECISION AUTOMOTIVE. ZERO COMPROMISE." headline slam.
2. Scene 2 (4.2s – 9.0s) — Ferrari F8 Technical Monograph: Ferrari profile render, factory telemetry spec rows (710 HP, 2.9s 0-100 km/h, 340 km/h top speed, < 60 min DXB SLA).
3. Scene 3 (9.0s – 13.8s) — The Commercial Fleet Roster: 3 discipline cards (Ferrari F8, Porsche 911 GT3, Rolls-Royce Cullinan) with AED daily rates and zero-broker badge.
4. Scene 4 (13.8s – 18.0s) — Curbside VIP Dispatch & Outro: DXB Airport handover protocol, Speedometer emblem, "APEX DRIVE DUBAI", direct WhatsApp dispatch confirmed.

## Audio
- Audio role: Polished electronic bed with precision mechanical accents
- Audio arc: Confident steady pulse through opening and specs, subtle crescendo on fleet roster, resonant bell hit on logo landing with smooth fade-out.
- Music: `assets/music/happy-beats-business-moves-vol-9-by-ende-dot-app.mp3`
- Music treatment: Plays from 0.0s to 18.0s at volume 0.55; fades out smoothly from 16.5s to 18.0s.
- Music cue guidance:
  - Major cue at 4.23s (Scene 1 → Scene 2 cut)
  - Major cue at 6.34s (F8 710 HP spec slam)
  - Major cue at 8.44s (Curbside 60 min SLA lock)
  - Major cue at 10.54s (Porsche GT3 card entrance)
  - Major cue at 12.65s (Rolls-Royce Cullinan card entrance)
- Audio-reactive treatment: Subtle; paper background tint and accent lines gently breathe with track energy.
- SFX selection guidance:
  - Telemetry trigger: `assets/sfx/interface/click_003.ogg`
  - Car entrance: `assets/sfx/impact/impactSoft_medium_001.ogg`
  - Metric tick: `assets/sfx/ui/click2.ogg`
  - Card slides: `assets/sfx/casino/card-slide-1.ogg`
  - Logo lockup: `assets/sfx/impact/impactBell_heavy_000.ogg`
- Exact SFX choice: Loaded locally in `assets/sfx/` and wired into timeline.
- Audio files: All local in `brag-output/composition/assets/`.

## Hyperframes Instructions
- Composition directory: `brag-output/composition/`
- Build a standalone Hyperframes HTML composition (`index.html`) using GSAP.
- Ensure all text is legible and has strong WCAG contrast.
- Ensure zero console errors, zero layout overflows, and clean frame-accurate timelines.
- Pass `npx hyperframes check` cleanly before rendering.
