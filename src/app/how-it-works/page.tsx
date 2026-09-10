import type { Metadata } from 'next';

/*
 * /how-it-works — rewritten in Fletch voice, grounded in the real Compliance OS.
 * Structure follows the actual product lifecycle:
 *   1) Onboard once (Client readiness — 8 items)
 *   2) Live, continuously (data + nexus + calendar)
 *   3) Every filing period (4-stage per-return progress)
 *   4) Forever (notices + evidence archive)
 */

export const metadata: Metadata = {
  title: 'How it works',
  description:
    'Onboard once. From then on, Tassetta watches your sales live, prepares every return, walks it through Expert sign-off → Client approval → Payment → Filed, and archives the evidence.',
  alternates: { canonical: '/how-it-works' },
  openGraph: {
    title: 'How Tassetta works',
    description:
      'Onboard once. Nexus tracked live. Each return goes Expert sign-off → Client approval → Payment → Filed. Evidence archived for 7 years.',
    url: '/how-it-works',
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
  fontSize: 'clamp(28px,4vw,46px)',
  lineHeight: 1.07,
  letterSpacing: '-0.02em',
  color: T.ink,
  margin: '0 0 24px',
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
  fontSize: 17,
  lineHeight: 1.6,
  color: T.body,
  margin: 0,
};
const mono: React.CSSProperties = {
  fontFamily: 'ui-monospace, "JetBrains Mono", Menlo, monospace',
  fontVariantNumeric: 'tabular-nums',
};

function StageBadge({ n, label, state }: { n: string; label: string; state: 'done' | 'now' | 'todo' }) {
  const c =
    state === 'done'
      ? { bg: T.primary, ring: 'transparent', txt: '#fff' }
      : state === 'now'
      ? { bg: '#fff', ring: T.primary, txt: T.primary }
      : { bg: 'transparent', ring: '#cdd8d4', txt: T.mute };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
      <span
        style={{
          width: 26,
          height: 26,
          borderRadius: 9999,
          background: c.bg,
          border: `1.5px solid ${c.ring === 'transparent' ? c.bg : c.ring}`,
          color: c.txt,
          fontFamily: 'var(--font-manrope), Manrope, sans-serif',
          fontWeight: 800,
          fontSize: 12,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 'none',
        }}
        aria-hidden
      >
        {state === 'done' ? '✓' : n}
      </span>
      <span style={{ ...mono, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: state === 'todo' ? T.mute : T.ink, whiteSpace: 'nowrap' }}>
        {label}
      </span>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section style={{ background: T.canvasSoft, padding: 'clamp(48px,7vw,88px) 0' }}>
        <div style={container}>
          <p style={eyebrow}>How it works</p>
          <h1 style={{ ...h1, maxWidth: 820 }}>Onboard once. Then it runs.</h1>
          <p style={{ ...lede, maxWidth: 760 }}>
            Setup takes an afternoon. From then on, your sales sync live, an expert prepares every return, you approve
            in one click, and the archive fills itself.
          </p>
        </div>
      </section>

      {/* ============ STAGE 1 — ONBOARD ============ */}
      <section style={{ background: '#fff', padding: 'clamp(56px,8vw,96px) 0' }}>
        <div style={container}>
          <div style={{ maxWidth: 820, marginBottom: 40 }}>
            <p style={eyebrow}>Stage 1 · Onboard</p>
            <h2 style={h2}>An afternoon. Eight boxes. Done.</h2>
            <p style={body}>
              You get a Client Portal with a readiness checklist. Ticking these once is what turns Tassetta from a
              signed contract into a running compliance function.
            </p>
          </div>
          <div
            className="t-2col"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.05fr',
              gap: 'clamp(28px,4vw,56px)',
              alignItems: 'start',
            }}
          >
            {/* Left: what you do */}
            <div>
              <ol
                style={{
                  listStyle: 'none',
                  counterReset: 'ck',
                  margin: 0,
                  padding: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                  gap: 14,
                }}
              >
                {[
                  'Entity details',
                  'FEIN and owner/officer data',
                  'Shopify access',
                  'Marketplace channel list',
                  'Bank / payment authorization',
                  'Physical presence facts',
                  'Prior registrations',
                  'State portal credentials',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '20px 1fr',
                      gap: 10,
                      alignItems: 'baseline',
                      counterIncrement: 'ck',
                      fontSize: 15,
                      color: T.body,
                      lineHeight: 1.45,
                    }}
                  >
                    <span
                      aria-hidden
                      style={{
                        ...mono,
                        fontSize: 11,
                        color: T.primary,
                        letterSpacing: '0.08em',
                      }}
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
              <p style={{ ...body, marginTop: 28, maxWidth: 480 }}>
                <strong style={{ color: T.ink }}>The result:</strong> the first month&rsquo;s return can run without
                you being pulled into a status meeting.
              </p>
            </div>

            {/* Right: portal readiness mock */}
            <div
              style={{
                background: T.canvasSoft,
                borderRadius: 20,
                padding: 20,
                boxShadow: '0 24px 60px -32px rgba(15,27,26,0.28)',
              }}
              aria-label="Client portal — Client readiness mock"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
                <span style={{ ...mono, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.mute }}>
                  Client portal · onboarding
                </span>
                <span style={{ ...mono, fontSize: 11, letterSpacing: '0.08em', color: T.primary, background: T.pale, padding: '3px 8px', borderRadius: 9999 }}>
                  63% complete
                </span>
              </div>
              <div style={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontWeight: 800, fontSize: 22, color: T.ink, marginBottom: 14 }}>
                Client readiness
              </div>
              <div style={{ height: 6, background: '#e6ece9', borderRadius: 9999, overflow: 'hidden', marginBottom: 18 }}>
                <div style={{ width: '63%', height: '100%', background: T.primary }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  ['Entity details', 'LLC', 'Approved'],
                  ['FEIN and owner/officer data', 'Verified', 'Approved'],
                  ['Shopify access', 'OAuth connected', 'Approved'],
                  ['Marketplace channel list', 'Client to confirm Amazon / Walmart', 'Needed'],
                  ['Bank / payment authorization', 'ACH verification failed', 'Needed'],
                  ['Physical presence facts', 'No warehouses', 'Approved'],
                  ['Prior registrations', 'GA and IL active', 'Approved'],
                  ['State portal credentials', 'IL account delegate missing', 'Needed'],
                ].map(([label, detail, status]) => {
                  const isDone = status === 'Approved';
                  return (
                    <div
                      key={label}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '20px 1fr auto',
                        alignItems: 'center',
                        gap: 12,
                        padding: '12px 14px',
                        background: '#fff',
                        borderRadius: 10,
                        border: '1px solid #e6ece9',
                      }}
                    >
                      <span
                        aria-hidden
                        style={{
                          width: 16,
                          height: 16,
                          borderRadius: 9999,
                          background: isDone ? T.primary : 'transparent',
                          border: isDone ? 'none' : `1.5px solid #b9ccc6`,
                          color: '#fff',
                          fontSize: 10,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                          fontWeight: 800,
                        }}
                      >
                        {isDone ? '✓' : ''}
                      </span>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 14, fontWeight: 600, color: T.ink }}>{label}</div>
                        <div style={{ ...mono, fontSize: 12, color: T.mute }}>{detail}</div>
                      </div>
                      <span
                        style={{
                          ...mono,
                          fontSize: 11,
                          letterSpacing: '0.06em',
                          color: isDone ? T.primary : '#a67512',
                          background: isDone ? T.pale : '#fbecc9',
                          padding: '3px 10px',
                          borderRadius: 9999,
                          textTransform: 'uppercase',
                        }}
                      >
                        {status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STAGE 2 — CONTINUOUS ============ */}
      <section style={{ background: T.canvasSoft, padding: 'clamp(56px,8vw,96px) 0' }}>
        <div style={container}>
          <div style={{ maxWidth: 820, marginBottom: 40 }}>
            <p style={eyebrow}>Stage 2 · Live, continuously</p>
            <h2 style={h2}>Your sales sync. Your nexus updates. Your calendar populates.</h2>
            <p style={body}>
              After onboarding, the platform runs on its own. Nothing here is a manual monthly ritual.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              {
                head: 'Data imports',
                body:
                  'Shopify direct API + CSV backup. Stripe Tax, Amazon, Walmart, Etsy, TikTok Shop, PayPal, QuickBooks, Xero. Orders, refunds, and marketplace-remit flags pull in continuously.',
              },
              {
                head: 'Nexus tracking',
                body:
                  'All 50 states and DC, watched live against your sales and transactions. Threshold rule changes tracked so your position never runs on stale rules.',
              },
              {
                head: 'Filing calendar',
                body:
                  'Every obligation, per state, on the frequency each state assigned you — populated automatically as soon as you register. Overdue, due-soon, upcoming, filed — one view.',
              },
            ].map((c) => (
              <div key={c.head} style={{ background: '#fff', borderRadius: 20, padding: 'clamp(22px,3vw,30px)' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                    fontWeight: 800,
                    fontSize: 20,
                    letterSpacing: '-0.01em',
                    color: T.ink,
                    margin: '0 0 10px',
                  }}
                >
                  {c.head}
                </h3>
                <p style={{ ...body, fontSize: 15, lineHeight: 1.55 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STAGE 3 — PER RETURN ============ */}
      <section style={{ background: '#fff', padding: 'clamp(56px,8vw,96px) 0' }}>
        <div style={container}>
          <div style={{ maxWidth: 820, marginBottom: 40 }}>
            <p style={eyebrow}>Stage 3 · Every filing period</p>
            <h2 style={h2}>Every return goes through four stages. One is yours.</h2>
            <p style={body}>
              Same shape every month, per state. A workpaper gets built, an expert signs off, you approve, we pay and
              file. The one stage where you touch it is the approval.
            </p>
          </div>

          {/* Stage progress rail */}
          <div
            style={{
              background: T.canvasSoft,
              borderRadius: 20,
              padding: '22px 24px',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: 12,
              marginBottom: 24,
            }}
          >
            <StageBadge n="1" label="Expert sign-off" state="done" />
            <StageBadge n="2" label="Client approval" state="done" />
            <StageBadge n="3" label="Payment" state="now" />
            <StageBadge n="4" label="Filed" state="todo" />
          </div>

          <div
            className="t-2col"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.05fr',
              gap: 'clamp(28px,4vw,56px)',
              alignItems: 'start',
            }}
          >
            {/* Left: the 4 stages */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                {
                  n: '01',
                  head: 'Expert sign-off',
                  body:
                    'A Tassetta tax expert prepares the return and reconciles it against the tax you actually collected. Variances get resolved before you see it — a mistaxed invoice, a stale rate, an exemption that does not hold. What lands in your portal is clean.',
                },
                {
                  n: '02',
                  head: 'Client approval',
                  body:
                    'You get a Filing to approve packet: Gross sales, Net taxable, Exempt, Marketplace, Tax collected, Expected liability, Variance. One click approves it. Everything under it is downloadable as the workpaper CSV.',
                },
                {
                  n: '03',
                  head: 'Payment',
                  body:
                    'ACH runs on the schedule the state assigned you. If it fails, we surface it as an exception on your portal and on the expert workbench — with the reason and the fix — until it clears.',
                },
                {
                  n: '04',
                  head: 'Filed',
                  body:
                    'Confirmation number lands in the archive alongside the workpaper, your approval, and the expert sign-off. Every filing, every state, every period — kept for seven years.',
                },
              ].map((s) => (
                <div key={s.n} style={{ background: T.canvasSoft, borderRadius: 20, padding: 'clamp(22px,3vw,28px)', display: 'grid', gridTemplateColumns: '56px 1fr', gap: 18 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                      fontWeight: 800,
                      fontSize: 32,
                      color: T.primary,
                      lineHeight: 1,
                    }}
                  >
                    {s.n}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                        fontWeight: 800,
                        fontSize: 22,
                        letterSpacing: '-0.01em',
                        color: T.ink,
                        margin: '0 0 8px',
                      }}
                    >
                      {s.head}
                    </h3>
                    <p style={{ ...body, fontSize: 15.5, lineHeight: 1.55 }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: workpaper mock */}
            <div
              style={{
                background: T.canvasSoft,
                borderRadius: 20,
                padding: 20,
                boxShadow: '0 24px 60px -32px rgba(15,27,26,0.28)',
              }}
              aria-label="Return workpaper mock"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                <span style={{ ...mono, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.mute }}>
                  Client portal · filing to approve
                </span>
                <span style={{ ...mono, fontSize: 11, letterSpacing: '0.06em', color: '#a67512', background: '#fbecc9', padding: '3px 10px', borderRadius: 9999, textTransform: 'uppercase' }}>
                  Payment failed
                </span>
              </div>
              <div style={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontWeight: 800, fontSize: 22, color: T.ink, marginBottom: 2 }}>
                GA · May 2026
              </div>
              <div style={{ ...mono, fontSize: 12, color: T.mute, marginBottom: 18 }}>Sales and Use Tax Return</div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
                {[
                  ['Gross sales (H)', '$38,200'],
                  ['Net taxable (J)', '$36,770'],
                  ['Exempt (I)', '$0'],
                  ['Tax collected (K)', '$2,932'],
                ].map(([k, v]) => (
                  <div key={k} style={{ background: '#fff', border: '1px solid #e6ece9', borderRadius: 10, padding: '10px 12px' }}>
                    <div style={{ ...mono, fontSize: 10.5, letterSpacing: '0.08em', color: T.mute, textTransform: 'uppercase' }}>{k}</div>
                    <div style={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontWeight: 800, fontSize: 18, color: T.ink, ...mono }}>{v}</div>
                  </div>
                ))}
              </div>

              <div style={{ background: T.pale, border: `1px solid ${T.primary}`, borderRadius: 12, padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontWeight: 700, color: T.ink }}>Expected liability</span>
                <span style={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontWeight: 800, fontSize: 22, color: T.ink, ...mono }}>$2,932</span>
              </div>

              <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, alignItems: 'center' }}>
                <StageBadge n="1" label="Expert" state="done" />
                <StageBadge n="2" label="Approval" state="done" />
                <StageBadge n="3" label="Payment" state="now" />
                <StageBadge n="4" label="Filed" state="todo" />
              </div>

              <div style={{ marginTop: 18, borderTop: '1px dashed #cdd8d4', paddingTop: 14, ...mono, fontSize: 11.5, color: T.mute, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span>Evidence attached: Shopify source data · Normalized transaction file · Rate calculation workbook · Expert signoff</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STAGE 4 — FOREVER ============ */}
      <section style={{ background: T.darkPanel, padding: 'clamp(56px,8vw,96px) 0' }}>
        <div style={container}>
          <div style={{ maxWidth: 820 }}>
            <p style={{ ...eyebrow, color: T.mute }}>Stage 4 · Forever</p>
            <h2 style={{ ...h2, color: '#fff' }}>Notices answered. Evidence kept. Nothing lost between filings.</h2>
            <p style={{ ...body, color: '#c7d2cf', fontSize: 'clamp(16px,1.6vw,19px)', margin: '0 0 16px' }}>
              When a state writes back, we intake the notice, match it to the filing period, draft the response, you
              approve, we close it out. The whole exchange is logged.
            </p>
            <p style={{ ...body, color: '#c7d2cf', fontSize: 'clamp(16px,1.6vw,19px)', margin: 0 }}>
              Every workpaper, approval, and confirmation lives in a tamper-evident archive kept for seven years. When
              an auditor calls, or a buyer&rsquo;s diligence asks for your history, the answer is a folder.
            </p>
          </div>

          {/* Controls-enforced badge, from the app */}
          <div
            style={{
              marginTop: 40,
              border: `1px solid #223330`,
              borderRadius: 16,
              padding: 24,
              background: 'rgba(255,255,255,0.02)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 18,
            }}
          >
            <div style={{ gridColumn: '1 / -1', marginBottom: 4 }}>
              <span style={{ ...mono, fontSize: 11, letterSpacing: '0.12em', color: T.mute, textTransform: 'uppercase' }}>
                Controls enforced
              </span>
            </div>
            {[
              ['Expert sign-off', 'before any return reaches client approval'],
              ['Client approval', 'before any return can be filed'],
              ['7-year evidence retention', 'per filing, tamper-evident'],
            ].map(([h, s]) => (
              <div key={h}>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{h}</div>
                <div style={{ color: '#c7d2cf', fontSize: 14 }}>{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CLOSING CTA ============ */}
      <section style={{ background: T.canvasSoft, padding: 'clamp(56px,8vw,96px) 0' }}>
        <div style={container}>
          <div style={{ background: T.ink, borderRadius: 28, padding: 'clamp(36px,5vw,72px)', textAlign: 'center' }}>
            <h2 style={{ ...h2, color: '#fff', margin: '0 0 20px' }}>Start with the free study.</h2>
            <p style={{ color: '#c7d2cf', fontSize: 'clamp(16px,1.7vw,19px)', lineHeight: 1.6, margin: '0 auto 32px', maxWidth: 640 }}>
              One CSV. We tell you the states you already owe in, where you are about to cross, and what compliance
              would actually cost.
            </p>
            <a
              href="/nexus-study"
              className="th-9"
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
