import * as React from 'react';
import { Pressable, View, Text, } from 'react-native';
import { TextInput } from 'react-native-paper';
import { styles } from './styles'

const Novo = () => {
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={text}
        mode="outlined"
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
};

export default Novo;
