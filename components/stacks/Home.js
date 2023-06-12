import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Gerenciar from '../scr/Screens/Leitores/Gerenciar';
import Leitores from '../scr/Screens/Leitores';

const DashBoard = () => {
  return (
    <View>
      <Text>adsasdasdasd</Text>
      <Text>adsasdasdasd</Text>
      <Text>adsasdasdasd</Text>
      <Text>adsasdasdasd</Text>
      <Text>adsasdasdasd</Text>
    </View>
  )
}

const Drawer = createDrawerNavigator();

const Home = () => {

  return (
    <NavigationContainer independent>
      <Drawer.Navigator initialRouteName="DashBoard">
        <Drawer.Screen name="Usuários" component={Leitores} />
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
    
  )
}

export default Home