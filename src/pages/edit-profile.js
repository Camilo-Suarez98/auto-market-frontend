import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'
import Layout from '@/Layout'
import Cookies from 'js-cookie'
import { parse } from 'cookie'

const EditProfilePage = ({ user }) => {
  const info = user.data
  const [message, setMessage] = useState('')
  const [profileImage, setProfileImage] = useState(null)
  const [imageToSave, setImageToSave] = useState(null)
  const [updateData, setUpdateData] = useState({
    firstName: info.firstName,
    lastName: info.lastName,
    email: info.email,
    phone: info.phone,
    profileImage: info.profileImage,
    password: info.password
  })

  const router = useRouter()

  const readFile = (file) => {
    const reader = new FileReader()
    reader.onload = e => setProfileImage(e.target.result)
    reader.readAsDataURL(file)
  }

  const handleUploadImage = (e) => {
    readFile(e.target.files[0])
    setImageToSave(e.target.files[0])
  }

  const handleSubmitImage = async (e) => {
    e.preventDefault()
    const data = new FormData()

    data.append('profileImage', imageToSave)

    const fetchConfig = {
      method: 'PUT',
      body: data,
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`,
      },
    };

    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/profile-image`, fetchConfig)
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

    const dataToUpload = { ...updateData }

    const getToken = Cookies.get('token')
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
      <div className='flex flex-col items-center justify-center'>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <h3 className='text-xl text-center min-[500px]:text-2xl sm:text-3xl'>Edit profile</h3>
          <Image
            src={!info.profileImage ?
              "https://res.cloudinary.com/dvkf1eiow/image/upload/v1696189300/imyo2qefjny3ltlfdolm.png" :
              info.profileImage
            }
            height={250}
            width={250}
            alt='profile'
            className='m-auto'
          />
          <button
            onClick={handleSubmitImage}
            className='bg-blue-700 my-2 py-1 rounded-xl mb-8 md:text-xl md:mt-6'
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
            value={updateData.firstName}
            type='text'
            className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
            placeholder='Ex: Pedro'
          />

          <label htmlFor='lastName' className='mt-2 text-lg sm:text-xl'>Last Name</label>
          <input
            id='lastName'
            name='lastName'
            onChange={handleChange}
            value={updateData.lastName}
            type='text'
            className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
            placeholder='Ex: Perez'
          />

          <label htmlFor='email' className='mt-2 text-lg sm:text-xl'>Email</label>
          <input
            id='email'
            name='email'
            onChange={handleChange}
            value={updateData.email}
            type='text'
            className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
            placeholder='Ex: example@test.com'
          />

          <label htmlFor='password' className='mt-2 text-lg sm:text-xl'>Password</label>
          <input
            id='password'
            name='password'
            onChange={handleChange}
            value={updateData.password}
            type='password'
            className='mb-2 py-1 px-2 rounded-md outline-none text-blue-700'
            placeholder='Ex: Password'
          />

          <button
            className='bg-blue-700 my-2 py-2 rounded-xl md:text-2xl md:mt-6'
          >
            Upload Profile
          </button>
          <button
            onClick={() => router.push('/profile')}
            className='bg-blue-700 my-2 py-2 rounded-xl md:text-2xl md:mt-6'
          >
            Go back to Profile
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