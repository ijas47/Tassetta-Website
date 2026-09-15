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
| `/nexus-study` | `r_study` | **Rewritten in TSX.** The design's CSV upload card is gone. The offer is unchanged (a free nexus study) but the way in is a 15-minute call, with a short form as the no-call path. See "Forms and booking". |
| `/compare/software` | `r_cmp_software` | Matched cleanly. |
| `/compare/cpa` | `r_cmp_cpa` | Matched cleanly. |
| `/about` | `r_about` | Includes the `[PLACEHOLDER, team section]` block, preserved visibly. Matched cleanly. |
| `/security` | `r_security` | Includes the `[HONEST FORWARD-LOOKING NOTE]` block, preserved visibly. Matched cleanly. |
| `/resources` | `r_resources` | Five article angles rendered as placeholders per the design. Matched cleanly. |
| `/contact` | `r_contact` | **Rewritten in TSX.** The form is wired to Web3Forms and there is a booking link alongside it. |

**Fallback pages (5)** all render the design's `r_fallback` template with a per-route title and `noindex`:

- `/login`
- `/legal/privacy`
- `/legal/terms`
- `/legal/engagement`

**Plus:** `/book` (a real page now, `noindex`, see "Forms and booking") and `/_not-found` (Next.js default).

## What matched cleanly vs needed interpretation

- **Cleanly matched:** every route above except the ones since rewritten in TSX (`/`, `/how-it-works`, `/what-we-handle`, `/compare/software`, `/compare/cpa`, `/about`, `/nexus-study`, `/contact`, `/book`). Those follow the design's layout, palette and spacing but carry rewritten copy and, on `/nexus-study` and `/contact`, working forms.
- **Departure worth knowing about:** the design put a CSV drag-and-drop at the centre of `/nexus-study`. That is gone. Web3Forms Free cannot take attachments, and a sales export should not travel through a browser form to a third-party relay anyway. The study itself is unchanged; the file now moves once, by email, after we have told the customer which export to pull.

## Motion

The design only defines one keyframe (`t-rise`) and `scroll-behavior: smooth`. Both are honored. Nothing amplified. All motion is wrapped in a `prefers-reduced-motion: reduce` guard in `globals.css` that:

- switches `scroll-behavior` to `auto`,
- clamps every animation and transition to 0.001 ms (effectively off).

## Responsive

Mobile-first: the design uses `clamp()` typography and one 960 px breakpoint that:

- hides the desktop nav (`.t-nav-desktop { display: none }`),
- shows the burger (`.t-burger { display: inline-flex }`),
- collapses the hero split (`.t-hero-split`), any two-column layout (`.t-2col`), and the watch-file diptych into a single column.

Preserved verbatim.

## Color palette

Every color from your brief is what the site uses. No Wise green anywhere. The design also uses `#0a1413` for the very-dark trust bands and the footer background. That's a design choice (a hair darker than `--tas-ink`) and I kept it as `--tas-dark-panel`. Everything else maps 1:1.

## Lighthouse

The `next build` output is entirely static (`○ Static`) for the marketing pages, with client JS only in `Header` and the two forms. I did not run Lighthouse in this environment because it requires a headless Chrome + network round-trip that isn't available here. The site is set up to hit your 90/100/100 target:

- server-rendered content, no client-only fallback,
- fonts self-hosted via `next/font` with `display: swap`,
- zero third-party requests,
- no layout shift (all typography is `clamp()` from first paint, all sizes reserved with padding),
- one `h1` per page, semantic `<header> <main> <footer>`, `nav`, `label`s on the contact-form inputs, focus-visible outline in `globals.css`.

Run it against `https://your-preview.vercel.app/` with `npx lighthouse --preset=desktop <url>` after deploy and let me know if anything falls short, most likely the only work will be image OG placeholders once you add them.

## TODOs and placeholders left in the site

Rendered visibly to the user per your brief:

- `/` proof/trust dark band: `[ PLACEHOLDER, customer logos, pending permission to use ]` with the "Used by Shopify brands doing seven and eight figures" line.
- `/pricing` orange `validate` pills on every tier and the one-time projects paragraph, plus the amber "Starting points from the internal plan, validate before publishing" ribbon.
- `/about` dashed callout: `[ PLACEHOLDER, team section ]`.
- `/security` dashed callout: `[ HONEST FORWARD-LOOKING NOTE, confirm before publishing ]`.
- `/resources` mono-font `[ PLACEHOLDER, starter article angles, not yet published ]` above the article stubs.
- **Footer legal disclaimer** always visible on every page, unchanged: "Tassetta provides managed sales tax compliance services. We are not a law firm and do not provide legal advice…" followed by the mono-styled `[TODO: Add your real entity name, and once they exist, your E&O insurance and any certifications.]`. Entity name is still a placeholder as specified.

