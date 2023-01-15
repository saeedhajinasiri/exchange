import React from 'react';
import {TableBodyProps} from "./table-body.props";
import classNames from "@utils/class-names";

export const TableBody = ({children, className, ...rest}: TableBodyProps) => {
  return (
    <tbody className={classNames('table-row-group', className)} {...rest}>{children}</tbody>
  )
}

export default TableBody;
