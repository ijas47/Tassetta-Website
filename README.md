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

**Live site:** https://tassetta-website-6bry.vercel.app

If `tassetta-website.vercel.app` shows a Vercel 404, you have two projects linked to this repo. Fix it in the Vercel dashboard:

1. Open the empty `tassetta-website` project → **Settings → General → Delete Project**
2. Open the working `tassetta-website-6bry` project → **Settings → General → Project Name** → rename to `tassetta-website`
3. Production URL becomes `https://tassetta-website.vercel.app`

Or import fresh at [vercel.com/new](https://vercel.com/new) with **Framework Preset: Next.js** (not "Other").

```bash
npm run build   # verify locally first
npx vercel --prod
```