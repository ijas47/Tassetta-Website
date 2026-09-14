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

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get('botcheck')) return;

    setStatus('submitting');
    setError(null);

    const result = await submitToWeb3Forms({
      subject: `Contact form: ${fd.get('reason') || 'enquiry'} from ${fd.get('name') || 'unknown'}`,
      from_name: 'Tassetta website',
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      store_url: String(fd.get('store_url') || ''),
      states: String(fd.get('states') || ''),
      reason: String(fd.get('reason') || ''),
      message: String(fd.get('message') || ''),
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
          background: '#f4f9f7',
          border: `1.5px solid ${T.pale}`,
          borderRadius: 24,
          padding: 'clamp(28px,4vw,40px)',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            width: 56,
            height: 56,
            borderRadius: 9999,
            background: T.primary,
            color: '#fff',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-manrope), Manrope, sans-serif',
            fontWeight: 800,
            fontSize: 24,
            marginBottom: 16,
          }}
          aria-hidden
        >
          ✓
        </span>
        <h3
          style={{
            fontFamily: 'var(--font-manrope), Manrope, sans-serif',
            fontWeight: 800,
            fontSize: 24,
            letterSpacing: '-0.015em',
            color: T.ink,
            margin: '0 0 10px',
          }}
        >
          Message sent.
        </h3>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: T.body, margin: 0 }}>
          You will hear back from <strong style={{ color: T.ink }}>ijas@tassetta.com</strong>, usually
          within one business day. If you have a state notice with a deadline, say so in a reply and it
          jumps the queue.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      style={{
        background: '#eef2f0',
        borderRadius: 24,
        padding: 'clamp(24px,3vw,34px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        aria-hidden="true"
        style={{ position: 'absolute', left: -9999, opacity: 0, height: 0, width: 0 }}
      />

      <div>
        <label htmlFor="c-name" style={label}>
          Name
        </label>
        <input id="c-name" name="name" type="text" required autoComplete="name" placeholder="Your name" style={input} />
      </div>

      <div>
        <label htmlFor="c-email" style={label}>
          Work email
        </label>
        <input id="c-email" name="email" type="email" required autoComplete="email" placeholder="you@yourstore.com" style={input} />
      </div>

      <div>
        <label htmlFor="c-store" style={label}>
          Store URL
        </label>
        <input id="c-store" name="store_url" type="text" placeholder="yourstore.com" style={input} />
      </div>

      <div>
        <label htmlFor="c-states" style={label}>
          Roughly how many states do you sell into?
        </label>
        <input id="c-states" name="states" type="text" inputMode="numeric" placeholder="25" style={input} />
      </div>

      <div>
        <label htmlFor="c-reason" style={label}>
          What brings you here?
        </label>
        <select id="c-reason" name="reason" defaultValue="Sizing up the platform" style={{ ...input, cursor: 'pointer' }}>
          <option>Sizing up the platform</option>
          <option>I got a notice from a state</option>
          <option>I need to back-file / voluntary disclosure</option>
          <option>Pricing question</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="c-message" style={label}>
          Anything else
        </label>
        <textarea
          id="c-message"
          name="message"
          rows={3}
          placeholder="A notice, a deadline, a question about how it works."
          style={{ ...input, resize: 'vertical' }}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        style={{
          marginTop: 4,
          background: status === 'submitting' ? T.primaryActive : T.primary,
          color: '#fff',
          fontFamily: 'inherit',
          fontWeight: 600,
          fontSize: 16,
          padding: 14,
          borderRadius: 24,
          border: 'none',
          cursor: status === 'submitting' ? 'wait' : 'pointer',
          opacity: status === 'submitting' ? 0.85 : 1,
        }}
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>

      {error && (
        <p role="alert" style={{ fontSize: 14, color: T.neg, textAlign: 'center', margin: 0 }}>
          {error}
        </p>
      )}
    </form>
  );
}
