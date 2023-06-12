import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Pressable, View, Text, Button, FlatList, SafeAreaView, /* Modal, */ StyleSheet, Dimensions } from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { useNavigation, useRoute, NavigationContainer } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import TesteTabela from "../../../util/TesteTabela";
import Detalhes from "./Detalhes";
import EmprestimosPorUsuario from "./EmprestimosPorUsuario";
import data from "./data";
import { FAB } from 'react-native-paper';

import { styles } from './styles'
import Novo from "./Novo";

const Stack = createStackNavigator();

const TabelaView = ({ dataShow, setDataShow, selected, setSelected }) => {

  const navigation = useNavigation()

  const saveUser = () => {
    let user = {
      id: 30,
      nome: 'bla',
      cpf: 'ble',
      email: 'bli'
    }
    setDataShow(dataShow => [...dataShow, user])
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <TesteTabela
        data={dataShow}
        title="Lista de leitores"
        zebra={true}
        setSelected={setSelected}
        selected={selected}
        configTable={{
          selectable: true,
          titleColor: 'blue',
          titleTextColor: 'whitesmoke',
          headerColor: 'blue',
          headerColorText: 'whitesmoke',
          zebraColors: ["lightcyan", "white"],
        }}
        configColumns={[
          {
            name: "id",
            size: "15%",
            type: "numeric"
          },
          {
            name: "nome",
            size: "40%",
            type: "text"
          },
          {
            name: "email",
            size: "40%",
            type: "text",
          },
          {
            name: "cpf",
            size: "40%",
            type: "text"
          }]}
      />
      <FAB
        icon="plus"
        style={{
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
        }}
        /* onPress={() => navigation.navigate("NovoUsuario")} */
        onPress={() => saveUser()}
      />
    </SafeAreaView>

  )
}

const Visualiza = ({data, setData}) => {
  console.log(data)
  let user = {
    id: 30,
    nome: 'bla',
    cpf: 'ble',
    email: 'bli'
  }

  const handleSave = (data, user, setData) => {
    let newData = []
    data.forEach((item) => {
      console.log(item)
      newData.push(item)
    })
    newData.push(user)
    setData(newData)
  }
  return (
    <View style={{flex: 1}}>
      <Text>Teste</Text>
      <Text>
        {/* {data.length} */}
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <View><Text>{item.id}</Text></View>}
        extraData={data}
      />
      {/* <Pressable onPress={() => setData(data => [...data, user])}> */}
      <Pressable onPress={() => handleSave(data, user, setData)}>
        <Text>add</Text>
      </Pressable>

    </View>
  )
}

const Leitores = () => {

  const navigation = useNavigation()

  const [selected, setSelected] = useState(null)
  const [dataShow, setDataShow] = useState(null)


  setTimeout(() => {
    setDataShow(data)
  }, 100);

  useEffect(() => {
    if (selected) navigation.navigate("Detalhes")
  }, [selected])


  return (

    <SafeAreaView style={styles.container}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Visualiza">
          {() => <Visualiza data={dataShow} setData={setDataShow} />}
        </Stack.Screen>
        <Stack.Screen name="Lista">
          {() => <TabelaView dataShow={dataShow} setDataShow={setDataShow} selected={selected} setSelected={setSelected} />}
        </Stack.Screen>
        <Stack.Screen name="Detalhes">
          {() => <Detalhes selected={selected} setSelected={setSelected} />}
        </Stack.Screen>
        <Stack.Screen name="EmprestimosPorUsuario" >
          {() => <EmprestimosPorUsuario selected={selected} />}
        </Stack.Screen>
        <Stack.Screen name="NovoUsuario">
          {() => <Novo data={dataShow} setData={setDataShow} />}
        </Stack.Screen>
      </Stack.Navigator>
    </SafeAreaView>

  );
};

export default Leitores;
