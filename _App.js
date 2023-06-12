import * as React from 'react';
import { Pressable, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Emprestimos from './components/scr/Screens/Emprestimos';
import Leitores from './components/scr/Screens/Leitores';
import 'react-native-gesture-handler';
import Gerenciar from './components/scr/Screens/Leitores/Gerenciar';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      /> */}
    </DrawerContentScrollView>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation 
        /* initialRouteName="Leitores" */
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        {/* <Drawer.Screen name="Leitores" component={Leitores} /> */}
        <Drawer.Screen name="Gerenciar" component={Gerenciar} />
        <Drawer.Screen name="Emprestimos" component={Emprestimos} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
