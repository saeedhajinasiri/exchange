import React from 'react'
import {Div} from '@elements'
import Conversions from "../components/modules/conversions";
import ExchangeHistory from "../components/modules/exchange-history/exchange-history";

const Home = () => {
  return (
    <Div className={'flex-col bg-grey-lighter w-full px-[10%] py-10'}>
      <Conversions/>

      <ExchangeHistory/>
    </Div>
  )
}

export default Home
