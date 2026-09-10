import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  OffthreadVideo,
  staticFile,
  useCurrentFrame,
  interpolate,
  spring,
} from 'remotion';

// ----------------- design tokens -----------------
const T = {
  ink: '#0f1b1a',
  body: '#41504d',
  mute: '#7a8783',
  ground: '#eef2f0',
  primary: '#0d7d72',
  primaryActive: '#0a655c',
  pale: '#d9ede9',
  dark: '#0a1413',
  onDark: '#c7d2cf',
};

const FONT_DISPLAY = "'Manrope','Inter',system-ui,sans-serif";
const FONT_SANS = "'Inter',system-ui,sans-serif";
const FONT_MONO = "'JetBrains Mono',ui-monospace,Menlo,monospace";

// ----------------- shared helpers -----------------
const fadeIn = (frame: number, start = 0, dur = 12) =>
  interpolate(frame, [start, start + dur], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
const fadeOut = (frame: number, start: number, dur = 12) =>
  interpolate(frame, [start, start + dur], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

// One caption pill (bottom-center over the footage)
const Caption: React.FC<{ text: string; frame: number; sceneEnd: number }> = ({ text, frame, sceneEnd }) => {
  const inOp = fadeIn(frame, 10, 14);
  const outOp = fadeOut(frame, sceneEnd - 20, 14);
  const op = Math.min(inOp, outOp);
  const y = interpolate(frame, [10, 24], [12, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 72,
        display: 'flex',
        justifyContent: 'center',
        opacity: op,
        transform: `translateY(${y}px)`,
      }}
    >
      <div
        style={{
          background: T.dark,
          color: '#fff',
          fontFamily: FONT_DISPLAY,
          fontWeight: 700,
          fontSize: 34,
          letterSpacing: '-0.015em',
          padding: '18px 32px',
          borderRadius: 14,
          boxShadow: '0 24px 48px -18px rgba(0,0,0,0.45)',
          maxWidth: 1500,
          textAlign: 'center',
          lineHeight: 1.25,
        }}
      >
        {text}
      </div>
    </div>
  );
};

// Small chip in the top-right corner naming the surface
const SurfaceChip: React.FC<{ text: string; frame: number; sceneEnd: number }> = ({ text, frame, sceneEnd }) => {
  const op = Math.min(fadeIn(frame, 6, 12), fadeOut(frame, sceneEnd - 16, 12));
  return (
    <div
      style={{
        position: 'absolute',
        top: 40,
        right: 40,
        opacity: op,
        background: 'rgba(15,27,26,0.85)',
        backdropFilter: 'blur(10px)',
        color: '#fff',
        fontFamily: FONT_MONO,
        fontSize: 15,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        padding: '10px 18px',
        borderRadius: 999,
      }}
    >
      {text}
    </div>
  );
};

// ----------------- scene: opening text card -----------------
const OpenCard: React.FC = () => {
  const frame = useCurrentFrame();
  const op = fadeIn(frame, 4, 18);
  const outOp = fadeOut(frame, 70, 15);
  const y = interpolate(frame, [4, 22], [16, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <AbsoluteFill style={{ background: T.ground, alignItems: 'center', justifyContent: 'center', padding: 120 }}>
      <div style={{ maxWidth: 1400, textAlign: 'center', opacity: Math.min(op, outOp), transform: `translateY(${y}px)` }}>
        <div
          style={{
            fontFamily: FONT_MONO,
            fontSize: 18,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: T.mute,
            marginBottom: 32,
          }}
        >
          Tassetta · Managed US sales tax
        </div>
        <div
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 800,
            fontSize: 84,
            lineHeight: 1.03,
            letterSpacing: '-0.032em',
            color: T.ink,
          }}
        >
          You probably owe sales tax in states you never registered in.
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ----------------- scene: walkthrough clip with overlays -----------------
type ClipProps = {
  startFrom: number; // source frame (30fps)
  durationInFrames: number;
  surface?: string;
  caption?: string;
  zoom?: number; // subtle Ken-Burns
};

const ClipScene: React.FC<ClipProps> = ({ startFrom, durationInFrames, surface, caption, zoom = 1.02 }) => {
  const frame = useCurrentFrame();
  const sceneEnd = durationInFrames;
  const scale = interpolate(frame, [0, durationInFrames], [1, zoom], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const vignetteOp = interpolate(frame, [0, 20], [1, 0.35], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ background: '#000', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, transform: `scale(${scale})`, transformOrigin: 'center center' }}>
        <OffthreadVideo
          src={staticFile('walkthrough.mp4')}
          startFrom={startFrom}
          endAt={startFrom + durationInFrames + 30}
          muted
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* subtle top-and-bottom vignette to sit overlays against */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(15,27,26,0.42) 0%, rgba(15,27,26,0) 18%, rgba(15,27,26,0) 55%, rgba(15,27,26,0.55) 100%)',
          opacity: 1 - vignetteOp * 0.6,
          pointerEvents: 'none',
        }}
      />

      {surface && <SurfaceChip text={surface} frame={frame} sceneEnd={sceneEnd} />}
      {caption && <Caption text={caption} frame={frame} sceneEnd={sceneEnd} />}
    </AbsoluteFill>
  );
};

