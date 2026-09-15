import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { bookingHref, bookingLinkProps } from '@/lib/booking';

/*
 * /contact. Two reasons people land here: a state notice with a clock on it,
 * or sizing up the platform. Both get a form and a booking link.
 */

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Got a notice from a state, or sizing up the platform. Either way, give us the basics and we come back within one business day.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Tassetta',
    description:
      'Got a notice from a state, or sizing up the platform. Give us the basics and we come back within one business day.',
    url: '/contact',
    type: 'website',
  },
};

const T = {
  ink: '#0f1b1a',
  body: '#41504d',
  mute: '#7a8783',
  primary: '#0d7d72',
  pale: '#d9ede9',
  canvasSoft: '#eef2f0',
} as const;

const container = { maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px,4vw,32px)' } as const;
const mono = { fontFamily: 'ui-monospace, "JetBrains Mono", Menlo, monospace' } as const;

const h1: React.CSSProperties = {
  fontFamily: 'var(--font-manrope), Manrope, sans-serif',
  fontWeight: 800,
  fontSize: 'clamp(34px,5.2vw,60px)',
  lineHeight: 1.05,
  letterSpacing: '-0.025em',
  color: T.ink,
  margin: '0 0 22px',
};
const h3: React.CSSProperties = {
  fontFamily: 'var(--font-manrope), Manrope, sans-serif',
  fontWeight: 800,
  fontSize: 'clamp(18px,2.1vw,22px)',
  letterSpacing: '-0.018em',
  color: T.ink,
  margin: '0 0 8px',
};
const body: React.CSSProperties = {
  fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
  fontSize: 17,
  lineHeight: 1.62,
  color: T.body,
  margin: 0,
};

export default function ContactPage() {
  return (
    <section style={{ background: T.canvasSoft, padding: 'clamp(48px,8vw,96px) 0 clamp(56px,8vw,104px)' }}>
      <div style={container}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(28px,4vw,56px)',
            alignItems: 'start',
          }}
        >
          <div>
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
              Contact
            </p>
            <h1 style={h1}>Talk to us about your sales tax.</h1>
            <p style={{ ...body, marginBottom: 32, maxWidth: 520 }}>
              People usually arrive here for one of two reasons. Either a state sent you something
              and there is a date on it, or you are working out whether this replaces what you do
              today. Say which, and we come back within one business day.
            </p>

            <div
              style={{
                background: '#fff',
                borderRadius: 20,
                padding: 'clamp(20px,2.6vw,28px)',
                marginBottom: 20,
              }}
            >
              <h3 style={h3}>You have a notice</h3>
              <p style={{ ...body, fontSize: 15.5 }}>
                Put the state and the deadline in the message. Anything with a clock on it gets read
                first, before anything else in the queue.
              </p>
            </div>

            <div
              style={{
                background: '#fff',
                borderRadius: 20,
                padding: 'clamp(20px,2.6vw,28px)',
              }}
            >
              <h3 style={h3}>You would rather just talk</h3>
              <p style={{ ...body, fontSize: 15.5, marginBottom: 14 }}>
                Fifteen minutes, no deck. Where you sell, what you are exposed to, what it would take
                to get clean.
              </p>
              <a
                href={bookingHref}
                {...bookingLinkProps}
                style={{ color: T.primary, fontWeight: 600, textDecoration: 'none', fontSize: 15.5 }}
                className="th-2"
              >
                Book a call →
              </a>
            </div>

            <p style={{ ...body, fontSize: 15, color: T.mute, marginTop: 24 }}>
              Not ready to talk yet? Write instead. The form goes to the same inbox and gets the
              same answer, it just takes a round trip.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
