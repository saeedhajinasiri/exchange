import {CSSProperties, ReactNode} from "react";
import {Colors} from "@types";

export interface TextProps {
  children: string | ReactNode

  variant?: Variants

  className?: string

  typography?: Typography

  color?: Colors

  align?: Align

  type?: Types

  style?: CSSProperties

  disabled?: boolean
}


export type Variants = "h1" | "p" | "span"
export type Typography = 'sm' | 'base' | 'lg'
export type Align = 'right' | 'left' | 'center' | 'justify'
export type Types = "medium" | "bold" | "light" | "regular"