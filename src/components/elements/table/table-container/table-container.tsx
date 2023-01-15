import React from 'react';
import Div from "../../div";
import {TableContainerProps} from "./table-container.props";
import classNames from "@utils/class-names";


const CustomTableCell = ({children, className, ...rest}: TableContainerProps) => {
  return (
    <div
      className={classNames(
        className,
        "overflow-scroll w-full",
      )}
      {...rest}>
      {children}
    </div>
  )
}

export default CustomTableCell;
