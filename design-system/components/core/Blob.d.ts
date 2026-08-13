import * as React from 'react';

/** Soft translucent circle placed behind content. Parent needs position:relative and overflow:hidden. */
export interface BlobProps {
  color?: string;
  size?: number;
  opacity?: number;
  blur?: string;
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
}
export function Blob(props: BlobProps): JSX.Element;
