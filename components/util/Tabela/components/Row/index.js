import React, { useContext, useEffect, useState } from "react";
import { Dimensions, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { TabelaContext } from "../../context/TabelaContext";
import { useNavigation } from "@react-navigation/native";

const Row = ({ item, onPress, style, configColumns }) => {

  const navigation = useNavigation()

  const { selectedId, setSelectedId, keys, setKeys, sizes, setSizes, totalSize, setTotalSize, types, setTypes, names, setNames } = useContext(TabelaContext)
  const [background, setBackground] = useState(null)

  useEffect(() => {
    
    setBackground(item.id === selectedId?.id ? "lightblue" : "white")
    if(selectedId) {
      navigation.navigate("Detalhes")
      setSelectedId(null)
    }
  }, [selectedId])

  const TD = ({item, config}) => {
    const align = config["types"] == "numeric" ? "right" : "center"

    return (
      <View style={{width: config["sizeCell"],  paddingHorizontal: align ? 5 : 0}}>
        <Text style={{textAlign: align}}>{item}</Text>
      </View>
    )
  }


  return (
    <TouchableOpacity 
      onPress={() => setSelectedId(item)} 
      style={[styles.row, { backgroundColor: background, width: totalSize, paddingVertical: 10}]}>

      {
        names.map((prop, index) => {
          let config = {
            types: types[index],
            sizeCell: sizes[index]
          }
          return (
            <TD item={item[prop]} key={item.id + "." + index} config={config}/>
          )
        })
      }
    </TouchableOpacity>
  )
}

export default Row