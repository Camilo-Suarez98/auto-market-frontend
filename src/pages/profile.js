import React from 'react'
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'
import Cookies from 'js-cookie'
import { parse } from 'cookie'

const ProfilePage = ({ user }) => {
  const info = user.data
  console.log(info);

  return (
    <div>
      <h3>
        test user
      </h3>
    </div>
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