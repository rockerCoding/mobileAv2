import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { styles } from './styles'
import Animated from 'react-native-reanimated'
import { LinearGradient } from 'expo-linear-gradient';

const randomBg = () => {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  return bgColor;
}

const TabelaNew = ({ data, selected, setSelected, zebra, configColumns, configTable, title }) => {

  const [dataTable, setDataTable] = useState(null)
  const [keys, setKeys] = useState(null)
  const [columns, setColumns] = useState(null)
  const [sizes, setSizes] = useState([])
  const [totalSize, setTotalSize] = useState(0)
  const [types, setTypes] = useState(null)
  const [colors, setColors] = useState([])
  const [tableIsReady, setTableIsReady] = useState(false)
  const [sizeOfView, setSizeOfView] = useState(null)
  const [hasMoreEnd, setHasMoreEnd] = useState(true)

  useEffect(() => {
    data && setDataTable(data)
  }, [data])

  useEffect(() => {
    constroiTabela(configColumns)
  }, [dataTable])

  const constroiTabela = () => {
    if (dataTable) {
      setKeys(Object.keys(dataTable[0]))
      let namesColumns = []
      let sizesColumns = []
      let typesColumns = []
      let total = 0
      configColumns.forEach((item) => {
        namesColumns.push(item["name"])
        let size = sizeOfView * (item["size"].split("%")[0] / 100)
        total += size
        sizesColumns.push(size)
        typesColumns.push(item["type"])
      })

      setColumns(namesColumns)
      setSizes(sizesColumns)
      setTypes(typesColumns)
      setTotalSize(total)
      setTableIsReady(true)
    }
  }

  const Header = () => {
    return (
      <View style={[styles.headerContainer, { backgroundColor: configTable?.headerColor ? configTable.headerColor : "white" }]}>
        {
          columns.map((item, index) => {
            return (
              <View
                key={"column:" + item}
                style={[
                  {
                    width: sizes[index],
                    borderRightWidth: index < keys.length - 1 ? 0.1 : 0,
                    borderRightColor: configTable?.headerColorText
                  },
                  styles.headerCellsContainer]}>
                <Text style={[styles.headerText, { color: configTable?.headerColorText }]}>{item}</Text>
              </View>
            )
          })
        }
      </View>
    )
  }

  const Cell = ({ text, index }) => {
    return (
      <View style={{ width: sizes[index] }}>
        <Text
          numberOfLines={1}
          style={{
            textAlign: types[index] == "numeric" ? "right" : "center",
            marginRight: types[index] == "numeric" ? 5 : 0,
          }}>{text}</Text>
      </View>
    )
  }

  const Row = ({ item, index }) => {

    const backgroundColor = zebra ?
      index % 2 == 0 ? "lightblue" : "white" : "white"

    return (
      <TouchableOpacity
        onPress={() => setSelected(item)}
        style={[styles.rowContainer, { backgroundColor: backgroundColor, width: totalSize }]}>
        {
          columns.map((thisKey, i) =>
            <Cell
              text={item[thisKey]}
              index={i}
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
        ListHeaderComponent={<Header />}
        stickyHeaderIndices={[0]}
      />
    )
  }

  return (
    <View style={styles.container} onLayout={(e) => setSizeOfView(e.nativeEvent.layout.width)}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
        {/* <View style={{ width: '100%', height: 2, backgroundColor: 'grey' }}>
          <Animated.View>
          </Animated.View>
        </View> */}
      </View>
      {
        !columns ?
          <View>
            <Text>Não há dados a serem exibidos</Text>
          </View> :
          <View style={{ flex: 1 }}>
            <View>
            </View>
            <ScrollView
              horizontal
            >
              <Tabela />
            </ScrollView>
            {
              hasMoreEnd &&

              < LinearGradient

                colors={['transparent', 'rgba(1,1,1,0.15)']}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 0}}
                style={{width: 20, position: 'absolute', height: '100%', right: 0}}>
                
              </LinearGradient>
            }
          </View>
      }

    </View >
  )
}

export default TabelaNew
