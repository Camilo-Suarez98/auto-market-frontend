import Layout from '@/Layout'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const CreateAccountPage = () => {
  return (
    <Layout title='Create Account'>
      <div className='w-5/6 m-auto p-3 my-16 border-4 rounded-xl border-blue-700 min-[500px]:w-8/12 min-[500px]:p-6 sm:w-7/12 md:w-1/2 min-[991px]:w-5/12 lg:w-2/6 xl:w-1/4'>
        <form className='flex flex-col'>
          <h3 className='text-xl min-[500px]:text-2xl sm:text-3xl'>Create an Account</h3>
          <label htmlFor='firstName' className='mt-2 text-lg sm:text-xl'>firstName</label>
          <input
            id='firstName'
            name='firstName'
            type='text'
            className='mb-2 py-1 px-2 rounded-md outline-none'
            placeholder='example@test.com'
          />

          <label htmlFor='lastName' className='mt-2 text-lg sm:text-xl'>Last Name</label>
          <input
            id='lastName'
            name='lastName'
            type='text'
            className='mb-2 py-1 px-2 rounded-md outline-none'
            placeholder='example@test.com'
          />

          <label htmlFor='email' className='mt-2 text-lg sm:text-xl'>Email</label>
          <input
            id='email'
            name='email'
            type='text'
            className='mb-2 py-1 px-2 rounded-md outline-none'
            placeholder='example@test.com'
          />

          <label htmlFor='password' className='mt-2 text-lg sm:text-xl'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            className='mb-2 py-1 px-2 rounded-md outline-none'
            placeholder='Password'
          />

          <button
            className='bg-blue-700 my-2 py-2 rounded-xl md:text-2xl md:mt-6'
          >
            Create Account
          </button>
        </form>
        <h4 className='text-center mt-6'>OR</h4>
        <button
          className='border-blue-700 border-2 w-full flex items-center mt-2 px-3 rounded-xl min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl md:mt-6'
        >
          <FcGoogle className='mr-2' />
          Register with Google
        </button>
      </div>
    </Layout>
  )
}

export default CreateAccountPage