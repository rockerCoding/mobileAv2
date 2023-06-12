import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Pressable, View, Text, Button, FlatList, SafeAreaView, /* Modal, */ StyleSheet, Dimensions } from 'react-native';
import data from '../data';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import TesteTabela from "../../../../util/TesteTabela";
import Detalhes from "../Detalhes";
import { useNavigation, useRoute, NavigationContainer } from "@react-navigation/native";
import EmprestimosPorUsuario from "../EmprestimosPorUsuario";
import { styles } from "./styles";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const TabelaView = ({ dataShow, selected, setSelected }) => {

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <TesteTabela
        data={dataShow}
        /* title="Lista de leitores" */
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

const Gerenciar = () => {

  const navigation = useNavigation()

  const [selected, setSelected] = useState(null)
  const [dataShow, setDataShow] = useState(null)

  setTimeout(() => {
    setDataShow(data)
  }, 200);

  useEffect(() => {
    if (selected) navigation.navigate("Detalhes")
  }, [selected])

  useEffect(() => {
    console.log(navigation.getParent())
  }, [navigation])
  


  const handleGoBack = () => {
    
    navigation.goBack()
  }

  const handleDetails = () => {
    navigation.navigate("EmprestimosPorUsuario")
  }

  const Header = ({ selected }) => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.leftHeaderContainer}>
          {
            selected &&
            <Pressable onPress={() => handleGoBack()} style={styles.closeButton}>
              <Ionicons name="chevron-back-sharp" size={40} color="black" />
            </Pressable>
          }
        </View>
        <View style={styles.middleHeaderContainer}>{ }</View>
        <View style={styles.rightHeaderContainer}>
          {
            selected &&
            <Pressable onPress={() => handleDetails()} style={styles.detailsButton}>
              <MaterialCommunityIcons name="card-account-details-outline" size={35} color="black" />
            </Pressable>
          }
        </View>
      </View>
    )
  }

  return (
    

      <SafeAreaView style={styles.container}>
        <Header selected={selected} />
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Lista">
            {
              () => (
                <TabelaView dataShow={dataShow} selected={selected} setSelected={setSelected} />
              )
            }
          </Stack.Screen>
          <Stack.Screen name="Detalhes">
            {
              () => (
                <Detalhes selected={selected} setSelected={setSelected} />
              )
            }
          </Stack.Screen>
          <Stack.Screen name="EmprestimosPorUsuario" >
            {
              () => (
                <EmprestimosPorUsuario selected={selected} />
              )
            }
          </Stack.Screen>

        </Stack.Navigator>
      </SafeAreaView>
    



  );
};

export default Gerenciar;
