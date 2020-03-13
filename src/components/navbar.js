import React from 'react'
import { Button } from '@material-ui/core'
import { useAuth0 } from '../react-auth0-spa'

export const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  return (
    <div>
      {!isAuthenticated && (
        <Button onClick={() => loginWithRedirect({})}>Log in</Button>
      )}

      {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
    </div>
  )
}
