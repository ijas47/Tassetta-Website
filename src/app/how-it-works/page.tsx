import type { Metadata } from 'next';

/*
 * /how-it-works. Dunford voice, grounded in the real product surfaces.
 * Structure: setup once, then the loop that runs every filing period,
 * then what happens after filing. The gate (CPA sign-off, then client
 * approval) is the point of the page.
 */

export const metadata: Metadata = {
 title: 'How it works',
 description:
 'Connect your channels once. Then every period: Tassetta calculates the return, a CPA verifies it, you approve it, and someone files it with the state.',
 alternates: { canonical: '/how-it-works' },
 openGraph: {
 title: 'How Tassetta works',
 description:
 'Connect once. Then every period: Tassetta calculates, a CPA verifies, you approve, a human files. Four steps, one of them yours.',
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
 warn: '#a67512',
 warnPale: '#fbecc9',
 pos: '#217a37',
 posPale: '#d3ecd8',
} as const;

const container = { maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px,4vw,32px)' } as const;
const mono = { fontFamily: 'ui-monospace, "JetBrains Mono", Menlo, monospace', fontVariantNumeric: 'tabular-nums' } as const;

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
 fontSize: 'clamp(21px,2.4vw,27px)',
 letterSpacing: '-0.018em',
 color: T.ink,
 margin: '0 0 10px',
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
 lineHeight: 1.62,
 color: T.body,
 margin: 0,
};

