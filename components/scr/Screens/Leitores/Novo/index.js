import { useState, useEffect } from 'react';
import { Pressable, View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

const Novo = () => {
  const reset = () => {
    setNome('');
    setEndereco('');
    setCPF('');
    setContato('');
  };

  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
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
        endereco.length < 1 ||
        contato.length < 1
        ? false
        : true;
    };
    setIsValid(validar());
  }, [nome, cpf, endereco, contato]);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
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
        />
        <TextInput
          label="Nome"
          value={nome}
          mode="outlined"
          onChangeText={(text) => handleChangeText(text, setNome)}
        />
        <TextInput
          label="Endereco"
          value={endereco}
          mode="outlined"
          onChangeText={(endereco) => handleChangeText(endereco, setEndereco)}
        />
        <TextInput
          label="Contato"
          value={contato}
          mode="outlined"
          onChangeText={(text) => handleChangeText(text, setContato)}
        />
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={isValid ? styles.button : styles.buttonValid}
          onPress={() => handleSave()}
          disabled={!isValid}>
          <Text style={styles.text}>
            {isValid ? 'Gravar usuário' : 'Preencha o formulário'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Novo;
