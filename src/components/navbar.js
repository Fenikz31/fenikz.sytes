import React from 'react'
import { Button } from '@material-ui/core'
import { useAuth } from '../auth'

export const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth()

  return (
    <div>
      {!isAuthenticated && (
        <Button onClick={() => loginWithRedirect({})}>Log in</Button>
      )}

      {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
    </div>
  )
}
