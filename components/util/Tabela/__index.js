import { useState, useEffect } from 'react';
import {
  FlatList,
  Pressable,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { styles } from './styles';
import TabelaProvider, { TabelaContext } from './context/TabelaContext';


const calculateSizes = (keys, configColumns) => {
  let sizes = []
  let total = 0

  configColumns.map((config) => {
    let part = config["size"].split("%")[0] / 100
    sizes.push(Dimensions.get("screen").width * part)
    total += Dimensions.get("screen").width * part
  })

  return [sizes, total]
}

const Tabela = ({ data, title, id, stick, configColumns, zebra }) => {

  const [sele, setSele] = useState(null)

  var keys = Object.keys(data[0]);

  let [sizes, totalSize] = calculateSizes(keys, configColumns)
  const [isStickyHeader, setIsStickyHeader] = useState(stick ? 0 : -1);

  let datalist = []
  const [selected, setSelected] = useState(null)

  const Row = ({ item, indice }) => {

    const [isPressed, setIsPressed] = useState(false);

    const handleRowLongPress = (item) => {
      var selectedItem = selected
      console.log(selectedItem)
      console.log(selected)

      if (item.id == selectedItem) {
        setSelected({ selected: null })
      } else {
        setSelected({ selected: item.id })
      }
    }


    const rowColor = zebra ? (indice % 2 == 0 ? "lightgrey" : "white") : "white"

    let trs = keys.map((i, index) => {
      return (
        <TD item={item[i]} key={"tr" + index} indice={index} />
      )
    })


    return (
      <TouchableOpacity
        style={{ width: '100%', flex: 1, flexDirection: 'row', backgroundColor: isPressed ? 'lightblue' : rowColor }}
        key={"tr" + item.id}
        onLongPress={() => handleRowLongPress(item)}


      >
        {/* {trs} */}
        <Text>a</Text>
      </TouchableOpacity>
    )
  }

  const TH = ({ item, indice }) => {


    return (
      <View style={[{ width: sizes[indice] }, styles.th]}>
        <Text style={styles.thText}>{item.toUpperCase()}</Text>
      </View>
    )
  }

  const TD = ({ item, indice }) => {
    let textAlign = configColumns[indice]["type"] == "numeric" ? "right" : "center"

    return (
      <View style={[{ width: sizes[indice], height: 50 }, styles.td]}>
        <Text style={[{ textAlign: textAlign }]}>{item}</Text>
      </View>
    )
  }

  const Header = ({ keys }) => {

    return (
      <ScrollView
        horizontal
        style={{ width: totalSize }}
        contentContainerStyle={{ width: totalSize, backgroundColor: 'white', height: 50 }}
        showsHorizontalScrollIndicator={false}

      >

        {
          keys.map((item, i) => {
            return (
              <TH item={item} key={"td" + i} indice={i} />
            )
          })
        }
      </ScrollView>
    )
  }

  const TabelaHome = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={[styles.topContainer, { width: '100%' }]}>
          <Text style={styles.titleText}>{title} - {console.log(selected)}</Text>
        </View>
        <FlatList
          data={data}
          extraData={selected}
          renderItem={({ item, index }) => <Row item={item} indice={index} />}
          
          keyExtractor={(item, index) => 'row' + index}
          stickyHeaderIndices={[isStickyHeader]}
          ListHeaderComponent={<Header keys={keys} />}
          style={{ flex: 1, width: totalSize }}
          contentContainerStyle={{ width: totalSize }}


        />
        <ScrollView horizontal>
        </ScrollView>
        {/* <View>

        </View> */}
      </View>
    )
  }

  return (
    <TabelaProvider>
      <TabelaHome />

    </TabelaProvider>
  );
};

export default Tabela;
