import React from 'react';
import Text from '../../text';
import {TableCellProps} from './table-cell.props'
import {SIZES} from "./table-cell.style";
import classNames from "@utils/class-names";


export const TableCell = ({children, className, variant = 'body', size = 'small', textProps, ...rest}: TableCellProps) => {
  const Component = variant === 'head' ? "th" : "td";

  return (
    <Component
      className={classNames(
        className,
        "px-4 bg-opacity-20 min-w-[125px]",
        SIZES[size]
      )}
      {...rest}
    >
      <Text color={'grey'} {...textProps}>{children}</Text>
    </Component>
  )
}

export default TableCell;
