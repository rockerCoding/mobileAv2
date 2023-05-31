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

  return (
    <View style={{flex: 1}}>
    <Tabela 
        data={dataShow} 
        title="Lista de Leitores cadastrados" 
        stick={true}
        configColumns={[
          {
            name: "id",
            size: "10%",
            type: "numeric"
          }, 
          {
            name: "nome",
            size: "40%",
            type: "text"
          },
          {
            name: "email",
            size: "39%",
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
  );
};

export default Gerenciar;
