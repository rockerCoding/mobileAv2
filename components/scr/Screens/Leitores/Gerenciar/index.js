import React, { useEffect, useState } from "react";
import { Pressable, View, Text, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import data from '../data';
import Tabela from '../../../../util/Tabela'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Detalhes from "../Detalhes";
import TabelaNew from "../../../../util/Tabela/TabelaNew";

const Stack = createStackNavigator();

const TabelaOriginal = ({ dataShow, setVariable, selected }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ marginLeft: 50 }}>{selected?.id}</Text>
      <Tabela
        setVariable={setVariable}
        data={dataShow}
        title="Lista de Leitores cadastrados"
        stick={true}
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

  const [selected, setSelected] = useState(null)
  const [dataShow, setDataShow] = useState(null)

  const navigation = useNavigation()

  setTimeout(() => {
    setDataShow(data)
  }, 100);

  useEffect(() => {
    if (selected) navigation.navigate("Detalhes")
  }, [selected])


  return (
    <View style={{flex: 1}}>
      {/* <Text>Teste</Text>
      <Text>{selected?.id}</Text> */}
      <Stack.Navigator
        
        initialRouteName="TabelaNew"
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}>
        <Stack.Screen name="TabelaNew">
          {props => (
            <TabelaNew
              title="Lista de leitores"
              zebra={true}
              data={dataShow}
              setSelected={setSelected}
              selected={selected}
              configTable={{
                headerColor: 'blue',
                headerColorText: 'whitesmoke',
                zebraColors: ["lightblue", "yellow"],

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
                }
              ]}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Detalhes">
          {props => <Detalhes selected={selected} setSelected={setSelected} />}
        </Stack.Screen>
      </Stack.Navigator>
    </View>



  );
};

export default Gerenciar;
