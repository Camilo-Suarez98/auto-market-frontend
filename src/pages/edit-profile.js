import React, { useState } from 'react'
import Image from 'next/image'
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'
import Layout from '@/Layout'
import Cookies from 'js-cookie'

const EditProfilePage = ({ user }) => {
  const info = user.data
  const [message, setMessage] = useState('')
  const [profileImage, setProfileImage] = useState(null)
  const [saveImage, setSaveImage] = useState()
  const [updateData, setUpdateData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    profileImage: '',
    password: ''
  })

  const readFile = (file) => {
    const reader = new FileReader()
    reader.onload = e => setProfileImage(e.target.result)
    reader.readAsDataURL(file)
  }

  const handleUploadImage = (e) => {
    readFile(e.target.files[0])
    setSaveImage(e.target.files[0])
  }

  const handleSubmitImage = async (e) => {
    e.preventDefault()
    const data = new FormData()

    data.append('profileImage', profileImage)

    const fetchConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'multiplat/form-data',
        'Authorization': `Bearer ${Cookies.get('token')}`,
      },
    };

    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/single`, fetchConfig)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setUpdateData({
      ...updateData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setComparePassword('')

    const dataToUpload = { ...updateData }

    const getToken = Cookies.get('token')
    console.log(getToken);
    const fetchConfig = {
      method: 'PUT',
      body: JSON.stringify(dataToUpload),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken}`
      }
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/info`, fetchConfig)

    if (response.ok) {
      setMessage('Profile upload succesfully')
    } else {
      const data = response.json()
      setMessage('Error to upload profile', data.error)
    }
  }

  return (
    <Layout title='Create Account'>
      <div className='w-5/6 m-auto p-3 my-16 border-4 rounded-xl border-blue-700 min-[500px]:w-8/12 min-[500px]:p-6 sm:w-7/12 md:w-1/2 min-[991px]:w-5/12 lg:w-2/6 xl:w-1/4'>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <h3 className='text-xl min-[500px]:text-2xl sm:text-3xl'>Edit profile</h3>
          <Image
            src={!info.profileImage ?
              "https://res.cloudinary.com/dvkf1eiow/image/upload/v1696189300/imyo2qefjny3ltlfdolm.png" :
              info.profileImage
            }
            height={250}
            width={250}
            alt='profile'
          />
          <button
            onClick={handleSubmitImage}
            className='bg-blue-700 my-2 py-2 rounded-xl md:text-2xl md:mt-6'
          >
            Change Image
          </button>
          <input
            id='file'
            name='file'
            type='file'
            multiple={false}
            accept='image/*'
            max-size={1024 * 5}
            onChange={handleUploadImage}
          />
          <label htmlFor='firstName' className='mt-2 text-lg sm:text-xl'>First Name</label>
          <input
            id='firstName'
            name='firstName'
            onChange={handleChange}
            value={info.firstName}
            type='text'
            className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
            placeholder='Ex: Pedro'
          />

          <label htmlFor='lastName' className='mt-2 text-lg sm:text-xl'>Last Name</label>
          <input
            id='lastName'
            name='lastName'
            onChange={handleChange}
            value={info.lastName}
            type='text'
            className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
            placeholder='Ex: Perez'
          />

          <label htmlFor='email' className='mt-2 text-lg sm:text-xl'>Email</label>
          <input
            id='email'
            name='email'
            onChange={handleChange}
            value={info.email}
            type='text'
            className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
            placeholder='Ex: example@test.com'
          />

          <label htmlFor='password' className='mt-2 text-lg sm:text-xl'>Password</label>
          <input
            id='password'
            name='password'
            onChange={handleChange}
            value={info.password}
            type='password'
            className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
            placeholder='Ex: Password'
          />

          <button
            className='bg-blue-700 my-2 py-2 rounded-xl md:text-2xl md:mt-6'
          >
            Upload Profile
          </button>
        </form>
        <p>{message}</p>
      </div>
    </Layout>
  )
}

export default authenticatedRoute(EditProfilePage, { pathAfterFailure: '/' })

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