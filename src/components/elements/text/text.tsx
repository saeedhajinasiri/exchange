import React from 'react';
import {TextProps} from './text.props'
import classNames from '@utils/class-names'
import {ALIGN, COLOR, TYPE, TYPOGRAPHY} from './text.style'


const Text = ({children, variant = 'p', className, typography = 'sm', color = 'grey', align = 'left', type = 'regular', style, disabled = false, ...rest}: TextProps) => {
  const Component = variant;

  return (
    <Component
      style={style}
      className={classNames(
        TYPOGRAPHY[typography],
        disabled ? 'text-grey' : COLOR[color],
        ALIGN[align],
        TYPE[type],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Text
