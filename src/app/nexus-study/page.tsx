import type { Metadata } from 'next';
import NexusStudyForm from '@/components/NexusStudyForm';
import { bookingHref, bookingLinkProps } from '@/lib/booking';

/*
 * /nexus-study. The free report is the offer, a 15-minute call is the way in.
 * On the call we tell you which export to pull. Nothing uploads from this page.
 */

export const metadata: Metadata = {
  title: 'Free nexus study',
  description:
    'Fifteen minutes on a call, then a report of every state where you have already crossed a sales tax threshold, where you are close, your estimated exposure, and the next step for each.',
  alternates: { canonical: '/nexus-study' },
  openGraph: {
    title: 'Free nexus study',
    description:
      'A report of every state you have crossed in, where you are close, and what compliance costs. Free.',
    url: '/nexus-study',
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
  darkPanel: '#0a1413',
  onDark: '#c7d2cf',
} as const;

const container = { maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px,4vw,32px)' } as const;
const mono = {
  fontFamily: 'ui-monospace, "JetBrains Mono", Menlo, monospace',
  fontVariantNumeric: 'tabular-nums',
} as const;

const eyebrow: React.CSSProperties = {
  ...mono,
  fontSize: 12,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: T.mute,
  margin: '0 0 16px',
};
const h1: React.CSSProperties = {
  fontFamily: 'var(--font-manrope), Manrope, sans-serif',
  fontWeight: 800,
  fontSize: 'clamp(36px,5.6vw,68px)',
  lineHeight: 1.04,
  letterSpacing: '-0.025em',
  color: T.ink,
  margin: '0 0 24px',
};
const h2: React.CSSProperties = {
  fontFamily: 'var(--font-manrope), Manrope, sans-serif',
  fontWeight: 800,
  fontSize: 'clamp(28px,4vw,44px)',
  lineHeight: 1.07,
  letterSpacing: '-0.02em',
  color: T.ink,
  margin: '0 0 20px',
};
const h3: React.CSSProperties = {
  fontFamily: 'var(--font-manrope), Manrope, sans-serif',
  fontWeight: 800,
  fontSize: 'clamp(19px,2.2vw,23px)',
  letterSpacing: '-0.018em',
  color: T.ink,
  margin: '0 0 10px',
};
const lede: React.CSSProperties = {
  fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
  fontSize: 'clamp(17px,2vw,21px)',
  lineHeight: 1.5,
  color: T.body,
  margin: '0 0 32px',
};
const body: React.CSSProperties = {
  fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
  fontSize: 17,
  lineHeight: 1.62,
  color: T.body,
  margin: 0,
};
const ctaPrimary: React.CSSProperties = {
  display: 'inline-block',
  background: T.primary,
  color: '#fff',
  fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
  fontWeight: 600,
  fontSize: 16,
  padding: '15px 30px',
  borderRadius: 24,
  textDecoration: 'none',
};
const ctaGhost: React.CSSProperties = {
  display: 'inline-block',
  background: 'transparent',
  color: T.ink,
  fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
  fontWeight: 600,
  fontSize: 16,
  padding: '14px 28px',
  borderRadius: 24,
  border: `1.5px solid #cdd8d4`,
  textDecoration: 'none',
};

const GET = [
  {
    t: 'Every state you have crossed',
    d: 'Each state where your sales have passed the economic nexus threshold, with the date you crossed it.',
  },
  {
    t: 'Every state you are about to cross',
    d: 'The ones running at 70 percent or more of the threshold, so registration is a decision and not a surprise.',
  },
  {
    t: 'What it may already have cost you',
    d: 'An estimate of uncollected tax to date, per state, with penalty and interest exposure called out separately.',
  },
  {
    t: 'A next step for each state',
    d: 'Register now, monitor, or no action. One line per state, not a 40 page PDF.',
  },
];

export default function NexusStudyPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section style={{ background: T.canvasSoft, padding: 'clamp(56px,9vw,104px) 0 clamp(40px,6vw,72px)' }}>
        <div style={container}>
          <div style={{ maxWidth: 880 }}>
            <p style={eyebrow}>Free nexus study</p>
            <h1 style={h1}>Find out where you already owe.</h1>
            <p style={{ ...lede, maxWidth: 720 }}>
              Most brands cross a sales tax threshold months before they hear about it. Book fifteen
              minutes, tell us where you sell, and we come back with a report of every state you have
              crossed in, every state you are close to, and what it would cost to get clean.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
              <a href={bookingHref} {...bookingLinkProps} style={ctaPrimary} className="th-1">
                Book a 15-minute call
              </a>
              <a href="#send-details" style={ctaGhost} className="th-2">
                Rather not talk? Send your details
              </a>
            </div>
            <p style={{ ...body, fontSize: 14, color: T.mute, margin: '18px 0 0', maxWidth: 620 }}>
              Fifteen minutes on Google Meet, at a time in your own timezone. No charge, and no
              obligation to become a customer. If the report says you are fine, you are fine.
            </p>
          </div>
        </div>
      </section>

      {/* ============ WHAT YOU GET ============ */}
      <section style={{ background: '#fff', padding: 'clamp(56px,8vw,96px) 0' }}>
        <div style={container}>
          <h2 style={{ ...h2, maxWidth: 700 }}>What is in the report</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 20,
              marginTop: 36,
            }}
          >
            {GET.map((g) => (
              <div
                key={g.t}
                style={{
                  background: T.canvasSoft,
                  borderRadius: 20,
                  padding: 'clamp(22px,2.6vw,30px)',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 34,
                    height: 34,
                    borderRadius: 9999,
                    background: T.pale,
                    color: T.primary,
                    fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                    fontWeight: 800,
                    marginBottom: 16,
                  }}
                  aria-hidden
                >
                  ✓
                </span>
                <h3 style={h3}>{g.t}</h3>
                <p style={{ ...body, fontSize: 15.5 }}>{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT RUNS ============ */}
      <section style={{ background: T.canvasSoft, padding: 'clamp(56px,8vw,96px) 0' }}>
        <div style={container}>
          <div style={{ maxWidth: 760 }}>
            <h2 style={h2}>Three steps, and only one of them is yours</h2>
          </div>
          <ol
            style={{
              listStyle: 'none',
              margin: '36px 0 0',
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 20,
            }}
          >
            {[
              {
                n: '01',
                t: 'Fifteen minutes',
                d: 'Where you sell, which channels, roughly what volume. We tell you the one export to pull, because every platform names it something different.',
              },
              {
                n: '02',
                t: 'You send one export',
                d: 'Sales by state, by email, straight to us. That is the whole ask. If you sell on marketplaces too, send those and we factor them in.',
              },
              {
                n: '03',
                t: 'The report lands',
                d: 'Three to five business days. Your real sales data run against current state thresholds, with a CPA reading it before it reaches you.',
              },
            ].map((s) => (
              <li
                key={s.n}
                style={{ background: '#fff', borderRadius: 20, padding: 'clamp(22px,2.6vw,30px)' }}
              >
                <span style={{ ...mono, fontSize: 13, color: T.primary, fontWeight: 700, letterSpacing: '0.08em' }}>
                  {s.n}
                </span>
                <h3 style={{ ...h3, marginTop: 12 }}>{s.t}</h3>
                <p style={{ ...body, fontSize: 15.5 }}>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ THE FORM ============ */}
      <section id="send-details" style={{ background: '#fff', padding: 'clamp(56px,8vw,96px) 0', scrollMarginTop: 90 }}>
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
              <h2 style={h2}>Or skip the call</h2>
              <p style={{ ...body, marginBottom: 18 }}>
                A call is faster, because half the questions get answered in the first two minutes.
                But it is not required. Send your details and we reply with the exact export to pull
                and where to send it.
              </p>
              <p style={{ ...body, fontSize: 15.5, color: T.mute }}>
                Nothing uploads from this page. Your sales data moves once, by email, after we have
                told you which file we need.
              </p>
              <p style={{ ...body, fontSize: 15.5, marginTop: 18 }}>
                Changed your mind?{' '}
                <a
                  href={bookingHref}
                  {...bookingLinkProps}
                  style={{ color: T.primary, fontWeight: 600, textDecoration: 'none' }}
                  className="th-2"
                >
                  Book the call instead.
                </a>
              </p>
            </div>
            <div
              style={{
                background: T.canvasSoft,
                borderRadius: 24,
                padding: 'clamp(24px,3vw,34px)',
              }}
            >
              <NexusStudyForm subject="Nexus study request" cta="Send my details" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ THE HONEST VERSION ============ */}
      <section style={{ background: T.darkPanel, padding: 'clamp(56px,8vw,96px) 0' }}>
        <div style={container}>
          <div style={{ maxWidth: 760 }}>
            <p style={{ ...eyebrow, color: T.mute }}>The honest version</p>
            <h2 style={{ ...h2, color: '#fff' }}>Why we give this away</h2>
            <p style={{ ...body, color: T.onDark, marginBottom: 16 }}>
              Most brands do not know they have a problem, and the fastest way to explain what we do
              is to show you your own numbers. If the report says you are clean, you are clean, and
              you have lost nothing but a quarter hour.
            </p>
            <p style={{ ...body, color: T.onDark }}>
              No invented figure designed to scare you. The thresholds and rates in the report are
              starting values, verified against each state authority before anyone files anything,
              and we mark where a number is an estimate rather than a confirmed obligation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
