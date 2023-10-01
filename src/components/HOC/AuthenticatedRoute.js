import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import Cookies from 'js-cookie'

const authenticatedRoute = (Component = null, options = {}) => {

  const AuthenticatedRoute = (props) => {
    const isLoggedIn = Cookies.get('isLoggedIn') === 'true';
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      if (isLoggedIn) {
        setLoading(false)
      } else {
        Router.replace(options.pathAfterFailure || '/')
      }
    }, [isLoggedIn])

    if (loading) {
      return <div>Loading... </div>
    }

    return <Component {...props} />
  }

  return AuthenticatedRoute
}

export default authenticatedRoute