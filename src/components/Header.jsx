import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const Header = () => {
  const [showMenu, setShowMenu] = useState(true)
  const [inputValue, setInputValue] = useState('')

  const router = useRouter()

  const handleBurgerMenu = () => {
    if (showMenu) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }
  return (
    <header className='flex items-center justify-around w-full bg-blue-700 h-16 md:justify-evenly'>
      <div className="flex items-center">
        <Link href="/" className='flex items-center justify-center'>
          <Image
            src="/logo-company.png"
            width={50}
            height={50}
            alt="Company's logo"
          />
          <h1 className='pl-3 font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
            Auto Market
          </h1>
        </Link>
      </div>
      <div className="burger-menu md:hidden">
        <button
          className='outline-none'
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
        <div className="absolute top-16 z-50 text-center w-full h-screen bg-blue-600 md:hidden">
          <div className='h-12 mt-5 flex justify-center items-center'>
            <input
              className='outline-0 text-blue-700 rounded-tl-md rounded-bl-md'
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

          <div className="flex flex-col justify-around items-center">
            <button
              className='bg-blue-500 px-3 py-2 my-5 rounded-md transition duration-500 hover:bg-blue-700'
              onClick={() => router.push('/create-account')}
            >
              Create an Account
            </button>
            <button
              className='bg-blue-500 px-3 py-2 rounded-md transition duration-500 hover:bg-blue-700'
              onClick={() => router.push('/login')}
            >
              Login
            </button>
          </div>

          {/* to check after/ nice to have */}
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

        <div className="flex items-center md:w-72 justify-around lg:justify-between">
          <button
            className='bg-blue-500 px-3 py-2 rounded-md transition duration-500 hover:bg-blue-600'
            onClick={() => router.push('/create-account')}
          >
            Create an Account
          </button>
          <button
            className='bg-blue-500 px-3 py-2 rounded-md transition duration-500 hover:bg-blue-600'
            onClick={() => router.push('/login')}
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
