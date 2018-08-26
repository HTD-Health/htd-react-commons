import * as React from 'react'
import './spinner.scss'

const SPINNER_CIRCLES = 12;

function range(length: number): Array<number> {
  return Array(length).fill('').map((item, index) => index + 1)
}

type CssClasses = {cssElement: string, cssCircle: string}

interface SpinnerProps {
  /** additional classes  */
  className?: string;
  /** default element CSS classes  */
  cssClass?: CssClasses;
}

export const Spinner: React.SFC<SpinnerProps> = ({className, cssClass}: SpinnerProps) => {
  const {cssElement, cssCircle} = cssClass!
  return (
    <div className={`${cssElement}${className ? ` ${className}` : ''}`}>
      {range(SPINNER_CIRCLES).map((i, index) =>
        <div key={`spinnter-item-${index}`} className={`${cssElement}__${cssCircle} ${cssElement}__${cssCircle}-${i}`} />)}
    </div>
   )
}

Spinner.defaultProps = {
  cssClass: {
    cssElement: 'Spinner',
    cssCircle: 'circle'
  }
}

export default Spinner;