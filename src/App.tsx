import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { makeServer } from './fake-server';
import Routes from './routes';
import AppProvider from './hooks';

makeServer();

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#4C33CC" />
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: '#4C33CC' }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
