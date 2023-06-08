import { View, Text, TouchableOpacity, FlatList, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const TesteTabela = ({ data, selected, setSelected, zebra, configColumns, configTable, title }) => {

  const [sizeOfView, setSizeOfView] = useState(null)
  const [namesColumns, setNamesColumns] = useState(null)
  const [sizesColumns, setSizesColumns] = useState(null)
  const [typesColumns, setTypesColumns] = useState(null)
  const [totalColumns, setTotalColumns] = useState(null)
  const [isReady, setIsReady] = useState(null)

  useEffect(() => {
    setIsReady(false)
    data && initialConfig()
  }, [data])

  const initialConfig = () => {
    var initialNamesColumns = []
    var initialSizesColumns = []
    var initialTypesColumns = []
    var initialTotalColumns = 0

    configColumns.forEach((item) => {
      initialNamesColumns.push(item["name"])
      let size = sizeOfView.width * (item["size"].split("%")[0] / 100)
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

  const Cell = ({ item, size, type }) => {

    return (
      <View style={{ width: size }}>
        <Text
          numberOfLines={1}
          style={{ 
            textAlign:   type == "numeric" ? "right" : "center",
            marginRight: type == "numeric" ? 5 : 0,
           }}
        >{item}</Text>
      </View>
    )
  }

  const Row = ({ item, index }) => {

    //const backgroundColor = index % 2 ? "lightgrey" : "white"
    const backgroundColor = configTable.zebraColors ? configTable.zebraColors[index % 2] : index % 2 ? 'lightgrey' : white

    return (
      <TouchableOpacity style={{ height: 50, backgroundColor, width: totalColumns, flexDirection: 'row', alignItems: 'center' }} onPress={() => setSelected(item)}>
        {
          namesColumns.map((prop, i) => {
            return (
              <Cell
                item={item[prop]}
                size={sizesColumns[i]}
                key={"row" + index + "-cell" + i}
                type={typesColumns[i]}
              />
            )
          })
        }
      </TouchableOpacity>
    )
  }

  const Header = () => {
    return (
      <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row' }}>
          {
            namesColumns.map((item, i) => {
              return (
                <View
                  style={{ width: sizesColumns[i], backgroundColor: configTable.headerColor, height: sizeOfView.height * 0.05, justifyContent: 'center' }}
                  key={"header-" + item}
                >
                  <Text style={{ textAlign: 'center', fontWeight: '300', textTransform: 'uppercase', color: configTable.headerColorText }}>{item}</Text>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }

  return (

    <View
      style={{ flex: 1 }}
      onLayout={(e) => {
        setSizeOfView(e.nativeEvent.layout)
      }}>
      {
        !isReady ?
          <Text>Não existem registros</Text> :
          <View style={styles.viewContainer}>
            {
              title &&
              <View style={[styles.titleContainer, { height: sizeOfView.height * 0.075, backgroundColor: configTable.titleColor }]}>
                <Text style={[styles.titleText, {color: configTable.titleTextColor}]} >{title}</Text>
              </View>
            }
            <ScrollView horizontal

            >
              <FlatList
                data={data}
                renderItem={Row}
                ListHeaderComponent={<Header />}
                stickyHeaderIndices={[0]}
                style={{ flex: 1 }}
              />
            </ScrollView>

          </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: { 
    flex: 1,
    borderColor: 'blue', 
    borderWidth: 1, 
    borderStyle: 'solid', 
    borderRadius: 5,
  },
  titleContainer: {
    justifyContent: 'center', alignItems: 'center'
  },
  titleText: {
    fontWeight: '300',
    fontSize: 20,
    textTransform: 'uppercase',
    letterSpacing: 2,
  }
})

export default TesteTabela