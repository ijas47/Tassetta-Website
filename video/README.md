# Explainer video (Remotion)

Renders `public/videos/explainer-30s.mp4` — a silent 30-second marketing
explainer composed as React scenes. Beats mirror the shootable script in
`docs/HANDOVER.md` (and the published script artifact).

## Render

Chromium and Node are the only requirements. In an environment without
network access to `remotion.media` (Remotion's default browser CDN), point
the renderer at a local headless-shell build:

```bash
cd video
npm install
npx remotion render TassettaExplainer ../public/videos/explainer-30s.mp4 \
  --browser-executable /path/to/headless_shell \
  --concurrency=2
```

## What's here

- `src/index.tsx` — Remotion `<Composition>` registration
- `src/Video.tsx` — the five beats as React scenes
- `src/constants.ts` — beat timing, palette, state list, sample order rows
