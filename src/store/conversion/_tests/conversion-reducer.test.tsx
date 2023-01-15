import React from "react";
import {cleanup} from "test";
import {conversionReducer, initialState} from "../conversion-reducer";
import {ConversionActionTypes} from '../conversion-actions'
import {HistoryTypeEnum} from "@store/conversion/history-type.enum";

afterEach(cleanup)

describe('Test Conversion Reducer', () => {

  it('test initial state', () => {
    expect(conversionReducer(undefined, {
      type: "default",
      data: {}
    })).toEqual(initialState);
  })

  it('test set amount', () => {
    expect(conversionReducer(initialState,
      {
        type: ConversionActionTypes.SET_AMOUNT,
        data: {
          amount: "2000"
        }
      })).toEqual({
      ...initialState,
      amount: "2000",
    });
  });

  it('test set from_currency', () => {
    expect(conversionReducer(initialState,
      {
        type: ConversionActionTypes.SET_FROM_CURRENCY,
        data: {
          fromCurrency: "EUR"
        }
      })).toEqual({
      ...initialState,
      fromCurrency: "EUR"
    });
  });

  it('test set to_currency', () => {
    expect(conversionReducer(initialState,
      {
        type: ConversionActionTypes.SET_TO_CURRENCY,
        data: {
          toCurrency: "USD"
        }
      })).toEqual({
      ...initialState,
      toCurrency: "USD"
    });
  });

  it('test set convert', () => {
    expect(conversionReducer(initialState,
      {
        type: ConversionActionTypes.CONVERT,
        data: {
          conversionLoading: true
        }
      })).toEqual({
      ...initialState,
      amountError: true,
      fromCurrencyError: true,
      toCurrencyError: true,
      conversionLoading: true
    });
  });

  it('test set set_conversion_loading', () => {
    expect(conversionReducer(initialState,
      {
        type: ConversionActionTypes.SET_CONVERSION_LOADING,
      })).toEqual({
      ...initialState,
      conversionLoading: false
    });
  });

  it('test set swap_currencies', () => {
    expect(conversionReducer(initialState,
      {
        type: ConversionActionTypes.SWAP_CURRENCIES,
        data: {
          fromCurrency: "USD",
          toCurrency: "EUR",
        }
      })).toEqual({
      ...initialState,
      fromCurrency: "USD",
      toCurrency: "EUR",
    });
  });

  it('test set set_conversion_result', () => {
    expect(conversionReducer(initialState,
      {
        type: ConversionActionTypes.SET_CONVERSION_RESULT,
        data: {
          result: "20",
          rate: "1.5",
          outcomeAmount: "30",
          outcomeFromCurrency: "USD",
          outcomeToCurrency: "EUR",
        }
      })).toEqual({
      ...initialState,
      result: "20",
      rate: "1.5",
      outcomeAmount: "30",
      outcomeFromCurrency: "USD",
      outcomeToCurrency: "EUR",
      conversionLoading: false,
    });
  });

  it('test set set_time_series_result', () => {
    const state = Object.assign({}, initialState, {amount: '10', fromCurrency: 'EUR', toCurrency: 'USD'});
    expect(conversionReducer(state,
      {
        type: ConversionActionTypes.SET_TIME_SERIES_RESULT,
        data: {
          timeSeries: {
            "2023-01-03": {
              "USD": 1.055318
            },
            "2023-01-04": {
              "USD": 1.061148
            }
          },
        }
      })).toEqual({
      ...state,
      "timeSeries": [
        {
          "date": "2023-01-03",
          "value": 1.055318,
        },
        {
          "date": "2023-01-04",
          "value": 1.061148,
        },
      ],
      "timeSeriesKeys": [
        "2023-01-03",
        "2023-01-04",
      ],
      "timeSeriesValues": [
        1.055318,
        1.061148,
      ],
      "maxValue": 1.061148,
      "minValue": 1.055318,
      "avgValue": "1.058233",
    });
  });

  it('test set set_change_history_type', () => {
    expect(conversionReducer(initialState,
      {
        type: ConversionActionTypes.SET_CHANGE_HISTORY_TYPE,
        data: {
          historyType: HistoryTypeEnum.table,
        }
      })).toEqual({
      ...initialState,
      historyType: HistoryTypeEnum.table,
    });
  });

  it('test set set_change_history_days', () => {
    expect(conversionReducer(initialState,
      {
        type: ConversionActionTypes.SET_CHANGE_HISTORY_DAYS,
        data: {
          historyDays: 7,
        }
      })).toEqual({
      ...initialState,
      historyDays: 7,
    });
  });

  it('test set set_change_history_days', () => {
    expect(conversionReducer(initialState,
      {
        type: ConversionActionTypes.SET_INITIAL_HISTORY_STATES,
        data: {
          conversionHistories: {},
        }
      })).toEqual({
      ...initialState,
      conversionHistories: {},
    });
  });

  it('test set set_history_states', () => {
    expect(conversionReducer(initialState,
      {
        type: ConversionActionTypes.SET_HISTORY_STATES,
        data: {
          conversionHistories: {},
        }
      })).toEqual({
      ...initialState,
      conversionHistories: {},
    });
  });

  it('test set delete_from_history_states', () => {
    expect(conversionReducer(initialState,
      {
        type: ConversionActionTypes.DELETE_FROM_HISTORY_STATES,
        data: {
          conversionHistories: {},
        }
      })).toEqual({
      ...initialState,
      conversionHistories: {},
    });
  });

});

