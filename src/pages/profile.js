import React from 'react'

const ProfilePage = ({ user }) => {
  const info = user.data
  console.log(info);

  return (
    <div>
      <h2>lalo landa</h2>
    </div>
  )
}

export default ProfilePage

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/${params.id}`)
  const data = await res.json()

  return {
    props: {
      user: data,
    },
  };
}