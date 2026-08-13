import React from 'react';
import { Input } from '../core/Input.jsx';
import { Button } from '../core/Button.jsx';

export function EmailCapture({ title, promise, cta = 'Send it', invert, placeholder = 'you@company.com' }) {
  return (
    <div style={{
      background: invert ? 'var(--surface-raised)' : 'var(--surface-card)',
      border: `1px solid ${invert ? 'var(--border-hair-invert)' : 'var(--border-hair)'}`,
      borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)',
      color: invert ? 'var(--text-on-invert)' : 'var(--text-strong)',
    }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-bold)', fontSize: '16px', lineHeight: 1.3, marginBottom: '8px' }}>{title}</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.55,
        color: invert ? 'rgba(253,251,247,0.65)' : 'var(--ink-400)', marginBottom: 'var(--space-4)' }}>{promise}</div>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Input type="email" invert={invert} placeholder={placeholder} />
        <Button variant={invert ? 'primary' : 'invert'} size="sm" style={{ padding: '13px 22px' }}>{cta}</Button>
      </div>
    </div>
  );
}
