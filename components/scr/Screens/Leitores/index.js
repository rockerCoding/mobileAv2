import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Gerenciar from './Gerenciar';
import Novo from './Novo';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Leitores = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Gerenciar"
        component={Gerenciar}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="list" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Novo"
        component={Novo}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="plus" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Leitores;
