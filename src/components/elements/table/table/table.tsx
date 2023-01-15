import React from 'react';
import {TableProps} from './table.props'
import classNames from "@utils/class-names";

export const Table = ({children, className, ...rest}: TableProps) => {
  return (
    <table className={classNames('w-full', className)} {...rest}>{children}</table>
  )
}

export default Table;
