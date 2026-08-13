import React from 'react';

export function Card({ tone = 'paper', pad = 'var(--space-6)', children, style, ...rest }) {
  const tones = {
    paper:  { background: 'var(--surface-card)', border: '1px solid var(--border-hair)', color: 'var(--text-strong)', boxShadow: 'var(--shadow-card)' },
    warm:   { background: 'var(--surface-warm)', border: '1px solid var(--border-hair)', color: 'var(--text-strong)' },
    sun:    { background: 'var(--accent-primary)', border: '1px solid rgba(27,39,51,0.12)', color: 'var(--text-on-accent)', boxShadow: 'var(--shadow-sun)' },
    invert: { background: 'var(--surface-invert)', border: '1px solid transparent', color: 'var(--text-on-invert)', boxShadow: 'var(--shadow-invert)' },
    outline:{ background: 'transparent', border: '1px solid var(--border-hair)', color: 'var(--text-strong)' },
  };
  return <div style={{ borderRadius: 'var(--radius-lg)', padding: pad, ...tones[tone], ...style }} {...rest}>{children}</div>;
}
