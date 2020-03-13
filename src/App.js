import React from 'react'
import { NavBar } from './components/navbar'
import { useAuth } from './auth'
import { Router, Route, Switch } from 'react-router-dom'
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
          <Route path='/profile' component={ Profile } />
        </Switch>
      </Router>
    </div>
  )
}