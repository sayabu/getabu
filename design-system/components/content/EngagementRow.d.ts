import * as React from 'react';

/** One line in the "work with me" list: sky label, plain description. */
export interface EngagementRowProps {
  label: string;
  description: string;
  /** Adds the closing bottom rule on the final row. */
  last?: boolean;
}
export function EngagementRow(props: EngagementRowProps): JSX.Element;
