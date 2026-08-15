# Handover

## Pages built (26 total)

All match the Claude Design source. Each is server-rendered as static HTML with
per-page `<title>`, description, canonical, and Open Graph tags.

**Primary marketing pages (19):**

| Route | Source section | Notes |
| --- | --- | --- |
| `/` | `r_home` | Hero + product placeholder band + problem + how-different + what-we-handle overview + marketplace-aware + dark trust band + pricing teaser + closing CTA. Matched cleanly. |
| `/how-it-works` | `r_how` | Four-stage flow + human-in-the-loop dark band. Matched cleanly. |
| `/who-its-for` | `r_who` | Fit / not-a-fit-yet + two sub-page cards. Matched cleanly. |
| `/who-its-for/shopify` | `r_who_shopify` | Matched cleanly. |
| `/who-its-for/multi-channel` | `r_who_multi` | Matched cleanly. |
| `/what-we-handle` | `r_handle` | Overview list of five capabilities. Matched cleanly. |
| `/what-we-handle/nexus` | `r_nexus` | Matched cleanly. |
| `/what-we-handle/registrations` | `r_reg` | Matched cleanly. |
| `/what-we-handle/filing` | `r_filing` | Matched cleanly. |
| `/what-we-handle/notices` | `r_notices` | Matched cleanly. |
| `/what-we-handle/exemptions` | `r_exempt` | Matched cleanly. |
| `/pricing` | `r_pricing` | Four tiers + one-time projects. All `validate` badges preserved visibly. Matched cleanly. |
| `/nexus-study` | `r_study` | **Interpretation:** the design shows two states of an upload form (`study_none` / `study_has`); I replaced them with a single `<NexusStudyUploader />` React component that unifies both states plus a real submit / done state. Same layout, same copy, same colors — the interaction is now real. |
| `/compare/software` | `r_cmp_software` | Matched cleanly. |
| `/compare/cpa` | `r_cmp_cpa` | Matched cleanly. |
| `/about` | `r_about` | Includes the `[PLACEHOLDER — team section]` block, preserved visibly. Matched cleanly. |
| `/security` | `r_security` | Includes the `[HONEST FORWARD-LOOKING NOTE]` block, preserved visibly. Matched cleanly. |
| `/resources` | `r_resources` | Five article angles rendered as placeholders per the design. Matched cleanly. |
| `/contact` | `r_contact` | Non-functional contact form (per design — it's laid out but no handler). See TODOs. |

**Fallback pages (5)** — all render the design's `r_fallback` template with a per-route title and `noindex`:

- `/login`
- `/book`
- `/legal/privacy`
- `/legal/terms`
- `/legal/engagement`

**Plus:** `/_not-found` (Next.js default) and `POST /api/nexus-study/upload` (stubbed handler, see TODOs).

## What matched cleanly vs needed interpretation

- **Cleanly matched (25 of 26):** every route above except `/nexus-study`.
- **Interpretation:** the nexus-study upload UI. The design showed two static React-conditional states inside a single card; I built one real `NexusStudyUploader` client component that renders (a) an empty drag-and-drop label, (b) a "file chosen" confirmation with Send / Choose-different actions, (c) a "submitting" state, (d) a "done" state, all inside the same card the design specified. It reads the file, runs `.csv` extension and 25 MB size validation, and posts to the API stub. The empty-state visual copy is verbatim from the design; the chosen/submitted/done copy is written to match the design's voice.

## Motion

The design only defines one keyframe (`t-rise`) and `scroll-behavior: smooth`. Both are honored. Nothing amplified. The `NexusStudyUploader` has a 140 ms color-fade between drag states — the same fade the design's hover rules use. All motion is wrapped in a `prefers-reduced-motion: reduce` guard in `globals.css` that:

- switches `scroll-behavior` to `auto`,
- clamps every animation and transition to 0.001 ms (effectively off).

## Responsive

Mobile-first: the design uses `clamp()` typography and one 960 px breakpoint that:

- hides the desktop nav (`.t-nav-desktop { display: none }`),
- shows the burger (`.t-burger { display: inline-flex }`),
- collapses the hero split (`.t-hero-split`), any two-column layout (`.t-2col`), and the watch-file diptych into a single column.

Preserved verbatim.

## Color palette

Every color from your brief is what the site uses. No Wise green anywhere. The design also uses `#0a1413` for the very-dark trust bands and the footer background — that's a design choice (a hair darker than `--tas-ink`) and I kept it as `--tas-dark-panel`. Everything else maps 1:1.

## Lighthouse

The `next build` output is entirely static (`○ Static`) for the marketing pages, with client JS only in `Header` and `NexusStudyUploader`. I did not run Lighthouse in this environment because it requires a headless Chrome + network round-trip that isn't available here. The site is set up to hit your 90/100/100 target:

- server-rendered content, no client-only fallback,
- fonts self-hosted via `next/font` with `display: swap`,
- zero third-party requests,
- no layout shift (all typography is `clamp()` from first paint, all sizes reserved with padding),
- one `h1` per page, semantic `<header> <main> <footer>`, `nav`, `label`s on the contact-form inputs, focus-visible outline in `globals.css`.

Run it against `https://your-preview.vercel.app/` with `npx lighthouse --preset=desktop <url>` after deploy and let me know if anything falls short — most likely the only work will be image OG placeholders once you add them.

## TODOs and placeholders left in the site

Rendered visibly to the user per your brief:

- `/` — proof/trust dark band: `[ PLACEHOLDER — customer logos, pending permission to use ]` with the "Used by Shopify brands doing seven and eight figures" line.
- `/pricing` — orange `validate` pills on every tier and the one-time projects paragraph, plus the amber "Starting points from the internal plan — validate before publishing" ribbon.
- `/about` — dashed callout: `[ PLACEHOLDER — team section ]`.
- `/security` — dashed callout: `[ HONEST FORWARD-LOOKING NOTE — confirm before publishing ]`.
- `/resources` — mono-font `[ PLACEHOLDER — starter article angles, not yet published ]` above the article stubs.
- **Footer legal disclaimer** — always visible on every page, unchanged: "Tassetta provides managed sales tax compliance services. We are not a law firm and do not provide legal advice…" followed by the mono-styled `[TODO: Add your real entity name, and once they exist, your E&O insurance and any certifications.]`. Entity name is still a placeholder as specified.

In code (not visible on-screen):

- `src/components/NexusStudyUploader.tsx` — `TODO: point this at the real ingestion endpoint`.
- `src/app/api/nexus-study/upload/route.ts` — `TODO: real handler` — validation only; storage + job enqueue + email notification not implemented.
- `src/app/contact/page.tsx` — contact form has no submit handler (matches the design, which showed the form without wiring). Add server action / POST handler when the mailbox is set up.
- Book-a-call links point at `/contact` (the design's own convention). Swap to a real calendar URL when you have one.
- `robots.ts` / `sitemap.ts` not generated. Add them once the production domain is confirmed.

## Files worth knowing about

- `src/app/layout.tsx` — root layout, fonts, metadata defaults, `Header` + `Footer` wrap.
- `src/app/globals.css` — design tokens, reset, mobile breakpoint, `.th-N` hover rules, `prefers-reduced-motion` guard.
- `src/components/Header.tsx` — client component (mobile menu open/close state).
- `src/components/Footer.tsx` — server component, renders current year.
- `src/components/SectionHtml.tsx` — trivial wrapper around `dangerouslySetInnerHTML` used by every page.
- `src/components/NexusStudyUploader.tsx` — the one real interaction.
- `src/components/FallbackPage.tsx` — renders the design's fallback template with a per-route title.
- `src/lib/design-html.ts` — generated: the extracted section HTML for every route.
- `scripts/extract-design.py` — the extractor. Re-run after any design change.
- `_design/` — kept in-tree for regeneration: the recovered template, per-route snippets, and generated hover CSS.
