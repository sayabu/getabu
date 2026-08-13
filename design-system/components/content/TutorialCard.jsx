import React from 'react';
import { Card } from '../core/Card.jsx';
import { Badge } from '../core/Badge.jsx';

export function TutorialCard({ index, title, description, meta, href = '#', flagship }) {
  return (
    <Card tone={flagship ? 'sun' : 'paper'} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '30px', lineHeight: 1,
          color: flagship ? 'var(--text-on-accent)' : 'var(--accent-support)' }}>{index}</div>
        {flagship && <Badge tone="ink">Flagship</Badge>}
      </div>
      <h3 style={{ margin: '6px 0 0', fontFamily: 'var(--font-display)', fontWeight: 900,
        fontSize: 'var(--size-title)', lineHeight: 'var(--leading-title)' }}>{title}</h3>
      <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 'var(--size-body-sm)',
        lineHeight: 'var(--leading-body)', color: flagship ? 'var(--sun-shade)' : 'var(--ink-400)' }}>{description}</p>
      <a href={href} style={{ marginTop: 'auto', paddingTop: 'var(--space-4)', fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--weight-bold)', fontSize: '13.5px', lineHeight: 1,
        color: flagship ? 'var(--text-on-accent)' : 'var(--accent-secondary)' }}>{meta}</a>
    </Card>
  );
}
