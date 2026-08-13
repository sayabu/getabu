import * as React from 'react';

/** One figure in the proof strip. */
export interface StatProps {
  value: React.ReactNode;
  label: string;
  tone?: 'ink' | 'sun' | 'ember';
}
export function Stat(props: StatProps): JSX.Element;
