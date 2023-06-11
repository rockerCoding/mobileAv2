import React, { useEffect, useLayoutEffect, useState } from "react";
import { Pressable, View, Text, Button, FlatList, SafeAreaView, /* Modal, */ StyleSheet } from 'react-native';
import data from '../data';
import Tabela from '../../../../util/Tabela'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import TesteTabela from "../../../../util/TesteTabela";
import Modal from "react-native-modal";
import { TouchableOpacity } from "react-native-gesture-handler";
import Detalhes from "../Detalhes";

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

  /* useEffect(() => {
    console.log(selected)
  }, [selected]) */

  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <TesteTabela
        data={dataShow}
        title="Lista de leitores"
        zebra={true}
        setSelected={setSelected}
        selected={selected}
        configTable={{
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
      <Modal
        isVisible={selected ? true : false}
        animationIn={'slideInLeft'}
        animationOut={'slideOutRight'}
        useNativeDriver
      >
        <Detalhes selected={selected} setSelected={setSelected}/>
      </Modal>
      {/* <Modal
        isVisible={selected ? true : false}
        backdropColor={'rgba(1,1,1,0.2)'}
        backdropOpacity={1}
        animationIn={'zoomInDown'}
        animationOut={'zoomOutUp'}
        animationInTiming={1000}
        animationOutTiming={1000}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1000}

      >
        <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
          <View style={{ flex: 1, backgroundColor: 'whitesmoke', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <TouchableOpacity onPress={() => setSelected(null)} style={{position: 'absolute', left: 0}}>
              Voltar
            </TouchableOpacity>
            
          </View>
          <View style={{ flex: 4 }}>



          </View>
        </View>
      </Modal> */}

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
    backgroundColor: 'rgba(1,1,1,0.1)',
    marginTop: 30,
  },
  modal: {
    flex: 1,
    margin: 50,
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
