import '../styles/globals.css'
import Head from 'next/head'
import {wrapper} from '@store/store'
import Layout from "../components/modules/layout";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {ConversionActions} from "@store/conversion/conversion-actions";

function MyApp({Component, pageProps}: any) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ConversionActions.setInitialHistoryStatesAction());
  }, []);

  return (
    <>
      <Head>
        <title>Currency Exchange</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <link href="/favicon.ico" rel="icon"/>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default wrapper.withRedux(MyApp)
