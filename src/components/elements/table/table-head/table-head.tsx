import React from 'react';
import {TableHeadProps} from "./table-head.props";
import classNames from "@utils/class-names";

export const TableHead = ({children, className, ...rest}: TableHeadProps) => {
  return (
    <thead className={classNames('table-header-group', className)} {...rest}>{children}</thead>
  )
}

export default TableHead;
