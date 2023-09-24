import Layout from '@/Layout'
import React from 'react'

const publishCar = () => {
  return (
    <Layout>
      <div>
        <h3 className='text-center text-4xl mt-12'>Publish your car and sell it faster and safer</h3>
        <div className='upload-img'>

        </div>

        <div className='w-5/6 m-auto p-3 my-16 border-4 rounded-xl border-blue-700 min-[500px]:w-8/12 min-[500px]:p-6 sm:w-7/12 md:w-1/2 min-[991px]:w-5/12 lg:w-2/6 xl:w-1/4'>
          <form className='flex flex-col'>
            <label htmlFor='brand' className='mt-2 text-lg sm:text-xl'>Brand</label>
            <input
              id='brand'
              name='brand'
              type='text'
              className='mb-2 py-1 px-2 rounded-md outline-none'
              placeholder='Ex: Chevrolet'
            />

            <label htmlFor='model' className='mt-2 text-lg sm:text-xl'>Model</label>
            <input
              id='model'
              name='model'
              type='text'
              className='mb-2 py-1 px-2 rounded-md outline-none'
              placeholder='Ex: Sonic'
            />

            <label htmlFor='year' className='mt-2 text-lg sm:text-xl'>Year</label>
            <input
              id='year'
              name='year'
              type='text'
              className='mb-2 py-1 px-2 rounded-md outline-none'
              placeholder='Ex: 2017'
            />

            <label htmlFor='km' className='mt-2 text-lg sm:text-xl'>Km</label>
            <input
              id='km'
              name='km'
              type='text'
              className='mb-2 py-1 px-2 rounded-md outline-none'
              placeholder='Ex: 12972'
            />

            <label htmlFor='location' className='mt-2 text-lg sm:text-xl'>Location</label>
            <input
              id='location'
              name='location'
              type='text'
              className='mb-2 py-1 px-2 rounded-md outline-none'
              placeholder='Ex: Bucaramanga'
            />

            <label htmlFor='fuel' className='mt-2 text-lg sm:text-xl'>Fuel</label>
            <input
              id='fuel'
              name='fuel'
              type='text'
              className='mb-2 py-1 px-2 rounded-md outline-none'
              placeholder='Ex: Diesel'
            />

            <label htmlFor='color' className='mt-2 text-lg sm:text-xl'>Color</label>
            <input
              id='color'
              name='color'
              type='text'
              className='mb-2 py-1 px-2 rounded-md outline-none'
              placeholder='Ex: Red'
            />

            <label htmlFor='price' className='mt-2 text-lg sm:text-xl'>Price</label>
            <input
              id='price'
              name='price'
              type='text'
              className='mb-2 py-1 px-2 rounded-md outline-none'
              placeholder='Ex: $50.000.000'
            />

            <button
              className='bg-blue-700 my-2 py-2 rounded-xl md:text-2xl md:mt-6'
            >
              Publish Car
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default publishCar