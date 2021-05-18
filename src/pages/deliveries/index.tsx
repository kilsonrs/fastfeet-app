import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Dimensions, Text } from 'react-native';

import { Pending } from './Pending';
import { Completed } from './Completed';

const DeliveryTab = createBottomTabNavigator();

const DeliveryTabScreens: React.FC = () => {
  const screenWidth = Dimensions.get('screen').width;

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
            tabBarButton: tabParams => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigation.navigate(route.name);
                  }}
                  style={{
                    flex: 1,
                    width: screenWidth / 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: tabParams.accessibilityState.selected
                      ? '#fff'
                      : '#F7F5FA',
                    borderTopWidth: tabParams.accessibilityState.selected
                      ? 4
                      : 1,
                    borderTopColor: tabParams.accessibilityState.selected
                      ? '#FFC042'
                      : '#DAD7E0',
                  }}
                >
                  <Text
                    style={{
                      position: 'absolute',
                      fontFamily: 'Inter-Regular',
                      fontSize: 15,
                      color: tabParams.accessibilityState.selected
                        ? '#4C33CC'
                        : '#6F6C80',
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
            tabBarButton: tabParams => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigation.navigate(route.name);
                  }}
                  style={{
                    flex: 1,
                    width: screenWidth / 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: tabParams.accessibilityState.selected
                      ? '#fff'
                      : '#F7F5FA',
                    borderTopWidth: tabParams.accessibilityState.selected
                      ? 4
                      : 1,
                    borderTopColor: tabParams.accessibilityState.selected
                      ? '#FFC042'
                      : '#DAD7E0',
                  }}
                >
                  <Text
                    style={{
                      position: 'absolute',
                      fontFamily: 'Inter-Regular',
                      fontSize: 15,
                      color: tabParams.accessibilityState.selected
                        ? '#4C33CC'
                        : '#6F6C80',
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
