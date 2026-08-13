import React from 'react';

export function PostCard({ title, meta, imageTone = 'var(--accent-support)', href = '#' }) {
  return (
    <a href={href} style={{ color: 'inherit', background: 'var(--surface-card)',
      border: '1px solid var(--border-hair)', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
      display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '150px', background: imageTone, display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)',
        fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(27,39,51,0.5)' }}>Image</div>
      <div style={{ padding: 'var(--space-5)' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--size-meta)', lineHeight: 1,
          letterSpacing: 'var(--tracking-meta)', textTransform: 'uppercase',
          color: 'var(--text-muted)', marginBottom: '10px' }}>{meta}</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '19px', lineHeight: 1.3 }}>{title}</div>
      </div>
    </a>
  );
}
