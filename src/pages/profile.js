import React from 'react'
import Image from 'next/image'
import Layout from '@/Layout'
import { useRouter } from 'next/navigation'
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'
import { parse } from 'cookie'
import { BiLogoGmail } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'

const ProfilePage = ({ user }) => {
  const info = user.data
  const router = useRouter()

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
        />
        <h3 className='text-4xl my-4'>{info.firstName} {info.lastName}</h3>
        <h4 className='flex items-center text-2xl my-4'>
          <BsFillTelephoneFill />
          {info.phone}
        </h4>
        <h4 className='flex items-center text-2xl my-4'>
          <BiLogoGmail size={25} className='mr-4' />
          {info.email}
        </h4>
        <div className='text-center my-8'>
          <h3>Cars section</h3>
          <div>
            {info.cars.length === 0 ? "You have no cars on sale" : info.cars}
          </div>
          <button
            onClick={() => router.push('/publish-car')}
            className='border-blue-700 border-2 w-full flex items-center mt-2 px-3 rounded-xl transition duration-300 hover:bg-blue-700 min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl md:mt-6'
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/single`, {
    headers: {
      'Authorization': `Bearer ${getToken}`
    }
  })
  const data = await res.json()

  return {
    props: {
      user: data,
    },
  };
}