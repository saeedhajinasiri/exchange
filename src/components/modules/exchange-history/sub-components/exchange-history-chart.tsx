import React from "react";
import dynamic from 'next/dynamic'
import {useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ExchangeHistoryChart = () => {
  const {timeSeriesKeys, timeSeriesValues, toCurrency} = useSelector((state: ReducerTypes) => state.conversion);

  const options = {
    chart: {
      id: 'conversion-chart'
    },
    xaxis: {
      categories: timeSeriesKeys
    }
  };
  const series = [{
    name: toCurrency,
    data: timeSeriesValues
  }]

  return (
    <div>
      <Chart options={options} series={series} type="area" width={'100%'} height={320}/>
    </div>
  )
}

export default ExchangeHistoryChart;