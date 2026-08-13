import React from 'react';

const base = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
  fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--size-body)',
  lineHeight: 1, borderRadius: 'var(--radius-md)', border: '1.5px solid transparent',
  cursor: 'pointer', textDecoration: 'none', transition: 'transform var(--duration) var(--ease), opacity var(--duration) var(--ease)',
};
const sizes = { sm: '11px 18px', md: '17px 28px', lg: '19px 32px' };
const variants = {
  primary:   { background: 'var(--accent-primary)', color: 'var(--text-on-accent)' },
  secondary: { background: 'transparent', color: 'var(--text-strong)', borderColor: 'var(--border-strong)' },
  invert:    { background: 'var(--surface-invert)', color: 'var(--text-on-invert)' },
  ghost:     { background: 'transparent', color: 'var(--accent-secondary)', padding: 0, borderColor: 'transparent' },
};

export function Button({ variant = 'primary', size = 'md', href, disabled, elevated, children, style, ...rest }) {
  const Tag = href ? 'a' : 'button';
  const s = {
    ...base,
    padding: variant === 'ghost' ? 0 : sizes[size],
    ...variants[variant],
    boxShadow: elevated && variant === 'primary' ? 'var(--shadow-sun)' : 'none',
    opacity: disabled ? 0.45 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    ...style,
  };
  return <Tag href={href} disabled={!href && disabled} style={s} {...rest}>{children}</Tag>;
}
