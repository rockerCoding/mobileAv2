import React, { createContext, useState, useEffect, useContext } from 'react'

export const TabelaContext = createContext({});


const TabelaProvider = ({ children }) => {

  const [dataShow, setDataShow] = useState()
  const [selected, setSelected] = useState(null)

  /* useEffect(() => {
  

  }, [dataShow]) */

  return (
    <TabelaContext.Provider 
      value={{
        selected, setSelected
      }}
      
      >
      {children}
    </TabelaContext.Provider>
  )
}

export default TabelaProvider