import React from 'react'
import {DividerProps} from './divider.props'
import {COLOR} from "./divider.styles";
import classNames from "@utils/class-names";

export const Divider = (props: DividerProps) => {
  const {color = 'primary'} = props;
  return (
    <div className={classNames(`w-full border-t my-10 opacity-30`,
      COLOR[color],
    )}/>
  )
}

Divider.defaultProps = {
  color: 'light'
}


export default Divider
