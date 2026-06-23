# Tassetta Website

Premium marketing site for Tassetta — managed US sales tax compliance.

Built with Next.js, GSAP ScrollTrigger, Lenis smooth scroll, Three.js painted texture background, and Splitting.js letter animations.

## Stack

- **Next.js 15** (App Router)
- **GSAP + ScrollTrigger** — pinned hero, cinematic section reveals
- **Lenis** — smooth scroll
- **Three.js** — cursor-reactive painted texture background
- **Splitting.js** — letter-by-letter title animation on load
- **CSS** — `clamp()` typography, `mix-blend-mode`, linear-gradient overlays

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub (`ijas47/Tassetta-Website`)
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click Deploy

Or use the Vercel CLI:

```bash
npx vercel
```