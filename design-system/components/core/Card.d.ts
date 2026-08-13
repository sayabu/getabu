import * as React from 'react';

/**
 * Surface container. One sun card per group at most — it marks the flagship.
 * @startingPoint section="Core" subtitle="Paper, warm, sun, invert and outline surfaces" viewport="700x200"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'paper' | 'warm' | 'sun' | 'invert' | 'outline';
  /** CSS padding value. Defaults to var(--space-6). */
  pad?: string;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
