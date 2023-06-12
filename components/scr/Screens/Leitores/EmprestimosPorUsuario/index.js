import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { data } from './data';
import TesteTabela from '../../../../util/TesteTabela';
import { styles } from './styles';

const EmprestimosPorUsuario = ({ selected }) => {

  const navigation = useNavigation()
  const [dataShow, setDataShow] = useState(null)

  const handleGoBack = () => {
    navigation.goBack()
  }

  setTimeout(() => {
    setDataShow(data)
  }, 100);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={styles.headerContainer}>
        <Pressable style={styles.leftHeaderContainer} onPress={() => handleGoBack()}>
          <Ionicons name="chevron-back" size={40} color="black" />
        </Pressable>
        <View style={styles.middleHeaderContainer}>
          <Text style={styles.titleText}>Detalhes</Text>
        </View>
        <View style={styles.rightHeaderContainer}>
          <Pressable style={styles.leftHeaderContainer} onPress={() => handleDetails()}>
            <MaterialCommunityIcons name="account-details-outline" size={40} color="black" />
          </Pressable>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <TesteTabela
          data={dataShow}
          configColumns={[
            {
              name: "id",
              alias: "idAlt",
              size: '20%',
              type: 'numeric'
            },
            {
              name: "bookId",
              size: '20%',
              type: 'numeric'
            },
            {
              name: "createdAt",
              alias: "Alugado",
              size: '40%',
              type: 'date'
            },
            {
              name: "endAt",
              alias: "Entrega",
              size: '40%',
              type: 'date'
            },
          ]}
          configTable={{
            seletable: true,
            titleColor: 'blue',
            titleTextColor: 'whitesmoke',
            headerColor: 'blue',
            headerColorText: 'whitesmoke',
            zebraColors: ["lightcyan", "white"],

          }}

        />
      </View>
    </View>
  )
}

export default EmprestimosPorUsuario