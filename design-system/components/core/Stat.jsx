import React from 'react';

export function Stat({ value, label, tone = 'ink' }) {
  return (
    <div>
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '40px', lineHeight: 1,
        color: tone === 'sun' ? 'var(--accent-primary)' : tone === 'ember' ? 'var(--accent-secondary)' : 'var(--text-strong)',
      }}>{value}</div>
      <div style={{
        marginTop: '6px', fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)',
        fontSize: 'var(--size-eyebrow)', lineHeight: 1.4, letterSpacing: '2.5px',
        textTransform: 'uppercase', color: 'var(--text-muted)',
      }}>{label}</div>
    </div>
  );
}
