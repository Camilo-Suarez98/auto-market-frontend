import React from 'react'
import Head from "next/head";
import Header from "@/components/Header"

const Layout = ({ title = "", children }) => {
  return (
    <div className='relative'>
      <Head>
        <title>{title === "" ? "Auto Market" : `${title} - Auto Market`}</title>
        <link rel="icon" href="/logo-company.png" />
      </Head>
      <Header />
      <div className='absolute top-16'>
        {children}
      </div>
    </div>
  )
}

export default Layout