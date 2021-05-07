import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Pending } from './Pending';
import { History } from './History';

const DeliveryTab = createBottomTabNavigator();

const DeliveryTabScreens: React.FC = () => {
  return (
    <DeliveryTab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        style: { height: 54 },
        tabStyle: {
          justifyContent: 'center',
        },
        labelStyle: {
          fontFamily: 'Inter-Medium',
          fontSize: 15,
        },
      }}
    >
      <DeliveryTab.Screen name="Pendentes" component={Pending} />
      <DeliveryTab.Screen name="Feitas" component={History} />
    </DeliveryTab.Navigator>
  );
};

export { DeliveryTabScreens };
