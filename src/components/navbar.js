import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@material-ui/core'

import { useAuth } from '../auth'

export const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth()

  return (
    <div>

      {!isAuthenticated && (
        <Button
          color='primary'
          onClick={() => loginWithRedirect({})}
          variant='contained'>
          Log in
        </Button>
      )}

      {isAuthenticated && <Button color='secondary' onClick={() => logout()} variant='contained'>Log out</Button>}

      {isAuthenticated && (
        <span>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/profile">Profile</Link>
        </span>
      )}

    </div>
  )
}