In code (not visible on-screen):

- `robots.ts` / `sitemap.ts` not generated. Add them once the production domain is confirmed.
- `metadataBase` in `src/app/layout.tsx` is hardcoded to `https://tassetta.com`. Confirm once DNS is live.

## Forms and booking

Both forms post to **Web3Forms** (Free plan, 250 submissions/month) and land in `ijas@tassetta.com`.

- `src/lib/web3forms.ts` holds the access key and the `submitToWeb3Forms()` helper. The key is public by design, it identifies the destination inbox and is not a secret. Override with `NEXT_PUBLIC_WEB3FORMS_KEY` to rotate without a code change.
- `src/components/NexusStudyForm.tsx` on `/nexus-study` and `/book`.
- `src/components/ContactForm.tsx` on `/contact`.
- Both carry a hidden `botcheck` honeypot. Web3Forms' Advanced Spam Filter is already on at Basic; hCaptcha is available free if spam becomes a problem.
- **Nothing uploads.** Free Web3Forms has no file attachments (Pro only), and sales exports do not belong in a browser form anyway. The CSV moves once, by email, after we tell the customer which export to pull.
- Autoresponder is also Pro only, so the first reply is manual either way.

Booking is **live** on a Google Calendar appointment schedule, "Tassetta · 15-minute nexus call", on ijas@tassetta.com.

- Public URL: `https://calendar.app.google/9D9La2YiW1aq4sDR7`. It lives in `src/lib/booking.ts` rather than in env, so a fresh clone or a preview deploy books correctly with no setup. It is a link we hand to strangers, not a secret.
- `NEXT_PUBLIC_BOOKING_URL` overrides it if the schedule ever moves. No code change needed.
- Every "Book a call" control across the site reads `src/lib/booking.ts` and opens it in a new tab.
- Schedule config: 15 minutes, Google Meet, 15 minute buffer, max 6 bookings/day, 21 days out, 4 hours minimum notice. Availability Mon-Fri 06:00-24:00 IST. Booking form collects name, email, store URL (required) and states sold into (optional).
- The window is deliberately wide because the customers are in the US. Google renders the booking page in the visitor's timezone, so an IST-business-hours-only window would have shown a New York buyer nothing but 12:30am-7:30am slots.
- That Workspace plan allows exactly **one** appointment schedule. This one replaced an earlier "30 min with Ijas" schedule, so any old link to that now lands on the 15-minute nexus call.
- `calendar.app.google` short links cannot be iframed, so `/book` links out with a "Pick a time" button. If the schedule is ever re-shared as the longer `calendar.google.com/calendar/appointments/schedules/...` URL, `/book` embeds it automatically with `?gv=true`.
- Copying the schedule URL out of the browser while signed in gives the **owner** view, `/calendar/u/0/appointments/...`, which only renders for the account that owns it. `booking.ts` strips that `/u/N/` segment, so pasting either form works.
- No 24-hour reminder is configured. Appointment schedules expose no per-schedule reminder timing, only a calendar-wide default that would fire on every event in the calendar. The "Calendar invitation" setting is on, so the booking lands in the invitee's calendar and their own reminder settings apply.

## Files worth knowing about

- `src/app/layout.tsx` root layout, fonts, metadata defaults, `Header` + `Footer` wrap.
- `src/app/globals.css` design tokens, reset, mobile breakpoint, `.th-N` hover rules, `prefers-reduced-motion` guard.
- `src/components/Header.tsx` client component (mobile menu open/close state).
- `src/components/Footer.tsx` server component, renders current year.
- `src/components/SectionHtml.tsx` trivial wrapper around `dangerouslySetInnerHTML` used by every page.
- `src/components/NexusStudyForm.tsx` and `src/components/ContactForm.tsx` the two real interactions, both posting to Web3Forms.
- `src/lib/web3forms.ts` / `src/lib/booking.ts` the two integration points, both env-overridable.
- `src/components/FallbackPage.tsx` renders the design's fallback template with a per-route title.
- `src/lib/design-html.ts` generated: the extracted section HTML for every route.
- `scripts/extract-design.py` the extractor. Re-run after any design change.
- `_design/` kept in-tree for regeneration: the recovered template, per-route snippets, and generated hover CSS.
