import * as React from 'react';

/**
 * Email form with an explicit promise line. Every capture on the site states what arrives and how often.
 * @startingPoint section="Content" subtitle="Email capture with promise line" viewport="700x210"
 */
export interface EmailCaptureProps {
  title: string;
  /** The promise: what lands in the inbox, and what never will. Required by the brand voice. */
  promise: string;
  cta?: string;
  invert?: boolean;
  placeholder?: string;
}
export function EmailCapture(props: EmailCaptureProps): JSX.Element;
