import React from 'react';

export function Eyebrow({ tone = 'ember', children, style }) {
  const colors = { ember: 'var(--accent-secondary)', sun: 'var(--accent-primary)', muted: 'var(--text-muted)', sky: 'var(--accent-support)' };
  return (
    <div style={{
      fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--size-eyebrow)', lineHeight: 1,
      letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase',
      color: colors[tone], ...style,
    }}>{children}</div>
  );
}
