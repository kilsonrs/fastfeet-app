import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DeliveryTabScreens } from '../pages/delivery';
import { Details } from '../pages/delivery/Details';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      headerStyle: {
        elevation: 0,
        backgroundColor: '#4C33CC',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'RobotoCondensed-Bold',
        fontSize: 32,
      },
    }}
  >
    <App.Screen name="Entregas" component={DeliveryTabScreens} />
    <App.Screen
      options={{
        headerShown: true,
        title: 'Detalhes',
        headerTitleAlign: 'center',
      }}
      name="Details"
      component={Details}
    />
  </App.Navigator>
);

export default AppRoutes;
