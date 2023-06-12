import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Gerenciar from '../scr/Screens/Leitores/Gerenciar';
import Leitores from '../scr/Screens/Leitores';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} style={{ flex: 1 }}>
      <View style={styles.customContentViewContainer}>
        <SimpleLineIcons name="logout" size={24} color="black" style={styles.logoutButtonContainer} />
        <Ionicons name="md-person-circle-outline" size={200} color="black" />
        <Text>Bem vindo, Fulano</Text>
      </View>
      <DrawerItemList {...props} />

    </DrawerContentScrollView>
  );
}


const Home = () => {

  return (
    <NavigationContainer independent>
      <Drawer.Navigator
        initialRouteName="DashBoard"
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Usuários" component={Leitores} />
      </Drawer.Navigator>
    </NavigationContainer>

  )
}

export default Home

const styles = StyleSheet.create({
  sidebarContainer: {
    flex: 1
  },
  customContentViewContainer: {
    height: Dimensions.get("screen").height * 0.3,
    justifyContent: 'center', alignItems: 'center',

  },
  logoutButtonContainer: {
    position: 'absolute',
    top: 14, left: 15
  }
})