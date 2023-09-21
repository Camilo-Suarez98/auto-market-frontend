import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='bg-blue-700 w-full py-4 flex flex-col items-center'>
      <Image
        src="/logo-company.png"
        width={70}
        height={70}
        alt="Company's logo"
      />
      <p>
        ©Auto Market. All rights reserved
      </p>
    </footer>
  )
}

export default Footer