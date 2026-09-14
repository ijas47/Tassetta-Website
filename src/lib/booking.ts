/**
 * Call booking.
 *
 * Bookings run on a Google Calendar appointment schedule attached to the
 * Google Workspace account on the tassetta.com domain. That schedule has a
 * public booking page URL of the shape:
 *   https://calendar.app.google/XXXXXXXXXXXXXXXX
 *
 * Set it once, in Vercel, as NEXT_PUBLIC_BOOKING_URL. Until it is set every
 * "Book a call" control routes to /book, which renders a visibly provisional
 * placeholder plus a form, so no lead is dropped while the schedule is
 * being created.
 *
 * [TODO: paste the real Google Calendar booking URL into
 * NEXT_PUBLIC_BOOKING_URL in the Vercel project settings.]
 */
const raw = (process.env.NEXT_PUBLIC_BOOKING_URL ?? '').trim();

/** The live Google Calendar booking URL, or '' while it is not configured. */
export const BOOKING_URL = raw.startsWith('https://') ? raw : '';

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
