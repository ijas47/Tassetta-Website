import type { Metadata } from 'next';

/*
 * /what-we-handle — rewritten in Fletch voice, grounded in the real product surfaces.
 * Each capability names the actual surface it runs on and cites concrete artifacts
 * from the app (Filing calendar, Expert workbench, Return workpaper, Notices,
 * Audit archive) so the copy stays honest to what a customer will actually see.
 */

export const metadata: Metadata = {
  title: 'What we handle',
  description:
    'The full lifecycle of a sales tax obligation. Nexus, registrations, filings, notices, exemptions — each with a real surface in the Compliance OS and a defined next step.',
  alternates: { canonical: '/what-we-handle' },
  openGraph: {
    title: 'What Tassetta handles',
    description:
      'Nexus, registrations, filings, notices, exemptions — with real product surfaces (workpaper, filing calendar, evidence archive) behind each one.',
    url: '/what-we-handle',
    type: 'website',
  },
};

const T = {
  ink: '#0f1b1a',
  body: '#41504d',
  mute: '#7a8783',
  primary: '#0d7d72',
  primaryActive: '#0a655c',
  pale: '#d9ede9',
  canvasSoft: '#eef2f0',
  darkPanel: '#0a1413',
} as const;

const container = { maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px,4vw,32px)' } as const;
const eyebrow: React.CSSProperties = {
  fontFamily: 'ui-monospace, "JetBrains Mono", Menlo, monospace',
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
  fontSize: 'clamp(24px,3.2vw,36px)',
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  color: T.ink,
  margin: '0 0 12px',
};
const lede: React.CSSProperties = {
  fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
  fontSize: 'clamp(17px,2vw,21px)',
  lineHeight: 1.5,
  color: T.body,
  margin: 0,
};
const body: React.CSSProperties = {
  fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
  fontSize: 16.5,
  lineHeight: 1.6,
  color: T.body,
  margin: 0,
};
const mono: React.CSSProperties = {
  fontFamily: 'ui-monospace, "JetBrains Mono", Menlo, monospace',
  fontVariantNumeric: 'tabular-nums',
};

type Capability = {
  num: string;
  slug: string;
  head: string;
  claim: string;
  bullets: string[];
  surface: { label: string; rows: [string, string, 'ink' | 'primary' | 'warn' | 'neg' | 'pos'][] };
};

