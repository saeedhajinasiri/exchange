export const VARIANTS = {
  outlined: 'bg-transparent border hover:bg-transparent focus:border-2 rounded',
  standard: 'bg-transparent border-x-none border-t-none !focus:border-x-none !border-b !rounded-none',
};

export const SIZES = {
  small: 'h-8 sm:h-10',
  medium: 'h-10 sm:h-12',
  large: 'h-12 sm:h-14'
}

export const COLORS = {
  primary: 'bg-primary border-primary ',
  secondary: 'bg-secondary border-secondary',
  tertiary: 'bg-tertiary border-tertiary',
  grey: 'bg-grey border-grey',
}

export const LABEL_COLORS = {
  primary: 'before:peer-focus:border-primary after:peer-focus:border-primary',
  secondary: 'before:peer-focus:border-secondary after:peer-focus:border-secondary',
  tertiary: 'before:peer-focus:border-tertiary after:peer-focus:border-tertiary',
  grey: 'before:peer-focus:border-grey after:peer-focus:border-grey',
}

export const LABEL_VARIANTS = {
  outlined: 'before:peer-focus:border-t-2 after:peer-focus:border-t-2 peer-focus:rounded peer-events-none before:rounded-tl before:border-t peer-focus:before:border-t-2 before:border-l after:rounded-tr after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:flex-grow after:box-border before:pointer-events-none before:transition-all after:pointer-events-none after:transition-all',
  standard: '!before:peer-focus:border-t-0 !after:peer-focus:border-t-0 ',
};
