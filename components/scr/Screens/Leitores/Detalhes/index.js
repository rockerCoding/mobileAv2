import { useState, useEffect, useContext } from 'react';
import { Pressable, View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

const Detalhes = ({ selected, setSelected }) => {

  const reset = () => {
    setNome('');
    setCPF('');
    setContato('');
  };

  const [isEditing, setIsEditing] = useState(false)

  const [nome, setNome] = useState(selected?.nome ? selected.nome : '');
  const [cpf, setCPF] = useState('');
  const [contato, setContato] = useState('');

  const [isValid, setIsValid] = useState(false);

  const handleChangeText = (text, setText) => {
    setText(text);
  };

  const handleSave = () => {
    reset();
  };

  useEffect(() => {
    const validar = () => {
      return nome.length < 1 ||
        cpf.length < 1 ||
        contato.length < 1
        ? false
        : true;
    };
    setIsValid(validar());
  }, [nome, cpf, contato]);

  const handleGoBack = () => {
    setSelected(null)
  }

  const handleEdit = () => {
    setIsEditing(!isEditing)
  }

  return (
    <View style={styles.container}>

      <View style={styles.topContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Detalhes</Text>
          <Pressable onPress={() => handleGoBack()} style={styles.closeButton}>
            <Ionicons name="close-outline" size={50} color="white" />
          </Pressable>
        </View>
        <TouchableOpacity >
          <Ionicons name="md-person-circle-outline" size={200} color="black" />
        </TouchableOpacity>


      </View>
      <View style={styles.middleContainer}>
        <TextInput
          label="CPF"
          value={cpf}
          mode="outlined"
          onChangeText={(text) => handleChangeText(text, setCPF)}
          required={true}
          disabled
        />
        <TextInput
          label="Nome"
          value={nome}
          mode="outlined"
          onChangeText={(text) => handleChangeText(text, setNome)}
          disabled={!isEditing}
        />
        <TextInput
          label="Contato"
          value={contato}
          mode="outlined"
          onChangeText={(text) => handleChangeText(text, setContato)}
          disabled={!isEditing}
        />
      </View>

      <View style={styles.bottomContainer}>
        {
          !isEditing ?
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleEdit()}
            >
              <Text style={styles.text}>
                Editar
              </Text>
            </TouchableOpacity> :
            <View style={styles.buttonsBottomContainer}>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: 'red'}]}
                onPress={() => handleEdit()}
              >
                <Text style={styles.text}>
                  Cancelar
                </Text>
              </TouchableOpacity><TouchableOpacity
                style={[styles.button, {backgroundColor: 'green'}]}
                onPress={() => handleEdit()}
              >
                <Text style={styles.text}>
                  Salvar
                </Text>
              </TouchableOpacity>
            </View>
        }


      </View>
    </View>
  );
};

export default Detalhes;
