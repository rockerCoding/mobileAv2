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
import PrincipalStack from './components/stacks/PrincipalStack';

/* const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
     
    </DrawerContentScrollView>
  );
} */

const App = () => {
  return (
    <PrincipalStack />
  );
};

export default App;
