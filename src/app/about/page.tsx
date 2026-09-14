import type { Metadata } from 'next';

/*
 * /about, in-tsx rewrite that leads with the software framing:
 * Tassetta is a platform that automates sales tax. A CPA sits in the
 * approval loop as the human check. Every action is visible in the
 * client's dashboard in real time.
 */

export const metadata: Metadata = {
 title: 'About Tassetta',
 description:
 'Tassetta is software that automates US sales tax across all 50 states, with a CPA in the approval loop as the human check on every filing. Everything runs on one platform, and you see it happen live.',
 alternates: { canonical: '/about' },
 openGraph: {
 title: 'About Tassetta',
 description:
 'Software that automates US sales tax. A CPA in the approval loop. You watch every step live.',
 url: '/about',
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
 margin: 0,
};
const h2: React.CSSProperties = {
 fontFamily: 'var(--font-manrope), Manrope, sans-serif',
 fontWeight: 800,
 fontSize: 'clamp(22px,2.8vw,32px)',
 lineHeight: 1.1,
 letterSpacing: '-0.02em',
 color: T.ink,
 margin: '0 0 24px',
};
const body: React.CSSProperties = {
 fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
 fontSize: 'clamp(17px,1.8vw,20px)',
 lineHeight: 1.62,
 color: T.body,
 margin: '0 0 22px',
};

export default function About() {
 return (
 <>
 <section style={{ background: T.canvasSoft, padding: 'clamp(48px,7vw,88px) 0' }}>
 <div style={container}>
 <p style={eyebrow}>About</p>
 <h1 style={{ ...h1, maxWidth: 820 }}>Sales tax should run itself. A person should sign off.</h1>
 </div>
 </section>

 <section style={{ background: '#fff', padding: 'clamp(48px,7vw,88px) 0' }}>
 <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 clamp(20px,4vw,32px)' }}>
 <p style={body}>
 The two ways to handle sales tax both leave the work with you. Software gives you a
 calculator and a dashboard, then hands you the filing. A CPA does it by hand, slowly,
 with no live view. Neither one actually takes it off your plate. And neither one shows
 you what is happening as it happens.
 </p>
 <p style={body}>
 Tassetta is the thing in between: <strong style={{ color: T.ink }}>software that runs
 your sales tax end to end, with a CPA in the loop as the human check on every filing.</strong>{' '}
 The platform tracks your nexus in real time, prepares every return automatically, files
 and remits on each state&rsquo;s schedule, and keeps a seven-year audit archive. A CPA
 reviews and signs off before any return reaches you. You approve in one click. Every step
 is visible in your dashboard as it happens.
 </p>

 <h2 style={{ ...h2, margin: '44px 0 24px' }}>What we believe about the work</h2>
 <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 44 }}>
 {[
 'A return that goes out under your name should be reviewed and signed off by a CPA. Not a script.',
 'Your compliance cost should be flat. Not scaled to your transaction volume.',
 'You should be able to watch your compliance run, in real time, from your own dashboard.',
 'The day an auditor asks for your history, the proof should already exist. Filed by the platform, signed by a named CPA, kept for seven years.',
 ].map((it, i) => (
 <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
 <span
 style={{
 flex: 'none',
 width: 24,
 height: 24,
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
 {i + 1}
 </span>
 <p style={{ ...body, fontSize: 17, margin: 0 }}>{it}</p>
 </div>
 ))}
 </div>
 <p style={{ ...body, margin: '0 0 40px' }}>
 Those beliefs are why the platform works the way it does. Automation everywhere it helps.
 A person where it matters. A live view of both.
 </p>

 <div
 style={{
 border: '1px dashed #b9ccc6',
 borderRadius: 20,
 padding: 28,
 marginBottom: 40,
 background: '#f8faf9',
 }}
 >
 <p style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12, letterSpacing: '0.04em', color: T.mute, margin: '0 0 10px' }}>
 [ PLACEHOLDER, team section ]
 </p>
 <p style={{ ...body, fontSize: 16, margin: 0 }}>
 Names and faces here raise trust a lot for a platform that signs off on someone&rsquo;s tax
 filings. Worth adding before taking paid clients.
 </p>
 </div>

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
 </section>
 </>
 );
}
