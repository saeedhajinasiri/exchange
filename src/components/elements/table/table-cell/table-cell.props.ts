import {TextProps} from "../../text/text.props";
import {ReactNode} from "react";

export interface TableCellProps {
  children: string | ReactNode

  size?: 'small' | 'medium' | 'large'

  className?: string

  variant?: 'head' | 'body' | 'footer';

  textProps?: Omit<TextProps, 'children'>

  colSpan?: number
}

