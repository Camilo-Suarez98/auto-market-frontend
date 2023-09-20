import React from 'react'
import Head from "next/head";
import Header from "@/components/Header"

const Layout = ({ title = "", children }) => {
  return (
    <>
      <Head>
        <title>{title === "" ? "Auto Market" : `${title} - Auto Market`}</title>
        <link rel="icon" href="/logo-company.png" />
      </Head>
      <Header />
      <div className='top-16'>
        {children}
      </div>
    </>
  )
}

export default Layout