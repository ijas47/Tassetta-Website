import type { Metadata } from 'next';
import { bookingHref, bookingLinkProps } from '@/lib/booking';

/*
 * /compare/software. Positions against the rate-engine category
 * (Avalara, TaxJar, Sovos). The honest version: they are good at
 * calculation; the gap is who operates it and who is accountable.
 */

export const metadata: Metadata = {
 title: 'Tassetta vs sales tax software',
 description:
 'Avalara and TaxJar calculate tax and hand you a dashboard. You still operate it. Tassetta calculates, has a CPA verify every return, takes your approval and files, and shows you the whole position live.',
 alternates: { canonical: '/compare/software' },
 openGraph: {
 title: 'Tassetta vs sales tax software',
 description:
 'Rate engines are good at rates. The open question is who runs the process and who signs the return.',
 url: '/compare/software',
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
 fontSize: 'clamp(36px,5.6vw,66px)',
 lineHeight: 1.04,
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

const ROWS: [string, string, string][] = [
 ['Calculating the tax', 'Yes, that is the core product', 'Yes'],
 ['Tracking nexus', 'A dashboard you check', 'Measured continuously, alerts on crossing'],
 ['Preparing the return', 'You, or a paid add-on', 'The platform, every period'],
 ['Verifying the numbers', 'Nobody', 'A named CPA, every return'],
 ['Filing with the state', 'You click, or you pay more', 'Included'],
 ['Separating marketplace tax', 'You reconcile it', 'Split at import'],
 ['Answering a state notice', 'Your problem', 'Matched, drafted, logged'],
 ['Evidence for an audit', 'Export what you can find', 'Seven-year archive per filing'],
 ['What you pay on', 'Transaction volume', 'A flat fee per state'],
];

export default function CompareSoftware() {
 return (
 <>
 <section style={{ background: T.canvasSoft, padding: 'clamp(48px,7vw,88px) 0' }}>
 <div style={container}>
 <p style={eyebrow}>Compare</p>
 <h1 style={{ ...h1, maxWidth: 860 }}>Tassetta vs sales tax software</h1>
 </div>
 </section>

 <section style={{ background: '#fff', padding: 'clamp(48px,7vw,88px) 0' }}>
 <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 clamp(20px,4vw,32px)' }}>
 <p style={body}>
 Avalara, TaxJar and Sovos are good at the thing they were built for. They calculate rates
 accurately across a lot of jurisdictions, and if you need a rate API in your checkout, that is
 what you should buy.
 </p>
 <p style={body}>
 The question they leave open is who operates the rest of it. With a rate engine you are the
 operator: you map the product tax codes, you watch the nexus dashboard, you reconcile the
 marketplace tax by hand, and you click file. Managed filing is usually an extra line on the
 invoice, and the base price climbs with transaction volume, so your compliance cost peaks in
 your best month.
 </p>
 <p style={{ ...body, marginBottom: 36 }}>
 More to the point: no person is accountable for the number. The engine produces a figure and
 you file it under your own name.
 </p>

 <h2 style={h2}>Line by line</h2>
 <div style={{ overflowX: 'auto', marginBottom: 36 }}>
 <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
 <thead>
 <tr>
 {['', 'Sales tax software', 'Tassetta'].map((th, i) => (
 <th
 key={i}
 style={{
 ...mono,
 textAlign: 'left',
 fontSize: 11.5,
 letterSpacing: '0.1em',
 textTransform: 'uppercase',
 color: i === 2 ? T.primary : T.mute,
 padding: '0 14px 12px',
 borderBottom: '1px solid #e6ece9',
 fontWeight: 600,
 }}
 >
 {th}
 </th>
 ))}
 </tr>
 </thead>
 <tbody>
 {ROWS.map(([label, them, us]) => (
 <tr key={label}>
 <td style={{ padding: '14px', borderBottom: '1px solid #f0f4f2', fontSize: 15, fontWeight: 600, color: T.ink }}>{label}</td>
 <td style={{ padding: '14px', borderBottom: '1px solid #f0f4f2', fontSize: 15, color: T.mute }}>{them}</td>
 <td style={{ padding: '14px', borderBottom: '1px solid #f0f4f2', fontSize: 15, color: T.ink, fontWeight: 500 }}>{us}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div style={{ background: T.canvasSoft, borderRadius: 20, padding: 'clamp(24px,3vw,32px)', marginBottom: 36 }}>
 <h2 style={{ ...h2, fontSize: 22, margin: '0 0 12px' }}>When software is the right buy</h2>
 <p style={{ ...body, margin: 0, fontSize: 17 }}>
 If you have an in-house tax person who wants to own the process and just needs a good rate
 engine, buy the rate engine. Tassetta is for teams who do not want to build that function
 internally and are not willing to fly blind instead.
 </p>
 </div>

 <a
 href={bookingHref} {...bookingLinkProps}
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
 Book a call
 </a>
 </div>
 </section>
 </>
 );
}
