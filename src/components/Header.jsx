import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const Header = () => {
  const [showMenu, setShowMenu] = useState(true)
  const [inputValue, setInputValue] = useState('')

  const handleBurgerMenu = () => {
    if (showMenu) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }
  return (
    <header className='flex items-center justify-around w-full bg-blue-700 h-16 absolute md:justify-evenly'>
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
      <div className="burger-menu md:hidden">
        <button
          onClick={handleBurgerMenu}
        >
          {showMenu ?
            <RxHamburgerMenu size={28} /> :
            <AiOutlineClose size={28} />
          }
        </button>
      </div>

      {/* mobile view starts here */}
      {!showMenu &&
        <div className="fixed top-16 text-center w-full h-screen bg-blue-600 md:hidden">
          <div className='h-12 mt-5 flex justify-center items-center'>
            <input
              className='outline-0 text-blue-700 rounded-tl-md rounded-bl-md'
              type="text"
              placeholder="Search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className='rounded-tr-md rounded-br-md'
              type='button'
            >
              <FaMagnifyingGlass />
            </button>
          </div>

          <div className="flex flex-col justify-around items-center">
            <button
              className='bg-blue-500 px-3 py-2 my-5 rounded-md transition duration-500 hover:bg-blue-700'
            >
              Create an Account
            </button>
            <button
              className='bg-blue-500 px-3 py-2 rounded-md transition duration-500 hover:bg-blue-700'
            >
              Login
            </button>
          </div>

          {/* to check after */}
          {/* <div className='h-12 flex justify-center items-center'>
            <button
              className='w-9/12'
              type='submit'
            >
              🌝
            </button>
          </div> */}
        </div>
      }

      {/* desktop view stars here */}
      <div className="hidden md:contents">
        <div className='flex justify-center items-center'>
          <input
            className='outline-0 text-blue-700 rounded-tl-md rounded-bl-md pl-2'
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className='bg-white p-1 text-blue-700 rounded-tr-md rounded-br-md'
            type='button'
          >
            <FaMagnifyingGlass />
          </button>
        </div>

        <div className="flex justify-around items-center md:w-72 md:justify-between">
          <button
            className='bg-blue-500 px-3 py-2 rounded-md transition duration-500 hover:bg-blue-700'
          >
            Create an Account
          </button>
          <button
            className='bg-blue-500 px-3 py-2 rounded-md transition duration-500 hover:bg-blue-700'
          >
            Login
          </button>
        </div>

        {/* To check after */}

        {/* <div className='flex justify-center items-center'>
          <button
            className='w-9/12'
            type='submit'
          >
            🌝
          </button>
        </div> */}
      </div>
    </header>
  )
}

export default Header
