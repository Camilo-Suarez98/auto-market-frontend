import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
  const [showMenu, setShowMenu] = useState(true)

  const handleBurgerMenu = () => {
    if (showMenu) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }
  return (
    <header className='flex items-center justify-around w-full bg-blue-700 h-16 absolute'>
      <div className="flex items-center">
        <Link href="/" className='flex items-center justify-center'>
          <Image
            src="/logo-company.png"
            width={50}
            height={50}
            alt="Company's logo"
          />
          <h1 className='pl-3'>
            AutoMarket
          </h1>
        </Link>
      </div>
      <div className="burger-menu">
        <button
          onClick={handleBurgerMenu}
        >
          {showMenu ?
            <RxHamburgerMenu size={28} /> :
            <AiOutlineClose size={28} />
          }
        </button>
      </div>
    </header>
  )
}

export default Header