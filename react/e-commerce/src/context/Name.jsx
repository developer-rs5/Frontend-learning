import React, { createContext, useState } from 'react'


export let data = createContext();

const NameContext = ({children}) => {
    let name = useState("shop.co")
  return (
    <data.Provider value={name}>
        {children}
    </data.Provider>
        

  )
}

export default NameContext