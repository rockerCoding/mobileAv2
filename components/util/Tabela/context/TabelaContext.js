import { useNavigation } from '@react-navigation/native';
import React, { createContext, useState, useEffect, useContext } from 'react'

export const TabelaContext = createContext({});


const TabelaProvider = ({ children }) => {

  const [dataShow, setDataShow] = useState()
  const [selectedId, setSelectedId] = useState(null)
  const [keys, setKeys] = useState(null)
  const [sizes, setSizes] = useState(null)
  const [totalSize, setTotalSize] = useState(null)
  const [oldData, setOldData] = useState(null)
  const [types, setTypes] = useState(null)
  const [names, setNames] = useState(null)
  const [orderBy, setOrderBy] = useState(null)

  

  return (
    <TabelaContext.Provider
      value={{
        selectedId, setSelectedId,
        keys, setKeys,
        sizes, setSizes,
        totalSize, setTotalSize,
        oldData, setOldData,
        types, setTypes, 
        names, setNames,
        orderBy, setOrderBy
        
      }}

    >
      {children}
    </TabelaContext.Provider>
  )
}

export default TabelaProvider