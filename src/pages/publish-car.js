import Layout from '@/Layout'
import React, { useEffect, useState, useRef } from 'react'
import { brands, colors, years } from '../../public/fakeData'
import { FaCarSide } from 'react-icons/fa'
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'
import Cookies from 'js-cookie'

const PublishCarPage = () => {
  const [brandData, setBrandData] = useState([])
  const [yearsData, setYearsData] = useState([])
  const [colorsData, setColorsData] = useState([])
  const [file, setFile] = useState(null)
  const [images, setimages] = useState([])
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

  const imagesRef = useRef(null)

  const token = Cookies.get('token')

  useEffect(() => {
    setBrandData(brands)
    setYearsData(years)
    setColorsData(colors)
  }, [])

  const handleReferenceImages = () => {
    imagesRef.current?.click()
  }

  const readFile = (file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const newImages = [...images, e.target.result]
      setimages(newImages)
    }
    reader.readAsDataURL(file)
  }

  const handleUploadImages = (e) => {
    const selectedFiles = e.target.files
    const arrayOfFiles = Array.from(selectedFiles)

    arrayOfFiles.forEach((file) => {
      readFile(file)
    })

    setFile(selectedFiles)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setCreateCarData({
      ...createcarData,
      [name]: value
    })
  }

  const handleSendImages = async () => {
    const data = new FormData()

    for (let i = 0; i < file.length; i++) {
      data.append(`file_${i}`, file[i], file[i].name)
    }

    const fetchConfigImages = {
      method: 'POST',
      body: data,
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/car-images`, fetchConfigImages)
    console.log('images', await res.json());
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

    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cars/`, fetchConfig)

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
  }

  return (
    <Layout>
      <div>
        <h3 className='text-center text-4xl mt-12'>Publish your car and sell it faster and safer</h3>
        <div className='flex flex-col items-center min-[991px]:flex-row min-[991px]:items-start'>
          <div className='w-5/6 m-auto p-3 mt-16 mb-4 border-4 rounded-xl border-blue-700 min-[500px]:w-8/12 min-[500px]:p-6 sm:w-7/12 md:w-1/2 min-[991px]:w-5/12 lg:mt-4'>
            <FaCarSide
              size={'10rem'}
              className='w-full cursor-pointer'
              onClick={handleReferenceImages}
            />
            <input
              type='file'
              className='hidden'
              ref={imagesRef}
              accept='image/*'
              multiple={true}
              onChange={handleUploadImages}
            />
            <p className='text-center'>Upload images of your car here</p>
            <div className='flex flex-col md:flex-row md:justify-evenly'>
              <button
                type='submit'
                onClick={handleSendImages}
                className='border-2 border-blue-700 my-2 p-2 rounded-xl md:text-2xl md:mt-6 transition duration-500 hover:bg-blue-700'
              >
                Upload
              </button>
            </div>
          </div>

          <div className='w-5/6 m-auto p-3 mt-4 mb-16 border-4 rounded-xl border-blue-700 min-[500px]:w-8/12 min-[500px]:p-6 sm:w-7/12 md:w-1/2 min-[991px]:w-5/12'>
            <form className='flex flex-col' onClick={handleCreateCar}>
              <label htmlFor='brand' className='mt-2 text-lg sm:text-xl'>Brand</label>
              <select
                id='brand'
                name='brand'
                onChange={handleChange}
                className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
              >
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
                onChange={handleChange}
                className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
                placeholder='Ex: Sonic'
              />

              <label htmlFor='engineDisplacement' className='mt-2 text-lg sm:text-xl'>Engine Displacement</label>
              <input
                id='engineDisplacement'
                name='engineDisplacement'
                type='text'
                onChange={handleChange}
                className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
                placeholder='Ex: 2000'
              />

              <label htmlFor='year' className='mt-2 text-lg sm:text-xl'>Year</label>
              <select
                id='year'
                name='year'
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
                onChange={handleChange}
                className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
                placeholder='Ex: 12972'
              />

              <label htmlFor='location' className='mt-2 text-lg sm:text-xl'>Location</label>
              <input
                id='location'
                name='location'
                type='text'
                onChange={handleChange}
                className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
                placeholder='Ex: Bucaramanga'
              />

              <label htmlFor='fuel' className='mt-2 text-lg sm:text-xl'>Fuel</label>
              <input
                id='fuel'
                name='fuel'
                type='text'
                onChange={handleChange}
                className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
                placeholder='Ex: Diesel'
              />

              <label htmlFor='color' className='mt-2 text-lg sm:text-xl'>Color</label>
              <select
                id='color'
                name='color'
                onChange={handleChange}
                className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
              >
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
      </div>
    </Layout>
  )
}

export default authenticatedRoute(PublishCarPage, { pathAfterFailure: '/' })