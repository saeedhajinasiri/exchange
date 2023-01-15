import {Shape, Size, Variant} from './button.props'

export const SIZES = {
  small: 'h-9',
  medium: 'h-12',
  large: 'h-14'
};

export const COLORS = {
  primary: 'bg-primary border-primary text-primary hover:opacity-70 active:bg-primary-light active:text-white',
  secondary: 'bg-secondary border-secondary text-secondary hover:opacity-70 active:bg-secondary-light active:text-white',
  tertiary: 'bg-tertiary border-tertiary text-tertiary hover:opacity-70 active:bg-tertiary-light active:text-white',
  grey: 'bg-grey border-grey text-grey hover:opacity-70 active:bg-grey-dark active:text-white',
  light: 'bg-white border-grey text-grey hover:opacity-70 active:bg-grey-light active:text-white',
  dark: 'bg-grey-dark border-grey text-grey hover:opacity-70 active:bg-grey-light active:text-white',
};

/**
 *
 * @param disabled
 * @param variants
 * @constructor
 */
export const VARIANTS = ({disabled, variants}: { disabled: boolean, variants: Variant }) => {
  if (disabled && variants === 'text') {
    return 'text-grey-light bg-transparent'
  }
  if (disabled && variants === 'outlined') {
    return 'text-grey-light border-grey-light border'
  }
  if (disabled && variants === 'contained') {
    return `text-white text-m-sm md:text-d-sm border-none bg-grey-light`
  }
  if (!disabled && variants === 'text') {
    return 'bg-transparent border-none'
  }
  if (!disabled && variants === 'outlined') {
    return 'border bg-transparent'
  }
  if (!disabled && variants === 'contained') {
    return `text-white text-m-sm border-none md:text-d-sm`
  }
}

/**
 *
 * @param size
 * @param shape
 * @constructor
 */
export const SHAPES = ({size, shape}: { size: Size, shape: Shape }) => {
  let className = 'rounded-md';

  if (shape === 'circle' || shape === 'square') {
    if (size === 'small') {
      className += ' max-w-[36px] min-w-[36px] w-9 px-0';
    } else if (size === 'medium') {
      className += ' max-w-[48px] min-w-[48px] w-12 px-0';
    } else if (size === 'large') {
      className += ' max-w-[64px] min-w-[64px] w-14 px-0';
    }
  } else {
    className += ' px-8';
  }
  if (shape === 'circle' || shape === 'round') {
    className += 'rounded-full';
  }
  return className;
}