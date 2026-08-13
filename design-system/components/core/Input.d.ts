import * as React from 'react';

/** Single-line field. Pass invert when it sits on the ink surface. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Styles the field for dark backgrounds. */
  invert?: boolean;
}
export function Input(props: InputProps): JSX.Element;
