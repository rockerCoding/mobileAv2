import React, { useContext, useEffect, useState } from "react";
import { Dimensions, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TabelaProvider, { TabelaContext } from "./context/TabelaContext";
import Header from "./components/Header";
import Row from "./components/Row";

const calculateSizes = (keys, configColumns, data) => {
  let sizes = []
  let total = 0

  configColumns.map((config) => {
    let part = null
    if(config["size"] == "fit"){
      let chars = 0;
      data.map((item) => {
        chars = item[config["name"]].length > chars ? item[config["name"]].length : chars
      })

      if(chars == 0) chars = config["name"].length + 2

      part = chars * 9
      sizes.push(part)
      total += part
    } else {
      console.log('n fit')
      part = config["size"].split("%")[0] / 100
      sizes.push(Dimensions.get("screen").width * part)
      total += Dimensions.get("screen").width * part
    }
  })

  return [sizes, total]
}

var keys = null

const initalConfig = (data, configColumns) => {
  let keys = Object.keys(data[0])
  let [sizes, totalSize] = calculateSizes(keys, configColumns, data)
  let types = configColumns.map((item) => {
    return item["type"]
  })
  let names = configColumns.map((item) => {
    return item["name"]
  })

  

  return [keys, sizes, totalSize, types, names]

}

const Tabela = ({ data, title, stick, configColumns, setVariable }) => {

  const [refreshing, setRefreshing] = useState(false);
  const [isStickyHeader, setIsStickyHeader] = useState(stick ? 0 : -1);

  const { selectedId, setSelectedId, keys, setKeys, sizes, setSizes, totalSize, setTotalSize, oldData, setOldData, types, setTypes , names, setNames} = useContext(TabelaContext)

  useEffect(() => {
    setVariable(selectedId)
  }, [selectedId])
  

  useEffect(() => {
    if (data) {
      let [initalKeys, initalSizes, initialTotal, types, names] = initalConfig(data, configColumns)

      setKeys(initalKeys)
      setTotalSize(initialTotal)
      setSizes(initalSizes)
      setTypes(types)
      setNames(names)
    }

  }, [data])


  const renderItem = ({ item }) => {
    return (
      <Row item={item} configColumns={configColumns} setVariable={setVariable}/>
    );
  };

  const Separator = () => <View style={{height: 1, backgroundColor: 'lightgrey'}}></View>
  

  return (

    <SafeAreaView style={[styles.container, {flex: 1}]}>
      <View style={styles.topContainer}>
        <Text>{title} - {selectedId?.id}</Text>
      </View>
      <ScrollView horizontal>
        {
          keys &&
          <FlatList
            data={data}
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => {
                setRefreshing(false);
              }, 2000)
            }}
            renderItem={renderItem}
            keyExtractor={(i, index) => index}
            extraData={selectedId}
            stickyHeaderIndices={[0]}
            ListHeaderComponent={<Header keys={keys} />}
            style={{ width: totalSize, flex: 1 }}
            ItemSeparatorComponent={() => <Separator />}
          />
        }
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  topContainer: { 
    height: Dimensions.get("screen").height * ( 10 / 100),
    justifyContent: 'center', 
    alignItems: 'center' 
  }


});

export default Tabela;
