import Layout from '@/Layout'
import React, { useEffect, useState } from 'react'
import { brands, colors, years } from '../../public/fakeData'
import { FaCarSide } from 'react-icons/fa'

const PublishCar = () => {
  const [brandData, setBrandData] = useState([])
  const [yearsData, setYearsData] = useState([])
  const [colorsData, setColorsData] = useState([])

  useEffect(() => {
    setBrandData(brands)
    setYearsData(years)
    setColorsData(colors)
  }, [])

  return (
    <Layout>
      <div>
        <h3 className='text-center text-4xl mt-12'>Publish your car and sell it faster and safer</h3>
        <div className='flex flex-col items-center min-[991px]:flex-row min-[991px]:items-start'>
          <div className='w-5/6 m-auto p-3 mt-16 mb-4 border-4 rounded-xl border-blue-700 min-[500px]:w-8/12 min-[500px]:p-6 sm:w-7/12 md:w-1/2 min-[991px]:w-5/12 lg:mt-4'>
            <FaCarSide size={'10rem'} className='w-full' />
            <input
              type='file'
              className='hidden'
            />
            <p className='text-center'>Upload images of your car here</p>
            <div className='flex flex-col md:flex-row md:justify-evenly'>
              <button
                className='bg-blue-700 my-2 p-2 rounded-xl md:text-2xl md:mt-6 transition duration-500 hover:bg-blue-500'
              >
                Upload
              </button>
              <button
                className='bg-red-700 my-2 p-2 rounded-xl md:text-2xl md:mt-6 transition duration-500 hover:bg-red-500'
              >
                Delete
              </button>
            </div>
          </div>

          <div className='w-5/6 m-auto p-3 mt-4 mb-16 border-4 rounded-xl border-blue-700 min-[500px]:w-8/12 min-[500px]:p-6 sm:w-7/12 md:w-1/2 min-[991px]:w-5/12'>
            <form className='flex flex-col'>
              <label htmlFor='brand' className='mt-2 text-lg sm:text-xl'>Brand</label>
              <select id='brand' name='brand' className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'>
                <option value="Choose an option">-- --</option>
                {brandData.map(item => (
                  <option value={item.brand.toLowerCase()} key={item.brand}>
                    {item.brand}
                  </option>
                ))}
              </select>

              <label htmlFor='model' className='mt-2 text-lg sm:text-xl'>Model</label>
              <input
                id='model'
                name='model'
                type='text'
                className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
                placeholder='Ex: Sonic'
              />

              <label htmlFor='year' className='mt-2 text-lg sm:text-xl'>Year</label>
              <select id='year' name='year' className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'>
                <option value="Choose an option">-- --</option>
                {yearsData.map(year => (
                  <option value={year} key={year}>
                    {year}
                  </option>
                ))}
              </select>

              <label htmlFor='km' className='mt-2 text-lg sm:text-xl'>Km</label>
              <input
                id='km'
                name='km'
                type='text'
                className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
                placeholder='Ex: 12972'
              />

              <label htmlFor='location' className='mt-2 text-lg sm:text-xl'>Location</label>
              <input
                id='location'
                name='location'
                type='text'
                className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
                placeholder='Ex: Bucaramanga'
              />

              <label htmlFor='fuel' className='mt-2 text-lg sm:text-xl'>Fuel</label>
              <input
                id='fuel'
                name='fuel'
                type='text'
                className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
                placeholder='Ex: Diesel'
              />

              <label htmlFor='color' className='mt-2 text-lg sm:text-xl'>Color</label>
              <select id='color' name='color' className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'>
                <option value="Choose an option">-- --</option>
                {colorsData.map(color => (
                  <option value={color.toLowerCase()} key={color}>
                    {color}
                  </option>
                ))}
              </select>

              <label htmlFor='price' className='mt-2 text-lg sm:text-xl'>Price</label>
              <input
                id='price'
                name='price'
                type='text'
                className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
                placeholder='Ex: $20000'
              />

              <button
                className='bg-blue-700 my-2 py-2 rounded-xl md:text-2xl md:mt-6 transition duration-500 hover:bg-blue-500'
              >
                Publish Car
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PublishCar