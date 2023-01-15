import {HistoryTypeEnum} from "@store/conversion/conversion-reducer";

export interface ConversionReducer {
  amount: string
  amountError: string | boolean
  fromCurrency: string
  fromCurrencyError: string | boolean
  toCurrency: string
  toCurrencyError: string | boolean
  conversionLoading: boolean
  result: string
  rate: string
  outcomeAmount: string
  outcomeFromCurrency: string
  outcomeToCurrency: string
  timeSeries: any
  timeSeriesKeys: any
  timeSeriesValues: any
  historyType: HistoryTypeEnum
  historyDays: number
  minValue: number
  maxValue: number
  avgValue: number
  conversionHistories: any
}

export interface ConversionActions {
  type: string
  data?: {
    id?: string
    amount?: string
    amountError?: string | undefined
    fromCurrency?: string
    fromCurrencyError?: string | undefined
    toCurrency?: string
    toCurrencyError?: string | undefined
    conversionLoading?: boolean
    result?: string
    rate?: string
    outcomeAmount?: string
    outcomeFromCurrency?: string
    outcomeToCurrency?: string
    timeSeries?: any
    timeSeriesKeys?: any
    timeSeriesValues?: any
    historyType?: HistoryTypeEnum
    historyDays?: number
    minValue?: number
    maxValue?: number
    avgValue?: number
    conversionHistories?: any
  }
}
