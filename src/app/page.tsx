import type { Metadata } from 'next';

/*
 * Home page — rewritten in the Fletch (Anthony Pierre / Rob Kaminski) voice.
 * Structure follows the classic PMM stack: problem → cause → solution → capabilities → contrast → proof → price → CTA.
 * Every color, spacing token, font, and responsive class here comes from the design system;
 * only the copy and section rhythm are new.
 */

export const metadata: Metadata = {
  description:
    'Managed US sales tax for Shopify and multi-channel brands. Live nexus across 50 states, expert-prepared returns, one-click approval, filings and notices handled.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Tassetta — Sales tax, handled. Not handed back to you.',
    description:
      'Live nexus across 50 states. Expert-prepared returns. One-click approval. Tassetta files, remits, and archives every return, so sales tax stops eating your team.',
    url: '/',
    type: 'website',
  },
};

// Design tokens — keep in sync with globals.css / DESIGN-wise.
const T = {
  ink: '#0f1b1a',
  body: '#41504d',
  mute: '#7a8783',
  primary: '#0d7d72',
  primaryActive: '#0a655c',
  pale: '#d9ede9',
  canvas: '#ffffff',
  canvasSoft: '#eef2f0',
  darkPanel: '#0a1413',
} as const;

const container = { maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px,4vw,32px)' } as const;
const eyebrow = {
  fontWeight: 600 as const,
  fontSize: 13,
  letterSpacing: '0.08em',
  textTransform: 'uppercase' as const,
  color: T.mute,
  margin: '0 0 16px',
};
const h1: React.CSSProperties = {
  fontFamily: 'var(--font-manrope), Manrope, sans-serif',
  fontWeight: 800,
  fontSize: 'clamp(40px,7vw,82px)',
  lineHeight: 1.02,
  letterSpacing: '-0.025em',
  color: T.ink,
  margin: '0 0 28px',
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
  margin: '0 0 36px',
};
const body: React.CSSProperties = {
  fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
  fontSize: 17,
  lineHeight: 1.62,
  color: T.body,
  margin: 0,
};
const ctaPrimary: React.CSSProperties = {
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
  transition: 'background-color 140ms ease',
};
const ctaGhost: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#fff',
  color: T.ink,
  border: `1px solid ${T.ink}`,
  fontWeight: 600,
  fontSize: 16,
  padding: '15px 28px',
  borderRadius: 24,
  textDecoration: 'none',
  transition: 'background-color 140ms ease, color 140ms ease',
};
const chip: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  background: T.pale,
  color: T.darkPanel,
  fontWeight: 600,
  fontSize: 13,
  padding: '6px 14px',
  borderRadius: 9999,
  marginBottom: 28,
};