function Stage({ n, label, state }: { n: string; label: string; state: 'done' | 'now' | 'todo' }) {
 const c =
 state === 'done'
 ? { bg: T.primary, ring: T.primary, txt: '#fff' }
 : state === 'now'
 ? { bg: '#fff', ring: T.warn, txt: T.warn }
 : { bg: 'transparent', ring: '#cdd8d4', txt: T.mute };
 return (
 <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
 <span
 style={{
 width: 26,
 height: 26,
 borderRadius: 9999,
 background: c.bg,
 border: `1.5px solid ${c.ring}`,
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
 <span
 style={{
 ...mono,
 fontSize: 12,
 letterSpacing: '0.06em',
 textTransform: 'uppercase',
 color: state === 'todo' ? T.mute : T.ink,
 whiteSpace: 'nowrap',
 }}
 >
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
 <h1 style={{ ...h1, maxWidth: 860 }}>Set it up once. Then approve one thing a month.</h1>
 <p style={{ ...lede, maxWidth: 760 }}>
 Connecting your channels takes an afternoon. After that Tassetta measures nexus continuously,
 builds each return, has a CPA verify it and waits on you. The only recurring thing you do is
 read a packet and click approve.
 </p>
 </div>
 </section>

 {/* ============ SETUP ============ */}
 <section style={{ background: '#fff', padding: 'clamp(56px,8vw,96px) 0' }}>
 <div style={container}>
 <div style={{ maxWidth: 820, marginBottom: 40 }}>
 <p style={eyebrow}>Setup, once</p>
 <h2 style={h2}>Eight things, then it runs on its own.</h2>
 <p style={body}>
 Your portal opens on a readiness checklist. Clearing it is what turns a signed contract into a
 running compliance function. Most of it is information you already have.
 </p>
 </div>
 <div
 className="t-2col"
 style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 'clamp(28px,4vw,56px)', alignItems: 'start' }}
 >
 <div>
 <ul
 style={{
 listStyle: 'none',
 margin: 0,
 padding: 0,
 display: 'grid',
 gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
 gap: 14,
 }}
 >
 {[
 'Entity details',
 'FEIN and officer data',
 'Shopify access',
 'Marketplace channels',
 'Bank authorization',
 'Physical presence facts',
 'Prior registrations',
 'State portal credentials',
 ].map((item) => (
 <li
 key={item}
 style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: 10, alignItems: 'baseline', fontSize: 15, color: T.body, lineHeight: 1.45 }}
 >
 <span aria-hidden style={{ ...mono, fontSize: 11, color: T.primary }}>
 ✓
 </span>
 <span>{item}</span>
 </li>
 ))}
 </ul>
 <p style={{ ...body, marginTop: 28, maxWidth: 480 }}>
 <strong style={{ color: T.ink }}>What this buys you:</strong> the first return can run without
 anyone scheduling a call to chase a missing document.
 </p>
 </div>

 <div
 style={{ background: T.canvasSoft, borderRadius: 20, padding: 20, boxShadow: '0 24px 60px -32px rgba(15,27,26,0.28)' }}
 aria-label="Client portal readiness checklist"
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
 ['Entity details', 'LLC', true],
 ['FEIN and owner/officer data', 'Verified', true],
 ['Shopify access', 'OAuth connected', true],
 ['Marketplace channel list', 'Confirm Amazon / Walmart', false],
 ['Bank/payment authorization', 'ACH verification failed', false],
 ['Physical presence facts', 'No warehouses', true],
 ['Prior registrations', 'GA and IL active', true],
 ['State portal credentials', 'IL delegate missing', false],
 ].map(([label, detail, done]) => (
 <div
 key={label as string}
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
 background: done ? T.primary : 'transparent',
 border: done ? 'none' : '1.5px solid #b9ccc6',
 color: '#fff',
 fontSize: 10,
 display: 'inline-flex',
 alignItems: 'center',
 justifyContent: 'center',
 fontFamily: 'var(--font-manrope), Manrope, sans-serif',
 fontWeight: 800,
 }}
 >
 {done ? '✓' : ''}
 </span>
 <div style={{ minWidth: 0 }}>
 <div style={{ fontSize: 14, fontWeight: 600, color: T.ink }}>{label as string}</div>
 <div style={{ ...mono, fontSize: 12, color: T.mute }}>{detail as string}</div>
 </div>
 <span
 style={{
 ...mono,
 fontSize: 11,
 letterSpacing: '0.06em',
 color: done ? T.pos : T.warn,
 background: done ? T.posPale : T.warnPale,
 padding: '3px 10px',
 borderRadius: 9999,
 textTransform: 'uppercase',
 }}
 >
 {done ? 'Approved' : 'Needed'}
 </span>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ============ ALWAYS ON ============ */}
 <section style={{ background: T.canvasSoft, padding: 'clamp(56px,8vw,96px) 0' }}>
 <div style={container}>
 <div style={{ maxWidth: 820, marginBottom: 40 }}>
 <p style={eyebrow}>Between filings</p>
 <h2 style={h2}>Nexus is measured continuously, not at quarter-end.</h2>
 <p style={body}>
 The difference between knowing in March and knowing in October is usually six figures of
 accrued liability. So none of this waits for a reporting cycle.
 </p>
 </div>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
 {[
 {
 head: 'Sales sync',
 body:
 'Shopify by direct API or CSV. Stripe Tax, Amazon, Walmart, Etsy, TikTok Shop, PayPal, QuickBooks and Xero alongside it. Orders, refunds and facilitator flags come in continuously.',
 },
 {
 head: 'Nexus recalculates',
 body:
 'Every state and DC, against the current dollar and transaction thresholds, with the rules dataset versioned so your position never runs on last year’s numbers.',
 },
 {
 head: 'The calendar fills itself',
 body:
 'Register in a state and its obligations appear on the filing calendar automatically, on the frequency that state assigned you, with due dates and projected liability.',
 },
 ].map((c) => (
 <div key={c.head} style={{ background: '#fff', borderRadius: 20, padding: 'clamp(22px,3vw,30px)' }}>
 <h3 style={{ ...h3, fontSize: 20 }}>{c.head}</h3>
 <p style={{ ...body, fontSize: 15, lineHeight: 1.55 }}>{c.body}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ============ THE LOOP ============ */}
 <section style={{ background: '#fff', padding: 'clamp(56px,8vw,96px) 0' }}>
 <div style={container}>
 <div style={{ maxWidth: 820, marginBottom: 40 }}>
 <p style={eyebrow}>Every filing period</p>
 <h2 style={h2}>Four stages. One of them is yours.</h2>
 <p style={body}>
 Same shape every period, in every state. A return cannot skip a stage, and the platform will not
 let it move without the one before it clearing first.
 </p>
 </div>

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
 <Stage n="1" label="CPA sign-off" state="done" />
 <Stage n="2" label="Your approval" state="done" />
 <Stage n="3" label="Payment" state="now" />
 <Stage n="4" label="Filed" state="todo" />
 </div>

 <div className="t-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 'clamp(28px,4vw,56px)', alignItems: 'start' }}>
 <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
 {[
 {
 n: '01',
 head: 'CPA sign-off',
 body:
 'The platform builds the workpaper and reconciles expected liability against what you actually collected. A named CPA reviews every exception it raises: variance outside tolerance, an unsupported resale certificate, a portal figure that disagrees with the calculation. They resolve each one and sign.',
 },
 {
 n: '02',
 head: 'Your approval',
 body:
 'The packet reaches your portal with gross sales, net taxable, exempt, marketplace, tax collected and expected liability all visible, and the full workpaper downloadable. One click approves it. You are the last gate before anything is filed in your name.',
 },
 {
 n: '03',
 head: 'Payment',
 body:
 'Remittance runs on the state’s schedule. If it fails, it surfaces as an open exception on your portal and in the workbench, with the reason attached, and stays there until it clears.',
 },
 {
 n: '04',
 head: 'Filed',
 body:
 'Someone at Tassetta submits it to the state portal, captures the confirmation number, and writes it to the archive next to the workpaper, the CPA sign-off and your approval. Seven years, per filing, per state.',
 },
 ].map((s) => (
 <div key={s.n} style={{ background: T.canvasSoft, borderRadius: 20, padding: 'clamp(22px,3vw,28px)', display: 'grid', gridTemplateColumns: '56px 1fr', gap: 18 }}>
 <span style={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontWeight: 800, fontSize: 32, color: T.primary, lineHeight: 1 }}>
 {s.n}
 </span>
 <div>
 <h3 style={{ ...h3, fontSize: 22 }}>{s.head}</h3>
 <p style={{ ...body, fontSize: 15.5, lineHeight: 1.55 }}>{s.body}</p>
 </div>
 </div>
 ))}
 </div>

 <div
 style={{ background: T.canvasSoft, borderRadius: 20, padding: 20, boxShadow: '0 24px 60px -32px rgba(15,27,26,0.28)' }}
 aria-label="Return packet awaiting approval"
 >
 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
 <span style={{ ...mono, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.mute }}>
 Client portal · filing to approve
 </span>
 <span style={{ ...mono, fontSize: 11, letterSpacing: '0.06em', color: T.warn, background: T.warnPale, padding: '3px 10px', borderRadius: 9999, textTransform: 'uppercase' }}>
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
 <div style={{ ...mono, fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontWeight: 800, fontSize: 18, color: T.ink }}>{v}</div>
 </div>
 ))}
 </div>

 <div style={{ background: T.pale, border: `1px solid ${T.primary}`, borderRadius: 12, padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
 <span style={{ fontWeight: 700, color: T.ink }}>Expected liability</span>
 <span style={{ ...mono, fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontWeight: 800, fontSize: 22, color: T.ink }}>$2,932</span>
 </div>

 <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, alignItems: 'center' }}>
 <Stage n="1" label="CPA" state="done" />
 <Stage n="2" label="Approved" state="done" />
 <Stage n="3" label="Payment" state="now" />
 <Stage n="4" label="Filed" state="todo" />
 </div>

 <div style={{ marginTop: 18, borderTop: '1px dashed #cdd8d4', paddingTop: 14, ...mono, fontSize: 11.5, color: T.mute }}>
 Evidence attached: Shopify source data · normalized transaction file · rate calculation workbook · CPA signoff
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ============ AFTER FILING ============ */}
 <section style={{ background: T.darkPanel, padding: 'clamp(56px,8vw,96px) 0' }}>
 <div style={container}>
 <div style={{ maxWidth: 820 }}>
 <p style={{ ...eyebrow, color: T.mute }}>After it is filed</p>
 <h2 style={{ ...h2, color: '#fff' }}>The part most tools stop caring about.</h2>
 <p style={{ ...body, color: '#c7d2cf', fontSize: 'clamp(16px,1.6vw,19px)', margin: '0 0 16px' }}>
 When a state writes back, the notice is matched to the exact return and period it concerns, the
 CPA who worked that return drafts the response, you approve it, and the whole exchange is logged
 against the filing.
 </p>
 <p style={{ ...body, color: '#c7d2cf', fontSize: 'clamp(16px,1.6vw,19px)', margin: 0 }}>
 Nothing about a filing lives in somebody&rsquo;s inbox. It lives in the archive, for seven years,
 with every input that produced it.
 </p>
 </div>
 </div>
 </section>

 {/* ============ CTA ============ */}
 <section style={{ background: T.canvasSoft, padding: 'clamp(56px,8vw,96px) 0' }}>
 <div style={container}>
 <div style={{ background: T.ink, borderRadius: 28, padding: 'clamp(36px,5vw,72px)', textAlign: 'center' }}>
 <h2 style={{ ...h2, color: '#fff', margin: '0 0 20px' }}>See your position before you commit to anything.</h2>
 <p style={{ color: '#c7d2cf', fontSize: 'clamp(16px,1.7vw,19px)', lineHeight: 1.6, margin: '0 auto 32px', maxWidth: 640 }}>
 One CSV. We come back with the states you owe in, the ones you are about to cross, and what
 compliance would cost.
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
