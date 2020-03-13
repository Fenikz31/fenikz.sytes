import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import { useAuth } from './auth'

import { NavBar } from './components/navbar'
import { PrivateRoute } from './components/privateRoute'
import { Profile } from './components/profile'

import history from './utils/history'

export const App = () => {
  const { loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='App'>
      <Router history={ history } >
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path='/' exact />
          <PrivateRoute path='/profile' component={ Profile } />
        </Switch>
      </Router>
    </div>
  )
}