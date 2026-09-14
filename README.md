# Tassetta Website

Marketing site for Tassetta, managed US sales tax compliance. Built as a faithful
production of the Claude Design source (`Tassetta.dc.html`).

## Stack

- **Next.js 16** (App Router, Turbopack). Every marketing page is server-rendered as static HTML.
- **Tailwind CSS v4** used for tokens/theme; the design ships as inline-styled markup that we preserve verbatim.
- **Inter + Manrope** via `next/font/google`, self-hosted.
- **Zero JS on marketing pages** except the sticky-header mobile menu (`Header`) and the two Web3Forms forms (`NexusStudyForm`, `ContactForm`).

## Design fidelity

The source of truth is `Tassetta.dc.html` (the exported Claude Design bundle). We
run `scripts/extract-design.py` on it to produce per-route HTML snippets under
`_design/sections/`, which are then bundled into `src/lib/design-html.ts` and
rendered on the matching Next.js page via `SectionHtml`. The extractor:

- strips Claude Design's `<sc-if>` conditional wrappers,
- converts `href="#/route"` to real `/route` links,
- desugars the design's custom `style-hover="..."` attribute into generated `.th-N`
 classes with matching `:hover` rules (all inlined into `globals.css`).

Several routes are no longer rendered from the extracted HTML at all. `/`,
`/how-it-works`, `/what-we-handle`, `/compare/*`, `/about`, `/nexus-study`,
`/contact` and `/book` are hand-written TSX: same layout language and palette,
rewritten copy, and on `/nexus-study` and `/contact` a real form wired to
Web3Forms. The design's CSV drag-and-drop is gone; see `docs/HANDOVER.md`.

If you edit the design, drop the exported HTML at `_design/Tassetta.standalone.html`
and re-run:

```bash
npm run extract-design
```

then paste the contents of `_design/sections/hover.css` into the marked section of
`src/app/globals.css` (or refactor to import at build time).

## Develop

```bash
npm install
npm run dev
```

## Routes

Every page from the design has a route. See `docs/HANDOVER.md` for the full page
list, what matched cleanly vs needed interpretation, and the outstanding TODOs
and placeholders.
