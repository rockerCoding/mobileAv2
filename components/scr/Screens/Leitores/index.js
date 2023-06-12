import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Pressable, View, Text, Button, FlatList, SafeAreaView, /* Modal, */ StyleSheet, Dimensions } from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { useNavigation, useRoute, NavigationContainer } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import TesteTabela from "../../../util/TesteTabela";
import Detalhes from "./Detalhes";
import EmprestimosPorUsuario from "./EmprestimosPorUsuario";
import data from "./data";

import { styles } from './styles'

const Stack = createStackNavigator();

const TabelaView = ({ dataShow, selected, setSelected }) => {

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
    </SafeAreaView>

  )
}

const Leitores = () => {

  const navigation = useNavigation()

  const [selected, setSelected] = useState(null)
  const [dataShow, setDataShow] = useState(null)

  setTimeout(() => {
    setDataShow(data)
  }, 200);

  useEffect(() => {
    if (selected) navigation.navigate("Detalhes")
  }, [selected])

  return (

      <SafeAreaView style={styles.container}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Lista">
            {() => <TabelaView dataShow={dataShow} selected={selected} setSelected={setSelected} />}
          </Stack.Screen>
          <Stack.Screen name="Detalhes">
            {() => <Detalhes selected={selected} setSelected={setSelected} />}
          </Stack.Screen>
          <Stack.Screen name="EmprestimosPorUsuario" >
            {() => <EmprestimosPorUsuario selected={selected} />}
          </Stack.Screen>
        </Stack.Navigator>
      </SafeAreaView>

  );
};

export default Leitores;
