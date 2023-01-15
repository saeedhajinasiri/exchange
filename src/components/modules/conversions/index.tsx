import React from "react";
import {Div, Text} from "@elements";
import ConversionForm from "./sub-components/conversion-form";
import ConversionResult from "./sub-components/conversion-result";

const Conversions = () => {
  return (
    <>
      <Text variant={"h1"} type={"bold"} typography={"lg"}>I want to convert</Text>

      <ConversionForm/>

      <ConversionResult/>
    </>
  )
}

export default Conversions;