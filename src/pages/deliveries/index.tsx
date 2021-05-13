import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Dimensions, Text } from 'react-native';

import { Pending } from './Pending';
import { Completed } from './Completed';

const DeliveryTab = createBottomTabNavigator();

const DeliveryTabScreens: React.FC = () => {
  const screenWidth = Dimensions.get('screen').width;
  const [screen, setScreen] = useState('Pending');

  return (
    <DeliveryTab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        style: {
          height: 57,
        },
        tabStyle: {
          justifyContent: 'center',
        },
      }}
    >
      <DeliveryTab.Screen
        name="Pending"
        component={Pending}
        options={({ navigation, route }) => {
          return {
            tabBarButton: () => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigation.navigate(route.name);
                    setScreen(route.name);
                  }}
                  style={{
                    flex: 1,
                    width: screenWidth / 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopWidth: screen === 'Pending' ? 4 : 0,
                    borderTopColor: '#FFC042',
                  }}
                >
                  <Text
                    style={{
                      position: 'absolute',
                      fontFamily: 'Inter-Medium',
                      fontSize: 15,
                      color: screen === 'Pending' ? '#4C33CC' : '#6F6C80',
                    }}
                  >
                    Pendentes
                  </Text>
                </TouchableWithoutFeedback>
              );
            },
          };
        }}
      />
      <DeliveryTab.Screen
        name="Completed"
        component={Completed}
        options={({ navigation, route }) => {
          return {
            tabBarButton: () => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigation.navigate(route.name);
                    setScreen(route.name);
                  }}
                  style={{
                    flex: 1,
                    width: screenWidth / 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopWidth: screen === 'Completed' ? 4 : 0,
                    borderTopColor: '#FFC042',
                  }}
                >
                  <Text
                    style={{
                      position: 'absolute',
                      fontFamily: 'Inter-Medium',
                      fontSize: 15,
                      color: screen === 'Completed' ? '#4C33CC' : '#6F6C80',
                    }}
                  >
                    Feitas
                  </Text>
                </TouchableWithoutFeedback>
              );
            },
          };
        }}
      />
    </DeliveryTab.Navigator>
  );
};

export { DeliveryTabScreens };
