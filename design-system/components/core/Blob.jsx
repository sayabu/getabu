import React from 'react';

export function Blob({ color = 'var(--accent-support)', size = 420, opacity = 0.28, blur = 'var(--blob-blur)', top, right, bottom, left }) {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute', width: size, height: size, borderRadius: '50%',
      background: color, opacity, filter: `blur(${blur})`,
      top, right, bottom, left, pointerEvents: 'none',
    }} />
  );
}
