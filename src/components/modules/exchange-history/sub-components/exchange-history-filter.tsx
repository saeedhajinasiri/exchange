import React, {ChangeEvent} from "react";
import {Div, RadioButton} from "@elements";
import {HistoryTypeEnum} from "@store/conversion/history-type.enum";
import {ConversionActions} from "@store/conversion/conversion-actions";
import {useDispatch, useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";

const ExchangeHistoryFilter = () => {
  const dispatch = useDispatch();
  const {historyType} = useSelector((state: ReducerTypes) => state.conversion);

  const changeHistoryDays = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(ConversionActions.setChangeHistoryDaysAction({historyDays: e?.target?.value}));
  }
  const changeHistoryType = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(ConversionActions.setChangeHistoryAction({historyType: e?.target?.value}));
  }

  return (
    <Div>
      <Div className={'flex-col sm:flex-row sm:grow md:grow-0 md:basis-1/2 justify-between gap-y-4 py-4'}>
        <select onChange={changeHistoryDays} className={'w-72 h-10 bg-transparent border-b-[1px] border-grey-light text-grey font-bold'}>
          <option selected value={7}>7 days</option>
          <option value={14}>14 days</option>
          <option value={30}>30 days</option>
        </select>

        <Div className={'gap-x-6 mr-2'}>
          <RadioButton
            name={'history-type'}
            onClick={changeHistoryType}
            checked={historyType === HistoryTypeEnum.table}
            label={'Table'}
            value={HistoryTypeEnum.table}
          />
          <RadioButton
            name={'history-type'}
            onClick={changeHistoryType}
            checked={historyType === HistoryTypeEnum.chart}
            label={'Chart'}
            value={HistoryTypeEnum.chart}
          />
        </Div>
      </Div>
    </Div>
  )
}

export default ExchangeHistoryFilter;