import React from 'react'
import {RadioButtonProps} from './radio-button.props'
import {COLORS} from './radio-button.style'
import classNames from '@utils/class-names'
import Text from '../text'

const RadioButton = ({name, color = 'primary', className, disabled = false, checked, onClick, label, ...rest}: RadioButtonProps) => {
  return (
    <label className={'flex flex-row items-center gap-x-2'}>
      <input
        checked={checked}
        onClick={onClick}
        name={name}
        disabled={disabled}
        className={classNames(
          'cursor-pointer h-5 w-5 bg-white',
          disabled ? 'accent-grey' : COLORS[color],
          className,
        )}
        type={'radio'}
        {...rest}
      />
      <Text>{label}</Text>
    </label>
  )
}

export default RadioButton
