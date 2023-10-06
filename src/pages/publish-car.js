import Layout from '@/Layout'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { brands, colors, years } from '../../public/fakeData'
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'
import Cookies from 'js-cookie'

const PublishCarPage = () => {
  const [brandData, setBrandData] = useState([])
  const [yearsData, setYearsData] = useState([])
  const [colorsData, setColorsData] = useState([])
  const [message, setMessage] = useState('')
  const [createcarData, setCreateCarData] = useState({
    brand: '',
    model: '',
    engineDisplacement: '',
    year: '',
    km: '',
    location: '',
    fuel: '',
    color: '',
    price: ''
  })

  const router = useRouter()
  const token = Cookies.get('token')

  useEffect(() => {
    setBrandData(brands)
    setYearsData(years)
    setColorsData(colors)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target

    setCreateCarData({
      ...createcarData,
      [name]: value.charAt(0)
    })
  }

  const handleCreateCar = async (e) => {
    e.preventDefault()

    const newCar = { ...createcarData }

    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(newCar),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cars/`, fetchConfig)

    if (response.ok) {
      setMessage('Car created succesfully')
      setCreateCarData({
        brand: '',
        model: '',
        engineDisplacement: '',
        year: '',
        km: '',
        location: '',
        fuel: '',
        color: '',
        price: ''
      })
      router.push('/upload-images')
    } else {
      response.json()
      setMessage('There was a problem creating car')
    }
  }

  return (
    <Layout>
      <div>
        <h3 className='text-center text-4xl mt-12'>Publish your car and sell it faster and safer</h3>
        <h3 className='text-center text-xl mt-12'>First of all, complete this form</h3>
        <div className='flex flex-col items-center min-[991px]:flex-row min-[991px]:items-start'>
          <div className='w-5/6 m-auto p-3 mt-4 mb-16 border-4 rounded-xl border-blue-700 min-[500px]:w-8/12 min-[500px]:p-6 sm:w-7/12 md:w-1/2 min-[991px]:w-5/12'>
            <form className='flex flex-col' onSubmit={handleCreateCar}>
              <label htmlFor='brand' className='mt-2 text-lg sm:text-xl'>Brand</label>
              <select
                id='brand'
                name='brand'
                required
                onChange={handleChange}
                className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
              >
                <option value="Choose an option">-- --</option>
                {brandData.map(item => (
                  <option value={item.brand.charAt(0)} key={item.brand}>
                    {item.brand}
                  </option>
                ))}
              </select>

              <label htmlFor='model' className='mt-2 text-lg sm:text-xl'>Model</label>
              <input
                id='model'
                name='model'
                type='text'
                required
                onChange={handleChange}
                className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
                placeholder='Ex: Sonic'
              />

              <label htmlFor='engineDisplacement' className='mt-2 text-lg sm:text-xl'>Engine Displacement</label>
              <input
                id='engineDisplacement'
                name='engineDisplacement'
                type='text'
                required
                onChange={handleChange}
                className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
                placeholder='Ex: 2000'
              />

              <label htmlFor='year' className='mt-2 text-lg sm:text-xl'>Year</label>
              <select
                id='year'
                name='year'
                required
                onChange={handleChange}
                className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
              >
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
                required
                onChange={handleChange}
                className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
                placeholder='Ex: 12972'
              />

              <label htmlFor='location' className='mt-2 text-lg sm:text-xl'>Location</label>
              <input
                id='location'
                name='location'
                type='text'
                required
                onChange={handleChange}
                className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
                placeholder='Ex: Bucaramanga'
              />

              <label htmlFor='fuel' className='mt-2 text-lg sm:text-xl'>Fuel</label>
              <input
                id='fuel'
                name='fuel'
                type='text'
                required
                onChange={handleChange}
                className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
                placeholder='Ex: Diesel'
              />

              <label htmlFor='color' className='mt-2 text-lg sm:text-xl'>Color</label>
              <select
                id='color'
                name='color'
                required
                onChange={handleChange}
                className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
              >
                <option value="Choose an option">-- --</option>
                {colorsData.map(color => (
                  <option value={color.charAt(0)} key={color}>
                    {color}
                  </option>
                ))}
              </select>

              <label htmlFor='price' className='mt-2 text-lg sm:text-xl'>Price</label>
              <input
                id='price'
                name='price'
                type='text'
                required
                onChange={handleChange}
                className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
                placeholder='Ex: $20000'
              />

              <button
                type='submit'
                className='border-2 border-blue-700 my-2 py-2 rounded-xl md:text-2xl md:mt-6 transition duration-300 hover:bg-blue-700'
              >
                Publish Car
              </button>
            </form>
          </div>
        </div>
        <p className='text-center text-2xl'>{message}</p>
      </div>
    </Layout>
  )
}

export default authenticatedRoute(PublishCarPage, { pathAfterFailure: '/' })