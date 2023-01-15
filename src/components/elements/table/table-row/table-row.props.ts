import {ReactNode} from "react";
import {Colors} from "@types";

export interface TableRowCustomProps {
  children?: ReactNode

  color?: Colors

  backgroundColor?: Colors

  className?: string

  hasBorder?: boolean
}

