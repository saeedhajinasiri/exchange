import {Div, LoadingIndicator, Text} from "@elements";
import React from "react";
import {useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";

const ConversionResult = () => {
  const {result, rate, outcomeAmount, outcomeFromCurrency, outcomeToCurrency, conversionLoading} = useSelector((state: ReducerTypes) => state.conversion);

  if (conversionLoading) {
    return (
      <Div className={'justify-center items-center h-40'}>
        <LoadingIndicator/>
      </Div>
    );
  }
  if (!result) {
    return null;
  }
  return (
    <>
      <Div className={'justify-center mt-10 flex-col sm:flex-row items-center'}>
        <Text typography={"lg"} type={"light"}>{`${outcomeAmount} ${outcomeFromCurrency}`}</Text>
        <Text typography={"lg"} className={'mx-4'}>=</Text>
        <Text type={"bold"} typography={"lg"} color={"secondary"}>{`${result} ${outcomeToCurrency}`}</Text>
      </Div>
      <Div className={'justify-center mt-4'}>
        <Text>{`1 ${outcomeFromCurrency}`}</Text>
        <Text className={'mx-1'}>=</Text>
        <Text>{`${rate} ${outcomeToCurrency}`}</Text>
      </Div>
      <Div className={'justify-center'}>
        <Text>{`1 ${outcomeToCurrency}`}</Text>
        <Text className={'mx-1'}>=</Text>
        <Text>{`${(1 / +rate).toFixed(6)} ${outcomeFromCurrency}`}</Text>
      </Div>
    </>
  )
}

export default ConversionResult;