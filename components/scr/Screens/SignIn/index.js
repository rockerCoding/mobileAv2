import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { ActivityIndicator, Snackbar, TextInput } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SignIn = ({setUser}) => {

  const navigation = useNavigation()

  const [login, setLogin] = useState("grocha")
  const [senha, setSenha] = useState("123456")
  const [isSecret, setIsSecret] = useState(true)
  const [isEnabled, setIsEnabled] = useState(false)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isDisable, setIsDisable] = useState(false)

  const handleError = () => setError(!error)

  const handleDisableField = () => {
    setIsLoading(!isLoading)
  }

  const checkLogin = (login, senha) => {
    let user = "grocha"
    let pass = "123456"
    
    setTimeout(() => {
      if(login == user && senha == pass){
        setUser(true)
      } else {
        setError(true)
      }
      setIsLoading(false)
    }, 3000);
  }

  const handleLogin = () => {
    setError(false)
    setIsLoading(true)
    checkLogin(login, senha)
  }

  return (
    <View style={styles.container}>

      <View style={styles.topContainer}>
        <Image
          source={require('../../../../assets/images/logoLeia.jpg')}
          style={styles.imageLogo}
        />
      </View>
      <View style={styles.bottomContainer}>

        <View style={styles.warningContainer}>
          {
            isLoading && <ActivityIndicator animating={true} color="lightblue" size={60} />
          }
          <Snackbar
            visible={error}
            onDismiss={handleError}
            duration={3000}
            style={{ backgroundColor: 'red' }}
            action={{
              label: 'X',
              onPress: () => {
                setError(false)
              },
            }}

          >
            Usuário ou senha incorretos
          </Snackbar>
        </View>
        <TextInput
          mode='outlined'
          label='Login'
          value={login}
          onChangeText={setLogin}
          outlineColor={error ? "red" : '#5290f2'}
          disabled={isLoading}
        />
        <TextInput
          outlineColor={error ? "red" : '#5290f2'}
          mode='outlined'
          label='Senha'
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={isSecret}
          disabled={isLoading}
          right={<TextInput.Icon icon="eye" onPress={() => setIsSecret(!isSecret)} />}
        />

        <TouchableOpacity 
          style={[styles.buttonContainer, {backgroundColor: isLoading ? "lightblue" : "#5290f2"}]} onPress={() => handleLogin()}
          disabled={isLoading}
        >
          <Ionicons name="ios-checkmark" size={24} color="white" />
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>


      </View>

    </View>
  )
}

export default SignIn