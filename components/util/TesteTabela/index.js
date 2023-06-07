import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const TesteTabela = ({ data, selected, setSelected, zebra, configColumns, configTable, title }) => {

  const [sizeOfView, setSizeOfView]     = useState(null)
  const [namesColumns, setNamesColumns] = useState(null)
  const [sizesColumns, setSizesColumns] = useState(null)
  const [typesColumns, setTypesColumns] = useState(null)
  const [totalColumns, setTotalColumns] = useState(null)
  const [isReady, setIsReady] = useState(null)

  useEffect(() => {
    data && initialConfig()
  }, [data])

  const initialConfig = () => {
    var initialNamesColumns = []
    var initialSizesColumns = []
    var initialTypesColumns = []
    var initialTotalColumns = 0

    configColumns.forEach((item) => {
      initialNamesColumns.push(item["name"])
      let size = sizeOfView * (item["size"].split("%")[0] / 100)
      initialTotalColumns += size
      initialSizesColumns.push(size)
      initialTypesColumns.push(item["type"])
    })

    setNamesColumns(initialNamesColumns)
    setSizesColumns(initialSizesColumns)
    setTotalColumns(initialTotalColumns)
    setTypesColumns(initialTypesColumns)

    setIsReady(true)
  }

  const Cell = ({item, size}) => {
    return (
      <View style={{width: size}}>
        <Text>{item}</Text>
      </View>
    )
  }

  const Row = ({ item, index }) => {

    const backgroundColor = index % 2 ? "lightgrey" : "white"

    return (
      <TouchableOpacity style={{ height: 20, backgroundColor, width: totalColumns, flexDirection: 'row'  }} onPress={() => setSelected(item)}>
        {
          namesColumns.map((prop, i) => {
            return (
              <Cell item={item[prop]} size={sizesColumns[i]} key={"row" + index + "-cell" + i}/>
            )
          })
        }        
      </TouchableOpacity>
    )
  }

  return (

    <View style={{ flex: 1 }} onLayout={(e) => setSizeOfView(e.nativeEvent.layout.width)}>
      {
        !isReady ?
          <Text>Não existem registros</Text> :
          <ScrollView horizontal>
            <FlatList
              data={data}
              renderItem={Row}
            />
          </ScrollView>
      }
    </View>
  )
}

export default TesteTabela