// ----------------- scene: "You watch it. We file it." -----------------
const PivotCard: React.FC = () => {
  const frame = useCurrentFrame();
  const s1 = spring({ frame: frame - 4, fps: 30, config: { damping: 18, stiffness: 110 } });
  const s2 = spring({ frame: frame - 24, fps: 30, config: { damping: 18, stiffness: 110 } });
  const outOp = fadeOut(frame, 130, 20);
  return (
    <AbsoluteFill style={{ background: T.dark, alignItems: 'center', justifyContent: 'center', padding: 120, opacity: outOp }}>
      <div
        style={{
          fontFamily: FONT_MONO,
          fontSize: 18,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: T.mute,
          marginBottom: 40,
          opacity: fadeIn(frame, 0, 15),
        }}
      >
        What changes for you
      </div>
      <div style={{ display: 'flex', gap: 40, alignItems: 'baseline', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 800,
            fontSize: 132,
            color: '#fff',
            letterSpacing: '-0.035em',
            opacity: s1,
            transform: `translateY(${(1 - s1) * 22}px)`,
          }}
        >
          You watch it.
        </div>
        <div
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 800,
            fontSize: 132,
            color: T.primary,
            letterSpacing: '-0.035em',
            opacity: s2,
            transform: `translateY(${(1 - s2) * 22}px)`,
          }}
        >
          We file it.
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ----------------- scene: CTA end card -----------------
const CtaCard: React.FC = () => {
  const frame = useCurrentFrame();
  const wm = fadeIn(frame, 2, 14);
  const cta = spring({ frame: frame - 22, fps: 30, config: { damping: 18, stiffness: 100 } });
  const url = fadeIn(frame, 42, 16);
  return (
    <AbsoluteFill style={{ background: T.ground, alignItems: 'center', justifyContent: 'center', gap: 44 }}>
      <div
        style={{ opacity: wm, transform: `scale(${0.98 + 0.02 * wm})`, display: 'flex', alignItems: 'center', gap: 22 }}
      >
        <div
          style={{
            width: 84,
            height: 84,
            borderRadius: 18,
            background: T.primary,
            color: '#fff',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: FONT_DISPLAY,
            fontWeight: 800,
            fontSize: 48,
          }}
        >
          T
        </div>
        <div
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 800,
            fontSize: 84,
            color: T.ink,
            letterSpacing: '-0.032em',
          }}
        >
          Tassetta
        </div>
      </div>
      <div
        style={{
          opacity: cta,
          transform: `translateY(${(1 - cta) * 18}px)`,
          background: T.primary,
          color: '#fff',
          fontFamily: FONT_SANS,
          fontWeight: 600,
          fontSize: 30,
          padding: '22px 46px',
          borderRadius: 999,
        }}
      >
        Get your free nexus study →
      </div>
      <div
        style={{
          opacity: url,
          fontFamily: FONT_MONO,
          fontSize: 22,
          color: T.mute,
          letterSpacing: '0.08em',
        }}
      >
        tassetta.com/nexus-study
      </div>
    </AbsoluteFill>
  );
};

// ----------------- composition -----------------
// 45-second edit at 30 fps = 1350 frames.
// Clip timings are in source frames (walkthrough was pre-encoded to 30fps).
export const Video: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* Beat 1 — opening card (0:00 – 0:03) */}
      <Sequence from={0} durationInFrames={90}>
        <OpenCard />
      </Sequence>

      {/* Beat 2 — Overview / KPIs / Nexus map (0:03 – 0:11) — source 8–16s */}
      <Sequence from={90} durationInFrames={240}>
        <ClipScene
          startFrom={240}
          durationInFrames={240}
          surface="Live nexus"
          caption="All 50 states, watched live against your sales."
        />
      </Sequence>

      {/* Beat 3 — Filing calendar (0:11 – 0:18) — source 15–22s */}
      <Sequence from={330} durationInFrames={210}>
        <ClipScene
          startFrom={450}
          durationInFrames={210}
          surface="Filing calendar"
          caption="Every return. Every state. Driven to filed."
        />
      </Sequence>

      {/* Beat 4 — Client Portal readiness + packet (0:18 – 0:25) — source 28–35s */}
      <Sequence from={540} durationInFrames={210}>
        <ClipScene
          startFrom={840}
          durationInFrames={210}
          surface="Your portal"
          caption="Your only screen. Approve the packet."
        />
      </Sequence>

      {/* Beat 5 — Expert workbench workpaper + state portal checklist (0:25 – 0:35) — source 36–46s */}
      <Sequence from={750} durationInFrames={300}>
        <ClipScene
          startFrom={1080}
          durationInFrames={300}
          surface="Behind the scenes"
          caption="A CPA reviews every return before you see it."
        />
      </Sequence>

      {/* Beat 6 — pivot card (0:35 – 0:40) */}
      <Sequence from={1050} durationInFrames={150}>
        <PivotCard />
      </Sequence>

      {/* Beat 7 — CTA (0:40 – 0:45) */}
      <Sequence from={1200} durationInFrames={150}>
        <CtaCard />
      </Sequence>
    </AbsoluteFill>
  );
};
