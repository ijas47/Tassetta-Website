import type { Metadata } from 'next';

/*
 * /compare/cpa. Positions against the outsourced-accounting alternative.
 * The honest version: a good CPA can do this. The gap is visibility,
 * turnaround and pricing, not competence. Tassetta keeps the CPA and
 * removes the black box.
 */

export const metadata: Metadata = {
 title: 'Tassetta vs a bookkeeper or CPA firm',
 description:
 'A good CPA can handle sales tax. The problem is you cannot see any of it until the invoice arrives. Tassetta keeps a CPA on every return and puts the whole position on a page you can open.',
 alternates: { canonical: '/compare/cpa' },
 openGraph: {
 title: 'Tassetta vs a bookkeeper or CPA firm',
 description:
 'Keep the CPA. Lose the black box. Same human accountability, on a platform you can actually see.',
 url: '/compare/cpa',
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
const mono = { fontFamily: 'ui-monospace, "JetBrains Mono", Menlo, monospace' } as const;
const eyebrow: React.CSSProperties = { ...mono, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.mute, margin: '0 0 16px' };
const h1: React.CSSProperties = {
 fontFamily: 'var(--font-manrope), Manrope, sans-serif',
 fontWeight: 800,
 fontSize: 'clamp(34px,5.4vw,62px)',
 lineHeight: 1.05,
 letterSpacing: '-0.025em',
 color: T.ink,
 margin: 0,
};
const h2: React.CSSProperties = {
 fontFamily: 'var(--font-manrope), Manrope, sans-serif',
 fontWeight: 800,
 fontSize: 'clamp(24px,3.2vw,36px)',
 lineHeight: 1.1,
 letterSpacing: '-0.02em',
 color: T.ink,
 margin: '0 0 20px',
};
const body: React.CSSProperties = {
 fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
 fontSize: 'clamp(17px,1.8vw,19px)',
 lineHeight: 1.62,
 color: T.body,
 margin: '0 0 22px',
};

export default function CompareCpa() {
 return (
 <>
 <section style={{ background: T.canvasSoft, padding: 'clamp(48px,7vw,88px) 0' }}>
 <div style={container}>
 <p style={eyebrow}>Compare</p>
 <h1 style={{ ...h1, maxWidth: 860 }}>Tassetta vs a bookkeeper or CPA firm</h1>
 </div>
 </section>

 <section style={{ background: '#fff', padding: 'clamp(48px,7vw,88px) 0' }}>
 <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 clamp(20px,4vw,32px)' }}>
 <p style={body}>
 A competent CPA can absolutely handle your sales tax. This page is not an argument that they
 cannot. Tassetta keeps a CPA in the process for exactly that reason.
 </p>
 <p style={{ ...body, marginBottom: 36 }}>
 The problem is how the work is usually delivered. Spreadsheets, manual portal logins, and a
 status you only learn at quarter-end or when the invoice lands.
 </p>

 <h2 style={h2}>Three things change</h2>
 <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 36 }}>
 {[
 {
 head: 'You can see it while it happens',
 them: 'Ask where you stand in Ohio today and you wait for someone to open a spreadsheet.',
 us: 'Open the portal. Every state, its threshold percentage, what is filed, what is pending, what is overdue.',
 },
 {
 head: 'Nexus is measured, not remembered',
 them: 'Thresholds get checked when someone gets to it, usually at quarter-end.',
 us: 'Recalculated continuously against a versioned rules dataset covering all 50 states and DC.',
 },
 {
 head: 'The price does not move with the hours',
 them: 'Billed on time spent, which rises exactly when your volume does.',
 us: 'A flat fee per state. Filing one return costs the same in December as in February.',
 },
 ].map((r) => (
 <div key={r.head} style={{ background: T.canvasSoft, borderRadius: 20, padding: 'clamp(22px,3vw,28px)' }}>
 <h3 style={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontWeight: 800, fontSize: 21, letterSpacing: '-0.015em', color: T.ink, margin: '0 0 14px' }}>
 {r.head}
 </h3>
 <div className="t-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
 <div>
 <div style={{ ...mono, fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.mute, marginBottom: 6 }}>
 Typical firm
 </div>
 <p style={{ ...body, fontSize: 15, margin: 0, color: T.mute }}>{r.them}</p>
 </div>
 <div>
 <div style={{ ...mono, fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.primary, marginBottom: 6 }}>
 Tassetta
 </div>
 <p style={{ ...body, fontSize: 15, margin: 0, color: T.ink }}>{r.us}</p>
 </div>
 </div>
 </div>
 ))}
 </div>

 <div style={{ background: T.darkPanel, borderRadius: 20, padding: 'clamp(24px,3vw,32px)', marginBottom: 36 }}>
 <h2 style={{ ...h2, fontSize: 22, color: '#fff', margin: '0 0 12px' }}>What does not change</h2>
 <p style={{ ...body, margin: 0, fontSize: 17, color: '#c7d2cf' }}>
 A person still checks the return before it is filed. That was always the good part of working
 with a firm, and removing it to save money is how brands end up filing numbers nobody looked at.
 </p>
 </div>

 <div style={{ background: T.canvasSoft, borderRadius: 20, padding: 'clamp(24px,3vw,32px)', marginBottom: 36 }}>
 <h2 style={{ ...h2, fontSize: 22, margin: '0 0 12px' }}>When a firm is the right call</h2>
 <p style={{ ...body, margin: 0, fontSize: 17 }}>
 If your tax picture is tangled up with income tax, entity structure or international questions,
 you want a full accounting relationship and sales tax is one piece of it. Tassetta does one
 thing completely. Plenty of our clients keep their CPA for everything else and use us for sales
 tax specifically.
 </p>
 </div>

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
 </section>
 </>
 );
}
