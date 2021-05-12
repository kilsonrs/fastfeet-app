import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../pages/auth/SignIn';
import { Forgot } from '../pages/auth/Forgot';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="Forgot" component={Forgot} />
  </Auth.Navigator>
);

export default AuthRoutes;
