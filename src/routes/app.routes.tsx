import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DeliveryTabScreens } from '../pages/deliveries';
import { Details } from '../pages/deliveries/Details';
import { Modal } from '../components/Modal';
import Finalize from '../pages/deliveries/Finalize';
// import Finalize from '../pages/deliveries/Finalize/index_purecomponent';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    mode="modal"
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: 'transparent' },
      cardOverlayEnabled: true,
      cardStyleInterpolator: ({ current: { progress } }) => ({
        cardStyle: {
          opacity: progress.interpolate({
            inputRange: [0, 0.5, 0.9, 1],
            outputRange: [0, 0.25, 0.7, 1],
          }),
        },
        overlayStyle: {
          opacity: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.8],
            extrapolate: 'clamp',
          }),
        },
      }),
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
    <App.Screen name="Deliveries" component={DeliveryTabScreens} />
    <App.Screen name="Modal" component={Modal} />

    <App.Screen
      options={{
        headerShown: true,
        title: 'Detalhes',
        headerTitleAlign: 'center',
      }}
      name="Details"
      component={Details}
    />
    <App.Screen
      options={{
        headerShown: true,
        title: 'Confirmar',
        headerTitleAlign: 'center',
      }}
      name="Finalize"
      component={Finalize}
    />
  </App.Navigator>
);

export default AppRoutes;
