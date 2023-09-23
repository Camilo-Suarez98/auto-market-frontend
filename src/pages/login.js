import Layout from '@/Layout'
import React from 'react'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'

const LoginPage = () => {
  return (
    <Layout title='Login'>
      <div className='w-5/6 m-auto p-3 my-24 border-4 rounded-xl border-blue-700 min-[500px]:w-8/12 min-[500px]:p-6 sm:w-7/12 md:w-1/2 min-[991px]:w-5/12 lg:w-2/6 xl:w-1/4'>
        <form className='flex flex-col'>
          <h3 className='text-xl min-[500px]:text-2xl sm:text-3xl'>Login</h3>
          <label htmlFor='email' className='mt-4 text-lg sm:text-xl'>Email</label>
          <input
            id='email'
            name='email'
            type='text'
            className='mb-4 py-1 px-2 rounded-md outline-none'
            placeholder='example@test.com'
          />

          <label htmlFor='password' className='mt-4 text-lg sm:text-xl'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            className='mb-4 py-1 px-2 rounded-md outline-none'
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