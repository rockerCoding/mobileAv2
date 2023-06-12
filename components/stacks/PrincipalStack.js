import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../scr/Screens/SignIn';
import Home from './Home';

const PrincipalStack = () => {

  const [isLogged, setIsLogged] = useState(false)
  const Stack = createStackNavigator();

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
      {
        !isLogged ?
        <Stack.Screen name="Logado" component={Home}/> 
        :
        <Stack.Screen name="NaoLogado">
          {() => <SignIn setUser={setIsLogged}/>}
        </Stack.Screen>  
      }

      </Stack.Navigator>

    </NavigationContainer>
    
  )
}

export default PrincipalStack