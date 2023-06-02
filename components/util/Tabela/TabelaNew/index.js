import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { styles } from './styles'

const randomBg = () => {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  return bgColor;
}

const TabelaNew = ({ data, selected, setSelected }) => {

  const [dataTable, setDataTable] = useState(null)
  const [keys, setKeys] = useState(null)
  const [sizes, setSizes] = useState([])
  const [totalSize, setTotalSize] = useState(0)
  const [colors, setColors] = useState([])
  
  //var keys = null
  useEffect(() => {
    data?.length > 0 && setDataTable(data)
  }, [data])

  useEffect(() => {
    constroiTabela()
  }, [dataTable])
  


  const constroiTabela = () => {
    if(dataTable) {
      setKeys(Object.keys(dataTable[0]))
      dataTable.forEach((item) => {
        console.log(item)
      })
    }
  }

  const Cell = ({text}) => {


    return (
      <View>
        <Text>{text}</Text>
      </View>
    )
  }

  const Row = ({item}) => {
    
    return (
      <TouchableOpacity onPress={() => setSelected(item)} style={[styles.rowContainer, { backgroundColor: randomBg()}]}>
        {
          keys?.map((thiskey, i) => 
            <Cell 
              text={item[thiskey]} 
              key={"row" + item[keys[0]] + "cell" + i}
              
              />
            )
        }
      </TouchableOpacity>
    )
  }

  const Tabela = () => {
    return (
      <FlatList 
        data={dataTable}
        renderItem={Row}
        
      />
    )
  }

  return (
    <View style={styles.container}>
      <Text>{}</Text>
      {
        !dataTable ?
          <View>
            <Text>Não há dados a serem exibidos</Text>
          </View> :
          <ScrollView horizontal>
            <Tabela />
          </ScrollView>
      }

    </View>
  )
}

export default TabelaNew
