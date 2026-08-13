import * as React from 'react';

/** Blog preview card: image band, date/reading-time meta, serif title. */
export interface PostCardProps {
  title: string;
  /** e.g. "12 Jul · 6 min" */
  meta: string;
  /** Placeholder fill until a real image exists. */
  imageTone?: string;
  href?: string;
}
export function PostCard(props: PostCardProps): JSX.Element;
