import * as React from 'react'
import { action } from '@storybook/addon-actions'
import { text, boolean, selectV2 } from '@storybook/addon-knobs'
import Button from './button.tsx'

const story = () => {
  const sizeOptions = [null, 1,2,3,4,5]
  const spinnerPositionOptions = ['left', 'right']
  const themeOptions = [null, 'secondary', 'alert', 'error', 'success']

  const childrenKnob = text('Children', 'Hello Button')
  const clickKnob = action('trigger onClick')
  const disabledKnob = boolean('Disabled', false)
  const spinnerKnob = boolean('Spinner', false)
  const spinnerPositionKnob = selectV2('Spinner Position', spinnerPositionOptions, Button.defaultProps.spinnerPosition)
  const sizeKnob = selectV2('Button Size', sizeOptions)
  const variantKnob = selectV2('Button Varaint', themeOptions)

  let cssClass = `${sizeKnob ? `Button--size-${sizeKnob}` : ''}`
  cssClass += `${variantKnob ? `${sizeKnob ? ' ' : ''}Button--variant-${variantKnob}` : ''}`

  return (
    <Button
      disabled={disabledKnob}
      onClick={clickKnob}
      spinner={spinnerKnob}
      spinnerPosition={spinnerPositionKnob}
      className={cssClass}
    >
      {childrenKnob}
    </Button>
  )
}

export default story
