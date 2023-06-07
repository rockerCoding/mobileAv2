import { View, Text, TouchableOpacity, Dimensions, Pressable } from 'react-native'
import React, { useEffect, useRef, useState, memo, useLayoutEffect } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { styles } from './styles'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
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
  const [selectedColumn, setSelectedColumn] = useState(0)
  const scrollRef = useRef();

  useEffect(() => {
    data && setDataTable([...data])
  }, [data])

  useLayoutEffect(() => {
    constroiTabela(configColumns)
  }, [dataTable])

  useEffect(() => {
    console.log(selected)
  }, [selected])
  

  const constroiTabela = () => {
    console.log('construindo')
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
      console.log(total)
    }
  }

  const Header = () => {
    return (
      <View style={[styles.headerContainer, { backgroundColor: configTable?.headerColor ? configTable.headerColor : "white" }]}>
        {
          columns.map((item, index) => {
            return (
              <Pressable
                key={"column:" + item}
                onPress={(e) => onHeaderColumnTouch(e)}
                style={[
                  {
                    width: sizes[index],
                    borderRightWidth: index < keys.length - 1 ? 0.1 : 0,
                    borderRightColor: configTable?.headerColorText
                  },
                  styles.headerCellsContainer]}>
                <Text style={[styles.headerText, { color: configTable?.headerColorText }]}>{item}</Text>
              </Pressable>
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

    const handleSelected = (item) => {
      setSelected(item)
    }

    const backgroundColor = zebra ?
      index % 2 == 0 ? "lightblue" : "white" : "white"

    return (
      <TouchableOpacity
        onPress={() => handleSelected(item)}
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
        extraData={dataTable}
        ListHeaderComponent={<Header />}
        stickyHeaderIndices={[0]}
      />
    )
  }

  // animações de fade laterais
  const isCloseToEnd = ({ layoutMeasurement, contentOffset, contentSize }) => {
    return layoutMeasurement.width + contentOffset.x >= contentSize.width - 2;
  };

  const isCloseToBegin = ({ contentOffset }) => {
    return contentOffset.x < 20;
  };

  const hasReachTheBegin = useSharedValue(0)
  const hasReachTheEnd = useSharedValue(1)
  const animatedLeftContentStyles = useAnimatedStyle(() => { return { opacity: hasReachTheBegin.value } })
  const animatedRightContentStyles = useAnimatedStyle(() => { return { opacity: hasReachTheEnd.value } })

  const onHeaderColumnTouch = (event) => {
    console.log(event.pageX)
    console.log(event)
    scrollRef.current?.scrollTo({
      x: event.pageX /* + (event.nativeEvent.offsetX / 2) */,
      animated: true,
    });
  }

  function Rere({item}) {
    return (
      <TouchableOpacity onPress={() => setSelected(item)} style={{height: 70}}>
        <Text>{item["nome"]}</Text>
      </TouchableOpacity>

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
            <Animated.View
              style={[animatedLeftContentStyles, { width: 20, position: 'absolute', height: '100%', left: 0, zIndex: 2 }]}
            >
              <LinearGradient
                colors={['transparent', 'rgba(1,1,1,0.2)']}
                start={{ x: 10, y: 0 }}
                end={{ x: 0, y: 0 }}
                style={{ flex: 1 }}>
              </LinearGradient>
            </Animated.View>
            <ScrollView
              ref={scrollRef}
              horizontal
              onScroll={({ nativeEvent }) => {
                hasReachTheEnd.value = withTiming(isCloseToEnd(nativeEvent) ? 0 : 1)
                hasReachTheBegin.value = withTiming(isCloseToBegin(nativeEvent) ? 0 : 1)
              }}
              scrollEventThrottle={800}
            >
              <Tabela />
            </ScrollView>
            <Animated.View
              style={[animatedRightContentStyles, { width: 20, position: 'absolute', height: '100%', right: 0 }]}

            >
              <LinearGradient
                colors={['transparent', 'rgba(1,1,1,0.2)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0 }}
                style={{ flex: 1 }}>
              </LinearGradient>
            </Animated.View>
          </View>
      }

    </View >
  )
}

export default TabelaNew
