import {Colors} from "@types";

export interface RadioButtonProps {
  name: string

  color?: Colors

  className?: string

  disabled?: boolean

  checked?: boolean

  onClick?: (event?: any) => void

  label: string

  value: string
}
