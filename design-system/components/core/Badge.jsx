import React from 'react';

export function Badge({ tone = 'ink', children, style }) {
  const tones = {
    ink:  { background: 'var(--surface-invert)', color: 'var(--accent-primary)' },
    sun:  { background: 'var(--accent-primary)', color: 'var(--text-on-accent)' },
    sky:  { background: 'transparent', color: 'var(--accent-support)', border: '1px solid var(--border-hair-invert)' },
    quiet:{ background: 'var(--surface-card)', color: 'var(--text-body)', border: '1px solid var(--border-hair)' },
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', borderRadius: 'var(--radius-pill)',
      padding: '6px 12px', fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)',
      fontSize: '10px', lineHeight: 1, letterSpacing: '2px', textTransform: 'uppercase',
      ...tones[tone], ...style,
    }}>{children}</span>
  );
}
