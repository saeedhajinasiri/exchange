import React from "react";
import {Div, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@elements";
import {useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";

const ExchangeHistoryTable = () => {
  const {timeSeries, minValue, maxValue, avgValue} = useSelector((state: ReducerTypes) => state.conversion);

  return (
    <Div className={'gap-4 my-10 flex-col md:flex-row'}>
      <TableContainer className={'md:grow-0 md:basis-1/2'}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell variant={'head'} textProps={{color: 'light'}}>Date</TableCell>
              <TableCell variant={'head'} textProps={{color: 'light'}}>Exchange Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {timeSeries.length > 0 && timeSeries.map((item: any, key: string) => {
              return (
                <TableRow key={`table_result_${key}`}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.value}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer className={'md:grow-0 md:basis-1/2'}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell variant={'head'} colSpan={2} className={'w-full'} textProps={{color: 'light'}}>Statistics</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Lowest</TableCell>
              <TableCell>{minValue.toString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Highest</TableCell>
              <TableCell>{maxValue.toString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Average</TableCell>
              <TableCell>{avgValue.toString()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Div>
  )
}

export default ExchangeHistoryTable;