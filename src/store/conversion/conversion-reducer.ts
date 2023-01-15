import {ConversionActions, ConversionReducer} from './conversion'
import {ConversionActionTypes} from "@store/conversion/conversion-actions";
import {HistoryTypeEnum} from "@store/conversion/history-type.enum";
import getFromLocal from "@utils/storage/get-from-local";
import saveToLocal from "@utils/storage/save-to-local";

export const initialState: ConversionReducer = {
  amount: '',
  amountError: false,
  fromCurrency: '',
  fromCurrencyError: false,
  toCurrency: '',
  toCurrencyError: false,
  conversionLoading: false,
  result: '',
  rate: '',
  outcomeAmount: '',
  outcomeFromCurrency: '',
  outcomeToCurrency: '',
  timeSeries: [],
  timeSeriesKeys: [],
  timeSeriesValues: [],
  historyType: HistoryTypeEnum.table,
  historyDays: 7,
  minValue: 0,
  maxValue: 0,
  avgValue: 0,
  conversionHistories: {},
};

export const conversionReducer = (state = initialState, action: ConversionActions) => {
  switch (action.type) {

    case ConversionActionTypes.SET_AMOUNT:
      return {
        ...state,
        amount: action?.data?.amount,
        amountError: !action?.data?.amount,
      }

    case ConversionActionTypes.SET_FROM_CURRENCY:
      return {
        ...state,
        fromCurrency: action?.data?.fromCurrency?.toUpperCase(),
        fromCurrencyError: !action?.data?.fromCurrency,
      }

    case ConversionActionTypes.SET_TO_CURRENCY:
      return {
        ...state,
        toCurrency: action?.data?.toCurrency?.toUpperCase(),
        toCurrencyError: !action?.data?.toCurrency,
      }

    case ConversionActionTypes.CONVERT:
      return {
        ...state,
        conversionLoading: true,
        amountError: !state.amount,
        fromCurrencyError: !state.fromCurrency,
        toCurrencyError: !state.toCurrency,
      }

    case ConversionActionTypes.SET_CONVERSION_LOADING:
      return {
        ...state,
        conversionLoading: false,
      }

    case ConversionActionTypes.SWAP_CURRENCIES:
      return {
        ...state,
        fromCurrency: action?.data?.fromCurrency,
        toCurrency: action?.data?.toCurrency,
      }

    case ConversionActionTypes.SET_CONVERSION_RESULT:
      return {
        ...state,
        result: action?.data?.result,
        rate: action?.data?.rate,
        outcomeAmount: action?.data?.outcomeAmount,
        outcomeFromCurrency: action?.data?.outcomeFromCurrency,
        outcomeToCurrency: action?.data?.outcomeToCurrency,
        conversionLoading: false,
      }

    case ConversionActionTypes.SET_TIME_SERIES_RESULT:
      const data: any = [];
      const dataKeys: any = [];
      const dataValues: any = [];
      let minValue: number = 0;
      let maxValue: number = 0;
      let sumValue: number = 0;
      Object.keys(action?.data?.timeSeries).forEach((item, key) => {
        if (item && action?.data?.timeSeries[item][state.toCurrency]) {
          data.push({
            date: item,
            value: action?.data?.timeSeries[item][state.toCurrency]
          });
          dataKeys.push(item);
          dataValues.push(action?.data?.timeSeries[item][state.toCurrency]);

          if (action?.data?.timeSeries[item][state.toCurrency] < minValue || minValue === 0) {
            minValue = action?.data?.timeSeries[item][state.toCurrency];
          }
          if (action?.data?.timeSeries[item][state.toCurrency] > maxValue) {
            maxValue = action?.data?.timeSeries[item][state.toCurrency];
          }
          sumValue += action?.data?.timeSeries[item][state.toCurrency];
        }
      });

      return {
        ...state,
        timeSeries: data,
        timeSeriesKeys: dataKeys,
        timeSeriesValues: dataValues,
        minValue: minValue,
        maxValue: maxValue,
        avgValue: (sumValue / dataValues.length).toFixed(6),
      }

    case ConversionActionTypes.SET_CHANGE_HISTORY_TYPE:
      return {
        ...state,
        historyType: action?.data?.historyType,
      }

    case ConversionActionTypes.SET_CHANGE_HISTORY_DAYS:
      return {
        ...state,
        historyDays: action?.data?.historyDays,
      }

    case ConversionActionTypes.SET_INITIAL_HISTORY_STATES:
      const conversionHistoriesData = getFromLocal("conversionHistories");
      if (conversionHistoriesData && JSON.parse(conversionHistoriesData)) {
        return {
          ...state,
          conversionHistories: JSON.parse(conversionHistoriesData),
        }
      }
      return {
        ...state,
        conversionHistories: {},
      }

    case ConversionActionTypes.SET_HISTORY_STATES:
      saveToLocal("conversionHistories", JSON.stringify(action?.data?.conversionHistories));
      return {
        ...state,
        conversionHistories: action?.data?.conversionHistories,
      }

    case ConversionActionTypes.DELETE_FROM_HISTORY_STATES:
      const conversionData = state.conversionHistories;
      if (action?.data?.id && conversionData[action?.data?.id]) {
        delete conversionData[action?.data?.id];
      }
      saveToLocal("conversionHistories", JSON.stringify(conversionData));

      return {
        ...state,
        conversionHistories: conversionData,
      }

    default:
      return state
  }
}

export default conversionReducer;
