import React from 'react'
import {LayoutProps} from './layout.props'
import {Div, Text} from "@elements";
import LogoIcon from "@icons/logo";
import Link from "next/link";
import {siteRoutes} from "@routes/site";
import {useRouter} from "next/router";

const Layout = ({children}: LayoutProps) => {
  const router = useRouter();
//  const isCurrent = url !== '/' && router.pathname.indexOf(url) !== -1;

  return (
    <Div className="flex w-screen h-screen flex-col bg-grey-lighter">
      <Div className={'flex-col sm:flex-row w-screen bg-white shadow-xl px-[4%] sm:px-[10%] items-center sm:gap-x-10 md:gap-x-20'}>
        <Div className={'items-center self-start py-4'}>
          <LogoIcon className={'text-primary'}/>
          <Text color={"light"} typography={"base"}>Currency</Text>
          <Text color={"light"} typography={"base"} type={'bold'}>Exchange</Text>
        </Div>
        <nav>
          <ul className={'flex flex-row'}>
            <li className={`px-3 sm:px-5 md:px-10 py-2 ${router.pathname === '/' ? 'border-primary border-b-2' : ''}`}>
              <Link href={siteRoutes['route.site.home']}>
                <Text color={"light"} className={'uppercase'} type={'bold'}>currency converter</Text>
              </Link>
            </li>
            <li className={`px-3 sm:px-5 md:px-10 py-2 ${router.pathname === '/history' ? 'border-primary border-b-2' : ''}`}>
              <Link href={siteRoutes['route.site.history']}>
                <Text color={"light"} className={'uppercase'} type={'bold'}>view conversion history</Text>
              </Link>
            </li>
          </ul>
        </nav>
      </Div>
      <Div className={'shadow-inner'}>
        {children}
      </Div>
    </Div>
  )
}

export default Layout