const CAPS: Capability[] = [
  {
    num: '01',
    slug: 'nexus',
    head: 'Nexus monitoring',
    claim: 'Know where you owe before the state does.',
    bullets: [
      'All 50 states and DC watched live against your sales and transactions.',
      'Threshold rule changes tracked — so your position never runs on a stale rulebook.',
      'Marketplace-remitted sales separated from your direct sales in the count.',
      'A crossed threshold surfaces as an obligation in the Filing calendar automatically.',
    ],
    surface: {
      label: 'Ops view · Liability by state',
      rows: [
        ['CA · May 2026', '$6,262 open', 'neg'],
        ['WA · May 2026', '$4,423 open', 'neg'],
        ['GA · May 2026', '$2,932 open', 'neg'],
        ['FL · at 96% of threshold', 'Approaching', 'warn'],
        ['NJ · at 92% of threshold', 'Approaching', 'warn'],
      ],
    },
  },
  {
    num: '02',
    slug: 'registrations',
    head: 'State registrations',
    claim: 'Cross a threshold, we register you in that state.',
    bullets: [
      'We prepare the registration; an expert reviews; you approve.',
      'We track it through to the state’s confirmation and account number.',
      'The state moves into your Filing calendar the moment it’s active.',
      'Portal credentials get vaulted so filings can be submitted end-to-end.',
    ],
    surface: {
      label: 'In your portal · Prior registrations',
      rows: [
        ['GA — active', 'Approved', 'pos'],
        ['IL — active', 'Approved', 'pos'],
        ['State portal credentials · IL', 'Delegate missing', 'warn'],
        ['Marketplace channel list', 'Client to confirm', 'warn'],
      ],
    },
  },
  {
    num: '03',
    slug: 'filing',
    head: 'Filing and remittance',
    claim: 'Returns filed, on time, reviewed by a person.',
    bullets: [
      'Every return, per state, on the frequency each state assigned you.',
      'A tax expert prepares each one and reconciles to the tax you collected.',
      'You approve in one click on the Client portal packet.',
      'ACH runs on schedule; if it fails, we surface it and drive it to resolved.',
    ],
    surface: {
      label: 'Ops view · Filing calendar',
      rows: [
        ['Ember Home Co. · GA · May 2026', 'Overdue — 82d', 'neg'],
        ['Northstar Goods · CA · May 2026', 'Overdue — 82d', 'neg'],
        ['Ember Home Co. · GA · Aug 2026', 'Due in 10d', 'warn'],
        ['Northstar Goods · WA · Aug 2026', 'Due in 10d', 'warn'],
        ['Ember Home Co. · GA · Sep 2026', 'Upcoming — 40d', 'ink'],
      ],
    },
  },
  {
    num: '04',
    slug: 'notices',
    head: 'Notices and audits',
    claim: 'When a state writes back, we answer.',
    bullets: [
      'Notices intake, matched to the filing period in question.',
      'Response drafted by the expert who worked the original return.',
      'You approve the reply; we send and log the whole exchange.',
      'The evidence trail (source data, workpaper, sign-offs) stays attached for audit.',
    ],
    surface: {
      label: 'Ops view · Notice workflow',
      rows: [
        ['Ember Home Co. · GA May 2026', 'Payment failure', 'neg'],
        ['Northstar Goods · CA May 2026', '3 exceptions', 'warn'],
        ['Northstar Goods · WA May 2026', 'Awaiting client', 'ink'],
      ],
    },
  },
  {
    num: '05',
    slug: 'exemptions',
    head: 'Exemption certificates',
    claim: 'Wholesale and exempt sales, documented properly.',
    bullets: [
      'Certificates collected, validated, watched for expiry.',
      'Which sales are actually exempt is resolved before the return, not after.',
      'Every exempt line on a return ties back to a certificate in the archive.',
      'When an auditor asks, the answer is a folder — not a search.',
    ],
    surface: {
      label: 'In your portal · Return workpaper — GA May 2026',
      rows: [
        ['Gross sales (H)', '$38,200', 'ink'],
        ['Net taxable (J)', '$36,770', 'ink'],
        ['Exempt sales (I)', '$0 · certificates on file', 'pos'],
        ['Tax collected (K)', '$2,932', 'ink'],
        ['Variance', '+$0 · resolved', 'pos'],
      ],
    },
  },
];

const sev = {
  ink: { color: T.ink, bg: '#fff', border: '#e6ece9' },
  primary: { color: T.primary, bg: T.pale, border: T.pale },
  warn: { color: '#a67512', bg: '#fbecc9', border: '#fbecc9' },
  neg: { color: '#a01f26', bg: '#fbe4e5', border: '#fbe4e5' },
  pos: { color: '#217a37', bg: '#d3ecd8', border: '#d3ecd8' },
} as const;

