import * as React from 'react';

/** Squircle tile with the initial, plus optional serif wordmark. */
export interface LogoMarkProps {
  /** Tile side in px. Radius is always 0.32 of the side. */
  size?: number;
  /** Ink tile with yellow letter, for use on yellow surfaces. */
  invert?: boolean;
  wordmark?: boolean;
  name?: string;
}
export function LogoMark(props: LogoMarkProps): JSX.Element;
