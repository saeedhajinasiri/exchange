import React, {forwardRef} from 'react';
import {DivProps} from './div.props'

const Div = forwardRef<any, DivProps>(function Div(
    {
      children,
      className,
      style,
      onClick,
      dangerouslySetInnerHTML,
      role,
      id,
      dataTestId,
      onMouseOver,
      onMouseLeave,
      ...rest
    }, ref) {

  return (
      <div
          id={id}
          role={role}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
          onClick={onClick}
          style={style}
          className={`flex ${className}`}
          ref={ref}
          data-testid={dataTestId}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
          {...rest}
      >
        {children}
      </div>
  )
})

Div.defaultProps = {
  dataTestId: 'div-test-id',
}

export default Div;
