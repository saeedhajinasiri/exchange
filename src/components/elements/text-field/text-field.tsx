import React from 'react'
import {TextFieldProps} from './text-field.props'
import classNames from '@utils/class-names'
import {COLORS, LABEL_COLORS, LABEL_VARIANTS, SIZES, VARIANTS} from './text-field.style'
import Text from '../text';


const TextField = (
  {
    variant = 'standard',
    className,
    placeholder,
    size = 'medium',
    color = 'primary',
    disabled = false,
    label,
    inputClassName,
    type = 'text',
    maxLength,
    onChange,
    value,
    error = false,
    errorMessage,
    ...rest
  }: TextFieldProps) => {

  return (
    <div className={`relative min-w-[200px] ${className}`}>
      <input
        disabled={disabled}
        type={type}
        maxLength={maxLength}
        onChange={onChange}
        value={value}
        placeholder={label ? " " : placeholder}
        className={classNames(
          `relative z-[2] peer w-full h-full transition-all px-3 py-2.5 focus:border-t-transparent`,
          SIZES[size],
          disabled ? 'border-grey' : error ? 'border-tertiary' : COLORS[color],
          VARIANTS[variant],
          inputClassName,
        )}
        {...rest}
      />
      {label ? (
        <label className={classNames(
          `flex z-[1] w-full select-none absolute text-grey
          leading-tight peer-focus:leading-tight peer-placeholder-shown:leading-[4]
          peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-danger 
          peer-disabled:before:border-transparent peer-disabled:after:border-transparent
          transition-all top-0 peer-focus:translate-y-[-50%] text-m-sm before:w-3
          before:translate-y-[50%] after:translate-y-[50%]
          before:mr-1 after:ml-1
          peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent
           `,
          LABEL_VARIANTS[variant],
          disabled ? 'border-grey' : error ? 'border-danger' : LABEL_COLORS[color],
        )}>
          {label}
        </label>
      ) : null}
      {error && errorMessage ? (
        <Text className={'absolute py-1'} color={"tertiary"}>{errorMessage}</Text>
      ) : null}
    </div>
  )
}

//

export default TextField;


// <div className="relative w-full min-w-[200px] h-10">
//   <input className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500" placeholder=" "/>
//   <label
//     className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
//     Input Blue
//   </label>
// </div>