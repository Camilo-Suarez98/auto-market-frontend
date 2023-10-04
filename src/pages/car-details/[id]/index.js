import React from 'react'
import Layout from '@/Layout';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useRouter } from 'next/router';
import { useJwt } from 'react-jwt';
import Cookies from 'js-cookie';
import { BiLogoGmail } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'

const CarDetailsPage = ({ car, image, user }) => {
  const router = useRouter()
  const token = Cookies.get('token')
  const { isExpired } = useJwt(token)
  const info = car
  const infoImage = image
  const infoFromUser = user
  const imageByCar = info.carImages.map(image => image);
  const imageByQuery = infoImage.filter(image => imageByCar.includes(image._id));
  const carOwner = info.user
  const userByRequest = infoFromUser.filter(seller => seller._id === carOwner)
  const { firstName, lastName, email, phone } = userByRequest[0]

  return (
    <Layout title='Car details'>
      <h3 className='text-center text-6xl my-10 w-5/6 m-auto md:w-full'>{info.brand} {info.model}</h3>
      <div className="flex flex-col items-center w-5/6 m-auto md:flex-row">
        <div className='w-5/6 md:w-1/2'>
          <AwesomeSlider bullets={false}>
            {imageByQuery.map(image => {
              return (
                <div
                  key={image._id}
                  data-src={image.url}
                />
              )
            })}
          </AwesomeSlider>
        </div>
        <div className='text-center my-8 md:w-1/2'>
          <h3 className='text-5xl'>$ {parseInt(info.price).toLocaleString()} USD</h3>
          <p className='text-3xl'>Year: {info.year}</p>
          <p className='text-3xl'>Engine: {info.engineDisplacement == null ? '1000-5000cc' : info.engineDisplacement}</p>
          <p className='text-3xl'>{info.km} kms</p>
          <p className='text-3xl'>Type of fuel: {info.fuel}</p>
          <p className='text-3xl'>Color: {info.color}</p>
          <p className='text-3xl'>Located in: {car.location}</p>
        </div>
      </div>
      <div>
        <h3 className='text-center text-3xl mt-12 mb-6'>Contact info</h3>
        {isExpired ?
          <div className='w-5/6 text-center md:w-full'>
            <h3 className='text-2xl'>Are you interested in this car?</h3>
            <h4 className='text-2xl'>Log in to view contact information</h4>
            <button
              onClick={() => router.push('/login')}
              className='border-blue-700 border-2 w-full flex items-center justify-center mt-2 px-3 rounded-xl transition duration-300 hover:bg-blue-700 min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl md:mt-6 md:w-72'
            >
              Go to Log in
            </button>
            <h4 className='text-2xl'>Don&apos;t you have an account?</h4>
            <button
              onClick={() => router.push('/create-account')}
              className='border-blue-700 border-2 w-full flex items-center justify-center mt-2 px-3 rounded-xl transition duration-300 hover:bg-blue-700 min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl md:mt-6 md:w-72'
            >
              Create account
            </button>
          </div> :
          <div className='w-5/6 m-auto text-center md:w-full'>
            <h3 className='text-3xl'>{firstName} {lastName}</h3>
            <h3 className='text-3xl flex justify-center items-center'><BiLogoGmail size={25} className='mr-3' /> {email}</h3>
            <h3 className='text-3xl flex justify-center items-center'><BsFillTelephoneFill className='mr-3' /> {phone === undefined ? '55555555' : phone}</h3>
          </div>
        }
      </div>
    </Layout>
  )
}

export default CarDetailsPage

export const getServerSideProps = async ({ query }) => {
  const carId = query.id
  const carResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cars/${carId}`)
  const carInfo = await carResponse.json()

  const imagesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/car-images/`)
  const imageInfo = await imagesResponse.json()

  const userResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/`)
  const userInfo = await userResponse.json()

  const [carData, imageData, userData] = await Promise.all([carInfo, imageInfo, userInfo])

  return {
    props: {
      user: userData.data,
      car: carData.data,
      image: imageData.data
    },
  };
}