export interface TextFieldProps {
  variant?: 'outlined' | 'standard'

  className?: string

  placeholder?: string

  size?: 'small' | 'medium' | 'large'

  color?: 'primary' | 'secondary' | 'tertiary' | 'grey'

  shape?: 'round' | 'standard'

  disabled?: boolean

  label?: string

  inputClassName?: string

  type?: 'number' | 'text'

  maxLength?: number

  onChange?: (e: any) => void

  onKeyPress?: (e: any) => void

  value?: string

  tabindex?: string

  error?: boolean

  errorMessage?: string
}