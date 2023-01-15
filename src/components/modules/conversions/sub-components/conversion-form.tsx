import React, {ChangeEvent, KeyboardEvent} from "react";
import {Button, Div, Text, TextField} from "@elements";
import CompareArrowsIcon from "@icons/compare-arrows";
import {useDispatch, useSelector} from "react-redux";
import {ConversionActions} from "@store/conversion/conversion-actions";
import {ReducerTypes} from "@store/reducer";
import pressEnterKey from "@utils/press-enter-key";

const ConversionForm = () => {
  const dispatch = useDispatch();
  const {conversionLoading, amount, amountError, fromCurrency, fromCurrencyError, toCurrency, toCurrencyError} = useSelector((state: ReducerTypes) => state.conversion);

  const setAmountField = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(ConversionActions.setAmountAction({amount: e?.target?.value.replaceAll(',', '')}));
  }

  const setFromCurrencyField = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(ConversionActions.setFromCurrencyAction({fromCurrency: e?.target?.value}));
  }

  const setToCurrencyField = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(ConversionActions.setToCurrencyAction({toCurrency: e?.target?.value}));
  }

  const handleConversion = () => {
    dispatch(ConversionActions.convertAction());
  }

  const handleSwapCurrencies = () => {
    dispatch(ConversionActions.swapCurrenciesAction({fromCurrency: toCurrency, toCurrency: fromCurrency}));
  }

  const handlePressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    pressEnterKey({event: e, callBack: handleConversion})
  }

  return (
    <Div className={'flex-col md:flex-row gap-x-10 gap-y-5 items-center my-10'}>
      <TextField
        onChange={setAmountField}
        onKeyPress={handlePressEnter}
        className={'w-full py-2 md:py-0'}
        label={'Amount'}
        value={amount ? parseInt(amount).toLocaleString('en-US') : ''}
        tabindex={"1"}
        error={!!amountError}
        errorMessage={'You have to fill this field'}
      />

      <Div className={'w-full gap-2 md:gap-x-10 py-2 md:py-0'}>
        <TextField
          onChange={setFromCurrencyField}
          onKeyPress={handlePressEnter}
          className={'w-full'}
          label={'From'}
          value={fromCurrency}
          tabindex={"2"}
          error={!!fromCurrencyError}
          errorMessage={'You have to fill this field'}
        />
        <Button onClick={handleSwapCurrencies} color={"light"} shape={"square"} tabindex={"5"}>
          <CompareArrowsIcon className={'text-primary'}/>
        </Button>
      </Div>

      <TextField
        onChange={setToCurrencyField}
        onKeyPress={handlePressEnter}
        className={'w-full py-2 md:py-0'}
        label={'To'}
        value={toCurrency}
        tabindex={"3"}
        error={!!toCurrencyError}
        errorMessage={'You have to fill this field'}
      />

      <Button className={'w-full md:w-auto md:min-w-[150px]'} loading={conversionLoading} disabled={conversionLoading} onClick={handleConversion} tabindex={"4"}>
        <Text color={"white"}>CONVERT</Text>
      </Button>
    </Div>
  )
}

export default ConversionForm;