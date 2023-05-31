import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

var keys = null

const TD = ({ item }) => {
  return (
    <View>
      <Text>{item}</Text>
    </View>
  )
}

const TDS = ({ item }) => {


  return (
    <View style={{ flexDirection: 'row', height: 50 }}>
      {
        keys.map((i) => {
          return (
            <TD item={item[i]} key={i + item["id"]} />
          )
        })
      }
    </View>
  )

}

const Header = () => {
  return (
    <View style={{ paddingVertical: 30 }}>

      <View style={{ flexDirection: 'row' }}>
        {
          keys.map(i => {
            return (
              <View key={i}>
                <Text>{i}</Text>
              </View>
            )
          })
        }

      </View>
    </View>
  )
}

const Row = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.row, style]}>
    <TDS item={item} />
  </TouchableOpacity>
);


const Tabela = ({ data, title, stick }) => {
  keys = data ? Object.keys(data[0]) : null;
  const [selectedId, setSelectedId] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [isStickyHeader, setIsStickyHeader] = useState(stick ? 0 : -1);



  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "loghtblue" : "white";

    return (
      <Row
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  useEffect(() => {
    console.log(isStickyHeader)
  }, [isStickyHeader])


  return (

    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>{title}</Text>
      </View>
      {/* <ScrollView style={{ width: Dimensions.get("screen").width * 2 }} contentContainerStyle={{ width: Dimensions.get("screen").width * 2 }}  > */}
      <View style={{flex: 1}}>
        {
          data &&
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
          />
        }
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  row: {

  },
  title: {
    fontSize: 32,
  },
});

export default Tabela;
