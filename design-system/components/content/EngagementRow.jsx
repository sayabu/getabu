import React from 'react';

export function EngagementRow({ label, description, last }) {
  return (
    <div style={{ display: 'flex', gap: '18px', padding: 'var(--space-5) 0',
      borderTop: '1px solid var(--border-hair)',
      borderBottom: last ? '1px solid var(--border-hair)' : 'none' }}>
      <div style={{ flex: '0 0 92px', fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)',
        fontSize: 'var(--size-eyebrow)', lineHeight: 1.4, letterSpacing: '2px', textTransform: 'uppercase',
        color: 'var(--accent-support)', paddingTop: '4px' }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--size-body)',
        lineHeight: 'var(--leading-body)', color: 'var(--text-body)' }}>{description}</div>
    </div>
  );
}
