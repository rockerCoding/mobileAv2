import { useState, useEffect } from 'react';
import {
  Pressable,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { DataTable } from 'react-native-paper';

const Tabela = ({ data, title, id }) => {
  var keys = Object.keys(data[0]);

  const [isPressed, setIsPressed] = useState(false);

  return (
    <ScrollView>
      <View style={styles.topContainer}>
        <Text>{title}</Text>
      </View>
      <View>
        <DataTable>
          <DataTable.Header style={{ width: '100%' }}>
            {keys.map((item) => {
              return <DataTable.Title>{item}</DataTable.Title>;
            })}
          </DataTable.Header>
          {data.map((item) => {
            const Items = keys.map((i) => {
              return <DataTable.Cell>{item[i]}</DataTable.Cell>;
            });

            console.log(Items);

            return (
              <DataTable.Row onPress={(e) => console.log(e)}>
                {Items}
              </DataTable.Row>
            );
          })}
        </DataTable>
      </View>
      <View>
      
      </View>
    </ScrollView>
  );
};

export default Tabela;
