import React from 'react'
import {Button, Div, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Text} from "@elements";
import DeleteIcon from "@icons/delete";
import {useDispatch, useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";
import ViewIcon from "@icons/view";
import {ConversionActions} from "@store/conversion/conversion-actions";
import {useRouter} from "next/router";
import {siteRoutes} from "@routes/site";

const History = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {conversionHistories} = useSelector((state: ReducerTypes) => state.conversion);

  const showConversion = ({amount, fromCurrency, toCurrency}: { amount: string, fromCurrency: string, toCurrency: string }) => {
    dispatch(ConversionActions.setAmountAction({amount: amount}));
    dispatch(ConversionActions.setFromCurrencyAction({fromCurrency: fromCurrency}));
    dispatch(ConversionActions.setToCurrencyAction({toCurrency: toCurrency}));
    dispatch(ConversionActions.convertAction());
    router.push(siteRoutes['route.site.home']);
  }

  const deleteFromHistory = (id: string) => {
    dispatch(ConversionActions.deleteFromHistoryStatesAction({id: id}))
  }

  if (conversionHistories && Object.keys(conversionHistories).length > 0) {
    return (
      <Div className={'flex-col bg-grey-lighter w-full px-[10%] py-10'}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow className={'h-16'}>
                <TableCell variant={'head'} className={'w-[25%]'} textProps={{color: 'light'}}>Date</TableCell>
                <TableCell variant={'head'} className={'w-[45%]'} textProps={{color: 'light'}}>Event</TableCell>
                <TableCell variant={'head'} className={'w-[30%]'} textProps={{color: 'light'}}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(conversionHistories).map((item: any, key) => {
                return (
                  <TableRow key={`conversion_history_${key}`} className={'group h-14'}>
                    <TableCell>{item?.date}</TableCell>
                    <TableCell>{`Converted an amount of ${item?.amount} from ${item?.fromCurrency} to ${item?.toCurrency}`}</TableCell>
                    <TableCell textProps={{className: 'flex flex-row md:hidden group-hover:flex gap-x-16'}}>
                      <Button
                        onClick={() => showConversion({
                          amount: item?.amount,
                          fromCurrency: item?.fromCurrency,
                          toCurrency: item?.toCurrency,
                        })}
                        size={"small"}
                        variant={"text"}
                        color={"primary"}
                        className={'!pl-0 !pr-0'}>
                        <ViewIcon/>
                        <Text typography={"sm"} className={'px-1 whitespace-nowrap'} type={"bold"} color={"primary"}>View</Text>
                      </Button>
                      <Button onClick={() => deleteFromHistory(item.id)} size={"small"} variant={"text"} color={"tertiary"} className={'!pl-0 !pr-0'}>
                        <DeleteIcon/>
                        <Text typography={"sm"} className={'px-1 whitespace-nowrap'} type={"bold"} color={"tertiary"}>Delete from history</Text>
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Div>
    )
  }

  return (
    <Div className={'flex-col bg-grey-lighter w-full px-[10%] py-10'}>
      <Text variant={"h1"} type={"bold"} typography={"lg"}>Conversion History</Text>
      <Text color={"tertiary"} className={'py-8'}>You don`t Have any conversion history at this moment.</Text>
    </Div>
  )
}

export default History