function SurfaceCard({ label, rows }: Capability['surface']) {
  return (
    <div
      style={{
        background: T.canvasSoft,
        borderRadius: 20,
        padding: 20,
        boxShadow: '0 20px 50px -32px rgba(15,27,26,0.28)',
      }}
    >
      <div style={{ ...mono, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.mute, marginBottom: 12 }}>
        {label}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {rows.map(([k, v, tone]) => {
          const s = sev[tone];
          return (
            <div
              key={k}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 12,
                padding: '11px 14px',
                background: '#fff',
                border: '1px solid #e6ece9',
                borderRadius: 10,
              }}
            >
              <span style={{ fontSize: 14, color: T.ink, fontWeight: 500 }}>{k}</span>
              <span
                style={{
                  ...mono,
                  fontSize: 12,
                  letterSpacing: '0.02em',
                  color: s.color,
                  background: s.bg,
                  border: `1px solid ${s.border}`,
                  padding: '4px 10px',
                  borderRadius: 9999,
                  whiteSpace: 'nowrap',
                }}
              >
                {v}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function WhatWeHandle() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section style={{ background: T.canvasSoft, padding: 'clamp(48px,7vw,88px) 0' }}>
        <div style={container}>
          <p style={eyebrow}>What we handle</p>
          <h1 style={{ ...h1, maxWidth: 820 }}>
            Everything from &ldquo;you might owe&rdquo; to &ldquo;it is filed and archived.&rdquo;
          </h1>
          <p style={{ ...lede, maxWidth: 780 }}>
            Five capabilities. One team behind them. Some of these live in your Client Portal — that&rsquo;s what you
            see when you sign in. The rest run in the ops workbench we operate on your behalf. Every screen below is
            labeled so you know which side of the wall it&rsquo;s on.
          </p>
        </div>
      </section>

      {/* ============ CAPABILITIES ============ */}
      {CAPS.map((c, i) => (
        <section
          key={c.num}
          id={c.slug}
          style={{
            background: i % 2 === 0 ? '#fff' : T.canvasSoft,
            padding: 'clamp(48px,7vw,88px) 0',
            borderTop: i === 0 ? 'none' : '1px solid #e6ece9',
          }}
        >
          <div style={container}>
            <div
              className="t-2col"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(28px,4vw,64px)',
                alignItems: 'center',
              }}
            >
              {/* copy — flip side each row */}
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <div style={{ ...mono, fontSize: 12, letterSpacing: '0.12em', color: T.primary, marginBottom: 12 }}>
                  {c.num}
                </div>
                <h2 style={h2}>{c.head}</h2>
                <p style={{ ...body, fontSize: 20, color: T.ink, fontWeight: 500, marginBottom: 20 }}>{c.claim}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {c.bullets.map((b) => (
                    <li key={b} style={{ display: 'grid', gridTemplateColumns: '22px 1fr', gap: 10, alignItems: 'baseline' }}>
                      <span
                        aria-hidden
                        style={{
                          fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                          fontWeight: 800,
                          color: T.primary,
                          fontSize: 14,
                        }}
                      >
                        →
                      </span>
                      <span style={{ ...body, fontSize: 16 }}>{b}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 24 }}>
                  <a
                    href={`/what-we-handle/${c.slug}`}
                    className="th-8"
                    style={{ fontWeight: 600, fontSize: 15, color: T.primary, textDecoration: 'none' }}
                  >
                    Read more →
                  </a>
                </div>
              </div>

              {/* surface mock */}
              <div style={{ order: i % 2 === 0 ? 1 : 0, minWidth: 0 }}>
                <SurfaceCard {...c.surface} />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ============ CONTROLS ENFORCED ============ */}
      <section style={{ background: T.darkPanel, padding: 'clamp(56px,8vw,96px) 0' }}>
        <div style={container}>
          <div style={{ maxWidth: 820 }}>
            <p style={{ ...eyebrow, color: T.mute }}>Controls enforced</p>
            <h2 style={{ ...h2, fontSize: 'clamp(28px,4vw,42px)', color: '#fff' }}>
              Three rules the platform will not let anyone bend.
            </h2>
            <p style={{ ...body, color: '#c7d2cf', fontSize: 'clamp(16px,1.6vw,19px)', margin: '16px 0 0' }}>
              The controls that make a filing defensible on audit day are not policy — they are enforced in software.
            </p>
          </div>
          <div
            style={{
              marginTop: 40,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 18,
            }}
          >
            {[
              ['Expert sign-off', 'Every return is reviewed and signed by a Tassetta expert before it reaches client approval.'],
              ['Client approval', 'No return can be filed without the client’s one-click approval on the packet.'],
              ['7-year evidence retention', 'Every workpaper, approval, and confirmation is retained for seven years in a tamper-evident archive.'],
            ].map(([h, s]) => (
              <div key={h} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #223330', borderRadius: 16, padding: 24 }}>
                <div style={{ color: '#fff', fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontWeight: 800, fontSize: 18, marginBottom: 8 }}>
                  {h}
                </div>
                <div style={{ color: '#c7d2cf', fontSize: 14.5, lineHeight: 1.55 }}>{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section style={{ background: T.canvasSoft, padding: 'clamp(56px,8vw,96px) 0' }}>
        <div style={container}>
          <div style={{ background: T.ink, borderRadius: 28, padding: 'clamp(36px,5vw,72px)', textAlign: 'center' }}>
            <h2 style={{ ...h2, color: '#fff', fontSize: 'clamp(30px,4.4vw,52px)', margin: '0 0 20px' }}>
              See where you stand before you commit.
            </h2>
            <p style={{ color: '#c7d2cf', fontSize: 'clamp(16px,1.7vw,19px)', lineHeight: 1.6, margin: '0 auto 32px', maxWidth: 640 }}>
              One CSV export from Shopify. A report of every state you already owe in, where you&rsquo;re close, and
              what getting compliant would actually cost.
            </p>
            <a
              href="/nexus-study"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: T.primary,
                color: '#fff',
                fontWeight: 600,
                fontSize: 16,
                padding: '15px 28px',
                borderRadius: 24,
                textDecoration: 'none',
              }}
            >
              Get your free nexus study
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
