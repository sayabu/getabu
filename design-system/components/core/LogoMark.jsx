import React from 'react';

export function LogoMark({ size = 34, invert, wordmark = true, name = 'Abu' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
      <div style={{
        width: size, height: size, borderRadius: Math.round(size * 0.32),
        background: invert ? 'var(--surface-invert)' : 'var(--accent-primary)',
        color: invert ? 'var(--accent-primary)' : 'var(--text-on-accent)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: size * 0.56, lineHeight: 1,
      }}>{name.charAt(0).toUpperCase()}</div>
      {wordmark && <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: size * 0.56, lineHeight: 1,
      }}>{name}</span>}
    </div>
  );
}
