import React, { useContext } from 'react'
import { data } from './context/UserContext'

const App = () => {

  const username = useContext(data)
  return (
    <>
      <h1>{username}</h1>
    </>
  )
}

export default App