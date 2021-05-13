import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../pages/auth/SignIn';
import { Forgot } from '../pages/auth/Forgot';
import { Modal } from '../components/Modal';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
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
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="Modal" component={Modal} />
    <Auth.Screen name="Forgot" component={Forgot} />
  </Auth.Navigator>
);

export default AuthRoutes;
