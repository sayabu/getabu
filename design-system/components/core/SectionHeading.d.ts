import * as React from 'react';

/**
 * Eyebrow + H2 (+ optional intro and right-aligned action) that opens every band.
 * @startingPoint section="Core" subtitle="Standard section opener" viewport="700x180"
 */
export interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowTone?: 'ember' | 'sun' | 'muted' | 'sky';
  title: React.ReactNode;
  intro?: React.ReactNode;
  /** Usually a ghost Button ("All posts →"). */
  action?: React.ReactNode;
  invert?: boolean;
  style?: React.CSSProperties;
}
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
