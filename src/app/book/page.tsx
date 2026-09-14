import type { Metadata } from 'next';
import NexusStudyForm from '@/components/NexusStudyForm';
import { BOOKING_URL, BOOKING_LIVE } from '@/lib/booking';

/*
 * /book. Fifteen minutes on a Google Calendar appointment schedule.
 *
 * Until NEXT_PUBLIC_BOOKING_URL is set this renders a visibly provisional
 * placeholder plus the same short form, so the page never becomes a dead end.
 * Kept out of the index either way: it duplicates /nexus-study intent.
 */

export const metadata: Metadata = {
  title: 'Book a call',
  description: 'Fifteen minutes on where you sell, what you are exposed to, and what it would take to get clean.',
  alternates: { canonical: '/book' },
  robots: { index: false, follow: true },
};

const T = {
  ink: '#0f1b1a',
  body: '#41504d',
  mute: '#7a8783',
  primary: '#0d7d72',
  pale: '#d9ede9',
  canvasSoft: '#eef2f0',
  warn: '#a67512',
  warnPale: '#fbecc9',
} as const;

const container = { maxWidth: 900, margin: '0 auto', padding: '0 clamp(20px,4vw,32px)' } as const;
const mono = { fontFamily: 'ui-monospace, "JetBrains Mono", Menlo, monospace' } as const;

const h1: React.CSSProperties = {
  fontFamily: 'var(--font-manrope), Manrope, sans-serif',
  fontWeight: 800,
  fontSize: 'clamp(32px,5vw,56px)',
  lineHeight: 1.05,
  letterSpacing: '-0.025em',
  color: T.ink,
  margin: '0 0 20px',
};
const body: React.CSSProperties = {
  fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
  fontSize: 17,
  lineHeight: 1.62,
  color: T.body,
  margin: 0,
};

/** Google's own embeddable schedule URL, when the configured link is one. */
const embedSrc =
  BOOKING_LIVE && BOOKING_URL.includes('/calendar/appointments/')
    ? `${BOOKING_URL}${BOOKING_URL.includes('?') ? '&' : '?'}gv=true`
    : null;

export default function BookPage() {
  return (
    <section style={{ background: T.canvasSoft, padding: 'clamp(48px,8vw,96px) 0' }}>
      <div style={container}>
        <p
          style={{
            ...mono,
            fontSize: 12,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: T.mute,
            margin: '0 0 16px',
          }}
        >
          Fifteen minutes
        </p>
        <h1 style={h1}>Book a call.</h1>
        <p style={{ ...body, maxWidth: 620, marginBottom: 36 }}>
          Where you sell, which channels, roughly what volume. We tell you which export to pull, and
          your free nexus study follows 3 to 5 business days later.
        </p>

        {embedSrc ? (
          <div
            style={{
              background: '#fff',
              borderRadius: 24,
              padding: 'clamp(12px,1.6vw,18px)',
              boxShadow: '0 30px 70px -34px rgba(15,27,26,0.32)',
            }}
          >
            <iframe
              src={embedSrc}
              title="Book a call with Tassetta"
              loading="lazy"
              style={{ width: '100%', height: 640, border: 0, borderRadius: 14, display: 'block' }}
            />
          </div>
        ) : BOOKING_LIVE ? (
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: T.primary,
              color: '#fff',
              fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
              fontWeight: 600,
              fontSize: 16,
              padding: '15px 30px',
              borderRadius: 24,
              textDecoration: 'none',
            }}
            className="th-1"
          >
            Open the scheduler
          </a>
        ) : (
          <div
            style={{
              background: '#fff',
              border: `2px dashed ${T.warn}`,
              borderRadius: 20,
              padding: 'clamp(20px,3vw,28px)',
              marginBottom: 32,
            }}
          >
            <p style={{ ...mono, fontSize: 13, color: T.warn, fontWeight: 700, margin: '0 0 10px' }}>
              [ PLACEHOLDER, scheduler not connected yet ]
            </p>
            <p style={{ ...body, fontSize: 15.5 }}>
              The Google Calendar booking page goes here. Set{' '}
              <code style={{ ...mono, fontSize: 14, background: T.pale, padding: '2px 6px', borderRadius: 6 }}>
                NEXT_PUBLIC_BOOKING_URL
              </code>{' '}
              in the Vercel project and every &ldquo;Book a call&rdquo; control on the site points
              straight at it. Until then, the form below reaches the same inbox.
            </p>
          </div>
        )}

        {!BOOKING_LIVE && (
          <div
            style={{
              background: '#fff',
              borderRadius: 24,
              padding: 'clamp(24px,3vw,34px)',
              boxShadow: '0 30px 70px -34px rgba(15,27,26,0.32)',
            }}
          >
            <NexusStudyForm subject="Call request" cta="Ask us to call you" />
          </div>
        )}
      </div>
    </section>
  );
}
