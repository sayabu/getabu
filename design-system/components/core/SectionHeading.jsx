import React from 'react';
import { Eyebrow } from './Eyebrow.jsx';

export function SectionHeading({ eyebrow, eyebrowTone, title, intro, action, invert, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap', ...style }}>
      <div style={{ maxWidth: '560px' }}>
        {eyebrow && <Eyebrow tone={eyebrowTone || (invert ? 'sun' : 'ember')} style={{ marginBottom: 'var(--space-4)' }}>{eyebrow}</Eyebrow>}
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)',
          fontSize: 'var(--size-display-md)', lineHeight: 1.15,
          letterSpacing: 'var(--tracking-display-sm)', margin: 0,
          color: invert ? 'var(--text-on-invert)' : 'var(--text-strong)',
        }}>{title}</h2>
        {intro && <p style={{
          margin: '18px 0 0', fontFamily: 'var(--font-sans)', fontSize: 'var(--size-body-lg)',
          lineHeight: 'var(--leading-body)',
          color: invert ? 'rgba(253,251,247,0.72)' : 'var(--text-body)',
        }}>{intro}</p>}
      </div>
      {action}
    </div>
  );
}
