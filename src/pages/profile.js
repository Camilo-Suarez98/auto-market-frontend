import React from 'react'
import Image from 'next/image'
import Layout from '@/Layout'
import { useRouter } from 'next/navigation'
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'
import { parse } from 'cookie'
import { BiLogoGmail } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'

const ProfilePage = ({ user, car }) => {
  const info = user.data
  const router = useRouter()
  const carInfo = car.data

  const carByUser = carInfo.map(seller => seller)

  const selectUserByCar = carByUser.filter(owner => owner.user?.email === info.email)
  console.log(selectUserByCar);

  return (
    <Layout title={info.firstName}>
      <div className='flex flex-col items-center'>
        <Image
          src={!info.profileImage ?
            "https://res.cloudinary.com/dvkf1eiow/image/upload/v1696189300/imyo2qefjny3ltlfdolm.png" :
            info.profileImage
          }
          height={250}
          width={250}
          alt='profile'
          className='rounded-full'
        />
        <h3 className='text-4xl my-4 font-black'>{info.firstName} {info.lastName}</h3>
        <h4 className='flex items-center text-2xl my-3'>
          <BsFillTelephoneFill />
          {!info.phone ? '55555555' : info.phone}
        </h4>
        <h4 className='flex items-center text-2xl my-3'>
          <BiLogoGmail size={25} className='mr-3' />
          {info.email}
        </h4>
        <button
          onClick={() => router.push('/edit-profile')}
          className='border-blue-700 border-2 w-44 flex items-center justify-center mt-2 px-3 rounded-xl transition duration-300 hover:bg-blue-700 min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl md:mt-6'
        >
          Edit profile
        </button>
        <div className='text-center my-8'>
          <h3 className='text-4xl'>Cars section</h3>
          <div>
            {selectUserByCar &&
              selectUserByCar.map(car => {
                return (
                  <div className='border-2 border-blue-700 rounded-xl' key={car._id}>
                    <h3 className='text-2xl'>$ {car.price}</h3>
                    <h3 className='text-xl'>{car.brand} {car.model}</h3>
                    <div className='flex'>
                      <p className='w-1/2'>{car.year}</p>
                      <p className='w-1/2'>{car.km} kms</p>
                    </div>
                    <p>{car.location}</p>
                  </div>
                )
              })
            }
          </div>
          <button
            onClick={() => router.push('/publish-car')}
            className='border-blue-700 border-2 w-full flex items-center justify-center mt-2 px-3 rounded-xl transition duration-300 hover:bg-blue-700 min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl md:mt-6'
          >
            Publish your car
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default authenticatedRoute(ProfilePage, { pathAfterFailure: '/' })

export const getServerSideProps = async (context) => {
  const cookie = parse(context.req.headers.cookie || '')
  const getToken = cookie.token || ''

  const userResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/single`, {
    headers: {
      'Authorization': `Bearer ${getToken}`
    }
  })
  const userInfo = await userResponse.json()

  const carResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cars`)
  const carInfo = await carResponse.json()

  const [userData, carData] = await Promise.all([userInfo, carInfo]);

  return {
    props: {
      user: userData,
      car: carData
    },
  };
}