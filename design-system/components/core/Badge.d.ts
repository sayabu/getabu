import * as React from 'react';

/** Small pill: "Flagship", credentials, PXPI artefact names. */
export interface BadgeProps {
  tone?: 'ink' | 'sun' | 'sky' | 'quiet';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
