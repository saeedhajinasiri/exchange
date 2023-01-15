const preType = 'CONVERSION_';

export const ConversionActionTypes = {
  CONVERT: `${preType}CONVERT`,
  SWAP_CURRENCIES: `${preType}SWAP_CURRENCIES`,
  SET_AMOUNT: `${preType}SET_AMOUNT`,
  SET_FROM_CURRENCY: `${preType}SET_FROM_CURRENCY`,
  SET_TO_CURRENCY: `${preType}SET_TO_CURRENCY`,
  SET_CONVERSION_RESULT: `${preType}SET_CONVERSION_RESULT`,
  SET_TIME_SERIES_RESULT: `${preType}SET_TIME_SERIES_RESULT`,
  SET_CHANGE_HISTORY_TYPE: `${preType}SET_CHANGE_HISTORY_TYPE`,
  SET_CHANGE_HISTORY_DAYS: `${preType}SET_CHANGE_HISTORY_DAYS`,
  SET_INITIAL_HISTORY_STATES: `${preType}SET_INITIAL_HISTORY_STATES`,
  SET_HISTORY_STATES: `${preType}SET_HISTORY_STATES`,
  DELETE_FROM_HISTORY_STATES: `${preType}DELETE_FROM_HISTORY_STATES`,
  SET_CONVERSION_LOADING: `${preType}SET_CONVERSION_LOADING`,
};

const convertAction = () => ({type: ConversionActionTypes.CONVERT});
const swapCurrenciesAction = (data: { fromCurrency: string, toCurrency: string }) => ({type: ConversionActionTypes.SWAP_CURRENCIES, data: data});
const setAmountAction = (data: { amount: string }) => ({type: ConversionActionTypes.SET_AMOUNT, data: data});
const setFromCurrencyAction = (data: { fromCurrency: string }) => ({type: ConversionActionTypes.SET_FROM_CURRENCY, data: data});
const setToCurrencyAction = (data: { toCurrency: string }) => ({type: ConversionActionTypes.SET_TO_CURRENCY, data: data});
const setConversionResultAction = (data: { result: string, rate: string, outcomeAmount: string, outcomeFromCurrency: string, outcomeToCurrency: string }) => ({type: ConversionActionTypes.SET_CONVERSION_RESULT, data: data});
const setChangeHistoryAction = (data: { historyType: string }) => ({type: ConversionActionTypes.SET_CHANGE_HISTORY_TYPE, data: data});
const setChangeHistoryDaysAction = (data: { historyDays: string }) => ({type: ConversionActionTypes.SET_CHANGE_HISTORY_DAYS, data: data});
const setInitialHistoryStatesAction = () => ({type: ConversionActionTypes.SET_INITIAL_HISTORY_STATES});
const setHistoryStatesAction = (data: { conversionHistories: object }) => ({type: ConversionActionTypes.SET_HISTORY_STATES, data: data});
const deleteFromHistoryStatesAction = (data: { id: string }) => ({type: ConversionActionTypes.DELETE_FROM_HISTORY_STATES, data: data});


export const ConversionActions = {
  convertAction: convertAction,
  swapCurrenciesAction: swapCurrenciesAction,
  setAmountAction: setAmountAction,
  setFromCurrencyAction: setFromCurrencyAction,
  setToCurrencyAction: setToCurrencyAction,
  setConversionResultAction: setConversionResultAction,
  setChangeHistoryAction: setChangeHistoryAction,
  setChangeHistoryDaysAction: setChangeHistoryDaysAction,
  setInitialHistoryStatesAction: setInitialHistoryStatesAction,
  setHistoryStatesAction: setHistoryStatesAction,
  deleteFromHistoryStatesAction: deleteFromHistoryStatesAction,
};
