import * as React from 'react';

/**
 * A free learning track. Exactly one card in a set may be flagship.
 * @startingPoint section="Content" subtitle="Tutorial track card, standard and flagship" viewport="700x230"
 */
export interface TutorialCardProps {
  /** Two-digit ordinal, e.g. "01". */
  index: string;
  title: string;
  description: string;
  /** Trailing link text, e.g. "9 lessons →". */
  meta: string;
  href?: string;
  /** Renders on sun yellow with a Flagship badge. */
  flagship?: boolean;
}
export function TutorialCard(props: TutorialCardProps): JSX.Element;
