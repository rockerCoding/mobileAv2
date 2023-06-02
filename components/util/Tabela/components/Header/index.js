import React, { useContext, useEffect, useState } from "react";
import { Dimensions, FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TabelaContext } from "../../context/TabelaContext";
import { styles } from './styles'

const Header = () => {

  const { selectedId, setSelectedId, keys, setKeys, sizes, setSizes, totalSize, setTotalSize, names } = useContext(TabelaContext)
  const [separatorSize, setSeparatorSize] = useState(null)

  const handleLayout = (e) => {
    setSeparatorSize(e.nativeEvent.layout.height)
  }

  return (
    <View 
      style={[{ width: totalSize }, styles.headerContainer]}
      onLayout={(e) => handleLayout(e)}>
      {
        names.map((item, index) => {
          return (
            <Pressable
              style={[{ width: sizes[index] }, styles.headerTextContainer]}
              key={index}
              /* onPress={() => console.log(item)} */
              
              >
              <Text style={styles.headerText}>{item.toUpperCase()}</Text>
              {
                index < keys.length - 1 && <View style={[styles.separator, { height: separatorSize - 10}]}></View>
              }
            </Pressable>
          )
        })
      }

    </View>
  )
}

export default Header