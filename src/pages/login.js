import Layout from '@/Layout'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FcGoogle } from 'react-icons/fc'

const LoginPage = () => {
  const [userData, setUserData] = useState({})

  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target

    setUserData({
      ...userData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const loginData = { ...userData }

    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/local/login`, fetchConfig)
    const data = await response.json()
    const { profile, token } = data

    localStorage.setItem('token', token)
    localStorage.setItem('firstName', profile.firstName)
    localStorage.setItem('lastName', profile.lastName)
    localStorage.setItem('email', profile.email)

    router.push('/profile')
  }

  return (
    <Layout title='Login'>
      <div className='w-5/6 m-auto p-3 my-24 border-4 rounded-xl border-blue-700 min-[500px]:w-8/12 min-[500px]:p-6 sm:w-7/12 md:w-1/2 min-[991px]:w-5/12 lg:w-2/6 xl:w-1/4'>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <h3 className='text-xl min-[500px]:text-2xl sm:text-3xl'>Login</h3>
          <label htmlFor='email' className='mt-4 text-lg sm:text-xl'>Email</label>
          <input
            id='email'
            name='email'
            type='text'
            onChange={handleChange}
            className='mb-4 py-1 px-2 rounded-md outline-none text-blue-700'
            placeholder='example@test.com'
          />

          <label htmlFor='password' className='mt-4 text-lg sm:text-xl'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            onChange={handleChange}
            className='mb-4 py-1 px-2 rounded-md outline-none text-blue-700'
            placeholder='Password'
          />

          <button
            className='bg-blue-700 my-2 py-2 rounded-xl md:text-2xl md:mt-6'
          >
            Login
          </button>
        </form>
        <p className='text-sm mb-6'>
          Don&apos;t have an account {" "}
          <Link href={'/create-account'} className='text-blue-700 text-lg'>
            Sign up
          </Link>
        </p>
        <h4 className='text-center'>OR</h4>
        <button
          className='border-blue-700 border-2 w-full flex items-center mt-2 px-3 rounded-xl min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl md:mt-6'
        >
          <FcGoogle className='mr-2' />
          Login with Google
        </button>
      </div>
    </Layout>
  )
}

export default LoginPage