function Card({ children, dark = false, style }: { children: React.ReactNode; dark?: boolean; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        background: dark ? T.ink : '#fff',
        borderRadius: 24,
        padding: 'clamp(24px,3vw,36px)',
        color: dark ? '#c7d2cf' : T.body,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section style={{ background: T.canvasSoft, padding: 'clamp(56px,9vw,112px) 0 clamp(48px,7vw,88px)' }}>
        <div style={container}>
          <div style={{ maxWidth: 920 }}>
            <span style={chip}>Managed US sales tax compliance</span>
            <h1 style={h1}>Sales tax, handled. Not handed back to you.</h1>
            <p style={{ ...lede, maxWidth: 760 }}>
              A tax team runs your US sales tax end to end. The platform watches where you owe across all 50 states.
              An expert prepares every return. You approve in one click. We file, remit, and keep the receipts.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
              <a href="/nexus-study" style={ctaPrimary} className="th-1">
                Get your free nexus study
              </a>
              <a href="/how-it-works" style={ctaGhost} className="th-2">
                See how it works
              </a>
            </div>
            <p style={{ ...body, fontSize: 14, color: T.mute, margin: '18px 0 0', maxWidth: 560 }}>
              One CSV export from Shopify. In 3 to 5 business days, a report of every state you owe in, are about to,
              and what it would take to get clean.
            </p>
          </div>
        </div>
      </section>

      {/* ============ VIDEO ============ */}
      <section style={{ background: T.canvasSoft, padding: '0 0 clamp(48px,7vw,80px)' }}>
        <div style={container}>
          <div
            style={{
              background: '#fff',
              borderRadius: 24,
              padding: 'clamp(16px,2vw,22px)',
              boxShadow: '0 24px 60px -28px rgba(15,27,26,0.28)',
            }}
          >
            <video
              src="/videos/explainer-30s.mp4"
              controls
              playsInline
              muted
              autoPlay
              loop
              preload="metadata"
              aria-label="Tassetta — 30-second explainer"
              style={{
                width: '100%',
                display: 'block',
                borderRadius: 14,
                background: '#f4f7f5',
                aspectRatio: '16 / 9',
              }}
            >
              Your browser doesn&rsquo;t support video playback.{' '}
              <a href="/videos/explainer-30s.mp4" style={{ color: T.primary }}>
                Download the explainer
              </a>
              .
            </video>
          </div>
        </div>
      </section>

      {/* ============ THE PROBLEM ============ */}
      <section style={{ background: '#fff', padding: 'clamp(56px,8vw,104px) 0' }}>
        <div style={container}>
          <div style={{ maxWidth: 860, marginBottom: 48 }}>
            <p style={eyebrow}>The problem</p>
            <h2 style={h2}>Right now, you probably owe sales tax in states you have never registered in.</h2>
            <p style={body}>
              The moment your sales crossed a threshold in another state, you got a filing obligation there.
              Nothing in Shopify told you. Here is how the exposure gets built.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              {
                num: '01',
                head: 'A threshold gets crossed. Nobody says a word.',
                body: 'Most states register you at $100,000 in sales or 200 transactions. Ship into 30 states on Shopify and you have likely tripped several — with no alert, no email, no dashboard flag.',
              },
              {
                num: '02',
                head: 'Uncollected tax compounds out of your margin.',
                body: 'From that day on, tax you did not collect is tax you owe. Add penalties. Add interest. Every month you do not register, the number grows and it is coming out of you, not the customer.',
              },
              {
                num: '03',
                head: 'Software and CPAs both leave the work with you.',
                body: 'Software gives you a calculator and a dashboard — you still file. A CPA files but works blind, with no live view. So it sits on the someday list until a state or a diligence question forces it up.',
              },
            ].map((p) => (
              <div key={p.num} style={{ background: T.canvasSoft, borderRadius: 24, padding: 'clamp(24px,3vw,32px)' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                    fontWeight: 800,
                    fontSize: 14,
                    color: T.primary,
                  }}
                >
                  {p.num}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                    fontWeight: 800,
                    fontSize: 20,
                    letterSpacing: '-0.01em',
                    color: T.ink,
                    margin: '10px 0 12px',
                  }}
                >
                  {p.head}
                </h3>
                <p style={{ ...body, fontSize: 15, lineHeight: 1.55 }}>{p.body}</p>
              </div>
            ))}
          </div>
          <p style={{ ...body, marginTop: 40, maxWidth: 860 }}>
            <strong style={{ color: T.ink }}>The result:</strong> brands usually learn the expensive way — a state
            notice, or a question in due diligence that stalls a fundraise or an acquisition.
          </p>
        </div>
      </section>

      {/* ============ HOW WE SOLVE IT ============ */}
      <section style={{ background: T.canvasSoft, padding: 'clamp(56px,8vw,104px) 0' }}>
        <div style={container}>
          <div style={{ maxWidth: 820, marginBottom: 48 }}>
            <p style={eyebrow}>How we solve it</p>
            <h2 style={h2}>Three moves. You approve in one click.</h2>
            <p style={body}>
              Tassetta is a tax team plus the platform they run on. Automation handles the busywork. A person handles
              the filing. You handle nothing you should not be handling.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              {
                num: '01',
                head: 'We pull your live sales.',
                body: 'Shopify connects in one click. Amazon, Walmart, Etsy, TikTok Shop, Stripe, and PayPal pull in the same way. Orders and refunds sync continuously, so the nexus math runs on what you are actually selling.',
              },
              {
                num: '02',
                head: 'An expert prepares every return.',
                body: 'When a return is due, a Tassetta tax expert prepares it and reconciles it against the tax you actually collected. Anything off — an invoice taxed wrong, a stale rate, an exemption that does not hold — is resolved before it reaches you.',
              },
              {
                num: '03',
                head: 'You approve. We file, remit, archive.',
                body: 'One click. We file on each state’s schedule, remit the money, and drop the workpaper, your approval, and the confirmation number into a tamper-evident archive kept for seven years.',
              },
            ].map((s) => (
              <div
                key={s.num}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '72px 1fr',
                  gap: 'clamp(16px,3vw,32px)',
                  alignItems: 'start',
                  background: '#fff',
                  borderRadius: 24,
                  padding: 'clamp(24px,3vw,36px)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(28px,4vw,44px)',
                    color: T.primary,
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                      fontWeight: 800,
                      fontSize: 'clamp(22px,2.6vw,30px)',
                      letterSpacing: '-0.02em',
                      color: T.ink,
                      margin: '0 0 12px',
                    }}
                  >
                    {s.head}
                  </h3>
                  <p style={body}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ YOUR PORTAL ============ */}
      <section style={{ background: '#fff', padding: 'clamp(56px,8vw,104px) 0' }}>
        <div style={container}>
          <div className="t-2col" style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }}>
            <div>
              <p style={eyebrow}>Your view</p>
              <h2 style={h2}>You sign in and see one page.</h2>
              <p style={{ ...body, marginBottom: 20 }}>
                Your Client Portal shows exactly what you need to see: your onboarding readiness, the return waiting
                for your approval, your live nexus, and the states you&rsquo;re registered in. That&rsquo;s it.
              </p>
              <p style={body}>
                Everything else — the workbench, the notice workflow, the whole-book reports — runs on our side. You
                will never open it. You will never need to.
              </p>
            </div>
            <div
              style={{
                background: T.canvasSoft,
                borderRadius: 24,
                padding: 'clamp(12px,1.6vw,18px)',
                boxShadow: '0 24px 60px -28px rgba(15,27,26,0.28)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/app/client-portal.jpg"
                alt="Client Portal — Client readiness checklist and the current filing packet waiting for your one-click approval."
                loading="lazy"
                decoding="async"
                width={1512}
                height={949}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: 14,
                  aspectRatio: '1512 / 949',
                }}
              />
              <p style={{ ...body, fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12, color: T.mute, margin: '12px 6px 4px', letterSpacing: '0.04em' }}>
                Client Portal — your only screen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTRAST ============ */}
      <section style={{ background: '#fff', padding: 'clamp(56px,8vw,104px) 0', borderTop: '1px solid #e6ece9' }}>
        <div style={container}>
          <div style={{ maxWidth: 820, marginBottom: 48 }}>
            <p style={eyebrow}>What changes for you</p>
            <h2 style={h2}>You watch it. We file it.</h2>
            <p style={body}>
              A live view for you. A person on the hook for the filing. The two things sales tax has never given you at
              the same time.
            </p>
          </div>
          <div className="t-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <Card>
              <span
                style={{
                  ...chip,
                  marginBottom: 20,
                }}
              >
                You — the live view
              </span>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }}
              >
                {[
                  'See where you have crossed, where you are close, where you are clear — updated live.',
                  'See every upcoming return, per state, before it is due.',
                  'Approve each return in one click, from your inbox or the dashboard.',
                  'Pull a monthly report and an audit archive whenever a buyer or auditor asks.',
                ].map((it, i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span
                      style={{
                        flex: 'none',
                        width: 22,
                        height: 22,
                        borderRadius: 9999,
                        background: T.pale,
                        color: T.primary,
                        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                        fontWeight: 800,
                        fontSize: 13,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 2,
                      }}
                    >
                      ✓
                    </span>
                    <span style={{ ...body, fontSize: 16 }}>{it}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card dark>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'rgba(217,237,233,0.16)',
                  color: T.pale,
                  fontWeight: 600,
                  fontSize: 13,
                  padding: '6px 14px',
                  borderRadius: 9999,
                  marginBottom: 20,
                }}
              >
                We — the accountable filing
              </span>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }}
              >
                {[
                  'A tax expert reviews every return against what you actually collected.',
                  'We register you in new states as you cross, and track it through to approved.',
                  'We file, remit, and answer any state notice that comes back.',
                  'We keep every workpaper, approval, and confirmation for seven years.',
                ].map((it, i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span
                      style={{
                        flex: 'none',
                        width: 22,
                        height: 22,
                        borderRadius: 9999,
                        background: 'rgba(217,237,233,0.16)',
                        color: T.pale,
                        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                        fontWeight: 800,
                        fontSize: 13,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 2,
                      }}
                    >
                      ✓
                    </span>
                    <span style={{ fontSize: 16, lineHeight: 1.6, color: '#c7d2cf' }}>{it}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <p style={{ ...body, marginTop: 40, maxWidth: 920 }}>
            Avalara and TaxJar sell a calculator. A CPA files without the calculator. Tassetta is both, and the person
            doing the filing is ours, not yours.
          </p>
        </div>
      </section>

      {/* ============ CAPABILITIES ============ */}
      <section style={{ background: T.canvasSoft, padding: 'clamp(56px,8vw,104px) 0' }}>
        <div style={container}>
          <div style={{ maxWidth: 860, marginBottom: 48 }}>
            <p style={eyebrow}>What Tassetta handles</p>
            <h2 style={h2}>Everything from &ldquo;you might owe&rdquo; to &ldquo;it is filed and archived.&rdquo;</h2>
            <p style={body}>The whole lifecycle of a sales tax obligation. Five capabilities. One team.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              {
                num: '01',
                slug: 'nexus',
                head: 'Nexus monitoring',
                body: 'All 50 states and DC, watched live against your sales. You hear from us before the state does.',
              },
              {
                num: '02',
                slug: 'registrations',
                head: 'State registrations',
                body: 'Cross a threshold, we file the registration and track it through to approved.',
              },
              {
                num: '03',
                slug: 'filing',
                head: 'Filing and remittance',
                body: 'Expert-prepared, reconciled to collected tax, filed and remitted on each state’s schedule.',
              },
              {
                num: '04',
                slug: 'notices',
                head: 'Notices and audits',
                body: 'A notice arrives, we read it, draft the response, log the exchange, close it out.',
              },
              {
                num: '05',
                slug: 'exemptions',
                head: 'Exemption certificates',
                body: 'Wholesale and exempt sales collected, validated, watched for expiry — no audit-time guessing.',
              },
            ].map((c) => (
              <a
                key={c.num}
                href={`/what-we-handle/${c.slug}`}
                className="th-3"
                style={{
                  textDecoration: 'none',
                  background: '#fff',
                  borderRadius: 24,
                  padding: 30,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                    fontWeight: 800,
                    fontSize: 14,
                    color: T.primary,
                  }}
                >
                  {c.num}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                    fontWeight: 800,
                    fontSize: 21,
                    letterSpacing: '-0.01em',
                    color: T.ink,
                    margin: 0,
                  }}
                >
                  {c.head}
                </h3>
                <p style={{ ...body, fontSize: 15, lineHeight: 1.55 }}>{c.body}</p>
                <span style={{ fontWeight: 600, fontSize: 14, color: T.ink, marginTop: 4 }}>Learn more →</span>
              </a>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <a href="/what-we-handle" className="th-7" style={{ fontWeight: 600, fontSize: 15, color: T.primary, textDecoration: 'none' }}>
              See everything we handle →
            </a>
          </div>
        </div>
      </section>

      {/* ============ MARKETPLACE-AWARE ============ */}
      <section style={{ background: '#fff', padding: 'clamp(56px,8vw,104px) 0' }}>
        <div style={container}>
          <div className="t-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }}>
            <div>
              <p style={eyebrow}>Marketplace-aware</p>
              <h2 style={h2}>Amazon collects its tax. You file yours. We keep them apart.</h2>
              <p style={{ ...body, marginBottom: 20 }}>
                Amazon, Walmart, Etsy, and TikTok Shop already collect and remit as the facilitator. Count that tax as
                yours and you either over-remit or your books stop matching.
              </p>
              <p style={body}>
                Tassetta separates facilitator-collected sales from your direct Shopify sales automatically. You file
                on what is actually yours. You never pay it twice.
              </p>
            </div>
            <div style={{ background: T.canvasSoft, borderRadius: 24, padding: 'clamp(20px,2.4vw,30px)', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'Direct Shopify sales', tag: 'Yours to file', tagBg: T.pale, tagColor: T.primary },
                { label: 'Amazon · Walmart · Etsy', tag: 'Facilitator remits', tagBg: '#fff', tagColor: T.body },
                { label: 'TikTok Shop · Stripe · PayPal', tag: 'Facilitator remits', tagBg: '#fff', tagColor: T.body },
              ].map((r) => (
                <div key={r.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px', borderRadius: 14, background: '#fff' }}>
                  <span style={{ fontWeight: 600, fontSize: 15, color: T.ink }}>{r.label}</span>
                  <span style={{ fontWeight: 600, fontSize: 13, color: r.tagColor, background: r.tagBg, padding: '5px 12px', borderRadius: 9999 }}>{r.tag}</span>
                </div>
              ))}
              <p style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12, color: T.mute, margin: '6px 2px 0' }}>
                Separated automatically — no double-counting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST BAND (dark) ============ */}
      <section style={{ background: T.darkPanel, padding: 'clamp(56px,8vw,104px) 0' }}>
        <div style={container}>
          <div style={{ maxWidth: 820 }}>
            <p style={eyebrow}>Proof and trust</p>
            <h2 style={{ ...h2, color: '#fff' }}>Built for the day someone checks your work.</h2>
            <p style={{ ...body, color: '#c7d2cf', fontSize: 'clamp(16px,1.6vw,19px)', margin: '0 0 22px' }}>
              Every return carries a workpaper: gross, taxable, exempt, and marketplace sales, the expected liability
              against what you collected, and any variance we caught. Every approval is recorded. Every filing carries
              a confirmation number. All of it lives in a tamper-evident archive for seven years.
            </p>
            <p style={{ ...body, color: '#c7d2cf', fontSize: 'clamp(16px,1.6vw,19px)', margin: 0 }}>
              When an auditor calls, or a buyer&rsquo;s diligence team asks for your sales tax history, the answer is a
              folder — not a fire drill.
            </p>
          </div>
          <div style={{ marginTop: 44, border: '1px dashed #41504d', borderRadius: 16, padding: 28 }}>
            <p style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12, letterSpacing: '0.04em', color: T.mute, margin: '0 0 10px' }}>
              [ PLACEHOLDER — customer logos, pending permission to use ]
            </p>
            <p style={{ color: '#c7d2cf', fontSize: 16, lineHeight: 1.55, margin: 0 }}>
              Used by Shopify brands doing seven and eight figures across multiple states.{' '}
              <span style={{ color: T.mute }}>Swap for named customers the moment you can.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ============ PRICING TEASER ============ */}
      <section style={{ background: '#fff', padding: 'clamp(56px,8vw,104px) 0' }}>
        <div style={container}>
          <div style={{ maxWidth: 760 }}>
            <p style={eyebrow}>Pricing</p>
            <h2 style={h2}>Flat fee per state. Your bill does not spike when you have a good month.</h2>
            <p style={{ ...body, fontSize: 'clamp(16px,1.6vw,19px)', margin: '0 0 28px' }}>
              A monthly base plus a flat fee per state you are registered in. No per-transaction meter. No surprise
              invoice after a launch or Black Friday.
            </p>
            <a href="/pricing" className="th-8" style={{ fontWeight: 600, fontSize: 15, color: T.primary, textDecoration: 'none' }}>
              See pricing →
            </a>
          </div>
        </div>
      </section>

      {/* ============ CLOSING CTA ============ */}
      <section style={{ background: T.canvasSoft, padding: 'clamp(56px,8vw,104px) 0' }}>
        <div style={container}>
          <div style={{ background: T.ink, borderRadius: 28, padding: 'clamp(36px,5vw,72px)', textAlign: 'center' }}>
            <h2
              style={{
                fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(30px,4.4vw,52px)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: '#fff',
                margin: '0 0 20px',
              }}
            >
              Find out where you stand. It is free.
            </h2>
            <p style={{ fontSize: 'clamp(16px,1.7vw,19px)', lineHeight: 1.6, color: '#c7d2cf', margin: '0 auto 32px', maxWidth: 680 }}>
              One CSV export from Shopify. We tell you which states you already owe in, where you are about to cross,
              and what getting compliant would actually cost. No call required to get the report.
            </p>
            <a href="/nexus-study" style={ctaPrimary} className="th-9">
              Get your free nexus study
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
