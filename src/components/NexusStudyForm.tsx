'use client';

import { useState } from 'react';
import { submitToWeb3Forms } from '@/lib/web3forms';

const T = {
  ink: '#0f1b1a',
  body: '#41504d',
  mute: '#7a8783',
  primary: '#0d7d72',
  primaryActive: '#0a655c',
  pale: '#d9ede9',
  neg: '#a01f26',
} as const;

const label: React.CSSProperties = {
  fontWeight: 600,
  fontSize: 14,
  color: T.ink,
  marginBottom: 7,
  display: 'block',
};

const input: React.CSSProperties = {
  width: '100%',
  fontFamily: 'inherit',
  fontSize: 15,
  color: T.ink,
  background: '#fff',
  border: '1px solid #cdd8d4',
  borderRadius: 12,
  padding: '12px 14px',
  outline: 'none',
};

type Status = 'idle' | 'submitting' | 'done' | 'error';

type Props = {
  /** Subject line on the email that lands in the inbox. */
  subject?: string;
  /** Submit button label. */
  cta?: string;
};

/**
 * The no-call path to a nexus study. Contact details only. We reply with the
 * one export to pull and where to send it, so nothing large moves through a
 * browser form.
 */
export default function NexusStudyForm({
  subject = 'Nexus study request',
  cta = 'Send my details',
}: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get('botcheck')) return; // honeypot

    setStatus('submitting');
    setError(null);

    const result = await submitToWeb3Forms({
      subject: `${subject}: ${fd.get('name') || 'unknown'}`,
      from_name: 'Tassetta website',
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      store_url: String(fd.get('store_url') || ''),
      states: String(fd.get('states') || ''),
      channels: String(fd.get('channels') || ''),
      notes: String(fd.get('notes') || ''),
    });

    if (result.ok) setStatus('done');
    else {
      setError(result.error);
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 14,
          border: `2px solid ${T.pale}`,
          borderRadius: 20,
          padding: 'clamp(32px,5vw,56px) 24px',
          background: '#f4f9f7',
        }}
      >
        <span
          style={{
            width: 60,
            height: 60,
            borderRadius: 9999,
            background: T.primary,
            color: '#fff',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-manrope), Manrope, sans-serif',
            fontWeight: 800,
            fontSize: 26,
          }}
          aria-hidden
        >
          ✓
        </span>
        <span
          style={{
            fontFamily: 'var(--font-manrope), Manrope, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(20px,2.4vw,26px)',
            letterSpacing: '-0.01em',
            color: T.ink,
          }}
        >
          Got it. Check your inbox.
        </span>
        <span style={{ fontSize: 16, lineHeight: 1.6, color: T.body, maxWidth: 460 }}>
          You will hear from <strong style={{ color: T.ink }}>ijas@tassetta.com</strong> within one
          business day, with the exact export to pull and where to send it. Your report follows 3 to
          5 business days after that.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      {/* Honeypot. Visually hidden, not announced. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        aria-hidden="true"
        style={{ position: 'absolute', left: -9999, opacity: 0, height: 0, width: 0 }}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        <div>
          <label htmlFor="ns-name" style={label}>
            Your name
          </label>
          <input id="ns-name" name="name" type="text" required autoComplete="name" placeholder="Alex Rivera" style={input} />
        </div>
        <div>
          <label htmlFor="ns-email" style={label}>
            Work email
          </label>
          <input id="ns-email" name="email" type="email" required autoComplete="email" placeholder="alex@yourstore.com" style={input} />
        </div>
        <div>
          <label htmlFor="ns-store" style={label}>
            Store URL
          </label>
          <input id="ns-store" name="store_url" type="text" placeholder="yourstore.com" style={input} />
        </div>
        <div>
          <label htmlFor="ns-states" style={label}>
            Roughly how many states do you ship to?
          </label>
          <input id="ns-states" name="states" type="text" inputMode="numeric" placeholder="25" style={input} />
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <label htmlFor="ns-channels" style={label}>
          Where do you sell?
        </label>
        <select id="ns-channels" name="channels" defaultValue="Shopify only" style={{ ...input, cursor: 'pointer' }}>
          <option>Shopify only</option>
          <option>Shopify plus marketplaces</option>
          <option>Marketplaces only</option>
          <option>Something else</option>
        </select>
      </div>

      <div style={{ marginTop: 16 }}>
        <label htmlFor="ns-notes" style={label}>
          Anything we should know? <span style={{ color: T.mute, fontWeight: 400 }}>Optional</span>
        </label>
        <textarea
          id="ns-notes"
          name="notes"
          rows={3}
          placeholder="Already got a notice from a state, already registered somewhere, whatever is on your mind."
          style={{ ...input, resize: 'vertical' }}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        style={{
          width: '100%',
          marginTop: 24,
          background: status === 'submitting' ? T.primaryActive : T.primary,
          color: '#fff',
          fontFamily: 'inherit',
          fontWeight: 600,
          fontSize: 16,
          padding: '15px 28px',
          borderRadius: 24,
          border: 'none',
          cursor: status === 'submitting' ? 'wait' : 'pointer',
          opacity: status === 'submitting' ? 0.85 : 1,
        }}
      >
        {status === 'submitting' ? 'Sending…' : cta}
      </button>

      {error && (
        <p role="alert" style={{ fontSize: 14, color: T.neg, textAlign: 'center', margin: '14px 0 0' }}>
          {error}
        </p>
      )}

      <p style={{ fontSize: 13.5, lineHeight: 1.5, color: T.mute, textAlign: 'center', margin: '18px 0 0' }}>
        We reply with the one export to pull. Nothing uploads from this page.
      </p>
    </form>
  );
}
