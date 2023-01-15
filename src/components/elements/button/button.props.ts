import {ReactNode} from "react";

export interface ButtonProps {
  children?: ReactNode

  color?: Colors

  size?: Size

  variant?: Variant

  shape?: Shape

  className?: string

  onClick?: (event?: any) => void

  disabled?: boolean

  loading?: boolean

  tabindex?: string

  dataTestId?: string
}


export type Colors = 'primary' | 'secondary' | 'tertiary' | 'grey' | 'light' | 'dark'
export type Variant = 'text' | 'outlined' | 'contained';
export type Size = 'small' | 'medium' | 'large';
export type Shape = "circle" | "square" | "rectangle" | 'round'