import React, { Fragment } from 'react'
import { useAuth } from '../auth'

export const Profile = () => {
  const { loading, user } = useAuth()

  if (loading || !user) {
    return <div>Loading...</div>
  }

  return (
    <Fragment>
      <img src={user.picture} alt='Profile' />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </Fragment>
  )
}
