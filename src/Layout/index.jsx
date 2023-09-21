import React from 'react'
import Head from "next/head";
import Header from "@/components/Header"
import Footer from '@/components/Footer';

const Layout = ({ title = "", children }) => {
  return (
    <div>
      <Head>
        <title>{title === "" ? "Auto Market" : `${title} - Auto Market`}</title>
        <link rel="icon" href="/logo-company.png" />
      </Head>
      <Header />
      <div className='my-5'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout