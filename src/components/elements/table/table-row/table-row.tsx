import React from 'react';
import {TableRowCustomProps} from './table-row.props'
import {COLORS} from "./table-row.style";
import classNames from "@utils/class-names";


export const TableRow = ({children, className, hasBorder = true, color = 'white', ...rest}: TableRowCustomProps) => {
  return (
    <tr
      className={classNames(
        hasBorder ? 'border-b border-grey-100' : "",
        "border-opacity-20 hover:bg-opacity-75",
        COLORS[color],
        className
      )}
      {...rest}>
      {children}
    </tr>
  )
}

export default TableRow;
