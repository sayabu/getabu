import * as React from 'react';

/** Uppercase 3px-tracked label that opens a section. */
export interface EyebrowProps {
  /** ember on light surfaces, sun on ink, sky in footers. */
  tone?: 'ember' | 'sun' | 'muted' | 'sky';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
