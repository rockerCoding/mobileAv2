import React, { useEffect, useLayoutEffect, useState } from "react";
import { Pressable, View, Text, Button, FlatList, SafeAreaView, Modal, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import data from '../data';
import Tabela from '../../../../util/Tabela'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Detalhes from "../Detalhes";
import TabelaNew from "../../../../util/Tabela/TabelaNew";
import TesteTabela from "../../../../util/TesteTabela";

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

  setTimeout(() => {
    setDataShow(data)
  }, 200);

  useEffect(() => {
    console.log(selected)
  }, [selected])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TesteTabela
        data={dataShow}
        title="Lista de leitores"
        zebra={true}
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
          }]}
      />
      <Modal
        animationType={'fade'}
        transparent={false}
        visible={selected ? true : false}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        {/*All views of Modal*/}
        {/*Animation can be slide, slide, none*/}
        <View style={styles.modal}>
          <Text style={styles.text}>Modal is open!</Text>
          <Button
            title="Click To Close Modal"
            onPress={() => {
              setSelected(null)
            }}
          />
        </View>
      </Modal>
      {/* <View style={styles.container}>

        
        <Button
          title="Click To Open Modal"
          onPress={() => {
            setShowModal(!showModal);
          }}
        />
      </View> */}
      {/* <TabelaNew
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
      /> */}
    </SafeAreaView>



  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 30,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00ff00',
    padding: 100,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});


export default Gerenciar;
