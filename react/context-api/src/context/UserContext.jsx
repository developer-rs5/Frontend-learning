import React, { createContext } from 'react'


export let data = createContext();
let username = "developer.rs"
const UserContext = ({children}) => {
  return (
    <data.Provider value={username}>
        {children}
    </data.Provider>
        

  )
}

export default UserContext