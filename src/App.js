import React from 'react'
import { NavBar } from './components/navbar'
import { useAuth } from './auth'

export const App = () => {
  const { loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='App'>
      <header>
        <NavBar />
      </header>
    </div>
  )
}