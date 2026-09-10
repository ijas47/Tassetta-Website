import React from 'react';
import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig, interpolate, spring } from 'remotion';
import { C, B, STATES, ORDER_ROWS } from './constants';

// -------- shared helpers --------
const FONT_SANS = "'Inter', -apple-system, system-ui, sans-serif";
const FONT_DISPLAY = "'Manrope', 'Inter', system-ui, sans-serif";
const FONT_MONO = "'JetBrains Mono', ui-monospace, Menlo, monospace";

// Fade helper — 0→1 over `dur` frames starting at `start` (relative to scene)
const fadeIn = (frame: number, start: number, dur = 15) =>
  interpolate(frame, [start, start + dur], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
const fadeOut = (frame: number, start: number, dur = 15) =>
  interpolate(frame, [start, start + dur], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

const BrandMark = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
    <div style={{
      width: 42, height: 42, borderRadius: 10, background: C.primary,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 24,
    }}>T</div>
    <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, color: C.ink, letterSpacing: '-0.02em' }}>
      Tassetta
    </div>
  </div>
);

// ============ BEAT 1 — state board ============
const Beat1: React.FC = () => {
  const frame = useCurrentFrame() - B.beat1.start;
  const boardOpacity = fadeIn(frame, 0, 20);
  const headlineOpacity = fadeIn(frame, 45, 25);
  const chipOpacity = fadeIn(frame, 90, 20);

  // Pulse the "crossed" tiles once around frame 100–130
  const pulse = interpolate(frame, [95, 115, 140], [0, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ background: C.ground, padding: '80px 100px', display: 'flex', flexDirection: 'column', gap: 40 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <BrandMark />
        <div style={{
          fontFamily: FONT_MONO, fontSize: 14, color: C.mute,
          letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>Live nexus · Cove &amp; Co. (example brand)</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '5fr 6fr', gap: 60, flex: 1, alignItems: 'center' }}>
        {/* Left: headline */}
        <div style={{ opacity: headlineOpacity }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: C.pale, color: C.primaryActive,
            fontFamily: FONT_SANS, fontWeight: 600, fontSize: 16,
            padding: '8px 16px', borderRadius: 9999, marginBottom: 24,
          }}>Managed US sales tax compliance</div>
          <h1 style={{
            fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64, lineHeight: 1.04,
            letterSpacing: '-0.028em', color: C.ink, margin: 0,
            textWrap: 'balance',
          }}>
            You probably owe sales tax in states you have never registered in.
          </h1>
          <div style={{
            opacity: chipOpacity, marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap',
          }}>
            <span style={{
              fontFamily: FONT_MONO, fontSize: 14, color: C.sevNeg,
              background: C.sevNegPale, padding: '6px 14px', borderRadius: 9999,
              letterSpacing: '0.02em',
            }}>6 states · crossed</span>
            <span style={{
              fontFamily: FONT_MONO, fontSize: 14, color: C.sevWarn,
              background: C.sevWarnPale, padding: '6px 14px', borderRadius: 9999,
              letterSpacing: '0.02em',
            }}>4 states · approaching</span>
          </div>
        </div>

        {/* Right: state board */}
        <div style={{
          opacity: boardOpacity,
          background: C.panel, borderRadius: 20, padding: 24,
          border: `1px solid ${C.border}`,
          boxShadow: '0 40px 80px -40px rgba(15,27,26,0.35)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
            <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 18, color: C.ink }}>Your live nexus</div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.mute, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Live</div>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(9, 1fr)', gap: 8,
          }}>
            {STATES.map((s) => {
              const isCrossed = s.status === 'neg';
              const tintPulse = isCrossed ? pulse : 0;
              const bg =
                s.status === 'neg' ? C.sevNegPale :
                s.status === 'warn' ? C.sevWarnPale :
                C.panel2;
              const color =
                s.status === 'neg' ? C.sevNeg :
                s.status === 'warn' ? C.sevWarn :
                C.mute;
              return (
                <div key={s.code} style={{
                  aspectRatio: '1/1',
                  background: bg,
                  color,
                  borderRadius: 8,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  fontFamily: FONT_MONO, fontSize: 15, fontWeight: 600,
                  gap: 2, padding: 4, textAlign: 'center' as const,
                  boxShadow: isCrossed ? `0 0 0 ${2 * tintPulse}px ${C.sevNeg}` : 'none',
                  transition: 'box-shadow 100ms ease',
                }}>
                  <div>{s.code}</div>
                  {s.amount && <div style={{ fontSize: 10, opacity: 0.85, fontWeight: 500 }}>{s.amount}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ============ BEAT 2 — order tape → threshold crossed ============
const Beat2: React.FC = () => {
  const frame = useCurrentFrame() - B.beat2.start;
  const opacity = fadeIn(frame, 0, 15);

  // Reveal rows one at a time. Freeze when the running total hits CA $100K equivalent.
  // Rows visible: min(frame/9 + 1, 15). Once we hit row 14 (frame ~120), freeze.
  const visibleCount = Math.min(15, Math.max(1, Math.floor(frame / 9) + 1));
  const runningTotal = ORDER_ROWS.slice(0, visibleCount).reduce((s, r) => s + r.amount, 0);
  const displayTotal = Math.min(runningTotal * 45, 100020); // stylized scale
  const crossed = displayTotal >= 100000;
  const crossChipOpacity = fadeIn(frame, 135, 20);

  return (
    <AbsoluteFill style={{ background: C.ground, padding: '80px 100px', display: 'flex', flexDirection: 'column', gap: 40, opacity }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <BrandMark />
        <div style={{ fontFamily: FONT_MONO, fontSize: 14, color: C.mute, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Shopify orders · shipping to CA · YTD
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 40, flex: 1, alignItems: 'center' }}>
        {/* Order tape */}
        <div style={{
          background: C.panel, borderRadius: 20, padding: 20,
          border: `1px solid ${C.border}`,
          boxShadow: '0 40px 80px -40px rgba(15,27,26,0.35)',
          height: 720, overflow: 'hidden',
        }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '90px 1fr auto',
            gap: 20, padding: '10px 16px',
            fontFamily: FONT_MONO, fontSize: 13, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: C.mute,
          }}>
            <div>Order</div><div>Ship to</div><div>Amount</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 6 }}>
            {ORDER_ROWS.slice(0, visibleCount).map((r, i) => {
              const rowFrame = frame - i * 9;
              const rowOpacity = interpolate(rowFrame, [0, 6], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
              const rowTx = interpolate(rowFrame, [0, 6], [8, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
              const isCrossing = i === 13 && crossed;
              return (
                <div key={r.id} style={{
                  display: 'grid', gridTemplateColumns: '90px 1fr auto', gap: 20,
                  padding: '14px 16px', borderRadius: 8,
                  background: isCrossing ? C.sevNegPale : C.panel2,
                  color: isCrossing ? C.sevNeg : C.ink,
                  fontFamily: FONT_SANS, fontSize: 17, fontWeight: 500,
                  opacity: rowOpacity, transform: `translateY(${rowTx}px)`,
                  border: isCrossing ? `1.5px solid ${C.sevNeg}` : `1px solid transparent`,
                }}>
                  <div style={{ fontFamily: FONT_MONO, color: isCrossing ? C.sevNeg : C.mute, fontSize: 14 }}>{r.id}</div>
                  <div>{r.city}</div>
                  <div style={{ fontFamily: FONT_MONO, fontVariantNumeric: 'tabular-nums' }}>
                    ${r.amount.toFixed(2)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Running total + threshold chip */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{
            background: C.panel, borderRadius: 20, padding: 32,
            border: `1px solid ${C.border}`,
          }}>
            <div style={{
              fontFamily: FONT_MONO, fontSize: 12, color: C.mute,
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12,
            }}>Running total · CA</div>
            <div style={{
              fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 72,
              color: crossed ? C.sevNeg : C.ink, letterSpacing: '-0.03em',
              fontVariantNumeric: 'tabular-nums',
            }}>
              ${Math.floor(displayTotal).toLocaleString('en-US')}
            </div>
            <div style={{ fontFamily: FONT_SANS, fontSize: 14, color: C.mute, marginTop: 8 }}>
              CA economic nexus threshold: <strong style={{ color: C.ink, fontFamily: FONT_MONO }}>$100,000</strong>
            </div>
          </div>

          <div style={{ opacity: crossChipOpacity }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              background: C.dark, color: '#fff',
              fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32,
              padding: '20px 28px', borderRadius: 12, letterSpacing: '-0.01em',
            }}>
              Threshold crossed.
            </div>
            <div style={{
              marginTop: 16, fontFamily: FONT_SANS, fontSize: 22, color: C.body,
              lineHeight: 1.4, maxWidth: 480,
            }}>
              Nothing in Shopify tells you the day this happens. From this day, tax you did not collect is tax you owe.
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ============ BEAT 3 — three-move solution ============
type MoveProps = { n: string; title: string; sub: string; ui: React.ReactNode; startFrame: number };
const MoveCard: React.FC<MoveProps & { frame: number }> = ({ n, title, sub, ui, startFrame, frame }) => {
  const rel = frame - startFrame;
  const op = fadeIn(rel, 0, 15);
  const tx = interpolate(rel, [0, 15], [24, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <div style={{
      opacity: op, transform: `translateY(${tx}px)`,
      background: C.panel, borderRadius: 24, padding: 32,
      border: `1px solid ${C.border}`,
      boxShadow: '0 30px 60px -30px rgba(15,27,26,0.25)',
      display: 'flex', flexDirection: 'column', gap: 20,
      minHeight: 580,
    }}>
      <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: C.primary, letterSpacing: '-0.02em', lineHeight: 1 }}>{n}</div>
      <div>
        <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, color: C.ink, letterSpacing: '-0.015em', marginBottom: 8 }}>{title}</div>
        <div style={{ fontFamily: FONT_SANS, fontSize: 17, color: C.body, lineHeight: 1.5 }}>{sub}</div>
      </div>
      <div style={{ marginTop: 'auto' }}>{ui}</div>
    </div>
  );
};

const Beat3: React.FC = () => {
  const frame = useCurrentFrame() - B.beat3.start;
  const opacity = fadeIn(frame, 0, 12);
  const headlineOp = fadeIn(frame, 15, 20);

  // Beat is 300 frames. Cards land at 40, 100, 160. Interactive UI beats within each card:
  const move1Live = Math.min(3, Math.max(0, Math.floor((frame - 55) / 20)));
  const move2Vals = Math.min(5, Math.max(0, Math.floor((frame - 115) / 16)));
  const approvedFrame = 200;
  const isApproved = frame >= approvedFrame;

  return (
    <AbsoluteFill style={{ background: C.ground, padding: '70px 100px', display: 'flex', flexDirection: 'column', gap: 30, opacity }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <BrandMark />
        <div style={{ fontFamily: FONT_MONO, fontSize: 14, color: C.mute, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          How Tassetta solves it
        </div>
      </div>

      <div style={{ opacity: headlineOp, maxWidth: 1400 }}>
        <h2 style={{
          fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 56,
          letterSpacing: '-0.025em', color: C.ink, margin: 0, lineHeight: 1.05,
          textWrap: 'balance',
        }}>
          We pull your sales. An expert prepares every return. You approve in one click.
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, flex: 1, alignItems: 'stretch' }}>
        <MoveCard
          n="01"
          title="Pull your live sales."
          sub="Shopify, marketplaces, payment rails — all in continuously."
          startFrame={40}
          frame={frame}
          ui={
            <div style={{ background: C.panel2, borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Shopify' },
                { label: 'Amazon Seller' },
                { label: 'Stripe' },
              ].map((r, i) => (
                <div key={r.label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  background: C.panel, padding: '12px 14px', borderRadius: 8,
                  border: `1px solid ${C.border}`,
                  fontFamily: FONT_MONO, fontSize: 14, color: C.ink,
                }}>
                  <span>{r.label}</span>
                  <span style={{
                    fontFamily: FONT_MONO, fontSize: 12, letterSpacing: '0.05em',
                    color: move1Live > i ? C.sevPos : C.mute,
                    background: move1Live > i ? C.sevPosPale : 'transparent',
                    border: move1Live > i ? 'none' : `1px solid ${C.border}`,
                    padding: '4px 10px', borderRadius: 9999,
                  }}>
                    {move1Live > i ? 'Live' : 'Connecting…'}
                  </span>
                </div>
              ))}
            </div>
          }
        />

        <MoveCard
          n="02"
          title="An expert prepares the return."
          sub="Reconciled to the tax you actually collected. Variance resolved before you see it."
          startFrame={100}
          frame={frame}
          ui={
            <div style={{ background: C.panel2, borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, letterSpacing: '0.1em', color: C.mute, textTransform: 'uppercase', padding: '2px 4px' }}>
                CA · Aug 2026
              </div>
              {[
                { k: 'Gross sales', v: '$412,180', done: move2Vals >= 1 },
                { k: 'Taxable', v: '$391,220', done: move2Vals >= 2 },
                { k: 'Collected', v: '$34,006', done: move2Vals >= 3 },
                { k: 'Expected', v: '$34,182', done: move2Vals >= 4, tone: 'warn' as const },
                { k: 'Variance resolved', v: '−$176 · fixed', done: move2Vals >= 5, tone: 'pos' as const },
              ].map((r) => (
                <div key={r.k} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  background: C.panel, padding: '10px 14px', borderRadius: 8,
                  border: `1px solid ${C.border}`,
                  fontFamily: FONT_SANS, fontSize: 15, color: C.ink,
                  opacity: r.done ? 1 : 0.35,
                  transition: 'opacity 200ms ease',
                }}>
                  <span>{r.k}</span>
                  <span style={{
                    fontFamily: FONT_MONO, fontSize: 14, fontVariantNumeric: 'tabular-nums',
                    color: r.tone === 'pos' ? C.sevPos : r.tone === 'warn' ? C.sevWarn : C.ink,
                  }}>{r.v}</span>
                </div>
              ))}
            </div>
          }
        />

        <MoveCard
          n="03"
          title="You approve in one click."
          sub="Then we file, remit, and archive the workpaper."
          startFrame={160}
          frame={frame}
          ui={
            <div style={{ background: C.panel2, borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, letterSpacing: '0.1em', color: C.mute, textTransform: 'uppercase' }}>
                Filing to approve · GA May 2026
              </div>
              <div style={{
                background: C.pale, border: `1.5px solid ${C.primary}`, borderRadius: 10,
                padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              }}>
                <span style={{ fontFamily: FONT_SANS, fontSize: 15, fontWeight: 600, color: C.ink }}>Expected liability</span>
                <span style={{ fontFamily: FONT_MONO, fontWeight: 800, fontSize: 22, color: C.ink, fontVariantNumeric: 'tabular-nums' }}>$2,932</span>
              </div>
              <button style={{
                background: isApproved ? C.sevPos : C.primary,
                color: '#fff',
                fontFamily: FONT_SANS, fontWeight: 600, fontSize: 16,
                padding: '14px', borderRadius: 999, border: 'none',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                transition: 'background 200ms ease',
              }}>
                {isApproved ? '✓ Approved by client' : 'Approve filing'}
              </button>
              {isApproved && (
                <div style={{
                  opacity: fadeIn(frame, approvedFrame + 5, 15),
                  fontFamily: FONT_MONO, fontSize: 12, color: C.sevPos,
                  textAlign: 'center', letterSpacing: '0.06em', textTransform: 'uppercase',
                }}>
                  Filed · Conf CA-2026-08-4A12
                </div>
              )}
            </div>
          }
        />
      </div>
    </AbsoluteFill>
  );
};

// ============ BEAT 4 — you watch it / we file it ============
const Beat4: React.FC = () => {
  const frame = useCurrentFrame() - B.beat4.start;
  const s1 = spring({ frame, fps: 30, config: { damping: 15, stiffness: 100 } });
  const s2 = spring({ frame: frame - 15, fps: 30, config: { damping: 15, stiffness: 100 } });

  return (
    <AbsoluteFill style={{ background: C.dark, padding: '120px 100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40 }}>
      <div style={{ fontFamily: FONT_MONO, fontSize: 14, color: C.mute, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: fadeIn(frame, 0, 12) }}>
        What changes for you
      </div>
      <div style={{
        display: 'flex', gap: 40, alignItems: 'baseline', justifyContent: 'center',
        maxWidth: 1400, flexWrap: 'wrap',
      }}>
        <div style={{
          fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 128, color: '#fff',
          letterSpacing: '-0.035em', opacity: s1, transform: `translateY(${(1 - s1) * 20}px)`,
        }}>
          You watch it.
        </div>
        <div style={{
          fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 128, color: C.primary,
          letterSpacing: '-0.035em', opacity: s2, transform: `translateY(${(1 - s2) * 20}px)`,
        }}>
          We file it.
        </div>
      </div>
      <div style={{
        opacity: fadeIn(frame, 55, 20),
        fontFamily: FONT_SANS, fontSize: 24, color: C.onDark,
        maxWidth: 900, textAlign: 'center', lineHeight: 1.4,
      }}>
        Every state, every period, without pulling anyone on your team out of what they should be doing.
      </div>
    </AbsoluteFill>
  );
};

// ============ BEAT 5 — CTA ============
const Beat5: React.FC = () => {
  const frame = useCurrentFrame() - B.beat5.start;
  const wordmarkOp = fadeIn(frame, 0, 15);
  const ctaOp = fadeIn(frame, 20, 15);
  const urlOp = fadeIn(frame, 35, 15);

  return (
    <AbsoluteFill style={{ background: C.ground, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40 }}>
      <div style={{ opacity: wordmarkOp, transform: `scale(${0.98 + 0.02 * wordmarkOp})` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{
            width: 68, height: 68, borderRadius: 16, background: C.primary,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40,
          }}>T</div>
          <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 68, color: C.ink, letterSpacing: '-0.03em' }}>
            Tassetta
          </div>
        </div>
      </div>

      <div style={{
        opacity: ctaOp,
        background: C.primary, color: '#fff',
        fontFamily: FONT_SANS, fontWeight: 600, fontSize: 24,
        padding: '20px 40px', borderRadius: 9999,
      }}>
        Get your free nexus study →
      </div>

      <div style={{
        opacity: urlOp,
        fontFamily: FONT_MONO, fontSize: 20, color: C.mute,
        letterSpacing: '0.06em',
      }}>
        tassetta.com/nexus-study
      </div>
    </AbsoluteFill>
  );
};

// ============ ROOT ============
export const Video: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: C.ground }}>
      <Sequence from={B.beat1.start} durationInFrames={B.beat1.end - B.beat1.start}><Beat1 /></Sequence>
      <Sequence from={B.beat2.start} durationInFrames={B.beat2.end - B.beat2.start}><Beat2 /></Sequence>
      <Sequence from={B.beat3.start} durationInFrames={B.beat3.end - B.beat3.start}><Beat3 /></Sequence>
      <Sequence from={B.beat4.start} durationInFrames={B.beat4.end - B.beat4.start}><Beat4 /></Sequence>
      <Sequence from={B.beat5.start} durationInFrames={B.beat5.end - B.beat5.start}><Beat5 /></Sequence>
    </AbsoluteFill>
  );
};
