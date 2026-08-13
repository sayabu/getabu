import * as React from 'react';

/**
 * The one call-to-action control. Primary is always sun yellow with ink text.
 * @startingPoint section="Core" subtitle="Primary, secondary, invert and ghost buttons" viewport="700x150"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual weight. Never use more than one primary per view section. */
  variant?: 'primary' | 'secondary' | 'invert' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Renders an <a> instead of a <button>. */
  href?: string;
  disabled?: boolean;
  /** Adds the warm ember drop shadow. Hero only. */
  elevated?: boolean;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
