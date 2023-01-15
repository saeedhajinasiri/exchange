import {all, select, takeLatest, put} from "redux-saga/effects";
import {ConversionActionTypes} from './conversion-actions'
import {ConvertApi, TimeSeriesApi} from '@api/conversion'
import {conversionStore} from './conversion-store'
import moment from "moment";


function* convertWatcher() {
  try {
    const {amount, fromCurrency, toCurrency, conversionHistories} = yield select(conversionStore);

    if (amount && fromCurrency && toCurrency) {
      const response: { data: { result: string, info: { rate: string } } } = yield ConvertApi({amount: amount, from: fromCurrency, to: toCurrency});
      yield put({
        type: ConversionActionTypes.SET_CONVERSION_RESULT,
        data: {
          result: response?.data?.result,
          rate: response?.data?.info?.rate,
          outcomeAmount: amount,
          outcomeFromCurrency: fromCurrency,
          outcomeToCurrency: toCurrency,
        }
      });

      yield put({
        type: ConversionActionTypes.SET_HISTORY_STATES,
        data: {
          conversionHistories: Object.assign({}, conversionHistories, {
            [moment().unix()]: {
              id: moment().unix(),
              date: moment().format("YYYY-MM-DD @ HH:mm"),
              amount: amount,
              fromCurrency: fromCurrency,
              toCurrency: toCurrency,
            }
          })
        }
      });

      yield timeSeriesWatcher();
    } else {
      yield put({type: ConversionActionTypes.SET_CONVERSION_LOADING});
    }
  } catch (error) {
    yield put({
      type: ConversionActionTypes.SET_CONVERSION_RESULT,
      data: {
        result: '',
        rate: '',
        outcomeAmount: '',
        outcomeFromCurrency: '',
        outcomeToCurrency: '',
      }
    })
  }
}

function* timeSeriesWatcher() {
  try {
    const moment = require('moment');
    const {fromCurrency, toCurrency, historyDays} = yield select(conversionStore);
    const response: { data: { rates: any } } = yield TimeSeriesApi({
      base: fromCurrency,
      symbols: toCurrency,
      start_date: moment().subtract(historyDays, 'days').format("YYYY-MM-DD"),
      end_date: moment().format("YYYY-MM-DD")
    });

    yield put({
      type: ConversionActionTypes.SET_TIME_SERIES_RESULT,
      data: {
        timeSeries: response?.data?.rates,
      }
    });

  } catch (error) {
  }
}

function* conversionMiddleware() {
  yield all([
    takeLatest(ConversionActionTypes.CONVERT, convertWatcher),
    takeLatest(ConversionActionTypes.SET_CHANGE_HISTORY_DAYS, timeSeriesWatcher)
  ])
}

export default conversionMiddleware;
