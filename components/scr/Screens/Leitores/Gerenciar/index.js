import React, { useEffect, useState } from "react";
import { Pressable, View, Text, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import data from '../data';
import Tabela from '../../../../util/Tabela'

const Gerenciar = () => {

  const [selected, setSelected] = React.useState(null)
  const [dataShow, setDataShow] = useState(null)
 
  setTimeout(() => {
    setDataShow(data)
  }, 100);
  
  useEffect(() => {
    console.log(dataShow)
  }, [dataShow])
  

  return (
    <View style={{flex: 1}}>
      {/* <FlatList 
        data={data}
        extraData={selected}
        renderItem={({item}) => <Pressable onPress={() => setSelected(item)}><Text>{item.id}</Text></Pressable>}
      /> */}
    <Tabela 
        data={dataShow} 
        title="Lista de Leitores cadastrados" 
        stick={true}
        configColumns={[
          {
            size: "15%",
            type: "numeric"
          }, 
          {
            size: "40%",
            type: "text"
          },
          {
            size: "40%",
            type: "text",
          },
          {
            size: "40%",
            type: "text"
          }
        ]}
        columnSizes={{
          id: '10%',
          nome: '40%',
          cpf: '40%',
          email: '40%'
        }}
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
        selected={setSelected}
        
      /> 
      
    </View>
  );
};

export default Gerenciar;
