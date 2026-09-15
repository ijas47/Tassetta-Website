import type { Metadata } from 'next';
import { BOOKING_URL, BOOKING_LIVE } from '@/lib/booking';

/*
 * /book. Fifteen minutes on the Google Calendar appointment schedule.
 *
 * Most "Book a call" controls now link straight to Google, so this page is
 * mainly for people who land on /book directly, and for the /nexus-study
 * redirect. It degrades to a visibly provisional placeholder if the
 * scheduler URL is ever unset.
 */

export const metadata: Metadata = {
  title: 'Book a call',
  description:
    'Fifteen minutes on where you sell, what you are exposed to, and what it would take to get clean.',
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
const card: React.CSSProperties = {
  background: '#fff',
  borderRadius: 24,
  padding: 'clamp(24px,3vw,34px)',
  boxShadow: '0 30px 70px -34px rgba(15,27,26,0.32)',
};

/**
 * Google only allows the long schedule URL in an iframe. The
 * calendar.app.google short links must be opened in a new tab.
 */
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
          Where you sell, which channels, roughly what volume. We come back with the states you
          have probably already crossed in and what it would take to get clean. No deck, no pitch.
        </p>

        {embedSrc ? (
          <div style={{ ...card, padding: 'clamp(12px,1.6vw,18px)' }}>
            <iframe
              src={embedSrc}
              title="Book a call with Tassetta"
              loading="lazy"
              style={{ width: '100%', height: 640, border: 0, borderRadius: 14, display: 'block' }}
            />
          </div>
        ) : BOOKING_LIVE ? (
          <div style={card}>
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
              Pick a time →
            </a>
            <p style={{ ...body, fontSize: 14.5, color: T.mute, marginTop: 18 }}>
              Opens Google Calendar in a new tab. Times show in your own timezone, and you get a
              Google Meet link with the confirmation.
            </p>
          </div>
        ) : (
          <div
            style={{
              background: '#fff',
              border: `2px dashed ${T.warn}`,
              borderRadius: 20,
              padding: 'clamp(20px,3vw,28px)',
            }}
          >
            <p style={{ ...mono, fontSize: 13, color: T.warn, fontWeight: 700, margin: '0 0 10px' }}>
              [ PLACEHOLDER, scheduler not connected ]
            </p>
            <p style={{ ...body, fontSize: 15.5 }}>
              Set{' '}
              <code style={{ ...mono, fontSize: 14, background: T.pale, padding: '2px 6px', borderRadius: 6 }}>
                NEXT_PUBLIC_BOOKING_URL
              </code>{' '}
              in the Vercel project and every &ldquo;Book a call&rdquo; control on the site points
              straight at it. Until then, send a message from{' '}
              <a href="/contact" style={{ color: T.primary, fontWeight: 600 }}>
                /contact
              </a>
              .
            </p>
          </div>
        )}

        <p style={{ ...body, fontSize: 15, color: T.mute, marginTop: 'clamp(32px,4vw,48px)' }}>
          Rather write than talk?{' '}
          <a href="/contact" style={{ color: T.primary, fontWeight: 600, textDecoration: 'none' }}>
            Send a message instead.
          </a>{' '}
          Same inbox, same answer, one extra round trip.
        </p>

      </div>
    </section>
  );
}
