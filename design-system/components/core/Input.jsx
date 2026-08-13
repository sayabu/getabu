import React from 'react';

export function Input({ invert, style, ...rest }) {
  return (
    <input
      style={{
        flex: '1 1 180px', minWidth: 0, boxSizing: 'border-box',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--size-body-sm)', lineHeight: 1,
        padding: '13px 15px', borderRadius: 'var(--radius-md)',
        border: `1.5px solid ${invert ? 'var(--border-strong-invert)' : 'var(--border-strong)'}`,
        background: invert ? 'var(--surface-raised)' : 'var(--paper-card)',
        color: invert ? 'var(--text-on-invert)' : 'var(--text-strong)',
        ...style,
      }}
      {...rest}
    />
  );
}
