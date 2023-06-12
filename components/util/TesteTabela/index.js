import { View, Text, TouchableOpacity, FlatList, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const TesteTabela = ({ data, selected, selectable, setSelected, zebra, configColumns, configTable, title }) => {

  const [sizeOfView, setSizeOfView] = useState(null)
  const [namesColumns, setNamesColumns] = useState(null)
  const [aliasColumns, setAliasColumns] = useState(null)
  const [sizesColumns, setSizesColumns] = useState(null)
  const [typesColumns, setTypesColumns] = useState(null)
  const [totalColumns, setTotalColumns] = useState(null)
  const [isReady, setIsReady] = useState(null)

  useEffect(() => {
    setIsReady(false)
    console.log('testando config iniicial')
    if (data) initialConfig()
  }, [data])

  const initialConfig = () => {
    var initialNamesColumns = []
    var initialSizesColumns = []
    var initialTypesColumns = []
    var initialAliasColumns = []
    var initialTotalColumns = 0

    configColumns.forEach((item) => {
      initialNamesColumns.push(item["name"])
      initialAliasColumns.push(item["alias"] ? item["alias"] : item["name"])
      let size = sizeOfView?.width * (item["size"].split("%")[0] / 100)
      initialTotalColumns += size
      initialSizesColumns.push(parseInt(size.toFixed()))
      initialTypesColumns.push(item["type"])
    })

    setNamesColumns(initialNamesColumns)
    setSizesColumns(initialSizesColumns)
    setTotalColumns(initialTotalColumns)
    setTypesColumns(initialTypesColumns)
    setAliasColumns(initialAliasColumns)

    setIsReady(true)
  }

  const Cell = ({ item, size, type }) => {

    let dataAcima = null
    let dataAbaixo = null
    if (type == "date") {
      
      let date = new Date(item)
      
      let dia = date.getDate() > 9 ? date.getDate() : "0" + date.getDate()
      let mes = date.getMonth() > 8 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1)
      let ano = date.getFullYear()
      dataAcima = dia + "/" + mes + "/" + ano

      let hora = date.getHours() > 9 ? date.getHours() : "0" + date.getHours()
      let min  = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()
      let seg  = date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds()
      
      dataAbaixo = hora + ":" + min + ":" + seg
    }

    return (
      <View style={{ width: size }}>
        {
          type == "date" ?
            <>
              <Text
                style={{
                  textAlign: type == "numeric" ? "right" : "center",
                  marginRight: type == "numeric" ? 5 : 0,
                }}
              >{dataAcima}</Text>
              <Text
                numberOfLines={1}
                style={{
                  textAlign: type == "numeric" ? "right" : "center",
                  marginRight: type == "numeric" ? 5 : 0,
                }}
              >{dataAbaixo}</Text>
            </>
            :
            <Text
              numberOfLines={1}
              style={{
                textAlign: type == "numeric" ? "right" : "center",
                marginRight: type == "numeric" ? 5 : 0,
              }}
            >{item}</Text>
        }
      </View>
    )
  }

  const Row = ({ item, index }) => {

    const backgroundColor = configTable.zebraColors ? configTable.zebraColors[index % 2] : index % 2 ? 'lightgrey' : white

    return (
      <>
        {
          configTable?.selectable == true ?
            <TouchableOpacity
              style={{ height: 50, backgroundColor, width: totalColumns, flexDirection: 'row', alignItems: 'center' }} onPress={() => setSelected(item)}>
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
            :
            <View style={{ height: 50, backgroundColor, width: totalColumns, flexDirection: 'row', alignItems: 'center' }} onPress={() => setSelected(item)}>
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
            </View>
        }
      </>

    )
  }

  const Header = () => {
    return (
      <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row' }}>
          {
            aliasColumns.map((item, i) => {
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
                <Text style={[styles.titleText, { color: configTable.titleTextColor }]} >{title}</Text>
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
                alwaysBounceVertical={false}
                bounces={false}
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