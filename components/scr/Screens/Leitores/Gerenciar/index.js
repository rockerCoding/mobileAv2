import React, { useEffect, useState } from "react";
import { Pressable, View, Text, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import data from '../data';
import Tabela from '../../../../util/Tabela'
import { createStackNavigator } from '@react-navigation/stack';
import Detalhes from "../Detalhes";

const Stack = createStackNavigator();


const TabelaOriginal = ({ dataShow, setVariable }) => {
  return (
    <View style={{ flex: 1 }}>
      <Tabela
        setVariable={setVariable}
        data={dataShow}
        title="Lista de Leitores cadastrados"
        stick={true}
        configColumns={[
          {
            name: "id",
            size: "fit",
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
          }
        ]}

        zebra={true}
        menus={{
          details: {
            name: "Visualizar perfil",
            action: "visualizarPerfil()"
          },
          deletar: {
            name: "Apagar Usuário",
            action: "deleteUser()"
          }
        }}


      />

    </View>
  )
}

const Gerenciar = () => {

  const [selected, setSelected] = React.useState(null)
  const [dataShow, setDataShow] = useState(null)

  setTimeout(() => {
    setDataShow(data)
  }, 100);  

  return (
    <Stack.Navigator
      initialRouteName="Tabelas"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Tabelas">
        {props => (<TabelaOriginal dataShow={dataShow} variable={selected} setVariable={setSelected}/>)}
      </Stack.Screen>
      <Stack.Screen name="Detalhes">
        {props => <Detalhes selected={selected} setSelected={setSelected}/>}
      </Stack.Screen> 
    </Stack.Navigator>

  );
};

export default Gerenciar;
