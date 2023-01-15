import React from "react";
import {HistoryTypeEnum} from "@store/conversion/history-type.enum";
import {useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";
import ExchangeHistoryTable from "./exchange-history-table";
import ExchangeHistoryChart from "./exchange-history-chart";

const ExchangeHistoryResult = () => {
  const {historyType} = useSelector((state: ReducerTypes) => state.conversion);

  if (historyType === HistoryTypeEnum.chart) {
    return (
      <ExchangeHistoryChart/>
    )
  }

  return (
    <ExchangeHistoryTable/>
  )
}

export default ExchangeHistoryResult;