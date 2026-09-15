/**
 * Call booking.
 *
 * Live. Bookings run on the Google Calendar appointment schedule
 * "Tassetta · 15-minute nexus call", on ijas@tassetta.com.
 *
 *   15 minutes, Google Meet, 15 minute buffer, max 6 per day.
 *   Availability Mon-Fri 06:00-24:00 IST, 21 days out, 4 hours notice.
 *   Booking form collects name, email, store URL, and states sold into.
 *
 * The URL is public by design, it is the page we ask strangers to open.
 * Kept in code rather than env so a fresh clone or preview deploy books
 * correctly with no setup; NEXT_PUBLIC_BOOKING_URL overrides it if the
 * schedule ever moves.
 *
 * Note this is a calendar.app.google short link, which Google does not allow
 * in an iframe. /book therefore links out rather than embedding. If the
 * schedule is ever re-shared as the longer
 * calendar.google.com/calendar/appointments/schedules/... form, /book will
 * embed it automatically.
 *
 * That Workspace plan allows exactly one appointment schedule, so this
 * single URL is the only booking entry point the business has.
 */
const FALLBACK = 'https://calendar.app.google/9D9La2YiW1aq4sDR7';

const raw = (process.env.NEXT_PUBLIC_BOOKING_URL ?? FALLBACK).trim();

/**
 * Copying the schedule out of the browser while signed in yields the owner
 * view, .../calendar/u/0/appointments/schedules/... . That path only renders
 * for the account that owns it, so a visitor following it, or an iframe
 * embedding it, gets nothing. Drop the account segment so either URL works.
 */
function publicForm(url: string): string {
  return url.replace(/\/calendar\/u\/\d+\/appointments\//, '/calendar/appointments/');
}

/** The live Google Calendar booking URL, or '' while it is not configured. */
export const BOOKING_URL = raw.startsWith('https://') ? publicForm(raw) : '';

/** True once a real scheduler URL is configured. */
export const BOOKING_LIVE = BOOKING_URL !== '';

/**
 * Where a "Book a call" control should point. The direct scheduler once it
 * exists, otherwise our own /book page.
 */
export const bookingHref = BOOKING_LIVE ? BOOKING_URL : '/book';

/** External links need target/rel. Internal ones must not have them. */
export const bookingLinkProps = BOOKING_LIVE
  ? ({ target: '_blank', rel: 'noopener noreferrer' } as const)
  : ({} as const);
