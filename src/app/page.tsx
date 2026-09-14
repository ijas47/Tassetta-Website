import type { Metadata } from 'next';
import { bookingHref, bookingLinkProps } from '@/lib/booking';

/*
 * Home page. Positioning follows April Dunford's framework:
 *   competitive alternatives -> unique attributes -> value -> target -> category.
 * Category: ecommerce sales tax compliance platform.
 * Differentiation: a named CPA verifies every return, the client approves it,
 * and the whole compliance position is visible live. Everything else on the
 * market either leaves the filing with you (software) or shows you nothing
 * (accounting firms).
 * Every color, spacing token, font, and responsive class comes from the design system.
 */

export const metadata: Metadata = {
 description:
 'Sales tax platform for US ecommerce. Tassetta tracks where you owe across all 50 states, handles registrations, and gets every return filed on time. Tassetta calculates it, a CPA verifies it, you approve it, a human files it.',
 alternates: { canonical: '/' },
 openGraph: {
 title: 'Tassetta. The sales tax platform that actually files.',
 description:
 'Nexus tracked across all 50 states, registrations handled, every return filed on time. You watch the whole thing from one page.',
 url: '/',
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
 canvas: '#ffffff',
 canvasSoft: '#eef2f0',
 darkPanel: '#0a1413',
 warn: '#a67512',
 warnPale: '#fbecc9',
 neg: '#a01f26',
 negPale: '#fbe4e5',
 pos: '#217a37',
 posPale: '#d3ecd8',
} as const;

const container = { maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px,4vw,32px)' } as const;
const mono = { fontFamily: 'ui-monospace, "JetBrains Mono", Menlo, monospace', fontVariantNumeric: 'tabular-nums' } as const;

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
 fontSize: 'clamp(38px,6.2vw,74px)',
 lineHeight: 1.03,
 letterSpacing: '-0.028em',
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
const h3: React.CSSProperties = {
 fontFamily: 'var(--font-manrope), Manrope, sans-serif',
 fontWeight: 800,
 fontSize: 21,
 letterSpacing: '-0.01em',
 color: T.ink,
 margin: 0,
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

export default function Home() {
 return (
 <>
 {/* ============ HERO ============ */}
 <section style={{ background: T.canvasSoft, padding: 'clamp(56px,9vw,112px) 0 clamp(48px,7vw,88px)' }}>
 <div style={container}>
 <div style={{ maxWidth: 940 }}>
 <span style={chip}>For US ecommerce brands</span>
 <h1 style={h1}>The sales tax platform that actually files.</h1>
 <p style={{ ...lede, maxWidth: 700 }}>
 Tassetta tracks where you owe across all 50 states, handles the registrations, and gets
 every return filed on time. You watch the whole thing from one page.
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
 Start with a free nexus study. Fifteen minutes and one export, and you get the states you
 already owe in, the ones you are about to cross, and what it costs to get clean.
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
 src="/videos/explainer-45s.mp4"
 controls
 playsInline
 muted
 autoPlay
 loop
 preload="metadata"
 aria-label="Tassetta 45-second explainer"
 style={{
 width: '100%',
 display: 'block',
 borderRadius: 14,
 background: '#f4f7f5',
 aspectRatio: '16 / 9',
 }}
 >
 Your browser does not support video playback.{' '}
 <a href="/videos/explainer-45s.mp4" style={{ color: T.primary }}>
 Download the explainer
 </a>
 .
 </video>
 </div>
 </div>
 </section>

 {/* ============ COMPETITIVE ALTERNATIVES ============ */}
 <section style={{ background: '#fff', padding: 'clamp(56px,8vw,104px) 0' }}>
 <div style={container}>
 <div style={{ maxWidth: 860, marginBottom: 48 }}>
 <p style={eyebrow}>What you are choosing between today</p>
 <h2 style={h2}>Every option leaves you doing the work or leaves you in the dark.</h2>
 </div>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
 {[
 {
 label: 'Sales tax software',
 head: 'It calculates. You still file.',
 body:
 'Avalara, TaxJar and the rest give you a rate engine and a dashboard. You map the products, watch the thresholds, reconcile marketplace tax by hand, and click file yourself. Or you pay again for managed filing on top of the software.',
 },
 {
 label: 'An accounting firm',
 head: 'They file. You see nothing.',
 body:
 'Spreadsheets and manual portal logins, on their schedule. Ask where you stand in Ohio today and you wait two days. You find out about a missed registration when the bill or the notice arrives.',
 },
 {
 label: 'Nobody, for now',
 head: 'It sits on the list.',
 body:
 'Most brands pick this one without deciding to. Sales tax stays on a someday list until a state notice or a diligence question forces it to the top, by which point the exposure has been compounding for a year.',
 },
 ].map((c) => (
 <div key={c.label} style={{ background: T.canvasSoft, borderRadius: 24, padding: 'clamp(24px,3vw,32px)' }}>
 <span style={{ ...mono, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.mute }}>
 {c.label}
 </span>
 <h3 style={{ ...h3, margin: '12px 0 12px' }}>{c.head}</h3>
 <p style={{ ...body, fontSize: 15.5, lineHeight: 1.55 }}>{c.body}</p>
 </div>
 ))}
 </div>
 <p style={{ ...body, marginTop: 40, maxWidth: 860 }}>
 <strong style={{ color: T.ink }}>What it costs:</strong> the day a threshold breaks, uncollected tax
 becomes your liability. It comes out of margin, with penalties and interest on top, and it grows every
 month nobody is watching.
 </p>
 </div>
 </section>

 {/* ============ THE MECHANISM ============ */}
 <section style={{ background: T.canvasSoft, padding: 'clamp(56px,8vw,104px) 0' }}>
 <div style={container}>
 <div style={{ maxWidth: 820, marginBottom: 48 }}>
 <p style={eyebrow}>How it works</p>
 <h2 style={h2}>Four steps. You are one of them.</h2>
 <p style={body}>
 The same loop runs every filing period, in every state you are registered in.
 </p>
 </div>
 <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
 {[
 {
 num: '01',
 head: 'Tassetta calculates it',
 body:
 'Connect Shopify, your marketplaces, Stripe and your accounting system once. Orders and refunds sync continuously. The platform measures your sales against the current nexus threshold in every state and builds each return from the transaction data: gross, taxable, exempt, marketplace, tax collected, expected liability.',
 },
 {
 num: '02',
 head: 'A CPA verifies it',
 body:
 'A named CPA opens the workpaper and reconciles it against the tax you actually collected. Anything the platform flags gets resolved first: a mistaxed invoice, a stale rate, a resale certificate that is not on file. Then they sign it.',
 },
 {
 num: '03',
 head: 'You approve it',
 body:
 'The packet lands in your portal with every line visible and the full workpaper downloadable. One click. Nothing is filed in your name that you have not seen.',
 },
 {
 num: '04',
 head: 'A human files it',
 body:
 'Someone at Tassetta submits it to the state portal, remits the payment, captures the confirmation number, and files the whole record: workpaper, sign-off, your approval, confirmation. Kept seven years.',
 },
 ].map((s) => (
 <div
 key={s.num}
 style={{
 display: 'grid',
 gridTemplateColumns: '88px 1fr',
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
 ...h3,
 fontSize: 'clamp(22px,2.6vw,30px)',
 letterSpacing: '-0.02em',
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

 {/* ============ THE DIFFERENCE ============ */}
 <section style={{ background: '#fff', padding: 'clamp(56px,8vw,104px) 0' }}>
 <div style={container}>
 <div style={{ maxWidth: 860, marginBottom: 48 }}>
 <p style={eyebrow}>Why this is different</p>
 <h2 style={h2}>Two things no other platform gives you.</h2>
 <p style={body}>
 Plenty of software calculates sales tax. What it does not do is put a person behind the number
 or show you the position while it is happening.
 </p>
 </div>
 <div className="t-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
 <div style={{ background: T.canvasSoft, borderRadius: 24, padding: 'clamp(28px,3.4vw,40px)' }}>
 <span style={{ ...mono, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.primary }}>
 01
 </span>
 <h3 style={{ ...h3, fontSize: 'clamp(22px,2.6vw,28px)', margin: '12px 0 16px' }}>
 A CPA signs off before you do.
 </h3>
 <p style={{ ...body, marginBottom: 16 }}>
 Not a support agent clearing a queue. A named CPA who opens the workpaper, checks it against
 what you collected, clears the exceptions and puts their name on the return.
 </p>
 <p style={{ ...body, fontWeight: 600, color: T.ink }}>
 No return reaches your approval queue until they have.
 </p>
 </div>
 <div style={{ background: T.darkPanel, borderRadius: 24, padding: 'clamp(28px,3.4vw,40px)' }}>
 <span style={{ ...mono, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.pale }}>
 02
 </span>
 <h3 style={{ ...h3, fontSize: 'clamp(22px,2.6vw,28px)', color: '#fff', margin: '12px 0 16px' }}>
 You see the whole position, live.
 </h3>
 <p style={{ ...body, color: '#c7d2cf', marginBottom: 16 }}>
 Which states you have crossed. Which you are approaching, and by what percentage. Where you
 are registered. What is filed, what is pending, what is overdue, and the liability against
 each one.
 </p>
 <p style={{ fontSize: 17, lineHeight: 1.62, fontWeight: 600, color: '#fff' }}>
 Not a quarterly PDF. A page you can open right now.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* ============ YOUR VIEW ============ */}
 <section style={{ background: T.canvasSoft, padding: 'clamp(56px,8vw,104px) 0' }}>
 <div style={container}>
 <div
 className="t-2col"
 style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }}
 >
 <div>
 <p style={eyebrow}>What you see</p>
 <h2 style={h2}>Your whole compliance position on one page.</h2>
 <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
 {[
 'A state map showing crossed, approaching, registered and clear, with the percentage against each threshold.',
 'The return waiting on your approval, with every line on the workpaper visible.',
 'Your filing calendar: what is overdue, due soon, upcoming and filed, per state and period.',
 'The audit archive, seven years of workpapers, sign-offs and confirmation numbers.',
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
 <p style={{ ...body, fontSize: 16, color: T.mute }}>
 The CPA workbench and the notice workflow run on the same platform in the background. You do
 not have to open them. You can, when you want the receipt.
 </p>
 </div>
 <div
 style={{
 background: '#fff',
 borderRadius: 24,
 padding: 'clamp(12px,1.6vw,18px)',
 boxShadow: '0 24px 60px -28px rgba(15,27,26,0.28)',
 }}
 >
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img
 src="/app/client-portal.jpg"
 alt="The Tassetta client portal, showing the readiness checklist and the current filing packet waiting for one-click approval."
 loading="lazy"
 decoding="async"
 width={1512}
 height={949}
 style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14, aspectRatio: '1512 / 949' }}
 />
 <p style={{ ...mono, fontSize: 12, color: T.mute, margin: '12px 6px 4px', letterSpacing: '0.04em' }}>
 Client portal, the filing packet awaiting approval.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* ============ COVERAGE ============ */}
 <section style={{ background: '#fff', padding: 'clamp(56px,8vw,104px) 0' }}>
 <div style={container}>
 <div style={{ maxWidth: 860, marginBottom: 48 }}>
 <p style={eyebrow}>Coverage</p>
 <h2 style={h2}>From the first threshold to the archived confirmation.</h2>
 <p style={body}>
 Five things have to happen for a state to consider you compliant. Tassetta does all five.
 </p>
 </div>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
 {[
 {
 num: '01',
 slug: 'nexus',
 head: 'Nexus monitoring',
 body: 'All 50 states and DC, measured live against your sales and transaction counts as thresholds change.',
 },
 {
 num: '02',
 slug: 'registrations',
 head: 'State registrations',
 body: 'Cross a threshold and the registration is prepared, reviewed, filed and tracked through to the state account number.',
 },
 {
 num: '03',
 slug: 'filing',
 head: 'Filing and remittance',
 body: 'Every return, on the frequency each state assigned you, calculated and reconciled before a CPA signs it.',
 },
 {
 num: '04',
 slug: 'notices',
 head: 'Notices and audits',
 body: 'A notice is matched to the return it concerns, answered by the CPA who worked it, and logged in full.',
 },
 {
 num: '05',
 slug: 'exemptions',
 head: 'Exemption certificates',
 body: 'Wholesale and exempt sales collected, validated and watched for expiry, so an exempt line holds up.',
 },
 ].map((c) => (
 <a
 key={c.num}
 href={`/what-we-handle/${c.slug}`}
 className="th-3"
 style={{
 textDecoration: 'none',
 background: T.canvasSoft,
 borderRadius: 24,
 padding: 30,
 display: 'flex',
 flexDirection: 'column',
 gap: 12,
 }}
 >
 <span style={{ ...mono, fontSize: 12, letterSpacing: '0.08em', color: T.primary }}>{c.num}</span>
 <h3 style={h3}>{c.head}</h3>
 <p style={{ ...body, fontSize: 15, lineHeight: 1.55 }}>{c.body}</p>
 <span style={{ fontWeight: 600, fontSize: 14, color: T.ink, marginTop: 4 }}>Learn more →</span>
 </a>
 ))}
 </div>
 <div style={{ marginTop: 28 }}>
 <a href="/what-we-handle" className="th-7" style={{ fontWeight: 600, fontSize: 15, color: T.primary, textDecoration: 'none' }}>
 See everything Tassetta covers →
 </a>
 </div>
 </div>
 </section>

 {/* ============ MARKETPLACE ============ */}
 <section style={{ background: T.canvasSoft, padding: 'clamp(56px,8vw,104px) 0' }}>
 <div style={container}>
 <div className="t-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }}>
 <div>
 <p style={eyebrow}>Multi-channel</p>
 <h2 style={h2}>Marketplace tax is not yours to file. We keep it out of your return.</h2>
 <p style={{ ...body, marginBottom: 20 }}>
 Amazon, Walmart, Etsy and TikTok Shop already collect and remit as the facilitator. Count
 that tax as yours and you either over-remit or your books stop reconciling.
 </p>
 <p style={body}>
 Tassetta separates facilitator-collected sales from your direct sales at the transaction
 level, on import. Your return covers what is actually yours to file.
 </p>
 </div>
 <div style={{ background: '#fff', borderRadius: 24, padding: 'clamp(20px,2.4vw,30px)', display: 'flex', flexDirection: 'column', gap: 12 }}>
 {[
 { label: 'Direct Shopify sales', tag: 'Yours to file', color: T.pos, bg: T.posPale },
 { label: 'Amazon · Walmart · Etsy', tag: 'Facilitator remits', color: T.body, bg: T.canvasSoft },
 { label: 'TikTok Shop · Stripe · PayPal', tag: 'Facilitator remits', color: T.body, bg: T.canvasSoft },
 ].map((r) => (
 <div
 key={r.label}
 style={{
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'space-between',
 gap: 12,
 padding: '16px 18px',
 borderRadius: 14,
 background: '#f4f7f5',
 }}
 >
 <span style={{ fontWeight: 600, fontSize: 15, color: T.ink }}>{r.label}</span>
 <span style={{ ...mono, fontWeight: 600, fontSize: 12, color: r.color, background: r.bg, padding: '5px 12px', borderRadius: 9999 }}>
 {r.tag}
 </span>
 </div>
 ))}
 <p style={{ ...mono, fontSize: 12, color: T.mute, margin: '6px 2px 0' }}>
 Split on import. No double counting.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* ============ PROOF ============ */}
 <section style={{ background: T.darkPanel, padding: 'clamp(56px,8vw,104px) 0' }}>
 <div style={container}>
 <div style={{ maxWidth: 820 }}>
 <p style={eyebrow}>Proof</p>
 <h2 style={{ ...h2, color: '#fff' }}>Every number traces back to a source file.</h2>
 <p style={{ ...body, color: '#c7d2cf', fontSize: 'clamp(16px,1.6vw,19px)', margin: '0 0 22px' }}>
 Each return carries its workpaper, the raw platform export it came from, the normalized
 transaction file, the rate calculation, the CPA sign-off, your approval and the state
 confirmation number. All hash-chained, all kept for seven years.
 </p>
 <p style={{ ...body, color: '#c7d2cf', fontSize: 'clamp(16px,1.6vw,19px)', margin: 0 }}>
 When an auditor asks how you arrived at a figure, or a buyer&rsquo;s diligence team asks for
 your filing history, you send a folder instead of starting an investigation.
 </p>
 </div>

 <div
 style={{
 marginTop: 44,
 display: 'grid',
 gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
 gap: 18,
 }}
 >
 {[
 ['CPA sign-off', 'required before a return can reach your approval queue'],
 ['Your approval', 'required before a return can be filed'],
 ['Seven-year retention', 'per filing, tamper-evident, exportable'],
 ].map(([head, sub]) => (
 <div key={head} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #223330', borderRadius: 16, padding: 24 }}>
 <div style={{ color: '#fff', fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontWeight: 800, fontSize: 17, marginBottom: 6 }}>
 {head}
 </div>
 <div style={{ color: '#c7d2cf', fontSize: 14.5, lineHeight: 1.55 }}>{sub}</div>
 </div>
 ))}
 </div>

 <div style={{ marginTop: 28, border: '1px dashed #41504d', borderRadius: 16, padding: 28 }}>
 <p style={{ ...mono, fontSize: 12, letterSpacing: '0.04em', color: T.mute, margin: '0 0 10px' }}>
 [ PLACEHOLDER, customer logos, pending permission to use ]
 </p>
 <p style={{ color: '#c7d2cf', fontSize: 16, lineHeight: 1.55, margin: 0 }}>
 Used by Shopify brands doing seven and eight figures across multiple states.{' '}
 <span style={{ color: T.mute }}>Swap for named customers the moment you can.</span>
 </p>
 </div>
 </div>
 </section>

 {/* ============ WHO IT IS FOR ============ */}
 <section style={{ background: '#fff', padding: 'clamp(56px,8vw,104px) 0' }}>
 <div style={container}>
 <div className="t-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
 <div style={{ background: T.canvasSoft, borderRadius: 24, padding: 'clamp(28px,3.4vw,40px)' }}>
 <p style={eyebrow}>Worth your time if</p>
 <p style={{ ...body, marginBottom: 16 }}>
 You sell on Shopify, or Shopify plus marketplaces. You ship into a lot of states. You are
 somewhere between $1M and $20M. And you suspect you have crossed thresholds you have not
 dealt with.
 </p>
 <p style={{ ...body, fontWeight: 600, color: T.ink }}>
 That suspicion is almost always right.
 </p>
 </div>
 <div style={{ background: T.canvasSoft, borderRadius: 24, padding: 'clamp(28px,3.4vw,40px)' }}>
 <p style={eyebrow}>Not yet if</p>
 <p style={body}>
 You only sell in one state, or you are pre-revenue. You do not have this problem yet, and we
 would rather say so than sell you a plan you do not need. Come back when you are shipping
 across state lines at volume.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* ============ PRICING ============ */}
 <section style={{ background: T.canvasSoft, padding: 'clamp(56px,8vw,104px) 0' }}>
 <div style={container}>
 <div style={{ maxWidth: 760 }}>
 <p style={eyebrow}>Pricing</p>
 <h2 style={h2}>Priced per state, not per transaction.</h2>
 <p style={{ ...body, fontSize: 'clamp(16px,1.6vw,19px)', margin: '0 0 28px' }}>
 A monthly base plus a flat fee for each state you are registered in. Filing one state&rsquo;s
 return costs the same in your best month as your slowest, so your compliance bill does not
 spike the month you have a good sale.
 </p>
 <a href="/pricing" className="th-8" style={{ fontWeight: 600, fontSize: 15, color: T.primary, textDecoration: 'none' }}>
 See pricing →
 </a>
 </div>
 </div>
 </section>

 {/* ============ CTA ============ */}
 <section style={{ background: '#fff', padding: 'clamp(56px,8vw,104px) 0' }}>
 <div style={container}>
 <div style={{ background: T.ink, borderRadius: 28, padding: 'clamp(36px,5vw,72px)', textAlign: 'center' }}>
 <h2 style={{ ...h2, color: '#fff', fontSize: 'clamp(30px,4.4vw,52px)', margin: '0 0 20px' }}>
 Find out where you stand. It is free.
 </h2>
 <p style={{ fontSize: 'clamp(16px,1.7vw,19px)', lineHeight: 1.6, color: '#c7d2cf', margin: '0 auto 32px', maxWidth: 640 }}>
 Fifteen minutes and one export. We come back with the states you already owe in, the ones
 you are about to cross, and what getting compliant actually costs.
 </p>
 <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
 <a href="/nexus-study" style={ctaPrimary} className="th-9">
 Get your free nexus study
 </a>
 <a
 href={bookingHref}
 {...bookingLinkProps}
 style={{ fontWeight: 600, fontSize: 15, color: '#fff', textDecoration: 'none', padding: '15px 8px' }}
 >
 Book a call →
 </a>
 </div>
 </div>
 </div>
 </section>
 </>
 );
}
