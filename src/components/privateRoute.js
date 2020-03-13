import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useAuth } from '../auth'

export const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth()

  useEffect( () => {
    if (loading || isAuthenticated) {
      return
    }
    const redirect = async () => {
      await loginWithRedirect({
        appState: { targetUrl: path }
      })
    }
    redirect()
  }, [loading, isAuthenticated, loginWithRedirect, path])

  const render = (props) =>
    isAuthenticated === true ? <Component { ...props } /> : null

  return <Route path={ path } render={ render } { ...rest } />
}
