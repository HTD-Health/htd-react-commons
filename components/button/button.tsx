/**
*
* Button
*
*/

import * as React from 'react'
import './button.scss'

import Spinner from '../spinner/spinner'

type CssClasses = {cssElement?: string, cssSpinner?: string}

interface ButtonProps {
  /** is Button in disabled state */
  disabled?: boolean;
  /** show Spinner */
  spinner?: boolean;
  /** Spinner position if spinner is true  */
  spinnerPosition?: 'left' | 'right';
  /** HTML attribute for button type  */
  type?: string;
  /** additional classes  */
  className?: string;
  /** define on-click method */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactChildren | string;
  cssClass?: CssClasses;
}

export const Button: React.SFC<ButtonProps> = ({disabled, spinner, spinnerPosition, type, children, className, onClick, cssClass}: ButtonProps) => {

  const {cssElement, cssSpinner} = cssClass!

  return (
    <button
      disabled={disabled}
      type={type}
      className={`${cssElement}${className ? ' ' + className : ''}`}
      onClick={onClick}>
        {children &&
           <span>{React.Children.toArray(children)}</span>
         }

        {spinner &&
          <Spinner
            className={`${cssElement}__${cssSpinner} ${cssElement}__${cssSpinner}-${spinnerPosition}`} />
          }
    </button>
    )
}

Button.defaultProps = {
  disabled: false,
  spinner: false,
  spinnerPosition: 'right',
  type: 'button',
  cssClass: {
    cssElement: 'Button',
    cssSpinner: 'Spinner'
  }
}

export default Button
