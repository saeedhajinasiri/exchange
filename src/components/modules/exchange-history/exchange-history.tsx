import React from "react";
import {Div, Divider, Text} from "@elements";
import ExchangeHistoryFilter from "./sub-components/exchange-history-filter";
import ExchangeHistoryResult from "./sub-components/exchange-history-result";
import {useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";

const ExchangeHistory = () => {
  const {result} = useSelector((state: ReducerTypes) => state.conversion);

  if (!result) {
    return null;
  }

  return (
    <>
      <Divider/>
      <Div className={'flex-col'}>
        <Text variant={"h1"} type={"bold"} typography={"base"}>Exchange History</Text>

        <ExchangeHistoryFilter/>

        <ExchangeHistoryResult/>
      </Div>
    </>
  )
}

export default ExchangeHistory;