import React from 'react'

const ProfilePage = ({ user }) => {
  const info = user
  console.log("esta es la info", info);
  return (
    <div>
      <h2></h2>
    </div>
  )
}

export default ProfilePage

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`)
  const data = await res.json()

  return {
    props: {
      user: data,
    },
  };
}