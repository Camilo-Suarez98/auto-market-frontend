import Layout from '@/Layout'
import React, { useState, useRef } from 'react'
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'
import { FaCarSide } from 'react-icons/fa'

const UploadImagesPages = ({ car }) => {
  const carsInfo = car
  const [file, setFile] = useState(null)
  const [images, setimages] = useState(null)
  const imagesRef = useRef(null)

  const handleReferenceImages = () => {
    imagesRef.current?.click()
  }

  const readFile = (file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const newImages = [images, e.target.result]
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

  const handleSendImages = async (e) => {
    e.preventDefault()
    const data = new FormData()

    for (let i = 0; i < file.length; i++) {
      data.append(`url${i}`, file[i], file[i].name)
    }

    const fetchConfigImages = {
      method: 'POST',
      body: data,
    }
    console.log('formData', fetchConfigImages.body);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/car-images`, fetchConfigImages)
    console.log(await res.json());

  }

  return (
    <Layout>
      <h3 className='text-center text-3xl mt-16'>Now, it&apos;s time to upload the images</h3>
      <h4 className='text-center text-xl my-6'>Take pictures of your car from different angles</h4>
      <form
        onSubmit={handleUploadImages}
        encType="multipart/form-data"
        className='w-5/6 m-auto p-3 mt-16 mb-4 border-4 rounded-xl border-blue-700 min-[500px]:w-8/12 min-[500px]:mb-16  min-[500px]:px-6 min-[500px]:py-8 sm:w-7/12 md:w-1/2 min-[991px]:w-5/12 lg:mt-4'
      >
        <p className='text-center my-4'>To upload images click on the car below</p>
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
        <div className='flex flex-col md:flex-row md:justify-evenly'>
          <button
            type='submit'
            onClick={handleSendImages}
            className='border-2 border-blue-700 my-2 p-2 rounded-xl md:text-2xl md:mt-6 transition duration-500 hover:bg-blue-700'
          >
            Upload
          </button>
        </div>
      </form>
    </Layout>
  )
}

export default authenticatedRoute(UploadImagesPages, { pathAfterFailure: '/' })

export const getServerSideProps = async () => {
  const carResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cars`)
  const carInfo = await carResponse.json()

  return {
    props: {
      car: carInfo.data
    }
  }
}