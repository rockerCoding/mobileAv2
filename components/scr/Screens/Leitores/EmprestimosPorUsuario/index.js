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
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Pressable style={styles.leftHeaderContainer} onPress={() => handleGoBack()}>
          <Ionicons name="chevron-back" size={40} color="black" />
        </Pressable>
        <View style={styles.middleHeaderContainer}>
          <Text style={styles.titleText}>Empréstimos</Text>
        </View>
        <View style={styles.rightHeaderContainer} />
      </View>

      <View style={styles.innerContainer}>
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